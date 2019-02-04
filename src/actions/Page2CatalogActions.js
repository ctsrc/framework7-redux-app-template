import { navigateTo, goBack } from 'framework7-redux';

export const goToCatalog = () => navigateTo('/tabs/page2-catalog/', true);
export const goBackFromCatalog = () => navigateTo('/tabs/page2/', true);
