import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRecordsService } from '../user-records.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public form: FormGroup;
  public hobbies = new Array;
  public list = new Array;
  public filteredLists = new Array;
  public searchQuery = '';
  public index: any;
  public submitText: string = '';
  public submithobbiText: string = '';
  public index_hobby: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserRecordsService,
    private router: Router
  ) { 
    this.form = this.formBuilder.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      gender: ['', Validators.required ],
      hobbi: ['', Validators.required ],
      about: ['', Validators.required ],
    })
  }

  ngOnInit(): void {
    this.hobbies= [];
    this.submitText = 'Submit';
    this.submithobbiText = '+ Add';
    // this.searchQuery.sub
  }

  submit() {
    let userDetails = this.form.getRawValue();
    userDetails.hobby = this.hobbies;
    if(this.index === undefined){
      this.list.push(userDetails);
    } else {
      this.list[this.index]= userDetails;
      this.index = undefined;
    }
      this.submitText = 'Submit';
      this.filteredLists = this.list.slice(0);
      this.form.reset();
      this.hobbies =[];
    // this.service.pushUser(userDetails);
    // this.router.navigateByUrl('show');
  }

  addHobbies() {
    if(this.index_hobby === undefined){
      this.hobbies.push(this.form.value.hobbi);
      console.log(this.hobbies);
      this.form.patchValue({
        hobbi: ''
      })
    } else {
      this.hobbies[this.index_hobby]= this.form.value.hobbi;
      this.index_hobby = undefined;
    }
  }

  editHobby(i: number) {
    this.index_hobby = i;
    this.form.patchValue({
      hobbi:this.hobbies[i]})
    this.submithobbiText = 'Update ';
  }


  deleteHobby(i:number){
    this.hobbies.splice(i,1);
  }


  addUser() {
    this.router.navigateByUrl("create")
  }

  delete(i: number) {
    this.filteredLists.splice(i,1);
    this.list.splice(i,1);
  }

  edit(i: number) {
    this.form.patchValue(this.filteredLists[i])
    this.form.patchValue({
      hobbi: '',
    })
    this.hobbies = this.filteredLists[i].hobby.slice(0);
    this.index =i;
    this.submitText = 'Update ';
  }

  search(){
    this.list = this.filteredLists.filter( u => {
      return u.name.includes(this.searchQuery)
    })
  }

}
