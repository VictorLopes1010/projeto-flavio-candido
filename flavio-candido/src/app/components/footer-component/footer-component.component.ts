import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})

export class FooterComponent implements OnInit{

  ngOnInit(): void {

  }
  constructor() {}

  voltarAoTopo(){
      window.scrollTo({
     top: 0,
     behavior: 'smooth'
      })
    }

}
