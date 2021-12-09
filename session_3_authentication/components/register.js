import { InputGroup } from "./input_group.js";
class Register{
    $container;
    $title;

    $formRegister;
    $inputGroupDisplayName;
    $inputGroupEmail;
    $inputGroupPassword;
    $inputGroupConfirmPassword;

    $feedbackMessage;
    $btnSubmit;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('center', 'h-screen', 'flex-col');
        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Register';

        this.$formRegister = document.createElement('form');
        this.$formRegister.addEventListener('submit', this.handleSubmit);
        
        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email');
        this.$inputGroupDisplayName = new InputGroup('text', 'Display Name', 'displayName');
        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password');
        this.$inputGroupConfirmPassword = new InputGroup('password', 'Confirm Password', 'confirmPassword');

        this.$feedbackMessage = document.createElement('button');

    }

    
}
handleSubmit = (evt) => {
    evt.preventDefault()[
        const email
    ]
}