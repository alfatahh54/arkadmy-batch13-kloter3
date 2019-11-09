function is_name_valid(name)
{
    let validator = /^[a-z]{5,}$/;
    if(name.match(validator))
    {   
         return true;
    }
    else
    {  
         return false;
    }
}

function is_username_valid(username)
{
    let validator = /^[0-9]{2}[@&]{1}[A-Z]{4}$/
    if (username.match(validator))
    {
        return true
    }
    else
    {
        return false
    }
}

//test
console.log(is_name_valid("febria"));
console.log(is_username_valid("29@PASS"));
console.log(is_username_valid("234&Agan"));