import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

import { ViagensPage } from '../../modulo-viagens/viagens/viagens'; 
import { VendasPage } from '../../modulo-vendas/vendas/vendas'


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
     constructor(public navCtrl: NavController,
      public navParams: NavParams
    ) {
  } 

  /* Retorna a pagina de viagens */
  linkViagens() {
    this.navCtrl.push(ViagensPage);
  }
  linkVendas() {
    this.navCtrl.push(VendasPage);
  }
}
