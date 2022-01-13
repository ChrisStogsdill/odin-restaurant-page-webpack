 
export default function createMainPage() {
    const content = document.getElementById('content');
    const picture = new Image();
        picture.src = './transister.png'

    const title = content.appendChild(document.createElement('h1'));
    title.innerText = 'Title of restaurant'

}

createMainPage();
