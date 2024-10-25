import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  array = [1, 2, 3, 4];
  visible = false;

  data: any;

  countCart: any
  constructor(public router: Router,
    private authService: AuthService,
    private _modalService: NzModalService
  ) {
    
  }
  ngOnInit(): void {
    this.data = this.authService.getUser();
    // this._productService.countPRoduct(this.authService.getCart().length);
    // this.countCart =  this.authService.getCart().length
  
  }

  title = 'PROJECT';
  menuItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  openMap: { [name: string]: boolean } = {
    menu0: true,
    menu1: true,
    menu2: true,
    menu3: true,
    menu4: true,
    menu5: true,
    menu6: true,
    menu7: true,
    menu8: true,
    menu9: true,
    menu10: true,
    menu11: true,
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = true;
      }
    }
  }


  goCart() {
    this.router.navigate(['/cart']);
  }



  logOut() {
    this._modalService.confirm({
      nzTitle: 'Xác Nhận',
      nzContent: 'Bạn có chắc chắn muốn đăng xuất?',
      nzOkText: 'Đồng ý',
      nzCancelText: 'Không',
      // nzWidth: 310,
      nzOkDanger: true,
      nzOnOk: () => {
        this.authService.logout()

      }
    });
  }


  
  

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
