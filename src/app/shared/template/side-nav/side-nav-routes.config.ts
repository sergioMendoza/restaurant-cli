import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'dashboard',
    submenu: []
  },
  {
    path: '/products',
    title: 'Productos',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '',
        title: 'Level 1',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      }
    ]
  },
  {
    path: '/pos',
    title: 'Caja',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/pos/panel',
        title: 'Cobrar',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      }
    ]
  },


];
