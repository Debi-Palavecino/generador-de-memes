const buttonImageSection = document.getElementById("image-section");
const sectionImage = document.getElementById("section-image")
const sectionText = document.getElementById("section-text")
const buttonSectionText= document.getElementById("texto-section")


buttonImageSection.onclick = () => {
    if(sectionText.style.display="block"){
        sectionText.style.display="none"
        sectionImage.style.display="block"
    }
};
buttonSectionText.onclick=()=>{
    if(sectionImage.style.display="block")
    sectionImage.style.display="none"
    sectionText.style.display="block"
}
  /* primeras funciones para poder seguir estilizando el html */


  /* Modo claro oscuro  */
  const cuerpo = document.body;
  const colorMode = document.getElementById("white-mode");
  const head = document.getElementById("head");
  const main = document.getElementById("main");
  const optionAside =document.getElementById("option")
  
  colorMode.onclick = () => {
      if  (cuerpo.classList.contains("claro")) {
        cuerpo.classList.remove("claro");
        cuerpo.classList.add("oscuro");
        cuerpo.style.backgroundColor = "#917FB3";
        head.style.backgroundColor = "#795575";
        optionAside.style.backgroundColor="#E5BEEC"
        
    }
    else if(cuerpo.classList.contains("oscuro")) {
        cuerpo.classList.remove("oscuro");
        cuerpo.classList.add("claro");
        cuerpo.style.backgroundColor = "#FFC6AC";
        head.style.backgroundColor = "#F4a3c8";
        optionAside.style.backgroundColor="#C4C1A4";

    }
  };

  /*En el dia de hoy trabaje a fondo con los modos claro y obscuro proximamente buscare la opcion de modificar el input type range para que quede bien  */


  /* variables y funciones para modificar texto  */

  const textUp = document.getElementById("textUP")
  const textDown = document.getElementById("textDown")
  const textAreaUP = document.getElementById("textarea-superior")
 const textAreaDown = document.getElementById("textarea-inferior")
  const checkboxNoTextUp = document.getElementById("up-no-text")
  const checkboxNoTextDown = document.getElementById("down-no-text")

 textAreaUP.oninput=()=>{
    textUp.innerText = textAreaUP.value
 }
 textAreaDown.oninput=()=>{
    textDown.innerText= textAreaDown.value
 }

 checkboxNoTextUp.onchange=()=>{
    if(checkboxNoTextUp.checked){
        textUp.style.display="none"
    } else{
        textUp.style.display="block"
    }
}
checkboxNoTextDown.onchange=()=>{
    if(checkboxNoTextDown.checked){
        textDown.style.display="none"
    }else{
        textDown.style.display="block"
    }
}
/* funciones de tipos de fuentes  */

const fontsType = document.getElementById("fonts")
const fontsSize = document.getElementById("fonts-sizes")
fontsType.onchange=()=>{
    let newFont = fontsType.value
    textUp.style.fontFamily= newFont
    textDown.style.fontFamily=newFont
}

fontsSize.oninput=()=>{
    let newsize=  fontsSize.value
    textUp.style.fontSize=newsize+"px"
    textDown.style.fontSize=newsize+"px"
}

const buttonTextAlignLeft = document.getElementById("text-align-left")
const buttonTextAlignCenter = document.getElementById("text-align-center")
const buttonTextAlignRight = document.getElementById("text-align-right")


buttonTextAlignCenter.onclick=()=>{
    textUp.style.textAlign="center"
    textDown.style.textAlign="center"
}
buttonTextAlignLeft.onclick=()=>{
    textDown.style.textAlign="left"
    textUp.style.textAlign="left"
}
buttonTextAlignRight.onclick=()=>{
    textDown.style.textAlign="right"
    textUp.style.textAlign="right"
}

/* Funciones de Color de texto y fondo */

const textColor = document.getElementById("color-texto")
const backColor = document.getElementById("back-color")
const labelTextColor = document.getElementById("labelText")
const labelBackColor = document.getElementById("backColor")
const NoColorBackText =document.getElementById("back-transparent-color")

textColor.oninput=()=>{
    textUp.style.color=textColor.value
    textDown.style.color= textColor.value
    labelTextColor.innerHTML=textColor.value
}

backColor.oninput=()=>{
    textUp.style.backgroundColor=backColor.value
    textDown.style.backgroundColor=backColor.value
    labelBackColor.innerHTML=backColor.value
}

NoColorBackText.onchange=()=>{
    if (NoColorBackText.checked){
        textUp.style.backgroundColor="transparent"
        textDown.style.backgroundColor="transparent"
    }else{
        textUp.style.backgroundColor=backColor.value
        textDown.style.backgroundColor=backColor.value
    }
}

