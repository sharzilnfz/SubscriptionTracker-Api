import nodemailer from 'nodemailer';

import { EMAIL_PASSWORD } from './env.js';

export const accountEmail = 'javascriptmastery00@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sharzilrs@gmail.com',
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
