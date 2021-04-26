var  dog, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  Dogimage = loadimage('Dog.png');
  happydogimage = loadimage('happydog.png');
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

  drawSprites();
  textSize(20);
  fill("lightyellow");
  text("Note : Press UP_ARROW To Feed Drago Milk!" ,30 ,30);
  stroke(15);
  fill("skyblue");

  background (46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS);
    dog.addImage(dogHappy);
  }

  

}


function readStock(data){
foodS=data.val();
}

function writeStock(x){

  if(x<=0){
  x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
   food:x
  })
}



