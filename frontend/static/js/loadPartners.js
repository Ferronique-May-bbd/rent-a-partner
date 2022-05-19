const getPartners = async() => {
    let url = 'http://localhost:5501/suggested-partners';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}



const renderPartners = async() =>  {
    let partners = await getPartners();
    let html = '';
    partners.forEach(partner => {
        let htmlSegment = `<profile-card
                                partnerId='${partner.UserId}'
                                partnerName='${partner.Name} ${partner.Surname}'
                                partnerAge='${partner}'
                                partnerGender='${partner}'
                                partnerDistance='${partner}'
                                partnerBio='${partner}'
                                partnerDisplayImage='static/images/${partner}'
                                partnerLanguage='${partner}'
                                partnerRace='${partner}'
                                partnerHeight='${partner} cm'>
                            </profile-card>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderPartners();