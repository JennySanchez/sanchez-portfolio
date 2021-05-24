import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = () => (
    <>
        <img src="/favicon.svg" alt="Jenny Hsiao Sanchez Logo" style={{float: 'left', width: '40px', marginRight: "16px"}} />
        <p>
          Jenny Hsiao Sanchez<br />
          Copyright © 2021
        </p>
    </>
);
const Logo = () => null;

const links = {
  firstCol: [
    { href: '#', linkText: 'Instagram' },
    { href: '#', linkText: 'Pinterest' },
    { href: '#', linkText: 'Twitter' },
  ],
  secondCol: [
    { href: '#', linkText: 'LinkedIn' },
    { href: '#', linkText: 'Dribbble' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} Logo={Logo} />;

export default CustomFooter;
