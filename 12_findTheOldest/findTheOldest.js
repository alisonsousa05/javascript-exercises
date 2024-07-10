const findTheOldest = function(spec) {
    let today = new Date();
    let oldest = -1;
    let position = 0;
    for (i=0; i<spec.length;i++){
        if (spec[i].yearOfDeath===undefined){
            let age = today.getFullYear() - spec[i].yearOfBirth;
            if (age > oldest){
                oldest = age;
                position = i;
            }
        }
        else{
            let age = spec[i].yearOfDeath - spec[i].yearOfBirth;
            if(age > oldest){
                oldest = age;
                position = i;
            }
        }

        
    }
    return spec[position];

};

// Do not edit below this line
module.exports = findTheOldest;
