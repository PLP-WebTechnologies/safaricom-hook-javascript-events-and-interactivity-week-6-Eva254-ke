document.getElementById('toggleColorBtn').onclick = function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
};

document.getElementById('textSizeSlider').oninput = function() {
    document.getElementById('text').style.fontSize = this.value + 'px';
};

document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('modal').style.display = 'block';
};

document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

document.getElementById('myForm').onsubmit = function(event) {
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (name.value.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    if (password.value.length < 8 || !/[A-Z]/.test(password.value) || !/\d/.test(password.value)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter and one number.';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
};

function showMessage() {
    const dropdown = document.getElementById('dropdown');
    const message = document.getElementById('dropdownMessage');
    message.textContent = dropdown.value ? `You selected: ${dropdown.value}` : '';
}
