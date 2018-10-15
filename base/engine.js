import Renderer from './renderer.js';
import Physics from './physics.js';

import Instance from './instances.js';
import Layer from './layers.js';
import World from './worlds.js';

class Engine {
  constructor(){
    
  }
  createInstant(tempX, tempY, tempWidth, tempHeight, tempName){
    return new Instance(tempX, tempY, tempWidth, tempHeight, tempName);
  }
  createLayer(tempName){
    return new Layer(tempName);
  }
  createWorld(tempName){
    return new World(tempName);
  }
}

export default Engine;
