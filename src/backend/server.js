import express from 'express';
import nodemailer from 'nodemailer';
import * as process from 'process';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use('/vitaly-pro-hub', express.static('public'));
app.use(express.json());

app.use(cors({
	origin: ['http://localhost:5173', 'https://vitaly-pro-hub-client.onrender.com/'],
	methods: ['GET', 'POST'],
	allowedHeaders: ['Content-Type'],
}));

app.post('/vitaly-pro-hub/send', async (req, res) => {
	const { name, email, message } = req.body;
	if (!name || !email || !message) {
		return res.status(400).json({ success: false, message: `Все поля обязательны.` });
	};

	console.log(req.body);

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_ADDRESS,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	let mailOptions = {
		from: email,
		to: process.env.EMAIL_ADDRESS,
		subject: `New message from ${name}`,
		text: message,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ success: true, message: 'Message sent successfully.' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: 'Ошибка при отправке сообщения.' });
	}
});

//🌐
app.listen(PORT, () => {
	console.log(`✅ SERVER STARTED ON PORT: ${PORT} ✅`);
});