import React from "react";
import AccountOverview from "./components/AccountOverview";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const accountOverviewStub = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <AccountOverview accountOverviewStub={accountOverviewStub} />
      </AppContainer>
    </>
  );
}

export default App;
