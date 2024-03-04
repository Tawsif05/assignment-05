function selectedBgChange(btnId){
    const btnElement = document.getElementById(btnId);
    btnElement.classList.add('bg-[#1DD100]');
    return btnElement;
    
}

function textToIntegerNumber(elementId){
    const element = document.getElementById(elementId);
    const elementInnerText = element.innerText;
    const elementValue = parseInt(elementInnerText);
    return elementValue;
}

function setInnerText(elementId, sitNumber){ 
    const element = document.getElementById(elementId);
    element.innerText = sitNumber;
}