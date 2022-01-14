export default function createTabs() {
const content = document.getElementById('content');
const tabContainer = content.appendChild(document.createElement('div'));
tabContainer.classList.add('display-flex')
tabContainer.id = 'tab-container'


const homepageButton = tabContainer.appendChild(document.createElement('div'));
homepageButton.classList.add('button')
homepageButton.innerHTML = 'Home Page'

const listButton = tabContainer.appendChild(document.createElement('div'));
listButton.classList.add('button')
listButton.innerHTML = 'List'

}