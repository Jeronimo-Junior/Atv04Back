const pool = require('./config')

let operations = {
    findUserByID: function (id) {
        return pool.promise().query('select * from loginuser where user_id=?', [id])
    },

    findUserByEmail: function (email) {
        console.log(email.email)
        return pool.promise().query('select * from loginuser where user_email=?', [email.email])
    },
    
    saveUser: function (user) {
        console.log(user)
        return pool.promise().execute('INSERT INTO loginuser (user_email, user_password, user_name) VALUES (?, ?, ?)', [user.user_email, user.user_password, user.user_name])
    },

    updateUser: function (user) {
        return pool.promise().execute('UPDATE loginuser set user_email=?, user_password=?, user_name=? where user_id=?',
            [user.user_email, user.user_password, user.user_name, user.user_id])
    },

    removeUser: function (id) {
        return pool.promise().execute('delete from loginuser where user_id= ?', [id])
    },
    listCelular: function () {
        return pool.promise().query('select * from celulares')
    },

    saveCelular: function (celular) {
        return pool.promise().execute('INSERT INTO celulares (celular_nome, armazenamento,valor) VALUES (?, ?, ?)', [celular.celular_nome, celular.armazenamento,celular.valor])
    },

    updateCelular: function (celular) {
        return pool.promise().execute('UPDATE celulares set celular_nome=?, armazenamento=?, valor=? where idcelulares=?',
            [celular.celular_nome, celular.armazenamento,celular.valor, celular.idcelulares])
    },

    removeCelular: function (id) {
        return pool.promise().execute('delete from celulares where idcelulares= ?', [id])
    },

    findPhoneById: function (id) {
        return pool.promise().query('select * from celulares where idcelulares=?', [id])
    },

}

module.exports = operations