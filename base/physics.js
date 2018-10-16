async function checkColl(tempObject1, tempObject2){
  let x1 = tempObject2.position.x;
  let y1 = tempObject2.position.y;
  let w1 = tempObject2.shape.width;
  let h1 = tempObject2.shape.height;
  let x2 = tempObject2.position.x;
  let y2 = tempObject2.position.y;
  let w2 = tempObject2.shape.width;
  let h2 = tempObject2.shape.height;
  
  if(x1 >= x2 && x1 <= x2+w2){
    if(y1 >= y2 && y1 <= y2+h2){
      
    }
  } // Top left
  if(x1+w1 >= x2 && x1+w1 <= x2+w2){
   if(y1 >= y2 && y1 <= y2+h2){
     
   }
  } // Top right
  if(x1 >= x2 && x1 <= x2+w2){
   if(y1+h1 >= y2 && y1+h1 >= y2+h2){
     
   }
  } // Bottom left
  if(x1+w1 >= x2 && x1+w1 <= x2+w2){
    if(y1+h1 >= y2 && y1+h1 <= y2+h2){
      
    }
  } // Bottom right
}
