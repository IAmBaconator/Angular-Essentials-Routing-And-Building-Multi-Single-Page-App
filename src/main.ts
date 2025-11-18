import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { TaskComponent } from './app/tasks/task/task.component';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter([
            {
                path: '', // <your-domain>/
                component: NoTaskComponent,
            },
            {
                path: 'users/:userId', // <your-domain>/users/<uid>
                component: UserTasksComponent,
            },
        ]),
    ], // Route = path + information associated with the path you wish Angular to load when the path is presented.
}).catch((err) => 
    console.error(err));
