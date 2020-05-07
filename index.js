let fortunes = ['great life', 'bad life', 'long life', 'short life']

document.addEventListener('DOMContentLoaded', function () {
    
    let message = document.createElement('p');
    message.innerHTML = "hello";
    console.log(message)

    let button = document.createElement('button');
    button.innerHTML = 'Click me'
    
    let root = document.querySelector('#root');
    console.log(root)

    root.appendChild(message);
    root.appendChild(button);

    button.addEventListener('click', function(){
        let randomNumber = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomNumber];

        console.log(randomFortune)

        message.innerHTML = randomFortune
    })

})