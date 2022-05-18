import BaseView from "./BaseView.js";
import UserService from "../../../../service/UserService.js";

export default class extends BaseView {
    constructor(params) {
        super(params);
        this.setTitle('Login');
    }

    async getView() {
        let html = '<h1>User Login</h1>';
        let r = await UserService.getRoles();
        console.log("Service: " + r);
        return html;
    }
}