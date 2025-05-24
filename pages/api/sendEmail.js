// Send Email Backend API

import nodemailer from "nodemailer";

export default async function handler(req, res) {

    // Check if the request method is POST, if not, return an error
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body; // Destructure the request body

    // Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email Sending Logic with Error Handling
    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>`,
        });

        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email", error });
    }
}
