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
const formDOM=document.querySelector('#form');
const BUTTON=document.querySelector('#button');
const myDataArr=localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')) : [];
const alertDOM=document.querySelector('#alert')
let toastDOM=document.querySelector('#toast')

//checked class toggle to the every list item 
ulDOM.addEventListener('click', function(e) {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

//submit event with delete button and remove list item from list in one function
formDOM.addEventListener('submit', function(e){
    e.preventDefault();
    if(inputDOM.value.length<5){
        alertDOM.innerHTML=ALERT('danger', 'Wrong Attempt', 'You need write something at least 5 character');
        setTimeout(()=>{
            alertDOM.innerHTML=''
        },1500)
    }else {
        let newLi=document.createElement('li');
        newLi.innerHTML=inputDOM.value;
        ulDOM.appendChild(newLi)
        myDataArr.push(inputDOM.value);
        alertDOM.innerHTML=ALERT('success', 'Conguratilations', 'Your request succesfully added to the list')
        localStorage.setItem('items', JSON.stringify(myDataArr));
        setTimeout(()=>alertDOM.innerHTML='',1500)
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

