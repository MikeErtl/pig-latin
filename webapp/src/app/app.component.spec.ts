import { AppComponent }  from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  // Sanity test - the component loaded!
  it('should create component', () => expect(comp).toBeDefined() );

  // Test complete translation function for a sentence 
  it("translates a simple sentence using translateEnglishSentenceToPigLatin()", function () { //MIKE:TODO Just a test
        var eng = "Cat";
        var pigLatin = comp.translateEnglishSentenceToPigLatin(eng);

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(pigLatin).toEqual("Catay");
    });
 


});
