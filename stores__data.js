import admitadStores from './pages/api/front/admi/admitadStores';
import directStores from './pages/api/front/directPartners/directStores';

export const stores = [  
  ...directStores,
  ...admitadStores
];
