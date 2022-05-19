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