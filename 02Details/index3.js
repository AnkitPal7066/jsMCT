document.querySelector("#home").addEventListener("click", function(){
    window.location.href = "../index.html"
});
async function get(){
    const urlParams = new URLSearchParams(window.location.search);
    const receivedValue = urlParams.get('valueToSend');
    console.log(receivedValue);
    const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${receivedValue}`);
    const data  = await response.json();
    appendIt(data.recipe);
}

async function appendIt(data){
    console.log(data);

    document.querySelector("#img").src = data.image_url;
    document.querySelector("#name").innerHTML = data.title;
    document.querySelector("#publish").innerHTML = data.publisher;
    document.querySelector("#rUrl").href = data.source_url;
    document.querySelector("#pUrl").href = data.publisher_url;
    ingreDetail(data.ingredients);
}

function ingreDetail(data){
    const details = document.querySelector("#details");
    data.map((ele) =>{
        console.log(ele);
        const div = document.createElement("div");
        div.innerHTML = `: ${ele}`;
        details.appendChild(div);
    })
}

document.querySelector("#back").addEventListener("click", function(){
    window.location.href = "../01Search/index2.html"
})

get();

