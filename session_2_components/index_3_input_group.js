class InputGroup {
    $container;
    $label;
    $input;
    $feedback;

    constructor(label, inputType) {
        this.$container = document.createElement('div');
        this.$container.style.display = 'flex';
        this.$container.style.flexDirection = 'column';
        // this.$container.classList.add('container');
        this.$label = document.createElement('label');
        this.$label.innerHTML = label;

        this.$input = document.createElement('input');
        this.$input.type = inputType;

        this.$feedback = document.createElement('span');

    }
    setSuccessMessage = (message) => {
        this.$feedback.style.color = 'green';
        this.$feedback.innerHTML = message;
        this.$input.style.borderColor = 'green';
    }

    setErrorMessage = (message) => {
        this.$feedback.style.color = 'red';
        this.$feedback.innerHTML = message;
        this.$input.style.borderColor = 'red';

    }
    render() {
        this.$container.appendChild(this.$label);
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$feedback)
        return this.$container;
    }
}

export { InputGroup };