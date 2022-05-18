class ProfileCard extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        const partnerId = this.attributes.partnerId.value
        const partnerName = this.attributes.partnerName.value
        const partnerAge = this.attributes.partnerAge.value
        const partnerDisplayImage = this.attributes.partnerDisplayImage.value
        const partnerPronouns = this.attributes.partnerPronouns.value
        const partnerDistance = this.attributes.partnerDistance.value
        const partnerBio = this.attributes.partnerBio.value

      this.innerHTML = `      
        <section id='partner-${partnerId}' class='partner-ad'>

            <section id='partner-${partnerId}' class='card preview' style='background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 68.57%, #000000 100%), url(${partnerDisplayImage != undefined | partnerDisplayImage != null ? partnerDisplayImage : null});'>

                <h3 class='name'>
                    ${partnerName != undefined | partnerName != null ? partnerName : null}
                    <span class='age'>
                        ${partnerAge != undefined | partnerAge != null ? partnerAge : null}
                    </span>
                </h3>
                
                <span class='pronouns'>
                    ${partnerPronouns != undefined | partnerPronouns != null ? partnerPronouns : null}
                </span>

                <section class='partner-info'>
                    <span class='distance'>
                        ${partnerDistance != undefined | partnerDistance != null ? `<i class='fa-solid fa-location-dot'></i> ${partnerDistance}km away` : null}
                    </span>
                    <a href='#show-bio${partnerId}'><i class='fa-regular fa-user'></i></a>
                </section>

            </section>

            <section id='show-bio${partnerId}' class='bio-book-partner'>
                <p class='bio'>
                    ${partnerBio != undefined | partnerBio != null ? partnerBio : null}
                </p>
                <button onclick='/book-partner?${partnerId}' type='button' class='book-partner-btn-peach'><i class='fa-solid fa-book-open'></i> Book now</button>
            </section>

            <section  class='mobile-only'>
                <button onclick='/suggested-partners' type='button' class='white-btn x-mark-cancel'><i class='fa-solid fa-xmark'></i></button>
                <button onclick='/save-partner?${partnerId}' type='button' class='white-btn bookmark-partner'><i class='fa-regular fa-bookmark'></i></button>
                <button onclick='/book-partner?${partnerId}' type='button' class='white-btn save-partner'><i class='fa-solid fa-check'></i></button>
            </section>
        </section>
      `;
    }
  }
  customElements.define('profile-card', ProfileCard);