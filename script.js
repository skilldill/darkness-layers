const firstLayer = document.querySelector('#layer-1');
const secondLayer = document.querySelector('#layer-2');
const thirdLayer = document.querySelector('#layer-3');

firstLayer.addEventListener('click', () => {
    if (firstLayer.classList.contains('layer-stack-1')) {
        secondLayer.classList.add('layer-hide');
        thirdLayer.classList.add('layer-hide');

        setTimeout(() => firstLayer.classList.remove('layer-stack-1'), 300);
    } else {
        firstLayer.classList.add('layer-stack-1');

        setTimeout(() => {
            secondLayer.classList.remove('layer-hide');
            thirdLayer.classList.remove('layer-hide');
        }, 300);
    }
})

secondLayer.addEventListener('click', () => {
    if (secondLayer.classList.contains('layer-stack-2')) {
        firstLayer.classList.add('layer-hide');
        thirdLayer.classList.add('layer-hide');

        setTimeout(() => secondLayer.classList.remove('layer-stack-2'), 300);
    } else {
        secondLayer.classList.add('layer-stack-2');
        setTimeout(() => {
            firstLayer.classList.remove('layer-hide');
            thirdLayer.classList.remove('layer-hide');
        }, 300);
    }
})

thirdLayer.addEventListener('click', () => {
    if (thirdLayer.classList.contains('layer-stack-3')) {
        secondLayer.classList.add('layer-hide');
        firstLayer.classList.add('layer-hide');

        setTimeout(() => thirdLayer.classList.remove('layer-stack-3'), 300);
    } else {
        thirdLayer.classList.add('layer-stack-3');

        setTimeout(() => {
            firstLayer.classList.remove('layer-hide');
            secondLayer.classList.remove('layer-hide');
        }, 300);
    }
})