"use strict";
var app_component_1 = require("./app.component");
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
    });
    // Sanity test - the component loaded!
    it('should create component', function () { return expect(comp).toBeDefined(); });
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
//# sourceMappingURL=app.component.spec.js.map