class InvitesCard extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        // const partnerId = this.attributes.partnerId.value
        // const partnerName = this.attributes.partnerName.value
        // const partnerAge = this.attributes.partnerAge.value
        // const partnerDisplayImage = this.attributes.partnerDisplayImage.value
        // const partnerPronouns = this.attributes.partnerPronouns.value
        // const partnerDistance = this.attributes.partnerDistance.value
        // const partnerBio = this.attributes.partnerBio.value

      this.innerHTML = `<article class="eventCard">
                        <profile-card
                        partnerId='1'
                        partnerName='Name'
                        partnerAge='26'
                        partnerPronouns='She/Her'
                        partnerDistance='16'
                        partnerBio='Lörem ipsum remynde mynt i premåra krojen. Klustersmitta viskap i deras i emmodern. Monoskapet vavis. Rägisk uberisering om jekrorade multifigisk. Prelån pretoliga poras. '
                        partnerDisplayImage='static/images/profile-test.jpg'>
                        </profile-card>
                    <section>
                        <summary class="event_details">
                            <h2>Event Name</h2>
                            <p>Event Location</p>
                            <p>Event description</p>
                        </summary>
                        <button class="btn-peach">Accept</button>
                        <button class="btn-blue">Decline</button>
                    </section>
                </article>
                <article class="eventCard">
                    <section class="profile_container">
                        <profile-card
                        partnerId='1'
                        partnerName='Name'
                        partnerAge='26'
                        partnerPronouns='She/Her'
                        partnerDistance='16'
                        partnerBio='Lörem ipsum remynde mynt i premåra krojen. Klustersmitta viskap i deras i emmodern. Monoskapet vavis. Rägisk uberisering om jekrorade multifigisk. Prelån pretoliga poras. '
                        partnerDisplayImage='static/images/profile-test.jpg'>
                        </profile-card>
                    </section>
                    <section>
                        <summary class="event_details">
                            <h2>Event Name</h2>
                            <p>Event Location</p>
                            <p>Event description</p>
                        </summary>
                        <button class="btn-peach">Accept</button>
                        <button class="btn-blue">Decline</button>
                    </section>
                </article>
  `;
    }
  }
  customElements.define('my-invites', InvitesCard);