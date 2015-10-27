/**
 * Prototype for outline dom element base on outline css
 *
 * Public API:
 * myDomOutline.start();
 * myDomOutline.stop();
 */
var DomOutline = function () {
    function initStylesheet() {
        var css = '' +
            '.DomOutlineTest {' +
            '   outline-style: solid;' +
            '   outline-width: 4px;' +
            '}';

        var element = document.createElement('style');
        element.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(element);

        if (element.styleSheet) {
            element.styleSheet.cssText = css; // IE
        } else {
            element.innerHTML = css; // Non-IE
        }
    }

    this.start = function () {
        initStylesheet();
        jQuery('body').on('mousemove.DomOutline', function(e){
            if (e.target.className.indexOf('DomOutline') !== -1) {
                return;
            }

            $(".DomOutlineTest").removeClass("DomOutlineTest");
            e.target.className = e.target.className + " DomOutlineTest";
        });
    };

    this.stop = function () {
        jQuery('body').off('mousemove.DomOutline');
        $(".DomOutlineTest").removeClass("DomOutlineTest");
    };

    return this;
};