import React from 'react';
import { Navbar } from 'components';
import { Container } from '@material-ui/core';
import DonationList from 'containers/donationList';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <DonationList />
      </Container>
    </ React.Fragment>
  );
};

export default Home;