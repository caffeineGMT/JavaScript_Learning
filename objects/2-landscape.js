console.log(isLandscape(300, 600));

function isLandscape(width, height) {
  return (width > height);
}

/* //my implementation

function isLandscape(width, height) {
  return width > height ? true : false //return true or false is not necessary
}
const message = isLandscape(3, 3);
console.log(message); */