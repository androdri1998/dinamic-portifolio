export function verifyRoute(){
    try{
        require('../database/curriculum.pdf');
        return true;
    } catch(err) {
        return false
    }
}

export function getCurriculum(){
    try{
        return require('../database/curriculum.pdf');
    } catch(err) {
        return false
    }
}