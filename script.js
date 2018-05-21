const flipResult = document.getElementById("flipResult");
const headsOrTails = document.getElementById("headsOrTails");
const buttonElement = document.getElementById('btn');
var coin = {
    state: 0,
    flip: function () {
        // randomly set this.state to be either 0 or 1
        this.state = (Math.floor(Math.random() * 2));
        console.log(this.state);
    },
    toString: function () {
        // return “H” or “T” depending on whether this.state is 0 or 1
        //coin.remove();
        if (this.state === 0) {
            let heads = document.createTextNode("Heads" + ", ");
            headsOrTails.appendChild(heads);
        } 

         else {
             let tails = document.createTextNode("Tails" + ", ");
             headsOrTails.appendChild(tails);
         }
    },
    toHTML: function () {
        // set the properties of the image element to show either heads or tails
        if (this.state === 0) {
        let heads = document.createElement("img");
        heads.setAttribute("src","heads.jpg");
        flipResult.appendChild(heads);
        // set the properties of the image element to show either heads or tails
        return;
        }
        else {
            let tails = document.createElement("img");
            tails.setAttribute("src","tails.jpg");
            flipResult.appendChild(tails);
            return;
        }

    }
};
// coin.flip();
// coin.toString();
buttonElement.addEventListener('click', function (event) {
    coin.flip();
    coin.toString();
    coin.toHTML();
});