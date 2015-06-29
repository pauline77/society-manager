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
var employe_1 = require('components/employe');
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
        this.employes.push(new employe_1.Employe(this, nom, prenom, ddn, sexe));
    };
    Poste = __decorate([
        angular2_1.Component({
            selector: 'poste'
        }),
        angular2_1.View({
            templateUrl: '',
            directives: [angular2_1.forwardRef(function () { return Employe; })]
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [departement_1.Departement, String])
    ], Poste);
    return Poste;
})();
exports.Poste = Poste;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcG9zdGUudHMiXSwibmFtZXMiOlsiUG9zdGUiLCJQb3N0ZS5jb25zdHJ1Y3RvciIsIlBvc3RlLmdldExpYmVsbGUiLCJQb3N0ZS5nZXREZXBhcnRlbWVudCIsIlBvc3RlLmdldEVtcGxveWVzIiwiUG9zdGUuYWRkRW1wbG95ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUNBLCtDQUQrQztBQUMvQyx5QkFBb0UsbUJBQW1CLENBQUMsQ0FBQTtBQUN4Riw0QkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNuRCx3QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQUUzQztJQWFJQSxlQUFzQkEsV0FBd0JBLEVBQUVBLE9BQWVBO1FBQzNEQyxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUMvQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7SUFDM0JBLENBQUNBO0lBRURELDBCQUFVQSxHQUFWQTtRQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFFREYsOEJBQWNBLEdBQWRBO1FBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO0lBQzVCQSxDQUFDQTtJQUVESCwyQkFBV0EsR0FBWEE7UUFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBRURKLDBCQUFVQSxHQUFWQSxVQUFXQSxHQUFXQSxFQUFFQSxNQUFjQSxFQUFFQSxHQUFTQSxFQUFFQSxJQUFZQTtRQUMzREssSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsaUJBQU9BLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ2xFQSxDQUFDQTtJQWhDTEw7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLE9BQU9BO1NBQ2xCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSxFQUFFQTtZQUNmQSxVQUFVQSxFQUFFQSxDQUFDQSxxQkFBVUEsQ0FBQ0EsY0FBSUEsT0FBQUEsT0FBT0EsRUFBUEEsQ0FBT0EsQ0FBQ0EsQ0FBQ0E7U0FDdENBLENBQUNBO1FBT2NBLFdBQUNBLGlCQUFNQSxFQUFFQSxDQUFBQTs7Y0FvQnhCQTtJQUFEQSxZQUFDQTtBQUFEQSxDQWpDQSxBQWlDQ0EsSUFBQTtBQTFCWSxhQUFLLFFBMEJqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcG9zdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0ZvciwgUGFyZW50LCBmb3J3YXJkUmVmfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0RlcGFydGVtZW50fSBmcm9tICdjb21wb25lbnRzL2RlcGFydGVtZW50JztcbmltcG9ydCB7RW1wbG95ZX0gZnJvbSAnY29tcG9uZW50cy9lbXBsb3llJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9zdGUnXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJycsXG4gIGRpcmVjdGl2ZXM6IFtmb3J3YXJkUmVmKCgpPT5FbXBsb3llKV1cbn0pXG5leHBvcnQgY2xhc3MgUG9zdGVcbntcbiAgICBwcml2YXRlIGxpYmVsbGU6IFN0cmluZztcbiAgICBwcml2YXRlIGVtcGxveWVzOiBBcnJheTxFbXBsb3llPjtcbiAgICBwcml2YXRlIGRlcGFydGVtZW50OiBEZXBhcnRlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKEBQYXJlbnQoKSBkZXBhcnRlbWVudDogRGVwYXJ0ZW1lbnQsIGxpYmVsbGU6IFN0cmluZykge1xuICAgICAgICB0aGlzLmRlcGFydGVtZW50ID0gZGVwYXJ0ZW1lbnQ7XG4gICAgICAgIHRoaXMubGliZWxsZSA9IGxpYmVsbGU7XG4gICAgfVxuXG4gICAgZ2V0TGliZWxsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGliZWxsZTtcbiAgICB9XG5cbiAgICBnZXREZXBhcnRlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0ZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0RW1wbG95ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcGxveWVzO1xuICAgIH1cblxuICAgIGFkZEVtcGxveWUobm9tOiBTdHJpbmcsIHByZW5vbTogU3RyaW5nLCBkZG46IERhdGUsIHNleGU6IFN0cmluZykge1xuICAgICAgICB0aGlzLmVtcGxveWVzLnB1c2gobmV3IEVtcGxveWUodGhpcywgbm9tLCBwcmVub20sIGRkbiwgc2V4ZSkpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==