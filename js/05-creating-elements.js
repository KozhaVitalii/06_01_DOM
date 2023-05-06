/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */

// Используем метод createElement в который указываем элемент (тег), который хотим создать ('h1')

// const titleEl = document.createElement('h1'); // таким образом мы создали элемент в памяти, в документе его 
// ещё нет
// titleEl.classList.add('page-title'); // добавили класс новому элементу
// titleEl.textContent = 'Это заголовок страницы :)'; // добавили текстовый контент между ""
// console.log(titleEl);
// По сути мы сконструировали DOM элемент в памяти, осталось добавить его в документ

// Первый метод который позволяет это сделать это: "appendChild(elem)"
// Перед методом необходимо обязательно указать родительский элемент, т.е.в кого мы хотим добавить новый
// элемент.

// document.body.appendChild(titleEl);

// Что после этого произойдёт ? Наш новый элемент добавиться последним элементом в элемент родитель, на котором
// мы вызвали метод, т.е. в body и одобразиться в документе.

// Итог таков: сначала создаем элемент, добавляем в него всё необходимые(классы, атрибуты и т.д.), только
// после этого добавляем новый элемент в документ.
// Метод "appendChild" - добавляет новый элемент в конец родителя!!!


// Разберем ещё один пример:

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img'); // создаем пустой тег 
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg'; // добавляем ссылку на картинку
imageEl.alt = 'valais-alpine-mountains-glacier'; // добавляем описание
imageEl.width = 320; // задаем параметры изображения
// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero'); // выбираем класс элемента, т.е. нашего героя
heroEl.appendChild(titleEl); // вкладываем в него наш заголовок
heroEl.appendChild(imageEl); // и далее вкладіваем изображение

// Используем метод "append", позволяет добавить последовательно в указанном порядке, столько новых элементов,
// сколько необходимо, добавляет новые элементы в конец:  
heroEl.append(titleEl, imageEl); //  если запишем так, то мы вкладываем в родителя наши новые элементы в
// заданной последовательности.В примере ниже мы вкладываем матрешку(когда в 'li' вложен 'а'), здесь теги
// самостоятельные. Такая запись будет гораздо оптимальнее т.к. делает только одно обращение к DOM.

// "prepend" работает по аналогии с "append", но вставляет необходимый список новых объектов в самое начало.

// Ещё один пример:
/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li'); // создаем новый элемент 
navItemEl.classList.add('site-nav__item'); // вешаем класс на новый элемент

const navLinkEl = document.createElement('a'); // создаем новый элемент ссылку "а" для элемент li (см. пред.шаг)
navLinkEl.classList.add('site-nav__link'); // добавим ему класс 
navLinkEl.textContent = 'Личный кабинет'; // добавим на него текстовый контент
navLinkEl.href = '/profile'; // добавим элементу атрибут

// Созданные в памяти два новых элемента пока ещё не знают друг про друга, они полностью независимые:
// const navItemEl = document.createElement('li');
// const navLinkEl = document.createElement('a');

// На этом шаге мы с помощью метода appendChild добавим нашему родителю "li" новый элемент "а", каждый
// последующий элемент будет добавляться в конец, в данном случае appendChild подходит прекрасно:
navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

// Что происходит далее ? Мы вложили "а" в "li", а наша "li" все ещё не добавлена к своему родителю и вся эта
// конструкция пока ещё находится просто в памяти.

// Мы находим класс родителя, т.е.нашего ul - '.site-nav'.Для инфо у "li" создали класс 'site-nav__item', а 
// у "а", создали класс 'site-nav__link'

const navEl = document.querySelector('.site-nav'); // нашли по классу нашего родителя
navEl.appendChild(navItemEl); // вложили в родителя нашу конструкцию из "li" в которую уже вложен "а". Новая
// конструкция добавиться в конец списка, т.к. используем метод appendChild. Т.е. м вешаем новый элемент
// и все его поддерево которое подготовили в памяти. В итоге собираем в памяти всю конструкцию, которая
// нам нужна и далее за одну операцию вешем на необходимого родителя в документ. DOM очень не любит когда
// к нему обращются много раз!!!

// Если хотим первым элементом поставить в список или в другом порядке, то используем метод insertBefore.
// perentItem.insertBefore(El, nextSibling);

navEl.insertBefore(navItemEl, navEl.firstElementChild); // в параетрах navItemEl - это элемент в который
// необходимо вставить (т.е. наша "li"), а navEl.firstElementChild - это элемент перед которым необходимо
// вставить, т.е. говорим куда вставить нашу новую "li" в уже существующем списке "li".
// Если запишем вот так, то можем по индексу выбирать перед каким элементом в колекции вставить:
navEl.insertBefore(navItemEl, navEl.children[2]);

// Динамически создается та разметка, данные для которой есть в бэкенде.


// Методы добавления новых объектов:
// appendChild(elem), // вставляем в самый конец гроздь єлементов, конструкцию на примере 'li' и 'a'
// insertBefore(elem, nextSibling), // то же самое что и appendChild, но только вставляет в заданном порядке
// append(...elems), // вставляем список новых элементов в конец уже существующих элементов родителя
// prepend(...elems) // тоже самое что и append но вставляем в самое начало.


// Додавання
// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM - дереві.
// Припустимо, що додаємо до певного елемента element, для цього існують методи.

// element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
// У всіх цих методах el - це елементи або рядки, в будь - якому поєднанні і кількості.Рядки додаються як текстові
// вузли.

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime";
// list.after(text);