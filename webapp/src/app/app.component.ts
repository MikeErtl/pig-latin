import { Component } from '@angular/core';

export class Translation {
  english: string;
  pigLatin: string;
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent  { 
  title = 'Pig Latin Converter';
  enterEnglishInstruct = 'English:'; 
  pigLatinInstruct = 'Pig Latin:'
  translation: Translation = {
      english: '',
      pigLatin: ''
  };
}

