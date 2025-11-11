document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
   const queryInput = document.querySelectorAll('input[name="queryType"]');
    const messageInput = document.getElementById('message');
    const consentInput = document.getElementById('consent');

    const nameError = document.getElementById('nameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const queryError = document.getElementById('queryTypeError');
    const messageError = document.getElementById('messageError');
    const consentError = document.getElementById('consentError');


    

    //Function to show error
    // function showError (input, element, message) {
    //     element.textContent = message;
    //     input.setAttribute('aria-invalid', 'true');
    // }
    
  

    // function clearError (input, element) {
    //     element.textContent = '';
    //     input.removeAttribute ('aria-invalid');
    // }


    function showError(input, element, message) {
		element.textContent = message;
		input.setAttribute('aria-invalid', 'true');
	}

	function clearError(input, element) {
		element.textContent = '';
		input.removeAttribute('aria-invalid');
	}

    	function validateEmail(email) {
	// Simple email regex for validation
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}
 
    form.addEventListener('submit',(e) => {
        e.preventDefault();

        let valid = true;

        //Validate first Name
        if (!nameInput.value.trim()) {
            showError (nameInput, nameError, 'Please enter your first name');
            valid = false;
        } else {
            clearError (nameInput, nameError);
        }

        //Validate last Name
        if (!lastNameInput.value.trim()) {
            showError (lastNameInput, lastNameError, 'Please enter your last name');
            valid = false;
        } else {
            clearError (lastNameInput, lastNameError);
        }

        //validate email
        if (!emailInput.value.trim()) {
            showError (emailInput, emailError, 'Please enter your email address');
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            showError (emailInput, emailError, 'Please enter a valid email address');
            valid = false;
        } else {
            clearError (emailInput, emailError);
        }

          //validate query type
   const querySelected = Array.from(queryInput).some(radio => radio.checked);

        if (!querySelected) {
            showError(queryInput[0], queryError, 'Please select a query type');
            valid = false;
        } else {
            clearError(queryInput[0], queryError);
        }
  
        //validate message
        if (!messageInput.value.trim()) {
            showError (messageInput, messageError, 'Please enter your message');
            valid = false;
        } else {
            clearError (messageInput, messageError);
        }

        //validate consent
        if (!consentInput.checked) {
            showError (consentInput, consentError, 'You must consent before submitting');
            valid = false;
        } else {
            clearError (consentInput, consentError);
        }

             if (valid) {
            alert('Form submitted successfully!');
            form.reset(); // optional – clear the form
        }
    });



});