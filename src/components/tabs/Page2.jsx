import React from 'react';
import { Navbar, NavTitle, Card, CardContent, Link } from 'framework7-react';

export default ({onGoToCatalog, onGoToItem23}) => (
  <div>
    <Navbar>
      <NavTitle>Tab 2 title</NavTitle>
    </Navbar>
    <Card outline>
      <CardContent>Placeholder for page 2. <Link onClick={onGoToCatalog}>Catalog</Link>. <Link onClick={onGoToItem23}>Item 23</Link>.</CardContent>
    </Card>
  </div>
);
