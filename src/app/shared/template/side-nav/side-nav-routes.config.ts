import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
  {
    path: '/dashboard',
    title: 'ESCRITORIO',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'dashboard',
    submenu: []
  },
  {
    path: '/sells',
    title: 'VENTAS',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/',
        title: 'Panel cocina',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      }


    ]
  },
  {
    path: '/pos',
    title: 'CAJA',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'desktop',
    submenu: [
      {
        path: '/pos/panel',
        title: 'Cobrar',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '/box/open/close',
        title: 'Apertura y cierre',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '',
        title: 'Cierre caja Z',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '',
        title: 'Cierres de caja',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '',
        title: 'Ingresos',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },{
        path: '',
        title: 'Egresos',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '',
        title: 'Nota de credito',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '',
        title: 'Nota de debito',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },

    ]
  },
  {
    path: '/product/panel',
    title: 'PRODUCTOS',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'container',
    submenu: []
  },


];
