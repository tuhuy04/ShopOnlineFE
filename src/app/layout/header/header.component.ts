import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private _modalService: NzModalService
  ) { }

  ngOnInit(): void {
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

}
