import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnChanges, OnInit {
  validateForm!: FormGroup;
  visible: any;
  @Input() isVisible: any;
  @Input() actionForm: any;
  @Input() detailRecord: any;
  @Output() onCancelEvent = new EventEmitter<any>();
  @Output() onSubmitEvent = new EventEmitter<any>();
  errMessageMap: any = {};
  passwordVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.errMessageMap = {
      username: {
        required: 'Please input your name!',
        minlength: 'Please input at least least 10 character'
      },
      password: {
        required: 'please input your password!'
      },
      email: {
        required: 'please input your password!',
        email: 'The input is not valid E-mail!'

      },
      quota: {
        required: 'please input your password!'
      }
    };
  }

  ngOnInit(): void {
    // this.errMessageMap = {
    //   username: {
    //     required: 'Please input your name!',
    //     minlength: 'Please input at least least 10 character'
    //   },
    //   password: {
    //     required: 'please input your password!'
    //   },
    //   email: {
    //     required: 'please input your password!',
    //     email: 'The input is not valid E-mail!'

    //   },
    //   quota: {
    //     required: 'please input your password!'
    //   }
    // };

    // // if (this.actionForm === 'add') {
    // //   this.validateForm = this.fb.group({
    // //     username: [null, [Validators.required, Validators.minLength(10)]],
    // //     password: [null, [Validators.required]],
    // //     email: [null, [Validators.required, Validators.email]],
    // //     quota: [null, [Validators.required]]
    // //   });
    // // } else {
    // this.validateForm = this.fb.group({
    //   username: [null, [Validators.required, Validators.minLength(10)]],
    //   password: [null, [Validators.required]],
    //   email: [null, [Validators.required, Validators.email]],
    //   quota: [null, [Validators.required]]
    // });
    // this.validateForm.controls["username"].setValue('agsfg');


    // }


    // this.resetFormSubject.subscribe(response => {
    //   if (response) {
    //     console.log('object');
    //     this.validateForm.reset(); // Reset form data
    //     // formDirective.resetForm()
    //     // Or do whatever operations you need.
    //   }
    // }
  }

  ngOnChanges() {
    if (this.actionForm === 'add') {
      this.validateForm = this.fb.group({
        username: [null, [Validators.required, Validators.minLength(3)]],
        password: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        quota: [null, [Validators.required]]
      });
    } else {
      this.validateForm = this.fb.group({
        username: [null, [Validators.required, Validators.minLength(3)]],
        password: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        quota: [null, [Validators.required]]
      });
      this.validateForm.controls["username"].setValue(this.detailRecord?.username);
      this.validateForm.controls["email"].setValue(this.detailRecord?.email);
      this.validateForm.controls["password"].setValue(this.detailRecord?.password);
      this.validateForm.controls["quota"].setValue(this.detailRecord?.quota);
    }
  }

  resetForm(): void {
    console.log('successfully executed.');
    this.validateForm.reset();
  }

  handleShowPassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  showModal(): void {
    this.visible = this.isVisible;
    // this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    this.onCancelEvent.emit(!this.isVisible);
    this.validateForm.reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.onSubmitEvent.emit(this.validateForm.value)

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  getErrTipByField(fieldName: any) {
    const errors = this.validateForm.get(fieldName)?.errors;
    let errMsg = '';
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        errMsg += this.errMessageMap[fieldName][key];
      }
    }
    return errMsg;
  }

  updateData(): void {
    // Method code goes here
  }

}
