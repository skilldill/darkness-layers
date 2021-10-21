const layers = document.querySelectorAll('.layer');

function initLayers() {
    for(let i = 0; i < layers.length; i++) {
        const layer = layers[i];

        layer.addEventListener('click', () => showLayer(i));

        layer.style.transform = `translate3d(0px, ${700 - (100 * i)}px, -${1500 + (200 * i)}px)`;
        layer.style.zIndex = 1000 - i;
    }
}

function showLayer(layerIndex) {
    for(let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        
        if (i === layerIndex) {
            layer.classList.toggle('layer-show');
        } else {
            layer.classList.toggle('layer-hide');
        }
    }
}

initLayers();