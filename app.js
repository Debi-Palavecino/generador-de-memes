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