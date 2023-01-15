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
ulDOM.addEventListener('click', function(e) {
    this.removeChild(e.target);
  })
function submitFnc(){
    if(inputDOM.value.length<4){
        alertDOM.innerHTML=ALERT('danger', 'Wrong Attempt', 'You need write something at least 5 character')
    }else {
        addLi(inputDOM.value);
        myDataArr.push(inputDOM.value);
        localStorage.setItem('item', JSON.stringify(myDataArr));
        alertDOM.innerHTML=ALERT('success', 'Conguratilations', 'Your request succesfully added to the list')
        inputDOM.value=''
    }
}

BUTTON.addEventListener('click', (e)=>{
    if(inputDOM.value.length<4){
        alertDOM.innerHTML=ALERT('danger', 'Wrong Attempt', 'You need write something at least 5 character')
    }else {
        addLi(inputDOM.value);
        myDataArr.push(inputDOM.value);
        localStorage.setItem('item', JSON.stringify(myDataArr));
        alertDOM.innerHTML=ALERT('success', 'Conguratilations', 'Your request succesfully added to the list')
        inputDOM.value=''
    }
})

let addLi= (value)=>{
    let newLi=document.createElement('li')
    newLi.textContent= value
    ulDOM.appendChild(newLi)
}
