import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { frases } from '../../Common/GlobalVariables';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.scss'],
})
export class ConfirmDeleteDialogComponent implements OnInit {
  fraseHome: string[] = [frases.es, frases.en, frases.ch];
  idiomaPagina: string = 'es';
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang;
    });
  }
  ngOnInit(): void {
    this.idiomaPagina = this.translate.currentLang;
  }
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
