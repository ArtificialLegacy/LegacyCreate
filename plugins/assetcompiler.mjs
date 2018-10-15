// Requires p5.js
var assets = [];
async function compileAssets(tempAssets=[], tempCallback=()=>{}){
  for(i=0; i<tempAssets.length; i++){
    assets.push(loadImage(tempAssets[i]));
  }
}
