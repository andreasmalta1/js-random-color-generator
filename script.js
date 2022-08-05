const container = document.querySelector('.container')

for (let i = 0; i < 30; i++){
    const colorContainerEl = document.createElement('div')
    colorContainerEl.classList.add('color-container')
    container.appendChild(colorContainerEl)
    let colorCode = randomColor()
    colorContainerEl.innerText = colorCode
    colorContainerEl.style.backgroundColor = colorCode
} 

function randomColor() {
    const chars = '012346789abcdef'
    const colorCodeLength = 6
    let color = '#'
    for (let i = 0; i < colorCodeLength; i++){
        randomPos = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomPos, randomPos + 1)
    }
    return color
}