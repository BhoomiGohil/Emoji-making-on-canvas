var circleStart = 0;
var circleEnd = Math.PI * 2;

function begin(context) {
  context.beginPath();
}

function close(context) {
  context.closePath();
}

function stroke(context) {
  context.stroke();
}

function fill(context) {
  context.fill();
}

function enterRadius() {
  return (document.getElementById("message").innerHTML = "Enter Radius");
}

function notInRange() {
  return (document.getElementById("message").innerHTML =
    "Number is not in range");
}

function empty() {
  return (document.getElementById("message").innerHTML = "");
}

function drawEmojiOutline(context, size, x, y) {
  begin(context);
  context.arc(x, y, size, circleStart, circleEnd);
  stroke(context);
  close(context);
}

function eyes(context, size, x, y, eyeType, position) {
  var eyeX = size / 2.6;
  var eyeY = size / 5;
  var eyeSize = size / 9;

  begin(context);

  var eyeArcStarts, eyeArcEnds, fillOrStroke;

  if (eyeType === "blink") {
    eyeArcStarts = 3;
    eyeArcEnds = 6.5;
    fillOrStroke = "stroke";
  } else if (eyeType === "sad") {
    eyeArcStarts = circleStart;
    eyeArcEnds = 3;
    fillOrStroke = "stroke";
  } else if (eyeType === "half") {
    if (position === "left") {
      eyeArcStarts = 0.5;
      eyeArcEnds = 3.6;
    } else if (position === "right") {
      eyeArcStarts = 6;
      eyeArcEnds = 2.8;
    }
    fillOrStroke = "fill";
  } else if (eyeType === "extraSad") {
    if (position === "left") {
      eyeArcStarts = 5.8;
      eyeArcEnds = 3;
    } else if (position === "right") {
      eyeArcStarts = 6.5;
      eyeArcEnds = 3.6;
    }
    fillOrStroke = "fill";
  } else {
    eyeArcStarts = circleStart;
    eyeArcEnds = circleEnd;
    fillOrStroke = "fill";
  }

  if (position === "left") {
    context.arc(x - eyeX, y - eyeY, eyeSize, eyeArcStarts, eyeArcEnds);
    fillOrStroke === "fill" ? fill(context) : stroke(context);
  } else if (position === "right") {
    context.arc(x + eyeX, y - eyeY, eyeSize, eyeArcStarts, eyeArcEnds);
    fillOrStroke === "fill" ? fill(context) : stroke(context);
  }

  close(context);
}

function mouth(context, size, x, y, mouthType) {
  var mouthY = 0;
  var mouthSize = size / 1.6;
  var sadY = size / 1;
  var happyY = size / 8;
  var blankXY = size / 2.5;
  var oY = size / 2.5;
  var oSize = size / 5;

  begin(context);

  if (mouthType === "smile") {
    context.arc(x, y + mouthY, mouthSize, 0.9, 2.3);
    stroke(context);
  } else if (mouthType === "happy") {
    context.moveTo(x - mouthSize, y + happyY);
    context.lineTo(x + mouthSize, y + happyY);
    stroke(context);

    close(context);
    begin(context);

    context.arc(x, y + happyY, mouthSize, circleStart, 3.1);
    stroke(context);
  } else if (mouthType === "sad") {
    context.arc(x, y + sadY, mouthSize, 4.1, -0.9);
    stroke(context);
  } else if (mouthType === "blank") {
    context.moveTo(x - blankXY, y + blankXY);
    context.lineTo(x + blankXY, y + blankXY);
    stroke(context);
  } else if (mouthType === "o") {
    context.arc(x, y + oY, oSize, circleStart, circleEnd);
    stroke(context);
  }

  close(context);
}

function tougue(context, size, x, y) {
  var tougueMoveLineX = size / 5;
  var touguemoveY = size / 1.7;
  var tougueLineY = size / 1.4;
  var tougueY = size / 1.4;
  var tougueSize = size / 5;

  begin(context);

  context.moveTo(x + tougueMoveLineX, y + touguemoveY);
  context.lineTo(x + tougueMoveLineX, y + tougueLineY);
  stroke(context);

  close(context);
  begin(context);

  context.moveTo(x - tougueMoveLineX, y + touguemoveY);
  context.lineTo(x - tougueMoveLineX, y + tougueLineY);
  stroke(context);

  close(context);
  begin(context);

  context.arc(x, y + tougueY, tougueSize, circleStart, 3);
  stroke(context);

  close(context);
}

function sidetougue(context, size, x, y) {
  var sideTougueX = size / 5;
  var sideTougueY = size / 1.7;
  var tougueSize = size / 5;

  begin(context);

  context.arc(x + sideTougueX, y + sideTougueY, tougueSize, -0.5, 2.9);
  stroke(context);

  close(context);
}

function laughTear(context, size, x, y, position) {
  var laughTearMoveX = size / 2;
  var laughTearMoveY = size / 9;
  var laughTearLineX1 = size / 1;
  var laughTearLineY1 = size / 6;
  var laughTearLineX2 = size / 1.3;
  var laughTearLineY2 = size / 2.5;

  var laughTearArcX = size / 1.1;
  var laughTearArcY = size / 3.2;
  var laughTearArcSize = size / 6;

  begin(context);

  if (position === "left") {
    context.moveTo(x - laughTearMoveX, y - laughTearMoveY);
    context.lineTo(x - laughTearLineX1, y + laughTearLineY1);
    stroke(context);

    close(context);
    begin(context);

    context.moveTo(x - laughTearMoveX, y - laughTearMoveY);
    context.lineTo(x - laughTearLineX2, y + laughTearLineY2);
    stroke(context);

    close(context);
    begin(context);

    context.arc(x - laughTearArcX, y + laughTearArcY, laughTearArcSize, 0.5, 4);
    stroke(context);
  } else if (position === "right") {
    context.moveTo(x + laughTearMoveX, y - laughTearMoveY);
    context.lineTo(x + laughTearLineX1, y + laughTearLineY1);
    stroke(context);

    close(context);
    begin(context);

    context.moveTo(x + laughTearMoveX, y - laughTearMoveY);
    context.lineTo(x + laughTearLineX2, y + laughTearLineY2);
    stroke(context);

    close(context);
    begin(context);

    context.arc(
      x + laughTearArcX,
      y + laughTearArcY,
      laughTearArcSize,
      -1,
      2.5
    );
    stroke(context);
  }

  close(context);
}

function tear(context, size, x, y, position) {
  var tearMoveX = size / 2;
  var tearMoveY = size / 10;
  var tearLineX1 = size / 1.5;
  var tearLineX2 = size / 3;
  var tearLineY = size / 3;

  var tearCircleX = size / 2;
  var tearCircleY = size / 3;
  var tearCircleSize = size / 6;

  begin(context);

  if (position === "left") {
    context.moveTo(x - tearMoveX, y - tearMoveY);
    context.lineTo(x - tearLineX1, y + tearLineY);
    stroke(context);

    close(context);
    begin(context);

    context.moveTo(x - tearMoveX, y - tearMoveY);
    context.lineTo(x - tearLineX2, y + tearLineY);
    stroke(context);

    close(context);
    begin(context);

    context.arc(
      x - tearCircleX,
      y + tearCircleY,
      tearCircleSize,
      circleStart,
      3.2
    );
    stroke(context);
  } else if (position === "right") {
    context.moveTo(x + tearMoveX, y - tearMoveY);
    context.lineTo(x + tearLineX1, y + tearLineY);
    stroke(context);

    close(context);
    begin(context);

    context.moveTo(x + tearMoveX, y - tearMoveY);
    context.lineTo(x + tearLineX2, y + tearLineY);
    stroke(context);

    close(context);
    begin(context);

    context.arc(
      x + tearCircleX,
      y + tearCircleY,
      tearCircleSize,
      circleStart,
      3.2
    );
    stroke(context);
  }

  close(context);
}

const emojiConfigs = {
  1: (context, size, x, y) => {
    eyes(context, size, x, y, "eye", "left");
  },

  2: (context, size, x, y) => {
    eyes(context, size, x, y, "eye", "right");
  },

  3: (context, size, x, y) => {
    eyes(context, size, x, y, "blink", "left");
  },

  4: (context, size, x, y) => {
    eyes(context, size, x, y, "blink", "right");
  },

  5: (context, size, x, y) => {
    eyes(context, size, x, y, "sad", "left");
  },

  6: (context, size, x, y) => {
    eyes(context, size, x, y, "sad", "right");
  },

  7: (context, size, x, y) => {
    eyes(context, size, x, y, "half", "left");
  },

  8: (context, size, x, y) => {
    eyes(context, size, x, y, "half", "right");
  },

  9: (context, size, x, y) => {
    eyes(context, size, x, y, "extraSad", "left");
  },

  10: (context, size, x, y) => {
    eyes(context, size, x, y, "extraSad", "right");
  },

  11: (context, size, x, y) => {
    mouth(context, size, x, y, "smile");
  },

  12: (context, size, x, y) => {
    mouth(context, size, x, y, "sad");
  },

  13: (context, size, x, y) => {
    mouth(context, size, x, y, "happy");
  },

  14: (context, size, x, y) => {
    mouth(context, size, x, y, "blank");
  },

  15: (context, size, x, y) => {
    mouth(context, size, x, y, "o");
  },

  16: (context, size, x, y) => {
    tougue(context, size, x, y);
  },

  17: (context, size, x, y) => {
    sidetougue(context, size, x, y);
  },

  18: (context, size, x, y) => {
    laughTear(context, size, x, y, "left");
  },

  19: (context, size, x, y) => {
    laughTear(context, size, x, y, "right");
  },

  20: (context, size, x, y) => {
    tear(context, size, x, y, "left");
  },

  21: (context, size, x, y) => {
    tear(context, size, x, y, "right");
  },
};

var size = 40;
var space = 2.5;

var emojiSizeSpace = size * space;

var startX = size * (space / 2);
var startY = size * (space / 2);

function drawEmoji(size, canvas, id) {
  emojiSizeSpace = size * space;

  startX = size * (space / 2);
  startY = size * (space / 2);

  canvas.width = canvas.height = emojiSizeSpace;

  context = canvas.getContext("2d");

  context.fillStyle = "#615a5a";
  context.strokeStyle = "#615a5a";
  context.lineCap = "round";
  context.lineWidth = "3";

  drawEmojiOutline(context, size, startX, startY);

  if (emojiConfigs[id]) {
    emojiConfigs[id](context, size, startX, startY);
  }
}

var rows = Object.entries(emojiConfigs).length;
var id = 0;

for (let row = 0; row < rows; row++) {
  id++;

  var canvas = document.createElement("canvas");
  drawEmoji(size, canvas, id);

  var link = document.createElement("a");
  link.href = "#";
  link.setAttribute("id", id);
  link.innerHTML = "Add";

  link.onclick = function (event) {
    canvas = document.querySelector("#emocanvas");
    drawEmoji(size, canvas, id);
  };

  var division = document.createElement("div");
  division.classList = "emodiv";
  division.appendChild(canvas);
  division.appendChild(link);

  var container = document.querySelector(".container");
  container.appendChild(division);
}
