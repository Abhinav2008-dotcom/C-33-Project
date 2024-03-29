class Snow {
    constructor(x,y){
        var options={
            'restitution':0.6,
            'friction':1.0,
            'density':1.0
        

        }
    
        this.width=50;
        this.height=50;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        this.image=loadImage("snow5.webp")
        World.add(world,this.body)
      
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
        
}