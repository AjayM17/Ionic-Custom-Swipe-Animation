import { Component } from '@angular/core';

import { StrangersPage } from '../strangers/strangers';
import { ChatPage } from '../chat/chat';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StrangersPage;
  tab3Root = ChatPage;

  constructor() {

  }
}
