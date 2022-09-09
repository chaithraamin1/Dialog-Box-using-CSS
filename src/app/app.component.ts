import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialog-box';
  ngOnInit(){
    
  }
  submit(){
    let popup=document.getElementById("popup");
    popup?.classList.add("open-dialog")
  }
  close(){
    let popup=document.getElementById("popup");
    popup?.classList.remove("open-dialog")
  }
}
