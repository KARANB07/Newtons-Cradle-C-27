class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            
            pointB:{x:this.offsetX, y:this.offsetY}
            
        }
        console.log(options)
        this.rope=Constraint.create(options);
        World.add(world,this.rope)
    }

    display(){
        rectMode(CENTER);
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        var p1x=pointA.x
        var p1y=pointA.y
        var p2x=pointB.x+this.offsetX
        var p2y=pointB.y+this.offsetY
        stroke("blue")
        line(p1x,p1y,p2x,p2y)

    }
}