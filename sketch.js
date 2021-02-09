var dog,sadDog,happyDog;
var button1,button2;
var food;
var database;
var foodCount=0;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database=firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  button1=createButton("ADD FOOD")
  button1.position(700,95)
  button1.mousePressed(addFoods)

  button2=createButton("FEED THE DOG")
  button2.position(800,95)
  button2.mousePressed(feedDog)

  food=new Food();

}

function draw() {
  background(46,139,87);
  drawSprites();

  food.display();
  fill("black")
  textSize(18)
  text("TIMMY",770,285)
}

function addFoods(){
  foodCount++
  database.ref("foodCount").updata({
    Food: foodCount+1
  })
}

function feedDog(){
  dog.addImage(happyDog)

  if(food.foodCount<= 0){
    food.updateFood(food.foodCount*0);
  } else{
    food.updateFood(food.foodCount-1);
  }
}