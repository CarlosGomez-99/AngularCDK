import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faBorderTopLeft,
  faChartLine,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faTrello = faTrello;
  faClock = faClock;
  faBorderTopLeft = faBorderTopLeft;
  faChartLine = faChartLine;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Personal Boards',
      items: [
        {
          label: 'Welcome Board',
          icon: faBorderTopLeft,
        },
        {
          label: 'My First Board',
          icon: faChartLine,
        },
      ],
    },
    {
      label: 'Starred Boards',
      items: [
        {
          label: 'My First Board',
          icon: faChartLine,
        },
      ],
    },
    {
      label: 'Recent Boards',
      items: [
        {
          label: 'Welcome Board',
          icon: faBorderTopLeft,
        },
      ],
    },
    {
      label: 'Team Boards',
      items: [
        {
          label: 'My First Board',
          icon: faChartLine,
        },
      ],
    },
  ];
}
