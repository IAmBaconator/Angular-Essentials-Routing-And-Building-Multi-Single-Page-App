
// Using this style appears to break the routing system by pulling it from main.ts
import { CanMatch, CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";

import { routes as userRoutes } from "./users/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if (shouldGetAccess < 1) { // Changing the 0.5 to 1 since this was only added to demo the '/unauthroized' status.
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
} // Similar formating as the ResolverFN

export const routes: Routes = [
            {
                path: '', // <your-domain>/
                component: NoTaskComponent,
                title: 'No task selected', // To show up in browser title and searched results.
            },
            {
                path: 'users/:userId', // <your-domain>/users/<uid>
                component: UserTasksComponent,
                children: userRoutes,
                canMatch: [dummyCanMatch], // Allows you control whether the entire route should be matched by a certain navigational route.
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