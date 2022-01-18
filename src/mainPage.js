 import transister from './transister.png'
export default function createMainPage() {
    const content = document.getElementById('content');
    const mainPageContent = content.appendChild(document.createElement('div'));
    mainPageContent.id = 'main-page-content'
    
    const picture = new Image();
        picture.src = transister

    
        

    const title = mainPageContent.appendChild(document.createElement('h1'));
    title.innerText = 'Title of restaurant'
    
    mainPageContent.appendChild(picture)

    const para = mainPageContent.appendChild(document.createElement('p'));
    para.innerText = 'this is text about the restaurant'

}


