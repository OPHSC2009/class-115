function preload() {

}

function setup() {
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,300);
video.hide()
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses)
}

function draw() {
image(video,0,0,400,300)
}

function take_snapshot() {
    save("Snapshot.jpeg");

    

}
function modelLoaded(){
    console.log("Model Loaded");

    
}
function gotPoses(results){
console.log(results);
console.log("nose X coordinates="+results[0].pose.nose.x)
console.log("nose y coordinates="+results[0].pose.nose.y)
}