export default class Move {
  constructor(shape) {
    this.shape = shape
  }
  
  forward(speed) {
    this.shape.position.x += speed
    return {
      position: {
        x: this.shape.position.x,
        y: this.shape.position.y
      },
      speed: 5
    }
  }
  
  backward(speed) {
    this.shape.position.x -= speed
    return {
      position: {
        x: this.shape.position.x,
        y: this.shape.position.y
      },
      speed: 5
    }
  }
  
  diagonalRightBottom(speed){
    this.shape.position.x += speed
    this.shape.position.y += speed
    return {
      position: {
        x: this.shape.position.x,
        y: this.shape.position.y
      },
      speed
    }
  }
  
  diagonalLeftBottom(speed){
    this.shape.position.x -= speed
    this.shape.position.y += speed
    return {
      position: {
        x: this.shape.position.x,
        y: this.shape.position.y
      },
      speed
    }
  }
  
  diagonalRightTop(speed){
    this.shape.position.x += speed
    this.shape.position.y -= speed
    return {
      position: {
        x: this.shape.position.x,
        y: this.shape.position.y
      },
      speed
    }
  }
  
  diagonalLeftTop(speed){
    this.shape.position.x -= speed
    this.shape.position.y -= speed
    return {
      position: {
        x: this.shape.position.x,
        y: this.shape.position.y
      },
      speed
    }
  }
  
  top(speed){
    this.shape.position.y -= speed
    return {
      position: {
        x: this.shape.position.x,
        y: this.shape.position.y
      },
      speed
    }
  }
  
  bottom(speed) {
    this.shape.position.y += speed
    return {
      position: {
        x: this.shape.position.x,
        y: this.shape.position.y
      },
      speed
    }
  }
}
