import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p>
        ©{currentYear} Crafted with 💙 by{' '}
        <Link href="https://www.mycodedojo.com">MyCodeDojo</Link> <br />
        All Rights Reserved
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
