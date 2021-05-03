var $links = $('.itemLinks')

$links.click(function(e){
    $links.removeClass('active')
    var clickLink = e.target
    clickLink = $(clickLink)
    var position = clickLink.attr('data-pos')
    var translatevalue = 'translate3d('+ position * 25 +"%, 0px, 0)"
    $('#wrapper').css({
        transform: translatevalue
    })
    clickLink.addClass('active')
})

$($links[0]).addClass('active')