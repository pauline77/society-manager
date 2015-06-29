if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="../../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var poste_1 = require('components/poste');
var EmployeItem = (function () {
    function EmployeItem(poste) {
        this.employeForm = new angular2_1.ControlGroup({
            nom: new angular2_1.Control("", angular2_1.Validators.required),
            prenom: new angular2_1.Control("", angular2_1.Validators.required),
            ddn: new angular2_1.Control("", angular2_1.Validators.required)
        });
        this.poste = poste;
    }
    EmployeItem.prototype.addEmploye = function (e) {
        e.preventDefault();
        if (this.employeForm.valid) {
        }
        else {
            console.error("invalid form", this.employeForm);
        }
    };
    EmployeItem = __decorate([
        angular2_1.Component({
            selector: 'departement'
        }),
        angular2_1.View({
            directives: [angular2_1.formDirectives],
            template: "\n        <form [ng-form-model]='employeForm' [class.invalid]='!employeForm.valid'>\n            <p>Nom <input type='text' ng-control='nom'></p>\n            <p>Pr\u00E9nom <input type='text' ng-control='prenom'></p>\n            <p>Date de naissance <input type='text' ng-control='ddn'></p>\n            <p>Sexe <select><option>Homme</option><option>Femme</option></select></p>\n            <button (click)='addEmploye($event)'>Ajouter</button>\n        </form>"
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [poste_1.Poste])
    ], EmployeItem);
    return EmployeItem;
})();
exports.EmployeItem = EmployeItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZW1wbG95ZUl0ZW0udHMiXSwibmFtZXMiOlsiRW1wbG95ZUl0ZW0iLCJFbXBsb3llSXRlbS5jb25zdHJ1Y3RvciIsIkVtcGxveWVJdGVtLmFkZEVtcGxveWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSwrQ0FEK0M7QUFDL0MseUJBQTJHLG1CQUFtQixDQUFDLENBQUE7QUFDL0gsc0JBQW9CLGtCQUFrQixDQUFDLENBQUE7QUFHdkM7SUFtQklBLHFCQUFzQkEsS0FBWUE7UUFDOUJDLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLHVCQUFZQSxDQUFDQTtZQUNoQ0EsR0FBR0EsRUFBRUEsSUFBSUEsa0JBQU9BLENBQUNBLEVBQUVBLEVBQUVBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUN6Q0EsTUFBTUEsRUFBRUEsSUFBSUEsa0JBQU9BLENBQUNBLEVBQUVBLEVBQUVBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUM1Q0EsR0FBR0EsRUFBRUEsSUFBSUEsa0JBQU9BLENBQUNBLEVBQUVBLEVBQUVBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtTQUM1Q0EsQ0FBQ0EsQ0FBQ0E7UUFDSEEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURELGdDQUFVQSxHQUFWQSxVQUFXQSxDQUFDQTtRQUNSRSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUNuQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFNUJBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ0pBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBQ3BEQSxDQUFDQTtJQUNMQSxDQUFDQTtJQW5DTEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1NBQzFCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBY0EsQ0FBQ0E7WUFDNUJBLFFBQVFBLEVBQUVBLGdkQU9FQTtTQUNmQSxDQUFDQTtRQU1jQSxXQUFDQSxpQkFBTUEsRUFBRUEsQ0FBQUE7O29CQWlCeEJBO0lBQURBLGtCQUFDQTtBQUFEQSxDQXBDQSxBQW9DQ0EsSUFBQTtBQXRCWSxtQkFBVyxjQXNCdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2VtcGxveWVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgTmdGb3IsIFBhcmVudCwgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtQb3N0ZX0gZnJvbSAnY29tcG9uZW50cy9wb3N0ZSc7XG4vLyBpbXBvcnQge0N1c3RvbVZhbGlkYXRvcnN9IGZyb20gJ3ZhbGlkYXRvcnMvZW1wbG95ZVZhbGlkYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZGVwYXJ0ZW1lbnQnXG59KVxuQFZpZXcoe1xuICAgIGRpcmVjdGl2ZXM6IFtmb3JtRGlyZWN0aXZlc10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGZvcm0gW25nLWZvcm0tbW9kZWxdPSdlbXBsb3llRm9ybScgW2NsYXNzLmludmFsaWRdPSchZW1wbG95ZUZvcm0udmFsaWQnPlxuICAgICAgICAgICAgPHA+Tm9tIDxpbnB1dCB0eXBlPSd0ZXh0JyBuZy1jb250cm9sPSdub20nPjwvcD5cbiAgICAgICAgICAgIDxwPlByw6lub20gPGlucHV0IHR5cGU9J3RleHQnIG5nLWNvbnRyb2w9J3ByZW5vbSc+PC9wPlxuICAgICAgICAgICAgPHA+RGF0ZSBkZSBuYWlzc2FuY2UgPGlucHV0IHR5cGU9J3RleHQnIG5nLWNvbnRyb2w9J2Rkbic+PC9wPlxuICAgICAgICAgICAgPHA+U2V4ZSA8c2VsZWN0PjxvcHRpb24+SG9tbWU8L29wdGlvbj48b3B0aW9uPkZlbW1lPC9vcHRpb24+PC9zZWxlY3Q+PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPSdhZGRFbXBsb3llKCRldmVudCknPkFqb3V0ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPmBcbn0pXG5leHBvcnQgY2xhc3MgRW1wbG95ZUl0ZW1cbntcbiAgICBwcml2YXRlIHBvc3RlOiBQb3N0ZTtcbiAgICBwcml2YXRlIGVtcGxveWVGb3JtOkNvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKEBQYXJlbnQoKSBwb3N0ZTogUG9zdGUpIHtcbiAgICAgICAgdGhpcy5lbXBsb3llRm9ybSA9IG5ldyBDb250cm9sR3JvdXAoe1xuICAgICAgICAgICAgbm9tOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSwgLy8gcHJlLWV4aXN0aW5nIHZhbGlkYXRvclxuICAgICAgICAgICAgcHJlbm9tOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgIGRkbjogbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucG9zdGUgPSBwb3N0ZTtcbiAgICB9XG5cbiAgICBhZGRFbXBsb3llKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZih0aGlzLmVtcGxveWVGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcbiAgICAgICAgICAgIC8vIHRoaXMucG9zdGUuYWRkRW1wbG95ZSh0aGlzLm5vbSx0aGlzLnByZW5vbSx0aGlzLmRkbix0aGlzLnNleGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLmVtcGxveWVGb3JtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==