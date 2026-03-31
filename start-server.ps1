$ErrorActionPreference = "SilentlyContinue"

# Create HTTP listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:3000/')
$listener.Start()

Write-Host "Server started at http://localhost:3000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Content type mapping
$contentTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css" = "text/css; charset=utf-8"
    ".js" = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png" = "image/png"
    ".jpg" = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg" = "image/svg+xml"
    ".ico" = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf" = "font/ttf"
}

try {
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            # Get request path
            $path = $request.Url.LocalPath
            
            # Default to index.html
            if ($path -eq '/' -or $path -eq '') {
                $path = '/index.html'
            }
            
            # Construct file path
            $relativePath = $path.TrimStart('/')
            $filePath = Join-Path 'out' $relativePath
            
            # Check if file exists
            if (Test-Path $filePath) {
                # Read file content
                $content = [System.IO.File]::ReadAllBytes($filePath)
                
                # Get file extension and content type
                $extension = [System.IO.Path]::GetExtension($filePath)
                $contentType = "text/html"
                
                if ($contentTypes.ContainsKey($extension)) {
                    $contentType = $contentTypes[$extension]
                }
                
                # Set response headers
                $response.ContentType = $contentType
                $response.ContentLength64 = $content.Length
                $response.StatusCode = 200
                
                # Write response content
                $response.OutputStream.Write($content, 0, $content.Length)
            } else {
                $response.StatusCode = 404
            }
            
            $response.Close()
        } catch {
            # Ignore errors, continue processing next request
        }
    }
} finally {
    $listener.Stop()
    $listener.Close()
    Write-Host "Server stopped" -ForegroundColor Red
}