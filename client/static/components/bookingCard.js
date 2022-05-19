class BookingCard extends HTMLElement {
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
        const eventTitle = this.attributes.eventTitle.value
        const eventsDate = this.attributes.eventsDate.value
        const eventsLocation = this.attributes.eventsLocation.value
        const eventDetails = this.attributes.eventDetails.value
        const eventStatus = this.attributes.eventStatus.value

      this.innerHTML = `
      <article class='eventCard'>
            <profile-card class='event-container'
                partnerId='${partnerId}'
                partnerName='${partnerName}'
                partnerAge='${partnerAge}'
                partnerPronouns='${partnerPronouns}'
                partnerDistance='${partnerDistance}'
                partnerBio='${partnerBio}'
                partnerDisplayImage='${partnerDisplayImage}'>
            </profile-card>
            <section class='event-container'>
                <summary class='event_details'>
                    <h2>${eventTitle}</h2>
                    <p>${eventsDate}</p>
                    <p>${eventsLocation}</p>
                    <p>${eventDetails}</p>
                </summary>
                <button id='booking-status' class='${eventStatus}'>${eventStatus}</button>
            </section>
        </article>
  `;
    }
  }
  customElements.define('booking-card', BookingCard);