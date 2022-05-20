const res = require("express/lib/response");
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

    static getUser(id) {
        let db = new DbContext();
        let conn = db.getConnection();
        return new Promise((resolve, reject) => {
            conn.query("select u.Id, u.Phone, u.Email , u.Location, u.ProfilePicUrl, p.Height , p.Race , p.`Language` , p.Bio  from `User` u join `Profile` p on u.ID = p.UserId where u.Id =" + id + ";", (error, result) => {
                if(error) {
                    return reject(error);
                }
                db.closeConnection();
                return resolve(result);
            });
        });}
    static getPartnerById(id) {
        let db = new DbContext();
        let conn = db.getConnection();
        return new Promise((resolve, reject) => {
            conn.query(`select * from User u inner join Profile p on u.Id=p.UserId and u.Id=${id}`, (error, result) => {
                if(error) {
                    return reject(error);
                }
                return resolve(result);
            });
        })
    }
}

module.exports = UserService;