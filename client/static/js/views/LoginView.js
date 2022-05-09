import BaseView from "./BaseView.js";

export default class extends BaseView {
    constructor(params) {
        super(params);
        this.setTitle('Login');
    }

    async getView() {
        let html = '<h1>User Login</h1>';
        return html;
    }
}