import React from 'react';
import { Navbar, Card } from 'framework7-react';

export default ({ onGoBackFromCatalog }) => (
  <div>
    <Navbar title="Catalog" backLink="Back" onBackClick={onGoBackFromCatalog} />
    <Card outline content="Placeholder for catalog contents." />
  </div>
);
