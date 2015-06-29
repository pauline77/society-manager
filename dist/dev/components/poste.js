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
var departement_1 = require('components/departement');
var Poste = (function () {
    function Poste(departement, libelle) {
        this.departement = departement;
        this.libelle = libelle;
    }
    Poste.prototype.getLibelle = function () {
        return this.libelle;
    };
    Poste.prototype.getDepartement = function () {
        return this.departement;
    };
    Poste.prototype.getEmployes = function () {
        return this.employes;
    };
    Poste.prototype.addEmploye = function (nom, prenom, ddn, sexe) {
        this.employes.push(new Employe(nom, prenom, ddn, sexe));
    };
    Poste = __decorate([
        angular2_1.Component({
            selector: 'poste'
        }),
        angular2_1.View({
            templateUrl: '',
            directives: [angular2_1.forwardRef(function () { return EmployeItem; })]
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [departement_1.Departement, String])
    ], Poste);
    return Poste;
})();
exports.Poste = Poste;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcG9zdGUudHMiXSwibmFtZXMiOlsiUG9zdGUiLCJQb3N0ZS5jb25zdHJ1Y3RvciIsIlBvc3RlLmdldExpYmVsbGUiLCJQb3N0ZS5nZXREZXBhcnRlbWVudCIsIlBvc3RlLmdldEVtcGxveWVzIiwiUG9zdGUuYWRkRW1wbG95ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUNBLCtDQUQrQztBQUMvQyx5QkFBb0UsbUJBQW1CLENBQUMsQ0FBQTtBQUN4Riw0QkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUduRDtJQWFJQSxlQUFzQkEsV0FBd0JBLEVBQUVBLE9BQWVBO1FBQzNEQyxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUMvQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7SUFDM0JBLENBQUNBO0lBRURELDBCQUFVQSxHQUFWQTtRQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFFREYsOEJBQWNBLEdBQWRBO1FBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO0lBQzVCQSxDQUFDQTtJQUVESCwyQkFBV0EsR0FBWEE7UUFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBRURKLDBCQUFVQSxHQUFWQSxVQUFXQSxHQUFXQSxFQUFFQSxNQUFjQSxFQUFFQSxHQUFTQSxFQUFFQSxJQUFZQTtRQUMzREssSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsTUFBTUEsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDNURBLENBQUNBO0lBaENMTDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsT0FBT0E7U0FDbEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLEVBQUVBO1lBQ2ZBLFVBQVVBLEVBQUVBLENBQUNBLHFCQUFVQSxDQUFDQSxjQUFJQSxPQUFBQSxXQUFXQSxFQUFYQSxDQUFXQSxDQUFDQSxDQUFDQTtTQUMxQ0EsQ0FBQ0E7UUFPY0EsV0FBQ0EsaUJBQU1BLEVBQUVBLENBQUFBOztjQW9CeEJBO0lBQURBLFlBQUNBO0FBQURBLENBakNBLEFBaUNDQSxJQUFBO0FBMUJZLGFBQUssUUEwQmpCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wb3N0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yLCBQYXJlbnQsIGZvcndhcmRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7RGVwYXJ0ZW1lbnR9IGZyb20gJ2NvbXBvbmVudHMvZGVwYXJ0ZW1lbnQnO1xuaW1wb3J0IHtFbXBsb3llSXRlbX0gZnJvbSAnY29tcG9uZW50cy9lbXBsb3llSXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Bvc3RlJ1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcnLFxuICBkaXJlY3RpdmVzOiBbZm9yd2FyZFJlZigoKT0+RW1wbG95ZUl0ZW0pXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0ZVxue1xuICAgIHByaXZhdGUgbGliZWxsZTogU3RyaW5nO1xuICAgIHByaXZhdGUgZW1wbG95ZXM6IEFycmF5PEVtcGxveWVJdGVtPjtcbiAgICBwcml2YXRlIGRlcGFydGVtZW50OiBEZXBhcnRlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKEBQYXJlbnQoKSBkZXBhcnRlbWVudDogRGVwYXJ0ZW1lbnQsIGxpYmVsbGU6IFN0cmluZykge1xuICAgICAgICB0aGlzLmRlcGFydGVtZW50ID0gZGVwYXJ0ZW1lbnQ7XG4gICAgICAgIHRoaXMubGliZWxsZSA9IGxpYmVsbGU7XG4gICAgfVxuXG4gICAgZ2V0TGliZWxsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGliZWxsZTtcbiAgICB9XG5cbiAgICBnZXREZXBhcnRlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0ZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0RW1wbG95ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcGxveWVzO1xuICAgIH1cblxuICAgIGFkZEVtcGxveWUobm9tOiBTdHJpbmcsIHByZW5vbTogU3RyaW5nLCBkZG46IERhdGUsIHNleGU6IFN0cmluZykge1xuICAgICAgICB0aGlzLmVtcGxveWVzLnB1c2gobmV3IEVtcGxveWUobm9tLCBwcmVub20sIGRkbiwgc2V4ZSkpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==