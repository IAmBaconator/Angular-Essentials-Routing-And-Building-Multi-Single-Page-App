
// Using this style appears to break the routing system by pulling it from main.ts
import { Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { TaskComponent } from "./tasks/task/task.component";

export const routes: Routes = [
            {
                path: '', // <your-domain>/
                component: NoTaskComponent,
            },
            {
                path: 'tasks', // <your-domain>/tasks
                component: TaskComponent,
            },
        ];