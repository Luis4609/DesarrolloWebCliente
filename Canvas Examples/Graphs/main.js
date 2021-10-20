var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;

var ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}
function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
}
