const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())
const utf8 = require('utf8');

// Route to get all posts
app.post("/createAccount", (req, res) => {
   
    if (req.body.userType === "employee") {
        try {

            db.query(`INSERT INTO CustService.Employee (EmpID, FirstName, MiddleName, LastName, DateOfJoining, Email, ContactNumber,Department, SupervisorID, Address) VALUES (${req.body.userDetails["Employee Id"]},"${req.body.userDetails["First Name"]}","${req.body.userDetails["Middle Name"]}","${req.body.userDetails["Last Name"]}","${req.body.userDetails["DOJ"]}","${req.body.userDetails["Email"]}","${req.body.userDetails["Contact Number"]}","${req.body.userDetails["Department"]}","${req.body.userDetails["SupervisorID"]}","${req.body.userDetails["Address"]}");`, (err, result) => {

            });

            db.query(`INSERT INTO CustService.EmployeeLogin (EmpID, EmpPassword, EmpStatus) VALUES (${req.body.userDetails["Employee Id"]}, "${req.body.userDetails["Password"]}", 'Active');`, (err, result) => {
                if (err) {
                    console.log(err)
                    res.status = 500;
                    return res.send("creation failure");
                }

                res.send("creation success");

            });
        }

        catch (e) {
            console.log("Error", e)
        }
    }
    else if (req.body.userType === "customer") {
        try {

            db.query(`INSERT INTO CustService.Customer (CustID, FirstName, MiddleName, LastName, DateOfBirth, Email, ContactNumber, Address) VALUES (${req.body.userDetails["Customer Id"]},"${req.body.userDetails["First Name"]}","${req.body.userDetails["Middle Name"]}","${req.body.userDetails["Last Name"]}","${req.body.userDetails["DOB"]}","${req.body.userDetails["Email"]}","${req.body.userDetails["Contact Number"]}","${req.body.userDetails["Address"]}");`, (err, result) => {
               
            });

            db.query(`INSERT INTO CustService.CustomerLogin (CustID, CustPassword, CustStatus) VALUES (${req.body.userDetails["Customer Id"]}, "${req.body.userDetails["Password"]}", 'Active');`, (err, result) => {
                if (err) {
                    console.log(err)
                    res.status = 500;
                   return res.send("creation failure");
                    
                }
            
                 res.send("creation success");
                

            });
           
           
        }

        catch (e) {
            console.log("Error", e)
        }
    }


});

app.post("/findAccount", (req, res) => {
   
    if (req.body["userType"] === "employee") {
        try {

            db.query(`Select * from CustService.EmployeeLogin where EmpID=${req.body["userId"]} and EmpPassword="${req.body["password"]}" and  EmpStatus='Active'`, (err, result) => {
                if (err) {
                    res.status(500);
                    res.send(err);
                    return res;
                }
                if (result && JSON.parse(JSON.stringify(result))[0] && JSON.parse(JSON.stringify(result))[0].EmpID) {
                    return res.send("user found");
                }
                res.status(500);
                res.send("no user found");
                return res;

            });
        }
        catch (e) {
            res.status(500);
            res.send("no user found");
        }
    }


    else if (req.body["userType"] === "customer") {
        try {
            db.query(`Select * from CustService.CustomerLogin where CustID=${req.body["userId"]} and CustPassword="${req.body["password"]}" and  CustStatus='Active'`, (err, result) => {
                if (err) {
                   
                    res.status(500);
                    res.send(err);
                    return res;
                }
                console.log(req.body["userId"],req.body["password"],"RESULTTT", JSON.parse(JSON.stringify(result)))
                if (result && JSON.parse(JSON.stringify(result))[0] && JSON.parse(JSON.stringify(result))[0].CustID) {
                    return res.send("user found");
                }
               
                res.status(500);
                res.send("no user found");
                return res;

            });
        }
        catch (e) {
          
            res.status(500);
            res.send(e);
        }

    }
});

app.post("/faq", (req, res) => {
   
            db.query(`SELECT * FROM custservice.faq`, (err, result) => {
                if (err) {
                    res.status(500);
                    res.send(err);
                    return res;
                }
                return res.send(result);
            });
    }
);

app.get("/employeetickets/:id", (req, res) => {

    db.query(`SELECT * FROM custservice.tickets where EMPID=${req.params["id"]}`, (err, result) => {
        if (err) {
            res.status(500);
            res.send(err);
            return res;
        }
        return res.send(result);
    });
}
);

app.get("/customertickets/:id", (req, res) => {
   
     db.query(`SELECT * FROM custservice.tickets where CUSTID=${req.params["id"]}`, (err, result) => {
         if (err) {
             res.status(500);
             res.send(err);
             return res;
         }
         return res.send(result);
     });
 }
 );

app.get("/employeeFeedback/:id", (req, res) => {

    db.query(`select feed.CustID, feed.TicketNumber, feed.Feedback, CONCAT(cust.FirstName , " ", cust.LastName  )as customerName,
cust.Email,ticket.IssueType, ticket.IssueDescription from feedback feed
inner join customer cust on feed.CustID = cust.CustID
inner join tickets ticket on ticket.TicketNumber = feed.TicketNumber where ticket.EmpID = ${req.params["id"]} ;`, (err, result) => {
        if (err) {
            res.status(500);
            res.send(err);
            return res;
        }
        return res.send(result);
    });
}
);

app.post("/submitFeedback", (req, res) => {


    try {

        db.query(`INSERT INTO CustService.feedback (CustID, TicketNumber, Feedback) VALUES (${req.body["custID"]},"${req.body["ticketNumber"]}","${req.body["feedback"]}")`, (err, result) => {
            if (err) {
                console.log(err)
                res.status = 500;
                return res.send("Unable to submit the feedback");
            }

            res.send("feedback submitted successfully");

        });
    }

    catch (e) {
        console.log("Error", e)
    }

});

// Route to get one post

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
