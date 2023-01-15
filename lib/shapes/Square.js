export default class Square {
  constructor({
    height = 100,
    width = 100,
    position = {
      x: 0,
      y: 0
    },
    velocity = {
      x: 0,
      y: 0
    }
  }) {
    this.width = width
    this.height = height
    this.position = position
    this.velocity = velocity
    this.fillcolor = ""
    this.strokecolor = ""
    this.path = ""
    this.create = false
  }

  draw(c, callBackFunction = function() {}) {
    //required value
    if (c == "" ||
      c == undefined ||
      c == null) {
      throw new Error("(2d-gam) first argument is required")
    } else if (typeof(c) !== "object") {
      throw new TypeError("(2d-gam) the first value must be a canvas context")
    }
    //checking the type of the second argu
    if (typeof(callBackFunction) !== "function") {
      throw new TypeError("(2d-gam) the second argument must be a function")
    }

    //darwing the square
    let square = new Path2D()
    c.beginPath()
    square.rect(this.position.x,this.position.y,this.width,this.height)
    c.fillStyle = "transparent"
    c.strokeStyle = "black"
    callBackFunction(c)
    c.stroke(square)
    c.fill(square)
    c.beginPath()

    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = square
  }

  update(callbackFunction) {
    callbackFunction({ w: this.width, h: this.height, pos: this.position, vel: this.velocity })
  }
}
