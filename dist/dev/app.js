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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJTb2NpZXR5IiwiU29jaWV0eS5jb25zdHJ1Y3RvciIsIlNvY2lldHkuYWZmaWNoZXJQb3N0ZSIsIlNvY2lldHkucmVnaXN0ZXJEZXBhcnRlbWVudERldGFpbCIsIkRlcGFydGVtZW50RGV0YWlsIiwiRGVwYXJ0ZW1lbnREZXRhaWwuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLHVCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpGLHlCQUFvRSxtQkFBbUIsQ0FBQyxDQUFBO0FBRXhGLHdCQUFzQixlQUFlLENBQUMsQ0FBQTtBQUN0QyxzQkFBb0IsYUFBYSxDQUFDLENBQUE7QUFDbEMsNEJBQTBCLG1CQUFtQixDQUFDLENBQUE7QUFFOUMsaUNBQXNELDZCQUE2QixDQUFDLENBQUE7QUFHcEYsNkJBQTJCLHVCQUF1QixDQUFDLENBQUE7QUFBQSxxQkFBVSxDQUFBO0FBRTdEO0lBa0JDQSxpQkFBWUEsWUFBMEJBO1FBQ3JDQyxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQTtRQUNqQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7UUFDakRBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO0lBQ2hDQSxDQUFDQTtJQUVERCwrQkFBYUEsR0FBYkEsVUFBY0EsS0FBS0E7UUFDZkUsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFFRkYsMkNBQXlCQSxHQUF6QkEsVUFBMEJBLGlCQUFvQ0E7UUFDN0RHLElBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsaUJBQWlCQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUE5QkhIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNSQSxRQUFRQSxFQUFFQSxTQUFTQTtZQUNuQkEsV0FBV0EsRUFBRUEsQ0FBQ0EsMkJBQVlBLENBQUNBO1NBQzdCQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQSxTQUFTQSxFQUFFQSx5QkFBV0EsRUFBRUEsRUFBRUEsRUFBRUEsYUFBYUEsRUFBQ0E7WUFDdkVBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUNBO1lBQ2hEQSxFQUFFQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFFQSxTQUFTQSxFQUFFQSxpQkFBT0EsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsRUFBQ0E7U0FDdERBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLHNCQUFzQkE7WUFDbENBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxFQUFFQSxrQ0FBZUEsRUFBRUEsNEJBQVNBLEVBQUVBLHFCQUFVQSxDQUFDQSxjQUFLQSxPQUFBQSxpQkFBaUJBLEVBQWpCQSxDQUFpQkEsQ0FBQ0EsQ0FBQ0E7U0FDckZBLENBQUNBOztnQkFtQkRBO0lBQURBLGNBQUNBO0FBQURBLENBL0JBLEFBK0JDQSxJQUFBO0FBRUQ7SUFXRUksMkJBQXNCQSxPQUFnQkE7UUFDckNDLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO1FBQ3ZCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSx5QkFBeUJBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzlDQSxDQUFDQTtJQWRIRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUkEsUUFBUUEsRUFBRUEsYUFBYUE7WUFDdkJBLFdBQVdBLEVBQUVBLENBQUNBLDJCQUFZQSxDQUFDQTtTQUM3QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsNEJBQTRCQTtZQUN4Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLEVBQUVBLDRCQUFTQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7UUFJWUEsV0FBQ0EsaUJBQU1BLEVBQUVBLENBQUFBOzswQkFLdEJBO0lBQURBLHdCQUFDQTtBQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtBQUNELG9CQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsMEJBQWlCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlck91dGxldCwgUm91dGVyTGluaywgcm91dGVySW5qZWN0YWJsZXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0ZvciwgUGFyZW50LCBmb3J3YXJkUmVmfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcblxyXG5pbXBvcnQge0VtcGxveWV9IGZyb20gJ2NsYXNzL2VtcGxveWUnO1xyXG5pbXBvcnQge1Bvc3RlfSBmcm9tICdjbGFzcy9wb3N0ZSc7XHJcbmltcG9ydCB7RGVwYXJ0ZW1lbnR9IGZyb20gJ2NsYXNzL2RlcGFydGVtZW50JztcclxuXHJcbmltcG9ydCB7RGVwYXJ0ZW1lbnRJdGVtLCBQb3N0ZUl0ZW0sIEVtcGxveWVJdGVtfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNhdGlvbkl0ZW0nO1xyXG5cclxuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnc2VydmljZXMvc3RvcmFnZVNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGFzU2VydmljZX0gZnJvbSAnc2VydmljZXMvZGF0YXNTZXJ2aWNlJztmb3J3YXJkUmVmXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBcdHNlbGVjdG9yOiAnc29jaWV0eScsXHJcbiAgXHRhcHBJbmplY3RvcjogW0RhdGFzU2VydmljZV1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICB7IHBhdGg6ICcvZGVwYXJ0ZW1lbnQ6e3t9fScsIGNvbXBvbmVudDogRGVwYXJ0ZW1lbnQsIGFzOiAnZGVwYXJ0ZW1lbnQnfSxcclxuICB7IHBhdGg6ICcvcG9zdGUnLCBjb21wb25lbnQ6IFBvc3RlLCBhczogJ3Bvc3RlJ30sXHJcbiAgeyBwYXRoOiAnL2VtcGxveWUnLCBjb21wb25lbnQ6IEVtcGxveWUsIGFzOidlbXBsb3llJ31cclxuXSlcclxuQFZpZXcoe1xyXG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2luZGV4Lmh0bWwnLFxyXG4gIFx0ZGlyZWN0aXZlczogW05nRm9yLCBEZXBhcnRlbWVudEl0ZW0sIFBvc3RlSXRlbSwgZm9yd2FyZFJlZigoKT0+IERlcGFydGVtZW50RGV0YWlsKV1cclxufSlcclxuY2xhc3MgU29jaWV0eSB7XHJcblx0ZGVwYXJ0ZW1lbnRzOiBBcnJheTxEZXBhcnRlbWVudD47XHJcblx0ZGF0YXNTZXJ2aWNlOiBEYXRhc1NlcnZpY2U7XHJcblx0ZGVwYXJ0ZW1lbnREZXRhaWw6IERlcGFydGVtZW50RGV0YWlsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhc1NlcnZpY2U6IERhdGFzU2VydmljZSkge1xyXG5cdFx0dGhpcy5kYXRhc1NlcnZpY2UgPSBkYXRhc1NlcnZpY2U7XHJcblx0XHR0aGlzLmRlcGFydGVtZW50cyA9IHRoaXMuZGF0YXNTZXJ2aWNlLmdldERhdGFzKCk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmRlcGFydGVtZW50cyk7XHJcblx0fVxyXG5cclxuXHRhZmZpY2hlclBvc3RlKHBvc3RlKSB7XHJcbiAgICBcdHRoaXMuZGVwYXJ0ZW1lbnREZXRhaWw7XHJcbiAgXHR9XHJcbiAgXHRcclxuIFx0cmVnaXN0ZXJEZXBhcnRlbWVudERldGFpbChkZXBhcnRlbWVudERldGFpbDogRGVwYXJ0ZW1lbnREZXRhaWwpe1xyXG4gXHRcdHRoaXMuZGVwYXJ0ZW1lbnREZXRhaWwgPSBkZXBhcnRlbWVudERldGFpbDtcclxuIFx0fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBcdHNlbGVjdG9yOiAnZGVwYXJ0ZW1lbnQnLFxyXG4gIFx0YXBwSW5qZWN0b3I6IFtEYXRhc1NlcnZpY2VdXHJcbn0pXHJcbkBWaWV3KHtcclxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9kZXBhcnRlbWVudC5odG1sJyxcclxuICBcdGRpcmVjdGl2ZXM6IFtOZ0ZvciwgUG9zdGVJdGVtXVxyXG59KVxyXG5jbGFzcyBEZXBhcnRlbWVudERldGFpbCB7XHJcblx0c29jaWV0eTpTb2NpZXR5O1xyXG5cclxuIFx0Y29uc3RydWN0b3IoQFBhcmVudCgpIHNvY2lldHk6IFNvY2lldHkpe1xyXG4gXHRcdHRoaXMuc29jaWV0eSA9IHNvY2lldHk7XHJcbiBcdFx0dGhpcy5zb2NpZXR5LnJlZ2lzdGVyRGVwYXJ0ZW1lbnREZXRhaWwodGhpcyk7XHJcbiBcdH1cclxuXHJcbn0gXHJcbmJvb3RzdHJhcChTb2NpZXR5LCBbcm91dGVySW5qZWN0YWJsZXNdKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9