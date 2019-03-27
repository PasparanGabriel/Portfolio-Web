document.getElementById('card').addEventListener("mouseover", IN);
document.getElementById('card').addEventListener("mouseout", OUT);

function IN() {
  document.querySelector('#icon_style').style.visibility = 'visible';
}

function OUT() {
  document.querySelector('#icon_style').style.visibility = 'hidden';
}