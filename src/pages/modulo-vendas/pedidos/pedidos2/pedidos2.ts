import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pedidos2',
  templateUrl: 'pedidos2.html',
})
export class Pedidos2Page {

  items: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.initializeItems()

  }

  initializeItems() {
    this.items = [{
      "nome": "013 - OVO GRANDE BRANCO C/30",
      "preco": "R$ 8,80",
      "qtd": "200 KG",
      "val": "R$ 880,00",
      "id_produto": "1"
    }]
  }

  e(item) {
    console.log(item)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPage');
  }

}
