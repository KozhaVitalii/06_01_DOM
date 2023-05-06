// Создадим разметку из массива объектов. Это 99% юзкейсов. Где пришел массив объектов и тебе надо
// по этому массиву написать кучу разметки.

// В нашем примере мы создадим коллекцию кнопок, т.е. для каждого объекта должна быть конпка

/*
 * Создём и добавляем коллекцию
 */

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// Пока создадим одну кнопку:
// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button'); // создаем элемент кнопка
// buttonEl.type = 'button'; // создаем тип кнопки
// buttonEl.textContent = option.label; // создаем текстовый контент
// buttonEl.style.backgroundColor = option.color; // в данной строчке мы заинлайнили стиль

// console.log(buttonEl);

// В коде выше мы просто создали одну кнопку с необходимым набором элементов в ней. А как создать
// целый массив таких кнопок?

// 1. Старым способом, мы бы использовали цикл, совсем олдскул цикл for:

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];

//   const buttonEl = document.createElement('button'); 
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.classList.add('color-picker__option'); //  добавим немного стиля из css
//   buttonEl.style.backgroundColor = option.color; 
  
//   elements.push(buttonEl);
// }

// console.log(elements);

// colorPickerContainerEl.append(...elements); // через spred распыляем массив коллекции отдельными аргументами

// Это олдскульный пример, более современный способ это использовать один из перебирающих методов массива, а
// иенно метод map:

  const colorPickerContainerEl = document.querySelector('.js-color-picker');

  // const elements = colorPickerOptions.map(option => {
  //   const buttonEl = document.createElement('button');
  //   buttonEl.type = 'button';
  //   buttonEl.classList.add('color-picker__option');
  //   buttonEl.textContent = option.label;
  //   buttonEl.style.backgroundColor = option.color;

  //   return buttonEl;
  // });

  // console.log(elements); // такой код будет возвращать массив кнопок
  // colorPickerContainerEl.append(...elements);

/*
 * Пишем функцию для создания разметки колорпикера (которую мы сможем вызывать, когда нам понадобиться создать
целый массив объектов):

 */
const makeColorPickerOptions = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option');
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl; // этот ретерн нужен для того чтобы из колбэка мепа вернуть новый массив новый элемент
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);

// ВСЕ КОЛЛЕКЦИИ В JS ДЕЛАЮТСЯ ИМЕННО ТАКИМ СПОСОБОМ!!! РАЗОБРАТЬ И ЗНАТЬ ОТЧЁТЛИВО МЕХАНИЗМ!