mustacheX = 0;
mustacheY = 0;

function preload()
{
    mustache = loadImage("https://postimg.cc/RqtpTkM1")
}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log("poseNet is initializing");
}

function gotposes(results)
{
    if(results.length > 0)
        {
            console.log(results);
            mustacheX = results[0].pose.nose.x-20;
            mustacheY = results[0].pose.nose.y-20;

            console. log(results[0].pose.nose.x-20);
            console. log(results[0].pose.nose.y-20);
        }
}

function draw()
{
    image(video, 0, 0, 350, 350);
    image(mustache,mustacheX, mustacheY, 35);
}

function take_snapshot()
{
    save ('delete.png');
}