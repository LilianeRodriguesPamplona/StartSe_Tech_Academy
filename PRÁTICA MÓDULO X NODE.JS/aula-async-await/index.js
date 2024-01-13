import fetch from 'node-fetch';

function main() {
    console.log('main()');
    const user = 'lilianerodriguespamplona';
    const apiUrl = 'https://api.github.com';
    fetch(`${apiUrl}/users/${user}`).then
}

main();