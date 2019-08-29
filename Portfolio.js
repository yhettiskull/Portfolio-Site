
$('.menu_icon').on('click', function(event) {
    $(this).toggleClass('active');
    $('.nav_items_container').slideToggle(250);
});

$('.thumbnail').on('click', function(event) {
    event.preventDefault();
    const imgSrc = $(this).children('img').attr('src');
    const imgAlt = $(this).children('img').attr('alt');
    $('.projects_hero').children('.projects_image').attr({
        'src': imgSrc,
        'alt': imgAlt
    });
});