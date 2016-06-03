function magnifying() {
    var $lis = $('ul').find('li'),
        $imgBorder = $('.imgBorder'),
        $bigImg = $imgBorder.find('img'),
        $a = $('a'),
        len = $lis.length,
        width = $('ul > li').width(),
        $mouse = $('.mouse'),
        $shows = $('.shows');
    var liOnMouseenter = $lis.each(function(val, key) {
            return key;
        })
    liOnMouseenter.on('mouseenter', function() {
        var $this = $(this);
        $bigImg
            .attr('src', $this.find('img').attr('src'))
            .attr('simg', $this.find('img').attr('simg'));
        $bigImg.attr('src', $this.find('img').attr('src'));
    })
    $a.on('click', function() {
        var $this = $(this),
            marginLeft = (len - 6) * 46;
        if ($this.hasClass('two')) {
            $('ul').stop().animate({'marginLeft': -marginLeft}, 500);
        } else {
            $('ul').stop().animate({'marginLeft': 0}, 500);
        }
    })

  $imgBorder.on('mouseenter', function() {
        $mouse.add($shows).css('visibility', 'visible');
    }).on('mouseleave', function() {
        $mouse.add($shows).css('visibility', 'hidden');
    }).on('mousemove', function(e) {
        var w = $mouse.width(), h = $mouse.height();
        var bh = $imgBorder.height();
        var top = e.pageY - $imgBorder.offset().top - h / 2;
        var left = e.pageX - $imgBorder.offset().left - w / 2; 

        top = top < 0 ? 0 : top;
        if (top + h > bh) {
           top = bh - h;
        }

        left = left < 0 ? 0 : left;
        if (left + w > bh) {
           left = bh - w;
        }

        $mouse.css({
            top: top + 'px',
            left: left + 'px'
        });

        $shows.css( "background", "url(" + $bigImg.attr("simg") + ") no-repeat");
            $shows.css({
            "background-position": -left + "px" + " " + - top + "px"
        })

    })

}

magnifying();