import { Component, OnInit } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { CustomerFormComponent } from 'src/app/customers/components/customer-form/customer-form.component';


@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html'
})
export class PanelContainerComponent implements OnInit {
  value: string;
  selectedValue = null;
  tabs = [
    {
      name: 'Categorias',
      icon: 'unordered-list',
      items: [
        {
          color: '',
          image: 'assets/images/others/dish.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish2.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish3.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish7.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish2.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish3.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish7.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish2.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish3.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        },
        {
          color: '',
          image: 'assets/images/others/dish7.png',
          name: 'Tallarin palo alto',
          price: 65,
          currency: 'S/'
        }
      ]
    },
    {
      name: 'Favoritos',
      icon: 'heart',
      items: []
    },
    {
      name: 'Busqueda',
      icon: 'search',
      items: []
    }
  ];

  constructor(private drawerService: NzDrawerService) {}

  ngOnInit(): void {}

  openClientComponent(): void {
    const drawerRef = this.drawerService.create<CustomerFormComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzContent: CustomerFormComponent,
      nzWidth: 425,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
    });
  }

  openPaymentComponent(): void {
    const drawerRef = this.drawerService.create<CustomerFormComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzContent: CustomerFormComponent,
      nzWidth: 425,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
    });
  }

  getAcronym(str: string) {
    const matches = str.match(/\b(\w)/g);
    return matches.join('').toUpperCase();
  }
}
