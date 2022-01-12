const btnTranslate = document.querySelector("#btn-translate");

const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");
const serverUrl = "https://api.funtranslations.com/translate/pirate.json";

const getTranslationURL = (text) => {
    return serverUrl + "?" + "text=" + text
}

const errorHandler = (error) => {
    console.log("error occured", error);
    alert("Something went wrong with server! try again after sometime")

}

const clickHandler = () => {
    const inputText = txtInput.value;

    //calling server for processing

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
