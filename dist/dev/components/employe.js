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
var Employe = (function () {
    function Employe(poste, nom, prenom, ddn, sexe) {
        this.poste = poste;
        this.nom = nom;
        this.prenom = prenom;
        this.ddn = ddn;
        this.sexe = sexe;
    }
    Employe.prototype.getNom = function () {
        return this.nom;
    };
    Employe.prototype.getPrenom = function () {
        return this.prenom;
    };
    Employe.prototype.getDdn = function () {
        return this.ddn;
    };
    Employe.prototype.getSexe = function () {
        return this.sexe;
    };
    Employe.prototype.getPoste = function () {
        return this.poste;
    };
    Employe = __decorate([
        angular2_1.Component({
            selector: 'departement'
        }),
        angular2_1.View({
            templateUrl: ''
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [poste_1.Poste, String, String, Date, String])
    ], Employe);
    return Employe;
})();
exports.Employe = Employe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZW1wbG95ZS50cyJdLCJuYW1lcyI6WyJFbXBsb3llIiwiRW1wbG95ZS5jb25zdHJ1Y3RvciIsIkVtcGxveWUuZ2V0Tm9tIiwiRW1wbG95ZS5nZXRQcmVub20iLCJFbXBsb3llLmdldERkbiIsIkVtcGxveWUuZ2V0U2V4ZSIsIkVtcGxveWUuZ2V0UG9zdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSwrQ0FEK0M7QUFDL0MseUJBQXdELG1CQUFtQixDQUFDLENBQUE7QUFDNUUsc0JBQW9CLGtCQUFrQixDQUFDLENBQUE7QUFFdkM7SUFjSUEsaUJBQXNCQSxLQUFZQSxFQUFFQSxHQUFXQSxFQUFFQSxNQUFjQSxFQUFFQSxHQUFTQSxFQUFFQSxJQUFZQTtRQUNwRkMsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ2ZBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNmQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFREQsd0JBQU1BLEdBQU5BO1FBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBO0lBQ3BCQSxDQUFDQTtJQUVERiwyQkFBU0EsR0FBVEE7UUFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURILHdCQUFNQSxHQUFOQTtRQUNJSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQTtJQUNwQkEsQ0FBQ0E7SUFFREoseUJBQU9BLEdBQVBBO1FBQ0lLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO0lBQ3JCQSxDQUFDQTtJQUVETCwwQkFBUUEsR0FBUkE7UUFDSU0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBeENMTjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsYUFBYUE7U0FDeEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLEVBQUVBO1NBQ2hCQSxDQUFDQTtRQVNjQSxXQUFDQSxpQkFBTUEsRUFBRUEsQ0FBQUE7O2dCQTJCeEJBO0lBQURBLGNBQUNBO0FBQURBLENBekNBLEFBeUNDQSxJQUFBO0FBbkNZLGVBQU8sVUFtQ25CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9lbXBsb3llLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgTmdGb3IsIFBhcmVudH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtQb3N0ZX0gZnJvbSAnY29tcG9uZW50cy9wb3N0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlcGFydGVtZW50J1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVcbntcbiAgICBwcml2YXRlIG5vbTogU3RyaW5nO1xuICAgIHByaXZhdGUgcHJlbm9tOiBTdHJpbmc7XG4gICAgcHJpdmF0ZSBkZG46IERhdGU7XG4gICAgcHJpdmF0ZSBzZXhlOiBTdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3N0ZTogUG9zdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihAUGFyZW50KCkgcG9zdGU6IFBvc3RlLCBub206IFN0cmluZywgcHJlbm9tOiBTdHJpbmcsIGRkbjogRGF0ZSwgc2V4ZTogU3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9zdGUgPSBwb3N0ZTtcbiAgICAgICAgdGhpcy5ub20gPSBub207XG4gICAgICAgIHRoaXMucHJlbm9tID0gcHJlbm9tO1xuICAgICAgICB0aGlzLmRkbiA9IGRkbjtcbiAgICAgICAgdGhpcy5zZXhlID0gc2V4ZTtcbiAgICB9XG5cbiAgICBnZXROb20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vbTtcbiAgICB9XG5cbiAgICBnZXRQcmVub20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZW5vbTtcbiAgICB9XG5cbiAgICBnZXREZG4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRkbjtcbiAgICB9XG5cbiAgICBnZXRTZXhlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXhlO1xuICAgIH1cblxuICAgIGdldFBvc3RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0ZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=