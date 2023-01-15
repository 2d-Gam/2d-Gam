export default class Circle {
  constructor({
    radius,
    position = {
      x: 0,
      y: 0
    },
    velocity = {
      x: 0,
      y: 0
    },
    startAngle = 0,
    endAngle = Math.PI * 2,
    antiClockWise = false
  }) {
    //required values
    let width = radius
    if (width == "" ||
      width == undefined ||
      width == null) {
      throw new Error("(2d-gam) radius is required")
    } else if (typeof(width) !== "number") {
      throw new TypeError("(2d-gam) radius value must be a number")
    }
    this.radius = radius
    this.width = this.radius * 2
    this.position = position
    this.velocity = velocity
    this.height = this.radius * 2
    this.create = false
    this.fillcolor = ""
    this.strokecolor = ""
    this.path = ""
    this.startAngle = startAngle
    this.EndAngle = endAngle
    this.antiClockWise = antiClockWise
  }
  draw(c, callBackFunction = function() {}) {
    //required value
    if (c == "" ||
      c == undefined ||
      c == null) {
      throw new Error("(2d-gam)first argument is required")
    } else if (typeof(c) !== "object") {
      throw new TypeError("(2d-gam) the first value must be a canvas context")
    }
    //checking the type of the second argu
    if (typeof(callBackFunction) !== "function") {
      throw new TypeError("(2d-gam) the second argument must be a function")
    }

    //darwing the circle
    let circle = new Path2D()
    c.beginPath()
    circle.arc(this.position.x, this.position.y, this.radius,this.startAngle, this.EndAngle, false)
    c.fillStyle = "transparent"
    c.strokeStyle = "black"
    callBackFunction(c)
    c.stroke(circle)
    c.fill(circle)
    c.beginPath()
    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = circle
  }

  update(callbackFunction) {
    callbackFunction({ r: this.width, pos: this.position, vel: this.velocity })
  }
}

export class semiCircleDown {
  constructor({
    radius,
    position = {
      x: 0,
      y: 0
    },
    velocity = {
      x: 0,
      y: 0
    }
  }) {
    //required values
    let width = radius
    if (width == "" ||
      width == undefined ||
      width == null) {
      throw new Error("(2d-gam) radius is required")
    } else if (typeof(width) !== "number") {
      throw new TypeError("(2d-gam) radius value must be a number")
    }
    this.radius = radius
    this.width = this.radius * 2
    this.position = position
    this.velocity = velocity
    this.height = this.radius * 2
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

    //darwing the circle
    let circledown = new Path2D()
    c.beginPath()
    circledown.arc(this.position.x, this.position.y, this.radius, 0, Math.PI, false)
    c.fillStyle = "transparent"
    c.strokeStyle = "black"
    callBackFunction(c)
    c.stroke(circledown)
    c.fill(circledown)
    c.beginPath()
    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = circledown
  }

  update(callbackFunction) {
    callbackFunction({ r: this.width, pos: this.position, vel: this.velocity })
  }
}


export class semiCircleUp {
  constructor({
    radius,
    position = {
      x: 0,
      y: 0
    },
    velocity = {
      x: 0,
      y: 0
    }
  }) {
    //required values
    let width = radius
    if (width == "" ||
      width == undefined ||
      width == null) {
      throw new Error("(2d-gam) radius is required")
    } else if (typeof(width) !== "number") {
      throw new TypeError("(2d-gam) radius value must be a number")
    }
    this.radius = radius
    this.width = this.radius * 2
    this.position = position
    this.velocity = velocity
    this.height = this.radius * 2
    this.create = false
    this.fillcolor = ""
    this.path = ""
    this.strokecolor = ""
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

    //darwing the circle
    let circleUp = new Path2D()
    c.beginPath()
    circleUp.arc(this.position.x, this.position.y, this.radius, 0, Math.PI, true)
    c.fillStyle = "transparent"
    c.strokeStyle = "black"
    callBackFunction(c)
    c.stroke(circleUp)
    c.fill(circleUp)
    c.beginPath()

    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = circleUp
  }

  update(callbackFunction) {
    callbackFunction({ r: this.radius, pos: this.position, vel: this.velocity, w: this.width, h: this.height })
  }
}
