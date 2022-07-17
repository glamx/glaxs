//pegar i
// atentder 
async function getExternalImage(){
    var response = await fetch('https://source.unsplash.com/random')
    document.querySelector('.image')

    .innerHTML = `<img src="${response.url}" >`
}

getExternalImage()


