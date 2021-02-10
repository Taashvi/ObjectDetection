img="";
status="";

function preload(){
    img=loadImage("table.jpg");
}

function draw(){
    image(img,0,0,600,400);
    stroke("#05a7b3");
    strokeWeight(3);
    noFill();
    rect(300,60,210,170);
    strokeWeight(1);
    textSize(15);
    fill("#05a7b3");
    text("Iphone 100%",310,80)
}

function setup(){
    var canvas=createCanvas(600,400);
    canvas.center();
    detecting_model=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting...";
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    detecting_model.detect(img,gotResults);
}

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function back(){
    window.location="index.html";
}