export const sendMessage from async( req, res, next) => 
{
    const {firstName, lastName, email, message, phone} = req.body;

    if(!firstName || !lastName || !email || !message || !phone)
    {
        return res.status(400).json
        ({
            sucess : false;
            message : "please fill the full form";
        });
    };
};

































































