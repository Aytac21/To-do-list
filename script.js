let input = document.querySelector(".enter");
let addelement = document.querySelector('.purple');
let tasks = document.querySelector('.tasks')

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addelement.classList.add('active')
    }
    else{
        addelement.classList.remove('active')
    }
})

addelement.addEventListener('click', () =>{
    if(input.value.trim() != 0){
        let newitem = document.createElement('div');
        newitem.classList.add('item');
        newitem.innerHTML = `
        <div class ="lists">
        <ul> <li> ${input.value} </li>
        <div class = "text">
        <i class="fa-regular fa-circle-xmark"></i>
        </div> 
        </ul>
        </div>`
        tasks.appendChild(newitem)
        input.value = '';
    }
    else{
        alert('Please enter a task')
    } 
})

tasks.addEventListener ('click', (e) =>{
    if(e.target.classList.contains('fa-circle-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

newitem.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;
});