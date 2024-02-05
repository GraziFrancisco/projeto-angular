import { Component } from "@angular/core";

@Component({ 
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        } 
    `]
})

export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5? 'Online' : 'Offline';
    }

    
    getServerStatus() {
  
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'rgba(0, 128, 0, 0.322)' : 'rgba(255, 0, 0, 0.473)';
    }


}