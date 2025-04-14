import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import { format } from 'path';
import * as process from 'process';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/vitaly-pro-hub', express.static('public'));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.post('/vitaly-pro-hub/send', async (req, res) => {

	const { name, email, message } = req.body;
	console.log(req.body)

	// Транспорт
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.VITE_EMAIL_ADRESS,
			pass: process.env.VITE_EMAIL_PASSWORD,
		}
	});

	// Письмо
	let mailOptions = {
		from: email,
		to: process.env.VITE_EMAIL_ADRESS,
		subject: `New message from ${name}`,
		text: message,
	};

	//Отправка
	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ success: true, message: 'Message sent successfully.' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: 'Ошибка при отправке сообщения.' });
	}
});

app.listen(PORT, () => {
	console.log(`✅ SERVER STARTED ON PORT: ${PORT} ✅`);
});