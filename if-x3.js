//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function digitName(n){
switch(n){
    case 0: return'ZERO';
    case 1: return 'ONE';
    case 2: return 'TWO';
    case 3: return 'THREE';
    case 4: return 'FOUR';
    case 5: return 'FIVE';
    case 6: return 'SIX';
    case 7: return 'SEVEN';
    case 8: return 'EIGHT';
    case 9: return 'NINE';
    default: return 'ERROR'; 
}

}

module.exports = digitName;
