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
    };
  }
}

export default Instance;
