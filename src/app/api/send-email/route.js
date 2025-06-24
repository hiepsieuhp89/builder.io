import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 50) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 50 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 1000 characters' },
        { status: 400 }
      );
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        to_name: "Maverick Can",
        from_email: email,
        to_email: "cxtdev2000@gmail.com",
        message: message,
        reply_to: email,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    if (response.status === 200) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email sent successfully!' 
        },
        { status: 200 }
      );
    } else {
      throw new Error('EmailJS send failed');
    }

  } catch (error) {
    console.error('Email sending error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
} 