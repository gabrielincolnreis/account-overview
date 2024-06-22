import React from "react";
import styled from "styled-components";
import { Mail } from "styled-icons/entypo";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  align-items: start;

  padding: 0;
  p {
    margin: 0.25rem 0px;
    color: #8b8b8b;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: start;
`;

const Icon = styled.div`
  background-color: #ffc107;
  color: black;
  font-weight: bold;
  border-radius: 8px;
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
  color: #8b8b8b;
`;

const Link = styled.a`
  text-decoration: none;
  color: #8b8b8b;
`;

const Support = ({ supportContact }) => (
  <Container aria-label="Contact-Information">
    <p>YOUR FEEFO CONTACT SUPPORT</p>
    <Wrapper>
      <Icon aria-label="Icon">S</Icon>
      <Details>
        <div>{supportContact.name}</div>

        <div aria-label="Phone-Number">
          {" "}
          <Link href="mailto:support@feefo.com" aria-label="Email">
            <Mail
              style={{ width: "1.25rem", height: "1.25rem", color: "#8b8b8b" }}
            />{" "}
            {supportContact.email}
          </Link>{" "}
          020 3362 4208
        </div>
      </Details>
    </Wrapper>
  </Container>
);

export default Support;
