"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Translation = (function () {
    function Translation() {
    }
    return Translation;
}());
exports.Translation = Translation;
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.translation = {
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
        this.applyWordRule1 = function (word) {
            // default to no change
            var newWord = word;
            var vowelPos = word.match(/[aeiouAEIOU]/);
            // If there is a vowel then move everything up to vowel to end
            if (vowelPos) {
                newWord = word.slice(vowelPos.index) + word.slice(0, vowelPos.index) + "ay";
            }
            return newWord;
        };
        /**
         * Returns the translated word according to rule 2:
         *
         * For words that begin with vowel sounds, one just adds "way" to the end
         *
         * @param word requiring Rule 2 - starts with a vowel
         */
        this.applyWordRule2 = function (word) {
            return word + "way";
        };
        /**
         * Translates one English word into Pig Latin
         * If a separator for example ", " is passed in it is left
         * untranslated. Words start with A-Z or a-z otherwise not translated.
         *
         * @param word One word containing A-Z or a-z
         */
        this.translateEnglishWordToPigLatin = function (word) {
            // Default to no translation of the word
            var newWord = word;
            // Only translate words which only contain a-z of any case
            if (word.match(/^[a-zA-Z]+$/)) {
                // Word contains only letters and so is suitable for translation
                if (word.charAt(0).match(/[a,e,i,o,u]/)) {
                    // Starts with a vowel
                    newWord = _this.applyWordRule2(word);
                }
                else {
                    // Starts with a consonant
                    newWord = _this.applyWordRule1(word);
                }
            }
            return newWord;
        };
        /**
         * Returns the Pig Latin translation of the english word or sentence.
         * @param eng {String} English word or sentence
         * @returns {String} Pig Latin translation
         */
        this.translateEnglishSentenceToPigLatin = function (eng) {
            // Split into array of words and separators
            var wordsArr = eng.split(/\b(?!\s\ )/);
            return wordsArr.map(_this.translateEnglishWordToPigLatin).join('');
        };
        /**
         * Returns warning string if a problem is detected or null if ok
         *
         *
         * @param eng Input string from user
         */
        this.checkUserInput = function (eng) {
            var warning = null;
            if (!eng) {
                warning = "The input for English text is empty";
            }
            return warning;
        };
        /**
         * Click handler to initiate the translation
         */
        this.clickTranslateToPigLatin = function () {
            var eng = _this.translation.english;
            var warn = _this.checkUserInput(eng);
            _this.translation.warning = warn;
            if (!warn) {
                _this.translation.pigLatin = _this.translateEnglishSentenceToPigLatin(eng);
            }
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map