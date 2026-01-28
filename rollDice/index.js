function roll(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];

    for(let i=0; i<numOfDice; i++){
        const value= Math.floor(Math.random() * 6 ) + 1;
        console.log(value);
        values.push(value);
        images.push(`<img src="./images/${value}.svg" height="200px" width="200px" style="border-radius:20px;" alt="Dice - ${value}">`);
    }
    
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML=images.join('');
}   