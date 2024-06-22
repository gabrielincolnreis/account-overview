import React from 'react';
import AccountOverview from './components/AccountOverview';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <AccountOverview 
          uploads={0} 
          linesAdded={0} 
          uploadSuccess={0} 
          linesSaved={0} 
        />
      </AppContainer>
    </>
  );
}

export default App;
