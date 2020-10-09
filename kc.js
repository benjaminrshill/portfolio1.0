const   kCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'],
        allEls = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, p, img, .portfolio, .contact'));

let sequence = [];

let compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    } return true;
}

let hit = (allEls) => {
    let boss = document.getElementById('ccm');
    boss.classList.remove('hide');
    boss.classList.add('boss');
    document.querySelectorAll('h3').forEach((el) => {
        el.classList.add('glitch');
    });
    allEls.forEach(el => {
        setTimeout(() => {
            el.classList.add('fade');
        }, Math.floor(Math.random() * 4000));
        setTimeout(() => {
            el.classList.add('jump');
        }, Math.floor(Math.random() * 4000));
    });
    setTimeout(() => {
        boss.classList.remove('crouch');
    }, 4000);
    setTimeout(() => {
        document.querySelector('.boss p').innerHTML = 'G A M E &nbsp; O V E R .';
        document.querySelector('.boss p').classList.add('type');
    }, 5500);
}

document.addEventListener('keydown', (event) => {
    kCode.includes(event.code) && compare(sequence, kCode)
        ? sequence.push(event.code)
        : sequence = [event.code];
    console.log(sequence);
});

document.addEventListener('keyup', (event) => {
    sequence.length === kCode.length
        ? (compare(sequence, kCode) ? hit(allEls) : null)
        : null;
});

