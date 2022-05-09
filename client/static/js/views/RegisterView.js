import BaseView from "./BaseView.js";

export default class extends BaseView {
    constructor(params) {
        super(params);
        this.setTitle('Registration');
    }

    async getView() {
        let html = '<h1>User Registration</h1>';
        return html;
    }
}