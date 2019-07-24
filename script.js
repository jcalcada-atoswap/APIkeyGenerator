let lenght = 32;
let alphabet = "abcdefghijklmnopqrstuvwxyz"; alphabet = alphabet.split("");
let letter; // random letter from alphabet var
let number; // random from 0 to 9
let apiKey = "";

function AlphabetOrNumber() {
    let random = Math.floor(Math.random() * 2);
    let choice;
    letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    number = Math.floor(Math.random() * 10);

    if (random == 0) {
        choice = letter;
    }
    else {
        choice = number;
    }
    
    console.log(choice);
    return choice;
}

function fillApiKey() {
    while(apiKey.length < lenght) {
        apiKey = apiKey + AlphabetOrNumber();
    }

    console.log(apiKey);
    document.getElementById("box").innerHTML = "<strong>API key length :</strong> " + lenght + " chars<br>" + "<strong>API key :</strong> " + apiKey;
    return apiKey;
}

fillApiKey();