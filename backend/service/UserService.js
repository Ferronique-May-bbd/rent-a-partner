const DbContext = require("./DBContext");

class UserService {
    static userLogin(loginDetails) {
        let db = new DbContext();
        let conn = db.getConnection();
        
        return new Promise((resolve, reject) => {
            let query = `select * from User where Email='${loginDetails.email}'`;
            conn.query(query, (error, result) => {
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
        let query = `
        insert into User(RoleId,Name,Surname,Phone,Email,Location,ProfilePicUrl)
        values(${userDetails.RoleId},'${Name}','${Surname}','${Phone}',
        '${Email}','${Location}','${ProfilePicUrl}')
        `;
        return new Promise((resolve, reject) => {
            conn.query(query, (error, result) => {
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

module.exports = UserService;