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
var employe_1 = require('components/employe');
var Society = (function () {
    function Society() {
    }
    Society = __decorate([
        angular2_1.Component({
            selector: 'society'
        }),
        angular2_1.View({
            template: '<h1>Coucou</h1><departement></departement>',
            directives: [employe_1.Employe]
        }), 
        __metadata('design:paramtypes', [])
    ], Society);
    return Society;
})();
angular2_1.bootstrap(Society);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJTb2NpZXR5IiwiU29jaWV0eS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUNBLDRDQUQ0QztBQUM1Qyx5QkFBd0QsbUJBQW1CLENBQUMsQ0FBQTtBQUc1RSx3QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQUczQztJQUFBQTtJQVNBQyxDQUFDQTtJQVRERDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsU0FBU0E7U0FDcEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLDRDQUE0Q0E7WUFDdERBLFVBQVVBLEVBQUVBLENBQUNBLGlCQUFPQSxDQUFDQTtTQUN0QkEsQ0FBQ0E7O2dCQUdEQTtJQUFEQSxjQUFDQTtBQUFEQSxDQVRBLEFBU0NBLElBQUE7QUFFRCxvQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yLCBQYXJlbnR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7RGVwYXJ0ZW1lbnR9IGZyb20gJ2NvbXBvbmVudHMvZGVwYXJ0ZW1lbnQnO1xuaW1wb3J0IHtQb3N0ZX0gZnJvbSAnY29tcG9uZW50cy9wb3N0ZSc7XG5pbXBvcnQge0VtcGxveWV9IGZyb20gJ2NvbXBvbmVudHMvZW1wbG95ZSc7XG5pbXBvcnQge1N0b3JhZ2VTZXJ2aWNlfSBmcm9tICdzZXJ2aWNlcy9zdG9yYWdlU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvY2lldHknXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogJzxoMT5Db3Vjb3U8L2gxPjxkZXBhcnRlbWVudD48L2RlcGFydGVtZW50PicsXG4gIGRpcmVjdGl2ZXM6IFtFbXBsb3llXVxufSlcbmNsYXNzIFNvY2lldHkge1xuXG59XG5cbmJvb3RzdHJhcChTb2NpZXR5KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==