canvas = document.getElementById("CanvasForMe");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "Car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car2.jpg"
car2_x = 10;
car2_y = 100;

background_image = "Background.jpg";

function Add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_ImageTag = new Image();
    car1_ImageTag.onload = uploadCar1;
    car1_ImageTag.src = car1_image;

    car2_imageTag = new Image();
    car2_imageTag.onload = uploadCar2;
    car2_imageTag = car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_ImageTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "87") {

        car1_up();
        console.log("W key");
    }

    if (keyPressed == "65") {

        car1_left();
        console.log("a key");
    }

    if (keyPressed == "83") {

        car1_down();
        console.log("S key");
    }

    if (keyPressed == "68") {

        car1_right();
        console.log("d key");
    }

    if (keyPressed == "38") {

        car2_up();
        console.log("Up arrow key");
    }

    if (keyPressed == "37") {

        car2_left();
        console.log("Left arrow key");
    }

    if (keyPressed == "40") {

        car2_down();
        console.log("Down arrow key");
    }

    if (keyPressed == "39") {

        car2_right();
        console.log("Right arrow key");
    }
}

function car1_right(){
    if (car1_x <= 700) {
        car1_x = car1_x+10;
        console.log(car1_x);
        uploadBackground();
        uploadCar1();
    }
}

function car1_left(){
    if (car1_x >= 0) {
        car1_x = car1_x-10;
        console.log(car1_x);
        uploadBackground();
        uploadCar1();
    }
}

function car1_up(){
    if (car1_y >= 0) {
        car1_y = car1_y-10;
        console.log(car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function car1_down(){
    if (car1_y <= 700) {
        car1_y = car1_y+10;
        console.log(car1_y);
        uploadBackground();
        uploadCar1();
    }
}
