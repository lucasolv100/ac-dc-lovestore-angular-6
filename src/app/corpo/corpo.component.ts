import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  public images = [
    "/assets/img/body/albuns/back-ice.jpg",
    "/assets/img/body/albuns/black-in-black.jpg",
    "/assets/img/body/albuns/highway-to-hell.jpg",
  ];

  /*variaveis manipuladoras daas páginas
  public home = true;
  public pgproduto = false;
  public pgcart = false;
  public pgcatalogo = false;
  fim manipulação de páginas*/

  @Input('parentHome') public home;
  @Input('parentProduto') public pgproduto;
  @Input('parentCart') public pgcart;
  @Input('parentCatalogo') public pgcatalogo;
  @Input('parentSucesso') public sucesso;

  public produtoFiltrado;
  public precoProduto;
  public valor = 1;
  public cartItem =[];
  public items;
  public totalCart = 0;
  
  //Evento para envio do carrinho as demais páginas
  @Output() public cart = new EventEmitter();
  @Output() public qty = new EventEmitter();
  


  public imgObjeto = [
    {
      id: 1,
      imagem : "/assets/img/body/albuns/back-ice.jpg",
      preco: 30, nome: "disco de musicas - album black ice",
      descricao: "Disco completo do album Black Ice, músicas: Rock 'n' Roll Train, Skies on Fire, Big Jack, War Machine, Smash 'n' Grab, Spoilin' for a Fight, Wheels  Decibel, Stormy May Day, She Likes Rock 'n' Roll, Money Made, Rock 'n' Roll Dream, Rocking All the Way, Black Ice"
    },
    {
      id: 2,
      imagem : "/assets/img/body/albuns/black-in-black.jpg",
      preco: 40, nome: "disco de musicas - black in black",
      descricao: "Disco completo do album Black in Black, músicas: Rock 'n' Roll Train, Skies on Fire, Big Jack, War Machine, Smash 'n' Grab, Spoilin' for a Fight, Wheels  Decibel, Stormy May Day, She Likes Rock 'n' Roll, Money Made, Rock 'n' Roll Dream, Rocking All the Way, Black Ice"
    },
    {
      id: 3,
      imagem : "/assets/img/body/albuns/highway-to-hell.jpg",
      preco: 25,
      nome: "disco de musicas - highway to hell",
      descricao: "Disco completo do album Highway to Hell, músicas: Rock 'n' Roll Train, Skies on Fire, Big Jack, War Machine, Smash 'n' Grab, Spoilin' for a Fight, Wheels  Decibel, Stormy May Day, She Likes Rock 'n' Roll, Money Made, Rock 'n' Roll Dream, Rocking All the Way, Black Ice"
    },
    {
      id: 4,
      imagem : "/assets/img/body/albuns/flat-at-wolfgang.jpg",
      preco: 80,
      nome: "disco de musicas - flat at wolfgang",
      descricao: "Disco completo do album Highway to Hell, músicas: Rock 'n' Roll Train, Skies on Fire, Big Jack, War Machine, Smash 'n' Grab, Spoilin' for a Fight, Wheels  Decibel, Stormy May Day, She Likes Rock 'n' Roll, Money Made, Rock 'n' Roll Dream, Rocking All the Way, Black Ice"
    },
    {
      id: 5,
      imagem : "/assets/img/body/albuns/powerage.jpg",
      preco: 50,
      nome: "disco de musicas - powerage",
      descricao: "Disco completo do album Highway to Hell, músicas: Rock 'n' Roll Train, Skies on Fire, Big Jack, War Machine, Smash 'n' Grab, Spoilin' for a Fight, Wheels  Decibel, Stormy May Day, She Likes Rock 'n' Roll, Money Made, Rock 'n' Roll Dream, Rocking All the Way, Black Ice"
    },
    {
      id: 6,
      imagem : "/assets/img/body/albuns/tnt.jpg",
      preco: 75,
      nome: "disco de musicas - t.n.t",
      descricao: "Disco completo do album Highway to Hell, músicas: Rock 'n' Roll Train, Skies on Fire, Big Jack, War Machine, Smash 'n' Grab, Spoilin' for a Fight, Wheels  Decibel, Stormy May Day, She Likes Rock 'n' Roll, Money Made, Rock 'n' Roll Dream, Rocking All the Way, Black Ice"
    }
  ]

  constructor() { 

    this.qty.emit(0);

  }

  ngOnInit() {
  }

  showProduct(produto)
  {
    this.produtoFiltrado = this.imgObjeto.find(x => x.id == produto);
    this.precoProduto = this.produtoFiltrado.preco;
    this.pgproduto = true;
    this.home = false;
    this.pgcart = false;
    this.sucesso = false;
    this.pgcatalogo = false;
  }
  qtyUp()
  {
    this.valor++;
    this.precoProduto = this.precoProduto + this.produtoFiltrado.preco;
  }
  qtyDown()
  {
    if(this.valor > 1)
    {
      this.valor--;
      this.precoProduto = this.precoProduto - this.produtoFiltrado.preco;
    }
      
  }
  finalizaPedido(id, qtd)
  {
    this.pgproduto = false;
    this.pgcatalogo = false;
    this.home = false;
    this.sucesso = false;
    this.pgcart = true;
    this.valor = 1;
    this.produtoFiltrado = this.imgObjeto.find(x => x.id == id);
    this.cartItem.push(
      {
        imagem: this.produtoFiltrado.imagem,
        nome: this.produtoFiltrado.nome,
        preco: this.produtoFiltrado.preco,
        qtd: qtd,
        id: this.produtoFiltrado.id
      }
    );
    var total = 0;
    var totalc = 0;
    if (this.cartItem != null) {      
      this.cartItem.forEach(x => total += x.qtd);
      this.cartItem.forEach(x => totalc += x.preco * x.qtd);
    }
    
    this.totalCart = totalc;
    this.qty.emit(qtd = total);
    
      
  }
  continuarComprando()
  {
    this.pgproduto = false;
    this.pgcatalogo = false;
    this.home = true;
    this.pgcart = false;
    this.sucesso = false;
  }
  esvaziarCarrinho()
  {
    this.cartItem = [];
    this.totalCart = 0;
    this.qty.emit(0);
  }
  showPortfolio()
  {
    this.pgproduto = false;
    this.pgcatalogo = true;
    this.home = false;
    this.sucesso = false;
    this.pgcart = false;
  }
  showSucesso()
  { 
    this.pgproduto = false;
    this.pgcatalogo = false;
    this.home = false;
    this.sucesso = true;
    this.pgcart = false;
    this.cartItem = [];
    this.totalCart = 0;
    this.qty.emit(0);
    
  }


}
