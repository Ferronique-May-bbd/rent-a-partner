export default class {

    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = 'Find A Partner - ' + title;
    }

    async getView() {
        return "";
    }
}