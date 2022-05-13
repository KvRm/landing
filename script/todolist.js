window.onload = function() {
    let enter = document.getElementById('enter');
    let todoList = [];
    let numberOfDeletedStr = 0;

    function createNewTodo(str_header) {
        let crossMark = 'img/cross-mark-2986.png';
        let todo = {}
        
        // создание текста заметки
        todo.liStr = document.createElement('li');
        todo.liStr.className = 'str_header'; 
        todo.liStr.addEventListener('click', () => {
                    todo.liStr.classList.toggle('str_with_opacity');
        });
        let liStrHeader = document.createTextNode(str_header);
        todo.liStr.appendChild(liStrHeader);
        /*Добавление элемента удаления*/
        todo.liMark = document.createElement('li');
        let imgTag = document.createElement('img');
        imgTag.onclick = function() {
            todoList.splice(todo.id,1);
            numberOfDeletedStr++;
            localStorage.setItem('todo',JSON.stringify(todoList));
            renderTodoList();
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
        todoList.push(todo);
        localStorage.setItem('todo',JSON.stringify(todoList));
    }
    function renderTodoList() {
        let strList = document.querySelector('.str_list');
        let markList = document.querySelector('.mark_list');
        const removeAllChild = (myNode) => {
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
        }
        removeAllChild(strList);
        removeAllChild(markList);
        for (let i=0;i<todoList.length;i++) {
            todoList[i].id = i;
            strList.appendChild(todoList[i].liStr);
            markList.appendChild(todoList[i].liMark);
        }
    }

    enter.onclick = function () {
        let str_header = document.querySelector('.input_header').value;
        
        if (str_header) {
            createNewTodo(str_header);
            renderTodoList();
        }
        else alert('Убедитесь, что все поля заполнены');
        document.querySelector('.input_header').value = ''
    }
}