class Buttton {
  constructor(tempX, tempY, tempWidth, tempHeight, tempFunction){
    this.function = tempFunction;
    this.positions = {
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
        }
      },
    };
  }
  check(tempX, tempY){
    if(tempX >= this.shape.vertexes.top-left.x && tempX <= this.shape.vertexes.top-right.x){
      if(tempY >= this.shape.vertexes.top-left.y && tempY <= this.shape.vertexes.bottom-left.y){
        this.function();
      }
    }
  }
}

export default Button;
