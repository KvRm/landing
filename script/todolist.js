let enter = document.getElementById('enter');
let todoList = [];

function createTodo(str_header) {
    let strList = document.querySelector('.str_list');
    let markList = document.querySelector('.mark_list');
    let crossMark = 'img/cross-mark-2986.png';
    let id = todoList.length;
    let todo = {};
    /*Добавление новой строки в спискок*/
    todo.liStr = document.createElement('li');
    todo.liStr.className = 'str_header';
    todo.liStr.addEventListener('click', () => {
        todo.liStr.classList.toggle('str_with_opacity');
    });
    let liStrHeader = document.createTextNode(str_header);
    todo.liStr.appendChild(liStrHeader);
    strList.appendChild(todo.liStr);
    /*Добавление элемента удаления*/
    todo.liMark = document.createElement('li');
    let imgTag = document.createElement('img');
    imgTag.onclick = function() {
        strList.removeChild(todo.liStr);
        markList.removeChild(todo.liMark);
        todoList.splice(id,1);
        localStorage.setItem('todo',JSON.stringify(todoList));
    }
    imgTag.className = 'deleteMark';
    imgTag.addEventListener('mouseenter', (e) => {
        imgTag.style.opacity = 1;
    })
    imgTag.addEventListener('mouseleave', () => {
        imgTag.style.opacity = 0.3;
    })
    imgTag.src = crossMark;
    todo.liMark.appendChild(imgTag);
    markList.appendChild(todo.liMark);
    
    return todo;
}

enter.onclick = function () {
    let str_header = document.querySelector('.input_header').value;
    
    if (str_header) {
        todoList.push(createTodo(str_header));
    }
    else alert('Убедитесь, что все поля заполнены');
    document.querySelector('.input_header').value = ''
}