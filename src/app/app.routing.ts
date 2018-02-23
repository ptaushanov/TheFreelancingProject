import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OverviewComponent } from './overview/overview.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'overview', component: OverviewComponent},
    {path: 'contacts', component: ContactsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
