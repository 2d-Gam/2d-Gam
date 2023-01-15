export default class Parallelogram {
  constructor({
    length = [10,40],
    position = {
      x: 140,
      y: 140
    },
    velocity = {
      x: 0,
      y: 0
    }
  }) {
    this.length = length
    this.position = position
    this.velocity = velocity
    this.width = this.length[0]
    this.height = this.length[1]
    this.create =false
    this.fillcolor = ""
    this.strokecolor = ""
    this.path = ""
  }

  draw(c, callBackFunction = function() {}) {
    //required value
    if (c == "" ||
      c == undefined ||
      c == null) {
      throw new Error("(2d-gam) first argument is required")
    } else if (typeof(c) !== "object") { throw new TypeError("(2d-gam) the first value must be a canvas context")
    }
    //checking the type of the second argu
    if (typeof(callBackFunction) !== "function") {
      throw new TypeError("(2d-gam) the second argument must be a function")
    }

    //darwing the parallelogramm
    let parallelogramm = new Path2D()
    c.beginPath()
    parallelogramm.moveTo(this.position.x,this.position.y)
    parallelogramm.lineTo(this.position.x + this.length[0],this.position.y)
    parallelogramm.lineTo(this.position.x + this.length[0]+30,this.position.y - this.length[1])
    parallelogramm.lineTo((this.position.x + this.length[0] + 30) - this.length[0] , this.position.y - this.length[1])
    parallelogramm.lineTo(this.position.x,this.position.y)
    c.strokeStyle = "black"
    c.fillStyle = "transparent"
    callBackFunction(c)
    c.stroke(parallelogramm)
    c.fill(parallelogramm)
    c.beginPath()
    
    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = parallelogramm
  }

  update(callbackFunction) {
    callbackFunction({
      pos: this.position,
      vel: this.velocity,
      l: this.length,
      w:this.width,
      h:this.height
    })
  }
}
