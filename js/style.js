const input = document.querySelector('.taskInput')
const listContainer = document.querySelector('.tasks')
// const input = document.getElementsByClassName('taskInput')[0]
// const listContainer = document.getElementsByClassName('tasks')[0]

function addTask() {
    if (input.value === '') {
        alert("Write some tasks...");
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        // adding cross

        let cross = document.createElement('cross')
        cross.innerHTML = 'x'
        li.appendChild(cross);
    }
    input.value = "";

    savedata();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle("checked")
        //here classList is used to acces css classes
        savedata();
    }
    else {
        e.target.parentElement.remove()
        savedata()
    }
}, false)


//! NOW STORING THE TASK THAT WE HAVE WRITEN

function savedata() {
    localStorage.setItem('data', listContainer.innerHTML)
}

// here data is saved in localstorage noe , now display the data

function show(){
    listContainer.innerHTML=localStorage.getItem('data')
}
show()