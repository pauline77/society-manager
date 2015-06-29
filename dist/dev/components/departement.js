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
/// <reference path="../../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var poste_1 = require('components/poste');
var Departement = (function () {
    function Departement(libelle) {
        this.libelle = libelle;
        this.postes = [];
    }
    Departement.prototype.getLibelle = function () {
        return this.libelle;
    };
    Departement.prototype.getPostes = function () {
        return this.postes;
    };
    Departement.prototype.addPoste = function (libelle) {
        this.postes.push(new poste_1.Poste(this, libelle));
    };
    Departement = __decorate([
        angular2_1.Component({
            selector: 'departement'
        }),
        angular2_1.View({
            templateUrl: '',
            directives: [angular2_1.forwardRef(function () { return Poste; })]
        }), 
        __metadata('design:paramtypes', [String])
    ], Departement);
    return Departement;
})();
exports.Departement = Departement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVwYXJ0ZW1lbnQudHMiXSwibmFtZXMiOlsiRGVwYXJ0ZW1lbnQiLCJEZXBhcnRlbWVudC5jb25zdHJ1Y3RvciIsIkRlcGFydGVtZW50LmdldExpYmVsbGUiLCJEZXBhcnRlbWVudC5nZXRQb3N0ZXMiLCJEZXBhcnRlbWVudC5hZGRQb3N0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUNBLCtDQUQrQztBQUMvQyx5QkFBNEQsbUJBQW1CLENBQUMsQ0FBQTtBQUNoRixzQkFBb0Isa0JBQWtCLENBQUMsQ0FBQTtBQUV2QztJQVlJQSxxQkFBWUEsT0FBZUE7UUFDdkJDLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO1FBQ3ZCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFREQsZ0NBQVVBLEdBQVZBO1FBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO0lBQ3hCQSxDQUFDQTtJQUVERiwrQkFBU0EsR0FBVEE7UUFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURILDhCQUFRQSxHQUFSQSxVQUFTQSxPQUFlQTtRQUNwQkksSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsYUFBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDL0NBLENBQUNBO0lBM0JMSjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsYUFBYUE7U0FDeEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLEVBQUVBO1lBQ2ZBLFVBQVVBLEVBQUVBLENBQUNBLHFCQUFVQSxDQUFDQSxjQUFJQSxPQUFBQSxLQUFLQSxFQUFMQSxDQUFLQSxDQUFDQSxDQUFDQTtTQUNwQ0EsQ0FBQ0E7O29CQXNCREE7SUFBREEsa0JBQUNBO0FBQURBLENBNUJBLEFBNEJDQSxJQUFBO0FBckJZLG1CQUFXLGNBcUJ2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVwYXJ0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0ZvciwgZm9yd2FyZFJlZn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtQb3N0ZX0gZnJvbSAnY29tcG9uZW50cy9wb3N0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlcGFydGVtZW50J1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcnLFxuICBkaXJlY3RpdmVzOiBbZm9yd2FyZFJlZigoKT0+UG9zdGUpXVxufSlcbmV4cG9ydCBjbGFzcyBEZXBhcnRlbWVudFxue1xuICAgIHByaXZhdGUgbGliZWxsZTogU3RyaW5nO1xuICAgIHByaXZhdGUgcG9zdGVzOiBBcnJheTxQb3N0ZT47XG5cbiAgICBjb25zdHJ1Y3RvcihsaWJlbGxlOiBTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5saWJlbGxlID0gbGliZWxsZTtcbiAgICAgICAgdGhpcy5wb3N0ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRMaWJlbGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saWJlbGxlO1xuICAgIH1cblxuICAgIGdldFBvc3RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdGVzO1xuICAgIH1cblxuICAgIGFkZFBvc3RlKGxpYmVsbGU6IFN0cmluZykge1xuICAgICAgICB0aGlzLnBvc3Rlcy5wdXNoKG5ldyBQb3N0ZSh0aGlzLCBsaWJlbGxlKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9