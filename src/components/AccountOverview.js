import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Sales from "./Sales";
import Support from "./Support";

const Container = styled.div`
  padding: 20px;
  font-family: "Roboto", sans-serif;
  height: 50%;
  width: 50%;
  margin: auto;
`;

const HeaderContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

const Header = styled.h2`
  margin: 0 0 20px 0;
  font-weight: 400;
`;

const AccountOverview = ({
  uploads,
  linesAdded,
  uploadSuccess,
  linesSaved,
}) => (
  <Container>
    <HeaderContainer>
      <Header>Account Overview</Header>
      <Support />
    </HeaderContainer>
    <Sales
      uploads={uploads}
      linesAdded={linesAdded}
      uploadSuccess={uploadSuccess}
      linesSaved={linesSaved}
    />
  </Container>
);

AccountOverview.propTypes = {
  uploads: PropTypes.number.isRequired,
  linesAdded: PropTypes.number.isRequired,
  uploadSuccess: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
};

export default AccountOverview;
