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
        values(${userDetails.RoleId},'${userDetails.Name}','${userDetails.Surname}','${userDetails.Phone}',
        '${userDetails.Email}','${userDetails.Location}','${userDetails.ProfilePicUrl}')
        `;
        return new Promise((resolve, reject) => {
            conn.query(query, (error, result) => {
                if(error) {
                    return reject(error);
                }
                return resolve(new Promise((res, rej) => {
                    var id = result.insertId;
                    let qry = `insert into Profile(UserId,Gender,DateOfBirth,GenderOfInterest,Race,Height,Langauge,Bio)
                    values(${id},'${userDetails.Gender}',STR_TO_DATE('${userDetails.DateOfBirth}'),
                    '${userDetails.GenderOfInterest}','${userDetails.Race}',${userDetails.Height},
                    '${userDetails.Language}','${userDetails.Bio}')`;
                    conn.query(qry, (err, rst) => {
                        if(error) {
                            return rej(err);
                        }
                        return res(rst);
                    });
                }));
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