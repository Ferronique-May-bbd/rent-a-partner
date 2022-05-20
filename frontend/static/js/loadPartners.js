const getPartners = async() => {
    let url = 'http://localhost:5501/suggested-partners';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
        return "Oops seems like something is wrong. Try again later"
    }
}

const calculateAge = (dateOfBirth) => {
    const today = new Date().getFullYear();
    const dob = new Date(dateOfBirth).getFullYear();
    return today-dob
    
}

const renderPartners = async() =>  {
    let partners = await getPartners();
    let html = '';

    if(partners == "Oops seems like something is wrong. Try again later"){
        html = partners;
    }else{
        partners.forEach(partner => {
            let htmlSegment = `<profile-card
                                    partnerId='${partner.UserId}'
                                    partnerName='${partner.Name} ${partner.Surname}'
                                    partnerAge='${calculateAge(partner.DateOfBirth)}'
                                    partnerGender='${partner.Gender}'
                                    partnerDistance='${partner.Location}'
                                    partnerBio='${partner.Bio}'
                                    partnerDisplayImage='static/img/${partner.ProfilePicUrl}'
                                    partnerLanguage='${partner.Language}'
                                    partnerRace='${partner.Race}'
                                    partnerHeight='${partner.Height} cm'>
                                </profile-card>`;
                                html += htmlSegment;
        });
    }  

    let container = document.querySelector('.card-container');
    container.innerHTML = html;
}

renderPartners();