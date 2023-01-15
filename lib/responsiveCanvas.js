export default class ResponsiveCanvas{
  constructor({id,width,height}){
    
    if (id == "" ||
      id == undefined ||
      id == null) {
      throw new Error("(2d-gam) id is required and couldnot be null or undefind")
    } else if (typeof(id) !== "string") {
      throw new TypeError("(2d-gam) id must be a string")
    }
    
    this.width = width
    this.height = height
    this.id = id
  }
  create(){
    
    if(this.width <= 1 && this.height <= 1){
    let div = document.getElementById(this.id)
    
    div.innerHTML += `
      <canvas width=${innerWidth * this.width} height=${innerHeight * this.height} id="${this.id}@2d-gam">
      </canvas>
    `

    const canvas = document.getElementById(this.id + "@2d-gam")
    const c = canvas.getContext("2d")
    //context
    return c
    }
  }
}
