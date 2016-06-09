!function(window, document, $, undefined) {
    function trsPush() {
        var url = 'php/ajaxUserList.php',
            item = {size: 10},
            $rotate = $('.rotate');

              if($('.rota').hasClass('rotate')) {
                    return;
                } else {
                    $('.rota').addClass('rotate');
                }

               
        $.get(url, item, function(returned) {
            var r = returned.data;
                trs = [],
                $tbody = $('#tbody'),
                tpl = $('#scriptId').html(),
                compiled =  _.template(tpl);
            _.each(r, function(key) {
                trs.push(compiled(key));
            });
            $tbody.html(trs.join(''));
            $('.rota').hide();
        }, 'json'); 
    }
    trsPush();
}(window, document, jQuery);