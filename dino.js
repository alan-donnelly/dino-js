var thingsToLoad = [
    "dino-city.png"
];

var game = hexi(480, 360, setup, thingsToLoad);
game.backgroundColor = "white";
game.start();

var dino;

function setup() {
    game.state = update;
        
}

function update() {

}