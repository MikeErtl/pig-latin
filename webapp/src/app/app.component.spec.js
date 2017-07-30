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
    it("translates a simple sentence using translateEnglishSentenceToPigLatin()", function () {
        var eng = "Cat";
        var pigLatin = comp.translateEnglishSentenceToPigLatin(eng);
        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(pigLatin).toEqual("Catay");
    });
});
//# sourceMappingURL=app.component.spec.js.map