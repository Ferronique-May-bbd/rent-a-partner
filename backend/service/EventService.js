const DbContext = require("./DBContext");

class EventService {
    static Book(data) {
        let db = new DbContext();
        let conn = db.getConnection();

        return new Promise((resolve, reject) => {
            conn.query(`insert into Event(StatusId,UserId,Title,Date,Location,Description)
            values(1,${data.UserId},"${data.Title}",STR_TO_DATE("${data.Date}", "%Y-%M-%d"),"${data.Location}","${data.Description}")`, (error, result) => {
                if(error) {
                    return reject(error);
                }
                return resolve(new Promise((res, rej) => {
                    var eventId = result.insertId;
                    conn.query(`insert into Booking(EventId,StatusId,UserId)
                    values(${eventId},1,${data.PartnerId})`, (err, rst) => {
                        if(err) {
                            return rej(err);
                        }
                        return res(rst);
                    })
                }))
            });
        });
    }

    static getPendingEvents(id) {
        let db = new DbContext();
        let conn = db.getConnection();

        return new Promise((resolve, reject) => {
            conn.query(`select u.RoleId, u.Name, u.Surname, u.Location, u.ProfilePicUrl, p.*, s.Name, e.Title, e.Date, e.Location, e.Description from Booking b join Event e on b.EventId=e.Id join Profile p on e.UserId = p.UserId join User u on e.UserId=u.Id join Status s on e.StatusId = s.Id where s.Name = 'Pending' and b.UserId=${id};`, (error, result) => {
                if(error) {
                    return reject(error);
                }
                return resolve(result);
            });
        })
    }
}

module.exports = EventService;