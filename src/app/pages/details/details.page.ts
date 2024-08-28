import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Result } from 'src/app/interfaces/i-my-market';
import { HttpService } from 'src/app/services/http.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  products: Result | undefined;

  constructor(
    private readonly httpSrv: HttpService,
    private readonly params: ActivatedRoute,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    this.params.params.subscribe(async (params) => {
      const url = environment.URL_BASE + 'products/' + params['id'];
      this.products = await this.httpSrv.get<Result>(url);
    });
  }

  cerrarPagina() {
    this.navCtrl.navigateRoot('/home');
  }

  async agregarAlCarrito() {
    if (this.products) {
      this.cartService.addToCart(this.products);
      const toast = await this.toastCtrl.create({
        message: 'Agregado exitosamente',
        duration: 1000,
        position: 'top',
      });
      await toast.present();
    }
  }
}
