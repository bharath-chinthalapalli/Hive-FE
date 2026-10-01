import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import {
  RecaptchaModule,
  RecaptchaFormsModule,
  RecaptchaV3Module,
  ReCaptchaV3Service,
} from 'ng-recaptcha';
import { HiveOwnService } from '../../services/hive-own.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactUs } from '../../modals/hive-modal';

@Component({
  selector: 'app-contact-us-new',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule, RecaptchaModule, RecaptchaFormsModule, RecaptchaV3Module, MatProgressSpinnerModule],
  templateUrl: './contact-us-new.component.html',
  styleUrl: './contact-us-new.component.scss',
})
export class ContactUsNewComponent implements OnInit {
  isLoading = signal<boolean>(false);
  captchaVerified = false;
  captchaToken: string | null = null;
  private _fb = inject(FormBuilder);
  private readonly _snackBar = inject(MatSnackBar);
  private readonly _hiveOwnService = inject(HiveOwnService);
  private _recaptchaV3Service = inject(ReCaptchaV3Service);

  contactFrom: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[\p{Letter}][\p{Letter} .'\-]*(?:[\p{Letter}])$/u)]],
    email: ['', [Validators.required, Validators.pattern('^(?=[a-zA-Z0-9._%+-]*[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    phoneNumber: ['',
      [
        Validators.required,
        Validators.pattern('^\\+[0-9]{10,20}$')
      ]
    ],
    companyName: ['', [Validators.required, Validators.pattern(/^[^\s].*[^\s]$/)]],
    subject: ['', [Validators.required, Validators.pattern(/^[^\s].*[^\s]$/)]],
    message: ['', [Validators.required, Validators.maxLength(500), Validators.pattern(/^[^\s].*[^\s]$/)]],
    captcha: [''],
  });

  ngOnInit(): void {

  }

  allowOnlyNumbersAndPlus(event: KeyboardEvent) {
  const charCode = event.charCode || event.keyCode;

  // Allow: digits (0-9)
  if (charCode >= 48 && charCode <= 57) {
    return;
  }

  // Allow: plus sign (+) but only if it's the first character
  if (charCode === 43 && (event.target as HTMLInputElement).selectionStart === 0) {
    return;
  }

  // Block everything else
  event.preventDefault();
}


  onPhoneKeyDown(event: KeyboardEvent) {
    const allowed = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (allowed.includes(event.key)) return;
    if (event.key === '+') {
      const input = event.target as HTMLInputElement;
      if (input.selectionStart === 0 && !input.value.includes('+')) {
        return;
      }
    }
    if (/^[0-9]$/.test(event.key)) return;
    event.preventDefault();
  }

  onPhonePaste(event: ClipboardEvent) {
    const paste = event.clipboardData?.getData('text') ?? '';
    if (!/^\+?[0-9]+$/.test(paste)) {
      event.preventDefault();
    }
  }
  // submitContactForm() {
  //   if (this.contactFrom.valid) {
  //     this.isLoading.set(true);
  //     const payload: ContactUs = {
  //       name: this.contactFrom.get('name')?.value,
  //       email: this.contactFrom.get('email')?.value,
  //       phoneNumber: this.contactFrom.get('phoneNumber')?.value,
  //       companyName: this.contactFrom.get('companyName')?.value,
  //       subject: this.contactFrom.get('subject')?.value,
  //       message: this.contactFrom.get('message')?.value,
  //       captcha: this.contactFrom.get('captcha')?.value
  //     };
  //     this._hiveOwnService.getContactUs(payload).subscribe({
  //       next: (res: any) => {
  //         this.isLoading.set(false);
  //         this._snackBar.open(res.message || 'Request sent successfully!', 'Ok', { duration: 4000 });
  //         this.contactFrom.reset();
  //       }, error: (err) => {
  //         this.isLoading.set(false);
  //         this._snackBar.open(err.error.message || 'Something went wrong', 'Ok', { duration: 3000 });
  //       }
  //     })
  //   }
  // }

  submitContactForm() {
    if (this.contactFrom.invalid) {
      this.contactFrom.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this._recaptchaV3Service.execute('submit_demo').subscribe({
      next: token => {
        this.contactFrom.patchValue({ captcha: token });
        const payload: ContactUs = { ...this.contactFrom.value, phoneNumber: this.contactFrom.value.phoneNumber };

        this._hiveOwnService.getContactUs(payload).subscribe({
          next: res => {
            this.isLoading.set(false);
            this._snackBar.open(res.message || 'Request sent successfully!', 'OK', { duration: 4000 });
            this.contactFrom.reset();
          },
          error: err => {
            this.isLoading.set(false);
            this._snackBar.open(err.error.message || 'Something went wrong', 'OK', { duration: 3000 });
          }
        });
      },
      error: () => {
        this.isLoading.set(false);
        this._snackBar.open('reCAPTCHA failed. Please try again.', 'OK', { duration: 3000 });
      }
    });
  }
}
