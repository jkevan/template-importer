angular.module('template.importer.service.visualDomSelector', [])
    .service('domSelectorService', [function(){
        var self = {
            elements: {}
        };

        function initStylesheet() {
            var css = '' +
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

        function createOutlineElements() {
            self.elements.label = jQuery('<div></div>').addClass('DomOutline_label').appendTo('body');
            self.elements.top = jQuery('<div></div>').addClass('DomOutline').appendTo('body');
            self.elements.bottom = jQuery('<div></div>').addClass('DomOutline').appendTo('body');
            self.elements.left = jQuery('<div></div>').addClass('DomOutline').appendTo('body');
            self.elements.right = jQuery('<div></div>').addClass('DomOutline').appendTo('body');
        }

        function removeOutlineElements() {
            jQuery.each(self.elements, function(name, element) {
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

        function getScrollTop() {
            if (!self.elements.window) {
                self.elements.window = jQuery(window);
            }
            return self.elements.window.scrollTop();
        }

        this.start = function(element) {
            initStylesheet();
            createOutlineElements();
            jQuery(element).on('mousemove.DomOutline', function(e) {
                if (e.target.className.indexOf('DomOutline') !== -1) {
                    return;
                }

                var b = 2;
                var scroll_top = getScrollTop();
                var pos = e.target.getBoundingClientRect();
                var top = pos.top + scroll_top;

                var label_text = compileLabelText(e.target, pos.width, pos.height);
                var label_top = Math.max(0, top - 20 - b, scroll_top);
                var label_left = Math.max(0, pos.left - b);

                self.elements.label.css({ top: label_top, left: label_left }).text(label_text);
                self.elements.top.css({ top: Math.max(0, top - b), left: pos.left - b, width: pos.width + b, height: b });
                self.elements.bottom.css({ top: top + pos.height, left: pos.left - b, width: pos.width + b, height: b });
                self.elements.left.css({ top: top - b, left: Math.max(0, pos.left - b), width: b, height: pos.height + b });
                self.elements.right.css({ top: top - b, left: pos.left + pos.width, width: b, height: pos.height + (b * 2) });
            });
        };

        this.stop = function () {
            removeOutlineElements();
            jQuery('body').off('mousemove.DomOutline');
        };
    }]);