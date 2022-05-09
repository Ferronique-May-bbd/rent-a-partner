import Dashboard from "./views/Dashboard.js";
import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import PartnersView from "./views/PartnersView.js";
import PartnerView from "./views/PartnerView.js";

const regex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/login", view: LoginView },
        { path: "/register", view: RegisterView },
        { path: "/partners", view: PartnersView },
        { path: "/partners/:id", view: PartnerView },
    ];

    const matches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(regex(route.path))
        };
    });

    let matched = matches.find(m => m.result !== null);

    if(!matched) {
        matched = {
            route: routes[0]
        };
    }

    const view = new matched.route.view(getParams(matched));

    document.querySelector("#app").innerHTML = await view.getView();
};

const goto = url => {
    history.pushState(null, null, url);
    router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            goto(e.target.href);
        }
    })
    router();
});