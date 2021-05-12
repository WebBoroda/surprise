const condition = document.querySelector('.condition');
const links = document.querySelector('.links');

const misteryFlower = document.querySelector('.mistery-flower');
const present = document.querySelector('.present');
const again = document.querySelector('.again');

let ok = document.querySelector('.ok');
let answerBtn = document.querySelector('.answear__btn');

let answearInputFlower = document.querySelector('.answear__input--flower');
let answearInputChampagne = document.querySelector('.answear__input--champagne');
let answearInputMartini = document.querySelector('.answear__input--martini');
let answearInputСondom = document.querySelector('.answear__input--condom');
let answearInputDress = document.querySelector('.answear__input--dress');
let answearInputAtlas = document.querySelector('.answear__input--atlas');
let answearInputSwimsuit = document.querySelector('.answear__input--swimsuit');

if (ok) {
  ok .addEventListener('click', (e) => {
    e.preventDefault();
    condition.classList.remove('show');
    condition.classList.add('hiden');
    links.classList.remove('hiden');
    links.classList.add('show');

  });
};

if (answearInputFlower) {
  answerBtn.addEventListener('click', answearFlower);
};

if (answearInputChampagne) {
  answerBtn.addEventListener('click', answearChampagne);
};


if (answearInputMartini) {
  answerBtn.addEventListener('click', answearMartin);
};

if (answearInputСondom) {
  answerBtn.addEventListener('click', answearСondom);
};

if (answearInputDress) {
  answerBtn.addEventListener('click',  answearDress);
};

if (answearInputAtlas) {
  answerBtn.addEventListener('click',  answearAtlas);
};

if (answearInputSwimsuit) {
  answerBtn.addEventListener('click',  answearSwimsuit);
};


function answearFlower(e) {
  e.preventDefault();
  let answear = answearInputFlower.value;
  if ( answear == 'Квітка' || answear == 'квітка' ) {
    misteryFlower.classList.remove('show');
    present.classList.add('show');
  }
  else {
    again.classList.add('show');
  }
};

function answearChampagne(e) {
  e.preventDefault();
  let answear = answearInputChampagne.value;
  if ( answear == 'Шампанське' || answear == 'шампанське' ) {
    misteryFlower.classList.remove('show');
    present.classList.add('show');
  }
  else {
    again.classList.add('show');
  }
};

function answearMartin(e) {
  e.preventDefault();
  let answear = answearInputMartini.value;
  if ( answear == 'Мартіні' || answear == 'мартіні' ) {
    misteryFlower.classList.remove('show');
    present.classList.add('show');
  }
  else {
    again.classList.add('show');
  }
};

function answearСondom(e) {
  e.preventDefault();
  let answear = answearInputСondom.value;
  if ( answear == 'Презерватив' || answear == 'презерватив' ) {
    misteryFlower.classList.remove('show');
    present.classList.add('show');
  }
  else {
    again.classList.add('show');
  }
};

function answearDress(e) {
  e.preventDefault();
  let answear = answearInputDress.value;
  if ( answear == 'Плаття' || answear == 'плаття' ) {
    misteryFlower.classList.remove('show');
    present.classList.add('show');
  }
  else {
    again.classList.add('show');
  }
};

function answearAtlas(e) {
  e.preventDefault();
  let answear = answearInputAtlas.value;
  if ( answear == 'Атлас' || answear == 'атлас' ) {
    misteryFlower.classList.remove('show');
    present.classList.add('show');
  }
  else {
    again.classList.add('show');
  }
};

function answearSwimsuit(e) {
  e.preventDefault();
  let answear = answearInputSwimsuit.value;
  if ( answear == 'Купальник' || answear == 'купальник' ) {
    misteryFlower.classList.remove('show');
    present.classList.add('show');
  }
  else {
    again.classList.add('show');
  }
};







//# sourceMappingURL=main.js.map
