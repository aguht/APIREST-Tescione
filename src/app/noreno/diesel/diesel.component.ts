import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/models/user';
import { ListapiService } from 'src/app/services/listapi.service';

@Component({
  selector: 'app-diesel',
  templateUrl: './diesel.component.html',
  styleUrls: ['./diesel.component.scss']
})
export class DieselComponent implements OnInit {

  dieselList: User[];

  constructor(private listaService:ListapiService) { }

  ngOnInit(): void {
    this.getDieselUsers();   
  }


  getDieselUsers(){
    this.listaService.getUsersList()
    .pipe(map((usuarios:any)=>{return usuarios.filter((val:any)=>val.modelo==='Diesel')}))
    .subscribe((data)=>{this.dieselList=data})
  }

}
