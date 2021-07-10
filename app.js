var divAccess = document.childNodes[1].childNodes[2].childNodes[1].setAttribute("class", "container");

var accesPara = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum animi molestiae asperiores esse assumenda voluptates iusto nisi dolor fugiat, dolorem veniam? Consectetur commodi obcaecati nulla velit distinctio, fuga vero eligendi? Earum animi molestiae asperiores esse assumenda voluptates iusto nisi dolor fugiat, dolorem veniam? Consectetur commodi obcaecati nulla velit distinctio, fuga vero eligendi?"

var accesBtn = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].textContent = "DARK BG"

///////////////////////////////////////////////////////////////////////////////////////////
// onClick On BTn 

var BtnOnClick = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].setAttribute("onClick", "thmemeChnage()");

// set Attribute Para
var setAttriPara = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].setAttribute("class", "Para-def-bg-blue");



// set Attribute OnBtutton
var setAttrOnBtn = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].setAttribute("class", "Dark-bg-btn");





function thmemeChnage() {


    if (document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].textContent == "DARK BG") {


        document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].textContent = "LIGHT BG"



        // set Attribute OnBtutton
        var setAttrOnBtn = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].setAttribute("class", "light-bg-btn");



        // set Attribute Para
        var setAttriPara = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].setAttribute("class", "Para-bg-light");


    }

    else if (document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].textContent == "LIGHT BG") {



        document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].textContent = "DARK BG"




        // set Attribute OnBtutton
        var setAttrOnBtn = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].setAttribute("class", "Dark-bg-btn");

        // set Attribute Para
        var setAttriPara = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].setAttribute("class", "Para-def-bg-blue");


    }





}



// console.log(document.childNodes[1].childNodes[2].childNodes[1])
// console.log(accesBtn)