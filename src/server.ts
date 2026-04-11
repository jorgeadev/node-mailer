import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import nodemailer from "nodemailer";
import multiparty from "multiparty";
import rateLimit from "express-rate-limit";

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
// instantiate an express app
const app = express();

const indexRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // limit each IP to 100 requests per window
	standardHeaders: true,
	legacyHeaders: false,
});

// cors
app.use(cors({ origin: "*" }));
app.use(express.static("public"));

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS,
	},
});

// verify connection configuration
transporter.verify((err) => {
	if (err) {
		console.log("Transporter error:", err);
	} else {
		console.log("Server is ready to take our messages");
	}
});

interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

app.post("/send", (req: Request, res: Response) => {
	const form = new multiparty.Form();
	const data: Partial<ContactFormData> = {};

	form.parse(req, (err, fields) => {
		if (err) {
			console.log("Parse error:", err);
			return res.status(500).send("Form parsing error.");
		}

		Object.keys(fields).forEach((property) => {
			const value = fields[property];
			if (Array.isArray(value) && value.length > 0) {
				data[property as keyof ContactFormData] = value[0].toString();
			}
		});

		const { name, email, subject, message } = data;

		if (!name || !email || !message) {
			return res.status(400).send("Missing required fields.");
		}

		const mailOptions = {
			from: `${name} <${email}>`,
			to: process.env.EMAIL || email, // Fallback to sender if receiver not set
			subject: subject || "No Subject",
			text: `${name} <${email}> \n${message}`,
		};

		transporter.sendMail(mailOptions, (err) => {
			if (err) {
				console.log("Mail error:", err);
				res.status(500).send("Something went wrong.");
			} else {
				res.status(200).send("Email successfully sent to recipient!");
			}
		});
	});
});

// index page (static HTML)
app.get("/", indexRateLimiter, (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}. Visit http://localhost:${PORT}`);
});
