const calculateAge = (dateOfBirth) => {
    const today = new Date().getFullYear();
    const dob = new Date(dateOfBirth).getFullYear();
    return today-dob;
}

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

    var data = await getPartner(id);
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
                console.log(data);
    document.getElementById("userDetails").innerHTML = partner;
}

putData();

document.addEventListener("DOMContentLoaded", () => {
    var form = document.querySelector("form");
    form.addEventListener('submit', userLogin);
});