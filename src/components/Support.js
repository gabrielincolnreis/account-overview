import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  background-color: #FFC107;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Support = () => (
  <Container aria-label="Contact-Information">
    <Icon aria-label="Icon">S</Icon>
    <Details>
      <div>Support</div>
      <Link href="mailto:support@feefo.com" aria-label="Email">support@feefo.com</Link>
      <div aria-label="Phone-Number">020 3362 4208</div>
    </Details>
  </Container>
);

export default Support;
