import { NextFunction, Request, Response } from "express";

import xss from "xss";


export const preventionXss = async (req: Request, res: Response, next: NextFunction)=>{

  
  try{
    console.log(req.body)

    Object.entries(req.body).forEach(
      ([key, value]) => {

        if (typeof value == "string"){
          req.body[key]=xss(value);
        }
      });
    
    //console.log(html);
    console.log("text: %s", req.body.value);

    next();

  } catch(error){
    console.log(error)
    res.status(403).json({ message: "xss attack",error:error });
  }
  
}

export default {preventionXss}
