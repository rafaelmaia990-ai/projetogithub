/* ================================================= */
/* MENU ATIVO DURANTE A ROLAGEM */
/* ================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ================================================= */
/* ANIMAÇÃO AO ROLAR A PÁGINA */
/* ================================================= */

function revelar() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revelar);

revelar();

/* ================================================= */
/* ANO AUTOMÁTICO NO FOOTER */
/* ================================================= */

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}

/* ================================================= */
/* EFEITO DIGITAÇÃO NO HERO */
/* ================================================= */

const texto =
"Desenvolvedor Web | HTML | CSS | JavaScript | Python";

const typing = document.getElementById("typing");

let i = 0;

function escrever() {

    if (typing && i < texto.length) {

        typing.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 70);

    }

}

escrever();

/* ================================================= */
/* BOTÃO VOLTAR AO TOPO */
/* ================================================= */

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.id = "btn-top";

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btnTop.style.display = "block";

    } else {

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ================================================= */
/* CONTADOR DE HABILIDADES */
/* ================================================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ================================================= */
/* EFEITO NOS CARDS DE PROJETO */
/* ================================================= */

const projetos = document.querySelectorAll(".projeto-card");

projetos.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

console.log("Portfólio carregado com sucesso!");