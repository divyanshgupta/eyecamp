const mongoose = require('mongoose')
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer')
const template = require('../services/emailTemplates/surveyTemplate')
module.exports = (app)=>
{

    app.post('/api/surveys',requireLogin, requireCredits, async (req,res)=>
    {       
            const {title,body,subject,recipients} = req.body;
            console.log("Request Body",req.body)
            console.log("title",title)
            console.log("body",body)
            console.log("subject",subject)
            console.log("recipients",recipients)
            
            const survey = new Survey({
                title,
                subject,
                body,
                recipients: recipients.split(',').map(email => ({ email: email.trim() })),
                _user: req.user.id,
                dateSent: Date.now()
              });

            
            console.log("survey",survey)
            const mailer = new Mailer(survey,template(survey.body))
            
            try {
                await mailer.send();
                await survey.save();
                req.user.credits -= 1;
                const user = await req.user.save();
          
                res.send(user);
              } catch (err) {
                res.status(422).send(err);
              }
    });
}