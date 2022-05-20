class ProfileCard extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        const partnerId = this.attributes.partnerId.value
        const partnerName = this.attributes.partnerName.value
        const partnerAge = this.attributes.partnerAge.value
        const partnerDisplayImage = this.attributes.partnerDisplayImage.value
        const partnerGender = this.attributes.partnerGender.value
        const partnerDistance = this.attributes.partnerDistance.value
        const partnerHeight = this.attributes.partnerHeight.value
        const partnerRace = this.attributes.partnerRace.value
        const partnerLanguage = this.attributes.partnerLanguage.value
        const partnerBio = this.attributes.partnerBio.value

      this.innerHTML = `      
        <section id='partner-${partnerId}' class='partner-ad'>

            <section id='partner-${partnerId}' class='card preview' style='background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 68.57%, #000000 100%), url(${partnerDisplayImage != undefined | partnerDisplayImage != null ? partnerDisplayImage : ""});'>

                <h3 class='name'>
                    ${partnerName != undefined | partnerName != null ? partnerName : ""}
                    <span class='age'>
                        ${partnerAge != undefined | partnerAge != null ? partnerAge : ""}
                    </span>
                </h3>
                
                <span class='pronouns'>
                    ${partnerGender != undefined | partnerGender != null ? partnerGender : ""}
                </span>

                <section class='partner-info'>
                    <span class='distance'>
                        ${partnerDistance != undefined | partnerDistance != null ? `<i class='fa-solid fa-location-dot'></i> ${partnerDistance}` : ''}
                    </span>
                    <a href='#show-bio${partnerId}' class='bio-control-fa-user'><i class='bio-control fa-regular fa-user'></i></a>
                </section>

            </section>

            <section id='show-bio${partnerId}' class='bio-book-partner'>
                <button class="btn-light-blue">${partnerLanguage != undefined | partnerLanguage != null ? partnerLanguage : ''}</button>
                <button class="btn-light-blue">${partnerRace != undefined | partnerRace != null ? partnerRace : ''}</button>
                <button class="btn-light-blue">${partnerHeight != undefined | partnerHeight != null ? partnerHeight : ''}</button>
                <p class='bio'>
                    ${partnerBio != undefined | partnerBio != null ? partnerBio : ''}
                </p>
                <a href='/book-partner?id=${partnerId}'><button type='button' class='book-partner-btn-peach'><i class='fa-solid fa-book-open'></i> Book now</button></a>
            </section>

            <section  class='mobile-only'>
            <a href='/book-partner?id=${partnerId}'><button onclick='/suggested-partners' type='button' class='white-btn x-mark-cancel'><i class='fa-solid fa-xmark'></i></button></a>
            <a href='/book-partner?id=${partnerId}'><button onclick='/save-partner?id=${partnerId}' type='button' class='white-btn bookmark-partner'><i class='fa-regular fa-bookmark'></i></button></a>
            <a href='/book-partner?id=${partnerId}'><button onclick='/book-partner?id=${partnerId}' type='button' class='white-btn save-partner'><i class='fa-solid fa-check'></i></button></a>
            </section>
        </section>
      `;
    }
  }
  customElements.define('profile-card', ProfileCard);

