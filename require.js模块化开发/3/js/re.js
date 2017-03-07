/**
 * Created by wt on 2017/3/6.
 */
define(['jquery'],function($){
    function add(){
        $('li').bind('click',function(event){
            event.stopPropagation()
            console.log(this)
            $('.kk').removeClass('add')
            $(this).toggleClass('add').find('ul').slideToggle()
             alert($(this).find('ul'))
             return false
        })
    }
            function say(){
                alert('Œ“ «main3')
            }
    return{
        add:add,
        say:say
    }
})
