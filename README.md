# NoCSS
A JavaScript function to write CSS for DOM elements


## How To Use

Function take two arguments. first one can be an array of strings or a string. Second one takes an object. use CSS properties and the values to style the selected elements.

 Target elements using classes 
 

    css('.className', {color: "red",fontSize:"2rem"});

  Target elements using Id

    css('#id', {color: "red"});

  Target elements using html tags
  

    css('tagName', {color: "red"});

Target multiple elements 

    css(['.className','#Id'], {color: "red"});


 
   
