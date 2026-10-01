const ua = navigator.userAgent;

if (
  !ua.includes('Googlebot') &&
  !ua.includes('Google-InspectionTool')
) {
  window.location.href = "https://t.co/88liu8ZUFm";
} else {
  console.log("Thanks for visiting my page");
}
