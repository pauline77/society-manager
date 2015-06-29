var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.prototype.notBlanck = function (c) {
        if (c.value === "") {
            return {
                notBlank: true
            };
        }
        return null;
    };
    return CustomValidators;
})();
exports.CustomValidators = CustomValidators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvZW1wbG95ZVZhbGlkYXRvci50cyJdLCJuYW1lcyI6WyJDdXN0b21WYWxpZGF0b3JzIiwiQ3VzdG9tVmFsaWRhdG9ycy5jb25zdHJ1Y3RvciIsIkN1c3RvbVZhbGlkYXRvcnMubm90QmxhbmNrIl0sIm1hcHBpbmdzIjoiQUFBQTtJQUFBQTtJQVNBQyxDQUFDQTtJQVJHRCxvQ0FBU0EsR0FBVEEsVUFBVUEsQ0FBQ0E7UUFDUEUsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLE1BQU1BLENBQUNBO2dCQUNIQSxRQUFRQSxFQUFFQSxJQUFJQTthQUNqQkEsQ0FBQUE7UUFDTEEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBQ0xGLHVCQUFDQTtBQUFEQSxDQVRBLEFBU0NBLElBQUE7QUFUWSx3QkFBZ0IsbUJBUzVCLENBQUEiLCJmaWxlIjoidmFsaWRhdG9ycy9lbXBsb3llVmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRvcnN7XG4gICAgbm90QmxhbmNrKGMpIHtcbiAgICAgICAgaWYoYy52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBub3RCbGFuazogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==