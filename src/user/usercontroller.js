const UserModule = require('./usermodule.js');

const CreateUser = async (req, res) => {
    try {
        console.log("controller connected", req.body);
        let response = await UserModule.SaveUserDetails(req);
        let message = "succeeded";
        res.send({
            succeeded: true,
            message: message,
            data: response
        });
    } catch (error) {
        let status_code = error.status_code !== undefined ? error.status_code : 500;
        let type = error.type !== undefined ? error.type : "bad request";
        let message = error.customMsg !== undefined ? error.customMsg : "something went wrong and I am unable to configure it";

        res.status(status_code).send({
            succeeded: false,
            error: type,
            message: message
        });
    }
};
const GetUser = async (req, res) => {
    try {
        console.log("controller connected", req.body);
        let response = await UserModule.RetrieveUser(req);
        let message = "succeeded";
        res.send({
            succeeded: true,
            message: message,
            data: response
        });
    } catch (error) {
        let status_code = error.status_code !== undefined ? error.status_code : 500;
        let type = error.type !== undefined ? error.type : "bad request";
        let message = error.customMsg !== undefined ? error.customMsg : "something went wrong and I am unable to configure it, why the singned in user is not getting";

        res.status(status_code).send({
            succeeded: false,
            error: type,
            message: message
        });
    }
};

const VerifiedUser = async (req, res) => {
    try {
        console.log("controller connected", req.body);
        let response = await UserModule.VerifyUser(req);
        //let message = "succeeded";
        if(response.status==true){
        
            res.send({
            succeeded: true,
            message: response.message,
            data: response.user
           })
        }
         else{
            res.status(400).send({
                succeeded: false,
            error:false,
            data: response.message
            })

         }
    } catch (error) {
        let status_code = error.status_code !== undefined ? error.status_code : 500;
        let type = error.type !== undefined ? error.type : "bad request";
        let message = error.customMsg !== undefined ? error.customMsg : "something went wrong and I am unable to configure it";

        res.status(status_code).send({
            succeeded: false,
            error: type,
            message: message
        });
    }
};

module.exports = { CreateUser,GetUser,VerifiedUser };
