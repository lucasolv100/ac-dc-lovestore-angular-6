import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNull } from 'util';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public nome = "Lucas";
  public logoURL = "/assets/img/header/logo.png";
  public cartURL = "/assets/img/header/cart.png";
  @Input('parentData') public cart;

    //variaveis manipuladoras daas páginas
    @Output() public home = new EventEmitter();
    @Output() public pgproduto = new EventEmitter();
    @Output() public pgcart = new EventEmitter();
    @Output() public pgcatalogo = new EventEmitter();
    @Output() public sucesso = new EventEmitter();
  
  constructor() { 
    
    this.nome = "Lucas Oliveira";
    
  }

  ngOnInit() {
  }

  showPortfolio()
  {
    this.home.emit(false);
    this.pgproduto.emit(false);
    this.pgcart.emit(false);
    this.sucesso.emit(false);
    this.pgcatalogo.emit(true);
  }

}
