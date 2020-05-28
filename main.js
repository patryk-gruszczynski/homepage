

function greet(firstName,age) {
console.log (
`Witaj drogi odwiedzający nazywam się ${firstName} i mam ${age} lat.`
);
}

greet('Patryk','31')

const heading = document.querySelector('.main__heading--js');

console.log(heading);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {

    const nav = document.querySelector('navigation--js');
    nav.classList.toggle('navigation--open');
})
