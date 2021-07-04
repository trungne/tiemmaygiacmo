import './style.css';
import logoHeader from './header.png';
import designImgUrl from "./1.jpg";
import aboutusImgUrl from "./2.jpg";

function headerComponents() {
    const header = document.createElement('header');
    header.classList.add('header');
    const logo = new Image();
    logo.src = logoHeader;
    
    header.appendChild(logo);

    return header;
}
function createMultipleTextDiv(TextArray, cls, id){
    const textDiv = document.createElement('div');
    for (let i = 0; i < TextArray.length; i++){
        let paragraph = document.createElement('div');
        paragraph.textContent = TextArray[i];
        textDiv.appendChild(paragraph);
    }
    if (cls){
        textDiv.classList.add(cls);
    }

    if (id){
        textDiv.id = id;
    }

    return textDiv;
    
}
function mainComponents(){
    const main = document.createElement('main');

    

    const designDiv = document.createElement('div');
    designDiv.id = "design";
    designDiv.classList.add("main-component");

    // add design text
    const designText = ["Thiết", "Kế", "Giấc", "Mơ"];
    designDiv.appendChild(createMultipleTextDiv(designText, "main-component-text","design-text"));

    // add design img
    const designImgDiv = document.createElement('div');
    designImgDiv.id = "design-img"
    const designImg = new Image();
    designImg.src = designImgUrl;
    designImgDiv.appendChild(designImg);
    designDiv.appendChild(designImgDiv);

    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = "about-us";
    aboutUsDiv.classList.add("main-component");
    const aboutUsText = ["Về", "Tụi", "Mình"];
    aboutUsDiv.appendChild(createMultipleTextDiv(aboutUsText, "main-component-text", "about-us-text"));

    const aboutUsImgDiv = document.createElement('div');
    aboutUsImgDiv.id = "about-us-img"
    const aboutUsImg = new Image();
    aboutUsImg.src = aboutusImgUrl;
    aboutUsImgDiv.appendChild(aboutUsImg);
    aboutUsDiv.appendChild(aboutUsImgDiv);

    main.appendChild(designDiv);
    main.appendChild(aboutUsDiv);

    return main;
}

document.body.appendChild(headerComponents());
document.body.appendChild(mainComponents());
