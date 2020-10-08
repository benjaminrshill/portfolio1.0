const   keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'],
        kCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

let sequence = [];

let compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    } return true;
}

let hit = () => {
    document.body.classList.add('kCode');
    console.log('hit');
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