import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Logger } from '@core/logger.service';

const log = new Logger('Layout');

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug(`Default init.`);
  }

}
