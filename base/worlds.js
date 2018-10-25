class World {
  constructor(tempName){
    this.name = tempName;
    this.layers = [];
  }
  add(tempLayer, tempDebug = false){
    this.instances.push(tempLayer);
    if(tempDebug) console.log(`Added layer${tempLayer.name} to layer position ${this.layers.length-1}.`);
  }
  remove(tempID){
    delete this.layers[tempID];
  }
  pop(tempID){
    object = this.layers[tempID];
    delete this.layers[tempID];
    this.layers.unshift(object);
  }
}

export default World;
