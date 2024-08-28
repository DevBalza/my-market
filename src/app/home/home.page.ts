import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment';
import {
  IECommerceResponse,
  Result,
  Category,
} from '../interfaces/i-my-market';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public popoverOptions = {
    cssClass: 'custom-popover',
  };

  public products: Result[] = [];
  public filteredProducts: Result[] = [];
  public categories: string[] = Object.values(Category);

  constructor(
    private readonly httpSrv: HttpService,
    private readonly navCtr: NavController
  ) {}

  async ngOnInit() {
    const url = environment.URL_BASE + 'products';
    this.products = await this.httpSrv.get<Result[]>(url);
    this.filteredProducts = this.products;
  }

  public filterCategory(event: any) {
    const selectedCategory = event.detail.value;

    if (selectedCategory) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === selectedCategory
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  public doNavigate(id: number) {
    this.navCtr.navigateForward('details/' + id);
  }

  trackByFn(index: number, item: Result) {
    return item.id;
  }
}
