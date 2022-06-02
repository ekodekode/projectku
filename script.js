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

// ---modal--- //

const modal_overlay = document.querySelector('#modal_overlay');
const modal = document.querySelector('#modal');

function openModal(value) {
  const modalCl = modal.classList;
  const overlayCl = modal_overlay;

  if (value) {
    overlayCl.classList.remove('hidden');
    setTimeout(() => {
      modalCl.remove('opacity-0');
      modalCl.remove('-translate-y-full');
      modalCl.remove('scale-150');
    }, 100);
  } else {
    modalCl.add('-translate-y-full');
    setTimeout(() => {
      modalCl.add('opacity-0');
      modalCl.add('scale-150');
    }, 100);
    setTimeout(() => overlayCl.classList.add('hidden'), 300);
  }
}
