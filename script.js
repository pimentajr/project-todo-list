var slctDiv = document.querySelector('div')
var crtElement = document.createElement('p')
var newCnt = 'Clique duas vezes em um item para marcá-lo como completo'
crtElement.setAttribute('id', 'funcionamento')
crtElement.innerText = newCnt
slctDiv.appendChild(crtElement)