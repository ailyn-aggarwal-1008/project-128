song1="";
song2="";

function preload(){
    song1=loadSound("music.mp3");

    song2=loadSound("music2.mp3");
}

score_r=0;
score_l=0;
right_x=0;
right_y=0;
left_x=0;
left_y=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("posenet is initialized");
    
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
        right_x=results[0].pose.rightWrist.x;
        right_y=results[0].pose.rightWrist.y;
        left_x=results[0].pose.leftWrist.x;

        left_y=results[0].pose.leftWrist.y;
        console.log(right_x,right_y);
        console.log(left_x,left_y);
    }
    
}

function draw(){
    image(video,0,0,600,500);

}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}