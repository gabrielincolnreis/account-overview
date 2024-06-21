import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const InfoIcon = styled(FontAwesomeIcon)`
  color: #888;
`;

const Details = styled.p`
  margin: 10px 0;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.h4`
  margin: 0;
  color: green;
`;

const Sales = ({ uploads, linesAdded, uploadSuccess, linesSaved }) => (
  <Container>
    <Header>
      <h3>Sales</h3>
      <InfoIcon icon={faInfoCircle} aria-label="Information" />
    </Header>
    <Details aria-live="polite">You had {uploads} uploads and {linesAdded} lines added.</Details>
    <Stats>
      <Stat>
        <StatValue>{uploadSuccess}%</StatValue>
        <p>UPLOAD SUCCESS</p>
      </Stat>
      <Stat>
        <StatValue>{linesSaved}%</StatValue>
        <p>LINES SAVED</p>
      </Stat>
    </Stats>
  </Container>
);

Sales.propTypes = {
  uploads: PropTypes.number.isRequired,
  linesAdded: PropTypes.number.isRequired,
  uploadSuccess: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
};

export default Sales;
