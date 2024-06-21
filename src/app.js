import React from 'react';
import AccountOverview from './components/AccountOverview';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <AccountOverview 
          uploads={0} 
          linesAdded={0} 
          uploadSuccess={0} 
          linesSaved={0} 
        />
      </div>
    </>
  );
}

export default App;
