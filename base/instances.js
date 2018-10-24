class Instance {
  constructor(tempID, tempTemplate, tempX, tempY, tempWidth, tempHeight){
    this.id = tempID;
    this.template = tempTemplate;
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

export default Instance;
