class Mango
{
	constructor(x,y)
	{
		var options={
			'restitution':0.8,
            'friction':1.0,
            'density':1.0
			}
	
	
		this.body=Bodies.rectangle(x, y, 50, 50 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
		
		
			rect(this.body.position.x,this.body.position.y,this.w, this.h);
		
			
	}

}