const tur = document.getElementById("tur")
const tuy = document.getElementById("tuy")
const head = document.getElementById("head")
const body=document.querySelector("body")
const taskList = document.getElementById("taskList")
const input = document.getElementById('input')


tuy.addEventListener('click', ()=>{
    if (body.classList.toggle('dark-mode')){
        tuy.textContent = '☀️'
    }else{
        tuy.textContent = '🌜'
    }
});

tur.addEventListener('click', ()=>{
    const li = document.createElement("li");
    li.className = 'li';
    li.textContent = input.value;
    taskList.appendChild(li)

    const editDelete = document.createElement('div')




    input.value='';
})



