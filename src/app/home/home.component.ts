import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ListapiService } from '../services/listapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usersList: User[];
  constructor(private listaService:ListapiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.listaService.getUsersList().subscribe(
      (data)=>{
        this.usersList=data;
      }
    )
  }

}
