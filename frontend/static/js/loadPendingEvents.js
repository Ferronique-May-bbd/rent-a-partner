const getPendingEvents = async(id) => {
    let url = `http://localhost:5501/pending-events/${id}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
        return "Oops seems like something is wrong. Try again later"
    }
}
console.log("kjsdbfklsd")

const calculateAge = (dateOfBirth) => {
    const today = new Date().getFullYear();
    const dob = new Date(dateOfBirth).getFullYear();
    return today-dob
    
}

const renderEvents = async() =>  {
    let url = window.location.href;
    let id = url.split('?')[1];

    let events = await getPendingEvents(id);
    let html = '';

    if(events == "Oops seems like something is wrong. Try again later"){
        html = events;
    }else{
        events.forEach(event => {
            let htmlSegment = `<my-invites
                    partnerId='${event.UserId != null | event.UserId != 'null' | event.UserId != undefined ? event.UserId : " " }'
                    partnerName='${ event.Name != null | event.Name != 'null' | event.Name != undefined ? event.Name : " " }'
                    partnerAge='${event.DateOfBirth != null | event.DateOfBirth != 'null' | event.DateOfBirth != undefined ? calculateAge(event.DateOfBirth) : " "}'
                    partnerGender='${event.Gender != null | event.Gender != 'null' | event.Gender != undefined ? event.Gender : " " }'
                    partnerDistance='${event.Location != null | event.Location != 'null' | event.Location != undefined ? event.Location : " "}'
                    partnerBio='${event.Bio != null | event.Bio != 'null' | event.Bio != undefined ? event.Bio : " "}'
                    partnerDisplayImage='static/img/${event.ProfilePicUrl != null | event.ProfilePicUrl != 'null' | event.ProfilePicUrl != undefined ? event.ProfilePicUrl : " "}'
                    partnerLanguage='${event.Language != null | event.Language != 'null' | event.Language != undefined ? event.Language : " "}'
                    partnerRace='${event.Race != null | event.Race != 'null' | event.Race != undefined ? event.Race : " "}'
                    partnerHeight='${event.Height != null | event.Height != 'null' | event.Height != undefined ? event.Height : " "}'
                    eventTitle='${event.Title != null | event.Title != 'null' | event.Title != undefined ? event.Title : " "}'
                    eventsDate='${event.Date != null | event.Date != 'null' | event.Date != undefined ? event.Date : " "}'
                    eventsLocation='${event.Location != null | event.Location != 'null' | event.Location != undefined ? event.Location : " "}'
                    eventDetails='${event.Description != null | event.Description != 'null' | event.Description != undefined ? event.Description : " "}'>
                </my-invites>`;
                                
            html += htmlSegment;
        });
    }  

    let container = document.querySelector('#mainInvite');
    container.innerHTML = html;
}

renderEvents();