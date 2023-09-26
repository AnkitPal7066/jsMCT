document.querySelector("#home").addEventListener("click", function(){
    window.location.href = "../index.html"
});

async function getRecipe(){
    const searchValue = document.querySelector("#input").value;
    document.querySelector("#recipeList").textContent = `Recipe List: ${searchValue}`;
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchValue}`);
    const data =  await response.json();
    getOne(data.recipes);
}

async function getOne(data){
    const down = document.querySelector(".down");
        down.innerHTML = "";
    data.map((ele)=>{
        const oneDish = document.createElement("div");
        oneDish.classList.add("oneDish");
        const main = document.querySelector(".main");
        main.style.display = "block";
        main.style.paddingTop = "0";
        main.style.paddingBottom = "0";
        down.style.display = "flex"

        oneDish.innerHTML = `<div class="imgDiv"><img class="dishImg" src="${ele.image_url}" alt=""></div>
        <div class="nameDiv">
            <h2 class="dishName">${ele.title}</h2>
        </div>
        <div class="btnDiv">
            <a href="../02Details/index3.html?valueToSend=${ele.recipe_id}"><button class="detailB">Details</button></a>
            <a href="${ele.source_url}"><button class="recipeB">Recipe Url</button></a>
        </div>`
        down.appendChild(oneDish);
    })
}

document.querySelector(".searchbtn").addEventListener("click", getRecipe);
document.querySelector("#input").addEventListener("keyup", getRecipe);

