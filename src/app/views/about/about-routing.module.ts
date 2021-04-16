import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts
import { AboutComponent } from '@layout/about/about.component';

// Views
import { ImprintComponent } from '@app/views/about/imprint/imprint.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [{ path: 'company-details', component: ImprintComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
