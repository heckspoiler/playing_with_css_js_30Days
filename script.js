const input = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log(this.value);
}

input.forEach(input => input.addEventListener('change', handleUpdate))
input.forEach(input => input.addEventListener('mousemove', handleUpdate))