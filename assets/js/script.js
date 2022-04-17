
var userInput = document.getElementById ("#drink-name")
var apiKey = "1"


function getDrinkApi (){
    var userInput = document.getElementById("drink-name").value
    var requestDrinkApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput 
    fetch(requestDrinkApi)
    .then(function(response, data) {
        response.json().then(function(data){
        console.log(data);
    })
})


searchDrink = addEventListener("click", function(event) {
event.preventDefault();
var userInput = document.querySelector ("#drink-name").value;
// console.log(userInput);


});

}

