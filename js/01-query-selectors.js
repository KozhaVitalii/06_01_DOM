// const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

// console.log(document);
// console.dir(document);

const navEl = document.querySelector('ul') // в скобках указываем css класс через
// который хотим достучаться к тегу(объекту на нашей html странице)
// console.log(navEl); // в результате получаем ссылку на весь наш список.
// console.dir(navEl); // мы видим что любей тег в html это объект

// В итоге метод "querySelector" - возвращает один элемент, не коллекцию. При этом этот метод ищет
// первый попавшийся селектор с указанным имнем, т.е. до первого совпадения. Типа как find в перебирающих
// методах массива. Ну обычно подставляется не 'ul' а его назание селектора, которое мы ему присвоили в
// css файле. Если указанный селектор не найден, то выдаст null.

// Если хотим получить список всех однотипных элементов, к примеру '.site-nav__link', используем:
// "querySelectorAll", в результате отбирает весь список элементов (массив) с селектором, которые есть в документе.

const navlinkEl_1 = document.querySelector('.site-nav__link') // так один элемент найдёт
console.log(navlinkEl_1); // один элемент

// а так весь список элементов с указанным классом:

const navlinkEl_2 = document.querySelectorAll('.site-nav__link') 
console.log(navlinkEl_2); 

// Если класс будет не найден то вернет пустой массив

// Так же мы можем записать так:

const navlinkEl = navEl.querySelectorAll('.site-nav__link') 
console.log(navlinkEl); 

// Это значит что мы указали конкретный элемент внутри которого(в поддереве) поёди и поищи указанные классы ну
// или класс. 


// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);

/*
 * Document.querySelector* и Element.querySelector*
 */
