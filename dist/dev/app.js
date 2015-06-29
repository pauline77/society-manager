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
/// <reference path="../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var Society = (function () {
    function Society() {
    }
    Society = __decorate([
        angular2_1.Component({
            selector: 'society'
        }),
        angular2_1.View({
            template: '<h1>Coucou</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], Society);
    return Society;
})();
angular2_1.bootstrap(Society);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJTb2NpZXR5IiwiU29jaWV0eS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUNBLDRDQUQ0QztBQUM1Qyx5QkFBd0QsbUJBQW1CLENBQUMsQ0FBQTtBQU01RTtJQUFBQTtJQVFBQyxDQUFDQTtJQVJERDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsU0FBU0E7U0FDcEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLGlCQUFpQkE7U0FDNUJBLENBQUNBOztnQkFHREE7SUFBREEsY0FBQ0E7QUFBREEsQ0FSQSxBQVFDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0ZvciwgUGFyZW50fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0RlcGFydGVtZW50fSBmcm9tICdjb21wb25lbnRzL2RlcGFydGVtZW50JztcbmltcG9ydCB7UG9zdGV9IGZyb20gJ2NvbXBvbmVudHMvcG9zdGUnO1xuaW1wb3J0IHtFbXBsb3llfSBmcm9tICdjb21wb25lbnRzL2VtcGxveWUnO1xuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnc2VydmljZXMvc3RvcmFnZVNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2NpZXR5J1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGU6ICc8aDE+Q291Y291PC9oMT4nXG59KVxuY2xhc3MgU29jaWV0eSB7XG5cbn1cblxuYm9vdHN0cmFwKFNvY2lldHkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9