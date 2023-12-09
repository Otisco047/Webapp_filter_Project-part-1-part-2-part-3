function preload() {}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();

    poseNET = ml5.poseNet(video, modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300)
}

function take_pic() {
    save("my_filter_image.png")
}

function modelLoaded() {
    console.log("poseNET is initialized");
    poseNET.on("pose", getResults);
}

function getResults(results) {
    if (results.length > 0) {
        //console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x, nose_y);
    }
}