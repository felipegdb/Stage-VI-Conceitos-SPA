import { Router } from './router.js';

const router = new Router();

function init() {
    router.add('/', "/pages/home.html");
    router.add('/exploration', "/pages/exploration.html");
    router.add('/universe', "/pages/universe.html");
    router.add(404, "/pages/404.html");
    router.handle();

    window.onpopstate = () => router.handle();
    window.route = () => router.route();

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            router.route(event);
        });
    });
}

init();
