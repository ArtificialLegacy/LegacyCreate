class World {
  constructor(tempName){
    this.name = tempName;
    this.layers = [];
  }
  addLayer(tempLayer, tempDebug = false){
    this.layers.push(tempLayer);
    if(tempDebug) console.log(`Added layer ${tempLayer.name} to layer position ${this.layers.length-1}.`);
    return this.layers.length-1;
  }
  removeLayer(tempID){
    delete this.layers[tempID];
  }
  popLayer(tempID){
    object = this.layers[tempID];
    this.layers.splice(tempID, 1);
    this.layers.unshift(object);
  }
  updateLayer(tempID, tempLayer){
    this.layers[tempID] = tempLayer;
  }
}

export default World;
