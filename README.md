https://ankitpal7066.github.io/jsMCT/               

document.querySelector("#home").addEventListener("click", function(){...});
Here, you're targeting an element with the ID "home" using document.querySelector("#home"). When this element is clicked, the function provided as the second argument will be executed. In this case, the function changes the current window's location to "./index.html," effectively redirecting the user to the "index.html" page when the element with the "home" ID is clicked. This is commonly used for creating navigation links or buttons.

document.querySelector("#input").addEventListener("click", function(){...});
Similarly, this code targets an element with the ID "input." When this element is clicked, the provided function redirects the user to "./01Search/index2.html," taking them to another page.

2ndPage.

The first event listener:
When the element with the ID "home" is clicked, it triggers a callback function.
This function sets the window.location.href to "../index.html," which means it redirects the user to the "index.html" page in the parent directory.


The getRecipe function:
This function is triggered when a search button (with the class "searchbtn") is clicked.
It retrieves the search value from an input element with the ID "input."
It updates the content of an element with the ID "recipeList" to display the search value as part of a message.
It sends an HTTP GET request to the "https://forkify-api.herokuapp.com/api/search" API with the search value as a query parameter.
It awaits the response and parses the JSON data returned.


The getOne function:
This function is called with the recipe data obtained from the API.
It selects an element with the class "down" and clears its content.
It iterates through the recipe data using .map().
For each recipe, it creates a new HTML structure that includes an image, recipe name, and buttons.
It appends each recipe's HTML structure to the "down" element to display the search results.
It adjusts the styling of the page by displaying certain elements and removing padding.


Event Listeners:
There are two event listeners set up:
One listens for clicks on an element with the class "searchbtn" and triggers the getRecipe function when clicked.
The other listens for keyup events on an input element with the ID "input" and also triggers the getRecipe function. This allows users to search by pressing the "Enter" key in the input field.

3rdPage.

The first event listener:
When an element with the ID "home" is clicked, it triggers a callback function.
This function sets the window.location.href to "../index.html," which redirects the user to the "index.html" page in the parent directory.


The get function:
This function is executed immediately when the page loads.
It extracts a query parameter named "valueToSend" from the URL using the URLSearchParams object.
It sends an HTTP GET request to the "https://forkify-api.herokuapp.com/api/get" API with the "rId" query parameter set to the received value.
It awaits the response from the API and parses the JSON data.


The appendIt function:
This function receives the recipe data obtained from the API.
It updates various elements in the HTML to display the recipe details, such as the image, name, publisher, and URLs.
It also calls the ingreDetail function to display the list of ingredients.


The ingreDetail function:
This function populates an element with the ID "details" with the ingredients data.
It iterates through the ingredients and creates a new HTML div element for each ingredient, which is then appended to the "details" element.


The second event listener:
When an element with the ID "back" is clicked, it triggers a callback function.
This function sets the window.location.href to "../01Search/index2.html," which redirects the user back to the "index2.html" page in the parent directory.
The get function is called immediately when the page loads, so it fetches and displays recipe details based on the "valueToSend" query parameter in the URL.
