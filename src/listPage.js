export default function createListPage() {
    const content = document.getElementById('content');
    const listContentContainer = content.appendChild(document.createElement('div'))
     listContentContainer.id = 'list-content-container'

    const list = listContentContainer.appendChild(document.createElement('ul'))
    

    function addListItem(content) {
       let listItem = list.appendChild(document.createElement('li'))
        listItem.innerText = content;
    }

    addListItem('item1')
    addListItem('item2')

}