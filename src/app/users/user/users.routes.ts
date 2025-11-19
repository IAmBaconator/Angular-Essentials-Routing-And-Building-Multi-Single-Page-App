import { Routes } from "@angular/router";

import { TasksComponent } from "../../tasks/tasks.component";
import { NewTaskComponent } from "../../tasks/new-task/new-task.component";

export const routes: Routes = [
                    {
                        path: '',
                        redirectTo: 'tasks', // To cover incorrectly formated urls.
                        pathMatch: 'prefix', // Checks the URL matches the route pathway.
                    },
                    {
                        path: 'tasks', // <your-domain>/users/<uid>/tasks
                        component: TasksComponent,
                    },
                    {
                        path: 'tasks/new',
                        component: NewTaskComponent,
                    }
                ];