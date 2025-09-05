import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Configurar o transporte de email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_EMAIL,
            subject: 'Novo contato do formulário',
            text: message,
            html: `<p>${message}</p><p>De: ${name} (${email})</p>`
        });

        res.json({ message: 'Mensagem enviada com sucesso!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao enviar a mensagem. Tente novamente mais tarde.' });
    }
});

export default router;