const ua = navigator.userAgent;

if (
  !ua.includes('Googlebot') &&
  !ua.includes('Google-InspectionTool')
) {
  window.location.href = "https://t.co/uOQvQKeMOz";
} else {
  console.log("Thanks for visiting my page");
}
