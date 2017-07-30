import { Component } from '@angular/core';

export class Translation {
  english: string;
  pigLatin: string;
}

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent  { 
  translation: Translation = {
      english: '',
      pigLatin: ''
  };

  /**
   * Click handler to initiate the translation
   */
  doTranslation() { 
        let eng = this.translation.english;
        let pig = eng + "war"
        this.translation.pigLatin = pig;
    }

}

