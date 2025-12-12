
const btn = document.getElementById('show-more-btn');
const hiddenItems = document.querySelectorAll('.hide-mobile');
const fourthItem = document.querySelector('.item-container:nth-child(4)');

btn.addEventListener('click', () => {
  // показати/сховати приховані елементи
  hiddenItems.forEach(item => item.classList.toggle('show'));

  // перевіряємо, чи зараз відкрито
  const isOpened = hiddenItems[0].classList.contains('show');

  // додаємо або прибираємо margin-bottom на 4-му елементі
  if (isOpened) {
    fourthItem.classList.add('mb');
  } else {
    fourthItem.classList.remove('mb');
  }

  // міняємо текст кнопки
  btn.innerHTML = isOpened ? 'Hide' : 'Show more';

  // прибираємо фокус після кліку, щоб hover/focus працював
  btn.blur();
});