function userRegistration(e) {
    e.preventDefault();

    let form = new FormData(e.target);

    let data = Object.fromEntries(form.entries());

    fetch("http://localhost:5501/register", {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        alert("Successfully registered...");
    });
}

function uploadImage(e) {
    let files = e.target.files;
    let form = new FormData();
    form.append("profilePic", files[0]);

    fetch("/uploadImage", {
        method:"POST",
        body:form
    }).then(response => response.json()).then(data => {
        console.log(data.message);
        document.querySelector("#ProfilePicUrl").value = data.message;
    }).catch(error => console.log(error));
}

document.addEventListener("DOMContentLoaded", () => {
    var form = document.querySelector("form");
    form.addEventListener('submit', userRegistration);

    document.querySelector("#profilePic").addEventListener("change", e => {
        uploadImage(e);
    })
});