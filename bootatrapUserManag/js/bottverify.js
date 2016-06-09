!function(window, document, $, undefined) {
    var $names = $('#name'),
        $age = $('#age'),
        $edu = $('#edu'),
        $mobile = $('#mobile'),
        $address = $('#address'),
        $hobbies = $('.hobbies'),
        $ok = $('.ok'),
        number = /^1\d{10}$/,
        eml = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        $submitBtn = $('#submitBtn');
    $submitBtn.on('click', function() {
        if ($names.val() == '') {
            alert('姓名不能为空');
            return false;
        }

        if ($age.val() == 0) {
            alert('年龄不能为空')
            return false;
        }

        if (isNaN($age.val())) {
            alert('年龄格式不正确！')
            return false;
        }

        if ($edu.val() == 0) {
            alert('请选择学历');
            return false;
        }

        if ($mobile.val() == 0) {
            alert('手机号不能为空！')
            return false;
        }

        if (!number.test($mobile.val())) {
            alert('手机号格式不正确！')
            return false;
        }

        if ($address.val() == '') {
            alert('请填写您的地址');
            return false;
        }

        if (!eachHobbies()) {
            alert('选择爱好')
            return false;
        }

        function eachHobbies() {
            var i = 0,len = $hobbies.length; 
            for (i; i<len; i++) {
                if($hobbies[i].checked) {
                    return true;
                }   
            }
            return false;
    });

}(window, document, jQuery);