const mongoose = require('mongoose')
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

const Survey = mongoose.model('surveys');

module.exports = (app)=>
{

    app.post('/api/surveys',requireLogin, requireCredits, (req,res)=>
    {       
            const {title,body,subject,recipients} = req.body;
            
            console.log("title",title)
            console.log("body",body)
            console.log("subject",subject)
            console.log("recipients",recipients)
            
            const survey = new Survey(
            {
                title,
                body,
                subject,
                recipients:recipients.split(',').map((recipient)=>
                {
                    email:recipient.trim()
                }),
                _user:req.user.id,
                dateSent:Date.now()
            })

    });
}