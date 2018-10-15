class Instance {
  constructor(tempX, tempY, tempWidth, tempHeight, tempName){
    this.name = tempName;
    this.position = {
      "x": tempX,
      "y": tempY,
    };
    this.shape = {
      "width": tempWidth,
      "height": tempHeight,
      "vertexes": {
        "top-left": {
          "x": tempX,
          "y": tempY,
        },
        "top-right": {
          "x": tempX+tempWidth,
          "y": tempY,
        },
        "bottom-left": {
          "x": tempX,
          "y": tempY+tempHeight,
        },
        "bottom-right": {
          "x": tempX+tempWidth,
          "y": tempY+tempHeight,
        },
      },
    };
  }
}
