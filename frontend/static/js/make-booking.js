function makeBooking(e) {
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
        
    });
}

document.addEventListener("DOMContentLoaded", () => {
    var url = new URL(window.location.href);
    console.log(url.searchParams.get("id"));
    var form = document.querySelector("form");
    form.addEventListener('submit', userLogin);
});