const button = document.getElementById('button')

async function home(){
    window.location.href = './home/home.html'
}

window.onload = () => {
    button.addEventListener('click', home)
}