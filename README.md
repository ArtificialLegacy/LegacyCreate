# LegacyCreate
A game engine type library for javascript.

## Getting Started

#### Importing library
```javascript
import Engine from './legacycreate.js';

const Game = new Engine();
```
* Make sure your pointing the directory to the correct folder ^

#### Creating a world
```javascript
const World_1 = Game.createWorld(world1);
```
* Game.createWorld(); returns the world object. This library doesn't keep track of your objects

#### Creating a world layer
```javascript
const Layer_1 = Game.createLayer(layer1);
```
* Layers are used for rendering order and physics ordering

#### Creating an object template
```javascript
const Object_1 = Game.createObject(object1, undefined, false, true, undefined);
```
* The above code creates a background object
* Syntax: createObject(name, parent, hasPhysics, isVisible, sprite);
* name: the internal name of the object
* parent: optional param for the parent object
* hasPhysics: boolean
* isVisible: if the object is rendered
* sprite: the sprite for the object

#### Create an instance
```javascript
const Instance_1 = Game.createInstance(instance1, Object_1, 100, 100, 50, 50);
```
* This creates an instance of Object_1 at (100, 100) with a size of (50, 50)

#### Add Instance to layer
```javascript
Layer_1.addInstance(Instance_1);
```
* This pushes an object into the layer

#### Add layer to world
```javascript
World_1.addLayer(Layer_1);
```
* This pushes a new layer to the world. The new layer will always be at the end
