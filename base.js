class base{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        Matter.World.add(world,this.body)
    }
    display(){
       var pos=this.body.position
       rectMode(CENTER)
       rect(this.x,this.y,this.width,this.height)


    }
}