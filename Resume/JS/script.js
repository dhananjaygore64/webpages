function skillBar(value,skillBarId){
    /* get the width of skill bar container i.e Div element*/
    var width=document.querySelector(".skill-bar").style.width;
    /* remove the "px" characters from the width */
    width=width.replace("px","");
    /*  convert that string width into numeric value */
    width=parseInt(width);
    /* now get the user entered percent value of the width of Div container */
    width=(width*(value/100));
    /* set the width of skill bar (p element inside the Div container) equals to width */
    document.querySelector(skillBarId).style.width=(width+"px");
}

