import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { environment } from '../../../environments/environment'
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.scss']
})
export class MinecraftComponent implements OnInit {
  code = new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(6)])
  constructor(private router:Router, private http: HttpClient, private cookieService: CookieService) {
  }
  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.code.hasError('required')) {
      return 'You must enter a six character code'
    }
    if (this.code.hasError('minlength')) {
      return 'Shorter than six characters'
    }
    if (this.code.hasError('maxlength')) {
      return 'Longer than six characters'
    }
    return ""
  }
  onSubmit() {
    this.http.get(environment.apiUrl+ '/token/minecraft/verify?minecraftToken=' + this.code.value.toUpperCase(),{
      headers: {
        "Authorization": `Bearer ${this.cookieService.get('token')}`
      }
    }).subscribe(data => {
      this.router.navigate(['/dashboard']).then()
    })
  }
}
