const   kCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'],
        allEls = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, p, img, .portfolio, .contact')),
        matrix = 'abcdefghjiklmnopqrstuvwxyz1234567890!@£$%&*+-?';

let sequence = [];

let compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    } return true;
}

let neo = () => {
    let rand = (Math.floor(Math.random() * 40));
    return matrix[rand];
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
            el.textContent += neo();
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

// document.addEventListener('keyup', (event) => {
//     kCode.includes(event.code) && compare(sequence, kCode)
//         ? (sequence.length === kCode.length
//                 ? hit(allEls)
//                 : sequence.push(event.code))
//         : sequence = [event.code];
//     console.log(sequence);
// });

document.addEventListener('keydown', (event) => {
    kCode.includes(event.code) && compare(sequence, kCode)
        ? sequence.push(event.code)
        : sequence = [event.code];
});

document.addEventListener('keyup', (event) => {
    sequence.length === kCode.length
        ? (compare(sequence, kCode) ? hit(allEls) : null)
        : null;
});

