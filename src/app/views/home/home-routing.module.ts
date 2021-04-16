import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts
import { DefaultComponent } from '@layout/default/default.component';

// Views
import { HomeComponent } from '@app/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
