import { Component, OnInit } from '@angular/core';
import { MetaService } from '@core/services/meta.service';

@Component({
  selector: 'about-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  isLoading = false;

  constructor(
    public metaTags: MetaService
  ) {
    metaTags.setBasicMetaTags({
      titleTranslate: 'about.imprint.title',
      keywords: []
    });
  }

  ngOnInit(): void {
  }

}
