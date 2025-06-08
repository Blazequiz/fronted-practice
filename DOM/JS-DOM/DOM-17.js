// //  - Отримайте доступ до списку
// //  - Додайте жовтий колір фону

// const navListElement = document.querySelector('.site-nav') 
// const navLink = document.querySelectorAll('.site-nav__item a') 
// console.log(navListElement);
// console.log(navLink);


// navListElement.style.backgroundColor = "green";
// navListElement.firstElementChild.style.backgroundColor = "red";

// //  - Додайте клас "site-nav__link" до першого посилання

// const linkEl = document.querySelector(".site-nav > li > a[href='https://']");
// linkEl.style.fontStyle = "italic";
// console.log(linkEl);

// //  - Збільшіть розмір шрифта посилання з атрибутом href = "https://"

// linkEl.classList.add("site-nav__link")

// document.body.style.background = 'red';

// setTimeout(() => document.body.style.background = '', 3000);

// // button

// const button = document.querySelector('.btn');

// button.style.backgroundColor = 'blue';



// // 
// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');

// // додаємо в список
// list.innerHTML = markup;

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];

const containerEl = document.querySelector('.js-color-picker');

// create elements 

const items = colorPickerOptions.map(option => {

    const button = document.createElement("button")
    button.textContent = option.label;
    button.classList.add('color-picker__option');
    button.style.backgroundColor = option.color

    return button;
});

// containerEl.append(...items);

// create markup
const markup = colorPickerOptions.map(option =>{
    return `<button class="colorPickerOption" style="background-color: ${option.color};">${option.label}</button>`
}).join("")

containerEl.innerHTML = markup;

console.log(markup);

//? 1.Написати функцію яка буде створювати карточку продукту.
    //? Додати карточку в DOM за допомогою методу createElement
    {/* <article class="product">
        <h2 class="product__name">Назва</h2>
        <p class="product__descr">Опис</p>
        <p class="product__price">Ціна: 1111 кредитів</p>
    </article>
    <div class="js-products"></div> */}

// 1 багато писати

const productContainer = document.querySelector('.js-products') 
console.log(productContainer);
const article = document.createElement("article")
console.log(article);
productContainer.append(article)

// 2 InnerHTML

// const cardContent = 
//         `  
//         <h2 class="product__name">Назва</h2>
//         <p class="product__descr">Опис</p>
//         <p class="product__price">Ціна: 1111 кредитів</p>
//         `
// article.innerHTML = cardContent;

// 3 elem.insertAdjacentHTML(position, string);

article.insertAdjacentHTML("afterbegin", 
        `        
        <h2 class="product__name">Назва</h2>
        <p class="product__descr">Опис</p>
        <p class="product__price">Ціна: 1111 кредитів</p>
        `
    );
        


