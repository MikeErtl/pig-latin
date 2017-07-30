import { Component } from '@angular/core';

export class Translation {
  english: string;
  pigLatin: string;
  warning: string;
}

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent  { 
    translation: Translation = {
        english: '',
        pigLatin: '',
        warning: ''
    };

    /**
     * Returns the translated word according to rule 1:
     * 
     * For words that begin with consonants, all letters before the initial vowel are
     * placed at the end of the word sequence. Then, "ay"
     * 
     * @param word requiring Rule 1 - starts with a consonant
     */
    applyWordRule1 = (word:String) => {
        // default to no change
        let newWord = word;
        let vowelPos = word.match(/[aeiouAEIOU]/);

        // If there is a vowel then move everything up to vowel to end
        if (vowelPos) {
            newWord = word.slice(vowelPos.index) + word.slice(0,vowelPos.index) + "ay";
        }
        return newWord;
    }

    /**
     * Returns the translated word according to rule 2:
     * 
     * For words that begin with vowel sounds, one just adds "way" to the end
     * 
     * @param word requiring Rule 2 - starts with a vowel
     */
    applyWordRule2 = (word:String) => {
        return word + "way";
    }

    /**
     * Translates one English word into Pig Latin
     * If a separator for example ", " is passed in it is left
     * untranslated. Words start with A-Z or a-z otherwise not translated.
     * 
     * @param word One word containing A-Z or a-z
     */
    translateEnglishWordToPigLatin = (word:String) => {
        // Default to no translation of the word
        let newWord = word; 

        // Only translate words which only contain a-z of any case
        if (word.match(/^[a-zA-Z]+$/)) {
            // Word contains only letters and so is suitable for translation
            if (word.charAt(0).match(/[a,e,i,o,u]/)) {
                // Starts with a vowel
                newWord = this.applyWordRule2(word);
            }
            else {
                // Starts with a consonant
                newWord = this.applyWordRule1(word);
            }
        }
        return newWord;
    }

    /**
     * Returns the Pig Latin translation of the english word or sentence.
     * @param eng {String} English word or sentence
     * @returns {String} Pig Latin translation
     */
    translateEnglishSentenceToPigLatin = (eng:String) => {
        // Split into array of words and separators
        let wordsArr = eng.split(/\b(?!\s\ )/);
  
        return wordsArr.map(this.translateEnglishWordToPigLatin).join('');
    }

    /**
     * Returns warning string if a problem is detected or null if ok
     * 
     * 
     * @param eng Input string from user
     */
    checkUserInput = (eng:String) => {
        let warning:string = null;
        if (!eng) {
            warning = "The input for English text is empty";
        }
        return warning;
    }

    /**
     * Click handler to initiate the translation
     */
    clickTranslateToPigLatin = () => { 
        let eng = this.translation.english;
        let warn = this.checkUserInput(eng);

        this.translation.warning = warn;
        if (!warn) { // Go ahead with translation
            this.translation.pigLatin = this.translateEnglishSentenceToPigLatin(eng);
        }
    }
}

