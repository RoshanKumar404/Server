const models = require("../models");

const SaveUserDetails = async (req) => {
    try {
        console.log("req body", req.body);
        const { profileImage } = req.body;
        let setData = req.body;

        if (profileImage) {
            setData.profileImage = profileImage;
        }

        return await models.users.create(setData);
    } catch (error) {
        throw error;
    }
};

const RetrieveUser = async (req) => {
    try {
        let { limit, pagination } = req.query;

        let query = {};
        let projection = { _: 0 };
        let options = {
            lean: true,
            sort: { _id: -1 },
            skip: !Number(pagination) ? 0 : Number(pagination) * (!Number(limit) ? 10 : Number(limit)),
            limit: !Number(limit) ? 10 : Number(limit)
        };

        let retrievedUser = await models.users.find(query, projection, options);
        let count = await models.users.countDocuments(query);
        return { retrievedUser, count };
    } catch (error) {
        throw error;
    }
};

const VerifyUser = async (req) => {
    try {
        console.log("req body", req.body);
        const { OTP,UserId } = req.body;
       

        if (OTP=="923530") {
            let user= await models.users.findById(UserId)
            return{user:user,status:true,message:"success"}
        }else{
            return{user:null,status:false,message:"invalid otp"}
        }

        
    } catch (error) {
        throw error;
    }
};



module.exports = { SaveUserDetails, RetrieveUser ,VerifyUser};
