var c = [];

function import_script(a, d) {
    var b = false;
    var e = /^.+\.([^.]+)$/.exec(a);
    e = null ? "" : e[1];
    for (var i = 0; i < c.length; i++) if (c[i] == a) {
        b = true;
        break
    }
    if (b == false) {
        if (e.toLowerCase() == 'js') {
            if (d != '') $("head").prepend('<script defer id="' + d + '" type="text/javascript" src="' + a + '"></script>');
            else $("head").prepend('<script defer type="text/javascript" src="' + a + '"></script>')
        } else if (e.toLowerCase() == 'png') $("head").prepend('<link href="' + a + '" rel="shortcut icon" type="image/png"/>');
        else $("head").prepend('<link href="' + a + '" rel="stylesheet" />');
        c.push(a)
    }
}
$(function () {
	
    import_script(PATH.SERVER_PATH+'images/favicon.png');
	import_script(PATH.SERVER_PATH+'js/jquery.mm_css_menu.js');
    import_script(PATH.SERVER_PATH+'js/jquery.cAlert.js');
    import_script(PATH.SERVER_PATH+'js/jquery.header.js')
});

