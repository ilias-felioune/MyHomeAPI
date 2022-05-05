import { NextFunction, Request, Response } from "express";
import { getResponseType } from "@/controllers/Response"
import Authenticator from "@/services/Authenticator";
import User from "@/database/userSchema";





const authorize = async (req: Request, res: Response, next: NextFunction) => {
    const auth: Authenticator = new Authenticator()
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        const responseAuth = await auth.authorizeUser(token)
        //console.log(responseAuth)
        try {
            if (!responseAuth.valid) {
                res.status(403).json({ message: "access_denied"});
                return
            }
            const user = await User.findById(responseAuth.id)

            if (user) {
                next()
            }
            else {
                res.status(500).json({ message: "aucun user trouvé"});
                return
            }
            
        } catch (error) {
            res.status(403).json({ message: "access_denied", error: error });
        }
    }
    else {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
}

export default { authorize }