import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRecordsService {

  public userDetails= new Array;

  constructor() { }

  pushUser(user: object){
    this.userDetails.push(user);
    console.log(this.userDetails);
  }

  getUserLists(){
    return this.userDetails;
  }
}
