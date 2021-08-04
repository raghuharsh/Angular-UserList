import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRecordsService } from '../user-records.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  public list = new Array;
  public filteredLists = new Array;
  public searchQuery = '';

  constructor(
    private service: UserRecordsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.list = this.service.getUserLists();
    this.filteredLists = this.list.slice(0);
    console.log(this.service.getUserLists());
  }

  addUser() {
    this.router.navigateByUrl("create")
  }

  search(){
    this.list = this.filteredLists.filter( u => {
      return u.name.includes(this.searchQuery)
    })
  }

}
