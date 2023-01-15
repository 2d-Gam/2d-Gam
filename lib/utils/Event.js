const CustomizedEvents = []

function addTouchOffsets(event) {
  var touch = event.touches[0] || event.changedTouches[0];
  var realTarget = document.elementFromPoint(touch.clientX, touch.clientY);
  event.offsetX = touch.clientX - realTarget.getBoundingClientRect().x;
  event.offsetY = touch.clientY - realTarget.getBoundingClientRect().y
  return event;
}


export default class Event {
  constructor(
    shape,
    ctx
  ) {
    if (shape == "" ||
      shape == undefined ||
      shape == null) {
      throw new Error("(2d-gam) first argument is required")
    } else if (typeof(shape) !== "object") {
      throw new TypeError("(2d-gam) the first value must be a shape class")
    }
    this.shape = shape
    this.ctx = ctx
  }

  on(event, callBackFunction = function() {}) {
    if (event == "create") {
      let Interval = setInterval(() => {
        if (this.ctx.isPointInPath(this.shape.path, this.shape.position.x, this.shape.position.y)) {
          let e = {
            isTrusted: true,
            eventType: "create",
            date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`,
            positionX: this.shape.position.x,
            positionY: this.shape.position.y,
            shape: this.shape,
          }
          try {
            callBackFunction(e)
            clearInterval(Interval)
          } catch (e) {
            clearInterval(Interval)
            throw new Error(`(2d-gam) an Event error is occaired ${e}`)
          }
        }
      }, 1)
    }
    if (event == "move") {
      let positions = []
      let currentPositionX = this.shape.position.x
      let currentPositionY = this.shape.position.y
      positions.push({
        x: currentPositionX,
        y: currentPositionY,
        date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`
      })
      let Interval1 = setInterval(() => {
        if (this.shape.position.x !== currentPositionX || this.shape.position.y !== currentPositionY) {
          positions.push({
            x: this.shape.position.x,
            y: this.shape.position.y,
            date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`
          })
          let e = {
            isTrusted: true,
            eventType: event,
            prevPosition: {
              x: currentPositionX,
              y: currentPositionY
            },
            newPosition: {
              x: this.shape.position.x,
              y: this.shape.position.y
            },
            getDiffrence: function() {
              let diff = {
                x: this.newPosition.x - this.prevPosition.x,
                y: this.newPosition.y - this.prevPosition.y
              }
              return diff
            },
            positions,
            shape: this.shape
          }
          try {
            callBackFunction(e)
            currentPositionX = this.shape.position.x
            currentPositionY = this.shape.position.y
          } catch (e) {
            clearInterval(Interval1)
            throw new Error(`(2d-gam) a failure is occaired ${e}`)
          }
        }
      }, 1)
    }
    if (event == "click" || event == "dblclick" || event == "mousemove" || event == "mouseenter" || event == "mouseup"  || event == "mousedown") {

      this.ctx.canvas.addEventListener(event, (event) => {
        const isPointInPath = this.ctx.isPointInPath(this.shape.path, event.offsetX, event.offsetY)
        if (isPointInPath) {
          let e = event
          callBackFunction(e)
        }
      })
    }
    if (event == "touchstart" || event == "touchend" || event == "touchmove") {
      this.ctx.canvas.addEventListener(event,(event) => {
        const isPointInPath = this.ctx.isPointInPath(this.shape.path,addTouchOffsets(event).offsetX,addTouchOffsets(event).offsetY)
        
        if(isPointInPath){
          let e = event
          callBackFunction(e)
        }
      })
    }
    if (event == "grow") {
      let width = this.shape.width
      let height = this.shape.height
      let Interval3 = setInterval(() => {
        if (this.shape.width > width || this.shape.height > height) {
          let e = {
            isTrusted: true,
            prevWidth: width,
            prevHeight: height,
            newWidth: this.shape.width,
            newHeight: this.shape.height,
            date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`,
            getDiffrence: function() {
              let diff = {
                width: this.newWidth - this.prevWidth,
                height: this.newHeight - this.prevHeight
              }

              return diff
            },
            shape: this.shape
          }
          width = e.newWidth
          height = e.newHeight
          try {
            callBackFunction(e)
          } catch (e) {
            clearInterval(Interval3)
            throw new Error(`(2d-gam) a failure is occaired ${e}`)
          }
        }
      }, 1)
    }
    if (event == "shrink") {
      let width = this.shape.width
      let height = this.shape.height
      let Interval3 = setInterval(() => {
        if (this.shape.width < width || this.shape.height < height) {
          let e = {
            isTrusted: true,
            prevWidth: width,
            prevHeight: height,
            newWidth: this.shape.width,
            newHeight: this.shape.height,
            date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`,
            getDiffrence: function() {
              let diff = {
                width: this.prevWidth - this.newWidth,
                height: this.prevHeight - this.newHeight
              }

              return diff
            },
            shape: this.shape
          }
          width = e.newWidth
          height = e.newHeight
          try {
            callBackFunction(e)
          } catch (e) {
            clearInterval(Interval3)
            throw new Error(`(2d-gam) a failure is occaired ${e}`)
          }
        }
      }, 1)
    }

    let therIsOne = false
    for (let i = 0; i < CustomizedEvents.length; i++) {
      if (CustomizedEvents[i].name == event) {
        let therIsOne = true
        let IntervalC = setInterval(() => {
          if (CustomizedEvents[i].run()) {
            let e = {
              isTrusted: true,
              eventType: event,
              customizeEvent: true,
              date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`
            }
            try {
              callBackFunction(e)
              if (CustomizedEvents[i].stopOnRun) {
                clearInterval(IntervalC)
              }
            } catch (e) {
              clearInterval(IntervalC)
              throw new Error("(2d-gam) a failure is occaired " + e)
            }
          }
        }, 1)
      }
    }
  }

  customEvent(eventName, run = function() {}, stopOnRun = false) {
    CustomizedEvents.push({
      name: eventName,
      run,
      stopOnRun,
    })
  }
}
