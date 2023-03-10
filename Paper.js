class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius)
        this.r = radius
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        angleMode(RADIANS)
        transalate(pos.x,pos.y)
        rotate(angle)
        circle(0,0,this.r)
        pop()
    }
}