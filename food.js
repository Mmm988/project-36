class Food {
    constructor(){
        this.foodCount=0;
        this.image=loadImage("images/milk.png")
    }
    getFood(){
        var foodCountRef=database.ref("foodCount")
        foodCountRef.on("value",function(data){
            this.foodCount=data.val();
        })
   }
    updateFood(count){
        database.ref("/").update({
            foodCount: count
        })
    }
    detectFood(name){
        var foodIndex="count"+foodCount
        database.ref(playerIndex).set({
            count: count
        })
    }
    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70)

        if(this.foodCount!=0){
            for(var i=0;i<this.foodCount;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50)
                x=x+30;
            }
        }
    }
}