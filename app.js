// selectors 
let form = document.querySelector('#form'),
    inputText = document.querySelector('#inputText'),
    btn = document.querySelector('#btn'),
    Lists = document.querySelector('.lists'),
    idToUpdate;


// get data from localstorage or empty arrey
let GetData = JSON.parse(localStorage.getItem('tasks') || '[]' )

console.log(GetData);
DisplayTask(GetData)

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(inputText.value == ''){
        alert('please insert Task..')
    }else{
        if(btn.innerText == 'ADD'){
            AddTask({task : inputText.value})
        }else{
            UpdateTask({task : inputText.value});
        }
    }
});

function AddTask(obj){
    GetData.push(obj);
    localStorage.setItem('tasks',JSON.stringify(GetData))
    DisplayTask(GetData);
    location.reload();
}

function DisplayTask(data){
    let ouput = '';
    data.forEach((item,index)=>{
        ouput += `
        <div class="item">
                <div class="left">
                    <input type="checkbox" name="" id="">
                    <h6>${item.task}</h6>
                </div>
                <div class="right">
                    <i class="fa fa-edit" onclick='FilForm(${index})'></i>
                    <i class="fa fa-trash" onclick='remove(${index})'></i>
                </div>
            </div>
        `
    })
    Lists.innerHTML = ouput;
}


function FilForm(index){
    // console.log(GetData[index].task);
    inputText.value = GetData[index].task;
    btn.innerHTML = 'update'
    idToUpdate = index;
    console.log(idToUpdate);
 
}


function UpdateTask(obj){
    GetData[idToUpdate] = obj
    localStorage.setItem('tasks',JSON.stringify(GetData))
    DisplayTask(GetData);
    location.reload();
}

function remove(index){
    if(confirm('Are you sure to be deleted this '+GetData[index].task)){
        GetData.splice(index,1)
        localStorage.setItem('tasks',JSON.stringify(GetData))
        DisplayTask(GetData);
        location.reload();
    }
}


// asignment 
// 1. form validation 
// 3. note project 