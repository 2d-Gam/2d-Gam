# 2d-Gam

2d-Gam is a library for Es6 to develop 2d games  🤘🤠.

see also: [2d-Reactgam](https://npmjs.com/package/2d-Reactgam) [status: under development]

## Installition.

- Donot install it per npm for better exprience

- Clone the repo:
```bash
  git clone https://github.com/2d-Gam/2d-gam
```

- Unpkg
```html
  <script src="https://unpkg.com/2d_gam/@1.12.3/dist/2d-gam.min.js"></script>
```
then you will find it in `window.gam`

## Overview.
<ul>
  <li><a href="#set">Setups</a></li>
  <ul>
    <li><a href="#nor">Normal Canvas</a></li>
    <li><a href="#res">Responsive Canvas</a></li>
  </ul>
  <li><a href="#sha">Shapes</a></li>
  <li><a href="#eve">Events</a></li>
  <li><a href="#det">Detections</a></li>
  <li><a href="#ani">Movements</a></li>
  <li><a href="#tex">Texts</a></li>
</ul>

## Documentation.

<h3 id="set">Setups</h3>

Navigate to html file and add the following code to it:
```html
<div id="canvas"></div>
<!--This div is very important it will be a container for our canvas -->
<script src="https://unpkg.com/2d-gam/@1.12.3/dist/2d-Gam.min.js"></script>
</body>
```

<h3 id="nor">Normal Canvas</h3>

With a normal Canvas you will have to give a specific number of pxiles that might not be perfect with anthor devices.

In order to setup one add the following code:

```javascript
//Create the canvas wich return the context
const ctx = new gam.Canvas({
id: "canvas"
}).create()

//Select the canvas from the context
const canvas = ctx.canvas

//Give the canvas height and width
canvas.width = 400
canvas.height = 800
```


<h3 id="res">Responsive Canvas</h3>

With a responsive Canvas you can give a decimal number wich presents how much of height or width you want to take of the whole viewport's width or height.

To create one add this code:

```javascript

//Create the canvas wich return the context
const ctx = new gam.ResponsiveCanvas({
id: "canvas",
width: 0.5, //50% of the viewports width
height: 0.5 //50% of the viewports height
}).create()

//Select the canvas from the context
const canvas = ctx.canvas

```
So we are good to go with creating different shapes.

<h3 id="sha">Shapes</h3>

In our library we developed 13 different shapes. All feuaters we added in the library are only working with our shapes Api.



Every shape-classe takes specific arguments , but all shapes have to have a `position:Object` and you can add a `velocity:Object` too.

Example:
```javascript
const shape = new gam.Circle({
  //Required
  radius: 12, 
  position: { // poitiosn object
    x: 120,
    y: 120
  },
  //Optional 
  //You can use it to set the speed you want
  velocity = { // velocity obejct 
      x: 0,
      y: 0
  },
  startAngle = 0,
  endAngle = Math.PI * 2,
  antiClockWise = false
})
```
Then every shape-class returns a `draw` method. It takes two arguments first the context and a callbackfunction wich can be used to style the shape.
```javascript
//draw the Circle
shape.draw(ctx, // The context
  (c)=>{
    // Use the c object to style your shape here
    c.strokeStyle = "black"
  }
)
```
In order To grap a specific values form the shape you can grap it directly.

```javascript 
//get Values from the circle object
//Tipp: Values change when the shape moves or when you let something change 
console.log(shape[value],shape.value)
```

Note: In order to have an animated shape the draw-method must be in the animataion-loop function and the shape constructor outside it.

ShapeName | Arguments required|optinal
----------|-------------------|----------
Circle    | `radius:number` | `startAngle:number` <br>`endAngle:number` `antiClockWise:boolean`
semiCircleUp & semiCircleDown| `radius:number` |none
Ellipse | `radius:[number,number]`|`rotation:0` <br> `startAngle:0` <br> `endAngle:number` <br> `antiClockWise:boolean`
semiEllipseUp & semiEllipseDown | `radius:[number,number]` | `rotation:number`
Diamond | `length:number` |none
HexagonShape | `length:[number,number,...6]` | none
Parallelogram | `length:[number,number]` |none
quadrilateralShape | `length:[number,number,...4]` |none
Snowflake | `length:number` |none
Square | `width:number` <br> `height:number` |none
Triangel | `length:[number,number,...3]` |none

<h3 id="eve">Events</h3>

**Events Api can only work with our Shapes Api**


Trigger events is powerful that's why we developed an Event Api with dieffrent Events.And it is a feature that can only be found by us!

First create a new element.
```javascript
//draw any shape; here a circle
const circle = new gam.Circle({
      radius: 102,
      position: {
        x: 120,
        y: 120
      }
    })
    
circle.draw(ctx,(c)=>{
  c.strokeStyle = "black"
})
```

Then create an Event-api for that specific element.
```javascript
//create an event api for this Circle
const evApi = new gam.Event(
  circle,//circle object
  ctx,//context
)
```

Then listen for an event, and determine what do you wnat to do in the callBackFunction.

```javascript
//trigger events
evApi.on(eventName,(e)=>{
  //what do you want to do when the event is triggered 
  //'e' returned calue from the triggered event
  console.log(e)
})
```

Here are all available events that you can use:

eventName | Description 
----------|------------
create    | Trigger when the shape is created
move      | Trigger when the shape is moving
click     | Trigger when the shape is clicked
dblclick  | Trigger when the shape is double clicked
mousemove | Trigger when the mouse moves over the shape
mouseenter| Trigger when the mouse enters the shape Edges
mousedown | Trigger when the mouse is down over the shape
touchstart| Trigger if the touch beginns over the shape
touchend  | Trigger if the touch endes over the shape
touchmove | Trigger if when the touch is moving over the shape
grow      | Trigger if the shape grows in height or width
shrink    | Trigger if the shape shrinks in height or width

<h3 id="det">Detections</h3>

**Our detections Api can only work with our shape Api**

Detections are used to detect if something happend to the element.You can detect different things.

First create an element.
```javascript 
//draw any shape; here a circle
const circle = new Circle({
      radius: 102,
      position: {
        x: 120,
        y: 120
      }
    })
```

Then create a detect api for that element.
```javascript 
//create an detect api for this Circle
const deApi = new Detect(
  circle,//circle object
  ctx,//context
)
```

It is very good to try it with an animated shape. So let us animate it.

```javascript 
//let's animate the circle
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(aniamte)
  circle.position.x += 5
  circle.draw(ctx,(c)=>{
     c.strokeStyle = "black"
  })
```

Then trigger it and determine what have to happen in the callBackFunction.
```javascript 
  //trigger Detections 
  deApi.on(detectName,()=>{
    //what do you want to do when the detect is triggered 
  })
}
```

detectName | Description 
-----------|------------
touchTheScreenLeft | Trigger if the shape's edge touchs the left side of the canvas
touchTheScreenRight | Trigger if the shape's edge touchs the right side of the canvas
touchTheScreenBottom | Trigger if the shape's edge touchs the bottom  of the canvas
touchTheScreenTop | Trigger if the shape's edge touchs the top of the canvas

<h3 id="ani">Movements</h3>

**Our animations Api can only work with our shapes Api**


"No Movement, No game" and that is why we create a really huge Movements Api. With every Movement you can think about.

First create a shape.
```javascript
    const circle = new gam.Circle({
        radius:12,
        position:{
          x:120,
          y:120
        }
      })
```

And create a Movement api for it.
```javascript 
    //create a move api for the circle
    const move = new gam.Move(circle)
  ```
  
Animate the shape.
```javascript 
    //Animation
    function animate(){
      requestAnimationFrame(a,1)
      ctx.clearRect (0,0,canvas.width, canvas.height)
      
      circle.draw(ctx)
      
```

Move it now. Every move method returns the current position of the shape.

```javascript
      //move the circle to the bottom
      console.log(move.bottom(5/*speed*/))
    }
    
    animate()
```
Movement|Arguments 
--------|---------
`gam.Move(shapeName).forward(5)`  | speed
`gam.Move(shapeName).backward(5)`  | speed
`gam.Move(shapeName).top(5)`  | speed
`gam.Move(shapeName).bottom(5)`  | speed
`gam.Move(shapeName).diagonalRightBottom(5)`  | speed
`gam.Move(shapeName).diagonalLeftBottom(5)`  | speed
`gam.Move(shapeName).diagonalRightTop(5)`  | speed
`gam.Move(shapeName).diagonalLeftTop(5)`  | speed

<h3 id="ciru">Circular animations</h3>

First draw the element.
```javascript 
    const circle = new gam.Circle({
        radius:12,
        position:{
          x:120,
          y:120
        }
      })
```

Then create a circular api.
```javascript 
    //create a Circular api for the circle
    const move = new gam.Circular(circle)
    
```

Then animate it all and see the magic.
The circular method `run` returns the radians , position and speed.

```javascript 
    //Animation
    function animate(){
      requestAnimationFrame(a,1)
      ctx.clearRect (0,0,canvas.width, canvas.height)
      
      circle.draw(ctx)
      
      //move the circle to the bottom
      console.log(Circular.run(5/*speed*/,30/*radius*/))
    }
    
  animate()
```


<h3 id="tex">Text</h3>

Create a text:
```javascript 
const text = new gam.Text({
  //Required 
text = "Hello gam,
    position = {
      x: 100,
      y: 100
    },
    //optional
    velocity = {
      x: 0,
      y: 0
    },
    maxWidth = 0
})

//write it
text.write(ctx,(c)=>{
  //use the c object to style it
  c.fillStyle = "blue"
})
```


## Contact Us 📨.

If you have any suggestions or a seucrity issue you acn visit our github page or contact us per Email **abdelrahmanshaheen2007@gmail.com**.

## History ⛑.
<ul>
<li>v1.12.3 First release under the name 2d-gam</li>
<li>v1.12.6
  <ul>
    <li>Customize the Error message</li>
    <li>Fix the problem with the parallelogramm</li>
    <li>Customize all Shapes to make the package more lightweight</li>
  </ul>
</li>
</ul>

2d-Gam & Co
