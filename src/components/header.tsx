import React from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader style={{ backgroundColor: '#001529' }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-lg font-bold cursor-pointer">Houses</span>
        </Link>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }} selectable={false}>
          <Menu.Item key="home">
            <Link href="/">
              <span className="text-gray-300 hover:text-white">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="/">
              <span className="text-gray-300 hover:text-white">About</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </AntHeader>
  );
};

export default Header;
