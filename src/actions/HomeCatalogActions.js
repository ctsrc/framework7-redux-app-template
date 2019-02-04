import { navigateTo, goBack } from 'framework7-redux';

export const goToCatalog = () => navigateTo('/tabs/home-catalog/', true);
export const goBackFromCatalog = () => navigateTo('/tabs/', true);
