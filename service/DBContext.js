class DbContext {
    constructor() {
        const mysql = require("mysql");
        this.connection = mysql.createConnection({
            host:'rentapartner.ckv9xb4wthkt.af-south-1.rds.amazonaws.com',
            port:'3306',
            user:'rentapartner',
            password:'rentapartner',
            database:'rentapartner'
        });
    }

    getConnection() {
        this.connection.connect(error => {
            if(error) {
                console.log("Error: " + error.message);
                return;
            }
        });
        return this.connection;
    }

    closeConnection() {
        this.connection.end();
    }
}

module.exports = DbContext;