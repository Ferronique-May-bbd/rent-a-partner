//import DbContext from "./DBContext.js";
const DbContext = require("./DBContext");

class UserService {
    static userLogin(loginDetails) {
        let db = new DbContext();
        let conn = db.getConnection();

        return new Promise((resolve, reject) => {
            conn.query(`select * from User where Email=${loginDetails.Email}`, (error, result) => {
                if(error) {
                    return reject(error);
                }
                db.closeConnection();
                return resolve(result);
            });
        });
    }
    
    static userRegistration(userDetails) {
        let db = new DbContext();
        let conn = db.getConnection();

        return new Promise((resolve, reject) => {
            conn.query("select * from Role", (error, result) => {
                if(error) {
                    return reject(error);
                }
                db.closeConnection();
                return resolve(result);
            });
        });
    }

    static getRoles() {
        let db = new DbContext();
        let conn = db.getConnection();

        return new Promise((resolve, reject) => {
            conn.query("select * from Role", (error, result) => {
                if(error) {
                    return reject(error);
                }
                db.closeConnection();
                return resolve(result);
            });
        });
    }
}

async function test() {
    let roles = await UserService.getRoles();
    console.log(roles);
}

test();