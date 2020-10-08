const   keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyA', 'KeyB'],
        kCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyA', 'KeyB'];

let sequence = [];

let compare = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        } return true;
    } else {
        return false
    }
}

document.addEventListener('keydown', (event) => {
    (keys.includes(event.code)) ? sequence.push(event.code) : sequence = [];
    console.log(sequence);
});

document.addEventListener('keyup', (event) => {
    compare(sequence, kCode) ? console.log('HIT!') : null;
});
