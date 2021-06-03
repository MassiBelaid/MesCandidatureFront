import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatureDetailsComponent } from './components/annonce/candidature-details/candidature-details.component';
import { CreateComponent } from './components/annonce/create/create.component';
import { EditComponent } from './components/annonce/create/edit.component';
import { ListComponent } from './components/annonce/list/list.component';
import { PricipalComponent } from './components/pricipal/pricipal.component';

const routes: Routes = [
  {path: '', component: PricipalComponent},
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent},
  {path: 'candidature-detail/:id', component: CandidatureDetailsComponent},
  {path: 'candidature-edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
