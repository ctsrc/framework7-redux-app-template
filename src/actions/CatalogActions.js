import { navigateTo, goBack } from 'framework7-redux';

export const goToCatalog = () => navigateTo('/catalog/');
export const goBackFromCatalog = () => goBack();
