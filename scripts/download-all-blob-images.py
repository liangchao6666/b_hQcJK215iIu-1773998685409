#!/usr/bin/env python3
"""
Scans all app/components/lib source files for hebbkx1anhila5yf blob URLs,
downloads every unique image to public/images/blob/, then rewrites the source
files so every occurrence of the blob URL is replaced with the local path.
"""

import os
import re
import urllib.request
import urllib.parse
import hashlib

import subprocess

PROJECT_ROOT = "/vercel/share/v0-project"
print(f"[v0] PROJECT_ROOT = {PROJECT_ROOT}")
print(f"[v0] exists: {os.path.exists(PROJECT_ROOT)}")
try:
    print(f"[v0] ls: {os.listdir(PROJECT_ROOT)[:20]}")
except Exception as e:
    print(f"[v0] ls error: {e}")
comp_dir = os.path.join(PROJECT_ROOT, "components")
print(f"[v0] components exists: {os.path.exists(comp_dir)}")
if os.path.exists(comp_dir):
    print(f"[v0] components ls: {os.listdir(comp_dir)[:10]}")
PUBLIC_DIR   = os.path.join(PROJECT_ROOT, "public", "images", "blob")
LOCAL_PREFIX = "/images/blob"

SCAN_DIRS = [
    os.path.join(PROJECT_ROOT, "components"),
    os.path.join(PROJECT_ROOT, "app"),
    os.path.join(PROJECT_ROOT, "lib"),
]
EXTENSIONS = (".tsx", ".ts", ".jsx", ".js")

BLOB_RE = re.compile(
    r'https://hebbkx1anhila5yf\.public\.blob\.vercel-storage\.com/[^\s"\'\`>)]+',
    re.IGNORECASE,
)

os.makedirs(PUBLIC_DIR, exist_ok=True)

# ── Step 1: collect all source files ───────────────────────────────────────
source_files = []
for scan_dir in SCAN_DIRS:
    for root, _, files in os.walk(scan_dir):
        for fname in files:
            if fname.endswith(EXTENSIONS):
                source_files.append(os.path.join(root, fname))

print(f"[v0] Scanning {len(source_files)} source files …")

# ── Step 2: extract every unique blob URL ──────────────────────────────────
url_to_local: dict[str, str] = {}

for fpath in source_files:
    with open(fpath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()
    for url in BLOB_RE.findall(content):
        if url not in url_to_local:
            # derive a stable filename from the URL
            parsed_path = urllib.parse.urlparse(url).path          # /filename-hash.ext
            raw_name    = urllib.parse.unquote(parsed_path.lstrip("/"))
            # keep only the last path segment (the blob filename)
            raw_name    = raw_name.split("/")[-1]
            # sanitise: replace spaces and special chars with underscores
            safe_name   = re.sub(r"[^\w.\-]", "_", raw_name)[:120]
            # ensure uniqueness with a short hash of the full URL
            short_hash  = hashlib.md5(url.encode()).hexdigest()[:8]
            # preserve extension
            base, ext   = os.path.splitext(safe_name)
            if not ext:
                ext = ".png"
            final_name  = f"{base[:80]}_{short_hash}{ext}"
            url_to_local[url] = f"{LOCAL_PREFIX}/{final_name}"

print(f"[v0] Found {len(url_to_local)} unique blob URLs to download")

# ── Step 3: download every image ───────────────────────────────────────────
headers = {"User-Agent": "Mozilla/5.0"}
success = 0
failed  = []

for url, local_path in url_to_local.items():
    dest = os.path.join(PROJECT_ROOT, "public", local_path.lstrip("/"))
    if os.path.exists(dest):
        print(f"[v0] SKIP (exists)  {local_path}")
        success += 1
        continue
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        with open(dest, "wb") as f:
            f.write(data)
        print(f"[v0] OK   {local_path}  ({len(data)//1024} KB)")
        success += 1
    except Exception as e:
        print(f"[v0] FAIL {url}  — {e}")
        failed.append(url)

print(f"\n[v0] Download complete: {success} ok, {len(failed)} failed")

# ── Step 4: rewrite source files ───────────────────────────────────────────
files_changed = 0

for fpath in source_files:
    with open(fpath, "r", encoding="utf-8", errors="replace") as f:
        original = f.read()

    updated = original
    for url, local_path in url_to_local.items():
        if url in updated:
            updated = updated.replace(url, local_path)

    if updated != original:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(updated)
        rel = os.path.relpath(fpath, PROJECT_ROOT)
        print(f"[v0] REWRITE  {rel}")
        files_changed += 1

print(f"\n[v0] Rewrote {files_changed} source files")
if failed:
    print(f"[v0] WARNING: {len(failed)} URLs could not be downloaded:")
    for u in failed:
        print(f"       {u}")
