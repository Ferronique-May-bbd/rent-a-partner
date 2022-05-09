import BaseView from "./BaseView.js";

export default class extends BaseView {
    constructor(params) {
        super(params);
        this.setTitle('Partners List');
    }

    async getView() {
        let html = '<h1>Available Partners</h1>';
        return html;
    }
}