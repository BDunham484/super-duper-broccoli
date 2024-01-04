const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages'
        }, 
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'method'
        }
    ])
    .then((response) => {
        console.log('response: ', response);
        fs.writeFile('index.txt', JSON.stringify(response, null, '\n'), (err) => {
            if (err) throw err;
            console.log('The file has been saved.')
        })
    })
