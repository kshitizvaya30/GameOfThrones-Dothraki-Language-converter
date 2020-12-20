alert("YOU HAVE ENTERED INTO THE DOTHRAKI'S AREA , BE AWARE . YOU CAN USE THIS LANGUAGE CONVERTER TO TALK TO THEM ");

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//Server URL
var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

btnTranslate.addEventListener("click", clickEventHandler);

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("Failed to Fetch", error);
    alert("Something wrong with Server! Try Again after some time");
}


//Calling Server For Processing
function clickEventHandler() {

    //Taking Input
    var inputText = txtInput.value;

    //Calling server for Processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText
        })
        .catch(errorHandler);
};