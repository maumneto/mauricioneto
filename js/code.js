function return_site(){
    document.location.href = "https://maumneto.github.io/mauricioneto/";
}

function GoToLattes(){
    document.location.href = "http://lattes.cnpq.br/7534400645876830";   
}

function GoToScholar(){
    document.location.href = "https://scholar.google.com.br/citations?user=OxTO3CQAAAAJ&hl=pt-BR";
}

function GoToLinkedin(){
    document.location.href = "https://www.linkedin.com/in/maur%C3%ADcio-moreira-neto-a1a624aa/";
}

function send_mail(){
    ConfirmBoxEmail();
}


function ButtonMouseOver(element){
    element.style.color = "#4169E1";
    element.style.backgroundColor = "#E0FFFF";
}

function ButtonMouseOut(element){
    element.style.color = "#000000";
    element.style.backgroundColor = "white";
}

function BigImgOver(element){
    element.style.height = "48px";
    element.style.width = "48px";
}

function BigImgOut(element){
    element.style.height = "40px";
    element.style.width = "40px";
}

function ConfirmBoxEmail(){
    var return_value;
    return_value = confirm("Você pretende mandar um E-mail?");
    
    if(return_value == true){
        document.location.href = "mailto:maumneto@gmail.com";
    } else {
        return;
    }
}
