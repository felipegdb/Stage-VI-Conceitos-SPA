export function updateBackground(pathname) {
    const body = document.querySelector('body');
    body.className = ''; 
    switch (pathname) {
        case '/':
            body.classList.add('background-home');
            break;
        case '/universe':
            body.classList.add('background-universe');
            break;
        case '/exploration':
            body.classList.add('background-exploration');
            break;
        case 404:
            body.classList.add('background-error');
            break;
        default:
            body.classList.add('background-home');
    }
}
