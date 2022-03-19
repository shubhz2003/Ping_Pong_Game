//Select the canvas
const canvas = document.getElementById("myGame");
const context = canvas.getContext("2d");

//Draw rectangle function
function drawRect(x,y,w,h,color){
    context.fillStyle = color
    context.fillRect(x,y,w,h)
}



//AI Paddle
const AI = {
    x: canvas.width/2 - 50/2,
    y: 10,
    width: 50,
    height: 10,
    color: "white",
    score: 0
}


//User Paddle
const user = {
    x: canvas.width/2 - 50/2,
    y: canvas.height - 10 - 10,
    width: 50,
    height: 10,
    color: "white",
    score: 0
}


//Net(center line)
function net(){
    context.beginPath()
    context.setLineDash([10])
    context.moveTo(0,canvas.height/2) //starting point
    context.lineTo(canvas.width,canvas.height/2) //end point
    context.strokeStyle = "white"
    context.stroke() //creating line
}


//Draw a Circle
function drawCircle(x,y,r,color){
    context.fillStyle = color
    context.beginPath()
    context.arc(x,y,r,0,Math.PI*2,false)
    context.closePath()
    context.fill()
}

//Create a ball
const ball ={
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    speed:1,
    velocityX : 5,
    velocityY : 5,
    color: "orange"

}

//Scores
function drawText(text,x,y,color){
    context.fillStyle = color
    context.font = "32px josefin sans"
    context.fillText(text,x,y)
}


//Render the Game
function render(){
    //calling all the functions together
    //Make canvas
    drawRect(0,0,400,600);

    //Ai paddle
    drawRect(AI.x,AI.y,AI.width,AI.height, AI.color)

    //user paddle
    drawRect(user.x,user.y,user.width,user.height,user.color)

    //Net
    net()

    //create ball
    drawCircle(ball.x,ball.y,ball.radius,ball.color)

    //user and Ai scores
    drawText(AI.score,20,canvas.height/2 - 30)
    drawText(user.score,20,canvas.height/2 + 50)

}

render()
