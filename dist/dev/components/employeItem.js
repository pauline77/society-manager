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
var posteItem_1 = require('components/posteItem');
var EmployeItem = (function () {
    function EmployeItem(poste) {
        this.poste = poste;
    }
    EmployeItem.prototype.getPoste = function () {
        return this.poste;
    };
    EmployeItem = __decorate([
        angular2_1.Component({
            selector: 'employe-item',
            properties: ['employe']
        }),
        angular2_1.View({
            template: ""
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [posteItem_1.PosteItem])
    ], EmployeItem);
    return EmployeItem;
})();
exports.EmployeItem = EmployeItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZW1wbG95ZUl0ZW0udHMiXSwibmFtZXMiOlsiRW1wbG95ZUl0ZW0iLCJFbXBsb3llSXRlbS5jb25zdHJ1Y3RvciIsIkVtcGxveWVJdGVtLmdldFBvc3RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQ0EsK0NBRCtDO0FBQy9DLHlCQUEyRyxtQkFBbUIsQ0FBQyxDQUFBO0FBQy9ILDBCQUF3QixzQkFBc0IsQ0FBQyxDQUFBO0FBRy9DO0lBc0JJQSxxQkFBc0JBLEtBQWdCQTtRQU1sQ0MsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURELDhCQUFRQSxHQUFSQTtRQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUN0QkEsQ0FBQ0E7SUFqQ0xGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxjQUFjQTtZQUN4QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7U0FDeEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFFBQVFBLEVBQUVBLEVBQUVBO1NBVWZBLENBQUNBO1FBT2NBLFdBQUNBLGlCQUFNQSxFQUFFQSxDQUFBQTs7b0JBcUJ4QkE7SUFBREEsa0JBQUNBO0FBQURBLENBM0NBLEFBMkNDQSxJQUFBO0FBM0JZLG1CQUFXLGNBMkJ2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZW1wbG95ZUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0ZvciwgUGFyZW50LCBmb3JtRGlyZWN0aXZlcywgQ29udHJvbEdyb3VwLCBDb250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1Bvc3RlSXRlbX0gZnJvbSAnY29tcG9uZW50cy9wb3N0ZUl0ZW0nO1xuaW1wb3J0IHtFbXBsb3llfSBmcm9tICdjbGFzcy9lbXBsb3llJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1wbG95ZS1pdGVtJyxcbiAgcHJvcGVydGllczogWydlbXBsb3llJ11cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGBgXG4gICAgLy9kaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXNdLFxuICAgIC8vIHRlbXBsYXRlOiBgXG4gICAgLy8gICAgIDxmb3JtIFtuZy1mb3JtLW1vZGVsXT0nZW1wbG95ZUZvcm0nIFtjbGFzcy5pbnZhbGlkXT0nIWVtcGxveWVGb3JtLnZhbGlkJz5cbiAgICAvLyAgICAgICAgIDxwPk5vbSA8aW5wdXQgdHlwZT0ndGV4dCcgbmctY29udHJvbD0nbm9tJz48L3A+XG4gICAgLy8gICAgICAgICA8cD5QcsOpbm9tIDxpbnB1dCB0eXBlPSd0ZXh0JyBuZy1jb250cm9sPSdwcmVub20nPjwvcD5cbiAgICAvLyAgICAgICAgIDxwPkRhdGUgZGUgbmFpc3NhbmNlIDxpbnB1dCB0eXBlPSd0ZXh0JyBuZy1jb250cm9sPSdkZG4nPjwvcD5cbiAgICAvLyAgICAgICAgIDxwPlNleGUgPHNlbGVjdD48b3B0aW9uPkhvbW1lPC9vcHRpb24+PG9wdGlvbj5GZW1tZTwvb3B0aW9uPjwvc2VsZWN0PjwvcD5cbiAgICAvLyAgICAgICAgIDxidXR0b24gKGNsaWNrKT0nYWRkRW1wbG95ZSgkZXZlbnQpJz5Bam91dGVyPC9idXR0b24+XG4gICAgLy8gICAgIDwvZm9ybT5gXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVJdGVtXG57XG4gICAgZW1wbG95ZTogRW1wbG95ZTtcbiAgICBwcml2YXRlIHBvc3RlOiBQb3N0ZUl0ZW07XG4gICAgcHJpdmF0ZSBlbXBsb3llRm9ybTpDb250cm9sR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcihAUGFyZW50KCkgcG9zdGU6IFBvc3RlSXRlbSkge1xuICAgICAgICAvLyB0aGlzLmVtcGxveWVGb3JtID0gbmV3IENvbnRyb2xHcm91cCh7XG4gICAgICAgIC8vICAgICBub206IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpLCAvLyBwcmUtZXhpc3RpbmcgdmFsaWRhdG9yXG4gICAgICAgIC8vICAgICBwcmVub206IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgICAvLyAgICAgZGRuOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgdGhpcy5wb3N0ZSA9IHBvc3RlO1xuICAgIH1cblxuICAgIGdldFBvc3RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0ZTtcbiAgICB9XG5cbiAgICAvLyBhZGRFbXBsb3llKGUpIHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBpZih0aGlzLmVtcGxveWVGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcbiAgICAvLyAgICAgICAgIC8vIHRoaXMucG9zdGUuYWRkRW1wbG95ZSh0aGlzLm5vbSx0aGlzLnByZW5vbSx0aGlzLmRkbix0aGlzLnNleGUpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLmVtcGxveWVGb3JtKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==