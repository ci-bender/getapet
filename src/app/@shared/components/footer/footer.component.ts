import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() setLayout: string | undefined;

  // Get current year
  year: number = new Date().getFullYear();

  // Get current version
  version: string | null = environment.version;

  constructor() {}

  ngOnInit(): void {}
}
