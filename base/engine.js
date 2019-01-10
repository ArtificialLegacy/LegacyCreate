//import Renderer from './renderer.js';
//import Physics from './physics.js';

import Instance from './instances.js';
import Layer from './layers.js';
import World from './worlds.js';
import Objects from './objects.js';

class Engine {
  constructor(){
    this.objects = {};
  }
  createInstance(tempID, tempTemplate, tempX, tempY, tempWidth, tempHeight){
    return new Instance(tempID, tempTemplate, tempX, tempY, tempWidth, tempHeight);
  }
  createLayer(tempName){
    return new Layer(tempName);
  }
  createWorld(tempName){
    return new World(tempName);
  }
  createObject(tempName, tempParent=undefined, tempHasPhysics, tempIsVisable, tempSprite=undefined){
    this.objects[tempName] = new Objects(tempName, tempParent, tempHasPhysics, tempIsVisable, tempSprite);
    return new Objects(tempName, tempParent, tempHasPhysics, tempIsVisable, tempSprite);
  }
}

export default Engine;
