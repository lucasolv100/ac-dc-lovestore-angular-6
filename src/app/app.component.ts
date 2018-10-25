import { Component } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';
import { rootRenderNodes } from '@angular/core/src/view';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aula Angular';
  public cartID;
  public qty;
  //variaveis manipuladoras daas páginas
  public home;
  public pgproduto;
  public pgcart;
  public pgcatalogo;
  public sucesso;
  
  constructor() { 

    this.pgproduto = false;
    this.home = true;
    this.pgcart = false;
    this.pgcatalogo = false;
    this.sucesso = false;

  }

  
  showGreetings()
  {
    this.title = "Olá Lucas"
  }


}
