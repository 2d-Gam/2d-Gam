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



export default class HexagonShape {
  constructor({
    length = [40, 40, 40, 40, 40, 40],
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
    this.width = GreateX(this.length)
    this.height = GreateY(this.length)
    this.create = false
    this.fillcolor = ""
    this.strokecolor = ""
    this.path = ""
  }
  draw(c, callBackFunction = function() {}) {
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
    
    let x = this.position.x
    let y = this.position.y
    let HexagonShape = new Path2D()
    c.beginPath()
    HexagonShape.moveTo(this.position.x, this.position.y)
    HexagonShape.lineTo(x +this.length[0],y)
    HexagonShape.lineTo(x + this.length[0] + 20,y - this.length[1])
    HexagonShape.lineTo(x + this.length[0] , (y - this.length[1]) - this.length[2])
    HexagonShape.lineTo((x + this.length[0]) - this.length[3], (y - this.length[1]) - this.length[2])
    HexagonShape.lineTo(((x + this.length[0]) - this.length[3])-20,((y - this.length[1]) - this.length[2]) + this.length[4])
    HexagonShape.lineTo(((x + this.length[0]) - this.length[3]),(((y - this.length[1]) - this.length[2]) + this.length[4]) + this.length[5])
    
    c.fillStyle = "transparent"
    c.strokeStyle = "black"
    callBackFunction(c)
    c.fill(HexagonShape)
    c.stroke(HexagonShape)
    c.beginPath()
    
    this.create =true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = HexagonShape
  }

  update(callbackFunction = function() {}) {
    callbackFunction({
      w: this.width,
      h: this.height,
      pos: this.position,
      vel: this.velocity,
      l: this.length,
      s1: this.length[0],
      s2: this.length[1],
      s3: this.length[2],
      s4: this.length[3],
      s5: this.length[4],
      s6: this.length[5]
    })
  }
}
