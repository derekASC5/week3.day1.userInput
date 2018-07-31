const noun = document.getElementById('noun');
const verb = document.getElementById('verb');
const adjective = document.getElementById('adjective');
const titleInput = document.getElementById('title_input');
const title = document.getElementById('main_title');
const submitButton = document.getElementById('submit_button');


submitButton.addEventListener('click', submitfunction);

function submitfunction(event) {
    

    if (titleInput.value === ''  || noun.value === '' || verb.value === ''  || adjective.value === '' ) {
        alert('You left a field blank!');
    } else {

    event.preventDefault();
    let title = titleInput;
    const submitform = document.getElementsByClassName('form_container');
    document.write(`Last night I ate a ${noun.value}, and today I just had to ${verb.value}. What a ${adjective.value} day!`);  
    }
}