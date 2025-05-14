// alert("Daniel Vasconcelos, Analista de BI")
  const menuHamburguer =document.querySelector('.menu-hamburguer');
  menuHamburguer.addEventListener('click',() => {
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

// Get elements for Power BI modal
var modalPowerBI = document.getElementById("popup-modal-powerbi");
var btnPowerBI = document.getElementById("read-more-powerbi");
var closePowerBI = document.getElementById("close-modal-powerbi");

// Open Power BI modal
btnPowerBI.onclick = function(event) {
  event.preventDefault();
  modalPowerBI.style.display = "flex";
};

// Close Power BI modal
closePowerBI.onclick = function() {
  modalPowerBI.style.display = "none";
};

// Get elements for Python modal
var modalPython = document.getElementById("popup-modal-python");
var btnPython = document.getElementById("read-more-python");
var closePython = document.getElementById("close-modal-python");

// Open Python modal
btnPython.onclick = function(event) {
  event.preventDefault();
  modalPython.style.display = "flex";
};

// Close Python modal
closePython.onclick = function() {
  modalPython.style.display = "none";
};

// Get elements for Database modal
var modalDatabase = document.getElementById("popup-modal-database");
var btnDatabase = document.getElementById("read-more-database");
var closeDatabase = document.getElementById("close-modal-database");

// Open Database modal
btnDatabase.onclick = function(event) {
  event.preventDefault();
  modalDatabase.style.display = "flex";
};

// Close Database modal
closeDatabase.onclick = function() {
  modalDatabase.style.display = "none";
};

// Close modals when clicking outside content
window.onclick = function(event) {
  if (event.target == modalPowerBI) {
    modalPowerBI.style.display = "none";
  }
  if (event.target == modalPython) {
    modalPython.style.display = "none";
  }
  if (event.target == modalDatabase) {
    modalDatabase.style.display = "none";
  }
};
