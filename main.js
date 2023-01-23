const ALERT=(className='danger', title, message)=>
`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong class='ps-2'>${title}</strong> <span>${message}</span>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

const itemAreaDOM=document.querySelector('#list');
const inputDOM=document.querySelector("#input");
const formDOM=document.querySelector('#form');
const BUTTON=document.querySelector('#button');
const alertDOM=document.querySelector('#alert')
const dataArray=localStorage.getItem('myDataItems')? JSON.parse(localStorage.getItem('myDataItems')) : [];

itemAreaDOM.addEventListener('click', (e) => {
    if(e.target.tagName == 'NAV'){
        e.target.classList.toggle('checked')
    }
})

formDOM.addEventListener('submit', (e) => {
    e.preventDefault()
    let item=document.querySelector('input');
    createList(item);
})

function createList(item){
    if(item.value.length<5){
        alertDOM.innerHTML=ALERT('danger', 'Wrong Attempt', 'Write at least 5 character');
        setTimeout(()=> {
            alertDOM.innerHTML=''
        },1500)
    }else {
        dataArray.push(item.value)
        localStorage.setItem('myDataItems', JSON.stringify(dataArray))
        console.log(dataArray)
        location.reload()
    }
}

function displayItems(){
    let items=''
    for(let i of dataArray){
        items+=`
            <nav class="list-group-item d-flex justify-content-between " id='span'><span >${i}</span> 
                <i class="fa-solid fa-check deleteBtn"></i>
            </nav>
        `
    }document.querySelector('#list').innerHTML=items
    deleteItem()
}

function deleteItem(){
    let deleteBtn=document.querySelectorAll('.deleteBtn')
    deleteBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            deleteListItem(i)
        })
    })
}
function deleteListItem(i){
    dataArray.splice(i,1);
    localStorage.setItem('myDataItems' , JSON.stringify(dataArray))
    location.reload()
}

window.onload = function(){
    displayItems()
}


//         let deleteButton=document.createElement('span');
//         let text=document.createTextNode('\u2715');
//         deleteButton.appendChild(text);
//         newLi.appendChild(deleteButton);
//         newLi.classList.add('rounded');
//         deleteButton.addEventListener('click', function(e){
//             let listItem=this.parentNode;
//             let ul=listItem.parentNode;
//             ul.removeChild(listItem)
//         })


//checked class toggle to the every list item 
// ulDOM.addEventListener('click', (e) => {
//     if(e.target.tagName== 'LI' ){
//         e.target.classList.toggle('checked')
//     }
// })

//submit event with delete button and remove list item from list in one function
// formDOM.addEventListener('submit', function(e){
//     e.preventDefault();
//     if(inputDOM.value.length<5){
//         alertDOM.innerHTML=ALERT('danger', 'Wrong Attempt', 'You need write something at least 5 character');
//         setTimeout(()=>{
//             alertDOM.innerHTML=''
//         },1500)
//     }else {
//         let newLi=document.createElement('li');
//         newLi.innerHTML=inputDOM.value;
//         ulDOM.appendChild(newLi)
//         myDataArr.push(inputDOM.value);
//         alertDOM.innerHTML=ALERT('success', 'Conguratilations', 'Your request succesfully added to the list')
//         localStorage.setItem('items', JSON.stringify(myDataArr));
//         setTimeout(()=>alertDOM.innerHTML='',1500)
//         inputDOM.value=''
//         deleteItem()
//     }
// })

// function deleteItem(){
//     let deleteButton=document.createElement('span');
//     let text=document.createTextNode('\u2715');
//     deleteButton.appendChild(text);
//     newLi.appendChild(deleteButton);
//     newLi.classList.add('rounded');
//     deleteButton.addEventListener('click', function(e){
//         let listItem=this.parentNode;
//         let ul=listItem.parentNode;
//         ul.removeChild(listItem)
//     })
// }


