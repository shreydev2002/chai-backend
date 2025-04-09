

//Using Promise method
const asyncHandler = (requestHandler) => {    //'requestHandler' or 'fn','function'  all are same it doesnt change meaning its a function after all
    (req,res,next) => {
        Promise.resolve(req,res,next).catch( (err) => next(err))
    }
}


/*  Using Try Catch Method
const asyncHandler = (fn) => async(req,res,next) => {
    try{
        await fn(req,res,next)
    } catch (error) {
        res.stats(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}    */


export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}
    
