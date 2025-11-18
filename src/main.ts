import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { TaskComponent } from './app/tasks/task/task.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter([
            {
                path: '', // <your-domain>/
                component: NoTaskComponent,
            },
            {
                path: 'tasks', // <your-domain>/tasks
                component: TaskComponent,
            },
        ]),
    ], // Route = path + information associated with the path you wish Angular to load when the path is presented.
}).catch((err) => 
    console.error(err));
