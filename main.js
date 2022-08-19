noseX=0;
noseY=0;

muñeca_izquierdaX=0;
muñeca_derechaX=0;

diferencia=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(555,500);
    canvas=createCanvas(555,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function modelLoaded(){
console.log("Posenet se a inicializado")
}

function gotPoses(results){
if(results.length>0){
    console.log(results)
 noseX=results[0].pose.nose.x;
 noseY=results[0].pose.nose.y;
 console.log("noseX="+noseX +"noseY="+noseY)
 
 muñeca_derechaX=results[0].pose.rightWrist.x;
 muñeca_izquierdaX=results[0].pose.leftWrist.x;
 console.log("muñeca_izquierdaX"+muñeca_izquierdaX+"muñeca_derechaX"+muñeca_derechaX)
 diferencia=floor(muñeca_izquierdaX-muñeca_derechaX)
}
}

function draw(){
    background("white");
    fill("#00F4FF")
    stroke("#FFFFFF")
    square(noseX,noseY,diferencia);
}

