
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// Modais (Power BI, Python, Database)
var modalPowerBI = document.getElementById("popup-modal-powerbi");
var btnPowerBI = document.getElementById("read-more-powerbi");
var closePowerBI = document.getElementById("close-modal-powerbi");

if (btnPowerBI) {
    btnPowerBI.onclick = function(event) {
        event.preventDefault();
        modalPowerBI.style.display = "flex";
    };
}

if (closePowerBI) {
    closePowerBI.onclick = function() {
        modalPowerBI.style.display = "none";
    };
}

var modalPython = document.getElementById("popup-modal-python");
var btnPython = document.getElementById("read-more-python");
var closePython = document.getElementById("close-modal-python");

if (btnPython) {
    btnPython.onclick = function(event) {
        event.preventDefault();
        modalPython.style.display = "flex";
    };
}

if (closePython) {
    closePython.onclick = function() {
        modalPython.style.display = "none";
    };
}

var modalDatabase = document.getElementById("popup-modal-database");
var btnDatabase = document.getElementById("read-more-database");
var closeDatabase = document.getElementById("close-modal-database");

if (btnDatabase) {
    btnDatabase.onclick = function(event) {
        event.preventDefault();
        modalDatabase.style.display = "flex";
    };
}

if (closeDatabase) {
    closeDatabase.onclick = function() {
        modalDatabase.style.display = "none";
    };
}

window.onclick = function(event) {
    if (event.target == modalPowerBI) modalPowerBI.style.display = "none";
    if (event.target == modalPython) modalPython.style.display = "none";
    if (event.target == modalDatabase) modalDatabase.style.display = "none";
};

const whatsappForm = document.getElementById('whatsapp-form');

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('name').value;
        const assunto = document.getElementById('subject').value;
        const mensagemCliente = document.getElementById('message').value;

        // --- SEU NÚMERO ---
        const meuNumero = "5592991071385"; 

        // Criando uma saudação dinâmica
        const saudacao = `Olá, Daniel! Meu nome é *${nome}*.`;
        
        // Mensagem estruturada para parecer um chat e não um formulário fixo
        const textoMensagem = `${saudacao}\n\n` +
                              `Estou entrando em contato sobre: *${assunto}*\n` +
                              `"${mensagemCliente}"`;

        const textoCodificado = encodeURIComponent(textoMensagem);
        const urlWhatsApp = `https://wa.me/${meuNumero}?text=${textoCodificado}`;

        window.open(urlWhatsApp, '_blank');
        whatsappForm.reset();
    });
}

