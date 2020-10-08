const   keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyA', 'KeyB'],
        kCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyA', 'KeyB'];

let sequence = [];

let compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    } return true;
}

let hit = () => {
    document.body.style.background = 'linear-gradient(to right, #3a0d3e, #3e0d28)';
}

document.addEventListener('keydown', (event) => {
    keys.includes(event.code) && compare(sequence, kCode)
        ? sequence.push(event.code)
        : sequence = [event.code];
    console.log(sequence);
});

document.addEventListener('keyup', (event) => {
    sequence.length === kCode.length
        ? (compare(sequence, kCode) ? hit() : null)
        : null;
});