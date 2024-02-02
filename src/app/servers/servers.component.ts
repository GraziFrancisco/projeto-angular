import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]', POR ID NAO FUNCIONA
  selector: '.app-servers',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}
