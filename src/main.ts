import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { AppComponent } from './app/app.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { TaskComponent } from './app/tasks/task/task.component';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { NewTaskComponent } from './app/tasks/new-task/new-task.component';

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
                children: [
                    {
                        path: 'tasks', // <your-domain>/users/<uid>/tasks
                        component: TasksComponent,
                    },
                    {
                        path: 'tasks/new',
                        component: NewTaskComponent,
                    }
                ]
            },
        ],
    withComponentInputBinding()),
    ], // Route = path + information associated with the path you wish Angular to load when the path is presented.
}).catch((err) => 
    console.error(err));
