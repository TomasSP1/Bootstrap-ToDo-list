// selecting inputs


const subject_input = document.querySelector('#subject');
const priority_input = document.querySelector('#priority');
const due_date_input = document.querySelector('#date');
const status_input = document.querySelector('#status');
const percent_completed_input = document.querySelector('#percent');
const my_form = document.querySelector('#forma')

// selecting new ui list for creating new li using js

const box_list = document.querySelector('#box');


// selecting button submit

const submitBtn = document.querySelector('#submit-btn');
const belekas = document.getElementById('#exit');




submitBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    


    const ul_list = document.createElement('ul');
    ul_list.classList.add('list-group', 'list-group-horizontal', 'list');
    box_list.appendChild(ul_list);

  
  

    const check_li = document.createElement('li');
    check_li.classList.add('list-group-item', 'item0');
    check_li.setAttribute('id', 'check_font');
    check_li.innerHTML = `<i class="fa-solid fa-check"></i>`;
    ul_list.appendChild(check_li);
    
    const subject_li = document.createElement('li');
    subject_li.classList.add('list-group-item', 'item1');
    subject_li.innerText = subject_input.value;
    ul_list.appendChild(subject_li);

    const priority_li = document.createElement('li');
    priority_li.classList.add('list-group-item', 'item2');
    priority_li.innerText = priority_input.value;
    ul_list.appendChild(priority_li);

    const due_date_li = document.createElement('li');
    due_date_li.classList.add('list-group-item', 'item3');
    due_date_li.innerText = due_date_input.value;
    ul_list.appendChild(due_date_li);
   

    const status_input_li = document.createElement('li');
    status_input_li.classList.add('list-group-item', 'item4');
    status_input_li.innerText = status_input.value;
    ul_list.appendChild(status_input_li);

    const percent_completed_li = document.createElement('li');
    percent_completed_li.classList.add('list-group-item', 'item5');
    percent_completed_li.innerText = percent_completed_input.value;
    ul_list.appendChild(percent_completed_li);

    
    const new_date_li = document.createElement('li');
    new_date_li.classList.add('list-group-item', 'item6');
    new_date_li.innerText = new Date().toUTCString();
    ul_list.appendChild(new_date_li)

    const delete_li = document.createElement('li');
    delete_li.classList.add('list-group-item', 'item7');
    delete_li.setAttribute('id', 'exit');
    delete_li.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    ul_list.appendChild(delete_li);

    console.log(belekas)
    my_form.reset();
})

belekas.addEventListener('click', ()=> {
    console.log('belekas')
})