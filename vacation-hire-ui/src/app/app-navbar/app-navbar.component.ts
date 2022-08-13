import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  public pages: Page[] = [
    {
      name: 'Customers',
      link: '/customers',
      icon: 'rv_hookup',
      expanded: false,
      subPages: [{name: 'Marketplace', link: '/my-first-page'}, {name: 'Repository', link: '/my-second-page'}, {
        name: 'Track and trace',
        link: 'some-link'
      }, {name: 'Activity reports', link: 'some-link'}, {name: 'Kanban board', link: 'some-link'}, {
        name: 'Collections',
        link: 'some-link'
      }, {name: 'Brands', link: 'some-link'}, {name: 'Gallery', link: 'some-link'}, {name: 'Settings', link: 'some-link'}]
    },
    {
      name: 'Models admin',
      link: 'some-link',
      icon: 'rv_hookup',
      expanded: false,
      subPages: [{name: 'Test', link: 'some-link'}, {name: 'Test', link: 'some-link'}, {name: 'Test', link: 'some-link'}, {
        name: 'Test',
        link: 'some-link'
      }]
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }
}

interface Page {
  link: string;
  name: string;
  icon: string;
  expanded: boolean;
  subPages: SubPage[];
}

interface SubPage {
  link: string;
  name: string;
}
