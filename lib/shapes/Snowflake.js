export default class Snowflake {
  constructor({
    length = 30,
    position = {
      x: 140,
      y: 140
    },
    velocity = {
      x: 0,
      y: 0
    }
  }) {
    if(length < 20 || length < 0){
      throw new Error("(2d-gam) the length must be more than 20")
    }
    this.length = length
    this.position = position
    this.velocity = velocity
    this.width = length * 2
    this.height = length * 2
    this.create = false
    this.fillcolor = ""
    this.path = ""
    this.strokecolor = ""
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
    
    let Snowflake = new Path2D()
    c.beginPath()
    Snowflake.moveTo(this.position.x, this.position.y)
    Snowflake.lineTo(this.position.x + this.length, this.position.y)



    Snowflake.moveTo(this.position.x, this.position.y)
    Snowflake.lineTo(this.position.x, this.position.y + this.length)

    Snowflake.moveTo(this.position.x, this.position.y)
    Snowflake.lineTo(this.position.x - this.length, this.position.y)

    Snowflake.moveTo(this.position.x, this.position.y)
    Snowflake.lineTo(this.position.x, this.position.y - this.length)

    Snowflake.moveTo(this.position.x, this.position.y)
    Snowflake.lineTo(this.position.x + this.length - 15, this.position.y + this.length - 15)
    
  
    Snowflake.moveTo(this.position.x, this.position.y)
    c.lineTo(this.position.x + this.length - 15, this.position.y - (this.length - 15))

    Snowflake.moveTo(this.position.x, this.position.y)
    Snowflake.lineTo(this.position.x - (this.length - 15), this.position.y + (this.length - 15))

    Snowflake.moveTo(this.position.x, this.position.y)
    Snowflake.lineTo(this.position.x - (this.length - 15), this.position.y - (this.length - 15))

    c.fillStyle = "transparent"
    c.strokeStyle = "black"
    callBackFunction(c)
    c.fill(Snowflake)
    c.stroke(Snowflake)
    c.beginPath()
    
    this.create = true
    this.fillcolor = c.fillStyle
    this.strokecolor = c.strokeStyle
    this.path = Snowflake
  }

  update(callBackFunction = function() {}) {
    callBackFunction({
      pos: this.position,
      vel: this.velocity,
      l:this.length,
      w: this.width,
      h: this.height
    })
  }
}
