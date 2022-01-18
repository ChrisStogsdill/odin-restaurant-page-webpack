import './style.css';
import createMainPage from './mainPage.js';
import createListPage from './listPage.js'
import createTabs from './tabs.js';

const content = document.getElementById('content');



createTabs()
createMainPage()
createListPage()

const listButton = document.getElementById('list-button');
const homePageButton = document.getElementById('home-page-button');
const mainPage = document.getElementById('main-page-content');
const listPage = document.getElementById('list-content-container')


listButton.addEventListener('click', () => {
    mainPage.classList.add('display-none')
    listPage.classList.remove('display-none')
})

homePageButton.addEventListener('click', () => {
    mainPage.classList.remove('display-none')
    listPage.classList.add('display-none')
})

