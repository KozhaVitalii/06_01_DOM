/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

// В нашем html к примеру есть ul:

    // <ul class="site-nav">
    //   <li class="site-nav__item">
    //     <a href="" class="site-nav__link">О нас</a>
    //   </li>
    //   <li class="site-nav__item">
    //     <a href="" class="site-nav__link">Портфолио</a>
    //   </li>
    //   <li class="site-nav__item">
    //     <a href="" class="site-nav__link">Контакты</a>
    //   </li>
    // </ul>

// Из которго мы хотим получить ссылку на site-nav:
const navEl = document.querySelector('.site-nav');

// Благодаря нижеописанным свойствам мы можем очень быстро получить доступ к некоторым элементам:
// Для навігації по цій ієрархії елементи мають наступні властивості.
// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

// К примеру мы хотим получить доступ к первому элементу в ul:

// Первый способ более неопимальный:
// const firstNavItemEl = navEl.querySelector('.site-nav__item');

// Второй способ с помощью одного из вышеописанного свойства м можем получить быстрый доступ:
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);

// Наиболее часто используемые это:
// console.log(navEl.firstElementChild); // на первый элемент родителя
// console.log(navEl.children); //  можем получить на все дочерние элементы ul
// console.log(navEl.children[1]); //  можем получить доступ ко второму элементу коллекции ul
// console.log(navEl.lastElementChild); // на последний элемент родителя


