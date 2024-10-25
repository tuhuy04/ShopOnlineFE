import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateUserComponent} from './create-user/create-user.component';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss'],
})
export class UserSettingComponent implements OnInit {
  @ViewChild(CreateUserComponent, {static: true}) private child: CreateUserComponent;

  isVisible: any;
  validateForm!: FormGroup;
  title = "Người dùng";
  actionForm: string;
  detailRecord: any;
  listOfData = [
    {
      id: '1',
      username: 'John Brown',
      email: 'test@yopmail.com',
      quota: 32,
      token: 'vNfIDr4SDPzrTuOknQmLbCrsO9t9MAVwED9ZvoTqvYlZBns6z2x3GgyPZkfXdQs1',
      action: ['disable', 'delete', 'change', 'view report'],
    },
    {
      id: '2',
      username: 'John Brown',
      email: 'kh@yopmail.com',
      quota: 32,
      token: 'vNfIDr4SDPz4TuOknQmLbCrsO9t9MAVwED9ZvoTqvYlZBns6z2x3GgyPZkfXdQs3',
      action: ['disable', 'delete', 'change', 'view report'],
    },
    {
      id: '3',
      username: 'John Brown',
      email: 'abv@yopmail.com',
      quota: 32,
      token: 'vwfIDp4SDPzrTuOknQmLbCrsO9t9MAVwED9ZvoTqvYlZBns6z2x3GgyPZkfXdQs3',
      action: ['disable', 'delete', 'change', 'view report'],
    },
  ];

  // resetFormSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder) {
    this.isVisible = false;
    this.actionForm = 'add'

  }

  ngOnInit(): void {
    console.log('12344', this.actionForm);
  }

  showModal(): void {
    this.isVisible = true;
    this.actionForm = 'add';
  }


  handleCancel($event: boolean) {
    console.log('Button cancel clicked!');
    // this.isVisible = false;
    this.isVisible = $event;
  }


  submitForm($event: any) {
    this.child.resetForm()

    this.actionForm = 'add';
    console.log('Button cancel clicked!', $event);
    // this.isVisible = false;
    // this.resetForm();
    this.isVisible = false;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }



  editUser(data: any) {
    this.actionForm = 'edit';
    this.isVisible = true;
    this.detailRecord = data;

  }







  // submitForm(): void {
  //   if (this.validateForm.valid) {
  //     console.log('submit', this.validateForm.value);
  //   } else {
  //     Object.values(this.validateForm.controls).forEach(control => {
  //       if (control.invalid) {
  //         control.markAsDirty();
  //         control.updateValueAndValidity({onlySelf: true});
  //       }
  //     });
  //   }
  // }

}
