class Layer {
  constructor(tempName){
    this.name = tempName;
    this.instances = [];
  }
  addInstance(tempObject, tempDebug = false){
    this.instances.push(tempObject);
    if(tempDebug) console.log(`Added object ${tempObject.name} to layer position ${this.instances.length-1}.`);
    return this.instances.length-1;
  }
  removeInstance(tempID){
    delete this.instances[tempID];
  }
  popInstance(tempID){
    object = this.instances[tempID];
    this.instances.splice(tempID, 1);
    this.instances.unshift(object);
    return 0;
  }
}

export default Layer;
