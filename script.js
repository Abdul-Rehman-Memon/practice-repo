const change = () =>{
    document.querySelector('#heading').innerText = 'Hello World Clicked'
}
document.querySelector('#btn').addEventListener('click', change)