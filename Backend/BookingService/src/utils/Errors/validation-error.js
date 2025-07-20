const {StatusCodes}=require('http-status-codes')

class ValidationError extends Error{
constructor(error){
    super();
    let explanation=[];
    // console.log(error);
    // error.errors.array.forEach(ele => {
    //     explanation.push(ele.message);
    // });
    this.error=error;
    (this.name="Validation Error"),
    (this.message = "Not able to validate the data sent in the request"),
    // (this.explanation = explanation),
    (this.statusCodes = StatusCodes.BAD_REQUEST);
    
}

}

module.exports = ValidationError;