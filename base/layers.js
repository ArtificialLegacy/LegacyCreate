class Layer {
  constructor(tempName){
    this.name = tempName;
    this.instances = [];
  }
  add(tempObject, tempDebug = false){
    this.instances.push(tempObject);
    if(tempDebug == false) console.log(`Added object ${tempObject.name} to layer position ${this.instances.length-1}.`);
  }
  remove(tempID){
    delete this.instances[tempID];
  }
  pop(tempID){
    object = this.instances[tempID];
    delete this.instances[tempID];
    this.instances.unshift(object);
  }
}

export default Layer;
