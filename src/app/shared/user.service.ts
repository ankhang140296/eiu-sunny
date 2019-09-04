import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFireDatabase) { }
  usersObservable: Observable<any[]>;
  user;
  createUser(username, email, password, mobile, role) {
    return new User(username, email, password, mobile, role);
  }

  getUsers() {
    return this.usersObservable = this.getUsersList('/users');
  }

  getUsersList(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getSnapshotChanges() {
    return this.db.list('/users').snapshotChanges();
  }

  addUser(user) {
    var postsRef = this.db.database.ref("/users");
    postsRef.push({
      username: user.username,
      email: user.email,
      password: user.password,
      mobile: user.mobile,
      role: user.role
    });
  }

  updateUser(user) {
    var usersRef = this.db.database.ref("/users");
    var hopperRef = usersRef.child(user.$key);
    hopperRef.update({
      username: user.username,
      email: user.email,
      password: user.password,
      mobile: user.mobile,
      role: user.role
    });
  }
  removeUser(user) {
    var usersRef = this.db.database.ref("/users");
    var hopperRef = usersRef.child(user.$key);
    hopperRef.remove();
  }
}
class User {
  username: string;
  email: string;
  password: string;
  mobile: string;
  role: string;
  constructor(username, email, password, mobile, role) {
    this.username = username;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
    this.role = role;
  }
}