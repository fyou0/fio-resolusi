const batu = document.querySelectorAll('.batu');
const virus = document.querySelectorAll('.virus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let batuSebelumnya;
let selesai;
let skor;

function randomBatu(batu) {
  const t = Math.floor(Math.random() * batu.length);
  const tRandom = batu[t];
  if (tRandom == batuSebelumnya) {
    randomBatu(batu);
  }
  batuSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanVirus() {
  const tRandom = randomBatu(batu);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanVirus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanVirus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = skor;
}

virus.forEach(t => {
  t.addEventListener('click', pukul);
});