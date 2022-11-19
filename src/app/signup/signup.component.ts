import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css', '../common/forms.css']
})
export class SignupComponent implements OnInit {

    form: FormGroup;
    errors: string[] = [];
    messagePerErrorCode = {
        min: 'Minimum length 10',
        uppercase: 'Must have uppercase letters',
        digits: 'Must have at least 2 digits'
    }

    constructor(private fb: FormBuilder, private authService: AuthService) {

        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm: ['', Validators.required]
        });
    }

    ngOnInit() {

    }


    signUp() {
        const val = this.form.value;
        if (val.email && val.password && val.confirm) {
            this.authService.signUp(val.user, val.password)
                .subscribe(
                    () => console.log('user created successfully'),
                    response => this.errors = response.error.errors
                )
        }

    }

}
