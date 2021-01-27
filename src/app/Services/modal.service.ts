import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private modalServive: BsModalService) { }

  showModal(template: TemplateRef<any>, config?: any): void {
    this.modalServive.show(template, { ...this.config, ...config });
  }

  closeModal(): void {
    this.modalServive.hide();
  }

}
