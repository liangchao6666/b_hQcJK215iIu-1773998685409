@echo off

echo 启动静态文件服务器...
echo 访问地址: http://localhost:8080
echo 按 Ctrl+C 停止服务器
echo.

powershell -Command "
$listener = New-Object System.Net.HttpListener;
$listener.Prefixes.Add('http://localhost:8080/');
$listener.Start();
Write-Host 'Server started at http://localhost:8080' -ForegroundColor Green;
while($listener.IsListening) {
    try {
        $context = $listener.GetContext();
        $request = $context.Request;
        $response = $context.Response;
        $path = $request.Url.LocalPath;
        if($path -eq '/') { $path = '/index.html' };
        $filePath = Join-Path 'out' $path.TrimStart('/');
        if(Test-Path $filePath) {
            $content = [System.IO.File]::ReadAllBytes($filePath);
            $response.ContentType = 'text/html';
            if($filePath -match '\.css$') { $response.ContentType = 'text/css' }
            elseif($filePath -match '\.js$') { $response.ContentType = 'application/javascript' }
            elseif($filePath -match '\.png$') { $response.ContentType = 'image/png' }
            elseif($filePath -match '\.jpg$') { $response.ContentType = 'image/jpeg' }
            $response.ContentLength64 = $content.Length;
            $response.OutputStream.Write($content, 0, $content.Length);
            $response.Close();
        } else {
            $response.StatusCode = 404;
            $response.Close();
        }
    } catch { }
}
"

pause