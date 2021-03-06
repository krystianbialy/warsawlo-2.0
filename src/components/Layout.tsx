import React, { FC } from 'react';
import styled from '../styling/styled';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  flex: 1 0 auto;
  margin-top: 8rem;
`;
const FooterWrapper = styled.div`
  flex-shrink: 0;
`;
const Layout: FC = ({ children }) => (
  <LayoutWrapper>
    <Navbar />
    <Content>{children}</Content>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </LayoutWrapper>
);

export default Layout;
