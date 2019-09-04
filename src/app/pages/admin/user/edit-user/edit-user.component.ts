import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  usersArray = [];
  updateSuccessfull: boolean;
  edit: boolean;
  user;
  username: string;
  email: string;
  password: string;
  mobile: string;
  role: string;
  constructor(private userService: UserService) { }
  public searchText: string;

  ngOnInit() {
    this.userService.getSnapshotChanges().subscribe(
      list => {
        this.usersArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onEdit(user) {
    this.user = user;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.mobile = user.mobile;
    this.role = user.role;
    this.edit = true;
  }

  onSave() {
    if (confirm('Are you sure to update this record ?')) {
      this.edit = false;
      this.updateSuccessfull = true;

      this.user.username = this.username;
      this.user.email = this.email;
      this.user.password = this.password;
      this.user.mobile = this.mobile;
      this.user.role = this.role;

      this.userService.updateUser(this.user);
    }
  }

  onClose() {

    this.edit = false;
  }

  onRemove(user){
    console.log(user);
    if (confirm('Are you sure to delete this record ?')) {
      this.userService.removeUser(user);
    }
  }
}
