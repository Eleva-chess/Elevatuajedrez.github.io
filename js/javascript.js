$(document).ready(function() {
    var hash = window.location.hash;
    if (hash) {
        $('.nav-tabs a[href="' + hash + '"]').tab('show');
    }

    $('a[data-toggle="tab"]').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    }).on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    });
});