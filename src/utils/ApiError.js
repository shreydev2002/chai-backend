class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        /*     Not compuslory to learn as of now. PRODUCTION LEVEL !!
        if(statck) {
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }*/
    }
}

export {ApiError}