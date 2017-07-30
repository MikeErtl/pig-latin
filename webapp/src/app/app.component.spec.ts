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
    it("translates a sentence with mixed numbers etc using translateEnglishSentenceToPigLatin()", function () { 
        var eng = "The cat acted on 9 of his 9-life world";
        var pigLatin = comp.translateEnglishSentenceToPigLatin(eng);

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(pigLatin).toEqual("eThay atcay actedway onway 9 ofway ishay 9-ifelay orldway");
    });
     
    it("translates 'Pig' in applyWordRule1() correctly", function () { 
        var pigLatin = comp.applyWordRule1("Pig");

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(pigLatin).toEqual("igPay");
    });

    it("doesn't translate ',' in applyWordRule1() ", function () { 
        var pigLatin = comp.applyWordRule1(",");

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(pigLatin).toEqual(",");
    });

    it("translates 'Emu' in applyWordRule2() correctly", function () { 
        var pigLatin = comp.applyWordRule2("Emu");

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(pigLatin).toEqual("Emuway");
    });

    it("translates 'Emu' (rule2) in translateEnglishWordToPigLatin() correctly", function () { 
        var pigLatin = comp.translateEnglishWordToPigLatin("Emu");

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(pigLatin).toEqual("Emuway");
    });

    it("translates 'Pig' (rule1) in translateEnglishWordToPigLatin() correctly", function () { 
        var pigLatin = comp.translateEnglishWordToPigLatin("Pig");

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(pigLatin).toEqual("igPay");
    });

    //TODO: Need to test inserting into the model and applying click handler
    //TODO: Finish more tests, pass null, empty string, mix of caps/lower numbers, comma etc
    //TODO: Test 10 Items appear in History

});
