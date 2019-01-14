import React from 'react';
import { Popup, View, Page, Navbar, Card, CardContent } from 'framework7-react';

export default ({ onGoBackFromItem, url }) => (
  <Popup>
    <View>
      <Page>
        <Navbar title="Item" backLink="Back" onBackClick={onGoBackFromItem} />
        <Card outline>
          <CardContent>Placeholder for item with URL {url}.</CardContent>
        </Card>
      </Page>
    </View>
  </Popup>
);
