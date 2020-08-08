checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
    console.log('License suspended');
  else
    console.log('Points', points);
}

//my implementation
/* function checkSpeed(speed) {
  let speedLimit = 70;
  let point = 0;// use constant as first choice
  if (speed < speedLimit) {
    console.log("OK");//use return here can help get rid of else block
  } else {
    point += Math.floor((speed - speedLimit) / 5);// 5 is a magic number, should avoid it
    if (point >= 12) {
      console.log("License suspended");
    } else console.log("Point:" + point);
  }
}

checkSpeed(90); */