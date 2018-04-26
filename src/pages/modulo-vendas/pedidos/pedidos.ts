import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { Pedidos2Page } from './pedidos2/pedidos2';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController) {

  }

  openNavDetailsPage(item) {
    this.navCtrl.push(Pedidos2Page, { item: item })

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Vizualizar',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(Pedidos2Page);

          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
