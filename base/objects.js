class Objects {
  constructor(tempName, tempParent=false, tempHasPhysics, tempIsVisable, tempSprite=null){
    this.name = tempName;
    this.parent = tempParent;
    this.hasPhysics = tempHasPhysics;
    this.isVisable = tempIsVisable;
    this.sprite = tempSprite;
    this.instances = [];
  }
}

export default Objects;
