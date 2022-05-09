import BaseView from "./BaseView.js";

export default class extends BaseView {
    constructor(params) {
        super(params);
        this.setTitle('Partner');
    }

    async getView() {
        let html = '<h1>Partner Profile</h1>';
        return html;
    }
}