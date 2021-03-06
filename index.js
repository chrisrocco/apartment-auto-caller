const dotenv = require('dotenv')

dotenv.config()

const client = require('twilio')(process.env.TWILIO_ACC_ID, process.env.TWILIO_API_KEY)

const twilioPhone = process.env.TWILIO_PHONE
const victim = process.env.VICTIM_PHONE

client.calls
	.create({
	  url: 'https://handler.twilio.com/twiml/EHbc5b1363b061454382ada2f3816cc8c2',
	  to: victim,
	  from: twilioPhone
	})
	.then(call => console.log(call.sid))
	.done()

