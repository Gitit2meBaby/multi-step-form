// email, phone and empty field validations for initial form inputs
// document.addEventListener('DOMContentLoaded', () => {

function validateEmail() {
    const email = document.querySelector('#emailInput')
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const labelWrapper = email.closest('.input-wrapper').querySelector('.label-wrapper');
    const errorMsg = labelWrapper.querySelector('.error-msg');

    if (email.value.match(mailformat)) {
        if (errorMsg) {
            errorMsg.remove();
        }
        return true;
    } else {
        if (!errorMsg) {
            const newErrorMsg = document.createElement('p');
            newErrorMsg.classList.add('error-msg');
            newErrorMsg.textContent = "invalid email address";
            labelWrapper.appendChild(newErrorMsg);
        }

        email.classList.add("error-input");
        email.focus();
        return false;
    }
}

function validatePhone() {
    const phone = document.querySelector('#phoneInput')
    const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    const labelWrapper = phone.closest('.input-wrapper').querySelector('.label-wrapper');
    const errorMsg = labelWrapper.querySelector('.error-msg');


    if (phone.value.match(phoneno)) {
        if (errorMsg) {
            errorMsg.remove();
            phone.classList.remove("error-input");

        }
        return true;
    } else {
        if (!errorMsg) {
            const newErrorMsg = document.createElement('p');
            newErrorMsg.classList.add('error-msg');
            newErrorMsg.textContent = "invalid phone number";
            labelWrapper.appendChild(newErrorMsg);
        }
        phone.classList.add("error-input");
        phone.focus();
        return false;
    }
}

// check for empty fields before moving on
const nextBtnInfo = document.querySelector('#nextBtnInfo')
nextBtnInfo.addEventListener('click', (event) => {
    const requiredFields = document.querySelectorAll("input[required]");

    const infoSelection = document.querySelector('#infoSelection')
    const infoSection = document.querySelector('#infoSection')

    const planSelection = document.querySelector('#planSelection')
    const planSection = document.querySelector('#planSection')

    let isValid = true;

    for (const field of requiredFields) {
        if (field.value.trim() === "") {
            isValid = false;
            const errorMsg = document.createElement('p')
            errorMsg.classList.add('error-msg')
            errorMsg.textContent = 'This field is required'
            const labelWrapper = field.closest('.input-wrapper').querySelector('.label-wrapper');
            labelWrapper.appendChild(errorMsg)
            field.classList.add("error-input");
        } else {
            field.classList.remove("error-input");
            infoSection.classList.add('hidden')
            infoSelection.classList.remove('selected')
            planSection.classList.remove('hidden')
            planSelection.classList.add('selected')
        }
    }

    if (!isValid) {
        event.preventDefault();
    }
});

// });


