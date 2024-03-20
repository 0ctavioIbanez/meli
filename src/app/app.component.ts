import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meli';

  constructor(private toast: NgToastService) {
  }

  showSuccess() {
    this.toast.success({ detail: "SUCCESS", summary: 'Your Success Message', duration: 5000 });
  }

  showError() {
    this.toast.error({ detail: "ERROR", summary: 'Your Error Message', sticky: true });
  }

  showInfo() {
    this.toast.info({ detail: "INFO", summary: 'Your Info Message', sticky: true });
  }

  // showWarn() {
  //   this.toast.warn({detail:"WARN",summary:'Your Warn Message',duration:'5000'});
  // }
}
