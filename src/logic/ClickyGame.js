import React from "react";
import PropTypes from "prop-types";

var   images = ['Eire Flag.jpg', 'Bob2011.jpg', 'Bob2017c.jpg', 'BobDad.jpg', 'Cal Flag 2.JPG', 'Cal Pride.jpg', 'Cliffs of Moor Castle.jpg',
        'Cliffs of Moor flags.jpg', 'Cliffs of Moor.jpg', 'Dollar Sign - Copy.jpg', 'Eire Flag.jpg', 'Occonnel St Dublin.JPG'];
var   images2 = ['Eire Flag.jpg', 'Bob2011.jpg', 'Bob2017c.jpg', 'BobDad.jpg', 'Cal Flag 2.JPG', 'Cal Pride.jpg', 'Cliffs of Moor Castle.jpg',
        'Cliffs of Moor flags.jpg', 'Cliffs of Moor.jpg', 'Dollar Sign - Copy.jpg', 'Eire Flag.jpg', 'Occonnel St Dublin.JPG'];
var   picked = [];

export default class ClikyGame extends React.Component {

    getImages(){return images2;}
    getImage(idx){return images2[idx];}

    shuffle(arr=null)
    {
        if (arr === null)
            arr = images;
        var min = 0;
        var max = 11;
        var newArr = new Array(arr.length);
        //alert(newArr.length);hermione12

        for (var i in arr)
        {
            var random = parseInt((Math.random() * (+max - +min) + +min) + .5);

            var tryCount = 0;
            while (this.isTaken(newArr, random) && ++tryCount < 100)
                random = random = parseInt((Math.random() * (+max - +min) + +min) + .5);
            if (this.isTaken(newArr, random))
            {
                alert("All Taken");
                break;
            } else{
                newArr[i] = random;
				images2[random]=images[i];
			}
			//alert("shuffled");
            //alert(images2[0]);
        }

    }
	isTaken(arr, pic)
    {
        for (var i in arr)
            if (arr[i] === pic)
                return true;
        return false;
    }
    gameOver(idx)
    {
        //alert("gameOver: "+idx);
        if (this.isTaken(picked, idx))
        {
            //alert("Game Over!");
            return true;
        }
		picked.push(idx);
		return false;
    }
	
}