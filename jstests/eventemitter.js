//Requires nodeJS
//Open it using node <filename>

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogin(data){
        setTimeout(() => {
            this.emit('user logged in', data)
        }, 1000)
    }
}

const users = new Users();

//method .once -> can be used only one time
//method .on -> can be used many times

users.on('user logged in', data => {
    console.log(data)
})

users.userLogin({ user: 'Luiz Toquetto'})
users.userLogin({ user: 'Leonardo Demarte'})

