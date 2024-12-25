const circleStart = 0,
  circleEnd = Math.PI * 2;

const draw = (context, fn) => {
  context[fn]();
};

const drawEmojiOutline = (context, size, x, y) => {
  draw(context, "beginPath");
  context.arc(x, y, size, circleStart, circleEnd);
  draw(context, "stroke");
  draw(context, "closePath");
};

function eyes(context, size, x, y, eyeType, position) {
  const eyeX = size / 2.6,
    eyeY = size / 5,
    eyeSize = size / 9;

  let eyeArcStarts, eyeArcEnds, fillOrStroke;

  if (eyeType === "blink") {
    [eyeArcStarts, eyeArcEnds, fillOrStroke] = [3, 6.5, "stroke"];
  } else if (eyeType === "sad") {
    [eyeArcStarts, eyeArcEnds, fillOrStroke] = [circleStart, 3, "stroke"];
  } else if (eyeType === "half") {
    [eyeArcStarts, eyeArcEnds] = position === "left" ? [0.5, 3.6] : [6, 2.8];
    fillOrStroke = "fill";
  } else if (eyeType === "extraSad") {
    [eyeArcStarts, eyeArcEnds] = position === "left" ? [5.8, 3] : [6.5, 3.6];
    fillOrStroke = "fill";
  } else {
    [eyeArcStarts, eyeArcEnds, fillOrStroke] = [circleStart, circleEnd, "fill"];
  }

  draw(context, "beginPath");
  context.arc(
    x + (position === "left" ? -eyeX : eyeX),
    y - eyeY,
    eyeSize,
    eyeArcStarts,
    eyeArcEnds
  );
  draw(context, fillOrStroke);
  draw(context, "closePath");
}

function mouth(context, size, x, y, mouthType) {
  var mouthSize = size / 1.6,
    sadY = size / 1,
    happyY = size / 8,
    blankXY = size / 2.5,
    oY = size / 2.5,
    oSize = size / 5;

  draw(context, "beginPath");

  if (mouthType === "smile") {
    context.arc(x, y, mouthSize, 0.9, 2.3);
    draw(context, "stroke");
  } else if (mouthType === "happy") {
    context.moveTo(x - mouthSize, y + happyY);
    context.lineTo(x + mouthSize, y + happyY);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.arc(x, y + happyY, mouthSize, circleStart, 3.1);
    draw(context, "stroke");
  } else if (mouthType === "sad") {
    context.arc(x, y + sadY, mouthSize, 4.1, -0.9);
    draw(context, "stroke");
  } else if (mouthType === "blank") {
    context.moveTo(x - blankXY, y + blankXY);
    context.lineTo(x + blankXY, y + blankXY);
    draw(context, "stroke");
  } else if (mouthType === "o") {
    context.arc(x, y + oY, oSize, circleStart, circleEnd);
    draw(context, "stroke");
  }

  draw(context, "closePath");
}

function drawTougue(context, size, x, y, type) {
  var tougueMoveLineX = size / 5,
    touguemoveY = size / 1.7,
    tougueLineY = size / 1.4,
    tougueY = size / 1.4,
    tougueSize = size / 5;

  if (type === "straight") {
    // Draw straight tongue
    draw(context, "beginPath");

    context.moveTo(x + tougueMoveLineX, y + touguemoveY);
    context.lineTo(x + tougueMoveLineX, y + tougueLineY);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.moveTo(x - tougueMoveLineX, y + touguemoveY);
    context.lineTo(x - tougueMoveLineX, y + tougueLineY);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.arc(x, y + tougueY, tougueSize, circleStart, 3);
    draw(context, "stroke");

    draw(context, "closePath");
  } else if (type === "side") {
    // Draw side tongue
    var sideTougueX = size / 5;
    var sideTougueY = size / 1.7;

    draw(context, "beginPath");

    context.arc(x + sideTougueX, y + sideTougueY, tougueSize, -0.5, 2.9);
    draw(context, "stroke");

    draw(context, "closePath");
  } else {
    console.error("Invalid type specified: " + type);
  }
}

function laughTear(context, size, x, y, position) {
  var laughTearMoveX = size / 2,
    laughTearMoveY = size / 9,
    laughTearLineX1 = size / 1,
    laughTearLineY1 = size / 6,
    laughTearLineX2 = size / 1.3,
    laughTearLineY2 = size / 2.5,
    laughTearArcX = size / 1.1,
    laughTearArcY = size / 3.2,
    laughTearArcSize = size / 6;

  draw(context, "beginPath");

  if (position === "left") {
    context.moveTo(x - laughTearMoveX, y - laughTearMoveY);
    context.lineTo(x - laughTearLineX1, y + laughTearLineY1);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.moveTo(x - laughTearMoveX, y - laughTearMoveY);
    context.lineTo(x - laughTearLineX2, y + laughTearLineY2);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.arc(x - laughTearArcX, y + laughTearArcY, laughTearArcSize, 0.5, 4);
    draw(context, "stroke");
  } else if (position === "right") {
    context.moveTo(x + laughTearMoveX, y - laughTearMoveY);
    context.lineTo(x + laughTearLineX1, y + laughTearLineY1);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.moveTo(x + laughTearMoveX, y - laughTearMoveY);
    context.lineTo(x + laughTearLineX2, y + laughTearLineY2);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.arc(
      x + laughTearArcX,
      y + laughTearArcY,
      laughTearArcSize,
      -1,
      2.5
    );
    draw(context, "stroke");
  }

  draw(context, "closePath");
}

function tear(context, size, x, y, position) {
  var tearMoveX = size / 2,
    tearMoveY = size / 10,
    tearLineX1 = size / 1.5,
    tearLineX2 = size / 3,
    tearLineY = size / 3,
    tearCircleX = size / 2,
    tearCircleY = size / 3,
    tearCircleSize = size / 6;

  draw(context, "beginPath");

  if (position === "left") {
    context.moveTo(x - tearMoveX, y - tearMoveY);
    context.lineTo(x - tearLineX1, y + tearLineY);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.moveTo(x - tearMoveX, y - tearMoveY);
    context.lineTo(x - tearLineX2, y + tearLineY);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.arc(
      x - tearCircleX,
      y + tearCircleY,
      tearCircleSize,
      circleStart,
      3.2
    );
    draw(context, "stroke");
  } else if (position === "right") {
    context.moveTo(x + tearMoveX, y - tearMoveY);
    context.lineTo(x + tearLineX1, y + tearLineY);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.moveTo(x + tearMoveX, y - tearMoveY);
    context.lineTo(x + tearLineX2, y + tearLineY);
    draw(context, "stroke");

    draw(context, "closePath");
    draw(context, "beginPath");

    context.arc(
      x + tearCircleX,
      y + tearCircleY,
      tearCircleSize,
      circleStart,
      3.2
    );
    draw(context, "stroke");
  }

  draw(context, "closePath");
}

const emojiData = {
  face: {
    id: null,
    configs: [(context, size, x, y) => drawEmojiOutline(context, size, x, y)],
  },
  leftEye: {
    id: null,
    configs: [
      (context, size, x, y) => eyes(context, size, x, y, "eye", "left"),
      (context, size, x, y) => eyes(context, size, x, y, "blink", "left"),
      (context, size, x, y) => eyes(context, size, x, y, "sad", "left"),
      (context, size, x, y) => eyes(context, size, x, y, "half", "left"),
      (context, size, x, y) => eyes(context, size, x, y, "extraSad", "left"),
    ],
  },
  rightEye: {
    id: null,
    configs: [
      (context, size, x, y) => eyes(context, size, x, y, "eye", "right"),
      (context, size, x, y) => eyes(context, size, x, y, "blink", "right"),
      (context, size, x, y) => eyes(context, size, x, y, "sad", "right"),
      (context, size, x, y) => eyes(context, size, x, y, "half", "right"),
      (context, size, x, y) => eyes(context, size, x, y, "extraSad", "right"),
    ],
  },
  mouth: {
    id: null,
    configs: [
      (context, size, x, y) => mouth(context, size, x, y, "smile"),
      (context, size, x, y) => mouth(context, size, x, y, "sad"),
      (context, size, x, y) => mouth(context, size, x, y, "happy"),
      (context, size, x, y) => mouth(context, size, x, y, "blank"),
      (context, size, x, y) => mouth(context, size, x, y, "o"),
    ],
  },
  tougue: {
    id: null,
    configs: [
      (context, size, x, y) => drawTougue(context, size, x, y, "straight"),
      (context, size, x, y) => drawTougue(context, size, x, y, "side"),
    ],
  },
  leftLaughTear: {
    id: null,
    configs: [(context, size, x, y) => laughTear(context, size, x, y, "left")],
  },
  rightLaughTear: {
    id: null,
    configs: [(context, size, x, y) => laughTear(context, size, x, y, "right")],
  },
  leftTear: {
    id: null,
    configs: [(context, size, x, y) => tear(context, size, x, y, "left")],
  },
  rightTear: {
    id: null,
    configs: [(context, size, x, y) => tear(context, size, x, y, "right")],
  },
};

var size = 40;
var space = 2.5;

var emojiSizeSpace = size * space;

var startX = size * (space / 2);
var startY = size * (space / 2);

function drawEmoji(size, canvas, id, type, storeIds) {
  emojiSizeSpace = size * space;

  startX = size * (space / 2);
  startY = size * (space / 2);

  canvas.width = canvas.height = emojiSizeSpace;

  context = canvas.getContext("2d");

  context.fillStyle = "#615a5a";
  context.strokeStyle = "#615a5a";
  context.lineCap = "round";
  context.lineWidth = "3";

  if (storeIds) {
    emojiData[type].id = id;
    getContentIdsAndDraw(context, size, startX, startY);
  } else if (emojiData[type] && emojiData[type].configs[id]) {
    emojiData[type].configs[id](context, size, startX, startY);
  }
}

function getContentIdsAndDraw(context, size, startX, startY) {
  Object.entries(emojiData).forEach(([type, emojiData]) => {
    if (emojiData.id !== null) {
      let id = emojiData.id;
      emojiData.configs[id](context, size, startX, startY);
    }
  });
}

var canvasDisplay = document.querySelector("#canvasdisplay");

function callFeatures(emojiList, type) {
  const totalRows = emojiList.length;

  for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
    // Create and configure the canvas for the emoji
    const emojiCanvas = document.createElement("canvas");
    emojiCanvas.setAttribute("type", type);

    drawEmoji(size, emojiCanvas, rowIndex, type, false);

    // Create a clickable link for adding the emoji
    const addLink = document.createElement("a");
    addLink.href = "#";
    addLink.setAttribute("id", rowIndex);
    addLink.setAttribute("type", type);
    addLink.textContent = "Add";

    addLink.onclick = function (event) {
      const clickedId = parseInt(event.target.id, 10);
      const clickedType = event.target.type;

      emojiSize = 150;

      const mainCanvas = document.querySelector("#canvas");
      canvasDisplay.appendChild(mainCanvas);

      drawEmoji(emojiSize, mainCanvas, clickedId, clickedType, true);
    };

    // Create a container for the emoji and the link
    const emojiContainer = document.createElement("div");
    emojiContainer.classList.add("emojiDivision");

    emojiContainer.appendChild(emojiCanvas);
    emojiContainer.appendChild(addLink);

    // Append the container to the appropriate section
    const containerElement = document.querySelector(`#${type}-container`);
    containerElement.appendChild(emojiContainer);
  }
}

// Dynamically call `callFeatures` for each emoji configuration
Object.entries(emojiData).forEach(([type, emojiData]) => {
  callFeatures(emojiData.configs, type);
});
