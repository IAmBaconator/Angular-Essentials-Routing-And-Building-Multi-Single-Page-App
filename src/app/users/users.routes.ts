import { Routes } from '@angular/router';

import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';
import { resolveTitle } from './user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange', // Add to enable the reading of a URL's queryParams information.
    resolve: {
      userTasks: resolveUserTasks,
    },
    title: resolveTitle, // To add a dyamically driven title to the browswer tab and search results.
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
  },
];