import { Component, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})

export class UserTasksComponent implements OnInit {
  userName = input.required<string>(); // Now is set from the app.routes.ts.
  message = input.required<string>(); // This comes from the app.routes.ts.
  // private activatedRoute = inject(ActivatedRoute);

  // ngOnInit(): void {
  //   this.activatedRoute.data.subscribe({
  //     next: data => {
  //       console.log(data);
  //     }
  //   })
  // }
}

  // userId = input.required<string>();
  // private usersService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // userName = computed(() => 
  //   this.usersService.users.find(u => 
  //     u.id === this.userId())?.name);

  // Alternative way of getting the route param value.
//   ngOnInit(): void {
//     console.log('Input Data: ' + this.message());
//     console.log(this.activatedRoute); // Good to use if you're only needing a quick view of a component that isn't being reused.
//     const subscription = this.activatedRoute.paramMap.subscribe({
//       next: (paramMap) => {
//         this.userName = this.usersService.users.find((u) => u.id === paramMap.get('userId'))
//         ?.name || '';
//       },
//     });

//     this.destroyRef.onDestroy(() => subscription.unsubscribe());
//   }
// }

// This will replace the ngOnIt() method.
export const resolveUserName: ResolveFn<string> = ( // <> > is required here to identify what data you're returning below.
  activatedRoute: ActivatedRouteSnapshot, 
  routerState: RouterStateSnapshot
) => {
    const usersService = inject(UsersService);
    const userName = usersService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))
        ?.name || '';
    return userName;
}