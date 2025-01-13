import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { lenguajes } from './Common/GlobalVariables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'miguel-web ';

  constructor(private router: Router, private translate: TranslateService) {
    const lenguajeNavegador = window.navigator.language;
    this.translate.addLangs([lenguajes.es.toString(), lenguajes.en.toString()]);
    this.translate.setDefaultLang('es');
    if (lenguajeNavegador.toString().indexOf('en') !== -1) {
      this.translate.use(lenguajes.en.toString());
    } else {
      this.translate.use(lenguajes.es.toString());
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
