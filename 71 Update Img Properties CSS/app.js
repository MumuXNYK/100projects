const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    this.name == 'base' ? (suffix = "") : (suffix = "px")

    document.body.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate) )