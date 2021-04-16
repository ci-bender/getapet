import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Logger } from '@core/logger.service';

const log = new Logger('Views');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug(`Home Module init.`);
  }
}
