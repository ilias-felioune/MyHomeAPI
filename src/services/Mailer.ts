
import nodemailer from "nodemailer";
import IUser from "@/database/userSchema"
import Mustache from "mustache"
import { EventEmitter } from "stream"
import fs from "fs";
import path from "path";




export class Mailer {


  testAccount?: nodemailer.TestAccount;
  transporter?: nodemailer.Transporter;
  html?:string


  constructor(emetteur:EventEmitter){
    emetteur.addListener("postUser", (data) => { 
      const pathSmartHomeLogo = path.resolve("src/images","CAT-maison-connectée.png")
      const pathSmartHomeLogo2 = path.resolve("src/images","logo-maison-connectee-38a9f3c3.png")
      const templatePath = path.resolve("src","templateMail.html")
      const tmpFile = fs.readFileSync(templatePath,'utf8');
      const file = Mustache.render(tmpFile,{maisonConnecteImage:pathSmartHomeLogo,maisonConnecteImage2:pathSmartHomeLogo2})
      this.send("noreply@test.fr","noreply@test.fr","new user",data,file)
    });
    emetteur.addListener("newAlarm", (data) => { 
      const pathWarningIcon = path.resolve("src/images","warningIcon.png")
      const pathSmartHomeLogo = path.resolve("src/images","logo-maison-connectee-38a9f3c3.png")
      const templatePath = path.resolve("src","templateMailAlarm.html")
      const tmpFile = fs.readFileSync(templatePath,'utf8')
      const file = Mustache.render(tmpFile,{logoMaisonConnecte:pathSmartHomeLogo,warningIcon:pathWarningIcon})
      this.send("noreply@test.fr","noreply@test.fr","Warning Alarm",data,file)
    });
    
  }

  async init(){
    this.testAccount = await nodemailer.createTestAccount();

    this.transporter = nodemailer.createTransport({
      host: '127.0.0.1',
      port: 1025,
      ignoreTLS: true,
      secure: false,
      auth: {
          user: 'project.1',
          pass: 'secret.1'
      }
  });


  } 

  send(fromEmail:string, toEmail:string, subject:string, data:any,templateFile:string){
    const output = Mustache.render(templateFile,data)

    var mailOptions = {
      from: fromEmail,
      to: data.email,
      subject: subject,
      text: data.email,
      html:output
    };
    
    this.transporter?.sendMail(mailOptions, function(error: any, info: { response: string; }){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
  }


  

}






