class InvitesCard extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        const userId = this.attributes.userId.value
        const userName = this.attributes.userName.value
        const userAge = this.attributes.userAge.value
        const userDisplayImage = this.attributes.userDisplayImage.value
        const userPronouns = this.attributes.userPronouns.value
        const userDistance = this.attributes.userDistance.value
        const userBio = this.attributes.userBio.value
        const eventTitle = this.attributes.eventTitle.value
        const eventsDate = this.attributes.eventsDate.value
        const eventsLocation = this.attributes.eventsLocation.value
        const eventDetails = this.attributes.eventDetails.value

      this.innerHTML = `
      <article class="eventCard">
            <profile-card class='event-container'
                partnerId='${userId}'
                partnerName='${userName}'
                partnerAge='${userAge}'
                partnerPronouns='${userPronouns}'
                partnerDistance='${userDistance}'
                partnerBio='${userBio}'
                partnerDisplayImage='${userDisplayImage}'>
            </profile-card>
            <section class='event-container'>
                <summary class="event_details">
                    <h2>${eventTitle}</h2>
                    <p>${eventsDate}</p>
                    <p>${eventsLocation}</p>
                    <p>${eventDetails}</p>
                </summary>
                <button class="btn-peach">Accept</button>
                <button class="btn-blue">Decline</button>
            </section>
        </article>
  `;
    }
  }
  customElements.define('my-invites', InvitesCard);