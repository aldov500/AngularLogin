import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverName = 'Default text';
  constructor() { 
    this.waitToActiveate();
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.allowNewServer = true;
    this.waitToActiveate();
  }

  private waitToActiveate(){
    setTimeout(()=>{
      this.allowNewServer = false;
    },2000);
  }

  onUpdateEvent(event: any){
    this.serverName = event.target.value;

  }

}
