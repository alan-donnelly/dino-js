var thingsToLoad = [
    "dino-city.png"
];

var g = hexi(480, 360, setup, thingsToLoad);
g.backgroundColor = "white";
g.start();

var dino;

function setup() {
    g.state = update;
        
}


function update() {

}