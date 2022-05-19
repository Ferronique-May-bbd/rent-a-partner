import BaseView from "./BaseView.js";

export default class extends BaseView {
    constructor(params) {
        super(params);
        this.setTitle('Packages');
    }

    async getView() {
        let html = '<h1>Avaliable Packages</h1>';
        return html;
    }
}



function Person(genderOfInterest, height, race) {
    return new Person(genderOfInterest, height, race);
}

function search(Person person) {
    if (person.height != null || person.) {

    }

}