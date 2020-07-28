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
    document.location.href = "https://www.linkedin.com/in/maumneto/";
}

function GoToGithub(){
    document.location.href = "https://github.com/maumneto";
}

function GoToGithub_2(){
    document.location.href = "https://github.com/";
}

function GoToChart(){
    document.location.href = "https://www.chartjs.org";
}

function Javascript(){
    document.location.href = "https://www.javascript.com";
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
    element.style.backgroundColor = "#ffffff";
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
