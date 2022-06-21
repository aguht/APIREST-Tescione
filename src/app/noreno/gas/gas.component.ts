import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/models/user';
import { ListapiService } from 'src/app/services/listapi.service';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.scss']
})
export class GasComponent implements OnInit {

  gasList: User[];

  constructor(private listaService:ListapiService) { }

  ngOnInit(): void {
    this.getGasUsers();   
  }


  getGasUsers(){
    this.listaService.getUsersList()
    .pipe(map((usuarios:any)=>{return usuarios.filter((val:any)=>val.modelo==='Gasoline')}))
    .subscribe((data)=>{this.gasList=data})
  }

}
