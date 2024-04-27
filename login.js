const button = document.getElementById('button')

async function teste(){
    window.location.href = './home/home.html'
}

window.onload = () => {
    button.addEventListener('click', teste)
}