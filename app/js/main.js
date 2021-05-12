
const misteryFlower = document.querySelector('.mistery-flower');
const present = document.querySelector('.present');
const again = document.querySelector('.again');


document.querySelector('.answear__btn').addEventListener('click', answearFlower);

document.querySelector('.answear__btn').addEventListener('click', answearChampagne);

document.querySelector('.answear__btn').addEventListener('click', answearMartin);

document.querySelector('.answear__btn').addEventListener('click', answearСondom);

document.querySelector('.answear__btn').addEventListener('click', answearDress);

document.querySelector('.answear__btn').addEventListener('click', answearAtlas);

document.querySelector('.answear__btn').addEventListener('click', answearSwimsuit);


function answearFlower(e) {
  e.preventDefault();
  let answear = document.querySelector('.answear__input--flower').value;
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
  let answear = document.querySelector('.answear__input--champagne').value;
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
  let answear = document.querySelector('.answear__input--martini').value;
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
  let answear = document.querySelector('.answear__input--condom').value;
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
  let answear = document.querySelector('.answear__input--dress').value;
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
  let answear = document.querySelector('.answear__input--atlas').value;
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
  let answear = document.querySelector('.answear__input--swimsuit').value;
  if ( answear == 'Купальник' || answear == 'купальник' ) {
    misteryFlower.classList.remove('show');
    present.classList.add('show');
  }
  else {
    again.classList.add('show');
  }
};







//# sourceMappingURL=main.js.map
