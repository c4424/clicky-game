import React from "react";
import PropTypes from "prop-types";

export default class ClikyGame extends React.Component {

	styles=['image-style1','image-style2','image-style3','image-style4','image-style5','image-style6','image-style7','image-style8','image-style9','image-style10','image-style11','image-style12'];
	styles2=this.styles;
	picked = new Array(12); // this array holds the images picked.
	winCount=0; // number of wins.
	getStyle (idx){
		return this.styles2[idx]; // return the style with the picture
	}
	startOver()
	{
		this.picked = new Array(12);
	}
    shuffle(arr=null)
    {
        if (arr === null)
            arr = this.styles;
        var min = 0;
        var max = 11;
       
        //alert(newArr.length);hermione12
		var newArr = new Array(12); // temporary array to hold random numbers
		this.styles2=new Array(12); // randomized styles will be put in this array
        for (var i in arr)  // loop through the arr to randomize pics(styles)
        {
            var random = parseInt((Math.random() * (+max - +min) + +min) + .5); // get a random number from 1 to 12.

            var tryCount = 0;
            while (this.isTaken(newArr, random) && ++tryCount < 500)// check to see if number already selected, try a maximum of 500 times.
                random = random = parseInt((Math.random() * (+max - +min) + +min) + .5);
				
            if (this.isTaken(newArr, random)) // couldn't find a random number, game over.
            {
                alert("All Taken");
                break;
            } else{ 
//				alert("random: "+random);
                newArr[i] = random; // store randome number.
				this.styles2[random]=this.styles[i]; // use it to put the image/style in the random style array.
			}
			//alert("shuffled");
            //alert(images2[0]);
        }
//alert(this.styles2);
    }
	isTaken(arr, pic)
    {
        for (var i in arr) // loop through array to see if pic (number) is already in the array.
            if (arr[i] === pic) // if it is return true.
                return true;
        return false; // not in array so not taken.
    }
	// if number selected by user is in the picked array then game is over.
    gameOver(idx)
    {
        if (this.isTaken(this.picked, idx))
        {
            return true; // found in array
        }
		++this.winCount; // increment win count.
		this.picked.push(idx); // add to picked array.
		return false; // return false, i.e. game is not over.
    }
}