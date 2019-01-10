class World {
  constructor(tempName){
    this.name = tempName;
    this.layers = [];
  }
  addLayer(tempLayer, tempDebug = false){
    this.instances.push(tempLayer);
    if(tempDebug) console.log(`Added layer${tempLayer.name} to layer position ${this.layers.length-1}.`);
  }
  removeLayer(tempID){
    delete this.layers[tempID];
  }
  popLayer(tempID){
    object = this.layers[tempID];
    delete this.layers[tempID];
    this.layers.unshift(object);
  }
}

export default World;
