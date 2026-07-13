let hello = document.getElementById('hello');
let list = document.getElementById('list');
hello.addEventListener('mouseover', function() {
    list.classList.remove('d-none')
    
});
hello.addEventListener('mouseout',()=>{
    list.classList.add('d-none')
})
