!function(window, document, $, undefined) {
    var $addUser = $('#addUser'),
        $userList = $('#userList'),
        $submitBtn = $('#submitBtn'),
        $form = $('.form'),
        $bor = $('.bor'),
        $rem = $('.rem')
        $myrem = $('#myrem');

    function buttonOn() {
        $addUser.on('click', addUseron);
        $userList.on('click', userListOn);
        $submitBtn.on('click', submitBtnon);
        $bor.on('click', '.rem', borClick);
    }

    userListOn = function() {
        $form.hide();
        $bor.show();
    }
    
    addUseron = function() {
        $form.show();
        $bor.hide();
    }

    borClick = function() {
        var $this = $(this),
            uid = $this.attr('uid'),
            url = 'php/ajaxDelUser.php';

            var r = confirm('确定要删除该用户吗？');

        if(!r) {
            return;
        }

        $.get(url, {id: uid}, function(response) {
            if(response.success) {
                $myrem.modal('show');
                setTimeout(function() {
                    $rem.modal('hide');
                    location.reload();
                }, 2000)
            }
        }, 'json')

    }

    submitBtnon = function() {
        var url = 'php/ajaxReg.php',
            $myDlg = $('#myDlg');
        var data = {
            name: $('#name').val(),
            age: $('#age').val(),
            gender: $('input[name = gender]:checked').val(),
            edu: $('#edu').val(),
            address: $('#address').val(),
            mobile: $('#mobile').val(),
            hobbies: $('input[name = hobbies]:checked').val(),
            img: 'abc.png'
        };

        $.get(url, data, function(response) {
            if(response.success) {
                $myDlg.modal('show');
                setTimeout(function() {
                    $myDlg.modal('hide');
                    $form.find('input, textarea').val('');
                    $('#edu').val('0');
                    location.reload();
                }, 2000)
            }
        }, 'json')
    }
    buttonOn();
}(window, document, jQuery);