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
var departementItem_1 = require('components/departementItem');
var Society = (function () {
    function Society() {
    }
    Society = __decorate([
        angular2_1.Component({
            selector: 'society'
        }),
        angular2_1.View({
            template: '<h1>Coucou</h1><departement-item></departement-item>',
            directives: [departementItem_1.DepartementItem]
        }), 
        __metadata('design:paramtypes', [])
    ], Society);
    return Society;
})();
angular2_1.bootstrap(Society);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJTb2NpZXR5IiwiU29jaWV0eS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUNBLDRDQUQ0QztBQUM1Qyx5QkFBd0QsbUJBQW1CLENBQUMsQ0FBQTtBQU01RSxnQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQU0zRDtJQUFBQTtJQVFBQyxDQUFDQTtJQVJERDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsU0FBU0E7U0FDdEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFFBQVFBLEVBQUVBLHNEQUFzREE7WUFDaEVBLFVBQVVBLEVBQUVBLENBQUNBLGlDQUFlQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7O2dCQUVEQTtJQUFEQSxjQUFDQTtBQUFEQSxDQVJBLEFBUUNBLElBQUE7QUFFRCxvQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yLCBQYXJlbnR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtFbXBsb3llfSBmcm9tICdjbGFzcy9lbXBsb3llJztcbmltcG9ydCB7UG9zdGV9IGZyb20gJ2NsYXNzL3Bvc3RlJztcbmltcG9ydCB7RGVwYXJ0ZW1lbnR9IGZyb20gJ2NsYXNzL2RlcGFydGVtZW50JztcblxuaW1wb3J0IHtEZXBhcnRlbWVudEl0ZW19IGZyb20gJ2NvbXBvbmVudHMvZGVwYXJ0ZW1lbnRJdGVtJztcbmltcG9ydCB7UG9zdGVJdGVtfSBmcm9tICdjb21wb25lbnRzL3Bvc3RlSXRlbSc7XG5pbXBvcnQge0VtcGxveWVJdGVtfSBmcm9tICdjb21wb25lbnRzL2VtcGxveWVJdGVtJztcblxuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnc2VydmljZXMvc3RvcmFnZVNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NvY2lldHknXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiAnPGgxPkNvdWNvdTwvaDE+PGRlcGFydGVtZW50LWl0ZW0+PC9kZXBhcnRlbWVudC1pdGVtPicsXG4gICAgZGlyZWN0aXZlczogW0RlcGFydGVtZW50SXRlbV1cbn0pXG5jbGFzcyBTb2NpZXR5IHtcbn1cblxuYm9vdHN0cmFwKFNvY2lldHkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9