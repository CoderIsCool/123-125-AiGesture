nose_x = 0;
nose_y = 0;
left_wrist_x = 0;
right_wrist_x = 0;
difference  = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,415);
    video.position(100,125)

    canvas = createCanvas(500,515);
    canvas.position(700,125);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background("#fff7b8");
    document.getElementById("display").innerHTML = "Width & Height of the square will be = "+difference+"px";
    fill("#fa3c9e");
    stroke("#8ce6e6");
    square(nose_x,nose_y,difference);

}
function modelloaded()
{
    console.log("poseNet model is initiated");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose_x = "+nose_x+"nose_y = "+nose_y);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("leftWrist_x = "+left_wrist_x+"rightWrist_x = "+right_wrist_x+"difference = "+difference);

    }
}
