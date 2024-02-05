import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', POR ID NAO FUNCIONA
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})

export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'Nenhum servidor foi criado!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer =  true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Servidor foi criado! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
