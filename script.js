// ================= FORMULÁRIO =================

const formulario =
document.getElementById("formContato");

// Evento submit

formulario.addEventListener(
"submit",

function(evento){

    // Evita recarregar página

    evento.preventDefault();

    // ================= CAMPOS =================

    const nome =
    document
    .getElementById("nome")
    .value
    .trim();

    const email =
    document
    .getElementById("email")
    .value
    .trim();

    const mensagem =
    document
    .getElementById("mensagem")
    .value
    .trim();

    // ================= VALIDAÇÃO =================

    // Campos vazios

    if(
        nome === "" ||
        email === "" ||
        mensagem === ""
    ){

        alert(
            "Por favor, preencha todos os campos."
        );

        return;
    }

    // Validação simples e-mail

    if(
        !email.includes("@") ||
        !email.includes(".")
    ){

        alert(
            "Digite um e-mail válido."
        );

        return;
    }

    // ================= SUCESSO =================

    alert(
        "Mensagem enviada com sucesso!"
    );

    // Limpa formulário

    formulario.reset();

}
);

// ================= TEMA ESCURO =================

const botaoTema =
document.getElementById("temaBtn");

// Evento botão tema

botaoTema.addEventListener(

"click",

function(){

    // Alterna dark mode

    document.body.classList.toggle("dark");

    // Troca ícone

    if(
        document.body.classList.contains("dark")
    ){

        botaoTema.innerHTML = "☀️";

    }

    else{

        botaoTema.innerHTML = "🌙";

    }

}
);

// ================= ANIMAÇÃO MENU =================

// Scroll suave

document.querySelectorAll(
'.menu a'
).forEach(

function(link){

    link.addEventListener(

        'click',

        function(evento){

            evento.preventDefault();

            const id =
            this.getAttribute('href');

            const secao =
            document.querySelector(id);

            secao.scrollIntoView({

                behavior: 'smooth'

            });

        }

    );

}
);