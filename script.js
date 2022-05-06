
// trasação dos slides

var imgs = [];
var slid;
var imgAtual;
var maxImg;
var tmp;

// Botão do conteudo principal

var cont;
var p;


function preCarregamento() {
        var s = 1;
        for(i=0;i<5;i++) {
        imgs[i] = new Image();
        imgs[i].src="img/img"+[s]+".jpg";
        s++
    }
}

    function carregarImg(img) {
        slid.style.background="url('"+imgs[img].src+"') no-repeat center center";
        slid.style.backgroundSize ="cover";
        slid.style.transition = "all 0.7s";
    }

    function trocar() {
        imgAtual ++;
        if(imgAtual == maxImg) {
            imgAtual = 0;
        }
        carregarImg(imgAtual)
    }


function inicia() {
    preCarregamento();
    slid = document.getElementById("principal");
    imgAtual = 0;
    maxImg = imgs.length-1;
    carregarImg(imgAtual);
    tmp = setInterval(trocar, 4000);
    cont = document.getElementById("projetos")
    var p = 0

}

function display() {
    
    if (p == 0) {
        cont.style.display = "block";
        p ++
    } else {
        cont.style.display = "none";
        p = 0
    }
}

window.addEventListener("load",inicia);

