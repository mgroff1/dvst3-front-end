var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  canvas2 = document.getElementById("canvas2"),
  ctx2 = canvas2.getContext("2d"),
  width2 = innerWidth * 2,
  height2 = innerHeight * 2,
  width = 128,
  height = 170,
  size = width * height,
  ripple1 = [],
  ripple2 = [],
  roll,
  i,
  texture;
var level = Math.floor;
var myImg = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2324306/path.jpg";

function closest(x, min, max) {
  if (x < min) return min;
  if (x > max) return max - 1;
  return x;
}

function grabData(img) {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.beginPath();
  ctx.save();
  ctx.drawImage(img, 0, 0, width, height);
  ctx.scale(0.06, 0.06);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.restore();
  ctx.closePath();
  return ctx.getImageData(0, 0, width, height);
}

function animating() {
  requestAnimationFrame(animating);
  var img = ctx.getImageData(0, 0, width, height),
    data = img.data,
    i,
    x;
  for (i = width + 1; i < size - width - 1; i += 2) {
    for (x = 1; x < width - 1; x++, i++) {
      ripple1[i] =
        (ripple1[i] +
          ripple1[i + 1] +
          ripple1[i - 1] +
          ripple1[i - width] +
          ripple1[i + width]) /
        5;
    }
  }

  for (i = width + 1; i < size - width - 1; i += 2) {
    for (x = 1; x < width - 1; x++, i++) {
      var wake =
        (ripple1[i - 1] +
          ripple1[i + 1] +
          ripple1[i + width] +
          ripple1[i - width]) /
          2 -
        ripple2[i];
      ripple2[i] = wake;
      var ti =
        i +
        level((ripple2[i - 2] - wake) / 1.001) +
        level((ripple2[i - width] - wake) * 0.08) * width;
      ti = ti < 0 ? 0 : ti > size ? size : ti;
      var light = wake * 2.0 - ripple2[i - 2] * 0.6,
        i4 = i * 4,
        ti4 = ti * 4;
      light = light < -10 ? -10 : light > 100 ? 100 : light;
      data[i4] = texture.data[ti4] + light;
      data[i4 + 1] = texture.data[ti4 + 1] + light;
      data[i4 + 2] = texture.data[ti4 + 2] + light;
    }
  }

  turbulance(
    level(Math.random() * width2),
    level(Math.random() * height2),
    Math.random() * 50000
  );
  roll = ripple1;
  ripple1 = ripple2;
  ripple2 = roll;
  ctx.beginPath();
  ctx.save();
  //    ctx.scale(1.5,1.5);
  ctx.putImageData(img, 0, 0);
  ctx.restore();
  ctx.closePath();
  transferImage();
}

for (i = 0; i < size; i++) {
  ripple1.push(0);
  ripple2.push(0);
}

function transferImage() {
  ctx2.beginPath();
  ctx2.save();
  ctx2.scale(0.11, 0.07);
  ctx2.drawImage(canvas, 0, 0, width2, height2 + 800);
  ctx2.restore();
  ctx2.closePath();
}

function storeImage(src, callback) {
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function() {
    callback(img);
  };
  img.src = src;
}

storeImage(myImg, function(img) {
  texture = grabData(img);
  canvas.width = width;
  canvas.height = height;
  ctx.fillRect(0, 0, width2, height2);
  animating();
});

function turbulance(x, y, z) {
  if (x < 2 || x > width - 2 || y < 1 || y > height - 2) return;
  var i = x + y * width;
  ripple1[i] += z;
  ripple1[i - 1] -= z;
}
canvas2.onmousemove = function(e) {
  turbulance(level(e.clientX =x+200), level(e.clientY = y+200), 1000);
};
