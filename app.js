const buttonImageSection = document.getElementById("image-section");
const sectionImage = document.getElementById("section-image")
const sectionText = document.getElementById("section-text")
const buttonSectionText= document.getElementById("texto-section")
const buttonClosePanel = document.getElementById ("close.panel")
const asidePanel = document.getElementById("option")

buttonImageSection.onclick = () => {
    if(sectionText.style.display="block"){
        sectionText.style.display="none"
        sectionImage.style.display="block"
        asidePanel.classList.remove("active");

    }
};
buttonSectionText.onclick=()=>{
    if(sectionImage.style.display="block")
    sectionImage.style.display="none"
    sectionText.style.display="block"
    asidePanel.classList.remove("active");

}
buttonClosePanel.onclick=()=>{
    asidePanel.classList.add("active");
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
    textUp.innerHTML = textAreaUP.value
 }
 textAreaDown.oninput=()=>{
    textDown.innerHTML= textAreaDown.value
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
        textUp.style.backgroundColor= 'transparent'
        textDown.style.backgroundColor="transparent"
        image.style.position="absolute"
        
    }else{
        textUp.style.backgroundColor=backColor.value
        textDown.style.backgroundColor=backColor.value
        image.style.position="static"
    }
}

/* funciones de botones de bordes y espaciados e interlineados*/
const butonBorderNone = document.getElementById("border-none")
const butonBorderClaro = document.getElementById("border-claro")
const butonBorderOscuro = document.getElementById("border-oscuro")
const inputPaddingText=document.getElementById("input-padding-text")


butonBorderClaro.onclick=()=>{
    textUp.style.textShadow="2px 2px white"
    textDown.style.textShadow="2px 2px white"
}
butonBorderOscuro.onclick=()=>{
    textDown.style.textShadow="2px 2px black"
    textUp.style.textShadow="2px 2px black"
}
butonBorderNone.onclick=()=>{
    textDown.style.textShadow="transparent"
    textUp.style.textShadow="transparent"
}

inputPaddingText.oninput=()=>{
    let newPadding = inputPaddingText.value
    textDown.style.padding= newPadding+"px"
    textUp.style.padding= newPadding+"px"
}
/*Interlineado*/
const interLine = document.getElementById("select-value-letterSpacing")

interLine.onchange=()=>{
    textUp.style.lineHeight = interLine.value;
    textDown.style.lineHeight=interLine.value
}


/* funciones de Imagen y filtros */

const urlImage = document.getElementById("input-text-url")
const image = document.getElementById("picture")

urlImage.oninput=()=>{
    image.style.backgroundImage= "url("+urlImage.value+")"
}

/*funciones fondo color de imagen */
const backColorImage= document.getElementById("select-color-back-image")
const spanColorImage = document.getElementById("span-color-back-image")
const conteinerMeme = document.getElementById("ConteinerMeme")


backColorImage.oninput=()=>{
    spanColorImage.innerText = backColorImage.value
    conteinerMeme.style.backgroundColor=backColorImage.value
}

/* funciones de flitros slider*/
const opacidad = document.getElementById("opacity")
const contraste = document.getElementById("contrast")
const desenfoque= document.getElementById("desenfoque")
const greyScale = document.getElementById("grey-scale")
const sepia =document.getElementById("sepia")
const hue = document.getElementById("hue")
const saturado = document.getElementById("saturado")
const negativo =document.getElementById("negativo")
const bright = document.getElementById("brightness");
const botonResetFilters=document.getElementById("restablecer-filtros")
const applyFilters = () => {
    image.style.filter = `
        brightness(${bright.value}%)
        opacity(${opacidad.value}%)
        contrast(${contraste.value}%)
        blur(${desenfoque.value}px)
        grayscale(${greyScale.value}%)
        sepia(${sepia.value}%)
        hue-rotate(${hue.value}deg)
        saturate(${saturado.value}%)
        invert(${negativo.value}%)
    `;
};

bright.oninput=applyFilters;
opacidad.oninput=applyFilters;
contraste.oninput=applyFilters;
desenfoque.oninput=applyFilters;
greyScale.oninput=applyFilters;
sepia.oninput=applyFilters;
hue.oninput=applyFilters;
saturado.oninput=applyFilters;
negativo.oninput=applyFilters;

const resetFilters = () => {
    bright.value = 100;
    opacidad.value = 100;
    contraste.value = 100;
    desenfoque.value = 0;
    greyScale.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturado.value = 100;
    negativo.value = 0;
    applyFilters(); // Aplicar filtros después de restablecer los valores
};

botonResetFilters.onclick = resetFilters;



/*boton descarga y su funcion */ 
const botonDescarga = document.getElementById("download-image")

botonDescarga.onclick = () => {
    console.log("no funciono")
    domtoimage.toBlob(document.getElementById('image'))
        .then(function (blob) {
            window.saveAs(blob, 'meme.png');
        });
};
    