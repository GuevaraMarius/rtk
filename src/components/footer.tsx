import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ backgroundColor: '#001529', padding: '20px' }}>
      <div className="container mx-auto text-center" style={{ color: '#b0b0b0' }}>
        <p>&copy; {new Date().getFullYear()} Game of Thrones Houses. All rights reserved.</p>
      </div>
    </AntFooter>
  );
};

export default Footer;
