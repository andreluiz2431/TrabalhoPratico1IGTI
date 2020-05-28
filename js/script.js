// ---------- Mostrar página penas depois que carregada ------------
window.addEventListener('load', start);

function start() {
  console.log('Página totalmente carregada');
}

// -----------------------------------------------------------------

// ---------- buscar componente na DOOM ------------

var range = [
  document.querySelector('#rangeR'),
  document.querySelector('#rangeG'),
  document.querySelector('#rangeB'),
];
var texBox = [
  document.querySelector('#textBoxR'),
  document.querySelector('#textBoxG'),
  document.querySelector('#textBoxB'),
];

var colorBox = document.querySelector('#corRGB');

// -------------------------------------------------

var i = 0;
while (i < range.length) {
  // --- quando elemento mudado executar função 'changeTextbox' ---

  range[i].addEventListener('change', changeTextbox);

  // --------------------------------------------------------------

  function changeTextbox() {
    i = 0;
    var i = 0;

    // range.length -> é o tamanho do elemento, ou seja o tamanho de range

    while (i < range.length) {
      texBox[i].value = range[i].value;
      colorBox.style.backgroundColor =
        'rgb(' +
        texBox[0].value +
        ',' +
        texBox[1].value +
        ',' +
        texBox[2].value +
        ')';
      i++;
    }
  }
  i++;
}
