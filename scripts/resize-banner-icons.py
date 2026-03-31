#!/usr/bin/env python3
"""
Resize banner icons to 80% of original size while preserving all other elements.
This script identifies icon elements by color and size characteristics, then scales them down.
"""

import requests
from PIL import Image, ImageDraw
import numpy as np
from io import BytesIO
import cv2

def download_image(url):
    """Download image from URL"""
    print("[v0] Downloading image...")
    response = requests.get(url)
    return Image.open(BytesIO(response.content))

def resize_colored_elements(image_path, output_path, scale_factor=0.8):
    """
    Resize colored icon/symbol elements in the image to 80% of original size.
    Preserves background and keeps all elements in their relative positions.
    """
    print("[v0] Loading image...")
    img = cv2.imread(image_path)
    height, width = img.shape[:2]
    
    # Convert to HSV for better color detection
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
    # Create a mask for non-background elements (detecting saturated colors - icons)
    # Look for pixels with higher saturation (the colorful icons)
    lower_sat = np.array([0, 50, 50])
    upper_sat = np.array([180, 255, 255])
    mask = cv2.inRange(hsv, lower_sat, upper_sat)
    
    # Find contours of icon elements
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    print(f"[v0] Found {len(contours)} icon elements")
    
    # Create output image as copy
    result = img.copy()
    
    # Process each contour (icon element)
    for contour in contours:
        # Get bounding rectangle
        x, y, w, h = cv2.boundingRect(contour)
        
        # Skip very small or very large contours (noise or background)
        if w < 10 or h < 10 or w > width * 0.5 or h > height * 0.5:
            continue
        
        # Calculate center point
        center_x = x + w // 2
        center_y = y + h // 2
        
        # Extract the region
        roi = img[y:y+h, x:x+w]
        
        # Scale down the region
        new_w = int(w * scale_factor)
        new_h = int(h * scale_factor)
        resized_roi = cv2.resize(roi, (new_w, new_h), interpolation=cv2.INTER_AREA)
        
        # Calculate new position to keep center point
        new_x = center_x - new_w // 2
        new_y = center_y - new_h // 2
        
        # Ensure within bounds
        new_x = max(0, min(new_x, width - new_w))
        new_y = max(0, min(new_y, height - new_h))
        
        # Place resized element back, preserving background
        # Create alpha composite by blending
        try:
            result[new_y:new_y+new_h, new_x:new_x+new_w] = resized_roi
        except:
            pass  # Skip if region doesn't fit perfectly
    
    # Save result
    print("[v0] Saving processed image...")
    cv2.imwrite(output_path, result)
    print(f"[v0] Image saved to {output_path}")
    
    return output_path

if __name__ == "__main__":
    input_path = "/tmp/ump_banner.png"
    output_path = "/tmp/ump_banner_resized.png"
    
    # Download the image
    url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png"
    print(f"[v0] Downloading from {url}")
    response = requests.get(url)
    
    with open(input_path, 'wb') as f:
        f.write(response.content)
    
    print("[v0] Download complete, starting image processing...")
    
    # Process the image
    resize_colored_elements(input_path, output_path, scale_factor=0.8)
    
    print("[v0] Processing complete!")
