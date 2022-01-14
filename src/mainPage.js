 import transister from './transister.png'
export default function createMainPage() {
    const content = document.getElementById('content');
    
    const picture = new Image();
        picture.src = transister
        

    const title = content.appendChild(document.createElement('h1'));
    title.innerText = 'Title of restaurant'
    title.id = 'home-page'
    content.appendChild(picture)

    const para = content.appendChild(document.createElement('p'));
    para.innerText = 'this is text about the restaurant'

}


