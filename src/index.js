import './style.css';
import logoHeader from './header_white_shadow.png';
import designImgUrl from "./1.jpg";
import aboutusImgUrl from "./2.jpg";
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
function createTextDiv(text, cls, id){
    const textDiv = document.createElement('div');
    const wrappedDiv = document.createElement('div');
    wrappedDiv.textContent = text;
    textDiv.appendChild(wrappedDiv);
    if (cls){
        textDiv.classList.add(cls);
    }

    if (id){
        textDiv.id = id;
    }


    return textDiv;
}

function headerComponents() {
    const header = document.createElement('div');
    header.classList.add('header');
    const logo = new Image();
    logo.src = logoHeader;
    
    header.appendChild(logo);

    return header;
}


function mainComponents(){
    const main = document.createElement('main');

    // create design component which contain text and img
    const designDiv = document.createElement('div');
    designDiv.id = "design";
    designDiv.classList.add("main-component");

    // add design text
    designDiv.appendChild(createMultipleTextDiv(["Thiết Kế","Giấc Mơ"], "main-component-text","design-text"));

    // add design img
    const designImgDiv = document.createElement('div');
    designImgDiv.id = "design-img"
    const designImg = new Image();
    designImg.src = designImgUrl;
    designImgDiv.appendChild(designImg);
    designDiv.appendChild(designImgDiv);

    // create about-us component which contain text and img
    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = "about-us";
    aboutUsDiv.classList.add("main-component");

    // add about-us text
    aboutUsDiv.appendChild(createTextDiv("Về Tụi Mình", "main-component-text", "about-us-text"));

    // add about-us img
    const aboutUsImgDiv = document.createElement('div');
    aboutUsImgDiv.id = "about-us-img"
    const aboutUsImg = new Image();
    aboutUsImg.src = aboutusImgUrl;
    aboutUsImgDiv.appendChild(aboutUsImg);
    aboutUsDiv.appendChild(aboutUsImgDiv);

    // add 2 main components to main div
    main.appendChild(designDiv);
    main.appendChild(aboutUsDiv);

    return main;
}

document.body.appendChild(headerComponents());
document.body.appendChild(mainComponents());
