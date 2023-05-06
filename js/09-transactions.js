
// У нас есть на бэкенде (пока в отдельном файле) некие данные с транзакциями (массив объектов):
import transactionHistory from './data/transactions.js';

console.log(transactionHistory); //можно посмотреть

// Далее изначально у нас в размете (см. исходный html файл) уже создана верстальщиком таблица:
    // <table class="transaction-table js-transaction-table">
    //   <thead>
    //     <tr>
    //       <th>ID транзакции</th>
    //       <th>Сумма</th>
    //       <th>Дата</th>
    //       <th>Кто</th>
    //       <th>Тип транзации</th>
    //       <th>Имя счёта</th>
    //       <th>Номер счёта</th>
    //     </tr>
    //   </thead>
    // </table>

// По сути это статическая часть нашего сайта, т.к.мы предусматриваем что на этой странице всегда будет
// эта таблица. У которой будет вот такая шапка.

// Имея такую шапку, нам необходимо динамически создать тейблбоди на основе масива объектов передаваемых из
// бэкенда.
// Для этого нам необходимо написать функцию, которая будет создавать одну строку.Т.е.мы как программисты
// берем для себя шаблон разметки и говорим нам необходимо создавать динамически вот такую строку:
//         <tr>
//           <td>ID транзакции</td>
//           <td>Сумма</td>
//           <td>Дата</td>
//           <td>Кто</td>
//           <td>Тип транзации</td>
//           <td>Имя счёта</td>
//           <td>Номер счёта</td>
//         </tr>


// Пишем функцию, которая будет возвращать шаблонную строку:

// const makeTransactionTableRowMarkup = transaction => {
//   return `
//   <tr>
//     <td>${transaction.id}</td>
//     <td>${transaction.amount}</td>
//     <td>${transaction.date}</td>
//     <td>${transaction.business}</td>
//     <td>${transaction.type}</td>
//     <td>${transaction.name}</td>
//     <td>${transaction.account}</td>
//   </tr>
//   `;
// };

// Возьмем то что мы написали выше и деструктуризируем:
const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

// где transaction это один объект из массива: 
console.log(transactionHistory);
console.log(makeTransactionTableRowMarkup(transactionHistory[1])); // можем увидеть любой объект из 
// массива по индексу 

const tableEl = document.querySelector('.js-transaction-table'); // находим родительский элемент в который
// необходимо помещать наши элементы

// создаем переменную в которую мепаем результат функции makeTransactionTableRowMarkup:  
const transactionTableRowsMarkup = transactionHistory
  .map(makeTransactionTableRowMarkup) // в результате получим массив с огромным кол-вом строк.
  .join(''); // чтобы из массива строк сделать одну строку, соединим этот массив строк в одну огромную строку 

tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup); // берем родительский элемент в который
// хотим поместить новые элементы, это шапка нашей таблицы tableEl и используя метод insertAdjacentHTML
// парсим туда нашу огромную строку.Т.к.этот метод умеет разделять теги.Используя параметр 'beforeend'
// вставим нашу распарсенную строку в начало (ну или в конец шапки нашей таблицы).

console.log(transactionTableRowsMarkup); // выведем полученный результат

// НО в нашем ДЗ используем только createElement, метод insertAdjacentHTML использовать пока запрещено.