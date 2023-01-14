
const inputDOM=document.querySelector('#todo')
const ulDOM=document.querySelector('#list')
let itemsArray = JSON.parse(localStorage.getItem('items')) 
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
const formDOM=document.querySelector('#form').addEventListener('submit',(e)=>{
    e.preventDefault();
    if(inputDOM.value.length>4){
        itemsArray.push(inputDOM.value)
        localStorage.setItem('items', JSON.stringify(itemsArray))
        addLi(inputDOM.value)
        inputDOM.value=''
    }else alert('write sth')
    
})

function addLi(doThat){
    let newLi=document.createElement('li');
    newLi.textContent=doThat
    ulDOM.appendChild(newLi)
}

