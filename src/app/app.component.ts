import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'test server', content: 'just a content' }];

  onServerAdded(serverData:{ serverName:string,serverContent:string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(BlueprintData:{ serverName:string,serverContent:string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: BlueprintData.serverName,
      content: BlueprintData.serverContent
    });
  }

}
