import './style.css';
import createMainPage from './mainPage.js';
import createTabs from './tabs.js';

const content = document.getElementById('content');



createTabs()
createMainPage()

const listButton = document.getElementById('list-button');
const homePageButton = document.getElementById('home-page-button');
const mainPage = document.getElementById('home-page');


listButton.addEventListener('click', () => {
    mainPage.classList.add('display-none')
})

homePageButton.addEventListener('click', () => {
    mainPage.classList.remove('display-none')
})

