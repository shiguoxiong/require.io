/**
 * Created by wt on 2017/3/6.
 */
require.config({
    paths:{
        jquery:'./jquery.min',
        a:'./js/1',
        b:'./js/2',
        c:'./js/3',
        re:'./js/re'
    }
})
require(['jquery','a','b','c','re'],function($,a,b,c,re){
    $('body').css('background','red')
    a.a()
    b.b()
    c.c()
    re.add()
    re.say()
})