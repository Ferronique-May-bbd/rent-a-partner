import BaseView from "./BaseView.js";

export default class extends BaseView {
    constructor(params) {
        super(params);
        this.setTitle('Dashboard');
    }

    async getView() {
        let html = '<h1>Dashboard</h1>';
        return html;
    }
}