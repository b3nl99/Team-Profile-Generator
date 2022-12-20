const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

const generateManager = managerTitle => { return managerTitle.map(manager => {
    return `
    <div class="col">
        <div class="card shadow-lg" style="width: 18rem;">
            <div class="card-body identity">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16"><path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
                </svg>Manager</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mail-to">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}).join('');

};

const generateIntern = internTitle => {return internTitle.map ( intern => {
    return `
    <div class="col">
        <div class="card shadow-lg" style="width: 18rem;">
            <div class="card-body identity">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="-32 0 512 512">
                    <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"/>
                    </svg>Intern</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mail-to">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
}).join('');

};

const generateEngineer = engineerTitle => { return engineerTitle.map(engineer => {
    return `
    <div class="col">
        <div class="card shadow-lg" style="width: 18rem;">
            <div class="card-body identity">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-glasses" viewBox="0 -32 576 576">
                <path d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zm-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92 23.86 0 47.26 4.33 69.93 12.92l-3.13 41.22zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92 29.12 0 54.43 6.44 72.55 12.93v37.54z"/>
                </svg>Engineer</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `
}).join('');

};

const generateCards = teamArray => {
    let cardsArray = [];
    const managerTitle = teamArray.filter(team => {
        return team.getRole() === 'Manager';
    });
    const engineerTitle = teamArray.filter(team => {
        return team.getRole() === 'Engineer';
    });
    const internTitle = teamArray.filter(team => {
        return team.getRole() === 'Intern';
    });
    if (managerTitle) {
        cardsArray.push(generateManager(managerTitle));
    }
    if (engineerTitle) {
        cardsArray.push(generateEngineer(engineerTitle));
    }
    if (internTitle) {
        cardsArray.push(generateIntern(internTitle));
    }
    return cardsArray.join('');
};

module.exports = cardsArray => {
    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Company Team</title>
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
    
    <header>
        <h1>My Team</h1>
    </header>

    <main class="container my-5">

        <div class="row">

            ${generateCards(cardsArray)}

        </div>
        
    </main>
</body>
</html>
    `
};