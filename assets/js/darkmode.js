let darkmode = localStorage.getItem('darkmode');

export const label = document.createElement('label');
label.classList.add('nav__toggle-switch__switch-label');

export const checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.classList.add('nav__toggle-switch__switch-label__checkbox');

export const span = document.createElement('span');
span.classList.add('nav__toggle-switch__switch-label__slider');


checkbox.addEventListener('change', function () {

    document.body.classList.toggle('dark');

    const nav = document.querySelector('.nav');
    nav.classList.toggle('dark');
    const card = document.querySelector('.card');
    card.classList.toggle('dark');
    const inputSearch = document.querySelector('.card__search__text');
    inputSearch.classList.toggle('dark');
    const btnSearch = document.querySelector('.card__search__btn');
    btnSearch.classList.toggle('dark');

    document.querySelectorAll('.container').forEach(carte => carte.classList.toggle('dark'));
    document.querySelectorAll('.divWeek').forEach(divWeek => divWeek.classList.toggle('dark'));

    /*if (checkbox.checked) {
        document.body.style.backgroundColor = "rgb(50,50,50)";
        document.body.style.color = "rgb(255,255,255)";
        document.body.style.transition = "0.7s";
        nav.style.backgroundColor = "rgb(100,100,100)";
        card.style.backgroundColor = "rgb(100,100,100)";
        inputSearch.style.backgroundColor = "rgb(50,50,50)";
        btnSearch.style.backgroundColor = "rgb(100,100,100)";

        Array.from(cartes).forEach(carte => {
            carte.style.backgroundColor = "rgb(100,100,100)";
        });
        Array.from(divWeeks).forEach(divWeek => {
            divWeek.style.backgroundColor = "rgb(70,70,70)";
        });

    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.body.style.transition = "0.7s";
        nav.style.backgroundColor = "";
        card.style.backgroundColor = "";
        inputSearch.style.backgroundColor = "";
        btnSearch.style.backgroundColor = "";

        Array.from(cartes).forEach(carte => {
            carte.style.backgroundColor = "";
        });
        Array.from(divWeeks).forEach(divWeek => {
            divWeek.style.backgroundColor = "";
        });
    }*/
});

