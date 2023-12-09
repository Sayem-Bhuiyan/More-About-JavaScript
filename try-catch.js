const checkAge = () => {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            // console.log('age not found', age, ageText)
            throw "Please enter a number"
        }
        else if(age < 18){
            throw "Less than age 18 are not allowed";
        }
        else if(age > 30){
            throw "more the age 30 are not allowed";
        }
        errorTag.innerText = '';
    }
    catch(err){
        errorTag.innerText = 'ERROR: ' + err;
    }
    finally{
        console.log('All done inside try catch')
    }
}