import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  id: number;
  cpfCnpj: number;
  celular: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nome: 'Hydrogen', cpfCnpj: 1.0079, celular: 21000000000},
  {id: 2, nome: 'Helium', cpfCnpj: 4.0026, celular: 21000000000},
  {id: 3, nome: 'Lithium', cpfCnpj: 6.941, celular: 21000000000},
  {id: 4, nome: 'Beryllium', cpfCnpj: 9.0122, celular: 21000000000},
  {id: 5, nome: 'Boron', cpfCnpj: 10.811, celular: 21000000000},
];

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpfCnpj', 'celular'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
