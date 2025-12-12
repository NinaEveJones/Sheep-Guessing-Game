function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function processGuess() {
    const min= 2;
    const max = 10;

     //show sheep
     const container = document.getElementById('sheepContainer');
      container.innerHTML = '';

//get random number of wolves
    const wolvesNumber = getRandomNumber(min, max);

     

    
    //get the player's guess
    const numberGuessed = parseInt(document.getElementById("playerGuess").value);

    //start the message we'll send back to the player
    let message = `You guessed ${numberGuessed} and there were  ${wolvesNumber} wolves. `;
    
    if (isNaN(numberGuessed) || numberGuessed <2 || numberGuessed > 10)
    {
        document.getElementById("result").textContent = "Please enter a whole number between 2 and 10.";
        return;

    }
    
    if (wolvesNumber===numberGuessed)
    {
        //player wins!
        document.getElementById("result").textContent = message + "You have helped the sheep!";
        const img = document.createElement('img');
        img.src = "media/Sheep_img5.png";
        container.appendChild(img);

    }
    
    else
    {
        //player guessed incorrectly
        document.getElementById("result").textContent = message + "That wasn't correct...";
        const img = document.createElement('img')
        img.src = "media/Sheep_img6.png";
        container.appendChild(img);


    }
     




   
}

document.getElementById("submitGuess").addEventListener("click", processGuess);