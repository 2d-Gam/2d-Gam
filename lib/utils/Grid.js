export default class Grid {
  constructor(
    ctx,
    distance = 25,
    type = "fullGrid",
    opt = {
      width: ctx.canvas.width,
      height: ctx.canvas.height
    }
  ) {
    //required values
    if (ctx == "" ||
      ctx == undefined ||
      ctx == null) {
      throw new Error("(2d-gam) ctx is required")
    } else if (typeof(ctx) !== "object") {
      throw new TypeError("(2d-gam) ctx value must be an object")
    }
    if(distance < 25){
      throw new Error("(2d-gam) distance cannot be lower than 25")
    }
    this.opt = opt
    this.type = type
    this.width = this.opt.width
    this.height = this.opt.height
    this.ctx = ctx
    this.distance = distance
  }

  run(id, callBackFunction = function() {}) {
    //required values

    if (id == "" ||
      id == undefined ||
      id == null) {
      throw new Error("(2d-gam) id is required")
    } else if (typeof(id) !== "string") {
      throw new TypeError("(2d-gam) id value must be a string")
    }

    var canvas = document.getElementById(id);
    let w = this.width
    let h = this.height
    this.ctx.canvas.width = w;
    this.ctx.canvas.height = h;
    
    this.ctx.beginPath()
    
    if (this.type == "fullGrid") {
      for (let x = 0; x <= w; x += this.distance) {
        this.ctx.strokeStyle = "yellow"
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, h);
        this.ctx.fillStyle = "gray"
        this.ctx.font = "Arial 1px"
        this.ctx.fillText(`${x}`, x, 10)
        
        for (let y = 0; y <= h; y += this.distance) {
          this.ctx.strokeStyle = "yellow"
          this.ctx.moveTo(0, y);
          this.ctx.lineTo(w, y);
          this.ctx.fillStyle = "gray"
          this.ctx.font = "Arial 1px"
          this.ctx.fillText(`${y}`, 0, y)
        }
      }
    } else if (this.type == "xGrid") {
      for (let x = 0; x <= w; x += this.distance) {
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, h);
        this.ctx.fillStyle = "gray"
        this.ctx.font = "Arial 1px"
        this.ctx.fillText(`${x}`, x, 10)
      }
    } else if (this.type == "yGrid") {
      for (let y = 0; y <= h; y += this.distance) {
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(w, y);
        this.ctx.fillStyle = "gray"
        this.ctx.font = "Arial 1px"
        this.ctx.fillText(`${y}`, 0, y)
      }
    }else{
      console.warn("(2d-gam) the type isnot correct {fullGrid,xGrid,yGrid}")
    }
    callBackFunction(this.ctx)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.stroke();
  }
}
