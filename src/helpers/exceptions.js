export class InvalidParameterException extends Error {
    constructor(message, errors) {
        super(message, errors);
        this.name = 'InvalidParameterException';
        this.errors = errors;
    }
}