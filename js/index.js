////////////////////Part 1//////////////////////////
///invoking a function on an html element
var addBG = 'yes';

function switchBG(){
  if(addBG==='yes')
    {
      document.body.className = 'withBG';
      addBG = 'no';
    }
  else{
    document.body.className = 'withoutBG';
    addBG = 'yes';
  }
}

document.getElementById('background_switch').onclick = switchBG;



////////////////////Part 2//////////////////////////
///changing an element first saved as a variable
function changeImage()
{
    console.log("Starts changing images");
    var img = document.getElementById("changing-img");
    //img.style.height = "120px" ;
    img.src = images[index]; //note that 'src' is the attribute where we would normally define our variable
    index++;

    //this conditional restarts the cycle
    if(index >= images.length){
      index = 0;
    } 

    fadeInImg(img); 
    setTimeout("changeImage()", 3000); //in milliseconds so this is 3 seconds
    setTimeout(fadeOutImg, 2000, img); //'img' is a parameter for 'fadeOutImg'
}

var images = [];
var index = 0;

images[0] = "img/degas2.jpeg";
images[1] = "img/degas3.jpeg";
images[2] = "img/degas1.jpeg";

document.getElementById('img_switch').onclick = changeImage;


///////////////////Part 3///////////////////////
//working with loops by fading IN the next image
function fadeInImg(el){

  
  for (var i = 0 ; i<=1 ; i = i + 0.01){
    
    increaseOpacityOverTime(el, i);
  }
}

//makes sure the opacity value gets changed progressively and not all in one go
function increaseOpacityOverTime(el, i) {
  
  //the processing power of your computer would normally loop through all the 'i' values and
  //change the opacity values BEFORE ever DISPLAYING to your screen
  //i.e. because the calculation would happen so fast, your screen would not reflect a fade at all
  //However, we are able to accomplish the fade by "slowing down" when we change the opacity
  //the JavaScript built-in 'setTimeout' function allows us to call a function for the exact duration specified
  //in this case 'setTimeout' will wait 'i*1000' milliseconds before executing 'setOpacityValue'
  setTimeout( function(){ setOpacityValue(el,i); } , i * 1000); //'i' is a decimal value changing from 0 and 1
}

//changes the opacity value of the element ('el') passed in by the opacity value 'i'
function setOpacityValue(el,i)
{
  el.style.opacity = i;
}

//working with loops by fading OUT the next image
function fadeOutImg(el){
  
    
    for (var i = 1 ; i>=0 ; i = i - 0.01){
      
      decreaseOpacityOverTime(el, i);
    }
}

function decreaseOpacityOverTime(el, i) {
  
  setTimeout( function(){ setOpacityValue(el,i); } , (1-i) * 1000); //'i' is a decimal value changing from 1 and 0
}

