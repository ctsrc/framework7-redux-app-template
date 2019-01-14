import React from 'react';
import { Page, Navbar, Card } from 'framework7-react';

export default ({ onGoBackFromCatalog }) => (
  <Page>
    <Navbar title="Catalog" backLink="Back" onBackClick={onGoBackFromCatalog} />
    <Card outline content="Placeholder for catalog contents." />
  </Page>
);
