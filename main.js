const ALERT=(className='danger', title, message)=>
`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
const TOAST=(message)=>
`
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
`
const ulDOM=document.querySelector('#list');
const inputDOM=document.querySelector("#input");
const formDOM=document.querySelector('#form');
const BUTTON=document.querySelector('#button');
const myDataArr=localStorage.getItem('item')? JSON.parse(localStorage.getItem('item')) : [];
const alertDOM=document.querySelector('#alert')
let toastDOM=document.querySelector('#toast')
let closeButton=document.querySelectorAll('li');
let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);


function submitFnc(){
    if(inputDOM.value.length<4){
        alertDOM.innerHTML=ALERT('danger', 'Wrong Attempt', 'You need write something at least 5 character')
    }else {
        let newLi=document.createElement('li');
        newLi.innerHTML=inputDOM.value;
        ulDOM.appendChild(newLi)
        myDataArr.push(inputDOM.value);
        localStorage.setItem('item', JSON.stringify(myDataArr));
        alertDOM.innerHTML=ALERT('success', 'Conguratilations', 'Your request succesfully added to the list')
        inputDOM.value=''
        let createSpan=document.createElement('span');
        let text=document.createTextNode('\u00D7');
        createSpan.appendChild(text);
        createSpan.className='close'
        newLi.appendChild(createSpan);
        newLi.classList.add('rounded');
    }
    for (let i=0; i < closeButton.length; i++) {
        closeButton[i].addEventListener('click', function(e) {
          var div = this.parentElement;
          div.style.display = "none";
        }
)}
}

BUTTON.addEventListener('click', (e)=>{
    if(inputDOM.value.length<4){
        alertDOM.innerHTML=ALERT('danger', 'Wrong Attempt', 'You need write something at least 5 character')
    }else {
        let newLi=document.createElement('li');
        newLi.textContent=inputDOM.value;
        ulDOM.appendChild(newLi);
        myDataArr.push(inputDOM.value);
        localStorage.setItem('item', JSON.stringify(myDataArr));
        alertDOM.innerHTML=ALERT('success', 'Conguratilations', 'Your request succesfully added to the list')
        inputDOM.value=''
        let createSpan=document.createElement('span');
        let text=document.createTextNode("\u00D7");
        createSpan.appendChild(text);
        createSpan.classList.add('close');
        newLi.appendChild(createSpan);
        newLi.classList.add('rounded');
    }
    for (let i=0; i < closeButton.length; i++) {
        closeButton[i].addEventListener('click', function(e) {
          var div = this.parentElement;
          div.style.display = "none";
        }
)}
})
for(let i=0; i<closeButton.length; i++){
    createSpan=document.createElement('span');
    let text=document.createTextNode("\u00D7");
    createSpan.appendChild(text);
    createSpan.classList.add('close');
    closeButton[i].appendChild(createSpan)
}
