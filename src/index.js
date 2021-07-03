import './style.css';
import logoHeader from './header.png';

function headerComponents() {
    const header = document.createElement('header');

    const logo = new Image();
    logo.src = logoHeader;
    
    header.appendChild(logo);

    return header;
}
function createMultipleParagraphs(TextArray, cls, id){
    const textDiv = document.createElement('div');
    for (let i = 0; i < TextArray.length; i++){
        let paragraph = document.createElement('span');
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
    
    const designText = ["Thiết", "Kế", "Giấc", "Mơ"];
    designDiv.appendChild(createMultipleParagraphs(designText, "text"));

    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = "about-us";
    aboutUsDiv.classList.add("main-component");

    const aboutUsText = ["Về", "Tụi", "Mình"];
    aboutUsDiv.appendChild(createMultipleParagraphs(aboutUsText, "text"));

    main.appendChild(designDiv);
    main.appendChild(aboutUsDiv);

    return main;
}

document.body.appendChild(headerComponents());
document.body.appendChild(mainComponents());
