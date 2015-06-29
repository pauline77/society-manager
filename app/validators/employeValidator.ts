export class CustomValidators{
    notBlanck(c) {
        if(c.value === "") {
            return {
                notBlank: true
            }
        }
        return null;
    }
}
