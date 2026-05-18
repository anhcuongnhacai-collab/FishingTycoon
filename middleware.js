import { NextResponse } from 'next/server';

export function middleware(req) {
  // Đổi thành 'true' khi muốn BẢO TRÌ, đổi thành 'false' khi muốn WEB CHẠY LẠI
  const isInMaintenanceMode = true; 

  if (isInMaintenanceMode) {
    // Chuyển hướng hoặc trả về giao diện bảo trì
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <title>Website Đang Bảo Trì</title>
        <style>
          body { text-align: center; padding: 150px; font-family: sans-serif; background: #f4f4f4; }
          h1 { font-size: 50px; color: #333; }
          p { font-size: 20px; color: #666; }
        </style>
      </head>
      <body>
        <h1>Hệ thống đang bảo trì</h1>
        <p>Chúng tôi đang nâng cấp hệ thống để mang lại trải nghiệm tốt hơn. Xin lỗi vì sự bất tiện này!</p>
      </body>
      </html>
      `,
      {
        status: 503, // Đảm bảo chuẩn SEO để Google biết web chỉ tạm đóng cửa
        headers: { 'content-type': 'text/html; charset=utf-8' },
      }
    );
  }

  return NextResponse.next();
}

// Cấu hình để middleware áp dụng cho TẤT CẢ các trang
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};