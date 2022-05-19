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

    static getSuggestedPartners() {
        let db = new DbContext();
        let conn = db.getConnection();
        return new Promise((resolve, reject) => {
            conn.query("select u.RoleId, u.Name, u.Surname, u.Location, u.ProfilePicUrl, p.* from `User` u join `Profile` p on u.ID = p.UserId where u.roleId = 1;", (error, result) => {
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