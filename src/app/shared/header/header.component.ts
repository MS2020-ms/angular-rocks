import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement($element): void {
    //console.log($element);
    const div = document.getElementById($element)
    div.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
