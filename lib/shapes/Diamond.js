export default class Diamond {
  constructor({
    length = 40,
    position = {
      x: 40,
      y: 100
    },
    velocity = {
      x: 0,
      y: 0
    }
  }) {
    this.position = position
    this.length = length
    this.velocity = velocity
    this.width = this.length
    this.height = this.length * 1.5
    this.create = false
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
    } else if (typeof(c) !== "object") {
      throw new TypeError("(2d-gam) the first value must be a canvas context")
    }
    //checking the type of the second argu
    if (typeof(callBackFunction) !== "function") {
      throw new TypeError("(2d-gam) the second argument must be a function")
    }

    //darwing the diamond
    let diamond = new Path2D()
    c.beginPath()
    diamond.moveTo(this.position.x, this.position.y)
    diamond.lineTo(this.position.x - 40, this.position.y - this.length)
    diamond.lineTo(this.position.x - 80, this.position.y)
    diamond.lineTo(this.position.x - 40, this.position.y + this.length)
    diamond.lineTo(this.position.x, this.position.y)
    c.fillStyle = "transparent"
    c.strokeStyle = "transparent"

    callBackFunction(c, this.position)
    c.stroke(diamond)
    c.fill(diamond)
    c.beginPath()

    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = diamond
  }

  update(callbackFunction) {
    callbackFunction({ pos: this.position, l: this.length, vel: this.velocity })
  }

  isCreated() {
    if (this.create) {
      return true
    } else {
      return false
    }
  }
}
