var MaDiv = document.getElementById("div1");
MaDiv.addEventListener("click", test);

function test() {
   
    fetch("http://192.168.65.94/test.json", { method: 'GET' })
        .then(response => response.json())
        .then(response2 => MaDiv.innerHTML = JSON.stringify(response2))
        .catch(error => console.log("erreur : " + error));
}