
// Попрактикуемся создавать коллекцию товара. Создаем разметку на основе динамических данных пришедших
// по запросу из бэкенда (в нашем случае пока только из файла proucts.js)


// У нас есть продукт, представленный таким объектом продукта:
// const product = {
//   name: 'Сервоприводы',
//   description: 'Какой нибудь рандомный текст',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// Нам необходимо создать карточку продукта, с разметкой, которая описана ниже:

// У нас есть разметка, которую сверстал нам верстальщик. Который говорит нам, по тем данным которые ты
// получишь из бекенда, тебе необходимо создать вот такой объект:
// {
// */
// <article class = 'product'>
//   <h2 class='product__name'> Название</h2>
//   <p class='product__descr'> Описание</p>
//   <p product__price> Цена: 1111 кредитов</p>
// </article >
// */
// }

// Мы начинаем решать задачу:
// 1. Сначала продумывается какая будет разметка
// 2. Под неё прописваются стили
// 3. Далее на основании исходной верстки и стилей можно с помощью js создавать
// Это называется шаблон

// const product - это исходные данные в виде объекта, которые могут приходить откуда угодно, обычно из бэкенда
// const productEl - это элемент (разметка), который мы создаем

// const productEl = document.createElement('article'); // смотрим на разметку и видим что у нас должен быть
// // на выходе article
// productEl.classList.add('product'); // согласно шаблона (верстке) на этот объект необходимо повесить класс 'product'

// const nameEl = document.createElement('h2'); // далее согласно шаблона нам необходимо создать элемент заголовок
// nameEl.textContent = product.name; // добавляем текстовый контент на элемент заголовок
// nameEl.classList.add('product__name'); // вешаем класс на элемент заголовок

// const descrEl = document.createElement('p'); // создаем элемент абзац
// descrEl.textContent = product.description; // добавляем текстовый контент на элемент абзац
// descrEl.classList.add('product__descr'); // вешаем класс на первый абзац

// const priceEl = document.createElement('p'); // создаем второй элемент абзац
// priceEl.textContent = `Цена: ${product.price} кредитов`; // добавляем текстовый контент на второй элемент абзац через шаблонную строку
// priceEl.classList.add('product__price'); // вешаем класс на первый абзац

// Сделали пока ещё независимые элементы на основе шаблона верстки и объекта product
// console.log(productEl);
// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);

// В этой разметке все вложенные объекты являются детьми элемента article:
// <article class = 'product'>
//   <h2 class='product__name'> Название</h2>
//   <p class='product__descr'> Описание</p>
//   <p product__price> Цена: 1111 кредитов</p>
// </article >

// Добавим в наш article последовательно все новые элементы:
// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);


// Теперь сделаем то же самое, только теперь будем использовать целый массив таких объектов, и запишем
// функцию через которую этот массив будет рендериться и создаваться разметка на основании массива объектов


// В самом начале листа пишем такую строку:
import products from './data/proucts.js';

// в исходном файле proucts.js прописываем export default в[] которого помещаем необходимый массив объектов,
// это может быть только один массив объектов.

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

// {
//   /*
// <article class="product">
//   <h2 class="product__name">Название</h2>
//   <p class="product__descr">Описание</p>
//   <p product__pridct>Цена: 1111 кредитов</p>
// </article>
// */
// }

/*
 * Напишем функцию которая получает один объект и из этого объекта получает одну карточку продукта
 */

// const makeProductCard = product => {
// const productEl = document.createElement('article');
//   productEl.classList.add('product');
  
// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${product.price} кредитов`;
// priceEl.classList.add('product__price');
// }

// где продукт - это какой то произвольный объект, который приходит извне на место параметра, у которого есть
// несколько свойств: product.name, product.description и product.price, соответственно мы можем эти свойства
// деструктуризировать и записать так { name, description, price } и тогда нам нет необходимости повторять
// название объекта product, каждый раз, когда мы добавляем новый элемент на свойство этого объекта, к примеру
// как это было до: nameEl.textContent = product.name;

// Эта функция будет вешать всё в одну виноградную гроздь productEl.append(nameEl, descrEl, priceEl) и
// из себя она будет возвращать этот один элемент (продукт): return productEl;

// У нас в разметке есть некий контейнер div с классом ".js-products", в который в итоге мы хотим поместить
// разметку для всех наших элементов из массива объектов (карточки продуктов). Находим этот div по классу
// '.js-products' и создаем для него в js переменную "const productsContainerEl":

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

// Далее мы можем к примеру вызвать эту функцию и передать в неё один из объектов, ну к примеру это будет
// объект с индексом [1]:

// console.log(makeProductCard(products[1]));

// В итоге функция создает один элемент в которой содержиться целая гроздь вложенных элементов, которые мы
// описали в productEl.append(nameEl, descrEl, priceEl); По сути мы создали шаблон в который мы забрасываем
// данные, после чего шаблон возвращает разметку по этим данным. Создана стандартная разметка, но значения
// в ней будут разные, в зависимости от того что в неё будет передаваться.

// Ок, сделали мы одну карточку.Теперь мы можем сделать много таких карточек.Как мы это будем делать ?
// Мы возьмем продукты, использу метод Map, мепним их:

const elements = products.map(makeProductCard);

// Как это работает? Раскроем эту запись. Т.е. мы разложим функцию (мы это уже делали в предыдущем файле см.
// файл 06-collections, где мы создавали кнопки)
// const elements = products.map(product => {
//   return 'элемент продукта'
// });
// т.е.в product приходит один из объектов, внутри product можно создать всю разметку которую мы описывали выше
// и вернуть. Тогда вопрос, а что делает функция makeProductCard? Она ожидает объект { name, description, price }
// что равно объекту product и возвращает разметку которая она создает.т.е.тело этой функции можно было бы
// просто вложить в products.map(makeProductCard) вместо makeProductCard.

// В const elements = products.map(makeProductCard); мы просто передаем ссылку на функцию makeProductCard,
// это просто колбек. Мы функцию вынесли куда то отдельно и просто при необходимости её вызываем.

// Метод map это функция которая перебирает массив и когда мы её вызываем: products.map(makeProductCard);,
// то мы ей говорим для каждого элемента(объекта) в массиве products вызови функцию makeProductCard, которая
// генерит разметку. В итоге map возвращает нам массив всех элементов (article).

// console.log(elements);

// В строке 130 мы создавали переменную для контейнера div - это родитель в который мы хотим в итоге поместить
// все наши новые элементы(карточки продуктов).В результате мы распыляем весь наш массив объектов в этот
// контейнер. В итоге у нас на странице HTML сформировалась полностью готовая разметка:

productsContainerEl.append(...elements);

// Какие отличия от колорпикера, которы мы создавали в предыдущем файле см.файл 06 - collections ?
//   Там написана функция которая получает целый массив объектов и создает разметку(т.к.там мало разметки
//   по сути одна "li" ссылка), в этом же примере много разметки, поэтому создание одного элемента было
//   вынесено в отдельную функцию и далее уже через перебирающий метод map собираем єто все в кучу.

// Файл products.js это буквально то что мы будем получать из бэкенда(т.е.массивы объектов) с которыми и
// будем работать. То что мы сейчас сделали просто расширется на то что мы научимся делать ещё и запрос
// на бэкенд для того чтобы получить данные.