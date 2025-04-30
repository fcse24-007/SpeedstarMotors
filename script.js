document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const feedbackInput = document.getElementById('feedback');
    
    // Function to display error messages
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error');
        
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.style.borderColor = 'red';
    }
    
    // Function to clear error messages
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error');
        
        if (errorElement) {
            errorElement.textContent = '';
        }
        
        input.style.borderColor = '';
    }
    
    // Name validation
    function validateName() {
        const nameValue = nameInput.value.trim();
        const nameRegex = /^[a-zA-Z\s]+$/;
        
        if (nameValue === '') {
            showError(nameInput, 'Name is required');
            return false;
        } else if (nameValue.length < 3) {
            showError(nameInput, 'Name must be at least 3 characters');
            return false;
        } else if (nameValue.length > 50) {
            showError(nameInput, 'Name must be less than 50 characters');
            return false;
        } else if (!nameRegex.test(nameValue)) {
            showError(nameInput, 'Name cannot contain numbers or special characters');
            return false;
        } else {
            clearError(nameInput);
            return true;
        }
    }
    
    // Email validation
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            showError(emailInput, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, 'Please enter a valid email address');
            return false;
        } else {
            clearError(emailInput);
            return true;
        }
    }
    
    // Feedback validation
    function validateFeedback() {
        const feedbackValue = feedbackInput.value.trim();
        
        if (feedbackValue === '') {
            showError(feedbackInput, 'Feedback is required');
            return false;
        } else if (feedbackValue.length < 10) {
            showError(feedbackInput, 'Feedback must be at least 10 characters');
            return false;
        } else {
            clearError(feedbackInput);
            return true;
        }
    }
    
    // Event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    feedbackInput.addEventListener('input', validateFeedback);
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isFeedbackValid = validateFeedback();
        
        if (isNameValid && isEmailValid && isFeedbackValid) {
            // Form is valid - you can submit it or process the data
            alert('Thank you for your feedback!');
            form.reset();
        }
    });
});