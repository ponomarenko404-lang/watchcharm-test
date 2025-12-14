const btn = document.getElementById('show-more-btn');
const hiddenItems = document.querySelectorAll('.hide-mobile');
const fourthItem = document.querySelector('.item-container:nth-child(4)');
const fifthItem = document.querySelector('.item-container:nth-child(5)');

btn.addEventListener('click', () => {
  // показуємо / ховаємо 5 і 6 айтем
  hiddenItems.forEach(item => item.classList.toggle('show'));

  const isOpened = hiddenItems[0].classList.contains('show');

  if (isOpened) {
    // додаємо margin між 4 і 5
    fourthItem.classList.add('mb');

    // плавна прокрутка до 5-го айтема
    fifthItem.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // прибираємо margin назад
    fourthItem.classList.remove('mb');
  }

  // міняємо текст кнопки
  btn.textContent = isOpened ? 'Hide' : 'Show more';

  // прибираємо focus, щоб hover працював одразу
  btn.blur();
});
