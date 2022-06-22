export const routes = [
  {
    path: '',
    loadChildren: () => import('@finastra/features/home').then((m) => m.HomeModule),
    icon: 'home',
    title: 'Home',
    tooltip: 'Home',
  },
  {
    path: 'bond',
    loadChildren: () => import('@finastra/features/bond').then((m) => m.BondModule),
    icon: 'home',
    title: 'Bond',
    tooltip: 'Bond',
  },
  {
    path: 'holder',
    loadChildren: () => import('@finastra/features/holder').then((m) => m.HolderModule),
    icon: 'home',
    title: 'Holder',
    tooltip: 'Holder',
  },
];
