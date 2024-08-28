import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {
  ToastController,
  NavController,
  LoadingController,
} from '@ionic/angular';
import { Result } from 'src/app/interfaces/i-my-market';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: Result[] = [];
  totalAmount: number = 0;

  constructor(
    private cartService: CartService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce(
      (total, item) => total + item.price,
      0
    );
  }

  removeFromCart(item: Result) {
    this.cartService.removeFromCart(item);
    this.loadCart();
  }

  async simulatePayment() {
    const loading = await this.loadingCtrl.create({
      message: 'Procesando el pago',
      spinner: 'crescent',
      duration: 1000,
    });
    await loading.present();

    setTimeout(async () => {
      await loading.dismiss();

      const toast = await this.toastCtrl.create({
        message: 'Pago exitoso',
        duration: 2000,
        position: 'top',
      });
      toast.present();

      this.cartService.clearCart();
      this.loadCart();

      setTimeout(() => {
        this.navCtrl.navigateRoot('/home');
      }, 2000);
    }, 2000);
  }
}
