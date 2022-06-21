import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/models/user';
import { ListapiService } from 'src/app/services/listapi.service';

@Component({
  selector: 'app-hybrid',
  templateUrl: './hybrid.component.html',
  styleUrls: ['./hybrid.component.scss']
})
export class HybridComponent implements OnInit {

  hybridList: User[];

  constructor(private listaService:ListapiService) { }

  ngOnInit(): void {
    this.getHybridUsers();   
  }


  getHybridUsers(){
    this.listaService.getUsersList()
    .pipe(map((usuarios:any)=>{return usuarios.filter((val:any)=>val.modelo==='Hybrid')}))
    .subscribe((data)=>{this.hybridList=data})
  }

}
