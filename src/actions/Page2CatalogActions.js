import { navigateTo, goBack } from 'framework7-redux';

export const goToCatalog = () => navigateTo('/tabs/page2-catalog/');
export const goBackFromCatalog = () => goBack();
