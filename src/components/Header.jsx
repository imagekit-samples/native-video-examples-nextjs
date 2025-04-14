import React from 'react';
import Link from 'next/link';
import { Image } from '@imagekit/next';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link href="/">
          <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IK_URL_ENDPOINT}
            src="/logo/light_T4buIzohVH.svg"
            alt="Logo"
            width={120}
            height={50}
            style={logoStyle}
          />
        </Link>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>Latest</li>
            <li style={navItemStyle}>Popular</li>
            <li style={navItemStyle}>Science</li>
            <li style={navItemStyle}>Technology</li>
            <li style={navItemStyle}>Sports</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#f0f0f0',
  zIndex: 1,
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px 0',
};

const logoStyle = {
  width: '120px',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: 0,
  padding: 0,
  fontSize: '14px'
};

const navItemStyle = {
  cursor: 'pointer',
};

export default Header;
