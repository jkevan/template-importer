angular.module('template.importer.service.visualDomSelector', [])
    .service('domSelectorService', [function(){
        var context = {
            outlineElts: {}
        };

        function init(document) {
            context._document = jQuery(document ? document : window.document);

            var css = "<style type='text/css'>" +
                '.DomOutline {' +
                '    background: #09c;' +
                '    position: absolute;' +
                '    z-index: 1000000;' +
                '}' +
                '.DomOutline_label {' +
                '    background: #09c;' +
                '    border-radius: 2px;' +
                '    color: #fff;' +
                '    font: bold 12px/12px Helvetica, sans-serif;' +
                '    padding: 4px 6px;' +
                '    position: absolute;' +
                '    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);' +
                '    z-index: 1000001;' +
                '}</style>';

            jQuery(css).appendTo(context._document.find("head"));

            context.outlineElts.label = jQuery('<div></div>').addClass('DomOutline_label').appendTo(context._document.find("body"));
            context.outlineElts.top = jQuery('<div></div>').addClass('DomOutline').appendTo(context._document.find("body"));
            context.outlineElts.bottom = jQuery('<div></div>').addClass('DomOutline').appendTo(context._document.find("body"));
            context.outlineElts.left = jQuery('<div></div>').addClass('DomOutline').appendTo(context._document.find("body"));
            context.outlineElts.right = jQuery('<div></div>').addClass('DomOutline').appendTo(context._document.find("body"));
        }

        function removeOutlineElements() {
            jQuery.each(context.outlineElts, function(name, element) {
                element.remove();
            });
        }

        function compileLabelText(element, width, height) {
            var label = element.tagName.toLowerCase();
            if (element.id) {
                label += '#' + element.id;
            }
            if (element.className) {
                label += ('.' + jQuery.trim(element.className).replace(/ /g, '.')).replace(/\.\.+/g, '.');
            }
            return label + ' (' + Math.round(width) + 'x' + Math.round(height) + ')';
        }

        this.start = function(document) {
            init(document);

            context._document.find("body").on('mousemove.DomOutline', function(e) {
                if (e.target.className.indexOf('DomOutline') !== -1) {
                    return;
                }

                var b = 2;
                var scroll_top = context._document.scrollTop();
                var pos = e.target.getBoundingClientRect();
                var top = pos.top + scroll_top;
                var left = pos.left;

                var label_text = compileLabelText(e.target, pos.width, pos.height);
                var label_top = Math.max(0, top - 20 - b, scroll_top);
                var label_left = Math.max(0, left - b);

                context.outlineElts.label.css({ top: label_top, left: label_left }).text(label_text);
                context.outlineElts.top.css({ top: Math.max(0, top - b), left: left - b, width: pos.width + b, height: b });
                context.outlineElts.bottom.css({ top: top + pos.height, left: left - b, width: pos.width + b, height: b });
                context.outlineElts.left.css({ top: top - b, left: Math.max(0,left - b), width: b, height: pos.height + b });
                context.outlineElts.right.css({ top: top - b, left: left + pos.width, width: b, height: pos.height + (b * 2) });
            });
        };

        this.stop = function () {
            removeOutlineElements();
            context._document.find("body").off('mousemove.DomOutline');
        };
    }]);