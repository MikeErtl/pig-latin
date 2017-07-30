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
        //TestBed.compileComponents();//MIKE
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
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map