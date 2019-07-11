import React from "react";
import PropTypes from "prop-types";

var   images = ['Eire Flag.jpg', 'Bob2011.jpg', 'Bob2017c.jpg', 'BobDad.jpg', 'Cal Flag 2.JPG', 'Cal Pride.jpg', 'Cliffs of Moor Castle.jpg',
        'Cliffs of Moor flags.jpg', 'Cliffs of Moor.jpg', 'Dollar Sign - Copy.jpg', 'Eire Flag.jpg', 'Occonnel St Dublin.JPG'];
var   images2 = ['Eire Flag.jpg', 'Bob2011.jpg', 'Bob2017c.jpg', 'BobDad.jpg', 'Cal Flag 2.JPG', 'Cal Pride.jpg', 'Cliffs of Moor Castle.jpg',
        'Cliffs of Moor flags.jpg', 'Cliffs of Moor.jpg', 'Dollar Sign - Copy.jpg', 'Eire Flag.jpg', 'Occonnel St Dublin.JPG'];
var   picked = [];
var   newArr = new Array(12);
export default class ClikyGame extends React.Component {
	
    getImages(){return images2;}
    getImage(idx){return images2[idx];}
	styles=['image-style1','image-style2','image-style3','image-style4','image-style5','image-style6','image-style7','image-style8','style9','style10','style11','style12'];
	styles2=this.styles;
	winCount=0;
	getStyle (idx){
		//alert("getStyle: "+newArr[idx]);
		return this.styles2[idx];
	}
    shuffle(arr=null)
    {
        if (arr === null)
            arr = images;
        var min = 0;
        var max = 11;
       
        //alert(newArr.length);hermione12
		newArr = new Array(12);
		this.styles2=new Array(12);
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
//				alert("random: "+random);
                newArr[i] = random;
				this.styles2[random]=this.styles[i];
			}
			//alert("shuffled");
            //alert(images2[0]);
        }
//alert(this.styles2);
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
		++this.winCount;
		picked.push(idx);
		return false;
    }
}