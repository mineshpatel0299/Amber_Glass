import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const companyName = formData.get('companyName');
    const contactPerson = formData.get('contactPerson');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const gstNumber = formData.get('gstNumber');
    const visitingCard = formData.get('visitingCard') as File | null; // This will be a File object
    const companyDescription = formData.get('companyDescription');

    // Basic validation
    if (!companyName || !contactPerson || !email || !phone || !companyDescription) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services or SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'info@edigitify.com', // Use EMAIL_TO from .env, fallback to info@edigitify.com
      subject: `New Partnership Application from ${companyName}`,
      html: `
        <h2>New Partnership Application</h2>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>GST Number:</strong> ${gstNumber || 'N/A'}</p>
        <p><strong>Company Description:</strong></p>
        <p>${companyDescription}</p>
      `,
      attachments: [],
    };

    if (visitingCard) {
      const arrayBuffer = await visitingCard.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      mailOptions.attachments?.push({
        filename: visitingCard.name,
        content: buffer,
        contentType: visitingCard.type,
      });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Partnership application submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting partnership application:', error);
    return NextResponse.json({ message: 'Failed to submit partnership application.' }, { status: 500 });
  }
}
