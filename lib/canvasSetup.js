export default class Canvas {
  constructor({ id }) {
    this.id = id

    if (id == "" ||
      id == undefined ||
      id == null) {
      throw new Error("(2d-gam) id is required and couldnot be null or undefind")
    } else if (typeof(id) !== "string") {
      throw new TypeError("(2d-gam) id must be a string")
    }

    return id
  }
  create() {
    document.getElementById(this.id).innerHTML = `
       <canvas id="${this.id}@2d-gam"></canvas>
      `
    const canvas = document.getElementById(this.id + "@2d-gam")
    const c = canvas.getContext("2d")
    //context
    return c
  }
}
