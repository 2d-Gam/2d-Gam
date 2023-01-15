export default class Text {
  constructor({
    text = "Hello World",
    position = {
      x: 100,
      y: 100
    },
    velocity = {
      x: 0,
      y: 0
    },
    maxWidth = 0
  }) {
    this.position = position
    this.velocity = velocity
    this.maxWidth = maxWidth
    this.text = text
  }
  write(c, callBackFunction = function() {}) {
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


    c.beginPath()
    c.fillStyle = "black"
    c.strokeStyle = "transparent"
    callBackFunction(c,this.text)
    c.fillText(this.text, this.position.x, this.position.y)
    c.beginPath()
  }
  
}
