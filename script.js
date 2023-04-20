let artodo = [];
let idtodo = 0;
function loadlocal() {
    let storage = localStorage.getItem('Listtodo');
    if (storage != null) {
        artodo = JSON.parse(storage);
        for (key in addtodo) {
            createtodo(key, addtodo[key]);
        }
    } else {
        console.log('locaL STORAGE null');
    }
};
document.querySelector('.addbutton').addEventListener('click', addtodo);
function addtodo() {
    let headertodo = document.querySelector('#header');
    let descriptiontodo = document.querySelector('textarea');
    if (headertodo.value != '' & descriptiontodo != '') {
        createtodo(headertodo.value, descriptiontodo.value);
        headertodo.value = '';
        descriptiontodo.value = '';
    }
}
function createtodo(header, description) {
    let listtodo = document.querySelector('.listtodo')
    listtodo.innerHTML += `<div class="todo" inf="${header}"id="${idtodo}">
    &nbsp;${header}<button class="delitetodo" idtodo="${idtodo}" >X</button><br>
    <hr>
    &nbsp;${description}
    </div>`;
    idtodo += 1;
    artodo[header] = description;
    let buttonsdelete = document.querySelectorAll('.delitetodo');
    for (item of buttonsdelete) {
        //console.log(item);
        item.onclick = deletetodoo;
    }
    savelocal(addtodo);
}
function deletetodoo() {
    let divid = this.getAttribute('idtodo');
    let alltodo = document.querySelectorAll('.todo');
    console.log(artodo);
    for (item of alltodo) {
        if (item.id == divid) {
            item.remove();
            let d = item.inf;
            delete artodo.d;
            break;
        }
    }
}


