const kCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

let sequence = [];

let compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    } return true;
}

let hit = () => {
    let allEls = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, p, img, .portfolio, .contact'));
    allEls.forEach(el => {
        setTimeout(() => {
            el.classList.add('fade');
        }, Math.floor(Math.random() * 5000));
    });
    setTimeout(() => {
        document.body.classList.add('bigFade');
    }, 5100);
}

document.addEventListener('keydown', (event) => {
    kCode.includes(event.code) && compare(sequence, kCode)
        ? sequence.push(event.code)
        : sequence = [event.code];
    console.log(sequence);
});

document.addEventListener('keyup', (event) => {
    sequence.length === kCode.length
        ? (compare(sequence, kCode) ? hit() : null)
        : null;
});