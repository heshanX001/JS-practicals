const inputText = document.getElementById('task');
const taskList = document.getElementById('list');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', ()=> {
    if(inputText.value == ''){
        window.alert('Enter an Event to add');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        taskList.appendChild(li);
        inputText.value = '';

        //add close tag
        let closeIcon = document.createElement('span');
        li.appendChild(closeIcon);
        saveData()
    }
});

taskList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }else if (e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem('Data', taskList.innerHTML);
}

function showData(){
    taskList.innerHTML = localStorage.getItem('Data');
}

showData();