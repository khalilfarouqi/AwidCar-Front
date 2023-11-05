import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  formData: any = {};
  
  users: any = [];
  router: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getUserById(params["id"]);
     })
  }

  public getUserById(id :number){
    this.userService.getUserById(id).subscribe((result) => { 
      this.users = result;
      console.log(result)
    })
  }

  MethodePost(id: number, currentPassword: string, form: NgForm) {
    if (form.valid) {
      if (form.value.newPassword == form.value.confirmPassword) {
        console
        this.userService.existsPassWord(id, currentPassword).subscribe((passwordExists: boolean) => {
          if (passwordExists) {
            this.formData.id = id;
            this.userService.postData(this.formData).subscribe((item) => {
              console.log(item);
            });
          } else {
            console.log('Password does not exist for the user.');
            form.reset();
            form.controls['CurrentPassword'].disable();
          }
        });
      } else {
        console.log('new password not match');
        form.reset();
        form.controls['NewPassword'].setErrors({ 'mismatch': true });
        form.controls['PassWord'].setErrors({ 'mismatch': true }); 
      }
    }
  }

}
