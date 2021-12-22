import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

import LogoImage from './../../../static/images/logo.svg';



const Content = () => (
    <>
        <img src={LogoImage} alt="Jenny Hsiao Sanchez logo" style={{float: 'left', width: '40px', marginRight: "16px"}} />
        <p>
          Jenny Hsiao Sanchez<br />
          Copyright ©{new Date().getFullYear()}
        </p>
    </>
);
const Logo = () => null;

const links = {
  firstCol: [
    { href: 'https://www.instagram.com/theoddestdetail/', linkText: 'Instagram' },
    { href: 'https://www.pinterest.com/jenny_hsiao/_saved/', linkText: 'Pinterest' },
    { href: 'https://twitter.com/TheOddestDetail', linkText: 'Twitter' },
  ],
  secondCol: [
    { href: 'https://www.linkedin.com/in/jennyhsiaosanchez', linkText: 'LinkedIn' },
    { href: 'https://medium.com/@jennyhsiao', linkText: 'Medium' },
    { href: 'https://dribbble.com/JennyHsiaoSanchez', linkText: 'Dribbble' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} Logo={Logo} />;

export default CustomFooter;
