
//const items=document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

//const ul=document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
 //ul.firstElementChild.textContent='HELLO';
 //ul.firstElementChild.style.background='green';
//ul.children[1].innerText='brad';
//ul.children[1].style.background='yellow';
//ul.lastElementChild.innerHTML='<h1>hello</h1>';

//const butn=document.querySelector('.item');
//butn.style.background='green';

//const tag2=document.querySelector('.item2');
//tag2.style.background='yellow';

const btn=document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form').style.background ='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});

const btnn=document.querySelector('.btn');
btnn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form').style.background ='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});

const btnnn=document.querySelector('.btn');
btnnn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form').style.background ='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});