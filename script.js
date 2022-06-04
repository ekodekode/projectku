// ---dark mode--- //

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// ----live chat--- //
const chatModal = document.querySelector('.chat-modal');
const chatSupport = document.querySelector('.chat-support');

const showChat = document.querySelector('.show-chat');
const closeChat = document.querySelector('.close-chat');

showChat.addEventListener('click', function () {
  chatModal.classList.add('show');
  showChat.classList.add('hidden');
  setTimeout(() => {
    chatSupport.classList.add('expand');
  }, 500);
});

closeChat.addEventListener('click', function () {
  chatSupport.classList.remove('expand');
  setTimeout(() => {
    showChat.classList.remove('hidden');
  }, 820);
  setTimeout(() => {
    chatModal.classList.remove('show');
  }, 500);
});

// ---gamesuit--- //
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';
  return 'semut';
}

function getHasil(comp, player) {
  if (player == comp) return 'SERI';
  if (player == 'gajah') return comp == 'orang' ? 'MENANG' : 'KALAH';
  if (player == 'orang') return comp == 'gajah' ? 'KALAH' : 'MENANG';
  if (player == 'semut') return comp == 'orang' ? 'KALAH' : 'MENANG';
}

function putar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', './game/gamesuwit/img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('ul li img');
pilihan.forEach(function (pil) {
  console.log(pil);
  pil.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', './game/gamesuwit/img/' + pilihanComputer + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});
