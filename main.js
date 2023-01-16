const ALERT=(className='danger', title, message)=>
`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong class='ps-2'>${title}</strong> <span>${message}</span>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
// const TOAST=(message)=>
// `
// <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
//   <div class="d-flex">
//     <div class="toast-body">
//       Hello, world! This is a toast message.
//     </div>
//     <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
//   </div>
// </div>
// `
const ulDOM=document.querySelector('#list');
const inputDOM=document.querySelector("#input");
const divDOM=document.querySelector('#form');
const BUTTON=document.querySelector('#button');
const myDataArr=localStorage.getItem('item')? JSON.parse(localStorage.getItem('item')) : [];
const alertDOM=document.querySelector('#alert')
let toastDOM=document.querySelector('#toast')
let closeButton=document.querySelectorAll('span');
let list = document.querySelector('ul');

//checked class toggle to the every list item 
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

//submit event with delete button and remove list item from list in one function
divDOM.addEventListener('submit', function(e){
    e.preventDefault();
    if(inputDOM.value.length<4){
        alertDOM.innerHTML=ALERT('danger', 'Wrong Attempt', 'You need write something at least 5 character');
        setTimeout(()=>{
            alertDOM.innerHTML=''
        },3000)
    }else {
        let newLi=document.createElement('li');
        newLi.innerHTML=inputDOM.value;
        ulDOM.appendChild(newLi)
        myDataArr.push(inputDOM.value);
        localStorage.setItem('item', JSON.stringify(myDataArr));
        alertDOM.innerHTML=ALERT('success', 'Conguratilations', 'Your request succesfully added to the list')
        setTimeout(()=>alertDOM.innerHTML='',3000)
        inputDOM.value=''
        let deleteButton=document.createElement('span');
        let text=document.createTextNode('\u2715');
        deleteButton.appendChild(text);
        newLi.appendChild(deleteButton);
        newLi.classList.add('rounded');
        deleteButton.addEventListener('click', function(e){
            let listItem=this.parentNode;
            let ul=listItem.parentNode;
            ul.removeChild(listItem)
        })
    }
})



