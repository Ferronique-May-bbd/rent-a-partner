function userLogin(e) {
    e.preventDefault();

    let form = new FormData(e.target);

    let data = Object.fromEntries(form.entries());

    fetch("http://localhost:5501/login", {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        if(data.length > 0) {
            sessionStorage.setItem("UserId", JSON.stringify(data));
            console.log(sessionStorage.getItem("UserId"));
        } else {
            document.getElementById("status").innerText = "Email does not exist!!!";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    var form = document.querySelector("form");
    form.addEventListener('submit', userLogin);
});