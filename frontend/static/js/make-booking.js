var data = "";

const calculateAge = (dateOfBirth) => {
    const today = new Date().getFullYear();
    const dob = new Date(dateOfBirth).getFullYear();
    return today-dob;
}

function makeBooking(e) {
    e.preventDefault();
    
    var user = JSON.parse(sessionStorage.getItem("UserId"));
    var userObject = Object.fromEntries(user.entries());
    var userId = userObject[0].Id;

    let form = new FormData(e.target);

    let bookData = Object.fromEntries(form.entries());
    bookData.UserId = userId;
    bookData.PartnerId = data.UserId;

    fetch("http://localhost:5501/book", {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(bookData)
    }).then(response => response.json()).then(data => {
        if(data.status === "success") {
            document.getElementById("status").classList.add("text-success");
        } else {
            document.getElementById("status").classList.add("text-danger");
        }
        document.getElementById("status").innerText = data.message;
    });
}

const getPartner = async(id) => {
    try {
        let res = await fetch(`http://localhost:5501/partner/${id}`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

async function putData() {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");

    var arr = await getPartner(id);
    data = arr[0];
    let partner = `<profile-card
                    partnerId='${data.UserId}'
                    partnerName='${data.Name} ${data.Surname}'
                    partnerAge='${calculateAge(data.DateOfBirth)}'
                    partnerGender='${data.Gender}'
                    partnerDistance='${data.Location}'
                    partnerBio='${data.Bio}'
                    partnerDisplayImage='static/img/${data.ProfilePicUrl}'
                    partnerLanguage='${data.Language}'
                    partnerRace='${data.Race}'
                    partnerHeight='${data.Height} cm'>
                </profile-card>`;
    document.getElementById("userDetails").innerHTML = partner;
    document.getElementById("bio").innerText = data.Bio;
    document.getElementById("height").innerText = data.Height + " cm";
    document.getElementById("language").innerText = data.Language;
}

putData();

document.addEventListener("DOMContentLoaded", () => {
    var form = document.querySelector("form");
    form.addEventListener('submit', makeBooking);
});