


import nodemailer from "nodemailer";
import IUser from "@/database/userSchema"

import { EventEmitter } from "stream"



export class Mailer {

  emetteur: EventEmitter;
  testAccount?: nodemailer.TestAccount;
  transporter?: nodemailer.Transporter;

  constructor(emetteur:EventEmitter){

    this.emetteur= emetteur;
    emetteur.addListener("postUser", (data) => { this.send("noreply@test.fr","ilias.felioune@ynov.com","new user",data.email)});
    
  }

  async init(){
    this.testAccount = await nodemailer.createTestAccount();

    this.transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.testAccount.user, // generated ethereal user
        pass: this.testAccount.pass, // generated ethereal password
      },
    });


  } 
    send(fromEmail:string, toEmail:string, subject:string, text:string){
        
          
          var mailOptions = {
            from: fromEmail,
            to: toEmail,
            subject: subject,
            text: text
          };
          
          this.transporter?.sendMail(mailOptions, function(error: any, info: { response: string; }){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          }); 
    }

}






