function getAge(dateBirth) {
    let today = new Date();
    if(typeof dateBirth === "string") dateBirth = new Date(dateBirth)
    let age = today.getFullYear() - dateBirth.getFullYear();
    let m = today.getMonth() - dateBirth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateBirth.getDate())) {
        age--;
    }
    return age;
}

module.exports = getAge