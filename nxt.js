let toggle_btn = document.getElementById('toggle-btn');
let list_container = document.getElementById('list-container');
let list = document.getElementById('list');
let input_field = document.getElementById('input-field');
let submit_btn = document.getElementById('submit-btn');

toggle_btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggle_btn.innerText= document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

input_field.addEventListener('input', function() {
    if (input_field.value.trim() !== '') {
        submit_btn.disabled = false;
    } else {
        submit_btn.disabled = true;
    }
});
submit_btn.addEventListener('click', function() {
    let input_value = input_field.value.trim();
    if (input_value !== '') {
        let list_item = document.createElement('li');
        list_item.innerText = input_value;
        list.appendChild(list_item);
        input_field.value = '';
        submit_btn.disabled = true;
    }
    else {
        alert('Please enter a value before submitting.');
    }
});