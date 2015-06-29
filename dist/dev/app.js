/// <reference path="../typings/tsd.d.ts" />
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
var router_1 = require('angular2/router');
var angular2_1 = require('angular2/angular2');
var employe_1 = require('class/employe');
var poste_1 = require('class/poste');
var departement_1 = require('class/departement');
var organisationItem_1 = require('components/organisationItem');
var datasService_1 = require('services/datasService');
angular2_1.forwardRef;
var Society = (function () {
    function Society(datasService) {
        this.datasService = datasService;
        this.departements = this.datasService.getDatas();
        console.log(this.departements);
    }
    Society.prototype.afficherPoste = function (poste) {
        this.departementDetail;
    };
    Society.prototype.registerDepartementDetail = function (departementDetail) {
        this.departementDetail = departementDetail;
    };
    Society = __decorate([
        angular2_1.Component({
            selector: 'society',
            appInjector: [datasService_1.DatasService]
        }),
        router_1.RouteConfig([
            { path: '/departement:{{}}', component: departement_1.Departement, as: 'departement' },
            { path: '/poste', component: poste_1.Poste, as: 'poste' },
            { path: '/employe', component: employe_1.Employe, as: 'employe' }
        ]),
        angular2_1.View({
            templateUrl: 'templates/index.html',
            directives: [angular2_1.NgFor, organisationItem_1.DepartementItem, organisationItem_1.PosteItem, angular2_1.forwardRef(function () { return DepartementDetail; })]
        }), 
        __metadata('design:paramtypes', [datasService_1.DatasService])
    ], Society);
    return Society;
})();
var DepartementDetail = (function () {
    function DepartementDetail(society) {
        this.society = society;
        this.society.registerDepartementDetail(this);
    }
    DepartementDetail = __decorate([
        angular2_1.Component({
            selector: 'departement',
            appInjector: [datasService_1.DatasService]
        }),
        angular2_1.View({
            templateUrl: 'templates/departement.html',
            directives: [angular2_1.NgFor, organisationItem_1.PosteItem]
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [Society])
    ], DepartementDetail);
    return DepartementDetail;
})();
angular2_1.bootstrap(Society, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJTb2NpZXR5IiwiU29jaWV0eS5jb25zdHJ1Y3RvciIsIlNvY2lldHkuYWZmaWNoZXJQb3N0ZSIsIlNvY2lldHkucmVnaXN0ZXJEZXBhcnRlbWVudERldGFpbCIsIkRlcGFydGVtZW50RGV0YWlsIiwiRGVwYXJ0ZW1lbnREZXRhaWwuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLHVCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpGLHlCQUFvRSxtQkFBbUIsQ0FBQyxDQUFBO0FBRXhGLHdCQUFzQixlQUFlLENBQUMsQ0FBQTtBQUN0QyxzQkFBb0IsYUFBYSxDQUFDLENBQUE7QUFDbEMsNEJBQTBCLG1CQUFtQixDQUFDLENBQUE7QUFFOUMsaUNBQXNELDZCQUE2QixDQUFDLENBQUE7QUFHcEYsNkJBQTJCLHVCQUF1QixDQUFDLENBQUE7QUFBQSxxQkFBVSxDQUFBO0FBRTdEO0lBa0JDQSxpQkFBWUEsWUFBMEJBO1FBQ3JDQyxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQTtRQUNqQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDakRBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO0lBQ2hDQSxDQUFDQTtJQUVERCwrQkFBYUEsR0FBYkEsVUFBY0EsS0FBS0E7UUFDaEJFLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0RGLDJDQUF5QkEsR0FBekJBLFVBQTBCQSxpQkFBb0NBO1FBQzdERyxJQUFJQSxDQUFDQSxpQkFBaUJBLEdBQUdBLGlCQUFpQkEsQ0FBQ0E7SUFDNUNBLENBQUNBO0lBN0JISDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUkEsUUFBUUEsRUFBRUEsU0FBU0E7WUFDbkJBLFdBQVdBLEVBQUVBLENBQUNBLDJCQUFZQSxDQUFDQTtTQUM3QkEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLG1CQUFtQkEsRUFBRUEsU0FBU0EsRUFBRUEseUJBQVdBLEVBQUVBLEVBQUVBLEVBQUVBLGFBQWFBLEVBQUNBO1lBQ3ZFQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFDQTtZQUNoREEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsaUJBQU9BLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLEVBQUNBO1NBQ3REQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSxzQkFBc0JBO1lBQ2xDQSxVQUFVQSxFQUFFQSxDQUFDQSxnQkFBS0EsRUFBRUEsa0NBQWVBLEVBQUVBLDRCQUFTQSxFQUFFQSxxQkFBVUEsQ0FBQ0EsY0FBS0EsT0FBQUEsaUJBQWlCQSxFQUFqQkEsQ0FBaUJBLENBQUNBLENBQUNBO1NBQ3JGQSxDQUFDQTs7Z0JBa0JEQTtJQUFEQSxjQUFDQTtBQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtBQUVEO0lBV0VJLDJCQUFzQkEsT0FBZ0JBO1FBQ3JDQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUN2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EseUJBQXlCQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFkSEQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1JBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxXQUFXQSxFQUFFQSxDQUFDQSwyQkFBWUEsQ0FBQ0E7U0FDN0JBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLDRCQUE0QkE7WUFDeENBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxFQUFFQSw0QkFBU0EsQ0FBQ0E7U0FDaENBLENBQUNBO1FBSVlBLFdBQUNBLGlCQUFNQSxFQUFFQSxDQUFBQTs7MEJBS3RCQTtJQUFEQSx3QkFBQ0E7QUFBREEsQ0FoQkEsQUFnQkNBLElBQUE7QUFDRCxvQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLDBCQUFpQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIHJvdXRlckluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgTmdGb3IsIFBhcmVudCwgZm9yd2FyZFJlZn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xyXG5cclxuaW1wb3J0IHtFbXBsb3llfSBmcm9tICdjbGFzcy9lbXBsb3llJztcclxuaW1wb3J0IHtQb3N0ZX0gZnJvbSAnY2xhc3MvcG9zdGUnO1xyXG5pbXBvcnQge0RlcGFydGVtZW50fSBmcm9tICdjbGFzcy9kZXBhcnRlbWVudCc7XHJcblxyXG5pbXBvcnQge0RlcGFydGVtZW50SXRlbSwgUG9zdGVJdGVtLCBFbXBsb3llSXRlbX0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzYXRpb25JdGVtJztcclxuXHJcbmltcG9ydCB7U3RvcmFnZVNlcnZpY2V9IGZyb20gJ3NlcnZpY2VzL3N0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhc1NlcnZpY2V9IGZyb20gJ3NlcnZpY2VzL2RhdGFzU2VydmljZSc7Zm9yd2FyZFJlZlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgXHRzZWxlY3RvcjogJ3NvY2lldHknLFxyXG4gIFx0YXBwSW5qZWN0b3I6IFtEYXRhc1NlcnZpY2VdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgeyBwYXRoOiAnL2RlcGFydGVtZW50Ont7fX0nLCBjb21wb25lbnQ6IERlcGFydGVtZW50LCBhczogJ2RlcGFydGVtZW50J30sXHJcbiAgeyBwYXRoOiAnL3Bvc3RlJywgY29tcG9uZW50OiBQb3N0ZSwgYXM6ICdwb3N0ZSd9LFxyXG4gIHsgcGF0aDogJy9lbXBsb3llJywgY29tcG9uZW50OiBFbXBsb3llLCBhczonZW1wbG95ZSd9XHJcbl0pXHJcbkBWaWV3KHtcclxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pbmRleC5odG1sJyxcclxuICBcdGRpcmVjdGl2ZXM6IFtOZ0ZvciwgRGVwYXJ0ZW1lbnRJdGVtLCBQb3N0ZUl0ZW0sIGZvcndhcmRSZWYoKCk9PiBEZXBhcnRlbWVudERldGFpbCldXHJcbn0pXHJcbmNsYXNzIFNvY2lldHkge1xyXG5cdGRlcGFydGVtZW50czogQXJyYXk8RGVwYXJ0ZW1lbnQ+O1xyXG5cdGRhdGFzU2VydmljZTogRGF0YXNTZXJ2aWNlO1xyXG5cdGRlcGFydGVtZW50RGV0YWlsOiBEZXBhcnRlbWVudERldGFpbDtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YXNTZXJ2aWNlOiBEYXRhc1NlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGF0YXNTZXJ2aWNlID0gZGF0YXNTZXJ2aWNlO1xyXG5cdFx0dGhpcy5kZXBhcnRlbWVudHMgPSB0aGlzLmRhdGFzU2VydmljZS5nZXREYXRhcygpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5kZXBhcnRlbWVudHMpO1xyXG5cdH1cclxuXHJcblx0YWZmaWNoZXJQb3N0ZShwb3N0ZSkge1xyXG4gICAgdGhpcy5kZXBhcnRlbWVudERldGFpbDtcclxuICB9XHJcbiBcdHJlZ2lzdGVyRGVwYXJ0ZW1lbnREZXRhaWwoZGVwYXJ0ZW1lbnREZXRhaWw6IERlcGFydGVtZW50RGV0YWlsKXtcclxuIFx0XHR0aGlzLmRlcGFydGVtZW50RGV0YWlsID0gZGVwYXJ0ZW1lbnREZXRhaWw7XHJcbiBcdH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgXHRzZWxlY3RvcjogJ2RlcGFydGVtZW50JyxcclxuICBcdGFwcEluamVjdG9yOiBbRGF0YXNTZXJ2aWNlXVxyXG59KVxyXG5AVmlldyh7XHJcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZGVwYXJ0ZW1lbnQuaHRtbCcsXHJcbiAgXHRkaXJlY3RpdmVzOiBbTmdGb3IsIFBvc3RlSXRlbV1cclxufSlcclxuY2xhc3MgRGVwYXJ0ZW1lbnREZXRhaWwge1xyXG5cdHNvY2lldHk6U29jaWV0eTtcclxuXHJcbiBcdGNvbnN0cnVjdG9yKEBQYXJlbnQoKSBzb2NpZXR5OiBTb2NpZXR5KXtcclxuIFx0XHR0aGlzLnNvY2lldHkgPSBzb2NpZXR5O1xyXG4gXHRcdHRoaXMuc29jaWV0eS5yZWdpc3RlckRlcGFydGVtZW50RGV0YWlsKHRoaXMpO1xyXG4gXHR9XHJcblxyXG59IFxyXG5ib290c3RyYXAoU29jaWV0eSwgW3JvdXRlckluamVjdGFibGVzXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==