import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { User } from 'src/app/models/user';
import { ListapiService } from 'src/app/services/listapi.service';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.scss']
})
export class ElectricComponent implements OnInit {

  electricList: User[];

  constructor(private listaService:ListapiService) { }

  ngOnInit(): void {
    this.getElectricUsers();   
  }


  getElectricUsers(){
    this.listaService.getUsersList()
    .pipe(map((usuarios:any)=>{return usuarios.filter((val:any)=>val.modelo==='Electric')}))
    .subscribe((data)=>{this.electricList=data})
  }


 
}
