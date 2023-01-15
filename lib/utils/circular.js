export default class Circular{
  constructor(shape){
    this.shape = shape
    this.x = this.shape.position.x
    this.y = this.shape.position.y
    this.radians = 0
  }
  run(speed,radius){
    this.radians += speed
    this.shape.position.x = this.x + Math.cos(this.radians) * radius 
    this.shape.position.y = this.y + Math.sin(this.radians) * radius
    
    return {
      position:{
        x:this.shape.position.x,
        y:this.shape.position.y
      },
      speed,
      radians:this.radians
    }
  }
}
