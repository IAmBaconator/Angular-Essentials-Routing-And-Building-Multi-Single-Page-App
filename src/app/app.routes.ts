
// Using this style appears to break the routing system by pulling it from main.ts
import { Routes } from "@angular/router";

import { routes as userRoutes } from "./users/user/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
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
                data: {
                    message: 'Hello!' // Option allowing you to setup any static value that is passed as a property to the associated component IF you have withComponentInputBinding() enabled.
                },
                resolve: {
                    userName: resolveUserName, // No need to add () to execute resolveUserName because Angular does this for you.
                }, // Works like the data parameter but deals with dynamic values.
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ];