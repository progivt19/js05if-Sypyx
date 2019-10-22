//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function S(x1, y1, x2, y2,x3, y3){
    var a=Math.sqrt(Math.sqr(x2-x1)+Math.sqr(y2-y1));
    var b=Math.sqrt(Math.sqr(x3-x1)+Math.sqr(y3-y1));
    var c=Math.sqrt(Math.sqr(x3-x2)+Math.sqr(y3-y2));
    if (a==b)
    if (Math.sqrt(Math.sqr(a)+Math.sqr(b))==c)
    return 'true';
    if (a==c)
    if (Math.sqrt(Math.sqr(a)+Math.sqr(c))==b)
    return 'true';
    if (c==b)
    if (Math.sqrt(Math.sqr(b)+Math.sqr(c))==a)
    return 'true';
    return 'false';
}

module.exports = S;
