import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/auth/user';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  errorMessage: String = "";
  user?: User;

  constructor(private userService: UserService) {
    this.userService.getUser(environment.userId).subscribe(
      {
        next: (userData) => {
          this.user = userData;
          console.log('Datos desde el backend: ', this.user);
          
        },
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () => {
          console.info('User Data OK');
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
