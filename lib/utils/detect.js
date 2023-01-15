export default class Detect {
  constructor(ctx,shape) {
    this.shape = shape
    this.ctx = ctx
  }
  on(type, callBackFunction = function() {}) {
    if (type == "touchTheScreenTop") {
      if (this.shape.position.y - this.shape.height <= 0) {
        callBackFunction()
      }
    }
    if (type == "touchTheScreenBottom") {
      if (this.shape.position.y + this.shape.height - this.shape.velocity.y >= this.ctx.canvas.height) {
        callBackFunction()
      }
    }

    if (type == "touchTheScreenRight") {
      if (this.shape.position.x + this.shape.width + this.shape.velocity.x >= this.ctx.canvas.width) {
        callBackFunction()
      }
    }
    
    if (type == "touchTheScreenLeft") {
      if (this.shape.position.x - this.shape.width <= 0) {
        callBackFunction()
      }
    }
    
  }
}
