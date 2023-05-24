import React from "react";
import angel_cat from '../images/angel_cat.png';
import devil_cat from '../images/devil_cat.png';

export default class AngelDevilScale extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rainiScore : 10, //out of 100
            scoreDescription : "Raini has been rather loving and affectionate lately, we view her fondly. tdkjfha sdfjkh aslkdfh askldjf lkajh sldkfjh aslkdfh ",
        };
    }

    render() {
        return(
            <div> 
                <canvas id="catScale"></canvas>
                <img id="angelCatImg" src={angel_cat} alt="angel cat" style={{display:"none"}}></img>
                <img id="devilCatImg" src={devil_cat} alt="devil cat" style={{display:"none"}}></img>
            </div>
        );
    }

    componentDidMount() {
        // Get Canvas Element
        const canvas = document.getElementById('catScale');
        const ctx = canvas.getContext("2d");
        const angelImg = document.getElementById('angelCatImg');
        const devilImg = document.getElementById('devilCatImg');

        // Set up Canvas 
        canvas.width = window.innerWidth;
        canvas.height = 60;

        // Draw 1-D scale 
        var grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "green");
        ctx.fillStyle = grd;
        ctx.fillRect(canvas.width/4, 20, canvas.width/2, 5); //from 25% to 75% (x, y, width, height)

        // Add end images 
        ctx.drawImage(angelImg, (canvas.width/4)*3, 0);
        ctx.drawImage(devilImg, (canvas.width/4)-35, 0);

        // Draw raini point on scale - circle
        var rainiX = this.getRainiScaleX(canvas.width/2) + (canvas.width/4);
        ctx.beginPath();
        ctx.arc(rainiX, 22, 8, 0, Math.PI*2, true); 
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
        // Draw raini point on scale - triangle 
        ctx.beginPath();
        ctx.moveTo(rainiX, 40);
        ctx.lineTo(rainiX + 5, 55);
        ctx.lineTo(rainiX - 5, 55);
        ctx.fill();

        // Draw description of score 
        // var textX = canvas.width/4 + (canvas.width/2 * 0.15);
        // var textWidth = (canvas.width/4) + (canvas.width/2 * 0.85);
        // ctx.fillText(this.state.scoreDescription, textX, 80, textWidth)

      }

    // given width of scale, and raini rating (out of 100), 
    // function returns pixel value at with raini will be placed relative to scale start 
    getRainiScaleX(width){
        var ratio = this.state.rainiScore / 100;
        return width * ratio;
    }
}