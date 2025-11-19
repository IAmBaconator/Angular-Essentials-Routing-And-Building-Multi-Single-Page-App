
// Using this style appears to break the routing system by pulling it from main.ts
import { Routes } from "@angular/router";

import { routes as userRoutes } from "./users/user/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
            {
                path: '', // <your-domain>/
                component: NoTaskComponent,
            },
            {
                path: 'users/:userId', // <your-domain>/users/<uid>
                component: UserTasksComponent,
                children: userRoutes,
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ];