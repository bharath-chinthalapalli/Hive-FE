import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HiveOwnService } from '../../services/hive-own.service';
import { RequestDemo } from '../../modals/hive-modal';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  RecaptchaModule,
  RecaptchaFormsModule,
  RecaptchaV3Module,
  ReCaptchaV3Service
} from 'ng-recaptcha';

@Component({
  selector: 'app-try-demo-new',
  imports: [CommonModule, RouterLink, MatProgressSpinnerModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, RecaptchaModule, RecaptchaFormsModule, RecaptchaV3Module],
  templateUrl: './try-demo-new.component.html',
  styleUrl: './try-demo-new.component.scss',
})
export class TryDemoNewComponent {
  isLoading = signal<boolean>(false);
  captchaVerified = false;
  captchaToken: string | null = null;
  private _fb = inject(FormBuilder);
  private readonly _snackBar = inject(MatSnackBar);
  private readonly _hiveOwnService = inject(HiveOwnService);
  private _recaptchaV3Service = inject(ReCaptchaV3Service);
  countries = [
    { name: 'Afghanistan', dialCode: '+93', code: 'AF', flag: '🇦🇫' },
    { name: 'Angola', dialCode: '+244', code: 'AO', flag: '🇦🇴' },
    { name: 'Albania', dialCode: '+355', code: 'AL', flag: '🇦🇱' },
    { name: 'Andorra', dialCode: '+376', code: 'AD', flag: '🇦🇩' },
    { name: 'United Arab Emirates', dialCode: '+971', code: 'AE', flag: '🇦🇪' },
    { name: 'Argentina', dialCode: '+54', code: 'AR', flag: '🇦🇷' },
    { name: 'Australia', dialCode: '+61', code: 'AU', flag: '🇦🇺' },
    { name: 'Austria', dialCode: '+43', code: 'AT', flag: '🇦🇹' },
    { name: 'Belgium', dialCode: '+32', code: 'BE', flag: '🇧🇪' },
    { name: 'Bangladesh', dialCode: '+880', code: 'BD', flag: '🇧🇩' },
    { name: 'Bulgaria', dialCode: '+359', code: 'BG', flag: '🇧🇬' },
    { name: 'Bosnia and Herzegovina', dialCode: '+387', code: 'BA', flag: '🇧🇦' },
    { name: 'Bolivia, Plurinational State of', dialCode: '+591', code: 'BO', flag: '🇧🇴' },
    { name: 'Brazil', dialCode: '+55', code: 'BR', flag: '🇧🇷' },
    { name: 'Canada', dialCode: '+1', code: 'CA', flag: '🇨🇦' },
    { name: 'Switzerland', dialCode: '+41', code: 'CH', flag: '🇨🇭' },
    { name: 'Chile', dialCode: '+56', code: 'CL', flag: '🇨🇱' },
    { name: 'China', dialCode: '+86', code: 'CN', flag: '🇨🇳' },
    { name: 'Colombia', dialCode: '+57', code: 'CO', flag: '🇨🇴' },
    { name: 'Costa Rica', dialCode: '+506', code: 'CR', flag: '🇨🇷' },
    { name: 'Cuba', dialCode: '+53', code: 'CU', flag: '🇨🇺' },
    { name: 'Czechia', dialCode: '+420', code: 'CZ', flag: '🇨🇿' },
    { name: 'Germany', dialCode: '+49', code: 'DE', flag: '🇩🇪' },
    { name: 'Denmark', dialCode: '+45', code: 'DK', flag: '🇩🇰' },
    { name: 'Dominican Republic', dialCode: '+1', code: 'DO', flag: '🇩🇴' },
    { name: 'Algeria', dialCode: '+213', code: 'DZ', flag: '🇩🇿' },
    { name: 'Ecuador', dialCode: '+593', code: 'EC', flag: '🇪🇨' },
    { name: 'Egypt', dialCode: '+20', code: 'EG', flag: '🇪🇬' },
    { name: 'Spain', dialCode: '+34', code: 'ES', flag: '🇪🇸' },
    { name: 'Ethiopia', dialCode: '+251', code: 'ET', flag: '🇪🇹' },
    { name: 'Finland', dialCode: '+358', code: 'FI', flag: '🇫🇮' },
    { name: 'Fiji', dialCode: '+679', code: 'FJ', flag: '🇫🇯' },
    { name: 'France', dialCode: '+33', code: 'FR', flag: '🇫🇷' },
    { name: 'United Kingdom', dialCode: '+44', code: 'GB', flag: '🇬🇧' },
    { name: 'Ghana', dialCode: '+233', code: 'GH', flag: '🇬🇭' },
    { name: 'Greece', dialCode: '+30', code: 'GR', flag: '🇬🇷' },
    { name: 'Guatemala', dialCode: '+502', code: 'GT', flag: '🇬🇹' },
    { name: 'Honduras', dialCode: '+504', code: 'HN', flag: '🇭🇳' },
    { name: 'Croatia', dialCode: '+385', code: 'HR', flag: '🇭🇷' },
    { name: 'Hungary', dialCode: '+36', code: 'HU', flag: '🇭🇺' },
    { name: 'Indonesia', dialCode: '+62', code: 'ID', flag: '🇮🇩' },
    { name: 'India', dialCode: '+91', code: 'IN', flag: '🇮🇳' },
    { name: 'Ireland', dialCode: '+353', code: 'IE', flag: '🇮🇪' },
    { name: 'Iran, Islamic Republic of', dialCode: '+98', code: 'IR', flag: '🇮🇷' },
    { name: 'Iraq', dialCode: '+964', code: 'IQ', flag: '🇮🇶' },
    { name: 'Iceland', dialCode: '+354', code: 'IS', flag: '🇮🇸' },
    { name: 'Israel', dialCode: '+972', code: 'IL', flag: '🇮🇱' },
    { name: 'Italy', dialCode: '+39', code: 'IT', flag: '🇮🇹' },
    { name: 'Jordan', dialCode: '+962', code: 'JO', flag: '🇯🇴' },
    { name: 'Japan', dialCode: '+81', code: 'JP', flag: '🇯🇵' },
    { name: 'Kenya', dialCode: '+254', code: 'KE', flag: '🇰🇪' },
    { name: 'Korea, Republic of', dialCode: '+82', code: 'KR', flag: '🇰🇷' },
    { name: 'Kuwait', dialCode: '+965', code: 'KW', flag: '🇰🇼' },
    { name: 'Sri Lanka', dialCode: '+94', code: 'LK', flag: '🇱🇰' },
    { name: 'Morocco', dialCode: '+212', code: 'MA', flag: '🇲🇦' },
    { name: 'Mexico', dialCode: '+52', code: 'MX', flag: '🇲🇽' },
    { name: 'North Macedonia', dialCode: '+389', code: 'MK', flag: '🇲🇰' },
    { name: 'Montenegro', dialCode: '+382', code: 'ME', flag: '🇲🇪' },
    { name: 'Malaysia', dialCode: '+60', code: 'MY', flag: '🇲🇾' },
    { name: 'Nigeria', dialCode: '+234', code: 'NG', flag: '🇳🇬' },
    { name: 'Netherlands', dialCode: '+31', code: 'NL', flag: '🇳🇱' },
    { name: 'Norway', dialCode: '+47', code: 'NO', flag: '🇳🇴' },
    { name: 'Nepal', dialCode: '+977', code: 'NP', flag: '🇳🇵' },
    { name: 'New Zealand', dialCode: '+64', code: 'NZ', flag: '🇳🇿' },
    { name: 'Oman', dialCode: '+968', code: 'OM', flag: '🇴🇲' },
    { name: 'Pakistan', dialCode: '+92', code: 'PK', flag: '🇵🇰' },
    { name: 'Panama', dialCode: '+507', code: 'PA', flag: '🇵🇦' },
    { name: 'Peru', dialCode: '+51', code: 'PE', flag: '🇵🇪' },
    { name: 'Philippines', dialCode: '+63', code: 'PH', flag: '🇵🇭' },
    { name: 'Papua New Guinea', dialCode: '+675', code: 'PG', flag: '🇵🇬' },
    { name: 'Poland', dialCode: '+48', code: 'PL', flag: '🇵🇱' },
    { name: 'Korea, Democratic Peoples Republic', dialCode: '+850', code: 'KP', flag: '🇰🇵' },
    { name: 'Portugal', dialCode: '+351', code: 'PT', flag: '🇵🇹' },
    { name: 'Paraguay', dialCode: '+595', code: 'PY', flag: '🇵🇾' },
    { name: 'Palestine, State of', dialCode: '+970', code: 'PS', flag: '🇵🇸' },
    { name: 'Qatar', dialCode: '+974', code: 'QA', flag: '🇶🇦' },
    { name: 'Romania', dialCode: '+40', code: 'RO', flag: '🇷🇴' },
    { name: 'Russian Federation', dialCode: '+7', code: 'RU', flag: '🇷🇺' },
    { name: 'Saudi Arabia', dialCode: '+966', code: 'SA', flag: '🇸🇦' },
    { name: 'Sudan', dialCode: '+249', code: 'SD', flag: '🇸🇩' },
    { name: 'Singapore', dialCode: '+65', code: 'SG', flag: '🇸🇬' },
    { name: 'El Salvador', dialCode: '+503', code: 'SV', flag: '🇸🇻' },
    { name: 'Serbia', dialCode: '+381', code: 'RS', flag: '🇷🇸' },
    { name: 'Slovakia', dialCode: '+421', code: 'SK', flag: '🇸🇰' },
    { name: 'Slovenia', dialCode: '+386', code: 'SI', flag: '🇸🇮' },
    { name: 'Sweden', dialCode: '+46', code: 'SE', flag: '🇸🇪' },
    { name: 'Syrian Arab Republic', dialCode: '+963', code: 'SY', flag: '🇸🇾' },
    { name: 'Thailand', dialCode: '+66', code: 'TH', flag: '🇹🇭' },
    { name: 'Turkey', dialCode: '+90', code: 'TR', flag: '🇹🇷' },
    { name: 'Tanzania, United Republic of', dialCode: '+255', code: 'TZ', flag: '🇹🇿' },
    { name: 'Uganda', dialCode: '+256', code: 'UG', flag: '🇺🇬' },
    { name: 'Ukraine', dialCode: '+380', code: 'UA', flag: '🇺🇦' },
    { name: 'Uruguay', dialCode: '+598', code: 'UY', flag: '🇺🇾' },
    { name: 'United States', dialCode: '+1', code: 'US', flag: '🇺🇸' },
    { name: 'Uzbekistan', dialCode: '+998', code: 'UZ', flag: '🇺🇿' },
    { name: 'Holy See (Vatican City State)', dialCode: '+379', code: 'VA', flag: '🇻🇦' },
    { name: 'Venezuela, Bolivarian Republic of', dialCode: '+58', code: 'VE', flag: '🇻🇪' },
    { name: 'Viet Nam', dialCode: '+84', code: 'VN', flag: '🇻🇳' },
    { name: 'South Africa', dialCode: '+27', code: 'ZA', flag: '🇿🇦' },
    { name: 'Zimbabwe', dialCode: '+263', code: 'ZW', flag: '🇿🇼' },
  ];


  countryFilter = '';
  selectedDialCode = '+966';
  tryDemoForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[\p{Letter}][\p{Letter} .'\-]*(?:[\p{Letter}])$/u)]],
    email: ['', [Validators.required, Validators.pattern('^(?=[a-zA-Z0-9._%+-]*[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    dialCode: ['+966', Validators.required],
    phoneNumber: ['',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(4),
        Validators.maxLength(17)
      ]
    ],
    message: ['', [Validators.required, Validators.maxLength(500), Validators.pattern(/^[^\s].*[^\s]$/)]],
    captcha: [''],
  });

  ngOnInit(): void {

  }

  // onCaptchaResolved(token: any) {
  //   this.captchaVerified = true;
  //   this.captchaToken = token;
  //   this.tryDemoForm.patchValue({ captcha: token });
  // }

   allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow only digits (0–9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  get fullPhoneNumber(): string {
    const dialCode = this.tryDemoForm.get('dialCode')?.value || '';
    const number = this.tryDemoForm.get('phoneNumber')?.value || '';
    return dialCode + number;
  }

  filteredCountries() {
    const filter = this.countryFilter.toLowerCase();
    return this.countries.filter(c =>
      c.name.toLowerCase().includes(filter) ||
      c.dialCode.includes(filter)
    );
  }

  getSelectedCountry() {
    const code = this.tryDemoForm.get('dialCode')?.value;
    return this.filteredCountries().find(c => c.dialCode === code);
  }

  compareDialCode = (a: any, b: any) => a === b;

  onPhoneKeyDown(event: KeyboardEvent) {
    const allowed = [
      'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'
    ];
    // Allow navigation and deletion keys
    if (allowed.includes(event.key)) return;

    // Allow digits 0–9
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault(); // Block non-digit keystrokes
    }
  }

  onPhonePaste(event: ClipboardEvent) {
    const paste = event.clipboardData?.getData('text') ?? '';
    // If paste contains any non-digit characters, block it
    if (!/^[0-9]+$/.test(paste)) {
      event.preventDefault();
    }
  }

  // submitTryDemoForm() {
  //   if (this.tryDemoForm.valid) {
  //     this.isLoading.set(true);
  //     const payload: RequestDemo = {
  //       name: this.tryDemoForm.get('name')?.value,
  //       email: this.tryDemoForm.get('email')?.value,
  //       phoneNumber: this.fullPhoneNumber,
  //       message: this.tryDemoForm.get('message')?.value,
  //       captcha:this.tryDemoForm.get('captcha')?.value
  //     };
  //     this._hiveOwnService.getTryDemo(payload).subscribe({
  //       next: (res: any) => {
  //         this.isLoading.set(false);
  //         this._snackBar.open(res.message || 'Request sent successfully!', 'Ok', { duration: 4000 });
  //         this.tryDemoForm.reset({
  //           dialCode: '+966'
  //         });
  //       }, error: (err) => {
  //         this.isLoading.set(false);
  //         this._snackBar.open(err.error.message || 'Something went wrong', 'Ok', { duration: 3000 });
  //       }
  //     })
  //   }
  // }

  submitTryDemoForm() {
    if (this.tryDemoForm.invalid) {
      this.tryDemoForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this._recaptchaV3Service.execute('submit_demo').subscribe({
      next: token => {
        this.tryDemoForm.patchValue({ captcha: token });
        const payload: RequestDemo = {
          name: this.tryDemoForm.get('name')?.value,
          email: this.tryDemoForm.get('email')?.value,
          phoneNumber: this.fullPhoneNumber,
          message: this.tryDemoForm.get('message')?.value,
          captcha: this.tryDemoForm.get('captcha')?.value
        };

        this._hiveOwnService.getTryDemo(payload).subscribe({
          next: res => {
            this.isLoading.set(false);
            this._snackBar.open(res.message || 'Request sent successfully!', 'OK', { duration: 4000 });
            this.tryDemoForm.reset({
              dialCode: '+966'
            });
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
