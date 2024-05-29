import { Routes } from '@angular/router';
import { PersonTableComponent } from './person-table/person-table.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FilteredPersonTableComponent } from './filtered-person-table/filtered-person-table.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { UpdatePersonsComponent } from './update-persons/update-persons.component';

export const routes: Routes = [
    {
        path: '',
        component: PersonTableComponent
    },
    {
        path: 'person-table',
        component: PersonTableComponent
    },
    {
        path: 'add-person',
        component: AddPersonComponent
    },
    {
        path: 'index',
        component: PersonTableComponent
    },
    {
        path: 'filtered_see_all',
        component: FilteredPersonTableComponent
    },
    {
        path: 'filtered_see_all/:str',
        component: FilteredPersonTableComponent
    },
    {
        path: 'delete_person/:str',
        component: DeleteItemComponent
    },
    {
        path: 'update_person/:str',
        component: UpdatePersonsComponent
    }

];
