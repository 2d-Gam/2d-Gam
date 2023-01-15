function GreateX(array) {
  let GreateX = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > GreateX) {
      GreateX = array[i]
    }
    else {
      continue
    }
  }
  return GreateX
}

function GreateY(array) {
  let GreateY = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > GreateY) {
      GreateY = array[i]
    }
    else {
      continue
    }
  }
  return GreateY
}



export default class Triangle {
  constructor({
    length = [40, 50, 30],
    position = {
      x: 140,
      y: 100
    },
    velocity = {
      x: 0,
      y: 0
    }
  }) {
    this.length = length
    this.position = position
    this.velocity = velocity
    this.width = GreateX(this.length)
    this.height = GreateY(this.length)
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

    //darwing the square
    let triangle = new Path2D()
    c.beginPath()
    triangle.moveTo(this.position.x, this.position.y)
    triangle.lineTo(this.position.x + this.length[0], this.position.y)


    triangle.lineTo(this.position.x + this.length[2], this.position.y - this.length[1])

    triangle.lineTo(this.position.x, this.position.y)

    c.strokeStyle = "black"
    c.fillStyle = "transparent"
    callBackFunction(c)
    c.stroke(triangle)
    c.fill(triangle)
    c.beginPath()

    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = triangle
  }

  update(callbackFunction) {
    callbackFunction({
      pos: this.position,
      vel: this.velocity,
      l: this.length,
      s1: this.length[0],
      s2: this.length[1],
      s3: this.length[2],
      w: this.width,
      h: this.height
    })
  }
}
