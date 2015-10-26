(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var AcfMaps, AdLoader, Alert, AsyncPostsLoader, BackToTop, Competitions, ContentSlider, FBOpenGraphObject, FMPolarAd, FMTracker, FacebookComments, FacebookSDK, FacebookUser, FeatureSlider, Gallery, GallerySeries, GeoIP, GoogleAnalyticsTracker, HeaderSearch, HeadroomMenu, I18n, Lightbox, Logger, LoginControl, Longform, MenuToggles, MobileMenu, NewsletterWidget, RadiumOne, SearchResults, SectionWatcher, SocialApiNotifier, SocialTracker, SplitPost, Tabs, TypeKit, UmbelClient, UmbelTracker, Utilities, articleShareButtons, asyncPostsLoader, backToTop, competitions, contentSlider, cookiePolicy, facebookComments, facebookSDK, featureSlider, fmPolarAd, geoIP, googleAnalyticsTracker, headroomMenu, lightbox, loginControl, longform, mediavoice_property_id, menuToggles, mobileMenu, newsletterWidget, searchResults, sectionWatcher, socialApiNotifier, socialTracker, splitpost, tabs, typeKit, umbelClient, umbelTracker;

require('./app/_initialisers.iframe-resize.coffee');

require('./app/_initialisers.smartresize.coffee');

require('./app/_initialisers.views-init.coffee');

require('./app/_initialisers.umbel.coffee');

Logger = require('js-logger');

Utilities = require('./app/_utilities.utilities.coffee');

Utilities.PostMessage = require('./app/_utilities.post-message.coffee');

I18n = require('./app/_utilities.i18n.coffee');

require('../foundation/views/handlebars-templates.js');

FMPolarAd = require('./app/_ads.fm-polar-ad.coffee');

AcfMaps = require('./app/_components.acf-maps.coffee');

AdLoader = require('./app/_components.ad-loader');

Alert = require('./app/_components.alert.coffee');

AsyncPostsLoader = require('./app/_components.async-loader.coffee');

BackToTop = require('./app/_components.back-to-top.coffee');

ContentSlider = require('./app/_components.content-slider.coffee');

Competitions = require('./app/_components.competitions.coffee');

FacebookUser = require('./app/_components.facebook-user.coffee');

FacebookSDK = require('./app/_components.facebook-sdk.coffee');

FBOpenGraphObject = require('./app/_components.fb-open-graph-object.coffee');

FeatureSlider = require('./app/_components.feature-slider.coffee');

Gallery = require('./app/_components.gallery.coffee');

GallerySeries = require('./app/_components.gallery-series.coffee');

GeoIP = require('./app/_components.geoip.coffee');

GoogleAnalyticsTracker = require('./app/_components.google-analytics-tracker.coffee');

HeaderSearch = require('./app/_components.header-search.coffee');

HeadroomMenu = require('./app/_components.headroom-menu.coffee');

Lightbox = require('./app/_components.lightbox.coffee');

LoginControl = require('./app/_components.login-control.coffee');

Longform = require('./app/_components.longform.coffee');

MobileMenu = require('./app/_components.mobile-menu.coffee');

NewsletterWidget = require('./app/_components.newsletter-terms.coffee');

RadiumOne = require('./app/_components.radium-one.coffee');

SearchResults = require('./app/_components.search-results.coffee');

MenuToggles = require('./app/_components.menu-toggles.coffee');

SocialApiNotifier = require('./app/_components.social-api-notifier.coffee');

SocialTracker = require('./app/_components.social-tracker.coffee');

SplitPost = require('./app/_components.splitpost');

Tabs = require('./app/_components.tabs.coffee');

FMTracker = require('./app/_components.tracker.coffee');

UmbelClient = require('./app/_components.umbel-client.coffee');

UmbelTracker = require('./app/_components.umbel-tracker.coffee');

TypeKit = require('./app/_components.typekit.coffee');

SectionWatcher = require('./app/_components.section-watcher.coffee');

FacebookComments = require('./app/_components.facebook-comments.coffee');

Logger.useDefaults();

Logger.setLevel(Logger.DEBUG);

window.adLoader = new AdLoader();

adLoader.loadAds();

window.dataLayer = window.dataLayer || [];

window.i18n = I18n;

window.Utilities = Utilities;

Utilities.PostMessage = Utilities.PostMessage;

facebookSDK = new FacebookSDK();

facebookComments = new FacebookComments();

umbelClient = new UmbelClient();

umbelTracker = new UmbelTracker(umbelClient);

socialApiNotifier = new SocialApiNotifier();

googleAnalyticsTracker = new GoogleAnalyticsTracker();

socialTracker = new SocialTracker();

window.Tracker = new FMTracker();

mediavoice_property_id = $('body').data('mediavoice-property-id');

fmPolarAd = new FMPolarAd(mediavoice_property_id, "/sample/publisher/sponsored.html");

sectionWatcher = new SectionWatcher();

articleShareButtons = new RadiumOne('aside', '.c-article-share');

asyncPostsLoader = new AsyncPostsLoader();

typeKit = new TypeKit();

window.AcfMaps = new AcfMaps();

backToTop = new BackToTop();

contentSlider = new ContentSlider();

cookiePolicy = new Alert(".c-cookie-policy", "hide_cookie_msg");

competitions = new Competitions();

featureSlider = new FeatureSlider();

headroomMenu = new HeadroomMenu();

lightbox = new Lightbox();

longform = new Longform();

loginControl = new LoginControl();

mobileMenu = new MobileMenu();

newsletterWidget = new NewsletterWidget();

searchResults = new SearchResults();

splitpost = new SplitPost();

menuToggles = new MenuToggles();

tabs = new Tabs();

$(".gallery-series").each(function() {
  return new GallerySeries($(this));
});

$(".gallery").each(function() {
  return new Gallery($(this));
});

if (window.altLocales != null) {
  geoIP = new GeoIP();
}


},{"../foundation/views/handlebars-templates.js":53,"./app/_ads.fm-polar-ad.coffee":2,"./app/_components.acf-maps.coffee":3,"./app/_components.ad-loader":4,"./app/_components.alert.coffee":7,"./app/_components.async-loader.coffee":8,"./app/_components.back-to-top.coffee":9,"./app/_components.competitions.coffee":10,"./app/_components.content-slider.coffee":11,"./app/_components.facebook-comments.coffee":12,"./app/_components.facebook-sdk.coffee":13,"./app/_components.facebook-user.coffee":14,"./app/_components.fb-open-graph-object.coffee":15,"./app/_components.feature-slider.coffee":16,"./app/_components.gallery-series.coffee":17,"./app/_components.gallery.coffee":18,"./app/_components.geoip.coffee":19,"./app/_components.google-analytics-tracker.coffee":20,"./app/_components.header-search.coffee":21,"./app/_components.headroom-menu.coffee":22,"./app/_components.lightbox.coffee":23,"./app/_components.login-control.coffee":25,"./app/_components.longform.coffee":26,"./app/_components.menu-toggles.coffee":27,"./app/_components.mobile-menu.coffee":28,"./app/_components.newsletter-terms.coffee":30,"./app/_components.radium-one.coffee":33,"./app/_components.search-results.coffee":34,"./app/_components.section-watcher.coffee":35,"./app/_components.social-api-notifier.coffee":36,"./app/_components.social-tracker.coffee":37,"./app/_components.splitpost":39,"./app/_components.tabs.coffee":40,"./app/_components.tracker.coffee":41,"./app/_components.typekit.coffee":42,"./app/_components.umbel-client.coffee":43,"./app/_components.umbel-tracker.coffee":44,"./app/_initialisers.iframe-resize.coffee":46,"./app/_initialisers.smartresize.coffee":47,"./app/_initialisers.umbel.coffee":48,"./app/_initialisers.views-init.coffee":49,"./app/_utilities.i18n.coffee":50,"./app/_utilities.post-message.coffee":51,"./app/_utilities.utilities.coffee":52,"js-logger":58}],2:[function(require,module,exports){
var FMPolarAd, PlatformDetection;

PlatformDetection = require('./_components.platform-detection.coffee');

FMPolarAd = (function() {
  FMPolarAd.adServer = 'dfp';

  FMPolarAd.adSize = '2x2';

  FMPolarAd.adPublisherID = '13526690';

  FMPolarAd.infoText = "This content is sponsored and made possible by the brand, who paid us to place this story or link. It was not written by our editorial staff and does not necessarily reflect our views. Our staff has reviewed it to ensure the highest quality content.";

  FMPolarAd.infoButtonText = "?";

  FMPolarAd.templates = [
    {
      label: "Polar Full Width Carousel",
      adID: "Polar_Full_Width_Carousel",
      location: ".template-feature-slider .feature-slider .slides li:nth-child(1)",
      markup: FM.Views.feature_huge,
      infoText: FMPolarAd.constructor.infoText,
      infoButtonText: FMPolarAd.constructor.infoButtonText,
      onRender: function($element) {
        var el, slider;
        el = $element.remove();
        slider = $('.feature-slider').data('flexslider');
        return slider.addSlide(el);
      },
      onFill: function(data) {},
      onError: function(error) {}
    }, {
      label: "Polar Tabbed Carousel",
      adID: "Polar_Tabbed_Carousel",
      location: ".template-feature-tabs .feature-wrap nav.tabs-menu a:nth-child(1)",
      markup: FM.Views.feature_tabs,
      infoText: FMPolarAd.constructor.infoText,
      infoButtonText: FMPolarAd.constructor.infoButtonText,
      onRender: function($element) {
        $element.next().remove();
        return window.tabs = new Tabs();
      },
      onFill: function(data) {
        var elem;
        elem = $('.template-feature-tabs .feature-wrap article.feature-largest:nth-child(1)');
        elem.find("a.feature-link").attr("href", data.link);
        elem.find("img.article-largest-thumb").attr("src", data.image.href);
        return elem.find(".feature-title").html(data.title);
      },
      onError: function(error) {}
    }, {
      label: "Polar Feature Grid",
      adID: "Polar_Feature_Grid",
      location: ".template-feature-grid .feature-wrap .grid-4 article:first-child",
      markup: FM.Views.feature_grid,
      infoText: FMPolarAd.constructor.infoText,
      infoButtonText: FMPolarAd.constructor.infoButtonText,
      onRender: function($element) {
        return $element.next().remove();
      },
      onFill: function(data) {},
      onError: function(error) {}
    }, {
      label: "Polar Related Articles section",
      adID: "Polar_Related_Category_Articles_Sidebar",
      location: ".c-related-articles--row .c-card__wrapper:first-child",
      markup: FM.Views.post_card_related_after_article,
      infoText: FMPolarAd.constructor.infoText,
      infoButtonText: FMPolarAd.constructor.infoButtonText,
      onRender: function($element) {
        var ref;
        this.platformDetection = new PlatformDetection();
        if (((ref = this.platformDetection.currentPlatform) === 'small' || ref === 'medium') && $('.o-section--8').length > 0) {
          $($element).appendTo('.o-section--4').attr('class', 'c-card-wrapper o-col-md--4');
        } else {
          $element.nextAll().last().remove();
        }
        return $element.addClass('c-card—sponsored');
      },
      onFill: function(data) {},
      onError: function(error) {}
    }, {
      label: "Polar Related Articles in Article Intro Aside - V2",
      adID: "Polar_Related_Articles_in_Article_Intro_Aside",
      location: ".c-article-body__aside .c-card__wrapper:first-child",
      markup: FM.Views.post_card_related_aside,
      infoText: FMPolarAd.constructor.infoText,
      infoButtonText: FMPolarAd.constructor.infoButtonText,
      onRender: function($element) {
        return $element.addClass('c-card—sponsored');
      },
      onFill: function(data) {},
      onError: function(error) {}
    }, {
      label: "Polar Articles in Home Page (variant 1)",
      adID: "Polar_Articles_Home_Page",
      location: ".lander-sections .o-lander--position-5 .c-card__wrapper:first-child",
      markup: FM.Views.post_card_home_page,
      infoText: FMPolarAd.constructor.infoText,
      infoButtonText: FMPolarAd.constructor.infoButtonText,
      onRender: function($element) {
        var classStr;
        classStr = $element.next().attr('class') + ' c-card—sponsored';
        $element.attr('class', classStr);
        return $element.nextAll().last().remove();
      },
      onFill: function(data) {},
      onError: function(error) {}
    }
  ];

  function FMPolarAd(propertyID, secondaryPageURL) {
    this.propertyID = propertyID;
    this.secondaryPageURL = secondaryPageURL;
    this.init();
    this.initScript(document, "script", "nativeads-plugin");
  }

  FMPolarAd.prototype.init = function() {
    window.NATIVEADS = window.NATIVEADS || {};
    window.NATIVEADS.injectedAt = new Date().getTime();
    return window.NATIVEADS.onReady = (function(_this) {
      return function(ads) {
        ads.setPropertyID(_this.propertyID);
        _this.initSecondaryPage(ads);
        return _this.initSlots(ads);
      };
    })(this);
  };

  FMPolarAd.prototype.initSecondaryPage = function(ads) {
    ads.setSecondaryPageURL(this.secondaryPageURL);
    return ads.configureSecondaryPage({
      dateFormat: Utilities.formatDate,
      binding: {
        sponsor: {
          link: "#sponsor-link",
          logo: "#sponsor-logo",
          name: "#sponsor-name"
        },
        title: "#title",
        summary: "#summary",
        content: "#content",
        author: "#author",
        pubDate: "#pub-date",
        image: {
          href: "#media",
          caption: "#media-caption",
          credits: "#media-credits"
        }
      },
      onFill: function(data) {},
      onRender: function() {},
      onError: function(error) {},
      track: function() {
        var tags;
        tags = $("meta[name='news_keywords']");
        if (tags.length && tags.attr("content").length) {
          tags = tags.attr("content").split(", ");
          if ($.inArray('sponsored-content', tags) !== -1) {
            return 'inbound';
          }
        }
      }
    });
  };

  FMPolarAd.prototype.initSlots = function(ads) {
    return $.each(this.constructor.templates, (function(_this) {
      return function(index, template) {
        var firstSelector;
        firstSelector = $(template.location.split(" ")[0]);
        if (firstSelector.length) {
          template.category || (template.category = firstSelector.data("category"));
          template.tags || (template.tags = firstSelector.data("tag"));
          return ads.insertPreview({
            dateFormat: Utilities.formatDate,
            label: template.label,
            unit: {
              server: _this.constructor.adServer,
              id: _this.generateAdId(template),
              size: _this.constructor.adSize,
              targets: {
                articleCat: template.category,
                tags: template.tags,
                partner: document.location.hostname
              }
            },
            location: template.location,
            infoText: template.infoText,
            infoButtonText: template.infoButtonText,
            template: template.markup,
            onRender: template.onRender,
            onFill: function(data) {
              template.onFill(data);
              return Tracker.track('Advertising:Polar', 'AdUnit:Filled', template.label);
            },
            onError: function(error) {
              template.onError(error);
              return Tracker.track('Advertising:Polar', 'AdUnit:Error', error);
            }
          });
        }
      };
    })(this));
  };

  FMPolarAd.prototype.generateAdId = function(template) {
    switch (this.constructor.adServer) {
      case 'dfp':
        return "/" + this.constructor.adPublisherID + "/" + template.adID;
      default:
        return template.adID;
    }
  };

  FMPolarAd.prototype.initScript = function(d, s, id) {
    var fjs, js;
    fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.type = "text/javascript";
    js.async = true;
    js.src = "http://plugin.mediavoice.com/plugin.js";
    return fjs.parentNode.insertBefore(js, fjs);
  };

  return FMPolarAd;

})();

module.exports = FMPolarAd;


},{"./_components.platform-detection.coffee":32}],3:[function(require,module,exports){
var AcfMaps;

AcfMaps = (function() {
  var addMarker, centerMap, renderMap;

  function AcfMaps() {
    $('.acf-map').each(function() {
      return renderMap($(this));
    });
  }

  renderMap = function($el) {
    var $markers, args, map;
    $markers = $el.find('.marker');
    args = {
      zoom: 16,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map($el[0], args);
    map.markers = [];
    $markers.each(function() {
      return addMarker($(this), map);
    });
    return centerMap(map);
  };

  addMarker = function($marker, map) {
    var infowindow, latlng, marker;
    latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
    marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
    map.markers.push(marker);
    if ($marker.html()) {
      infowindow = new google.maps.InfoWindow({
        content: $marker.html()
      });
      return google.maps.event.addListener(marker, 'click', function() {
        return infowindow.open(map, marker);
      });
    }
  };

  centerMap = function(map) {
    var bounds;
    bounds = new google.maps.LatLngBounds;
    $.each(map.markers, function(i, marker) {
      var latlng;
      latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      return bounds.extend(latlng);
    });
    if (map.markers.length === 1) {
      map.setCenter(bounds.getCenter());
      return map.setZoom(16);
    } else {
      return map.fitBounds(bounds);
    }
  };

  return AcfMaps;

})();

module.exports = AcfMaps;


},{}],4:[function(require,module,exports){
var AdLoader, AdUnit, Logger, throttle;

require('adtechdac');

throttle = require('throttleit');

Logger = require('js-logger');

AdUnit = require('./_components.ad-unit');

AdLoader = (function() {
  function AdLoader() {
    this.logger = Logger.get("AdLoader");
    this.logger.info("@constructor", "Setting up AdLoader with network 1690.1");
    this.runQueued = false;
    this.debug = true;
    this.isBlocked = false;
    this.adblock_detect();
    if (typeof ADTECH !== "undefined" && ADTECH !== null) {
      ADTECH.config.page = {
        protocol: 'http',
        server: 'adserver.adtech.de',
        network: '1690.1',
        debugMode: this.debug,
        enableMultiAd: this.runQueued,
        responsiveCheckTimeout: 150,
        performGeoDetection: false,
        performScreenDetection: false,
        performTimezoneDetection: false,
        performFlashDetection: false,
        performRichMediaDetection: false,
        params: {
          loc: '100'
        }
      };
      this.initAds();
      this.listenForChanges();
      $(window).on('scroll', throttle((function(_this) {
        return function() {
          return $(_this).trigger('Scroll.AdLoader.FM');
        };
      })(this), 1000));
    } else {
      this.isBlocked = true;
      this.logger.warn('@init', 'ADTECH library blocked');
    }
  }

  AdLoader.prototype.adblock_detect = function() {
    return $.ajax({
      url: "/adtech/advert.js",
      dataType: "script",
      success: (function(_this) {
        return function() {
          _this.adblock_detected = false;
          return window.Tracker.track("AdBlock", "Detected", "false");
        };
      })(this),
      error: (function(_this) {
        return function() {
          _this.adblock_detected = true;
          return window.Tracker.track("AdBlock", "Detected", "true");
        };
      })(this)
    });
  };

  AdLoader.prototype.initAds = function(scopes) {
    var adslots, scopeSelector;
    this.ads = [];
    this.inlineAds || (this.inlineAds = []);
    if (scopes) {
      scopeSelector = $.map(scopes, function(scope) {
        return scope + " .js-adslot";
      });
      adslots = $(scopeSelector.join(","));
    } else {
      adslots = $('.js-adslot');
    }
    $.each(adslots, (function(_this) {
      return function(i, elem) {
        var adUnit;
        adUnit = new AdUnit(elem, {
          adLoader: _this
        });
        _this.ads.push(adUnit);
        if (adUnit.inline === true) {
          return _this.inlineAds.push(adUnit);
        }
      };
    })(this));
    return this.assignCompanionSlots();
  };

  AdLoader.prototype.assignCompanionSlots = function() {
    return $.each(this.ads, (function(_this) {
      return function(i, ad) {
        return ad.companionUnits = _this.ads.filter(function(otherAd) {
          return otherAd.position === ad.position && otherAd !== ad;
        });
      };
    })(this));
  };

  AdLoader.prototype.loadAds = function() {
    return $.each(this.ads.concat(this.inlineAds), function(i, ad) {
      return ad.maybeLoad();
    });
  };

  AdLoader.prototype.runQueue = function() {
    var options;
    options = {};
    return ADTECH.executeQueue(options);
  };

  AdLoader.prototype.listenForChanges = function() {
    return $(window).on('PageLoaded.PageLoader.FM SplitPost.PageLoader.FM', throttle((function(_this) {
      return function(e, data) {
        var scopes;
        scopes = data != null ? data.scopes : void 0;
        _this.logger.info('@listenForChanges', e.type, scopes);
        _this.initAds(scopes);
        return _this.loadAds();
      };
    })(this), 2000));
  };

  return AdLoader;

})();

module.exports = AdLoader;


},{"./_components.ad-unit":6,"adtechdac":54,"js-logger":58,"throttleit":69}],5:[function(require,module,exports){
var AdUnitIframe;

AdUnitIframe = (function() {
  function AdUnitIframe(elem) {
    this.elem = elem;
    this.adId = this.elem.data("ad-id");
    this.width = this.elem.data('ad-width');
    this.height = this.elem.data('ad-height');
    this.sizeCode = this.elem.data('ad-size-code') || -1;
    this.keywords = this.elem.data("ad-keywords") || [];
    this.kv = this.elem.data("ad-kv") || {};
  }

  AdUnitIframe.prototype.maybeLoad = function() {
    return this.load();
  };

  AdUnitIframe.prototype.load = function() {
    this.reset();
    return this.elem.html(this.markup());
  };

  AdUnitIframe.prototype.reset = function() {
    return this.elem.html("");
  };

  AdUnitIframe.prototype.markup = function() {
    return $("<iframe></iframe>").attr({
      width: this.width,
      height: this.height,
      scrolling: "No",
      frameborder: 0,
      marginheight: 0,
      marginwidth: 0,
      src: "http://adserver.adtech.de/adiframe/3.0/1690.1/" + this.adId + "/0/" + this.sizeCode + "/ADTECH;target=_blank;key=" + (this.keys()) + ";" + (this.kvs())
    });
  };

  AdUnitIframe.prototype.keys = function() {
    return this.keywords.join("+");
  };

  AdUnitIframe.prototype.kvs = function() {
    return $.map(this.kv, function(v, k) {
      return "kv" + k + "=" + v;
    }).join(';');
  };

  return AdUnitIframe;

})();

module.exports = AdUnitIframe;


},{}],6:[function(require,module,exports){
var AdUnit, Logger, PlatformDetection, Promise, Spacefinder, Tock,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

require('adtechdac');

Logger = require('js-logger');

Tock = require('tocktimer');

Promise = require('promise');

PlatformDetection = require('./_components.platform-detection.coffee');

Spacefinder = require('./_components.spacefinder.coffee');

AdUnit = (function() {
  var DEFAULTS;

  DEFAULTS = {
    refreshInterval: 0,
    loadOnlyViewable: true
  };

  function AdUnit(elem, options) {
    this.elem = elem;
    this.refresh = bind(this.refresh, this);
    this.onLoadError = bind(this.onLoadError, this);
    this.onLoadComplete = bind(this.onLoadComplete, this);
    this.maybeLoad = bind(this.maybeLoad, this);
    this.logger = Logger.get('AdUnit');
    this.options = $.extend(DEFAULTS, options);
    this.elem = $(this.elem);
    this.elem.data('ad-unit', this);
    this.rawElem = this.elem.get(0);
    this.platformDetection = new PlatformDetection();
    this.adLoader = this.options.adLoader;
    this.runQueued = this.adLoader.runQueued;
    this.id = this.options.id || this.elem.data('ad-id');
    this.bounds = this.options.bounds || this.elem.data('ad-bounds');
    this.type = this.options.type || this.elem.data('ad-type');
    this.size = this.options.size || this.elem.data('ad-size');
    this.position = this.options.position || this.elem.data('ad-position') || 0;
    this.keywords = this.options.keywords || this.elem.data('ad-keywords');
    this.kv = this.options.kv || this.elem.data('ad-kv');
    this.inline = this.options.inline || this.elem.data('ad-inline');
    this.companionUnits = this.options.companionUnits || [];
    this.keywords = Object.keys(this.keywords).map((function(_this) {
      return function(key) {
        return _this.keywords[key];
      };
    })(this));
    this.resetState();
    this.elem.data("ad-unit", this);
    this.initResponsive();
    this.initViewable();
  }

  AdUnit.prototype.setElemId = function() {
    this.uniqueId = new Date().getTime();
    this.elemId = "fm-js-ad-unit-" + this.type + "-" + this.position + "-" + this.uniqueId;
    return this.elem.prop('id', this.elemId);
  };

  AdUnit.prototype.resetState = function() {
    this.setElemId();
    this.logger.info("@resetState " + this.elemId);
    this.loading = false;
    this.loaded = false;
    return this.failed = false;
  };

  AdUnit.prototype.findSpace = function() {
    return new Promise((function(_this) {
      return function(resolve) {
        var ref, spacefinder;
        if (_this.inline) {
          if ((ref = _this.platformDetection.platform()) === 'small' || ref === 'medium') {
            spacefinder = new Spacefinder();
            return spacefinder.getParaWithSpace().then(function(space) {
              if ($.contains(document.documentElement, _this.elem[0])) {
                _this.elem.remove();
              }
              if (space === void 0) {
                $('.single-content').after(_this.elem);
              } else {
                $(space).after(_this.elem);
              }
              return resolve();
            });
          }
        } else {
          return resolve();
        }
      };
    })(this));
  };

  AdUnit.prototype.getReady = function() {
    return Promise.all(this.findSpace());
  };

  AdUnit.prototype.maybeLoad = function(e) {
    return this.getReady().then((function(_this) {
      return function() {
        if (_this.loading || _this.loaded) {
          return;
        }
        if ((e != null ? e.companion : void 0) === true) {
          return _this.load();
        }
        if (!_this.options.loadOnlyViewable) {
          return _this.load();
        }
        if (_this.visible()) {
          _this.load();
          return $.each(_this.companionUnits, function(i, ad) {
            _this.logger.info("@maybeLoad", _this.elemId + " triggered loading of companion " + ad.elemId);
            if (ad !== _this) {
              return ad.maybeLoad({
                companion: true
              });
            }
          });
        }
      };
    })(this));
  };

  AdUnit.prototype.load = function() {
    var options;
    this.loading = true;
    $(this).off('Scroll.AdUnit.FM');
    options = {
      placement: this.id,
      adContainerId: this.elemId,
      complete: this.onLoadComplete,
      error: this.onLoadError,
      kv: this.kv,
      params: {
        key: this.keywords.join('+'),
        target: '_blank'
      }
    };
    this.elem.css('min-height', this.elem.height());
    if (this.runQueued) {
      ADTECH.enqueueAd(options);
      return this.logger.info('@load', 'Ad Queued:', this.elemId);
    } else {
      return ADTECH.loadAd(options);
    }
  };

  AdUnit.prototype.onLoadComplete = function() {
    this.loading = false;
    this.loaded = true;
    this.logger.info('@onLoadComplete', 'Ad load complete:', this.elemId);
    $(this.elem).css({
      'min-height': ''
    });
    if (this.refreshable()) {
      return this.timer.start(this.options.refreshInterval);
    }
  };

  AdUnit.prototype.onLoadError = function() {
    this.loading = false;
    this.loaded = false;
    this.failed = true;
    $(this.elem).css({
      'min-height': ''
    });
    return this.logger.warn('@onLoadError', 'Ad load error:', this.elemId);
  };

  AdUnit.prototype.visible = function() {
    var rect;
    rect = this.rawElem.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && (rect.top + 50) <= $(window).height() && (rect.left + 50) <= $(window).width();
  };

  AdUnit.prototype.initRefreshTimer = function() {
    if (this.refreshable()) {
      return this.timer = new Tock({
        interval: this.options.refreshInterval,
        countdown: true,
        complete: this.refresh
      });
    }
  };

  AdUnit.prototype.refresh = function() {
    this.timer.reset();
    if (this.loaded && this.viewable() && this.userShowsIntent()) {
      return this.load();
    }
  };

  AdUnit.prototype.refreshable = function() {
    return this.options.refreshInterval >= 2000;
  };

  AdUnit.prototype.userShowsIntent = function() {
    return true;
  };

  AdUnit.prototype.initViewable = function() {
    if (this.options.loadOnlyViewable && (this.adLoader != null)) {
      $(this).on('Scroll.AdUnit.FM', (function(_this) {
        return function(e, data) {
          return _this.maybeLoad(e);
        };
      })(this));
      return $(this.adLoader).on('Scroll.AdLoader.FM', (function(_this) {
        return function(e, data) {
          return $(_this).trigger('Scroll.AdUnit.FM', data);
        };
      })(this));
    }
  };

  AdUnit.prototype.initResponsive = function() {
    return ADTECH.config.placements[this.id] = {
      responsive: {
        useresponsive: true,
        bounds: this.bounds
      }
    };
  };

  return AdUnit;

})();

module.exports = AdUnit;


},{"./_components.platform-detection.coffee":32,"./_components.spacefinder.coffee":38,"adtechdac":54,"js-logger":58,"promise":60,"tocktimer":70}],7:[function(require,module,exports){
var Alert, docCookies;

docCookies = require('mozilla-doc-cookies');

Alert = (function() {
  function Alert(target, cookieName) {
    var element;
    this.target = target;
    this.cookieName = cookieName;
    this.isShowingClass = 'is-showing';
    element = document.querySelector(this.target);
    if (element == null) {
      return;
    }
    this.containerClasses = document.querySelector(this.target).classList;
    this.closeButton = document.querySelector(this.target + " .js-close");
    this.showMessage();
  }

  Alert.prototype.bindEvents = function() {
    return this.closeButton.addEventListener('click', (function(_this) {
      return function(e) {
        e.preventDefault();
        _this.containerClasses.toggle(_this.isShowingClass);
        return _this.registerCookie();
      };
    })(this));
  };

  Alert.prototype.showMessage = function() {
    if (!this.cookieExists()) {
      this.containerClasses.toggle(this.isShowingClass);
      return this.bindEvents();
    }
  };

  Alert.prototype.registerCookie = function() {
    var expires;
    if (this.cookieName == null) {
      return;
    }
    expires = new Date();
    expires.setDate(expires.getDate() + 365);
    return docCookies.setItem(this.cookieName, true, expires, '/');
  };

  Alert.prototype.cookieExists = function() {
    if (this.cookieName == null) {
      return false;
    }
    if (docCookies.getItem(this.cookieName) != null) {
      return true;
    } else {
      return false;
    }
  };

  return Alert;

})();

module.exports = Alert;


},{"mozilla-doc-cookies":59}],8:[function(require,module,exports){
var AsyncPostsLoader, Logger, throttle,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Logger = require('js-logger');

throttle = require('throttleit');

AsyncPostsLoader = (function() {
  function AsyncPostsLoader() {
    this.isInView = bind(this.isInView, this);
    this.logger = Logger.get('AsyncLoader');
    this.apiURL = '/index.php?__async_posts=1';
    this.placeholder = $('.js-async-posts');
    this.category = 'none';
    this.maxLoads = 15;
    this.throttledIsInView = throttle(this.isInView, 200);
    $(window).on('scroll', {
      target: this.placeholder
    }, this.throttledIsInView);
  }

  AsyncPostsLoader.prototype.isInView = function(event) {
    var screenBottom, target, threshold, top;
    target = event.data.target;
    if (target.length) {
      this.logger.info("isInView");
      top = target.offset().top;
      threshold = 700;
      screenBottom = window.pageYOffset + $(window).height();
      if (screenBottom > (top - threshold)) {
        if (target.length > 0) {
          this.getPosts();
          this.logger.info("isInView", "remove event listener");
          return $(window).off('scroll', this.throttledIsInView);
        }
      }
    }
  };

  AsyncPostsLoader.prototype.getPosts = function() {
    this.category = this.placeholder.data('category');
    this.page = this.placeholder.data('page') || 1;
    if (this.category) {
      $(".js-async-posts").addClass("c-async-posts--loading");
      return $.ajax({
        url: this.apiURL + "&category=" + this.category + "&page=" + this.page,
        success: (function(_this) {
          return function(posts) {
            _this.logger.info('getPosts', 'success');
            if (posts) {
              return _this.renderPosts(posts);
            }
          };
        })(this)
      });
    }
  };

  AsyncPostsLoader.prototype.renderPosts = function(posts) {
    $(posts).insertBefore(this.placeholder);
    adLoader.initAds([".js-async-posts-wrap:last"]);
    $(".js-async-posts-wrap:last").hide();
    setTimeout((function(_this) {
      return function() {
        $(".js-async-posts-wrap:last").show();
        if (_this.page < _this.maxLoads && $(posts).data("all-loaded") !== 1) {
          _this.placeholder.replaceWith(_this.placeholder.clone().attr("data-page", _this.page + 1).removeClass("c-async-posts--loading"));
        } else {
          _this.placeholder.remove();
          $(".js-no-more-posts:last").css("display", "inline-block");
        }
        _this.placeholder = $('.js-async-posts');
        return $(window).on('scroll', {
          target: _this.placeholder
        }, _this.throttledIsInView);
      };
    })(this), 500);
    return Tracker.trackPageview(location.pathname + ("#scroll-page-" + this.page));
  };

  return AsyncPostsLoader;

})();

module.exports = AsyncPostsLoader;


},{"js-logger":58,"throttleit":69}],9:[function(require,module,exports){
var BackToTop;

BackToTop = (function() {
  function BackToTop() {
    this.body = $('body, html');
    this.scrollToX();
  }

  BackToTop.prototype.scrollToX = function() {
    return $(".scroll-to").on('click', (function(_this) {
      return function(e) {
        var el, targetID;
        e.preventDefault();
        el = e.currentTarget;
        targetID = $(el).attr('href');
        return _this.body.animate({
          scrollTop: $(targetID).offset().top
        }, 800);
      };
    })(this));
  };

  return BackToTop;

})();

module.exports = BackToTop;


},{}],10:[function(require,module,exports){
var Competitions, Logger, docCookies,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

docCookies = require('mozilla-doc-cookies');

Logger = require('js-logger');

Competitions = (function() {
  function Competitions() {
    this.createIframes = bind(this.createIframes, this);
    this.initCompetitions = bind(this.initCompetitions, this);
    this.setup = bind(this.setup, this);
    this.logger = Logger.get('Competitions');
    this.setup();
    $(window).on("FM:onSplitPostPageChanged", (function(_this) {
      return function(e, data) {
        _this.logger.info("init - FM:onSplitPostPageChanged");
        return _this.setup();
      };
    })(this));
  }

  Competitions.prototype.setup = function() {
    this.initCompetitions();
    if (!this.competitions.length) {
      return false;
    }
    this.bindMessageListener();
    this.createIframes();
    return this.trackSubmit();
  };

  Competitions.prototype.initCompetitions = function() {
    return this.competitions = $(".competition-embed");
  };

  Competitions.prototype.bindMessageListener = function() {
    return Utilities.PostMessage.handle((function(_this) {
      return function(e) {
        var data;
        if (!e.data) {
          return;
        }
        if (_this.checkMessage(e.data)) {
          return;
        }
        data = JSON.parse(e.data);
        return _this.competitions.filter("[data-comp-id=" + data.comp_id + "][data-mode=" + data.mode + "]").find("iframe").height(parseInt(data.height));
      };
    })(this));
  };

  Competitions.prototype.checkMessage = function(data) {
    return data.toString().indexOf("resize_iframe") === -1;
  };

  Competitions.prototype.createIframes = function() {
    return this.competitions.each((function(_this) {
      return function(i, el) {
        var iframe, src;
        el = $(el);
        if (_this.competitionCookieExists(el.data("comp-id")) && el.data("mode") === "widget") {
          el.parents(".widget").remove();
        }
        iframe = $("<iframe></iframe>");
        src = el.data("src");
        iframe.attr({
          src: src,
          frameborder: 0,
          width: el.width(),
          seamless: true
        });
        return el.addClass("is-active").html("").append(iframe);
      };
    })(this));
  };

  Competitions.prototype.competitionCookieExists = function(id) {
    var cookie;
    cookie = $("body").data("site-slug") + "_competition_" + id;
    if (docCookies.getItem(cookie) != null) {
      return true;
    } else {
      return false;
    }
  };

  Competitions.prototype.trackSubmit = function() {
    return $(".widget.widget_competition form").on("submit", function(e) {
      return track("Competition Widget", "Submitted");
    });
  };

  return Competitions;

})();

module.exports = Competitions;


},{"js-logger":58,"mozilla-doc-cookies":59}],11:[function(require,module,exports){
var ContentSlider;

require('flexslider');

ContentSlider = (function() {
  function ContentSlider() {
    this.content_slider = $(".content-slider");
    this.flexslider = void 0;
    if (this.content_slider.length > 0) {
      $.each(this.content_slider, (function(_this) {
        return function(k, slider) {
          return _this.setupSlider(k, slider);
        };
      })(this));
      $(window).resize((function(_this) {
        return function() {
          return $.each(_this.content_slider, function(k, slider) {
            return _this.resizeSlider(k, slider);
          });
        };
      })(this));
    }
  }

  ContentSlider.prototype.setupSlider = function(k, slider) {
    slider = $(slider);
    slider.flexslider({
      animation: "slide",
      slideshow: false,
      itemWidth: slider.find("article").width(),
      itemMargin: 20,
      minItems: this.getGridSize(slider),
      maxItems: this.getGridSize(slider),
      selector: ".slides .slide",
      prevText: "<i class='fa fa-angle-left'></i>",
      nextText: "<i class='fa fa-angle-right'></i>"
    });
  };

  ContentSlider.prototype.getGridSize = function(slider) {
    var article;
    article = $(slider).find("article");
    if (article.hasClass("article-small")) {
      if (slider.width() < 600) {
        return 2;
      } else {
        if (slider.width() < 900) {
          return 4;
        } else {
          return 6;
        }
      }
    } else {
      if (article.hasClass("article-medium")) {
        if (slider.width() < 600) {
          return 1;
        } else {
          if (slider.width() < 900) {
            return 3;
          } else {
            return 3;
          }
        }
      }
    }
  };

  ContentSlider.prototype.resizeSlider = function(k, slider) {
    slider = $(slider);
    slider.data("flexslider").vars.minItems = this.getGridSize(slider);
    slider.data("flexslider").vars.maxItems = this.getGridSize(slider);
  };

  return ContentSlider;

})();

module.exports = ContentSlider;


},{"flexslider":56}],12:[function(require,module,exports){
var FacebookComments;

FacebookComments = (function() {
  function FacebookComments() {
    this.isShowingClass = 'c-comments--is-showing';
    this.bindEvents();
  }

  FacebookComments.prototype.bindEvents = function() {
    return $('body').on('click', '.js-fb-comments .js-fb-comments-button', (function(_this) {
      return function(e) {
        var commentsBox;
        e.preventDefault();
        commentsBox = $(e.target).closest('.js-fb-comments');
        return commentsBox.toggleClass(_this.isShowingClass);
      };
    })(this));
  };

  return FacebookComments;

})();

module.exports = FacebookComments;


},{}],13:[function(require,module,exports){
var FacebookSDK, FacebookUser, Logger,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Logger = require('js-logger');

FacebookUser = require('./_components.facebook-user');

FacebookSDK = (function() {
  function FacebookSDK() {
    this.populatePersonalData = bind(this.populatePersonalData, this);
    this.clearPersonalData = bind(this.clearPersonalData, this);
    this.logger = Logger.get('FacebookSDK');
    this.user = null;
    this.appID = $("meta[property='fb:app_id']").prop("content");
    $.ajaxSetup({
      cache: true
    });
    $.getScript('//connect.facebook.net/en_UK/sdk.js', (function(_this) {
      return function() {
        FB.init({
          appId: _this.appID,
          version: 'v2.3',
          frictionlessRequests: true,
          status: true,
          cookie: true,
          xfbml: true,
          channelUrl: '//' + window.location.hostname + '/facebook/channel.html'
        });
        FB.Event.subscribe('auth.login', function(response) {
          _this.log("auth.login");
          return _this.doLogin(response);
        });
        FB.Event.subscribe('auth.logout', function(response) {
          _this.log("auth.logout");
          return _this.doLogout(response);
        });
        FB.Event.subscribe('xfbml.render', function(response) {
          _this.log("xfbml.render: " + (JSON.stringify(response)));
          return $(window).trigger("FM:onFacebookXFBMLRender");
        });
        FB.Event.subscribe('auth.statusChange', function(response) {
          _this.log("auth.statusChange");
          return _this.doLogin(response);
        });
        FB.Event.subscribe('auth.authResponseChange', function(response) {
          _this.log("auth.authResponseChange");
          return _this.doLogin(response);
        });
        FB.Event.subscribe('edge.create', function(href, widget) {
          _this.log("edge.create - " + href);
          return $(window).trigger("FM:onFacebookLike", {
            network: "facebook",
            action: "like",
            url: href
          });
        });
        FB.Event.subscribe('edge.remove', function(href, widget) {
          _this.log("edge.remove - " + href);
          return $(window).trigger("FM:onFacebookUnlike", {
            network: "facebook",
            action: "like",
            url: href
          });
        });
        FB.Event.subscribe('comment.create', function(response) {
          _this.log("comment.create " + (JSON.stringify(response)));
          return $(window).trigger("FM:onFacebookCommentCreated", {
            network: "facebook",
            action: "comment",
            url: response.href
          });
        });
        FB.Event.subscribe('comment.remove', function(response) {
          _this.log("comment.remove " + (JSON.stringify(response)));
          return $(window).trigger("FM:onFacebookCommentRemoved", {
            network: "facebook",
            action: "comment",
            url: response.href
          });
        });
      };
    })(this));
  }

  FacebookSDK.prototype.log = function(msg) {
    return this.logger.info(msg);
  };

  FacebookSDK.prototype.doLogin = function(response) {
    this.log(JSON.stringify(response));
    switch (response.status) {
      case 'connected':
        this.log("doLogin - status == connected");
        this.setupUser(response);
        this.setAccessToken(response.authResponse.accessToken);
        this.populatePersonalData(response);
        return $(window).trigger("FM:onFacebookConnected", response);
    }
  };

  FacebookSDK.prototype.doLogout = function(response) {
    this.log("doLogout" + JSON.stringify(response));
    this.clearPersonalData();
    return $(window).trigger("FM:onFacebookDisconnected", response);
  };

  FacebookSDK.prototype.setupUser = function(response) {
    return this.user = new FacebookUser(response);
  };

  FacebookSDK.prototype.send = function(url, callback) {
    return FB.ui({
      method: "send",
      link: url
    }, callback);
  };

  FacebookSDK.prototype.share = function(url, callback) {
    return FB.ui({
      method: "share",
      href: url
    }, callback);
  };

  FacebookSDK.prototype.like = function(url, callback) {
    return FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: url
      })
    }, callback);
  };

  FacebookSDK.prototype.clearPersonalData = function() {
    return this.user = null;
  };

  FacebookSDK.prototype.setAccessToken = function(access_token) {
    return this.access_token = access_token;
  };

  FacebookSDK.prototype.requestOptions = function() {
    return {
      access_token: this.access_token
    };
  };

  FacebookSDK.prototype.populatePersonalData = function() {
    return FB.api('/me', this.requestOptions(), (function(_this) {
      return function(response) {
        _this.log("populatePersonalData" + JSON.stringify(response));
        return _this.user = new FacebookUser(response);
      };
    })(this));
  };

  return FacebookSDK;

})();

module.exports = FacebookSDK;


},{"./_components.facebook-user":14,"js-logger":58}],14:[function(require,module,exports){
var FacebookUser;

FacebookUser = (function() {
  function FacebookUser(me) {
    this.user = me;
    this.id = this.user.id;
    this.email = this.user.email;
    this.name = this.user.name;
    this.first_name = this.user.first_name;
    this.last_name = this.user.last_name;
    this.gender = this.user.gender;
    this.birthday = this.user.birthday;
    this.address = null;
  }

  return FacebookUser;

})();

module.exports = FacebookUser;


},{}],15:[function(require,module,exports){
var FBOpenGraphObject;

FBOpenGraphObject = (function() {
  function FBOpenGraphObject(sdk, actionType, object) {
    this.facebookSDK = sdk;
    this.appNamespace = this.facebookSDK.appNamespace;
    this.actionType = actionType;
    this.object = object;
  }

  FBOpenGraphObject.prototype.create = function(url, callback) {
    var item, opts;
    item = this.object.toString();
    opts = {};
    opts[item] = url;
    return FB.api("me/" + this.appNamespace + ":" + this.actionType, 'post', opts, callback);
  };

  FBOpenGraphObject.prototype.get = function(callback) {
    return FB.api("me/" + this.appNamespace + ":" + this.actionType, 'get', callback);
  };

  return FBOpenGraphObject;

})();

module.exports = FBOpenGraphObject;


},{}],16:[function(require,module,exports){
var FeatureSlider;

FeatureSlider = (function() {
  function FeatureSlider() {
    var homepageSlider;
    homepageSlider = $(".c-feature-slider");
    if (homepageSlider.length > 0) {
      homepageSlider.flexslider({
        selector: ".js-slides .js-slides__slide",
        animation: "slide",
        pauseOnAction: false,
        prevText: "<i class='fa'></i>",
        nextText: "<i class='fa'></i>"
      });
    }
  }

  return FeatureSlider;

})();

module.exports = FeatureSlider;


},{}],17:[function(require,module,exports){
var GallerySeries,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

GallerySeries = (function() {
  function GallerySeries(el) {
    this.body = $("body");
    this.wrapper = el;
    this.slides = this.wrapper.find("figure");
    this.current = 0;
    this.count = this.slides.length;
    this.initBindings();
  }

  GallerySeries.prototype.initBindings = function() {
    var click;
    click = this.hasTouch() ? "touchend" : "click";
    this.touch_moving = false;
    this.wrapper.find(".series-nav-next").on(click, (function(_this) {
      return function(e) {
        _this.current = $(e.target).closest("figure").data("index");
        _this.move(1);
        e.preventDefault();
        return false;
      };
    })(this));
    return $(document).keydown((function(_this) {
      return function(e) {
        if (e.keyCode === 37) {
          return _this.move(-1);
        } else if (e.keyCode === 39) {
          return _this.move(1);
        }
      };
    })(this));
  };

  GallerySeries.prototype.move = function(dir) {
    var index, text;
    text = dir > 0 ? "Next" : "Prev";
    index = this.current + dir;
    if (!(index >= 0 && index < this.count)) {
      return;
    }
    this.scrollTo(index);
    return this.trackEvent(text + " Scroll");
  };

  GallerySeries.prototype.scrollTo = function(index) {
    this.current = index;
    return $('html, body').animate({
      scrollTop: $("#gallery-image-" + index).offset().top - 93
    }, 500);
  };

  GallerySeries.prototype.trackEvent = function(action) {
    if (!window.Tracker) {
      return;
    }
    return Tracker.track("Click:GallerySeries", action);
  };

  GallerySeries.prototype.hasTouch = function() {
    if (indexOf.call(window, 'ontouchstart') >= 0 || (window.DocumentTouch && document instanceof DocumentTouch) || typeof TouchEvent === "object") {
      return true;
    } else {
      return false;
    }
  };

  return GallerySeries;

})();

module.exports = GallerySeries;


},{}],18:[function(require,module,exports){
var AdUnitIframe, Gallery,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

AdUnitIframe = require('./_components.ad-unit-iframe.coffee');

Gallery = (function() {
  var SETTINGS;

  SETTINGS = {
    ads: {
      refreshRate: 1
    },
    pageview: {
      refreshRate: 3
    },
    breakpoints: {
      tablet: 960,
      mobile: 768
    }
  };

  function Gallery(el) {
    this.onFullscreenChange = bind(this.onFullscreenChange, this);
    this.body = $("body");
    this.wrapper = el;
    this.overlay = this.wrapper.find(".gallery-overlay");
    this.slides = this.overlay.find(".gallery-slide");
    this.viewport = this.overlay.find(".gallery-viewport");
    this.sidebar = this.overlay.find(".gallery-sidebar");
    this.adElem = this.overlay.find(".js-gallery-adslot");
    this.adUnit = new AdUnitIframe(this.adElem);
    this.current = 0;
    this.count = this.slides.length;
    this.initBindings();
  }

  Gallery.prototype.initBindings = function() {
    var click;
    click = this.hasTouch() ? "touchend" : "click";
    this.touchMoving = false;
    this.wrapper.find(".gallery-preamble").on(click, (function(_this) {
      return function(e) {
        _this.body.addClass("gallery-is-showing");
        _this.overlay.addClass("is-showing");
        _this.loadThumbs();
        _this.resize();
        _this.loadSlide(0);
        _this.trackEvent("Gallery Open");
        e.preventDefault();
        return false;
      };
    })(this));
    this.overlay.find(".gallery-close").on(click, (function(_this) {
      return function(e) {
        if (_this.overlay.hasClass("is-fullscreen")) {
          _this.exitFullscreen();
        } else {
          _this.closeGallery();
        }
        e.preventDefault();
        return false;
      };
    })(this));
    if (!this.hasFullscreen()) {
      this.overlay.find(".gallery-fullscreen").remove();
    }
    this.overlay.find(".gallery-fullscreen").on(click, (function(_this) {
      return function(e) {
        _this.toggleFullscreen();
        _this.trackEventOnce("Fullscreen");
        return false;
      };
    })(this));
    this.overlay.find('.gallery-mobile-caption-toggle, .gallery-mobile-caption').on(click, (function(_this) {
      return function(e) {
        return _this.toggleMobileCaption();
      };
    })(this));
    this.overlay.find(".gallery-thumbs-toggle").on(click, (function(_this) {
      return function(e) {
        _this.toggleThumbs();
        return _this.trackEventOnce("Toggle Thumbs");
      };
    })(this));
    this.overlay.find(".gallery-thumbs img").on('touchmove', (function(_this) {
      return function(e) {
        return _this.touchMoving = true;
      };
    })(this));
    this.overlay.find(".gallery-thumbs img").on(click, (function(_this) {
      return function(e) {
        if (!_this.touchMoving) {
          _this.loadSlide($(e.target).data("index"));
          _this.toggleThumbs();
          return _this.trackEvent("Thumb");
        } else {
          return _this.touchMoving = false;
        }
      };
    })(this));
    this.overlay.find(".gallery-next").on(click, (function(_this) {
      return function(e) {
        _this.move(1);
        e.preventDefault();
        return false;
      };
    })(this));
    this.overlay.find(".gallery-prev").on(click, (function(_this) {
      return function(e) {
        _this.move(-1);
        e.preventDefault();
        return false;
      };
    })(this));
    $(document).keydown((function(_this) {
      return function(e) {
        if (!_this.isActive()) {
          return;
        }
        if (e.keyCode === 37) {
          return _this.move(-1);
        } else if (e.keyCode === 39) {
          return _this.move(1);
        } else if (e.keyCode === 27) {
          return _this.closeGallery();
        }
      };
    })(this));
    return window.onresize = (function(_this) {
      return function() {
        return _this.resize();
      };
    })(this);
  };

  Gallery.prototype.move = function(dir) {
    var index, text;
    text = dir < 0 ? "Left" : "Right";
    index = this.current + dir;
    if (index === this.count) {
      index = 0;
    } else if (index === -1) {
      index = this.count - 1;
    }
    if (!(index >= 0 && index < this.count && this.isActive())) {
      return;
    }
    this.trackEvent(text + " Scroll");
    return this.loadSlide(index);
  };

  Gallery.prototype.loadSlide = function(index) {
    var data, img;
    if (!(index >= 0 && index < this.count && this.isActive())) {
      return;
    }
    img = $(this.slides[index]).find("img");
    data = img.data();
    this.loadCaption(data.caption || img.attr("alt"));
    this.loadMeta(data.meta);
    this.loadImage(img);
    this.loadAudio(index);
    this.maybeReloadAd();
    this.maybeTrackPageview();
    this.current = index;
    this.updateNavigation();
    this.updateCount();
    this.updateSlideWrapperOffset();
    return this.updateSlideOffset(img);
  };

  Gallery.prototype.loadCaption = function(caption) {
    return this.overlay.find(".gallery-caption, .gallery-mobile-caption").text(caption);
  };

  Gallery.prototype.loadMeta = function(meta) {
    var dd, dt, key, results, val;
    this.metaDl || (this.metaDl = this.sidebar.find(".gallery-meta"));
    this.metaDl.html("");
    if (meta !== false) {
      results = [];
      for (key in meta) {
        val = meta[key];
        dt = $("<dt></dt>").text(key);
        dd = $("<dd></dd>").text(val);
        results.push(this.metaDl.append(dt, dd));
      }
      return results;
    }
  };

  Gallery.prototype.loadImage = function(img) {
    var src;
    src = this.overlay.width() < SETTINGS.breakpoints.mobile ? img.data("src-mobile") : img.data("src");
    return img.attr("src", src);
  };

  Gallery.prototype.loadAudio = function(index) {
    this.sidebar.find(".gallery-audio-snippet").removeClass("is-active");
    return this.sidebar.find("#gallery-audio-snippet-" + index).addClass("is-active");
  };

  Gallery.prototype.updateCount = function() {
    return this.overlay.find(".gallery-count-pos").text(this.current + 1);
  };

  Gallery.prototype.updateNavigation = function() {
    this.overlay.find(".gallery-prev, .gallery-next").removeClass("is-hidden");
    if (this.current === 0) {
      this.overlay.find(".gallery-prev").addClass("is-hidden");
    }
    if (this.current === this.count - 1) {
      return this.overlay.find(".gallery-next").addClass("is-hidden");
    }
  };

  Gallery.prototype.updateSlideWrapperOffset = function() {
    return this.overlay.find('.gallery-slides-wrapper').css("left", -1 * this.viewportWidth() * this.current);
  };

  Gallery.prototype.updateSlideOffset = function(image) {
    var h, heightDiff, largest, marginTop, newHeight, newWidth, ratio, viewportHeight, viewportWidth, w, widthDiff;
    image || (image = $(this.slides[this.current]).find("img"));
    viewportHeight = this.viewportHeight();
    viewportWidth = this.viewportWidth();
    h = image.data("height") === 0 ? image.height() : image.data("height");
    w = image.data("width") === 0 ? image.width() : image.data("width");
    if (w > viewportWidth || h > viewportHeight) {
      widthDiff = w > viewportWidth ? w - viewportWidth : 0;
      heightDiff = h > viewportWidth ? h - viewportHeight : 0;
      largest = widthDiff > heightDiff ? "width" : "height";
      if (largest === "width" && (w / h) > (viewportWidth / viewportHeight)) {
        ratio = viewportWidth / w;
        newWidth = viewportWidth;
        newHeight = h * ratio;
        marginTop = (viewportHeight - newHeight) / 2;
      } else {
        ratio = viewportHeight / h;
        newWidth = w * ratio;
        newHeight = viewportHeight;
        marginTop = (viewportHeight - newHeight) / 2;
      }
    } else {
      marginTop = (viewportHeight - h) / 2;
    }
    return image.css({
      "height": newHeight || h,
      "width": newWidth || w,
      "margin-top": marginTop || ''
    });
  };

  Gallery.prototype.updateSlideDimensions = function() {
    var width;
    width = this.viewportWidth();
    this.overlay.find(".gallery-slides-wrapper").width(width * this.count).height(this.viewportHeight());
    return this.overlay.find(".gallery-slide").width(width);
  };

  Gallery.prototype.toggleThumbs = function() {
    this.overlay.toggleClass("thumbs-showing");
    return this.overlay.find(".gallery-thumbs").toggleClass("is-showing");
  };

  Gallery.prototype.toggleMobileCaption = function() {
    return this.overlay.find('.gallery-mobile-caption').toggleClass("is-showing");
  };

  Gallery.prototype.loadThumbs = function() {
    return this.overlay.find(".gallery-thumbs img").each(function() {
      return $(this).attr("src", $(this).data("src"));
    });
  };

  Gallery.prototype.maybeTrackPageview = function() {
    if (!this.isActive()) {
      return;
    }
    this.currentPageviewRefresh || (this.currentPageviewRefresh = 0);
    if (this.currentPageviewRefresh % SETTINGS.pageview.refreshRate === 0) {
      this.trackPageview();
    }
    return this.currentPageviewRefresh++;
  };

  Gallery.prototype.maybeReloadAd = function() {
    if (!this.isActive()) {
      return;
    }
    this.currentAdRefresh || (this.currentAdRefresh = 0);
    if (this.currentAdRefresh % SETTINGS.ads.refreshRate === 0) {
      if (this.overlay.hasClass("is-desktop") && !this.hasAdblock()) {
        return this.reloadAd();
      } else {
        return this.adUnit.reset();
      }
    } else {
      return this.currentAdRefresh++;
    }
  };

  Gallery.prototype.reloadAd = function() {
    var galleryMpuDisabled;
    galleryMpuDisabled = this.body.data("gallery-mpu-disabled");
    if (galleryMpuDisabled !== 1) {
      this.adUnit.maybeLoad();
      return this.trackEvent("Ad Reload");
    }
  };

  Gallery.prototype.resize = function() {
    var width;
    if (!this.isActive()) {
      return;
    }
    this.overlay.removeClass("is-tablet").removeClass("is-mobile").removeClass("is-desktop");
    width = this.overlay.width();
    if (width >= SETTINGS.breakpoints.tablet) {
      this.overlay.addClass("is-desktop");
    }
    if (width >= SETTINGS.breakpoints.mobile && width < SETTINGS.breakpoints.tablet) {
      this.overlay.addClass("is-tablet");
      this.adUnit.reset();
    } else if (width < SETTINGS.breakpoints.mobile) {
      this.overlay.addClass("is-mobile");
      this.adUnit.reset();
    }
    this.updateSlideDimensions();
    this.updateSlideWrapperOffset();
    return this.updateSlideOffset();
  };

  Gallery.prototype.toggleFullscreen = function() {
    if (this.fullScreenEnabled == null) {
      this.fullScreenEnabled = false;
    }
    if (this.fullScreenEnabled) {
      return this.exitFullscreen();
    } else {
      return this.enterFullscreen();
    }
  };

  Gallery.prototype.enterFullscreen = function() {
    var el;
    el = this.wrapper[0];
    document.onwebkitfullscreenchange = this.onFullscreenChange;
    document.onmozfullscreenchange = this.onFullscreenChange;
    document.onfullscreenchange = this.onFullscreenChange;
    if (el.webkitRequestFullscreen) {
      return el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    if (el.mozRequestFullScreen) {
      return el.mozRequestFullScreen();
    }
    return el.requestFullscreen();
  };

  Gallery.prototype.exitFullscreen = function() {
    document.cancelFullScreen = document.webkitExitFullscreen || document.mozCancelFullScreen || document.exitFullscreen;
    return document.cancelFullScreen();
  };

  Gallery.prototype.closeGallery = function() {
    this.body.removeClass("gallery-is-showing");
    this.overlay.removeClass("is-showing");
    this.adUnit.reset();
    return this.trackEvent("Gallery Close");
  };

  Gallery.prototype.onFullscreenChange = function() {
    var time;
    this.fullScreenEnabled = !this.fullScreenEnabled;
    time = this.fullScreenEnabled ? 800 : 300;
    return setTimeout((function(_this) {
      return function() {
        _this.overlay.toggleClass("is-fullscreen");
        return _this.resize();
      };
    })(this), time);
  };

  Gallery.prototype.isActive = function() {
    return this.overlay.hasClass("is-showing");
  };

  Gallery.prototype.viewportWidth = function() {
    return this.overlay.find(".gallery-viewport").width();
  };

  Gallery.prototype.viewportHeight = function() {
    return this.overlay.find(".gallery-viewport").height();
  };

  Gallery.prototype.trackEvent = function(action) {
    if (!window.Tracker) {
      return;
    }
    return Tracker.track("Click:Gallery", action);
  };

  Gallery.prototype.trackEventOnce = function(action) {
    this.alreadyTracked || (this.alreadyTracked = {});
    if (this.alreadyTracked[action]) {
      return;
    }
    this.trackEvent(action);
    return this.alreadyTracked[action] = true;
  };

  Gallery.prototype.trackPageview = function() {
    if (!window.Tracker) {
      return;
    }
    return Tracker.trackPageview(location.pathname + location.search + "#gallery-reload");
  };

  Gallery.prototype.hasAdblock = function() {
    return $("body").hasClass("adblock-active");
  };

  Gallery.prototype.hasTouch = function() {
    if (indexOf.call(window, 'ontouchstart') >= 0 || (window.DocumentTouch && document instanceof DocumentTouch) || typeof TouchEvent === "object") {
      return true;
    } else {
      return false;
    }
  };

  Gallery.prototype.hasFullscreen = function() {
    var i, len, prefix, ref;
    ref = ['webkit', 'moz', 'o', 'ms'];
    for (i = 0, len = ref.length; i < len; i++) {
      prefix = ref[i];
      if (document[prefix + "CancelFullScreen"]) {
        return true;
      }
    }
    return !!document['cancelFullScreen'] || false;
  };

  return Gallery;

})();

$(function() {
  return $(window).on("initGallery", function() {
    return $(".gallery").each(function() {
      return new Gallery($(this));
    });
  });
});

module.exports = Gallery;


},{"./_components.ad-unit-iframe.coffee":5}],19:[function(require,module,exports){
var GeoIP, docCookies,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

docCookies = require('mozilla-doc-cookies');

GeoIP = (function() {
  function GeoIP(el) {
    this.cookieName = "coresites_locale_dialog_hidden";
    this.cookieDays = 30;
    if (this.cookieExists()) {
      return;
    }
    this.body = $("body");
    this.getDialogContent();
    this.click = this.clickTouch();
  }

  GeoIP.prototype.getDialogContent = function() {
    return $.get("/wp-geoip-detect.php", (function(_this) {
      return function(data) {
        return _this.renderDialog(data);
      };
    })(this));
  };

  GeoIP.prototype.renderDialog = function(data) {
    this.body.append(data);
    this.overlay = $(".fixed-overlay");
    return $(".dismiss-locale").on(this.click, (function(_this) {
      return function(e) {
        _this.trackEvent("Dismiss dialog");
        return _this.closeDialog(e);
      };
    })(this));
  };

  GeoIP.prototype.closeDialog = function(e) {
    this.overlay.removeClass("is-showing");
    this.registerCookie();
    e.preventDefault();
    return false;
  };

  GeoIP.prototype.registerCookie = function() {
    var expires;
    if (this.cookieName == null) {
      return;
    }
    expires = new Date();
    expires.setDate(expires.getDate() + this.cookieDays);
    return docCookies.setItem(this.cookieName, "true", expires, '/');
  };

  GeoIP.prototype.cookieExists = function() {
    if (this.cookieName == null) {
      return false;
    }
    if (docCookies.getItem(this.cookieName) != null) {
      return true;
    } else {
      return false;
    }
  };

  GeoIP.prototype.clickTouch = function() {
    if (indexOf.call(window, 'ontouchstart') >= 0 || (window.DocumentTouch && document instanceof DocumentTouch) || typeof TouchEvent === "object") {
      return "touchend";
    } else {
      return "click";
    }
  };

  GeoIP.prototype.trackEvent = function(action) {
    if (!window.Tracker) {
      return;
    }
    return Tracker.track("Click:LocaleDialog", action);
  };

  return GeoIP;

})();

module.exports = GeoIP;


},{"mozilla-doc-cookies":59}],20:[function(require,module,exports){
var GoogleAnalyticsTracker, Logger;

Logger = require('js-logger');

GoogleAnalyticsTracker = (function() {
  function GoogleAnalyticsTracker() {
    this.trackEvents();
    this.trackPageviews();
    this.trackSocial();
    this.logger = Logger.get("GoogleAnalyticsTracker");
    this.log("GA Initialised");
  }

  GoogleAnalyticsTracker.prototype.trackEvents = function() {
    return $(window).on("FM:onTrackEvent", (function(_this) {
      return function(e, data) {
        var nonInteraction, value;
        _this.log('FM:onTrackEvent', data);
        value = 0;
        if (_this.universalAnalytics()) {
          nonInteraction = "1";
          return ga("site.send", {
            hitType: "event",
            eventCategory: data.category,
            eventAction: data.action,
            eventLabel: data.label,
            eventValue: value,
            nonInteraction: nonInteraction,
            hitCallback: data.callback
          });
        } else {
          if (_this.classicAnalytics()) {
            nonInteraction = true;
            _gaq.push(["site._trackEvent", data.category, data.action, data.label, data.value, nonInteraction]);
          }
          if (data.callback) {
            return data.callback();
          }
        }
      };
    })(this));
  };

  GoogleAnalyticsTracker.prototype.trackPageviews = function() {
    return $(window).on("FM:onTrackPageview", (function(_this) {
      return function(e, data) {
        _this.log('FM:onTrackPageview', data);
        if (_this.universalAnalytics()) {
          return ga("site.send", {
            hitType: "pageview",
            page: data.url
          });
        } else if (_this.classicAnalytics()) {
          return _gaq.push(["site._trackPageview", data.url]);
        }
      };
    })(this));
  };

  GoogleAnalyticsTracker.prototype.trackSocial = function() {
    return $(window).on("FM:onTrackSocial", (function(_this) {
      return function(e, data) {
        _this.log('FM:onTrackSocial', data);
        if (_this.universalAnalytics()) {
          return ga("site.send", {
            hitType: "social",
            socialNetwork: data.network,
            socialAction: data.action,
            socialTarget: data.url
          });
        } else if (_this.classicAnalytics()) {
          return _gaq.push(["site._trackSocial", data.network, data.action, data.url]);
        }
      };
    })(this));
  };

  GoogleAnalyticsTracker.prototype.universalAnalytics = function() {
    return window.ga != null;
  };

  GoogleAnalyticsTracker.prototype.classicAnalytics = function() {
    return window._gaq != null;
  };

  GoogleAnalyticsTracker.prototype.log = function(action, msg) {
    return this.logger.info(action, msg);
  };

  return GoogleAnalyticsTracker;

})();

module.exports = GoogleAnalyticsTracker;


},{"js-logger":58}],21:[function(require,module,exports){
var HeaderSearch;

HeaderSearch = (function() {
  function HeaderSearch() {
    var content, eventName;
    content = $(".header-search-bar");
    eventName = (typeof document.ontouchend === "undefined" ? "click" : void 0);
    $(document).on(eventName, ".search-form-toggle", function() {
      if (content.hasClass("open")) {
        content.find(".search-form-input").focus();
      }
      return false;
    });
  }

  return HeaderSearch;

})();

module.exports = HeaderSearch;


},{}],22:[function(require,module,exports){
var Headroom, HeadroomMenu;

Headroom = require('headroom.js');

HeadroomMenu = (function() {
  function HeadroomMenu() {
    if (this.isEnabled()) {
      this.setupHeadroom();
    }
  }

  HeadroomMenu.prototype.isEnabled = function() {
    if (typeof Headroom === !'function') {
      return false;
    }
    if (document.querySelector(".headroom-enabled") === null) {
      return false;
    }
    return true;
  };

  HeadroomMenu.prototype.setupHeadroom = function() {
    this.headerNav();
    this.bodySkin();
    return this.shareBar();
  };

  HeadroomMenu.prototype.headerNav = function() {
    var el, headroom;
    el = document.querySelector("#headroom.headroom-enabled");
    if (el !== null) {
      headroom = new Headroom(el, {
        offset: 85,
        tolerance: {
          up: 100,
          down: 0
        },
        classes: {
          initial: "animated",
          pinned: "slideInDown",
          unpinned: "slideOutUp"
        }
      });
      return headroom.init();
    }
  };

  HeadroomMenu.prototype.bodySkin = function() {
    var el, headroom;
    el = document.querySelector("body");
    if (el !== null) {
      headroom = new Headroom(el, {
        offset: 85,
        tolerance: {
          up: 100,
          down: 0
        }
      });
      return headroom.init();
    }
  };

  HeadroomMenu.prototype.shareBar = function() {
    var el, headroom;
    el = document.querySelector(".headroom .header-share");
    if (el !== null) {
      headroom = new Headroom(el, {
        offset: 650,
        tolerance: 0
      });
      return headroom.init();
    }
  };

  return HeadroomMenu;

})();

module.exports = HeadroomMenu;


},{"headroom.js":57}],23:[function(require,module,exports){
var Lightbox,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Lightbox = (function() {
  function Lightbox() {
    this.initJQueryExtension();
    $(document).ready(function() {
      return $(".single-content, .gallery-series, .longform-section p, .lightbox, .longform-section-content-with-image, .c-article-copy").find("a[href$=\".gif\"], a[href$=\".jpg\"], a[href$=\".png\"], a[href$=\".bmp\"],a[href$=\".jpeg\"]").has("img").css('cursor', '-webkit-zoom-in').lightbox();
    });
  }

  Lightbox.prototype.initJQueryExtension = function() {
    return jQuery.fn.extend({
      lightbox: function(options) {
        var adslotMarkup, closeGallery, current_image, defaults, displayImage, displayImageFromIndex, displayImageFromUrl, hasTouch, images, injectMarkup, isActive, lightbox, log, maybeTrackPageview, move, refreshAdslot, removeAd, resize, scroll, settings, trackEvent, trackEventOnce, trackPageview;
        lightbox = false;
        images = [];
        settings = {};
        current_image = 0;
        defaults = {
          ads: {
            refresh_rate: 1,
            current: 0
          },
          pageviews: {
            refresh_rate: 3,
            current: 0
          },
          breakpoints: {
            tablet: 960,
            mobile: 768
          },
          tracking: {
            category: "Lightbox",
            tracked: {}
          }
        };
        settings = jQuery.extend(defaults, options);
        log = function(msg) {
          return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
        };
        refreshAdslot = function() {
          var gallery_mpu_disabled;
          gallery_mpu_disabled = 1;
          if (settings.ads.current % settings.ads.refresh_rate === 0) {
            if (lightbox.hasClass("is-desktop") && gallery_mpu_disabled !== 1) {
              lightbox.find(".adslot").html("").append(adslotMarkup());
              trackEvent("Ad Reload");
            }
            return settings.ads.current++;
          }
        };
        maybeTrackPageview = function() {
          if (settings.pageviews.current % settings.pageviews.refresh_rate === 0) {
            trackPageview();
          }
          return settings.pageviews.current++;
        };
        removeAd = function() {
          return $(".lightbox-adslot").html("");
        };
        adslotMarkup = function() {};
        injectMarkup = function() {
          var adslot, caption, click_event, close, container, count, current, image, next, prev, sidebar, total, viewport;
          lightbox = $("<div class='gallery-overlay is-lightbox'></div>");
          container = $("<div class='gallery-container'></div>");
          viewport = $("<div class='gallery-viewport'></div>");
          image = $("<img class='lightbox-image' />");
          sidebar = $("<div class='gallery-sidebar'></div>");
          close = $("<button class='gallery-nav gallery-close'><i class=\"fa fa-times\"></i></button>");
          next = $("<button href='#' class='gallery-nav gallery-next'><i class=\"fa fa-chevron-right\"></i></button>");
          prev = $("<button href='#' class='gallery-nav gallery-prev'><i class=\"fa fa-chevron-left\"></i></button>");
          caption = $("<p class='gallery-caption'>caption</p>");
          count = $("<p class='lightbox-count'>/</p>");
          current = $("<span class='lightbox-count-current'>0</span>");
          total = $("<span class='lightbox-count-total'>0</span>");
          adslot = $("<div class='adslot gallery-adslot'></div>");
          click_event = hasTouch() ? "touchstart" : "click";
          close.on(click_event, function(e) {
            closeGallery();
            e.preventDefault();
            return false;
          });
          next.on(click_event, function() {
            return move(1);
          });
          prev.on(click_event, function() {
            return move(-1);
          });
          $(document).keydown((function(_this) {
            return function(e) {
              if (!isActive()) {
                return;
              }
              if (e.keyCode === 37) {
                return move(-1);
              } else if (e.keyCode === 39) {
                return move(1);
              } else if (e.keyCode === 27) {
                return closeGallery();
              }
            };
          })(this));
          total.text(images.length);
          count.prepend(current);
          count.append(total);
          sidebar.append(caption, adslot, count);
          viewport.append(image);
          container.append(viewport);
          lightbox.append(container, sidebar, close);
          if (images.length > 1) {
            lightbox.append(prev, next);
          }
          return $("body").append(lightbox);
        };
        move = function(dir) {
          var index, text;
          index = current_image + dir;
          if (index === images.length) {
            index = 0;
          } else if (index === -1) {
            index = images.length - 1;
          }
          if (!(index >= 0 && index < images.length && isActive())) {
            return;
          }
          text = dir < 0 ? "Left" : "Right";
          trackEvent(text + " Scroll");
          return displayImageFromIndex(index);
        };
        displayImageFromIndex = function(index) {
          current_image = index;
          return displayImage(images[index]);
        };
        displayImageFromUrl = function(url) {
          return $.each(images, function(i, value) {
            if (value.src === url) {
              current_image = i;
              displayImage(value);
              return false;
            }
          });
        };
        displayImage = function(image) {
          var elem;
          lightbox.addClass("is-showing");
          elem = lightbox.find(".lightbox-image");
          elem.attr("src", image.src);
          lightbox.find(".gallery-caption").text(image.caption);
          lightbox.find(".lightbox-count-current").text(current_image + 1);
          refreshAdslot();
          return maybeTrackPageview();
        };
        isActive = function() {
          return lightbox.hasClass("is-showing");
        };
        resize = function() {
          var width;
          if (!lightbox) {
            return;
          }
          lightbox.removeClass("is-desktop is-mobile is-tablet");
          width = lightbox.width();
          if (width >= settings.breakpoints.tablet) {
            return lightbox.addClass("is-desktop");
          } else if (width >= settings.breakpoints.mobile && width < settings.breakpoints.tablet) {
            lightbox.addClass("is-tablet");
            return removeAd();
          } else if (width < settings.breakpoints.mobile) {
            lightbox.addClass("is-mobile");
            return removeAd();
          }
        };
        scroll = function() {
          var scrolled;
          if (!isActive()) {
            return;
          }
          scrolled = 0;
          return $(window).on('scroll', (function(_this) {
            return function() {
              if (scrolled > 10 || ($(window).width() < settings.breakpoints.mobile) && scrolled > 3) {
                scrolled = 0;
                $(window).unbind('scroll');
                closeGallery();
              }
              return scrolled++;
            };
          })(this));
        };
        trackEvent = function(action) {
          if (!window.Tracker) {
            return;
          }
          return Tracker.track(settings.tracking.category, action);
        };
        trackEventOnce = function(action) {
          if (settings.tracking.tracked[action]) {
            return;
          }
          trackEvent(action);
          return settings.tracking.tracked[action] = true;
        };
        trackPageview = function() {
          if (!window.Tracker) {
            return;
          }
          return Tracker.trackPageview(location.pathname + location.search + "#gallery-reload");
        };
        hasTouch = function() {
          if (indexOf.call(window, 'ontouchstart') >= 0 || (window.DocumentTouch && document instanceof DocumentTouch) || typeof TouchEvent === "object") {
            return true;
          } else {
            return false;
          }
        };
        closeGallery = function() {
          lightbox.removeClass("is-showing");
          settings.ads.current = -1;
          return trackEvent("Lightbox Close");
        };
        $(this).each(function(index, el) {
          return images.push({
            src: $(el).attr("href"),
            caption: $(el).find("img").attr("alt")
          });
        });
        $(this).on("click", function(e) {
          e.preventDefault();
          if (!lightbox) {
            injectMarkup();
          }
          trackEventOnce("Lightbox Open");
          resize();
          displayImageFromUrl($(this).attr("href"));
          scroll();
          return false;
        });
        return window.onresize = resize;
      }
    });
  };

  return Lightbox;

})();

module.exports = Lightbox;


},{}],24:[function(require,module,exports){
var LinkParser;

LinkParser = (function() {
  function LinkParser() {}

  LinkParser.clickCategory = function(link) {
    var parent, section_pos;
    parent = link.parents(".section-outer");
    section_pos = $(".section-outer").index(parent) + 1;
    return "Click:Homepage Section " + section_pos;
  };

  LinkParser.clickAction = function(link) {
    var parent, section_title, type, type_class;
    parent = link.parents(".section-outer");
    type_class = parent[0].className.split(" ")[3];
    type = type_class.split("-").reverse().join(" ").replace(/\b./g, function(m) {
      return m.toUpperCase();
    });
    section_title = $.trim(parent.find(".section-title").text().replace(/:/, ""));
    return section_title + ":" + type;
  };

  LinkParser.clickLabel = function(link) {
    var parent, pos, slides;
    if (link.parents(".template-feature-slider").length > 0) {
      slides = link.parents(".slides").find("li[data-slide-id]");
      pos = slides.index(link.parents("li[data-slide-id]")) + 1;
      return "Article " + pos;
    } else {
      parent = link.parents(".section-outer");
      pos = parent.find("article").index(link.parent("article")) + 1;
      return "Article " + pos;
    }
  };

  LinkParser.tabsMenuClickLabel = function(link) {
    var parent, pos;
    parent = link.parents(".tabs-menu");
    pos = parent.find(".feature-tab").index(link) + 1;
    return "Article " + pos;
  };

  return LinkParser;

})();

module.exports = LinkParser;


},{}],25:[function(require,module,exports){
var Logger, LoginControl,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Logger = require('js-logger');

LoginControl = (function() {
  function LoginControl(control) {
    var redirect;
    this.control = control;
    this.buildWishlistItems = bind(this.buildWishlistItems, this);
    this.accountContent = bind(this.accountContent, this);
    this.loginContent = bind(this.loginContent, this);
    this.populateLogin = bind(this.populateLogin, this);
    this.populateAccount = bind(this.populateAccount, this);
    this.getWishlistStatus = bind(this.getWishlistStatus, this);
    this.getLoginStatus = bind(this.getLoginStatus, this);
    this.logger = Logger.get('LoginControl');
    this.control = $(this.control);
    this.wishlistControlID = 'login-control-wishlist-items';
    this.baseUrl = "/pick-a-challenge";
    redirect = {
      redirect_uri: this.baseUrl
    };
    this.urls = {
      login: this.baseUrl + "/auth/?" + ($.param(redirect)),
      logout: this.baseUrl + "/signout",
      users: this.baseUrl + "/users",
      wishlist: "/wishlist"
    };
    this.labels = {
      greeting: "Hi, ",
      profile: "My Profile",
      wishlist: "My Wishlist",
      login: "Connect with Facebook",
      logout: "Logout",
      avatar: "Avatar",
      count: ''
    };
    $(window).on("FM:onUpdatedWishlist", this.getLoginStatus);
    Utilities.PostMessage.handle((function(_this) {
      return function(e) {
        if (!e.data) {
          return;
        }
        if (!e.data["FM:Event"]) {
          return;
        }
        if (e.data["FM:Event"] === "FM:onUpdatedWishlist") {
          return $(window).trigger(e.data["FM:Event"]);
        }
      };
    })(this));
  }

  LoginControl.prototype.getLoginStatus = function() {
    return new LoginStatusService(this.baseUrl).get().done((function(_this) {
      return function(user) {
        _this.populateAccount(user);
        return _this.getWishlistStatus(user);
      };
    })(this)).fail((function(_this) {
      return function(e) {
        return _this.populateLogin();
      };
    })(this));
  };

  LoginControl.prototype.getWishlistStatus = function(user) {
    return new WishlistService(this.baseUrl, user).get().done((function(_this) {
      return function(data) {
        return _this.buildWishlistItems(data);
      };
    })(this));
  };

  LoginControl.prototype.populateAccount = function(user) {
    return this.control.html(this.accountContent(user));
  };

  LoginControl.prototype.populateLogin = function() {
    return this.control.html(this.loginContent);
  };

  LoginControl.prototype.loginContent = function() {
    return "<div class=\"user-not-logged-in\">\n  <button class=\"button-login\">\n    <i class=\"fa fa-user\"></i>\n  </button>\n  <ul class=\"login-dropdown\">\n    <li class=\"user-welcome\">\n      <i class=\"fa fa-facebook\"></i>\n      <a href=\"" + this.urls.login + "\">" + this.labels.login + "</a>\n    </li>\n  </ul>\n</div>";
  };

  LoginControl.prototype.accountContent = function(user) {
    if (user != null) {
      return "<div class=\"user-logged-in\">\n  <button class=\"button-login\">\n    <a class=\"js-wishlist-count notification-count\" href=\"" + (this.wishlistUrl(user)) + "\">" + this.labels.count + "</a>\n    <img class=\"user-profile-image\" src=\"" + user.avatar.url + "\" alt=\"" + user.username + " " + this.labels.avatar + "\" />\n    <span>" + user.first_name + "</span>\n  </button>\n  <ul class=\"login-dropdown\">\n    <li class=\"user-welcome\">" + this.labels.greeting + user.first_name + " " + user.last_name + "</li>\n    <li>\n      <a href=\"" + (this.wishlistUrl(user)) + "\">" + this.labels.wishlist + " (<span class=\"js-wishlist-count\">" + this.labels.count + "</span>)</a>\n    </li>\n    <li class=\"user-logout\"><i class=\"fa fa-sign-out\"></i><a href=\"" + this.urls.logout + "\">" + this.labels.logout + "</a></li>\n  </ul>\n</div>";
    }
  };

  LoginControl.prototype.buildWishlistItems = function(data) {
    var items;
    if ((data != null ? data.wishlist_items : void 0) != null) {
      items = $.map(data.wishlist_items, this.buildWishlistItem).join("");
      $("#" + this.wishlistControlID).append(items);
      return $('.js-wishlist-count').html(data.wishlist_items.length);
    } else {
      return $('.js-wishlist-count').html("0");
    }
  };

  LoginControl.prototype.buildWishlistItem = function(item) {
    return "<li><a href=\"" + item.event.url + "\">" + item.event.name + "</a></li>";
  };

  LoginControl.prototype.wishlistUrl = function(user) {
    return "" + (this.profileUrl(user)) + this.urls.wishlist;
  };

  LoginControl.prototype.profileUrl = function(user) {
    return this.urls.users + "/" + user.username;
  };

  LoginControl.prototype.log = function(message) {
    return this.logger.info("LoginControl", message);
  };

  return LoginControl;

})();

module.exports = LoginControl;


},{"js-logger":58}],26:[function(require,module,exports){
var Longform;

Longform = (function() {
  function Longform() {
    if (!$("body").hasClass("single-longform")) {
      return;
    }
    this.resizeParallaxSection();
    $(window).smartresize((function(_this) {
      return function() {
        _this.resizeParallaxSection();
      };
    })(this));
    $(window).bind("load", (function(_this) {
      return function() {
        if (_this.device() !== "desktop") {
          return;
        }
        _this.addScrollEffects();
      };
    })(this));
    return;
  }

  Longform.prototype.resizeParallaxSection = function() {
    var imageHeight, imageSection, navHeight, viewportHeight;
    imageSection = $(".longform-section-image.fullscreen-image");
    viewportHeight = $(window).height();
    navHeight = $(".nav-primary").height();
    if (!imageSection.length > 0) {
      return false;
    }
    imageHeight = viewportHeight - navHeight;
    imageSection.css("height", imageHeight);
    if (!this.isIos()) {
      return imageSection.addClass('bg-image-fixed');
    }
  };

  Longform.prototype.addScrollEffects = function() {
    var headerSection;
    headerSection = $(".longform-section.longform-section-image:first-child");
    headerSection.find("h2").attr("data-0", "opacity: 1").attr("data-280", "opacity: 0");
    return headerSection.find("h3").attr("data-0", "opacity: 1").attr("data-300", "opacity: 0");
  };

  Longform.prototype.device = function() {
    var mobile, tablet, windowWidth;
    windowWidth = window.innerWidth || document.body.clientWidth;
    tablet = 960;
    mobile = 768;
    if (windowWidth < mobile) {
      return "mobile";
    } else if (windowWidth >= mobile && windowWidth <= tablet) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  Longform.prototype.isIos = function() {
    return navigator.userAgent.match(/(ip(hone|od|ad))/i);
  };

  return Longform;

})();

module.exports = Longform;


},{}],27:[function(require,module,exports){
var MenuToggles, NavToggle;

NavToggle = require('./_components.nav-toggle.coffee');

MenuToggles = (function() {
  function MenuToggles() {
    this.eventBindings();
  }

  MenuToggles.prototype.eventBindings = function() {
    this.togglePrimaryNav();
    this.toggleAllMenu();
    this.toggleSideMenu();
    this.toggleSearchForm();
    this.toggleLogin();
    return this.toggleChapters();
  };

  MenuToggles.prototype.togglePrimaryNav = function() {
    return new NavToggle('.js-primary-nav-toggle', '.js-primary-nav-menu', 'c-navbar-primary--is-active', 'c-nav-toggle--is-active');
  };

  MenuToggles.prototype.toggleAllMenu = function() {
    return new NavToggle('.all-menu-toggle', '.all-nav', 'open');
  };

  MenuToggles.prototype.toggleSideMenu = function() {
    return new NavToggle('.side-menu-toggle', '.side-menu', 'open');
  };

  MenuToggles.prototype.toggleSearchForm = function() {
    return new NavToggle('.search-form-toggle', '.header-search-bar', "open");
  };

  MenuToggles.prototype.toggleLogin = function() {
    return new NavToggle('.header-login', '.login-dropdown', "open");
  };

  MenuToggles.prototype.toggleChapters = function() {
    new NavToggle('.sidebar-chapters-toggle', ".article-sidebar-chapters", "sidebar-chapters-open");
    return this.closeNav();
  };

  MenuToggles.prototype.closeNav = function() {
    return $('html').on('click', (function(_this) {
      return function(e) {
        if ($('body').hasClass('sidebar-chapters-open') && !$('.article-sidebar-chapters')[0].contains(e.target)) {
          return $('body').removeClass('sidebar-chapters-open');
        }
      };
    })(this));
  };

  return MenuToggles;

})();

module.exports = MenuToggles;


},{"./_components.nav-toggle.coffee":29}],28:[function(require,module,exports){
var MobileMenu;

MobileMenu = (function() {
  function MobileMenu() {
    var body, event_name, navMenu, navSearch, navToggle, navWithSub, viewHeight;
    navToggle = $(".nav-mobile-toggle");
    navMenu = $(".nav-primary");
    navWithSub = navMenu.find(".menu-parent-item");
    event_name = (typeof document.ontouchend === "undefined" ? "click" : "touchend");
    navSearch = $(".search-content");
    body = $("html");
    viewHeight = $(window).height();
    navToggle.bind(event_name, function(e) {
      navMenu.find(".nav-primary-list").css("max-height", viewHeight - 70);
      navMenu.toggleClass("is-open");
      navSearch.removeClass("is-showing");
      body.toggleClass("nav-is-open");
      e.preventDefault();
      return false;
    });
    $("<span/>", {
      "class": "has-child-indicator"
    }).prependTo(navWithSub);
    navMenu.on(event_name, ".has-child-indicator", function(e) {
      if ($(this).parent().hasClass("is-showing")) {
        navWithSub.removeClass("is-showing");
      } else {
        navWithSub.removeClass("is-showing");
        $(this).parent().addClass("is-showing");
      }
      e.preventDefault();
      return false;
    });
    return;
  }

  return MobileMenu;

})();

module.exports = MobileMenu;


},{}],29:[function(require,module,exports){
var Logger, NavToggle;

Logger = require('js-logger');

NavToggle = (function() {
  function NavToggle(selector, content, contentToggleClass, selectorToggleClass) {
    this.selector = selector;
    this.content = content;
    this.contentToggleClass = contentToggleClass;
    this.selectorToggleClass = selectorToggleClass != null ? selectorToggleClass : "";
    this.logger = Logger.get('NavToggle');
    this.eventBindings();
  }

  NavToggle.prototype.eventBindings = function() {
    var $body, $content, $contentToggleClass, $selectorToggleClass, $toggleButton;
    $toggleButton = $("" + this.selector);
    $content = $("" + this.content);
    $body = $("body");
    $selectorToggleClass = this.selectorToggleClass;
    $contentToggleClass = this.contentToggleClass;
    return $toggleButton.on('click', (function(_this) {
      return function() {
        $toggleButton.toggleClass($selectorToggleClass);
        $content.toggleClass($contentToggleClass);
        return $body.toggleClass($contentToggleClass);
      };
    })(this));
  };

  return NavToggle;

})();

module.exports = NavToggle;


},{"js-logger":58}],30:[function(require,module,exports){
var NewsletterWidget;

NewsletterWidget = (function() {
  function NewsletterWidget() {
    this.terms_dialog = $(".newsletter-terms-dialog");
    this.terms_checkbox = $(".newsletter-terms-agree");
    this.newsletter_submit = $(".newsletter-submit");
    if ($(this.terms_checkbox).attr("checked") !== "checked") {
      this.newsletter_submit.attr("disabled", "disabled");
    }
    $(".newsletter-terms-toggle, .newsletter-terms-dialog .btn-close").on("click", (function(_this) {
      return function(e) {
        _this.terms_dialog.toggleClass("is-showing");
        e.preventDefault();
        return false;
      };
    })(this));
    $('.newsletter-form').on('submit', (function(_this) {
      return function(e) {
        var email, form, name, source;
        form = $(e.currentTarget);
        email = form.find("#fields_email").val();
        name = form.find("#fields_fname").val();
        source = form.find("[name='fields_entry_source']").val();
        return $(window).trigger("FM:onNewsletterSignup", {
          name: name,
          email: email,
          source: source
        });
      };
    })(this));
    this.terms_checkbox.on("click", (function(_this) {
      return function(e) {
        if ($(e.currentTarget).attr("checked") !== "checked") {
          _this.newsletter_submit.attr("disabled", "disabled");
        } else {
          _this.newsletter_submit.removeAttr("disabled");
        }
      };
    })(this));
  }

  return NewsletterWidget;

})();

module.exports = NewsletterWidget;


},{}],31:[function(require,module,exports){
var Pagination;

Pagination = (function() {
  function Pagination(elem, baseURL, currentPage, totalResults, perPage) {
    this.elem = elem;
    this.baseURL = baseURL;
    this.currentPage = currentPage;
    this.totalResults = totalResults;
    this.perPage = perPage != null ? perPage : 20;
    this.elem = this.elem || $('.pagination');
    this.currentPage = parseInt(this.currentPage);
  }

  Pagination.prototype.paginate = function() {
    var after, before, end, i, j, left, nextPage, output, pages, prevPage, ref, ref1, right, start;
    pages = Math.ceil(this.totalResults / this.perPage);
    if (1 < this.currentPage) {
      prevPage = this.currentPage - 1;
    }
    if (this.currentPage < pages) {
      nextPage = this.currentPage + 1;
    }
    if (pages < 2) {
      return this.elem.html('');
    } else {
      output = '';
      if (this.currentPage > 1) {
        output += "<a class=\"prev page-numbers\" href=\"" + (this.buildURL(prevPage)) + "\">&laquo; Back</a>";
      }
      left = 4;
      right = 4;
      if (this.currentPage <= left) {
        before = this.currentPage - 1;
        after = left - (this.currentPage - 1) + right;
      } else if (this.currentPage > (pages - right)) {
        before = right - (pages - this.currentPage) + left;
        after = right;
      } else {
        before = left;
        after = right;
      }
      start = (this.currentPage - before) < 1 ? 1 : this.currentPage - before;
      end = pages < (this.currentPage + after) ? pages : this.currentPage + after;
      for (i = j = ref = start, ref1 = end; j <= ref1; i = j += 1) {
        if (i === this.currentPage) {
          output += "<span class=\"current page-numbers\">" + i + "</span>";
        } else {
          output += "<a class=\"page-numbers\" href=\"" + (this.buildURL(i)) + "\">" + i + "</a>";
        }
      }
      if (this.currentPage < pages) {
        output += "<a class=\"next page-numbers\" href=\"" + (this.buildURL(nextPage)) + "\">Next &raquo;</a>";
      }
      return this.elem.html(output);
    }
  };

  Pagination.prototype.buildQuery = function(page) {
    return $.param({
      page: page
    });
  };

  Pagination.prototype.buildURL = function(page) {
    return "" + this.baseURL + (Utilities.getURLSeparator(this.baseURL)) + (this.buildQuery(page));
  };

  return Pagination;

})();

module.exports = Pagination;


},{}],32:[function(require,module,exports){
var PlatformDetection;

PlatformDetection = (function() {
  var SETTINGS;

  SETTINGS = {
    breakpoints: {
      medium: 970,
      small: 640
    }
  };

  function PlatformDetection() {
    this.currentPlatform = this.platform();
  }

  PlatformDetection.prototype.getWidth = function() {
    return window.innerWidth || document.body.clientWidth;
  };

  PlatformDetection.prototype.platform = function() {
    var windowWidth;
    windowWidth = this.getWidth();
    if (windowWidth < SETTINGS.breakpoints.small) {
      return "small";
    } else if (windowWidth >= SETTINGS.breakpoints.small && windowWidth <= SETTINGS.breakpoints.medium) {
      return "medium";
    } else {
      return "large";
    }
  };

  return PlatformDetection;

})();

module.exports = PlatformDetection;


},{}],33:[function(require,module,exports){
var Logger, RadiumOne;

Logger = require('js-logger');

RadiumOne = (function() {
  var postWidgetDefaults;

  postWidgetDefaults = {
    afterShare: false,
    gaTrackEvents: true,
    gaTrackSocialInteractions: true,
    sharePopups: true,
    services: {
      p_share_popup: 'tumblr, pinterest, stumbleupon, reddit, digg, delicious, email, more',
      twitter: {
        via: ($('meta[property="twitter:site"]').attr('content') || '').replace('@', '')
      }
    },
    transformations: {
      tracking: true
    },
    buttons: [
      {
        id: 'facebook',
        look: 'native',
        counter: 'none'
      }, {
        id: 'twitter',
        look: 'native',
        counter: 'none'
      }, {
        id: 'pinterest',
        look: 'native',
        counter: 'none'
      }, {
        id: 'whatsapp',
        look: 'native',
        counter: 'none'
      }
    ],
    onshare: function(service) {
      var url;
      url = window.location.href.replace(window.location.hash, '');
      window.Tracker.trackSocial(service, 'share', url);
      return false;
    }
  };

  function RadiumOne(widget, target, options1) {
    this.widget = widget;
    this.target = target;
    this.options = options1;
    this.logger = Logger.get("RadiumOne");
    if (this.widget === 'aside') {
      this.postWidgetSetup(this.target, this.options);
    }
  }

  RadiumOne.prototype.postWidgetSetup = function(el, options) {
    var config;
    config = $.extend({}, postWidgetDefaults, options);
    if (window.post_widget != null) {
      return window.post_widget(el, config);
    }
  };

  return RadiumOne;

})();

module.exports = RadiumOne;


},{"js-logger":58}],34:[function(require,module,exports){
var Pagination, SearchResults;

Pagination = require('./_components.pagination.coffee');

SearchResults = (function() {
  function SearchResults() {
    var base, base1;
    if (!$("body").hasClass("search-results")) {
      return;
    }
    this.apiUrl = 'http://search.factorymedia.com/';
    this.site = dataLayer[0].websiteSite;
    this.locale = this.getLocale;
    this.resultsWrapper = $('.terms-listing.search-results-contents');
    this.searchParams = this.getSearchParams();
    (base = this.searchParams).page || (base.page = 1);
    (base1 = this.searchParams).entity || (base1.entity = 'total');
    this.eventBindings();
    if (this.searchParams.s) {
      this.getCounts();
    }
  }

  SearchResults.prototype.eventBindings = function() {
    $('.search-form-input').on('focus', function(e) {
      return e.target.select();
    });
    $('.search-form').on('submit', (function(_this) {
      return function(e) {
        e.preventDefault();
        _this.searchParams.s = $(e.target).find(".search-form-input").val();
        _this.searchParams.entity = 'total';
        if (_this.searchParams.s) {
          _this.search(_this.searchParams);
          $(".search-filter-tabs a").removeClass('active');
          $("[data-search-entity='total']").addClass('active');
          return _this.setPage("Search Results: " + _this.searchParams.s, "/?" + ($.param(_this.searchParams)));
        }
      };
    })(this));
    $(".search-filter-tabs").on('click', 'a', (function(_this) {
      return function(e) {
        var el, menuItem, query;
        e.preventDefault();
        el = $(e.target);
        $("[data-search-entity]").removeClass('active');
        menuItem = el.data('search-entity') !== void 0 ? el : el.parent();
        menuItem.addClass('active');
        _this.searchParams.entity = menuItem.data('search-entity');
        _this.searchParams.page = 1;
        _this.search(_this.searchParams);
        query = {
          s: _this.searchParams.s,
          entity: _this.searchParams.entity,
          page: _this.searchParams.page
        };
        return _this.setPage("Search Results: " + _this.searchParams.s, "/?" + ($.param(query)));
      };
    })(this));
    return $(".pagination").on('click', 'a', (function(_this) {
      return function(e) {
        var params, url;
        e.preventDefault();
        url = $(e.target).attr('href');
        if (url) {
          params = url.replace('/', '');
          _this.searchParams = _this.getSearchParams(params);
          _this.search(_this.searchParams);
          $("html, body").scrollTop(0);
          return _this.setPage("Search Results: " + _this.searchParams.s, url);
        }
      };
    })(this));
  };

  SearchResults.prototype.setPage = function(title, url) {
    var ref;
    if (typeof Tracker !== "undefined" && Tracker !== null) {
      Tracker.trackPageview(url);
    }
    if (((ref = window.history) != null ? ref.pushState : void 0) != null) {
      return window.history.pushState(null, title, url);
    }
  };

  SearchResults.prototype.search = function(params) {
    var query;
    this.showLoadingSpinner();
    query = {
      q: params.s,
      site: this.site,
      locale: this.locale,
      page: params.page,
      per_page: 20
    };
    if (params.entity !== 'total') {
      query.entity = params.entity;
    }
    return $.ajax({
      url: this.apiUrl + "search.json?" + ($.param(query)),
      error: (function(_this) {
        return function(jqXHR, status, error) {
          return _this.resultsWrapper.html("<p class='message error'>Error loading search results, please try again. <br />Error: " + error + "</p>");
        };
      })(this),
      success: (function(_this) {
        return function(results, status, jqXHR) {
          var total;
          total = jqXHR.getResponseHeader('X-Total-Records');
          _this.updateResults(results);
          _this.updatePagination(total);
          _this.getCounts();
          if (typeof updateProfiles !== "undefined" && updateProfiles !== null) {
            return _this.updateProfileResults(results);
          }
        };
      })(this)
    });
  };

  SearchResults.prototype.updateResults = function(results) {
    var output;
    output = '';
    $.each(results, (function(_this) {
      return function(index, post) {
        return output += "<article class='article-listed'>\n  <a class='article-link is-tracked' data-category='Click:Search Events' data-action='Search: " + _this.searchParams.s + "' data-label='Article ' href='" + post.redirect_url + "' title='" + post.title + "'>\n    <div class='article-listed-thumb'>\n      <img alt='' src='" + post.image + "'>\n    </div>\n    <div class='article-body'>\n      <h2 class='article-title'>" + post.title + "</h2>\n      <time class=\"date\" itemprop=\"datePublished\"\">\n        <i class=\"fa fa-clock-o\"></i> <b>" + (_this.formatDate(post.published_at)) + "</b>\n      </time>\n      <div class='article-excerpt'>" + post.summary + "</div>\n    </div>\n  </a>\n</article>";
      };
    })(this));
    return this.resultsWrapper.html(output);
  };

  SearchResults.prototype.showLoadingSpinner = function() {
    return this.resultsWrapper.html("<p class='center'><i class='fa fa-circle-o-notch fa-spin'></i> Fetching results...</p>");
  };

  SearchResults.prototype.getCounts = function() {
    var query;
    query = {
      q: this.searchParams.s,
      site: this.site,
      locale: this.locale
    };
    return $.getJSON(this.apiUrl + "search/counts.json?" + ($.param(query)), (function(_this) {
      return function(counts) {
        return _this.updateCounts(counts);
      };
    })(this));
  };

  SearchResults.prototype.updateCounts = function(entityCounts) {
    $.each($('[data-search-entity]'), (function(_this) {
      return function(i, elem) {
        return _this.updateMenuItem($(elem), 0);
      };
    })(this));
    if (entityCounts != null) {
      $('.search-query-block span').html(entityCounts['total']);
      return $.each(entityCounts, (function(_this) {
        return function(entity, count) {
          var menuItem;
          menuItem = $("[data-search-entity=" + entity + "]");
          return _this.updateMenuItem(menuItem, count);
        };
      })(this));
    }
  };

  SearchResults.prototype.updateMenuItem = function(menuItem, count) {
    menuItem.removeClass('hidden');
    menuItem.find('span').html(count);
    if (count === void 0 || count === 0) {
      return menuItem.addClass('hidden');
    }
  };

  SearchResults.prototype.updatePagination = function(totalResults) {
    var pagination, query;
    query = {
      s: this.searchParams.s,
      entity: this.searchParams.entity
    };
    pagination = new Pagination($('.pagination'), "/?" + ($.param(query)), this.searchParams.page, totalResults, 20);
    return pagination.paginate();
  };

  SearchResults.prototype.getSearchParams = function(query) {
    return Utilities.getParams(query);
  };

  SearchResults.prototype.formatDate = function(date) {
    return Utilities.formatDate(date);
  };

  SearchResults.prototype.getLocale = function() {
    var locale;
    locale = Utilities.getLocale();
    return locale = locale.replace("-", "_");
  };

  return SearchResults;

})();

module.exports = SearchResults;


},{"./_components.pagination.coffee":31}],35:[function(require,module,exports){
var Logger, SectionWatcher, WatchedSection, throttle;

throttle = require('throttleit');

Logger = require('js-logger');

WatchedSection = require('./_components.watched-section.coffee');

SectionWatcher = (function() {
  function SectionWatcher() {
    this.logger = Logger.get("SectionWatcher");
    this.sections = [];
    this.selectors = {
      'body.js-single-article .js-section--has-ads:not(:first)': 'article-section',
      '.js-category-appended': 'category-appended'
    };
    $.each(this.selectors, (function(_this) {
      return function(k, v) {
        var elems;
        elems = $(k);
        return $.each(elems, function(i, elem) {
          return _this.sections.push(new WatchedSection(elem, v, _this));
        });
      };
    })(this));
    this.logger.info("SectionWatcher init", this.sections);
    $(window).on('scroll', throttle((function(_this) {
      return function() {
        return $(_this).trigger('Scroll.SectionWatcher.FM');
      };
    })(this), 500));
  }

  return SectionWatcher;

})();

module.exports = SectionWatcher;


},{"./_components.watched-section.coffee":45,"js-logger":58,"throttleit":69}],36:[function(require,module,exports){
var Logger, SocialApiNotifier;

Logger = require('js-logger');

SocialApiNotifier = (function() {
  function SocialApiNotifier() {
    this.logger = Logger.get('SocialApiNotifier');
    this.socialEvents = "FM:onTrackSocial FM:onFacebookCommentCreated FM:onFacebookCommentRemoved";
    this.base_url = "http://social.coresites.mpora.com/";
    this.site = window.dataLayer[0].websiteSlug;
    this.url = [this.base_url, this.site, ".json"].join('');
    this.initEvents();
  }

  SocialApiNotifier.prototype.initEvents = function() {
    return $(window).on(this.socialEvents, (function(_this) {
      return function(e, data) {
        var query;
        _this.log(JSON.stringify(data));
        query = {
          url: data.url,
          _method: "put"
        };
        return $.ajax({
          method: 'POST',
          url: _this.url,
          data: query,
          cache: false
        });
      };
    })(this));
  };

  SocialApiNotifier.prototype.log = function(msg) {
    return this.logger.info("SocialApiNotifier", msg);
  };

  return SocialApiNotifier;

})();

module.exports = SocialApiNotifier;


},{"js-logger":58}],37:[function(require,module,exports){
var SocialTracker;

SocialTracker = (function() {
  function SocialTracker() {
    this.fbInit();
    this.twttrInit();
  }

  SocialTracker.prototype.fbInit = function() {
    return window.fbAsyncInit = function() {
      if (FB && FB.Event && FB.Event.subscribe) {
        FB.Event.subscribe("edge.create", function(targetUrl) {
          return Tracker.trackSocial("facebook", "like", targetUrl);
        });
        return FB.Event.subscribe("edge.remove", function(targetUrl) {
          return Tracker.trackSocial("facebook", "unlike", targetUrl);
        });
      }
    };
  };

  SocialTracker.prototype.twttrInit = function() {
    var t;
    window.twttr = window.twttr || (t = {
      _e: [],
      ready: function(f) {
        return t._e.push(f);
      }
    });
    return twttr.ready(function() {
      var eventName, eventNames, results;
      eventNames = {
        click: "",
        tweet: "",
        retweet: "source_tweet_id",
        follow: "screen_name",
        favorite: "tweet_id"
      };
      results = [];
      for (eventName in eventNames) {
        if (eventNames.hasOwnProperty(eventName)) {
          results.push(twttr.events.bind(eventName, function(intentEvent) {
            var label;
            if (intentEvent) {
              label = (intentEvent.type === "click" ? intentEvent.region : (intentEvent.data ? intentEvent.data[eventNames[intentEvent.type]] : ""));
              return Tracker.trackSocial("twitter", intentEvent.type + " " + label, document.URL);
            }
          }));
        } else {
          results.push(void 0);
        }
      }
      return results;
    });
  };

  return SocialTracker;

})();

module.exports = SocialTracker;


},{}],38:[function(require,module,exports){
var Promise, Spacefinder, fastdom,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Promise = require('promise');

fastdom = require('fastdom');

Spacefinder = (function() {
  function Spacefinder(options) {
    this.getReady = bind(this.getReady, this);
    this.onImagesLoaded = bind(this.onImagesLoaded, this);
    this.bodySelector = '.c-article-copy';
    this.paraSelectors = this.bodySelector + " > p, " + this.bodySelector + " > figure, " + this.bodySelector + " .slide-content > p";
    this.viewability = true;
    this.debug = true;
    this.defaultRules = {
      minAbove: 250,
      minBelow: 300,
      selectors: {
        '> h2': {
          minAbove: 0,
          minBelow: 250
        },
        '> *:not(p):not(h2)': {
          minAbove: 25,
          minBelow: 250
        }
      }
    };
    this.defaultRules = $.extend(this.defaultRules, options);
  }

  Spacefinder.prototype._testElem = function(para, other, rules) {
    var isMinAbove, isMinBelow;
    isMinAbove = para.top - other.bottom >= rules.minAbove;
    isMinBelow = other.top - para.top >= rules.minBelow;
    return isMinAbove || isMinBelow;
  };

  Spacefinder.prototype._testElems = function(para, others, rules) {
    return $.each(others, (function(_this) {
      return function(other) {
        return _this._testElem(para, other, rules);
      };
    })(this));
  };

  Spacefinder.prototype._mapElementToDimensions = function(el) {
    return {
      top: el.offsetTop,
      bottom: el.offsetTop + el.offsetHeight,
      element: el
    };
  };

  Spacefinder.prototype._debugErrPara = function(p, message) {
    return $(p).addClass('spacefinder--error').attr('data-spacefinder-msg', message);
  };

  Spacefinder.prototype._pluck = function(arr, key) {
    var values;
    values = $.map(arr, function(e) {
      return e[key];
    });
    return $(values);
  };

  Spacefinder.prototype._enforceRules = function(slots, rules, bodyHeight, debug) {
    var contentMeta, filtered;
    filtered = $(slots);
    contentMeta = null;
    filtered = filtered.filter((function(_this) {
      return function(index, p) {
        var farEnoughFromBottomOfBody, farEnoughFromTopOfBody, valid;
        farEnoughFromTopOfBody = p.top >= rules.minAbove;
        farEnoughFromBottomOfBody = (p.top + rules.minBelow) <= bodyHeight;
        valid = farEnoughFromTopOfBody && farEnoughFromBottomOfBody;
        if (debug && !valid) {
          if (!farEnoughFromTopOfBody) {
            _this._debugErrPara(p.element, "Too close to top of body: " + p.top + " < " + rules.minAbove);
          }
          if (!farEnoughFromBottomOfBody) {
            _this._debugErrPara(p.element, "Too close to bottom of body " + (p.top + rules.minBelow) + " > " + bodyHeight);
          }
        }
        return valid;
      };
    })(this));
    if (rules.clearContentMeta) {
      contentMeta = this._mapElementToDimensions($('.js-content.meta').get(0));
      filtered = filtered.filter((function(_this) {
        return function(index, p) {
          var valid;
          valid = p.top > (contentMeta.bottom + rules.clearContentMeta);
          if (debug && !valid) {
            return _this._debugErrPara(p.element, 'too close to content meta');
          }
        };
      })(this));
      return valid;
    }
    $.each(rules.selectors, (function(_this) {
      return function(selector) {
        var relevantElems;
        relevantElems = $.map($(_this.bodySelector + " " + selector), function(el) {
          return _this._mapElementToDimensions(el);
        });
        return filtered = filtered.filter(function(index, p) {
          var valid;
          valid = _this._testElems(p, relevantElems, params);
          if (debug && !valid) {
            _this._debugErrPara(p.element, "too close to selector (" + selector);
          }
          return valid;
        });
      };
    })(this));
    return filtered;
  };

  Spacefinder.prototype.onImagesLoaded = function() {
    var notLoaded;
    notLoaded = $(this.bodySelector + " img").filter((function(_this) {
      return function(index, img) {
        return !img.complete;
      };
    })(this));
    return Promise.all($.map(notLoaded, (function(_this) {
      return function(img) {
        return new Promise(function(resolve) {
          window.setTimeout(resolve, 5000);
          return $.on(img, 'load', resolve);
        });
      };
    })(this)));
  };

  Spacefinder.prototype.getReady = function() {
    if (this.viewability) {
      return Promise.all(this.onImagesLoaded());
    }
    return Promise.resolve();
  };

  Spacefinder.prototype.getParaWithSpace = function(rules, debug) {
    var bodySelector;
    debug = debug || this.debug;
    bodySelector = this.bodySelector;
    rules = rules || this.defaultRules;
    return this.getReady().then((function(_this) {
      return function() {
        return new Promise(function(resolve) {
          return fastdom.read(function() {
            var bodyBottom, elems, paraElems, slots;
            bodyBottom = $(_this.bodySelector).get(0).offsetHeight;
            paraElems = $(_this.paraSelectors).map(function(i, el) {
              return _this._mapElementToDimensions(el);
            });
            if (debug) {
              elems = _this._pluck(paraElems, 'element');
              elems.attr('data-spacefinder-msg', '').removeClass('spacefinder--valid').removeClass('spacefinder--error');
            }
            slots = _this._enforceRules(paraElems, rules, bodyBottom, debug);
            if (debug) {
              fastdom.write(function() {
                return _this._pluck(slots, 'element').addClass('spacefinder--valid');
              });
            }
            if (slots.length) {
              return resolve(slots[0].element);
            } else {
              return resolve(void 0);
            }
          });
        });
      };
    })(this));
  };

  return Spacefinder;

})();

module.exports = Spacefinder;


},{"fastdom":55,"promise":60}],39:[function(require,module,exports){
var Logger, SplitPost,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Logger = require('js-logger');

SplitPost = (function() {
  var SETTINGS;

  SETTINGS = {
    ads: {
      refreshRate: 1
    }
  };

  function SplitPost() {
    if (!$("body").hasClass("single-splitpost")) {
      return;
    }
    this.logger = Logger.get('SplitPost');
    this.logger.info('init - splitposts ready');
    this.startPage = parseInt(splitpost_vars.current_page);
    this.totalPages = parseInt(splitpost_vars.total_pages);
    this.postPermalink = splitpost_vars.permalink;
    this.currentPage = this.startPage || 1;
    this.slideData = splitpost_vars.slide_data;
    this.sliderClass = $('.splitpost-slider');
    this.actionFromNav = null;
    if (this.sliderPresent()) {
      this.setupSlider();
      this.slider = this.sliderClass.data('flexslider');
    }
    this.eventBindings();
    this.keyBindings();
    this.loadHistory();
  }

  SplitPost.prototype.setupSlider = function() {
    this.sliderClass.flexslider({
      animation: 'slide',
      animationSpeed: 300,
      controlNav: false,
      directionNav: false,
      slideshow: false,
      keyboard: false,
      lazyLoad: true,
      touch: true,
      smoothHeight: true,
      video: true,
      startAt: this.getSlideNumber(),
      before: (function(_this) {
        return function(slider) {
          return _this.maybeRefreshIframe(slider.slides[slider.currentSlide]);
        };
      })(this),
      after: (function(_this) {
        return function(slider) {
          return _this.doSlide(slider.currentSlide);
        };
      })(this)
    });
    return $(window).on("FM:onFacebookXFBMLRender", (function(_this) {
      return function() {
        _this.logger.info("setupSlider - onFacebookXFBMLRender#resize");
        return setTimeout(function() {
          return _this.slider.resize();
        }, 3000);
      };
    })(this));
  };

  SplitPost.prototype.gotoPage = function(page) {
    var slideNumber;
    slideNumber = this.getSlideNumber(page);
    if (this.sliderPresent() && this.hasAsyncAds()) {
      return this.slider.flexAnimate(slideNumber);
    } else {
      return this.doSlide(slideNumber);
    }
  };

  SplitPost.prototype.doSlide = function(slideNumber) {
    if (this.hasAsyncAds()) {
      this.updatePageContent(slideNumber);
      this.updateMetaTags(slideNumber);
      if (this.actionFromNav) {
        this.updateHistory(slideNumber + 1);
      }
      this.maybeReloadAds();
      this.trackPageview(slideNumber + 1);
      this.currentPage = slideNumber + 1;
      this.updatePageNav();
      return $(window).trigger("FM:onSplitPostPageChanged", {
        slideNumber: slideNumber
      });
    } else {
      this.currentPage = slideNumber + 1;
      this.logger.info("doSlide - Doing nav without ASYNC to page: " + slideNumber);
      return document.location = this.postPermalink + "/" + this.currentPage;
    }
  };

  SplitPost.prototype.getSlideNumber = function(page) {
    var currentSlide;
    currentSlide = this.currentPage - 1;
    if (page === 'next') {
      if (this.currentPage === this.totalPages) {
        return 0;
      } else {
        return this.currentPage;
      }
    } else if (page === 'prev') {
      if (currentSlide === 0) {
        return this.totalPages - 1;
      } else {
        return currentSlide - 1;
      }
    } else if ($.isNumeric(page)) {
      return page - 1;
    } else {
      return currentSlide;
    }
  };

  SplitPost.prototype.eventBindings = function() {
    var tap;
    tap = this.hasTouch() ? "touchend" : "click";
    $("[data-splitpost='next-btn']").on(tap, (function(_this) {
      return function(event) {
        if (_this.hasAsyncAds()) {
          _this.actionFromNav = true;
          _this.gotoPage('next');
          if ($(event.currentTarget).data('action') === 'Next Last') {
            _this.scrollToTop();
          }
          return event.preventDefault();
        }
      };
    })(this));
    $("[data-splitpost='prev-btn']").on(tap, (function(_this) {
      return function(event) {
        if (_this.hasAsyncAds()) {
          _this.actionFromNav = true;
          _this.gotoPage('prev');
          if ($(event.currentTarget).data('action') === 'Prev Last') {
            _this.scrollToTop();
          }
          return event.preventDefault();
        }
      };
    })(this));
    return $('[data-splitpost-index]').on(tap, (function(_this) {
      return function(event) {
        var page;
        if (_this.hasAsyncAds()) {
          _this.actionFromNav = true;
          page = $(event.currentTarget).data('splitpost-index') + 1;
          _this.gotoPage(page);
          return event.preventDefault();
        }
      };
    })(this));
  };

  SplitPost.prototype.keyBindings = function() {
    return $(document).bind("keyup", (function(_this) {
      return function(event) {
        _this.actionFromNav = true;
        if (_this.galleryOpen() === !true) {
          if (event.keyCode === 39) {
            _this.gotoPage('next');
            return _this.trackEvent("Next Keyboard");
          } else if (event.keyCode === 37) {
            _this.gotoPage('prev');
            return _this.trackEvent("Prev Keyboard");
          }
        }
      };
    })(this));
  };

  SplitPost.prototype.maybeReloadAds = function() {
    this.currentAdRefresh || (this.currentAdRefresh = 1);
    if (this.currentAdRefresh / SETTINGS.ads.refreshRate === 1) {
      this.reloadAds();
      return this.currentAdRefresh = 1;
    } else {
      return this.currentAdRefresh++;
    }
  };

  SplitPost.prototype.reloadAds = function() {
    if (this.hasAsyncAds()) {
      return $(window).trigger('SplitPost.PageLoader.FM', {
        scopes: ['.c-site-header', '.c-splitpost']
      });
    }
  };

  SplitPost.prototype.maybeRefreshIframe = function(slide_element) {
    var iframe;
    iframe = $(slide_element).find('iframe');
    if (iframe.length > 0) {
      return iframe.attr('src', iframe.attr('src'));
    }
  };

  SplitPost.prototype.updatePageNav = function() {
    var nextPage, prevPage;
    nextPage = this.getSlideNumber('next') + 1;
    prevPage = this.getSlideNumber('prev') + 1;
    $("[data-splitpost='next-btn']").attr('href', this.postPermalink + "/" + nextPage);
    return $("[data-splitpost='prev-btn']").attr('href', this.postPermalink + "/" + prevPage);
  };

  SplitPost.prototype.updatePageContent = function(slideNumber) {
    var data;
    data = this.slideData[slideNumber];
    $("[data-splitpost='page-number']").html(data.displayed_number);
    $("[data-splitpost='title']").html(data.title);
    $("[data-splitpost='content']").html(data.content);
    return $(".gallery").each(function() {
      return $(window).trigger("initGallery");
    });
  };

  SplitPost.prototype.updateMetaTags = function(slideNumber) {
    var metaTitle;
    if (this.slideData[slideNumber].title) {
      metaTitle = this.slideData[slideNumber].title + " | " + splitpost_vars.post_title;
    } else {
      metaTitle = splitpost_vars.post_title;
    }
    $("title").html(metaTitle);
    $("meta[property='og:title']").attr("content", this.slideData[slideNumber].title + " | " + splitpost_vars.post_title);
    return $("meta[property='og:url']").attr("content", this.postPermalink + "/" + this.currentPage);
  };

  SplitPost.prototype.loadHistory = function() {
    return window.onpopstate = (function(_this) {
      return function(event) {
        if (event.state && event.state.page) {
          _this.actionFromNav = false;
          return _this.gotoPage(event.state.page);
        }
      };
    })(this);
  };

  SplitPost.prototype.updateHistory = function(page) {
    var state, title, url;
    state = {
      page: page
    };
    title = "Page: " + page;
    url = this.postPermalink + "/" + page;
    if (history.pushState) {
      return history.pushState(state, title, url);
    }
  };

  SplitPost.prototype.sliderPresent = function() {
    return this.sliderClass.length > 0;
  };

  SplitPost.prototype.scrollToTop = function() {
    var element, navHeight;
    if ($(window).width() < 480) {
      element = $(".splitpost-title");
    } else {
      element = $(".title-block");
    }
    navHeight = $(".nav-primary, .main.top.menu").height();
    if ($(".fixed-social").length > 0) {
      navHeight = navHeight + $(".fixed-social").height();
    }
    return $("html, body").scrollTop(element.offset().top - navHeight);
  };

  SplitPost.prototype.hasTouch = function() {
    if (indexOf.call(window, 'ontouchstart') >= 0 || (window.DocumentTouch && document instanceof DocumentTouch) || typeof TouchEvent === "object") {
      return true;
    } else {
      return false;
    }
  };

  SplitPost.prototype.hasAsyncAds = function() {
    return true;
  };

  SplitPost.prototype.trackEvent = function(action) {
    if (!window.Tracker) {
      return;
    }
    return Tracker.track("Splitpost", action);
  };

  SplitPost.prototype.trackPageview = function(page) {
    if (!window.Tracker) {
      return;
    }
    return Tracker.trackPageview("" + window.location.pathname);
  };

  SplitPost.prototype.galleryOpen = function() {
    return $('body').hasClass('gallery-is-showing');
  };

  return SplitPost;

})();

module.exports = SplitPost;


},{"js-logger":58}],40:[function(require,module,exports){
var Tabs;

Tabs = (function() {
  function Tabs() {
    var tabs;
    tabs = $(".tabs");
    tabs.each(function() {
      var content, menu_items, switch_on, wrapper;
      wrapper = $(this);
      menu_items = wrapper.find(".tabs-menu-item");
      content = wrapper.find(".tabs-content");
      switch_on = wrapper.data("switch") || "click";
      if (menu_items.length === 0 || content.length === 0) {
        return;
      }
      menu_items.first().addClass("is-active");
      content.first().addClass("is-showing");
      return menu_items.each(function(index) {
        return $(this).on(switch_on, function(e) {
          content.removeClass("is-showing");
          $(content.get(index)).addClass("is-showing");
          menu_items.removeClass("is-active");
          $(this).addClass("is-active");
          return e.preventDefault();
        });
      });
    });
  }

  return Tabs;

})();

module.exports = Tabs;


},{}],41:[function(require,module,exports){
var FMTracker, LinkParser, Logger;

Logger = require('js-logger');

LinkParser = require('./_components.link-parser.coffee');

FMTracker = (function() {
  function FMTracker() {
    this.logger = Logger.get('FMTracker');
    this.tracked = {};
    this.body = $("body");
    if (typeof FMAdTracker !== "undefined" && FMAdTracker !== null) {
      this.adTracker = new FMAdTracker();
    }
    setTimeout((function(_this) {
      return function() {
        _this.bootstrapClickTracking();
        _this.trackOtherClicks();
        return _this.trackExternalLinks();
      };
    })(this), 600);
  }

  FMTracker.prototype.log = function(action, msg) {
    return this.logger.info(action, msg);
  };

  FMTracker.prototype.track = function(category, action, label, callback) {
    if (window.location.href.indexOf("forums.") > -1) {
      return false;
    }
    if (window.location.href.indexOf("coresite.local") > -1) {
      return false;
    }
    label = label || (location.pathname + location.search);
    $(window).trigger("FM:onTrackEvent", {
      category: category,
      action: action,
      label: label,
      callback: callback
    });
    return this.log("track", {
      category: category,
      action: action,
      label: label
    });
  };

  FMTracker.prototype.trackPageview = function(url) {
    $(window).trigger("FM:onTrackPageview", {
      url: url
    });
    return this.log("trackPageview", {
      url: url
    });
  };

  FMTracker.prototype.trackClick = function(selector, category, action, label, rtn) {
    return $(selector).on("click", (function(_this) {
      return function(e) {
        var a, c, el, href, l, r;
        el = $(e.currentTarget);
        href = el.attr("href");
        c = category;
        a = action;
        l = label;
        r = (selector === ".ratings a" ? true : false);
        if (action === "href") {
          a = el.attr("href");
        }
        if (typeof category === "function") {
          c = category(el);
        }
        if (typeof action === "function") {
          a = action(el);
        }
        if (typeof label === "function") {
          l = label(el);
        }
        _this.log("trackClick", {
          selector: selector,
          category: c,
          action: a,
          label: a
        });
        $(window).trigger("FM:onTrackClick", {
          selector: selector,
          category: c,
          action: a,
          label: l
        });
        _this.track(c, a, l);
        if (rtn) {
          e.preventDefault();
          return rtn;
        }
      };
    })(this));
  };

  FMTracker.prototype.trackSocial = function(network, socialAction, targetUrl) {
    this.log("Tracker#trackSocial", {
      network: network,
      action: socialAction,
      url: targetUrl
    });
    return $(window).trigger("FM:onTrackSocial", {
      network: network,
      action: socialAction,
      url: targetUrl
    });
  };

  FMTracker.prototype.dataLayer = function(object) {
    return window.dataLayer.push(object);
  };

  FMTracker.prototype.trackDownloads = function() {
    return this.trackClick("a[rel=download]", "Download", "href");
  };

  FMTracker.prototype.trackNavigation = function() {
    return this.trackClick(".nav-primary-list a", "Click:Navigation", (function(link) {
      return link.text();
    }), function(link) {
      if ($("body").hasClass("js-nav-sticky")) {
        return "Nav Sticky";
      } else {
        return "Nav Inline";
      }
    });
  };

  FMTracker.prototype.trackHomePageLinks = function() {
    var linkElements;
    if (this.body.hasClass("home")) {
      linkElements = ".section-outer .article-link, .section-outer .article-title a, .section-outer .feature-link";
      this.trackClick(linkElements, LinkParser.clickCategory, LinkParser.clickAction, LinkParser.clickLabel);
      return this.trackClick(".feature-tab", LinkParser.clickCategory, LinkParser.clickAction, LinkParser.tabsMenuClickLabel);
    }
  };

  FMTracker.prototype.trackRCUKFacetsWidget = function() {
    if (!this.body.hasClass("home")) {
      return this.trackClick(".widget-rcuk-test a", "Click:RCUK Gear Facets", function(link) {
        return link.text();
      });
    }
  };

  FMTracker.prototype.trackImages = function() {
    if (this.body.hasClass("single")) {
      return this.trackClick(".single-content a:has(img)", "Click:Article Image", function(el) {
        var type;
        type = (el.attr("href").indexOf("/attachment/") > -1 ? "attachment page" : "image file");
        return type;
      });
    }
  };

  FMTracker.prototype.trackRatings = function() {
    return this.trackClick(".ratings a", "Click:Article Rating", function(el) {
      return el.text();
    });
  };

  FMTracker.prototype.trackOtherClicks = function() {
    this.trackDownloads();
    this.trackNavigation();
    this.trackHomePageLinks();
    this.trackRCUKFacetsWidget();
    this.trackImages();
    return this.trackRatings();
  };

  FMTracker.prototype.bootstrapClickTracking = function() {
    return $(document).on("click", ".is-tracked", (function(_this) {
      return function(e) {
        var action, category, el, href, key, label, method, once, rtn;
        el = $(e.currentTarget);
        href = el.prop("href");
        category = el.data("category");
        if (!category) {
          return true;
        }
        action = el.data("action") || el.prop("href");
        label = el.data("label") || (location.pathname + location.search);
        rtn = (el.data("return") ? el.data("return") === "true" : undefined);
        once = (el.data("track-once") ? true : false);
        if (once) {
          key = category + action + label;
          if (_this.tracked[key]) {
            return true;
          } else {
            _this.tracked[key] = 1;
          }
        }
        method = el.data("method");
        if (method === "put" || method === "delete" || method === "post") {
          rtn = true;
        }
        _this.track(category, action, label);
        if (typeof rtn === "undefned") {
          e.preventDefault();
          return rtn;
        }
      };
    })(this));
  };

  FMTracker.prototype.trackExternalLinks = function() {
    return $(document).on("click", (function(_this) {
      return function(e) {
        var el;
        el = e.srcElement || e.target;
        while (el && (typeof el.tagName === "undefined" || el.tagName.toLowerCase() !== "a" || !el.href)) {
          el = el.parentNode;
        }
        if (el && el.href) {
          if (new URL(el.href).hostname && new URL(el.href).hostname !== location.host) {
            if (!_this.isAd(el)) {
              _this.track("Outgoing Links", el.href, document.location.pathname + document.location.search);
            }
            $(window).trigger("FM:onTrackExternalLink", {
              url: el.href
            });
            if (!el.target || el.target.match(/^_(self|parent|top)$/i)) {
              setTimeout((function() {
                document.location.href = el.href;
              }), 500);
              return e.preventDefault((e.preventDefault() ? e.returnValue : !1));
            }
          }
        }
      };
    })(this));
  };

  FMTracker.prototype.adTracker = function() {
    return this.adTracker;
  };

  FMTracker.prototype.isAd = function(el) {
    return $(el).parent().hasClass("ad-placement") || el.href.match(/adtech\.de/);
  };

  return FMTracker;

})();

module.exports = FMTracker;


},{"./_components.link-parser.coffee":24,"js-logger":58}],42:[function(require,module,exports){
var TypeKit;

TypeKit = (function() {
  function TypeKit() {
    this.loadKit();
  }

  TypeKit.prototype.loadKit = function() {
    var el, typekitId;
    typekitId = document.body.dataset['typekitId'];
    if (typekitId !== '') {
      el = document.createElement('script');
      el.src = '//use.typekit.net/' + typekitId + '.js';
      el.onload = function() {
        return Typekit.load();
      };
      return document.body.appendChild(el);
    }
  };

  return TypeKit;

})();

module.exports = TypeKit;


},{}],43:[function(require,module,exports){
var Logger, UmbelClient,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Logger = require('js-logger');

UmbelClient = (function() {
  var SUPPORTED_EVENTS;

  SUPPORTED_EVENTS = ['action.tag', 'profile.unique_id', 'profile.zip', 'profile.city', 'profile.country', 'profile.state', 'profile.birth_year', 'profile.gender', 'profile.email', 'profile.facebook_access_token', 'profile.twitter_user_id'];

  function UmbelClient() {
    this.setupUmbel = bind(this.setupUmbel, this);
    this.exchangeToken = bind(this.exchangeToken, this);
    this.logger = Logger.get('UmbelClient');
    this.client = window._umbel;
    this.test_mode = window._umbel_test_mode;
    this.access_token = null;
    $(window).on("FM:onFacebookConnected", (function(_this) {
      return function(e, data) {
        _this.log("FM:onFacebookConnected", data);
        return _this.setupUmbel(data);
      };
    })(this));
  }

  UmbelClient.prototype.log = function(action, msg) {
    return this.logger.info(action + ": " + (JSON.stringify(msg)));
  };

  UmbelClient.prototype.exchangeToken = function(token) {
    return this.set("profile.facebook_access_token", token);
  };

  UmbelClient.prototype.setupUmbel = function(response) {
    return this.exchangeToken(response.authResponse.accessToken);
  };

  UmbelClient.prototype.set = function(name, value) {
    return this.client.push(this.buildData("set", name, value));
  };

  UmbelClient.prototype.send = function(name, value) {
    return this.client.push(this.buildData("send", name, value));
  };

  UmbelClient.prototype.buildData = function(type, name, value) {
    return {
      "type": type,
      "name": name,
      "value": value
    };
  };

  return UmbelClient;

})();

module.exports = UmbelClient;


},{"js-logger":58}],44:[function(require,module,exports){
var Logger, UmbelTracker;

Logger = require('js-logger');

UmbelTracker = (function() {
  function UmbelTracker(umbelClient) {
    this.umbelClient = umbelClient;
    this.logger = Logger.get('UmbelTracker');
    this.window = $(window);
    this.initEventBindings();
  }

  UmbelTracker.prototype.log = function(msg) {
    return this.logger.info(msg);
  };

  UmbelTracker.prototype.initEventBindings = function(response) {
    this.window.on("FM:onTrackPageLoad", (function(_this) {
      return function(e, data) {
        _this.log("FM:onTrackPageLoad");
        return _this.umbelClient.send("action.tag", [data.site, data.category]);
      };
    })(this));
    this.window.on("FM:onTrackSocial", (function(_this) {
      return function(e, data) {
        _this.log("FM:onTrackSocial");
        return _this.umbelClient.send("action.tag", ["Amplifying", data.network + " " + data.action]);
      };
    })(this));
    this.window.on("FM:onNewsletterSignup", (function(_this) {
      return function(e, data) {
        _this.log("FM:onNewsletterSignup " + data.email);
        _this.umbelClient.set("profile.email", data.email);
        return _this.umbelClient.send("action.tag", ["Subscribing", "Mailing List"]);
      };
    })(this));
    this.window.on("FM:onFacebookLike", (function(_this) {
      return function(e, data) {
        _this.log("FM:onFacebookLike");
        return _this.umbelClient.send("action.tag", ["Subscribing", "Like Facebook"]);
      };
    })(this));
    this.window.on("FM:onTwitterFollow", (function(_this) {
      return function(e, data) {
        _this.log("FM:onTwitterFollow");
        return _this.umbelClient.send("action.tag", ["Subscribing", "Follow Twitter"]);
      };
    })(this));
    return this.window.on("FM:onFacebookCommentCreated", (function(_this) {
      return function(e, data) {
        _this.log("FM:onFacebookCommentCreated");
        return _this.umbelClient.send("action.tag", ["Contributing", "Commenter"]);
      };
    })(this));
  };

  UmbelTracker.prototype.removeEventBindings = function(response) {
    this.window.off("FM:onTrackCategory");
    this.window.off("FM:onTrackSocial");
    this.window.off("FM:onNewsletterSignup");
    this.window.off("FM:onFacebookCommentCreated");
    this.window.off("FM:onFacebookLike");
    return this.window.off("FM:onTwitterFollow");
  };

  return UmbelTracker;

})();

module.exports = UmbelTracker;


},{"js-logger":58}],45:[function(require,module,exports){
var Logger, WatchedSection;

Logger = require('js-logger');

WatchedSection = (function() {
  function WatchedSection(elem, sectionName, sectionWatcher) {
    this.elem = elem;
    this.sectionName = sectionName;
    this.sectionWatcher = sectionWatcher;
    this.logger = Logger.get("WatchedSection");
    this.sectionName = this.sectionName || "section";
    this.initViewable();
  }

  WatchedSection.prototype.initViewable = function() {
    $(this).on('Scroll.WatchedSection.FM', (function(_this) {
      return function(e, data) {
        if (_this.viewable()) {
          _this.trackPageview();
          return $(_this).off('Scroll.WatchedSection.FM');
        }
      };
    })(this));
    return $(this.sectionWatcher).on('Scroll.SectionWatcher.FM', (function(_this) {
      return function(e, data) {
        return $(_this).trigger('Scroll.WatchedSection.FM', data);
      };
    })(this));
  };

  WatchedSection.prototype.viewable = function() {
    var rect;
    rect = this.elem.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && (rect.top + 50) <= $(window).height() && (rect.left + 50) <= $(window).width();
  };

  WatchedSection.prototype.trackPageview = function() {
    var ref;
    this.logger.info("Tracking section", this.sectionName, "as pageview", this.elem);
    return (ref = window.Tracker) != null ? ref.trackPageview("" + location.pathname + location.search + "#" + this.sectionName) : void 0;
  };

  return WatchedSection;

})();

module.exports = WatchedSection;


},{"js-logger":58}],46:[function(require,module,exports){
(function() {
  var receiveMessage;
  receiveMessage = function(e) {
    var data, error, iframe;
    data = {};
    try {
      data = JSON.parse(e.data);
    } catch (error) {
      e = error;
      return;
    }
    if (data.action !== "resize") {
      return;
    }
    iframe = $("iframe").filter(function() {
      return this.contentWindow === e.source;
    });
    if (iframe.length > 0 && data.height !== void 0) {
      return iframe.height(data.height);
    }
  };
  return window.addEventListener("message", receiveMessage, false);
})();


},{}],47:[function(require,module,exports){
(function($, sr) {
  jQuery.fn[sr] = function(fn, threshold, execAsap) {
    if (fn) {
      return this.bind("resize", Utilities.debounce(fn, threshold, execAsap));
    } else {
      return this.trigger(sr);
    }
  };
})(jQuery, "smartresize");


},{}],48:[function(require,module,exports){
(function() {
  var s, u;
  window._umbel = window._umbel || [];
  window._umbel_test_mode = false;
  u = document.createElement('script');
  u.type = 'text/javascript';
  u.async = true;
  u.src = document.location.protocol + '//tags.api.umbel.com/sbkozmohwzerlldb/w.js?d=' + new Date().getMonth() + '-' + new Date().getDate();
  s = document.getElementsByTagName('script')[0];
  return s.parentNode.insertBefore(u, s);
})();


},{}],49:[function(require,module,exports){
(function() {
  var FM;
  FM = window.FM || {};
  FM.Views = FM.Views || {};
  return window.FM = FM;
})();


},{}],50:[function(require,module,exports){
var I18n;

I18n = (function(w, d, undefined_) {
  var default_locale, locale, locales, translate, translations;
  locales = ["en-GB", "fr-FR", "de-DE"];
  default_locale = "en-GB";
  translations = {
    "en-GB": {
      collapsible: {
        read_more: "Read more",
        read_less: "Read less"
      }
    },
    "fr-FR": {
      collapsible: {
        read_more: "Read more",
        read_less: "Read less"
      }
    },
    "de-DE": {
      collapsible: {
        read_more: "Mehr",
        read_less: "Weniger"
      }
    }
  };
  locale = function() {
    var lang;
    lang = $("html").attr("lang");
    if (locales.indexOf(lang) > -1) {
      return lang;
    } else {
      return "en-GB";
    }
  };
  translate = function(key) {
    var section;
    section = translations[locale()][key];
    if (section === undefined) {
      section = translations[default_language][key];
    }
    return section;
  };
  return {
    locales: locales,
    translate: translate,
    t: translate,
    translations: translations,
    locale: locale
  };
})(window, document);

module.exports = I18n;


},{}],51:[function(require,module,exports){
var Utilities;

Utilities = Utilities || {};

Utilities.PostMessage = Utilities.PostMessage || {};

Utilities.PostMessage.handle = function(callback) {
  if (!this.supported()) {
    return;
  }
  return window[this.method()](this.event(), (function(_this) {
    return function(e) {
      return callback(e);
    };
  })(this));
};

Utilities.PostMessage.send = function(message, targetOrigin) {
  if (!this.supported()) {
    return;
  }
  targetOrigin || (targetOrigin = "*");
  return window.parent.postMessage(message, targetOrigin);
};

Utilities.PostMessage.supported = function() {
  return !!window.postMessage;
};

Utilities.PostMessage.method = function() {
  if (window.addEventListener) {
    return "addEventListener";
  } else {
    return "attachEvent";
  }
};

Utilities.PostMessage.event = function() {
  if (this.method() === "attachEvent") {
    return "onmessage";
  } else {
    return "message";
  }
};

module.exports = Utilities.PostMessage;


},{}],52:[function(require,module,exports){
var Utilities;

Utilities = (function(w, d, undefined_) {
  var debounce;
  debounce = function(func, threshold, execAsap) {
    var debounced, timeout;
    timeout = void 0;
    return debounced = function() {
      var args, delayed, obj;
      delayed = function() {
        if (!execAsap) {
          func.apply(obj, args);
        }
        timeout = null;
      };
      obj = this;
      args = arguments;
      if (timeout) {
        clearTimeout(timeout);
      } else {
        if (execAsap) {
          func.apply(obj, args);
        }
      }
      timeout = setTimeout(delayed, threshold || 100);
    };
  };
  return {
    debounce: debounce
  };
})(window, document);

Utilities.isEmbedded = function() {
  var ref;
  return ((ref = window.frameElement) != null ? ref.nodeName : void 0) === "IFRAME";
};

Utilities.getURLSeparator = function(url) {
  if (url.indexOf("?") > -1) {
    return '&';
  } else {
    return '?';
  }
};

Utilities.getParams = function(query) {
  var i, key, len, params, rawVars, ref, v, val;
  query || (query = window.location.search);
  query = query.substring(1);
  rawVars = query.split("&");
  params = {};
  for (i = 0, len = rawVars.length; i < len; i++) {
    v = rawVars[i];
    ref = v.split("="), key = ref[0], val = ref[1];
    params[key] = decodeURIComponent(val);
  }
  return params;
};

Utilities.getLocale = function() {
  var lang, locale, locales;
  lang = $("html").attr("lang");
  locales = ["en-GB", "fr-FR", "de-DE"];
  locale = "en-GB";
  if (locales.indexOf(lang) > -1) {
    locale = lang;
  }
  return locale;
};

Utilities.formatDate = function(date) {
  var day, locale, localeFormat, month, monthNames, year;
  date = new Date(date);
  year = date.getFullYear();
  locale = Utilities.getLocale();
  monthNames = {
    'de-DE': ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    'fr-FR': ['Jan', 'F&#233;v', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Ao&#251;', 'Sep', 'Oct', 'Nov', 'D&#233;c'],
    'en-GB': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  month = monthNames[locale][date.getMonth()];
  day = date.getDate();
  localeFormat = {
    'de-DE': day + " " + month + " " + year,
    'fr-FR': day + " " + month + " " + year,
    'en-GB': day + " " + month + " " + year
  };
  return localeFormat[locale];
};

module.exports = Utilities;


},{}],53:[function(require,module,exports){
window["FM"] = window["FM"] || {};
window["FM"]["Views"] = window["FM"]["Views"] || {};
window["FM"]["Views"]["after_article"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"sponsored-articles\">\n  <article class=\"article-listed-small article-type-sponsored\">\n\n    <a class=\"article-listed-thumb\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <img height=\"190\" width=\"340\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (340),
    'height': (190)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n    </a>\n\n    <div class=\"article-body\">\n      <p class=\"sponsored-by-text\">\n        <i class=\"fa fa-location-arrow\"></i>\n        Sponsored by\n        <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      </p>\n\n      <h4 class=\"article-title\">\n        <a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n      </h4>\n\n      <div class=\"article-excerpt\">\n        ";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n    </div>\n\n  </article>\n</div>";
  return buffer;
  };
window["FM"]["Views"]["article_block"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<article class=\"article-listed-small article-type-sponsored\">\n\n  <a class=\"article-listed-thumb\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <img height=\"190\" width=\"340\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (340),
    'height': (190)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n  </a>\n\n  <div class=\"article-body\">\n    <p class=\"sponsored-by-text\">\n      <i class=\"fa fa-location-arrow\"></i>\n      Sponsored by\n      <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </p>\n\n    <h4 class=\"article-title\">\n      <a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n    </h4>\n\n    <div class=\"article-excerpt\">\n      ";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n\n  </div>\n</article>";
  return buffer;
  };
window["FM"]["Views"]["article_large_2"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<article class=\"article-large article-type-sponsored\">\n\n  <a class=\"article-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n    <div class=\"article-thumb-wrap\">\n      <img height=\"285\" width=\"510\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (510),
    'height': (285)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n    </div>\n\n    <p class=\"sponsored-by-text\">\n      <i class=\"fa fa-location-arrow\"></i>\n      Sponsored by\n      <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </p>\n\n    <h2 class=\"article-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n    <div class=\"article-excerpt\">";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  </a>\n</article>";
  return buffer;
  };
window["FM"]["Views"]["article_listed"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <div class=\"article-excerpt\">";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    ";
  return buffer;
  }

  buffer += "<article class=\"article-listed article-type-sponsored\">\n\n  <a class=\"article-listed-thumb\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <img height=\"190\" width=\"340\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (340),
    'height': (190)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n  </a>\n\n  <div class=\"article-body\">\n    <p class=\"sponsored-by-text\">\n      <i class=\"fa fa-location-arrow\"></i>\n      Sponsored by\n      <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </p>\n\n    <h2 class=\"article-title\">\n      <a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </a>\n    </h2>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.excerpt), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</article>";
  return buffer;
  };
window["FM"]["Views"]["article_listed_small"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<article class=\"article-listed-small article-type-sponsored\">\n\n  <a class=\"article-listed-thumb\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <img height=\"190\" width=\"340\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"article-medium-thumb\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (340),
    'height': (190)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n  </a>\n\n  <div class=\"article-body\">\n    <p class=\"sponsored-by-text\">\n      <i class=\"fa fa-location-arrow\"></i>\n      Sponsored by\n      <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </p>\n\n    <h4 class=\"article-title\">\n      <a class=\"is-tracked\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </a>\n    </h4>\n\n  </div>\n\n</article>";
  return buffer;
  };
window["FM"]["Views"]["article_medium"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<article class=\"article-medium grid-mobile-2 article-type-sponsored\">\n\n  <a class=\"article-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n    <div class=\"article-thumb-wrap\">\n      <img height=\"190\" width=\"340\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (340),
    'height': (190)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n    </div>\n\n    <p class=\"sponsored-by-text\">\n      <i class=\"fa fa-location-arrow\"></i>\n      Sponsored by\n      <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </p>\n\n    <h2 class=\"article-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n    <div class=\"article-excerpt\">";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  </a>\n</article>";
  return buffer;
  };
window["FM"]["Views"]["article_small_1"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<article class=\"article-small article-type-sponsored\">\n  <a class=\"article-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n    <div class=\"article-thumb-wrap\">\n      <img height=\"95\" width=\"170\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"article-small-thumb\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (170),
    'height': (95)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n    </div>\n\n    <p class=\"sponsored-by-text\">\n      <i class=\"fa fa-location-arrow\"></i>\n      Sponsored by\n      <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </p>\n\n    <h2 class=\"article-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n    <div class=\"article-excerpt\">\n      ";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n  </a>\n</article>";
  return buffer;
  };
window["FM"]["Views"]["before_article"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"sponsored-articles\">\n  <article class=\"article-listed-small article-type-sponsored\">\n\n    <a class=\"article-listed-thumb\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <img height=\"190\" width=\"340\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (340),
    'height': (190)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n    </a>\n\n    <div class=\"article-body\">\n      <p class=\"sponsored-by-text\">\n        <i class=\"fa fa-location-arrow\"></i>\n        Sponsored by\n        <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      </p>\n\n      <h4 class=\"article-title\">\n        <a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n      </h4>\n\n      <div class=\"article-excerpt\">\n        ";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n    </div>\n\n  </article>\n</div>";
  return buffer;
  };
window["FM"]["Views"]["feature_grid"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<article class=\"feature-medium article-type-sponsored\">\n\n  <a class=\"feature-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n    <img height=\"190\" width=\"340\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"article-medium-thumb\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (340),
    'height': (190)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\">\n\n    <div class=\"feature-blurb\">\n      <p class=\"sponsored-by-text\">\n        <i class=\"fa fa-location-arrow\"></i>\n        Sponsored by\n        <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      </p>\n\n      <h2 class=\"feature-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    </div>\n\n  </a>\n</article>";
  return buffer;
  };
window["FM"]["Views"]["feature_huge"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<li>\n  <article class=\"feature-huge article-type-sponsored\">\n\n    <a class=\"feature-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <img height=\"460\" width=\"1020\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (1020),
    'height': (460)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\" class=\"article-feature-huge-thumb\">\n\n     <div class=\"feature-blurb\">\n       <p class=\"sponsored-by-text\">\n         <i class=\"fa fa-location-arrow\"></i>\n         Sponsored by\n         <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n       </p>\n\n        <h2 class=\"feature-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n        <div class=\"feature-excerpt\">";
  if (helper = helpers.summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n      </div>\n    </a>\n\n  </article>\n</li>";
  return buffer;
  };
window["FM"]["Views"]["feature_medium"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<article class=\"feature-medium article-type-sponsored\">\n\n  <a class=\"feature-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n    <img height=\"95\" width=\"170\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (170),
    'height': (95)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\" class=\"article-small-thumb\">\n\n    <div class=\"feature-blurb\">\n      <p class=\"sponsored-by-text\">\n        <i class=\"fa fa-location-arrow\"></i>\n        Sponsored by\n        <img class=\"sponsor-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      </p>\n\n      <h2 class=\"feature-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    </div>\n\n  </a>\n</article>";
  return buffer;
  };
window["FM"]["Views"]["feature_tabs"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<a class=\"feature-tab grid-mobile-1 grid-mobile-omega tabs-menu-item article-type-sponsored\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n  <img height=\"95\" width=\"170\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" src=\""
    + escapeExpression((helper = helpers.getThumbHref || (depth0 && depth0.getThumbHref),options={hash:{
    'width': (170),
    'height': (95)
  },data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "getThumbHref", options)))
    + "\" class=\"article-small-thumb\">\n\n  <p class=\"sponsored-by-text\">\n    <i class=\"fa fa-location-arrow\"></i>\n    Sponsored\n  </p>\n\n  <h2 class=\"feature-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n</a>";
  return buffer;
  };
window["FM"]["Views"]["post_card_home_page"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"c-card__wrapper o-col-xs--6 o-col-md--3  c-card--sm c-card--boxed\">\n\n  <div class=\"c-card\">\n\n\n    <div class=\"c-card__media-wrapper\">\n      <div class=\"c-card__media-inner\">\n        <div class=\"c-card__sponsored c-card__sponsored--lander\">\n          <i class=\"fa fa-location-arrow\"></i>\n          Sponsored by\n          <img class=\"c-card__sponsored-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        </div>\n        <img class=\"c-card__image\" src=\"";
  if (helper = helpers.getThumbHref) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getThumbHref); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      </div>\n    </div>\n\n    <div class=\"c-card__title-wrapper\">\n      <div class=\"c-card__title-inner\">\n        <h5 class=\"c-card__taxonomy\">Sponsored</h5>\n        <h4 class=\"c-card__title\">\n          <a class=\"c-card__title-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </h4>\n\n      </div>\n    </div>\n\n    <a class=\"c-card__link u-faux-block-link__overlay\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n\n  </div>\n\n</div>\n";
  return buffer;
  };
window["FM"]["Views"]["post_card_related_after_article"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"c-card__wrapper o-col-xs--fifth o-col-lg--fifth  c-card--xs\">\n\n  <div class=\"c-card\">\n\n    <div class=\"c-card__media-wrapper\">\n      <div class=\"c-card__media-inner\">\n        <div class=\"c-card__sponsored c-card__sponsored--after-article\">\n          <i class=\"fa fa-location-arrow\"></i>\n          Sponsored by\n          <img class=\"c-card__sponsored-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        </div>\n        <img class=\"c-card__image\" src=\"";
  if (helper = helpers.getThumbHref) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getThumbHref); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      </div>\n    </div>\n\n    <div class=\"c-card__title-wrapper\">\n      <div class=\"c-card__title-inner\">\n        <h5 class=\"c-card__taxonomy\">Sponsored</h5>\n        <h4 class=\"c-card__title\">\n          <a class=\"c-card__title-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </h4>\n\n      </div>\n    </div>\n\n    <a class=\"c-card__link u-faux-block-link__overlay\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n\n  </div>\n\n</div>\n";
  return buffer;
  };
window["FM"]["Views"]["post_card_related_aside"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"c-card__wrapper c-card-wrapper--list o-col-xs--4 o-col-lg--12  c-card--xs\">\n\n  <div class=\"c-card\">\n\n    <div class=\"c-card__media-wrapper\">\n      <div class=\"c-card__media-inner\">\n        <img class=\"c-card__image\" src=\"";
  if (helper = helpers.getThumbHref) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getThumbHref); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      </div>\n    </div>\n\n    <div class=\"c-card__title-wrapper\">\n      <div class=\"c-card__title-inner\">\n\n        <h4 class=\"c-card__title\">\n          <a class=\"c-card__title-link\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </h4>\n\n      </div>\n    </div>\n\n    <div class=\"c-card__sponsored c-card__sponsored--aside\">\n      <i class=\"fa fa-location-arrow\"></i>\n      Sponsored by\n      <img class=\"c-card__sponsored-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.sponsor)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),stack1 == null || stack1 === false ? stack1 : stack1.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </div>\n\n    <a class=\"c-card__link u-faux-block-link__overlay\" href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n\n  </div>\n\n</div>\n";
  return buffer;
  };
window["FM"]["Views"]["sidebar"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>SIDEBAR</div>";
  };
},{}],54:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {

/* DAC.js 2.5.3 Copyright 2014 AOL Advertising. */
window.ADTECH=window.ADTECH||{debugMode:!1,config:{placements:{},placementsdyn:{}}},window.DAC=window.DAC||{};try{!function(){"use strict";function a(a,b,c){function d(){var a=c&&c.navigator&&c.navigator.userAgent;if(a){var b=a.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/);b&&(b[1]||b[2])&&(k=e(b[1]||b[2]),l=k&&(9>k||c.document.documentMode&&c.document.documentMode<10));var d=a.match(/AppleWebKit\/([^\s]*)/);d&&d[1]&&(n=e(d[1]));var f=a.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/);f&&f[1]&&f[2]&&(m=e(f[2]),n=0)}}function e(a){return parseFloat(a)}function f(){return k}function g(){return l}function h(){return!!m}function i(){return!!n}var j="Environment",k=0,l=!1,m=0,n=0;return d(),a[j]={isOldIEMode:g,getIEVersion:f,isChrome:h,isSafari:i},a[j]}function b(a,b,c){function d(a,b,c){var d,e=a&&a.length||0;for(d=0;e>d;d++)b.call(c,a[d],d)}function e(a,b,c){if(a){var d;for(d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}}function f(a){return"object"==typeof a}function g(a){return"string"==typeof a}function h(a){return"function"==typeof a}function i(a){return"number"==typeof a&&isFinite(a)}function j(a){return"object"==typeof a&&a.constructor===Array}function k(a){return"boolean"==typeof a}function l(a){var b;if(!c.JSON)throw new Error("JSON not found. Could not transform the string into an object");return b=c.JSON.parse(a)}function m(a,b,c,f){var g,h={};c?(d(c,function(a){b.hasOwnProperty(a)&&(h[a]=!0)}),g=f?function(b,c){h[b]||(a[b]=c)}:function(c){h[c]&&(a[c]=b[c])}):g=function(b,c){a[b]=c},e(b,g)}function n(a){var b=C.getElementById(a.adContainerId);return null!==b&&f(b)&&b}function o(b){var c=b.config,d=a.Environment.getIEVersion;if(!n(c)){if(!a.ResourceManager.isSync(b.config.legacyDACLoadType,d))throw B+"#createAdContainer Ad Container cannot be created";C.write('<div id="'+c.adContainerId+'" style="padding:0;margin:0;border:0;"></div>'),c.adContainer=C.getElementById(c.adContainerId),b.logger.log(B,"createAdContainer","Created <div> element with ID "+c.adContainerId)}}function p(a){var b=C.getElementById(a.adContainerId);if(null===b||!f(b))throw new Error(B+"#resolveContainer Ad Container not found");a.adContainer=b,a.skipContainerClean||(a.adContainer.innerHTML="")}function q(a){var b=a.queueId?' adtechQueueId="'+a.queueId+'"':"";return'<script type="text/javascript" src="'+a.config.adcallUrl+'"'+b+"></script>"}function r(a,b){return function(){try{a.apply(null,arguments)}catch(c){if(b.log("Exception raised: "+c.message),b.isEnabled())throw c}}}function s(a){return Math.round(Math.random()*a)}function t(a,b,c,d){return void 0===a||void 0===b?!1:(c&&(c=v([a,b],c)),w(a,b,c,d)&&w(b,a,c,d))}function u(a,b){var c=[],f={};return d(a,function(a){e(a,function(a){!f[a]&&b.test(a)&&(c.push(a),f[a]=!0)})}),c}function v(a,b){var c=[];return d(b,function(b){if(b instanceof RegExp){var d=u(a,b);d.length>0&&Array.prototype.push.apply(c,d)}else c.push(b)}),c}function w(a,b,c,d){function e(e){var f=!(a.hasOwnProperty(e)||b.hasOwnProperty(e));return f?!0:d&&x(c,e)?!0:a.hasOwnProperty(e)&&b.hasOwnProperty(e)&&("object"==typeof a[e]?objectEquals(a[e],b[e]):a[e]===b[e])}var f;if(c&&c.constructor===Array&&!d){for(f=0;f<c.length;f++)if(!e(c[f]))return!1;return!0}for(f in a)if(a.hasOwnProperty(f)&&!e(f))return!1;return!0}function x(a,b){var c=!1;return d(a,function(a){a===b&&(c=!0)}),c}function y(a){var b=[];return d(a,function(a,c){b[c]=a}),b}function z(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function A(){var a=C.documentElement.clientWidth,b="CSS1Compat"===C.compatMode&&a||C.body&&C.body.clientWidth||a;return C.body||0!==b||(b=C.documentElement.scrollWidth),b}var B="Utils",C=c.document;return a[B]={each:d,eachKey:e,isString:g,isObject:f,isFunc:h,isBoolean:k,isNumber:i,isArray:j,copyObject:m,resolveContainer:p,generateScriptHTML:q,stringToObject:l,createClosure:r,createAdContainer:o,rnd:s,objectsEquals:t,buildObjectsProperties:v,cloneArray:y,addEventListener:z,getViewportWidth:A},a[B]}function c(a,b,c){function d(){p&&(clearTimeout(q),q=setTimeout(e,p))}function e(){o=s.getViewportWidth(),s.eachKey(t,function(b,c){i(c)&&a.BannerInjector.doAsync(c)}),f()}function f(){s.eachKey(u,function(a,b){g(b)})}function g(b){if(clearTimeout(b.reloadTimeout),b.running)b.reloadTimeout=setTimeout(function(){g(b)},p);else{var c=[],d=b.getResponsiveRequests();s.each(d,function(a){i(a)&&c.push(a.id)}),c.length>0&&a.AdQueue.reloadQueue(b,c)}}function h(a){a.hasResponsiveConfig()&&(p=a.config.responsiveCheckTimeout,t[a.id]=a,i(a),d())}function i(a){var b,c,d,e=a.config.responsive.bounds;for(b=0;b<e.length;b++)if(c=e[b],j(c)){b!==a.currentBoundIndex&&(d=!0,a.currentBoundIndex=b,a.responsiveId=c.id,delete a.config.adcallUrl);break}return d||delete a.responsiveId,d}function j(a){return o>=a.min&&o<=a.max}function k(a){var b=!1,c=[];s.each(a.storage,function(a,d){a.hasResponsiveConfig()&&(p=a.config.responsiveCheckTimeout,b=!0,c.push(d),i(a))}),b&&(a.responsiveIndexes=c,u[a.id]=a)}function l(){return t}function m(){return u}function n(a){var b={params:{}};return s.copyObject(b,a.config,["params","placement","alias"],!0),s.copyObject(b.params,a.config.params,["alias"],!0),s.isNumber(a.responsiveId)?b.placement=a.responsiveId:s.isString(a.responsiveId)&&(b.params.alias=a.responsiveId),b}var o,p,q,r="ResponsiveAdManager",s=a.Utils,t={},u={};o=a.Utils.getViewportWidth(),a.Utils.addEventListener(c,"resize",d),a[r]={register:h,registerQueue:k,currentViewportWidth:o,checkTimeout:q,getResponsiveAdsRegistry:l,getResponsiveQueuesRegistry:m,makeResponsiveConfigClone:n}}function d(a,b,c){function d(c,d){if(a.Utils.resolveContainer(c.config),c.shown=!0,c.config.fif.usefif)e("injectBannerAsyncMode","Fif",c),a.FifRenderer.setupFif(c);else{e("injectBannerAsyncMode","postscribe",c);var f=a.ResourceLoader.buildUrl(c.config,"postscribe.js"),g=d.bannerCode||x.generateScriptHTML(c);a.ResourceLoader.loadScript(f,"postscribe",!0,function(a){if(!a)throw new Error("BannerInjector# injectBannerAsyncMode.  Postscribe lib failed to load");c.logger.log(j,"injectBannerAsyncMode","Postscribe loaded. Performing ad injection for request id "+(c.id||"<?>")),b.postscribe(c.config.adContainer,g,c.config.complete)},c.logger)}}function e(a,b,c){var d=c.config;c.logger.log(j,a,"Inject banner in async mode using "+b+" for request id "+c.id+(d.adcallUrl?" using URL "+d.adcallUrl:""))}function f(b){var c=a.Detections;c.detectScreenSize(b),c.detectUTCOffset(b),c.detectFlashVersion(b),c.detectRichMediaSupport(b)}function g(a){i(a),d(a,{})}function h(b){b.shown=!0,i(b),b.logger.log(j,"doSync","Performing sync ad call using document.write"+(b.config.placement?" for placement "+b.config.placement:"")+" using URL "+b.config.adcallUrl),c.document.write(a.Utils.generateScriptHTML(b))}function i(b){var c=b.config;b.responsiveId&&(c=a.ResponsiveAdManager.makeResponsiveConfigClone(b)),w.AdcallBuilder.buildUrl(c),b.config.adcallUrl=c.adcallUrl}var j="BannerInjector";a[j]={injectBannerAsyncMode:d,performSyncDetections:f,doAsync:g,doSync:h}}function e(a,b,c){function d(a,c,d,g){b.resourceRegistry=b.resourceRegistry||{};var h=b.resourceRegistry;h[a]&&h[a].loaded&&(!d||d&&p)?c(h[a].status):(h[a]||(h[a]={queue:[],needPageDOM:d},g(e(a),f(a))),h[a].queue.push(c))}function e(a){return function(){g(a,!0)}}function f(a){return function(){g(a,!1)}}function g(a,c){var d=b.resourceRegistry;d[a].loaded=!0,d[a].status=c,h(d[a])}function h(a){if((!a.needPageDOM||p)&&a.loaded){for(var b=a.queue,c=0;c<b.length;c++)b[c](a.status);a.queue=[]}}function i(){if(!n){p=!0,n=!0;var a=b.resourceRegistry;for(var c in a)h(a[c])}}function j(){if("complete"===q.readyState)return setTimeout(i,1);if(q.addEventListener)q.addEventListener("DOMContentLoaded",i,!1),c.addEventListener("load",i,!1);else if(q.attachEvent){q.attachEvent("onreadystatechange",i),c.attachEvent("onload",i);var a=!1;try{a=null===c.frameElement}catch(b){}q.documentElement.doScroll&&a&&k()}}function k(){if(!n){try{q.documentElement.doScroll("left")}catch(a){return void setTimeout(k,1)}i()}}function l(a,b){var d="loading"===q.readyState;if(!d&&"interactive"===q.readyState&&c==c.top&&b)try{q.documentElement.doScroll&&q.documentElement.doScroll("left")}catch(e){d=!0}else!d&&"interactive"===q.readyState&&c!=c.top&&b&&(q.addEventListener?p||(d=!0):a&&(d=!0));return d}function m(){return p}var n,o="ResourceManager",p=!1,q=c.document;j(),a[o]={schedule:d,isSync:l,isDOMReady:m}}function f(a,b,c){function d(b,c,d,e,h){a.ResourceManager.schedule(c,a.Utils.createClosure(e,h),d,function(c,d){g(),f(b,i,{onSuccess:a.Utils.createClosure(c,h),onError:a.Utils.createClosure(d,h)},!1)})}function e(b,c,d){g(),f(b,i,{onSuccess:a.Utils.createClosure(function(){c(!0)},d),onError:a.Utils.createClosure(function(){c(!1)},d)},!0)}function f(b,d,e,f){var g=c.document.createElement("script"),h=a.Environment.getIEVersion();g.setAttribute("type","text/javascript"),g.setAttribute("src",b),h&&(9>h||c.document.documentMode&&c.document.documentMode<9)?g.onreadystatechange=function(){/loaded|complete/.test(g.readyState)&&(g.onreadystatechange=null,e.onSuccess&&e.onSuccess())}:h>=10&&!f?(g.onerror=function(){setTimeout(e.onError,0)},g.onload=function(){setTimeout(e.onSuccess,0)}):(g.onerror=e.onError,g.onload=e.onSuccess),d.appendChild(g)}function g(){if(!i){var a=c.document.head;if(!a){var b=c.document.getElementsByTagName("head");a=b&&b.length>0?b[0]:c.document.body||c.document.getElementsByTagName("body")[0]}i=a}}function h(a,b){return"https"===a.protocol?k+b:j+b}var i,j="http://aka-cdn-ns.adtechus.com/dt/common/",k="https://aka-cdn.adtechus.com/dt/common/",l="ResourceLoader";a[l]={loadScript:d,loadTransientScript:e,buildUrl:h}}function g(a){function b(b){if(!a.Utils.isString(b.adcallUrl)){var f=b.protocol+"://"+b.server+"/"+d+e+b.network+e+(b.placement?b.placement:0)+e+b.pageid.toString()+e+b.sizeid.toString()+e+b.normaltarget;f=c(f,b,";"),b.adcallUrl=f}}function c(b,c,d,e,g,h){var i=!0,j="";return h=h||{},a.Utils.isObject(c.params)&&(i=void 0===c.params.misc,a.Utils.eachKey(c.params,function(a,c){g&&g[a]||(h[a]&&(c=h[a],delete h[a]),f[a]?j+=d+a+"="+c:b+=d+a+"="+c)}),a.Utils.eachKey(h,function(a,c){b+=d+a+"="+c})),i&&!e&&(b+=d+"misc="+(new Date).getTime()),b+=j}var d="addyn/3.0",e="/",f={rdclick:!0,rdview:!0,link:!0},g="AdcallBuilder";a[g]={buildUrl:b,addUrlParams:c}}function h(a,b,c){function d(a,c){function d(){G||(w.log(h,"adcallComplete","#"+a.id),c.queueId&&!c.partOfMultiAd&&b.queueCallback(c.queueId),G=!0)}function g(a){f()?a.onload=d:a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&(a.onreadystatechange=null,d())}}function i(){w.log(h,"done","#"+a.id),d(),x.complete&&x.complete()}function m(b,c){w.log(h,"resize","#"+a.id+" resizing to "+b+"x"+c),a.width=b,a.height=c}function n(){if(F){o(),x.fif.preResize(c.id);var a=p();m(a.width,a.height)}else m(D,E);i()}function o(){var a;if(!c.config.fif.contentStyle){if(j.isOldIEMode()){var b=I.nextSibling;b&&"a"===b.nodeName.toLowerCase()&&(a=b)}else 2===I.children.length&&"a"===I.children[1].nodeName.toLowerCase()&&(a=I.children[1]);a&&1===a.children.length&&"img"===a.children[0].nodeName.toLowerCase()&&(a.children[0].style.display="block")}}function p(){var a=I.scrollWidth,b=I.scrollHeight;return 0!==a&&0!==b||1!==I.children.length||!j.isOldIEMode()||"script"===I.children[0].nodeName.toLowerCase()&&(a=r("Width"),b=r("Height")),window.opera&&(2>a||2>b)&&(a=q("Width"),b=q("Height")),{width:a,height:b}}function q(a){var b=Math.max(C.documentElement["client"+a],C.body["scroll"+a],C.documentElement["scroll"+a],C.body["offset"+a],C.documentElement["offset"+a]);return b}function r(a){var b=Math.max(C.body["scroll"+a],C.body["offset"+a]);return b}function s(){var a=0,b=setInterval(function(){if(50>a&&"complete"!=C.readyState){var c=p();c.width>1&&c.height>1&&(clearInterval(b),m(c.width,c.height)),a++}else clearInterval(b)},100)}function t(){F&&(j.isChrome()||j.isSafari())?(H=0,u()):v()}function u(){var b=p();(b.width<=1||b.height<=1)&&k>H?(H+=l,w.log("#"+a.id+" recheck content size"),setTimeout(u,l)):v()}function v(){w.log("#"+a.id+" loaded"),n()}var w=c.logger,x=c.config,y="<script>var inFIF=inDapIF=true;</script>";x.fif.disableFriendlyFlag&&(y="");var z='<script id="adscript" src="'+x.adcallUrl+'"></script>';c.adLoadScript&&(z=c.adLoadScript);var A="<style>body {margin:0;padding:0;overflow:hidden;} html {margin:0;padding:0;} ";A+=c.config.fif.contentStyle,A+="</style>";var B="<!DOCTYPE html><html><head>"+A+"</head><body>"+y+'<div id="afd">'+z+"</div></body></html>",C=a.contentDocument||a.contentWindow.document,D=x.fif.width,E=x.fif.height,F=1>=D||1>=E,G=!1,H=0;C.open("text/html","replace"),C.write(B),g(C.getElementById("adscript")),e()?setTimeout(function(){C.close()},500):C.close();var I=C.getElementById("afd");"complete"==C.readyState?F?t():(m(D,E),i()):(C.addEventListener?a.contentWindow.addEventListener("load",t,!1):C.body.onload=t,F&&!x.fif.disableLoadingResize&&s())}function e(){return!!c.opera||j.isOldIEMode()}function f(){var a=j.getIEVersion();return a&&(9>a||c.document.documentMode&&c.document.documentMode<9)?!1:!0}function g(a){var b=c.document.createElement("iframe"),e=a.config,f=e.placement+"_frame";f=e.alias?e.alias+"_frame":e.placement?e.placement+"_frame":e.adContainerId?e.adContainerId+"_frame":"rnd_frame"+i.rnd(1e6),b.seamless="seamless",b.id=f,b.name=f,b.style.border="0px",b.scrolling="no",b.frameBorder=0,b.width=1,b.height=1,b.allowtransparency=!0,b.setAttribute("allowFullScreen","true"),b.setAttribute("mozallowFullScreen","true"),b.setAttribute("webkitAllowFullScreen","true"),b.src="about:blank",e.adContainer.appendChild(b),a.logger.log(h,"setupFif","#"+f+" created"),d(b,a)}var h="FifRenderer",i=a.Utils,j=a.Environment,k=500,l=50;a[h]={setupFif:g}}function i(a,b,c){function d(a,b,c,d){c[a]=!!d[a+b]}function e(a,b,c,d){d[a+b]&&(c[a]=d[a+b])}function f(a,b){var f;if(c.Adtech!==m){var g=c.Adtech;f={network:g["networkSubnetwork"+a],protocol:g["protocol"+a],server:g["adURLHostName"+a],alias:g["placementAlias"+a],kv:g["KV"+a],fif:g["fif"+a],params:{}},d("performScreenDetection",a,f,g),d("performTimezoneDetection",a,f,g),d("performFlashDetection",a,f,g),d("performRichMediaDetection",a,f,g),d("performGeoDetection",a,f,g),d("syncIfPossible",a,f,g),d("legacyDACLoadType",a,f,g),e("loc",a,f.params,g),e("grp",a,f.params,g),b.logObject(n,"AdtechConfig",f)}return f}function g(a,b,c,d,e){if(o(a)){var f=c&&a[c]?c:b;d.log(n,"getPlacementConfig","Placement look up for level "+e+" done using "+(f===c?"alias: "+c:"placement id: "+b));var g=a[f];return g&&d.logObject(n,"getPlacementConfig",g),g}return m}function h(a){return o(a)?a.important:m}function i(b,c,d,e){var f=e||{};a.Utils.eachKey(c,function(a,e){"important"===a||f[a]||(d||"params"!==a||e.alias===m||c.alias!==m||(b.alias=e.alias),o(b[a])&&o(e)&&!d?i(b[a],e,!0):b[a]===m&&o(e)&&!d?(b[a]={},i(b[a],e,!0)):null===e?delete b[a]:e!==m&&(b[a]=e))})}function j(b){var c=b.logger,d=b.config,e=d.placement,f=d.alias;if(!a.Utils.isNumber(e)&&!a.Utils.isString(f))throw n+": Invalid ad identifier";c.log(n,"buildConfiguration","Resolving configuration for alias: "+f+" and placement: "+e);var g,h={},j=k(d,c),l="";for(g=0;g<j.length;g++)j[g]&&o(j[g].config)&&(l+=" "+g,i(h,j[g].config,!1,j[g].ignore));return c.log(n,"buildConfiguration","Found configuration at priorities"+l),h}function k(a,c){var d=[],e=b.config,i=a.placement,j=a.alias,k={enableMultiAd:!0,responsiveCheckTimeout:!0};return d[10]={config:e.network},d[20]={config:e.website},d[30]={config:e.page},d[40]={config:g(e.placements,i,j,c,40),ignore:k},d[50]={config:e.networkdyn},d[60]={config:e.websitedyn},d[70]={config:e.pagedyn},d[80]={config:f(a.placement,c)},d[90]={config:g(e.placementsdyn,i,j,c,90),ignore:k},d[110]={config:h(e.network)},d[120]={config:h(e.website)},d[130]={config:h(e.page)},d[140]={config:h(g(e.placements,i,j,c,140)),ignore:k},d[150]={config:h(e.networkdyn)},d[160]={config:h(e.websitedyn)},d[170]={config:h(e.pagedyn)},d[180]={config:h(g(e.placementsdyn,i,j,c,180)),ignore:k},d[200]={config:a,ignore:k},d}function l(a){return!!b.config.placements&&!!b.config.placements[a]||!!b.config.placementsdyn&&!!b.config.placementsdyn[a]}var m,n="ConfigResolver",o=a.Utils.isObject;a[n]={buildConfiguration:j,isPlacementConfigDefined:l}}function j(a){function b(a,b){return m(a)&&""!==a?a:b}function c(a,b){return n(a)?a:b}function d(a){return a?"https":"http"}function e(a,e){var i,q={};if(!n(a.placement)&&!m(a.alias))throw"config.placement must be a Number or the config.alias has to be a string";return l.each(["network","server"],function(b){if(!m(a[b]))throw j+"#process config."+b+" must be a String"}),i=a.placement?a.placement:a.alias,q.placement=a.placement,q.alias=a.alias,q.network=a.network,q.server=a.server,q.protocol=b(a.protocol,d(a.secure===!0)),q.pageid=c(a.pageid,0),q.sizeid=c(a.sizeid,-1),q.normaltarget=b(a.normaltarget,"ADTECH"),q.adContainerId=b(a.adContainerId,i.toString()),h(q,a,"enableMultiAd",!1),g(q,a,"responsiveCheckTimeout",k),o(a.fif)?(q.fif={usefif:a.fif.usefif!==!1,width:c(a.fif.width,0),height:c(a.fif.height,0)},f(q.fif,a.fif,"disableFriendlyFlag"),f(q.fif,a.fif,"disableLoadingResize"),g(q.fif,a.fif,"shareWithAddOns",!0),q.fif.contentStyle=l.isString(a.fif.contentStyle)?a.fif.contentStyle:"",q.fif.preResize=l.isFunc(a.fif.preResize)?a.fif.preResize:p):q.fif={usefif:!1,width:0,height:0,disableFriendlyFlag:!1,disableLoadingResize:!1},l.isFunc(a.complete)&&(q.complete=a.complete),q.params={},o(a.params)&&l.eachKey(a.params,function(b){m(a.params[b])&&a.params[b].length>0&&(q.params[b]=a.params[b])}),q.alias&&(q.params.alias=q.alias),o(a.kv)&&l.eachKey(a.kv,function(a,b){var c=[];l.isArray(b)?(l.each(b,function(a){(m(a)||n(a))&&c.push(a.toString())}),q.params["kv"+a]=c.join(":")):m(b)&&b.length>0?q.params["kv"+a]=b.toString():n(b)&&(q.params["kv"+a]=b.toString())}),l.isObject(a.responsive)?(q.responsive={useresponsive:a.responsive.useresponsive!==!1,bounds:[]},l.isArray(a.responsive.bounds)&&l.each(a.responsive.bounds,function(a){a.id&&n(a.min)&&n(a.max)&&a.min<a.max&&q.responsive.bounds.push(a)}),0===q.responsive.bounds.length&&(q.responsive.useresponsive=!1)):q.responsive={useresponsive:!1,bounds:[]},f(q,a,"syncIfPossible"),f(q,a,"legacyDACLoadType"),f(q,a,"performGeoDetection"),f(q,a,"performScreenDetection"),f(q,a,"performTimezoneDetection"),f(q,a,"performFlashDetection"),f(q,a,"performRichMediaDetection"),e.logObject(j,"finalConfig",q),q}function f(a,b,c){a[c]=b[c]===!0}function g(a,b,c,d){a[c]=void 0!==b[c]?b[c]:d}function h(a,b,c,d){a[c]=l.isBoolean(b[c])?b[c]:d}function i(a){return a=a||{},a.multiAd=a.multiAd||{},a.multiAd.skipDefault=a.multiAd.skipDefault||!1,a.multiAd.disableAdInjection=a.multiAd.disableAdInjection||!1,g(a.multiAd,a.multiAd,"autoInjectShownResponsive",!0),a}var j="ConfigFinalizer",k=150,l=a.Utils,m=l.isString,n=l.isNumber,o=l.isObject,p=function(){};a[j]={process:e,processQueueConfig:i,defaultFunc:p}}function k(a){function b(a,b,f){var g;return b===m&&f===m?g=c(a):o.isString(a)&&o.isString(b)?g=d(a,b,f):e(),g}function c(a){var b={legacyApi:!1};if(o.isNumber(a))b.config=f(a);else if(o.isString(a))b.config=g(a);else if(o.isObject(a)){if(b.config=a,l(b.config),!b.config.placement&&!b.config.alias)throw n+"#handleNewApi no placement id or alias found"}else e();return b}function d(a,b,c){var d={legacyApi:!0};return o.isObject(c)?d.config=h(a,b,c):c===m?d.config=h(a,b,{}):e(),d}function e(){throw n+"#handleParameters Invalid parameters combination"}function f(a){return{placement:a}}function g(a){if(!a)throw n+"#handleAliasString empty alias not allowed";return{alias:a}}function h(a,b,c){var d={};return i(a,b,d),c.fif?(d.fif={},d.fif.usefif=!0,d.fif.width=k(c.width,0),d.fif.height=k(c.height,0),d.fif.preResize=o.isFunc(c.preResize)?c.preResize:function(){}):d.fif={usefif:!1,width:0,height:0},d.complete=j(c.complete),d.debugMode=!!c.debugMode,d}function i(a,b,c){c.adContainerId=a,c.adcallUrl=b}function j(a){return o.isFunc(a)?a:m}function k(a,b){return o.isNumber(a)?a:b}function l(a){!a.adContainerId&&a.injectElementId&&(a.adContainerId=a.injectElementId),!a.alias&&a.params&&a.params.alias&&(a.alias=a.params.alias)}var m,n="LoadAdParametersHandler",o=a.Utils;a[n]={handleParameters:b}}function l(a,b,c){function d(a){a.performScreenDetection&&c.screen&&c.screen.width&&c.screen.height&&(a.params.screenheight=c.screen.height.toString(),a.params.screenwidth=c.screen.width.toString(),c.devicePixelRatio&&(a.params.screendensity=c.devicePixelRatio.toString()))}function e(a){if(a.performTimezoneDetection){var b=-(new Date).getTimezoneOffset();b>0&&(b="+"+b),a.params.aduho=encodeURIComponent(b)}}function f(){return!(c.navigator.mimeTypes!==o&&c.navigator.mimeTypes[q]!==o&&!navigator.mimeTypes[q].enabledPlugin)}function g(a){if(a.performFlashDetection){var b,d,e;if(c.navigator.plugins!==o&&c.navigator.plugins["Shockwave Flash"]!==o){var g=c.navigator.plugins["Shockwave Flash"].description;g&&f()&&(g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),b=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),d=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),e=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0)}else if(c.ActiveXObject!==o)try{var h=new c.ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(h){var i=h.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),b=parseInt(i[0],10),d=parseInt(i[1],10),e=parseInt(i[2],10))}}catch(j){}b!==o&&(a.params.flashver=b+"."+d+"."+e)}}function h(a){if(c.mraid!==o){var b=c.mraid.getVersion();/1\.\d/.test(b)?a="3":/2\.\d/.test(b)&&(a="5")}return a}function i(a){var b=""!==a?":":"";return c.ormma!==o?a+b+"4":a}function j(a){if(a.performRichMediaDetection){var b="";b=h(b),b=i(b),""!==b&&(a.params.apifw=b)}}function k(d){return function(e,f){function g(a){b.geoCoords=a.coords,e()}function h(a){d.logger.log(p,"myErr","GeoLocation failed: "+a.toString()),f()}c.navigator.geolocation.getCurrentPosition(a.Utils.createClosure(g,d.logger),a.Utils.createClosure(h,d.logger),{timeout:1e3})}}function l(c,d){var e=c.config;return a.Utils.createClosure(function(c){c&&b.geoCoords&&a.Utils.isNumber(b.geoCoords.latitude)&&a.Utils.isNumber(b.geoCoords.longitude)&&(e.params.lat=b.geoCoords.latitude.toString(),e.params.long=b.geoCoords.longitude.toString()),d()},c.logger)}function m(a){return!!(a.performGeoDetection&&c.navigator&&c.navigator.geolocation&&c.navigator.geolocation.getCurrentPosition)}function n(b,c){a.ResourceManager.schedule("geo",l(b,c),!1,k(b))}var o,p="Detections",q="application/x-shockwave-flash";return a[p]={detectScreenSize:d,detectUTCOffset:e,detectFlashVersion:g,detectRichMediaSupport:j,detectGeoLocation:n,isGeo:m},a[p]}function m(a,b,c){function d(d,e){var f;return f=new v(a,b,c,d),f.allowGrouping=e,b.adqueues=b.adqueues||{},b.adqueues[d]=f,b.adQueuesIdList=b.adQueuesIdList||[],b.currentAdQueue=f,b.adQueuesIdList.push(d),f}function e(a){var c=b.currentAdQueue||d(q.rnd(1e5).toString(),a.config.enableMultiAd);c.addRequest(a),a.queueId=c.id}function f(a){var d=b.currentAdQueue,e=d.id;if(!q.isObject(d))throw new Error(p+"#execute No AdQueue to execute was found");if(b.currentAdQueue=void 0,d.allowGrouping){var f=s.buildUrl({config:{protocol:c.location.protocol}},r+".js");s.loadScript(f,r,!1,function(b){if(!b)throw new Error(p+"#execute MultiAd plugin failed to load");d=h(d),g(d,a)},null)}else g(d,a);return e}function g(b,c){b.executeConfig=c,a.ResponsiveAdManager.registerQueue(b),b.allowGrouping?(l(b,c.multiAd),a.MultiAdManager.load(b,[])):b.start()}function h(d){var e=new a.pluginClasses.MultiAdGroupQueue(a,b,c,d.id);return b.adqueues[d.id]=e,a.Utils.each(d.storage,function(a){e.addRequest(a)}),e}function i(b,c){k(b,function(){try{a.BannerInjector.doAsync(b)}catch(d){b.logger.log(p,"processAdRequest","Exception caught: "+d),c.advance()}})}function j(b,c,d){b.logger.log(p,"processMultiAdRequest","Start processing group from queue:"+c+" with index "+d),k(b,function(){a.MultiAdManager.loadGroup(b,c,d)})}function k(b,c){var d=b.config;a.BannerInjector.performSyncDetections(d),a.Detections.isGeo(d)?a.Detections.detectGeoLocation(b,function(){c()}):c()}function l(a,b){for(var c=b?b.skipDefault:!1,d=0;d<a.storage.length;d++){var e=a.storage[d];a.requests[e.id].multiAdSkipDefault=c}}function m(a,c){return c?b.adqueues[c].requests[a]:void 0}function n(a){if(0!==b.adQueuesIdList.length)for(var c=b.adQueuesIdList.length-1;c>=0;c--){var d=b.adQueuesIdList[c],e=b.adqueues[d],f=e.requests[a];if(f)return d}}function o(b,c){b.allowGrouping?(0===b.virtualSubGroupCounter&&(b.virtualSubGroupCounter=b.groupList.length),a.MultiAdManager.load(b,c)):(b.createVirtualSubQueue(c),b.start())}var p="AdQueue",q=a.Utils,r="DACMultiAdPlugin",s=a.ResourceLoader;a[p]={enqueue:e,execute:f,processAdRequest:i,processMultiAdRequest:j,getRequest:m,getRequestQueue:n,reloadQueue:o,promoteQueueToMultiAdQueue:h}}function n(a){w.BannerInjector.doAsync(a)}function o(a){p(a);var b=a.config;w.ResponsiveAdManager.register(a),w.BannerInjector.performSyncDetections(b),y.isGeo(b)?(x.createAdContainer(a),y.detectGeoLocation(a,function(){w.BannerInjector.doAsync(a)})):b.syncIfPossible&&w.ResourceManager.isSync(a.config.legacyDACLoadType,w.Environment.getIEVersion())?w.BannerInjector.doSync(a):(x.createAdContainer(a),w.BannerInjector.doAsync(a))}function p(a){var b=w.ConfigResolver.buildConfiguration(a);a.config=w.ConfigFinalizer.process(b,a.logger),a.config.params.grp=a.config.params.grp||r.adgroupid}function q(a,b,c){var d,e=s.adqueues[b];if(e){var f=e.requests[a];d=f?f.context.logger:void 0}if(s.debugMode||d&&d.isEnabled())throw c}var r=window,s=r.ADTECH;if(!s.loadAd){var t=function(a,b,c){this.enabled=!!b.debugMode,this.output=c.console,this.modules=a,this.global=b,this.win=c};t.prototype.debug=function(a){this.enabled&&this.output&&this.output.log(a)},t.prototype.setEnabled=function(a){this.enabled=!!a||this.global.debugMode},t.prototype.isEnabled=function(){return this.enabled},t.prototype.logObject=function(a,b,c){var d=a+":"+b+" ";this.modules.Utils.isObject(r.JSON)?d+=r.JSON.stringify(c):(d+="{ ",this.modules.Utils.eachKey(c,function(a,b){d+=a+":"+b+" "}),d+="}"),this.debug(d)},t.prototype.log=function(a,b,c){this.debug(void 0===b&&void 0===c?a:a+"#"+b+" "+c)};var u=function(a,b,c){this.modules=a,this.global=b,this.win=c,this.logger=new t(a,b,c)};u.prototype.setConfig=function(a){this.config=a,this.id=a.alias?a.alias:a.placement},u.prototype.hasResponsiveConfig=function(){return this.config.responsive.useresponsive};var v=function(a,b,c,d){this.storage=[],this.requests={},this.allowGrouping=!1,this.doAutoAdInjection=!0,this.namespace=a,this.global=b,this.win=c,this.curPointer=-1,this.id=d,this.responsiveIndexes=[],this.virtualSubQueueIndexes=[],this.running=!1};v.prototype.advance=function(){var a=this.getNextRequest();this.namespace.Utils.isObject(a)?this.namespace.AdQueue.processAdRequest(a,this):this.close()},v.prototype.start=function(){this.curPointer=-1,this.running=!0,this.advance()},v.prototype.close=function(){this.running=!1,this.virtualSubQueueIndexes=[]},v.prototype.inVirtualMode=function(){return this.virtualSubQueueIndexes.length>0},v.prototype.getNextRequest=function(){var a;if(this.curPointer+=1,this.inVirtualMode()){var b=this.virtualSubQueueIndexes[this.curPointer];a=this.storage[b]}else a=this.storage[this.curPointer];return a},v.prototype.addRequest=function(a){this.storage.push(a)},v.prototype.getResponsiveRequests=function(){var a=[],b=this;return this.namespace.Utils.each(this.responsiveIndexes,function(c){a.push(b.storage[c])}),a},v.prototype.createVirtualSubQueue=function(a){var b=this;this.virtualSubQueueIndexes=[],this.namespace.Utils.each(a,function(a){b.namespace.Utils.each(b.storage,function(c,d){c.id===a&&b.virtualSubQueueIndexes.push(d)})})};var w={pluginClasses:{}};a(w,s,r),e(w,s,r);var x=b(w,s,r);i(w,s,r),j(w),c(w,s,r);var y=l(w,s,r);f(w,s,r),d(w,s,r),g(w),k(w,s),h(w,s,r),m(w,s,r);void 0===r.adgroupid&&(r.adgroupid=x.rnd(1e3)),s.dacRequestAd=function(a,b){r.Adtech=r.Adtech||{};var c=parseInt(a,10),d=r.Adtech;x.isString(b)?d["KV"+a]=x.stringToObject(b):x.isObject(b)&&(d["KV"+a]=b),d["fif"+a]=d["fif"+a]||{},d["syncIfPossible"+a]=d["syncIfPossible"+a]||!0,d["legacyDACLoadType"+a]=!0,s.loadAd({placement:c})},s.loadAd=function(a,b,c){var d=s.debugMode;try{var e=new u(w,s,r),f=w.LoadAdParametersHandler.handleParameters(a,b,c);e.logger.setEnabled(f.config.debugMode),d=d||f.config.debugMode,e.setConfig(f.config),f.legacyApi?n(e):o(e)}catch(g){if(d)throw g}},s.queueCallback=function(a){try{x.isObject(s.adqueues[a])&&s.adqueues[a].advance()}catch(b){if(s.debugMode)throw b}},s.registerPlugin=function(a){a({modules:w,coreClasses:{Queue:v,Logger:t,RequestContext:u}})},s.enqueueAd=function(a){var b=s.debugMode;try{var c=new u(w,s,r),d=w.LoadAdParametersHandler.handleParameters(a);c.logger.setEnabled(d.config.debugMode),b=b||d.config.debugMode,c.setConfig(d.config),p(c),w.AdQueue.enqueue(c)}catch(e){if(b)throw e}},s.executeQueue=function(a){try{return w.AdQueue.execute(w.ConfigFinalizer.processQueueConfig(a))}catch(b){if(s.debugMode)throw b}},s.showAd=function(a,b){try{w.MultiAdManager.showAd(a,b)}catch(c){q(a,b,c)}},s.writeAd=function(a,b,c,d){try{w.MultiAdManager.writeAd(a,b,c,d)}catch(e){q(a,d,e)}}}}(),function(){"use strict";var a=window,b=a.DAC;b.requestAd||(b.requestAd=function(b,c){a.ADTECH.dacRequestAd(b,c)})}()}catch(e){if(window.ADTECH.debugMode)throw e}
; browserify_shim__define__module__export__(typeof adtechdac != "undefined" ? adtechdac : window.adtechdac);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],55:[function(require,module,exports){
/**
 * FastDom
 *
 * Eliminates layout thrashing
 * by batching DOM read/write
 * interactions.
 *
 * @author Wilson Page <wilsonpage@me.com>
 */

;(function(fastdom){

  'use strict';

  // Normalize rAF
  var raf = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(cb) { return window.setTimeout(cb, 1000 / 60); };

  /**
   * Creates a fresh
   * FastDom instance.
   *
   * @constructor
   */
  function FastDom() {
    this.frames = [];
    this.lastId = 0;

    // Placing the rAF method
    // on the instance allows
    // us to replace it with
    // a stub for testing.
    this.raf = raf;

    this.batch = {
      hash: {},
      read: [],
      write: [],
      mode: null
    };
  }

  /**
   * Adds a job to the
   * read batch and schedules
   * a new frame if need be.
   *
   * @param  {Function} fn
   * @public
   */
  FastDom.prototype.read = function(fn, ctx) {
    var job = this.add('read', fn, ctx);
    var id = job.id;

    // Add this job to the read queue
    this.batch.read.push(job.id);

    // We should *not* schedule a new frame if:
    // 1. We're 'reading'
    // 2. A frame is already scheduled
    var doesntNeedFrame = this.batch.mode === 'reading'
      || this.batch.scheduled;

    // If a frame isn't needed, return
    if (doesntNeedFrame) return id;

    // Schedule a new
    // frame, then return
    this.scheduleBatch();
    return id;
  };

  /**
   * Adds a job to the
   * write batch and schedules
   * a new frame if need be.
   *
   * @param  {Function} fn
   * @public
   */
  FastDom.prototype.write = function(fn, ctx) {
    var job = this.add('write', fn, ctx);
    var mode = this.batch.mode;
    var id = job.id;

    // Push the job id into the queue
    this.batch.write.push(job.id);

    // We should *not* schedule a new frame if:
    // 1. We are 'writing'
    // 2. We are 'reading'
    // 3. A frame is already scheduled.
    var doesntNeedFrame = mode === 'writing'
      || mode === 'reading'
      || this.batch.scheduled;

    // If a frame isn't needed, return
    if (doesntNeedFrame) return id;

    // Schedule a new
    // frame, then return
    this.scheduleBatch();
    return id;
  };

  /**
   * Defers the given job
   * by the number of frames
   * specified.
   *
   * If no frames are given
   * then the job is run in
   * the next free frame.
   *
   * @param  {Number}   frame
   * @param  {Function} fn
   * @public
   */
  FastDom.prototype.defer = function(frame, fn, ctx) {

    // Accepts two arguments
    if (typeof frame === 'function') {
      ctx = fn;
      fn = frame;
      frame = 1;
    }

    var self = this;
    var index = frame - 1;

    return this.schedule(index, function() {
      self.run({
        fn: fn,
        ctx: ctx
      });
    });
  };

  /**
   * Clears a scheduled 'read',
   * 'write' or 'defer' job.
   *
   * @param  {Number|String} id
   * @public
   */
  FastDom.prototype.clear = function(id) {

    // Defer jobs are cleared differently
    if (typeof id === 'function') {
      return this.clearFrame(id);
    }

    // Allow ids to be passed as strings
    id = Number(id);

    var job = this.batch.hash[id];
    if (!job) return;

    var list = this.batch[job.type];
    var index = list.indexOf(id);

    // Clear references
    delete this.batch.hash[id];
    if (~index) list.splice(index, 1);
  };

  /**
   * Clears a scheduled frame.
   *
   * @param  {Function} frame
   * @private
   */
  FastDom.prototype.clearFrame = function(frame) {
    var index = this.frames.indexOf(frame);
    if (~index) this.frames.splice(index, 1);
  };

  /**
   * Schedules a new read/write
   * batch if one isn't pending.
   *
   * @private
   */
  FastDom.prototype.scheduleBatch = function() {
    var self = this;

    // Schedule batch for next frame
    this.schedule(0, function() {
      self.batch.scheduled = false;
      self.runBatch();
    });

    // Set flag to indicate
    // a frame has been scheduled
    this.batch.scheduled = true;
  };

  /**
   * Generates a unique
   * id for a job.
   *
   * @return {Number}
   * @private
   */
  FastDom.prototype.uniqueId = function() {
    return ++this.lastId;
  };

  /**
   * Calls each job in
   * the list passed.
   *
   * If a context has been
   * stored on the function
   * then it is used, else the
   * current `this` is used.
   *
   * @param  {Array} list
   * @private
   */
  FastDom.prototype.flush = function(list) {
    var id;

    while (id = list.shift()) {
      this.run(this.batch.hash[id]);
    }
  };

  /**
   * Runs any 'read' jobs followed
   * by any 'write' jobs.
   *
   * We run this inside a try catch
   * so that if any jobs error, we
   * are able to recover and continue
   * to flush the batch until it's empty.
   *
   * @private
   */
  FastDom.prototype.runBatch = function() {
    try {

      // Set the mode to 'reading',
      // then empty all read jobs
      this.batch.mode = 'reading';
      this.flush(this.batch.read);

      // Set the mode to 'writing'
      // then empty all write jobs
      this.batch.mode = 'writing';
      this.flush(this.batch.write);

      this.batch.mode = null;

    } catch (e) {
      this.runBatch();
      throw e;
    }
  };

  /**
   * Adds a new job to
   * the given batch.
   *
   * @param {Array}   list
   * @param {Function} fn
   * @param {Object}   ctx
   * @returns {Number} id
   * @private
   */
  FastDom.prototype.add = function(type, fn, ctx) {
    var id = this.uniqueId();
    return this.batch.hash[id] = {
      id: id,
      fn: fn,
      ctx: ctx,
      type: type
    };
  };

  /**
   * Runs a given job.
   *
   * Applications using FastDom
   * have the options of setting
   * `fastdom.onError`.
   *
   * This will catch any
   * errors that may throw
   * inside callbacks, which
   * is useful as often DOM
   * nodes have been removed
   * since a job was scheduled.
   *
   * Example:
   *
   *   fastdom.onError = function(e) {
   *     // Runs when jobs error
   *   };
   *
   * @param  {Object} job
   * @private
   */
  FastDom.prototype.run = function(job){
    var ctx = job.ctx || this;
    var fn = job.fn;

    // Clear reference to the job
    delete this.batch.hash[job.id];

    // If no `onError` handler
    // has been registered, just
    // run the job normally.
    if (!this.onError) {
      return fn.call(ctx);
    }

    // If an `onError` handler
    // has been registered, catch
    // errors that throw inside
    // callbacks, and run the
    // handler instead.
    try { fn.call(ctx); } catch (e) {
      this.onError(e);
    }
  };

  /**
   * Starts a rAF loop
   * to empty the frame queue.
   *
   * @private
   */
  FastDom.prototype.loop = function() {
    var self = this;
    var raf = this.raf;

    // Don't start more than one loop
    if (this.looping) return;

    raf(function frame() {
      var fn = self.frames.shift();

      // If no more frames,
      // stop looping
      if (!self.frames.length) {
        self.looping = false;

      // Otherwise, schedule the
      // next frame
      } else {
        raf(frame);
      }

      // Run the frame.  Note that
      // this may throw an error
      // in user code, but all
      // fastdom tasks are dealt
      // with already so the code
      // will continue to iterate
      if (fn) fn();
    });

    this.looping = true;
  };

  /**
   * Adds a function to
   * a specified index
   * of the frame queue.
   *
   * @param  {Number}   index
   * @param  {Function} fn
   * @return {Function}
   * @private
   */
  FastDom.prototype.schedule = function(index, fn) {

    // Make sure this slot
    // hasn't already been
    // taken. If it has, try
    // re-scheduling for the next slot
    if (this.frames[index]) {
      return this.schedule(index + 1, fn);
    }

    // Start the rAF
    // loop to empty
    // the frame queue
    this.loop();

    // Insert this function into
    // the frames queue and return
    return this.frames[index] = fn;
  };

  // We only ever want there to be
  // one instance of FastDom in an app
  fastdom = fastdom || new FastDom();

  /**
   * Expose 'fastdom'
   */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fastdom;
  } else if (typeof define === 'function' && define.amd) {
    define(function(){ return fastdom; });
  } else {
    window['fastdom'] = fastdom;
  }

})(window.fastdom);

},{}],56:[function(require,module,exports){
/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) { slider.currentSlide = 0; }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; }
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // CUSTOM DIRECTION NAV:
        if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) { methods.controlNav.setup(); }

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.setup(); }

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) { methods.pausePlay.setup(); }

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); }

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) { slider.pause(); }
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); }
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) { methods.asNav.setup(); }

        // TOUCH
        if (touch && slider.vars.touch) { methods.touch(); }

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange focus", methods.resize); }

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture) {
                        e.currentTarget._gesture.addPointer(e.pointerId);
                      }
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' !== captn && undefined !== captn ) { item += '<span class="' + namespace + 'caption">' + captn + '</span>'; }
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CUSTOM DIRECTION NAV:
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
          // CONTROLSCONTAINER:
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            onTouchStart = function(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            };

            onTouchMove = function(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            };

            onTouchEnd = function(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            };

            el.addEventListener('touchstart', onTouchStart, false);
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) { slider.doMath(); }

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) {
                  clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                } else { 
                  slider.pause(); //Or just pause
                }
              }
              else {
                if(slider.started) {
                  slider.play(); //Initiated before, just play
                } else { 
                  if (slider.vars.initDelay > 0) { 
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); //Didn't init before: simply init or wait for it
                  } 
                }
              }
            });
          }
        },
        isHidden: function() {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function() {
          var prefixes = ['webkit','moz','ms','o'];
          // if 'hidden' is natively supported just return it
          if ('hidden' in document) {
            return 'hidden';
          }
          // otherwise loop over all the known prefixes until we find one
          for ( var i = 0; i < prefixes.length; i++ ) {
              if ((prefixes[i] + 'Hidden') in document) {
                return prefixes[i] + 'Hidden';
              }
          }
          // otherwise it's not supported
          return null;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) { slider.pause(); }

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) { methods.sync("animate"); }

        // CONTROLNAV
        if (slider.vars.controlNav) { methods.controlNav.active(); }

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); }

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.update(); }

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) { slider.pause(); }
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            
            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); }
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) { slider.flexAnimate(slider.getTarget("next")); }
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("play"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("pause"); }
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) { clearInterval(slider.animatedSlides); }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("play"); }
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) { slider.container.css(slider.args); }

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") { slider.container.find('.clone').remove(); }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(); }
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); }

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) { methods.directionNav.update(); }

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    customDirectionNav: "",         //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {}             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) { options = {}; }

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) { options.start($this); }
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") { $slider.flexAnimate(options, true); }
      }
    }
  };
})(jQuery);

},{}],57:[function(require,module,exports){
/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2015 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  }
  else if (typeof exports === 'object') {
    // COMMONJS
    module.exports = factory();
  }
  else {
    // BROWSER
    root.Headroom = factory();
  }
}(this, function() {
  'use strict';

  /* exported features */
  
  var features = {
    bind : !!(function(){}.bind),
    classList : 'classList' in document.documentElement,
    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  
  /**
   * Handles debouncing of events via requestAnimationFrame
   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
   * @param {Function} callback The callback to handle whichever event
   */
  function Debouncer (callback) {
    this.callback = callback;
    this.ticking = false;
  }
  Debouncer.prototype = {
    constructor : Debouncer,
  
    /**
     * dispatches the event to the supplied callback
     * @private
     */
    update : function() {
      this.callback && this.callback();
      this.ticking = false;
    },
  
    /**
     * ensures events don't get stacked
     * @private
     */
    requestTick : function() {
      if(!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
        this.ticking = true;
      }
    },
  
    /**
     * Attach this as the event listeners
     */
    handleEvent : function() {
      this.requestTick();
    }
  };
  /**
   * Check if object is part of the DOM
   * @constructor
   * @param {Object} obj element to check
   */
  function isDOMElement(obj) {
    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);
  }
  
  /**
   * Helper function for extending objects
   */
  function extend (object /*, objectN ... */) {
    if(arguments.length <= 0) {
      throw new Error('Missing arguments in extend function');
    }
  
    var result = object || {},
        key,
        i;
  
    for (i = 1; i < arguments.length; i++) {
      var replacement = arguments[i] || {};
  
      for (key in replacement) {
        // Recurse into object except if the object is a DOM element
        if(typeof result[key] === 'object' && ! isDOMElement(result[key])) {
          result[key] = extend(result[key], replacement[key]);
        }
        else {
          result[key] = result[key] || replacement[key];
        }
      }
    }
  
    return result;
  }
  
  /**
   * Helper function for normalizing tolerance option to object format
   */
  function normalizeTolerance (t) {
    return t === Object(t) ? t : { down : t, up : t };
  }
  
  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom (elem, options) {
    options = extend(options, Headroom.options);
  
    this.lastKnownScrollY = 0;
    this.elem             = elem;
    this.debouncer        = new Debouncer(this.update.bind(this));
    this.tolerance        = normalizeTolerance(options.tolerance);
    this.classes          = options.classes;
    this.offset           = options.offset;
    this.scroller         = options.scroller;
    this.initialised      = false;
    this.onPin            = options.onPin;
    this.onUnpin          = options.onUnpin;
    this.onTop            = options.onTop;
    this.onNotTop         = options.onNotTop;
  }
  Headroom.prototype = {
    constructor : Headroom,
  
    /**
     * Initialises the widget
     */
    init : function() {
      if(!Headroom.cutsTheMustard) {
        return;
      }
  
      this.elem.classList.add(this.classes.initial);
  
      // defer event registration to handle browser 
      // potentially restoring previous scroll position
      setTimeout(this.attachEvent.bind(this), 100);
  
      return this;
    },
  
    /**
     * Unattaches events and removes any classes that were added
     */
    destroy : function() {
      var classes = this.classes;
  
      this.initialised = false;
      this.elem.classList.remove(classes.unpinned, classes.pinned, classes.top, classes.initial);
      this.scroller.removeEventListener('scroll', this.debouncer, false);
    },
  
    /**
     * Attaches the scroll event
     * @private
     */
    attachEvent : function() {
      if(!this.initialised){
        this.lastKnownScrollY = this.getScrollY();
        this.initialised = true;
        this.scroller.addEventListener('scroll', this.debouncer, false);
  
        this.debouncer.handleEvent();
      }
    },
    
    /**
     * Unpins the header if it's currently pinned
     */
    unpin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
        classList.add(classes.unpinned);
        classList.remove(classes.pinned);
        this.onUnpin && this.onUnpin.call(this);
      }
    },
  
    /**
     * Pins the header if it's currently unpinned
     */
    pin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(classList.contains(classes.unpinned)) {
        classList.remove(classes.unpinned);
        classList.add(classes.pinned);
        this.onPin && this.onPin.call(this);
      }
    },
  
    /**
     * Handles the top states
     */
    top : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(!classList.contains(classes.top)) {
        classList.add(classes.top);
        classList.remove(classes.notTop);
        this.onTop && this.onTop.call(this);
      }
    },
  
    /**
     * Handles the not top state
     */
    notTop : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(!classList.contains(classes.notTop)) {
        classList.add(classes.notTop);
        classList.remove(classes.top);
        this.onNotTop && this.onNotTop.call(this);
      }
    },
  
    /**
     * Gets the Y scroll position
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    getScrollY : function() {
      return (this.scroller.pageYOffset !== undefined)
        ? this.scroller.pageYOffset
        : (this.scroller.scrollTop !== undefined)
          ? this.scroller.scrollTop
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },
  
    /**
     * Gets the height of the viewport
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {int} the height of the viewport in pixels
     */
    getViewportHeight : function () {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    },
  
    /**
     * Gets the height of the document
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {int} the height of the document in pixels
     */
    getDocumentHeight : function () {
      var body = document.body,
        documentElement = document.documentElement;
    
      return Math.max(
        body.scrollHeight, documentElement.scrollHeight,
        body.offsetHeight, documentElement.offsetHeight,
        body.clientHeight, documentElement.clientHeight
      );
    },
  
    /**
     * Gets the height of the DOM element
     * @param  {Object}  elm the element to calculate the height of which
     * @return {int}     the height of the element in pixels
     */
    getElementHeight : function (elm) {
      return Math.max(
        elm.scrollHeight,
        elm.offsetHeight,
        elm.clientHeight
      );
    },
  
    /**
     * Gets the height of the scroller element
     * @return {int} the height of the scroller element in pixels
     */
    getScrollerHeight : function () {
      return (this.scroller === window || this.scroller === document.body)
        ? this.getDocumentHeight()
        : this.getElementHeight(this.scroller);
    },
  
    /**
     * determines if the scroll position is outside of document boundaries
     * @param  {int}  currentScrollY the current y scroll position
     * @return {bool} true if out of bounds, false otherwise
     */
    isOutOfBounds : function (currentScrollY) {
      var pastTop  = currentScrollY < 0,
        pastBottom = currentScrollY + this.getViewportHeight() > this.getScrollerHeight();
      
      return pastTop || pastBottom;
    },
  
    /**
     * determines if the tolerance has been exceeded
     * @param  {int} currentScrollY the current scroll y position
     * @return {bool} true if tolerance exceeded, false otherwise
     */
    toleranceExceeded : function (currentScrollY, direction) {
      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];
    },
  
    /**
     * determine if it is appropriate to unpin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should unpin, false otherwise
     */
    shouldUnpin : function (currentScrollY, toleranceExceeded) {
      var scrollingDown = currentScrollY > this.lastKnownScrollY,
        pastOffset = currentScrollY >= this.offset;
  
      return scrollingDown && pastOffset && toleranceExceeded;
    },
  
    /**
     * determine if it is appropriate to pin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should pin, false otherwise
     */
    shouldPin : function (currentScrollY, toleranceExceeded) {
      var scrollingUp  = currentScrollY < this.lastKnownScrollY,
        pastOffset = currentScrollY <= this.offset;
  
      return (scrollingUp && toleranceExceeded) || pastOffset;
    },
  
    /**
     * Handles updating the state of the widget
     */
    update : function() {
      var currentScrollY  = this.getScrollY(),
        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);
  
      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX
        return;
      }
  
      if (currentScrollY <= this.offset ) {
        this.top();
      } else {
        this.notTop();
      }
  
      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {
        this.unpin();
      }
      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {
        this.pin();
      }
  
      this.lastKnownScrollY = currentScrollY;
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance : {
      up : 0,
      down : 0
    },
    offset : 0,
    scroller: window,
    classes : {
      pinned : 'headroom--pinned',
      unpinned : 'headroom--unpinned',
      top : 'headroom--top',
      notTop : 'headroom--not-top',
      initial : 'headroom'
    }
  };
  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

  return Headroom;
}));
},{}],58:[function(require,module,exports){
/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (global) {
	"use strict";

	// Top level module for the global, static logger instance.
	var Logger = { };

	// For those that are at home that are keeping score.
	Logger.VERSION = "1.2.0";

	// Function which handles all incoming log messages.
	var logHandler;

	// Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
	var contextualLoggersByNameMap = {};

	// Polyfill for ES5's Function.bind.
	var bind = function(scope, func) {
		return function() {
			return func.apply(scope, arguments);
		};
	};

	// Super exciting object merger-matron 9000 adding another 100 bytes to your download.
	var merge = function () {
		var args = arguments, target = args[0], key, i;
		for (i = 1; i < args.length; i++) {
			for (key in args[i]) {
				if (!(key in target) && args[i].hasOwnProperty(key)) {
					target[key] = args[i][key];
				}
			}
		}
		return target;
	};

	// Helper to define a logging level object; helps with optimisation.
	var defineLogLevel = function(value, name) {
		return { value: value, name: name };
	};

	// Predefined logging levels.
	Logger.DEBUG = defineLogLevel(1, 'DEBUG');
	Logger.INFO = defineLogLevel(2, 'INFO');
	Logger.TIME = defineLogLevel(3, 'TIME');
	Logger.WARN = defineLogLevel(4, 'WARN');
	Logger.ERROR = defineLogLevel(8, 'ERROR');
	Logger.OFF = defineLogLevel(99, 'OFF');

	// Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
	// of each other.
	var ContextualLogger = function(defaultContext) {
		this.context = defaultContext;
		this.setLevel(defaultContext.filterLevel);
		this.log = this.info;  // Convenience alias.
	};

	ContextualLogger.prototype = {
		// Changes the current logging level for the logging instance.
		setLevel: function (newLevel) {
			// Ensure the supplied Level object looks valid.
			if (newLevel && "value" in newLevel) {
				this.context.filterLevel = newLevel;
			}
		},

		// Is the logger configured to output messages at the supplied level?
		enabledFor: function (lvl) {
			var filterLevel = this.context.filterLevel;
			return lvl.value >= filterLevel.value;
		},

		debug: function () {
			this.invoke(Logger.DEBUG, arguments);
		},

		info: function () {
			this.invoke(Logger.INFO, arguments);
		},

		warn: function () {
			this.invoke(Logger.WARN, arguments);
		},

		error: function () {
			this.invoke(Logger.ERROR, arguments);
		},

		time: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'start' ]);
			}
		},

		timeEnd: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'end' ]);
			}
		},

		// Invokes the logger callback if it's not being filtered.
		invoke: function (level, msgArgs) {
			if (logHandler && this.enabledFor(level)) {
				logHandler(msgArgs, merge({ level: level }, this.context));
			}
		}
	};

	// Protected instance which all calls to the to level `Logger` module will be routed through.
	var globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });

	// Configure the global Logger instance.
	(function() {
		// Shortcut for optimisers.
		var L = Logger;

		L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
		L.debug = bind(globalLogger, globalLogger.debug);
		L.time = bind(globalLogger, globalLogger.time);
		L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
		L.info = bind(globalLogger, globalLogger.info);
		L.warn = bind(globalLogger, globalLogger.warn);
		L.error = bind(globalLogger, globalLogger.error);

		// Don't forget the convenience alias!
		L.log = L.info;
	}());

	// Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
	// object with the supplied log messages and the second being a context object which contains a hash of stateful
	// parameters which the logging function can consume.
	Logger.setHandler = function (func) {
		logHandler = func;
	};

	// Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
	// (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
	Logger.setLevel = function(level) {
		// Set the globalLogger's level.
		globalLogger.setLevel(level);

		// Apply this level to all registered contextual loggers.
		for (var key in contextualLoggersByNameMap) {
			if (contextualLoggersByNameMap.hasOwnProperty(key)) {
				contextualLoggersByNameMap[key].setLevel(level);
			}
		}
	};

	// Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
	// default context and log handler.
	Logger.get = function (name) {
		// All logger instances are cached so they can be configured ahead of use.
		return contextualLoggersByNameMap[name] ||
			(contextualLoggersByNameMap[name] = new ContextualLogger(merge({ name: name }, globalLogger.context)));
	};

	// Configure and example a Default implementation which writes to the `window.console` (if present).  The
	// `options` hash can be used to configure the default logLevel and provide a custom message formatter.
	Logger.useDefaults = function(options) {
		options = options || {};

		options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
			// Prepend the logger's name to the log message for easy identification.
			if (context.name) {
				messages.unshift("[" + context.name + "]");
			}
		};

		// Check for the presence of a logger.
		if (typeof console === "undefined") {
			return;
		}

		// Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
		// that don't offer a native console method.
		var timerStartTimeByLabelMap = {};

		// Support for IE8+ (and other, slightly more sane environments)
		var invokeConsoleMethod = function (hdlr, messages) {
			Function.prototype.apply.call(hdlr, console, messages);
		};

		Logger.setLevel(options.defaultLevel || Logger.DEBUG);
		Logger.setHandler(function(messages, context) {
			// Convert arguments object to Array.
			messages = Array.prototype.slice.call(messages);

			var hdlr = console.log;
			var timerLabel;

			if (context.level === Logger.TIME) {
				timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

				if (messages[1] === 'start') {
					if (console.time) {
						console.time(timerLabel);
					}
					else {
						timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
					}
				}
				else {
					if (console.timeEnd) {
						console.timeEnd(timerLabel);
					}
					else {
						invokeConsoleMethod(hdlr, [ timerLabel + ': ' +
							(new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms' ]);
					}
				}
			}
			else {
				// Delegate through to custom warn/error loggers if present on the console.
				if (context.level === Logger.WARN && console.warn) {
					hdlr = console.warn;
				} else if (context.level === Logger.ERROR && console.error) {
					hdlr = console.error;
				} else if (context.level === Logger.INFO && console.info) {
					hdlr = console.info;
				}

				options.formatter(messages, context);
				invokeConsoleMethod(hdlr, messages);
			}
		});
	};

	// Export to popular environments boilerplate.
	if (typeof define === 'function' && define.amd) {
		define(Logger);
	}
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Logger;
	}
	else {
		Logger._prevLogger = global.Logger;

		Logger.noConflict = function () {
			global.Logger = Logger._prevLogger;
			return Logger;
		};

		global.Logger = Logger;
	}
}(this));

},{}],59:[function(require,module,exports){
/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #1 - September 4, 2014
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

module.exports = {
  getItem: function (sKey) {
    if (!sKey) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    if (!sKey) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};

},{}],60:[function(require,module,exports){
'use strict';

module.exports = require('./lib')

},{"./lib":65}],61:[function(require,module,exports){
'use strict';

var asap = require('asap/raw');

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('not a function');
  }
  this._37 = 0;
  this._12 = null;
  this._59 = [];
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._99 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
};
function handle(self, deferred) {
  while (self._37 === 3) {
    self = self._12;
  }
  if (self._37 === 0) {
    self._59.push(deferred);
    return;
  }
  asap(function() {
    var cb = self._37 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._37 === 1) {
        resolve(deferred.promise, self._12);
      } else {
        reject(deferred.promise, self._12);
      }
      return;
    }
    var ret = tryCallOne(cb, self._12);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._37 = 3;
      self._12 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._37 = 1;
  self._12 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._37 = 2;
  self._12 = newValue;
  finale(self);
}
function finale(self) {
  for (var i = 0; i < self._59.length; i++) {
    handle(self, self._59[i]);
  }
  self._59 = null;
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  })
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

},{"asap/raw":68}],62:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};

},{"./core.js":61}],63:[function(require,module,exports){
'use strict';

//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = require('./core.js');

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._99);
  p._37 = 1;
  p._12 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._37 === 3) {
            val = val._12;
          }
          if (val._37 === 1) return res(i, val._12);
          if (val._37 === 2) reject(val._12);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

},{"./core.js":61}],64:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype['finally'] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};

},{"./core.js":61}],65:[function(require,module,exports){
'use strict';

module.exports = require('./core.js');
require('./done.js');
require('./finally.js');
require('./es6-extensions.js');
require('./node-extensions.js');

},{"./core.js":61,"./done.js":62,"./es6-extensions.js":63,"./finally.js":64,"./node-extensions.js":66}],66:[function(require,module,exports){
'use strict';

// This file contains then/promise specific extensions that are only useful
// for node.js interop

var Promise = require('./core.js');
var asap = require('asap');

module.exports = Promise;

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  argumentCount = argumentCount || Infinity;
  return function () {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 0,
        argumentCount > 0 ? argumentCount : 0);
    return new Promise(function (resolve, reject) {
      args.push(function (err, res) {
        if (err) reject(err);
        else resolve(res);
      })
      var res = fn.apply(self, args);
      if (res &&
        (
          typeof res === 'object' ||
          typeof res === 'function'
        ) &&
        typeof res.then === 'function'
      ) {
        resolve(res);
      }
    })
  }
}
Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback =
      typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        })
      }
    }
  }
}

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
}

},{"./core.js":61,"asap":67}],67:[function(require,module,exports){
"use strict";

// rawAsap provides everything we need except exception management.
var rawAsap = require("./raw");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};

},{"./raw":68}],68:[function(require,module,exports){
(function (global){
"use strict";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],69:[function(require,module,exports){
module.exports = throttle;

/**
 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
 *
 * @param {Function} func Function to wrap.
 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
 * @return {Function} A new function that wraps the `func` function passed in.
 */

function throttle (func, wait) {
  var ctx, args, rtn, timeoutID; // caching
  var last = 0;

  return function throttled () {
    ctx = this;
    args = arguments;
    var delta = new Date() - last;
    if (!timeoutID)
      if (delta >= wait) call();
      else timeoutID = setTimeout(call, wait - delta);
    return rtn;
  };

  function call () {
    timeoutID = 0;
    last = +new Date();
    rtn = func.apply(ctx, args);
    ctx = null;
    args = null;
  }
}

},{}],70:[function(require,module,exports){
/**
* Tock by Mr Chimp - github.com/mrchimp/tock
* Based on code by James Edwards:
*    sitepoint.com/creating-accurate-timers-in-javascript/
*/

// Implements Date.now() for ie lt 9
Date.now = Date.now || function() { return +new Date(); };

// Polyfills Function.prototype.bind for IE lt 9 and Safari lt 5.1
if ( typeof Function.prototype.bind != 'function' ) {
    Function.prototype.bind = function (ctx) {
        var args = Array.prototype.slice.call(arguments, 1),
            fn = this;
        return function () {
            args.push.apply(args, arguments);
            return fn.apply(ctx, args);
        };
    };
}

(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define(factory);
  } else if ( typeof exports === 'object' ) {
    module.exports = factory();
  } else {
    root.Tock = factory();
  }
}(this, function () {

  /**
   * Called every tick for countdown clocks.
   * i.e. once every this.interval ms
   */
  function _tick () {
    this.time += this.interval;

    if ( this.countdown && (this.duration_ms - this.time < 0) ) {
      this.final_time = 0;
      this.go = false;
      this.callback(this);
      window.clearTimeout(this.timeout);
      this.complete(this);
      return;
    }
    else {
      this.callback(this);
    }

    var diff = (Date.now() - this.start_time) - this.time,
        next_interval_in = diff > 0 ? this.interval - diff : this.interval;

    if ( next_interval_in <= 0 ) {
      this.missed_ticks = Math.floor(Math.abs(next_interval_in) / this.interval);
      this.time += this.missed_ticks * this.interval;

      if ( this.go ) {
        _tick.call(this);
      }
    }
    else if ( this.go ) {
      this.timeout = window.setTimeout(_tick.bind(this), next_interval_in);
    }
  }

  /**
   * Called by Tock internally - use start() instead
   */
  function _startCountdown (duration) {
    this.duration_ms = duration;
    this.start_time = Date.now();
    this.time = 0;
    this.go = true;
    _tick.call(this);
  }

  /**
   * Called by Tock internally - use start() instead
   */
  function _startTimer (start_offset) {
    this.start_time = start_offset || Date.now();
    this.time = 0;
    this.go = true;
    _tick.call(this);
  }

  var MILLISECONDS_RE           = /^\s*(\+|-)?\d+\s*$/,
      MM_SS_RE                  = /^(\d{1,2}):(\d{2})$/,
      MM_SS_ms_OR_HH_MM_SS_RE   = /^(\d{1,2}):(\d{2})(?::|\.)(\d{2,3})$/,
      MS_PER_HOUR               = 3600000,
      MS_PER_MIN                = 60000,
      MS_PER_SEC                = 1000,
      /* The RegExp below will match a date in format `yyyy-mm-dd HH:MM:SS` and optionally with `.ms` at the end.
       * It will also match ISO date string, i.e. if the whitespace separator in the middle is replaced with a `T`
       * and the date string is also suffixed with a `Z` denoting UTC timezone.
       */
      yyyy_mm_dd_HH_MM_SS_ms_RE = /^(\d{4})-([0-1]\d)-([0-3]\d)(?:\s|T)(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3})Z?)?$/;

  var Tock = function (options) {
    options = options || {};
    
    if ( ! (this instanceof Tock) ) return new Tock(options);

    Tock.instances = (Tock.instances || 0) + 1;

    this.go           = false;
    this.timeout      = null;
    this.missed_ticks = null;
    this.interval     = options.interval || 10;
    this.countdown    = options.countdown || false;
    this.start_time   = 0;
    this.pause_time   = 0;
    this.final_time   = 0;
    this.duration_ms  = 0;
    this.time         = 0;
    this.callback     = options.callback || function () {};
    this.complete     = options.complete || function () {};
  };

  /**
   * Reset the clock
   */
  Tock.prototype.reset = function () {
    if ( this.countdown ) {
      return false;
    }
    this.stop();
    this.start_time = 0;
    this.time = 0;
  };

  /**
   * Start the clock.
   * accepts a single "time" argument which can be in various forms:
   ** MM:SS
   ** MM:SS:ms or MM:SS.ms
   ** HH:MM:SS
   ** yyyy-mm-dd HH:MM:SS.ms
   ** milliseconds
   */
  Tock.prototype.start = function (time) {
    if (this.go) return false;

    time = time ? this.timeToMS(time) : 0;

    this.start_time = time;
    this.pause_time = 0;

    if ( this.countdown ) {
      _startCountdown.call(this, time);
    } else {
      _startTimer.call(this, Date.now() - time);
    }
  };

  /**
   * Stop the clock.
   */
  Tock.prototype.stop = function () {
    this.pause_time = this.lap();
    this.go = false;

    window.clearTimeout(this.timeout);

    if ( this.countdown ) {
      this.final_time = this.duration_ms - this.time;
    } else {
      this.final_time = (Date.now() - this.start_time);
    }
  };

  /**
   * Stop/start the clock.
   */
  Tock.prototype.pause = function () {
    if ( this.go ) {
      this.pause_time = this.lap();
      this.stop();
    }
    else {
      if ( this.pause_time ) {
        if ( this.countdown ) {
          _startCountdown.call(this, this.pause_time);
        } else {
          _startTimer.call(this, Date.now() - this.pause_time);
        }

        this.pause_time = 0;
      }
    }
  };

  /**
   * Get the current clock time in ms.
   * Use with Tock.msToTime() to make it look nice.
   */
  Tock.prototype.lap = function () {
    if ( this.go ) {
      var now;

      if ( this.countdown ) {
        now = this.duration_ms - (Date.now() - this.start_time);
      } else {
        now = (Date.now() - this.start_time);
      }

      return now;
    }

    return this.pause_time || this.final_time;
  };

  /**
   * Format milliseconds as a MM:SS.ms string.
   */
  Tock.prototype.msToTime = function (ms) {
    if ( ms <= 0 ) {
      return '00:00.000';
    }

    var milliseconds = (ms % MS_PER_SEC).toString(),
        seconds = Math.floor((ms / MS_PER_SEC) % 60).toString(),
        minutes = Math.floor((ms / (MS_PER_MIN)) % 60).toString();

    if ( milliseconds.length === 1 ) {
      milliseconds = '00' + milliseconds;
    }
    else if ( milliseconds.length === 2 ) {
      milliseconds = '0' + milliseconds;
    }
    if ( seconds.length === 1 ) {
      seconds = '0' + seconds;
    }
    if ( minutes.length === 1 ) {
      minutes = '0' + minutes;
    }
    return minutes + ':' + seconds + '.' + milliseconds;
  };

  /**
   * Format milliseconds as HH:MM:SS
   */
  Tock.prototype.msToTimecode = function (ms) {
    if (ms <= 0) {
      return '00:00:00';
    }

    var seconds = Math.floor((ms / MS_PER_SEC) % 60).toString(),
        minutes = Math.floor((ms / (MS_PER_MIN)) % 60).toString(),
        MS_PER_HOURs = Math.floor((ms / (MS_PER_HOUR)) % 60).toString();

    if ( seconds.length === 1 ) {
      seconds = '0' + seconds;
    }

    if ( minutes.length === 1 ) {
      minutes = '0' + minutes;
    }

    if ( MS_PER_HOURs.length === 1 ) {
      MS_PER_HOURs = '0' + MS_PER_HOURs;
    }

    return MS_PER_HOURs + ':' + minutes + ':' + seconds;
  };

  /**
   * Convert a time string to milliseconds
   *
   * Possible inputs:
   * MM:SS
   * MM:SS:ms or MM:SS.ms
   * HH:MM:SS
   * yyyy-mm-dd HH:MM:SS.ms
   *
   * A milliseconds input will return it back for safety
   * If the input cannot be recognized then 0 is returned
   *
   */
  Tock.prototype.timeToMS = function (time) {
    //if milliseconds integer is input then return it back
    if ( MILLISECONDS_RE.test(String(time)) ) {
      return time;
    }

    var ms,
        time_split,
        match,
        date,
        now = new Date();

    if ( MM_SS_RE.test(time) ) { // If MM:SS
      time_split = time.split(':');
      ms = parseInt(time_split[0], 10) * MS_PER_MIN;
      ms += parseInt(time_split[1], 10) * MS_PER_SEC;
    } else {
      match = time.match(MM_SS_ms_OR_HH_MM_SS_RE);

      if ( match ) {
        if ( match[3].length == 3 || parseInt(match[3], 10) > 59 ) { // If MM:SS:ms or MM:SS.ms (e.g. 10:10:458 or 10:10.458)
          ms = parseInt(match[1], 10) * MS_PER_MIN;
          ms += parseInt(match[2], 10) * MS_PER_SEC;
          ms += parseInt(match[3], 10);
        } else { // Then it's HH:MM:SS
          ms = parseInt(match[1], 10) * MS_PER_HOUR;
          ms += parseInt(match[2], 10) * MS_PER_MIN;
          ms += parseInt(match[3], 10) * MS_PER_SEC;
        }
      } else if ( yyyy_mm_dd_HH_MM_SS_ms_RE.test(time) ) { // If yyyy-mm-dd HH:MM:SS or yyyy-mm-dd HH:MM:SS.ms or yyyy-mm-ddTHH:MM:SS.msZ
        date = new Date();
        now = new Date();
        
        match = time.match(yyyy_mm_dd_HH_MM_SS_ms_RE);
        
        date.setYear(match[1]);
        date.setMonth(match[2]);
        date.setDate(match[3]);
        date.setHours(match[4]);
        date.setMinutes(match[5]);
        date.setSeconds(match[6]);
        
        if (typeof match[7] !== 'undefined') {
          date.setMilliseconds(match[7]);
        }

        ms = Math.max(0, date.getTime() - now.getTime());
      } else {
        // Let's try it as a date string
        now = new Date();
        ms = Date.parse(time);

        if (!isNaN(ms)) { // Looks ok
          ms = Math.max(0, ms - now.getTime());
        } else { // Could not recognize input, so start from 0
          ms = 0;
        }
      }
    }

    return ms;
  };

  return Tock;
}));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fYWRzLmZtLXBvbGFyLWFkLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLmFjZi1tYXBzLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLmFkLWxvYWRlci5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5hZC11bml0LWlmcmFtZS5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5hZC11bml0LmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLmFsZXJ0LmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLmFzeW5jLWxvYWRlci5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5iYWNrLXRvLXRvcC5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5jb21wZXRpdGlvbnMuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMuY29udGVudC1zbGlkZXIuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMuZmFjZWJvb2stY29tbWVudHMuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMuZmFjZWJvb2stc2RrLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLmZhY2Vib29rLXVzZXIuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMuZmItb3Blbi1ncmFwaC1vYmplY3QuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMuZmVhdHVyZS1zbGlkZXIuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMuZ2FsbGVyeS1zZXJpZXMuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMuZ2FsbGVyeS5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5nZW9pcC5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5nb29nbGUtYW5hbHl0aWNzLXRyYWNrZXIuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMuaGVhZGVyLXNlYXJjaC5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5oZWFkcm9vbS1tZW51LmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLmxpZ2h0Ym94LmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLmxpbmstcGFyc2VyLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLmxvZ2luLWNvbnRyb2wuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMubG9uZ2Zvcm0uY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMubWVudS10b2dnbGVzLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLm1vYmlsZS1tZW51LmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLm5hdi10b2dnbGUuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMubmV3c2xldHRlci10ZXJtcy5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5wYWdpbmF0aW9uLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLnBsYXRmb3JtLWRldGVjdGlvbi5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5yYWRpdW0tb25lLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLnNlYXJjaC1yZXN1bHRzLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLnNlY3Rpb24td2F0Y2hlci5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy5zb2NpYWwtYXBpLW5vdGlmaWVyLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLnNvY2lhbC10cmFja2VyLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLnNwYWNlZmluZGVyLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLnNwbGl0cG9zdC5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy50YWJzLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19jb21wb25lbnRzLnRyYWNrZXIuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMudHlwZWtpdC5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy51bWJlbC1jbGllbnQuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2NvbXBvbmVudHMudW1iZWwtdHJhY2tlci5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9fY29tcG9uZW50cy53YXRjaGVkLXNlY3Rpb24uY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2luaXRpYWxpc2Vycy5pZnJhbWUtcmVzaXplLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL19pbml0aWFsaXNlcnMuc21hcnRyZXNpemUuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX2luaXRpYWxpc2Vycy51bWJlbC5jb2ZmZWUiLCIvbW50L3d3dy9mYWN0b3J5LWNvcmUtbWFzdGVyL3JlbGVhc2VzLzIwMTUxMDI2MDkzMTMzL2ZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvY29mZmVlc2NyaXB0L2FwcC9faW5pdGlhbGlzZXJzLnZpZXdzLWluaXQuY29mZmVlIiwiL21udC93d3cvZmFjdG9yeS1jb3JlLW1hc3Rlci9yZWxlYXNlcy8yMDE1MTAyNjA5MzEzMy9mbS1jb3JlLXNpdGVzL2ZvdW5kYXRpb24vdGhlbWUvYXNzZXRzL2phdmFzY3JpcHRzL2NvZmZlZXNjcmlwdC9hcHAvX3V0aWxpdGllcy5pMThuLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL191dGlsaXRpZXMucG9zdC1tZXNzYWdlLmNvZmZlZSIsIi9tbnQvd3d3L2ZhY3RvcnktY29yZS1tYXN0ZXIvcmVsZWFzZXMvMjAxNTEwMjYwOTMxMzMvZm0tY29yZS1zaXRlcy9mb3VuZGF0aW9uL3RoZW1lL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb2ZmZWVzY3JpcHQvYXBwL191dGlsaXRpZXMudXRpbGl0aWVzLmNvZmZlZSIsImZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvZm91bmRhdGlvbi92aWV3cy9oYW5kbGViYXJzLXRlbXBsYXRlcy5qcyIsImZtLWNvcmUtc2l0ZXMvZm91bmRhdGlvbi90aGVtZS9hc3NldHMvamF2YXNjcmlwdHMvdmVuZG9yL2FkdGVjaC1kYWMtMi41LjMuanMiLCJub2RlX21vZHVsZXMvZmFzdGRvbS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9mbGV4c2xpZGVyL2pxdWVyeS5mbGV4c2xpZGVyLmpzIiwibm9kZV9tb2R1bGVzL2hlYWRyb29tLmpzL2Rpc3QvaGVhZHJvb20uanMiLCJub2RlX21vZHVsZXMvanMtbG9nZ2VyL3NyYy9sb2dnZXIuanMiLCJub2RlX21vZHVsZXMvbW96aWxsYS1kb2MtY29va2llcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvbGliL2NvcmUuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvZG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9lczYtZXh0ZW5zaW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9maW5hbGx5LmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvbGliL25vZGUtZXh0ZW5zaW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL25vZGVfbW9kdWxlcy9hc2FwL2Jyb3dzZXItYXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL25vZGVfbW9kdWxlcy9hc2FwL2Jyb3dzZXItcmF3LmpzIiwibm9kZV9tb2R1bGVzL3Rocm90dGxlaXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdG9ja3RpbWVyL3RvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNZQSxJQUFBOztBQUFBLE9BQUEsQ0FBUSwwQ0FBUjs7QUFFQSxPQUFBLENBQVEsd0NBQVI7O0FBQ0EsT0FBQSxDQUFRLHVDQUFSOztBQUNBLE9BQUEsQ0FBUSxrQ0FBUjs7QUFHQSxNQUFBLEdBQXlCLE9BQUEsQ0FBUSxXQUFSOztBQUd6QixTQUFBLEdBQXlCLE9BQUEsQ0FBUSxtQ0FBUjs7QUFDekIsU0FBUyxDQUFDLFdBQVYsR0FBeUIsT0FBQSxDQUFRLHNDQUFSOztBQUN6QixJQUFBLEdBQXlCLE9BQUEsQ0FBUSw4QkFBUjs7QUFHekIsT0FBQSxDQUFRLDZDQUFSOztBQUNBLFNBQUEsR0FBeUIsT0FBQSxDQUFRLCtCQUFSOztBQUd6QixPQUFBLEdBQXlCLE9BQUEsQ0FBUSxtQ0FBUjs7QUFDekIsUUFBQSxHQUF5QixPQUFBLENBQVEsNkJBQVI7O0FBQ3pCLEtBQUEsR0FBeUIsT0FBQSxDQUFRLGdDQUFSOztBQUN6QixnQkFBQSxHQUF5QixPQUFBLENBQVEsdUNBQVI7O0FBQ3pCLFNBQUEsR0FBeUIsT0FBQSxDQUFRLHNDQUFSOztBQUN6QixhQUFBLEdBQXlCLE9BQUEsQ0FBUSx5Q0FBUjs7QUFDekIsWUFBQSxHQUF5QixPQUFBLENBQVEsdUNBQVI7O0FBQ3pCLFlBQUEsR0FBeUIsT0FBQSxDQUFRLHdDQUFSOztBQUN6QixXQUFBLEdBQXlCLE9BQUEsQ0FBUSx1Q0FBUjs7QUFDekIsaUJBQUEsR0FBeUIsT0FBQSxDQUFRLCtDQUFSOztBQUN6QixhQUFBLEdBQXlCLE9BQUEsQ0FBUSx5Q0FBUjs7QUFDekIsT0FBQSxHQUF5QixPQUFBLENBQVEsa0NBQVI7O0FBQ3pCLGFBQUEsR0FBeUIsT0FBQSxDQUFRLHlDQUFSOztBQUN6QixLQUFBLEdBQXlCLE9BQUEsQ0FBUSxnQ0FBUjs7QUFDekIsc0JBQUEsR0FBeUIsT0FBQSxDQUFRLG1EQUFSOztBQUN6QixZQUFBLEdBQXlCLE9BQUEsQ0FBUSx3Q0FBUjs7QUFFekIsWUFBQSxHQUF5QixPQUFBLENBQVEsd0NBQVI7O0FBQ3pCLFFBQUEsR0FBeUIsT0FBQSxDQUFRLG1DQUFSOztBQUN6QixZQUFBLEdBQXlCLE9BQUEsQ0FBUSx3Q0FBUjs7QUFDekIsUUFBQSxHQUF5QixPQUFBLENBQVEsbUNBQVI7O0FBQ3pCLFVBQUEsR0FBeUIsT0FBQSxDQUFRLHNDQUFSOztBQUN6QixnQkFBQSxHQUF5QixPQUFBLENBQVEsMkNBQVI7O0FBQ3pCLFNBQUEsR0FBeUIsT0FBQSxDQUFRLHFDQUFSOztBQUN6QixhQUFBLEdBQXlCLE9BQUEsQ0FBUSx5Q0FBUjs7QUFDekIsV0FBQSxHQUF5QixPQUFBLENBQVEsdUNBQVI7O0FBQ3pCLGlCQUFBLEdBQXlCLE9BQUEsQ0FBUSw4Q0FBUjs7QUFDekIsYUFBQSxHQUF5QixPQUFBLENBQVEseUNBQVI7O0FBQ3pCLFNBQUEsR0FBeUIsT0FBQSxDQUFRLDZCQUFSOztBQUN6QixJQUFBLEdBQXlCLE9BQUEsQ0FBUSwrQkFBUjs7QUFDekIsU0FBQSxHQUF5QixPQUFBLENBQVEsa0NBQVI7O0FBQ3pCLFdBQUEsR0FBeUIsT0FBQSxDQUFRLHVDQUFSOztBQUN6QixZQUFBLEdBQXlCLE9BQUEsQ0FBUSx3Q0FBUjs7QUFDekIsT0FBQSxHQUF5QixPQUFBLENBQVEsa0NBQVI7O0FBQ3pCLGNBQUEsR0FBeUIsT0FBQSxDQUFRLDBDQUFSOztBQUN6QixnQkFBQSxHQUF5QixPQUFBLENBQVEsNENBQVI7O0FBR3pCLE1BQU0sQ0FBQyxXQUFQLENBQUE7O0FBQ0EsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsTUFBTSxDQUFDLEtBQXZCOztBQUdBLE1BQU0sQ0FBQyxRQUFQLEdBQXNCLElBQUEsUUFBQSxDQUFBOztBQUN0QixRQUFRLENBQUMsT0FBVCxDQUFBOztBQU9BLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLE1BQU0sQ0FBQyxTQUFQLElBQW9COztBQUd2QyxNQUFNLENBQUMsSUFBUCxHQUF5Qjs7QUFDekIsTUFBTSxDQUFDLFNBQVAsR0FBeUI7O0FBQ3pCLFNBQVMsQ0FBQyxXQUFWLEdBQXlCLFNBQVMsQ0FBQzs7QUFHbkMsV0FBQSxHQUE2QixJQUFBLFdBQUEsQ0FBQTs7QUFDN0IsZ0JBQUEsR0FBNkIsSUFBQSxnQkFBQSxDQUFBOztBQUc3QixXQUFBLEdBQTZCLElBQUEsV0FBQSxDQUFBOztBQUM3QixZQUFBLEdBQTZCLElBQUEsWUFBQSxDQUFhLFdBQWI7O0FBQzdCLGlCQUFBLEdBQTZCLElBQUEsaUJBQUEsQ0FBQTs7QUFDN0Isc0JBQUEsR0FBNkIsSUFBQSxzQkFBQSxDQUFBOztBQUM3QixhQUFBLEdBQTZCLElBQUEsYUFBQSxDQUFBOztBQUM3QixNQUFNLENBQUMsT0FBUCxHQUE2QixJQUFBLFNBQUEsQ0FBQTs7QUFHN0Isc0JBQUEsR0FBMEIsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLElBQVYsQ0FBZSx3QkFBZjs7QUFDMUIsU0FBQSxHQUE4QixJQUFBLFNBQUEsQ0FBVSxzQkFBVixFQUFrQyxrQ0FBbEM7O0FBRTlCLGNBQUEsR0FBNkIsSUFBQSxjQUFBLENBQUE7O0FBSTdCLG1CQUFBLEdBQTZCLElBQUEsU0FBQSxDQUFVLE9BQVYsRUFBbUIsa0JBQW5COztBQUc3QixnQkFBQSxHQUE2QixJQUFBLGdCQUFBLENBQUE7O0FBQzdCLE9BQUEsR0FBNkIsSUFBQSxPQUFBLENBQUE7O0FBQzdCLE1BQU0sQ0FBQyxPQUFQLEdBQTZCLElBQUEsT0FBQSxDQUFBOztBQUM3QixTQUFBLEdBQTZCLElBQUEsU0FBQSxDQUFBOztBQUM3QixhQUFBLEdBQTZCLElBQUEsYUFBQSxDQUFBOztBQUM3QixZQUFBLEdBQTZCLElBQUEsS0FBQSxDQUFNLGtCQUFOLEVBQTBCLGlCQUExQjs7QUFDN0IsWUFBQSxHQUE2QixJQUFBLFlBQUEsQ0FBQTs7QUFDN0IsYUFBQSxHQUE2QixJQUFBLGFBQUEsQ0FBQTs7QUFDN0IsWUFBQSxHQUE2QixJQUFBLFlBQUEsQ0FBQTs7QUFFN0IsUUFBQSxHQUE2QixJQUFBLFFBQUEsQ0FBQTs7QUFDN0IsUUFBQSxHQUE2QixJQUFBLFFBQUEsQ0FBQTs7QUFDN0IsWUFBQSxHQUE2QixJQUFBLFlBQUEsQ0FBQTs7QUFDN0IsVUFBQSxHQUE2QixJQUFBLFVBQUEsQ0FBQTs7QUFDN0IsZ0JBQUEsR0FBNkIsSUFBQSxnQkFBQSxDQUFBOztBQUM3QixhQUFBLEdBQTZCLElBQUEsYUFBQSxDQUFBOztBQUM3QixTQUFBLEdBQTZCLElBQUEsU0FBQSxDQUFBOztBQUM3QixXQUFBLEdBQTZCLElBQUEsV0FBQSxDQUFBOztBQUM3QixJQUFBLEdBQTZCLElBQUEsSUFBQSxDQUFBOztBQUM3QixDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixTQUFBO1NBQU8sSUFBQSxhQUFBLENBQWMsQ0FBQSxDQUFFLElBQUYsQ0FBZDtBQUFQLENBQTFCOztBQUNBLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxJQUFkLENBQW1CLFNBQUE7U0FBTyxJQUFBLE9BQUEsQ0FBUSxDQUFBLENBQUUsSUFBRixDQUFSO0FBQVAsQ0FBbkI7O0FBRUEsSUFBRyx5QkFBSDtFQUNFLEtBQUEsR0FBWSxJQUFBLEtBQUEsQ0FBQSxFQURkOzs7OztBQ3JJQSxJQUFBOztBQUFBLGlCQUFBLEdBQW9CLE9BQUEsQ0FBUSx5Q0FBUjs7QUFFZDtFQUVKLFNBQUMsQ0FBQSxRQUFELEdBQVk7O0VBQ1osU0FBQyxDQUFBLE1BQUQsR0FBVTs7RUFDVixTQUFDLENBQUEsYUFBRCxHQUFpQjs7RUFFakIsU0FBQyxDQUFBLFFBQUQsR0FBWTs7RUFDWixTQUFDLENBQUEsY0FBRCxHQUFrQjs7RUFnQmxCLFNBQUMsQ0FBQSxTQUFELEdBQWE7SUFBQztNQUNaLEtBQUEsRUFBTywyQkFESztNQUVaLElBQUEsRUFBTSwyQkFGTTtNQUdaLFFBQUEsRUFBVSxrRUFIRTtNQUlaLE1BQUEsRUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBSkw7TUFLWixRQUFBLEVBQVUsU0FBQyxDQUFBLFdBQVcsQ0FBQyxRQUxYO01BTVosY0FBQSxFQUFnQixTQUFDLENBQUEsV0FBVyxDQUFDLGNBTmpCO01BT1osUUFBQSxFQUFVLFNBQUMsUUFBRDtBQUNSLFlBQUE7UUFBQSxFQUFBLEdBQUssUUFBUSxDQUFDLE1BQVQsQ0FBQTtRQUNMLE1BQUEsR0FBUyxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixZQUExQjtlQUNULE1BQU0sQ0FBQyxRQUFQLENBQWdCLEVBQWhCO01BSFEsQ0FQRTtNQVdaLE1BQUEsRUFBUSxTQUFDLElBQUQsR0FBQSxDQVhJO01BWVosT0FBQSxFQUFTLFNBQUMsS0FBRCxHQUFBLENBWkc7S0FBRCxFQWFYO01BQ0EsS0FBQSxFQUFPLHVCQURQO01BRUEsSUFBQSxFQUFNLHVCQUZOO01BR0EsUUFBQSxFQUFVLG1FQUhWO01BSUEsTUFBQSxFQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFKakI7TUFLQSxRQUFBLEVBQVUsU0FBQyxDQUFBLFdBQVcsQ0FBQyxRQUx2QjtNQU1BLGNBQUEsRUFBZ0IsU0FBQyxDQUFBLFdBQVcsQ0FBQyxjQU43QjtNQU9BLFFBQUEsRUFBVSxTQUFDLFFBQUQ7UUFDUixRQUFRLENBQUMsSUFBVCxDQUFBLENBQWUsQ0FBQyxNQUFoQixDQUFBO2VBQ0EsTUFBTSxDQUFDLElBQVAsR0FBa0IsSUFBQSxJQUFBLENBQUE7TUFGVixDQVBWO01BVUEsTUFBQSxFQUFRLFNBQUMsSUFBRDtBQUdOLFlBQUE7UUFBQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLDJFQUFGO1FBQ1AsSUFBSSxDQUFDLElBQUwsQ0FBVSxnQkFBVixDQUEyQixDQUFDLElBQTVCLENBQWlDLE1BQWpDLEVBQXlDLElBQUksQ0FBQyxJQUE5QztRQUNBLElBQUksQ0FBQyxJQUFMLENBQVUsMkJBQVYsQ0FBc0MsQ0FBQyxJQUF2QyxDQUE0QyxLQUE1QyxFQUFtRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQTlEO2VBQ0EsSUFBSSxDQUFDLElBQUwsQ0FBVSxnQkFBVixDQUEyQixDQUFDLElBQTVCLENBQWlDLElBQUksQ0FBQyxLQUF0QztNQU5NLENBVlI7TUFtQkEsT0FBQSxFQUFTLFNBQUMsS0FBRCxHQUFBLENBbkJUO0tBYlcsRUFpQ1g7TUFDQSxLQUFBLEVBQU0sb0JBRE47TUFFQSxJQUFBLEVBQU0sb0JBRk47TUFHQSxRQUFBLEVBQVUsa0VBSFY7TUFJQSxNQUFBLEVBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUpqQjtNQUtBLFFBQUEsRUFBVSxTQUFDLENBQUEsV0FBVyxDQUFDLFFBTHZCO01BTUEsY0FBQSxFQUFnQixTQUFDLENBQUEsV0FBVyxDQUFDLGNBTjdCO01BT0EsUUFBQSxFQUFVLFNBQUMsUUFBRDtlQUNSLFFBQVEsQ0FBQyxJQUFULENBQUEsQ0FBZSxDQUFDLE1BQWhCLENBQUE7TUFEUSxDQVBWO01BU0EsTUFBQSxFQUFRLFNBQUMsSUFBRCxHQUFBLENBVFI7TUFVQSxPQUFBLEVBQVMsU0FBQyxLQUFELEdBQUEsQ0FWVDtLQWpDVyxFQTRDWDtNQUNBLEtBQUEsRUFBTyxnQ0FEUDtNQUVBLElBQUEsRUFBTSx5Q0FGTjtNQUdBLFFBQUEsRUFBVSx1REFIVjtNQUlBLE1BQUEsRUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLCtCQUpqQjtNQUtBLFFBQUEsRUFBVSxTQUFDLENBQUEsV0FBVyxDQUFDLFFBTHZCO01BTUEsY0FBQSxFQUFnQixTQUFDLENBQUEsV0FBVyxDQUFDLGNBTjdCO01BT0EsUUFBQSxFQUFVLFNBQUMsUUFBRDtBQUNSLFlBQUE7UUFBQSxJQUFDLENBQUEsaUJBQUQsR0FBeUIsSUFBQSxpQkFBQSxDQUFBO1FBQ3pCLElBQUcsUUFBQSxJQUFDLENBQUEsaUJBQWlCLENBQUMsZ0JBQW5CLEtBQXVDLE9BQXZDLElBQUEsR0FBQSxLQUErQyxRQUEvQyxDQUFBLElBQTZELENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsTUFBbkIsR0FBNEIsQ0FBNUY7VUFDRSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsUUFBWixDQUFxQixlQUFyQixDQUFxQyxDQUFDLElBQXRDLENBQTJDLE9BQTNDLEVBQW9ELDRCQUFwRCxFQURGO1NBQUEsTUFBQTtVQUdFLFFBQVEsQ0FBQyxPQUFULENBQUEsQ0FBa0IsQ0FBQyxJQUFuQixDQUFBLENBQXlCLENBQUMsTUFBMUIsQ0FBQSxFQUhGOztlQUlBLFFBQVEsQ0FBQyxRQUFULENBQWtCLGtCQUFsQjtNQU5RLENBUFY7TUFjQSxNQUFBLEVBQVEsU0FBQyxJQUFELEdBQUEsQ0FkUjtNQWVBLE9BQUEsRUFBUyxTQUFDLEtBQUQsR0FBQSxDQWZUO0tBNUNXLEVBNERYO01BQ0EsS0FBQSxFQUFPLG9EQURQO01BRUEsSUFBQSxFQUFNLCtDQUZOO01BR0EsUUFBQSxFQUFVLHFEQUhWO01BSUEsTUFBQSxFQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBSmpCO01BS0EsUUFBQSxFQUFVLFNBQUMsQ0FBQSxXQUFXLENBQUMsUUFMdkI7TUFNQSxjQUFBLEVBQWdCLFNBQUMsQ0FBQSxXQUFXLENBQUMsY0FON0I7TUFPQSxRQUFBLEVBQVUsU0FBQyxRQUFEO2VBQ1IsUUFBUSxDQUFDLFFBQVQsQ0FBa0Isa0JBQWxCO01BRFEsQ0FQVjtNQVNBLE1BQUEsRUFBUSxTQUFDLElBQUQsR0FBQSxDQVRSO01BVUEsT0FBQSxFQUFTLFNBQUMsS0FBRCxHQUFBLENBVlQ7S0E1RFcsRUF1RVg7TUFDQSxLQUFBLEVBQU8seUNBRFA7TUFFQSxJQUFBLEVBQU0sMEJBRk47TUFHQSxRQUFBLEVBQVUscUVBSFY7TUFJQSxNQUFBLEVBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFKakI7TUFLQSxRQUFBLEVBQVUsU0FBQyxDQUFBLFdBQVcsQ0FBQyxRQUx2QjtNQU1BLGNBQUEsRUFBZ0IsU0FBQyxDQUFBLFdBQVcsQ0FBQyxjQU43QjtNQU9BLFFBQUEsRUFBVSxTQUFDLFFBQUQ7QUFDUixZQUFBO1FBQUEsUUFBQSxHQUFXLFFBQVEsQ0FBQyxJQUFULENBQUEsQ0FBZSxDQUFDLElBQWhCLENBQXFCLE9BQXJCLENBQUEsR0FBZ0M7UUFDM0MsUUFBUSxDQUFDLElBQVQsQ0FBYyxPQUFkLEVBQXVCLFFBQXZCO2VBQ0EsUUFBUSxDQUFDLE9BQVQsQ0FBQSxDQUFrQixDQUFDLElBQW5CLENBQUEsQ0FBeUIsQ0FBQyxNQUExQixDQUFBO01BSFEsQ0FQVjtNQVdBLE1BQUEsRUFBUSxTQUFDLElBQUQsR0FBQSxDQVhSO01BWUEsT0FBQSxFQUFTLFNBQUMsS0FBRCxHQUFBLENBWlQ7S0F2RVc7OztFQXVGQSxtQkFBQyxVQUFELEVBQWMsZ0JBQWQ7SUFBQyxJQUFDLENBQUEsYUFBRDtJQUFhLElBQUMsQ0FBQSxtQkFBRDtJQUN6QixJQUFDLENBQUEsSUFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLFVBQUQsQ0FBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDLGtCQUFoQztFQUZXOztzQkFLYixJQUFBLEdBQU0sU0FBQTtJQUNKLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLE1BQU0sQ0FBQyxTQUFQLElBQW9CO0lBQ3ZDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBakIsR0FBa0MsSUFBQSxJQUFBLENBQUEsQ0FBTSxDQUFDLE9BQVAsQ0FBQTtXQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQWpCLEdBQTJCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxHQUFEO1FBQ3pCLEdBQUcsQ0FBQyxhQUFKLENBQWtCLEtBQUMsQ0FBQSxVQUFuQjtRQUNBLEtBQUMsQ0FBQSxpQkFBRCxDQUFtQixHQUFuQjtlQUNBLEtBQUMsQ0FBQSxTQUFELENBQVcsR0FBWDtNQUh5QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7RUFIdkI7O3NCQVVOLGlCQUFBLEdBQW1CLFNBQUMsR0FBRDtJQUNqQixHQUFHLENBQUMsbUJBQUosQ0FBd0IsSUFBQyxDQUFBLGdCQUF6QjtXQUNBLEdBQUcsQ0FBQyxzQkFBSixDQUNFO01BQUEsVUFBQSxFQUFZLFNBQVMsQ0FBQyxVQUF0QjtNQUNBLE9BQUEsRUFDRTtRQUFBLE9BQUEsRUFDRTtVQUFBLElBQUEsRUFBTSxlQUFOO1VBQ0EsSUFBQSxFQUFNLGVBRE47VUFFQSxJQUFBLEVBQU0sZUFGTjtTQURGO1FBSUEsS0FBQSxFQUFPLFFBSlA7UUFLQSxPQUFBLEVBQVMsVUFMVDtRQU1BLE9BQUEsRUFBUyxVQU5UO1FBT0EsTUFBQSxFQUFRLFNBUFI7UUFRQSxPQUFBLEVBQVMsV0FSVDtRQVNBLEtBQUEsRUFDRTtVQUFBLElBQUEsRUFBTSxRQUFOO1VBQ0EsT0FBQSxFQUFTLGdCQURUO1VBRUEsT0FBQSxFQUFTLGdCQUZUO1NBVkY7T0FGRjtNQWVBLE1BQUEsRUFBUSxTQUFDLElBQUQsR0FBQSxDQWZSO01BZ0JBLFFBQUEsRUFBVSxTQUFBLEdBQUEsQ0FoQlY7TUFpQkEsT0FBQSxFQUFTLFNBQUMsS0FBRCxHQUFBLENBakJUO01Ba0JBLEtBQUEsRUFBTyxTQUFBO0FBQ0wsWUFBQTtRQUFBLElBQUEsR0FBTyxDQUFBLENBQUUsNEJBQUY7UUFDUCxJQUFHLElBQUksQ0FBQyxNQUFMLElBQWUsSUFBSSxDQUFDLElBQUwsQ0FBVSxTQUFWLENBQW9CLENBQUMsTUFBdkM7VUFDRSxJQUFBLEdBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxTQUFWLENBQW9CLENBQUMsS0FBckIsQ0FBMkIsSUFBM0I7VUFDUCxJQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsbUJBQVYsRUFBK0IsSUFBL0IsQ0FBQSxLQUF3QyxDQUFDLENBQTVDO0FBQ0UsbUJBQU8sVUFEVDtXQUZGOztNQUZLLENBbEJQO0tBREY7RUFGaUI7O3NCQThCbkIsU0FBQSxHQUFXLFNBQUMsR0FBRDtXQUNULENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxDQUFBLFdBQVcsQ0FBQyxTQUFwQixFQUErQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsS0FBRCxFQUFRLFFBQVI7QUFDN0IsWUFBQTtRQUFBLGFBQUEsR0FBZ0IsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBbEIsQ0FBd0IsR0FBeEIsQ0FBNkIsQ0FBQSxDQUFBLENBQS9CO1FBQ2hCLElBQUcsYUFBYSxDQUFDLE1BQWpCO1VBQ0UsUUFBUSxDQUFDLGFBQVQsUUFBUSxDQUFDLFdBQWEsYUFBYSxDQUFDLElBQWQsQ0FBbUIsVUFBbkI7VUFDdEIsUUFBUSxDQUFDLFNBQVQsUUFBUSxDQUFDLE9BQVMsYUFBYSxDQUFDLElBQWQsQ0FBbUIsS0FBbkI7aUJBQ2xCLEdBQUcsQ0FBQyxhQUFKLENBQ0U7WUFBQSxVQUFBLEVBQVksU0FBUyxDQUFDLFVBQXRCO1lBQ0EsS0FBQSxFQUFPLFFBQVEsQ0FBQyxLQURoQjtZQUVBLElBQUEsRUFDRTtjQUFBLE1BQUEsRUFBUSxLQUFDLENBQUEsV0FBVyxDQUFDLFFBQXJCO2NBQ0EsRUFBQSxFQUFJLEtBQUMsQ0FBQSxZQUFELENBQWMsUUFBZCxDQURKO2NBRUEsSUFBQSxFQUFNLEtBQUMsQ0FBQSxXQUFXLENBQUMsTUFGbkI7Y0FHQSxPQUFBLEVBQ0U7Z0JBQUEsVUFBQSxFQUFZLFFBQVEsQ0FBQyxRQUFyQjtnQkFDQSxJQUFBLEVBQU0sUUFBUSxDQUFDLElBRGY7Z0JBRUEsT0FBQSxFQUFTLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFGM0I7ZUFKRjthQUhGO1lBV0EsUUFBQSxFQUFVLFFBQVEsQ0FBQyxRQVhuQjtZQVlBLFFBQUEsRUFBVSxRQUFRLENBQUMsUUFabkI7WUFhQSxjQUFBLEVBQWdCLFFBQVEsQ0FBQyxjQWJ6QjtZQWNBLFFBQUEsRUFBVSxRQUFRLENBQUMsTUFkbkI7WUFlQSxRQUFBLEVBQVUsUUFBUSxDQUFDLFFBZm5CO1lBZ0JBLE1BQUEsRUFBUSxTQUFDLElBQUQ7Y0FDTixRQUFRLENBQUMsTUFBVCxDQUFnQixJQUFoQjtxQkFDQSxPQUFPLENBQUMsS0FBUixDQUFjLG1CQUFkLEVBQW1DLGVBQW5DLEVBQW9ELFFBQVEsQ0FBQyxLQUE3RDtZQUZNLENBaEJSO1lBbUJBLE9BQUEsRUFBUyxTQUFDLEtBQUQ7Y0FDUCxRQUFRLENBQUMsT0FBVCxDQUFpQixLQUFqQjtxQkFDQSxPQUFPLENBQUMsS0FBUixDQUFjLG1CQUFkLEVBQW1DLGNBQW5DLEVBQW1ELEtBQW5EO1lBRk8sQ0FuQlQ7V0FERixFQUhGOztNQUY2QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBL0I7RUFEUzs7c0JBK0JYLFlBQUEsR0FBYyxTQUFDLFFBQUQ7QUFDWixZQUFPLElBQUMsQ0FBQSxXQUFXLENBQUMsUUFBcEI7QUFBQSxXQUNPLEtBRFA7ZUFFSSxHQUFBLEdBQUksSUFBQyxDQUFBLFdBQVcsQ0FBQyxhQUFqQixHQUErQixHQUEvQixHQUFrQyxRQUFRLENBQUM7QUFGL0M7ZUFJSSxRQUFRLENBQUM7QUFKYjtFQURZOztzQkFRZCxVQUFBLEdBQVksU0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLEVBQUw7QUFDVixRQUFBO0lBQUEsR0FBQSxHQUFNLENBQUMsQ0FBQyxvQkFBRixDQUF1QixDQUF2QixDQUEwQixDQUFBLENBQUE7SUFDaEMsSUFBRyxDQUFDLENBQUMsY0FBRixDQUFpQixFQUFqQixDQUFIO0FBQ0UsYUFERjs7SUFFQSxFQUFBLEdBQUssQ0FBQyxDQUFDLGFBQUYsQ0FBZ0IsQ0FBaEI7SUFDTCxFQUFFLENBQUMsRUFBSCxHQUFRO0lBQ1IsRUFBRSxDQUFDLElBQUgsR0FBVTtJQUNWLEVBQUUsQ0FBQyxLQUFILEdBQVc7SUFDWCxFQUFFLENBQUMsR0FBSCxHQUFTO1dBQ1QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFmLENBQTRCLEVBQTVCLEVBQWdDLEdBQWhDO0VBVFU7Ozs7OztBQVlkLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDaE5qQixJQUFBOztBQUFNO0FBRUosTUFBQTs7RUFBYSxpQkFBQTtJQUNYLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxJQUFkLENBQW1CLFNBQUE7YUFDakIsU0FBQSxDQUFVLENBQUEsQ0FBRSxJQUFGLENBQVY7SUFEaUIsQ0FBbkI7RUFEVzs7RUFLYixTQUFBLEdBQVksU0FBQyxHQUFEO0FBQ1YsUUFBQTtJQUFBLFFBQUEsR0FBVyxHQUFHLENBQUMsSUFBSixDQUFTLFNBQVQ7SUFFWCxJQUFBLEdBQ0U7TUFBQSxJQUFBLEVBQU0sRUFBTjtNQUNBLE1BQUEsRUFBWSxJQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBYixDQUFxQixDQUFyQixFQUF3QixDQUF4QixDQURaO01BRUEsU0FBQSxFQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BRmpDOztJQUlGLEdBQUEsR0FBVSxJQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBYixDQUFrQixHQUFJLENBQUEsQ0FBQSxDQUF0QixFQUEwQixJQUExQjtJQUVWLEdBQUcsQ0FBQyxPQUFKLEdBQWM7SUFDZCxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQUE7YUFDWixTQUFBLENBQVUsQ0FBQSxDQUFFLElBQUYsQ0FBVixFQUFtQixHQUFuQjtJQURZLENBQWQ7V0FHQSxTQUFBLENBQVUsR0FBVjtFQWRVOztFQWlCWixTQUFBLEdBQVksU0FBQyxPQUFELEVBQVUsR0FBVjtBQUNWLFFBQUE7SUFBQSxNQUFBLEdBQWEsSUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQWIsQ0FBcUIsT0FBTyxDQUFDLElBQVIsQ0FBYSxVQUFiLENBQXJCLEVBQStDLE9BQU8sQ0FBQyxJQUFSLENBQWEsVUFBYixDQUEvQztJQUViLE1BQUEsR0FBYSxJQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBYixDQUNYO01BQUEsUUFBQSxFQUFVLE1BQVY7TUFDQSxHQUFBLEVBQUssR0FETDtLQURXO0lBSWIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFaLENBQWlCLE1BQWpCO0lBRUEsSUFBRyxPQUFPLENBQUMsSUFBUixDQUFBLENBQUg7TUFDRSxVQUFBLEdBQWlCLElBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFiLENBQXlCO1FBQUEsT0FBQSxFQUFTLE9BQU8sQ0FBQyxJQUFSLENBQUEsQ0FBVDtPQUF6QjthQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFsQixDQUE4QixNQUE5QixFQUFzQyxPQUF0QyxFQUErQyxTQUFBO2VBQzdDLFVBQVUsQ0FBQyxJQUFYLENBQWdCLEdBQWhCLEVBQXFCLE1BQXJCO01BRDZDLENBQS9DLEVBRkY7O0VBVFU7O0VBZVosU0FBQSxHQUFZLFNBQUMsR0FBRDtBQUNWLFFBQUE7SUFBQSxNQUFBLEdBQVMsSUFBSyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBRTFCLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBRyxDQUFDLE9BQVgsRUFBb0IsU0FBQyxDQUFELEVBQUksTUFBSjtBQUNsQixVQUFBO01BQUEsTUFBQSxHQUFhLElBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFiLENBQXFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBaEIsQ0FBQSxDQUFyQixFQUE0QyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQWhCLENBQUEsQ0FBNUM7YUFDYixNQUFNLENBQUMsTUFBUCxDQUFjLE1BQWQ7SUFGa0IsQ0FBcEI7SUFJQSxJQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBWixLQUFzQixDQUF6QjtNQUNFLEdBQUcsQ0FBQyxTQUFKLENBQWMsTUFBTSxDQUFDLFNBQVAsQ0FBQSxDQUFkO2FBQ0EsR0FBRyxDQUFDLE9BQUosQ0FBWSxFQUFaLEVBRkY7S0FBQSxNQUFBO2FBSUUsR0FBRyxDQUFDLFNBQUosQ0FBYyxNQUFkLEVBSkY7O0VBUFU7Ozs7OztBQWVkLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDdERqQixJQUFBOztBQUFBLE9BQUEsQ0FBUSxXQUFSOztBQUNBLFFBQUEsR0FBVyxPQUFBLENBQVEsWUFBUjs7QUFFWCxNQUFBLEdBQVMsT0FBQSxDQUFRLFdBQVI7O0FBRVQsTUFBQSxHQUFTLE9BQUEsQ0FBUSx1QkFBUjs7QUFHSDtFQUVTLGtCQUFBO0lBQ1gsSUFBQyxDQUFBLE1BQUQsR0FBVSxNQUFNLENBQUMsR0FBUCxDQUFXLFVBQVg7SUFDVixJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxjQUFiLEVBQTZCLHlDQUE3QjtJQUVBLElBQUMsQ0FBQSxTQUFELEdBQWE7SUFDYixJQUFDLENBQUEsS0FBRCxHQUFTO0lBQ1QsSUFBQyxDQUFBLFNBQUQsR0FBYTtJQUNiLElBQUMsQ0FBQSxjQUFELENBQUE7SUFFQSxJQUFHLGdEQUFIO01BRUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFkLEdBQ0U7UUFBQSxRQUFBLEVBQVUsTUFBVjtRQUNBLE1BQUEsRUFBUSxvQkFEUjtRQUVBLE9BQUEsRUFBUyxRQUZUO1FBR0EsU0FBQSxFQUFXLElBQUMsQ0FBQSxLQUhaO1FBTUEsYUFBQSxFQUFlLElBQUMsQ0FBQSxTQU5oQjtRQU9BLHNCQUFBLEVBQXdCLEdBUHhCO1FBUUEsbUJBQUEsRUFBcUIsS0FSckI7UUFTQSxzQkFBQSxFQUF3QixLQVR4QjtRQVVBLHdCQUFBLEVBQTBCLEtBVjFCO1FBV0EscUJBQUEsRUFBdUIsS0FYdkI7UUFZQSx5QkFBQSxFQUEyQixLQVozQjtRQWFBLE1BQUEsRUFDRTtVQUFBLEdBQUEsRUFBSyxLQUFMO1NBZEY7O01BZ0JGLElBQUMsQ0FBQSxPQUFELENBQUE7TUFDQSxJQUFDLENBQUEsZ0JBQUQsQ0FBQTtNQUVBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsUUFBYixFQUF1QixRQUFBLENBQVMsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO2lCQUM5QixDQUFBLENBQUUsS0FBRixDQUFJLENBQUMsT0FBTCxDQUFhLG9CQUFiO1FBRDhCO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFULEVBRXJCLElBRnFCLENBQXZCLEVBdEJGO0tBQUEsTUFBQTtNQTJCRSxJQUFDLENBQUEsU0FBRCxHQUFhO01BQ2IsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsT0FBYixFQUFzQix3QkFBdEIsRUE1QkY7O0VBVFc7O3FCQXVDYixjQUFBLEdBQWdCLFNBQUE7V0FDZCxDQUFDLENBQUMsSUFBRixDQUNFO01BQUEsR0FBQSxFQUFLLG1CQUFMO01BQ0EsUUFBQSxFQUFVLFFBRFY7TUFFQSxPQUFBLEVBQVMsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO1VBQ1AsS0FBQyxDQUFBLGdCQUFELEdBQW9CO2lCQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWYsQ0FBcUIsU0FBckIsRUFBZ0MsVUFBaEMsRUFBNEMsT0FBNUM7UUFGTztNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FGVDtNQUtBLEtBQUEsRUFBTyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7VUFDTCxLQUFDLENBQUEsZ0JBQUQsR0FBb0I7aUJBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBZixDQUFxQixTQUFyQixFQUFnQyxVQUFoQyxFQUE0QyxNQUE1QztRQUZLO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUxQO0tBREY7RUFEYzs7cUJBV2hCLE9BQUEsR0FBUyxTQUFDLE1BQUQ7QUFDUCxRQUFBO0lBQUEsSUFBQyxDQUFBLEdBQUQsR0FBTztJQUNQLElBQUMsQ0FBQSxjQUFELElBQUMsQ0FBQSxZQUFjO0lBQ2YsSUFBRyxNQUFIO01BQ0UsYUFBQSxHQUFnQixDQUFDLENBQUMsR0FBRixDQUFNLE1BQU4sRUFBYyxTQUFDLEtBQUQ7ZUFDekIsS0FBRCxHQUFPO01BRG1CLENBQWQ7TUFFaEIsT0FBQSxHQUFVLENBQUEsQ0FBRSxhQUFhLENBQUMsSUFBZCxDQUFtQixHQUFuQixDQUFGLEVBSFo7S0FBQSxNQUFBO01BS0UsT0FBQSxHQUFVLENBQUEsQ0FBRSxZQUFGLEVBTFo7O0lBT0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxPQUFQLEVBQWdCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFELEVBQUksSUFBSjtBQUNkLFlBQUE7UUFBQSxNQUFBLEdBQWEsSUFBQSxNQUFBLENBQU8sSUFBUCxFQUFhO1VBQUEsUUFBQSxFQUFVLEtBQVY7U0FBYjtRQUNiLEtBQUMsQ0FBQSxHQUFHLENBQUMsSUFBTCxDQUFVLE1BQVY7UUFDQSxJQUEyQixNQUFNLENBQUMsTUFBUCxLQUFpQixJQUE1QztpQkFBQSxLQUFDLENBQUEsU0FBUyxDQUFDLElBQVgsQ0FBZ0IsTUFBaEIsRUFBQTs7TUFIYztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEI7V0FNQSxJQUFDLENBQUEsb0JBQUQsQ0FBQTtFQWhCTzs7cUJBa0JULG9CQUFBLEdBQXNCLFNBQUE7V0FDcEIsQ0FBQyxDQUFDLElBQUYsQ0FBTyxJQUFDLENBQUEsR0FBUixFQUFhLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFELEVBQUksRUFBSjtlQUNYLEVBQUUsQ0FBQyxjQUFILEdBQW9CLEtBQUMsQ0FBQSxHQUFHLENBQUMsTUFBTCxDQUFZLFNBQUMsT0FBRDtpQkFDOUIsT0FBTyxDQUFDLFFBQVIsS0FBb0IsRUFBRSxDQUFDLFFBQXZCLElBQW1DLE9BQUEsS0FBVztRQURoQixDQUFaO01BRFQ7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWI7RUFEb0I7O3FCQUt0QixPQUFBLEdBQVMsU0FBQTtXQUNQLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxDQUFBLEdBQUcsQ0FBQyxNQUFMLENBQVksSUFBQyxDQUFBLFNBQWIsQ0FBUCxFQUFnQyxTQUFDLENBQUQsRUFBSSxFQUFKO2FBQzlCLEVBQUUsQ0FBQyxTQUFILENBQUE7SUFEOEIsQ0FBaEM7RUFETzs7cUJBSVQsUUFBQSxHQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsT0FBQSxHQUFVO1dBQ1YsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEI7RUFGUTs7cUJBSVYsZ0JBQUEsR0FBa0IsU0FBQTtXQUNoQixDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsRUFBVixDQUFhLGtEQUFiLEVBQWlFLFFBQUEsQ0FBUyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7QUFDeEUsWUFBQTtRQUFBLE1BQUEsa0JBQVMsSUFBSSxDQUFFO1FBQ2YsS0FBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsbUJBQWIsRUFBa0MsQ0FBQyxDQUFDLElBQXBDLEVBQTBDLE1BQTFDO1FBRUEsS0FBQyxDQUFBLE9BQUQsQ0FBUyxNQUFUO2VBQ0EsS0FBQyxDQUFBLE9BQUQsQ0FBQTtNQUx3RTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBVCxFQU0vRCxJQU4rRCxDQUFqRTtFQURnQjs7Ozs7O0FBWXBCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDdkdqQixJQUFBOztBQUFNO0VBRVMsc0JBQUMsSUFBRDtJQUFDLElBQUMsQ0FBQSxPQUFEO0lBQ1osSUFBQyxDQUFBLElBQUQsR0FBYyxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxPQUFYO0lBQ2QsSUFBQyxDQUFBLEtBQUQsR0FBYyxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxVQUFYO0lBQ2QsSUFBQyxDQUFBLE1BQUQsR0FBYyxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxXQUFYO0lBQ2QsSUFBQyxDQUFBLFFBQUQsR0FBYyxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxjQUFYLENBQUEsSUFBOEIsQ0FBQztJQUM3QyxJQUFDLENBQUEsUUFBRCxHQUFjLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLGFBQVgsQ0FBQSxJQUE2QjtJQUMzQyxJQUFDLENBQUEsRUFBRCxHQUFjLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLE9BQVgsQ0FBQSxJQUF1QjtFQU4xQjs7eUJBU2IsU0FBQSxHQUFXLFNBQUE7V0FDVCxJQUFDLENBQUEsSUFBRCxDQUFBO0VBRFM7O3lCQUlYLElBQUEsR0FBTSxTQUFBO0lBQ0osSUFBQyxDQUFBLEtBQUQsQ0FBQTtXQUNBLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLElBQUMsQ0FBQSxNQUFELENBQUEsQ0FBWDtFQUZJOzt5QkFLTixLQUFBLEdBQU8sU0FBQTtXQUNMLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLEVBQVg7RUFESzs7eUJBR1AsTUFBQSxHQUFRLFNBQUE7V0FFTixDQUFBLENBQUUsbUJBQUYsQ0FBc0IsQ0FBQyxJQUF2QixDQUNFO01BQUEsS0FBQSxFQUFPLElBQUMsQ0FBQSxLQUFSO01BQ0EsTUFBQSxFQUFRLElBQUMsQ0FBQSxNQURUO01BRUEsU0FBQSxFQUFXLElBRlg7TUFHQSxXQUFBLEVBQWEsQ0FIYjtNQUlBLFlBQUEsRUFBYyxDQUpkO01BS0EsV0FBQSxFQUFhLENBTGI7TUFNQSxHQUFBLEVBQUssZ0RBQUEsR0FBaUQsSUFBQyxDQUFBLElBQWxELEdBQXVELEtBQXZELEdBQTRELElBQUMsQ0FBQSxRQUE3RCxHQUFzRSw0QkFBdEUsR0FBaUcsQ0FBQyxJQUFDLENBQUEsSUFBRCxDQUFBLENBQUQsQ0FBakcsR0FBMEcsR0FBMUcsR0FBNEcsQ0FBQyxJQUFDLENBQUEsR0FBRCxDQUFBLENBQUQsQ0FOakg7S0FERjtFQUZNOzt5QkFhUixJQUFBLEdBQU0sU0FBQTtXQUNKLElBQUMsQ0FBQSxRQUFRLENBQUMsSUFBVixDQUFlLEdBQWY7RUFESTs7eUJBSU4sR0FBQSxHQUFLLFNBQUE7V0FDSCxDQUFDLENBQUMsR0FBRixDQUFNLElBQUMsQ0FBQSxFQUFQLEVBQVcsU0FBQyxDQUFELEVBQUcsQ0FBSDthQUNULElBQUEsR0FBSyxDQUFMLEdBQU8sR0FBUCxHQUFVO0lBREQsQ0FBWCxDQUVDLENBQUMsSUFGRixDQUVPLEdBRlA7RUFERzs7Ozs7O0FBS1AsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUM3Q2pCLElBQUEsNkRBQUE7RUFBQTs7QUFBQSxPQUFBLENBQVEsV0FBUjs7QUFDQSxNQUFBLEdBQVMsT0FBQSxDQUFRLFdBQVI7O0FBQ1QsSUFBQSxHQUFPLE9BQUEsQ0FBUSxXQUFSOztBQUNQLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUjs7QUFFVixpQkFBQSxHQUFvQixPQUFBLENBQVEseUNBQVI7O0FBQ3BCLFdBQUEsR0FBYyxPQUFBLENBQVEsa0NBQVI7O0FBR1I7QUFLSixNQUFBOztFQUFBLFFBQUEsR0FDRTtJQUFBLGVBQUEsRUFBaUIsQ0FBakI7SUFDQSxnQkFBQSxFQUFrQixJQURsQjs7O0VBY1csZ0JBQUMsSUFBRCxFQUFRLE9BQVI7SUFBQyxJQUFDLENBQUEsT0FBRDs7Ozs7SUFDWixJQUFDLENBQUEsTUFBRCxHQUFVLE1BQU0sQ0FBQyxHQUFQLENBQVcsUUFBWDtJQUVWLElBQUMsQ0FBQSxPQUFELEdBQVcsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxRQUFULEVBQW1CLE9BQW5CO0lBRVgsSUFBQyxDQUFBLElBQUQsR0FBUSxDQUFBLENBQUUsSUFBQyxDQUFBLElBQUg7SUFDUixJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxTQUFYLEVBQXNCLElBQXRCO0lBQ0EsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsSUFBSSxDQUFDLEdBQU4sQ0FBVSxDQUFWO0lBRVgsSUFBQyxDQUFBLGlCQUFELEdBQXlCLElBQUEsaUJBQUEsQ0FBQTtJQUd6QixJQUFDLENBQUEsUUFBRCxHQUFZLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFDckIsSUFBQyxDQUFBLFNBQUQsR0FBYSxJQUFDLENBQUEsUUFBUSxDQUFDO0lBQ3ZCLElBQUMsQ0FBQSxFQUFELEdBQU0sSUFBQyxDQUFBLE9BQU8sQ0FBQyxFQUFULElBQWUsSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQVcsT0FBWDtJQUNyQixJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFBVCxJQUFtQixJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxXQUFYO0lBQzdCLElBQUMsQ0FBQSxJQUFELEdBQVEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULElBQWlCLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLFNBQVg7SUFDekIsSUFBQyxDQUFBLElBQUQsR0FBUSxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsSUFBaUIsSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQVcsU0FBWDtJQUN6QixJQUFDLENBQUEsUUFBRCxHQUFZLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxJQUFxQixJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxhQUFYLENBQXJCLElBQWtEO0lBQzlELElBQUMsQ0FBQSxRQUFELEdBQVksSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFULElBQXFCLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLGFBQVg7SUFDakMsSUFBQyxDQUFBLEVBQUQsR0FBTSxJQUFDLENBQUEsT0FBTyxDQUFDLEVBQVQsSUFBZSxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxPQUFYO0lBQ3JCLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLE9BQU8sQ0FBQyxNQUFULElBQW1CLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLFdBQVg7SUFDN0IsSUFBQyxDQUFBLGNBQUQsR0FBa0IsSUFBQyxDQUFBLE9BQU8sQ0FBQyxjQUFULElBQTJCO0lBRzdDLElBQUMsQ0FBQSxRQUFELEdBQVksTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFDLENBQUEsUUFBYixDQUFzQixDQUFDLEdBQXZCLENBQTJCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxHQUFEO2VBQVMsS0FBQyxDQUFBLFFBQVMsQ0FBQSxHQUFBO01BQW5CO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEzQjtJQUVaLElBQUMsQ0FBQSxVQUFELENBQUE7SUFFQSxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxTQUFYLEVBQXNCLElBQXRCO0lBRUEsSUFBQyxDQUFBLGNBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxZQUFELENBQUE7RUFoQ1c7O21CQW1DYixTQUFBLEdBQVcsU0FBQTtJQUVULElBQUMsQ0FBQSxRQUFELEdBQWdCLElBQUEsSUFBQSxDQUFBLENBQU0sQ0FBQyxPQUFQLENBQUE7SUFDaEIsSUFBQyxDQUFBLE1BQUQsR0FBVSxnQkFBQSxHQUFpQixJQUFDLENBQUEsSUFBbEIsR0FBdUIsR0FBdkIsR0FBMEIsSUFBQyxDQUFBLFFBQTNCLEdBQW9DLEdBQXBDLEdBQXVDLElBQUMsQ0FBQTtXQUNsRCxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxJQUFYLEVBQWlCLElBQUMsQ0FBQSxNQUFsQjtFQUpTOzttQkFPWCxVQUFBLEdBQVksU0FBQTtJQUNWLElBQUMsQ0FBQSxTQUFELENBQUE7SUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxjQUFBLEdBQWUsSUFBQyxDQUFBLE1BQTdCO0lBRUEsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUNYLElBQUMsQ0FBQSxNQUFELEdBQVU7V0FDVixJQUFDLENBQUEsTUFBRCxHQUFVO0VBTkE7O21CQVVaLFNBQUEsR0FBVyxTQUFBO0FBQ1QsV0FBVyxJQUFBLE9BQUEsQ0FBUSxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsT0FBRDtBQUNqQixZQUFBO1FBQUEsSUFBRyxLQUFDLENBQUEsTUFBSjtVQUNFLFdBQUcsS0FBQyxDQUFBLGlCQUFpQixDQUFDLFFBQW5CLENBQUEsRUFBQSxLQUFrQyxPQUFsQyxJQUFBLEdBQUEsS0FBMEMsUUFBN0M7WUFDRSxXQUFBLEdBQWtCLElBQUEsV0FBQSxDQUFBO21CQUNsQixXQUFXLENBQUMsZ0JBQVosQ0FBQSxDQUE4QixDQUFDLElBQS9CLENBQW9DLFNBQUMsS0FBRDtjQUNsQyxJQUFHLENBQUMsQ0FBQyxRQUFGLENBQVcsUUFBUSxDQUFDLGVBQXBCLEVBQXFDLEtBQUMsQ0FBQSxJQUFLLENBQUEsQ0FBQSxDQUEzQyxDQUFIO2dCQUNDLEtBQUMsQ0FBQSxJQUFJLENBQUMsTUFBTixDQUFBLEVBREQ7O2NBR0EsSUFBRyxLQUFBLEtBQVMsTUFBWjtnQkFDRSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxLQUFyQixDQUEyQixLQUFDLENBQUEsSUFBNUIsRUFERjtlQUFBLE1BQUE7Z0JBR0UsQ0FBQSxDQUFFLEtBQUYsQ0FBUSxDQUFDLEtBQVQsQ0FBZSxLQUFDLENBQUEsSUFBaEIsRUFIRjs7cUJBS0EsT0FBQSxDQUFBO1lBVGtDLENBQXBDLEVBRkY7V0FERjtTQUFBLE1BQUE7aUJBY0UsT0FBQSxDQUFBLEVBZEY7O01BRGlCO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFSO0VBREY7O21CQWtCWCxRQUFBLEdBQVUsU0FBQTtXQUNSLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLFNBQUQsQ0FBQSxDQUFaO0VBRFE7O21CQUlWLFNBQUEsR0FBVyxTQUFDLENBQUQ7V0FDVCxJQUFDLENBQUEsUUFBRCxDQUFBLENBQVcsQ0FBQyxJQUFaLENBQWlCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtRQUNmLElBQVUsS0FBQyxDQUFBLE9BQUQsSUFBWSxLQUFDLENBQUEsTUFBdkI7QUFBQSxpQkFBQTs7UUFDQSxpQkFBa0IsQ0FBQyxDQUFFLG1CQUFILEtBQWdCLElBQWxDO0FBQUEsaUJBQU8sS0FBQyxDQUFBLElBQUQsQ0FBQSxFQUFQOztRQUNBLElBQUEsQ0FBc0IsS0FBQyxDQUFBLE9BQU8sQ0FBQyxnQkFBL0I7QUFBQSxpQkFBTyxLQUFDLENBQUEsSUFBRCxDQUFBLEVBQVA7O1FBQ0EsSUFBRyxLQUFDLENBQUEsT0FBRCxDQUFBLENBQUg7VUFDRSxLQUFDLENBQUEsSUFBRCxDQUFBO2lCQUdBLENBQUMsQ0FBQyxJQUFGLENBQU8sS0FBQyxDQUFBLGNBQVIsRUFBd0IsU0FBQyxDQUFELEVBQUksRUFBSjtZQUN0QixLQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxZQUFiLEVBQThCLEtBQUMsQ0FBQSxNQUFGLEdBQVMsa0NBQVQsR0FBMkMsRUFBRSxDQUFDLE1BQTNFO1lBQ0EsSUFBcUMsRUFBQSxLQUFNLEtBQTNDO3FCQUFBLEVBQUUsQ0FBQyxTQUFILENBQWE7Z0JBQUEsU0FBQSxFQUFXLElBQVg7ZUFBYixFQUFBOztVQUZzQixDQUF4QixFQUpGOztNQUplO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFqQjtFQURTOzttQkFjWCxJQUFBLEdBQU0sU0FBQTtBQUNKLFFBQUE7SUFBQSxJQUFDLENBQUEsT0FBRCxHQUFXO0lBQ1gsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLEdBQUwsQ0FBUyxrQkFBVDtJQUVBLE9BQUEsR0FDRTtNQUFBLFNBQUEsRUFBVyxJQUFDLENBQUEsRUFBWjtNQUNBLGFBQUEsRUFBZSxJQUFDLENBQUEsTUFEaEI7TUFFQSxRQUFBLEVBQVUsSUFBQyxDQUFBLGNBRlg7TUFHQSxLQUFBLEVBQU8sSUFBQyxDQUFBLFdBSFI7TUFJQSxFQUFBLEVBQUksSUFBQyxDQUFBLEVBSkw7TUFLQSxNQUFBLEVBQ0U7UUFBQSxHQUFBLEVBQUssSUFBQyxDQUFBLFFBQVEsQ0FBQyxJQUFWLENBQWUsR0FBZixDQUFMO1FBQ0EsTUFBQSxFQUFRLFFBRFI7T0FORjs7SUFTRixJQUFDLENBQUEsSUFBSSxDQUFDLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLElBQUMsQ0FBQSxJQUFJLENBQUMsTUFBTixDQUFBLENBQXhCO0lBRUEsSUFBRyxJQUFDLENBQUEsU0FBSjtNQUNFLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE9BQWpCO2FBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsT0FBYixFQUFzQixZQUF0QixFQUFvQyxJQUFDLENBQUEsTUFBckMsRUFGRjtLQUFBLE1BQUE7YUFJRSxNQUFNLENBQUMsTUFBUCxDQUFjLE9BQWQsRUFKRjs7RUFoQkk7O21CQXNCTixjQUFBLEdBQWdCLFNBQUE7SUFDZCxJQUFDLENBQUEsT0FBRCxHQUFXO0lBQ1gsSUFBQyxDQUFBLE1BQUQsR0FBVTtJQUNWLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLGlCQUFiLEVBQWdDLG1CQUFoQyxFQUFxRCxJQUFDLENBQUEsTUFBdEQ7SUFDQSxDQUFBLENBQUUsSUFBQyxDQUFBLElBQUgsQ0FBUSxDQUFDLEdBQVQsQ0FBYTtNQUFBLFlBQUEsRUFBYyxFQUFkO0tBQWI7SUFDQSxJQUFHLElBQUMsQ0FBQSxXQUFELENBQUEsQ0FBSDthQUNFLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxDQUFhLElBQUMsQ0FBQSxPQUFPLENBQUMsZUFBdEIsRUFERjs7RUFMYzs7bUJBUWhCLFdBQUEsR0FBYSxTQUFBO0lBQ1gsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUNYLElBQUMsQ0FBQSxNQUFELEdBQVU7SUFDVixJQUFDLENBQUEsTUFBRCxHQUFVO0lBQ1YsQ0FBQSxDQUFFLElBQUMsQ0FBQSxJQUFILENBQVEsQ0FBQyxHQUFULENBQWE7TUFBQSxZQUFBLEVBQWMsRUFBZDtLQUFiO1dBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsY0FBYixFQUE2QixnQkFBN0IsRUFBK0MsSUFBQyxDQUFBLE1BQWhEO0VBTFc7O21CQVFiLE9BQUEsR0FBUyxTQUFBO0FBQ1AsUUFBQTtJQUFBLElBQUEsR0FBTyxJQUFDLENBQUEsT0FBTyxDQUFDLHFCQUFULENBQUE7V0FDUCxJQUFJLENBQUMsR0FBTCxJQUFZLENBQVosSUFDQSxJQUFJLENBQUMsSUFBTCxJQUFhLENBRGIsSUFFQSxDQUFDLElBQUksQ0FBQyxHQUFMLEdBQVcsRUFBWixDQUFBLElBQW1CLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQUEsQ0FGbkIsSUFHQSxDQUFDLElBQUksQ0FBQyxJQUFMLEdBQVksRUFBYixDQUFBLElBQW9CLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxLQUFWLENBQUE7RUFMYjs7bUJBVVQsZ0JBQUEsR0FBa0IsU0FBQTtJQUNoQixJQUFHLElBQUMsQ0FBQSxXQUFELENBQUEsQ0FBSDthQUNFLElBQUMsQ0FBQSxLQUFELEdBQWEsSUFBQSxJQUFBLENBQ1g7UUFBQSxRQUFBLEVBQVUsSUFBQyxDQUFBLE9BQU8sQ0FBQyxlQUFuQjtRQUNBLFNBQUEsRUFBVyxJQURYO1FBRUEsUUFBQSxFQUFVLElBQUMsQ0FBQSxPQUZYO09BRFcsRUFEZjs7RUFEZ0I7O21CQVFsQixPQUFBLEdBQVMsU0FBQTtJQUNQLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxDQUFBO0lBQ0EsSUFBVyxJQUFDLENBQUEsTUFBRCxJQUFZLElBQUMsQ0FBQSxRQUFELENBQUEsQ0FBWixJQUE0QixJQUFDLENBQUEsZUFBRCxDQUFBLENBQXZDO2FBQUEsSUFBQyxDQUFBLElBQUQsQ0FBQSxFQUFBOztFQUZPOzttQkFLVCxXQUFBLEdBQWEsU0FBQTtXQUNYLElBQUMsQ0FBQSxPQUFPLENBQUMsZUFBVCxJQUE0QjtFQURqQjs7bUJBSWIsZUFBQSxHQUFpQixTQUFBO1dBQ2Y7RUFEZTs7bUJBR2pCLFlBQUEsR0FBYyxTQUFBO0lBQ1osSUFBRyxJQUFDLENBQUEsT0FBTyxDQUFDLGdCQUFULElBQThCLHVCQUFqQztNQUdFLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxFQUFMLENBQVEsa0JBQVIsRUFBNEIsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFDLENBQUQsRUFBSSxJQUFKO2lCQUMxQixLQUFDLENBQUEsU0FBRCxDQUFXLENBQVg7UUFEMEI7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTVCO2FBR0EsQ0FBQSxDQUFFLElBQUMsQ0FBQSxRQUFILENBQVksQ0FBQyxFQUFiLENBQWdCLG9CQUFoQixFQUFzQyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7aUJBQ3BDLENBQUEsQ0FBRSxLQUFGLENBQUksQ0FBQyxPQUFMLENBQWEsa0JBQWIsRUFBaUMsSUFBakM7UUFEb0M7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXRDLEVBTkY7O0VBRFk7O21CQVlkLGNBQUEsR0FBZ0IsU0FBQTtXQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVyxDQUFBLElBQUMsQ0FBQSxFQUFELENBQXpCLEdBQ0U7TUFBQSxVQUFBLEVBQ0U7UUFBQSxhQUFBLEVBQWUsSUFBZjtRQUNBLE1BQUEsRUFBUSxJQUFDLENBQUEsTUFEVDtPQURGOztFQUZZOzs7Ozs7QUFNbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUMzTWpCLElBQUE7O0FBQUEsVUFBQSxHQUFhLE9BQUEsQ0FBUSxxQkFBUjs7QUFFUDtFQUNTLGVBQUMsTUFBRCxFQUFVLFVBQVY7QUFDWCxRQUFBO0lBRFksSUFBQyxDQUFBLFNBQUQ7SUFBUyxJQUFDLENBQUEsYUFBRDtJQUNyQixJQUFDLENBQUEsY0FBRCxHQUFrQjtJQUNsQixPQUFBLEdBQVUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBQyxDQUFBLE1BQXhCO0lBQ1YsSUFBYyxlQUFkO0FBQUEsYUFBQTs7SUFDQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBQyxDQUFBLE1BQXhCLENBQStCLENBQUM7SUFDcEQsSUFBQyxDQUFBLFdBQUQsR0FBZSxRQUFRLENBQUMsYUFBVCxDQUEwQixJQUFDLENBQUEsTUFBRixHQUFTLFlBQWxDO0lBQ2YsSUFBQyxDQUFBLFdBQUQsQ0FBQTtFQU5XOztrQkFRYixVQUFBLEdBQVksU0FBQTtXQUNWLElBQUMsQ0FBQSxXQUFXLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7UUFDckMsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtRQUNBLEtBQUMsQ0FBQSxnQkFBZ0IsQ0FBQyxNQUFsQixDQUF5QixLQUFDLENBQUEsY0FBMUI7ZUFDQSxLQUFDLENBQUEsY0FBRCxDQUFBO01BSHFDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF2QztFQURVOztrQkFNWixXQUFBLEdBQWEsU0FBQTtJQUNYLElBQUEsQ0FBTyxJQUFDLENBQUEsWUFBRCxDQUFBLENBQVA7TUFDRSxJQUFDLENBQUEsZ0JBQWdCLENBQUMsTUFBbEIsQ0FBeUIsSUFBQyxDQUFBLGNBQTFCO2FBQ0EsSUFBQyxDQUFBLFVBQUQsQ0FBQSxFQUZGOztFQURXOztrQkFLYixjQUFBLEdBQWdCLFNBQUE7QUFDZCxRQUFBO0lBQUEsSUFBYyx1QkFBZDtBQUFBLGFBQUE7O0lBQ0EsT0FBQSxHQUFjLElBQUEsSUFBQSxDQUFBO0lBQ2QsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsT0FBTyxDQUFDLE9BQVIsQ0FBQSxDQUFBLEdBQW9CLEdBQXBDO1dBQ0EsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsSUFBQyxDQUFBLFVBQXBCLEVBQWdDLElBQWhDLEVBQXNDLE9BQXRDLEVBQStDLEdBQS9DO0VBSmM7O2tCQU1oQixZQUFBLEdBQWMsU0FBQTtJQUNaLElBQW9CLHVCQUFwQjtBQUFBLGFBQU8sTUFBUDs7SUFDQSxJQUFHLDJDQUFIO2FBQ0UsS0FERjtLQUFBLE1BQUE7YUFHRSxNQUhGOztFQUZZOzs7Ozs7QUFPaEIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNuQ2pCLElBQUEsa0NBQUE7RUFBQTs7QUFBQSxNQUFBLEdBQVMsT0FBQSxDQUFRLFdBQVI7O0FBQ1QsUUFBQSxHQUFXLE9BQUEsQ0FBUSxZQUFSOztBQUVMO0VBRVMsMEJBQUE7O0lBQ1gsSUFBQyxDQUFBLE1BQUQsR0FBVSxNQUFNLENBQUMsR0FBUCxDQUFXLGFBQVg7SUFFVixJQUFDLENBQUEsTUFBRCxHQUFVO0lBQ1YsSUFBQyxDQUFBLFdBQUQsR0FBZSxDQUFBLENBQUUsaUJBQUY7SUFDZixJQUFDLENBQUEsUUFBRCxHQUFZO0lBQ1osSUFBQyxDQUFBLFFBQUQsR0FBWTtJQUVaLElBQUMsQ0FBQSxpQkFBRCxHQUFxQixRQUFBLENBQVMsSUFBQyxDQUFBLFFBQVYsRUFBb0IsR0FBcEI7SUFFckIsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCO01BQUUsTUFBQSxFQUFRLElBQUMsQ0FBQSxXQUFYO0tBQXZCLEVBQWlELElBQUMsQ0FBQSxpQkFBbEQ7RUFWVzs7NkJBYWIsUUFBQSxHQUFVLFNBQUMsS0FBRDtBQUNSLFFBQUE7SUFBQSxNQUFBLEdBQVMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNwQixJQUFHLE1BQU0sQ0FBQyxNQUFWO01BQ0UsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsVUFBYjtNQUNBLEdBQUEsR0FBTSxNQUFNLENBQUMsTUFBUCxDQUFBLENBQWUsQ0FBQztNQUN0QixTQUFBLEdBQVk7TUFDWixZQUFBLEdBQWUsTUFBTSxDQUFDLFdBQVAsR0FBcUIsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBQTtNQUVwQyxJQUFHLFlBQUEsR0FBZSxDQUFDLEdBQUEsR0FBTSxTQUFQLENBQWxCO1FBQ0UsSUFBRyxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFuQjtVQUNFLElBQUMsQ0FBQSxRQUFELENBQUE7VUFFQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxVQUFiLEVBQXlCLHVCQUF6QjtpQkFFQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsR0FBVixDQUFjLFFBQWQsRUFBd0IsSUFBQyxDQUFBLGlCQUF6QixFQUxGO1NBREY7T0FORjs7RUFGUTs7NkJBaUJWLFFBQUEsR0FBVSxTQUFBO0lBQ1IsSUFBQyxDQUFBLFFBQUQsR0FBWSxJQUFDLENBQUEsV0FBVyxDQUFDLElBQWIsQ0FBa0IsVUFBbEI7SUFDWixJQUFDLENBQUEsSUFBRCxHQUFRLElBQUMsQ0FBQSxXQUFXLENBQUMsSUFBYixDQUFrQixNQUFsQixDQUFBLElBQTZCO0lBRXJDLElBQUcsSUFBQyxDQUFBLFFBQUo7TUFDRSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxRQUFyQixDQUE4Qix3QkFBOUI7YUFDQSxDQUFDLENBQUMsSUFBRixDQUNFO1FBQUEsR0FBQSxFQUFRLElBQUMsQ0FBQSxNQUFGLEdBQVMsWUFBVCxHQUFxQixJQUFDLENBQUEsUUFBdEIsR0FBK0IsUUFBL0IsR0FBdUMsSUFBQyxDQUFBLElBQS9DO1FBQ0EsT0FBQSxFQUFTLENBQUEsU0FBQSxLQUFBO2lCQUFBLFNBQUMsS0FBRDtZQUNQLEtBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFVBQWIsRUFBeUIsU0FBekI7WUFDQSxJQUF1QixLQUF2QjtxQkFBQSxLQUFDLENBQUEsV0FBRCxDQUFhLEtBQWIsRUFBQTs7VUFGTztRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FEVDtPQURGLEVBRkY7O0VBSlE7OzZCQWFWLFdBQUEsR0FBYSxTQUFDLEtBQUQ7SUFDWCxDQUFBLENBQUUsS0FBRixDQUFRLENBQUMsWUFBVCxDQUFzQixJQUFDLENBQUEsV0FBdkI7SUFDQSxRQUFRLENBQUMsT0FBVCxDQUFpQixDQUFDLDJCQUFELENBQWpCO0lBQ0EsQ0FBQSxDQUFFLDJCQUFGLENBQThCLENBQUMsSUFBL0IsQ0FBQTtJQUVBLFVBQUEsQ0FBWSxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7UUFDVixDQUFBLENBQUUsMkJBQUYsQ0FBOEIsQ0FBQyxJQUEvQixDQUFBO1FBR0EsSUFBRyxLQUFDLENBQUEsSUFBRCxHQUFRLEtBQUMsQ0FBQSxRQUFULElBQXFCLENBQUEsQ0FBRSxLQUFGLENBQVEsQ0FBQyxJQUFULENBQWMsWUFBZCxDQUFBLEtBQStCLENBQXZEO1VBQ0UsS0FBQyxDQUFBLFdBQVcsQ0FBQyxXQUFiLENBQXlCLEtBQUMsQ0FBQSxXQUFXLENBQUMsS0FBYixDQUFBLENBQW9CLENBQUMsSUFBckIsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBQyxDQUFBLElBQUQsR0FBTSxDQUE3QyxDQUErQyxDQUFDLFdBQWhELENBQTRELHdCQUE1RCxDQUF6QixFQURGO1NBQUEsTUFBQTtVQUdFLEtBQUMsQ0FBQSxXQUFXLENBQUMsTUFBYixDQUFBO1VBQ0EsQ0FBQSxDQUFFLHdCQUFGLENBQTJCLENBQUMsR0FBNUIsQ0FBZ0MsU0FBaEMsRUFBMkMsY0FBM0MsRUFKRjs7UUFLQSxLQUFDLENBQUEsV0FBRCxHQUFlLENBQUEsQ0FBRSxpQkFBRjtlQUNmLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsUUFBYixFQUF1QjtVQUFFLE1BQUEsRUFBUSxLQUFDLENBQUEsV0FBWDtTQUF2QixFQUFpRCxLQUFDLENBQUEsaUJBQWxEO01BVlU7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVosRUFXRSxHQVhGO1dBWUEsT0FBTyxDQUFDLGFBQVIsQ0FBc0IsUUFBUSxDQUFDLFFBQVQsR0FBb0IsQ0FBQSxlQUFBLEdBQWdCLElBQUMsQ0FBQSxJQUFqQixDQUExQztFQWpCVzs7Ozs7O0FBbUJmLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDbEVqQixJQUFBOztBQUFNO0VBRVMsbUJBQUE7SUFDWCxJQUFDLENBQUEsSUFBRCxHQUFRLENBQUEsQ0FBRSxZQUFGO0lBQ1IsSUFBQyxDQUFBLFNBQUQsQ0FBQTtFQUZXOztzQkFLYixTQUFBLEdBQVcsU0FBQTtXQUNULENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxFQUFoQixDQUFtQixPQUFuQixFQUE0QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtBQUMxQixZQUFBO1FBQUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtRQUNBLEVBQUEsR0FBSyxDQUFDLENBQUM7UUFDUCxRQUFBLEdBQVcsQ0FBQSxDQUFFLEVBQUYsQ0FBSyxDQUFDLElBQU4sQ0FBVyxNQUFYO2VBRVgsS0FBQyxDQUFBLElBQUksQ0FBQyxPQUFOLENBQ0U7VUFBQSxTQUFBLEVBQVcsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLE1BQVosQ0FBQSxDQUFvQixDQUFDLEdBQWhDO1NBREYsRUFDdUMsR0FEdkM7TUFMMEI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTVCO0VBRFM7Ozs7OztBQVdiLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDbkJqQixJQUFBLGdDQUFBO0VBQUE7O0FBQUEsVUFBQSxHQUFhLE9BQUEsQ0FBUSxxQkFBUjs7QUFDYixNQUFBLEdBQVMsT0FBQSxDQUFRLFdBQVI7O0FBR0g7RUFFUyxzQkFBQTs7OztJQUNYLElBQUMsQ0FBQSxNQUFELEdBQVUsTUFBTSxDQUFDLEdBQVAsQ0FBVyxjQUFYO0lBQ1YsSUFBQyxDQUFBLEtBQUQsQ0FBQTtJQUVBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsMkJBQWIsRUFBMEMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQsRUFBRyxJQUFIO1FBQ3hDLEtBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLGtDQUFiO2VBQ0EsS0FBQyxDQUFBLEtBQUQsQ0FBQTtNQUZ3QztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUM7RUFKVzs7eUJBUWIsS0FBQSxHQUFPLFNBQUE7SUFDTCxJQUFDLENBQUEsZ0JBQUQsQ0FBQTtJQUNBLElBQUEsQ0FBb0IsSUFBQyxDQUFBLFlBQVksQ0FBQyxNQUFsQztBQUFBLGFBQU8sTUFBUDs7SUFDQSxJQUFDLENBQUEsbUJBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxhQUFELENBQUE7V0FDQSxJQUFDLENBQUEsV0FBRCxDQUFBO0VBTEs7O3lCQU9QLGdCQUFBLEdBQWtCLFNBQUE7V0FDaEIsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsQ0FBQSxDQUFFLG9CQUFGO0VBREE7O3lCQUdsQixtQkFBQSxHQUFxQixTQUFBO1dBQ25CLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBdEIsQ0FBNkIsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7QUFDM0IsWUFBQTtRQUFBLElBQUEsQ0FBYyxDQUFDLENBQUMsSUFBaEI7QUFBQSxpQkFBQTs7UUFDQSxJQUFVLEtBQUMsQ0FBQSxZQUFELENBQWMsQ0FBQyxDQUFDLElBQWhCLENBQVY7QUFBQSxpQkFBQTs7UUFDQSxJQUFBLEdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFDLENBQUMsSUFBYjtlQUNQLEtBQUMsQ0FBQSxZQUFZLENBQUMsTUFBZCxDQUFxQixnQkFBQSxHQUFtQixJQUFJLENBQUMsT0FBeEIsR0FBa0MsY0FBbEMsR0FBbUQsSUFBSSxDQUFDLElBQXhELEdBQStELEdBQXBGLENBQXdGLENBQUMsSUFBekYsQ0FBOEYsUUFBOUYsQ0FBdUcsQ0FBQyxNQUF4RyxDQUErRyxRQUFBLENBQVMsSUFBSSxDQUFDLE1BQWQsQ0FBL0c7TUFKMkI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTdCO0VBRG1COzt5QkFPckIsWUFBQSxHQUFjLFNBQUMsSUFBRDtXQUNaLElBQUksQ0FBQyxRQUFMLENBQUEsQ0FBZSxDQUFDLE9BQWhCLENBQXdCLGVBQXhCLENBQUEsS0FBNEMsQ0FBQztFQURqQzs7eUJBR2QsYUFBQSxHQUFlLFNBQUE7V0FDYixJQUFDLENBQUEsWUFBWSxDQUFDLElBQWQsQ0FBbUIsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQsRUFBSSxFQUFKO0FBQ2pCLFlBQUE7UUFBQSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUY7UUFFTCxJQUFHLEtBQUMsQ0FBQSx1QkFBRCxDQUF5QixFQUFFLENBQUMsSUFBSCxDQUFRLFNBQVIsQ0FBekIsQ0FBQSxJQUFpRCxFQUFFLENBQUMsSUFBSCxDQUFRLE1BQVIsQ0FBQSxLQUFtQixRQUF2RTtVQUNFLEVBQUUsQ0FBQyxPQUFILENBQVcsU0FBWCxDQUFxQixDQUFDLE1BQXRCLENBQUEsRUFERjs7UUFHQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLG1CQUFGO1FBQ1QsR0FBQSxHQUFNLEVBQUUsQ0FBQyxJQUFILENBQVEsS0FBUjtRQUNOLE1BQU0sQ0FBQyxJQUFQLENBQ0U7VUFBQSxHQUFBLEVBQUssR0FBTDtVQUNBLFdBQUEsRUFBYSxDQURiO1VBRUEsS0FBQSxFQUFPLEVBQUUsQ0FBQyxLQUFILENBQUEsQ0FGUDtVQUdBLFFBQUEsRUFBVSxJQUhWO1NBREY7ZUFNQSxFQUFFLENBQUMsUUFBSCxDQUFZLFdBQVosQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixFQUE5QixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLE1BQXpDO01BZGlCO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFuQjtFQURhOzt5QkFpQmYsdUJBQUEsR0FBeUIsU0FBQyxFQUFEO0FBQ3ZCLFFBQUE7SUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLElBQVYsQ0FBZSxXQUFmLENBQUEsR0FBOEIsZUFBOUIsR0FBZ0Q7SUFFekQsSUFBRyxrQ0FBSDthQUNFLEtBREY7S0FBQSxNQUFBO2FBR0UsTUFIRjs7RUFIdUI7O3lCQVF6QixXQUFBLEdBQWEsU0FBQTtXQUNYLENBQUEsQ0FBRSxpQ0FBRixDQUFvQyxDQUFDLEVBQXJDLENBQXdDLFFBQXhDLEVBQWtELFNBQUMsQ0FBRDthQUNoRCxLQUFBLENBQU0sb0JBQU4sRUFBNEIsV0FBNUI7SUFEZ0QsQ0FBbEQ7RUFEVzs7Ozs7O0FBTWYsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNqRWpCLElBQUE7O0FBQUEsT0FBQSxDQUFRLFlBQVI7O0FBR007RUFFUyx1QkFBQTtJQUNYLElBQUMsQ0FBQSxjQUFELEdBQWtCLENBQUEsQ0FBRSxpQkFBRjtJQUNsQixJQUFDLENBQUEsVUFBRCxHQUFjO0lBQ2QsSUFBRyxJQUFDLENBQUEsY0FBYyxDQUFDLE1BQWhCLEdBQXlCLENBQTVCO01BQ0UsQ0FBQyxDQUFDLElBQUYsQ0FBTyxJQUFDLENBQUEsY0FBUixFQUF3QixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsQ0FBRCxFQUFJLE1BQUo7aUJBQ3RCLEtBQUMsQ0FBQSxXQUFELENBQWEsQ0FBYixFQUFlLE1BQWY7UUFEc0I7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhCO01BR0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO2lCQUNmLENBQUMsQ0FBQyxJQUFGLENBQU8sS0FBQyxDQUFBLGNBQVIsRUFBd0IsU0FBQyxDQUFELEVBQUcsTUFBSDttQkFDdEIsS0FBQyxDQUFBLFlBQUQsQ0FBYyxDQUFkLEVBQWdCLE1BQWhCO1VBRHNCLENBQXhCO1FBRGU7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWpCLEVBSkY7O0VBSFc7OzBCQWFiLFdBQUEsR0FBYSxTQUFDLENBQUQsRUFBSSxNQUFKO0lBQ1gsTUFBQSxHQUFTLENBQUEsQ0FBRSxNQUFGO0lBQ1QsTUFBTSxDQUFDLFVBQVAsQ0FDRTtNQUFBLFNBQUEsRUFBVyxPQUFYO01BQ0EsU0FBQSxFQUFXLEtBRFg7TUFFQSxTQUFBLEVBQVcsTUFBTSxDQUFDLElBQVAsQ0FBWSxTQUFaLENBQXNCLENBQUMsS0FBdkIsQ0FBQSxDQUZYO01BR0EsVUFBQSxFQUFZLEVBSFo7TUFJQSxRQUFBLEVBQVUsSUFBQyxDQUFBLFdBQUQsQ0FBYSxNQUFiLENBSlY7TUFLQSxRQUFBLEVBQVUsSUFBQyxDQUFBLFdBQUQsQ0FBYSxNQUFiLENBTFY7TUFNQSxRQUFBLEVBQVUsZ0JBTlY7TUFPQSxRQUFBLEVBQVUsa0NBUFY7TUFRQSxRQUFBLEVBQVUsbUNBUlY7S0FERjtFQUZXOzswQkFlYixXQUFBLEdBQWEsU0FBQyxNQUFEO0FBQ1gsUUFBQTtJQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsSUFBVixDQUFlLFNBQWY7SUFDVixJQUFHLE9BQU8sQ0FBQyxRQUFSLENBQWlCLGVBQWpCLENBQUg7TUFDRyxJQUFJLE1BQU0sQ0FBQyxLQUFQLENBQUEsQ0FBQSxHQUFpQixHQUFyQjtlQUErQixFQUEvQjtPQUFBLE1BQUE7UUFBdUMsSUFBSSxNQUFNLENBQUMsS0FBUCxDQUFBLENBQUEsR0FBaUIsR0FBckI7aUJBQStCLEVBQS9CO1NBQUEsTUFBQTtpQkFBc0MsRUFBdEM7U0FBdkM7T0FESDtLQUFBLE1BQUE7TUFFSyxJQUFxRixPQUFPLENBQUMsUUFBUixDQUFpQixnQkFBakIsQ0FBckY7UUFBQyxJQUFJLE1BQU0sQ0FBQyxLQUFQLENBQUEsQ0FBQSxHQUFpQixHQUFyQjtpQkFBK0IsRUFBL0I7U0FBQSxNQUFBO1VBQXVDLElBQUksTUFBTSxDQUFDLEtBQVAsQ0FBQSxDQUFBLEdBQWlCLEdBQXJCO21CQUErQixFQUEvQjtXQUFBLE1BQUE7bUJBQXNDLEVBQXRDO1dBQXZDO1NBQUQ7T0FGTDs7RUFGVzs7MEJBTWIsWUFBQSxHQUFjLFNBQUMsQ0FBRCxFQUFJLE1BQUo7SUFDWixNQUFBLEdBQVMsQ0FBQSxDQUFFLE1BQUY7SUFDVCxNQUFNLENBQUMsSUFBUCxDQUFZLFlBQVosQ0FBeUIsQ0FBQyxJQUFJLENBQUMsUUFBL0IsR0FBMEMsSUFBQyxDQUFBLFdBQUQsQ0FBYSxNQUFiO0lBQzFDLE1BQU0sQ0FBQyxJQUFQLENBQVksWUFBWixDQUF5QixDQUFDLElBQUksQ0FBQyxRQUEvQixHQUEwQyxJQUFDLENBQUEsV0FBRCxDQUFhLE1BQWI7RUFIOUI7Ozs7OztBQU9oQixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQzlDakIsSUFBQTs7QUFBTTtFQUNTLDBCQUFBO0lBQ1gsSUFBQyxDQUFBLGNBQUQsR0FBa0I7SUFDbEIsSUFBQyxDQUFBLFVBQUQsQ0FBQTtFQUZXOzs2QkFJYixVQUFBLEdBQVksU0FBQTtXQUNWLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsT0FBYixFQUFzQix3Q0FBdEIsRUFBZ0UsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7QUFDOUQsWUFBQTtRQUFBLENBQUMsQ0FBQyxjQUFGLENBQUE7UUFDQSxXQUFBLEdBQWMsQ0FBQSxDQUFFLENBQUMsQ0FBQyxNQUFKLENBQVcsQ0FBQyxPQUFaLENBQW9CLGlCQUFwQjtlQUNkLFdBQVcsQ0FBQyxXQUFaLENBQXdCLEtBQUMsQ0FBQSxjQUF6QjtNQUg4RDtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEU7RUFEVTs7Ozs7O0FBT2QsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNaakIsSUFBQSxpQ0FBQTtFQUFBOztBQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsV0FBUjs7QUFDVCxZQUFBLEdBQWUsT0FBQSxDQUFRLDZCQUFSOztBQUVUO0VBRVMscUJBQUE7OztJQUNYLElBQUMsQ0FBQSxNQUFELEdBQVUsTUFBTSxDQUFDLEdBQVAsQ0FBVyxhQUFYO0lBQ1YsSUFBQyxDQUFBLElBQUQsR0FBUTtJQUNSLElBQUMsQ0FBQSxLQUFELEdBQVMsQ0FBQSxDQUFFLDRCQUFGLENBQStCLENBQUMsSUFBaEMsQ0FBcUMsU0FBckM7SUFFVCxDQUFDLENBQUMsU0FBRixDQUFZO01BQUUsS0FBQSxFQUFPLElBQVQ7S0FBWjtJQUNBLENBQUMsQ0FBQyxTQUFGLENBQVkscUNBQVosRUFBbUQsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO1FBQ2pELEVBQUUsQ0FBQyxJQUFILENBQ0M7VUFBQSxLQUFBLEVBQU8sS0FBQyxDQUFBLEtBQVI7VUFDQSxPQUFBLEVBQVMsTUFEVDtVQUVBLG9CQUFBLEVBQXNCLElBRnRCO1VBR0EsTUFBQSxFQUFRLElBSFI7VUFJQSxNQUFBLEVBQVEsSUFKUjtVQUtBLEtBQUEsRUFBTyxJQUxQO1VBTUEsVUFBQSxFQUFZLElBQUEsR0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQXZCLEdBQWtDLHdCQU45QztTQUREO1FBU0EsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFULENBQW1CLFlBQW5CLEVBQWlDLFNBQUMsUUFBRDtVQUMvQixLQUFDLENBQUEsR0FBRCxDQUFLLFlBQUw7aUJBQ0EsS0FBQyxDQUFBLE9BQUQsQ0FBUyxRQUFUO1FBRitCLENBQWpDO1FBSUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFULENBQW1CLGFBQW5CLEVBQWtDLFNBQUMsUUFBRDtVQUNoQyxLQUFDLENBQUEsR0FBRCxDQUFLLGFBQUw7aUJBQ0EsS0FBQyxDQUFBLFFBQUQsQ0FBVSxRQUFWO1FBRmdDLENBQWxDO1FBS0EsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFULENBQW1CLGNBQW5CLEVBQW1DLFNBQUMsUUFBRDtVQUNqQyxLQUFDLENBQUEsR0FBRCxDQUFLLGdCQUFBLEdBQWdCLENBQUMsSUFBSSxDQUFDLFNBQUwsQ0FBZSxRQUFmLENBQUQsQ0FBckI7aUJBQ0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0IsMEJBQWxCO1FBRmlDLENBQW5DO1FBSUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFULENBQW1CLG1CQUFuQixFQUF3QyxTQUFDLFFBQUQ7VUFDdEMsS0FBQyxDQUFBLEdBQUQsQ0FBSyxtQkFBTDtpQkFDQSxLQUFDLENBQUEsT0FBRCxDQUFTLFFBQVQ7UUFGc0MsQ0FBeEM7UUFJQSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVQsQ0FBbUIseUJBQW5CLEVBQThDLFNBQUMsUUFBRDtVQUM1QyxLQUFDLENBQUEsR0FBRCxDQUFLLHlCQUFMO2lCQUNBLEtBQUMsQ0FBQSxPQUFELENBQVMsUUFBVDtRQUY0QyxDQUE5QztRQUlBLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBVCxDQUFtQixhQUFuQixFQUFrQyxTQUFDLElBQUQsRUFBTyxNQUFQO1VBQ2hDLEtBQUMsQ0FBQSxHQUFELENBQUssZ0JBQUEsR0FBaUIsSUFBdEI7aUJBQ0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0IsbUJBQWxCLEVBQXVDO1lBQUMsT0FBQSxFQUFTLFVBQVY7WUFBc0IsTUFBQSxFQUFRLE1BQTlCO1lBQXNDLEdBQUEsRUFBSyxJQUEzQztXQUF2QztRQUZnQyxDQUFsQztRQUtBLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBVCxDQUFtQixhQUFuQixFQUFrQyxTQUFDLElBQUQsRUFBTyxNQUFQO1VBQ2hDLEtBQUMsQ0FBQSxHQUFELENBQUssZ0JBQUEsR0FBaUIsSUFBdEI7aUJBQ0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0IscUJBQWxCLEVBQXlDO1lBQUMsT0FBQSxFQUFTLFVBQVY7WUFBc0IsTUFBQSxFQUFRLE1BQTlCO1lBQXNDLEdBQUEsRUFBSyxJQUEzQztXQUF6QztRQUZnQyxDQUFsQztRQU1BLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBVCxDQUFtQixnQkFBbkIsRUFBcUMsU0FBQyxRQUFEO1VBQ25DLEtBQUMsQ0FBQSxHQUFELENBQUssaUJBQUEsR0FBaUIsQ0FBQyxJQUFJLENBQUMsU0FBTCxDQUFlLFFBQWYsQ0FBRCxDQUF0QjtpQkFDQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQiw2QkFBbEIsRUFBaUQ7WUFBQyxPQUFBLEVBQVMsVUFBVjtZQUFzQixNQUFBLEVBQVEsU0FBOUI7WUFBeUMsR0FBQSxFQUFLLFFBQVEsQ0FBQyxJQUF2RDtXQUFqRDtRQUZtQyxDQUFyQztRQUlBLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBVCxDQUFtQixnQkFBbkIsRUFBcUMsU0FBQyxRQUFEO1VBQ25DLEtBQUMsQ0FBQSxHQUFELENBQUssaUJBQUEsR0FBaUIsQ0FBQyxJQUFJLENBQUMsU0FBTCxDQUFlLFFBQWYsQ0FBRCxDQUF0QjtpQkFDQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQiw2QkFBbEIsRUFBaUQ7WUFBQyxPQUFBLEVBQVMsVUFBVjtZQUFzQixNQUFBLEVBQVEsU0FBOUI7WUFBeUMsR0FBQSxFQUFLLFFBQVEsQ0FBQyxJQUF2RDtXQUFqRDtRQUZtQyxDQUFyQztNQTlDaUQ7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5EO0VBTlc7O3dCQThEYixHQUFBLEdBQUssU0FBQyxHQUFEO1dBQ0gsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsR0FBYjtFQURHOzt3QkFHTCxPQUFBLEdBQVMsU0FBQyxRQUFEO0lBQ1AsSUFBQyxDQUFBLEdBQUQsQ0FBSyxJQUFJLENBQUMsU0FBTCxDQUFlLFFBQWYsQ0FBTDtBQUNBLFlBQU8sUUFBUSxDQUFDLE1BQWhCO0FBQUEsV0FDTyxXQURQO1FBRUksSUFBQyxDQUFBLEdBQUQsQ0FBSywrQkFBTDtRQUNBLElBQUMsQ0FBQSxTQUFELENBQVcsUUFBWDtRQUNBLElBQUMsQ0FBQSxjQUFELENBQWdCLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBdEM7UUFDQSxJQUFDLENBQUEsb0JBQUQsQ0FBc0IsUUFBdEI7ZUFDQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQix3QkFBbEIsRUFBNEMsUUFBNUM7QUFOSjtFQUZPOzt3QkFVVCxRQUFBLEdBQVUsU0FBQyxRQUFEO0lBQ1IsSUFBQyxDQUFBLEdBQUQsQ0FBSyxVQUFBLEdBQWEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxRQUFmLENBQWxCO0lBQ0EsSUFBQyxDQUFBLGlCQUFELENBQUE7V0FDQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQiwyQkFBbEIsRUFBK0MsUUFBL0M7RUFIUTs7d0JBTVYsU0FBQSxHQUFXLFNBQUMsUUFBRDtXQUNULElBQUMsQ0FBQSxJQUFELEdBQVksSUFBQSxZQUFBLENBQWEsUUFBYjtFQURIOzt3QkFHWCxJQUFBLEdBQU0sU0FBQyxHQUFELEVBQU0sUUFBTjtXQUNKLEVBQUUsQ0FBQyxFQUFILENBQU07TUFDSixNQUFBLEVBQVEsTUFESjtNQUVKLElBQUEsRUFBTSxHQUZGO0tBQU4sRUFHRyxRQUhIO0VBREk7O3dCQU1OLEtBQUEsR0FBTyxTQUFDLEdBQUQsRUFBTSxRQUFOO1dBQ0wsRUFBRSxDQUFDLEVBQUgsQ0FBTTtNQUNKLE1BQUEsRUFBUSxPQURKO01BRUosSUFBQSxFQUFNLEdBRkY7S0FBTixFQUdHLFFBSEg7RUFESzs7d0JBTVAsSUFBQSxHQUFNLFNBQUMsR0FBRCxFQUFNLFFBQU47V0FDSixFQUFFLENBQUMsRUFBSCxDQUFNO01BQ0osTUFBQSxFQUFRLGtCQURKO01BRUosV0FBQSxFQUFhLFVBRlQ7TUFHSixpQkFBQSxFQUFtQixJQUFJLENBQUMsU0FBTCxDQUFlO1FBQ2hDLE1BQUEsRUFBUSxHQUR3QjtPQUFmLENBSGY7S0FBTixFQU1HLFFBTkg7RUFESTs7d0JBVU4saUJBQUEsR0FBbUIsU0FBQTtXQUNqQixJQUFDLENBQUEsSUFBRCxHQUFRO0VBRFM7O3dCQUtuQixjQUFBLEdBQWdCLFNBQUMsWUFBRDtXQUNkLElBQUMsQ0FBQSxZQUFELEdBQWdCO0VBREY7O3dCQUdoQixjQUFBLEdBQWdCLFNBQUE7V0FDZDtNQUNFLFlBQUEsRUFBYyxJQUFDLENBQUEsWUFEakI7O0VBRGM7O3dCQUtoQixvQkFBQSxHQUFzQixTQUFBO1dBQ3BCLEVBQUUsQ0FBQyxHQUFILENBQU8sS0FBUCxFQUFjLElBQUMsQ0FBQSxjQUFELENBQUEsQ0FBZCxFQUFpQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsUUFBRDtRQUMvQixLQUFDLENBQUEsR0FBRCxDQUFLLHNCQUFBLEdBQXlCLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUE5QjtlQUNBLEtBQUMsQ0FBQSxJQUFELEdBQVksSUFBQSxZQUFBLENBQWEsUUFBYjtNQUZtQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakM7RUFEb0I7Ozs7OztBQU14QixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ2xJakIsSUFBQTs7QUFBTTtFQUVTLHNCQUFDLEVBQUQ7SUFDWCxJQUFDLENBQUEsSUFBRCxHQUFRO0lBQ1IsSUFBQyxDQUFBLEVBQUQsR0FBTSxJQUFDLENBQUEsSUFBSSxDQUFDO0lBQ1osSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsSUFBSSxDQUFDO0lBQ2YsSUFBQyxDQUFBLElBQUQsR0FBUSxJQUFDLENBQUEsSUFBSSxDQUFDO0lBQ2QsSUFBQyxDQUFBLFVBQUQsR0FBYyxJQUFDLENBQUEsSUFBSSxDQUFDO0lBQ3BCLElBQUMsQ0FBQSxTQUFELEdBQWEsSUFBQyxDQUFBLElBQUksQ0FBQztJQUNuQixJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxJQUFJLENBQUM7SUFDaEIsSUFBQyxDQUFBLFFBQUQsR0FBWSxJQUFDLENBQUEsSUFBSSxDQUFDO0lBQ2xCLElBQUMsQ0FBQSxPQUFELEdBQVc7RUFUQTs7Ozs7O0FBYWYsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNmakIsSUFBQTs7QUFBTTtFQUVTLDJCQUFDLEdBQUQsRUFBTSxVQUFOLEVBQWtCLE1BQWxCO0lBQ1gsSUFBQyxDQUFBLFdBQUQsR0FBZTtJQUNmLElBQUMsQ0FBQSxZQUFELEdBQWdCLElBQUMsQ0FBQSxXQUFXLENBQUM7SUFFN0IsSUFBQyxDQUFBLFVBQUQsR0FBYztJQUNkLElBQUMsQ0FBQSxNQUFELEdBQVU7RUFMQzs7OEJBT2IsTUFBQSxHQUFRLFNBQUMsR0FBRCxFQUFNLFFBQU47QUFDTixRQUFBO0lBQUEsSUFBQSxHQUFPLElBQUMsQ0FBQSxNQUFNLENBQUMsUUFBUixDQUFBO0lBQ1AsSUFBQSxHQUFPO0lBQ1AsSUFBSyxDQUFBLElBQUEsQ0FBTCxHQUFhO1dBQ2IsRUFBRSxDQUFDLEdBQUgsQ0FDRSxLQUFBLEdBQU0sSUFBQyxDQUFBLFlBQVAsR0FBb0IsR0FBcEIsR0FBdUIsSUFBQyxDQUFBLFVBRDFCLEVBRUUsTUFGRixFQUdFLElBSEYsRUFJRSxRQUpGO0VBSk07OzhCQVdSLEdBQUEsR0FBSyxTQUFDLFFBQUQ7V0FDSCxFQUFFLENBQUMsR0FBSCxDQUNFLEtBQUEsR0FBTSxJQUFDLENBQUEsWUFBUCxHQUFvQixHQUFwQixHQUF1QixJQUFDLENBQUEsVUFEMUIsRUFFRSxLQUZGLEVBR0UsUUFIRjtFQURHOzs7Ozs7QUFPUCxNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ3pCakIsSUFBQTs7QUFBTTtFQUVTLHVCQUFBO0FBQ1gsUUFBQTtJQUFBLGNBQUEsR0FBaUIsQ0FBQSxDQUFFLG1CQUFGO0lBQ2pCLElBQUcsY0FBYyxDQUFDLE1BQWYsR0FBd0IsQ0FBM0I7TUFDRSxjQUFjLENBQUMsVUFBZixDQUNFO1FBQUEsUUFBQSxFQUFVLDhCQUFWO1FBQ0EsU0FBQSxFQUFXLE9BRFg7UUFFQSxhQUFBLEVBQWUsS0FGZjtRQUdBLFFBQUEsRUFBVSxvQkFIVjtRQUlBLFFBQUEsRUFBVSxvQkFKVjtPQURGLEVBREY7O0VBRlc7Ozs7OztBQVdmLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDZmpCLElBQUEsYUFBQTtFQUFBOztBQUFNO0VBRVMsdUJBQUMsRUFBRDtJQUNYLElBQUMsQ0FBQSxJQUFELEdBQWMsQ0FBQSxDQUFFLE1BQUY7SUFDZCxJQUFDLENBQUEsT0FBRCxHQUFjO0lBQ2QsSUFBQyxDQUFBLE1BQUQsR0FBYyxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxRQUFkO0lBQ2QsSUFBQyxDQUFBLE9BQUQsR0FBYztJQUNkLElBQUMsQ0FBQSxLQUFELEdBQWMsSUFBQyxDQUFBLE1BQU0sQ0FBQztJQUN0QixJQUFDLENBQUEsWUFBRCxDQUFBO0VBTlc7OzBCQVNiLFlBQUEsR0FBYyxTQUFBO0FBQ1osUUFBQTtJQUFBLEtBQUEsR0FBVyxJQUFDLENBQUEsUUFBRCxDQUFBLENBQUgsR0FBb0IsVUFBcEIsR0FBb0M7SUFDNUMsSUFBQyxDQUFBLFlBQUQsR0FBZ0I7SUFFaEIsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsa0JBQWQsQ0FBaUMsQ0FBQyxFQUFsQyxDQUFxQyxLQUFyQyxFQUE0QyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtRQUMxQyxLQUFDLENBQUEsT0FBRCxHQUFXLENBQUEsQ0FBRSxDQUFDLENBQUMsTUFBSixDQUFXLENBQUMsT0FBWixDQUFvQixRQUFwQixDQUE2QixDQUFDLElBQTlCLENBQW1DLE9BQW5DO1FBQ1gsS0FBQyxDQUFBLElBQUQsQ0FBTSxDQUFOO1FBQ0EsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtlQUNBO01BSjBDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE1QztXQU1BLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxPQUFaLENBQW9CLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFEO1FBQ2xCLElBQUcsQ0FBQyxDQUFDLE9BQUYsS0FBYSxFQUFoQjtpQkFBd0IsS0FBQyxDQUFBLElBQUQsQ0FBTSxDQUFDLENBQVAsRUFBeEI7U0FBQSxNQUNLLElBQUcsQ0FBQyxDQUFDLE9BQUYsS0FBYSxFQUFoQjtpQkFBd0IsS0FBQyxDQUFBLElBQUQsQ0FBTSxDQUFOLEVBQXhCOztNQUZhO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQjtFQVZZOzswQkFlZCxJQUFBLEdBQU0sU0FBQyxHQUFEO0FBQ0osUUFBQTtJQUFBLElBQUEsR0FBVyxHQUFBLEdBQU0sQ0FBVCxHQUFnQixNQUFoQixHQUE0QjtJQUNwQyxLQUFBLEdBQVEsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUNuQixJQUFBLENBQUEsQ0FBYyxLQUFBLElBQVMsQ0FBVCxJQUFjLEtBQUEsR0FBUSxJQUFDLENBQUEsS0FBckMsQ0FBQTtBQUFBLGFBQUE7O0lBQ0EsSUFBQyxDQUFBLFFBQUQsQ0FBVSxLQUFWO1dBQ0EsSUFBQyxDQUFBLFVBQUQsQ0FBZSxJQUFELEdBQU0sU0FBcEI7RUFMSTs7MEJBUU4sUUFBQSxHQUFVLFNBQUMsS0FBRDtJQUNSLElBQUMsQ0FBQSxPQUFELEdBQVc7V0FDWCxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsT0FBaEIsQ0FBd0I7TUFDdEIsU0FBQSxFQUFXLENBQUEsQ0FBRSxpQkFBQSxHQUFrQixLQUFwQixDQUE0QixDQUFDLE1BQTdCLENBQUEsQ0FBcUMsQ0FBQyxHQUF0QyxHQUE0QyxFQURqQztLQUF4QixFQUVHLEdBRkg7RUFGUTs7MEJBT1YsVUFBQSxHQUFZLFNBQUMsTUFBRDtJQUNWLElBQUEsQ0FBYyxNQUFNLENBQUMsT0FBckI7QUFBQSxhQUFBOztXQUNBLE9BQU8sQ0FBQyxLQUFSLENBQWMscUJBQWQsRUFBb0MsTUFBcEM7RUFGVTs7MEJBSVosUUFBQSxHQUFVLFNBQUE7SUFDUixJQUFHLGFBQWtCLE1BQWxCLEVBQUEsY0FBQSxNQUFBLElBQTRCLENBQUMsTUFBTSxDQUFDLGFBQVAsSUFBd0IsUUFBQSxZQUFvQixhQUE3QyxDQUE1QixJQUEyRixPQUFPLFVBQVAsS0FBcUIsUUFBbkg7QUFDRSxhQUFPLEtBRFQ7S0FBQSxNQUFBO0FBR0UsYUFBTyxNQUhUOztFQURROzs7Ozs7QUFRWixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ3JEakIsSUFBQSxxQkFBQTtFQUFBOzs7QUFBQSxZQUFBLEdBQWUsT0FBQSxDQUFRLHFDQUFSOztBQUVUO0FBQ0osTUFBQTs7RUFBQSxRQUFBLEdBQ0U7SUFBQSxHQUFBLEVBQ0U7TUFBQSxXQUFBLEVBQWEsQ0FBYjtLQURGO0lBRUEsUUFBQSxFQUNFO01BQUEsV0FBQSxFQUFhLENBQWI7S0FIRjtJQUlBLFdBQUEsRUFDRTtNQUFBLE1BQUEsRUFBUSxHQUFSO01BQ0EsTUFBQSxFQUFRLEdBRFI7S0FMRjs7O0VBUVcsaUJBQUMsRUFBRDs7SUFDWCxJQUFDLENBQUEsSUFBRCxHQUFvQixDQUFBLENBQUUsTUFBRjtJQUNwQixJQUFDLENBQUEsT0FBRCxHQUFvQjtJQUNwQixJQUFDLENBQUEsT0FBRCxHQUFvQixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxrQkFBZDtJQUNwQixJQUFDLENBQUEsTUFBRCxHQUFvQixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxnQkFBZDtJQUNwQixJQUFDLENBQUEsUUFBRCxHQUFvQixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxtQkFBZDtJQUNwQixJQUFDLENBQUEsT0FBRCxHQUFvQixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxrQkFBZDtJQUNwQixJQUFDLENBQUEsTUFBRCxHQUFvQixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxvQkFBZDtJQUNwQixJQUFDLENBQUEsTUFBRCxHQUF3QixJQUFBLFlBQUEsQ0FBYSxJQUFDLENBQUEsTUFBZDtJQUN4QixJQUFDLENBQUEsT0FBRCxHQUFvQjtJQUNwQixJQUFDLENBQUEsS0FBRCxHQUFvQixJQUFDLENBQUEsTUFBTSxDQUFDO0lBQzVCLElBQUMsQ0FBQSxZQUFELENBQUE7RUFYVzs7b0JBYWIsWUFBQSxHQUFjLFNBQUE7QUFDWixRQUFBO0lBQUEsS0FBQSxHQUFXLElBQUMsQ0FBQSxRQUFELENBQUEsQ0FBSCxHQUFvQixVQUFwQixHQUFvQztJQUM1QyxJQUFDLENBQUEsV0FBRCxHQUFlO0lBRWYsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsbUJBQWQsQ0FBa0MsQ0FBQyxFQUFuQyxDQUFzQyxLQUF0QyxFQUE2QyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtRQUMzQyxLQUFDLENBQUEsSUFBSSxDQUFDLFFBQU4sQ0FBZSxvQkFBZjtRQUNBLEtBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxDQUFrQixZQUFsQjtRQUNBLEtBQUMsQ0FBQSxVQUFELENBQUE7UUFDQSxLQUFDLENBQUEsTUFBRCxDQUFBO1FBQ0EsS0FBQyxDQUFBLFNBQUQsQ0FBVyxDQUFYO1FBQ0EsS0FBQyxDQUFBLFVBQUQsQ0FBWSxjQUFaO1FBQ0EsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtlQUNBO01BUjJDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE3QztJQVVBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLGdCQUFkLENBQStCLENBQUMsRUFBaEMsQ0FBbUMsS0FBbkMsRUFBMEMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7UUFDeEMsSUFBRyxLQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsZUFBbEIsQ0FBSDtVQUNFLEtBQUMsQ0FBQSxjQUFELENBQUEsRUFERjtTQUFBLE1BQUE7VUFHRSxLQUFDLENBQUEsWUFBRCxDQUFBLEVBSEY7O1FBSUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtlQUNBO01BTndDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQztJQVFBLElBQUEsQ0FBcUQsSUFBQyxDQUFBLGFBQUQsQ0FBQSxDQUFyRDtNQUFBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLHFCQUFkLENBQW9DLENBQUMsTUFBckMsQ0FBQSxFQUFBOztJQUNBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLHFCQUFkLENBQW9DLENBQUMsRUFBckMsQ0FBd0MsS0FBeEMsRUFBK0MsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7UUFDN0MsS0FBQyxDQUFBLGdCQUFELENBQUE7UUFDQSxLQUFDLENBQUEsY0FBRCxDQUFnQixZQUFoQjtlQUNBO01BSDZDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEvQztJQUtBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLHlEQUFkLENBQXdFLENBQUMsRUFBekUsQ0FBNEUsS0FBNUUsRUFBbUYsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7ZUFDakYsS0FBQyxDQUFBLG1CQUFELENBQUE7TUFEaUY7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5GO0lBR0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsd0JBQWQsQ0FBdUMsQ0FBQyxFQUF4QyxDQUEyQyxLQUEzQyxFQUFrRCxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtRQUNoRCxLQUFDLENBQUEsWUFBRCxDQUFBO2VBQ0EsS0FBQyxDQUFBLGNBQUQsQ0FBZ0IsZUFBaEI7TUFGZ0Q7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWxEO0lBSUEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMscUJBQWQsQ0FBb0MsQ0FBQyxFQUFyQyxDQUF3QyxXQUF4QyxFQUFxRCxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtlQUNuRCxLQUFDLENBQUEsV0FBRCxHQUFlO01BRG9DO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFyRDtJQUdBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLHFCQUFkLENBQW9DLENBQUMsRUFBckMsQ0FBd0MsS0FBeEMsRUFBK0MsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7UUFDN0MsSUFBRyxDQUFDLEtBQUMsQ0FBQSxXQUFMO1VBQ0UsS0FBQyxDQUFBLFNBQUQsQ0FBVyxDQUFBLENBQUUsQ0FBQyxDQUFDLE1BQUosQ0FBVyxDQUFDLElBQVosQ0FBaUIsT0FBakIsQ0FBWDtVQUNBLEtBQUMsQ0FBQSxZQUFELENBQUE7aUJBQ0EsS0FBQyxDQUFBLFVBQUQsQ0FBWSxPQUFaLEVBSEY7U0FBQSxNQUFBO2lCQUtFLEtBQUMsQ0FBQSxXQUFELEdBQWUsTUFMakI7O01BRDZDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEvQztJQVFBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLGVBQWQsQ0FBOEIsQ0FBQyxFQUEvQixDQUFrQyxLQUFsQyxFQUF5QyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtRQUN2QyxLQUFDLENBQUEsSUFBRCxDQUFNLENBQU47UUFDQSxDQUFDLENBQUMsY0FBRixDQUFBO2VBQ0E7TUFIdUM7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpDO0lBS0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsZUFBZCxDQUE4QixDQUFDLEVBQS9CLENBQWtDLEtBQWxDLEVBQXlDLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFEO1FBQ3ZDLEtBQUMsQ0FBQSxJQUFELENBQU0sQ0FBQyxDQUFQO1FBQ0EsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtlQUNBO01BSHVDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF6QztJQU1BLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxPQUFaLENBQW9CLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFEO1FBQ2xCLElBQUEsQ0FBYyxLQUFDLENBQUEsUUFBRCxDQUFBLENBQWQ7QUFBQSxpQkFBQTs7UUFDQSxJQUFHLENBQUMsQ0FBQyxPQUFGLEtBQWEsRUFBaEI7aUJBQXdCLEtBQUMsQ0FBQSxJQUFELENBQU0sQ0FBQyxDQUFQLEVBQXhCO1NBQUEsTUFDSyxJQUFHLENBQUMsQ0FBQyxPQUFGLEtBQWEsRUFBaEI7aUJBQXdCLEtBQUMsQ0FBQSxJQUFELENBQU0sQ0FBTixFQUF4QjtTQUFBLE1BQ0EsSUFBRyxDQUFDLENBQUMsT0FBRixLQUFhLEVBQWhCO2lCQUF3QixLQUFDLENBQUEsWUFBRCxDQUFBLEVBQXhCOztNQUphO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQjtXQU1BLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtlQUFHLEtBQUMsQ0FBQSxNQUFELENBQUE7TUFBSDtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7RUEvRE47O29CQW1FZCxJQUFBLEdBQU0sU0FBQyxHQUFEO0FBQ0osUUFBQTtJQUFBLElBQUEsR0FBVyxHQUFBLEdBQU0sQ0FBVCxHQUFnQixNQUFoQixHQUE0QjtJQUNwQyxLQUFBLEdBQVEsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUduQixJQUFHLEtBQUEsS0FBUyxJQUFDLENBQUEsS0FBYjtNQUNFLEtBQUEsR0FBUSxFQURWO0tBQUEsTUFFSyxJQUFHLEtBQUEsS0FBUyxDQUFDLENBQWI7TUFDSCxLQUFBLEdBQVEsSUFBQyxDQUFBLEtBQUQsR0FBUyxFQURkOztJQUdMLElBQUEsQ0FBQSxDQUFjLEtBQUEsSUFBUyxDQUFULElBQWMsS0FBQSxHQUFRLElBQUMsQ0FBQSxLQUF2QixJQUFnQyxJQUFDLENBQUEsUUFBRCxDQUFBLENBQTlDLENBQUE7QUFBQSxhQUFBOztJQUNBLElBQUMsQ0FBQSxVQUFELENBQWUsSUFBRCxHQUFNLFNBQXBCO1dBQ0EsSUFBQyxDQUFBLFNBQUQsQ0FBVyxLQUFYO0VBWkk7O29CQWNOLFNBQUEsR0FBVyxTQUFDLEtBQUQ7QUFDVCxRQUFBO0lBQUEsSUFBQSxDQUFBLENBQWMsS0FBQSxJQUFTLENBQVQsSUFBYyxLQUFBLEdBQVEsSUFBQyxDQUFBLEtBQXZCLElBQWdDLElBQUMsQ0FBQSxRQUFELENBQUEsQ0FBOUMsQ0FBQTtBQUFBLGFBQUE7O0lBQ0EsR0FBQSxHQUFNLENBQUEsQ0FBRSxJQUFDLENBQUEsTUFBTyxDQUFBLEtBQUEsQ0FBVixDQUFpQixDQUFDLElBQWxCLENBQXVCLEtBQXZCO0lBQ04sSUFBQSxHQUFPLEdBQUcsQ0FBQyxJQUFKLENBQUE7SUFDUCxJQUFDLENBQUEsV0FBRCxDQUFhLElBQUksQ0FBQyxPQUFMLElBQWdCLEdBQUcsQ0FBQyxJQUFKLENBQVMsS0FBVCxDQUE3QjtJQUNBLElBQUMsQ0FBQSxRQUFELENBQVUsSUFBSSxDQUFDLElBQWY7SUFDQSxJQUFDLENBQUEsU0FBRCxDQUFXLEdBQVg7SUFDQSxJQUFDLENBQUEsU0FBRCxDQUFXLEtBQVg7SUFDQSxJQUFDLENBQUEsYUFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLGtCQUFELENBQUE7SUFFQSxJQUFDLENBQUEsT0FBRCxHQUFXO0lBQ1gsSUFBQyxDQUFBLGdCQUFELENBQUE7SUFDQSxJQUFDLENBQUEsV0FBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLHdCQUFELENBQUE7V0FDQSxJQUFDLENBQUEsaUJBQUQsQ0FBbUIsR0FBbkI7RUFmUzs7b0JBaUJYLFdBQUEsR0FBYSxTQUFDLE9BQUQ7V0FDWCxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYywyQ0FBZCxDQUEwRCxDQUFDLElBQTNELENBQWdFLE9BQWhFO0VBRFc7O29CQUdiLFFBQUEsR0FBVSxTQUFDLElBQUQ7QUFDUixRQUFBO0lBQUEsSUFBQyxDQUFBLFdBQUQsSUFBQyxDQUFBLFNBQVcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsZUFBZDtJQUNaLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLEVBQWI7SUFDQSxJQUFHLElBQUEsS0FBUSxLQUFYO0FBQ0U7V0FBQSxXQUFBOztRQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsV0FBRixDQUFjLENBQUMsSUFBZixDQUFvQixHQUFwQjtRQUNMLEVBQUEsR0FBSyxDQUFBLENBQUUsV0FBRixDQUFjLENBQUMsSUFBZixDQUFvQixHQUFwQjtxQkFDTCxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsQ0FBZSxFQUFmLEVBQWtCLEVBQWxCO0FBSEY7cUJBREY7O0VBSFE7O29CQVNWLFNBQUEsR0FBVyxTQUFDLEdBQUQ7QUFDVCxRQUFBO0lBQUEsR0FBQSxHQUFTLElBQUMsQ0FBQSxPQUFPLENBQUMsS0FBVCxDQUFBLENBQUEsR0FBbUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUEzQyxHQUF1RCxHQUFHLENBQUMsSUFBSixDQUFTLFlBQVQsQ0FBdkQsR0FBbUYsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFUO1dBQ3pGLEdBQUcsQ0FBQyxJQUFKLENBQVMsS0FBVCxFQUFlLEdBQWY7RUFGUzs7b0JBSVgsU0FBQSxHQUFXLFNBQUMsS0FBRDtJQUNULElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLHdCQUFkLENBQXVDLENBQUMsV0FBeEMsQ0FBb0QsV0FBcEQ7V0FDQSxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyx5QkFBQSxHQUEwQixLQUF4QyxDQUFnRCxDQUFDLFFBQWpELENBQTBELFdBQTFEO0VBRlM7O29CQUlYLFdBQUEsR0FBYSxTQUFBO1dBQ1gsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsb0JBQWQsQ0FBbUMsQ0FBQyxJQUFwQyxDQUF5QyxJQUFDLENBQUEsT0FBRCxHQUFXLENBQXBEO0VBRFc7O29CQUdiLGdCQUFBLEdBQWtCLFNBQUE7SUFDaEIsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsOEJBQWQsQ0FBNkMsQ0FBQyxXQUE5QyxDQUEwRCxXQUExRDtJQUNBLElBQUcsSUFBQyxDQUFBLE9BQUQsS0FBWSxDQUFmO01BQStCLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLGVBQWQsQ0FBOEIsQ0FBQyxRQUEvQixDQUF3QyxXQUF4QyxFQUEvQjs7SUFDQSxJQUFHLElBQUMsQ0FBQSxPQUFELEtBQVksSUFBQyxDQUFBLEtBQUQsR0FBUyxDQUF4QjthQUErQixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxlQUFkLENBQThCLENBQUMsUUFBL0IsQ0FBd0MsV0FBeEMsRUFBL0I7O0VBSGdCOztvQkFLbEIsd0JBQUEsR0FBMEIsU0FBQTtXQUN4QixJQUFDLENBQUEsT0FDQyxDQUFDLElBREgsQ0FDUSx5QkFEUixDQUVFLENBQUMsR0FGSCxDQUVPLE1BRlAsRUFFZSxDQUFDLENBQUQsR0FBSyxJQUFDLENBQUEsYUFBRCxDQUFBLENBQUwsR0FBd0IsSUFBQyxDQUFBLE9BRnhDO0VBRHdCOztvQkFLMUIsaUJBQUEsR0FBbUIsU0FBQyxLQUFEO0FBQ2pCLFFBQUE7SUFBQSxVQUFBLFFBQVUsQ0FBQSxDQUFFLElBQUMsQ0FBQSxNQUFPLENBQUEsSUFBQyxDQUFBLE9BQUQsQ0FBVixDQUFvQixDQUFDLElBQXJCLENBQTBCLEtBQTFCO0lBQ1YsY0FBQSxHQUFpQixJQUFDLENBQUEsY0FBRCxDQUFBO0lBQ2pCLGFBQUEsR0FBZ0IsSUFBQyxDQUFBLGFBQUQsQ0FBQTtJQUNoQixDQUFBLEdBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxRQUFYLENBQUEsS0FBd0IsQ0FBM0IsR0FBbUMsS0FBSyxDQUFDLE1BQU4sQ0FBQSxDQUFuQyxHQUF1RCxLQUFLLENBQUMsSUFBTixDQUFXLFFBQVg7SUFDM0QsQ0FBQSxHQUFPLEtBQUssQ0FBQyxJQUFOLENBQVcsT0FBWCxDQUFBLEtBQXVCLENBQTFCLEdBQWtDLEtBQUssQ0FBQyxLQUFOLENBQUEsQ0FBbEMsR0FBcUQsS0FBSyxDQUFDLElBQU4sQ0FBVyxPQUFYO0lBQ3pELElBQUcsQ0FBQSxHQUFJLGFBQUosSUFBcUIsQ0FBQSxHQUFJLGNBQTVCO01BQ0UsU0FBQSxHQUFlLENBQUEsR0FBSSxhQUFQLEdBQTBCLENBQUEsR0FBSSxhQUE5QixHQUFpRDtNQUM3RCxVQUFBLEdBQWdCLENBQUEsR0FBSSxhQUFQLEdBQTBCLENBQUEsR0FBSSxjQUE5QixHQUFrRDtNQUMvRCxPQUFBLEdBQWEsU0FBQSxHQUFZLFVBQWYsR0FBK0IsT0FBL0IsR0FBNEM7TUFDdEQsSUFBRyxPQUFBLEtBQVcsT0FBWCxJQUF1QixDQUFDLENBQUEsR0FBRSxDQUFILENBQUEsR0FBUSxDQUFDLGFBQUEsR0FBYyxjQUFmLENBQWxDO1FBQ0UsS0FBQSxHQUFRLGFBQUEsR0FBYztRQUN0QixRQUFBLEdBQVc7UUFDWCxTQUFBLEdBQVksQ0FBQSxHQUFJO1FBQ2hCLFNBQUEsR0FBWSxDQUFDLGNBQUEsR0FBaUIsU0FBbEIsQ0FBQSxHQUErQixFQUo3QztPQUFBLE1BQUE7UUFNRSxLQUFBLEdBQVEsY0FBQSxHQUFlO1FBQ3ZCLFFBQUEsR0FBVyxDQUFBLEdBQUk7UUFDZixTQUFBLEdBQVk7UUFDWixTQUFBLEdBQVksQ0FBQyxjQUFBLEdBQWlCLFNBQWxCLENBQUEsR0FBK0IsRUFUN0M7T0FKRjtLQUFBLE1BQUE7TUFlRSxTQUFBLEdBQVksQ0FBQyxjQUFBLEdBQWlCLENBQWxCLENBQUEsR0FBdUIsRUFmckM7O1dBaUJBLEtBQUssQ0FBQyxHQUFOLENBQ0U7TUFBQSxRQUFBLEVBQVUsU0FBQSxJQUFhLENBQXZCO01BQ0EsT0FBQSxFQUFTLFFBQUEsSUFBWSxDQURyQjtNQUVBLFlBQUEsRUFBYyxTQUFBLElBQWEsRUFGM0I7S0FERjtFQXZCaUI7O29CQTRCbkIscUJBQUEsR0FBdUIsU0FBQTtBQUNyQixRQUFBO0lBQUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxhQUFELENBQUE7SUFDUixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyx5QkFBZCxDQUF3QyxDQUFDLEtBQXpDLENBQStDLEtBQUEsR0FBUSxJQUFDLENBQUEsS0FBeEQsQ0FBOEQsQ0FBQyxNQUEvRCxDQUFzRSxJQUFDLENBQUEsY0FBRCxDQUFBLENBQXRFO1dBQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsZ0JBQWQsQ0FBK0IsQ0FBQyxLQUFoQyxDQUFzQyxLQUF0QztFQUhxQjs7b0JBS3ZCLFlBQUEsR0FBYyxTQUFBO0lBQ1osSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLGdCQUFyQjtXQUNBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLGlCQUFkLENBQWdDLENBQUMsV0FBakMsQ0FBNkMsWUFBN0M7RUFGWTs7b0JBSWQsbUJBQUEsR0FBcUIsU0FBQTtXQUNuQixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyx5QkFBZCxDQUF3QyxDQUFDLFdBQXpDLENBQXFELFlBQXJEO0VBRG1COztvQkFHckIsVUFBQSxHQUFZLFNBQUE7V0FDVixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxxQkFBZCxDQUFvQyxDQUFDLElBQXJDLENBQTBDLFNBQUE7YUFDeEMsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiLEVBQW1CLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixDQUFuQjtJQUR3QyxDQUExQztFQURVOztvQkFJWixrQkFBQSxHQUFvQixTQUFBO0lBQ2xCLElBQUEsQ0FBYyxJQUFDLENBQUEsUUFBRCxDQUFBLENBQWQ7QUFBQSxhQUFBOztJQUNBLElBQUMsQ0FBQSwyQkFBRCxJQUFDLENBQUEseUJBQTJCO0lBQzVCLElBQUcsSUFBQyxDQUFBLHNCQUFELEdBQTBCLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBNUMsS0FBMkQsQ0FBOUQ7TUFDRSxJQUFDLENBQUEsYUFBRCxDQUFBLEVBREY7O1dBR0EsSUFBQyxDQUFBLHNCQUFEO0VBTmtCOztvQkFRcEIsYUFBQSxHQUFlLFNBQUE7SUFDYixJQUFBLENBQWMsSUFBQyxDQUFBLFFBQUQsQ0FBQSxDQUFkO0FBQUEsYUFBQTs7SUFDQSxJQUFDLENBQUEscUJBQUQsSUFBQyxDQUFBLG1CQUFxQjtJQUN0QixJQUFHLElBQUMsQ0FBQSxnQkFBRCxHQUFvQixRQUFRLENBQUMsR0FBRyxDQUFDLFdBQWpDLEtBQWdELENBQW5EO01BQ0UsSUFBRyxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsWUFBbEIsQ0FBQSxJQUFtQyxDQUFDLElBQUMsQ0FBQSxVQUFELENBQUEsQ0FBdkM7ZUFDRSxJQUFDLENBQUEsUUFBRCxDQUFBLEVBREY7T0FBQSxNQUFBO2VBR0UsSUFBQyxDQUFBLE1BQU0sQ0FBQyxLQUFSLENBQUEsRUFIRjtPQURGO0tBQUEsTUFBQTthQU1FLElBQUMsQ0FBQSxnQkFBRCxHQU5GOztFQUhhOztvQkFXZixRQUFBLEdBQVUsU0FBQTtBQUNSLFFBQUE7SUFBQSxrQkFBQSxHQUFxQixJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxzQkFBWDtJQUNyQixJQUFHLGtCQUFBLEtBQXNCLENBQXpCO01BQ0UsSUFBQyxDQUFBLE1BQU0sQ0FBQyxTQUFSLENBQUE7YUFDQSxJQUFDLENBQUEsVUFBRCxDQUFZLFdBQVosRUFGRjs7RUFGUTs7b0JBTVYsTUFBQSxHQUFRLFNBQUE7QUFDTixRQUFBO0lBQUEsSUFBQSxDQUFjLElBQUMsQ0FBQSxRQUFELENBQUEsQ0FBZDtBQUFBLGFBQUE7O0lBQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLFdBQXJCLENBQWlDLENBQUMsV0FBbEMsQ0FBOEMsV0FBOUMsQ0FBMEQsQ0FBQyxXQUEzRCxDQUF1RSxZQUF2RTtJQUNBLEtBQUEsR0FBUSxJQUFDLENBQUEsT0FBTyxDQUFDLEtBQVQsQ0FBQTtJQUNSLElBQUcsS0FBQSxJQUFTLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBakM7TUFDRSxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsWUFBbEIsRUFERjs7SUFFQSxJQUFHLEtBQUEsSUFBUyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQTlCLElBQXlDLEtBQUEsR0FBUSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQXpFO01BQ0UsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFULENBQWtCLFdBQWxCO01BQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxLQUFSLENBQUEsRUFGRjtLQUFBLE1BR0ssSUFBRyxLQUFBLEdBQVEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFoQztNQUNILElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxDQUFrQixXQUFsQjtNQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsS0FBUixDQUFBLEVBRkc7O0lBR0wsSUFBQyxDQUFBLHFCQUFELENBQUE7SUFDQSxJQUFDLENBQUEsd0JBQUQsQ0FBQTtXQUNBLElBQUMsQ0FBQSxpQkFBRCxDQUFBO0VBZE07O29CQWtCUixnQkFBQSxHQUFrQixTQUFBOztNQUNoQixJQUFDLENBQUEsb0JBQXFCOztJQUN0QixJQUFHLElBQUMsQ0FBQSxpQkFBSjthQUNFLElBQUMsQ0FBQSxjQUFELENBQUEsRUFERjtLQUFBLE1BQUE7YUFHRSxJQUFDLENBQUEsZUFBRCxDQUFBLEVBSEY7O0VBRmdCOztvQkFPbEIsZUFBQSxHQUFpQixTQUFBO0FBQ2YsUUFBQTtJQUFBLEVBQUEsR0FBSyxJQUFDLENBQUEsT0FBUSxDQUFBLENBQUE7SUFDZCxRQUFRLENBQUMsd0JBQVQsR0FBb0MsSUFBQyxDQUFBO0lBQ3JDLFFBQVEsQ0FBQyxxQkFBVCxHQUFpQyxJQUFDLENBQUE7SUFDbEMsUUFBUSxDQUFDLGtCQUFULEdBQThCLElBQUMsQ0FBQTtJQUMvQixJQUFtRSxFQUFFLENBQUMsdUJBQXRFO0FBQUEsYUFBTyxFQUFFLENBQUMsdUJBQUgsQ0FBMkIsT0FBTyxDQUFDLG9CQUFuQyxFQUFQOztJQUNBLElBQW9DLEVBQUUsQ0FBQyxvQkFBdkM7QUFBQSxhQUFPLEVBQUUsQ0FBQyxvQkFBSCxDQUFBLEVBQVA7O1dBQ0EsRUFBRSxDQUFDLGlCQUFILENBQUE7RUFQZTs7b0JBU2pCLGNBQUEsR0FBZ0IsU0FBQTtJQUNkLFFBQVEsQ0FBQyxnQkFBVCxHQUE0QixRQUFRLENBQUMsb0JBQVQsSUFBaUMsUUFBUSxDQUFDLG1CQUExQyxJQUFpRSxRQUFRLENBQUM7V0FDdEcsUUFBUSxDQUFDLGdCQUFULENBQUE7RUFGYzs7b0JBSWhCLFlBQUEsR0FBYyxTQUFBO0lBQ1osSUFBQyxDQUFBLElBQUksQ0FBQyxXQUFOLENBQWtCLG9CQUFsQjtJQUNBLElBQUMsQ0FBQSxPQUFPLENBQUMsV0FBVCxDQUFxQixZQUFyQjtJQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsS0FBUixDQUFBO1dBQ0EsSUFBQyxDQUFBLFVBQUQsQ0FBWSxlQUFaO0VBSlk7O29CQU1kLGtCQUFBLEdBQW9CLFNBQUE7QUFDbEIsUUFBQTtJQUFBLElBQUMsQ0FBQSxpQkFBRCxHQUFxQixDQUFDLElBQUMsQ0FBQTtJQUN2QixJQUFBLEdBQVUsSUFBQyxDQUFBLGlCQUFKLEdBQTJCLEdBQTNCLEdBQW9DO1dBQzNDLFVBQUEsQ0FBVyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7UUFDVCxLQUFDLENBQUEsT0FBTyxDQUFDLFdBQVQsQ0FBcUIsZUFBckI7ZUFDQSxLQUFDLENBQUEsTUFBRCxDQUFBO01BRlM7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVgsRUFHRSxJQUhGO0VBSGtCOztvQkFVcEIsUUFBQSxHQUFVLFNBQUE7V0FDUixJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsWUFBbEI7RUFEUTs7b0JBR1YsYUFBQSxHQUFlLFNBQUE7V0FDYixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxtQkFBZCxDQUFrQyxDQUFDLEtBQW5DLENBQUE7RUFEYTs7b0JBR2YsY0FBQSxHQUFnQixTQUFBO1dBQ2QsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsbUJBQWQsQ0FBa0MsQ0FBQyxNQUFuQyxDQUFBO0VBRGM7O29CQUdoQixVQUFBLEdBQVksU0FBQyxNQUFEO0lBQ1YsSUFBQSxDQUFjLE1BQU0sQ0FBQyxPQUFyQjtBQUFBLGFBQUE7O1dBQ0EsT0FBTyxDQUFDLEtBQVIsQ0FBYyxlQUFkLEVBQThCLE1BQTlCO0VBRlU7O29CQUlaLGNBQUEsR0FBZ0IsU0FBQyxNQUFEO0lBQ2QsSUFBQyxDQUFBLG1CQUFELElBQUMsQ0FBQSxpQkFBbUI7SUFDcEIsSUFBVSxJQUFDLENBQUEsY0FBZSxDQUFBLE1BQUEsQ0FBMUI7QUFBQSxhQUFBOztJQUNBLElBQUMsQ0FBQSxVQUFELENBQVksTUFBWjtXQUNBLElBQUMsQ0FBQSxjQUFlLENBQUEsTUFBQSxDQUFoQixHQUEwQjtFQUpaOztvQkFNaEIsYUFBQSxHQUFlLFNBQUE7SUFDYixJQUFBLENBQWMsTUFBTSxDQUFDLE9BQXJCO0FBQUEsYUFBQTs7V0FDQSxPQUFPLENBQUMsYUFBUixDQUFzQixRQUFRLENBQUMsUUFBVCxHQUFvQixRQUFRLENBQUMsTUFBN0IsR0FBc0MsaUJBQTVEO0VBRmE7O29CQUlmLFVBQUEsR0FBWSxTQUFBO1dBQ1YsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsZ0JBQW5CO0VBRFU7O29CQUdaLFFBQUEsR0FBVSxTQUFBO0lBQ1IsSUFBRyxhQUFrQixNQUFsQixFQUFBLGNBQUEsTUFBQSxJQUE0QixDQUFDLE1BQU0sQ0FBQyxhQUFQLElBQXdCLFFBQUEsWUFBb0IsYUFBN0MsQ0FBNUIsSUFBMkYsT0FBTyxVQUFQLEtBQXFCLFFBQW5IO0FBQ0UsYUFBTyxLQURUO0tBQUEsTUFBQTtBQUdFLGFBQU8sTUFIVDs7RUFEUTs7b0JBTVYsYUFBQSxHQUFlLFNBQUE7QUFDYixRQUFBO0FBQUE7QUFBQSxTQUFBLHFDQUFBOztNQUNFLElBQWUsUUFBUyxDQUFHLE1BQUQsR0FBUSxrQkFBVixDQUF4QjtBQUFBLGVBQU8sS0FBUDs7QUFERjtBQUVBLFdBQU8sQ0FBQyxDQUFDLFFBQVMsQ0FBQSxrQkFBQSxDQUFYLElBQWtDO0VBSDVCOzs7Ozs7QUFLakIsQ0FBQSxDQUFFLFNBQUE7U0FDQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsRUFBVixDQUFhLGFBQWIsRUFBNEIsU0FBQTtXQUMxQixDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsSUFBZCxDQUFtQixTQUFBO2FBQU8sSUFBQSxPQUFBLENBQVEsQ0FBQSxDQUFFLElBQUYsQ0FBUjtJQUFQLENBQW5CO0VBRDBCLENBQTVCO0FBREEsQ0FBRjs7QUFLQSxNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQzNUakIsSUFBQSxpQkFBQTtFQUFBOztBQUFBLFVBQUEsR0FBYSxPQUFBLENBQVEscUJBQVI7O0FBRVA7RUFFUyxlQUFDLEVBQUQ7SUFDWCxJQUFDLENBQUEsVUFBRCxHQUFjO0lBQ2QsSUFBQyxDQUFBLFVBQUQsR0FBYztJQUNkLElBQVUsSUFBQyxDQUFBLFlBQUQsQ0FBQSxDQUFWO0FBQUEsYUFBQTs7SUFDQSxJQUFDLENBQUEsSUFBRCxHQUFRLENBQUEsQ0FBRSxNQUFGO0lBQ1IsSUFBQyxDQUFBLGdCQUFELENBQUE7SUFDQSxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxVQUFELENBQUE7RUFORTs7a0JBU2IsZ0JBQUEsR0FBa0IsU0FBQTtXQUNoQixDQUFDLENBQUMsR0FBRixDQUFNLHNCQUFOLEVBQThCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxJQUFEO2VBQzVCLEtBQUMsQ0FBQSxZQUFELENBQWMsSUFBZDtNQUQ0QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBOUI7RUFEZ0I7O2tCQUtsQixZQUFBLEdBQWMsU0FBQyxJQUFEO0lBQ1osSUFBQyxDQUFBLElBQUksQ0FBQyxNQUFOLENBQWEsSUFBYjtJQUNBLElBQUMsQ0FBQSxPQUFELEdBQVcsQ0FBQSxDQUFFLGdCQUFGO1dBRVgsQ0FBQSxDQUFFLGlCQUFGLENBQW9CLENBQUMsRUFBckIsQ0FBd0IsSUFBQyxDQUFBLEtBQXpCLEVBQWdDLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFEO1FBQzlCLEtBQUMsQ0FBQSxVQUFELENBQVksZ0JBQVo7ZUFDQSxLQUFDLENBQUEsV0FBRCxDQUFhLENBQWI7TUFGOEI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWhDO0VBSlk7O2tCQVFkLFdBQUEsR0FBYSxTQUFDLENBQUQ7SUFDWCxJQUFDLENBQUEsT0FBTyxDQUFDLFdBQVQsQ0FBcUIsWUFBckI7SUFDQSxJQUFDLENBQUEsY0FBRCxDQUFBO0lBQ0EsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtXQUNBO0VBSlc7O2tCQU1iLGNBQUEsR0FBZ0IsU0FBQTtBQUNkLFFBQUE7SUFBQSxJQUFjLHVCQUFkO0FBQUEsYUFBQTs7SUFDQSxPQUFBLEdBQWMsSUFBQSxJQUFBLENBQUE7SUFDZCxPQUFPLENBQUMsT0FBUixDQUFnQixPQUFPLENBQUMsT0FBUixDQUFBLENBQUEsR0FBb0IsSUFBQyxDQUFBLFVBQXJDO1dBQ0EsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsSUFBQyxDQUFBLFVBQXBCLEVBQWdDLE1BQWhDLEVBQXdDLE9BQXhDLEVBQWlELEdBQWpEO0VBSmM7O2tCQU1oQixZQUFBLEdBQWMsU0FBQTtJQUNaLElBQW9CLHVCQUFwQjtBQUFBLGFBQU8sTUFBUDs7SUFDQSxJQUFHLDJDQUFIO2FBQ0UsS0FERjtLQUFBLE1BQUE7YUFHRSxNQUhGOztFQUZZOztrQkFRZCxVQUFBLEdBQVksU0FBQTtJQUNWLElBQUcsYUFBa0IsTUFBbEIsRUFBQSxjQUFBLE1BQUEsSUFBNEIsQ0FBQyxNQUFNLENBQUMsYUFBUCxJQUF3QixRQUFBLFlBQW9CLGFBQTdDLENBQTVCLElBQTJGLE9BQU8sVUFBUCxLQUFxQixRQUFuSDtBQUNFLGFBQU8sV0FEVDtLQUFBLE1BQUE7QUFHRSxhQUFPLFFBSFQ7O0VBRFU7O2tCQU9aLFVBQUEsR0FBWSxTQUFDLE1BQUQ7SUFDVixJQUFBLENBQWMsTUFBTSxDQUFDLE9BQXJCO0FBQUEsYUFBQTs7V0FDQSxPQUFPLENBQUMsS0FBUixDQUFjLG9CQUFkLEVBQW9DLE1BQXBDO0VBRlU7Ozs7OztBQUtkLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDaEVqQixJQUFBOztBQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsV0FBUjs7QUFFSDtFQUVTLGdDQUFBO0lBQ1gsSUFBQyxDQUFBLFdBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxjQUFELENBQUE7SUFDQSxJQUFDLENBQUEsV0FBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLE1BQUQsR0FBVSxNQUFNLENBQUMsR0FBUCxDQUFXLHdCQUFYO0lBQ1YsSUFBQyxDQUFBLEdBQUQsQ0FBSyxnQkFBTDtFQUxXOzttQ0FPYixXQUFBLEdBQWEsU0FBQTtXQUNYLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsaUJBQWIsRUFBZ0MsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQsRUFBRyxJQUFIO0FBQzlCLFlBQUE7UUFBQSxLQUFDLENBQUEsR0FBRCxDQUFLLGlCQUFMLEVBQXdCLElBQXhCO1FBQ0EsS0FBQSxHQUFRO1FBQ1IsSUFBRyxLQUFDLENBQUEsa0JBQUQsQ0FBQSxDQUFIO1VBQ0UsY0FBQSxHQUFpQjtpQkFFakIsRUFBQSxDQUFHLFdBQUgsRUFDRTtZQUFBLE9BQUEsRUFBUyxPQUFUO1lBQ0EsYUFBQSxFQUFlLElBQUksQ0FBQyxRQURwQjtZQUVBLFdBQUEsRUFBYSxJQUFJLENBQUMsTUFGbEI7WUFHQSxVQUFBLEVBQVksSUFBSSxDQUFDLEtBSGpCO1lBSUEsVUFBQSxFQUFZLEtBSlo7WUFLQSxjQUFBLEVBQWdCLGNBTGhCO1lBTUEsV0FBQSxFQUFhLElBQUksQ0FBQyxRQU5sQjtXQURGLEVBSEY7U0FBQSxNQUFBO1VBYUUsSUFBRyxLQUFDLENBQUEsZ0JBQUQsQ0FBQSxDQUFIO1lBRUUsY0FBQSxHQUFpQjtZQUNqQixJQUFJLENBQUMsSUFBTCxDQUFVLENBQUMsa0JBQUQsRUFBcUIsSUFBSSxDQUFDLFFBQTFCLEVBQW9DLElBQUksQ0FBQyxNQUF6QyxFQUFpRCxJQUFJLENBQUMsS0FBdEQsRUFBNkQsSUFBSSxDQUFDLEtBQWxFLEVBQXlFLGNBQXpFLENBQVYsRUFIRjs7VUFLQSxJQUFtQixJQUFJLENBQUMsUUFBeEI7bUJBQUEsSUFBSSxDQUFDLFFBQUwsQ0FBQSxFQUFBO1dBbEJGOztNQUg4QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEM7RUFEVzs7bUNBd0JiLGNBQUEsR0FBZ0IsU0FBQTtXQUNkLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsb0JBQWIsRUFBbUMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQsRUFBRyxJQUFIO1FBQ2pDLEtBQUMsQ0FBQSxHQUFELENBQUssb0JBQUwsRUFBMkIsSUFBM0I7UUFDQSxJQUFHLEtBQUMsQ0FBQSxrQkFBRCxDQUFBLENBQUg7aUJBQ0UsRUFBQSxDQUFHLFdBQUgsRUFDRTtZQUFBLE9BQUEsRUFBUyxVQUFUO1lBQ0EsSUFBQSxFQUFNLElBQUksQ0FBQyxHQURYO1dBREYsRUFERjtTQUFBLE1BS0ssSUFBRyxLQUFDLENBQUEsZ0JBQUQsQ0FBQSxDQUFIO2lCQUNILElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQyxxQkFBRCxFQUF3QixJQUFJLENBQUMsR0FBN0IsQ0FBVixFQURHOztNQVA0QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbkM7RUFEYzs7bUNBV2hCLFdBQUEsR0FBYSxTQUFBO1dBQ1gsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSxrQkFBYixFQUFpQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFHLElBQUg7UUFDL0IsS0FBQyxDQUFBLEdBQUQsQ0FBSyxrQkFBTCxFQUF5QixJQUF6QjtRQUNBLElBQUcsS0FBQyxDQUFBLGtCQUFELENBQUEsQ0FBSDtpQkFDRSxFQUFBLENBQUcsV0FBSCxFQUNFO1lBQUEsT0FBQSxFQUFTLFFBQVQ7WUFDQSxhQUFBLEVBQWUsSUFBSSxDQUFDLE9BRHBCO1lBRUEsWUFBQSxFQUFjLElBQUksQ0FBQyxNQUZuQjtZQUdBLFlBQUEsRUFBYyxJQUFJLENBQUMsR0FIbkI7V0FERixFQURGO1NBQUEsTUFPSyxJQUFHLEtBQUMsQ0FBQSxnQkFBRCxDQUFBLENBQUg7aUJBQ0gsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUNSLG1CQURRLEVBQ2EsSUFBSSxDQUFDLE9BRGxCLEVBQzJCLElBQUksQ0FBQyxNQURoQyxFQUN3QyxJQUFJLENBQUMsR0FEN0MsQ0FBVixFQURHOztNQVQwQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakM7RUFEVzs7bUNBZWIsa0JBQUEsR0FBb0IsU0FBQTtXQUNsQjtFQURrQjs7bUNBR3BCLGdCQUFBLEdBQWtCLFNBQUE7V0FDaEI7RUFEZ0I7O21DQUdsQixHQUFBLEdBQUssU0FBQyxNQUFELEVBQVMsR0FBVDtXQUNILElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLE1BQWIsRUFBcUIsR0FBckI7RUFERzs7Ozs7O0FBS1AsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUN2RWpCLElBQUE7O0FBQU07RUFFUyxzQkFBQTtBQUNYLFFBQUE7SUFBQSxPQUFBLEdBQVUsQ0FBQSxDQUFFLG9CQUFGO0lBQ1YsU0FBQSxHQUFZLENBQUksT0FBTyxRQUFRLENBQUMsVUFBaEIsS0FBOEIsV0FBakMsR0FBa0QsT0FBbEQsR0FBQSxNQUFEO0lBRVosQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEVBQVosQ0FBZSxTQUFmLEVBQTBCLHFCQUExQixFQUFpRCxTQUFBO01BQy9DLElBQStDLE9BQU8sQ0FBQyxRQUFSLENBQWlCLE1BQWpCLENBQS9DO1FBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxvQkFBYixDQUFrQyxDQUFDLEtBQW5DLENBQUEsRUFBQTs7YUFDQTtJQUYrQyxDQUFqRDtFQUpXOzs7Ozs7QUFTZixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ1pqQixJQUFBOztBQUFBLFFBQUEsR0FBVyxPQUFBLENBQVEsYUFBUjs7QUFFTDtFQUVTLHNCQUFBO0lBQ1gsSUFBRyxJQUFDLENBQUEsU0FBRCxDQUFBLENBQUg7TUFDRSxJQUFDLENBQUEsYUFBRCxDQUFBLEVBREY7O0VBRFc7O3lCQUliLFNBQUEsR0FBVyxTQUFBO0lBQ1QsSUFBZ0IsT0FBTyxRQUFQLEtBQW1CLENBQUksVUFBdkM7QUFBQSxhQUFPLE1BQVA7O0lBQ0EsSUFBZ0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQUEsS0FBK0MsSUFBL0Q7QUFBQSxhQUFPLE1BQVA7O1dBQ0E7RUFIUzs7eUJBS1gsYUFBQSxHQUFlLFNBQUE7SUFDYixJQUFDLENBQUEsU0FBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLFFBQUQsQ0FBQTtXQUNBLElBQUMsQ0FBQSxRQUFELENBQUE7RUFIYTs7eUJBS2YsU0FBQSxHQUFXLFNBQUE7QUFDVCxRQUFBO0lBQUEsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLDRCQUF2QjtJQUNMLElBQUcsRUFBQSxLQUFNLElBQVQ7TUFDRSxRQUFBLEdBQWUsSUFBQSxRQUFBLENBQVMsRUFBVCxFQUNiO1FBQUEsTUFBQSxFQUFjLEVBQWQ7UUFDQSxTQUFBLEVBQ0U7VUFBQSxFQUFBLEVBQVksR0FBWjtVQUNBLElBQUEsRUFBWSxDQURaO1NBRkY7UUFJQSxPQUFBLEVBQ0U7VUFBQSxPQUFBLEVBQVksVUFBWjtVQUNBLE1BQUEsRUFBWSxhQURaO1VBRUEsUUFBQSxFQUFZLFlBRlo7U0FMRjtPQURhO2FBU2YsUUFBUSxDQUFDLElBQVQsQ0FBQSxFQVZGOztFQUZTOzt5QkFjWCxRQUFBLEdBQVUsU0FBQTtBQUNSLFFBQUE7SUFBQSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkI7SUFDTCxJQUFHLEVBQUEsS0FBTSxJQUFUO01BQ0UsUUFBQSxHQUFlLElBQUEsUUFBQSxDQUFTLEVBQVQsRUFDYjtRQUFBLE1BQUEsRUFBYyxFQUFkO1FBQ0EsU0FBQSxFQUNFO1VBQUEsRUFBQSxFQUFZLEdBQVo7VUFDQSxJQUFBLEVBQVksQ0FEWjtTQUZGO09BRGE7YUFLZixRQUFRLENBQUMsSUFBVCxDQUFBLEVBTkY7O0VBRlE7O3lCQVVWLFFBQUEsR0FBVSxTQUFBO0FBQ1IsUUFBQTtJQUFBLEVBQUEsR0FBSyxRQUFRLENBQUMsYUFBVCxDQUF1Qix5QkFBdkI7SUFDTCxJQUFHLEVBQUEsS0FBTSxJQUFUO01BQ0UsUUFBQSxHQUFlLElBQUEsUUFBQSxDQUFTLEVBQVQsRUFDYjtRQUFBLE1BQUEsRUFBWSxHQUFaO1FBQ0EsU0FBQSxFQUFZLENBRFo7T0FEYTthQUdmLFFBQVEsQ0FBQyxJQUFULENBQUEsRUFKRjs7RUFGUTs7Ozs7O0FBVVosTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNwRGpCLElBQUEsUUFBQTtFQUFBOztBQUFNO0VBQ1Msa0JBQUE7SUFDWCxJQUFDLENBQUEsbUJBQUQsQ0FBQTtJQUNBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUE7YUFDaEIsQ0FBQSxDQUFFLHlIQUFGLENBQTRILENBQUMsSUFBN0gsQ0FBa0ksK0ZBQWxJLENBQWtPLENBQUMsR0FBbk8sQ0FBdU8sS0FBdk8sQ0FBNk8sQ0FBQyxHQUE5TyxDQUFrUCxRQUFsUCxFQUE0UCxpQkFBNVAsQ0FBOFEsQ0FBQyxRQUEvUSxDQUFBO0lBRGdCLENBQWxCO0VBRlc7O3FCQUtiLG1CQUFBLEdBQXFCLFNBQUE7V0FDbkIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFWLENBQ0U7TUFBQSxRQUFBLEVBQVUsU0FBQyxPQUFEO0FBQ1IsWUFBQTtRQUFBLFFBQUEsR0FBa0I7UUFDbEIsTUFBQSxHQUFrQjtRQUNsQixRQUFBLEdBQWtCO1FBQ2xCLGFBQUEsR0FBa0I7UUFFbEIsUUFBQSxHQUNFO1VBQUEsR0FBQSxFQUNFO1lBQUEsWUFBQSxFQUFjLENBQWQ7WUFDQSxPQUFBLEVBQVMsQ0FEVDtXQURGO1VBR0EsU0FBQSxFQUNFO1lBQUEsWUFBQSxFQUFjLENBQWQ7WUFDQSxPQUFBLEVBQVMsQ0FEVDtXQUpGO1VBTUEsV0FBQSxFQUNFO1lBQUEsTUFBQSxFQUFRLEdBQVI7WUFDQSxNQUFBLEVBQVEsR0FEUjtXQVBGO1VBU0EsUUFBQSxFQUNFO1lBQUEsUUFBQSxFQUFVLFVBQVY7WUFDQSxPQUFBLEVBQVMsRUFEVDtXQVZGOztRQWFGLFFBQUEsR0FBVyxNQUFNLENBQUMsTUFBUCxDQUFjLFFBQWQsRUFBd0IsT0FBeEI7UUFFWCxHQUFBLEdBQU0sU0FBQyxHQUFEO3NFQUFTLE9BQU8sQ0FBRSxHQUFULENBQWEsR0FBYjtRQUFUO1FBRU4sYUFBQSxHQUFnQixTQUFBO0FBRWQsY0FBQTtVQUFBLG9CQUFBLEdBQXVCO1VBQ3ZCLElBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFiLEdBQXVCLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBcEMsS0FBb0QsQ0FBdkQ7WUFDRSxJQUFHLFFBQVEsQ0FBQyxRQUFULENBQWtCLFlBQWxCLENBQUEsSUFBbUMsb0JBQUEsS0FBd0IsQ0FBOUQ7Y0FDRSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixFQUE5QixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFlBQUEsQ0FBQSxDQUF6QztjQUNBLFVBQUEsQ0FBVyxXQUFYLEVBRkY7O21CQUlBLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBYixHQUxGOztRQUhjO1FBVWhCLGtCQUFBLEdBQXFCLFNBQUE7VUFDbkIsSUFBRyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQW5CLEdBQTZCLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBaEQsS0FBZ0UsQ0FBbkU7WUFDRSxhQUFBLENBQUEsRUFERjs7aUJBRUEsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFuQjtRQUhtQjtRQUtyQixRQUFBLEdBQVcsU0FBQTtpQkFDVCxDQUFBLENBQUUsa0JBQUYsQ0FBcUIsQ0FBQyxJQUF0QixDQUEyQixFQUEzQjtRQURTO1FBR1gsWUFBQSxHQUFlLFNBQUEsR0FBQTtRQWdCZixZQUFBLEdBQWUsU0FBQTtBQUNiLGNBQUE7VUFBQSxRQUFBLEdBQVksQ0FBQSxDQUFFLGlEQUFGO1VBQ1osU0FBQSxHQUFZLENBQUEsQ0FBRSx1Q0FBRjtVQUNaLFFBQUEsR0FBWSxDQUFBLENBQUUsc0NBQUY7VUFDWixLQUFBLEdBQVksQ0FBQSxDQUFFLGdDQUFGO1VBQ1osT0FBQSxHQUFZLENBQUEsQ0FBRSxxQ0FBRjtVQUNaLEtBQUEsR0FBWSxDQUFBLENBQUUsa0ZBQUY7VUFDWixJQUFBLEdBQVksQ0FBQSxDQUFFLGtHQUFGO1VBQ1osSUFBQSxHQUFZLENBQUEsQ0FBRSxpR0FBRjtVQUNaLE9BQUEsR0FBWSxDQUFBLENBQUUsd0NBQUY7VUFDWixLQUFBLEdBQVksQ0FBQSxDQUFFLGlDQUFGO1VBQ1osT0FBQSxHQUFZLENBQUEsQ0FBRSwrQ0FBRjtVQUNaLEtBQUEsR0FBWSxDQUFBLENBQUUsNkNBQUY7VUFDWixNQUFBLEdBQVksQ0FBQSxDQUFFLDJDQUFGO1VBRVosV0FBQSxHQUFpQixRQUFBLENBQUEsQ0FBSCxHQUFtQixZQUFuQixHQUFxQztVQUVuRCxLQUFLLENBQUMsRUFBTixDQUFTLFdBQVQsRUFBc0IsU0FBQyxDQUFEO1lBQ3BCLFlBQUEsQ0FBQTtZQUNBLENBQUMsQ0FBQyxjQUFGLENBQUE7bUJBQ0E7VUFIb0IsQ0FBdEI7VUFLQSxJQUFJLENBQUMsRUFBTCxDQUFRLFdBQVIsRUFBcUIsU0FBQTttQkFDbkIsSUFBQSxDQUFLLENBQUw7VUFEbUIsQ0FBckI7VUFHQSxJQUFJLENBQUMsRUFBTCxDQUFRLFdBQVIsRUFBcUIsU0FBQTttQkFDbkIsSUFBQSxDQUFLLENBQUMsQ0FBTjtVQURtQixDQUFyQjtVQUlBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxPQUFaLENBQW9CLENBQUEsU0FBQSxLQUFBO21CQUFBLFNBQUMsQ0FBRDtjQUNsQixJQUFBLENBQWMsUUFBQSxDQUFBLENBQWQ7QUFBQSx1QkFBQTs7Y0FDQSxJQUFHLENBQUMsQ0FBQyxPQUFGLEtBQWEsRUFBaEI7dUJBQXdCLElBQUEsQ0FBSyxDQUFDLENBQU4sRUFBeEI7ZUFBQSxNQUNLLElBQUcsQ0FBQyxDQUFDLE9BQUYsS0FBYSxFQUFoQjt1QkFBd0IsSUFBQSxDQUFLLENBQUwsRUFBeEI7ZUFBQSxNQUNBLElBQUcsQ0FBQyxDQUFDLE9BQUYsS0FBYSxFQUFoQjt1QkFBd0IsWUFBQSxDQUFBLEVBQXhCOztZQUphO1VBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQjtVQU1BLEtBQUssQ0FBQyxJQUFOLENBQVcsTUFBTSxDQUFDLE1BQWxCO1VBRUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxPQUFkO1VBQ0EsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiO1VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLEVBQXdCLE1BQXhCLEVBQWdDLEtBQWhDO1VBQ0EsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEI7VUFDQSxTQUFTLENBQUMsTUFBVixDQUFpQixRQUFqQjtVQUNBLFFBQVEsQ0FBQyxNQUFULENBQWdCLFNBQWhCLEVBQTJCLE9BQTNCLEVBQW9DLEtBQXBDO1VBRUEsSUFBRyxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFuQjtZQUNFLFFBQVEsQ0FBQyxNQUFULENBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBREY7O2lCQUdBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLFFBQWpCO1FBL0NhO1FBaURmLElBQUEsR0FBTyxTQUFDLEdBQUQ7QUFDTCxjQUFBO1VBQUEsS0FBQSxHQUFRLGFBQUEsR0FBZ0I7VUFHeEIsSUFBRyxLQUFBLEtBQVMsTUFBTSxDQUFDLE1BQW5CO1lBQ0UsS0FBQSxHQUFRLEVBRFY7V0FBQSxNQUVLLElBQUcsS0FBQSxLQUFTLENBQUMsQ0FBYjtZQUNILEtBQUEsR0FBUSxNQUFNLENBQUMsTUFBUCxHQUFnQixFQURyQjs7VUFHTCxJQUFBLENBQUEsQ0FBYyxLQUFBLElBQVMsQ0FBVCxJQUFjLEtBQUEsR0FBUSxNQUFNLENBQUMsTUFBN0IsSUFBdUMsUUFBQSxDQUFBLENBQXJELENBQUE7QUFBQSxtQkFBQTs7VUFDQSxJQUFBLEdBQVUsR0FBQSxHQUFNLENBQVQsR0FBZ0IsTUFBaEIsR0FBNEI7VUFDbkMsVUFBQSxDQUFjLElBQUQsR0FBTSxTQUFuQjtpQkFDQSxxQkFBQSxDQUFzQixLQUF0QjtRQVpLO1FBY1AscUJBQUEsR0FBd0IsU0FBQyxLQUFEO1VBQ3RCLGFBQUEsR0FBZ0I7aUJBQ2hCLFlBQUEsQ0FBYSxNQUFPLENBQUEsS0FBQSxDQUFwQjtRQUZzQjtRQUl4QixtQkFBQSxHQUFzQixTQUFDLEdBQUQ7aUJBQ3BCLENBQUMsQ0FBQyxJQUFGLENBQU8sTUFBUCxFQUFlLFNBQUMsQ0FBRCxFQUFJLEtBQUo7WUFDYixJQUFHLEtBQUssQ0FBQyxHQUFOLEtBQWEsR0FBaEI7Y0FDRSxhQUFBLEdBQWdCO2NBQ2hCLFlBQUEsQ0FBYSxLQUFiO0FBQ0EscUJBQU8sTUFIVDs7VUFEYSxDQUFmO1FBRG9CO1FBT3RCLFlBQUEsR0FBZSxTQUFDLEtBQUQ7QUFDYixjQUFBO1VBQUEsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsWUFBbEI7VUFDQSxJQUFBLEdBQU8sUUFBUSxDQUFDLElBQVQsQ0FBYyxpQkFBZDtVQUNQLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBVixFQUFpQixLQUFLLENBQUMsR0FBdkI7VUFDQSxRQUFRLENBQUMsSUFBVCxDQUFjLGtCQUFkLENBQWlDLENBQUMsSUFBbEMsQ0FBdUMsS0FBSyxDQUFDLE9BQTdDO1VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYyx5QkFBZCxDQUF3QyxDQUFDLElBQXpDLENBQThDLGFBQUEsR0FBYyxDQUE1RDtVQUNBLGFBQUEsQ0FBQTtpQkFDQSxrQkFBQSxDQUFBO1FBUGE7UUFTZixRQUFBLEdBQVcsU0FBQTtpQkFDVCxRQUFRLENBQUMsUUFBVCxDQUFrQixZQUFsQjtRQURTO1FBR1gsTUFBQSxHQUFTLFNBQUE7QUFDUCxjQUFBO1VBQUEsSUFBQSxDQUFjLFFBQWQ7QUFBQSxtQkFBQTs7VUFDQSxRQUFRLENBQUMsV0FBVCxDQUFxQixnQ0FBckI7VUFDQSxLQUFBLEdBQVEsUUFBUSxDQUFDLEtBQVQsQ0FBQTtVQUNSLElBQUcsS0FBQSxJQUFTLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBakM7bUJBQ0UsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsWUFBbEIsRUFERjtXQUFBLE1BRUssSUFBRyxLQUFBLElBQVMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUE5QixJQUF5QyxLQUFBLEdBQVEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUF6RTtZQUNILFFBQVEsQ0FBQyxRQUFULENBQWtCLFdBQWxCO21CQUNBLFFBQUEsQ0FBQSxFQUZHO1dBQUEsTUFHQSxJQUFHLEtBQUEsR0FBUSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQWhDO1lBQ0gsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsV0FBbEI7bUJBQ0EsUUFBQSxDQUFBLEVBRkc7O1FBVEU7UUFhVCxNQUFBLEdBQVMsU0FBQTtBQUNQLGNBQUE7VUFBQSxJQUFBLENBQWMsUUFBQSxDQUFBLENBQWQ7QUFBQSxtQkFBQTs7VUFDQSxRQUFBLEdBQVc7aUJBQ1gsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLENBQUEsU0FBQSxLQUFBO21CQUFBLFNBQUE7Y0FDckIsSUFBRyxRQUFBLEdBQVcsRUFBWCxJQUFpQixDQUFDLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxLQUFWLENBQUEsQ0FBQSxHQUFvQixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQTFDLENBQWpCLElBQXVFLFFBQUEsR0FBVyxDQUFyRjtnQkFDRSxRQUFBLEdBQVc7Z0JBQ1gsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsUUFBakI7Z0JBQ0EsWUFBQSxDQUFBLEVBSEY7O3FCQUtBLFFBQUE7WUFOcUI7VUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXZCO1FBSE87UUFXVCxVQUFBLEdBQWEsU0FBQyxNQUFEO1VBQ1gsSUFBQSxDQUFjLE1BQU0sQ0FBQyxPQUFyQjtBQUFBLG1CQUFBOztpQkFDQSxPQUFPLENBQUMsS0FBUixDQUFjLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBaEMsRUFBeUMsTUFBekM7UUFGVztRQUliLGNBQUEsR0FBaUIsU0FBQyxNQUFEO1VBQ2YsSUFBVSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQVEsQ0FBQSxNQUFBLENBQXBDO0FBQUEsbUJBQUE7O1VBQ0EsVUFBQSxDQUFXLE1BQVg7aUJBQ0EsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFRLENBQUEsTUFBQSxDQUExQixHQUFvQztRQUhyQjtRQUtqQixhQUFBLEdBQWdCLFNBQUE7VUFDZCxJQUFBLENBQWMsTUFBTSxDQUFDLE9BQXJCO0FBQUEsbUJBQUE7O2lCQUNBLE9BQU8sQ0FBQyxhQUFSLENBQXNCLFFBQVEsQ0FBQyxRQUFULEdBQW9CLFFBQVEsQ0FBQyxNQUE3QixHQUFzQyxpQkFBNUQ7UUFGYztRQUloQixRQUFBLEdBQVcsU0FBQTtVQUNULElBQUcsYUFBa0IsTUFBbEIsRUFBQSxjQUFBLE1BQUEsSUFBNEIsQ0FBQyxNQUFNLENBQUMsYUFBUCxJQUF3QixRQUFBLFlBQW9CLGFBQTdDLENBQTVCLElBQTJGLE9BQU8sVUFBUCxLQUFxQixRQUFuSDtBQUNFLG1CQUFPLEtBRFQ7V0FBQSxNQUFBO0FBR0UsbUJBQU8sTUFIVDs7UUFEUztRQU1YLFlBQUEsR0FBZSxTQUFBO1VBQ2IsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsWUFBckI7VUFDQSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQWIsR0FBdUIsQ0FBQztpQkFDeEIsVUFBQSxDQUFXLGdCQUFYO1FBSGE7UUFPZixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFNBQUMsS0FBRCxFQUFPLEVBQVA7aUJBQ1gsTUFBTSxDQUFDLElBQVAsQ0FDRTtZQUFBLEdBQUEsRUFBSyxDQUFBLENBQUUsRUFBRixDQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FBTDtZQUNBLE9BQUEsRUFBUyxDQUFBLENBQUUsRUFBRixDQUFLLENBQUMsSUFBTixDQUFXLEtBQVgsQ0FBaUIsQ0FBQyxJQUFsQixDQUF1QixLQUF2QixDQURUO1dBREY7UUFEVyxDQUFiO1FBS0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFNBQUMsQ0FBRDtVQUNsQixDQUFDLENBQUMsY0FBRixDQUFBO1VBRUEsSUFBQSxDQUFzQixRQUF0QjtZQUFBLFlBQUEsQ0FBQSxFQUFBOztVQUNBLGNBQUEsQ0FBZSxlQUFmO1VBQ0EsTUFBQSxDQUFBO1VBQ0EsbUJBQUEsQ0FBb0IsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxNQUFiLENBQXBCO1VBQ0EsTUFBQSxDQUFBO0FBQ0EsaUJBQU87UUFSVyxDQUFwQjtlQVVBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01Bak5WLENBQVY7S0FERjtFQURtQjs7Ozs7O0FBcU52QixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQzNOakIsSUFBQTs7QUFBTTs7O0VBR0osVUFBQyxDQUFBLGFBQUQsR0FBaUIsU0FBQyxJQUFEO0FBQ2YsUUFBQTtJQUFBLE1BQUEsR0FBUyxJQUFJLENBQUMsT0FBTCxDQUFhLGdCQUFiO0lBQ1QsV0FBQSxHQUFjLENBQUEsQ0FBRSxnQkFBRixDQUFtQixDQUFDLEtBQXBCLENBQTBCLE1BQTFCLENBQUEsR0FBb0M7V0FDbEQseUJBQUEsR0FBNEI7RUFIYjs7RUFLakIsVUFBQyxDQUFBLFdBQUQsR0FBZSxTQUFDLElBQUQ7QUFDYixRQUFBO0lBQUEsTUFBQSxHQUFTLElBQUksQ0FBQyxPQUFMLENBQWEsZ0JBQWI7SUFDVCxVQUFBLEdBQWEsTUFBTyxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQVMsQ0FBQyxLQUFwQixDQUEwQixHQUExQixDQUErQixDQUFBLENBQUE7SUFDNUMsSUFBQSxHQUFPLFVBQVUsQ0FBQyxLQUFYLENBQWlCLEdBQWpCLENBQXFCLENBQUMsT0FBdEIsQ0FBQSxDQUErQixDQUFDLElBQWhDLENBQXFDLEdBQXJDLENBQXlDLENBQUMsT0FBMUMsQ0FBa0QsTUFBbEQsRUFBMEQsU0FBQyxDQUFEO2FBQy9ELENBQUMsQ0FBQyxXQUFGLENBQUE7SUFEK0QsQ0FBMUQ7SUFHUCxhQUFBLEdBQWdCLENBQUMsQ0FBQyxJQUFGLENBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxnQkFBWixDQUE2QixDQUFDLElBQTlCLENBQUEsQ0FBb0MsQ0FBQyxPQUFyQyxDQUE2QyxHQUE3QyxFQUFrRCxFQUFsRCxDQUFQO1dBQ2hCLGFBQUEsR0FBZ0IsR0FBaEIsR0FBc0I7RUFQVDs7RUFTZixVQUFDLENBQUEsVUFBRCxHQUFjLFNBQUMsSUFBRDtBQUVaLFFBQUE7SUFBQSxJQUFHLElBQUksQ0FBQyxPQUFMLENBQWEsMEJBQWIsQ0FBd0MsQ0FBQyxNQUF6QyxHQUFrRCxDQUFyRDtNQUNFLE1BQUEsR0FBUyxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQWIsQ0FBdUIsQ0FBQyxJQUF4QixDQUE2QixtQkFBN0I7TUFDVCxHQUFBLEdBQU0sTUFBTSxDQUFDLEtBQVAsQ0FBYSxJQUFJLENBQUMsT0FBTCxDQUFhLG1CQUFiLENBQWIsQ0FBQSxHQUFrRDthQUN4RCxVQUFBLEdBQWEsSUFIZjtLQUFBLE1BQUE7TUFLRSxNQUFBLEdBQVMsSUFBSSxDQUFDLE9BQUwsQ0FBYSxnQkFBYjtNQUNULEdBQUEsR0FBTSxNQUFNLENBQUMsSUFBUCxDQUFZLFNBQVosQ0FBc0IsQ0FBQyxLQUF2QixDQUE2QixJQUFJLENBQUMsTUFBTCxDQUFZLFNBQVosQ0FBN0IsQ0FBQSxHQUF1RDthQUM3RCxVQUFBLEdBQWEsSUFQZjs7RUFGWTs7RUFXZCxVQUFDLENBQUEsa0JBQUQsR0FBcUIsU0FBQyxJQUFEO0FBQ25CLFFBQUE7SUFBQSxNQUFBLEdBQVMsSUFBSSxDQUFDLE9BQUwsQ0FBYSxZQUFiO0lBQ1QsR0FBQSxHQUFNLE1BQU0sQ0FBQyxJQUFQLENBQVksY0FBWixDQUEyQixDQUFDLEtBQTVCLENBQWtDLElBQWxDLENBQUEsR0FBMEM7V0FDaEQsVUFBQSxHQUFhO0VBSE07Ozs7OztBQU12QixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ2xDakIsSUFBQSxvQkFBQTtFQUFBOztBQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsV0FBUjs7QUFFSDtFQUdTLHNCQUFDLE9BQUQ7QUFDWCxRQUFBO0lBRFksSUFBQyxDQUFBLFVBQUQ7Ozs7Ozs7O0lBQ1osSUFBQyxDQUFBLE1BQUQsR0FBVSxNQUFNLENBQUMsR0FBUCxDQUFXLGNBQVg7SUFFVixJQUFDLENBQUEsT0FBRCxHQUFXLENBQUEsQ0FBRSxJQUFDLENBQUEsT0FBSDtJQUdYLElBQUMsQ0FBQSxpQkFBRCxHQUFxQjtJQUdyQixJQUFDLENBQUEsT0FBRCxHQUFXO0lBRVgsUUFBQSxHQUNFO01BQUEsWUFBQSxFQUFjLElBQUMsQ0FBQSxPQUFmOztJQUdGLElBQUMsQ0FBQSxJQUFELEdBQ0U7TUFBQSxLQUFBLEVBQVUsSUFBQyxDQUFBLE9BQUYsR0FBVSxTQUFWLEdBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxRQUFSLENBQUQsQ0FBM0I7TUFDQSxNQUFBLEVBQVcsSUFBQyxDQUFBLE9BQUYsR0FBVSxVQURwQjtNQUVBLEtBQUEsRUFBVSxJQUFDLENBQUEsT0FBRixHQUFVLFFBRm5CO01BR0EsUUFBQSxFQUFVLFdBSFY7O0lBT0YsSUFBQyxDQUFBLE1BQUQsR0FDRTtNQUFBLFFBQUEsRUFBVSxNQUFWO01BQ0EsT0FBQSxFQUFTLFlBRFQ7TUFFQSxRQUFBLEVBQVUsYUFGVjtNQUdBLEtBQUEsRUFBTyx1QkFIUDtNQUlBLE1BQUEsRUFBUSxRQUpSO01BS0EsTUFBQSxFQUFRLFFBTFI7TUFNQSxLQUFBLEVBQU8sRUFOUDs7SUFTRixDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsRUFBVixDQUFhLHNCQUFiLEVBQXFDLElBQUMsQ0FBQSxjQUF0QztJQUNBLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBdEIsQ0FBNkIsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7UUFDM0IsSUFBQSxDQUFjLENBQUMsQ0FBQyxJQUFoQjtBQUFBLGlCQUFBOztRQUNBLElBQUEsQ0FBYyxDQUFDLENBQUMsSUFBSyxDQUFBLFVBQUEsQ0FBckI7QUFBQSxpQkFBQTs7UUFDQSxJQUFHLENBQUMsQ0FBQyxJQUFLLENBQUEsVUFBQSxDQUFQLEtBQXNCLHNCQUF6QjtpQkFDRSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQixDQUFDLENBQUMsSUFBSyxDQUFBLFVBQUEsQ0FBekIsRUFERjs7TUFIMkI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTdCO0VBbENXOzt5QkE0Q2IsY0FBQSxHQUFnQixTQUFBO1dBQ1YsSUFBQSxrQkFBQSxDQUFtQixJQUFDLENBQUEsT0FBcEIsQ0FBNEIsQ0FBQyxHQUE3QixDQUFBLENBQWtDLENBQUMsSUFBbkMsQ0FBd0MsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLElBQUQ7UUFDMUMsS0FBQyxDQUFBLGVBQUQsQ0FBaUIsSUFBakI7ZUFDQSxLQUFDLENBQUEsaUJBQUQsQ0FBbUIsSUFBbkI7TUFGMEM7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhDLENBR0gsQ0FBQyxJQUhFLENBR0csQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7ZUFDTCxLQUFDLENBQUEsYUFBRCxDQUFBO01BREs7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBSEg7RUFEVTs7eUJBUWhCLGlCQUFBLEdBQW1CLFNBQUMsSUFBRDtXQUNiLElBQUEsZUFBQSxDQUFnQixJQUFDLENBQUEsT0FBakIsRUFBMEIsSUFBMUIsQ0FBK0IsQ0FBQyxHQUFoQyxDQUFBLENBQXFDLENBQUMsSUFBdEMsQ0FBMkMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLElBQUQ7ZUFDN0MsS0FBQyxDQUFBLGtCQUFELENBQW9CLElBQXBCO01BRDZDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEzQztFQURhOzt5QkFLbkIsZUFBQSxHQUFpQixTQUFDLElBQUQ7V0FDZixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxJQUFDLENBQUEsY0FBRCxDQUFnQixJQUFoQixDQUFkO0VBRGU7O3lCQUdqQixhQUFBLEdBQWUsU0FBQTtXQUNiLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLElBQUMsQ0FBQSxZQUFmO0VBRGE7O3lCQUdmLFlBQUEsR0FBYyxTQUFBO1dBQ1osa1BBQUEsR0FRbUIsSUFBQyxDQUFBLElBQUksQ0FBQyxLQVJ6QixHQVErQixLQVIvQixHQVFtQyxJQUFDLENBQUEsTUFBTSxDQUFDLEtBUjNDLEdBUWlEO0VBVHJDOzt5QkFnQmQsY0FBQSxHQUFnQixTQUFDLElBQUQ7SUFDZCxJQUFHLFlBQUg7YUFDRSxrSUFBQSxHQUc2RCxDQUFDLElBQUMsQ0FBQSxXQUFELENBQWEsSUFBYixDQUFELENBSDdELEdBR2lGLEtBSGpGLEdBR3FGLElBQUMsQ0FBQSxNQUFNLENBQUMsS0FIN0YsR0FHbUcsb0RBSG5HLEdBSTZDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FKekQsR0FJNkQsV0FKN0QsR0FJc0UsSUFBSSxDQUFDLFFBSjNFLEdBSW9GLEdBSnBGLEdBSXVGLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFKL0YsR0FJc0csbUJBSnRHLEdBS2MsSUFBSSxDQUFDLFVBTG5CLEdBSzhCLHdGQUw5QixHQVFpQyxJQUFDLENBQUEsTUFBTSxDQUFDLFFBUnpDLEdBUW9ELElBQUksQ0FBQyxVQVJ6RCxHQVFvRSxHQVJwRSxHQVF1RSxJQUFJLENBQUMsU0FSNUUsR0FRc0YsbUNBUnRGLEdBVWtCLENBQUMsSUFBQyxDQUFBLFdBQUQsQ0FBYSxJQUFiLENBQUQsQ0FWbEIsR0FVc0MsS0FWdEMsR0FVMEMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxRQVZsRCxHQVUyRCxzQ0FWM0QsR0FVK0YsSUFBQyxDQUFBLE1BQU0sQ0FBQyxLQVZ2RyxHQVU2RyxtR0FWN0csR0FZdUUsSUFBQyxDQUFBLElBQUksQ0FBQyxNQVo3RSxHQVlvRixLQVpwRixHQVl3RixJQUFDLENBQUEsTUFBTSxDQUFDLE1BWmhHLEdBWXVHLDZCQWJ6Rzs7RUFEYzs7eUJBb0JoQixrQkFBQSxHQUFvQixTQUFDLElBQUQ7QUFDbEIsUUFBQTtJQUFBLElBQUcscURBQUg7TUFDRSxLQUFBLEdBQVEsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxJQUFJLENBQUMsY0FBWCxFQUEyQixJQUFDLENBQUEsaUJBQTVCLENBQThDLENBQUMsSUFBL0MsQ0FBb0QsRUFBcEQ7TUFDUixDQUFBLENBQUUsR0FBQSxHQUFJLElBQUMsQ0FBQSxpQkFBUCxDQUEyQixDQUFDLE1BQTVCLENBQW1DLEtBQW5DO2FBQ0EsQ0FBQSxDQUFFLG9CQUFGLENBQXVCLENBQUMsSUFBeEIsQ0FBNkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFqRCxFQUhGO0tBQUEsTUFBQTthQUtFLENBQUEsQ0FBRSxvQkFBRixDQUF1QixDQUFDLElBQXhCLENBQTZCLEdBQTdCLEVBTEY7O0VBRGtCOzt5QkFTcEIsaUJBQUEsR0FBbUIsU0FBQyxJQUFEO1dBQ2pCLGdCQUFBLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBN0IsR0FBaUMsS0FBakMsR0FBcUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFoRCxHQUFxRDtFQURwQzs7eUJBSW5CLFdBQUEsR0FBYSxTQUFDLElBQUQ7V0FDWCxFQUFBLEdBQUUsQ0FBQyxJQUFDLENBQUEsVUFBRCxDQUFZLElBQVosQ0FBRCxDQUFGLEdBQXVCLElBQUMsQ0FBQSxJQUFJLENBQUM7RUFEbEI7O3lCQUliLFVBQUEsR0FBWSxTQUFDLElBQUQ7V0FDUCxJQUFDLENBQUEsSUFBSSxDQUFDLEtBQVAsR0FBYSxHQUFiLEdBQWdCLElBQUksQ0FBQztFQURiOzt5QkFJWixHQUFBLEdBQUssU0FBQyxPQUFEO1dBQ0gsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsY0FBYixFQUE2QixPQUE3QjtFQURHOzs7Ozs7QUFLUCxNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ2pJakIsSUFBQTs7QUFBTTtFQUVTLGtCQUFBO0lBQ1gsSUFBQSxDQUFjLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLGlCQUFuQixDQUFkO0FBQUEsYUFBQTs7SUFDQSxJQUFDLENBQUEscUJBQUQsQ0FBQTtJQUdBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxXQUFWLENBQXNCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtRQUNwQixLQUFDLENBQUEscUJBQUQsQ0FBQTtNQURvQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBdEI7SUFLQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsSUFBVixDQUFlLE1BQWYsRUFBdUIsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO1FBQ3JCLElBQVUsS0FBQyxDQUFBLE1BQUQsQ0FBQSxDQUFBLEtBQWUsU0FBekI7QUFBQSxpQkFBQTs7UUFDQSxLQUFDLENBQUEsZ0JBQUQsQ0FBQTtNQUZxQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBdkI7QUFNQTtFQWhCVzs7cUJBb0JiLHFCQUFBLEdBQXVCLFNBQUE7QUFDckIsUUFBQTtJQUFBLFlBQUEsR0FBZSxDQUFBLENBQUUsMENBQUY7SUFDZixjQUFBLEdBQWlCLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQUE7SUFDakIsU0FBQSxHQUFZLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsTUFBbEIsQ0FBQTtJQUNaLElBQWdCLENBQUksWUFBWSxDQUFDLE1BQWpCLEdBQTBCLENBQTFDO0FBQUEsYUFBTyxNQUFQOztJQUVBLFdBQUEsR0FBZSxjQUFBLEdBQWlCO0lBQ2hDLFlBQVksQ0FBQyxHQUFiLENBQWlCLFFBQWpCLEVBQTJCLFdBQTNCO0lBR0EsSUFBQSxDQUErQyxJQUFDLENBQUEsS0FBRCxDQUFBLENBQS9DO2FBQUEsWUFBWSxDQUFDLFFBQWIsQ0FBc0IsZ0JBQXRCLEVBQUE7O0VBVnFCOztxQkFZdkIsZ0JBQUEsR0FBa0IsU0FBQTtBQUVoQixRQUFBO0lBQUEsYUFBQSxHQUFnQixDQUFBLENBQUUsc0RBQUY7SUFDaEIsYUFBYSxDQUFDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixRQUE5QixFQUF3QyxZQUF4QyxDQUFxRCxDQUFDLElBQXRELENBQTJELFVBQTNELEVBQXVFLFlBQXZFO1dBQ0EsYUFBYSxDQUFDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixRQUE5QixFQUF3QyxZQUF4QyxDQUFxRCxDQUFDLElBQXRELENBQTJELFVBQTNELEVBQXVFLFlBQXZFO0VBSmdCOztxQkFNbEIsTUFBQSxHQUFRLFNBQUE7QUFDTixRQUFBO0lBQUEsV0FBQSxHQUFjLE1BQU0sQ0FBQyxVQUFQLElBQXFCLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDakQsTUFBQSxHQUFTO0lBQ1QsTUFBQSxHQUFTO0lBQ1QsSUFBRyxXQUFBLEdBQWMsTUFBakI7YUFDRSxTQURGO0tBQUEsTUFFSyxJQUFHLFdBQUEsSUFBZSxNQUFmLElBQTBCLFdBQUEsSUFBZSxNQUE1QzthQUNILFNBREc7S0FBQSxNQUFBO2FBR0gsVUFIRzs7RUFOQzs7cUJBV1IsS0FBQSxHQUFPLFNBQUE7V0FDTCxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQXBCLENBQTBCLG1CQUExQjtFQURLOzs7Ozs7QUFLVCxNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ3pEakIsSUFBQTs7QUFBQSxTQUFBLEdBQVksT0FBQSxDQUFRLGlDQUFSOztBQUVOO0VBRVMscUJBQUE7SUFDWCxJQUFDLENBQUEsYUFBRCxDQUFBO0VBRFc7O3dCQUdiLGFBQUEsR0FBZSxTQUFBO0lBQ2IsSUFBQyxDQUFBLGdCQUFELENBQUE7SUFDQSxJQUFDLENBQUEsYUFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLGNBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxnQkFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLFdBQUQsQ0FBQTtXQUNBLElBQUMsQ0FBQSxjQUFELENBQUE7RUFOYTs7d0JBUWYsZ0JBQUEsR0FBa0IsU0FBQTtXQUVaLElBQUEsU0FBQSxDQUFVLHdCQUFWLEVBQW9DLHNCQUFwQyxFQUE0RCw2QkFBNUQsRUFBMkYseUJBQTNGO0VBRlk7O3dCQUlsQixhQUFBLEdBQWUsU0FBQTtXQUNULElBQUEsU0FBQSxDQUFVLGtCQUFWLEVBQThCLFVBQTlCLEVBQTBDLE1BQTFDO0VBRFM7O3dCQUdmLGNBQUEsR0FBZ0IsU0FBQTtXQUNWLElBQUEsU0FBQSxDQUFVLG1CQUFWLEVBQStCLFlBQS9CLEVBQTZDLE1BQTdDO0VBRFU7O3dCQUdoQixnQkFBQSxHQUFrQixTQUFBO1dBQ1osSUFBQSxTQUFBLENBQVUscUJBQVYsRUFBaUMsb0JBQWpDLEVBQXVELE1BQXZEO0VBRFk7O3dCQUdsQixXQUFBLEdBQWEsU0FBQTtXQUNQLElBQUEsU0FBQSxDQUFVLGVBQVYsRUFBMkIsaUJBQTNCLEVBQThDLE1BQTlDO0VBRE87O3dCQUdiLGNBQUEsR0FBZ0IsU0FBQTtJQUNWLElBQUEsU0FBQSxDQUFVLDBCQUFWLEVBQXNDLDJCQUF0QyxFQUFtRSx1QkFBbkU7V0FDSixJQUFDLENBQUEsUUFBRCxDQUFBO0VBRmM7O3dCQUloQixRQUFBLEdBQVUsU0FBQTtXQUdSLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsT0FBYixFQUFzQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtRQUNwQixJQUFHLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLHVCQUFuQixDQUFBLElBQStDLENBQUMsQ0FBQSxDQUFFLDJCQUFGLENBQStCLENBQUEsQ0FBQSxDQUFFLENBQUMsUUFBbEMsQ0FBMkMsQ0FBQyxDQUFDLE1BQTdDLENBQW5EO2lCQUNFLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxXQUFWLENBQXNCLHVCQUF0QixFQURGOztNQURvQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBdEI7RUFIUTs7Ozs7O0FBY1osTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNoRGpCLElBQUE7O0FBQU07RUFFUyxvQkFBQTtBQUNYLFFBQUE7SUFBQSxTQUFBLEdBQVksQ0FBQSxDQUFFLG9CQUFGO0lBQ1osT0FBQSxHQUFVLENBQUEsQ0FBRSxjQUFGO0lBQ1YsVUFBQSxHQUFhLE9BQU8sQ0FBQyxJQUFSLENBQWEsbUJBQWI7SUFDYixVQUFBLEdBQWEsQ0FBSSxPQUFPLFFBQVEsQ0FBQyxVQUFoQixLQUE4QixXQUFqQyxHQUFrRCxPQUFsRCxHQUErRCxVQUFoRTtJQUNiLFNBQUEsR0FBWSxDQUFBLENBQUUsaUJBQUY7SUFDWixJQUFBLEdBQU8sQ0FBQSxDQUFFLE1BQUY7SUFDUCxVQUFBLEdBQWEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBQTtJQUViLFNBQVMsQ0FBQyxJQUFWLENBQWUsVUFBZixFQUEyQixTQUFDLENBQUQ7TUFDekIsT0FBTyxDQUFDLElBQVIsQ0FBYSxtQkFBYixDQUFpQyxDQUFDLEdBQWxDLENBQXNDLFlBQXRDLEVBQW9ELFVBQUEsR0FBYSxFQUFqRTtNQUNBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLFNBQXBCO01BQ0EsU0FBUyxDQUFDLFdBQVYsQ0FBc0IsWUFBdEI7TUFDQSxJQUFJLENBQUMsV0FBTCxDQUFpQixhQUFqQjtNQUNBLENBQUMsQ0FBQyxjQUFGLENBQUE7YUFDQTtJQU55QixDQUEzQjtJQWVBLENBQUEsQ0FBRSxTQUFGLEVBQ0U7TUFBQSxPQUFBLEVBQU8scUJBQVA7S0FERixDQUVDLENBQUMsU0FGRixDQUVZLFVBRlo7SUFHQSxPQUFPLENBQUMsRUFBUixDQUFXLFVBQVgsRUFBdUIsc0JBQXZCLEVBQStDLFNBQUMsQ0FBRDtNQUM3QyxJQUFHLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxNQUFSLENBQUEsQ0FBZ0IsQ0FBQyxRQUFqQixDQUEwQixZQUExQixDQUFIO1FBQ0UsVUFBVSxDQUFDLFdBQVgsQ0FBdUIsWUFBdkIsRUFERjtPQUFBLE1BQUE7UUFHRSxVQUFVLENBQUMsV0FBWCxDQUF1QixZQUF2QjtRQUNBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxNQUFSLENBQUEsQ0FBZ0IsQ0FBQyxRQUFqQixDQUEwQixZQUExQixFQUpGOztNQUtBLENBQUMsQ0FBQyxjQUFGLENBQUE7YUFDQTtJQVA2QyxDQUEvQztBQVNBO0VBcENXOzs7Ozs7QUF1Q2YsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUMxQ2pCLElBQUE7O0FBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxXQUFSOztBQUVIO0VBRVMsbUJBQUMsUUFBRCxFQUFZLE9BQVosRUFBc0Isa0JBQXRCLEVBQTJDLG1CQUEzQztJQUFDLElBQUMsQ0FBQSxXQUFEO0lBQVcsSUFBQyxDQUFBLFVBQUQ7SUFBVSxJQUFDLENBQUEscUJBQUQ7SUFBcUIsSUFBQyxDQUFBLG9EQUFELHNCQUF1QjtJQUM3RSxJQUFDLENBQUEsTUFBRCxHQUFVLE1BQU0sQ0FBQyxHQUFQLENBQVcsV0FBWDtJQUVWLElBQUMsQ0FBQSxhQUFELENBQUE7RUFIVzs7c0JBS2IsYUFBQSxHQUFlLFNBQUE7QUFDYixRQUFBO0lBQUEsYUFBQSxHQUFnQixDQUFBLENBQUUsRUFBQSxHQUFHLElBQUMsQ0FBQSxRQUFOO0lBQ2hCLFFBQUEsR0FBVyxDQUFBLENBQUUsRUFBQSxHQUFHLElBQUMsQ0FBQSxPQUFOO0lBQ1gsS0FBQSxHQUFRLENBQUEsQ0FBRSxNQUFGO0lBQ1Isb0JBQUEsR0FBdUIsSUFBQyxDQUFBO0lBQ3hCLG1CQUFBLEdBQXNCLElBQUMsQ0FBQTtXQUd2QixhQUFhLENBQUMsRUFBZCxDQUFpQixPQUFqQixFQUEwQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7UUFDeEIsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsb0JBQTFCO1FBQ0EsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsbUJBQXJCO2VBQ0EsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsbUJBQWxCO01BSHdCO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQjtFQVJhOzs7Ozs7QUFhakIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNyQmpCLElBQUE7O0FBQU07RUFFUywwQkFBQTtJQUVYLElBQUMsQ0FBQSxZQUFELEdBQWdCLENBQUEsQ0FBRSwwQkFBRjtJQUNoQixJQUFDLENBQUEsY0FBRCxHQUFrQixDQUFBLENBQUUseUJBQUY7SUFDbEIsSUFBQyxDQUFBLGlCQUFELEdBQXFCLENBQUEsQ0FBRSxvQkFBRjtJQUVyQixJQUFPLENBQUEsQ0FBRSxJQUFDLENBQUEsY0FBSCxDQUFrQixDQUFDLElBQW5CLENBQXdCLFNBQXhCLENBQUEsS0FBc0MsU0FBN0M7TUFDRSxJQUFDLENBQUEsaUJBQWlCLENBQUMsSUFBbkIsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBcEMsRUFERjs7SUFHQSxDQUFBLENBQUUsK0RBQUYsQ0FBa0UsQ0FBQyxFQUFuRSxDQUFzRSxPQUF0RSxFQUErRSxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtRQUM3RSxLQUFDLENBQUEsWUFBWSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7UUFDQSxDQUFDLENBQUMsY0FBRixDQUFBO2VBQ0E7TUFINkU7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQS9FO0lBS0EsQ0FBQSxDQUFFLGtCQUFGLENBQXFCLENBQUMsRUFBdEIsQ0FBeUIsUUFBekIsRUFBbUMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7QUFDakMsWUFBQTtRQUFBLElBQUEsR0FBTyxDQUFBLENBQUUsQ0FBQyxDQUFDLGFBQUo7UUFDUCxLQUFBLEdBQVEsSUFBSSxDQUFDLElBQUwsQ0FBVSxlQUFWLENBQTBCLENBQUMsR0FBM0IsQ0FBQTtRQUNSLElBQUEsR0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLGVBQVYsQ0FBMEIsQ0FBQyxHQUEzQixDQUFBO1FBQ1AsTUFBQSxHQUFTLElBQUksQ0FBQyxJQUFMLENBQVUsOEJBQVYsQ0FBeUMsQ0FBQyxHQUExQyxDQUFBO2VBQ1QsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0IsdUJBQWxCLEVBQ0U7VUFBQSxJQUFBLEVBQU0sSUFBTjtVQUNBLEtBQUEsRUFBTyxLQURQO1VBRUEsTUFBQSxFQUFRLE1BRlI7U0FERjtNQUxpQztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbkM7SUFXQSxJQUFDLENBQUEsY0FBYyxDQUFDLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFEO1FBQzFCLElBQU8sQ0FBQSxDQUFFLENBQUMsQ0FBQyxhQUFKLENBQWtCLENBQUMsSUFBbkIsQ0FBd0IsU0FBeEIsQ0FBQSxLQUFzQyxTQUE3QztVQUNFLEtBQUMsQ0FBQSxpQkFBaUIsQ0FBQyxJQUFuQixDQUF3QixVQUF4QixFQUFvQyxVQUFwQyxFQURGO1NBQUEsTUFBQTtVQUdFLEtBQUMsQ0FBQSxpQkFBaUIsQ0FBQyxVQUFuQixDQUE4QixVQUE5QixFQUhGOztNQUQwQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBNUI7RUF6Qlc7Ozs7OztBQWtDZixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ3JDakIsSUFBQTs7QUFBTTtFQUVTLG9CQUFDLElBQUQsRUFBUSxPQUFSLEVBQWtCLFdBQWxCLEVBQWdDLFlBQWhDLEVBQStDLE9BQS9DO0lBQUMsSUFBQyxDQUFBLE9BQUQ7SUFBTyxJQUFDLENBQUEsVUFBRDtJQUFVLElBQUMsQ0FBQSxjQUFEO0lBQWMsSUFBQyxDQUFBLGVBQUQ7SUFBZSxJQUFDLENBQUEsNEJBQUQsVUFBUztJQUNuRSxJQUFDLENBQUEsSUFBRCxHQUFRLElBQUMsQ0FBQSxJQUFELElBQVMsQ0FBQSxDQUFFLGFBQUY7SUFDakIsSUFBQyxDQUFBLFdBQUQsR0FBZSxRQUFBLENBQVMsSUFBQyxDQUFBLFdBQVY7RUFGSjs7dUJBSWIsUUFBQSxHQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsS0FBQSxHQUFRLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBQyxDQUFBLFlBQUQsR0FBYyxJQUFDLENBQUEsT0FBekI7SUFFUixJQUFJLENBQUEsR0FBSSxJQUFDLENBQUEsV0FBVDtNQUNFLFFBQUEsR0FBVyxJQUFDLENBQUEsV0FBRCxHQUFlLEVBRDVCOztJQUdBLElBQUksSUFBQyxDQUFBLFdBQUQsR0FBZSxLQUFuQjtNQUNFLFFBQUEsR0FBVyxJQUFDLENBQUEsV0FBRCxHQUFlLEVBRDVCOztJQU1BLElBQUcsS0FBQSxHQUFRLENBQVg7YUFDRSxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxFQUFYLEVBREY7S0FBQSxNQUFBO01BSUUsTUFBQSxHQUFTO01BR1QsSUFBRyxJQUFDLENBQUEsV0FBRCxHQUFlLENBQWxCO1FBQ0UsTUFBQSxJQUFVLHdDQUFBLEdBQXVDLENBQUMsSUFBQyxDQUFBLFFBQUQsQ0FBVSxRQUFWLENBQUQsQ0FBdkMsR0FBNEQsc0JBRHhFOztNQUlBLElBQUEsR0FBTztNQUNQLEtBQUEsR0FBUTtNQUVSLElBQUcsSUFBQyxDQUFBLFdBQUQsSUFBZ0IsSUFBbkI7UUFDRSxNQUFBLEdBQVMsSUFBQyxDQUFBLFdBQUQsR0FBZTtRQUN4QixLQUFBLEdBQVEsSUFBQSxHQUFPLENBQUMsSUFBQyxDQUFBLFdBQUQsR0FBZSxDQUFoQixDQUFQLEdBQTRCLE1BRnRDO09BQUEsTUFHSyxJQUFHLElBQUMsQ0FBQSxXQUFELEdBQWUsQ0FBQyxLQUFBLEdBQVEsS0FBVCxDQUFsQjtRQUNILE1BQUEsR0FBUyxLQUFBLEdBQVEsQ0FBQyxLQUFBLEdBQVEsSUFBQyxDQUFBLFdBQVYsQ0FBUixHQUFpQztRQUMxQyxLQUFBLEdBQVEsTUFGTDtPQUFBLE1BQUE7UUFJSCxNQUFBLEdBQVM7UUFDVCxLQUFBLEdBQVEsTUFMTDs7TUFPTCxLQUFBLEdBQVksQ0FBQyxJQUFDLENBQUEsV0FBRCxHQUFlLE1BQWhCLENBQUEsR0FBMEIsQ0FBOUIsR0FBc0MsQ0FBdEMsR0FBOEMsSUFBQyxDQUFBLFdBQUQsR0FBZTtNQUNyRSxHQUFBLEdBQVUsS0FBQSxHQUFRLENBQUMsSUFBQyxDQUFBLFdBQUQsR0FBZSxLQUFoQixDQUFaLEdBQXlDLEtBQXpDLEdBQXFELElBQUMsQ0FBQSxXQUFELEdBQWU7QUFFMUUsV0FBUyxzREFBVDtRQUNFLElBQUcsQ0FBQSxLQUFLLElBQUMsQ0FBQSxXQUFUO1VBQ0UsTUFBQSxJQUFVLHVDQUFBLEdBQXdDLENBQXhDLEdBQTBDLFVBRHREO1NBQUEsTUFBQTtVQUdFLE1BQUEsSUFBVSxtQ0FBQSxHQUFrQyxDQUFDLElBQUMsQ0FBQSxRQUFELENBQVUsQ0FBVixDQUFELENBQWxDLEdBQWdELEtBQWhELEdBQW9ELENBQXBELEdBQXNELE9BSGxFOztBQURGO01BT0EsSUFBRyxJQUFDLENBQUEsV0FBRCxHQUFlLEtBQWxCO1FBQ0UsTUFBQSxJQUFVLHdDQUFBLEdBQXVDLENBQUMsSUFBQyxDQUFBLFFBQUQsQ0FBVSxRQUFWLENBQUQsQ0FBdkMsR0FBNEQsc0JBRHhFOzthQUdBLElBQUMsQ0FBQSxJQUFJLENBQUMsSUFBTixDQUFXLE1BQVgsRUFyQ0Y7O0VBWlE7O3VCQW9EVixVQUFBLEdBQVksU0FBQyxJQUFEO1dBQ1YsQ0FBQyxDQUFDLEtBQUYsQ0FBUTtNQUFBLElBQUEsRUFBTSxJQUFOO0tBQVI7RUFEVTs7dUJBSVosUUFBQSxHQUFVLFNBQUMsSUFBRDtXQUNSLEVBQUEsR0FBRyxJQUFDLENBQUEsT0FBSixHQUFhLENBQUMsU0FBUyxDQUFDLGVBQVYsQ0FBMEIsSUFBQyxDQUFBLE9BQTNCLENBQUQsQ0FBYixHQUFtRCxDQUFDLElBQUMsQ0FBQSxVQUFELENBQVksSUFBWixDQUFEO0VBRDNDOzs7Ozs7QUFPWixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ3JFakIsSUFBQTs7QUFBTTtBQUVKLE1BQUE7O0VBQUEsUUFBQSxHQUNFO0lBQUEsV0FBQSxFQUNFO01BQUEsTUFBQSxFQUFRLEdBQVI7TUFDQSxLQUFBLEVBQU8sR0FEUDtLQURGOzs7RUFJVywyQkFBQTtJQUNYLElBQUMsQ0FBQSxlQUFELEdBQW1CLElBQUMsQ0FBQSxRQUFELENBQUE7RUFEUjs7OEJBR2IsUUFBQSxHQUFVLFNBQUE7V0FDUixNQUFNLENBQUMsVUFBUCxJQUFxQixRQUFRLENBQUMsSUFBSSxDQUFDO0VBRDNCOzs4QkFHVixRQUFBLEdBQVUsU0FBQTtBQUNSLFFBQUE7SUFBQSxXQUFBLEdBQWMsSUFBQyxDQUFBLFFBQUQsQ0FBQTtJQUNkLElBQUcsV0FBQSxHQUFjLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBdEM7YUFDRSxRQURGO0tBQUEsTUFFSyxJQUFHLFdBQUEsSUFBZSxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQXBDLElBQTZDLFdBQUEsSUFBZSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQXBGO2FBQ0gsU0FERztLQUFBLE1BQUE7YUFHSCxRQUhHOztFQUpHOzs7Ozs7QUFTWixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ3RCakIsSUFBQTs7QUFBQSxNQUFBLEdBQVMsT0FBQSxDQUFRLFdBQVI7O0FBRUg7QUFJSixNQUFBOztFQUFBLGtCQUFBLEdBQ0U7SUFBQSxVQUFBLEVBQVksS0FBWjtJQUNBLGFBQUEsRUFBZSxJQURmO0lBRUEseUJBQUEsRUFBMkIsSUFGM0I7SUFHQSxXQUFBLEVBQWEsSUFIYjtJQUlBLFFBQUEsRUFDRTtNQUFBLGFBQUEsRUFBZSxzRUFBZjtNQUNBLE9BQUEsRUFDRTtRQUFBLEdBQUEsRUFBSyxDQUFDLENBQUEsQ0FBRSwrQkFBRixDQUFrQyxDQUFDLElBQW5DLENBQXdDLFNBQXhDLENBQUEsSUFBc0QsRUFBdkQsQ0FBMEQsQ0FBQyxPQUEzRCxDQUFtRSxHQUFuRSxFQUF1RSxFQUF2RSxDQUFMO09BRkY7S0FMRjtJQVFBLGVBQUEsRUFDRTtNQUFBLFFBQUEsRUFBVSxJQUFWO0tBVEY7SUFVQSxPQUFBLEVBQVM7TUFDUDtRQUFBLEVBQUEsRUFBSSxVQUFKO1FBQ0EsSUFBQSxFQUFNLFFBRE47UUFFQSxPQUFBLEVBQVMsTUFGVDtPQURPLEVBS1A7UUFBQSxFQUFBLEVBQUksU0FBSjtRQUNBLElBQUEsRUFBTSxRQUROO1FBRUEsT0FBQSxFQUFTLE1BRlQ7T0FMTyxFQVNQO1FBQUEsRUFBQSxFQUFJLFdBQUo7UUFDQSxJQUFBLEVBQU0sUUFETjtRQUVBLE9BQUEsRUFBUyxNQUZUO09BVE8sRUFhUDtRQUFBLEVBQUEsRUFBSSxVQUFKO1FBQ0EsSUFBQSxFQUFNLFFBRE47UUFFQSxPQUFBLEVBQVMsTUFGVDtPQWJPO0tBVlQ7SUEyQkEsT0FBQSxFQUFTLFNBQUMsT0FBRDtBQUNQLFVBQUE7TUFBQSxHQUFBLEdBQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBckIsQ0FBNkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUE3QyxFQUFtRCxFQUFuRDtNQUVOLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZixDQUEyQixPQUEzQixFQUFvQyxPQUFwQyxFQUE2QyxHQUE3QztBQUNBLGFBQU87SUFKQSxDQTNCVDs7O0VBcUNXLG1CQUFDLE1BQUQsRUFBVSxNQUFWLEVBQW1CLFFBQW5CO0lBQUMsSUFBQyxDQUFBLFNBQUQ7SUFBUyxJQUFDLENBQUEsU0FBRDtJQUFTLElBQUMsQ0FBQSxVQUFEO0lBRTlCLElBQUMsQ0FBQSxNQUFELEdBQVUsTUFBTSxDQUFDLEdBQVAsQ0FBVyxXQUFYO0lBRVYsSUFBc0MsSUFBQyxDQUFBLE1BQUQsS0FBVyxPQUFqRDtNQUFBLElBQUMsQ0FBQSxlQUFELENBQWlCLElBQUMsQ0FBQSxNQUFsQixFQUEwQixJQUFDLENBQUEsT0FBM0IsRUFBQTs7RUFKVzs7c0JBT2IsZUFBQSxHQUFnQixTQUFDLEVBQUQsRUFBSyxPQUFMO0FBSWQsUUFBQTtJQUFBLE1BQUEsR0FBUyxDQUFDLENBQUMsTUFBRixDQUFTLEVBQVQsRUFBYSxrQkFBYixFQUFpQyxPQUFqQztJQUNULElBQUcsMEJBQUg7YUFDRSxNQUFNLENBQUMsV0FBUCxDQUFtQixFQUFuQixFQUF1QixNQUF2QixFQURGOztFQUxjOzs7Ozs7QUFTbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUM1RGpCLElBQUE7O0FBQUEsVUFBQSxHQUFhLE9BQUEsQ0FBUSxpQ0FBUjs7QUFFUDtFQUVTLHVCQUFBO0FBQ1gsUUFBQTtJQUFBLElBQUEsQ0FBYyxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsUUFBVixDQUFtQixnQkFBbkIsQ0FBZDtBQUFBLGFBQUE7O0lBQ0EsSUFBQyxDQUFBLE1BQUQsR0FBVTtJQUVWLElBQUMsQ0FBQSxJQUFELEdBQVEsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDO0lBQ3JCLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBO0lBQ1gsSUFBQyxDQUFBLGNBQUQsR0FBa0IsQ0FBQSxDQUFFLHdDQUFGO0lBQ2xCLElBQUMsQ0FBQSxZQUFELEdBQWdCLElBQUMsQ0FBQSxlQUFELENBQUE7WUFDaEIsSUFBQyxDQUFBLGFBQVksQ0FBQyxhQUFELENBQUMsT0FBUzthQUN2QixJQUFDLENBQUEsYUFBWSxDQUFDLGdCQUFELENBQUMsU0FBVztJQUN6QixJQUFDLENBQUEsYUFBRCxDQUFBO0lBRUEsSUFBRyxJQUFDLENBQUEsWUFBWSxDQUFDLENBQWpCO01BQ0UsSUFBQyxDQUFBLFNBQUQsQ0FBQSxFQURGOztFQVpXOzswQkFlYixhQUFBLEdBQWUsU0FBQTtJQUViLENBQUEsQ0FBRSxvQkFBRixDQUF1QixDQUFDLEVBQXhCLENBQTJCLE9BQTNCLEVBQW9DLFNBQUMsQ0FBRDthQUNsQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQVQsQ0FBQTtJQURrQyxDQUFwQztJQVdBLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsRUFBbEIsQ0FBcUIsUUFBckIsRUFBK0IsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQ7UUFDN0IsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtRQUNBLEtBQUMsQ0FBQSxZQUFZLENBQUMsQ0FBZCxHQUFrQixDQUFBLENBQUUsQ0FBQyxDQUFDLE1BQUosQ0FBVyxDQUFDLElBQVosQ0FBaUIsb0JBQWpCLENBQXNDLENBQUMsR0FBdkMsQ0FBQTtRQUNsQixLQUFDLENBQUEsWUFBWSxDQUFDLE1BQWQsR0FBdUI7UUFDdkIsSUFBRyxLQUFDLENBQUEsWUFBWSxDQUFDLENBQWpCO1VBQ0UsS0FBQyxDQUFBLE1BQUQsQ0FBUSxLQUFDLENBQUEsWUFBVDtVQUNBLENBQUEsQ0FBRSx1QkFBRixDQUEwQixDQUFDLFdBQTNCLENBQXVDLFFBQXZDO1VBQ0EsQ0FBQSxDQUFFLDhCQUFGLENBQWlDLENBQUMsUUFBbEMsQ0FBMkMsUUFBM0M7aUJBQ0EsS0FBQyxDQUFBLE9BQUQsQ0FBUyxrQkFBQSxHQUFtQixLQUFDLENBQUEsWUFBWSxDQUFDLENBQTFDLEVBQStDLElBQUEsR0FBSSxDQUFDLENBQUMsQ0FBQyxLQUFGLENBQVEsS0FBQyxDQUFBLFlBQVQsQ0FBRCxDQUFuRCxFQUpGOztNQUo2QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBL0I7SUFVQSxDQUFBLENBQUUscUJBQUYsQ0FBd0IsQ0FBQyxFQUF6QixDQUE0QixPQUE1QixFQUFxQyxHQUFyQyxFQUEwQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtBQUN4QyxZQUFBO1FBQUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtRQUNBLEVBQUEsR0FBSyxDQUFBLENBQUUsQ0FBQyxDQUFDLE1BQUo7UUFDTCxDQUFBLENBQUUsc0JBQUYsQ0FBeUIsQ0FBQyxXQUExQixDQUFzQyxRQUF0QztRQUVBLFFBQUEsR0FBYyxFQUFFLENBQUMsSUFBSCxDQUFRLGVBQVIsQ0FBQSxLQUE0QixNQUEvQixHQUE4QyxFQUE5QyxHQUF1RCxFQUFFLENBQUMsTUFBSCxDQUFBO1FBQ2xFLFFBQVEsQ0FBQyxRQUFULENBQWtCLFFBQWxCO1FBRUEsS0FBQyxDQUFBLFlBQVksQ0FBQyxNQUFkLEdBQXVCLFFBQVEsQ0FBQyxJQUFULENBQWMsZUFBZDtRQUN2QixLQUFDLENBQUEsWUFBWSxDQUFDLElBQWQsR0FBcUI7UUFDckIsS0FBQyxDQUFBLE1BQUQsQ0FBUSxLQUFDLENBQUEsWUFBVDtRQUVBLEtBQUEsR0FDRTtVQUFBLENBQUEsRUFBRyxLQUFDLENBQUEsWUFBWSxDQUFDLENBQWpCO1VBQ0EsTUFBQSxFQUFRLEtBQUMsQ0FBQSxZQUFZLENBQUMsTUFEdEI7VUFFQSxJQUFBLEVBQU0sS0FBQyxDQUFBLFlBQVksQ0FBQyxJQUZwQjs7ZUFJRixLQUFDLENBQUEsT0FBRCxDQUFTLGtCQUFBLEdBQW1CLEtBQUMsQ0FBQSxZQUFZLENBQUMsQ0FBMUMsRUFBK0MsSUFBQSxHQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFSLENBQUQsQ0FBbkQ7TUFqQndDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQztXQW9CQSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLEdBQTdCLEVBQWtDLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFEO0FBQ2hDLFlBQUE7UUFBQSxDQUFDLENBQUMsY0FBRixDQUFBO1FBQ0EsR0FBQSxHQUFNLENBQUEsQ0FBRSxDQUFDLENBQUMsTUFBSixDQUFXLENBQUMsSUFBWixDQUFpQixNQUFqQjtRQUNOLElBQUcsR0FBSDtVQUNFLE1BQUEsR0FBUyxHQUFHLENBQUMsT0FBSixDQUFZLEdBQVosRUFBaUIsRUFBakI7VUFDVCxLQUFDLENBQUEsWUFBRCxHQUFnQixLQUFDLENBQUEsZUFBRCxDQUFpQixNQUFqQjtVQUNoQixLQUFDLENBQUEsTUFBRCxDQUFRLEtBQUMsQ0FBQSxZQUFUO1VBQ0EsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLFNBQWhCLENBQTBCLENBQTFCO2lCQUNBLEtBQUMsQ0FBQSxPQUFELENBQVMsa0JBQUEsR0FBbUIsS0FBQyxDQUFBLFlBQVksQ0FBQyxDQUExQyxFQUErQyxHQUEvQyxFQUxGOztNQUhnQztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEM7RUEzQ2E7OzBCQXFEZixPQUFBLEdBQVMsU0FBQyxLQUFELEVBQVEsR0FBUjtBQUNQLFFBQUE7O01BQUEsT0FBTyxDQUFFLGFBQVQsQ0FBdUIsR0FBdkI7O0lBQ0EsSUFBRyxpRUFBSDthQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBZixDQUF5QixJQUF6QixFQUErQixLQUEvQixFQUFzQyxHQUF0QyxFQURGOztFQUZPOzswQkFLVCxNQUFBLEdBQVEsU0FBQyxNQUFEO0FBQ04sUUFBQTtJQUFBLElBQUMsQ0FBQSxrQkFBRCxDQUFBO0lBRUEsS0FBQSxHQUNFO01BQUEsQ0FBQSxFQUFHLE1BQU0sQ0FBQyxDQUFWO01BQ0EsSUFBQSxFQUFNLElBQUMsQ0FBQSxJQURQO01BRUEsTUFBQSxFQUFRLElBQUMsQ0FBQSxNQUZUO01BR0EsSUFBQSxFQUFNLE1BQU0sQ0FBQyxJQUhiO01BSUEsUUFBQSxFQUFVLEVBSlY7O0lBTUYsSUFBTyxNQUFNLENBQUMsTUFBUCxLQUFpQixPQUF4QjtNQUNFLEtBQUssQ0FBQyxNQUFOLEdBQWUsTUFBTSxDQUFDLE9BRHhCOztXQUdBLENBQUMsQ0FBQyxJQUFGLENBQ0U7TUFBQSxHQUFBLEVBQVEsSUFBQyxDQUFBLE1BQUYsR0FBUyxjQUFULEdBQXNCLENBQUMsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFSLENBQUQsQ0FBN0I7TUFDQSxLQUFBLEVBQU8sQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCO2lCQUNMLEtBQUMsQ0FBQSxjQUFjLENBQUMsSUFBaEIsQ0FBcUIsd0ZBQUEsR0FBeUYsS0FBekYsR0FBK0YsTUFBcEg7UUFESztNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FEUDtNQUdBLE9BQUEsRUFBUyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsS0FBbEI7QUFDUCxjQUFBO1VBQUEsS0FBQSxHQUFRLEtBQUssQ0FBQyxpQkFBTixDQUF3QixpQkFBeEI7VUFDUixLQUFDLENBQUEsYUFBRCxDQUFlLE9BQWY7VUFDQSxLQUFDLENBQUEsZ0JBQUQsQ0FBa0IsS0FBbEI7VUFDQSxLQUFDLENBQUEsU0FBRCxDQUFBO1VBQ0EsSUFBRyxnRUFBSDttQkFDRSxLQUFDLENBQUEsb0JBQUQsQ0FBc0IsT0FBdEIsRUFERjs7UUFMTztNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FIVDtLQURGO0VBYk07OzBCQXlCUixhQUFBLEdBQWUsU0FBQyxPQUFEO0FBQ2IsUUFBQTtJQUFBLE1BQUEsR0FBUztJQUNULENBQUMsQ0FBQyxJQUFGLENBQU8sT0FBUCxFQUFnQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsS0FBRCxFQUFRLElBQVI7ZUFDZCxNQUFBLElBQVUsa0lBQUEsR0FDZ0csS0FBQyxDQUFBLFlBQVksQ0FBQyxDQUQ5RyxHQUNnSCxnQ0FEaEgsR0FDZ0osSUFBSSxDQUFDLFlBRHJKLEdBQ2tLLFdBRGxLLEdBQzZLLElBQUksQ0FBQyxLQURsTCxHQUN3TCxxRUFEeEwsR0FHeUIsSUFBSSxDQUFDLEtBSDlCLEdBR29DLGtGQUhwQyxHQU1rQyxJQUFJLENBQUMsS0FOdkMsR0FNNkMsOEdBTjdDLEdBUTBDLENBQUMsS0FBQyxDQUFBLFVBQUQsQ0FBWSxJQUFJLENBQUMsWUFBakIsQ0FBRCxDQVIxQyxHQVEwRSwwREFSMUUsR0FVcUMsSUFBSSxDQUFDLE9BVjFDLEdBVWtEO01BWDlDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFoQjtXQWVBLElBQUMsQ0FBQSxjQUFjLENBQUMsSUFBaEIsQ0FBcUIsTUFBckI7RUFqQmE7OzBCQW1CZixrQkFBQSxHQUFvQixTQUFBO1dBQ2xCLElBQUMsQ0FBQSxjQUFjLENBQUMsSUFBaEIsQ0FBcUIsd0ZBQXJCO0VBRGtCOzswQkFHcEIsU0FBQSxHQUFXLFNBQUE7QUFDVCxRQUFBO0lBQUEsS0FBQSxHQUNFO01BQUEsQ0FBQSxFQUFHLElBQUMsQ0FBQSxZQUFZLENBQUMsQ0FBakI7TUFDQSxJQUFBLEVBQU0sSUFBQyxDQUFBLElBRFA7TUFFQSxNQUFBLEVBQVEsSUFBQyxDQUFBLE1BRlQ7O1dBSUYsQ0FBQyxDQUFDLE9BQUYsQ0FBYSxJQUFDLENBQUEsTUFBRixHQUFTLHFCQUFULEdBQTZCLENBQUMsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFSLENBQUQsQ0FBekMsRUFBNEQsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLE1BQUQ7ZUFDMUQsS0FBQyxDQUFBLFlBQUQsQ0FBYyxNQUFkO01BRDBEO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE1RDtFQU5TOzswQkFTWCxZQUFBLEdBQWMsU0FBQyxZQUFEO0lBQ1osQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFBLENBQUUsc0JBQUYsQ0FBUCxFQUFrQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7ZUFDaEMsS0FBQyxDQUFBLGNBQUQsQ0FBZ0IsQ0FBQSxDQUFFLElBQUYsQ0FBaEIsRUFBeUIsQ0FBekI7TUFEZ0M7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWxDO0lBR0EsSUFBRyxvQkFBSDtNQUNFLENBQUEsQ0FBRSwwQkFBRixDQUE2QixDQUFDLElBQTlCLENBQW1DLFlBQWEsQ0FBQSxPQUFBLENBQWhEO2FBQ0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxZQUFQLEVBQXFCLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxNQUFELEVBQVMsS0FBVDtBQUNuQixjQUFBO1VBQUEsUUFBQSxHQUFXLENBQUEsQ0FBRSxzQkFBQSxHQUF1QixNQUF2QixHQUE4QixHQUFoQztpQkFDWCxLQUFDLENBQUEsY0FBRCxDQUFnQixRQUFoQixFQUEwQixLQUExQjtRQUZtQjtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBckIsRUFGRjs7RUFKWTs7MEJBVWQsY0FBQSxHQUFnQixTQUFDLFFBQUQsRUFBVyxLQUFYO0lBQ2QsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsUUFBckI7SUFDQSxRQUFRLENBQUMsSUFBVCxDQUFjLE1BQWQsQ0FBcUIsQ0FBQyxJQUF0QixDQUEyQixLQUEzQjtJQUNBLElBQUcsS0FBQSxLQUFTLE1BQVQsSUFBc0IsS0FBQSxLQUFTLENBQWxDO2FBQ0UsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsUUFBbEIsRUFERjs7RUFIYzs7MEJBTWhCLGdCQUFBLEdBQWtCLFNBQUMsWUFBRDtBQUNoQixRQUFBO0lBQUEsS0FBQSxHQUNFO01BQUEsQ0FBQSxFQUFHLElBQUMsQ0FBQSxZQUFZLENBQUMsQ0FBakI7TUFDQSxNQUFBLEVBQVEsSUFBQyxDQUFBLFlBQVksQ0FBQyxNQUR0Qjs7SUFHRixVQUFBLEdBQWlCLElBQUEsVUFBQSxDQUFXLENBQUEsQ0FBRSxhQUFGLENBQVgsRUFBNkIsSUFBQSxHQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFSLENBQUQsQ0FBakMsRUFBb0QsSUFBQyxDQUFBLFlBQVksQ0FBQyxJQUFsRSxFQUF3RSxZQUF4RSxFQUFzRixFQUF0RjtXQUNqQixVQUFVLENBQUMsUUFBWCxDQUFBO0VBTmdCOzswQkFRbEIsZUFBQSxHQUFpQixTQUFDLEtBQUQ7V0FDZixTQUFTLENBQUMsU0FBVixDQUFvQixLQUFwQjtFQURlOzswQkFHakIsVUFBQSxHQUFZLFNBQUMsSUFBRDtXQUNWLFNBQVMsQ0FBQyxVQUFWLENBQXFCLElBQXJCO0VBRFU7OzBCQUdaLFNBQUEsR0FBVyxTQUFBO0FBQ1QsUUFBQTtJQUFBLE1BQUEsR0FBUyxTQUFTLENBQUMsU0FBVixDQUFBO1dBQ1QsTUFBQSxHQUFTLE1BQU0sQ0FBQyxPQUFQLENBQWUsR0FBZixFQUFvQixHQUFwQjtFQUZBOzs7Ozs7QUFNYixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ3pLakIsSUFBQTs7QUFBQSxRQUFBLEdBQVcsT0FBQSxDQUFRLFlBQVI7O0FBQ1gsTUFBQSxHQUFTLE9BQUEsQ0FBUSxXQUFSOztBQUVULGNBQUEsR0FBaUIsT0FBQSxDQUFRLHNDQUFSOztBQUVYO0VBRVMsd0JBQUE7SUFDWCxJQUFDLENBQUEsTUFBRCxHQUFVLE1BQU0sQ0FBQyxHQUFQLENBQVcsZ0JBQVg7SUFDVixJQUFDLENBQUEsUUFBRCxHQUFZO0lBQ1osSUFBQyxDQUFBLFNBQUQsR0FDRTtNQUFBLHlEQUFBLEVBQTJELGlCQUEzRDtNQUNBLHVCQUFBLEVBQXlCLG1CQUR6Qjs7SUFHRixDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxTQUFSLEVBQW1CLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFELEVBQUcsQ0FBSDtBQUNqQixZQUFBO1FBQUEsS0FBQSxHQUFRLENBQUEsQ0FBRSxDQUFGO2VBQ1IsQ0FBQyxDQUFDLElBQUYsQ0FBTyxLQUFQLEVBQWMsU0FBQyxDQUFELEVBQUksSUFBSjtpQkFDWixLQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsQ0FBbUIsSUFBQSxjQUFBLENBQWUsSUFBZixFQUFxQixDQUFyQixFQUF3QixLQUF4QixDQUFuQjtRQURZLENBQWQ7TUFGaUI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5CO0lBS0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEscUJBQWIsRUFBb0MsSUFBQyxDQUFBLFFBQXJDO0lBRUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFFBQUEsQ0FBUyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFDOUIsQ0FBQSxDQUFFLEtBQUYsQ0FBSSxDQUFDLE9BQUwsQ0FBYSwwQkFBYjtNQUQ4QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBVCxFQUVyQixHQUZxQixDQUF2QjtFQWRXOzs7Ozs7QUFtQmYsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUMxQmpCLElBQUE7O0FBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxXQUFSOztBQUVIO0VBRVMsMkJBQUE7SUFDWCxJQUFDLENBQUEsTUFBRCxHQUFVLE1BQU0sQ0FBQyxHQUFQLENBQVcsbUJBQVg7SUFDVixJQUFDLENBQUEsWUFBRCxHQUFnQjtJQUNoQixJQUFDLENBQUEsUUFBRCxHQUFZO0lBQ1osSUFBQyxDQUFBLElBQUQsR0FBUSxNQUFNLENBQUMsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDO0lBQzVCLElBQUMsQ0FBQSxHQUFELEdBQU8sQ0FBQyxJQUFDLENBQUEsUUFBRixFQUFZLElBQUMsQ0FBQSxJQUFiLEVBQW1CLE9BQW5CLENBQTJCLENBQUMsSUFBNUIsQ0FBaUMsRUFBakM7SUFFUCxJQUFDLENBQUEsVUFBRCxDQUFBO0VBUFc7OzhCQVNiLFVBQUEsR0FBWSxTQUFBO1dBQ1YsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSxJQUFDLENBQUEsWUFBZCxFQUE0QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7QUFDMUIsWUFBQTtRQUFBLEtBQUMsQ0FBQSxHQUFELENBQUssSUFBSSxDQUFDLFNBQUwsQ0FBZSxJQUFmLENBQUw7UUFFQSxLQUFBLEdBQ0U7VUFBQSxHQUFBLEVBQUssSUFBSSxDQUFDLEdBQVY7VUFDQSxPQUFBLEVBQVMsS0FEVDs7ZUFHRixDQUFDLENBQUMsSUFBRixDQUNFO1VBQUEsTUFBQSxFQUFRLE1BQVI7VUFDQSxHQUFBLEVBQUssS0FBQyxDQUFBLEdBRE47VUFFQSxJQUFBLEVBQU0sS0FGTjtVQUdBLEtBQUEsRUFBTyxLQUhQO1NBREY7TUFQMEI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTVCO0VBRFU7OzhCQWVaLEdBQUEsR0FBSyxTQUFDLEdBQUQ7V0FDSCxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxtQkFBYixFQUFrQyxHQUFsQztFQURHOzs7Ozs7QUFJUCxNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQy9CakIsSUFBQTs7QUFBTTtFQUVTLHVCQUFBO0lBQ1gsSUFBQyxDQUFBLE1BQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxTQUFELENBQUE7RUFGVzs7MEJBSWIsTUFBQSxHQUFRLFNBQUE7V0FDTixNQUFNLENBQUMsV0FBUCxHQUFxQixTQUFBO01BQ25CLElBQUcsRUFBQSxJQUFPLEVBQUUsQ0FBQyxLQUFWLElBQW9CLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBaEM7UUFHRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVQsQ0FBbUIsYUFBbkIsRUFBa0MsU0FBQyxTQUFEO2lCQUNoQyxPQUFPLENBQUMsV0FBUixDQUFvQixVQUFwQixFQUFnQyxNQUFoQyxFQUF3QyxTQUF4QztRQURnQyxDQUFsQztlQUlBLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBVCxDQUFtQixhQUFuQixFQUFrQyxTQUFDLFNBQUQ7aUJBQ2hDLE9BQU8sQ0FBQyxXQUFSLENBQW9CLFVBQXBCLEVBQWdDLFFBQWhDLEVBQTBDLFNBQTFDO1FBRGdDLENBQWxDLEVBUEY7O0lBRG1CO0VBRGY7OzBCQWFSLFNBQUEsR0FBVyxTQUFBO0FBQ1QsUUFBQTtJQUFBLE1BQU0sQ0FBQyxLQUFQLEdBQWUsTUFBTSxDQUFDLEtBQVAsSUFBZ0IsQ0FBQyxDQUFBLEdBQzlCO01BQUEsRUFBQSxFQUFJLEVBQUo7TUFDQSxLQUFBLEVBQU8sU0FBQyxDQUFEO2VBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFMLENBQVUsQ0FBVjtNQURLLENBRFA7S0FENkI7V0FLL0IsS0FBSyxDQUFDLEtBQU4sQ0FBWSxTQUFBO0FBQ1YsVUFBQTtNQUFBLFVBQUEsR0FDRTtRQUFBLEtBQUEsRUFBTyxFQUFQO1FBQ0EsS0FBQSxFQUFPLEVBRFA7UUFFQSxPQUFBLEVBQVMsaUJBRlQ7UUFHQSxNQUFBLEVBQVEsYUFIUjtRQUlBLFFBQUEsRUFBVSxVQUpWOztBQU1GO1dBQUEsdUJBQUE7UUFDRSxJQUFHLFVBQVUsQ0FBQyxjQUFYLENBQTBCLFNBQTFCLENBQUg7dUJBQ0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFiLENBQWtCLFNBQWxCLEVBQTZCLFNBQUMsV0FBRDtBQUMzQixnQkFBQTtZQUFBLElBQUcsV0FBSDtjQUNFLEtBQUEsR0FBUSxDQUFJLFdBQVcsQ0FBQyxJQUFaLEtBQW9CLE9BQXZCLEdBQW9DLFdBQVcsQ0FBQyxNQUFoRCxHQUE0RCxDQUFLLFdBQVcsQ0FBQyxJQUFoQixHQUEyQixXQUFXLENBQUMsSUFBSyxDQUFBLFVBQVcsQ0FBQSxXQUFXLENBQUMsSUFBWixDQUFYLENBQTVDLEdBQStFLEVBQWhGLENBQTdEO3FCQUNSLE9BQU8sQ0FBQyxXQUFSLENBQW9CLFNBQXBCLEVBQStCLFdBQVcsQ0FBQyxJQUFaLEdBQW1CLEdBQW5CLEdBQXlCLEtBQXhELEVBQStELFFBQVEsQ0FBQyxHQUF4RSxFQUZGOztVQUQyQixDQUE3QixHQURGO1NBQUEsTUFBQTsrQkFBQTs7QUFERjs7SUFSVSxDQUFaO0VBTlM7Ozs7OztBQXNCYixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQzFDakIsSUFBQSw2QkFBQTtFQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUjs7QUFDVixPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVI7O0FBRUo7RUFFUyxxQkFBQyxPQUFEOzs7SUFDWCxJQUFDLENBQUEsWUFBRCxHQUFnQjtJQUNoQixJQUFDLENBQUEsYUFBRCxHQUFvQixJQUFDLENBQUEsWUFBRixHQUFlLFFBQWYsR0FBdUIsSUFBQyxDQUFBLFlBQXhCLEdBQXFDLGFBQXJDLEdBQWtELElBQUMsQ0FBQSxZQUFuRCxHQUFnRTtJQUNuRixJQUFDLENBQUEsV0FBRCxHQUFlO0lBQ2YsSUFBQyxDQUFBLEtBQUQsR0FBUztJQUNULElBQUMsQ0FBQSxZQUFELEdBQWdCO01BQ2QsUUFBQSxFQUFVLEdBREk7TUFFZCxRQUFBLEVBQVUsR0FGSTtNQUlkLFNBQUEsRUFDRTtRQUFBLE1BQUEsRUFDRTtVQUFBLFFBQUEsRUFBVSxDQUFWO1VBQ0EsUUFBQSxFQUFVLEdBRFY7U0FERjtRQUdBLG9CQUFBLEVBQ0U7VUFBQSxRQUFBLEVBQVUsRUFBVjtVQUNBLFFBQUEsRUFBVSxHQURWO1NBSkY7T0FMWTs7SUFhaEIsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxJQUFDLENBQUEsWUFBVixFQUF3QixPQUF4QjtFQWxCTDs7d0JBcUJiLFNBQUEsR0FBVyxTQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsS0FBZDtBQUNULFFBQUE7SUFBQSxVQUFBLEdBQWEsSUFBSSxDQUFDLEdBQUwsR0FBVyxLQUFLLENBQUMsTUFBakIsSUFBMkIsS0FBSyxDQUFDO0lBQzlDLFVBQUEsR0FBYSxLQUFLLENBQUMsR0FBTixHQUFZLElBQUksQ0FBQyxHQUFqQixJQUF3QixLQUFLLENBQUM7V0FDM0MsVUFBQSxJQUFjO0VBSEw7O3dCQUtYLFVBQUEsR0FBWSxTQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsS0FBZjtBQUNWLFdBQU8sQ0FBQyxDQUFDLElBQUYsQ0FBTyxNQUFQLEVBQWUsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLEtBQUQ7ZUFDcEIsS0FBQyxDQUFBLFNBQUQsQ0FBVyxJQUFYLEVBQWlCLEtBQWpCLEVBQXdCLEtBQXhCO01BRG9CO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFmO0VBREc7O3dCQUlaLHVCQUFBLEdBQXlCLFNBQUMsRUFBRDtXQUN2QjtNQUFBLEdBQUEsRUFBSyxFQUFFLENBQUMsU0FBUjtNQUNBLE1BQUEsRUFBUSxFQUFFLENBQUMsU0FBSCxHQUFlLEVBQUUsQ0FBQyxZQUQxQjtNQUVBLE9BQUEsRUFBUyxFQUZUOztFQUR1Qjs7d0JBS3pCLGFBQUEsR0FBZSxTQUFDLENBQUQsRUFBSSxPQUFKO1dBQ2IsQ0FBQSxDQUFFLENBQUYsQ0FDRSxDQUFDLFFBREgsQ0FDWSxvQkFEWixDQUVFLENBQUMsSUFGSCxDQUVRLHNCQUZSLEVBRWdDLE9BRmhDO0VBRGE7O3dCQU1mLE1BQUEsR0FBUSxTQUFDLEdBQUQsRUFBTSxHQUFOO0FBQ04sUUFBQTtJQUFBLE1BQUEsR0FBUyxDQUFDLENBQUMsR0FBRixDQUFNLEdBQU4sRUFBVyxTQUFDLENBQUQ7YUFDbEIsQ0FBRSxDQUFBLEdBQUE7SUFEZ0IsQ0FBWDtXQUVULENBQUEsQ0FBRSxNQUFGO0VBSE07O3dCQUtSLGFBQUEsR0FBZSxTQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsVUFBZixFQUEyQixLQUEzQjtBQUNiLFFBQUE7SUFBQSxRQUFBLEdBQVcsQ0FBQSxDQUFFLEtBQUY7SUFDWCxXQUFBLEdBQWM7SUFFZCxRQUFBLEdBQVcsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLEtBQUQsRUFBUSxDQUFSO0FBQ3pCLFlBQUE7UUFBQSxzQkFBQSxHQUF5QixDQUFDLENBQUMsR0FBRixJQUFTLEtBQUssQ0FBQztRQUN4Qyx5QkFBQSxHQUE0QixDQUFDLENBQUMsQ0FBQyxHQUFGLEdBQVEsS0FBSyxDQUFDLFFBQWYsQ0FBQSxJQUE0QjtRQUN4RCxLQUFBLEdBQVEsc0JBQUEsSUFBMEI7UUFFbEMsSUFBRyxLQUFBLElBQVMsQ0FBQyxLQUFiO1VBQ0UsSUFBRyxDQUFDLHNCQUFKO1lBQ0UsS0FBQyxDQUFBLGFBQUQsQ0FBZSxDQUFDLENBQUMsT0FBakIsRUFBMEIsNEJBQUEsR0FBNkIsQ0FBQyxDQUFDLEdBQS9CLEdBQW1DLEtBQW5DLEdBQXdDLEtBQUssQ0FBQyxRQUF4RSxFQURGOztVQUVBLElBQUcsQ0FBQyx5QkFBSjtZQUNFLEtBQUMsQ0FBQSxhQUFELENBQWUsQ0FBQyxDQUFDLE9BQWpCLEVBQTBCLDhCQUFBLEdBQThCLENBQUMsQ0FBQyxDQUFDLEdBQUYsR0FBUSxLQUFLLENBQUMsUUFBZixDQUE5QixHQUFzRCxLQUF0RCxHQUEyRCxVQUFyRixFQURGO1dBSEY7O0FBTUEsZUFBTztNQVhrQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEI7SUFjWCxJQUFHLEtBQUssQ0FBQyxnQkFBVDtNQUNFLFdBQUEsR0FBYyxJQUFDLENBQUEsdUJBQUQsQ0FBeUIsQ0FBQSxDQUFFLGtCQUFGLENBQXFCLENBQUMsR0FBdEIsQ0FBMEIsQ0FBMUIsQ0FBekI7TUFDZCxRQUFBLEdBQVcsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFDLEtBQUQsRUFBUSxDQUFSO0FBQ3hCLGNBQUE7VUFBQSxLQUFBLEdBQVMsQ0FBQyxDQUFDLEdBQUYsR0FBUSxDQUFDLFdBQVcsQ0FBQyxNQUFaLEdBQXFCLEtBQUssQ0FBQyxnQkFBNUI7VUFDakIsSUFBRyxLQUFBLElBQVMsQ0FBQyxLQUFiO21CQUNHLEtBQUMsQ0FBQSxhQUFELENBQWUsQ0FBQyxDQUFDLE9BQWpCLEVBQTBCLDJCQUExQixFQURIOztRQUZ3QjtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEI7QUFJVCxhQUFPLE1BTlg7O0lBU0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxLQUFLLENBQUMsU0FBYixFQUF3QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsUUFBRDtBQUN0QixZQUFBO1FBQUEsYUFBQSxHQUFnQixDQUFDLENBQUMsR0FBRixDQUFNLENBQUEsQ0FBSyxLQUFDLENBQUEsWUFBRixHQUFlLEdBQWYsR0FBa0IsUUFBdEIsQ0FBTixFQUF5QyxTQUFDLEVBQUQ7aUJBQ3ZELEtBQUMsQ0FBQSx1QkFBRCxDQUF5QixFQUF6QjtRQUR1RCxDQUF6QztlQUdoQixRQUFBLEdBQVcsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsU0FBQyxLQUFELEVBQVEsQ0FBUjtBQUN6QixjQUFBO1VBQUEsS0FBQSxHQUFRLEtBQUMsQ0FBQSxVQUFELENBQVksQ0FBWixFQUFlLGFBQWYsRUFBOEIsTUFBOUI7VUFDUixJQUFHLEtBQUEsSUFBUyxDQUFDLEtBQWI7WUFDRSxLQUFDLENBQUEsYUFBRCxDQUFlLENBQUMsQ0FBQyxPQUFqQixFQUEwQix5QkFBQSxHQUEwQixRQUFwRCxFQURGOztBQUVBLGlCQUFPO1FBSmtCLENBQWhCO01BSlc7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhCO0FBVUEsV0FBTztFQXJDTTs7d0JBdUNmLGNBQUEsR0FBZ0IsU0FBQTtBQUNkLFFBQUE7SUFBQSxTQUFBLEdBQVksQ0FBQSxDQUFLLElBQUMsQ0FBQSxZQUFGLEdBQWUsTUFBbkIsQ0FBeUIsQ0FBQyxNQUExQixDQUFpQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsS0FBRCxFQUFRLEdBQVI7QUFDM0MsZUFBTyxDQUFDLEdBQUcsQ0FBQztNQUQrQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakM7QUFHWixXQUFPLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBQyxDQUFDLEdBQUYsQ0FBTSxTQUFOLEVBQWlCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxHQUFEO0FBQ2xDLGVBQVcsSUFBQSxPQUFBLENBQVEsU0FBQyxPQUFEO1VBQ2pCLE1BQU0sQ0FBQyxVQUFQLENBQWtCLE9BQWxCLEVBQTJCLElBQTNCO2lCQUNBLENBQUMsQ0FBQyxFQUFGLENBQUssR0FBTCxFQUFVLE1BQVYsRUFBa0IsT0FBbEI7UUFGaUIsQ0FBUjtNQUR1QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakIsQ0FBWjtFQUpPOzt3QkFXaEIsUUFBQSxHQUFVLFNBQUE7SUFDUixJQUFHLElBQUMsQ0FBQSxXQUFKO0FBQ0UsYUFBTyxPQUFPLENBQUMsR0FBUixDQUFZLElBQUMsQ0FBQSxjQUFELENBQUEsQ0FBWixFQURUOztBQUVBLFdBQU8sT0FBTyxDQUFDLE9BQVIsQ0FBQTtFQUhDOzt3QkFLVixnQkFBQSxHQUFrQixTQUFDLEtBQUQsRUFBUSxLQUFSO0FBQ2hCLFFBQUE7SUFBQSxLQUFBLEdBQVEsS0FBQSxJQUFTLElBQUMsQ0FBQTtJQUNsQixZQUFBLEdBQWUsSUFBQyxDQUFBO0lBQ2hCLEtBQUEsR0FBUSxLQUFBLElBQVMsSUFBQyxDQUFBO0FBQ2xCLFdBQU8sSUFBQyxDQUFBLFFBQUQsQ0FBQSxDQUFXLENBQUMsSUFBWixDQUFpQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7QUFDdEIsZUFBVyxJQUFBLE9BQUEsQ0FBUSxTQUFDLE9BQUQ7aUJBQ2pCLE9BQU8sQ0FBQyxJQUFSLENBQWEsU0FBQTtBQUNYLGdCQUFBO1lBQUEsVUFBQSxHQUFhLENBQUEsQ0FBRSxLQUFDLENBQUEsWUFBSCxDQUFnQixDQUFDLEdBQWpCLENBQXFCLENBQXJCLENBQXVCLENBQUM7WUFDckMsU0FBQSxHQUFZLENBQUEsQ0FBRSxLQUFDLENBQUEsYUFBSCxDQUFpQixDQUFDLEdBQWxCLENBQXNCLFNBQUMsQ0FBRCxFQUFJLEVBQUo7cUJBQ2hDLEtBQUMsQ0FBQSx1QkFBRCxDQUF5QixFQUF6QjtZQURnQyxDQUF0QjtZQUlaLElBQUcsS0FBSDtjQUNFLEtBQUEsR0FBUSxLQUFDLENBQUEsTUFBRCxDQUFRLFNBQVIsRUFBbUIsU0FBbkI7Y0FDUixLQUNFLENBQUMsSUFESCxDQUNRLHNCQURSLEVBQ2dDLEVBRGhDLENBRUUsQ0FBQyxXQUZILENBRWUsb0JBRmYsQ0FHRSxDQUFDLFdBSEgsQ0FHZSxvQkFIZixFQUZGOztZQU9BLEtBQUEsR0FBUSxLQUFDLENBQUEsYUFBRCxDQUFlLFNBQWYsRUFBMEIsS0FBMUIsRUFBaUMsVUFBakMsRUFBNkMsS0FBN0M7WUFHUixJQUFHLEtBQUg7Y0FDRSxPQUFPLENBQUMsS0FBUixDQUFjLFNBQUE7dUJBQ1osS0FBQyxDQUFBLE1BQUQsQ0FBUSxLQUFSLEVBQWUsU0FBZixDQUNFLENBQUMsUUFESCxDQUNZLG9CQURaO2NBRFksQ0FBZCxFQURGOztZQU1BLElBQUcsS0FBSyxDQUFDLE1BQVQ7cUJBQ0UsT0FBQSxDQUFRLEtBQU0sQ0FBQSxDQUFBLENBQUUsQ0FBQyxPQUFqQixFQURGO2FBQUEsTUFBQTtxQkFHRSxPQUFBLENBQVEsTUFBUixFQUhGOztVQXRCVyxDQUFiO1FBRGlCLENBQVI7TUFEVztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakI7RUFKUzs7Ozs7O0FBbUNwQixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQzdJakIsSUFBQSxpQkFBQTtFQUFBOztBQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsV0FBUjs7QUFFSDtBQUNKLE1BQUE7O0VBQUEsUUFBQSxHQUNFO0lBQUEsR0FBQSxFQUNFO01BQUEsV0FBQSxFQUFhLENBQWI7S0FERjs7O0VBSVcsbUJBQUE7SUFDWCxJQUFBLENBQWMsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsa0JBQW5CLENBQWQ7QUFBQSxhQUFBOztJQUNBLElBQUMsQ0FBQSxNQUFELEdBQVUsTUFBTSxDQUFDLEdBQVAsQ0FBVyxXQUFYO0lBRVYsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEseUJBQWI7SUFDQSxJQUFDLENBQUEsU0FBRCxHQUFhLFFBQUEsQ0FBUyxjQUFjLENBQUMsWUFBeEI7SUFDYixJQUFDLENBQUEsVUFBRCxHQUFjLFFBQUEsQ0FBUyxjQUFjLENBQUMsV0FBeEI7SUFDZCxJQUFDLENBQUEsYUFBRCxHQUFpQixjQUFjLENBQUM7SUFDaEMsSUFBQyxDQUFBLFdBQUQsR0FBZSxJQUFDLENBQUEsU0FBRCxJQUFjO0lBQzdCLElBQUMsQ0FBQSxTQUFELEdBQWEsY0FBYyxDQUFDO0lBQzVCLElBQUMsQ0FBQSxXQUFELEdBQWUsQ0FBQSxDQUFFLG1CQUFGO0lBQ2YsSUFBQyxDQUFBLGFBQUQsR0FBaUI7SUFFakIsSUFBRyxJQUFDLENBQUEsYUFBRCxDQUFBLENBQUg7TUFDRSxJQUFDLENBQUEsV0FBRCxDQUFBO01BQ0EsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsV0FBVyxDQUFDLElBQWIsQ0FBa0IsWUFBbEIsRUFGWjs7SUFJQSxJQUFDLENBQUEsYUFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLFdBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxXQUFELENBQUE7RUFuQlc7O3NCQXNCYixXQUFBLEdBQWEsU0FBQTtJQUNYLElBQUMsQ0FBQSxXQUFXLENBQUMsVUFBYixDQUNFO01BQUEsU0FBQSxFQUFrQixPQUFsQjtNQUNBLGNBQUEsRUFBa0IsR0FEbEI7TUFFQSxVQUFBLEVBQWtCLEtBRmxCO01BR0EsWUFBQSxFQUFrQixLQUhsQjtNQUlBLFNBQUEsRUFBa0IsS0FKbEI7TUFLQSxRQUFBLEVBQWtCLEtBTGxCO01BTUEsUUFBQSxFQUFrQixJQU5sQjtNQU9BLEtBQUEsRUFBa0IsSUFQbEI7TUFRQSxZQUFBLEVBQWtCLElBUmxCO01BU0EsS0FBQSxFQUFrQixJQVRsQjtNQVVBLE9BQUEsRUFBa0IsSUFBQyxDQUFBLGNBQUQsQ0FBQSxDQVZsQjtNQVlBLE1BQUEsRUFBUSxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsTUFBRDtpQkFDTixLQUFDLENBQUEsa0JBQUQsQ0FBb0IsTUFBTSxDQUFDLE1BQU8sQ0FBQSxNQUFNLENBQUMsWUFBUCxDQUFsQztRQURNO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQVpSO01BZUEsS0FBQSxFQUFPLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxNQUFEO2lCQUNMLEtBQUMsQ0FBQSxPQUFELENBQVMsTUFBTSxDQUFDLFlBQWhCO1FBREs7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBZlA7S0FERjtXQW1CQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsRUFBVixDQUFhLDBCQUFiLEVBQXlDLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtRQUN2QyxLQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSw0Q0FBYjtlQUNBLFVBQUEsQ0FBVyxTQUFBO2lCQUNULEtBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixDQUFBO1FBRFMsQ0FBWCxFQUVFLElBRkY7TUFGdUM7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpDO0VBcEJXOztzQkEwQmIsUUFBQSxHQUFVLFNBQUMsSUFBRDtBQUNSLFFBQUE7SUFBQSxXQUFBLEdBQWMsSUFBQyxDQUFBLGNBQUQsQ0FBZ0IsSUFBaEI7SUFFZCxJQUFHLElBQUMsQ0FBQSxhQUFELENBQUEsQ0FBQSxJQUFxQixJQUFDLENBQUEsV0FBRCxDQUFBLENBQXhCO2FBQ0UsSUFBQyxDQUFBLE1BQU0sQ0FBQyxXQUFSLENBQW9CLFdBQXBCLEVBREY7S0FBQSxNQUFBO2FBR0UsSUFBQyxDQUFBLE9BQUQsQ0FBUyxXQUFULEVBSEY7O0VBSFE7O3NCQVNWLE9BQUEsR0FBUyxTQUFDLFdBQUQ7SUFDUCxJQUFHLElBQUMsQ0FBQSxXQUFELENBQUEsQ0FBSDtNQUNFLElBQUMsQ0FBQSxpQkFBRCxDQUFtQixXQUFuQjtNQUNBLElBQUMsQ0FBQSxjQUFELENBQWdCLFdBQWhCO01BQ0EsSUFBbUMsSUFBQyxDQUFBLGFBQXBDO1FBQUEsSUFBQyxDQUFBLGFBQUQsQ0FBZSxXQUFBLEdBQWMsQ0FBN0IsRUFBQTs7TUFDQSxJQUFDLENBQUEsY0FBRCxDQUFBO01BQ0EsSUFBQyxDQUFBLGFBQUQsQ0FBZSxXQUFBLEdBQWMsQ0FBN0I7TUFDQSxJQUFDLENBQUEsV0FBRCxHQUFnQixXQUFBLEdBQWM7TUFDOUIsSUFBQyxDQUFBLGFBQUQsQ0FBQTthQUNBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxPQUFWLENBQWtCLDJCQUFsQixFQUErQztRQUFBLFdBQUEsRUFBYSxXQUFiO09BQS9DLEVBUkY7S0FBQSxNQUFBO01BVUUsSUFBQyxDQUFBLFdBQUQsR0FBZ0IsV0FBQSxHQUFjO01BQzlCLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLDZDQUFBLEdBQThDLFdBQTNEO2FBQ0EsUUFBUSxDQUFDLFFBQVQsR0FBdUIsSUFBQyxDQUFBLGFBQUYsR0FBZ0IsR0FBaEIsR0FBbUIsSUFBQyxDQUFBLFlBWjVDOztFQURPOztzQkFnQlQsY0FBQSxHQUFnQixTQUFDLElBQUQ7QUFDZCxRQUFBO0lBQUEsWUFBQSxHQUFnQixJQUFDLENBQUEsV0FBRCxHQUFlO0lBRS9CLElBQUcsSUFBQSxLQUFRLE1BQVg7TUFDRSxJQUFHLElBQUMsQ0FBQSxXQUFELEtBQWdCLElBQUMsQ0FBQSxVQUFwQjtlQUNFLEVBREY7T0FBQSxNQUFBO2VBR0UsSUFBQyxDQUFBLFlBSEg7T0FERjtLQUFBLE1BTUssSUFBRyxJQUFBLEtBQVEsTUFBWDtNQUNILElBQUcsWUFBQSxLQUFnQixDQUFuQjtlQUNHLElBQUMsQ0FBQSxVQUFELEdBQWMsRUFEakI7T0FBQSxNQUFBO2VBR0csWUFBQSxHQUFlLEVBSGxCO09BREc7S0FBQSxNQU1BLElBQUcsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxJQUFaLENBQUg7YUFDRixJQUFBLEdBQU8sRUFETDtLQUFBLE1BQUE7YUFJSCxhQUpHOztFQWZTOztzQkFzQmhCLGFBQUEsR0FBZSxTQUFBO0FBQ2IsUUFBQTtJQUFBLEdBQUEsR0FBUyxJQUFDLENBQUEsUUFBRCxDQUFBLENBQUgsR0FBb0IsVUFBcEIsR0FBb0M7SUFFMUMsQ0FBQSxDQUFFLDZCQUFGLENBQWdDLENBQUMsRUFBakMsQ0FBb0MsR0FBcEMsRUFBeUMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLEtBQUQ7UUFDdkMsSUFBRyxLQUFDLENBQUEsV0FBRCxDQUFBLENBQUg7VUFDRSxLQUFDLENBQUEsYUFBRCxHQUFpQjtVQUNqQixLQUFDLENBQUEsUUFBRCxDQUFVLE1BQVY7VUFDQSxJQUFrQixDQUFBLENBQUUsS0FBSyxDQUFDLGFBQVIsQ0FBc0IsQ0FBQyxJQUF2QixDQUE0QixRQUE1QixDQUFBLEtBQXlDLFdBQTNEO1lBQUEsS0FBQyxDQUFBLFdBQUQsQ0FBQSxFQUFBOztpQkFDQSxLQUFLLENBQUMsY0FBTixDQUFBLEVBSkY7O01BRHVDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF6QztJQU9BLENBQUEsQ0FBRSw2QkFBRixDQUFnQyxDQUFDLEVBQWpDLENBQW9DLEdBQXBDLEVBQXlDLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxLQUFEO1FBQ3ZDLElBQUcsS0FBQyxDQUFBLFdBQUQsQ0FBQSxDQUFIO1VBQ0UsS0FBQyxDQUFBLGFBQUQsR0FBaUI7VUFDakIsS0FBQyxDQUFBLFFBQUQsQ0FBVSxNQUFWO1VBQ0EsSUFBa0IsQ0FBQSxDQUFFLEtBQUssQ0FBQyxhQUFSLENBQXNCLENBQUMsSUFBdkIsQ0FBNEIsUUFBNUIsQ0FBQSxLQUF5QyxXQUEzRDtZQUFBLEtBQUMsQ0FBQSxXQUFELENBQUEsRUFBQTs7aUJBQ0EsS0FBSyxDQUFDLGNBQU4sQ0FBQSxFQUpGOztNQUR1QztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBekM7V0FPQSxDQUFBLENBQUUsd0JBQUYsQ0FBMkIsQ0FBQyxFQUE1QixDQUErQixHQUEvQixFQUFvQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsS0FBRDtBQUNsQyxZQUFBO1FBQUEsSUFBRyxLQUFDLENBQUEsV0FBRCxDQUFBLENBQUg7VUFDRSxLQUFDLENBQUEsYUFBRCxHQUFpQjtVQUNqQixJQUFBLEdBQU8sQ0FBQSxDQUFFLEtBQUssQ0FBQyxhQUFSLENBQXNCLENBQUMsSUFBdkIsQ0FBNEIsaUJBQTVCLENBQUEsR0FBaUQ7VUFDeEQsS0FBQyxDQUFBLFFBQUQsQ0FBVSxJQUFWO2lCQUNBLEtBQUssQ0FBQyxjQUFOLENBQUEsRUFKRjs7TUFEa0M7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXBDO0VBakJhOztzQkF3QmYsV0FBQSxHQUFhLFNBQUE7V0FDWCxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsSUFBWixDQUFpQixPQUFqQixFQUEwQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsS0FBRDtRQUN4QixLQUFDLENBQUEsYUFBRCxHQUFpQjtRQUVqQixJQUFHLEtBQUMsQ0FBQSxXQUFELENBQUEsQ0FBQSxLQUFrQixDQUFJLElBQXpCO1VBQ0UsSUFBRyxLQUFLLENBQUMsT0FBTixLQUFpQixFQUFwQjtZQUNFLEtBQUMsQ0FBQSxRQUFELENBQVUsTUFBVjttQkFDQSxLQUFDLENBQUEsVUFBRCxDQUFZLGVBQVosRUFGRjtXQUFBLE1BSUssSUFBRyxLQUFLLENBQUMsT0FBTixLQUFpQixFQUFwQjtZQUNILEtBQUMsQ0FBQSxRQUFELENBQVUsTUFBVjttQkFDQSxLQUFDLENBQUEsVUFBRCxDQUFZLGVBQVosRUFGRztXQUxQOztNQUh3QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUI7RUFEVzs7c0JBY2IsY0FBQSxHQUFnQixTQUFBO0lBQ2QsSUFBQyxDQUFBLHFCQUFELElBQUMsQ0FBQSxtQkFBcUI7SUFFdEIsSUFBRyxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFqQyxLQUFnRCxDQUFuRDtNQUNFLElBQUMsQ0FBQSxTQUFELENBQUE7YUFDQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsRUFGdEI7S0FBQSxNQUFBO2FBSUUsSUFBQyxDQUFBLGdCQUFELEdBSkY7O0VBSGM7O3NCQVVoQixTQUFBLEdBQVcsU0FBQTtJQUdULElBQUcsSUFBQyxDQUFBLFdBQUQsQ0FBQSxDQUFIO2FBQ0UsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0IseUJBQWxCLEVBQTZDO1FBQUMsTUFBQSxFQUFRLENBQUMsZ0JBQUQsRUFBbUIsY0FBbkIsQ0FBVDtPQUE3QyxFQURGOztFQUhTOztzQkFRWCxrQkFBQSxHQUFvQixTQUFDLGFBQUQ7QUFDbEIsUUFBQTtJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLElBQWpCLENBQXNCLFFBQXRCO0lBRVQsSUFBRyxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFuQjthQUNFLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBWixFQUFtQixNQUFNLENBQUMsSUFBUCxDQUFZLEtBQVosQ0FBbkIsRUFERjs7RUFIa0I7O3NCQU9wQixhQUFBLEdBQWUsU0FBQTtBQUNiLFFBQUE7SUFBQSxRQUFBLEdBQVcsSUFBQyxDQUFBLGNBQUQsQ0FBZ0IsTUFBaEIsQ0FBQSxHQUEwQjtJQUNyQyxRQUFBLEdBQVcsSUFBQyxDQUFBLGNBQUQsQ0FBZ0IsTUFBaEIsQ0FBQSxHQUEwQjtJQUNyQyxDQUFBLENBQUUsNkJBQUYsQ0FBZ0MsQ0FBQyxJQUFqQyxDQUFzQyxNQUF0QyxFQUFpRCxJQUFDLENBQUEsYUFBRixHQUFnQixHQUFoQixHQUFtQixRQUFuRTtXQUNBLENBQUEsQ0FBRSw2QkFBRixDQUFnQyxDQUFDLElBQWpDLENBQXNDLE1BQXRDLEVBQWlELElBQUMsQ0FBQSxhQUFGLEdBQWdCLEdBQWhCLEdBQW1CLFFBQW5FO0VBSmE7O3NCQU9mLGlCQUFBLEdBQW1CLFNBQUMsV0FBRDtBQUNqQixRQUFBO0lBQUEsSUFBQSxHQUFPLElBQUMsQ0FBQSxTQUFVLENBQUEsV0FBQTtJQUNsQixDQUFBLENBQUUsZ0NBQUYsQ0FBbUMsQ0FBQyxJQUFwQyxDQUF5QyxJQUFJLENBQUMsZ0JBQTlDO0lBQ0EsQ0FBQSxDQUFFLDBCQUFGLENBQTZCLENBQUMsSUFBOUIsQ0FBbUMsSUFBSSxDQUFDLEtBQXhDO0lBQ0EsQ0FBQSxDQUFFLDRCQUFGLENBQStCLENBQUMsSUFBaEMsQ0FBcUMsSUFBSSxDQUFDLE9BQTFDO1dBR0EsQ0FBQSxDQUFFLFVBQUYsQ0FBYSxDQUFDLElBQWQsQ0FBbUIsU0FBQTthQUNqQixDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQixhQUFsQjtJQURpQixDQUFuQjtFQVBpQjs7c0JBV25CLGNBQUEsR0FBZ0IsU0FBQyxXQUFEO0FBQ2QsUUFBQTtJQUFBLElBQUcsSUFBQyxDQUFBLFNBQVUsQ0FBQSxXQUFBLENBQVksQ0FBQyxLQUEzQjtNQUNFLFNBQUEsR0FBZSxJQUFDLENBQUEsU0FBVSxDQUFBLFdBQUEsQ0FBWSxDQUFDLEtBQXpCLEdBQStCLEtBQS9CLEdBQW9DLGNBQWMsQ0FBQyxXQURuRTtLQUFBLE1BQUE7TUFHRSxTQUFBLEdBQVksY0FBYyxDQUFDLFdBSDdCOztJQUtBLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxJQUFYLENBQWdCLFNBQWhCO0lBQ0EsQ0FBQSxDQUFFLDJCQUFGLENBQThCLENBQUMsSUFBL0IsQ0FBb0MsU0FBcEMsRUFBa0QsSUFBQyxDQUFBLFNBQVUsQ0FBQSxXQUFBLENBQVksQ0FBQyxLQUF6QixHQUErQixLQUEvQixHQUFvQyxjQUFjLENBQUMsVUFBcEc7V0FDQSxDQUFBLENBQUUseUJBQUYsQ0FBNEIsQ0FBQyxJQUE3QixDQUFrQyxTQUFsQyxFQUFnRCxJQUFDLENBQUEsYUFBRixHQUFnQixHQUFoQixHQUFtQixJQUFDLENBQUEsV0FBbkU7RUFSYzs7c0JBV2hCLFdBQUEsR0FBYSxTQUFBO1dBQ1gsTUFBTSxDQUFDLFVBQVAsR0FBb0IsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLEtBQUQ7UUFDbEIsSUFBRyxLQUFLLENBQUMsS0FBTixJQUFnQixLQUFLLENBQUMsS0FBSyxDQUFDLElBQS9CO1VBQ0UsS0FBQyxDQUFBLGFBQUQsR0FBaUI7aUJBQ2pCLEtBQUMsQ0FBQSxRQUFELENBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUF0QixFQUZGOztNQURrQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7RUFEVDs7c0JBT2IsYUFBQSxHQUFlLFNBQUMsSUFBRDtBQUNiLFFBQUE7SUFBQSxLQUFBLEdBQVE7TUFBQSxJQUFBLEVBQU0sSUFBTjs7SUFDUixLQUFBLEdBQVEsUUFBQSxHQUFTO0lBQ2pCLEdBQUEsR0FBUyxJQUFDLENBQUEsYUFBRixHQUFnQixHQUFoQixHQUFtQjtJQUUzQixJQUFHLE9BQU8sQ0FBQyxTQUFYO2FBQ0UsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsS0FBbEIsRUFBeUIsS0FBekIsRUFBZ0MsR0FBaEMsRUFERjs7RUFMYTs7c0JBU2YsYUFBQSxHQUFlLFNBQUE7V0FDYixJQUFDLENBQUEsV0FBVyxDQUFDLE1BQWIsR0FBc0I7RUFEVDs7c0JBSWYsV0FBQSxHQUFhLFNBQUE7QUFDWCxRQUFBO0lBQUEsSUFBRyxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsS0FBVixDQUFBLENBQUEsR0FBb0IsR0FBdkI7TUFDRSxPQUFBLEdBQVUsQ0FBQSxDQUFFLGtCQUFGLEVBRFo7S0FBQSxNQUFBO01BR0UsT0FBQSxHQUFVLENBQUEsQ0FBRSxjQUFGLEVBSFo7O0lBS0EsU0FBQSxHQUFZLENBQUEsQ0FBRSw4QkFBRixDQUFpQyxDQUFDLE1BQWxDLENBQUE7SUFDWixJQUFHLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsTUFBbkIsR0FBNEIsQ0FBL0I7TUFDRSxTQUFBLEdBQVksU0FBQSxHQUFZLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsTUFBbkIsQ0FBQSxFQUQxQjs7V0FHQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsU0FBaEIsQ0FBMEIsT0FBTyxDQUFDLE1BQVIsQ0FBQSxDQUFnQixDQUFDLEdBQWpCLEdBQXVCLFNBQWpEO0VBVlc7O3NCQWFiLFFBQUEsR0FBVSxTQUFBO0lBQ1IsSUFBRyxhQUFrQixNQUFsQixFQUFBLGNBQUEsTUFBQSxJQUE0QixDQUFDLE1BQU0sQ0FBQyxhQUFQLElBQXlCLFFBQUEsWUFBb0IsYUFBOUMsQ0FBNUIsSUFBNEYsT0FBTyxVQUFQLEtBQXFCLFFBQXBIO0FBQ0UsYUFBTyxLQURUO0tBQUEsTUFBQTtBQUdFLGFBQU8sTUFIVDs7RUFEUTs7c0JBTVYsV0FBQSxHQUFhLFNBQUE7V0FDWDtFQURXOztzQkFNYixVQUFBLEdBQVksU0FBQyxNQUFEO0lBQ1YsSUFBQSxDQUFjLE1BQU0sQ0FBQyxPQUFyQjtBQUFBLGFBQUE7O1dBQ0EsT0FBTyxDQUFDLEtBQVIsQ0FBYyxXQUFkLEVBQTJCLE1BQTNCO0VBRlU7O3NCQUtaLGFBQUEsR0FBZSxTQUFDLElBQUQ7SUFDYixJQUFBLENBQWMsTUFBTSxDQUFDLE9BQXJCO0FBQUEsYUFBQTs7V0FDQSxPQUFPLENBQUMsYUFBUixDQUFzQixFQUFBLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUF6QztFQUZhOztzQkFLZixXQUFBLEdBQWEsU0FBQTtXQUNYLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLG9CQUFuQjtFQURXOzs7Ozs7QUFNZixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQy9QakIsSUFBQTs7QUFBTTtFQUVTLGNBQUE7QUFDWCxRQUFBO0lBQUEsSUFBQSxHQUFPLENBQUEsQ0FBRSxPQUFGO0lBQ1AsSUFBSSxDQUFDLElBQUwsQ0FBVSxTQUFBO0FBQ1IsVUFBQTtNQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsSUFBRjtNQUNWLFVBQUEsR0FBYSxPQUFPLENBQUMsSUFBUixDQUFhLGlCQUFiO01BQ2IsT0FBQSxHQUFVLE9BQU8sQ0FBQyxJQUFSLENBQWEsZUFBYjtNQUNWLFNBQUEsR0FBWSxPQUFPLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FBQSxJQUEwQjtNQUN0QyxJQUFXLFVBQVUsQ0FBQyxNQUFYLEtBQXFCLENBQXJCLElBQTBCLE9BQU8sQ0FBQyxNQUFSLEtBQWtCLENBQXZEO0FBQUEsZUFBQTs7TUFDQSxVQUFVLENBQUMsS0FBWCxDQUFBLENBQWtCLENBQUMsUUFBbkIsQ0FBNEIsV0FBNUI7TUFDQSxPQUFPLENBQUMsS0FBUixDQUFBLENBQWUsQ0FBQyxRQUFoQixDQUF5QixZQUF6QjthQUVBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFNBQUMsS0FBRDtlQUNkLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxFQUFSLENBQVcsU0FBWCxFQUFzQixTQUFDLENBQUQ7VUFDcEIsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsWUFBcEI7VUFDQSxDQUFBLENBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLENBQUYsQ0FBcUIsQ0FBQyxRQUF0QixDQUErQixZQUEvQjtVQUNBLFVBQVUsQ0FBQyxXQUFYLENBQXVCLFdBQXZCO1VBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsV0FBakI7aUJBRUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtRQU5vQixDQUF0QjtNQURjLENBQWhCO0lBVFEsQ0FBVjtFQUZXOzs7Ozs7QUFzQmYsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUN6QmpCLElBQUE7O0FBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxXQUFSOztBQUVULFVBQUEsR0FBYSxPQUFBLENBQVEsa0NBQVI7O0FBRVA7RUFlUyxtQkFBQTtJQUNYLElBQUMsQ0FBQSxNQUFELEdBQVUsTUFBTSxDQUFDLEdBQVAsQ0FBVyxXQUFYO0lBRVYsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUNYLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FBQSxDQUFFLE1BQUY7SUFFUixJQUFHLDBEQUFIO01BQ0UsSUFBQyxDQUFBLFNBQUQsR0FBaUIsSUFBQSxXQUFBLENBQUEsRUFEbkI7O0lBR0EsVUFBQSxDQUFXLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtRQUNULEtBQUMsQ0FBQSxzQkFBRCxDQUFBO1FBQ0EsS0FBQyxDQUFBLGdCQUFELENBQUE7ZUFDQSxLQUFDLENBQUEsa0JBQUQsQ0FBQTtNQUhTO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFYLEVBSUUsR0FKRjtFQVRXOztzQkFlYixHQUFBLEdBQUssU0FBQyxNQUFELEVBQVMsR0FBVDtXQUNILElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLE1BQWIsRUFBcUIsR0FBckI7RUFERzs7c0JBSUwsS0FBQSxHQUFPLFNBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsS0FBbkIsRUFBMEIsUUFBMUI7SUFDTCxJQUFnQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFyQixDQUE2QixTQUE3QixDQUFBLEdBQTBDLENBQUMsQ0FBM0Q7QUFBQSxhQUFPLE1BQVA7O0lBQ0EsSUFBZ0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBckIsQ0FBNkIsZ0JBQTdCLENBQUEsR0FBaUQsQ0FBQyxDQUFsRTtBQUFBLGFBQU8sTUFBUDs7SUFDQSxLQUFBLEdBQVEsS0FBQSxJQUFTLENBQUMsUUFBUSxDQUFDLFFBQVQsR0FBb0IsUUFBUSxDQUFDLE1BQTlCO0lBQ2pCLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxPQUFWLENBQWtCLGlCQUFsQixFQUFxQztNQUFDLFFBQUEsRUFBVSxRQUFYO01BQXFCLE1BQUEsRUFBUSxNQUE3QjtNQUFxQyxLQUFBLEVBQU8sS0FBNUM7TUFBbUQsUUFBQSxFQUFVLFFBQTdEO0tBQXJDO1dBQ0EsSUFBQyxDQUFBLEdBQUQsQ0FBSyxPQUFMLEVBQ0U7TUFBQSxRQUFBLEVBQVUsUUFBVjtNQUNBLE1BQUEsRUFBUSxNQURSO01BRUEsS0FBQSxFQUFPLEtBRlA7S0FERjtFQUxLOztzQkFXUCxhQUFBLEdBQWUsU0FBQyxHQUFEO0lBQ2IsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0Isb0JBQWxCLEVBQXdDO01BQUMsR0FBQSxFQUFLLEdBQU47S0FBeEM7V0FDQSxJQUFDLENBQUEsR0FBRCxDQUFLLGVBQUwsRUFBc0I7TUFBQSxHQUFBLEVBQUssR0FBTDtLQUF0QjtFQUZhOztzQkFJZixVQUFBLEdBQVksU0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixNQUFyQixFQUE2QixLQUE3QixFQUFvQyxHQUFwQztXQUNWLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsT0FBZixFQUF3QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtBQUN0QixZQUFBO1FBQUEsRUFBQSxHQUFLLENBQUEsQ0FBRSxDQUFDLENBQUMsYUFBSjtRQUNMLElBQUEsR0FBTyxFQUFFLENBQUMsSUFBSCxDQUFRLE1BQVI7UUFDUCxDQUFBLEdBQUk7UUFDSixDQUFBLEdBQUk7UUFDSixDQUFBLEdBQUk7UUFDSixDQUFBLEdBQUssQ0FBSSxRQUFBLEtBQVksWUFBZixHQUFpQyxJQUFqQyxHQUEyQyxLQUE1QztRQUNMLElBQXVCLE1BQUEsS0FBVSxNQUFqQztVQUFBLENBQUEsR0FBSSxFQUFFLENBQUMsSUFBSCxDQUFRLE1BQVIsRUFBSjs7UUFDQSxJQUFvQixPQUFPLFFBQVAsS0FBbUIsVUFBdkM7VUFBQSxDQUFBLEdBQUksUUFBQSxDQUFTLEVBQVQsRUFBSjs7UUFDQSxJQUFrQixPQUFPLE1BQVAsS0FBaUIsVUFBbkM7VUFBQSxDQUFBLEdBQUksTUFBQSxDQUFPLEVBQVAsRUFBSjs7UUFDQSxJQUFpQixPQUFPLEtBQVAsS0FBZ0IsVUFBakM7VUFBQSxDQUFBLEdBQUksS0FBQSxDQUFNLEVBQU4sRUFBSjs7UUFFQSxLQUFDLENBQUEsR0FBRCxDQUFLLFlBQUwsRUFDRTtVQUFBLFFBQUEsRUFBVSxRQUFWO1VBQ0EsUUFBQSxFQUFVLENBRFY7VUFFQSxNQUFBLEVBQVEsQ0FGUjtVQUdBLEtBQUEsRUFBTyxDQUhQO1NBREY7UUFNQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQixpQkFBbEIsRUFBcUM7VUFBQyxRQUFBLEVBQVUsUUFBWDtVQUFxQixRQUFBLEVBQVUsQ0FBL0I7VUFBa0MsTUFBQSxFQUFRLENBQTFDO1VBQTZDLEtBQUEsRUFBTyxDQUFwRDtTQUFyQztRQUVBLEtBQUMsQ0FBQSxLQUFELENBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiO1FBRUEsSUFBRyxHQUFIO1VBQ0UsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtpQkFDQSxJQUZGOztNQXRCc0I7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhCO0VBRFU7O3NCQTJCWixXQUFBLEdBQWEsU0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixTQUF4QjtJQUNYLElBQUMsQ0FBQSxHQUFELENBQUsscUJBQUwsRUFDRTtNQUFBLE9BQUEsRUFBUyxPQUFUO01BQ0EsTUFBQSxFQUFRLFlBRFI7TUFFQSxHQUFBLEVBQUssU0FGTDtLQURGO1dBSUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0Isa0JBQWxCLEVBQXNDO01BQUMsT0FBQSxFQUFTLE9BQVY7TUFBbUIsTUFBQSxFQUFRLFlBQTNCO01BQXlDLEdBQUEsRUFBSyxTQUE5QztLQUF0QztFQUxXOztzQkFRYixTQUFBLEdBQVcsU0FBQyxNQUFEO1dBQ1QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFqQixDQUFzQixNQUF0QjtFQURTOztzQkFHWCxjQUFBLEdBQWdCLFNBQUE7V0FDZCxJQUFDLENBQUEsVUFBRCxDQUFZLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLE1BQTNDO0VBRGM7O3NCQUdoQixlQUFBLEdBQWlCLFNBQUE7V0FDZixJQUFDLENBQUEsVUFBRCxDQUFZLHFCQUFaLEVBQW1DLGtCQUFuQyxFQUF1RCxDQUFDLFNBQUMsSUFBRDthQUN0RCxJQUFJLENBQUMsSUFBTCxDQUFBO0lBRHNELENBQUQsQ0FBdkQsRUFFRyxTQUFDLElBQUQ7TUFDQSxJQUFHLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLGVBQW5CLENBQUg7ZUFBNEMsYUFBNUM7T0FBQSxNQUFBO2VBQThELGFBQTlEOztJQURBLENBRkg7RUFEZTs7c0JBTWpCLGtCQUFBLEdBQW9CLFNBQUE7QUFDbEIsUUFBQTtJQUFBLElBQUcsSUFBQyxDQUFBLElBQUksQ0FBQyxRQUFOLENBQWUsTUFBZixDQUFIO01BRUUsWUFBQSxHQUFlO01BQ2YsSUFBQyxDQUFBLFVBQUQsQ0FBWSxZQUFaLEVBQTBCLFVBQVUsQ0FBQyxhQUFyQyxFQUFvRCxVQUFVLENBQUMsV0FBL0QsRUFBNEUsVUFBVSxDQUFDLFVBQXZGO2FBR0EsSUFBQyxDQUFBLFVBQUQsQ0FBWSxjQUFaLEVBQTRCLFVBQVUsQ0FBQyxhQUF2QyxFQUFzRCxVQUFVLENBQUMsV0FBakUsRUFBOEUsVUFBVSxDQUFDLGtCQUF6RixFQU5GOztFQURrQjs7c0JBU3BCLHFCQUFBLEdBQXVCLFNBQUE7SUFDckIsSUFBQSxDQUFPLElBQUMsQ0FBQSxJQUFJLENBQUMsUUFBTixDQUFlLE1BQWYsQ0FBUDthQUVFLElBQUMsQ0FBQSxVQUFELENBQVkscUJBQVosRUFBbUMsd0JBQW5DLEVBQTZELFNBQUMsSUFBRDtlQUMzRCxJQUFJLENBQUMsSUFBTCxDQUFBO01BRDJELENBQTdELEVBRkY7O0VBRHFCOztzQkFNdkIsV0FBQSxHQUFhLFNBQUE7SUFFWCxJQUFHLElBQUMsQ0FBQSxJQUFJLENBQUMsUUFBTixDQUFlLFFBQWYsQ0FBSDthQUNFLElBQUMsQ0FBQSxVQUFELENBQVksNEJBQVosRUFBMEMscUJBQTFDLEVBQWlFLFNBQUMsRUFBRDtBQUMvRCxZQUFBO1FBQUEsSUFBQSxHQUFPLENBQUksRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFSLENBQWUsQ0FBQyxPQUFoQixDQUF3QixjQUF4QixDQUFBLEdBQTBDLENBQUMsQ0FBOUMsR0FBcUQsaUJBQXJELEdBQTRFLFlBQTdFO2VBQ1A7TUFGK0QsQ0FBakUsRUFERjs7RUFGVzs7c0JBT2IsWUFBQSxHQUFjLFNBQUE7V0FFWixJQUFDLENBQUEsVUFBRCxDQUFZLFlBQVosRUFBMEIsc0JBQTFCLEVBQWtELFNBQUMsRUFBRDthQUNoRCxFQUFFLENBQUMsSUFBSCxDQUFBO0lBRGdELENBQWxEO0VBRlk7O3NCQUtkLGdCQUFBLEdBQWtCLFNBQUE7SUFDaEIsSUFBQyxDQUFBLGNBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxlQUFELENBQUE7SUFDQSxJQUFDLENBQUEsa0JBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxxQkFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLFdBQUQsQ0FBQTtXQUNBLElBQUMsQ0FBQSxZQUFELENBQUE7RUFOZ0I7O3NCQVFsQixzQkFBQSxHQUF3QixTQUFBO1dBQ3RCLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsT0FBZixFQUF3QixhQUF4QixFQUF1QyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRDtBQUNyQyxZQUFBO1FBQUEsRUFBQSxHQUFLLENBQUEsQ0FBRSxDQUFDLENBQUMsYUFBSjtRQUNMLElBQUEsR0FBTyxFQUFFLENBQUMsSUFBSCxDQUFRLE1BQVI7UUFDUCxRQUFBLEdBQVcsRUFBRSxDQUFDLElBQUgsQ0FBUSxVQUFSO1FBQ1gsSUFBQSxDQUFtQixRQUFuQjtBQUFBLGlCQUFPLEtBQVA7O1FBQ0EsTUFBQSxHQUFTLEVBQUUsQ0FBQyxJQUFILENBQVEsUUFBUixDQUFBLElBQXFCLEVBQUUsQ0FBQyxJQUFILENBQVEsTUFBUjtRQUM5QixLQUFBLEdBQVEsRUFBRSxDQUFDLElBQUgsQ0FBUSxPQUFSLENBQUEsSUFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBVCxHQUFvQixRQUFRLENBQUMsTUFBOUI7UUFDNUIsR0FBQSxHQUFNLENBQUksRUFBRSxDQUFDLElBQUgsQ0FBUSxRQUFSLENBQUgsR0FBMkIsRUFBRSxDQUFDLElBQUgsQ0FBUSxRQUFSLENBQUEsS0FBcUIsTUFBaEQsR0FBNkQsU0FBOUQ7UUFDTixJQUFBLEdBQU8sQ0FBSSxFQUFFLENBQUMsSUFBSCxDQUFRLFlBQVIsQ0FBSCxHQUE4QixJQUE5QixHQUF3QyxLQUF6QztRQUNQLElBQUcsSUFBSDtVQUNFLEdBQUEsR0FBTSxRQUFBLEdBQVcsTUFBWCxHQUFvQjtVQUMxQixJQUFHLEtBQUMsQ0FBQSxPQUFRLENBQUEsR0FBQSxDQUFaO0FBQ0UsbUJBQU8sS0FEVDtXQUFBLE1BQUE7WUFHRSxLQUFDLENBQUEsT0FBUSxDQUFBLEdBQUEsQ0FBVCxHQUFnQixFQUhsQjtXQUZGOztRQVFBLE1BQUEsR0FBUyxFQUFFLENBQUMsSUFBSCxDQUFRLFFBQVI7UUFDVCxJQUFjLE1BQUEsS0FBVSxLQUFWLElBQW1CLE1BQUEsS0FBVSxRQUE3QixJQUF5QyxNQUFBLEtBQVUsTUFBakU7VUFBQSxHQUFBLEdBQU0sS0FBTjs7UUFFQSxLQUFDLENBQUEsS0FBRCxDQUFPLFFBQVAsRUFBaUIsTUFBakIsRUFBeUIsS0FBekI7UUFFQSxJQUFHLE9BQU8sR0FBUCxLQUFjLFVBQWpCO1VBQ0UsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtpQkFDQSxJQUZGOztNQXRCcUM7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXZDO0VBRHNCOztzQkE0QnhCLGtCQUFBLEdBQW9CLFNBQUE7V0FDbEIsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxDQUFEO0FBRXRCLFlBQUE7UUFBQSxFQUFBLEdBQUssQ0FBQyxDQUFDLFVBQUYsSUFBZ0IsQ0FBQyxDQUFDO0FBQ0osZUFBTSxFQUFBLElBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFWLEtBQXFCLFdBQXJCLElBQW9DLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBWCxDQUFBLENBQUEsS0FBOEIsR0FBbEUsSUFBeUUsQ0FBSSxFQUFFLENBQUMsSUFBakYsQ0FBYjtVQUFuQixFQUFBLEdBQUssRUFBRSxDQUFDO1FBQVc7UUFDbkIsSUFBRyxFQUFBLElBQU8sRUFBRSxDQUFDLElBQWI7VUFFRSxJQUFHLElBQUksR0FBQSxDQUFJLEVBQUUsQ0FBQyxJQUFQLENBQVksQ0FBQyxRQUFqQixJQUE4QixJQUFJLEdBQUEsQ0FBSSxFQUFFLENBQUMsSUFBUCxDQUFZLENBQUMsUUFBakIsS0FBK0IsUUFBUSxDQUFDLElBQXpFO1lBRUUsSUFBQSxDQUFnRyxLQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sQ0FBaEc7Y0FBQSxLQUFDLENBQUEsS0FBRCxDQUFPLGdCQUFQLEVBQXlCLEVBQUUsQ0FBQyxJQUE1QixFQUFrQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQWxCLEdBQTZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBakYsRUFBQTs7WUFFQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQix3QkFBbEIsRUFBNEM7Y0FBQyxHQUFBLEVBQUssRUFBRSxDQUFDLElBQVQ7YUFBNUM7WUFFQSxJQUFHLENBQUksRUFBRSxDQUFDLE1BQVAsSUFBaUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFWLENBQWdCLHVCQUFoQixDQUFwQjtjQUNFLFVBQUEsQ0FBVyxDQUFDLFNBQUE7Z0JBQ1YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFsQixHQUF5QixFQUFFLENBQUM7Y0FEbEIsQ0FBRCxDQUFYLEVBR0csR0FISDtxQkFJQSxDQUFDLENBQUMsY0FBRixDQUFpQixDQUFJLENBQUMsQ0FBQyxjQUFGLENBQUEsQ0FBSCxHQUEyQixDQUFDLENBQUMsV0FBN0IsR0FBOEMsQ0FBSSxDQUFuRCxDQUFqQixFQUxGO2FBTkY7V0FGRjs7TUFKc0I7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhCO0VBRGtCOztzQkFzQnBCLFNBQUEsR0FBVyxTQUFBO1dBQ1QsSUFBQyxDQUFBO0VBRFE7O3NCQUdYLElBQUEsR0FBTSxTQUFDLEVBQUQ7V0FDSixDQUFBLENBQUUsRUFBRixDQUFLLENBQUMsTUFBTixDQUFBLENBQWMsQ0FBQyxRQUFmLENBQXdCLGNBQXhCLENBQUEsSUFBMkMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFSLENBQWMsWUFBZDtFQUR2Qzs7Ozs7O0FBS1IsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNqTWpCLElBQUE7O0FBQU07RUFFUyxpQkFBQTtJQUNYLElBQUMsQ0FBQSxPQUFELENBQUE7RUFEVzs7b0JBR2IsT0FBQSxHQUFTLFNBQUE7QUFDUCxRQUFBO0lBQUEsU0FBQSxHQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBUSxDQUFBLFdBQUE7SUFFbEMsSUFBRyxTQUFBLEtBQWEsRUFBaEI7TUFDRSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkI7TUFDTCxFQUFFLENBQUMsR0FBSCxHQUFTLG9CQUFBLEdBQXVCLFNBQXZCLEdBQW1DO01BRTVDLEVBQUUsQ0FBQyxNQUFILEdBQVksU0FBQTtlQUNWLE9BQU8sQ0FBQyxJQUFSLENBQUE7TUFEVTthQUdaLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixFQUExQixFQVBGOztFQUhPOzs7Ozs7QUFhWCxNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ2xCakIsSUFBQSxtQkFBQTtFQUFBOztBQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsV0FBUjs7QUFFSDtBQUVKLE1BQUE7O0VBQUEsZ0JBQUEsR0FBbUIsQ0FDakIsWUFEaUIsRUFFakIsbUJBRmlCLEVBR2pCLGFBSGlCLEVBSWpCLGNBSmlCLEVBS2pCLGlCQUxpQixFQU1qQixlQU5pQixFQU9qQixvQkFQaUIsRUFRakIsZ0JBUmlCLEVBU2pCLGVBVGlCLEVBVWpCLCtCQVZpQixFQVdqQix5QkFYaUI7O0VBY04scUJBQUE7OztJQUNYLElBQUMsQ0FBQSxNQUFELEdBQVUsTUFBTSxDQUFDLEdBQVAsQ0FBVyxhQUFYO0lBQ1YsSUFBQyxDQUFBLE1BQUQsR0FBVSxNQUFNLENBQUM7SUFDakIsSUFBQyxDQUFBLFNBQUQsR0FBYSxNQUFNLENBQUM7SUFDcEIsSUFBQyxDQUFBLFlBQUQsR0FBZ0I7SUFDaEIsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSx3QkFBYixFQUF1QyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7UUFDckMsS0FBQyxDQUFBLEdBQUQsQ0FBSyx3QkFBTCxFQUErQixJQUEvQjtlQUNBLEtBQUMsQ0FBQSxVQUFELENBQVksSUFBWjtNQUZxQztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBdkM7RUFMVzs7d0JBU2IsR0FBQSxHQUFLLFNBQUMsTUFBRCxFQUFRLEdBQVI7V0FDSCxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBZ0IsTUFBRCxHQUFRLElBQVIsR0FBVyxDQUFDLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUFELENBQTFCO0VBREc7O3dCQUdMLGFBQUEsR0FBZSxTQUFDLEtBQUQ7V0FDYixJQUFDLENBQUEsR0FBRCxDQUFLLCtCQUFMLEVBQXNDLEtBQXRDO0VBRGE7O3dCQUdmLFVBQUEsR0FBWSxTQUFDLFFBQUQ7V0FDVixJQUFDLENBQUEsYUFBRCxDQUFlLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBckM7RUFEVTs7d0JBS1osR0FBQSxHQUFLLFNBQUMsSUFBRCxFQUFPLEtBQVA7V0FDSCxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFDLENBQUEsU0FBRCxDQUFXLEtBQVgsRUFBa0IsSUFBbEIsRUFBd0IsS0FBeEIsQ0FBYjtFQURHOzt3QkFLTCxJQUFBLEdBQU0sU0FBQyxJQUFELEVBQU8sS0FBUDtXQUNKLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQUMsQ0FBQSxTQUFELENBQVcsTUFBWCxFQUFtQixJQUFuQixFQUF5QixLQUF6QixDQUFiO0VBREk7O3dCQUdOLFNBQUEsR0FBVyxTQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsS0FBYjtXQUNUO01BQUEsTUFBQSxFQUFRLElBQVI7TUFDQSxNQUFBLEVBQVEsSUFEUjtNQUVBLE9BQUEsRUFBUyxLQUZUOztFQURTOzs7Ozs7QUFRYixNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ3REakIsSUFBQTs7QUFBQSxNQUFBLEdBQVMsT0FBQSxDQUFRLFdBQVI7O0FBRUg7RUFFUyxzQkFBQyxXQUFEO0lBQUMsSUFBQyxDQUFBLGNBQUQ7SUFDWixJQUFDLENBQUEsTUFBRCxHQUFVLE1BQU0sQ0FBQyxHQUFQLENBQVcsY0FBWDtJQUNWLElBQUMsQ0FBQSxNQUFELEdBQVUsQ0FBQSxDQUFFLE1BQUY7SUFDVixJQUFDLENBQUEsaUJBQUQsQ0FBQTtFQUhXOzt5QkFXYixHQUFBLEdBQUssU0FBQyxHQUFEO1dBQ0gsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsR0FBYjtFQURHOzt5QkFHTCxpQkFBQSxHQUFtQixTQUFDLFFBQUQ7SUFDakIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQsRUFBSSxJQUFKO1FBQy9CLEtBQUMsQ0FBQSxHQUFELENBQUssb0JBQUw7ZUFDQSxLQUFDLENBQUEsV0FBVyxDQUFDLElBQWIsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQyxJQUFJLENBQUMsSUFBTixFQUFZLElBQUksQ0FBQyxRQUFqQixDQUFoQztNQUYrQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakM7SUFJQSxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxrQkFBWCxFQUErQixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7UUFDN0IsS0FBQyxDQUFBLEdBQUQsQ0FBSyxrQkFBTDtlQUNBLEtBQUMsQ0FBQSxXQUFXLENBQUMsSUFBYixDQUFrQixZQUFsQixFQUFnQyxDQUFDLFlBQUQsRUFBa0IsSUFBSSxDQUFDLE9BQU4sR0FBYyxHQUFkLEdBQWlCLElBQUksQ0FBQyxNQUF2QyxDQUFoQztNQUY2QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBL0I7SUFJQSxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyx1QkFBWCxFQUFvQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7UUFDbEMsS0FBQyxDQUFBLEdBQUQsQ0FBSyx3QkFBQSxHQUF5QixJQUFJLENBQUMsS0FBbkM7UUFDQSxLQUFDLENBQUEsV0FBVyxDQUFDLEdBQWIsQ0FBaUIsZUFBakIsRUFBa0MsSUFBSSxDQUFDLEtBQXZDO2VBQ0EsS0FBQyxDQUFBLFdBQVcsQ0FBQyxJQUFiLENBQWtCLFlBQWxCLEVBQWdDLENBQUMsYUFBRCxFQUFnQixjQUFoQixDQUFoQztNQUhrQztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBcEM7SUFLQSxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxtQkFBWCxFQUFnQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7UUFDOUIsS0FBQyxDQUFBLEdBQUQsQ0FBSyxtQkFBTDtlQUNBLEtBQUMsQ0FBQSxXQUFXLENBQUMsSUFBYixDQUFrQixZQUFsQixFQUFnQyxDQUFDLGFBQUQsRUFBZ0IsZUFBaEIsQ0FBaEM7TUFGOEI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWhDO0lBSUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQsRUFBSSxJQUFKO1FBQy9CLEtBQUMsQ0FBQSxHQUFELENBQUssb0JBQUw7ZUFDQSxLQUFDLENBQUEsV0FBVyxDQUFDLElBQWIsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQyxhQUFELEVBQWdCLGdCQUFoQixDQUFoQztNQUYrQjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakM7V0FJQSxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyw2QkFBWCxFQUEwQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7UUFDeEMsS0FBQyxDQUFBLEdBQUQsQ0FBSyw2QkFBTDtlQUNBLEtBQUMsQ0FBQSxXQUFXLENBQUMsSUFBYixDQUFrQixZQUFsQixFQUFnQyxDQUFDLGNBQUQsRUFBaUIsV0FBakIsQ0FBaEM7TUFGd0M7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFDO0VBdEJpQjs7eUJBMEJuQixtQkFBQSxHQUFxQixTQUFDLFFBQUQ7SUFDbkIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxHQUFSLENBQVksb0JBQVo7SUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLEdBQVIsQ0FBWSxrQkFBWjtJQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsR0FBUixDQUFZLHVCQUFaO0lBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxHQUFSLENBQVksNkJBQVo7SUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLEdBQVIsQ0FBWSxtQkFBWjtXQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsR0FBUixDQUFZLG9CQUFaO0VBTm1COzs7Ozs7QUFTdkIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7Ozs7QUNyRGpCLElBQUE7O0FBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxXQUFSOztBQUVIO0VBQ1Msd0JBQUMsSUFBRCxFQUFRLFdBQVIsRUFBc0IsY0FBdEI7SUFBQyxJQUFDLENBQUEsT0FBRDtJQUFPLElBQUMsQ0FBQSxjQUFEO0lBQWMsSUFBQyxDQUFBLGlCQUFEO0lBQ2pDLElBQUMsQ0FBQSxNQUFELEdBQVUsTUFBTSxDQUFDLEdBQVAsQ0FBVyxnQkFBWDtJQUNWLElBQUMsQ0FBQSxXQUFELEdBQWUsSUFBQyxDQUFBLFdBQUQsSUFBZ0I7SUFDL0IsSUFBQyxDQUFBLFlBQUQsQ0FBQTtFQUhXOzsyQkFLYixZQUFBLEdBQWMsU0FBQTtJQUdaLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxFQUFMLENBQVEsMEJBQVIsRUFBb0MsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLENBQUQsRUFBSSxJQUFKO1FBQ2xDLElBQUcsS0FBQyxDQUFBLFFBQUQsQ0FBQSxDQUFIO1VBQ0UsS0FBQyxDQUFBLGFBQUQsQ0FBQTtpQkFDQSxDQUFBLENBQUUsS0FBRixDQUFJLENBQUMsR0FBTCxDQUFTLDBCQUFULEVBRkY7O01BRGtDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQztXQUtBLENBQUEsQ0FBRSxJQUFDLENBQUEsY0FBSCxDQUFrQixDQUFDLEVBQW5CLENBQXNCLDBCQUF0QixFQUFrRCxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsQ0FBRCxFQUFJLElBQUo7ZUFDaEQsQ0FBQSxDQUFFLEtBQUYsQ0FBSSxDQUFDLE9BQUwsQ0FBYSwwQkFBYixFQUF5QyxJQUF6QztNQURnRDtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEQ7RUFSWTs7MkJBWWQsUUFBQSxHQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsSUFBQSxHQUFPLElBQUMsQ0FBQSxJQUFJLENBQUMscUJBQU4sQ0FBQTtXQUNQLElBQUksQ0FBQyxHQUFMLElBQVksQ0FBWixJQUNBLElBQUksQ0FBQyxJQUFMLElBQWEsQ0FEYixJQUVBLENBQUMsSUFBSSxDQUFDLEdBQUwsR0FBVyxFQUFaLENBQUEsSUFBbUIsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE1BQVYsQ0FBQSxDQUZuQixJQUdBLENBQUMsSUFBSSxDQUFDLElBQUwsR0FBWSxFQUFiLENBQUEsSUFBb0IsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEtBQVYsQ0FBQTtFQUxaOzsyQkFTVixhQUFBLEdBQWUsU0FBQTtBQUNiLFFBQUE7SUFBQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxrQkFBYixFQUFpQyxJQUFDLENBQUEsV0FBbEMsRUFBK0MsYUFBL0MsRUFBOEQsSUFBQyxDQUFBLElBQS9EOytDQUNjLENBQUUsYUFBaEIsQ0FBOEIsRUFBQSxHQUFHLFFBQVEsQ0FBQyxRQUFaLEdBQXVCLFFBQVEsQ0FBQyxNQUFoQyxHQUF1QyxHQUF2QyxHQUEwQyxJQUFDLENBQUEsV0FBekU7RUFGYTs7Ozs7O0FBSWpCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDakNqQixDQUFFLFNBQUE7QUFDQSxNQUFBO0VBQUEsY0FBQSxHQUFpQixTQUFDLENBQUQ7QUFHZixRQUFBO0lBQUEsSUFBQSxHQUFPO0FBQ1A7TUFDRSxJQUFBLEdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFDLENBQUMsSUFBYixFQURUO0tBQUEsYUFBQTtNQUVNO0FBQ0osYUFIRjs7SUFLQSxJQUFVLElBQUksQ0FBQyxNQUFMLEtBQWUsUUFBekI7QUFBQSxhQUFBOztJQUVBLE1BQUEsR0FBUyxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsTUFBWixDQUFtQixTQUFBO2FBQzFCLElBQUksQ0FBQyxhQUFMLEtBQXNCLENBQUMsQ0FBQztJQURFLENBQW5CO0lBR1QsSUFBRyxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFoQixJQUFxQixJQUFJLENBQUMsTUFBTCxLQUFlLE1BQXZDO2FBQ0UsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFJLENBQUMsTUFBbkIsRUFERjs7RUFkZTtTQWlCakIsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLGNBQW5DLEVBQW1ELEtBQW5EO0FBbEJBLENBQUYsQ0FBQSxDQUFBOzs7O0FDQ0EsQ0FBQyxTQUFDLENBQUQsRUFBSSxFQUFKO0VBQ0MsTUFBTSxDQUFDLEVBQUcsQ0FBQSxFQUFBLENBQVYsR0FBZ0IsU0FBQyxFQUFELEVBQUssU0FBTCxFQUFnQixRQUFoQjtJQUNiLElBQUcsRUFBSDthQUFXLElBQUMsQ0FBQSxJQUFELENBQU0sUUFBTixFQUFnQixTQUFTLENBQUMsUUFBVixDQUFtQixFQUFuQixFQUF1QixTQUF2QixFQUFrQyxRQUFsQyxDQUFoQixFQUFYO0tBQUEsTUFBQTthQUE2RSxJQUFDLENBQUEsT0FBRCxDQUFTLEVBQVQsRUFBN0U7O0VBRGE7QUFEakIsQ0FBRCxDQUFBLENBS0UsTUFMRixFQUtVLGFBTFY7Ozs7QUNEQSxDQUFDLFNBQUE7QUFDQyxNQUFBO0VBQUEsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsTUFBTSxDQUFDLE1BQVAsSUFBaUI7RUFDakMsTUFBTSxDQUFDLGdCQUFQLEdBQTBCO0VBQzFCLENBQUEsR0FBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QjtFQUNKLENBQUMsQ0FBQyxJQUFGLEdBQVM7RUFDVCxDQUFDLENBQUMsS0FBRixHQUFVO0VBQ1YsQ0FBQyxDQUFDLEdBQUYsR0FBUSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQWxCLEdBQTZCLCtDQUE3QixHQUFtRixJQUFBLElBQUEsQ0FBQSxDQUFNLENBQUMsUUFBUCxDQUFBLENBQW5GLEdBQXVHLEdBQXZHLEdBQWlILElBQUEsSUFBQSxDQUFBLENBQU0sQ0FBQyxPQUFQLENBQUE7RUFDekgsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxvQkFBVCxDQUE4QixRQUE5QixDQUF3QyxDQUFBLENBQUE7U0FDNUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFiLENBQTBCLENBQTFCLEVBQTZCLENBQTdCO0FBUkQsQ0FBRCxDQUFBLENBQUE7Ozs7QUNBQSxDQUFDLFNBQUE7QUFDQyxNQUFBO0VBQUEsRUFBQSxHQUFLLE1BQU0sQ0FBQyxFQUFQLElBQWE7RUFDbEIsRUFBRSxDQUFDLEtBQUgsR0FBVyxFQUFFLENBQUMsS0FBSCxJQUFZO1NBQ3ZCLE1BQU0sQ0FBQyxFQUFQLEdBQVk7QUFIYixDQUFELENBQUEsQ0FBQTs7OztBQ0tBLElBQUE7O0FBQUEsSUFBQSxHQUFPLENBQUMsU0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFVBQVA7QUFDTixNQUFBO0VBQUEsT0FBQSxHQUFVLENBQ1IsT0FEUSxFQUVSLE9BRlEsRUFHUixPQUhRO0VBS1YsY0FBQSxHQUFpQjtFQUNqQixZQUFBLEdBQ0U7SUFBQSxPQUFBLEVBQ0U7TUFBQSxXQUFBLEVBQ0U7UUFBQSxTQUFBLEVBQVcsV0FBWDtRQUNBLFNBQUEsRUFBVyxXQURYO09BREY7S0FERjtJQUtBLE9BQUEsRUFDRTtNQUFBLFdBQUEsRUFDRTtRQUFBLFNBQUEsRUFBVyxXQUFYO1FBQ0EsU0FBQSxFQUFXLFdBRFg7T0FERjtLQU5GO0lBVUEsT0FBQSxFQUNFO01BQUEsV0FBQSxFQUNFO1FBQUEsU0FBQSxFQUFXLE1BQVg7UUFDQSxTQUFBLEVBQVcsU0FEWDtPQURGO0tBWEY7O0VBaUJGLE1BQUEsR0FBUyxTQUFBO0FBQ1AsUUFBQTtJQUFBLElBQUEsR0FBTyxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsSUFBVixDQUFlLE1BQWY7SUFDTixJQUFJLE9BQU8sQ0FBQyxPQUFSLENBQWdCLElBQWhCLENBQUEsR0FBd0IsQ0FBQyxDQUE3QjthQUFxQyxLQUFyQztLQUFBLE1BQUE7YUFBK0MsUUFBL0M7O0VBRk07RUFPVCxTQUFBLEdBQVksU0FBQyxHQUFEO0FBQ1YsUUFBQTtJQUFBLE9BQUEsR0FBVSxZQUFhLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBVSxDQUFBLEdBQUE7SUFDakMsSUFBa0QsT0FBQSxLQUFXLFNBQTdEO01BQUEsT0FBQSxHQUFVLFlBQWEsQ0FBQSxnQkFBQSxDQUFrQixDQUFBLEdBQUEsRUFBekM7O1dBQ0E7RUFIVTtTQU9aO0lBQUEsT0FBQSxFQUFTLE9BQVQ7SUFDQSxTQUFBLEVBQVcsU0FEWDtJQUVBLENBQUEsRUFBRyxTQUZIO0lBR0EsWUFBQSxFQUFjLFlBSGQ7SUFJQSxNQUFBLEVBQVEsTUFKUjs7QUF2Q00sQ0FBRCxDQUFBLENBNENMLE1BNUNLLEVBNENHLFFBNUNIOztBQStDUCxNQUFNLENBQUMsT0FBUCxHQUFpQjs7OztBQ25EakIsSUFBQTs7QUFBQSxTQUFBLEdBQVksU0FBQSxJQUFhOztBQUN6QixTQUFTLENBQUMsV0FBVixHQUF3QixTQUFTLENBQUMsV0FBVixJQUF5Qjs7QUFHakQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUF0QixHQUErQixTQUFDLFFBQUQ7RUFDN0IsSUFBQSxDQUFjLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBZDtBQUFBLFdBQUE7O1NBQ0EsTUFBTyxDQUFBLElBQUMsQ0FBQSxNQUFELENBQUEsQ0FBQSxDQUFQLENBQWtCLElBQUMsQ0FBQSxLQUFELENBQUEsQ0FBbEIsRUFBNEIsQ0FBQSxTQUFBLEtBQUE7V0FBQSxTQUFDLENBQUQ7YUFDMUIsUUFBQSxDQUFTLENBQVQ7SUFEMEI7RUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTVCO0FBRjZCOztBQU8vQixTQUFTLENBQUMsV0FBVyxDQUFDLElBQXRCLEdBQTZCLFNBQUMsT0FBRCxFQUFVLFlBQVY7RUFDM0IsSUFBQSxDQUFjLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBZDtBQUFBLFdBQUE7O0VBQ0EsaUJBQUEsZUFBaUI7U0FDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFkLENBQTBCLE9BQTFCLEVBQW1DLFlBQW5DO0FBSDJCOztBQU03QixTQUFTLENBQUMsV0FBVyxDQUFDLFNBQXRCLEdBQWtDLFNBQUE7U0FDaEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUR1Qjs7QUFJbEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUF0QixHQUErQixTQUFBO0VBQzVCLElBQUcsTUFBTSxDQUFDLGdCQUFWO1dBQWdDLG1CQUFoQztHQUFBLE1BQUE7V0FBd0QsY0FBeEQ7O0FBRDRCOztBQUkvQixTQUFTLENBQUMsV0FBVyxDQUFDLEtBQXRCLEdBQThCLFNBQUE7RUFDM0IsSUFBRyxJQUFDLENBQUEsTUFBRCxDQUFBLENBQUEsS0FBYSxhQUFoQjtXQUFtQyxZQUFuQztHQUFBLE1BQUE7V0FBb0QsVUFBcEQ7O0FBRDJCOztBQUs5QixNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFTLENBQUM7Ozs7QUMvQjNCLElBQUE7O0FBQUEsU0FBQSxHQUFZLENBQUMsU0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFVBQVA7QUFLWCxNQUFBO0VBQUEsUUFBQSxHQUFXLFNBQUMsSUFBRCxFQUFPLFNBQVAsRUFBa0IsUUFBbEI7QUFDVCxRQUFBO0lBQUEsT0FBQSxHQUFVO1dBQ1YsU0FBQSxHQUFZLFNBQUE7QUFDVixVQUFBO01BQUEsT0FBQSxHQUFVLFNBQUE7UUFDUixJQUFBLENBQTZCLFFBQTdCO1VBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLElBQWhCLEVBQUE7O1FBQ0EsT0FBQSxHQUFVO01BRkY7TUFJVixHQUFBLEdBQU07TUFDTixJQUFBLEdBQU87TUFDUCxJQUFHLE9BQUg7UUFDRSxZQUFBLENBQWEsT0FBYixFQURGO09BQUEsTUFBQTtRQUVLLElBQXlCLFFBQXpCO1VBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLElBQWhCLEVBQUE7U0FGTDs7TUFHQSxPQUFBLEdBQVUsVUFBQSxDQUFXLE9BQVgsRUFBb0IsU0FBQSxJQUFhLEdBQWpDO0lBVkE7RUFGSDtTQWVYO0lBQUEsUUFBQSxFQUFVLFFBQVY7O0FBcEJXLENBQUQsQ0FBQSxDQXFCVixNQXJCVSxFQXFCRixRQXJCRTs7QUF1QlosU0FBUyxDQUFDLFVBQVYsR0FBdUIsU0FBQTtBQUNyQixNQUFBO21EQUFtQixDQUFFLGtCQUFyQixLQUFpQztBQURaOztBQUl2QixTQUFTLENBQUMsZUFBVixHQUE0QixTQUFDLEdBQUQ7RUFDMUIsSUFBRyxHQUFHLENBQUMsT0FBSixDQUFZLEdBQVosQ0FBQSxHQUFtQixDQUFDLENBQXZCO1dBQ0UsSUFERjtHQUFBLE1BQUE7V0FHRSxJQUhGOztBQUQwQjs7QUFNNUIsU0FBUyxDQUFDLFNBQVYsR0FBc0IsU0FBQyxLQUFEO0FBQ3BCLE1BQUE7RUFBQSxVQUFBLFFBQVUsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUMxQixLQUFBLEdBQVEsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsQ0FBaEI7RUFDUixPQUFBLEdBQVUsS0FBSyxDQUFDLEtBQU4sQ0FBWSxHQUFaO0VBQ1YsTUFBQSxHQUFTO0FBRVQsT0FBQSx5Q0FBQTs7SUFDRSxNQUFhLENBQUMsQ0FBQyxLQUFGLENBQVEsR0FBUixDQUFiLEVBQUMsWUFBRCxFQUFNO0lBQ04sTUFBTyxDQUFBLEdBQUEsQ0FBUCxHQUFjLGtCQUFBLENBQW1CLEdBQW5CO0FBRmhCO1NBSUE7QUFWb0I7O0FBYXRCLFNBQVMsQ0FBQyxTQUFWLEdBQXNCLFNBQUE7QUFDcEIsTUFBQTtFQUFBLElBQUEsR0FBTyxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsSUFBVixDQUFlLE1BQWY7RUFDUCxPQUFBLEdBQVUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQjtFQUNWLE1BQUEsR0FBUztFQUNULElBQUcsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBQSxHQUF3QixDQUFDLENBQTVCO0lBQ0UsTUFBQSxHQUFTLEtBRFg7O1NBR0E7QUFQb0I7O0FBVXRCLFNBQVMsQ0FBQyxVQUFWLEdBQXVCLFNBQUMsSUFBRDtBQUNyQixNQUFBO0VBQUEsSUFBQSxHQUFXLElBQUEsSUFBQSxDQUFLLElBQUw7RUFDWCxJQUFBLEdBQU8sSUFBSSxDQUFDLFdBQUwsQ0FBQTtFQUNQLE1BQUEsR0FBUyxTQUFTLENBQUMsU0FBVixDQUFBO0VBRVQsVUFBQSxHQUNFO0lBQUEsT0FBQSxFQUFTLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQXVFLEtBQXZFLEVBQThFLEtBQTlFLENBQVQ7SUFDQSxPQUFBLEVBQVMsQ0FBQyxLQUFELEVBQVEsVUFBUixFQUFvQixLQUFwQixFQUEyQixLQUEzQixFQUFrQyxLQUFsQyxFQUF5QyxLQUF6QyxFQUFnRCxLQUFoRCxFQUF1RCxVQUF2RCxFQUFtRSxLQUFuRSxFQUEwRSxLQUExRSxFQUFpRixLQUFqRixFQUF3RixVQUF4RixDQURUO0lBRUEsT0FBQSxFQUFTLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQXVFLEtBQXZFLEVBQThFLEtBQTlFLENBRlQ7O0VBR0YsS0FBQSxHQUFRLFVBQVcsQ0FBQSxNQUFBLENBQVEsQ0FBQSxJQUFJLENBQUMsUUFBTCxDQUFBLENBQUE7RUFDM0IsR0FBQSxHQUFNLElBQUksQ0FBQyxPQUFMLENBQUE7RUFFTixZQUFBLEdBQ0U7SUFBQSxPQUFBLEVBQVksR0FBRCxHQUFLLEdBQUwsR0FBUSxLQUFSLEdBQWMsR0FBZCxHQUFpQixJQUE1QjtJQUNBLE9BQUEsRUFBWSxHQUFELEdBQUssR0FBTCxHQUFRLEtBQVIsR0FBYyxHQUFkLEdBQWlCLElBRDVCO0lBRUEsT0FBQSxFQUFZLEdBQUQsR0FBSyxHQUFMLEdBQVEsS0FBUixHQUFjLEdBQWQsR0FBaUIsSUFGNUI7O0FBSUYsU0FBTyxZQUFhLENBQUEsTUFBQTtBQWpCQzs7QUFxQnZCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOzs7O0FDN0VqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcmlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2cUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIFRIRVNFIENMQVNTRVMgaGF2ZSBiZWVuIHJlbW92ZWQgYXMgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVtIGFueW1vcmUuLi5cbiMgZmlsZXMgc3RpbGwgZXhpc3QgYWRkL3JlZmFjdG9yIHRoZW0gaWYgcmVxdWlyZWQuXG4jIC0gQnJvd3NlclxuIyAtIENvbXBldGl0aW9uc1xuIyAtIEV2ZW50c0NhbGVuZGFyXG4jIC0gTmF2U2VhcmNoXG4jIC0gU2Nyb2xsXG4jIC0gSGVhZGVyU2VhcmNoXG4jIC0gU2VnbWVudElPVHJhY2tlclxuXG5cbiMgVXNlZCBmb3IgcmVzaXppbmcgaWZyYW1lcyBpbiBhcHBzIGFuZCBtcG9yYSBwbGF5ZXJcbnJlcXVpcmUgJy4vYXBwL19pbml0aWFsaXNlcnMuaWZyYW1lLXJlc2l6ZS5jb2ZmZWUnXG4jIGpRdWVyeSBwbHVnaW4gdG8gcHJldmVudCBmbG9vZGluZyBvZiByZXNpemUgZXZlbnRzXG5yZXF1aXJlICcuL2FwcC9faW5pdGlhbGlzZXJzLnNtYXJ0cmVzaXplLmNvZmZlZSdcbnJlcXVpcmUgJy4vYXBwL19pbml0aWFsaXNlcnMudmlld3MtaW5pdC5jb2ZmZWUnXG5yZXF1aXJlICcuL2FwcC9faW5pdGlhbGlzZXJzLnVtYmVsLmNvZmZlZSdcblxuIyBMb2FkIGxvZ2dlclxuTG9nZ2VyICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2pzLWxvZ2dlcidcblxuIyBMb2FkIHV0aWxpdGllc1xuVXRpbGl0aWVzICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL191dGlsaXRpZXMudXRpbGl0aWVzLmNvZmZlZSdcblV0aWxpdGllcy5Qb3N0TWVzc2FnZSAgPSByZXF1aXJlICcuL2FwcC9fdXRpbGl0aWVzLnBvc3QtbWVzc2FnZS5jb2ZmZWUnXG5JMThuICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX3V0aWxpdGllcy5pMThuLmNvZmZlZSdcblxuIyBBZCBtb2R1bGVzXG5yZXF1aXJlICcuLi9mb3VuZGF0aW9uL3ZpZXdzL2hhbmRsZWJhcnMtdGVtcGxhdGVzLmpzJ1xuRk1Qb2xhckFkICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19hZHMuZm0tcG9sYXItYWQuY29mZmVlJ1xuXG4jIExvYWQgY29tcG9uZW50cyAvIG1vZHVsZXNcbkFjZk1hcHMgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy5hY2YtbWFwcy5jb2ZmZWUnXG5BZExvYWRlciAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuYWQtbG9hZGVyJ1xuQWxlcnQgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLmFsZXJ0LmNvZmZlZSdcbkFzeW5jUG9zdHNMb2FkZXIgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy5hc3luYy1sb2FkZXIuY29mZmVlJ1xuQmFja1RvVG9wICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLmJhY2stdG8tdG9wLmNvZmZlZSdcbkNvbnRlbnRTbGlkZXIgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy5jb250ZW50LXNsaWRlci5jb2ZmZWUnXG5Db21wZXRpdGlvbnMgICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuY29tcGV0aXRpb25zLmNvZmZlZSdcbkZhY2Vib29rVXNlciAgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy5mYWNlYm9vay11c2VyLmNvZmZlZSdcbkZhY2Vib29rU0RLICAgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy5mYWNlYm9vay1zZGsuY29mZmVlJ1xuRkJPcGVuR3JhcGhPYmplY3QgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLmZiLW9wZW4tZ3JhcGgtb2JqZWN0LmNvZmZlZSdcbkZlYXR1cmVTbGlkZXIgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy5mZWF0dXJlLXNsaWRlci5jb2ZmZWUnXG5HYWxsZXJ5ICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuZ2FsbGVyeS5jb2ZmZWUnXG5HYWxsZXJ5U2VyaWVzICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuZ2FsbGVyeS1zZXJpZXMuY29mZmVlJ1xuR2VvSVAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLmdlb2lwLmNvZmZlZSdcbkdvb2dsZUFuYWx5dGljc1RyYWNrZXIgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy5nb29nbGUtYW5hbHl0aWNzLXRyYWNrZXIuY29mZmVlJ1xuSGVhZGVyU2VhcmNoICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLmhlYWRlci1zZWFyY2guY29mZmVlJ1xuIyBIZWFkZXJGaXggICAgICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuaGVhZGVyLWZpeC5jb2ZmZWUnXG5IZWFkcm9vbU1lbnUgICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuaGVhZHJvb20tbWVudS5jb2ZmZWUnXG5MaWdodGJveCAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMubGlnaHRib3guY29mZmVlJ1xuTG9naW5Db250cm9sICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLmxvZ2luLWNvbnRyb2wuY29mZmVlJ1xuTG9uZ2Zvcm0gICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLmxvbmdmb3JtLmNvZmZlZSdcbk1vYmlsZU1lbnUgICAgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy5tb2JpbGUtbWVudS5jb2ZmZWUnXG5OZXdzbGV0dGVyV2lkZ2V0ICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMubmV3c2xldHRlci10ZXJtcy5jb2ZmZWUnXG5SYWRpdW1PbmUgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMucmFkaXVtLW9uZS5jb2ZmZWUnXG5TZWFyY2hSZXN1bHRzICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuc2VhcmNoLXJlc3VsdHMuY29mZmVlJ1xuTWVudVRvZ2dsZXMgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLm1lbnUtdG9nZ2xlcy5jb2ZmZWUnXG5Tb2NpYWxBcGlOb3RpZmllciAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuc29jaWFsLWFwaS1ub3RpZmllci5jb2ZmZWUnXG5Tb2NpYWxUcmFja2VyICAgICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuc29jaWFsLXRyYWNrZXIuY29mZmVlJ1xuU3BsaXRQb3N0ICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLnNwbGl0cG9zdCdcblRhYnMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy50YWJzLmNvZmZlZSdcbkZNVHJhY2tlciAgICAgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy50cmFja2VyLmNvZmZlZSdcblVtYmVsQ2xpZW50ICAgICAgICAgICAgPSByZXF1aXJlICcuL2FwcC9fY29tcG9uZW50cy51bWJlbC1jbGllbnQuY29mZmVlJ1xuVW1iZWxUcmFja2VyICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLnVtYmVsLXRyYWNrZXIuY29mZmVlJ1xuVHlwZUtpdCAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLnR5cGVraXQuY29mZmVlJ1xuU2VjdGlvbldhdGNoZXIgICAgICAgICA9IHJlcXVpcmUgJy4vYXBwL19jb21wb25lbnRzLnNlY3Rpb24td2F0Y2hlci5jb2ZmZWUnXG5GYWNlYm9va0NvbW1lbnRzICAgICAgID0gcmVxdWlyZSAnLi9hcHAvX2NvbXBvbmVudHMuZmFjZWJvb2stY29tbWVudHMuY29mZmVlJ1xuXG4jIFNldCB1cCBkZWZhdWx0IGxvZ2dlciBiZWhhdmlvdXJcbkxvZ2dlci51c2VEZWZhdWx0cygpXG5Mb2dnZXIuc2V0TGV2ZWwoTG9nZ2VyLkRFQlVHKVxuXG4jIEFkIGxvYWRlci4uLiBsb2FkIGFkcyFcbndpbmRvdy5hZExvYWRlciA9IG5ldyBBZExvYWRlcigpXG5hZExvYWRlci5sb2FkQWRzKClcblxuXG4jIE1pZ3JhdGVkIEpTIC0gZnJvbSB2MSAvIGZvdW5kYXRpb24uanNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIEdvb2dsZSBUYWcgTWFuYWdlciAtIEluaXRpYWxpc2UgYSBkYXRhTGF5ZXIgaWYgbm9uZSBoYXMgYmVlbiBjcmVhdGVkXG53aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciBvciBbXVxuXG4jIFVUSUxJVElFU1xud2luZG93LmkxOG4gICAgICAgICAgICA9IEkxOG5cbndpbmRvdy5VdGlsaXRpZXMgICAgICAgPSBVdGlsaXRpZXNcblV0aWxpdGllcy5Qb3N0TWVzc2FnZSAgPSBVdGlsaXRpZXMuUG9zdE1lc3NhZ2VcblxuIyBGQUNFQk9PS1xuZmFjZWJvb2tTREsgICAgICAgICAgICA9IG5ldyBGYWNlYm9va1NESygpICMgVG8gVEVTVCAtICBsb2dpbiBvbiB1bmJvdW5kXG5mYWNlYm9va0NvbW1lbnRzICAgICAgID0gbmV3IEZhY2Vib29rQ29tbWVudHMoKVxuXG4jIFRSQUNLSU5HXG51bWJlbENsaWVudCAgICAgICAgICAgID0gbmV3IFVtYmVsQ2xpZW50KClcbnVtYmVsVHJhY2tlciAgICAgICAgICAgPSBuZXcgVW1iZWxUcmFja2VyKHVtYmVsQ2xpZW50KVxuc29jaWFsQXBpTm90aWZpZXIgICAgICA9IG5ldyBTb2NpYWxBcGlOb3RpZmllcigpXG5nb29nbGVBbmFseXRpY3NUcmFja2VyID0gbmV3IEdvb2dsZUFuYWx5dGljc1RyYWNrZXIoKVxuc29jaWFsVHJhY2tlciAgICAgICAgICA9IG5ldyBTb2NpYWxUcmFja2VyKClcbndpbmRvdy5UcmFja2VyICAgICAgICAgPSBuZXcgRk1UcmFja2VyKClcblxuIyBBRFNcbm1lZGlhdm9pY2VfcHJvcGVydHlfaWQgID0gJCgnYm9keScpLmRhdGEoJ21lZGlhdm9pY2UtcHJvcGVydHktaWQnKVxuZm1Qb2xhckFkICAgICAgICAgICAgICAgPSBuZXcgRk1Qb2xhckFkKG1lZGlhdm9pY2VfcHJvcGVydHlfaWQsIFwiL3NhbXBsZS9wdWJsaXNoZXIvc3BvbnNvcmVkLmh0bWxcIilcblxuc2VjdGlvbldhdGNoZXIgICAgICAgICA9IG5ldyBTZWN0aW9uV2F0Y2hlcigpXG5cblxuIyBTSEFSRSBCVVRUT05TXG5hcnRpY2xlU2hhcmVCdXR0b25zICAgID0gbmV3IFJhZGl1bU9uZSgnYXNpZGUnLCAnLmMtYXJ0aWNsZS1zaGFyZScpXG5cbiMgQ09NUE9ORU5UU1xuYXN5bmNQb3N0c0xvYWRlciAgICAgICA9IG5ldyBBc3luY1Bvc3RzTG9hZGVyKClcbnR5cGVLaXQgICAgICAgICAgICAgICAgPSBuZXcgVHlwZUtpdCgpXG53aW5kb3cuQWNmTWFwcyAgICAgICAgID0gbmV3IEFjZk1hcHMoKVxuYmFja1RvVG9wICAgICAgICAgICAgICA9IG5ldyBCYWNrVG9Ub3AoKVxuY29udGVudFNsaWRlciAgICAgICAgICA9IG5ldyBDb250ZW50U2xpZGVyKClcbmNvb2tpZVBvbGljeSAgICAgICAgICAgPSBuZXcgQWxlcnQoXCIuYy1jb29raWUtcG9saWN5XCIsIFwiaGlkZV9jb29raWVfbXNnXCIpXG5jb21wZXRpdGlvbnMgICAgICAgICAgID0gbmV3IENvbXBldGl0aW9ucygpXG5mZWF0dXJlU2xpZGVyICAgICAgICAgID0gbmV3IEZlYXR1cmVTbGlkZXIoKVxuaGVhZHJvb21NZW51ICAgICAgICAgICA9IG5ldyBIZWFkcm9vbU1lbnUoKVxuIyBoZWFkZXJGaXggICAgICAgICAgICAgID0gbmV3IEhlYWRlckZpeCgpXG5saWdodGJveCAgICAgICAgICAgICAgID0gbmV3IExpZ2h0Ym94KClcbmxvbmdmb3JtICAgICAgICAgICAgICAgPSBuZXcgTG9uZ2Zvcm0oKVxubG9naW5Db250cm9sICAgICAgICAgICA9IG5ldyBMb2dpbkNvbnRyb2woKVxubW9iaWxlTWVudSAgICAgICAgICAgICA9IG5ldyBNb2JpbGVNZW51KCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBUTyBCRSBURVNURUQgb24gc3RhZ2luZ1xubmV3c2xldHRlcldpZGdldCAgICAgICA9IG5ldyBOZXdzbGV0dGVyV2lkZ2V0KClcbnNlYXJjaFJlc3VsdHMgICAgICAgICAgPSBuZXcgU2VhcmNoUmVzdWx0cygpXG5zcGxpdHBvc3QgICAgICAgICAgICAgID0gbmV3IFNwbGl0UG9zdCgpXG5tZW51VG9nZ2xlcyAgICAgICAgICAgID0gbmV3IE1lbnVUb2dnbGVzKClcbnRhYnMgICAgICAgICAgICAgICAgICAgPSBuZXcgVGFicygpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNyZWZhY3RvciBpbnRvIG5hdi10b2dnbGVcbiQoXCIuZ2FsbGVyeS1zZXJpZXNcIikuZWFjaCAtPiBuZXcgR2FsbGVyeVNlcmllcygkKHRoaXMpKVxuJChcIi5nYWxsZXJ5XCIpLmVhY2ggLT4gbmV3IEdhbGxlcnkoJCh0aGlzKSlcblxuaWYgd2luZG93LmFsdExvY2FsZXM/XG4gIGdlb0lQID0gbmV3IEdlb0lQKClcbiIsIlBsYXRmb3JtRGV0ZWN0aW9uID0gcmVxdWlyZSAnLi9fY29tcG9uZW50cy5wbGF0Zm9ybS1kZXRlY3Rpb24uY29mZmVlJ1xuXG5jbGFzcyBGTVBvbGFyQWRcblxuICBAYWRTZXJ2ZXIgPSAnZGZwJ1xuICBAYWRTaXplID0gJzJ4MidcbiAgQGFkUHVibGlzaGVySUQgPSAnMTM1MjY2OTAnXG5cbiAgQGluZm9UZXh0ID0gXCJUaGlzIGNvbnRlbnQgaXMgc3BvbnNvcmVkIGFuZCBtYWRlIHBvc3NpYmxlIGJ5IHRoZSBicmFuZCwgd2hvIHBhaWQgdXMgdG8gcGxhY2UgdGhpcyBzdG9yeSBvciBsaW5rLiBJdCB3YXMgbm90IHdyaXR0ZW4gYnkgb3VyIGVkaXRvcmlhbCBzdGFmZiBhbmQgZG9lcyBub3QgbmVjZXNzYXJpbHkgcmVmbGVjdCBvdXIgdmlld3MuIE91ciBzdGFmZiBoYXMgcmV2aWV3ZWQgaXQgdG8gZW5zdXJlIHRoZSBoaWdoZXN0IHF1YWxpdHkgY29udGVudC5cIlxuICBAaW5mb0J1dHRvblRleHQgPSBcIj9cIlxuXG4gICMgRGVmaW5lIHRoZSB0ZW1wbGF0ZSBiZWhhdmlvdXIgZm9yIHRoZSBzaXRlXG4gICMge1xuICAjICBsYWJlbDogXCJTb21lIGFyYml0cmFyeSBpZGVudGlmaWVyXCJcbiAgIyAgYWRJRDogXCJUaGUgQWQgSUQgdG8gY2FsbCBvbiB0aGUgYWRzZXJ2ZXIgREZQXCJcbiAgIyAgbG9jYXRpb246IFwiVGhlIENTUyBTZWxlY3RvciB3aGljaCB1bmlxdWVseSBpZGVudGlmaWVzIHRoZSBwbGFjZW1lbnQgb24gdGhlIHBhZ2VcIlxuICAjICBtYXJrdXA6IFJlZmVyZW5jZSB0byB0aGUgRk0uVmlld3MueHh4eHggaGFuZGxlYmFycyB0ZW1wbGF0ZVxuICAjICBpbmZvVGV4dDogXCJDdXJyZW50bHkgdW51c2VkXCJcbiAgIyAgaW5mb0J1dHRvblRleHQ6IFwiQ3VycmVudGx5IHVudXNlZFwiXG4gICMgIGNhdGVnb3J5OiBUaGUgalF1ZXJ5IHNlbGVjdG9yIG9mIHdoYXRldmVyIHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIGNhdGVnb3J5IG9mIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICMgIHRhZzogVGhlIGpRdWVyeSBzZWxlY3RvciBvZiB3aGF0ZXZlciB1bmlxZWx5IGlkZW50aWZpZXMgdGhlIHRhZyBvZiB0aGUgc2VsZWN0aW9uXG4gICMgIG9uUmVuZGVyOiBBIGZ1bmN0aW9uIGNhbGwgdG8gZmlyZSBhZnRlciB0aGUgYWQgaGFzIGJlZW4gYXBwZW5kZWQgdG8gdGhlIERPTVxuICAjICBvbkZpbGw6IEEgZnVuY3Rpb24gY2FsbCB0byBmaXJlIGFmdGVyIHRoZSBhZCByZWNlaXZlcyBkYXRhIGZyb20gdGhlIGFkc2VydmVyc1xuICAjICBvbkVycm9yOiBBIGZ1bmN0aW9uIGNhbGwgdG8gZmlyZSBhZnRlciB0aGUgYWQgaGFzIGFuIGVycm9yIGxvYWRpbmcgZS5nLiBkdWUgdG8gSlMgZXJyb3IgZXRjLlxuICAjfVxuICBAdGVtcGxhdGVzID0gW3tcbiAgICBsYWJlbDogXCJQb2xhciBGdWxsIFdpZHRoIENhcm91c2VsXCIgIyBmbGV4c2xpZGVyXG4gICAgYWRJRDogXCJQb2xhcl9GdWxsX1dpZHRoX0Nhcm91c2VsXCJcbiAgICBsb2NhdGlvbjogXCIudGVtcGxhdGUtZmVhdHVyZS1zbGlkZXIgLmZlYXR1cmUtc2xpZGVyIC5zbGlkZXMgbGk6bnRoLWNoaWxkKDEpXCJcbiAgICBtYXJrdXA6IEZNLlZpZXdzLmZlYXR1cmVfaHVnZVxuICAgIGluZm9UZXh0OiBAY29uc3RydWN0b3IuaW5mb1RleHRcbiAgICBpbmZvQnV0dG9uVGV4dDogQGNvbnN0cnVjdG9yLmluZm9CdXR0b25UZXh0XG4gICAgb25SZW5kZXI6ICgkZWxlbWVudCktPlxuICAgICAgZWwgPSAkZWxlbWVudC5yZW1vdmUoKVxuICAgICAgc2xpZGVyID0gJCgnLmZlYXR1cmUtc2xpZGVyJykuZGF0YSgnZmxleHNsaWRlcicpXG4gICAgICBzbGlkZXIuYWRkU2xpZGUoZWwpXG4gICAgb25GaWxsOiAoZGF0YSktPlxuICAgIG9uRXJyb3I6IChlcnJvciktPlxuICB9LHtcbiAgICBsYWJlbDogXCJQb2xhciBUYWJiZWQgQ2Fyb3VzZWxcIiAjZmxleHNsaWRlclxuICAgIGFkSUQ6IFwiUG9sYXJfVGFiYmVkX0Nhcm91c2VsXCJcbiAgICBsb2NhdGlvbjogXCIudGVtcGxhdGUtZmVhdHVyZS10YWJzIC5mZWF0dXJlLXdyYXAgbmF2LnRhYnMtbWVudSBhOm50aC1jaGlsZCgxKVwiXG4gICAgbWFya3VwOiBGTS5WaWV3cy5mZWF0dXJlX3RhYnNcbiAgICBpbmZvVGV4dDogQGNvbnN0cnVjdG9yLmluZm9UZXh0XG4gICAgaW5mb0J1dHRvblRleHQ6IEBjb25zdHJ1Y3Rvci5pbmZvQnV0dG9uVGV4dFxuICAgIG9uUmVuZGVyOiAoJGVsZW1lbnQpLT5cbiAgICAgICRlbGVtZW50Lm5leHQoKS5yZW1vdmUoKSAjIFJlbW92ZSB0aGUgb2xkIHRhYlxuICAgICAgd2luZG93LnRhYnMgPSBuZXcgVGFicygpICMgUmUtaW5pdGlhbGl6ZSB0aGUgdGFicyBhcmVhXG4gICAgb25GaWxsOiAoZGF0YSktPlxuICAgICAgIyBBZGQgdGhlIGRhdGEgZnJvbSB0aGUgYWR2ZXJ0IHRvIHRoZSBsYXJnZSB0YWIgYXJlYVxuICAgICAgIyBUT0RPOiBDb25maXJtIGlmIHRoaXMgaXMgZ29pbmcgdG8gdHJhY2sgY29ycmVjdGx5IVxuICAgICAgZWxlbSA9ICQoJy50ZW1wbGF0ZS1mZWF0dXJlLXRhYnMgLmZlYXR1cmUtd3JhcCBhcnRpY2xlLmZlYXR1cmUtbGFyZ2VzdDpudGgtY2hpbGQoMSknKVxuICAgICAgZWxlbS5maW5kKFwiYS5mZWF0dXJlLWxpbmtcIikuYXR0cihcImhyZWZcIiwgZGF0YS5saW5rKVxuICAgICAgZWxlbS5maW5kKFwiaW1nLmFydGljbGUtbGFyZ2VzdC10aHVtYlwiKS5hdHRyKFwic3JjXCIsIGRhdGEuaW1hZ2UuaHJlZilcbiAgICAgIGVsZW0uZmluZChcIi5mZWF0dXJlLXRpdGxlXCIpLmh0bWwoZGF0YS50aXRsZSlcbiAgICAgICNzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5ICsgXCI8YnIvPlNwb25zb3JlZCBieSA8aW1nIGNsYXNzPSdzcG9uc29yLWxvZ28nIHNyYz0nXCIgKyBkYXRhLnNwb25zb3IubG9nby5ocmVmICsgXCInJyBhbHQ9J1wiICsgZGF0YS5zcG9uc29yLm5hbWUgKyBcIicgLz5cIlxuICAgICAgI2VsZW0uZmluZChcIi5mZWF0dXJlLWV4Y2VycHRcIikuaHRtbChzdW1tYXJ5KVxuICAgIG9uRXJyb3I6IChlcnJvciktPlxuICB9LHtcbiAgICBsYWJlbDpcIlBvbGFyIEZlYXR1cmUgR3JpZFwiXG4gICAgYWRJRDogXCJQb2xhcl9GZWF0dXJlX0dyaWRcIlxuICAgIGxvY2F0aW9uOiBcIi50ZW1wbGF0ZS1mZWF0dXJlLWdyaWQgLmZlYXR1cmUtd3JhcCAuZ3JpZC00IGFydGljbGU6Zmlyc3QtY2hpbGRcIlxuICAgIG1hcmt1cDogRk0uVmlld3MuZmVhdHVyZV9ncmlkXG4gICAgaW5mb1RleHQ6IEBjb25zdHJ1Y3Rvci5pbmZvVGV4dFxuICAgIGluZm9CdXR0b25UZXh0OiBAY29uc3RydWN0b3IuaW5mb0J1dHRvblRleHRcbiAgICBvblJlbmRlcjogKCRlbGVtZW50KS0+XG4gICAgICAkZWxlbWVudC5uZXh0KCkucmVtb3ZlKClcbiAgICBvbkZpbGw6IChkYXRhKS0+XG4gICAgb25FcnJvcjogKGVycm9yKS0+XG4gIH0se1xuICAgIGxhYmVsOiBcIlBvbGFyIFJlbGF0ZWQgQXJ0aWNsZXMgc2VjdGlvblwiXG4gICAgYWRJRDogXCJQb2xhcl9SZWxhdGVkX0NhdGVnb3J5X0FydGljbGVzX1NpZGViYXJcIlxuICAgIGxvY2F0aW9uOiBcIi5jLXJlbGF0ZWQtYXJ0aWNsZXMtLXJvdyAuYy1jYXJkX193cmFwcGVyOmZpcnN0LWNoaWxkXCJcbiAgICBtYXJrdXA6IEZNLlZpZXdzLnBvc3RfY2FyZF9yZWxhdGVkX2FmdGVyX2FydGljbGVcbiAgICBpbmZvVGV4dDogQGNvbnN0cnVjdG9yLmluZm9UZXh0XG4gICAgaW5mb0J1dHRvblRleHQ6IEBjb25zdHJ1Y3Rvci5pbmZvQnV0dG9uVGV4dFxuICAgIG9uUmVuZGVyOiAoJGVsZW1lbnQpLT5cbiAgICAgIEBwbGF0Zm9ybURldGVjdGlvbiA9IG5ldyBQbGF0Zm9ybURldGVjdGlvbigpXG4gICAgICBpZiBAcGxhdGZvcm1EZXRlY3Rpb24uY3VycmVudFBsYXRmb3JtIGluIFsnc21hbGwnLCdtZWRpdW0nXSBhbmQgJCgnLm8tc2VjdGlvbi0tOCcpLmxlbmd0aCA+IDBcbiAgICAgICAgJCgkZWxlbWVudCkuYXBwZW5kVG8oJy5vLXNlY3Rpb24tLTQnKS5hdHRyKCdjbGFzcycsICdjLWNhcmQtd3JhcHBlciBvLWNvbC1tZC0tNCcpXG4gICAgICBlbHNlXG4gICAgICAgICRlbGVtZW50Lm5leHRBbGwoKS5sYXN0KCkucmVtb3ZlKClcbiAgICAgICRlbGVtZW50LmFkZENsYXNzKCdjLWNhcmTigJRzcG9uc29yZWQnKVxuICAgIG9uRmlsbDogKGRhdGEpLT5cbiAgICBvbkVycm9yOiAoZXJyb3IpLT5cbiAgfSx7XG4gICAgbGFiZWw6IFwiUG9sYXIgUmVsYXRlZCBBcnRpY2xlcyBpbiBBcnRpY2xlIEludHJvIEFzaWRlIC0gVjJcIlxuICAgIGFkSUQ6IFwiUG9sYXJfUmVsYXRlZF9BcnRpY2xlc19pbl9BcnRpY2xlX0ludHJvX0FzaWRlXCJcbiAgICBsb2NhdGlvbjogXCIuYy1hcnRpY2xlLWJvZHlfX2FzaWRlIC5jLWNhcmRfX3dyYXBwZXI6Zmlyc3QtY2hpbGRcIlxuICAgIG1hcmt1cDogRk0uVmlld3MucG9zdF9jYXJkX3JlbGF0ZWRfYXNpZGVcbiAgICBpbmZvVGV4dDogQGNvbnN0cnVjdG9yLmluZm9UZXh0XG4gICAgaW5mb0J1dHRvblRleHQ6IEBjb25zdHJ1Y3Rvci5pbmZvQnV0dG9uVGV4dFxuICAgIG9uUmVuZGVyOiAoJGVsZW1lbnQpLT5cbiAgICAgICRlbGVtZW50LmFkZENsYXNzKCdjLWNhcmTigJRzcG9uc29yZWQnKVxuICAgIG9uRmlsbDogKGRhdGEpLT5cbiAgICBvbkVycm9yOiAoZXJyb3IpLT5cbiAgfSx7XG4gICAgbGFiZWw6IFwiUG9sYXIgQXJ0aWNsZXMgaW4gSG9tZSBQYWdlICh2YXJpYW50IDEpXCJcbiAgICBhZElEOiBcIlBvbGFyX0FydGljbGVzX0hvbWVfUGFnZVwiXG4gICAgbG9jYXRpb246IFwiLmxhbmRlci1zZWN0aW9ucyAuby1sYW5kZXItLXBvc2l0aW9uLTUgLmMtY2FyZF9fd3JhcHBlcjpmaXJzdC1jaGlsZFwiXG4gICAgbWFya3VwOiBGTS5WaWV3cy5wb3N0X2NhcmRfaG9tZV9wYWdlXG4gICAgaW5mb1RleHQ6IEBjb25zdHJ1Y3Rvci5pbmZvVGV4dFxuICAgIGluZm9CdXR0b25UZXh0OiBAY29uc3RydWN0b3IuaW5mb0J1dHRvblRleHRcbiAgICBvblJlbmRlcjogKCRlbGVtZW50KS0+XG4gICAgICBjbGFzc1N0ciA9ICRlbGVtZW50Lm5leHQoKS5hdHRyKCdjbGFzcycpICsgJyBjLWNhcmTigJRzcG9uc29yZWQnXG4gICAgICAkZWxlbWVudC5hdHRyKCdjbGFzcycsIGNsYXNzU3RyKVxuICAgICAgJGVsZW1lbnQubmV4dEFsbCgpLmxhc3QoKS5yZW1vdmUoKVxuICAgIG9uRmlsbDogKGRhdGEpLT5cbiAgICBvbkVycm9yOiAoZXJyb3IpLT5cbiAgfV1cblxuICAjIEFjY2VwdHMgYSBwcm9wZXJ0eUlEIG9mIHRoZSBQb2xhciBhY2NvdW50IGFuZCB0aGUgVVJMIHRvIHVzZSBmb3IgdGhlIGhvc3RlZCBuYXRpdmUgY29udGVudCBwYWdlXG4gIGNvbnN0cnVjdG9yOiAoQHByb3BlcnR5SUQsIEBzZWNvbmRhcnlQYWdlVVJMKS0+XG4gICAgQGluaXQoKVxuICAgIEBpbml0U2NyaXB0KGRvY3VtZW50LCBcInNjcmlwdFwiLCBcIm5hdGl2ZWFkcy1wbHVnaW5cIilcblxuICAjIEJpbmQgd2luZG93IHZhcmlhYmxlcyBhbmQgcHJlcGFyZSBvblJlYWR5IGV2ZW50IGZvciBQb2xhclxuICBpbml0OiAtPlxuICAgIHdpbmRvdy5OQVRJVkVBRFMgPSB3aW5kb3cuTkFUSVZFQURTIHx8IHt9XG4gICAgd2luZG93Lk5BVElWRUFEUy5pbmplY3RlZEF0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB3aW5kb3cuTkFUSVZFQURTLm9uUmVhZHkgPSAoYWRzKT0+XG4gICAgICBhZHMuc2V0UHJvcGVydHlJRChAcHJvcGVydHlJRClcbiAgICAgIEBpbml0U2Vjb25kYXJ5UGFnZShhZHMpXG4gICAgICBAaW5pdFNsb3RzKGFkcylcblxuICAjXG4gICMgU2V0IHVwIGhvc3RlZCBzcG9uc29yZWQgcGFnZSAoY3VycmVudGx5IG5vdCBpbiB1c2UpXG4gIGluaXRTZWNvbmRhcnlQYWdlOiAoYWRzKS0+XG4gICAgYWRzLnNldFNlY29uZGFyeVBhZ2VVUkwoQHNlY29uZGFyeVBhZ2VVUkwpXG4gICAgYWRzLmNvbmZpZ3VyZVNlY29uZGFyeVBhZ2VcbiAgICAgIGRhdGVGb3JtYXQ6IFV0aWxpdGllcy5mb3JtYXREYXRlXG4gICAgICBiaW5kaW5nOlxuICAgICAgICBzcG9uc29yOlxuICAgICAgICAgIGxpbms6IFwiI3Nwb25zb3ItbGlua1wiXG4gICAgICAgICAgbG9nbzogXCIjc3BvbnNvci1sb2dvXCJcbiAgICAgICAgICBuYW1lOiBcIiNzcG9uc29yLW5hbWVcIlxuICAgICAgICB0aXRsZTogXCIjdGl0bGVcIlxuICAgICAgICBzdW1tYXJ5OiBcIiNzdW1tYXJ5XCJcbiAgICAgICAgY29udGVudDogXCIjY29udGVudFwiXG4gICAgICAgIGF1dGhvcjogXCIjYXV0aG9yXCJcbiAgICAgICAgcHViRGF0ZTogXCIjcHViLWRhdGVcIlxuICAgICAgICBpbWFnZTpcbiAgICAgICAgICBocmVmOiBcIiNtZWRpYVwiXG4gICAgICAgICAgY2FwdGlvbjogXCIjbWVkaWEtY2FwdGlvblwiXG4gICAgICAgICAgY3JlZGl0czogXCIjbWVkaWEtY3JlZGl0c1wiXG4gICAgICBvbkZpbGw6IChkYXRhKS0+XG4gICAgICBvblJlbmRlcjogLT5cbiAgICAgIG9uRXJyb3I6IChlcnJvciktPlxuICAgICAgdHJhY2s6IC0+XG4gICAgICAgIHRhZ3MgPSAkKFwibWV0YVtuYW1lPSduZXdzX2tleXdvcmRzJ11cIilcbiAgICAgICAgaWYgdGFncy5sZW5ndGggJiYgdGFncy5hdHRyKFwiY29udGVudFwiKS5sZW5ndGhcbiAgICAgICAgICB0YWdzID0gdGFncy5hdHRyKFwiY29udGVudFwiKS5zcGxpdChcIiwgXCIpXG4gICAgICAgICAgaWYgJC5pbkFycmF5KCdzcG9uc29yZWQtY29udGVudCcsIHRhZ3MpICE9IC0xXG4gICAgICAgICAgICByZXR1cm4gJ2luYm91bmQnXG5cblxuICAjIEluaXRpYWxpemUgYWxsIHRoZSBhZCBzbG90cyBiYXNlZCBvbiB0aGUgdGVtcGxhdGVzIGFuZCBzbG90cyBkZWZpbmVkXG4gIGluaXRTbG90czogKGFkcyktPlxuICAgICQuZWFjaCBAY29uc3RydWN0b3IudGVtcGxhdGVzLCAoaW5kZXgsIHRlbXBsYXRlKT0+XG4gICAgICBmaXJzdFNlbGVjdG9yID0gJCh0ZW1wbGF0ZS5sb2NhdGlvbi5zcGxpdChcIiBcIilbMF0pXG4gICAgICBpZiBmaXJzdFNlbGVjdG9yLmxlbmd0aFxuICAgICAgICB0ZW1wbGF0ZS5jYXRlZ29yeSB8fD0gZmlyc3RTZWxlY3Rvci5kYXRhKFwiY2F0ZWdvcnlcIilcbiAgICAgICAgdGVtcGxhdGUudGFncyB8fD0gZmlyc3RTZWxlY3Rvci5kYXRhKFwidGFnXCIpXG4gICAgICAgIGFkcy5pbnNlcnRQcmV2aWV3XG4gICAgICAgICAgZGF0ZUZvcm1hdDogVXRpbGl0aWVzLmZvcm1hdERhdGVcbiAgICAgICAgICBsYWJlbDogdGVtcGxhdGUubGFiZWxcbiAgICAgICAgICB1bml0OlxuICAgICAgICAgICAgc2VydmVyOiBAY29uc3RydWN0b3IuYWRTZXJ2ZXJcbiAgICAgICAgICAgIGlkOiBAZ2VuZXJhdGVBZElkKHRlbXBsYXRlKVxuICAgICAgICAgICAgc2l6ZTogQGNvbnN0cnVjdG9yLmFkU2l6ZVxuICAgICAgICAgICAgdGFyZ2V0czpcbiAgICAgICAgICAgICAgYXJ0aWNsZUNhdDogdGVtcGxhdGUuY2F0ZWdvcnlcbiAgICAgICAgICAgICAgdGFnczogdGVtcGxhdGUudGFnc1xuICAgICAgICAgICAgICBwYXJ0bmVyOiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgICAgICAgICAjIHBsYWNlbWVudDogXCJ0b3BcIiAjIGlmIHJlcXVpcmVkLCBjYW4gdGFyZ2V0IGJ5IGRlZmluZWQgcGxhY2VtZW50cyBpbiBERlBcbiAgICAgICAgICBsb2NhdGlvbjogdGVtcGxhdGUubG9jYXRpb25cbiAgICAgICAgICBpbmZvVGV4dDogdGVtcGxhdGUuaW5mb1RleHRcbiAgICAgICAgICBpbmZvQnV0dG9uVGV4dDogdGVtcGxhdGUuaW5mb0J1dHRvblRleHRcbiAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUubWFya3VwXG4gICAgICAgICAgb25SZW5kZXI6IHRlbXBsYXRlLm9uUmVuZGVyXG4gICAgICAgICAgb25GaWxsOiAoZGF0YSktPlxuICAgICAgICAgICAgdGVtcGxhdGUub25GaWxsKGRhdGEpXG4gICAgICAgICAgICBUcmFja2VyLnRyYWNrKCdBZHZlcnRpc2luZzpQb2xhcicsICdBZFVuaXQ6RmlsbGVkJywgdGVtcGxhdGUubGFiZWwpXG4gICAgICAgICAgb25FcnJvcjogKGVycm9yKS0+XG4gICAgICAgICAgICB0ZW1wbGF0ZS5vbkVycm9yKGVycm9yKVxuICAgICAgICAgICAgVHJhY2tlci50cmFjaygnQWR2ZXJ0aXNpbmc6UG9sYXInLCAnQWRVbml0OkVycm9yJywgZXJyb3IpXG5cbiAgIyBHZW5lcmF0ZSB0aGUgYWQgSUQgZm9yIHRoZSB0ZW1wbGF0ZS4gVGhpcyBkaWZmZXJzIGluIGltcGxlbWVudGF0aW9uIHBlciBhZCBzZXJ2ZXJcbiAgZ2VuZXJhdGVBZElkOiAodGVtcGxhdGUpLT5cbiAgICBzd2l0Y2ggQGNvbnN0cnVjdG9yLmFkU2VydmVyXG4gICAgICB3aGVuICdkZnAnXG4gICAgICAgIFwiLyN7QGNvbnN0cnVjdG9yLmFkUHVibGlzaGVySUR9LyN7dGVtcGxhdGUuYWRJRH1cIlxuICAgICAgZWxzZVxuICAgICAgICB0ZW1wbGF0ZS5hZElEXG5cbiAgIyBJbml0aWFsaXplIHRoZSBQb2xhciBQbHVnaW5cbiAgaW5pdFNjcmlwdDogKGQscyxpZCktPlxuICAgIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gICAgaWYgZC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgIHJldHVyblxuICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpXG4gICAganMuaWQgPSBpZFxuICAgIGpzLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiXG4gICAganMuYXN5bmMgPSB0cnVlXG4gICAganMuc3JjID0gXCJodHRwOi8vcGx1Z2luLm1lZGlhdm9pY2UuY29tL3BsdWdpbi5qc1wiXG4gICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpXG5cbiMgd2luZG93LkZNUG9sYXJBZCA9IEZNUG9sYXJBZFxubW9kdWxlLmV4cG9ydHMgPSBGTVBvbGFyQWQiLCJjbGFzcyBBY2ZNYXBzXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgJCgnLmFjZi1tYXAnKS5lYWNoIC0+XG4gICAgICByZW5kZXJNYXAgJCh0aGlzKVxuXG5cbiAgcmVuZGVyTWFwID0gKCRlbCkgLT5cbiAgICAkbWFya2VycyA9ICRlbC5maW5kKCcubWFya2VyJylcblxuICAgIGFyZ3MgPVxuICAgICAgem9vbTogMTZcbiAgICAgIGNlbnRlcjogbmV3IChnb29nbGUubWFwcy5MYXRMbmcpKDAsIDApXG4gICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG5cbiAgICBtYXAgPSBuZXcgKGdvb2dsZS5tYXBzLk1hcCkoJGVsWzBdLCBhcmdzKVxuXG4gICAgbWFwLm1hcmtlcnMgPSBbXVxuICAgICRtYXJrZXJzLmVhY2ggLT5cbiAgICAgIGFkZE1hcmtlciAkKHRoaXMpLCBtYXBcblxuICAgIGNlbnRlck1hcCBtYXBcblxuXG4gIGFkZE1hcmtlciA9ICgkbWFya2VyLCBtYXApIC0+XG4gICAgbGF0bG5nID0gbmV3IChnb29nbGUubWFwcy5MYXRMbmcpKCRtYXJrZXIuYXR0cignZGF0YS1sYXQnKSwgJG1hcmtlci5hdHRyKCdkYXRhLWxuZycpKVxuXG4gICAgbWFya2VyID0gbmV3IChnb29nbGUubWFwcy5NYXJrZXIpKFxuICAgICAgcG9zaXRpb246IGxhdGxuZ1xuICAgICAgbWFwOiBtYXApXG5cbiAgICBtYXAubWFya2Vycy5wdXNoIG1hcmtlclxuXG4gICAgaWYgJG1hcmtlci5odG1sKClcbiAgICAgIGluZm93aW5kb3cgPSBuZXcgKGdvb2dsZS5tYXBzLkluZm9XaW5kb3cpKGNvbnRlbnQ6ICRtYXJrZXIuaHRtbCgpKVxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIgbWFya2VyLCAnY2xpY2snLCAtPlxuICAgICAgICBpbmZvd2luZG93Lm9wZW4gbWFwLCBtYXJrZXJcblxuXG4gIGNlbnRlck1hcCA9IChtYXApIC0+XG4gICAgYm91bmRzID0gbmV3IChnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMpXG5cbiAgICAkLmVhY2ggbWFwLm1hcmtlcnMsIChpLCBtYXJrZXIpIC0+XG4gICAgICBsYXRsbmcgPSBuZXcgKGdvb2dsZS5tYXBzLkxhdExuZykobWFya2VyLnBvc2l0aW9uLmxhdCgpLCBtYXJrZXIucG9zaXRpb24ubG5nKCkpXG4gICAgICBib3VuZHMuZXh0ZW5kIGxhdGxuZ1xuXG4gICAgaWYgbWFwLm1hcmtlcnMubGVuZ3RoID09IDFcbiAgICAgIG1hcC5zZXRDZW50ZXIgYm91bmRzLmdldENlbnRlcigpXG4gICAgICBtYXAuc2V0Wm9vbSAxNlxuICAgIGVsc2VcbiAgICAgIG1hcC5maXRCb3VuZHMgYm91bmRzXG5cblxuIyB3aW5kb3cuQWNmTWFwcyA9IEFjZk1hcHNcbm1vZHVsZS5leHBvcnRzID0gQWNmTWFwcyIsInJlcXVpcmUgJ2FkdGVjaGRhYydcbnRocm90dGxlID0gcmVxdWlyZSAndGhyb3R0bGVpdCdcblxuTG9nZ2VyID0gcmVxdWlyZSAnanMtbG9nZ2VyJ1xuXG5BZFVuaXQgPSByZXF1aXJlICcuL19jb21wb25lbnRzLmFkLXVuaXQnXG5cblxuY2xhc3MgQWRMb2FkZXJcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAbG9nZ2VyID0gTG9nZ2VyLmdldChcIkFkTG9hZGVyXCIpXG4gICAgQGxvZ2dlci5pbmZvIFwiQGNvbnN0cnVjdG9yXCIsIFwiU2V0dGluZyB1cCBBZExvYWRlciB3aXRoIG5ldHdvcmsgMTY5MC4xXCJcblxuICAgIEBydW5RdWV1ZWQgPSBmYWxzZVxuICAgIEBkZWJ1ZyA9IHRydWVcbiAgICBAaXNCbG9ja2VkID0gZmFsc2VcbiAgICBAYWRibG9ja19kZXRlY3QoKVxuXG4gICAgaWYgQURURUNIP1xuICAgICAgI0FEVEVDSC5kZWJ1Z01vZGUgPSBAZGVidWdcbiAgICAgIEFEVEVDSC5jb25maWcucGFnZSA9XG4gICAgICAgIHByb3RvY29sOiAnaHR0cCdcbiAgICAgICAgc2VydmVyOiAnYWRzZXJ2ZXIuYWR0ZWNoLmRlJ1xuICAgICAgICBuZXR3b3JrOiAnMTY5MC4xJ1xuICAgICAgICBkZWJ1Z01vZGU6IEBkZWJ1Z1xuICAgICAgICAjIGZpZjpcbiAgICAgICAgIyAgIGluRmlmOiB0cnVlICMgVXNlIGZyaWVuZGx5IElGUkFNRSAoc2FuZGJveCB0aGUgYWR2ZXJ0cyAtIG5lZWRlZCBmb3IgbGF6eSBpbmxpbmVkIGFkcylcbiAgICAgICAgZW5hYmxlTXVsdGlBZDogQHJ1blF1ZXVlZFxuICAgICAgICByZXNwb25zaXZlQ2hlY2tUaW1lb3V0OiAxNTBcbiAgICAgICAgcGVyZm9ybUdlb0RldGVjdGlvbjogZmFsc2VcbiAgICAgICAgcGVyZm9ybVNjcmVlbkRldGVjdGlvbjogZmFsc2VcbiAgICAgICAgcGVyZm9ybVRpbWV6b25lRGV0ZWN0aW9uOiBmYWxzZVxuICAgICAgICBwZXJmb3JtRmxhc2hEZXRlY3Rpb246IGZhbHNlXG4gICAgICAgIHBlcmZvcm1SaWNoTWVkaWFEZXRlY3Rpb246IGZhbHNlXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICBsb2M6ICcxMDAnXG5cbiAgICAgIEBpbml0QWRzKClcbiAgICAgIEBsaXN0ZW5Gb3JDaGFuZ2VzKClcblxuICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB0aHJvdHRsZSA9PlxuICAgICAgICAkKEApLnRyaWdnZXIoJ1Njcm9sbC5BZExvYWRlci5GTScpXG4gICAgICAsIDEwMDApXG5cbiAgICBlbHNlXG4gICAgICBAaXNCbG9ja2VkID0gdHJ1ZVxuICAgICAgQGxvZ2dlci53YXJuICdAaW5pdCcsICdBRFRFQ0ggbGlicmFyeSBibG9ja2VkJ1xuXG4gIGFkYmxvY2tfZGV0ZWN0OiAtPlxuICAgICQuYWpheFxuICAgICAgdXJsOiBcIi9hZHRlY2gvYWR2ZXJ0LmpzXCJcbiAgICAgIGRhdGFUeXBlOiBcInNjcmlwdFwiXG4gICAgICBzdWNjZXNzOiA9PlxuICAgICAgICBAYWRibG9ja19kZXRlY3RlZCA9IGZhbHNlXG4gICAgICAgIHdpbmRvdy5UcmFja2VyLnRyYWNrKFwiQWRCbG9ja1wiLCBcIkRldGVjdGVkXCIsIFwiZmFsc2VcIilcbiAgICAgIGVycm9yOiA9PlxuICAgICAgICBAYWRibG9ja19kZXRlY3RlZCA9IHRydWVcbiAgICAgICAgd2luZG93LlRyYWNrZXIudHJhY2soXCJBZEJsb2NrXCIsIFwiRGV0ZWN0ZWRcIiwgXCJ0cnVlXCIpXG5cbiAgaW5pdEFkczogKHNjb3BlcyktPlxuICAgIEBhZHMgPSBbXVxuICAgIEBpbmxpbmVBZHMgb3I9IFtdXG4gICAgaWYgc2NvcGVzXG4gICAgICBzY29wZVNlbGVjdG9yID0gJC5tYXAgc2NvcGVzLCAoc2NvcGUpLT5cbiAgICAgICAgXCIje3Njb3BlfSAuanMtYWRzbG90XCJcbiAgICAgIGFkc2xvdHMgPSAkKHNjb3BlU2VsZWN0b3Iuam9pbihcIixcIikpXG4gICAgZWxzZVxuICAgICAgYWRzbG90cyA9ICQoJy5qcy1hZHNsb3QnKVxuXG4gICAgJC5lYWNoIGFkc2xvdHMsIChpLCBlbGVtKT0+XG4gICAgICBhZFVuaXQgPSBuZXcgQWRVbml0KGVsZW0sIGFkTG9hZGVyOiBAKVxuICAgICAgQGFkcy5wdXNoKGFkVW5pdClcbiAgICAgIEBpbmxpbmVBZHMucHVzaChhZFVuaXQpIGlmIGFkVW5pdC5pbmxpbmUgPT0gdHJ1ZVxuICAgICMgTm93IHdlIGhhdmUgYWxsIHRoZSBhZHMgZGVmaW5lZCwgd2UgY2FuIGZpbmQgb3V0IHdoaWNoIG9uZXMgYXJlIGNvbXBhbmlvbnMgYnkgYXNzb2NpYXRpbmcgdGhlbSBvbiB0aGUgcG9zaXRpb24gdmFsdWVcbiAgICAjIFRoaXMgYXNzdW1lcyB0aGF0IHRoZSBhZCB0YWdzIGFyZSBwb3NpdGlvbmVkIGluY3JlbWVudGFsbHkgZS5nLiBiaWxsYm9hcmQxLCBhc2lkZTEsIGJpbGxib2FyZDIsIGFzaWRlMiBldGNcbiAgICBAYXNzaWduQ29tcGFuaW9uU2xvdHMoKVxuXG4gIGFzc2lnbkNvbXBhbmlvblNsb3RzOiAtPlxuICAgICQuZWFjaCBAYWRzLCAoaSwgYWQpPT5cbiAgICAgIGFkLmNvbXBhbmlvblVuaXRzID0gQGFkcy5maWx0ZXIgKG90aGVyQWQpPT5cbiAgICAgICAgb3RoZXJBZC5wb3NpdGlvbiA9PSBhZC5wb3NpdGlvbiAmJiBvdGhlckFkICE9IGFkXG5cbiAgbG9hZEFkczogLT5cbiAgICAkLmVhY2ggQGFkcy5jb25jYXQoQGlubGluZUFkcyksIChpLCBhZCktPlxuICAgICAgYWQubWF5YmVMb2FkKClcblxuICBydW5RdWV1ZTogLT5cbiAgICBvcHRpb25zID0ge31cbiAgICBBRFRFQ0guZXhlY3V0ZVF1ZXVlKG9wdGlvbnMpXG5cbiAgbGlzdGVuRm9yQ2hhbmdlczogLT5cbiAgICAkKHdpbmRvdykub24oJ1BhZ2VMb2FkZWQuUGFnZUxvYWRlci5GTSBTcGxpdFBvc3QuUGFnZUxvYWRlci5GTScsIHRocm90dGxlKChlLCBkYXRhKT0+XG4gICAgICBzY29wZXMgPSBkYXRhPy5zY29wZXNcbiAgICAgIEBsb2dnZXIuaW5mbyAnQGxpc3RlbkZvckNoYW5nZXMnLCBlLnR5cGUsIHNjb3Blc1xuXG4gICAgICBAaW5pdEFkcyhzY29wZXMpXG4gICAgICBAbG9hZEFkcygpXG4gICAgLCAyMDAwKSlcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBBZExvYWRlclxuIiwiY2xhc3MgQWRVbml0SWZyYW1lXG5cbiAgY29uc3RydWN0b3I6IChAZWxlbSktPlxuICAgIEBhZElkICAgICAgID0gQGVsZW0uZGF0YShcImFkLWlkXCIpXG4gICAgQHdpZHRoICAgICAgPSBAZWxlbS5kYXRhKCdhZC13aWR0aCcpXG4gICAgQGhlaWdodCAgICAgPSBAZWxlbS5kYXRhKCdhZC1oZWlnaHQnKVxuICAgIEBzaXplQ29kZSAgID0gQGVsZW0uZGF0YSgnYWQtc2l6ZS1jb2RlJykgb3IgLTFcbiAgICBAa2V5d29yZHMgICA9IEBlbGVtLmRhdGEoXCJhZC1rZXl3b3Jkc1wiKSBvciBbXVxuICAgIEBrdiAgICAgICAgID0gQGVsZW0uZGF0YShcImFkLWt2XCIpIG9yIHt9XG5cbiAgIyBJbnRlcmZhY2UgYXMgcGVyIG90aGVyIGFkIHVuaXRzXG4gIG1heWJlTG9hZDogLT5cbiAgICBAbG9hZCgpXG5cbiAgIyBMb2FkIHRoZSBhZCBtYXJrdXBcbiAgbG9hZDogLT5cbiAgICBAcmVzZXQoKVxuICAgIEBlbGVtLmh0bWwoQG1hcmt1cCgpKVxuXG4gICMgQ2xlYXIgdGhlIGN1cnJlbnQgYWRcbiAgcmVzZXQ6IC0+XG4gICAgQGVsZW0uaHRtbChcIlwiKVxuICBcbiAgbWFya3VwOiAtPlxuICAgICMgQ2FuJ3QgdXNlIEFsaWFzZXMgd2l0aCBJRlJBTUUgdGFnIGh0dHA6Ly9kb2MuYWR0ZWNoLmRlLyM3MjMyLmh0bSNvMjczNFxuICAgICQoXCI8aWZyYW1lPjwvaWZyYW1lPlwiKS5hdHRyKFxuICAgICAgd2lkdGg6IEB3aWR0aFxuICAgICAgaGVpZ2h0OiBAaGVpZ2h0XG4gICAgICBzY3JvbGxpbmc6IFwiTm9cIlxuICAgICAgZnJhbWVib3JkZXI6IDBcbiAgICAgIG1hcmdpbmhlaWdodDogMFxuICAgICAgbWFyZ2lud2lkdGg6IDBcbiAgICAgIHNyYzogXCJodHRwOi8vYWRzZXJ2ZXIuYWR0ZWNoLmRlL2FkaWZyYW1lLzMuMC8xNjkwLjEvI3tAYWRJZH0vMC8je0BzaXplQ29kZX0vQURURUNIO3RhcmdldD1fYmxhbms7a2V5PSN7QGtleXMoKX07I3tAa3ZzKCl9XCJcbiAgICApXG5cbiAgIyBQcmVwYXJlIGtleXdvcmRzIGRhdGEgZm9yIHRoZSB0YWdcbiAga2V5czogLT5cbiAgICBAa2V5d29yZHMuam9pbihcIitcIilcblxuICAjIFByZXBhcmUgS1YgcGFpcnMgZm9yIHRoZSB0YWdcbiAga3ZzOiAtPlxuICAgICQubWFwKEBrdiwgKHYsayktPlxuICAgICAgXCJrdiN7a309I3t2fVwiXG4gICAgKS5qb2luKCc7JylcblxubW9kdWxlLmV4cG9ydHMgPSBBZFVuaXRJZnJhbWUiLCJyZXF1aXJlICdhZHRlY2hkYWMnXG5Mb2dnZXIgPSByZXF1aXJlICdqcy1sb2dnZXInXG5Ub2NrID0gcmVxdWlyZSAndG9ja3RpbWVyJ1xuUHJvbWlzZSA9IHJlcXVpcmUgJ3Byb21pc2UnXG5cblBsYXRmb3JtRGV0ZWN0aW9uID0gcmVxdWlyZSAnLi9fY29tcG9uZW50cy5wbGF0Zm9ybS1kZXRlY3Rpb24uY29mZmVlJ1xuU3BhY2VmaW5kZXIgPSByZXF1aXJlICcuL19jb21wb25lbnRzLnNwYWNlZmluZGVyLmNvZmZlZSdcblxuXG5jbGFzcyBBZFVuaXRcblxuICAjIERlZmF1bHQgc2V0dGluZ3NcbiAgIyByZWZyZXNoSW50ZXJ2YWw6IChpbnRlZ2VyKSBUaW1lIGluIG1zIHRvIHJlZnJlc2ggYWQgcGxhY2VtZW50IHdoaWxlIGl0IGlzIHZpc2libGUuIFNldCB0byAwIHRvIGRpc2FibGUgZmVhdHVyZVxuICAjIGxvYWRPbmx5Vmlld2FibGU6IChib29sZWFuKSBPbmx5IGxvYWQgYWQgdW5pdHMgdGhhdCBhcmUgXCJpbiB2aWV3XCJcbiAgREVGQVVMVFMgPVxuICAgIHJlZnJlc2hJbnRlcnZhbDogMCAjIFNldCB0byAwIHRvIGRpc2FibGVcbiAgICBsb2FkT25seVZpZXdhYmxlOiB0cnVlICMgT25seSBsb2FkIGFkcyB0aGF0IGFyZSBcImluIHZpZXdcIlxuXG5cbiAgIyBDb25zdHJ1Y3RvciBhY2NlcHRzICQoZWxlbSkgYW5kIG9wdGlvbnMge1xuICAjICAgcmVmcmVzaEludGVydmFsOiAoSW50ZWdlcilcbiAgIyAgIGxvYWRPbmx5Vmlld2FibGU6IChCb29sZWFuKVxuICAjICAgaWQ6IChJbnRlZ2VyKVxuICAjICAgc2l6ZTogKEludGVnZXIpXG4gICMgICB0eXBlOiAoU3RyaW5nKSBlLmcuIG1wdSwgYmlsbGJvYXJkXG4gICMgICBwb3NpdGlvbjogKEludGVnZXIpXG4gICMgICBrZXl3b3JkczogKEFycmF5IFtdKVxuICAjICAga3Y6IChPYmplY3Qge30pXG4gICMgfVxuICBjb25zdHJ1Y3RvcjogKEBlbGVtLCBvcHRpb25zKS0+XG4gICAgQGxvZ2dlciA9IExvZ2dlci5nZXQoJ0FkVW5pdCcpXG5cbiAgICBAb3B0aW9ucyA9ICQuZXh0ZW5kKERFRkFVTFRTLCBvcHRpb25zKVxuXG4gICAgQGVsZW0gPSAkKEBlbGVtKVxuICAgIEBlbGVtLmRhdGEoJ2FkLXVuaXQnLCBAKVxuICAgIEByYXdFbGVtID0gQGVsZW0uZ2V0KDApXG5cbiAgICBAcGxhdGZvcm1EZXRlY3Rpb24gPSBuZXcgUGxhdGZvcm1EZXRlY3Rpb24oKVxuXG4gICAgIyBTZXR0aW5ncyBmcm9tIHRoZSBvYmplY3RcbiAgICBAYWRMb2FkZXIgPSBAb3B0aW9ucy5hZExvYWRlclxuICAgIEBydW5RdWV1ZWQgPSBAYWRMb2FkZXIucnVuUXVldWVkXG4gICAgQGlkID0gQG9wdGlvbnMuaWQgb3IgQGVsZW0uZGF0YSgnYWQtaWQnKVxuICAgIEBib3VuZHMgPSBAb3B0aW9ucy5ib3VuZHMgb3IgQGVsZW0uZGF0YSgnYWQtYm91bmRzJylcbiAgICBAdHlwZSA9IEBvcHRpb25zLnR5cGUgb3IgQGVsZW0uZGF0YSgnYWQtdHlwZScpXG4gICAgQHNpemUgPSBAb3B0aW9ucy5zaXplIG9yIEBlbGVtLmRhdGEoJ2FkLXNpemUnKVxuICAgIEBwb3NpdGlvbiA9IEBvcHRpb25zLnBvc2l0aW9uIG9yIEBlbGVtLmRhdGEoJ2FkLXBvc2l0aW9uJykgb3IgMFxuICAgIEBrZXl3b3JkcyA9IEBvcHRpb25zLmtleXdvcmRzIG9yIEBlbGVtLmRhdGEoJ2FkLWtleXdvcmRzJylcbiAgICBAa3YgPSBAb3B0aW9ucy5rdiBvciBAZWxlbS5kYXRhKCdhZC1rdicpXG4gICAgQGlubGluZSA9IEBvcHRpb25zLmlubGluZSBvciBAZWxlbS5kYXRhKCdhZC1pbmxpbmUnKVxuICAgIEBjb21wYW5pb25Vbml0cyA9IEBvcHRpb25zLmNvbXBhbmlvblVuaXRzIG9yIFtdICMgVGhlc2UgTVVTVCBiZSBvdGhlciBBZFVuaXQgY2xhc3NlcyBvciByZXNwb25kIHRvIEBtYXliZUxvYWQoKVxuXG4gICAgIyBGb3JjZSBAa2V5d29yZHMgdG8gYmUgYW4gYXJyYXlcbiAgICBAa2V5d29yZHMgPSBPYmplY3Qua2V5cyhAa2V5d29yZHMpLm1hcCAoa2V5KSA9PiBAa2V5d29yZHNba2V5XVxuXG4gICAgQHJlc2V0U3RhdGUoKVxuXG4gICAgQGVsZW0uZGF0YShcImFkLXVuaXRcIiwgQClcblxuICAgIEBpbml0UmVzcG9uc2l2ZSgpXG4gICAgQGluaXRWaWV3YWJsZSgpXG4gICAgI0Bpbml0UmVmcmVzaFRpbWVyKClcblxuICBzZXRFbGVtSWQ6IC0+XG4gICAgIyBTZXQgdGhlIElEIG9uIHRoZSBlbGVtZW50IHNvIHdlIGNhbiB0cmFjayBpdCB1bmlxdWVseSBhbmQgdXBkYXRlIHRoZSBwcm9wZXIgYWQgcGxhY2VtZW50XG4gICAgQHVuaXF1ZUlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgIyBHZW5lcmF0ZSBhIHVuaXF1ZSBpZCBmb3IgdGhlIGFkc2xvdFxuICAgIEBlbGVtSWQgPSBcImZtLWpzLWFkLXVuaXQtI3tAdHlwZX0tI3tAcG9zaXRpb259LSN7QHVuaXF1ZUlkfVwiXG4gICAgQGVsZW0ucHJvcCgnaWQnLCBAZWxlbUlkKVxuXG4gICMgU2V0IHNvbWUgc3RhdGUgb24gdGhlIG9iamVjdFxuICByZXNldFN0YXRlOiAtPlxuICAgIEBzZXRFbGVtSWQoKVxuICAgIEBsb2dnZXIuaW5mbyhcIkByZXNldFN0YXRlICN7QGVsZW1JZH1cIilcblxuICAgIEBsb2FkaW5nID0gZmFsc2VcbiAgICBAbG9hZGVkID0gZmFsc2VcbiAgICBAZmFpbGVkID0gZmFsc2VcblxuXG4gICMgRmluZSBhIHBsYWNlIGluIHRoZSBET00gdG8gZGlzcGxheSB0aGUgYWQgb24gc21hbGwgYW5kIG1lZGl1bSBzaXplIHNjcmVlbnNcbiAgZmluZFNwYWNlOiAtPlxuICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSk9PlxuICAgICAgaWYgQGlubGluZVxuICAgICAgICBpZiBAcGxhdGZvcm1EZXRlY3Rpb24ucGxhdGZvcm0oKSBpbiBbJ3NtYWxsJywnbWVkaXVtJ11cbiAgICAgICAgICBzcGFjZWZpbmRlciA9IG5ldyBTcGFjZWZpbmRlcigpXG4gICAgICAgICAgc3BhY2VmaW5kZXIuZ2V0UGFyYVdpdGhTcGFjZSgpLnRoZW4gKHNwYWNlKT0+XG4gICAgICAgICAgICBpZiAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgQGVsZW1bMF0pXG4gICAgICAgICAgICAgQGVsZW0ucmVtb3ZlKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgc3BhY2UgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICQoJy5zaW5nbGUtY29udGVudCcpLmFmdGVyKEBlbGVtKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAkKHNwYWNlKS5hZnRlcihAZWxlbSlcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgZWxzZVxuICAgICAgICByZXNvbHZlKClcblxuICBnZXRSZWFkeTogLT5cbiAgICBQcm9taXNlLmFsbChAZmluZFNwYWNlKCkpXG5cbiAgIyBEZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGxvYWQgdGhlIGFkIGFuZCBsb2FkIGl0IG9yIHNldCB1cCBwZXJpb2RpYyBjaGVja2luZ1xuICBtYXliZUxvYWQ6IChlKT0+XG4gICAgQGdldFJlYWR5KCkudGhlbiA9PlxuICAgICAgcmV0dXJuIGlmIEBsb2FkaW5nIG9yIEBsb2FkZWRcbiAgICAgIHJldHVybiBAbG9hZCgpIGlmIGU/LmNvbXBhbmlvbiBpcyB0cnVlICMgRm9yY2UgY29tcGFuaW9ucyB0byBsb2FkIGV2ZW4gaWYgbm90IHZpc2libGVcbiAgICAgIHJldHVybiBAbG9hZCgpIHVubGVzcyBAb3B0aW9ucy5sb2FkT25seVZpZXdhYmxlXG4gICAgICBpZiBAdmlzaWJsZSgpXG4gICAgICAgIEBsb2FkKClcblxuICAgICAgICAjIEZvcmNlIGxvYWQgYW55IGNvbXBhbmlvbiB1bml0c1xuICAgICAgICAkLmVhY2ggQGNvbXBhbmlvblVuaXRzLCAoaSwgYWQpPT5cbiAgICAgICAgICBAbG9nZ2VyLmluZm8oXCJAbWF5YmVMb2FkXCIsIFwiI3tAZWxlbUlkfSB0cmlnZ2VyZWQgbG9hZGluZyBvZiBjb21wYW5pb24gI3thZC5lbGVtSWR9XCIpXG4gICAgICAgICAgYWQubWF5YmVMb2FkKGNvbXBhbmlvbjogdHJ1ZSkgdW5sZXNzIGFkID09IEAgIyBUcnkgYW5kIGxvYWQgdW5sZXNzIHRoZSBjb21wYW5pb24gd2FzIGFjdHVhbGx5IHRoZSBjdXJyZW50IEFkVW5pdFxuXG4gICMgTG9hZCB0aGUgYWQgdW5pdCB1c2luZyBBZFRlY2gncyBEQUMgbG9hZGVyXG4gIGxvYWQ6IC0+XG4gICAgQGxvYWRpbmcgPSB0cnVlXG4gICAgJChAKS5vZmYoJ1Njcm9sbC5BZFVuaXQuRk0nKSAjIFR1cm4gb2ZmIHdhdGNoaW5nIHRoaXMgYWQgYXMgaXQgaGFzIGxvYWRlZCBub3dcblxuICAgIG9wdGlvbnMgPVxuICAgICAgcGxhY2VtZW50OiBAaWRcbiAgICAgIGFkQ29udGFpbmVySWQ6IEBlbGVtSWRcbiAgICAgIGNvbXBsZXRlOiBAb25Mb2FkQ29tcGxldGVcbiAgICAgIGVycm9yOiBAb25Mb2FkRXJyb3JcbiAgICAgIGt2OiBAa3ZcbiAgICAgIHBhcmFtczpcbiAgICAgICAga2V5OiBAa2V5d29yZHMuam9pbignKycpXG4gICAgICAgIHRhcmdldDogJ19ibGFuaydcblxuICAgIEBlbGVtLmNzcygnbWluLWhlaWdodCcsIEBlbGVtLmhlaWdodCgpKVxuXG4gICAgaWYgQHJ1blF1ZXVlZFxuICAgICAgQURURUNILmVucXVldWVBZChvcHRpb25zKVxuICAgICAgQGxvZ2dlci5pbmZvICdAbG9hZCcsICdBZCBRdWV1ZWQ6JywgQGVsZW1JZFxuICAgIGVsc2VcbiAgICAgIEFEVEVDSC5sb2FkQWQob3B0aW9ucylcblxuICBvbkxvYWRDb21wbGV0ZTogPT5cbiAgICBAbG9hZGluZyA9IGZhbHNlXG4gICAgQGxvYWRlZCA9IHRydWVcbiAgICBAbG9nZ2VyLmluZm8gJ0BvbkxvYWRDb21wbGV0ZScsICdBZCBsb2FkIGNvbXBsZXRlOicsIEBlbGVtSWRcbiAgICAkKEBlbGVtKS5jc3MoJ21pbi1oZWlnaHQnOiAnJylcbiAgICBpZiBAcmVmcmVzaGFibGUoKVxuICAgICAgQHRpbWVyLnN0YXJ0KEBvcHRpb25zLnJlZnJlc2hJbnRlcnZhbClcblxuICBvbkxvYWRFcnJvcjogPT5cbiAgICBAbG9hZGluZyA9IGZhbHNlXG4gICAgQGxvYWRlZCA9IGZhbHNlXG4gICAgQGZhaWxlZCA9IHRydWVcbiAgICAkKEBlbGVtKS5jc3MoJ21pbi1oZWlnaHQnOiAnJylcbiAgICBAbG9nZ2VyLndhcm4gJ0BvbkxvYWRFcnJvcicsICdBZCBsb2FkIGVycm9yOicsIEBlbGVtSWRcblxuICAjIERldGVybWluZSB3aGV0aGVyIHRoZSBhZCB1bml0IGlzIGN1cnJlbnRseSBpbiB0aGUgdmlld3BvcnRcbiAgdmlzaWJsZTogLT5cbiAgICByZWN0ID0gQHJhd0VsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZWN0LnRvcCA+PSAwIGFuZFxuICAgIHJlY3QubGVmdCA+PSAwIGFuZFxuICAgIChyZWN0LnRvcCArIDUwKSA8PSAkKHdpbmRvdykuaGVpZ2h0KCkgYW5kXG4gICAgKHJlY3QubGVmdCArIDUwKSA8PSAkKHdpbmRvdykud2lkdGgoKVxuICAgICNyZWN0LmJvdHRvbSA8PSAkKHdpbmRvdykuaGVpZ2h0KCkgJiZcbiAgICAjcmVjdC5yaWdodCA8PSAkKHdpbmRvdykud2lkdGgoKVxuXG4gICMgSW5pdGlhbGl6ZSB0aGUgcmVmcmVzaCB0aW1lciB3aGljaCBoYW5kbGVzIHJlbG9hZGluZyB0aGUgYWQgYXV0b21hdGljYWxseVxuICBpbml0UmVmcmVzaFRpbWVyOiAtPlxuICAgIGlmIEByZWZyZXNoYWJsZSgpXG4gICAgICBAdGltZXIgPSBuZXcgVG9ja1xuICAgICAgICBpbnRlcnZhbDogQG9wdGlvbnMucmVmcmVzaEludGVydmFsXG4gICAgICAgIGNvdW50ZG93bjogdHJ1ZVxuICAgICAgICBjb21wbGV0ZTogQHJlZnJlc2hcblxuICAjIFJlZnJlc2ggdGhlIGFkIGlmIGl0IGlzIGxvYWRlZCwgdmlld2FibGUgYW5kIHRoZSB1c2VyIGhhcyByZWNlbnRseSBpbnRlcmFjdGVkXG4gIHJlZnJlc2g6ID0+XG4gICAgQHRpbWVyLnJlc2V0KClcbiAgICBAbG9hZCgpIGlmIEBsb2FkZWQgYW5kIEB2aWV3YWJsZSgpIGFuZCBAdXNlclNob3dzSW50ZW50KClcblxuICAjIElzIHJlZnJlc2ggY29uZmlndXJlZFxuICByZWZyZXNoYWJsZTogLT5cbiAgICBAb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwgPj0gMjAwMFxuXG4gICMgQmVoYXZpb3VyIHRvIGhhbmRsZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBpbnRlcmFjdGVkIHdpdGggdGhlIHNpdGUgZm9yIGEgd2hpbGUgKGllIGNhbiB3ZSByZWZyZXNoIHRoZSBhZCBpbiB2aWV3PylcbiAgdXNlclNob3dzSW50ZW50OiAtPlxuICAgIHRydWVcblxuICBpbml0Vmlld2FibGU6IC0+XG4gICAgaWYgQG9wdGlvbnMubG9hZE9ubHlWaWV3YWJsZSBhbmQgQGFkTG9hZGVyP1xuICAgICAgIyBUaGVyZXMgcHJvYmFibHkgYSBtb3JlIGVsZWdhbnQgd2F5IHRvIGRvIHRoaXMuLi5cbiAgICAgICMgQmFzaWNhbGx5IEkgd2FudCB0byBhdHRhY2ggYSBzY3JvbGwgbGlzdGVuZXIgdG8gdGhlIG9iamVjdCBzbyBJIGNhbiByZW1vdmUgaXQgbGF0ZXJcbiAgICAgICQoQCkub24gJ1Njcm9sbC5BZFVuaXQuRk0nLCAoZSwgZGF0YSk9PlxuICAgICAgICBAbWF5YmVMb2FkKGUpXG5cbiAgICAgICQoQGFkTG9hZGVyKS5vbiAnU2Nyb2xsLkFkTG9hZGVyLkZNJywgKGUsIGRhdGEpPT5cbiAgICAgICAgJChAKS50cmlnZ2VyKCdTY3JvbGwuQWRVbml0LkZNJywgZGF0YSlcblxuICAjIENvbmZpZ3VyZSByZXNwb25zaXZlIHBsYWNlbWVudHNcbiAgIyBUaGVzZSBhdXRvbWF0aWNhbGx5IHJlaW5pdGlhbGl6ZSB3aGVuIHRoZSB2aWV3cG9ydCByZXNpemVzXG4gIGluaXRSZXNwb25zaXZlOiAtPlxuICAgIEFEVEVDSC5jb25maWcucGxhY2VtZW50c1tAaWRdID1cbiAgICAgIHJlc3BvbnNpdmU6XG4gICAgICAgIHVzZXJlc3BvbnNpdmU6IHRydWVcbiAgICAgICAgYm91bmRzOiBAYm91bmRzXG5cbm1vZHVsZS5leHBvcnRzID0gQWRVbml0XG4iLCJkb2NDb29raWVzID0gcmVxdWlyZSAnbW96aWxsYS1kb2MtY29va2llcydcblxuY2xhc3MgQWxlcnRcbiAgY29uc3RydWN0b3I6IChAdGFyZ2V0LCBAY29va2llTmFtZSktPlxuICAgIEBpc1Nob3dpbmdDbGFzcyA9ICdpcy1zaG93aW5nJ1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEB0YXJnZXQpXG4gICAgcmV0dXJuIHVubGVzcyBlbGVtZW50P1xuICAgIEBjb250YWluZXJDbGFzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihAdGFyZ2V0KS5jbGFzc0xpc3RcbiAgICBAY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3tAdGFyZ2V0fSAuanMtY2xvc2VcIilcbiAgICBAc2hvd01lc3NhZ2UoKVxuXG4gIGJpbmRFdmVudHM6IC0+XG4gICAgQGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKGUpPT5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgQGNvbnRhaW5lckNsYXNzZXMudG9nZ2xlIEBpc1Nob3dpbmdDbGFzc1xuICAgICAgQHJlZ2lzdGVyQ29va2llKClcblxuICBzaG93TWVzc2FnZTogLT5cbiAgICB1bmxlc3MgQGNvb2tpZUV4aXN0cygpXG4gICAgICBAY29udGFpbmVyQ2xhc3Nlcy50b2dnbGUgQGlzU2hvd2luZ0NsYXNzXG4gICAgICBAYmluZEV2ZW50cygpXG5cbiAgcmVnaXN0ZXJDb29raWU6IC0+XG4gICAgcmV0dXJuIHVubGVzcyBAY29va2llTmFtZT9cbiAgICBleHBpcmVzID0gbmV3IERhdGUoKVxuICAgIGV4cGlyZXMuc2V0RGF0ZSBleHBpcmVzLmdldERhdGUoKSArIDM2NVxuICAgIGRvY0Nvb2tpZXMuc2V0SXRlbShAY29va2llTmFtZSwgdHJ1ZSwgZXhwaXJlcywgJy8nKVxuXG4gIGNvb2tpZUV4aXN0czogLT5cbiAgICByZXR1cm4gZmFsc2UgdW5sZXNzIEBjb29raWVOYW1lP1xuICAgIGlmIGRvY0Nvb2tpZXMuZ2V0SXRlbShAY29va2llTmFtZSk/XG4gICAgICB0cnVlXG4gICAgZWxzZVxuICAgICAgZmFsc2VcblxubW9kdWxlLmV4cG9ydHMgPSBBbGVydCIsIkxvZ2dlciA9IHJlcXVpcmUgJ2pzLWxvZ2dlcidcbnRocm90dGxlID0gcmVxdWlyZSAndGhyb3R0bGVpdCdcblxuY2xhc3MgQXN5bmNQb3N0c0xvYWRlclxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBsb2dnZXIgPSBMb2dnZXIuZ2V0KCdBc3luY0xvYWRlcicpXG5cbiAgICBAYXBpVVJMID0gJy9pbmRleC5waHA/X19hc3luY19wb3N0cz0xJ1xuICAgIEBwbGFjZWhvbGRlciA9ICQoJy5qcy1hc3luYy1wb3N0cycpXG4gICAgQGNhdGVnb3J5ID0gJ25vbmUnXG4gICAgQG1heExvYWRzID0gMTVcblxuICAgIEB0aHJvdHRsZWRJc0luVmlldyA9IHRocm90dGxlKEBpc0luVmlldywgMjAwKVxuXG4gICAgJCh3aW5kb3cpLm9uICdzY3JvbGwnLCB7IHRhcmdldDogQHBsYWNlaG9sZGVyIH0sIEB0aHJvdHRsZWRJc0luVmlld1xuXG5cbiAgaXNJblZpZXc6IChldmVudCkgPT5cbiAgICB0YXJnZXQgPSBldmVudC5kYXRhLnRhcmdldFxuICAgIGlmIHRhcmdldC5sZW5ndGhcbiAgICAgIEBsb2dnZXIuaW5mbyhcImlzSW5WaWV3XCIpXG4gICAgICB0b3AgPSB0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgICB0aHJlc2hvbGQgPSA3MDBcbiAgICAgIHNjcmVlbkJvdHRvbSA9IHdpbmRvdy5wYWdlWU9mZnNldCArICQod2luZG93KS5oZWlnaHQoKVxuXG4gICAgICBpZiBzY3JlZW5Cb3R0b20gPiAodG9wIC0gdGhyZXNob2xkKVxuICAgICAgICBpZiB0YXJnZXQubGVuZ3RoID4gMFxuICAgICAgICAgIEBnZXRQb3N0cygpXG5cbiAgICAgICAgICBAbG9nZ2VyLmluZm8oXCJpc0luVmlld1wiLCBcInJlbW92ZSBldmVudCBsaXN0ZW5lclwiKVxuICAgICAgICAgICN0YXJnZXQucmVtb3ZlQ2xhc3MoJ2pzLWFzeW5jLWNhdGVnb3J5LWxhbmRlcicpXG4gICAgICAgICAgJCh3aW5kb3cpLm9mZiAnc2Nyb2xsJywgQHRocm90dGxlZElzSW5WaWV3XG5cblxuICBnZXRQb3N0czogLT5cbiAgICBAY2F0ZWdvcnkgPSBAcGxhY2Vob2xkZXIuZGF0YSAnY2F0ZWdvcnknXG4gICAgQHBhZ2UgPSBAcGxhY2Vob2xkZXIuZGF0YSgncGFnZScpIHx8IDFcblxuICAgIGlmIEBjYXRlZ29yeVxuICAgICAgJChcIi5qcy1hc3luYy1wb3N0c1wiKS5hZGRDbGFzcyhcImMtYXN5bmMtcG9zdHMtLWxvYWRpbmdcIilcbiAgICAgICQuYWpheFxuICAgICAgICB1cmw6IFwiI3tAYXBpVVJMfSZjYXRlZ29yeT0je0BjYXRlZ29yeX0mcGFnZT0je0BwYWdlfVwiXG4gICAgICAgIHN1Y2Nlc3M6IChwb3N0cykgPT5cbiAgICAgICAgICBAbG9nZ2VyLmluZm8oJ2dldFBvc3RzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgIEByZW5kZXJQb3N0cyhwb3N0cykgaWYgcG9zdHNcblxuXG4gIHJlbmRlclBvc3RzOiAocG9zdHMpIC0+XG4gICAgJChwb3N0cykuaW5zZXJ0QmVmb3JlKEBwbGFjZWhvbGRlcilcbiAgICBhZExvYWRlci5pbml0QWRzKFtcIi5qcy1hc3luYy1wb3N0cy13cmFwOmxhc3RcIl0pXG4gICAgJChcIi5qcy1hc3luYy1wb3N0cy13cmFwOmxhc3RcIikuaGlkZSgpXG4gICAgIyBEZWxheSBzaG93aW5nIHRoZSBuZXcgcG9zdHMgZm9yIDUwMG1zIHRvIGdpdmUgYWRzIG1vcmUgdGltZSB0byBsb2FkXG4gICAgc2V0VGltZW91dCggPT5cbiAgICAgICQoXCIuanMtYXN5bmMtcG9zdHMtd3JhcDpsYXN0XCIpLnNob3coKVxuICAgICAgIyBhbGwtbG9hZGVkIGlzIHNldCB0byAxIGlmIHRoZXJlIGFyZSBubyBtb3JlIHBvc3RzIHRvIGZvbGxvd1xuICAgICAgIyBEb24ndCBhZGQgbmV3IGxvYWRlciBwbGFjZWhvbGRlciBpZiB0aGlzIGlzIHRoZSBjYXNlXG4gICAgICBpZiBAcGFnZSA8IEBtYXhMb2FkcyAmJiAkKHBvc3RzKS5kYXRhKFwiYWxsLWxvYWRlZFwiKSAhPSAxXG4gICAgICAgIEBwbGFjZWhvbGRlci5yZXBsYWNlV2l0aChAcGxhY2Vob2xkZXIuY2xvbmUoKS5hdHRyKFwiZGF0YS1wYWdlXCIsIEBwYWdlKzEpLnJlbW92ZUNsYXNzKFwiYy1hc3luYy1wb3N0cy0tbG9hZGluZ1wiKSlcbiAgICAgIGVsc2VcbiAgICAgICAgQHBsYWNlaG9sZGVyLnJlbW92ZSgpXG4gICAgICAgICQoXCIuanMtbm8tbW9yZS1wb3N0czpsYXN0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIilcbiAgICAgIEBwbGFjZWhvbGRlciA9ICQoJy5qcy1hc3luYy1wb3N0cycpXG4gICAgICAkKHdpbmRvdykub24gJ3Njcm9sbCcsIHsgdGFyZ2V0OiBAcGxhY2Vob2xkZXIgfSwgQHRocm90dGxlZElzSW5WaWV3XG4gICAgLCA1MDApXG4gICAgVHJhY2tlci50cmFja1BhZ2V2aWV3KGxvY2F0aW9uLnBhdGhuYW1lICsgXCIjc2Nyb2xsLXBhZ2UtI3tAcGFnZX1cIilcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luY1Bvc3RzTG9hZGVyXG4iLCIjIEJhY2sgdG8gdG9wXG5jbGFzcyBCYWNrVG9Ub3BcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAYm9keSA9ICQoJ2JvZHksIGh0bWwnKVxuICAgIEBzY3JvbGxUb1goKVxuXG5cbiAgc2Nyb2xsVG9YOiAtPlxuICAgICQoXCIuc2Nyb2xsLXRvXCIpLm9uICdjbGljaycsIChlKT0+XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGVsID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICB0YXJnZXRJRCA9ICQoZWwpLmF0dHIoJ2hyZWYnKVxuXG4gICAgICBAYm9keS5hbmltYXRlXG4gICAgICAgIHNjcm9sbFRvcDogJCh0YXJnZXRJRCkub2Zmc2V0KCkudG9wLCA4MDBcblxuXG4jIHdpbmRvdy5CYWNrVG9Ub3AgPSBCYWNrVG9Ub3Bcbm1vZHVsZS5leHBvcnRzID0gQmFja1RvVG9wIiwiZG9jQ29va2llcyA9IHJlcXVpcmUgJ21vemlsbGEtZG9jLWNvb2tpZXMnXG5Mb2dnZXIgPSByZXF1aXJlICdqcy1sb2dnZXInXG5cbiMgQ29tcGV0aXRpb25zIGlmcmFtZSByZXNpemVcbmNsYXNzIENvbXBldGl0aW9uc1xuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBsb2dnZXIgPSBMb2dnZXIuZ2V0KCdDb21wZXRpdGlvbnMnKVxuICAgIEBzZXR1cCgpXG5cbiAgICAkKHdpbmRvdykub24gXCJGTTpvblNwbGl0UG9zdFBhZ2VDaGFuZ2VkXCIsIChlLGRhdGEpPT5cbiAgICAgIEBsb2dnZXIuaW5mbyhcImluaXQgLSBGTTpvblNwbGl0UG9zdFBhZ2VDaGFuZ2VkXCIpXG4gICAgICBAc2V0dXAoKVxuXG4gIHNldHVwOiA9PlxuICAgIEBpbml0Q29tcGV0aXRpb25zKClcbiAgICByZXR1cm4gZmFsc2UgdW5sZXNzIEBjb21wZXRpdGlvbnMubGVuZ3RoXG4gICAgQGJpbmRNZXNzYWdlTGlzdGVuZXIoKVxuICAgIEBjcmVhdGVJZnJhbWVzKClcbiAgICBAdHJhY2tTdWJtaXQoKVxuXG4gIGluaXRDb21wZXRpdGlvbnM6ID0+XG4gICAgQGNvbXBldGl0aW9ucyA9ICQoXCIuY29tcGV0aXRpb24tZW1iZWRcIilcblxuICBiaW5kTWVzc2FnZUxpc3RlbmVyOiAtPlxuICAgIFV0aWxpdGllcy5Qb3N0TWVzc2FnZS5oYW5kbGUgKGUpPT5cbiAgICAgIHJldHVybiB1bmxlc3MgZS5kYXRhXG4gICAgICByZXR1cm4gaWYgQGNoZWNrTWVzc2FnZShlLmRhdGEpXG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpXG4gICAgICBAY29tcGV0aXRpb25zLmZpbHRlcihcIltkYXRhLWNvbXAtaWQ9XCIgKyBkYXRhLmNvbXBfaWQgKyBcIl1bZGF0YS1tb2RlPVwiICsgZGF0YS5tb2RlICsgXCJdXCIpLmZpbmQoXCJpZnJhbWVcIikuaGVpZ2h0KHBhcnNlSW50KGRhdGEuaGVpZ2h0KSlcblxuICBjaGVja01lc3NhZ2U6IChkYXRhKS0+XG4gICAgZGF0YS50b1N0cmluZygpLmluZGV4T2YoXCJyZXNpemVfaWZyYW1lXCIpIGlzIC0xXG5cbiAgY3JlYXRlSWZyYW1lczogPT5cbiAgICBAY29tcGV0aXRpb25zLmVhY2ggKGksIGVsKT0+XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICAgIGlmIEBjb21wZXRpdGlvbkNvb2tpZUV4aXN0cyhlbC5kYXRhKFwiY29tcC1pZFwiKSkgYW5kIGVsLmRhdGEoXCJtb2RlXCIpIGlzIFwid2lkZ2V0XCJcbiAgICAgICAgZWwucGFyZW50cyhcIi53aWRnZXRcIikucmVtb3ZlKClcblxuICAgICAgaWZyYW1lID0gJChcIjxpZnJhbWU+PC9pZnJhbWU+XCIpXG4gICAgICBzcmMgPSBlbC5kYXRhKFwic3JjXCIpXG4gICAgICBpZnJhbWUuYXR0clxuICAgICAgICBzcmM6IHNyY1xuICAgICAgICBmcmFtZWJvcmRlcjogMFxuICAgICAgICB3aWR0aDogZWwud2lkdGgoKVxuICAgICAgICBzZWFtbGVzczogdHJ1ZVxuXG4gICAgICBlbC5hZGRDbGFzcyhcImlzLWFjdGl2ZVwiKS5odG1sKFwiXCIpLmFwcGVuZChpZnJhbWUpXG5cbiAgY29tcGV0aXRpb25Db29raWVFeGlzdHM6IChpZCkgLT5cbiAgICBjb29raWUgPSAkKFwiYm9keVwiKS5kYXRhKFwic2l0ZS1zbHVnXCIpICsgXCJfY29tcGV0aXRpb25fXCIgKyBpZFxuXG4gICAgaWYgZG9jQ29va2llcy5nZXRJdGVtKGNvb2tpZSk/XG4gICAgICB0cnVlXG4gICAgZWxzZVxuICAgICAgZmFsc2VcblxuICB0cmFja1N1Ym1pdDogLT5cbiAgICAkKFwiLndpZGdldC53aWRnZXRfY29tcGV0aXRpb24gZm9ybVwiKS5vbiBcInN1Ym1pdFwiLCAoZSkgLT5cbiAgICAgIHRyYWNrIFwiQ29tcGV0aXRpb24gV2lkZ2V0XCIsIFwiU3VibWl0dGVkXCJcblxuXG4jIHdpbmRvdy5Db21wZXRpdGlvbnMgPSBDb21wZXRpdGlvbnNcbm1vZHVsZS5leHBvcnRzID0gQ29tcGV0aXRpb25zIiwicmVxdWlyZSAnZmxleHNsaWRlcidcblxuIyBDb250ZW50IFNsaWRlclxuY2xhc3MgQ29udGVudFNsaWRlclxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBjb250ZW50X3NsaWRlciA9ICQoXCIuY29udGVudC1zbGlkZXJcIilcbiAgICBAZmxleHNsaWRlciA9IHVuZGVmaW5lZFxuICAgIGlmIEBjb250ZW50X3NsaWRlci5sZW5ndGggPiAwXG4gICAgICAkLmVhY2ggQGNvbnRlbnRfc2xpZGVyLCAoaywgc2xpZGVyKT0+XG4gICAgICAgIEBzZXR1cFNsaWRlcihrLHNsaWRlcilcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZSA9PlxuICAgICAgICAkLmVhY2ggQGNvbnRlbnRfc2xpZGVyLCAoayxzbGlkZXIpPT5cbiAgICAgICAgICBAcmVzaXplU2xpZGVyKGssc2xpZGVyKVxuXG5cbiAgIyByZXRyaWdnZXIgIyBncmlkIGl0ZW1zIG9uIHJlc2l6ZVxuICBzZXR1cFNsaWRlcjogKGssIHNsaWRlciktPlxuICAgIHNsaWRlciA9ICQoc2xpZGVyKVxuICAgIHNsaWRlci5mbGV4c2xpZGVyXG4gICAgICBhbmltYXRpb246IFwic2xpZGVcIlxuICAgICAgc2xpZGVzaG93OiBmYWxzZVxuICAgICAgaXRlbVdpZHRoOiBzbGlkZXIuZmluZChcImFydGljbGVcIikud2lkdGgoKVxuICAgICAgaXRlbU1hcmdpbjogMjBcbiAgICAgIG1pbkl0ZW1zOiBAZ2V0R3JpZFNpemUoc2xpZGVyKVxuICAgICAgbWF4SXRlbXM6IEBnZXRHcmlkU2l6ZShzbGlkZXIpXG4gICAgICBzZWxlY3RvcjogXCIuc2xpZGVzIC5zbGlkZVwiXG4gICAgICBwcmV2VGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYW5nbGUtbGVmdCc+PC9pPlwiXG4gICAgICBuZXh0VGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYW5nbGUtcmlnaHQnPjwvaT5cIlxuXG4gICAgcmV0dXJuXG5cbiAgZ2V0R3JpZFNpemU6IChzbGlkZXIpLT5cbiAgICBhcnRpY2xlID0gJChzbGlkZXIpLmZpbmQoXCJhcnRpY2xlXCIpXG4gICAgaWYgYXJ0aWNsZS5oYXNDbGFzcyhcImFydGljbGUtc21hbGxcIilcbiAgICAgIChpZiAoc2xpZGVyLndpZHRoKCkgPCA2MDApIHRoZW4gMiBlbHNlIChpZiAoc2xpZGVyLndpZHRoKCkgPCA5MDApIHRoZW4gNCBlbHNlIDYpKVxuICAgIGVsc2UgKGlmIChzbGlkZXIud2lkdGgoKSA8IDYwMCkgdGhlbiAxIGVsc2UgKGlmIChzbGlkZXIud2lkdGgoKSA8IDkwMCkgdGhlbiAzIGVsc2UgMykpIGlmIGFydGljbGUuaGFzQ2xhc3MoXCJhcnRpY2xlLW1lZGl1bVwiKVxuXG4gIHJlc2l6ZVNsaWRlcjogKGssIHNsaWRlciktPlxuICAgIHNsaWRlciA9ICQoc2xpZGVyKVxuICAgIHNsaWRlci5kYXRhKFwiZmxleHNsaWRlclwiKS52YXJzLm1pbkl0ZW1zID0gQGdldEdyaWRTaXplKHNsaWRlcilcbiAgICBzbGlkZXIuZGF0YShcImZsZXhzbGlkZXJcIikudmFycy5tYXhJdGVtcyA9IEBnZXRHcmlkU2l6ZShzbGlkZXIpXG4gICAgcmV0dXJuXG5cbiMgd2luZG93LkNvbnRlbnRTbGlkZXIgPSBDb250ZW50U2xpZGVyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRlbnRTbGlkZXIiLCJjbGFzcyBGYWNlYm9va0NvbW1lbnRzXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBpc1Nob3dpbmdDbGFzcyA9ICdjLWNvbW1lbnRzLS1pcy1zaG93aW5nJ1xuICAgIEBiaW5kRXZlbnRzKClcblxuICBiaW5kRXZlbnRzOiAtPlxuICAgICQoJ2JvZHknKS5vbiAnY2xpY2snLCAnLmpzLWZiLWNvbW1lbnRzIC5qcy1mYi1jb21tZW50cy1idXR0b24nLCAoZSk9PlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb21tZW50c0JveCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1mYi1jb21tZW50cycpXG4gICAgICBjb21tZW50c0JveC50b2dnbGVDbGFzcyBAaXNTaG93aW5nQ2xhc3NcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2Vib29rQ29tbWVudHNcbiIsIkxvZ2dlciA9IHJlcXVpcmUgJ2pzLWxvZ2dlcidcbkZhY2Vib29rVXNlciA9IHJlcXVpcmUgJy4vX2NvbXBvbmVudHMuZmFjZWJvb2stdXNlcidcblxuY2xhc3MgRmFjZWJvb2tTREtcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAbG9nZ2VyID0gTG9nZ2VyLmdldCgnRmFjZWJvb2tTREsnKVxuICAgIEB1c2VyID0gbnVsbFxuICAgIEBhcHBJRCA9ICQoXCJtZXRhW3Byb3BlcnR5PSdmYjphcHBfaWQnXVwiKS5wcm9wKFwiY29udGVudFwiKVxuXG4gICAgJC5hamF4U2V0dXAoeyBjYWNoZTogdHJ1ZSB9KVxuICAgICQuZ2V0U2NyaXB0ICcvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VLL3Nkay5qcycsID0+XG4gICAgICBGQi5pbml0XG4gICAgICAgYXBwSWQ6IEBhcHBJRFxuICAgICAgIHZlcnNpb246ICd2Mi4zJ1xuICAgICAgIGZyaWN0aW9ubGVzc1JlcXVlc3RzOiB0cnVlXG4gICAgICAgc3RhdHVzOiB0cnVlXG4gICAgICAgY29va2llOiB0cnVlXG4gICAgICAgeGZibWw6IHRydWVcbiAgICAgICBjaGFubmVsVXJsOiAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJy9mYWNlYm9vay9jaGFubmVsLmh0bWwnXG5cbiAgICAgIEZCLkV2ZW50LnN1YnNjcmliZSAnYXV0aC5sb2dpbicsIChyZXNwb25zZSk9PlxuICAgICAgICBAbG9nKFwiYXV0aC5sb2dpblwiKVxuICAgICAgICBAZG9Mb2dpbihyZXNwb25zZSlcblxuICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlICdhdXRoLmxvZ291dCcsIChyZXNwb25zZSk9PlxuICAgICAgICBAbG9nKFwiYXV0aC5sb2dvdXRcIilcbiAgICAgICAgQGRvTG9nb3V0KHJlc3BvbnNlKVxuXG5cbiAgICAgIEZCLkV2ZW50LnN1YnNjcmliZSAneGZibWwucmVuZGVyJywgKHJlc3BvbnNlKT0+XG4gICAgICAgIEBsb2coXCJ4ZmJtbC5yZW5kZXI6ICN7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfVwiKVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcihcIkZNOm9uRmFjZWJvb2tYRkJNTFJlbmRlclwiKVxuXG4gICAgICBGQi5FdmVudC5zdWJzY3JpYmUgJ2F1dGguc3RhdHVzQ2hhbmdlJywgKHJlc3BvbnNlKT0+XG4gICAgICAgIEBsb2coXCJhdXRoLnN0YXR1c0NoYW5nZVwiKVxuICAgICAgICBAZG9Mb2dpbihyZXNwb25zZSlcblxuICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlICdhdXRoLmF1dGhSZXNwb25zZUNoYW5nZScsIChyZXNwb25zZSk9PlxuICAgICAgICBAbG9nKFwiYXV0aC5hdXRoUmVzcG9uc2VDaGFuZ2VcIilcbiAgICAgICAgQGRvTG9naW4ocmVzcG9uc2UpXG5cbiAgICAgIEZCLkV2ZW50LnN1YnNjcmliZSAnZWRnZS5jcmVhdGUnLCAoaHJlZiwgd2lkZ2V0KT0+XG4gICAgICAgIEBsb2coXCJlZGdlLmNyZWF0ZSAtICN7aHJlZn1cIilcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIgXCJGTTpvbkZhY2Vib29rTGlrZVwiLCB7bmV0d29yazogXCJmYWNlYm9va1wiLCBhY3Rpb246IFwibGlrZVwiLCB1cmw6IGhyZWZ9XG4gICAgICAgICNAbG9nKHdpZGdldClcblxuICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlICdlZGdlLnJlbW92ZScsIChocmVmLCB3aWRnZXQpPT5cbiAgICAgICAgQGxvZyhcImVkZ2UucmVtb3ZlIC0gI3tocmVmfVwiKVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlciBcIkZNOm9uRmFjZWJvb2tVbmxpa2VcIiwge25ldHdvcms6IFwiZmFjZWJvb2tcIiwgYWN0aW9uOiBcImxpa2VcIiwgdXJsOiBocmVmfVxuICAgICAgICAjQGxvZyh3aWRnZXQpXG4gICAgICAgICMvIENhbid0IGdldCBsaWtlZCBzdGF0dXMgZnJvbSB1c2VyIG1vZGVsIGJlY2F1c2UgdGhlIGxpa2UgYnV0dG9uIGRvZXNuJ3QgYXV0aCB0aGUgQWNjZXNzS2V5IGZvciB1c2VyX2xpa2VzXG5cbiAgICAgIEZCLkV2ZW50LnN1YnNjcmliZSAnY29tbWVudC5jcmVhdGUnLCAocmVzcG9uc2UpPT5cbiAgICAgICAgQGxvZyhcImNvbW1lbnQuY3JlYXRlICN7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfVwiKVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlciBcIkZNOm9uRmFjZWJvb2tDb21tZW50Q3JlYXRlZFwiLCB7bmV0d29yazogXCJmYWNlYm9va1wiLCBhY3Rpb246IFwiY29tbWVudFwiLCB1cmw6IHJlc3BvbnNlLmhyZWZ9XG5cbiAgICAgIEZCLkV2ZW50LnN1YnNjcmliZSAnY29tbWVudC5yZW1vdmUnLCAocmVzcG9uc2UpPT5cbiAgICAgICAgQGxvZyhcImNvbW1lbnQucmVtb3ZlICN7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfVwiKVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlciBcIkZNOm9uRmFjZWJvb2tDb21tZW50UmVtb3ZlZFwiLCB7bmV0d29yazogXCJmYWNlYm9va1wiLCBhY3Rpb246IFwiY29tbWVudFwiLCB1cmw6IHJlc3BvbnNlLmhyZWZ9XG5cbiAgICAgICMgRkIuZ2V0TG9naW5TdGF0dXMgKHJlc3BvbnNlKT0+XG4gICAgICAjICAgQGxvZyhcImdldExvZ2luU3RhdHVzKClcIilcbiAgICAgICMgICBAZG9Mb2dpbihyZXNwb25zZSlcblxuICAgICAgcmV0dXJuXG5cbiAgbG9nOiAobXNnKS0+XG4gICAgQGxvZ2dlci5pbmZvKG1zZylcblxuICBkb0xvZ2luOiAocmVzcG9uc2UpLT5cbiAgICBAbG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSlcbiAgICBzd2l0Y2ggcmVzcG9uc2Uuc3RhdHVzXG4gICAgICB3aGVuICdjb25uZWN0ZWQnXG4gICAgICAgIEBsb2coXCJkb0xvZ2luIC0gc3RhdHVzID09IGNvbm5lY3RlZFwiKVxuICAgICAgICBAc2V0dXBVc2VyKHJlc3BvbnNlKVxuICAgICAgICBAc2V0QWNjZXNzVG9rZW4ocmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuKVxuICAgICAgICBAcG9wdWxhdGVQZXJzb25hbERhdGEocmVzcG9uc2UpXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKFwiRk06b25GYWNlYm9va0Nvbm5lY3RlZFwiLCByZXNwb25zZSlcblxuICBkb0xvZ291dDogKHJlc3BvbnNlKS0+XG4gICAgQGxvZyhcImRvTG9nb3V0XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXG4gICAgQGNsZWFyUGVyc29uYWxEYXRhKClcbiAgICAkKHdpbmRvdykudHJpZ2dlcihcIkZNOm9uRmFjZWJvb2tEaXNjb25uZWN0ZWRcIiwgcmVzcG9uc2UpXG5cblxuICBzZXR1cFVzZXI6IChyZXNwb25zZSktPlxuICAgIEB1c2VyID0gbmV3IEZhY2Vib29rVXNlcihyZXNwb25zZSlcblxuICBzZW5kOiAodXJsLCBjYWxsYmFjayktPlxuICAgIEZCLnVpIHtcbiAgICAgIG1ldGhvZDogXCJzZW5kXCJcbiAgICAgIGxpbms6IHVybFxuICAgIH0sIGNhbGxiYWNrXG5cbiAgc2hhcmU6ICh1cmwsIGNhbGxiYWNrKS0+XG4gICAgRkIudWkge1xuICAgICAgbWV0aG9kOiBcInNoYXJlXCJcbiAgICAgIGhyZWY6IHVybFxuICAgIH0sIGNhbGxiYWNrXG5cbiAgbGlrZTogKHVybCwgY2FsbGJhY2spLT5cbiAgICBGQi51aSB7XG4gICAgICBtZXRob2Q6ICdzaGFyZV9vcGVuX2dyYXBoJyxcbiAgICAgIGFjdGlvbl90eXBlOiAnb2cubGlrZXMnLFxuICAgICAgYWN0aW9uX3Byb3BlcnRpZXM6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgb2JqZWN0OiB1cmwsXG4gICAgICB9KVxuICAgIH0sIGNhbGxiYWNrXG5cblxuICBjbGVhclBlcnNvbmFsRGF0YTogPT5cbiAgICBAdXNlciA9IG51bGxcblxuICAjIENhbGwgdG8gc2V0IGEgZGlmZmVyZW50IGFjY2VzcyB0b2tlbiBvbiByZXF1ZXN0cy5cbiAgIyBVc2VkIGlmIGF1dGhlbnRpY2F0ZWQgd2l0aCBGQiBzZXBhcmF0ZWx5XG4gIHNldEFjY2Vzc1Rva2VuOiAoYWNjZXNzX3Rva2VuKS0+XG4gICAgQGFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlblxuXG4gIHJlcXVlc3RPcHRpb25zOiAtPlxuICAgIHtcbiAgICAgIGFjY2Vzc190b2tlbjogQGFjY2Vzc190b2tlblxuICAgIH1cblxuICBwb3B1bGF0ZVBlcnNvbmFsRGF0YTogPT5cbiAgICBGQi5hcGkgJy9tZScsIEByZXF1ZXN0T3B0aW9ucygpLCAocmVzcG9uc2UpPT5cbiAgICAgIEBsb2coXCJwb3B1bGF0ZVBlcnNvbmFsRGF0YVwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxuICAgICAgQHVzZXIgPSBuZXcgRmFjZWJvb2tVc2VyKHJlc3BvbnNlKVxuXG4jIHdpbmRvdy5GYWNlYm9va1NESyA9IEZhY2Vib29rU0RLXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2Vib29rU0RLIiwiY2xhc3MgRmFjZWJvb2tVc2VyXG5cbiAgY29uc3RydWN0b3I6IChtZSktPlxuICAgIEB1c2VyID0gbWVcbiAgICBAaWQgPSBAdXNlci5pZFxuICAgIEBlbWFpbCA9IEB1c2VyLmVtYWlsXG4gICAgQG5hbWUgPSBAdXNlci5uYW1lXG4gICAgQGZpcnN0X25hbWUgPSBAdXNlci5maXJzdF9uYW1lXG4gICAgQGxhc3RfbmFtZSA9IEB1c2VyLmxhc3RfbmFtZVxuICAgIEBnZW5kZXIgPSBAdXNlci5nZW5kZXJcbiAgICBAYmlydGhkYXkgPSBAdXNlci5iaXJ0aGRheVxuICAgIEBhZGRyZXNzID0gbnVsbFxuXG5cbiMgd2luZG93LkZhY2Vib29rVXNlciA9IEZhY2Vib29rVXNlclxubW9kdWxlLmV4cG9ydHMgPSBGYWNlYm9va1VzZXIiLCJjbGFzcyBGQk9wZW5HcmFwaE9iamVjdFxuXG4gIGNvbnN0cnVjdG9yOiAoc2RrLCBhY3Rpb25UeXBlLCBvYmplY3QpLT5cbiAgICBAZmFjZWJvb2tTREsgPSBzZGtcbiAgICBAYXBwTmFtZXNwYWNlID0gQGZhY2Vib29rU0RLLmFwcE5hbWVzcGFjZVxuXG4gICAgQGFjdGlvblR5cGUgPSBhY3Rpb25UeXBlXG4gICAgQG9iamVjdCA9IG9iamVjdFxuXG4gIGNyZWF0ZTogKHVybCwgY2FsbGJhY2spLT5cbiAgICBpdGVtID0gQG9iamVjdC50b1N0cmluZygpXG4gICAgb3B0cyA9IHt9XG4gICAgb3B0c1tpdGVtXSA9IHVybFxuICAgIEZCLmFwaShcbiAgICAgIFwibWUvI3tAYXBwTmFtZXNwYWNlfToje0BhY3Rpb25UeXBlfVwiLFxuICAgICAgJ3Bvc3QnLFxuICAgICAgb3B0cyxcbiAgICAgIGNhbGxiYWNrXG4gICAgKVxuXG4gIGdldDogKGNhbGxiYWNrKS0+XG4gICAgRkIuYXBpKFxuICAgICAgXCJtZS8je0BhcHBOYW1lc3BhY2V9OiN7QGFjdGlvblR5cGV9XCIsXG4gICAgICAnZ2V0JyxcbiAgICAgIGNhbGxiYWNrXG4gICAgKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZCT3BlbkdyYXBoT2JqZWN0IiwiIyBGZWF0dXJlIHNsaWRlciAvIExhbmRlciBmZWF0dXJlIHNlY3Rpb25zXG5cbmNsYXNzIEZlYXR1cmVTbGlkZXJcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBob21lcGFnZVNsaWRlciA9ICQoXCIuYy1mZWF0dXJlLXNsaWRlclwiKVxuICAgIGlmIGhvbWVwYWdlU2xpZGVyLmxlbmd0aCA+IDBcbiAgICAgIGhvbWVwYWdlU2xpZGVyLmZsZXhzbGlkZXJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLXNsaWRlcyAuanMtc2xpZGVzX19zbGlkZVwiXG4gICAgICAgIGFuaW1hdGlvbjogXCJzbGlkZVwiXG4gICAgICAgIHBhdXNlT25BY3Rpb246IGZhbHNlXG4gICAgICAgIHByZXZUZXh0OiBcIjxpIGNsYXNzPSdmYSc+PC9pPlwiXG4gICAgICAgIG5leHRUZXh0OiBcIjxpIGNsYXNzPSdmYSc+PC9pPlwiXG5cbiMgd2luZG93LkZlYXR1cmVTbGlkZXIgPSBGZWF0dXJlU2xpZGVyXG5tb2R1bGUuZXhwb3J0cyA9IEZlYXR1cmVTbGlkZXIiLCJjbGFzcyBHYWxsZXJ5U2VyaWVzXG5cbiAgY29uc3RydWN0b3I6IChlbCkgLT5cbiAgICBAYm9keSAgICAgICA9ICQoXCJib2R5XCIpXG4gICAgQHdyYXBwZXIgICAgPSBlbFxuICAgIEBzbGlkZXMgICAgID0gQHdyYXBwZXIuZmluZChcImZpZ3VyZVwiKVxuICAgIEBjdXJyZW50ICAgID0gMFxuICAgIEBjb3VudCAgICAgID0gQHNsaWRlcy5sZW5ndGhcbiAgICBAaW5pdEJpbmRpbmdzKClcblxuXG4gIGluaXRCaW5kaW5nczogLT5cbiAgICBjbGljayA9IGlmIEBoYXNUb3VjaCgpIHRoZW4gXCJ0b3VjaGVuZFwiIGVsc2UgXCJjbGlja1wiXG4gICAgQHRvdWNoX21vdmluZyA9IGZhbHNlXG5cbiAgICBAd3JhcHBlci5maW5kKFwiLnNlcmllcy1uYXYtbmV4dFwiKS5vbiBjbGljaywgKGUpID0+XG4gICAgICBAY3VycmVudCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCJmaWd1cmVcIikuZGF0YShcImluZGV4XCIpXG4gICAgICBAbW92ZSgxKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBmYWxzZVxuXG4gICAgJChkb2N1bWVudCkua2V5ZG93biAoZSkgPT5cbiAgICAgIGlmIGUua2V5Q29kZSA9PSAzNyB0aGVuIEBtb3ZlKC0xKVxuICAgICAgZWxzZSBpZiBlLmtleUNvZGUgPT0gMzkgdGhlbiBAbW92ZSgxKVxuXG5cbiAgbW92ZTogKGRpcikgLT5cbiAgICB0ZXh0ICA9IGlmIGRpciA+IDAgdGhlbiBcIk5leHRcIiBlbHNlIFwiUHJldlwiXG4gICAgaW5kZXggPSBAY3VycmVudCArIGRpclxuICAgIHJldHVybiB1bmxlc3MgaW5kZXggPj0gMCAmJiBpbmRleCA8IEBjb3VudFxuICAgIEBzY3JvbGxUbyhpbmRleClcbiAgICBAdHJhY2tFdmVudChcIiN7dGV4dH0gU2Nyb2xsXCIpXG5cblxuICBzY3JvbGxUbzogKGluZGV4KSAtPlxuICAgIEBjdXJyZW50ID0gaW5kZXhcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSB7XG4gICAgICBzY3JvbGxUb3A6ICQoXCIjZ2FsbGVyeS1pbWFnZS0je2luZGV4fVwiKS5vZmZzZXQoKS50b3AgLSA5M1xuICAgIH0sIDUwMFxuXG5cbiAgdHJhY2tFdmVudDogKGFjdGlvbikgLT5cbiAgICByZXR1cm4gdW5sZXNzIHdpbmRvdy5UcmFja2VyXG4gICAgVHJhY2tlci50cmFjayhcIkNsaWNrOkdhbGxlcnlTZXJpZXNcIixhY3Rpb24pXG5cbiAgaGFzVG91Y2g6IC0+XG4gICAgaWYoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IG9yICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpIG9yIHR5cGVvZiBUb3VjaEV2ZW50ID09IFwib2JqZWN0XCIpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgIHJldHVybiBmYWxzZVxuXG4jICQgLT5cbiMgICAkKFwiLmdhbGxlcnktc2VyaWVzXCIpLmVhY2ggLT4gbmV3IEdhbGxlcnlTZXJpZXMoJCh0aGlzKSlcbm1vZHVsZS5leHBvcnRzID0gR2FsbGVyeVNlcmllcyIsIkFkVW5pdElmcmFtZSA9IHJlcXVpcmUgJy4vX2NvbXBvbmVudHMuYWQtdW5pdC1pZnJhbWUuY29mZmVlJ1xuXG5jbGFzcyBHYWxsZXJ5XG4gIFNFVFRJTkdTID1cbiAgICBhZHM6XG4gICAgICByZWZyZXNoUmF0ZTogMSAjIHJlZnJlc2ggZXZlcnkgdGltZSwgZGFtbiB5b3UgIEFuZHJlYSAhXG4gICAgcGFnZXZpZXc6XG4gICAgICByZWZyZXNoUmF0ZTogMyAjIHRyYWNrIHBhZ2V2aWV3IGV2ZXJ5IHRoaXJkIGdhbGxlcnkgdmlld1xuICAgIGJyZWFrcG9pbnRzOlxuICAgICAgdGFibGV0OiA5NjBcbiAgICAgIG1vYmlsZTogNzY4XG5cbiAgY29uc3RydWN0b3I6IChlbCkgLT5cbiAgICBAYm9keSAgICAgICAgICAgICA9ICQoXCJib2R5XCIpXG4gICAgQHdyYXBwZXIgICAgICAgICAgPSBlbFxuICAgIEBvdmVybGF5ICAgICAgICAgID0gQHdyYXBwZXIuZmluZChcIi5nYWxsZXJ5LW92ZXJsYXlcIilcbiAgICBAc2xpZGVzICAgICAgICAgICA9IEBvdmVybGF5LmZpbmQoXCIuZ2FsbGVyeS1zbGlkZVwiKVxuICAgIEB2aWV3cG9ydCAgICAgICAgID0gQG92ZXJsYXkuZmluZChcIi5nYWxsZXJ5LXZpZXdwb3J0XCIpXG4gICAgQHNpZGViYXIgICAgICAgICAgPSBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktc2lkZWJhclwiKVxuICAgIEBhZEVsZW0gICAgICAgICAgID0gQG92ZXJsYXkuZmluZChcIi5qcy1nYWxsZXJ5LWFkc2xvdFwiKVxuICAgIEBhZFVuaXQgICAgICAgICAgID0gbmV3IEFkVW5pdElmcmFtZShAYWRFbGVtKVxuICAgIEBjdXJyZW50ICAgICAgICAgID0gMFxuICAgIEBjb3VudCAgICAgICAgICAgID0gQHNsaWRlcy5sZW5ndGhcbiAgICBAaW5pdEJpbmRpbmdzKClcblxuICBpbml0QmluZGluZ3M6IC0+XG4gICAgY2xpY2sgPSBpZiBAaGFzVG91Y2goKSB0aGVuIFwidG91Y2hlbmRcIiBlbHNlIFwiY2xpY2tcIlxuICAgIEB0b3VjaE1vdmluZyA9IGZhbHNlXG5cbiAgICBAd3JhcHBlci5maW5kKFwiLmdhbGxlcnktcHJlYW1ibGVcIikub24gY2xpY2ssIChlKSA9PlxuICAgICAgQGJvZHkuYWRkQ2xhc3MgXCJnYWxsZXJ5LWlzLXNob3dpbmdcIlxuICAgICAgQG92ZXJsYXkuYWRkQ2xhc3MgXCJpcy1zaG93aW5nXCJcbiAgICAgIEBsb2FkVGh1bWJzKClcbiAgICAgIEByZXNpemUoKVxuICAgICAgQGxvYWRTbGlkZSgwKVxuICAgICAgQHRyYWNrRXZlbnQoXCJHYWxsZXJ5IE9wZW5cIilcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZmFsc2VcblxuICAgIEBvdmVybGF5LmZpbmQoXCIuZ2FsbGVyeS1jbG9zZVwiKS5vbiBjbGljaywgKGUpID0+XG4gICAgICBpZiBAb3ZlcmxheS5oYXNDbGFzcyhcImlzLWZ1bGxzY3JlZW5cIilcbiAgICAgICAgQGV4aXRGdWxsc2NyZWVuKClcbiAgICAgIGVsc2VcbiAgICAgICAgQGNsb3NlR2FsbGVyeSgpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGZhbHNlXG5cbiAgICBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktZnVsbHNjcmVlblwiKS5yZW1vdmUoKSB1bmxlc3MgQGhhc0Z1bGxzY3JlZW4oKVxuICAgIEBvdmVybGF5LmZpbmQoXCIuZ2FsbGVyeS1mdWxsc2NyZWVuXCIpLm9uIGNsaWNrLCAoZSkgPT5cbiAgICAgIEB0b2dnbGVGdWxsc2NyZWVuKClcbiAgICAgIEB0cmFja0V2ZW50T25jZShcIkZ1bGxzY3JlZW5cIilcbiAgICAgIGZhbHNlXG5cbiAgICBAb3ZlcmxheS5maW5kKCcuZ2FsbGVyeS1tb2JpbGUtY2FwdGlvbi10b2dnbGUsIC5nYWxsZXJ5LW1vYmlsZS1jYXB0aW9uJykub24gY2xpY2ssIChlKSA9PlxuICAgICAgQHRvZ2dsZU1vYmlsZUNhcHRpb24oKVxuXG4gICAgQG92ZXJsYXkuZmluZChcIi5nYWxsZXJ5LXRodW1icy10b2dnbGVcIikub24gY2xpY2ssIChlKSA9PlxuICAgICAgQHRvZ2dsZVRodW1icygpXG4gICAgICBAdHJhY2tFdmVudE9uY2UoXCJUb2dnbGUgVGh1bWJzXCIpXG5cbiAgICBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktdGh1bWJzIGltZ1wiKS5vbiAndG91Y2htb3ZlJywgKGUpID0+XG4gICAgICBAdG91Y2hNb3ZpbmcgPSB0cnVlXG5cbiAgICBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktdGh1bWJzIGltZ1wiKS5vbiBjbGljaywgKGUpID0+XG4gICAgICBpZiAhQHRvdWNoTW92aW5nXG4gICAgICAgIEBsb2FkU2xpZGUoJChlLnRhcmdldCkuZGF0YShcImluZGV4XCIpKVxuICAgICAgICBAdG9nZ2xlVGh1bWJzKClcbiAgICAgICAgQHRyYWNrRXZlbnQoXCJUaHVtYlwiKVxuICAgICAgZWxzZVxuICAgICAgICBAdG91Y2hNb3ZpbmcgPSBmYWxzZVxuXG4gICAgQG92ZXJsYXkuZmluZChcIi5nYWxsZXJ5LW5leHRcIikub24gY2xpY2ssIChlKSA9PlxuICAgICAgQG1vdmUoMSlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZmFsc2VcblxuICAgIEBvdmVybGF5LmZpbmQoXCIuZ2FsbGVyeS1wcmV2XCIpLm9uIGNsaWNrLCAoZSkgPT5cbiAgICAgIEBtb3ZlKC0xKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBmYWxzZVxuXG4gICAgIyBiaW5kIGtleXByZXNzIGV2ZW50XG4gICAgJChkb2N1bWVudCkua2V5ZG93biAoZSkgPT5cbiAgICAgIHJldHVybiB1bmxlc3MgQGlzQWN0aXZlKClcbiAgICAgIGlmIGUua2V5Q29kZSA9PSAzNyB0aGVuIEBtb3ZlKC0xKSAjIGxlZnQgYXJyb3dcbiAgICAgIGVsc2UgaWYgZS5rZXlDb2RlID09IDM5IHRoZW4gQG1vdmUoMSkgIyByaWdodCBhcnJvd1xuICAgICAgZWxzZSBpZiBlLmtleUNvZGUgPT0gMjcgdGhlbiBAY2xvc2VHYWxsZXJ5KCkgIyBlc2NhcGVcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ID0+IEByZXNpemUoKVxuXG5cbiAgIyBJbWFnZSBmdW5jdGlvbnNcbiAgbW92ZTogKGRpcikgLT5cbiAgICB0ZXh0ICA9IGlmIGRpciA8IDAgdGhlbiBcIkxlZnRcIiBlbHNlIFwiUmlnaHRcIlxuICAgIGluZGV4ID0gQGN1cnJlbnQgKyBkaXJcblxuICAgICMgaW5maW5pdGUgbG9vcFxuICAgIGlmIGluZGV4ID09IEBjb3VudFxuICAgICAgaW5kZXggPSAwXG4gICAgZWxzZSBpZiBpbmRleCA9PSAtMVxuICAgICAgaW5kZXggPSBAY291bnQgLSAxXG5cbiAgICByZXR1cm4gdW5sZXNzIGluZGV4ID49IDAgJiYgaW5kZXggPCBAY291bnQgJiYgQGlzQWN0aXZlKClcbiAgICBAdHJhY2tFdmVudChcIiN7dGV4dH0gU2Nyb2xsXCIpXG4gICAgQGxvYWRTbGlkZShpbmRleClcblxuICBsb2FkU2xpZGU6IChpbmRleCkgLT5cbiAgICByZXR1cm4gdW5sZXNzIGluZGV4ID49IDAgJiYgaW5kZXggPCBAY291bnQgJiYgQGlzQWN0aXZlKClcbiAgICBpbWcgPSAkKEBzbGlkZXNbaW5kZXhdKS5maW5kKFwiaW1nXCIpXG4gICAgZGF0YSA9IGltZy5kYXRhKClcbiAgICBAbG9hZENhcHRpb24oZGF0YS5jYXB0aW9uIHx8IGltZy5hdHRyKFwiYWx0XCIpKVxuICAgIEBsb2FkTWV0YShkYXRhLm1ldGEpXG4gICAgQGxvYWRJbWFnZShpbWcpXG4gICAgQGxvYWRBdWRpbyhpbmRleClcbiAgICBAbWF5YmVSZWxvYWRBZCgpXG4gICAgQG1heWJlVHJhY2tQYWdldmlldygpXG5cbiAgICBAY3VycmVudCA9IGluZGV4XG4gICAgQHVwZGF0ZU5hdmlnYXRpb24oKVxuICAgIEB1cGRhdGVDb3VudCgpXG4gICAgQHVwZGF0ZVNsaWRlV3JhcHBlck9mZnNldCgpXG4gICAgQHVwZGF0ZVNsaWRlT2Zmc2V0KGltZylcblxuICBsb2FkQ2FwdGlvbjogKGNhcHRpb24pIC0+XG4gICAgQG92ZXJsYXkuZmluZChcIi5nYWxsZXJ5LWNhcHRpb24sIC5nYWxsZXJ5LW1vYmlsZS1jYXB0aW9uXCIpLnRleHQoY2FwdGlvbilcblxuICBsb2FkTWV0YTogKG1ldGEpIC0+XG4gICAgQG1ldGFEbCBvcj0gQHNpZGViYXIuZmluZChcIi5nYWxsZXJ5LW1ldGFcIilcbiAgICBAbWV0YURsLmh0bWwoXCJcIilcbiAgICBpZiBtZXRhICE9IGZhbHNlXG4gICAgICBmb3Iga2V5LHZhbCBvZiBtZXRhXG4gICAgICAgIGR0ID0gJChcIjxkdD48L2R0PlwiKS50ZXh0KGtleSlcbiAgICAgICAgZGQgPSAkKFwiPGRkPjwvZGQ+XCIpLnRleHQodmFsKVxuICAgICAgICBAbWV0YURsLmFwcGVuZChkdCxkZClcblxuICBsb2FkSW1hZ2U6IChpbWcpIC0+XG4gICAgc3JjID0gaWYgQG92ZXJsYXkud2lkdGgoKSA8IFNFVFRJTkdTLmJyZWFrcG9pbnRzLm1vYmlsZSB0aGVuIGltZy5kYXRhKFwic3JjLW1vYmlsZVwiKSBlbHNlIGltZy5kYXRhKFwic3JjXCIpXG4gICAgaW1nLmF0dHIoXCJzcmNcIixzcmMpXG5cbiAgbG9hZEF1ZGlvOiAoaW5kZXgpIC0+XG4gICAgQHNpZGViYXIuZmluZChcIi5nYWxsZXJ5LWF1ZGlvLXNuaXBwZXRcIikucmVtb3ZlQ2xhc3MoXCJpcy1hY3RpdmVcIilcbiAgICBAc2lkZWJhci5maW5kKFwiI2dhbGxlcnktYXVkaW8tc25pcHBldC0je2luZGV4fVwiKS5hZGRDbGFzcyhcImlzLWFjdGl2ZVwiKVxuXG4gIHVwZGF0ZUNvdW50OiAtPlxuICAgIEBvdmVybGF5LmZpbmQoXCIuZ2FsbGVyeS1jb3VudC1wb3NcIikudGV4dChAY3VycmVudCArIDEpXG5cbiAgdXBkYXRlTmF2aWdhdGlvbjogLT5cbiAgICBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktcHJldiwgLmdhbGxlcnktbmV4dFwiKS5yZW1vdmVDbGFzcyhcImlzLWhpZGRlblwiKVxuICAgIGlmIEBjdXJyZW50ID09IDAgICAgICAgICAgdGhlbiBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktcHJldlwiKS5hZGRDbGFzcyhcImlzLWhpZGRlblwiKVxuICAgIGlmIEBjdXJyZW50ID09IEBjb3VudCAtIDEgdGhlbiBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktbmV4dFwiKS5hZGRDbGFzcyhcImlzLWhpZGRlblwiKVxuXG4gIHVwZGF0ZVNsaWRlV3JhcHBlck9mZnNldDogLT5cbiAgICBAb3ZlcmxheVxuICAgICAgLmZpbmQoJy5nYWxsZXJ5LXNsaWRlcy13cmFwcGVyJylcbiAgICAgIC5jc3MoXCJsZWZ0XCIsIC0xICogQHZpZXdwb3J0V2lkdGgoKSAqIEBjdXJyZW50KVxuXG4gIHVwZGF0ZVNsaWRlT2Zmc2V0OiAoaW1hZ2UpIC0+XG4gICAgaW1hZ2Ugb3I9ICQoQHNsaWRlc1tAY3VycmVudF0pLmZpbmQoXCJpbWdcIilcbiAgICB2aWV3cG9ydEhlaWdodCA9IEB2aWV3cG9ydEhlaWdodCgpXG4gICAgdmlld3BvcnRXaWR0aCA9IEB2aWV3cG9ydFdpZHRoKClcbiAgICBoID0gaWYoaW1hZ2UuZGF0YShcImhlaWdodFwiKSA9PSAwKSB0aGVuIGltYWdlLmhlaWdodCgpIGVsc2UgaW1hZ2UuZGF0YShcImhlaWdodFwiKVxuICAgIHcgPSBpZihpbWFnZS5kYXRhKFwid2lkdGhcIikgPT0gMCkgdGhlbiBpbWFnZS53aWR0aCgpIGVsc2UgaW1hZ2UuZGF0YShcIndpZHRoXCIpXG4gICAgaWYgdyA+IHZpZXdwb3J0V2lkdGggb3IgaCA+IHZpZXdwb3J0SGVpZ2h0XG4gICAgICB3aWR0aERpZmYgPSBpZiB3ID4gdmlld3BvcnRXaWR0aCB0aGVuIHcgLSB2aWV3cG9ydFdpZHRoIGVsc2UgMFxuICAgICAgaGVpZ2h0RGlmZiA9IGlmIGggPiB2aWV3cG9ydFdpZHRoIHRoZW4gaCAtIHZpZXdwb3J0SGVpZ2h0IGVsc2UgMFxuICAgICAgbGFyZ2VzdCA9IGlmIHdpZHRoRGlmZiA+IGhlaWdodERpZmYgdGhlbiBcIndpZHRoXCIgZWxzZSBcImhlaWdodFwiXG4gICAgICBpZiBsYXJnZXN0ID09IFwid2lkdGhcIiBhbmQgKHcvaCkgPiAodmlld3BvcnRXaWR0aC92aWV3cG9ydEhlaWdodClcbiAgICAgICAgcmF0aW8gPSB2aWV3cG9ydFdpZHRoL3dcbiAgICAgICAgbmV3V2lkdGggPSB2aWV3cG9ydFdpZHRoXG4gICAgICAgIG5ld0hlaWdodCA9IGggKiByYXRpb1xuICAgICAgICBtYXJnaW5Ub3AgPSAodmlld3BvcnRIZWlnaHQgLSBuZXdIZWlnaHQpIC8gMlxuICAgICAgZWxzZVxuICAgICAgICByYXRpbyA9IHZpZXdwb3J0SGVpZ2h0L2hcbiAgICAgICAgbmV3V2lkdGggPSB3ICogcmF0aW9cbiAgICAgICAgbmV3SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHRcbiAgICAgICAgbWFyZ2luVG9wID0gKHZpZXdwb3J0SGVpZ2h0IC0gbmV3SGVpZ2h0KSAvIDJcbiAgICBlbHNlXG4gICAgICBtYXJnaW5Ub3AgPSAodmlld3BvcnRIZWlnaHQgLSBoKSAvIDJcblxuICAgIGltYWdlLmNzc1xuICAgICAgXCJoZWlnaHRcIjogbmV3SGVpZ2h0IHx8IGhcbiAgICAgIFwid2lkdGhcIjogbmV3V2lkdGggfHwgd1xuICAgICAgXCJtYXJnaW4tdG9wXCI6IG1hcmdpblRvcCB8fCAnJ1xuXG4gIHVwZGF0ZVNsaWRlRGltZW5zaW9uczogLT5cbiAgICB3aWR0aCA9IEB2aWV3cG9ydFdpZHRoKClcbiAgICBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktc2xpZGVzLXdyYXBwZXJcIikud2lkdGgod2lkdGggKiBAY291bnQpLmhlaWdodChAdmlld3BvcnRIZWlnaHQoKSlcbiAgICBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktc2xpZGVcIikud2lkdGgod2lkdGgpXG5cbiAgdG9nZ2xlVGh1bWJzOiAtPlxuICAgIEBvdmVybGF5LnRvZ2dsZUNsYXNzKFwidGh1bWJzLXNob3dpbmdcIilcbiAgICBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktdGh1bWJzXCIpLnRvZ2dsZUNsYXNzKFwiaXMtc2hvd2luZ1wiKVxuXG4gIHRvZ2dsZU1vYmlsZUNhcHRpb246IC0+XG4gICAgQG92ZXJsYXkuZmluZCgnLmdhbGxlcnktbW9iaWxlLWNhcHRpb24nKS50b2dnbGVDbGFzcyhcImlzLXNob3dpbmdcIilcblxuICBsb2FkVGh1bWJzOiAtPlxuICAgIEBvdmVybGF5LmZpbmQoXCIuZ2FsbGVyeS10aHVtYnMgaW1nXCIpLmVhY2ggLT5cbiAgICAgICQodGhpcykuYXR0cihcInNyY1wiLCQodGhpcykuZGF0YShcInNyY1wiKSlcblxuICBtYXliZVRyYWNrUGFnZXZpZXc6IC0+XG4gICAgcmV0dXJuIHVubGVzcyBAaXNBY3RpdmUoKVxuICAgIEBjdXJyZW50UGFnZXZpZXdSZWZyZXNoIG9yPSAwXG4gICAgaWYgQGN1cnJlbnRQYWdldmlld1JlZnJlc2ggJSBTRVRUSU5HUy5wYWdldmlldy5yZWZyZXNoUmF0ZSBpcyAwXG4gICAgICBAdHJhY2tQYWdldmlldygpXG5cbiAgICBAY3VycmVudFBhZ2V2aWV3UmVmcmVzaCsrXG5cbiAgbWF5YmVSZWxvYWRBZDogLT5cbiAgICByZXR1cm4gdW5sZXNzIEBpc0FjdGl2ZSgpXG4gICAgQGN1cnJlbnRBZFJlZnJlc2ggb3I9IDBcbiAgICBpZiBAY3VycmVudEFkUmVmcmVzaCAlIFNFVFRJTkdTLmFkcy5yZWZyZXNoUmF0ZSBpcyAwXG4gICAgICBpZiBAb3ZlcmxheS5oYXNDbGFzcyhcImlzLWRlc2t0b3BcIikgJiYgIUBoYXNBZGJsb2NrKClcbiAgICAgICAgQHJlbG9hZEFkKClcbiAgICAgIGVsc2VcbiAgICAgICAgQGFkVW5pdC5yZXNldCgpXG4gICAgZWxzZVxuICAgICAgQGN1cnJlbnRBZFJlZnJlc2grK1xuXG4gIHJlbG9hZEFkOiAtPlxuICAgIGdhbGxlcnlNcHVEaXNhYmxlZCA9IEBib2R5LmRhdGEoXCJnYWxsZXJ5LW1wdS1kaXNhYmxlZFwiKVxuICAgIGlmIGdhbGxlcnlNcHVEaXNhYmxlZCAhPSAxXG4gICAgICBAYWRVbml0Lm1heWJlTG9hZCgpXG4gICAgICBAdHJhY2tFdmVudChcIkFkIFJlbG9hZFwiKSAjIEpDIFJldmVydGVkXG5cbiAgcmVzaXplOiAtPlxuICAgIHJldHVybiB1bmxlc3MgQGlzQWN0aXZlKClcbiAgICBAb3ZlcmxheS5yZW1vdmVDbGFzcyhcImlzLXRhYmxldFwiKS5yZW1vdmVDbGFzcyhcImlzLW1vYmlsZVwiKS5yZW1vdmVDbGFzcyhcImlzLWRlc2t0b3BcIilcbiAgICB3aWR0aCA9IEBvdmVybGF5LndpZHRoKClcbiAgICBpZiB3aWR0aCA+PSBTRVRUSU5HUy5icmVha3BvaW50cy50YWJsZXRcbiAgICAgIEBvdmVybGF5LmFkZENsYXNzKFwiaXMtZGVza3RvcFwiKVxuICAgIGlmIHdpZHRoID49IFNFVFRJTkdTLmJyZWFrcG9pbnRzLm1vYmlsZSBhbmQgd2lkdGggPCBTRVRUSU5HUy5icmVha3BvaW50cy50YWJsZXRcbiAgICAgIEBvdmVybGF5LmFkZENsYXNzKFwiaXMtdGFibGV0XCIpXG4gICAgICBAYWRVbml0LnJlc2V0KClcbiAgICBlbHNlIGlmIHdpZHRoIDwgU0VUVElOR1MuYnJlYWtwb2ludHMubW9iaWxlXG4gICAgICBAb3ZlcmxheS5hZGRDbGFzcyhcImlzLW1vYmlsZVwiKVxuICAgICAgQGFkVW5pdC5yZXNldCgpXG4gICAgQHVwZGF0ZVNsaWRlRGltZW5zaW9ucygpXG4gICAgQHVwZGF0ZVNsaWRlV3JhcHBlck9mZnNldCgpXG4gICAgQHVwZGF0ZVNsaWRlT2Zmc2V0KClcblxuXG4gICMgRnVsbHNjcmVlbiBmdW5jdGlvbnNcbiAgdG9nZ2xlRnVsbHNjcmVlbjogLT5cbiAgICBAZnVsbFNjcmVlbkVuYWJsZWQgPz0gZmFsc2VcbiAgICBpZiBAZnVsbFNjcmVlbkVuYWJsZWRcbiAgICAgIEBleGl0RnVsbHNjcmVlbigpXG4gICAgZWxzZVxuICAgICAgQGVudGVyRnVsbHNjcmVlbigpXG5cbiAgZW50ZXJGdWxsc2NyZWVuOiAtPlxuICAgIGVsID0gQHdyYXBwZXJbMF1cbiAgICBkb2N1bWVudC5vbndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UgPSBAb25GdWxsc2NyZWVuQ2hhbmdlXG4gICAgZG9jdW1lbnQub25tb3pmdWxsc2NyZWVuY2hhbmdlID0gQG9uRnVsbHNjcmVlbkNoYW5nZVxuICAgIGRvY3VtZW50Lm9uZnVsbHNjcmVlbmNoYW5nZSA9IEBvbkZ1bGxzY3JlZW5DaGFuZ2VcbiAgICByZXR1cm4gZWwud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oRWxlbWVudC5BTExPV19LRVlCT0FSRF9JTlBVVCkgaWYgZWwud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW5cbiAgICByZXR1cm4gZWwubW96UmVxdWVzdEZ1bGxTY3JlZW4oKSBpZiBlbC5tb3pSZXF1ZXN0RnVsbFNjcmVlblxuICAgIGVsLnJlcXVlc3RGdWxsc2NyZWVuKClcblxuICBleGl0RnVsbHNjcmVlbjogLT5cbiAgICBkb2N1bWVudC5jYW5jZWxGdWxsU2NyZWVuID0gZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4gfHwgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbiB8fCBkb2N1bWVudC5leGl0RnVsbHNjcmVlblxuICAgIGRvY3VtZW50LmNhbmNlbEZ1bGxTY3JlZW4oKTtcblxuICBjbG9zZUdhbGxlcnk6IC0+XG4gICAgQGJvZHkucmVtb3ZlQ2xhc3MgXCJnYWxsZXJ5LWlzLXNob3dpbmdcIlxuICAgIEBvdmVybGF5LnJlbW92ZUNsYXNzIFwiaXMtc2hvd2luZ1wiXG4gICAgQGFkVW5pdC5yZXNldCgpXG4gICAgQHRyYWNrRXZlbnQoXCJHYWxsZXJ5IENsb3NlXCIpXG5cbiAgb25GdWxsc2NyZWVuQ2hhbmdlOiA9PlxuICAgIEBmdWxsU2NyZWVuRW5hYmxlZCA9ICFAZnVsbFNjcmVlbkVuYWJsZWRcbiAgICB0aW1lID0gaWYgQGZ1bGxTY3JlZW5FbmFibGVkIHRoZW4gODAwIGVsc2UgMzAwXG4gICAgc2V0VGltZW91dCA9PlxuICAgICAgQG92ZXJsYXkudG9nZ2xlQ2xhc3MoXCJpcy1mdWxsc2NyZWVuXCIpXG4gICAgICBAcmVzaXplKClcbiAgICAsIHRpbWVcblxuXG4gICMgVXRpbGl0eSBmdW5jdGlvbnNcbiAgaXNBY3RpdmU6IC0+XG4gICAgQG92ZXJsYXkuaGFzQ2xhc3MoXCJpcy1zaG93aW5nXCIpXG5cbiAgdmlld3BvcnRXaWR0aDogLT5cbiAgICBAb3ZlcmxheS5maW5kKFwiLmdhbGxlcnktdmlld3BvcnRcIikud2lkdGgoKVxuXG4gIHZpZXdwb3J0SGVpZ2h0OiAtPlxuICAgIEBvdmVybGF5LmZpbmQoXCIuZ2FsbGVyeS12aWV3cG9ydFwiKS5oZWlnaHQoKVxuXG4gIHRyYWNrRXZlbnQ6IChhY3Rpb24pIC0+XG4gICAgcmV0dXJuIHVubGVzcyB3aW5kb3cuVHJhY2tlclxuICAgIFRyYWNrZXIudHJhY2soXCJDbGljazpHYWxsZXJ5XCIsYWN0aW9uKVxuXG4gIHRyYWNrRXZlbnRPbmNlOiAoYWN0aW9uKSAtPlxuICAgIEBhbHJlYWR5VHJhY2tlZCBvcj0ge31cbiAgICByZXR1cm4gaWYgQGFscmVhZHlUcmFja2VkW2FjdGlvbl1cbiAgICBAdHJhY2tFdmVudChhY3Rpb24pXG4gICAgQGFscmVhZHlUcmFja2VkW2FjdGlvbl0gPSB0cnVlXG5cbiAgdHJhY2tQYWdldmlldzogLT5cbiAgICByZXR1cm4gdW5sZXNzIHdpbmRvdy5UcmFja2VyXG4gICAgVHJhY2tlci50cmFja1BhZ2V2aWV3KGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgXCIjZ2FsbGVyeS1yZWxvYWRcIiApXG5cbiAgaGFzQWRibG9jazogLT5cbiAgICAkKFwiYm9keVwiKS5oYXNDbGFzcyhcImFkYmxvY2stYWN0aXZlXCIpXG5cbiAgaGFzVG91Y2g6IC0+XG4gICAgaWYoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IG9yICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpIG9yIHR5cGVvZiBUb3VjaEV2ZW50ID09IFwib2JqZWN0XCIpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gIGhhc0Z1bGxzY3JlZW46IC0+XG4gICAgZm9yIHByZWZpeCBpbiBbJ3dlYmtpdCcsJ21veicsJ28nLCdtcyddXG4gICAgICByZXR1cm4gdHJ1ZSBpZiBkb2N1bWVudFtcIiN7cHJlZml4fUNhbmNlbEZ1bGxTY3JlZW5cIl1cbiAgICByZXR1cm4gISFkb2N1bWVudFsnY2FuY2VsRnVsbFNjcmVlbiddIHx8IGZhbHNlXG5cbiQgLT5cbiAgJCh3aW5kb3cpLm9uIFwiaW5pdEdhbGxlcnlcIiwgLT5cbiAgICAkKFwiLmdhbGxlcnlcIikuZWFjaCAtPiBuZXcgR2FsbGVyeSgkKHRoaXMpKVxuICAjICQod2luZG93KS50cmlnZ2VyKFwiaW5pdEdhbGxlcnlcIilcblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsZXJ5IiwiIyBHZW9JUCBEZXRlY3Rpb25cbiMgVXNlIEFKQVggdG8gY2hlY2sgdXNlcnMgR2VvSVAgdG8gYXZvaWQgaXNzdWVzIGNhdXNlZFxuIyBieSBhZ3Jlc3NpdmUgY2FjaGluZ1xuXG4jIFRoaXMgc2hvdWxkIGJlIHJlZmFjdG9yZWQgdG8gdXNlIF9jb21wb25lbnRzLmFsZXJ0LmNvZmZlZVxuXG5kb2NDb29raWVzID0gcmVxdWlyZSAnbW96aWxsYS1kb2MtY29va2llcydcblxuY2xhc3MgR2VvSVBcblxuICBjb25zdHJ1Y3RvcjogKGVsKSAtPlxuICAgIEBjb29raWVOYW1lID0gXCJjb3Jlc2l0ZXNfbG9jYWxlX2RpYWxvZ19oaWRkZW5cIlxuICAgIEBjb29raWVEYXlzID0gMzBcbiAgICByZXR1cm4gaWYgQGNvb2tpZUV4aXN0cygpXG4gICAgQGJvZHkgPSAkKFwiYm9keVwiKVxuICAgIEBnZXREaWFsb2dDb250ZW50KClcbiAgICBAY2xpY2sgPSBAY2xpY2tUb3VjaCgpXG5cblxuICBnZXREaWFsb2dDb250ZW50OiAtPlxuICAgICQuZ2V0IFwiL3dwLWdlb2lwLWRldGVjdC5waHBcIiwgKGRhdGEpID0+XG4gICAgICBAcmVuZGVyRGlhbG9nKGRhdGEpXG5cblxuICByZW5kZXJEaWFsb2c6IChkYXRhKSAtPlxuICAgIEBib2R5LmFwcGVuZChkYXRhKVxuICAgIEBvdmVybGF5ID0gJChcIi5maXhlZC1vdmVybGF5XCIpXG5cbiAgICAkKFwiLmRpc21pc3MtbG9jYWxlXCIpLm9uIEBjbGljaywgKGUpID0+XG4gICAgICBAdHJhY2tFdmVudChcIkRpc21pc3MgZGlhbG9nXCIpXG4gICAgICBAY2xvc2VEaWFsb2coZSlcblxuICBjbG9zZURpYWxvZzogKGUpIC0+XG4gICAgQG92ZXJsYXkucmVtb3ZlQ2xhc3MgXCJpcy1zaG93aW5nXCJcbiAgICBAcmVnaXN0ZXJDb29raWUoKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGZhbHNlXG5cbiAgcmVnaXN0ZXJDb29raWU6IC0+XG4gICAgcmV0dXJuIHVubGVzcyBAY29va2llTmFtZT9cbiAgICBleHBpcmVzID0gbmV3IERhdGUoKVxuICAgIGV4cGlyZXMuc2V0RGF0ZShleHBpcmVzLmdldERhdGUoKSArIEBjb29raWVEYXlzKVxuICAgIGRvY0Nvb2tpZXMuc2V0SXRlbShAY29va2llTmFtZSwgXCJ0cnVlXCIsIGV4cGlyZXMsICcvJylcblxuICBjb29raWVFeGlzdHM6IC0+XG4gICAgcmV0dXJuIGZhbHNlIHVubGVzcyBAY29va2llTmFtZT9cbiAgICBpZiBkb2NDb29raWVzLmdldEl0ZW0oQGNvb2tpZU5hbWUpP1xuICAgICAgdHJ1ZVxuICAgIGVsc2VcbiAgICAgIGZhbHNlXG5cbiAgIyBVdGlsaXR5IGZ1bmN0aW9uc1xuICBjbGlja1RvdWNoOiAtPlxuICAgIGlmKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyBvciAod2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSBvciB0eXBlb2YgVG91Y2hFdmVudCA9PSBcIm9iamVjdFwiKVxuICAgICAgcmV0dXJuIFwidG91Y2hlbmRcIlxuICAgIGVsc2VcbiAgICAgIHJldHVybiBcImNsaWNrXCJcblxuXG4gIHRyYWNrRXZlbnQ6IChhY3Rpb24pIC0+XG4gICAgcmV0dXJuIHVubGVzcyB3aW5kb3cuVHJhY2tlclxuICAgIFRyYWNrZXIudHJhY2soXCJDbGljazpMb2NhbGVEaWFsb2dcIiwgYWN0aW9uKVxuXG4jIHdpbmRvdy5HZW9JUCA9IEdlb0lQXG5tb2R1bGUuZXhwb3J0cyA9IEdlb0lQXG5cbiMgJCAtPlxuIyAgIGdlb0lQID0gbmV3IEdlb0lQKClcblxuIiwiTG9nZ2VyID0gcmVxdWlyZSAnanMtbG9nZ2VyJ1xuXG5jbGFzcyBHb29nbGVBbmFseXRpY3NUcmFja2VyXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQHRyYWNrRXZlbnRzKClcbiAgICBAdHJhY2tQYWdldmlld3MoKVxuICAgIEB0cmFja1NvY2lhbCgpXG4gICAgQGxvZ2dlciA9IExvZ2dlci5nZXQoXCJHb29nbGVBbmFseXRpY3NUcmFja2VyXCIpXG4gICAgQGxvZyhcIkdBIEluaXRpYWxpc2VkXCIpXG5cbiAgdHJhY2tFdmVudHM6IC0+XG4gICAgJCh3aW5kb3cpLm9uIFwiRk06b25UcmFja0V2ZW50XCIsIChlLGRhdGEpPT5cbiAgICAgIEBsb2cgJ0ZNOm9uVHJhY2tFdmVudCcsIGRhdGFcbiAgICAgIHZhbHVlID0gMFxuICAgICAgaWYgQHVuaXZlcnNhbEFuYWx5dGljcygpXG4gICAgICAgIG5vbkludGVyYWN0aW9uID0gXCIxXCJcbiAgICAgICAgIyBVc2UgR29vZ2xlIFVuaXZlcnNhbCBBbmFseXRpY3NcbiAgICAgICAgZ2EgXCJzaXRlLnNlbmRcIixcbiAgICAgICAgICBoaXRUeXBlOiBcImV2ZW50XCIgIyBSZXF1aXJlZC5cbiAgICAgICAgICBldmVudENhdGVnb3J5OiBkYXRhLmNhdGVnb3J5ICMgUmVxdWlyZWQuXG4gICAgICAgICAgZXZlbnRBY3Rpb246IGRhdGEuYWN0aW9uICMgUmVxdWlyZWQuXG4gICAgICAgICAgZXZlbnRMYWJlbDogZGF0YS5sYWJlbFxuICAgICAgICAgIGV2ZW50VmFsdWU6IHZhbHVlXG4gICAgICAgICAgbm9uSW50ZXJhY3Rpb246IG5vbkludGVyYWN0aW9uXG4gICAgICAgICAgaGl0Q2FsbGJhY2s6IGRhdGEuY2FsbGJhY2tcblxuICAgICAgZWxzZVxuICAgICAgICBpZiBAY2xhc3NpY0FuYWx5dGljcygpXG4gICAgICAgICAgIyBVc2UgR29vZ2xlIENsYXNzaWMgQW5hbHl0aWNzXG4gICAgICAgICAgbm9uSW50ZXJhY3Rpb24gPSB0cnVlXG4gICAgICAgICAgX2dhcS5wdXNoIFtcInNpdGUuX3RyYWNrRXZlbnRcIiwgZGF0YS5jYXRlZ29yeSwgZGF0YS5hY3Rpb24sIGRhdGEubGFiZWwsIGRhdGEudmFsdWUsIG5vbkludGVyYWN0aW9uXVxuXG4gICAgICAgIGRhdGEuY2FsbGJhY2soKSBpZiBkYXRhLmNhbGxiYWNrXG5cbiAgdHJhY2tQYWdldmlld3M6IC0+XG4gICAgJCh3aW5kb3cpLm9uIFwiRk06b25UcmFja1BhZ2V2aWV3XCIsIChlLGRhdGEpPT5cbiAgICAgIEBsb2cgJ0ZNOm9uVHJhY2tQYWdldmlldycsIGRhdGFcbiAgICAgIGlmIEB1bml2ZXJzYWxBbmFseXRpY3MoKVxuICAgICAgICBnYSBcInNpdGUuc2VuZFwiLFxuICAgICAgICAgIGhpdFR5cGU6IFwicGFnZXZpZXdcIlxuICAgICAgICAgIHBhZ2U6IGRhdGEudXJsXG5cbiAgICAgIGVsc2UgaWYgQGNsYXNzaWNBbmFseXRpY3MoKVxuICAgICAgICBfZ2FxLnB1c2ggW1wic2l0ZS5fdHJhY2tQYWdldmlld1wiLCBkYXRhLnVybF1cblxuICB0cmFja1NvY2lhbDogLT5cbiAgICAkKHdpbmRvdykub24gXCJGTTpvblRyYWNrU29jaWFsXCIsIChlLGRhdGEpPT5cbiAgICAgIEBsb2cgJ0ZNOm9uVHJhY2tTb2NpYWwnLCBkYXRhXG4gICAgICBpZiBAdW5pdmVyc2FsQW5hbHl0aWNzKClcbiAgICAgICAgZ2EgXCJzaXRlLnNlbmRcIixcbiAgICAgICAgICBoaXRUeXBlOiBcInNvY2lhbFwiXG4gICAgICAgICAgc29jaWFsTmV0d29yazogZGF0YS5uZXR3b3JrXG4gICAgICAgICAgc29jaWFsQWN0aW9uOiBkYXRhLmFjdGlvblxuICAgICAgICAgIHNvY2lhbFRhcmdldDogZGF0YS51cmxcblxuICAgICAgZWxzZSBpZiBAY2xhc3NpY0FuYWx5dGljcygpXG4gICAgICAgIF9nYXEucHVzaCBbXG4gICAgICAgICAgXCJzaXRlLl90cmFja1NvY2lhbFwiLCBkYXRhLm5ldHdvcmssIGRhdGEuYWN0aW9uLCBkYXRhLnVybF1cblxuXG4gIHVuaXZlcnNhbEFuYWx5dGljczogLT5cbiAgICB3aW5kb3cuZ2E/XG5cbiAgY2xhc3NpY0FuYWx5dGljczogLT5cbiAgICB3aW5kb3cuX2dhcT9cblxuICBsb2c6IChhY3Rpb24sIG1zZyktPlxuICAgIEBsb2dnZXIuaW5mbyhhY3Rpb24sIG1zZylcblxuXG4jIHdpbmRvdy5nb29nbGVBbmFseXRpY3NUcmFja2VyID0gbmV3IEdvb2dsZUFuYWx5dGljc1RyYWNrZXIoKVxubW9kdWxlLmV4cG9ydHMgPSBHb29nbGVBbmFseXRpY3NUcmFja2VyXG4iLCIjIE5hdmlnYXRpb24gU2VhcmNoXG5jbGFzcyBIZWFkZXJTZWFyY2hcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBjb250ZW50ID0gJChcIi5oZWFkZXItc2VhcmNoLWJhclwiKVxuICAgIGV2ZW50TmFtZSA9IChpZiB0eXBlb2YgZG9jdW1lbnQub250b3VjaGVuZCBpcyBcInVuZGVmaW5lZFwiIHRoZW4gXCJjbGlja1wiKVxuXG4gICAgJChkb2N1bWVudCkub24gZXZlbnROYW1lLCBcIi5zZWFyY2gtZm9ybS10b2dnbGVcIiwgLT5cbiAgICAgIGNvbnRlbnQuZmluZChcIi5zZWFyY2gtZm9ybS1pbnB1dFwiKS5mb2N1cygpICBpZiBjb250ZW50Lmhhc0NsYXNzKFwib3BlblwiKVxuICAgICAgZmFsc2VcblxuIyB3aW5kb3cuSGVhZGVyU2VhcmNoID0gSGVhZGVyU2VhcmNoXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlclNlYXJjaCIsIkhlYWRyb29tID0gcmVxdWlyZSAnaGVhZHJvb20uanMnXG5cbmNsYXNzIEhlYWRyb29tTWVudVxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIGlmIEBpc0VuYWJsZWQoKVxuICAgICAgQHNldHVwSGVhZHJvb20oKVxuXG4gIGlzRW5hYmxlZDogLT5cbiAgICByZXR1cm4gZmFsc2UgaWYgdHlwZW9mIEhlYWRyb29tIGlzIG5vdCAnZnVuY3Rpb24nXG4gICAgcmV0dXJuIGZhbHNlIGlmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZHJvb20tZW5hYmxlZFwiKSBpcyBudWxsXG4gICAgdHJ1ZVxuXG4gIHNldHVwSGVhZHJvb206IC0+XG4gICAgQGhlYWRlck5hdigpXG4gICAgQGJvZHlTa2luKClcbiAgICBAc2hhcmVCYXIoKVxuXG4gIGhlYWRlck5hdjogLT5cbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZHJvb20uaGVhZHJvb20tZW5hYmxlZFwiKVxuICAgIGlmIGVsICE9IG51bGxcbiAgICAgIGhlYWRyb29tID0gbmV3IEhlYWRyb29tIGVsLFxuICAgICAgICBvZmZzZXQ6ICAgICAgIDg1XG4gICAgICAgIHRvbGVyYW5jZTpcbiAgICAgICAgICB1cDogICAgICAgICAxMDBcbiAgICAgICAgICBkb3duIDogICAgICAwXG4gICAgICAgIGNsYXNzZXM6XG4gICAgICAgICAgaW5pdGlhbDogICAgXCJhbmltYXRlZFwiXG4gICAgICAgICAgcGlubmVkOiAgICAgXCJzbGlkZUluRG93blwiXG4gICAgICAgICAgdW5waW5uZWQ6ICAgXCJzbGlkZU91dFVwXCJcbiAgICAgIGhlYWRyb29tLmluaXQoKVxuXG4gIGJvZHlTa2luOiAtPlxuICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICBpZiBlbCAhPSBudWxsXG4gICAgICBoZWFkcm9vbSA9IG5ldyBIZWFkcm9vbSBlbCxcbiAgICAgICAgb2Zmc2V0OiAgICAgICA4NVxuICAgICAgICB0b2xlcmFuY2U6XG4gICAgICAgICAgdXA6ICAgICAgICAgMTAwXG4gICAgICAgICAgZG93biA6ICAgICAgMFxuICAgICAgaGVhZHJvb20uaW5pdCgpXG5cbiAgc2hhcmVCYXI6IC0+XG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRyb29tIC5oZWFkZXItc2hhcmVcIilcbiAgICBpZiBlbCAhPSBudWxsXG4gICAgICBoZWFkcm9vbSA9IG5ldyBIZWFkcm9vbSBlbCxcbiAgICAgICAgb2Zmc2V0OiAgICAgNjUwXG4gICAgICAgIHRvbGVyYW5jZTogIDBcbiAgICAgIGhlYWRyb29tLmluaXQoKVxuXG5cbiMgd2luZG93LkhlYWRyb29tTWVudSA9IEhlYWRyb29tTWVudVxubW9kdWxlLmV4cG9ydHMgPSBIZWFkcm9vbU1lbnUiLCJjbGFzcyBMaWdodGJveFxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAaW5pdEpRdWVyeUV4dGVuc2lvbigpXG4gICAgJChkb2N1bWVudCkucmVhZHkgLT5cbiAgICAgICQoXCIuc2luZ2xlLWNvbnRlbnQsIC5nYWxsZXJ5LXNlcmllcywgLmxvbmdmb3JtLXNlY3Rpb24gcCwgLmxpZ2h0Ym94LCAubG9uZ2Zvcm0tc2VjdGlvbi1jb250ZW50LXdpdGgtaW1hZ2UsIC5jLWFydGljbGUtY29weVwiKS5maW5kKFwiYVtocmVmJD1cXFwiLmdpZlxcXCJdLCBhW2hyZWYkPVxcXCIuanBnXFxcIl0sIGFbaHJlZiQ9XFxcIi5wbmdcXFwiXSwgYVtocmVmJD1cXFwiLmJtcFxcXCJdLGFbaHJlZiQ9XFxcIi5qcGVnXFxcIl1cIikuaGFzKFwiaW1nXCIpLmNzcygnY3Vyc29yJywgJy13ZWJraXQtem9vbS1pbicpLmxpZ2h0Ym94KClcblxuICBpbml0SlF1ZXJ5RXh0ZW5zaW9uOiAtPlxuICAgIGpRdWVyeS5mbi5leHRlbmRcbiAgICAgIGxpZ2h0Ym94OiAob3B0aW9ucykgLT5cbiAgICAgICAgbGlnaHRib3ggICAgICAgID0gZmFsc2VcbiAgICAgICAgaW1hZ2VzICAgICAgICAgID0gW11cbiAgICAgICAgc2V0dGluZ3MgICAgICAgID0ge31cbiAgICAgICAgY3VycmVudF9pbWFnZSAgID0gMFxuXG4gICAgICAgIGRlZmF1bHRzID1cbiAgICAgICAgICBhZHM6XG4gICAgICAgICAgICByZWZyZXNoX3JhdGU6IDEgIyByZWZyZXNoIGV2ZXJ5IHRpbWUsIGRhbW4geW91IEFuZHJlYSFcbiAgICAgICAgICAgIGN1cnJlbnQ6IDBcbiAgICAgICAgICBwYWdldmlld3M6XG4gICAgICAgICAgICByZWZyZXNoX3JhdGU6IDNcbiAgICAgICAgICAgIGN1cnJlbnQ6IDBcbiAgICAgICAgICBicmVha3BvaW50czpcbiAgICAgICAgICAgIHRhYmxldDogOTYwXG4gICAgICAgICAgICBtb2JpbGU6IDc2OFxuICAgICAgICAgIHRyYWNraW5nOlxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiTGlnaHRib3hcIlxuICAgICAgICAgICAgdHJhY2tlZDoge31cblxuICAgICAgICBzZXR0aW5ncyA9IGpRdWVyeS5leHRlbmQgZGVmYXVsdHMsIG9wdGlvbnNcblxuICAgICAgICBsb2cgPSAobXNnKSAtPiBjb25zb2xlPy5sb2cgbXNnXG5cbiAgICAgICAgcmVmcmVzaEFkc2xvdCA9IC0+XG4gICAgICAgICAgIyBnYWxsZXJ5X21wdV9kaXNhYmxlZCA9ICQoJ2JvZHknKS5kYXRhKFwiZ2FsbGVyeS1tcHUtZGlzYWJsZWRcIilcbiAgICAgICAgICBnYWxsZXJ5X21wdV9kaXNhYmxlZCA9IDFcbiAgICAgICAgICBpZiBzZXR0aW5ncy5hZHMuY3VycmVudCAlIHNldHRpbmdzLmFkcy5yZWZyZXNoX3JhdGUgPT0gMFxuICAgICAgICAgICAgaWYgbGlnaHRib3guaGFzQ2xhc3MoXCJpcy1kZXNrdG9wXCIpICYmIGdhbGxlcnlfbXB1X2Rpc2FibGVkICE9IDFcbiAgICAgICAgICAgICAgbGlnaHRib3guZmluZChcIi5hZHNsb3RcIikuaHRtbChcIlwiKS5hcHBlbmQgYWRzbG90TWFya3VwKClcbiAgICAgICAgICAgICAgdHJhY2tFdmVudChcIkFkIFJlbG9hZFwiKSAjIEpDIFJFVkVSVEVEIGFzIHJlcXVlc3RlZCBieSBldmVyeW9uZSBlbHNlXG5cbiAgICAgICAgICAgIHNldHRpbmdzLmFkcy5jdXJyZW50KytcblxuICAgICAgICBtYXliZVRyYWNrUGFnZXZpZXcgPSAtPlxuICAgICAgICAgIGlmIHNldHRpbmdzLnBhZ2V2aWV3cy5jdXJyZW50ICUgc2V0dGluZ3MucGFnZXZpZXdzLnJlZnJlc2hfcmF0ZSA9PSAwXG4gICAgICAgICAgICB0cmFja1BhZ2V2aWV3KClcbiAgICAgICAgICBzZXR0aW5ncy5wYWdldmlld3MuY3VycmVudCsrXG5cbiAgICAgICAgcmVtb3ZlQWQgPSAtPlxuICAgICAgICAgICQoXCIubGlnaHRib3gtYWRzbG90XCIpLmh0bWwoXCJcIilcblxuICAgICAgICBhZHNsb3RNYXJrdXAgPSAtPlxuICAgICAgICAgICAgIyBhZF9pZCAgPSAkKCdib2R5JykuZGF0YShcImdhbGxlcnktYWQtaWRcIilcbiAgICAgICAgICAgICMgYWRfa2V5d29yZHMgPSAkKCdib2R5JykuZGF0YShcImdhbGxlcnktYWQta2V5d29yZHNcIilcbiAgICAgICAgICAgICMgYWRfc2l6ZV9jb2RlID0gMTcwXG4gICAgICAgICAgICAjIGFkX25ldHdvcmtfaWQgPSAnMTI5OS4xJ1xuICAgICAgICAgICAgIyBpZnJhbWUgPSAkKFwiPGlmcmFtZT48L2lmcmFtZT5cIikuYXR0cihcbiAgICAgICAgICAgICMgICB3aWR0aDogXCIzMDBcIlxuICAgICAgICAgICAgIyAgIGhlaWdodDogXCIyNTBcIlxuICAgICAgICAgICAgIyAgIHNjcm9sbGluZzogXCJOb1wiXG4gICAgICAgICAgICAjICAgZnJhbWVib3JkZXI6IDBcbiAgICAgICAgICAgICMgICBtYXJnaW5oZWlnaHQ6IDBcbiAgICAgICAgICAgICMgICBtYXJnaW53aWR0aDogMFxuICAgICAgICAgICAgIyAgIHNyYzogXCJodHRwOi8vYWRzZXJ2ZXIuYWR0ZWNoLmRlL2FkaWZyYW1lLzMuMC8je2FkX25ldHdvcmtfaWR9LyN7YWRfaWR9LzAvI3thZF9zaXplX2NvZGV9L0FEVEVDSDt0YXJnZXQ9X2JsYW5rO2tleT0je2FkX2tleXdvcmRzLmpvaW4oJysnKX1cIlxuICAgICAgICAgICAgIyApXG4gICAgICAgICAgICAjIGlmcmFtZVxuXG4gICAgICAgIGluamVjdE1hcmt1cCA9IC0+XG4gICAgICAgICAgbGlnaHRib3ggID0gJChcIjxkaXYgY2xhc3M9J2dhbGxlcnktb3ZlcmxheSBpcy1saWdodGJveCc+PC9kaXY+XCIpXG4gICAgICAgICAgY29udGFpbmVyID0gJChcIjxkaXYgY2xhc3M9J2dhbGxlcnktY29udGFpbmVyJz48L2Rpdj5cIilcbiAgICAgICAgICB2aWV3cG9ydCAgPSAkKFwiPGRpdiBjbGFzcz0nZ2FsbGVyeS12aWV3cG9ydCc+PC9kaXY+XCIpXG4gICAgICAgICAgaW1hZ2UgICAgID0gJChcIjxpbWcgY2xhc3M9J2xpZ2h0Ym94LWltYWdlJyAvPlwiKVxuICAgICAgICAgIHNpZGViYXIgICA9ICQoXCI8ZGl2IGNsYXNzPSdnYWxsZXJ5LXNpZGViYXInPjwvZGl2PlwiKVxuICAgICAgICAgIGNsb3NlICAgICA9ICQoXCI8YnV0dG9uIGNsYXNzPSdnYWxsZXJ5LW5hdiBnYWxsZXJ5LWNsb3NlJz48aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT48L2J1dHRvbj5cIilcbiAgICAgICAgICBuZXh0ICAgICAgPSAkKFwiPGJ1dHRvbiBocmVmPScjJyBjbGFzcz0nZ2FsbGVyeS1uYXYgZ2FsbGVyeS1uZXh0Jz48aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1yaWdodFxcXCI+PC9pPjwvYnV0dG9uPlwiKVxuICAgICAgICAgIHByZXYgICAgICA9ICQoXCI8YnV0dG9uIGhyZWY9JyMnIGNsYXNzPSdnYWxsZXJ5LW5hdiBnYWxsZXJ5LXByZXYnPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnRcXFwiPjwvaT48L2J1dHRvbj5cIilcbiAgICAgICAgICBjYXB0aW9uICAgPSAkKFwiPHAgY2xhc3M9J2dhbGxlcnktY2FwdGlvbic+Y2FwdGlvbjwvcD5cIilcbiAgICAgICAgICBjb3VudCAgICAgPSAkKFwiPHAgY2xhc3M9J2xpZ2h0Ym94LWNvdW50Jz4vPC9wPlwiKVxuICAgICAgICAgIGN1cnJlbnQgICA9ICQoXCI8c3BhbiBjbGFzcz0nbGlnaHRib3gtY291bnQtY3VycmVudCc+MDwvc3Bhbj5cIilcbiAgICAgICAgICB0b3RhbCAgICAgPSAkKFwiPHNwYW4gY2xhc3M9J2xpZ2h0Ym94LWNvdW50LXRvdGFsJz4wPC9zcGFuPlwiKVxuICAgICAgICAgIGFkc2xvdCAgICA9ICQoXCI8ZGl2IGNsYXNzPSdhZHNsb3QgZ2FsbGVyeS1hZHNsb3QnPjwvZGl2PlwiKVxuXG4gICAgICAgICAgY2xpY2tfZXZlbnQgPSBpZiBoYXNUb3VjaCgpIHRoZW4gXCJ0b3VjaHN0YXJ0XCIgZWxzZSBcImNsaWNrXCJcblxuICAgICAgICAgIGNsb3NlLm9uIGNsaWNrX2V2ZW50LCAoZSkgLT5cbiAgICAgICAgICAgIGNsb3NlR2FsbGVyeSgpXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGZhbHNlXG5cbiAgICAgICAgICBuZXh0Lm9uIGNsaWNrX2V2ZW50LCAtPlxuICAgICAgICAgICAgbW92ZSgxKVxuXG4gICAgICAgICAgcHJldi5vbiBjbGlja19ldmVudCwgLT5cbiAgICAgICAgICAgIG1vdmUoLTEpXG5cbiAgICAgICAgICAjIGJpbmQga2V5cHJlc3MgZXZlbnRcbiAgICAgICAgICAkKGRvY3VtZW50KS5rZXlkb3duIChlKSA9PlxuICAgICAgICAgICAgcmV0dXJuIHVubGVzcyBpc0FjdGl2ZSgpXG4gICAgICAgICAgICBpZiBlLmtleUNvZGUgPT0gMzcgdGhlbiBtb3ZlKC0xKSAjIGxlZnQgYXJyb3dcbiAgICAgICAgICAgIGVsc2UgaWYgZS5rZXlDb2RlID09IDM5IHRoZW4gbW92ZSgxKSAjIHJpZ2h0IGFycm93XG4gICAgICAgICAgICBlbHNlIGlmIGUua2V5Q29kZSA9PSAyNyB0aGVuIGNsb3NlR2FsbGVyeSgpICMgZXNjYXBlXG5cbiAgICAgICAgICB0b3RhbC50ZXh0IGltYWdlcy5sZW5ndGhcblxuICAgICAgICAgIGNvdW50LnByZXBlbmQgY3VycmVudFxuICAgICAgICAgIGNvdW50LmFwcGVuZCB0b3RhbFxuICAgICAgICAgIHNpZGViYXIuYXBwZW5kIGNhcHRpb24sIGFkc2xvdCwgY291bnRcbiAgICAgICAgICB2aWV3cG9ydC5hcHBlbmQgaW1hZ2VcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kIHZpZXdwb3J0XG4gICAgICAgICAgbGlnaHRib3guYXBwZW5kIGNvbnRhaW5lciwgc2lkZWJhciwgY2xvc2VcblxuICAgICAgICAgIGlmIGltYWdlcy5sZW5ndGggPiAxXG4gICAgICAgICAgICBsaWdodGJveC5hcHBlbmQgcHJldiwgbmV4dFxuXG4gICAgICAgICAgJChcImJvZHlcIikuYXBwZW5kIGxpZ2h0Ym94XG5cbiAgICAgICAgbW92ZSA9IChkaXIpIC0+XG4gICAgICAgICAgaW5kZXggPSBjdXJyZW50X2ltYWdlICsgZGlyXG5cbiAgICAgICAgICAjIGluZmluaXRlIGxvb3BcbiAgICAgICAgICBpZiBpbmRleCA9PSBpbWFnZXMubGVuZ3RoXG4gICAgICAgICAgICBpbmRleCA9IDBcbiAgICAgICAgICBlbHNlIGlmIGluZGV4ID09IC0xXG4gICAgICAgICAgICBpbmRleCA9IGltYWdlcy5sZW5ndGggLSAxXG5cbiAgICAgICAgICByZXR1cm4gdW5sZXNzIGluZGV4ID49IDAgJiYgaW5kZXggPCBpbWFnZXMubGVuZ3RoICYmIGlzQWN0aXZlKClcbiAgICAgICAgICB0ZXh0ID0gaWYgZGlyIDwgMCB0aGVuIFwiTGVmdFwiIGVsc2UgXCJSaWdodFwiXG4gICAgICAgICAgdHJhY2tFdmVudChcIiN7dGV4dH0gU2Nyb2xsXCIpXG4gICAgICAgICAgZGlzcGxheUltYWdlRnJvbUluZGV4KGluZGV4KVxuXG4gICAgICAgIGRpc3BsYXlJbWFnZUZyb21JbmRleCA9IChpbmRleCkgLT5cbiAgICAgICAgICBjdXJyZW50X2ltYWdlID0gaW5kZXhcbiAgICAgICAgICBkaXNwbGF5SW1hZ2UgaW1hZ2VzW2luZGV4XVxuXG4gICAgICAgIGRpc3BsYXlJbWFnZUZyb21VcmwgPSAodXJsKSAtPlxuICAgICAgICAgICQuZWFjaCBpbWFnZXMsIChpLCB2YWx1ZSkgLT5cbiAgICAgICAgICAgIGlmIHZhbHVlLnNyYyBpcyB1cmxcbiAgICAgICAgICAgICAgY3VycmVudF9pbWFnZSA9IGlcbiAgICAgICAgICAgICAgZGlzcGxheUltYWdlKHZhbHVlKVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICBkaXNwbGF5SW1hZ2UgPSAoaW1hZ2UpIC0+XG4gICAgICAgICAgbGlnaHRib3guYWRkQ2xhc3MgXCJpcy1zaG93aW5nXCJcbiAgICAgICAgICBlbGVtID0gbGlnaHRib3guZmluZChcIi5saWdodGJveC1pbWFnZVwiKVxuICAgICAgICAgIGVsZW0uYXR0cihcInNyY1wiLCBpbWFnZS5zcmMpXG4gICAgICAgICAgbGlnaHRib3guZmluZChcIi5nYWxsZXJ5LWNhcHRpb25cIikudGV4dChpbWFnZS5jYXB0aW9uKVxuICAgICAgICAgIGxpZ2h0Ym94LmZpbmQoXCIubGlnaHRib3gtY291bnQtY3VycmVudFwiKS50ZXh0KGN1cnJlbnRfaW1hZ2UrMSlcbiAgICAgICAgICByZWZyZXNoQWRzbG90KClcbiAgICAgICAgICBtYXliZVRyYWNrUGFnZXZpZXcoKVxuXG4gICAgICAgIGlzQWN0aXZlID0gLT5cbiAgICAgICAgICBsaWdodGJveC5oYXNDbGFzcyhcImlzLXNob3dpbmdcIilcblxuICAgICAgICByZXNpemUgPSAtPlxuICAgICAgICAgIHJldHVybiB1bmxlc3MgbGlnaHRib3hcbiAgICAgICAgICBsaWdodGJveC5yZW1vdmVDbGFzcyhcImlzLWRlc2t0b3AgaXMtbW9iaWxlIGlzLXRhYmxldFwiKVxuICAgICAgICAgIHdpZHRoID0gbGlnaHRib3gud2lkdGgoKTtcbiAgICAgICAgICBpZiB3aWR0aCA+PSBzZXR0aW5ncy5icmVha3BvaW50cy50YWJsZXRcbiAgICAgICAgICAgIGxpZ2h0Ym94LmFkZENsYXNzKFwiaXMtZGVza3RvcFwiKVxuICAgICAgICAgIGVsc2UgaWYgd2lkdGggPj0gc2V0dGluZ3MuYnJlYWtwb2ludHMubW9iaWxlIGFuZCB3aWR0aCA8IHNldHRpbmdzLmJyZWFrcG9pbnRzLnRhYmxldFxuICAgICAgICAgICAgbGlnaHRib3guYWRkQ2xhc3MoXCJpcy10YWJsZXRcIilcbiAgICAgICAgICAgIHJlbW92ZUFkKClcbiAgICAgICAgICBlbHNlIGlmIHdpZHRoIDwgc2V0dGluZ3MuYnJlYWtwb2ludHMubW9iaWxlXG4gICAgICAgICAgICBsaWdodGJveC5hZGRDbGFzcyhcImlzLW1vYmlsZVwiKVxuICAgICAgICAgICAgcmVtb3ZlQWQoKVxuXG4gICAgICAgIHNjcm9sbCA9IC0+XG4gICAgICAgICAgcmV0dXJuIHVubGVzcyBpc0FjdGl2ZSgpXG4gICAgICAgICAgc2Nyb2xsZWQgPSAwXG4gICAgICAgICAgJCh3aW5kb3cpLm9uICdzY3JvbGwnLCA9PlxuICAgICAgICAgICAgaWYoc2Nyb2xsZWQgPiAxMCBvciAoJCh3aW5kb3cpLndpZHRoKCkgPCBzZXR0aW5ncy5icmVha3BvaW50cy5tb2JpbGUpIGFuZCBzY3JvbGxlZCA+IDMpXG4gICAgICAgICAgICAgIHNjcm9sbGVkID0gMFxuICAgICAgICAgICAgICAkKHdpbmRvdykudW5iaW5kKCdzY3JvbGwnKVxuICAgICAgICAgICAgICBjbG9zZUdhbGxlcnkoKVxuXG4gICAgICAgICAgICBzY3JvbGxlZCsrXG5cbiAgICAgICAgdHJhY2tFdmVudCA9IChhY3Rpb24pIC0+XG4gICAgICAgICAgcmV0dXJuIHVubGVzcyB3aW5kb3cuVHJhY2tlclxuICAgICAgICAgIFRyYWNrZXIudHJhY2soc2V0dGluZ3MudHJhY2tpbmcuY2F0ZWdvcnksYWN0aW9uKVxuXG4gICAgICAgIHRyYWNrRXZlbnRPbmNlID0gKGFjdGlvbikgLT5cbiAgICAgICAgICByZXR1cm4gaWYgc2V0dGluZ3MudHJhY2tpbmcudHJhY2tlZFthY3Rpb25dXG4gICAgICAgICAgdHJhY2tFdmVudChhY3Rpb24pXG4gICAgICAgICAgc2V0dGluZ3MudHJhY2tpbmcudHJhY2tlZFthY3Rpb25dID0gdHJ1ZVxuXG4gICAgICAgIHRyYWNrUGFnZXZpZXcgPSAtPlxuICAgICAgICAgIHJldHVybiB1bmxlc3Mgd2luZG93LlRyYWNrZXJcbiAgICAgICAgICBUcmFja2VyLnRyYWNrUGFnZXZpZXcobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBcIiNnYWxsZXJ5LXJlbG9hZFwiKVxuXG4gICAgICAgIGhhc1RvdWNoID0gLT5cbiAgICAgICAgICBpZignb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgb3IgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCkgb3IgdHlwZW9mIFRvdWNoRXZlbnQgPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY2xvc2VHYWxsZXJ5ID0gLT5cbiAgICAgICAgICBsaWdodGJveC5yZW1vdmVDbGFzcyBcImlzLXNob3dpbmdcIlxuICAgICAgICAgIHNldHRpbmdzLmFkcy5jdXJyZW50ID0gLTFcbiAgICAgICAgICB0cmFja0V2ZW50KFwiTGlnaHRib3ggQ2xvc2VcIilcblxuXG4gICAgICAgICMgYm9vdHN0cmFwIGFzIHRoZSBsYXN0IHRoaW5nXG4gICAgICAgICQodGhpcykuZWFjaCAoaW5kZXgsZWwpIC0+XG4gICAgICAgICAgaW1hZ2VzLnB1c2hcbiAgICAgICAgICAgIHNyYzogJChlbCkuYXR0cihcImhyZWZcIilcbiAgICAgICAgICAgIGNhcHRpb246ICQoZWwpLmZpbmQoXCJpbWdcIikuYXR0cihcImFsdFwiKVxuXG4gICAgICAgICQodGhpcykub24gXCJjbGlja1wiLCAoZSkgLT5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAjcmV0dXJuIGZhbHNlIGlmICQod2luZG93KS53aWR0aCgpIDwgc2V0dGluZ3MuYnJlYWtwb2ludHMubW9iaWxlXG4gICAgICAgICAgaW5qZWN0TWFya3VwKCkgdW5sZXNzIGxpZ2h0Ym94XG4gICAgICAgICAgdHJhY2tFdmVudE9uY2UoXCJMaWdodGJveCBPcGVuXCIpXG4gICAgICAgICAgcmVzaXplKClcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VGcm9tVXJsKCQodGhpcykuYXR0cihcImhyZWZcIikpXG4gICAgICAgICAgc2Nyb2xsKClcbiAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVcblxubW9kdWxlLmV4cG9ydHMgPSBMaWdodGJveFxuIiwiY2xhc3MgTGlua1BhcnNlclxuXG4gICMgV29ydGggdHJhY2tpbmcgZGlmZmVyZW50IHBvc2l0aW9ucyBhbmQgdHlwZT8gcGVyaGFwcyB0cmFja2luZyB0eXBlXG4gIEBjbGlja0NhdGVnb3J5ID0gKGxpbmspLT5cbiAgICBwYXJlbnQgPSBsaW5rLnBhcmVudHMoXCIuc2VjdGlvbi1vdXRlclwiKVxuICAgIHNlY3Rpb25fcG9zID0gJChcIi5zZWN0aW9uLW91dGVyXCIpLmluZGV4KHBhcmVudCkgKyAxXG4gICAgXCJDbGljazpIb21lcGFnZSBTZWN0aW9uIFwiICsgc2VjdGlvbl9wb3NcblxuICBAY2xpY2tBY3Rpb24gPSAobGluayktPlxuICAgIHBhcmVudCA9IGxpbmsucGFyZW50cyhcIi5zZWN0aW9uLW91dGVyXCIpXG4gICAgdHlwZV9jbGFzcyA9IHBhcmVudFswXS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpWzNdXG4gICAgdHlwZSA9IHR5cGVfY2xhc3Muc3BsaXQoXCItXCIpLnJldmVyc2UoKS5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXGIuL2csIChtKSAtPlxuICAgICAgbS50b1VwcGVyQ2FzZSgpXG4gICAgKVxuICAgIHNlY3Rpb25fdGl0bGUgPSAkLnRyaW0ocGFyZW50LmZpbmQoXCIuc2VjdGlvbi10aXRsZVwiKS50ZXh0KCkucmVwbGFjZSgvOi8sIFwiXCIpKVxuICAgIHNlY3Rpb25fdGl0bGUgKyBcIjpcIiArIHR5cGVcblxuICBAY2xpY2tMYWJlbCA9IChsaW5rKS0+XG4gICAgIyBTcGVjaWFsIGNhc2UgZm9yIGZlYXR1cmUgc2xpZGVyIGR1ZSB0byBzbGlkZXIgY2xvbmluZyBlbGVtZW50c1xuICAgIGlmIGxpbmsucGFyZW50cyhcIi50ZW1wbGF0ZS1mZWF0dXJlLXNsaWRlclwiKS5sZW5ndGggPiAwXG4gICAgICBzbGlkZXMgPSBsaW5rLnBhcmVudHMoXCIuc2xpZGVzXCIpLmZpbmQoXCJsaVtkYXRhLXNsaWRlLWlkXVwiKVxuICAgICAgcG9zID0gc2xpZGVzLmluZGV4KGxpbmsucGFyZW50cyhcImxpW2RhdGEtc2xpZGUtaWRdXCIpKSArIDFcbiAgICAgIFwiQXJ0aWNsZSBcIiArIHBvc1xuICAgIGVsc2VcbiAgICAgIHBhcmVudCA9IGxpbmsucGFyZW50cyhcIi5zZWN0aW9uLW91dGVyXCIpXG4gICAgICBwb3MgPSBwYXJlbnQuZmluZChcImFydGljbGVcIikuaW5kZXgobGluay5wYXJlbnQoXCJhcnRpY2xlXCIpKSArIDFcbiAgICAgIFwiQXJ0aWNsZSBcIiArIHBvc1xuXG4gIEB0YWJzTWVudUNsaWNrTGFiZWw6IChsaW5rKS0+XG4gICAgcGFyZW50ID0gbGluay5wYXJlbnRzKFwiLnRhYnMtbWVudVwiKVxuICAgIHBvcyA9IHBhcmVudC5maW5kKFwiLmZlYXR1cmUtdGFiXCIpLmluZGV4KGxpbmspICsgMVxuICAgIFwiQXJ0aWNsZSBcIiArIHBvc1xuXG4jIHdpbmRvdy5MaW5rUGFyc2VyID0gTGlua1BhcnNlclxubW9kdWxlLmV4cG9ydHMgPSBMaW5rUGFyc2VyIiwiTG9nZ2VyID0gcmVxdWlyZSAnanMtbG9nZ2VyJ1xuXG5jbGFzcyBMb2dpbkNvbnRyb2xcblxuICAjIFNldCB1cCBieSBwYXNzaW5nIGluIGFuIGluaXRpYWwgb2JqZWN0IGZvciB0aGUgd2lzaGxpc3QgdG8gYmUgYXR0YWNoZWQgdG8gKGV4cGVjdHMgYSA8ZGl2PilcbiAgY29uc3RydWN0b3I6IChAY29udHJvbCktPlxuICAgIEBsb2dnZXIgPSBMb2dnZXIuZ2V0KCdMb2dpbkNvbnRyb2wnKVxuICAgICMgRW5zdXJlIHRoZSBpbml0aWFsIGNvbnRyb2wgaXMgYSBqUXVlcnkgc2VsZWN0b3JcbiAgICBAY29udHJvbCA9ICQoQGNvbnRyb2wpXG5cbiAgICAjIFRoZSBjb250YWluZXIgSUQgZm9yIHRoZSB3aXNobGlzdCBpdGVtc1xuICAgIEB3aXNobGlzdENvbnRyb2xJRCA9ICdsb2dpbi1jb250cm9sLXdpc2hsaXN0LWl0ZW1zJ1xuXG4gICAgIyBCYXNlIFVSTCBmb3IgdGhlIHNpdGUgcmVxdWVzdHMgWW91IHdpbGwgd2FudCB0byBzZXQgdGhpcyB0byB0aGUgY29ycmVjdCBBUEkgZW5kcG9pbnQuIEV2ZW50dWFsbHksIHlvdSBtYXkgd2FudCB0byBzcGxpdCB0aGUgL21lIGFuZCB0aGUgL3dpc2hsaXN0cy4uLiBlbmRwb2ludHNcbiAgICBAYmFzZVVybCA9IFwiL3BpY2stYS1jaGFsbGVuZ2VcIlxuICAgICNAYmFzZVVybCA9IFwiXCJcbiAgICByZWRpcmVjdCA9XG4gICAgICByZWRpcmVjdF91cmk6IEBiYXNlVXJsXG5cbiAgICAjIFJvdXRlcyBmb3IgdGhlIGFwcCBlbmRwb2ludHNcbiAgICBAdXJscyA9XG4gICAgICBsb2dpbjogXCIje0BiYXNlVXJsfS9hdXRoLz8jeyQucGFyYW0ocmVkaXJlY3QpfVwiXG4gICAgICBsb2dvdXQ6IFwiI3tAYmFzZVVybH0vc2lnbm91dFwiXG4gICAgICB1c2VyczogXCIje0BiYXNlVXJsfS91c2Vyc1wiXG4gICAgICB3aXNobGlzdDogXCIvd2lzaGxpc3RcIlxuXG5cbiAgICAjIExhYmVscyBmb3IgdGhlIHRlbXBsYXRlIC0gTWlnaHQgd2FudCB0byBJMThuIHRoZXNlIGF0IHNvbWUgcG9pbnRcbiAgICBAbGFiZWxzID1cbiAgICAgIGdyZWV0aW5nOiBcIkhpLCBcIlxuICAgICAgcHJvZmlsZTogXCJNeSBQcm9maWxlXCJcbiAgICAgIHdpc2hsaXN0OiBcIk15IFdpc2hsaXN0XCJcbiAgICAgIGxvZ2luOiBcIkNvbm5lY3Qgd2l0aCBGYWNlYm9va1wiXG4gICAgICBsb2dvdXQ6IFwiTG9nb3V0XCJcbiAgICAgIGF2YXRhcjogXCJBdmF0YXJcIlxuICAgICAgY291bnQ6ICcnXG5cbiAgICAjICMgQmluZCB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciB3aGVuIHRoZSBsb2dpbiBhbmQgd2lzaGxpc3QgY2FsbHMgYXJlIGRvbmVcbiAgICAkKHdpbmRvdykub24oXCJGTTpvblVwZGF0ZWRXaXNobGlzdFwiLCBAZ2V0TG9naW5TdGF0dXMpXG4gICAgVXRpbGl0aWVzLlBvc3RNZXNzYWdlLmhhbmRsZSAoZSk9PlxuICAgICAgcmV0dXJuIHVubGVzcyBlLmRhdGFcbiAgICAgIHJldHVybiB1bmxlc3MgZS5kYXRhW1wiRk06RXZlbnRcIl1cbiAgICAgIGlmIGUuZGF0YVtcIkZNOkV2ZW50XCJdID09IFwiRk06b25VcGRhdGVkV2lzaGxpc3RcIlxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcihlLmRhdGFbXCJGTTpFdmVudFwiXSlcbiAgICAjICQod2luZG93KS5vbihcIkZNOm9uV2lzaGxpc3RTZXJ2aWNlTG9hZGVkXCIsIEBidWlsZFdpc2hsaXN0SXRlbXMpXG4gICAgIyAkKHdpbmRvdykub24oXCJGTTpvbkxvZ2luU3RhdHVzU2VydmljZUxvYWRlZFwiLCBAcG9wdWxhdGVBY2NvdW50KVxuICAgICMgJCh3aW5kb3cpLm9uKFwiRk06b25Mb2dpblN0YXR1c1NlcnZpY2VGYWlsZWRcIiwgQHBvcHVsYXRlTG9naW4pXG5cbiAgIyBHZXQgdGhlIGxvZ2luIHN0YXR1cyBhbmQgYWZ0ZXJ3YXJkcyBnZXQgdGhlIHdpc2hsaXN0c1xuICBnZXRMb2dpblN0YXR1czogPT5cbiAgICBuZXcgTG9naW5TdGF0dXNTZXJ2aWNlKEBiYXNlVXJsKS5nZXQoKS5kb25lKCh1c2VyKT0+XG4gICAgICBAcG9wdWxhdGVBY2NvdW50KHVzZXIpXG4gICAgICBAZ2V0V2lzaGxpc3RTdGF0dXModXNlcilcbiAgICApLmZhaWwoKGUpPT5cbiAgICAgIEBwb3B1bGF0ZUxvZ2luKClcbiAgICApXG5cbiAgZ2V0V2lzaGxpc3RTdGF0dXM6ICh1c2VyKT0+XG4gICAgbmV3IFdpc2hsaXN0U2VydmljZShAYmFzZVVybCwgdXNlcikuZ2V0KCkuZG9uZSAoZGF0YSk9PlxuICAgICAgQGJ1aWxkV2lzaGxpc3RJdGVtcyhkYXRhKVxuXG4gICMgQnVpbGQgdGhlIGxvZ2luIGNvbnRyb2xcbiAgcG9wdWxhdGVBY2NvdW50OiAodXNlcik9PlxuICAgIEBjb250cm9sLmh0bWwoQGFjY291bnRDb250ZW50KHVzZXIpKVxuXG4gIHBvcHVsYXRlTG9naW46ID0+XG4gICAgQGNvbnRyb2wuaHRtbChAbG9naW5Db250ZW50KVxuXG4gIGxvZ2luQ29udGVudDogPT5cbiAgICBcIlwiXCJcbiAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5vdC1sb2dnZWQtaW5cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1sb2dpblwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDx1bCBjbGFzcz1cImxvZ2luLWRyb3Bkb3duXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwidXNlci13ZWxjb21lXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZhY2Vib29rXCI+PC9pPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiN7QHVybHMubG9naW59XCI+I3tAbGFiZWxzLmxvZ2lufTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgXCJcIlwiXG5cbiAgIyBTaG9ydCBvZiB1c2luZyBzb21lIEphdmFTY3JpcHQgdGVtcGxhdGluZyBlLmcgSGFuZGxlYmFycyBoZXJlIHRoaXMgYmxvYiBvZiBjb2RlIGlzIGFsbCB5b3UgbmVlZCBmb3IgdGhlIGxvZ2luIGFyZWFcbiAgYWNjb3VudENvbnRlbnQ6ICh1c2VyKT0+XG4gICAgaWYgdXNlcj9cbiAgICAgIFwiXCJcIlxuICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1sb2dnZWQtaW5cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWxvZ2luXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImpzLXdpc2hsaXN0LWNvdW50IG5vdGlmaWNhdGlvbi1jb3VudFwiIGhyZWY9XCIje0B3aXNobGlzdFVybCh1c2VyKX1cIj4je0BsYWJlbHMuY291bnR9PC9hPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInVzZXItcHJvZmlsZS1pbWFnZVwiIHNyYz1cIiN7dXNlci5hdmF0YXIudXJsfVwiIGFsdD1cIiN7dXNlci51c2VybmFtZX0gI3tAbGFiZWxzLmF2YXRhcn1cIiAvPlxuICAgICAgICAgICAgPHNwYW4+I3t1c2VyLmZpcnN0X25hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImxvZ2luLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ1c2VyLXdlbGNvbWVcIj4je0BsYWJlbHMuZ3JlZXRpbmd9I3t1c2VyLmZpcnN0X25hbWV9ICN7dXNlci5sYXN0X25hbWV9PC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiN7QHdpc2hsaXN0VXJsKHVzZXIpfVwiPiN7QGxhYmVscy53aXNobGlzdH0gKDxzcGFuIGNsYXNzPVwianMtd2lzaGxpc3QtY291bnRcIj4je0BsYWJlbHMuY291bnR9PC9zcGFuPik8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwidXNlci1sb2dvdXRcIj48aSBjbGFzcz1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPjxhIGhyZWY9XCIje0B1cmxzLmxvZ291dH1cIj4je0BsYWJlbHMubG9nb3V0fTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgXCJcIlwiXG5cbiAgIyBCdWlsZCB0aGUgd2lzaGxpc3QgaXRlbXMgZWxlbWVudHNcbiAgYnVpbGRXaXNobGlzdEl0ZW1zOiAoZGF0YSk9PlxuICAgIGlmIGRhdGE/Lndpc2hsaXN0X2l0ZW1zP1xuICAgICAgaXRlbXMgPSAkLm1hcChkYXRhLndpc2hsaXN0X2l0ZW1zLCBAYnVpbGRXaXNobGlzdEl0ZW0pLmpvaW4oXCJcIilcbiAgICAgICQoXCIjI3tAd2lzaGxpc3RDb250cm9sSUR9XCIpLmFwcGVuZChpdGVtcylcbiAgICAgICQoJy5qcy13aXNobGlzdC1jb3VudCcpLmh0bWwoZGF0YS53aXNobGlzdF9pdGVtcy5sZW5ndGgpXG4gICAgZWxzZVxuICAgICAgJCgnLmpzLXdpc2hsaXN0LWNvdW50JykuaHRtbChcIjBcIilcblxuICAjIEJ1aWxkIGFuIGluZGl2aWR1YWwgd2lzaGxpc3QgaXRlbSA8bGk+XG4gIGJ1aWxkV2lzaGxpc3RJdGVtOiAoaXRlbSktPlxuICAgIFwiXCJcIjxsaT48YSBocmVmPVwiI3tpdGVtLmV2ZW50LnVybH1cIj4je2l0ZW0uZXZlbnQubmFtZX08L2E+PC9saT5cIlwiXCJcblxuICAjIEJ1aWxkIHRoZSB3aXNoaGxpc3QgVVJMXG4gIHdpc2hsaXN0VXJsOiAodXNlciktPlxuICAgIFwiI3tAcHJvZmlsZVVybCh1c2VyKX0je0B1cmxzLndpc2hsaXN0fVwiXG5cbiAgIyBCdWlsZCB0aGUgdXNlciBwcm9maWxlIFVSTFxuICBwcm9maWxlVXJsOiAodXNlciktPlxuICAgIFwiI3tAdXJscy51c2Vyc30vI3t1c2VyLnVzZXJuYW1lfVwiXG5cbiAgIyBMb2cgdG8gdGhlIHN0YW5kYXJkIGxvZ2dlclxuICBsb2c6IChtZXNzYWdlKS0+XG4gICAgQGxvZ2dlci5pbmZvKFwiTG9naW5Db250cm9sXCIsIG1lc3NhZ2UpXG5cblxuIyB3aW5kb3cuTG9naW5Db250cm9sID0gTG9naW5Db250cm9sXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luQ29udHJvbCIsIiMgTG9uZ2Zvcm0gYXJ0aWNsZXNcbmNsYXNzIExvbmdmb3JtXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgcmV0dXJuIHVubGVzcyAkKFwiYm9keVwiKS5oYXNDbGFzcyhcInNpbmdsZS1sb25nZm9ybVwiKVxuICAgIEByZXNpemVQYXJhbGxheFNlY3Rpb24oKVxuXG4gICAgIyBvbiB3aW5kb3cgcmVzaXplLCBmaXggaW1nIGhlaWdodFxuICAgICQod2luZG93KS5zbWFydHJlc2l6ZSA9PlxuICAgICAgQHJlc2l6ZVBhcmFsbGF4U2VjdGlvbigpXG4gICAgICByZXR1cm5cblxuICAgICMgaW5pdCBza3JvbGxyIG9uY2UgbG9hZGVkXG4gICAgJCh3aW5kb3cpLmJpbmQgXCJsb2FkXCIsID0+XG4gICAgICByZXR1cm4gaWYgQGRldmljZSgpIGlzbnQgXCJkZXNrdG9wXCJcbiAgICAgIEBhZGRTY3JvbGxFZmZlY3RzKClcbiAgICAgICMgc2tyb2xsci5pbml0KClcbiAgICAgIHJldHVyblxuXG4gICAgcmV0dXJuXG5cblxuICAjIExvbmdmb3JtIFBhcmFsbGF4IEhlaWdodCBGaXhcbiAgcmVzaXplUGFyYWxsYXhTZWN0aW9uOiAtPlxuICAgIGltYWdlU2VjdGlvbiA9ICQoXCIubG9uZ2Zvcm0tc2VjdGlvbi1pbWFnZS5mdWxsc2NyZWVuLWltYWdlXCIpXG4gICAgdmlld3BvcnRIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KClcbiAgICBuYXZIZWlnaHQgPSAkKFwiLm5hdi1wcmltYXJ5XCIpLmhlaWdodCgpXG4gICAgcmV0dXJuIGZhbHNlIGlmIG5vdCBpbWFnZVNlY3Rpb24ubGVuZ3RoID4gMFxuXG4gICAgaW1hZ2VIZWlnaHQgPSAodmlld3BvcnRIZWlnaHQgLSBuYXZIZWlnaHQpXG4gICAgaW1hZ2VTZWN0aW9uLmNzcyBcImhlaWdodFwiLCBpbWFnZUhlaWdodFxuXG4gICAgIyBpT1MgZml4ZWQgYmFja2dyb3VuZCBidWcsIG9ubHkgZW5hYmxlIG9uIG5vbi1pb3MgZGV2aWNlc1xuICAgIGltYWdlU2VjdGlvbi5hZGRDbGFzcygnYmctaW1hZ2UtZml4ZWQnKSB1bmxlc3MgQGlzSW9zKClcblxuICBhZGRTY3JvbGxFZmZlY3RzOiAtPlxuICAgICMgYWRkIHRpdGxlIHRleHQgZmFkZSBvdXRcbiAgICBoZWFkZXJTZWN0aW9uID0gJChcIi5sb25nZm9ybS1zZWN0aW9uLmxvbmdmb3JtLXNlY3Rpb24taW1hZ2U6Zmlyc3QtY2hpbGRcIilcbiAgICBoZWFkZXJTZWN0aW9uLmZpbmQoXCJoMlwiKS5hdHRyKFwiZGF0YS0wXCIsIFwib3BhY2l0eTogMVwiKS5hdHRyIFwiZGF0YS0yODBcIiwgXCJvcGFjaXR5OiAwXCJcbiAgICBoZWFkZXJTZWN0aW9uLmZpbmQoXCJoM1wiKS5hdHRyKFwiZGF0YS0wXCIsIFwib3BhY2l0eTogMVwiKS5hdHRyIFwiZGF0YS0zMDBcIiwgXCJvcGFjaXR5OiAwXCJcblxuICBkZXZpY2U6IC0+XG4gICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCBvciBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXG4gICAgdGFibGV0ID0gOTYwXG4gICAgbW9iaWxlID0gNzY4XG4gICAgaWYgd2luZG93V2lkdGggPCBtb2JpbGVcbiAgICAgIFwibW9iaWxlXCJcbiAgICBlbHNlIGlmIHdpbmRvd1dpZHRoID49IG1vYmlsZSBhbmQgd2luZG93V2lkdGggPD0gdGFibGV0XG4gICAgICBcInRhYmxldFwiXG4gICAgZWxzZVxuICAgICAgXCJkZXNrdG9wXCJcblxuICBpc0lvczogLT5cbiAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaXAoaG9uZXxvZHxhZCkpL2kpXG5cblxuIyB3aW5kb3cuTG9uZ2Zvcm0gPSBMb25nZm9ybVxubW9kdWxlLmV4cG9ydHMgPSBMb25nZm9ybSIsIk5hdlRvZ2dsZSA9IHJlcXVpcmUgJy4vX2NvbXBvbmVudHMubmF2LXRvZ2dsZS5jb2ZmZWUnXG5cbmNsYXNzIE1lbnVUb2dnbGVzXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQGV2ZW50QmluZGluZ3MoKVxuXG4gIGV2ZW50QmluZGluZ3M6IC0+XG4gICAgQHRvZ2dsZVByaW1hcnlOYXYoKVxuICAgIEB0b2dnbGVBbGxNZW51KClcbiAgICBAdG9nZ2xlU2lkZU1lbnUoKVxuICAgIEB0b2dnbGVTZWFyY2hGb3JtKClcbiAgICBAdG9nZ2xlTG9naW4oKVxuICAgIEB0b2dnbGVDaGFwdGVycygpICMgdG9nZ2xlIHNpZGViYXIgY2hhcHRlciBtZW51LCBlZy4gc2lkZXdhbGsgJ2lzc3VlcydcblxuICB0b2dnbGVQcmltYXJ5TmF2OiAtPlxuICAgICMgcHJpbWFyeSBuYXYgbWVudVxuICAgIG5ldyBOYXZUb2dnbGUoJy5qcy1wcmltYXJ5LW5hdi10b2dnbGUnLCAnLmpzLXByaW1hcnktbmF2LW1lbnUnLCAnYy1uYXZiYXItcHJpbWFyeS0taXMtYWN0aXZlJywgJ2MtbmF2LXRvZ2dsZS0taXMtYWN0aXZlJylcblxuICB0b2dnbGVBbGxNZW51OiAtPlxuICAgIG5ldyBOYXZUb2dnbGUoJy5hbGwtbWVudS10b2dnbGUnLCAnLmFsbC1uYXYnLCAnb3BlbicpXG5cbiAgdG9nZ2xlU2lkZU1lbnU6IC0+XG4gICAgbmV3IE5hdlRvZ2dsZSgnLnNpZGUtbWVudS10b2dnbGUnLCAnLnNpZGUtbWVudScsICdvcGVuJylcblxuICB0b2dnbGVTZWFyY2hGb3JtOiAtPlxuICAgIG5ldyBOYXZUb2dnbGUoJy5zZWFyY2gtZm9ybS10b2dnbGUnLCAnLmhlYWRlci1zZWFyY2gtYmFyJywgXCJvcGVuXCIpXG5cbiAgdG9nZ2xlTG9naW46IC0+XG4gICAgbmV3IE5hdlRvZ2dsZSgnLmhlYWRlci1sb2dpbicsICcubG9naW4tZHJvcGRvd24nLCBcIm9wZW5cIilcblxuICB0b2dnbGVDaGFwdGVyczogLT5cbiAgICBuZXcgTmF2VG9nZ2xlKCcuc2lkZWJhci1jaGFwdGVycy10b2dnbGUnLCBcIi5hcnRpY2xlLXNpZGViYXItY2hhcHRlcnNcIiwgXCJzaWRlYmFyLWNoYXB0ZXJzLW9wZW5cIilcbiAgICBAY2xvc2VOYXYoKVxuXG4gIGNsb3NlTmF2OiAtPlxuICAgICMgTkVFRCBUTyBSRUZBQ1RPUiBJTlRPIE5BViBUT0dHTEVcbiAgICAjIGNsb3NlIHRoZSBuYXYgb24gY2xpY2sgYXdheVxuICAgICQoJ2h0bWwnKS5vbiAnY2xpY2snLCAoZSkgPT5cbiAgICAgIGlmICQoJ2JvZHknKS5oYXNDbGFzcygnc2lkZWJhci1jaGFwdGVycy1vcGVuJykgJiYgISQoJy5hcnRpY2xlLXNpZGViYXItY2hhcHRlcnMnKVswXS5jb250YWlucyhlLnRhcmdldClcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzICdzaWRlYmFyLWNoYXB0ZXJzLW9wZW4nXG5cbiAgIyBORUVEUyBSRUZBQ1RPUklOR1xuICAjIGtleUJpbmRpbmdzOiAtPlxuICAjICAgIyBjbG9zZSBvbiBlc2NhcGUga2V5XG4gICMgICAkKGRvY3VtZW50KS5rZXlkb3duIChlKSA9PlxuICAjICAgICBpZiBlLmtleUNvZGUgPT0gMjdcbiAgIyAgICAgICBAY2xvc2VOYXYoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lbnVUb2dnbGVzXG5cbiIsIiMgTW9iaWxlIE1lbnUgVG9nZ2xlXG5jbGFzcyBNb2JpbGVNZW51XG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgbmF2VG9nZ2xlID0gJChcIi5uYXYtbW9iaWxlLXRvZ2dsZVwiKVxuICAgIG5hdk1lbnUgPSAkKFwiLm5hdi1wcmltYXJ5XCIpXG4gICAgbmF2V2l0aFN1YiA9IG5hdk1lbnUuZmluZChcIi5tZW51LXBhcmVudC1pdGVtXCIpXG4gICAgZXZlbnRfbmFtZSA9IChpZiB0eXBlb2YgZG9jdW1lbnQub250b3VjaGVuZCBpcyBcInVuZGVmaW5lZFwiIHRoZW4gXCJjbGlja1wiIGVsc2UgXCJ0b3VjaGVuZFwiKVxuICAgIG5hdlNlYXJjaCA9ICQoXCIuc2VhcmNoLWNvbnRlbnRcIilcbiAgICBib2R5ID0gJChcImh0bWxcIilcbiAgICB2aWV3SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG5cbiAgICBuYXZUb2dnbGUuYmluZCBldmVudF9uYW1lLCAoZSkgLT5cbiAgICAgIG5hdk1lbnUuZmluZChcIi5uYXYtcHJpbWFyeS1saXN0XCIpLmNzcyBcIm1heC1oZWlnaHRcIiwgdmlld0hlaWdodCAtIDcwXG4gICAgICBuYXZNZW51LnRvZ2dsZUNsYXNzIFwiaXMtb3BlblwiXG4gICAgICBuYXZTZWFyY2gucmVtb3ZlQ2xhc3MgXCJpcy1zaG93aW5nXCJcbiAgICAgIGJvZHkudG9nZ2xlQ2xhc3MgXCJuYXYtaXMtb3BlblwiXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGZhbHNlXG5cblxuICAgICMgJChkb2N1bWVudCkub24oZXZlbnRfbmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgIyAgIGJvZHkucmVtb3ZlQ2xhc3MoXCJuYXYtaXMtb3BlblwiKTtcbiAgICAjICAgbmF2TWVudS5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgIyB9KTtcblxuICAgICMgYWRkIHRvZ2dsZSBmb3IgbW9iaWxlIHN1Yi1tZW51XG4gICAgJChcIjxzcGFuLz5cIixcbiAgICAgIGNsYXNzOiBcImhhcy1jaGlsZC1pbmRpY2F0b3JcIlxuICAgICkucHJlcGVuZFRvIG5hdldpdGhTdWJcbiAgICBuYXZNZW51Lm9uIGV2ZW50X25hbWUsIFwiLmhhcy1jaGlsZC1pbmRpY2F0b3JcIiwgKGUpIC0+XG4gICAgICBpZiAkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKFwiaXMtc2hvd2luZ1wiKVxuICAgICAgICBuYXZXaXRoU3ViLnJlbW92ZUNsYXNzIFwiaXMtc2hvd2luZ1wiXG4gICAgICBlbHNlXG4gICAgICAgIG5hdldpdGhTdWIucmVtb3ZlQ2xhc3MgXCJpcy1zaG93aW5nXCJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyBcImlzLXNob3dpbmdcIlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBmYWxzZVxuXG4gICAgcmV0dXJuXG5cbiMgd2luZG93Lk1vYmlsZU1lbnUgPSBNb2JpbGVNZW51XG5tb2R1bGUuZXhwb3J0cyA9IE1vYmlsZU1lbnUiLCJMb2dnZXIgPSByZXF1aXJlICdqcy1sb2dnZXInXG5cbmNsYXNzIE5hdlRvZ2dsZVxuXG4gIGNvbnN0cnVjdG9yOiAoQHNlbGVjdG9yLCBAY29udGVudCwgQGNvbnRlbnRUb2dnbGVDbGFzcywgQHNlbGVjdG9yVG9nZ2xlQ2xhc3MgPSBcIlwiKS0+XG4gICAgQGxvZ2dlciA9IExvZ2dlci5nZXQoJ05hdlRvZ2dsZScpXG4gICAgIyBAbG9nZ2VyLmRlYnVnICdpbml0JywgQHNlbGVjdG9yLCBAY29udGVudCwgQHNlbGVjdG9yQ2xhc3MsIEBtZW51Q2xhc3NcbiAgICBAZXZlbnRCaW5kaW5ncygpXG5cbiAgZXZlbnRCaW5kaW5nczogLT5cbiAgICAkdG9nZ2xlQnV0dG9uID0gJChcIiN7QHNlbGVjdG9yfVwiKVxuICAgICRjb250ZW50ID0gJChcIiN7QGNvbnRlbnR9XCIpXG4gICAgJGJvZHkgPSAkKFwiYm9keVwiKVxuICAgICRzZWxlY3RvclRvZ2dsZUNsYXNzID0gQHNlbGVjdG9yVG9nZ2xlQ2xhc3NcbiAgICAkY29udGVudFRvZ2dsZUNsYXNzID0gQGNvbnRlbnRUb2dnbGVDbGFzc1xuICAgICMgQGxvZ2dlci5kZWJ1ZyAnZXZlbnRCaW5kaW5ncycsICR0b2dnbGVCdXR0b24sICRjb250ZW50LCBAc2VsZWN0b3JDbGFzcywgQG1lbnVDbGFzc1xuXG4gICAgJHRvZ2dsZUJ1dHRvbi5vbiAnY2xpY2snLCA9PlxuICAgICAgJHRvZ2dsZUJ1dHRvbi50b2dnbGVDbGFzcyAkc2VsZWN0b3JUb2dnbGVDbGFzc1xuICAgICAgJGNvbnRlbnQudG9nZ2xlQ2xhc3MgJGNvbnRlbnRUb2dnbGVDbGFzc1xuICAgICAgJGJvZHkudG9nZ2xlQ2xhc3MgJGNvbnRlbnRUb2dnbGVDbGFzc1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdlRvZ2dsZVxuIiwiIyBOZXdzbGV0dGVyIFdpZGdldCAtIFRlcm1zLCBEaWFsb2cgYW5kIFN1Ym1pdCBiZWhhdmlvdXJcbmNsYXNzIE5ld3NsZXR0ZXJXaWRnZXRcblxuICBjb25zdHJ1Y3RvcjogLT5cblxuICAgIEB0ZXJtc19kaWFsb2cgPSAkKFwiLm5ld3NsZXR0ZXItdGVybXMtZGlhbG9nXCIpXG4gICAgQHRlcm1zX2NoZWNrYm94ID0gJChcIi5uZXdzbGV0dGVyLXRlcm1zLWFncmVlXCIpXG4gICAgQG5ld3NsZXR0ZXJfc3VibWl0ID0gJChcIi5uZXdzbGV0dGVyLXN1Ym1pdFwiKVxuXG4gICAgdW5sZXNzICQoQHRlcm1zX2NoZWNrYm94KS5hdHRyKFwiY2hlY2tlZFwiKSBpcyBcImNoZWNrZWRcIlxuICAgICAgQG5ld3NsZXR0ZXJfc3VibWl0LmF0dHIoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpXG5cbiAgICAkKFwiLm5ld3NsZXR0ZXItdGVybXMtdG9nZ2xlLCAubmV3c2xldHRlci10ZXJtcy1kaWFsb2cgLmJ0bi1jbG9zZVwiKS5vbiBcImNsaWNrXCIsIChlKSA9PlxuICAgICAgQHRlcm1zX2RpYWxvZy50b2dnbGVDbGFzcyhcImlzLXNob3dpbmdcIilcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZmFsc2VcblxuICAgICQoJy5uZXdzbGV0dGVyLWZvcm0nKS5vbiAnc3VibWl0JywgKGUpPT5cbiAgICAgIGZvcm0gPSAkKGUuY3VycmVudFRhcmdldClcbiAgICAgIGVtYWlsID0gZm9ybS5maW5kKFwiI2ZpZWxkc19lbWFpbFwiKS52YWwoKVxuICAgICAgbmFtZSA9IGZvcm0uZmluZChcIiNmaWVsZHNfZm5hbWVcIikudmFsKClcbiAgICAgIHNvdXJjZSA9IGZvcm0uZmluZChcIltuYW1lPSdmaWVsZHNfZW50cnlfc291cmNlJ11cIikudmFsKClcbiAgICAgICQod2luZG93KS50cmlnZ2VyIFwiRk06b25OZXdzbGV0dGVyU2lnbnVwXCIsXG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICAgIHNvdXJjZTogc291cmNlXG5cblxuICAgIEB0ZXJtc19jaGVja2JveC5vbiBcImNsaWNrXCIsIChlKSA9PlxuICAgICAgdW5sZXNzICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKFwiY2hlY2tlZFwiKSBpcyBcImNoZWNrZWRcIlxuICAgICAgICBAbmV3c2xldHRlcl9zdWJtaXQuYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIilcbiAgICAgIGVsc2VcbiAgICAgICAgQG5ld3NsZXR0ZXJfc3VibWl0LnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKVxuICAgICAgcmV0dXJuXG5cblxuIyB3aW5kb3cuTmV3c2xldHRlcldpZGdldCA9IE5ld3NsZXR0ZXJXaWRnZXRcbm1vZHVsZS5leHBvcnRzID0gTmV3c2xldHRlcldpZGdldCIsImNsYXNzIFBhZ2luYXRpb25cblxuICBjb25zdHJ1Y3RvcjogKEBlbGVtLCBAYmFzZVVSTCwgQGN1cnJlbnRQYWdlLCBAdG90YWxSZXN1bHRzLCBAcGVyUGFnZT0yMCktPlxuICAgIEBlbGVtID0gQGVsZW0gb3IgJCgnLnBhZ2luYXRpb24nKVxuICAgIEBjdXJyZW50UGFnZSA9IHBhcnNlSW50KEBjdXJyZW50UGFnZSlcblxuICBwYWdpbmF0ZTogLT5cbiAgICBwYWdlcyA9IE1hdGguY2VpbChAdG90YWxSZXN1bHRzL0BwZXJQYWdlKVxuXG4gICAgaWYgKDEgPCBAY3VycmVudFBhZ2UpXG4gICAgICBwcmV2UGFnZSA9IEBjdXJyZW50UGFnZSAtIDFcblxuICAgIGlmIChAY3VycmVudFBhZ2UgPCBwYWdlcylcbiAgICAgIG5leHRQYWdlID0gQGN1cnJlbnRQYWdlICsgMVxuXG4gICAgI2NvbnNvbGUubG9nIFwiUGFnaW5hdGlvbjogVG90YWw6ICN7QHRvdGFsUmVzdWx0c30gLyBQZXI6ICN7QHBlclBhZ2V9IC8gUGFnZXM6ICN7cGFnZXN9IC8gQ3VycmVudDogI3tAY3VycmVudFBhZ2V9IC8gUHJldjogI3twcmV2UGFnZX0gLyBOZXh0OiAje25leHRQYWdlfVwiXG5cbiAgICAjIGNsZWFyIHBhZ2luYXRpb24gaWYgb25seSAxIHBhZ2VcbiAgICBpZiBwYWdlcyA8IDJcbiAgICAgIEBlbGVtLmh0bWwoJycpXG4gICAgZWxzZVxuICAgICAgIyBidWlsZCBwYWdpbmF0aW9uXG4gICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAjIGJhY2tcbiAgICAgIGlmIEBjdXJyZW50UGFnZSA+IDFcbiAgICAgICAgb3V0cHV0ICs9IFwiXCJcIjxhIGNsYXNzPVwicHJldiBwYWdlLW51bWJlcnNcIiBocmVmPVwiI3tAYnVpbGRVUkwocHJldlBhZ2UpfVwiPiZsYXF1bzsgQmFjazwvYT5cIlwiXCJcblxuICAgICAgIyBtaWRkbGUgbnVtYmVyLCB3aXRoIGxlZnQgJiByaWdodCAjIGVhY2ggc2lkZVxuICAgICAgbGVmdCA9IDRcbiAgICAgIHJpZ2h0ID0gNFxuXG4gICAgICBpZiBAY3VycmVudFBhZ2UgPD0gbGVmdFxuICAgICAgICBiZWZvcmUgPSBAY3VycmVudFBhZ2UgLSAxXG4gICAgICAgIGFmdGVyID0gbGVmdCAtIChAY3VycmVudFBhZ2UgLSAxKSArIHJpZ2h0XG4gICAgICBlbHNlIGlmIEBjdXJyZW50UGFnZSA+IChwYWdlcyAtIHJpZ2h0KVxuICAgICAgICBiZWZvcmUgPSByaWdodCAtIChwYWdlcyAtIEBjdXJyZW50UGFnZSkgKyBsZWZ0XG4gICAgICAgIGFmdGVyID0gcmlnaHRcbiAgICAgIGVsc2VcbiAgICAgICAgYmVmb3JlID0gbGVmdFxuICAgICAgICBhZnRlciA9IHJpZ2h0XG5cbiAgICAgIHN0YXJ0ID0gaWYgKChAY3VycmVudFBhZ2UgLSBiZWZvcmUpIDwgMSkgdGhlbiAxIGVsc2UgKEBjdXJyZW50UGFnZSAtIGJlZm9yZSlcbiAgICAgIGVuZCA9IGlmIChwYWdlcyA8IChAY3VycmVudFBhZ2UgKyBhZnRlcikpIHRoZW4gcGFnZXMgZWxzZSAoQGN1cnJlbnRQYWdlICsgYWZ0ZXIpXG5cbiAgICAgIGZvciBpIGluIFtzdGFydC4uZW5kXSBieSAxXG4gICAgICAgIGlmIGkgPT0gQGN1cnJlbnRQYWdlXG4gICAgICAgICAgb3V0cHV0ICs9IFwiXCJcIjxzcGFuIGNsYXNzPVwiY3VycmVudCBwYWdlLW51bWJlcnNcIj4je2l9PC9zcGFuPlwiXCJcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgb3V0cHV0ICs9IFwiXCJcIjxhIGNsYXNzPVwicGFnZS1udW1iZXJzXCIgaHJlZj1cIiN7QGJ1aWxkVVJMKGkpfVwiPiN7aX08L2E+XCJcIlwiXG5cbiAgICAgICMgbmV4dFxuICAgICAgaWYgQGN1cnJlbnRQYWdlIDwgcGFnZXNcbiAgICAgICAgb3V0cHV0ICs9IFwiXCJcIjxhIGNsYXNzPVwibmV4dCBwYWdlLW51bWJlcnNcIiBocmVmPVwiI3tAYnVpbGRVUkwobmV4dFBhZ2UpfVwiPk5leHQgJnJhcXVvOzwvYT5cIlwiXCJcblxuICAgICAgQGVsZW0uaHRtbChvdXRwdXQpXG5cblxuICBidWlsZFF1ZXJ5OiAocGFnZSktPlxuICAgICQucGFyYW0ocGFnZTogcGFnZSlcblxuXG4gIGJ1aWxkVVJMOiAocGFnZSktPlxuICAgIFwiI3tAYmFzZVVSTH0je1V0aWxpdGllcy5nZXRVUkxTZXBhcmF0b3IoQGJhc2VVUkwpfSN7QGJ1aWxkUXVlcnkocGFnZSl9XCJcblxuXG5cblxuIyB3aW5kb3cuUGFnaW5hdGlvbiA9IFBhZ2luYXRpb25cbm1vZHVsZS5leHBvcnRzID0gUGFnaW5hdGlvbiIsImNsYXNzIFBsYXRmb3JtRGV0ZWN0aW9uXG5cbiAgU0VUVElOR1MgPVxuICAgIGJyZWFrcG9pbnRzOlxuICAgICAgbWVkaXVtOiA5NzBcbiAgICAgIHNtYWxsOiA2NDBcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAY3VycmVudFBsYXRmb3JtID0gQHBsYXRmb3JtKClcblxuICBnZXRXaWR0aDogLT5cbiAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXG5cbiAgcGxhdGZvcm06IC0+XG4gICAgd2luZG93V2lkdGggPSBAZ2V0V2lkdGgoKVxuICAgIGlmKHdpbmRvd1dpZHRoIDwgU0VUVElOR1MuYnJlYWtwb2ludHMuc21hbGwpXG4gICAgICBcInNtYWxsXCJcbiAgICBlbHNlIGlmKHdpbmRvd1dpZHRoID49IFNFVFRJTkdTLmJyZWFrcG9pbnRzLnNtYWxsICYmIHdpbmRvd1dpZHRoIDw9IFNFVFRJTkdTLmJyZWFrcG9pbnRzLm1lZGl1bSlcbiAgICAgIFwibWVkaXVtXCJcbiAgICBlbHNlXG4gICAgICBcImxhcmdlXCJcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF0Zm9ybURldGVjdGlvblxuIiwiTG9nZ2VyID0gcmVxdWlyZSAnanMtbG9nZ2VyJ1xuXG5jbGFzcyBSYWRpdW1PbmVcblxuICAjIGNvbmZpZyBvcHRpb25zOlxuICAjIGh0dHA6Ly9zdXBwb3J0LnBvLnN0L2hjL2VuLXVzL2FydGljbGVzLzIwMDI1MTE5OC1HbG9iYWwtb3B0aW9ucy1wd2lkZ2V0LWNvbmZpZ1xuICBwb3N0V2lkZ2V0RGVmYXVsdHMgPVxuICAgIGFmdGVyU2hhcmU6IGZhbHNlXG4gICAgZ2FUcmFja0V2ZW50czogdHJ1ZVxuICAgIGdhVHJhY2tTb2NpYWxJbnRlcmFjdGlvbnM6IHRydWVcbiAgICBzaGFyZVBvcHVwczogdHJ1ZVxuICAgIHNlcnZpY2VzOlxuICAgICAgcF9zaGFyZV9wb3B1cDogJ3R1bWJsciwgcGludGVyZXN0LCBzdHVtYmxldXBvbiwgcmVkZGl0LCBkaWdnLCBkZWxpY2lvdXMsIGVtYWlsLCBtb3JlJ1xuICAgICAgdHdpdHRlcjpcbiAgICAgICAgdmlhOiAoJCgnbWV0YVtwcm9wZXJ0eT1cInR3aXR0ZXI6c2l0ZVwiXScpLmF0dHIoJ2NvbnRlbnQnKSB8fCAnJykucmVwbGFjZSgnQCcsJycpXG4gICAgdHJhbnNmb3JtYXRpb25zOlxuICAgICAgdHJhY2tpbmc6IHRydWVcbiAgICBidXR0b25zOiBbXG4gICAgICBpZDogJ2ZhY2Vib29rJ1xuICAgICAgbG9vazogJ25hdGl2ZSdcbiAgICAgIGNvdW50ZXI6ICdub25lJ1xuICAgICxcbiAgICAgIGlkOiAndHdpdHRlcidcbiAgICAgIGxvb2s6ICduYXRpdmUnXG4gICAgICBjb3VudGVyOiAnbm9uZSdcbiAgICAsXG4gICAgICBpZDogJ3BpbnRlcmVzdCdcbiAgICAgIGxvb2s6ICduYXRpdmUnXG4gICAgICBjb3VudGVyOiAnbm9uZSdcbiAgICAsXG4gICAgICBpZDogJ3doYXRzYXBwJ1xuICAgICAgbG9vazogJ25hdGl2ZSdcbiAgICAgIGNvdW50ZXI6ICdub25lJ1xuICAgIF1cbiAgICBvbnNoYXJlOiAoc2VydmljZSktPlxuICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSh3aW5kb3cubG9jYXRpb24uaGFzaCwgJycpXG4gICAgICAjIExvZ2dlci5kZWJ1ZyAnc2hhcmVkJywgc2VydmljZSwgdXJsXG4gICAgICB3aW5kb3cuVHJhY2tlci50cmFja1NvY2lhbChzZXJ2aWNlLCAnc2hhcmUnLCB1cmwpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAjIGNvbmZpZyBvcHRpb25zOlxuICAjIGh0dHA6Ly9zdXBwb3J0LnBvLnN0L2hjL2VuLXVzL2FydGljbGVzLzIwMzY0ODg1NS1TaGFyZUltYWdlLVdpZGdldC1pbnNpZGUtaW1hZ2VzXG5cblxuICBjb25zdHJ1Y3RvcjogKEB3aWRnZXQsIEB0YXJnZXQsIEBvcHRpb25zKS0+XG4gICAgIyBzZXR1cCBsb2dnaW5nIC0gbW9kaWZ5IC8gcmVtbW92ZSBzZXRMZXZlbCgpIHRvIHNlZSBhbGwgZGVidWcgbG9nZ2luZ1xuICAgIEBsb2dnZXIgPSBMb2dnZXIuZ2V0KFwiUmFkaXVtT25lXCIpXG5cbiAgICBAcG9zdFdpZGdldFNldHVwIEB0YXJnZXQsIEBvcHRpb25zIGlmIEB3aWRnZXQgPT0gJ2FzaWRlJ1xuXG5cbiAgcG9zdFdpZGdldFNldHVwOihlbCwgb3B0aW9ucykgLT5cbiAgICAjIEBsb2dnZXIuZGVidWcgJ0Bwb3N0V2lkZ2V0U2V0dXAnLCBlbCwgb3B0aW9uc1xuXG4gICAgIyBtZXJnZSBkZWZhdWx0cyB3aXRoIG9wdGlvbnNcbiAgICBjb25maWcgPSAkLmV4dGVuZCB7fSwgcG9zdFdpZGdldERlZmF1bHRzLCBvcHRpb25zXG4gICAgaWYgd2luZG93LnBvc3Rfd2lkZ2V0P1xuICAgICAgd2luZG93LnBvc3Rfd2lkZ2V0IGVsLCBjb25maWdcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJhZGl1bU9uZVxuIiwiUGFnaW5hdGlvbiA9IHJlcXVpcmUgJy4vX2NvbXBvbmVudHMucGFnaW5hdGlvbi5jb2ZmZWUnXG5cbmNsYXNzIFNlYXJjaFJlc3VsdHNcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICByZXR1cm4gdW5sZXNzICQoXCJib2R5XCIpLmhhc0NsYXNzKFwic2VhcmNoLXJlc3VsdHNcIilcbiAgICBAYXBpVXJsID0gJ2h0dHA6Ly9zZWFyY2guZmFjdG9yeW1lZGlhLmNvbS8nXG4gICAgI0BhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDIwLydcbiAgICBAc2l0ZSA9IGRhdGFMYXllclswXS53ZWJzaXRlU2l0ZVxuICAgIEBsb2NhbGUgPSBAZ2V0TG9jYWxlXG4gICAgQHJlc3VsdHNXcmFwcGVyID0gJCgnLnRlcm1zLWxpc3Rpbmcuc2VhcmNoLXJlc3VsdHMtY29udGVudHMnKVxuICAgIEBzZWFyY2hQYXJhbXMgPSBAZ2V0U2VhcmNoUGFyYW1zKClcbiAgICBAc2VhcmNoUGFyYW1zLnBhZ2UgfHw9IDFcbiAgICBAc2VhcmNoUGFyYW1zLmVudGl0eSB8fD0gJ3RvdGFsJ1xuICAgIEBldmVudEJpbmRpbmdzKClcblxuICAgIGlmIEBzZWFyY2hQYXJhbXMuc1xuICAgICAgQGdldENvdW50cygpXG5cbiAgZXZlbnRCaW5kaW5nczogLT5cbiAgICAjIHNlbGVjdCBzZWFyY2ggcGhyYXNlIG9uIGZvY3VzXG4gICAgJCgnLnNlYXJjaC1mb3JtLWlucHV0Jykub24gJ2ZvY3VzJywgKGUpIC0+XG4gICAgICBlLnRhcmdldC5zZWxlY3QoKVxuXG4gICAgIyAkKCcuc2VhcmNoLWZvcm0taW5wdXQnKS5vbiAna2V5dXAnLCAoZSk9PlxuICAgICMgICBAc2VhcmNoUGFyYW1zLnMgPSAkKGUudGFyZ2V0KS52YWwoKVxuICAgICMgICBpZiBAc2VhcmNoUGFyYW1zLnMgJiYgQHNlYXJjaFBhcmFtcy5zLmxlbmd0aCA+IDNcbiAgICAjICAgICBAc2VhcmNoVGltZW91dCA9IHNldFRpbWVvdXQgPT5cbiAgICAjICAgICAgIEBzZWFyY2goQHNlYXJjaFBhcmFtcylcbiAgICAjICAgICAgIEBzZXRQYWdlKFwiU2VhcmNoIFJlc3VsdHM6ICN7QHNlYXJjaFBhcmFtcy5zfVwiLCBcIi8/I3skLnBhcmFtKEBzZWFyY2hQYXJhbXMpfVwiKVxuICAgICMgICAgICwgNDAwXG5cbiAgICAkKCcuc2VhcmNoLWZvcm0nKS5vbiAnc3VibWl0JywgKGUpID0+XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIEBzZWFyY2hQYXJhbXMucyA9ICQoZS50YXJnZXQpLmZpbmQoXCIuc2VhcmNoLWZvcm0taW5wdXRcIikudmFsKClcbiAgICAgIEBzZWFyY2hQYXJhbXMuZW50aXR5ID0gJ3RvdGFsJ1xuICAgICAgaWYgQHNlYXJjaFBhcmFtcy5zXG4gICAgICAgIEBzZWFyY2goQHNlYXJjaFBhcmFtcylcbiAgICAgICAgJChcIi5zZWFyY2gtZmlsdGVyLXRhYnMgYVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgJChcIltkYXRhLXNlYXJjaC1lbnRpdHk9J3RvdGFsJ11cIikuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIEBzZXRQYWdlKFwiU2VhcmNoIFJlc3VsdHM6ICN7QHNlYXJjaFBhcmFtcy5zfVwiLCBcIi8/I3skLnBhcmFtKEBzZWFyY2hQYXJhbXMpfVwiKVxuXG4gICAgJChcIi5zZWFyY2gtZmlsdGVyLXRhYnNcIikub24gJ2NsaWNrJywgJ2EnLCAoZSkgPT5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZWwgPSAkKGUudGFyZ2V0KVxuICAgICAgJChcIltkYXRhLXNlYXJjaC1lbnRpdHldXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXG4gICAgICBtZW51SXRlbSA9IGlmIGVsLmRhdGEoJ3NlYXJjaC1lbnRpdHknKSAhPSB1bmRlZmluZWQgdGhlbiBlbCBlbHNlICBlbC5wYXJlbnQoKVxuICAgICAgbWVudUl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgIEBzZWFyY2hQYXJhbXMuZW50aXR5ID0gbWVudUl0ZW0uZGF0YSgnc2VhcmNoLWVudGl0eScpXG4gICAgICBAc2VhcmNoUGFyYW1zLnBhZ2UgPSAxXG4gICAgICBAc2VhcmNoKEBzZWFyY2hQYXJhbXMpXG5cbiAgICAgIHF1ZXJ5ID1cbiAgICAgICAgczogQHNlYXJjaFBhcmFtcy5zXG4gICAgICAgIGVudGl0eTogQHNlYXJjaFBhcmFtcy5lbnRpdHlcbiAgICAgICAgcGFnZTogQHNlYXJjaFBhcmFtcy5wYWdlXG5cbiAgICAgIEBzZXRQYWdlKFwiU2VhcmNoIFJlc3VsdHM6ICN7QHNlYXJjaFBhcmFtcy5zfVwiLCBcIi8/I3skLnBhcmFtKHF1ZXJ5KX1cIilcblxuICAgICMgcGFnaW5hdGVcbiAgICAkKFwiLnBhZ2luYXRpb25cIikub24gJ2NsaWNrJywgJ2EnLCAoZSkgPT5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdXJsID0gJChlLnRhcmdldCkuYXR0cignaHJlZicpXG4gICAgICBpZiB1cmxcbiAgICAgICAgcGFyYW1zID0gdXJsLnJlcGxhY2UoJy8nLCAnJylcbiAgICAgICAgQHNlYXJjaFBhcmFtcyA9IEBnZXRTZWFyY2hQYXJhbXMocGFyYW1zKVxuICAgICAgICBAc2VhcmNoKEBzZWFyY2hQYXJhbXMpXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcCgwKVxuICAgICAgICBAc2V0UGFnZShcIlNlYXJjaCBSZXN1bHRzOiAje0BzZWFyY2hQYXJhbXMuc31cIiwgdXJsKVxuXG4gIHNldFBhZ2U6ICh0aXRsZSwgdXJsKS0+XG4gICAgVHJhY2tlcj8udHJhY2tQYWdldmlldyh1cmwpXG4gICAgaWYgd2luZG93Lmhpc3Rvcnk/LnB1c2hTdGF0ZT9cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCB0aXRsZSwgdXJsKVxuXG4gIHNlYXJjaDogKHBhcmFtcykgLT5cbiAgICBAc2hvd0xvYWRpbmdTcGlubmVyKClcblxuICAgIHF1ZXJ5ID1cbiAgICAgIHE6IHBhcmFtcy5zXG4gICAgICBzaXRlOiBAc2l0ZVxuICAgICAgbG9jYWxlOiBAbG9jYWxlXG4gICAgICBwYWdlOiBwYXJhbXMucGFnZVxuICAgICAgcGVyX3BhZ2U6IDIwXG5cbiAgICB1bmxlc3MgcGFyYW1zLmVudGl0eSA9PSAndG90YWwnXG4gICAgICBxdWVyeS5lbnRpdHkgPSBwYXJhbXMuZW50aXR5XG5cbiAgICAkLmFqYXhcbiAgICAgIHVybDogXCIje0BhcGlVcmx9c2VhcmNoLmpzb24/I3skLnBhcmFtKHF1ZXJ5KX1cIlxuICAgICAgZXJyb3I6IChqcVhIUiwgc3RhdHVzLCBlcnJvcik9PlxuICAgICAgICBAcmVzdWx0c1dyYXBwZXIuaHRtbChcIjxwIGNsYXNzPSdtZXNzYWdlIGVycm9yJz5FcnJvciBsb2FkaW5nIHNlYXJjaCByZXN1bHRzLCBwbGVhc2UgdHJ5IGFnYWluLiA8YnIgLz5FcnJvcjogI3tlcnJvcn08L3A+XCIpXG4gICAgICBzdWNjZXNzOiAocmVzdWx0cywgc3RhdHVzLCBqcVhIUikgPT5cbiAgICAgICAgdG90YWwgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcignWC1Ub3RhbC1SZWNvcmRzJylcbiAgICAgICAgQHVwZGF0ZVJlc3VsdHMocmVzdWx0cylcbiAgICAgICAgQHVwZGF0ZVBhZ2luYXRpb24odG90YWwpXG4gICAgICAgIEBnZXRDb3VudHMoKVxuICAgICAgICBpZiB1cGRhdGVQcm9maWxlcz9cbiAgICAgICAgICBAdXBkYXRlUHJvZmlsZVJlc3VsdHMocmVzdWx0cylcblxuICB1cGRhdGVSZXN1bHRzOiAocmVzdWx0cykgLT5cbiAgICBvdXRwdXQgPSAnJ1xuICAgICQuZWFjaCByZXN1bHRzLCAoaW5kZXgsIHBvc3QpID0+XG4gICAgICBvdXRwdXQgKz0gXCJcIlwiPGFydGljbGUgY2xhc3M9J2FydGljbGUtbGlzdGVkJz5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdhcnRpY2xlLWxpbmsgaXMtdHJhY2tlZCcgZGF0YS1jYXRlZ29yeT0nQ2xpY2s6U2VhcmNoIEV2ZW50cycgZGF0YS1hY3Rpb249J1NlYXJjaDogI3tAc2VhcmNoUGFyYW1zLnN9JyBkYXRhLWxhYmVsPSdBcnRpY2xlICcgaHJlZj0nI3twb3N0LnJlZGlyZWN0X3VybH0nIHRpdGxlPScje3Bvc3QudGl0bGV9Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYXJ0aWNsZS1saXN0ZWQtdGh1bWInPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PScnIHNyYz0nI3twb3N0LmltYWdlfSc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhcnRpY2xlLWJvZHknPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0nYXJ0aWNsZS10aXRsZSc+I3twb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRpbWUgY2xhc3M9XCJkYXRlXCIgaXRlbXByb3A9XCJkYXRlUHVibGlzaGVkXCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT4gPGI+I3tAZm9ybWF0RGF0ZShwb3N0LnB1Ymxpc2hlZF9hdCl9PC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhcnRpY2xlLWV4Y2VycHQnPiN7cG9zdC5zdW1tYXJ5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XCJcIlwiXG4gICAgQHJlc3VsdHNXcmFwcGVyLmh0bWwob3V0cHV0KVxuXG4gIHNob3dMb2FkaW5nU3Bpbm5lcjogLT5cbiAgICBAcmVzdWx0c1dyYXBwZXIuaHRtbChcIjxwIGNsYXNzPSdjZW50ZXInPjxpIGNsYXNzPSdmYSBmYS1jaXJjbGUtby1ub3RjaCBmYS1zcGluJz48L2k+IEZldGNoaW5nIHJlc3VsdHMuLi48L3A+XCIpXG5cbiAgZ2V0Q291bnRzOiAtPlxuICAgIHF1ZXJ5ID1cbiAgICAgIHE6IEBzZWFyY2hQYXJhbXMuc1xuICAgICAgc2l0ZTogQHNpdGVcbiAgICAgIGxvY2FsZTogQGxvY2FsZVxuXG4gICAgJC5nZXRKU09OIFwiI3tAYXBpVXJsfXNlYXJjaC9jb3VudHMuanNvbj8jeyQucGFyYW0ocXVlcnkpfVwiLCAoY291bnRzKSA9PlxuICAgICAgQHVwZGF0ZUNvdW50cyhjb3VudHMpXG5cbiAgdXBkYXRlQ291bnRzOiAoZW50aXR5Q291bnRzKSAtPlxuICAgICQuZWFjaCAkKCdbZGF0YS1zZWFyY2gtZW50aXR5XScpLCAoaSwgZWxlbSk9PlxuICAgICAgQHVwZGF0ZU1lbnVJdGVtKCQoZWxlbSksIDApXG5cbiAgICBpZiBlbnRpdHlDb3VudHM/XG4gICAgICAkKCcuc2VhcmNoLXF1ZXJ5LWJsb2NrIHNwYW4nKS5odG1sKGVudGl0eUNvdW50c1sndG90YWwnXSlcbiAgICAgICQuZWFjaCBlbnRpdHlDb3VudHMsIChlbnRpdHksIGNvdW50KSA9PlxuICAgICAgICBtZW51SXRlbSA9ICQoXCJbZGF0YS1zZWFyY2gtZW50aXR5PSN7ZW50aXR5fV1cIilcbiAgICAgICAgQHVwZGF0ZU1lbnVJdGVtKG1lbnVJdGVtLCBjb3VudClcblxuICB1cGRhdGVNZW51SXRlbTogKG1lbnVJdGVtLCBjb3VudCktPlxuICAgIG1lbnVJdGVtLnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgIG1lbnVJdGVtLmZpbmQoJ3NwYW4nKS5odG1sKGNvdW50KVxuICAgIGlmIGNvdW50ID09IHVuZGVmaW5lZCBvciBjb3VudCA9PSAwXG4gICAgICBtZW51SXRlbS5hZGRDbGFzcygnaGlkZGVuJylcblxuICB1cGRhdGVQYWdpbmF0aW9uOiAodG90YWxSZXN1bHRzKSAtPlxuICAgIHF1ZXJ5ID1cbiAgICAgIHM6IEBzZWFyY2hQYXJhbXMuc1xuICAgICAgZW50aXR5OiBAc2VhcmNoUGFyYW1zLmVudGl0eVxuXG4gICAgcGFnaW5hdGlvbiA9IG5ldyBQYWdpbmF0aW9uKCQoJy5wYWdpbmF0aW9uJyksIFwiLz8jeyQucGFyYW0ocXVlcnkpfVwiLCBAc2VhcmNoUGFyYW1zLnBhZ2UsIHRvdGFsUmVzdWx0cywgMjApXG4gICAgcGFnaW5hdGlvbi5wYWdpbmF0ZSgpXG5cbiAgZ2V0U2VhcmNoUGFyYW1zOiAocXVlcnkpIC0+XG4gICAgVXRpbGl0aWVzLmdldFBhcmFtcyhxdWVyeSlcblxuICBmb3JtYXREYXRlOiAoZGF0ZSkgLT5cbiAgICBVdGlsaXRpZXMuZm9ybWF0RGF0ZShkYXRlKVxuXG4gIGdldExvY2FsZTogLT5cbiAgICBsb2NhbGUgPSBVdGlsaXRpZXMuZ2V0TG9jYWxlKClcbiAgICBsb2NhbGUgPSBsb2NhbGUucmVwbGFjZShcIi1cIiwgXCJfXCIpXG5cblxuIyB3aW5kb3cuU2VhcmNoUmVzdWx0cyA9IFNlYXJjaFJlc3VsdHNcbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoUmVzdWx0cyIsInRocm90dGxlID0gcmVxdWlyZSAndGhyb3R0bGVpdCdcbkxvZ2dlciA9IHJlcXVpcmUgJ2pzLWxvZ2dlcidcblxuV2F0Y2hlZFNlY3Rpb24gPSByZXF1aXJlICcuL19jb21wb25lbnRzLndhdGNoZWQtc2VjdGlvbi5jb2ZmZWUnXG5cbmNsYXNzIFNlY3Rpb25XYXRjaGVyXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQGxvZ2dlciA9IExvZ2dlci5nZXQoXCJTZWN0aW9uV2F0Y2hlclwiKVxuICAgIEBzZWN0aW9ucyA9IFtdXG4gICAgQHNlbGVjdG9ycyA9XG4gICAgICAnYm9keS5qcy1zaW5nbGUtYXJ0aWNsZSAuanMtc2VjdGlvbi0taGFzLWFkczpub3QoOmZpcnN0KSc6ICdhcnRpY2xlLXNlY3Rpb24nXG4gICAgICAnLmpzLWNhdGVnb3J5LWFwcGVuZGVkJzogJ2NhdGVnb3J5LWFwcGVuZGVkJ1xuXG4gICAgJC5lYWNoIEBzZWxlY3RvcnMsIChrLHYpPT5cbiAgICAgIGVsZW1zID0gJChrKVxuICAgICAgJC5lYWNoIGVsZW1zLCAoaSwgZWxlbSk9PlxuICAgICAgICBAc2VjdGlvbnMucHVzaCBuZXcgV2F0Y2hlZFNlY3Rpb24oZWxlbSwgdiwgQClcblxuICAgIEBsb2dnZXIuaW5mbyhcIlNlY3Rpb25XYXRjaGVyIGluaXRcIiwgQHNlY3Rpb25zKVxuXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB0aHJvdHRsZSA9PlxuICAgICAgJChAKS50cmlnZ2VyKCdTY3JvbGwuU2VjdGlvbldhdGNoZXIuRk0nKVxuICAgICwgNTAwKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2VjdGlvbldhdGNoZXIiLCJMb2dnZXIgPSByZXF1aXJlICdqcy1sb2dnZXInXG5cbmNsYXNzIFNvY2lhbEFwaU5vdGlmaWVyXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQGxvZ2dlciA9IExvZ2dlci5nZXQoJ1NvY2lhbEFwaU5vdGlmaWVyJylcbiAgICBAc29jaWFsRXZlbnRzID0gXCJGTTpvblRyYWNrU29jaWFsIEZNOm9uRmFjZWJvb2tDb21tZW50Q3JlYXRlZCBGTTpvbkZhY2Vib29rQ29tbWVudFJlbW92ZWRcIlxuICAgIEBiYXNlX3VybCA9IFwiaHR0cDovL3NvY2lhbC5jb3Jlc2l0ZXMubXBvcmEuY29tL1wiXG4gICAgQHNpdGUgPSB3aW5kb3cuZGF0YUxheWVyWzBdLndlYnNpdGVTbHVnXG4gICAgQHVybCA9IFtAYmFzZV91cmwsIEBzaXRlLCBcIi5qc29uXCJdLmpvaW4oJycpXG5cbiAgICBAaW5pdEV2ZW50cygpXG5cbiAgaW5pdEV2ZW50czogLT5cbiAgICAkKHdpbmRvdykub24gQHNvY2lhbEV2ZW50cywgKGUsIGRhdGEpPT5cbiAgICAgIEBsb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cbiAgICAgIHF1ZXJ5ID1cbiAgICAgICAgdXJsOiBkYXRhLnVybFxuICAgICAgICBfbWV0aG9kOiBcInB1dFwiXG5cbiAgICAgICQuYWpheFxuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB1cmw6IEB1cmxcbiAgICAgICAgZGF0YTogcXVlcnlcbiAgICAgICAgY2FjaGU6IGZhbHNlXG5cblxuICBsb2c6IChtc2cpLT5cbiAgICBAbG9nZ2VyLmluZm8oXCJTb2NpYWxBcGlOb3RpZmllclwiLCBtc2cpXG5cbiMgd2luZG93LlNvY2lhbEFwaU5vdGlmaWVyID0gU29jaWFsQXBpTm90aWZpZXJcbm1vZHVsZS5leHBvcnRzID0gU29jaWFsQXBpTm90aWZpZXIiLCIjIFNvY2lhbCBUcmFja2VyXG5jbGFzcyBTb2NpYWxUcmFja2VyXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQGZiSW5pdCgpXG4gICAgQHR3dHRySW5pdCgpXG5cbiAgZmJJbml0OiAtPlxuICAgIHdpbmRvdy5mYkFzeW5jSW5pdCA9IC0+XG4gICAgICBpZiBGQiBhbmQgRkIuRXZlbnQgYW5kIEZCLkV2ZW50LnN1YnNjcmliZVxuXG4gICAgICAgICMgbGlrZVxuICAgICAgICBGQi5FdmVudC5zdWJzY3JpYmUgXCJlZGdlLmNyZWF0ZVwiLCAodGFyZ2V0VXJsKSAtPlxuICAgICAgICAgIFRyYWNrZXIudHJhY2tTb2NpYWwgXCJmYWNlYm9va1wiLCBcImxpa2VcIiwgdGFyZ2V0VXJsXG5cbiAgICAgICAgIyB1bmxpa2VcbiAgICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlIFwiZWRnZS5yZW1vdmVcIiwgKHRhcmdldFVybCkgLT5cbiAgICAgICAgICBUcmFja2VyLnRyYWNrU29jaWFsIFwiZmFjZWJvb2tcIiwgXCJ1bmxpa2VcIiwgdGFyZ2V0VXJsXG5cbiAgIyBGSVhNRTogVGhpcyBpcyBub3Qgd29ya2luZyB3aXRoIFBvLlNUIGJ1dHRvbnNcbiAgdHd0dHJJbml0OiAtPlxuICAgIHdpbmRvdy50d3R0ciA9IHdpbmRvdy50d3R0ciBvciAodCA9XG4gICAgICBfZTogW11cbiAgICAgIHJlYWR5OiAoZikgLT5cbiAgICAgICAgdC5fZS5wdXNoIGZcbiAgICApXG4gICAgdHd0dHIucmVhZHkgLT5cbiAgICAgIGV2ZW50TmFtZXMgPVxuICAgICAgICBjbGljazogXCJcIlxuICAgICAgICB0d2VldDogXCJcIlxuICAgICAgICByZXR3ZWV0OiBcInNvdXJjZV90d2VldF9pZFwiXG4gICAgICAgIGZvbGxvdzogXCJzY3JlZW5fbmFtZVwiXG4gICAgICAgIGZhdm9yaXRlOiBcInR3ZWV0X2lkXCJcblxuICAgICAgZm9yIGV2ZW50TmFtZSBvZiBldmVudE5hbWVzXG4gICAgICAgIGlmIGV2ZW50TmFtZXMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKVxuICAgICAgICAgIHR3dHRyLmV2ZW50cy5iaW5kIGV2ZW50TmFtZSwgKGludGVudEV2ZW50KSAtPlxuICAgICAgICAgICAgaWYgaW50ZW50RXZlbnRcbiAgICAgICAgICAgICAgbGFiZWwgPSAoaWYgaW50ZW50RXZlbnQudHlwZSBpcyBcImNsaWNrXCIgdGhlbiBpbnRlbnRFdmVudC5yZWdpb24gZWxzZSAoaWYgKGludGVudEV2ZW50LmRhdGEpIHRoZW4gaW50ZW50RXZlbnQuZGF0YVtldmVudE5hbWVzW2ludGVudEV2ZW50LnR5cGVdXSBlbHNlIFwiXCIpKVxuICAgICAgICAgICAgICBUcmFja2VyLnRyYWNrU29jaWFsIFwidHdpdHRlclwiLCBpbnRlbnRFdmVudC50eXBlICsgXCIgXCIgKyBsYWJlbCwgZG9jdW1lbnQuVVJMXG5cbiMgd2luZG93LlNvY2lhbFRyYWNrZXIgPSBTb2NpYWxUcmFja2VyXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2lhbFRyYWNrZXJcbiIsIlByb21pc2UgPSByZXF1aXJlICdwcm9taXNlJ1xuZmFzdGRvbSA9IHJlcXVpcmUgJ2Zhc3Rkb20nXG5cbmNsYXNzIFNwYWNlZmluZGVyXG5cbiAgY29uc3RydWN0b3I6IChvcHRpb25zKS0+XG4gICAgQGJvZHlTZWxlY3RvciA9ICcuYy1hcnRpY2xlLWNvcHknXG4gICAgQHBhcmFTZWxlY3RvcnMgPSBcIiN7QGJvZHlTZWxlY3Rvcn0gPiBwLCAje0Bib2R5U2VsZWN0b3J9ID4gZmlndXJlLCAje0Bib2R5U2VsZWN0b3J9IC5zbGlkZS1jb250ZW50ID4gcFwiXG4gICAgQHZpZXdhYmlsaXR5ID0gdHJ1ZVxuICAgIEBkZWJ1ZyA9IHRydWVcbiAgICBAZGVmYXVsdFJ1bGVzID0ge1xuICAgICAgbWluQWJvdmU6IDI1MFxuICAgICAgbWluQmVsb3c6IDMwMFxuIyAgICAgIGNsZWFyQ29udGVudE1ldGE6IDUwXG4gICAgICBzZWxlY3RvcnM6IFxuICAgICAgICAnPiBoMic6XG4gICAgICAgICAgbWluQWJvdmU6IDAsXG4gICAgICAgICAgbWluQmVsb3c6IDI1MCAjIGh1ZyBoMnNcbiAgICAgICAgJz4gKjpub3QocCk6bm90KGgyKSc6XG4gICAgICAgICAgbWluQWJvdmU6IDI1XG4gICAgICAgICAgbWluQmVsb3c6IDI1MCAjIHJlcXVpcmUgc3BhY2luZyBmb3IgYWxsIG90aGVyIGVsZW1lbnRzICBcbiAgICB9XG5cbiAgICBAZGVmYXVsdFJ1bGVzID0gJC5leHRlbmQoQGRlZmF1bHRSdWxlcywgb3B0aW9ucylcblxuICAgIFxuICBfdGVzdEVsZW06IChwYXJhLCBvdGhlciwgcnVsZXMpLT5cbiAgICBpc01pbkFib3ZlID0gcGFyYS50b3AgLSBvdGhlci5ib3R0b20gPj0gcnVsZXMubWluQWJvdmVcbiAgICBpc01pbkJlbG93ID0gb3RoZXIudG9wIC0gcGFyYS50b3AgPj0gcnVsZXMubWluQmVsb3dcbiAgICBpc01pbkFib3ZlIG9yIGlzTWluQmVsb3dcblxuICBfdGVzdEVsZW1zOiAocGFyYSwgb3RoZXJzLCBydWxlcyktPlxuICAgIHJldHVybiAkLmVhY2ggb3RoZXJzLCAob3RoZXIpPT5cbiAgICAgIEBfdGVzdEVsZW0ocGFyYSwgb3RoZXIsIHJ1bGVzKVxuXG4gIF9tYXBFbGVtZW50VG9EaW1lbnNpb25zOiAoZWwpLT5cbiAgICB0b3A6IGVsLm9mZnNldFRvcFxuICAgIGJvdHRvbTogZWwub2Zmc2V0VG9wICsgZWwub2Zmc2V0SGVpZ2h0XG4gICAgZWxlbWVudDogZWxcblxuICBfZGVidWdFcnJQYXJhOiAocCwgbWVzc2FnZSktPlxuICAgICQocClcbiAgICAgIC5hZGRDbGFzcygnc3BhY2VmaW5kZXItLWVycm9yJylcbiAgICAgIC5hdHRyKCdkYXRhLXNwYWNlZmluZGVyLW1zZycsIG1lc3NhZ2UpXG5cbiAgIyBDb252ZW5pZW5jZSBtZXRob2QgdG8gZ2V0IHNwZWNpZmljIGF0dHJpYnV0ZSBmcm9tIGFuIGFycmF5IG9mIG9iamVjdHNcbiAgX3BsdWNrOiAoYXJyLCBrZXkpLT5cbiAgICB2YWx1ZXMgPSAkLm1hcCBhcnIsIChlKS0+XG4gICAgICBlW2tleV1cbiAgICAkKHZhbHVlcylcblxuICBfZW5mb3JjZVJ1bGVzOiAoc2xvdHMsIHJ1bGVzLCBib2R5SGVpZ2h0LCBkZWJ1ZyktPlxuICAgIGZpbHRlcmVkID0gJChzbG90cylcbiAgICBjb250ZW50TWV0YSA9IG51bGxcblxuICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyIChpbmRleCwgcCk9PlxuICAgICAgZmFyRW5vdWdoRnJvbVRvcE9mQm9keSA9IHAudG9wID49IHJ1bGVzLm1pbkFib3ZlXG4gICAgICBmYXJFbm91Z2hGcm9tQm90dG9tT2ZCb2R5ID0gKHAudG9wICsgcnVsZXMubWluQmVsb3cpIDw9IGJvZHlIZWlnaHRcbiAgICAgIHZhbGlkID0gZmFyRW5vdWdoRnJvbVRvcE9mQm9keSAmJiBmYXJFbm91Z2hGcm9tQm90dG9tT2ZCb2R5XG5cbiAgICAgIGlmIGRlYnVnICYmICF2YWxpZFxuICAgICAgICBpZiAhZmFyRW5vdWdoRnJvbVRvcE9mQm9keVxuICAgICAgICAgIEBfZGVidWdFcnJQYXJhKHAuZWxlbWVudCwgXCJUb28gY2xvc2UgdG8gdG9wIG9mIGJvZHk6ICN7cC50b3B9IDwgI3tydWxlcy5taW5BYm92ZX1cIilcbiAgICAgICAgaWYgIWZhckVub3VnaEZyb21Cb3R0b21PZkJvZHlcbiAgICAgICAgICBAX2RlYnVnRXJyUGFyYShwLmVsZW1lbnQsIFwiVG9vIGNsb3NlIHRvIGJvdHRvbSBvZiBib2R5ICN7cC50b3AgKyBydWxlcy5taW5CZWxvd30gPiAje2JvZHlIZWlnaHR9XCIpXG5cbiAgICAgIHJldHVybiB2YWxpZFxuXG4gICAgIyBFbmZvcmNlIGNvbnRlbnQgbWV0YSBydWxlXG4gICAgaWYgcnVsZXMuY2xlYXJDb250ZW50TWV0YVxuICAgICAgY29udGVudE1ldGEgPSBAX21hcEVsZW1lbnRUb0RpbWVuc2lvbnMoJCgnLmpzLWNvbnRlbnQubWV0YScpLmdldCgwKSlcbiAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyIChpbmRleCwgcCk9PlxuICAgICAgICAgdmFsaWQgID0gcC50b3AgPiAoY29udGVudE1ldGEuYm90dG9tICsgcnVsZXMuY2xlYXJDb250ZW50TWV0YSlcbiAgICAgICAgIGlmIGRlYnVnICYmICF2YWxpZFxuICAgICAgICAgICAgQF9kZWJ1Z0VyclBhcmEocC5lbGVtZW50LCAndG9vIGNsb3NlIHRvIGNvbnRlbnQgbWV0YScpXG4gICAgICAgIHJldHVybiB2YWxpZFxuXG5cbiAgICAkLmVhY2ggcnVsZXMuc2VsZWN0b3JzLCAoc2VsZWN0b3IpPT5cbiAgICAgIHJlbGV2YW50RWxlbXMgPSAkLm1hcCAkKFwiI3tAYm9keVNlbGVjdG9yfSAje3NlbGVjdG9yfVwiKSwgKGVsKT0+XG4gICAgICAgIEBfbWFwRWxlbWVudFRvRGltZW5zaW9ucyhlbClcblxuICAgICAgZmlsdGVyZWQgPSBmaWx0ZXJlZC5maWx0ZXIgKGluZGV4LCBwKT0+XG4gICAgICAgIHZhbGlkID0gQF90ZXN0RWxlbXMocCwgcmVsZXZhbnRFbGVtcywgcGFyYW1zKVxuICAgICAgICBpZiBkZWJ1ZyAmJiAhdmFsaWRcbiAgICAgICAgICBAX2RlYnVnRXJyUGFyYShwLmVsZW1lbnQsIFwidG9vIGNsb3NlIHRvIHNlbGVjdG9yICgje3NlbGVjdG9yfVwiKVxuICAgICAgICByZXR1cm4gdmFsaWRcblxuICAgIHJldHVybiBmaWx0ZXJlZFxuXG4gIG9uSW1hZ2VzTG9hZGVkOiA9PlxuICAgIG5vdExvYWRlZCA9ICQoXCIje0Bib2R5U2VsZWN0b3J9IGltZ1wiKS5maWx0ZXIgKGluZGV4LCBpbWcpPT5cbiAgICAgIHJldHVybiAhaW1nLmNvbXBsZXRlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoJC5tYXAobm90TG9hZGVkLCAoaW1nKT0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpLT5cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgNTAwMClcbiAgICAgICAgJC5vbihpbWcsICdsb2FkJywgcmVzb2x2ZSlcbiAgICAgIClcbiAgICApKVxuXG4gIGdldFJlYWR5OiA9PlxuICAgIGlmIEB2aWV3YWJpbGl0eVxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKEBvbkltYWdlc0xvYWRlZCgpKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXG4gIGdldFBhcmFXaXRoU3BhY2U6IChydWxlcywgZGVidWcpLT5cbiAgICBkZWJ1ZyA9IGRlYnVnIG9yIEBkZWJ1Z1xuICAgIGJvZHlTZWxlY3RvciA9IEBib2R5U2VsZWN0b3JcbiAgICBydWxlcyA9IHJ1bGVzIG9yIEBkZWZhdWx0UnVsZXNcbiAgICByZXR1cm4gQGdldFJlYWR5KCkudGhlbiA9PlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKT0+XG4gICAgICAgIGZhc3Rkb20ucmVhZCA9PlxuICAgICAgICAgIGJvZHlCb3R0b20gPSAkKEBib2R5U2VsZWN0b3IpLmdldCgwKS5vZmZzZXRIZWlnaHRcbiAgICAgICAgICBwYXJhRWxlbXMgPSAkKEBwYXJhU2VsZWN0b3JzKS5tYXAgKGksIGVsKT0+XG4gICAgICAgICAgICBAX21hcEVsZW1lbnRUb0RpbWVuc2lvbnMoZWwpXG5cbiAgICAgICAgICAjIFJlc2V0IGFueSBwcmV2aW91cyBkZWJ1ZyBtZXNzYWdlc1xuICAgICAgICAgIGlmIGRlYnVnXG4gICAgICAgICAgICBlbGVtcyA9IEBfcGx1Y2socGFyYUVsZW1zLCAnZWxlbWVudCcpXG4gICAgICAgICAgICBlbGVtc1xuICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcGFjZWZpbmRlci1tc2cnLCAnJylcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzcGFjZWZpbmRlci0tdmFsaWQnKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NwYWNlZmluZGVyLS1lcnJvcicpXG5cbiAgICAgICAgICBzbG90cyA9IEBfZW5mb3JjZVJ1bGVzKHBhcmFFbGVtcywgcnVsZXMsIGJvZHlCb3R0b20sIGRlYnVnKVxuXG4gICAgICAgICAgIyBTZXQgY2xhc3MgdG8gdmFsaWQgZm9yIGZpbHRlcmVkIGVsZW1lbnRzXG4gICAgICAgICAgaWYgZGVidWdcbiAgICAgICAgICAgIGZhc3Rkb20ud3JpdGUgPT5cbiAgICAgICAgICAgICAgQF9wbHVjayhzbG90cywgJ2VsZW1lbnQnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc3BhY2VmaW5kZXItLXZhbGlkJylcblxuXG4gICAgICAgICAgaWYgc2xvdHMubGVuZ3RoXG4gICAgICAgICAgICByZXNvbHZlKHNsb3RzWzBdLmVsZW1lbnQpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwYWNlZmluZGVyIiwiTG9nZ2VyID0gcmVxdWlyZSAnanMtbG9nZ2VyJ1xuXG5jbGFzcyBTcGxpdFBvc3RcbiAgU0VUVElOR1MgPVxuICAgIGFkczpcbiAgICAgIHJlZnJlc2hSYXRlOiAxXG5cblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICByZXR1cm4gdW5sZXNzICQoXCJib2R5XCIpLmhhc0NsYXNzKFwic2luZ2xlLXNwbGl0cG9zdFwiKVxuICAgIEBsb2dnZXIgPSBMb2dnZXIuZ2V0KCdTcGxpdFBvc3QnKVxuXG4gICAgQGxvZ2dlci5pbmZvICdpbml0IC0gc3BsaXRwb3N0cyByZWFkeSdcbiAgICBAc3RhcnRQYWdlID0gcGFyc2VJbnQoc3BsaXRwb3N0X3ZhcnMuY3VycmVudF9wYWdlKVxuICAgIEB0b3RhbFBhZ2VzID0gcGFyc2VJbnQoc3BsaXRwb3N0X3ZhcnMudG90YWxfcGFnZXMpXG4gICAgQHBvc3RQZXJtYWxpbmsgPSBzcGxpdHBvc3RfdmFycy5wZXJtYWxpbmtcbiAgICBAY3VycmVudFBhZ2UgPSBAc3RhcnRQYWdlIHx8IDFcbiAgICBAc2xpZGVEYXRhID0gc3BsaXRwb3N0X3ZhcnMuc2xpZGVfZGF0YVxuICAgIEBzbGlkZXJDbGFzcyA9ICQoJy5zcGxpdHBvc3Qtc2xpZGVyJylcbiAgICBAYWN0aW9uRnJvbU5hdiA9IG51bGxcblxuICAgIGlmIEBzbGlkZXJQcmVzZW50KClcbiAgICAgIEBzZXR1cFNsaWRlcigpXG4gICAgICBAc2xpZGVyID0gQHNsaWRlckNsYXNzLmRhdGEoJ2ZsZXhzbGlkZXInKVxuXG4gICAgQGV2ZW50QmluZGluZ3MoKVxuICAgIEBrZXlCaW5kaW5ncygpXG4gICAgQGxvYWRIaXN0b3J5KClcblxuXG4gIHNldHVwU2xpZGVyOiAtPlxuICAgIEBzbGlkZXJDbGFzcy5mbGV4c2xpZGVyXG4gICAgICBhbmltYXRpb246ICAgICAgICAnc2xpZGUnXG4gICAgICBhbmltYXRpb25TcGVlZDogICAzMDBcbiAgICAgIGNvbnRyb2xOYXY6ICAgICAgIGZhbHNlXG4gICAgICBkaXJlY3Rpb25OYXY6ICAgICBmYWxzZVxuICAgICAgc2xpZGVzaG93OiAgICAgICAgZmFsc2VcbiAgICAgIGtleWJvYXJkOiAgICAgICAgIGZhbHNlXG4gICAgICBsYXp5TG9hZDogICAgICAgICB0cnVlXG4gICAgICB0b3VjaDogICAgICAgICAgICB0cnVlXG4gICAgICBzbW9vdGhIZWlnaHQ6ICAgICB0cnVlXG4gICAgICB2aWRlbzogICAgICAgICAgICB0cnVlXG4gICAgICBzdGFydEF0OiAgICAgICAgICBAZ2V0U2xpZGVOdW1iZXIoKVxuXG4gICAgICBiZWZvcmU6IChzbGlkZXIpID0+XG4gICAgICAgIEBtYXliZVJlZnJlc2hJZnJhbWUoc2xpZGVyLnNsaWRlc1tzbGlkZXIuY3VycmVudFNsaWRlXSlcblxuICAgICAgYWZ0ZXI6IChzbGlkZXIpID0+XG4gICAgICAgIEBkb1NsaWRlKHNsaWRlci5jdXJyZW50U2xpZGUpXG5cbiAgICAkKHdpbmRvdykub24gXCJGTTpvbkZhY2Vib29rWEZCTUxSZW5kZXJcIiwgPT5cbiAgICAgIEBsb2dnZXIuaW5mbyhcInNldHVwU2xpZGVyIC0gb25GYWNlYm9va1hGQk1MUmVuZGVyI3Jlc2l6ZVwiKVxuICAgICAgc2V0VGltZW91dCA9PlxuICAgICAgICBAc2xpZGVyLnJlc2l6ZSgpXG4gICAgICAsIDMwMDBcblxuICBnb3RvUGFnZTogKHBhZ2UpIC0+XG4gICAgc2xpZGVOdW1iZXIgPSBAZ2V0U2xpZGVOdW1iZXIocGFnZSlcblxuICAgIGlmIEBzbGlkZXJQcmVzZW50KCkgYW5kIEBoYXNBc3luY0FkcygpXG4gICAgICBAc2xpZGVyLmZsZXhBbmltYXRlKHNsaWRlTnVtYmVyKVxuICAgIGVsc2VcbiAgICAgIEBkb1NsaWRlKHNsaWRlTnVtYmVyKVxuXG5cbiAgZG9TbGlkZTogKHNsaWRlTnVtYmVyKSAtPlxuICAgIGlmIEBoYXNBc3luY0FkcygpXG4gICAgICBAdXBkYXRlUGFnZUNvbnRlbnQoc2xpZGVOdW1iZXIpXG4gICAgICBAdXBkYXRlTWV0YVRhZ3Moc2xpZGVOdW1iZXIpXG4gICAgICBAdXBkYXRlSGlzdG9yeShzbGlkZU51bWJlciArIDEpIGlmIEBhY3Rpb25Gcm9tTmF2XG4gICAgICBAbWF5YmVSZWxvYWRBZHMoKVxuICAgICAgQHRyYWNrUGFnZXZpZXcoc2xpZGVOdW1iZXIgKyAxKVxuICAgICAgQGN1cnJlbnRQYWdlID0gKHNsaWRlTnVtYmVyICsgMSlcbiAgICAgIEB1cGRhdGVQYWdlTmF2KClcbiAgICAgICQod2luZG93KS50cmlnZ2VyKFwiRk06b25TcGxpdFBvc3RQYWdlQ2hhbmdlZFwiLCBzbGlkZU51bWJlcjogc2xpZGVOdW1iZXIpICMgTm90aWZ5IERPTSB0aGF0IHRoZSBwYWdlIGhhcyBjaGFuZ2VkXG4gICAgZWxzZVxuICAgICAgQGN1cnJlbnRQYWdlID0gKHNsaWRlTnVtYmVyICsgMSlcbiAgICAgIEBsb2dnZXIuaW5mbyhcImRvU2xpZGUgLSBEb2luZyBuYXYgd2l0aG91dCBBU1lOQyB0byBwYWdlOiAje3NsaWRlTnVtYmVyfVwiKVxuICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBcIiN7QHBvc3RQZXJtYWxpbmt9LyN7QGN1cnJlbnRQYWdlfVwiXG5cblxuICBnZXRTbGlkZU51bWJlcjogKHBhZ2UpIC0+XG4gICAgY3VycmVudFNsaWRlID0gKEBjdXJyZW50UGFnZSAtIDEpXG5cbiAgICBpZiBwYWdlID09ICduZXh0J1xuICAgICAgaWYgQGN1cnJlbnRQYWdlID09IEB0b3RhbFBhZ2VzXG4gICAgICAgIDBcbiAgICAgIGVsc2VcbiAgICAgICAgQGN1cnJlbnRQYWdlXG5cbiAgICBlbHNlIGlmIHBhZ2UgPT0gJ3ByZXYnXG4gICAgICBpZiBjdXJyZW50U2xpZGUgPT0gMFxuICAgICAgICAoQHRvdGFsUGFnZXMgLSAxKVxuICAgICAgZWxzZVxuICAgICAgICAoY3VycmVudFNsaWRlIC0gMSlcblxuICAgIGVsc2UgaWYgJC5pc051bWVyaWMocGFnZSlcbiAgICAgIChwYWdlIC0gMSlcblxuICAgIGVsc2VcbiAgICAgIGN1cnJlbnRTbGlkZVxuXG5cbiAgZXZlbnRCaW5kaW5nczogLT5cbiAgICB0YXAgPSBpZiBAaGFzVG91Y2goKSB0aGVuIFwidG91Y2hlbmRcIiBlbHNlIFwiY2xpY2tcIlxuXG4gICAgJChcIltkYXRhLXNwbGl0cG9zdD0nbmV4dC1idG4nXVwiKS5vbiB0YXAsIChldmVudCkgPT5cbiAgICAgIGlmIEBoYXNBc3luY0FkcygpXG4gICAgICAgIEBhY3Rpb25Gcm9tTmF2ID0gdHJ1ZVxuICAgICAgICBAZ290b1BhZ2UoJ25leHQnKVxuICAgICAgICBAc2Nyb2xsVG9Ub3AoKSBpZiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2FjdGlvbicpIGlzICdOZXh0IExhc3QnXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICQoXCJbZGF0YS1zcGxpdHBvc3Q9J3ByZXYtYnRuJ11cIikub24gdGFwLCAoZXZlbnQpID0+XG4gICAgICBpZiBAaGFzQXN5bmNBZHMoKVxuICAgICAgICBAYWN0aW9uRnJvbU5hdiA9IHRydWVcbiAgICAgICAgQGdvdG9QYWdlKCdwcmV2JylcbiAgICAgICAgQHNjcm9sbFRvVG9wKCkgaWYgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdhY3Rpb24nKSBpcyAnUHJldiBMYXN0J1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAkKCdbZGF0YS1zcGxpdHBvc3QtaW5kZXhdJykub24gdGFwLCAoZXZlbnQpID0+XG4gICAgICBpZiBAaGFzQXN5bmNBZHMoKVxuICAgICAgICBAYWN0aW9uRnJvbU5hdiA9IHRydWVcbiAgICAgICAgcGFnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnc3BsaXRwb3N0LWluZGV4JykgKyAxXG4gICAgICAgIEBnb3RvUGFnZShwYWdlKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAga2V5QmluZGluZ3M6IC0+XG4gICAgJChkb2N1bWVudCkuYmluZCBcImtleXVwXCIsIChldmVudCkgPT5cbiAgICAgIEBhY3Rpb25Gcm9tTmF2ID0gdHJ1ZVxuXG4gICAgICBpZiBAZ2FsbGVyeU9wZW4oKSBpcyBub3QgdHJ1ZVxuICAgICAgICBpZiBldmVudC5rZXlDb2RlIGlzIDM5XG4gICAgICAgICAgQGdvdG9QYWdlKCduZXh0JylcbiAgICAgICAgICBAdHJhY2tFdmVudChcIk5leHQgS2V5Ym9hcmRcIilcblxuICAgICAgICBlbHNlIGlmIGV2ZW50LmtleUNvZGUgaXMgMzdcbiAgICAgICAgICBAZ290b1BhZ2UoJ3ByZXYnKVxuICAgICAgICAgIEB0cmFja0V2ZW50KFwiUHJldiBLZXlib2FyZFwiKVxuXG5cbiAgbWF5YmVSZWxvYWRBZHM6IC0+XG4gICAgQGN1cnJlbnRBZFJlZnJlc2ggb3I9IDFcblxuICAgIGlmIEBjdXJyZW50QWRSZWZyZXNoIC8gU0VUVElOR1MuYWRzLnJlZnJlc2hSYXRlIGlzIDFcbiAgICAgIEByZWxvYWRBZHMoKVxuICAgICAgQGN1cnJlbnRBZFJlZnJlc2ggPSAxXG4gICAgZWxzZVxuICAgICAgQGN1cnJlbnRBZFJlZnJlc2grK1xuXG5cbiAgcmVsb2FkQWRzOiAtPlxuICAgICMgZ2V0IGhlYWRlciBoZWlnaHRcblxuICAgIGlmIEBoYXNBc3luY0FkcygpXG4gICAgICAkKHdpbmRvdykudHJpZ2dlcignU3BsaXRQb3N0LlBhZ2VMb2FkZXIuRk0nLCB7c2NvcGVzOiBbJy5jLXNpdGUtaGVhZGVyJywgJy5jLXNwbGl0cG9zdCddfSlcblxuXG5cbiAgbWF5YmVSZWZyZXNoSWZyYW1lOiAoc2xpZGVfZWxlbWVudCkgLT5cbiAgICBpZnJhbWUgPSAkKHNsaWRlX2VsZW1lbnQpLmZpbmQoJ2lmcmFtZScpXG5cbiAgICBpZiBpZnJhbWUubGVuZ3RoID4gMFxuICAgICAgaWZyYW1lLmF0dHIoJ3NyYycsIGlmcmFtZS5hdHRyKCdzcmMnKSlcblxuXG4gIHVwZGF0ZVBhZ2VOYXY6IC0+XG4gICAgbmV4dFBhZ2UgPSBAZ2V0U2xpZGVOdW1iZXIoJ25leHQnKSArIDFcbiAgICBwcmV2UGFnZSA9IEBnZXRTbGlkZU51bWJlcigncHJldicpICsgMVxuICAgICQoXCJbZGF0YS1zcGxpdHBvc3Q9J25leHQtYnRuJ11cIikuYXR0cignaHJlZicsIFwiI3tAcG9zdFBlcm1hbGlua30vI3tuZXh0UGFnZX1cIilcbiAgICAkKFwiW2RhdGEtc3BsaXRwb3N0PSdwcmV2LWJ0biddXCIpLmF0dHIoJ2hyZWYnLCBcIiN7QHBvc3RQZXJtYWxpbmt9LyN7cHJldlBhZ2V9XCIpXG5cblxuICB1cGRhdGVQYWdlQ29udGVudDogKHNsaWRlTnVtYmVyKSAtPlxuICAgIGRhdGEgPSBAc2xpZGVEYXRhW3NsaWRlTnVtYmVyXVxuICAgICQoXCJbZGF0YS1zcGxpdHBvc3Q9J3BhZ2UtbnVtYmVyJ11cIikuaHRtbChkYXRhLmRpc3BsYXllZF9udW1iZXIpXG4gICAgJChcIltkYXRhLXNwbGl0cG9zdD0ndGl0bGUnXVwiKS5odG1sKGRhdGEudGl0bGUpXG4gICAgJChcIltkYXRhLXNwbGl0cG9zdD0nY29udGVudCddXCIpLmh0bWwoZGF0YS5jb250ZW50KVxuXG4gICAgIyByZS1pbml0IHRoZSBHYWxsZXJ5XG4gICAgJChcIi5nYWxsZXJ5XCIpLmVhY2ggLT5cbiAgICAgICQod2luZG93KS50cmlnZ2VyKFwiaW5pdEdhbGxlcnlcIilcblxuXG4gIHVwZGF0ZU1ldGFUYWdzOiAoc2xpZGVOdW1iZXIpIC0+XG4gICAgaWYgQHNsaWRlRGF0YVtzbGlkZU51bWJlcl0udGl0bGVcbiAgICAgIG1ldGFUaXRsZSA9IFwiI3tAc2xpZGVEYXRhW3NsaWRlTnVtYmVyXS50aXRsZX0gfCAje3NwbGl0cG9zdF92YXJzLnBvc3RfdGl0bGV9XCJcbiAgICBlbHNlXG4gICAgICBtZXRhVGl0bGUgPSBzcGxpdHBvc3RfdmFycy5wb3N0X3RpdGxlXG5cbiAgICAkKFwidGl0bGVcIikuaHRtbChtZXRhVGl0bGUpXG4gICAgJChcIm1ldGFbcHJvcGVydHk9J29nOnRpdGxlJ11cIikuYXR0cihcImNvbnRlbnRcIiwgXCIje0BzbGlkZURhdGFbc2xpZGVOdW1iZXJdLnRpdGxlfSB8ICN7c3BsaXRwb3N0X3ZhcnMucG9zdF90aXRsZX1cIilcbiAgICAkKFwibWV0YVtwcm9wZXJ0eT0nb2c6dXJsJ11cIikuYXR0cihcImNvbnRlbnRcIiwgXCIje0Bwb3N0UGVybWFsaW5rfS8je0BjdXJyZW50UGFnZX1cIilcblxuXG4gIGxvYWRIaXN0b3J5OiAtPlxuICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKGV2ZW50KSA9PlxuICAgICAgaWYgZXZlbnQuc3RhdGUgYW5kIGV2ZW50LnN0YXRlLnBhZ2VcbiAgICAgICAgQGFjdGlvbkZyb21OYXYgPSBmYWxzZVxuICAgICAgICBAZ290b1BhZ2UoZXZlbnQuc3RhdGUucGFnZSlcblxuXG4gIHVwZGF0ZUhpc3Rvcnk6IChwYWdlKSAtPlxuICAgIHN0YXRlID0gcGFnZTogcGFnZVxuICAgIHRpdGxlID0gXCJQYWdlOiAje3BhZ2V9XCJcbiAgICB1cmwgPSBcIiN7QHBvc3RQZXJtYWxpbmt9LyN7cGFnZX1cIlxuXG4gICAgaWYoaGlzdG9yeS5wdXNoU3RhdGUpXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHVybClcblxuXG4gIHNsaWRlclByZXNlbnQ6IC0+XG4gICAgQHNsaWRlckNsYXNzLmxlbmd0aCA+IDBcblxuXG4gIHNjcm9sbFRvVG9wOiAtPlxuICAgIGlmICQod2luZG93KS53aWR0aCgpIDwgNDgwXG4gICAgICBlbGVtZW50ID0gJChcIi5zcGxpdHBvc3QtdGl0bGVcIilcbiAgICBlbHNlXG4gICAgICBlbGVtZW50ID0gJChcIi50aXRsZS1ibG9ja1wiKVxuXG4gICAgbmF2SGVpZ2h0ID0gJChcIi5uYXYtcHJpbWFyeSwgLm1haW4udG9wLm1lbnVcIikuaGVpZ2h0KClcbiAgICBpZiAkKFwiLmZpeGVkLXNvY2lhbFwiKS5sZW5ndGggPiAwXG4gICAgICBuYXZIZWlnaHQgPSBuYXZIZWlnaHQgKyAkKFwiLmZpeGVkLXNvY2lhbFwiKS5oZWlnaHQoKVxuXG4gICAgJChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKGVsZW1lbnQub2Zmc2V0KCkudG9wIC0gbmF2SGVpZ2h0KVxuXG5cbiAgaGFzVG91Y2g6IC0+XG4gICAgaWYoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IG9yICh3aW5kb3cuRG9jdW1lbnRUb3VjaCBhbmQgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSBvciB0eXBlb2YgVG91Y2hFdmVudCA9PSBcIm9iamVjdFwiKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICByZXR1cm4gZmFsc2VcblxuICBoYXNBc3luY0FkczogLT5cbiAgICB0cnVlXG4gICAgIyBUT0RPOiBpdCdsbCBhbHdheXMgYmUgYXN5bmMgbm93LCBzbyB3ZSBjYW4gcHJvYmFibHlcbiAgICAjIGdldCByaWQgb2YgdGhpcyBhZnRlciBBZExvYWRlciBjaG5hZ2VzIGhhdmUgYmVlbiBtYWRlXG4gICAgIyBhZExvYWRlcj8uYXN5bmNfdGFncy5sZW5ndGggPiAwXG5cbiAgdHJhY2tFdmVudDogKGFjdGlvbikgLT5cbiAgICByZXR1cm4gdW5sZXNzIHdpbmRvdy5UcmFja2VyXG4gICAgVHJhY2tlci50cmFjayhcIlNwbGl0cG9zdFwiLCBhY3Rpb24pXG5cblxuICB0cmFja1BhZ2V2aWV3OiAocGFnZSkgLT5cbiAgICByZXR1cm4gdW5sZXNzIHdpbmRvdy5UcmFja2VyXG4gICAgVHJhY2tlci50cmFja1BhZ2V2aWV3KFwiI3t3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9XCIpXG5cblxuICBnYWxsZXJ5T3BlbjogLT5cbiAgICAkKCdib2R5JykuaGFzQ2xhc3MgJ2dhbGxlcnktaXMtc2hvd2luZydcblxuXG4jICQgLT5cbiMgICB3aW5kb3cuc3BsaXRQb3N0ID0gbmV3IFNwbGl0UG9zdCgpXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0UG9zdCIsIiMgVGFic1xuY2xhc3MgVGFic1xuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIHRhYnMgPSAkKFwiLnRhYnNcIilcbiAgICB0YWJzLmVhY2ggLT5cbiAgICAgIHdyYXBwZXIgPSAkKHRoaXMpXG4gICAgICBtZW51X2l0ZW1zID0gd3JhcHBlci5maW5kKFwiLnRhYnMtbWVudS1pdGVtXCIpXG4gICAgICBjb250ZW50ID0gd3JhcHBlci5maW5kKFwiLnRhYnMtY29udGVudFwiKVxuICAgICAgc3dpdGNoX29uID0gd3JhcHBlci5kYXRhKFwic3dpdGNoXCIpIG9yIFwiY2xpY2tcIlxuICAgICAgcmV0dXJuICBpZiBtZW51X2l0ZW1zLmxlbmd0aCBpcyAwIG9yIGNvbnRlbnQubGVuZ3RoIGlzIDBcbiAgICAgIG1lbnVfaXRlbXMuZmlyc3QoKS5hZGRDbGFzcyBcImlzLWFjdGl2ZVwiXG4gICAgICBjb250ZW50LmZpcnN0KCkuYWRkQ2xhc3MgXCJpcy1zaG93aW5nXCJcblxuICAgICAgbWVudV9pdGVtcy5lYWNoIChpbmRleCkgLT5cbiAgICAgICAgJCh0aGlzKS5vbiBzd2l0Y2hfb24sIChlKSAtPlxuICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2xhc3MgXCJpcy1zaG93aW5nXCJcbiAgICAgICAgICAkKGNvbnRlbnQuZ2V0KGluZGV4KSkuYWRkQ2xhc3MgXCJpcy1zaG93aW5nXCJcbiAgICAgICAgICBtZW51X2l0ZW1zLnJlbW92ZUNsYXNzIFwiaXMtYWN0aXZlXCJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzIFwiaXMtYWN0aXZlXCJcblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG5cbiMgd2luZG93LlRhYnMgPSBUYWJzXG5tb2R1bGUuZXhwb3J0cyA9IFRhYnMiLCJMb2dnZXIgPSByZXF1aXJlICdqcy1sb2dnZXInXG5cbkxpbmtQYXJzZXIgPSByZXF1aXJlICcuL19jb21wb25lbnRzLmxpbmstcGFyc2VyLmNvZmZlZSdcblxuY2xhc3MgRk1UcmFja2VyXG5cbiAgIyBZb3Ugc2hvdWxkIGltcGxlbWVudCBhIGNsYXNzIHRoYXQgbGlzdGVucyBmb3IgdGhlc2UgZXZlbnRzIHRvIGNyZWF0ZSBldmVudCBkcml2ZW4gYW5hbHl0aWNzIGFuZCB0cmFja2luZ1xuICAjIFRoaXMgY2xhc3Mgc2hvdWxkIG9ubHkgaW1wbGVtZW50IHRoZSBiaW5kaW5nIG9mIHRoZSBldmVudHMgdG8gc3BlY2lmaWMgZWxlbWVudHNcbiAgIyBDbGFzc2VzIHRoYXQgbGlzdGVuIGZvciBhY3Rpb25zIGNyZWF0ZWQgYnkgRk1UcmFja2VyIHNob3VsZCBiZSBpbmNsdWRlZCBhbmQgaW5zdGFuY2lhdGVkIGJlZm9yZSBpdCB0byBlbnN1cmUgdGhhdFxuICAjIGV2ZW50IGJpbmRpbmdzIGFyZSByZWFkeSB3aGVuIHRoZSB0cmFja2VyIHN0YXJ0cyBmaXJpbmcgZXZlbnRzXG5cbiAgIyBFdmVudHMgRW1pdHRlZDpcbiAgIyBcIkZNOm9uVHJhY2tQYWdldmlld1wiLCB7dXJsOiB1cmx9KVxuICAjIFwiRk06b25UcmFja0V2ZW50XCIsIHtjYXRlZ29yeTogY2F0ZWdvcnksIGFjdGlvbjogYWN0aW9uLCBsYWJlbDogbGFiZWwsIGNhbGxiYWNrOiBjYWxsYmFja30pXG4gICMgXCJGTTpvblRyYWNrU29jaWFsXCIsIHtuZXR3b3JrOiBuZXR3b3JrLCBhY3Rpb246IHNvY2lhbEFjdGlvbiwgdXJsOiB0YXJnZXRVcmx9KVxuICAjIFwiRk06b25UcmFja0NsaWNrXCIsIHtzZWxlY3Rvcjogc2VsZWN0b3IsIGNhdGVnb3J5OiBjLCBhY3Rpb246IGEsIGxhYmVsOiBsfVxuXG4gICMgVGhpcyBjbGFzcyBpcyBpbnN0YW5jaWF0ZWQgYXMgVHJhY2tlciBpbiBpbml0LmpzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBsb2dnZXIgPSBMb2dnZXIuZ2V0KCdGTVRyYWNrZXInKVxuXG4gICAgQHRyYWNrZWQgPSB7fVxuICAgIEBib2R5ID0gJChcImJvZHlcIilcblxuICAgIGlmIEZNQWRUcmFja2VyP1xuICAgICAgQGFkVHJhY2tlciA9IG5ldyBGTUFkVHJhY2tlcigpXG5cbiAgICBzZXRUaW1lb3V0ID0+XG4gICAgICBAYm9vdHN0cmFwQ2xpY2tUcmFja2luZygpXG4gICAgICBAdHJhY2tPdGhlckNsaWNrcygpXG4gICAgICBAdHJhY2tFeHRlcm5hbExpbmtzKClcbiAgICAsIDYwMFxuXG4gIGxvZzogKGFjdGlvbiwgbXNnKS0+XG4gICAgQGxvZ2dlci5pbmZvIGFjdGlvbiwgbXNnXG5cblxuICB0cmFjazogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCBjYWxsYmFjayktPlxuICAgIHJldHVybiBmYWxzZSBpZiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiZm9ydW1zLlwiKSA+IC0xXG4gICAgcmV0dXJuIGZhbHNlIGlmIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCJjb3Jlc2l0ZS5sb2NhbFwiKSA+IC0xXG4gICAgbGFiZWwgPSBsYWJlbCBvciAobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpXG4gICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJGTTpvblRyYWNrRXZlbnRcIiwge2NhdGVnb3J5OiBjYXRlZ29yeSwgYWN0aW9uOiBhY3Rpb24sIGxhYmVsOiBsYWJlbCwgY2FsbGJhY2s6IGNhbGxiYWNrfSlcbiAgICBAbG9nIFwidHJhY2tcIixcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIGxhYmVsOiBsYWJlbFxuXG4gICMgVHJhY2sgYSB2aXJ0dWFsIHBhZ2V2aWV3IChlLmcuIEFKQVggY2FsbClcbiAgdHJhY2tQYWdldmlldzogKHVybCktPlxuICAgICQod2luZG93KS50cmlnZ2VyKFwiRk06b25UcmFja1BhZ2V2aWV3XCIsIHt1cmw6IHVybH0pXG4gICAgQGxvZyBcInRyYWNrUGFnZXZpZXdcIiwgdXJsOiB1cmxcblxuICB0cmFja0NsaWNrOiAoc2VsZWN0b3IsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCBydG4pLT5cbiAgICAkKHNlbGVjdG9yKS5vbiBcImNsaWNrXCIsIChlKT0+XG4gICAgICBlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgaHJlZiA9IGVsLmF0dHIoXCJocmVmXCIpXG4gICAgICBjID0gY2F0ZWdvcnlcbiAgICAgIGEgPSBhY3Rpb25cbiAgICAgIGwgPSBsYWJlbFxuICAgICAgciA9ICgoaWYgc2VsZWN0b3IgaXMgXCIucmF0aW5ncyBhXCIgdGhlbiB0cnVlIGVsc2UgZmFsc2UpKVxuICAgICAgYSA9IGVsLmF0dHIoXCJocmVmXCIpIGlmIGFjdGlvbiBpcyBcImhyZWZcIlxuICAgICAgYyA9IGNhdGVnb3J5KGVsKSBpZiB0eXBlb2YgY2F0ZWdvcnkgaXMgXCJmdW5jdGlvblwiXG4gICAgICBhID0gYWN0aW9uKGVsKSBpZiB0eXBlb2YgYWN0aW9uIGlzIFwiZnVuY3Rpb25cIlxuICAgICAgbCA9IGxhYmVsKGVsKSBpZiB0eXBlb2YgbGFiZWwgaXMgXCJmdW5jdGlvblwiXG5cbiAgICAgIEBsb2cgXCJ0cmFja0NsaWNrXCIsXG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgICAgICBjYXRlZ29yeTogY1xuICAgICAgICBhY3Rpb246IGFcbiAgICAgICAgbGFiZWw6IGFcblxuICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJGTTpvblRyYWNrQ2xpY2tcIiwge3NlbGVjdG9yOiBzZWxlY3RvciwgY2F0ZWdvcnk6IGMsIGFjdGlvbjogYSwgbGFiZWw6IGx9KVxuXG4gICAgICBAdHJhY2soYywgYSwgbClcblxuICAgICAgaWYgcnRuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBydG5cblxuICB0cmFja1NvY2lhbDogKG5ldHdvcmssIHNvY2lhbEFjdGlvbiwgdGFyZ2V0VXJsKS0+XG4gICAgQGxvZyBcIlRyYWNrZXIjdHJhY2tTb2NpYWxcIixcbiAgICAgIG5ldHdvcms6IG5ldHdvcmtcbiAgICAgIGFjdGlvbjogc29jaWFsQWN0aW9uXG4gICAgICB1cmw6IHRhcmdldFVybFxuICAgICQod2luZG93KS50cmlnZ2VyKFwiRk06b25UcmFja1NvY2lhbFwiLCB7bmV0d29yazogbmV0d29yaywgYWN0aW9uOiBzb2NpYWxBY3Rpb24sIHVybDogdGFyZ2V0VXJsfSlcblxuXG4gIGRhdGFMYXllcjogKG9iamVjdCktPlxuICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaChvYmplY3QpXG5cbiAgdHJhY2tEb3dubG9hZHM6IC0+XG4gICAgQHRyYWNrQ2xpY2sgXCJhW3JlbD1kb3dubG9hZF1cIiwgXCJEb3dubG9hZFwiLCBcImhyZWZcIlxuXG4gIHRyYWNrTmF2aWdhdGlvbjogLT5cbiAgICBAdHJhY2tDbGljayBcIi5uYXYtcHJpbWFyeS1saXN0IGFcIiwgXCJDbGljazpOYXZpZ2F0aW9uXCIsICgobGluayktPlxuICAgICAgbGluay50ZXh0KClcbiAgICApLCAobGluayktPlxuICAgICAgKGlmICQoXCJib2R5XCIpLmhhc0NsYXNzKFwianMtbmF2LXN0aWNreVwiKSB0aGVuIFwiTmF2IFN0aWNreVwiIGVsc2UgXCJOYXYgSW5saW5lXCIpXG5cbiAgdHJhY2tIb21lUGFnZUxpbmtzOiAtPlxuICAgIGlmIEBib2R5Lmhhc0NsYXNzKFwiaG9tZVwiKVxuICAgICAgIyBNb3N0IHNlY3Rpb25zXG4gICAgICBsaW5rRWxlbWVudHMgPSBcIi5zZWN0aW9uLW91dGVyIC5hcnRpY2xlLWxpbmssIC5zZWN0aW9uLW91dGVyIC5hcnRpY2xlLXRpdGxlIGEsIC5zZWN0aW9uLW91dGVyIC5mZWF0dXJlLWxpbmtcIlxuICAgICAgQHRyYWNrQ2xpY2sobGlua0VsZW1lbnRzLCBMaW5rUGFyc2VyLmNsaWNrQ2F0ZWdvcnksIExpbmtQYXJzZXIuY2xpY2tBY3Rpb24sIExpbmtQYXJzZXIuY2xpY2tMYWJlbClcblxuICAgICAgIyBTcGVjaWFsIGNhc2UgZm9yIHRhYnMgb24gZmVhdHVyZS1ncmlkXG4gICAgICBAdHJhY2tDbGljayhcIi5mZWF0dXJlLXRhYlwiLCBMaW5rUGFyc2VyLmNsaWNrQ2F0ZWdvcnksIExpbmtQYXJzZXIuY2xpY2tBY3Rpb24sIExpbmtQYXJzZXIudGFic01lbnVDbGlja0xhYmVsKVxuXG4gIHRyYWNrUkNVS0ZhY2V0c1dpZGdldDogLT5cbiAgICB1bmxlc3MgQGJvZHkuaGFzQ2xhc3MoXCJob21lXCIpXG4gICAgICAjIFRyYWNraW5nIFJDVUsgZ2VhciB3aWRnZXQgY2xpY2tzXG4gICAgICBAdHJhY2tDbGljayBcIi53aWRnZXQtcmN1ay10ZXN0IGFcIiwgXCJDbGljazpSQ1VLIEdlYXIgRmFjZXRzXCIsIChsaW5rKS0+XG4gICAgICAgIGxpbmsudGV4dCgpXG5cbiAgdHJhY2tJbWFnZXM6IC0+XG4gICAgIyBUcmFjayBJbWFnZXMgYW5kIGF0dGFjaG1lbnRzXG4gICAgaWYgQGJvZHkuaGFzQ2xhc3MoXCJzaW5nbGVcIilcbiAgICAgIEB0cmFja0NsaWNrIFwiLnNpbmdsZS1jb250ZW50IGE6aGFzKGltZylcIiwgXCJDbGljazpBcnRpY2xlIEltYWdlXCIsIChlbCktPlxuICAgICAgICB0eXBlID0gKGlmIGVsLmF0dHIoXCJocmVmXCIpLmluZGV4T2YoXCIvYXR0YWNobWVudC9cIikgPiAtMSB0aGVuIFwiYXR0YWNobWVudCBwYWdlXCIgZWxzZSBcImltYWdlIGZpbGVcIilcbiAgICAgICAgdHlwZVxuXG4gIHRyYWNrUmF0aW5nczogLT5cbiAgICAjIFRyYWNrIGFydGljbGUgcmF0aW5nc1xuICAgIEB0cmFja0NsaWNrIFwiLnJhdGluZ3MgYVwiLCBcIkNsaWNrOkFydGljbGUgUmF0aW5nXCIsIChlbCktPlxuICAgICAgZWwudGV4dCgpXG5cbiAgdHJhY2tPdGhlckNsaWNrczogLT5cbiAgICBAdHJhY2tEb3dubG9hZHMoKVxuICAgIEB0cmFja05hdmlnYXRpb24oKVxuICAgIEB0cmFja0hvbWVQYWdlTGlua3MoKVxuICAgIEB0cmFja1JDVUtGYWNldHNXaWRnZXQoKVxuICAgIEB0cmFja0ltYWdlcygpXG4gICAgQHRyYWNrUmF0aW5ncygpXG5cbiAgYm9vdHN0cmFwQ2xpY2tUcmFja2luZzogLT5cbiAgICAkKGRvY3VtZW50KS5vbiBcImNsaWNrXCIsIFwiLmlzLXRyYWNrZWRcIiwgKGUpPT5cbiAgICAgIGVsID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICBocmVmID0gZWwucHJvcChcImhyZWZcIilcbiAgICAgIGNhdGVnb3J5ID0gZWwuZGF0YShcImNhdGVnb3J5XCIpXG4gICAgICByZXR1cm4gdHJ1ZSB1bmxlc3MgY2F0ZWdvcnlcbiAgICAgIGFjdGlvbiA9IGVsLmRhdGEoXCJhY3Rpb25cIikgb3IgZWwucHJvcChcImhyZWZcIilcbiAgICAgIGxhYmVsID0gZWwuZGF0YShcImxhYmVsXCIpIG9yIChsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaClcbiAgICAgIHJ0biA9IChpZiBlbC5kYXRhKFwicmV0dXJuXCIpIHRoZW4gKGVsLmRhdGEoXCJyZXR1cm5cIikgaXMgXCJ0cnVlXCIpIGVsc2UgYHVuZGVmaW5lZGApXG4gICAgICBvbmNlID0gKGlmIGVsLmRhdGEoXCJ0cmFjay1vbmNlXCIpIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlKVxuICAgICAgaWYgb25jZVxuICAgICAgICBrZXkgPSBjYXRlZ29yeSArIGFjdGlvbiArIGxhYmVsXG4gICAgICAgIGlmIEB0cmFja2VkW2tleV1cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgQHRyYWNrZWRba2V5XSA9IDFcblxuICAgICAgIyBGb3IgUmFpbHNcbiAgICAgIG1ldGhvZCA9IGVsLmRhdGEoXCJtZXRob2RcIilcbiAgICAgIHJ0biA9IHRydWUgaWYgbWV0aG9kIGlzIFwicHV0XCIgb3IgbWV0aG9kIGlzIFwiZGVsZXRlXCIgb3IgbWV0aG9kIGlzIFwicG9zdFwiXG5cbiAgICAgIEB0cmFjayhjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbClcblxuICAgICAgaWYgdHlwZW9mIHJ0biBpcyBcInVuZGVmbmVkXCJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHJ0blxuXG5cbiAgdHJhY2tFeHRlcm5hbExpbmtzOiAtPlxuICAgICQoZG9jdW1lbnQpLm9uIFwiY2xpY2tcIiwgKGUpPT5cblxuICAgICAgZWwgPSBlLnNyY0VsZW1lbnQgb3IgZS50YXJnZXRcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZSB3aGlsZSBlbCBhbmQgKHR5cGVvZiBlbC50YWdOYW1lIGlzIFwidW5kZWZpbmVkXCIgb3IgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpIGlzbnQgXCJhXCIgb3Igbm90IGVsLmhyZWYpXG4gICAgICBpZiBlbCBhbmQgZWwuaHJlZlxuXG4gICAgICAgIGlmIG5ldyBVUkwoZWwuaHJlZikuaG9zdG5hbWUgYW5kIG5ldyBVUkwoZWwuaHJlZikuaG9zdG5hbWUgaXNudCBsb2NhdGlvbi5ob3N0XG5cbiAgICAgICAgICBAdHJhY2soXCJPdXRnb2luZyBMaW5rc1wiLCBlbC5ocmVmLCBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCkgdW5sZXNzIEBpc0FkKGVsKVxuXG4gICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJGTTpvblRyYWNrRXh0ZXJuYWxMaW5rXCIsIHt1cmw6IGVsLmhyZWZ9KVxuXG4gICAgICAgICAgaWYgbm90IGVsLnRhcmdldCBvciBlbC50YXJnZXQubWF0Y2goL15fKHNlbGZ8cGFyZW50fHRvcCkkL2kpXG4gICAgICAgICAgICBzZXRUaW1lb3V0ICgtPlxuICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gZWwuaHJlZlxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICksIDUwMFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCAoaWYgZS5wcmV2ZW50RGVmYXVsdCgpIHRoZW4gZS5yZXR1cm5WYWx1ZSBlbHNlIG5vdCAxKVxuXG5cblxuICBhZFRyYWNrZXI6IC0+XG4gICAgQGFkVHJhY2tlclxuXG4gIGlzQWQ6IChlbCktPlxuICAgICQoZWwpLnBhcmVudCgpLmhhc0NsYXNzKFwiYWQtcGxhY2VtZW50XCIpIG9yIGVsLmhyZWYubWF0Y2goL2FkdGVjaFxcLmRlLylcblxuXG4jIHdpbmRvdy5GTVRyYWNrZXIgPSBGTVRyYWNrZXJcbm1vZHVsZS5leHBvcnRzID0gRk1UcmFja2VyIiwiY2xhc3MgVHlwZUtpdFxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBsb2FkS2l0KClcblxuICBsb2FkS2l0OiAoKSAtPlxuICAgIHR5cGVraXRJZCA9IGRvY3VtZW50LmJvZHkuZGF0YXNldFsndHlwZWtpdElkJ11cblxuICAgIGlmIHR5cGVraXRJZCAhPSAnJ1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgZWwuc3JjID0gJy8vdXNlLnR5cGVraXQubmV0LycgKyB0eXBla2l0SWQgKyAnLmpzJ1xuXG4gICAgICBlbC5vbmxvYWQgPSAtPlxuICAgICAgICBUeXBla2l0LmxvYWQoKVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkIGVsXG5cblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlS2l0XG4iLCJMb2dnZXIgPSByZXF1aXJlICdqcy1sb2dnZXInXG5cbmNsYXNzIFVtYmVsQ2xpZW50XG5cbiAgU1VQUE9SVEVEX0VWRU5UUyA9IFtcbiAgICAnYWN0aW9uLnRhZycsXG4gICAgJ3Byb2ZpbGUudW5pcXVlX2lkJyxcbiAgICAncHJvZmlsZS56aXAnLFxuICAgICdwcm9maWxlLmNpdHknLFxuICAgICdwcm9maWxlLmNvdW50cnknLFxuICAgICdwcm9maWxlLnN0YXRlJyxcbiAgICAncHJvZmlsZS5iaXJ0aF95ZWFyJyxcbiAgICAncHJvZmlsZS5nZW5kZXInLFxuICAgICdwcm9maWxlLmVtYWlsJyxcbiAgICAncHJvZmlsZS5mYWNlYm9va19hY2Nlc3NfdG9rZW4nLFxuICAgICdwcm9maWxlLnR3aXR0ZXJfdXNlcl9pZCdcbiAgXVxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBsb2dnZXIgPSBMb2dnZXIuZ2V0KCdVbWJlbENsaWVudCcpXG4gICAgQGNsaWVudCA9IHdpbmRvdy5fdW1iZWxcbiAgICBAdGVzdF9tb2RlID0gd2luZG93Ll91bWJlbF90ZXN0X21vZGVcbiAgICBAYWNjZXNzX3Rva2VuID0gbnVsbFxuICAgICQod2luZG93KS5vbiBcIkZNOm9uRmFjZWJvb2tDb25uZWN0ZWRcIiwgKGUsIGRhdGEpPT5cbiAgICAgIEBsb2coXCJGTTpvbkZhY2Vib29rQ29ubmVjdGVkXCIsIGRhdGEpXG4gICAgICBAc2V0dXBVbWJlbChkYXRhKVxuXG4gIGxvZzogKGFjdGlvbixtc2cpLT5cbiAgICBAbG9nZ2VyLmluZm8oXCIje2FjdGlvbn06ICN7SlNPTi5zdHJpbmdpZnkobXNnKX1cIilcblxuICBleGNoYW5nZVRva2VuOiAodG9rZW4pPT5cbiAgICBAc2V0KFwicHJvZmlsZS5mYWNlYm9va19hY2Nlc3NfdG9rZW5cIiwgdG9rZW4pXG5cbiAgc2V0dXBVbWJlbDogKHJlc3BvbnNlKT0+XG4gICAgQGV4Y2hhbmdlVG9rZW4ocmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuKVxuXG4gICMgU2V0IGRhdGEgb24gdGhlIGN1cnJlbnQgVW1iZWwgY2xpZW50XG4gICMgU2V0IHdpbGwgb25seSBzZW5kIHRoZSB2YWx1ZSBvbmNlIHJlZ2FyZGxlc3MgaG93IG1hbnkgdGltZXMgaXQgaXMgY2FsbGVkXG4gIHNldDogKG5hbWUsIHZhbHVlKS0+XG4gICAgQGNsaWVudC5wdXNoKEBidWlsZERhdGEoXCJzZXRcIiwgbmFtZSwgdmFsdWUpKVxuXG4gICMgU2VuZCBkYXRhIG9uIHRoZSBjdXJyZW50IFVtYmVsIENsaWVudFxuICAjIFNlbmQgd2lsbCBzZXQgdGhlIHZhbHVlIGV2ZXJ5IHRpbWUgaXQgaXMgY2FsbGVkXG4gIHNlbmQ6IChuYW1lLCB2YWx1ZSktPlxuICAgIEBjbGllbnQucHVzaChAYnVpbGREYXRhKFwic2VuZFwiLCBuYW1lLCB2YWx1ZSkpXG5cbiAgYnVpbGREYXRhOiAodHlwZSwgbmFtZSwgdmFsdWUpLT5cbiAgICBcInR5cGVcIjogdHlwZVxuICAgIFwibmFtZVwiOiBuYW1lLFxuICAgIFwidmFsdWVcIjogdmFsdWVcblxuIyB3aW5kb3cuVW1iZWxDbGllbnQgPSBVbWJlbENsaWVudFxuIyB3aW5kb3cudW1iZWxDbGllbnQgPSBuZXcgVW1iZWxDbGllbnQoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVtYmVsQ2xpZW50IiwiTG9nZ2VyID0gcmVxdWlyZSAnanMtbG9nZ2VyJ1xuXG5jbGFzcyBVbWJlbFRyYWNrZXJcblxuICBjb25zdHJ1Y3RvcjogKEB1bWJlbENsaWVudCkgLT5cbiAgICBAbG9nZ2VyID0gTG9nZ2VyLmdldCgnVW1iZWxUcmFja2VyJylcbiAgICBAd2luZG93ID0gJCh3aW5kb3cpXG4gICAgQGluaXRFdmVudEJpbmRpbmdzKClcblxuICAgICMgQHdpbmRvdy5vbiBcIkZNOm9uRmFjZWJvb2tDb25uZWN0ZWRcIiwgKHJlc3BvbnNlKT0+XG4gICAgIyAgIEBsb2coXCJpbml0RXZlbnRCaW5kaW5nc1wiKVxuICAgICMgICBAaW5pdEV2ZW50QmluZGluZ3MocmVzcG9uc2UpXG4gICAgIyBAd2luZG93Lm9uIFwiRk06b25GYWNlYm9va0Rpc2Nvbm5lY3RlZFwiLCAocmVzcG9uc2UpPT5cbiAgICAjICAgQGRpc2FibGVFdmVudEJpbmRpbmdzKHJlc3BvbnNlKVxuXG4gIGxvZzogKG1zZyktPlxuICAgIEBsb2dnZXIuaW5mbyhtc2cpXG5cbiAgaW5pdEV2ZW50QmluZGluZ3M6IChyZXNwb25zZSktPlxuICAgIEB3aW5kb3cub24gXCJGTTpvblRyYWNrUGFnZUxvYWRcIiwgKGUsIGRhdGEpPT5cbiAgICAgIEBsb2coXCJGTTpvblRyYWNrUGFnZUxvYWRcIilcbiAgICAgIEB1bWJlbENsaWVudC5zZW5kKFwiYWN0aW9uLnRhZ1wiLCBbZGF0YS5zaXRlLCBkYXRhLmNhdGVnb3J5XSlcblxuICAgIEB3aW5kb3cub24gXCJGTTpvblRyYWNrU29jaWFsXCIsIChlLCBkYXRhKT0+XG4gICAgICBAbG9nKFwiRk06b25UcmFja1NvY2lhbFwiKVxuICAgICAgQHVtYmVsQ2xpZW50LnNlbmQoXCJhY3Rpb24udGFnXCIsIFtcIkFtcGxpZnlpbmdcIiwgXCIje2RhdGEubmV0d29ya30gI3tkYXRhLmFjdGlvbn1cIl0pXG5cbiAgICBAd2luZG93Lm9uIFwiRk06b25OZXdzbGV0dGVyU2lnbnVwXCIsIChlLCBkYXRhKT0+XG4gICAgICBAbG9nKFwiRk06b25OZXdzbGV0dGVyU2lnbnVwICN7ZGF0YS5lbWFpbH1cIilcbiAgICAgIEB1bWJlbENsaWVudC5zZXQoXCJwcm9maWxlLmVtYWlsXCIsIGRhdGEuZW1haWwpXG4gICAgICBAdW1iZWxDbGllbnQuc2VuZChcImFjdGlvbi50YWdcIiwgW1wiU3Vic2NyaWJpbmdcIiwgXCJNYWlsaW5nIExpc3RcIl0pXG5cbiAgICBAd2luZG93Lm9uIFwiRk06b25GYWNlYm9va0xpa2VcIiwgKGUsIGRhdGEpPT5cbiAgICAgIEBsb2coXCJGTTpvbkZhY2Vib29rTGlrZVwiKVxuICAgICAgQHVtYmVsQ2xpZW50LnNlbmQoXCJhY3Rpb24udGFnXCIsIFtcIlN1YnNjcmliaW5nXCIsIFwiTGlrZSBGYWNlYm9va1wiXSlcblxuICAgIEB3aW5kb3cub24gXCJGTTpvblR3aXR0ZXJGb2xsb3dcIiwgKGUsIGRhdGEpPT5cbiAgICAgIEBsb2coXCJGTTpvblR3aXR0ZXJGb2xsb3dcIilcbiAgICAgIEB1bWJlbENsaWVudC5zZW5kKFwiYWN0aW9uLnRhZ1wiLCBbXCJTdWJzY3JpYmluZ1wiLCBcIkZvbGxvdyBUd2l0dGVyXCJdKVxuXG4gICAgQHdpbmRvdy5vbiBcIkZNOm9uRmFjZWJvb2tDb21tZW50Q3JlYXRlZFwiLCAoZSwgZGF0YSk9PlxuICAgICAgQGxvZyhcIkZNOm9uRmFjZWJvb2tDb21tZW50Q3JlYXRlZFwiKVxuICAgICAgQHVtYmVsQ2xpZW50LnNlbmQoXCJhY3Rpb24udGFnXCIsIFtcIkNvbnRyaWJ1dGluZ1wiLCBcIkNvbW1lbnRlclwiXSlcblxuICByZW1vdmVFdmVudEJpbmRpbmdzOiAocmVzcG9uc2UpLT5cbiAgICBAd2luZG93Lm9mZihcIkZNOm9uVHJhY2tDYXRlZ29yeVwiKVxuICAgIEB3aW5kb3cub2ZmKFwiRk06b25UcmFja1NvY2lhbFwiKVxuICAgIEB3aW5kb3cub2ZmKFwiRk06b25OZXdzbGV0dGVyU2lnbnVwXCIpXG4gICAgQHdpbmRvdy5vZmYoXCJGTTpvbkZhY2Vib29rQ29tbWVudENyZWF0ZWRcIilcbiAgICBAd2luZG93Lm9mZihcIkZNOm9uRmFjZWJvb2tMaWtlXCIpXG4gICAgQHdpbmRvdy5vZmYoXCJGTTpvblR3aXR0ZXJGb2xsb3dcIilcblxuIyB3aW5kb3cuVW1iZWxUcmFja2VyID0gVW1iZWxUcmFja2VyXG5tb2R1bGUuZXhwb3J0cyA9IFVtYmVsVHJhY2tlclxuIiwiTG9nZ2VyID0gcmVxdWlyZSAnanMtbG9nZ2VyJ1xuXG5jbGFzcyBXYXRjaGVkU2VjdGlvblxuICBjb25zdHJ1Y3RvcjogKEBlbGVtLCBAc2VjdGlvbk5hbWUsIEBzZWN0aW9uV2F0Y2hlciktPlxuICAgIEBsb2dnZXIgPSBMb2dnZXIuZ2V0KFwiV2F0Y2hlZFNlY3Rpb25cIilcbiAgICBAc2VjdGlvbk5hbWUgPSBAc2VjdGlvbk5hbWUgb3IgXCJzZWN0aW9uXCJcbiAgICBAaW5pdFZpZXdhYmxlKClcblxuICBpbml0Vmlld2FibGU6IC0+XG4gICAgIyBUaGVyZXMgcHJvYmFibHkgYSBtb3JlIGVsZWdhbnQgd2F5IHRvIGRvIHRoaXMuLi5cbiAgICAjIEJhc2ljYWxseSBJIHdhbnQgdG8gYXR0YWNoIGEgc2Nyb2xsIGxpc3RlbmVyIHRvIHRoZSBvYmplY3Qgc28gSSBjYW4gcmVtb3ZlIGl0IGxhdGVyXG4gICAgJChAKS5vbiAnU2Nyb2xsLldhdGNoZWRTZWN0aW9uLkZNJywgKGUsIGRhdGEpPT5cbiAgICAgIGlmIEB2aWV3YWJsZSgpXG4gICAgICAgIEB0cmFja1BhZ2V2aWV3KClcbiAgICAgICAgJChAKS5vZmYgJ1Njcm9sbC5XYXRjaGVkU2VjdGlvbi5GTSdcblxuICAgICQoQHNlY3Rpb25XYXRjaGVyKS5vbiAnU2Nyb2xsLlNlY3Rpb25XYXRjaGVyLkZNJywgKGUsIGRhdGEpPT5cbiAgICAgICQoQCkudHJpZ2dlcignU2Nyb2xsLldhdGNoZWRTZWN0aW9uLkZNJywgZGF0YSlcbiAgICAgICAgXG5cbiAgdmlld2FibGU6IC0+XG4gICAgcmVjdCA9IEBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmVjdC50b3AgPj0gMCBhbmRcbiAgICByZWN0LmxlZnQgPj0gMCBhbmRcbiAgICAocmVjdC50b3AgKyA1MCkgPD0gJCh3aW5kb3cpLmhlaWdodCgpIGFuZFxuICAgIChyZWN0LmxlZnQgKyA1MCkgPD0gJCh3aW5kb3cpLndpZHRoKClcbiAgICAjcmVjdC5ib3R0b20gPD0gJCh3aW5kb3cpLmhlaWdodCgpICYmXG4gICAgI3JlY3QucmlnaHQgPD0gJCh3aW5kb3cpLndpZHRoKClcblxuICB0cmFja1BhZ2V2aWV3OiAtPlxuICAgIEBsb2dnZXIuaW5mbyhcIlRyYWNraW5nIHNlY3Rpb25cIiwgQHNlY3Rpb25OYW1lLCBcImFzIHBhZ2V2aWV3XCIsIEBlbGVtKVxuICAgIHdpbmRvdy5UcmFja2VyPy50cmFja1BhZ2V2aWV3KFwiI3tsb2NhdGlvbi5wYXRobmFtZX0je2xvY2F0aW9uLnNlYXJjaH0jI3tAc2VjdGlvbk5hbWV9XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gV2F0Y2hlZFNlY3Rpb24iLCIoIC0+XG4gIHJlY2VpdmVNZXNzYWdlID0gKGUpIC0+XG4gICAgIyBSZXNpemUgaWZyYW1lcyB0aGF0IHNlbmQgYSBtZXNzYWdlIG9mIHRoZSBmb3JtXG4gICAgIyBcInsgaGVpZ2h0OiA8aGVpZ2h0PiwgYWN0aW9uOiBcInJlc2l6ZVwiIH1cIlxuICAgIGRhdGEgPSB7fVxuICAgIHRyeVxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKVxuICAgIGNhdGNoIGVcbiAgICAgIHJldHVyblxuXG4gICAgcmV0dXJuIGlmIGRhdGEuYWN0aW9uICE9IFwicmVzaXplXCJcblxuICAgIGlmcmFtZSA9ICQoXCJpZnJhbWVcIikuZmlsdGVyIC0+XG4gICAgICB0aGlzLmNvbnRlbnRXaW5kb3cgPT0gZS5zb3VyY2VcblxuICAgIGlmIGlmcmFtZS5sZW5ndGggPiAwICYmIGRhdGEuaGVpZ2h0ICE9IHVuZGVmaW5lZFxuICAgICAgaWZyYW1lLmhlaWdodChkYXRhLmhlaWdodClcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKVxuKSgpXG5cbiIsIiMgc21hcnQgcmVzaXplXG4oKCQsIHNyKSAtPlxuICBqUXVlcnkuZm5bc3JdID0gKGZuLCB0aHJlc2hvbGQsIGV4ZWNBc2FwKSAtPlxuICAgIChpZiBmbiB0aGVuIEBiaW5kKFwicmVzaXplXCIsIFV0aWxpdGllcy5kZWJvdW5jZShmbiwgdGhyZXNob2xkLCBleGVjQXNhcCkpIGVsc2UgQHRyaWdnZXIoc3IpKVxuXG4gIHJldHVyblxuKSBqUXVlcnksIFwic21hcnRyZXNpemVcIiIsIigtPlxuICB3aW5kb3cuX3VtYmVsID0gd2luZG93Ll91bWJlbCBvciBbXVxuICB3aW5kb3cuX3VtYmVsX3Rlc3RfbW9kZSA9IGZhbHNlXG4gIHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICB1LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICB1LmFzeW5jID0gdHJ1ZVxuICB1LnNyYyA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgJy8vdGFncy5hcGkudW1iZWwuY29tL3Nia296bW9od3plcmxsZGIvdy5qcz9kPScgKyBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAnLScgKyBuZXcgRGF0ZSgpLmdldERhdGUoKVxuICBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdXG4gIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodSwgcylcbikoKSIsIigtPlxuICBGTSA9IHdpbmRvdy5GTSBvciB7fVxuICBGTS5WaWV3cyA9IEZNLlZpZXdzIG9yIHt9XG4gIHdpbmRvdy5GTSA9IEZNXG4pKCkiLCIjIEkxOG4gRnJhbWV3b3JrXG4jIFJ1ZGltZW50YXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGZyYW1ld29yay5cbiMgVXNhZ2U6XG4jIHZhciB0ZXh0ID0gSTE4bi50cmFuc2xhdGUoXCJjb29raWVfcG9saWN5XCIpO1xuIyByZXR1cm4gdGV4dFsnbWVzc2FnZSddO1xuSTE4biA9ICgodywgZCwgdW5kZWZpbmVkXykgLT5cbiAgbG9jYWxlcyA9IFtcbiAgICBcImVuLUdCXCJcbiAgICBcImZyLUZSXCJcbiAgICBcImRlLURFXCJcbiAgXVxuICBkZWZhdWx0X2xvY2FsZSA9IFwiZW4tR0JcIlxuICB0cmFuc2xhdGlvbnMgPVxuICAgIFwiZW4tR0JcIjpcbiAgICAgIGNvbGxhcHNpYmxlOlxuICAgICAgICByZWFkX21vcmU6IFwiUmVhZCBtb3JlXCJcbiAgICAgICAgcmVhZF9sZXNzOiBcIlJlYWQgbGVzc1wiXG5cbiAgICBcImZyLUZSXCI6XG4gICAgICBjb2xsYXBzaWJsZTpcbiAgICAgICAgcmVhZF9tb3JlOiBcIlJlYWQgbW9yZVwiXG4gICAgICAgIHJlYWRfbGVzczogXCJSZWFkIGxlc3NcIlxuXG4gICAgXCJkZS1ERVwiOlxuICAgICAgY29sbGFwc2libGU6XG4gICAgICAgIHJlYWRfbW9yZTogXCJNZWhyXCJcbiAgICAgICAgcmVhZF9sZXNzOiBcIldlbmlnZXJcIlxuXG5cbiAgIyBSZXR1cm4gdGhlIGxvY2FsZS9sYW5ndWFnZSBvZiB0aGUgc2l0ZSB1c2luZyB0aGUgbGFuZyBtZXRhIHRhZ1xuICBsb2NhbGUgPSAtPlxuICAgIGxhbmcgPSAkKFwiaHRtbFwiKS5hdHRyKFwibGFuZ1wiKVxuICAgIChpZiAobG9jYWxlcy5pbmRleE9mKGxhbmcpID4gLTEpIHRoZW4gbGFuZyBlbHNlIFwiZW4tR0JcIilcblxuXG4gICMgUmV0dXJuIHRoZSB0cmFuc2xhdGVkIG9iamVjdCBmb3IgYSBnaXZlbiBzZWN0aW9uXG4gICMgZS5nLiB0ZXh0ID0gSTE4bi50cmFuc2xhdGUoXCJjb29raWVfcG9saWN5XCIpO1xuICB0cmFuc2xhdGUgPSAoa2V5KSAtPlxuICAgIHNlY3Rpb24gPSB0cmFuc2xhdGlvbnNbbG9jYWxlKCldW2tleV1cbiAgICBzZWN0aW9uID0gdHJhbnNsYXRpb25zW2RlZmF1bHRfbGFuZ3VhZ2VdW2tleV0gIGlmIHNlY3Rpb24gaXMgYHVuZGVmaW5lZGBcbiAgICBzZWN0aW9uXG5cblxuICAjIFB1YmxpYyBpbnRlcmZhY2VcbiAgbG9jYWxlczogbG9jYWxlc1xuICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVxuICB0OiB0cmFuc2xhdGVcbiAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNcbiAgbG9jYWxlOiBsb2NhbGVcbikod2luZG93LCBkb2N1bWVudClcblxuIyB3aW5kb3cuSTE4biA9IEkxOG5cbm1vZHVsZS5leHBvcnRzID0gSTE4biIsIiMgUG9zdG1lc3NhZ2UgSGVscGVyc1xuVXRpbGl0aWVzID0gVXRpbGl0aWVzIG9yIHt9XG5VdGlsaXRpZXMuUG9zdE1lc3NhZ2UgPSBVdGlsaXRpZXMuUG9zdE1lc3NhZ2Ugb3Ige31cblxuIyBIYW5kbGUgYW5kIGluY29taW5nIFBvc3RNZXNzYWdlXG5VdGlsaXRpZXMuUG9zdE1lc3NhZ2UuaGFuZGxlID0gKGNhbGxiYWNrKS0+XG4gIHJldHVybiB1bmxlc3MgQHN1cHBvcnRlZCgpXG4gIHdpbmRvd1tAbWV0aG9kKCldKEBldmVudCgpLCAoZSk9PlxuICAgIGNhbGxiYWNrKGUpXG4gIClcblxuIyBTZW5kIGFuIG91dGdvaW5nIFBvc3RNZXNzYWdlIHRvIHRoZSBwYXJlbnQgd2luZG93XG5VdGlsaXRpZXMuUG9zdE1lc3NhZ2Uuc2VuZCA9IChtZXNzYWdlLCB0YXJnZXRPcmlnaW4pLT5cbiAgcmV0dXJuIHVubGVzcyBAc3VwcG9ydGVkKClcbiAgdGFyZ2V0T3JpZ2luIHx8PSBcIipcIlxuICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRhcmdldE9yaWdpbilcblxuIyBDaGVjayBpZiBQb3N0TWVzYWFnZSBpcyBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXJcblV0aWxpdGllcy5Qb3N0TWVzc2FnZS5zdXBwb3J0ZWQgPSAtPlxuICAhIXdpbmRvdy5wb3N0TWVzc2FnZVxuXG4jIFdvcmsgb3V0IHdoaWNoIGJyb3dzZXIgbWV0aG9kIHRvIGNhbGxcblV0aWxpdGllcy5Qb3N0TWVzc2FnZS5tZXRob2QgPSAtPlxuICAoaWYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgdGhlbiBcImFkZEV2ZW50TGlzdGVuZXJcIiBlbHNlIFwiYXR0YWNoRXZlbnRcIilcblxuIyBXb3JrIG91dCB3aGljaCBicm93c2VyIGV2ZW50IHRvIGNhbGxcblV0aWxpdGllcy5Qb3N0TWVzc2FnZS5ldmVudCA9IC0+XG4gIChpZiBAbWV0aG9kKCkgaXMgXCJhdHRhY2hFdmVudFwiIHRoZW4gXCJvbm1lc3NhZ2VcIiBlbHNlIFwibWVzc2FnZVwiKVxuXG5cbiMgd2luZG93LlV0aWxpdGllcy5Qb3N0TWVzc2FnZSA9IFV0aWxpdGllcy5Qb3N0TWVzc2FnZVxubW9kdWxlLmV4cG9ydHMgPSBVdGlsaXRpZXMuUG9zdE1lc3NhZ2UiLCJVdGlsaXRpZXMgPSAoKHcsIGQsIHVuZGVmaW5lZF8pIC0+XG5cbiAgIyBkZWJvdW5jaW5nIGZ1bmN0aW9uIGZyb20gSm9obiBIYW5uXG4gICMgRW5zdXJlcyBhbiBldmVudCBpcyBvbmx5IGZpcmVkIG9uY2UgaWYgaXQgaXMgbm9ybWFsbHkgZmlyZWQgcmVwZWF0ZWRseSwgZS5nLiB3aW5kb3cucmVzaXplXG4gICMgaHR0cDovL3Vuc2NyaXB0YWJsZS5jb20vaW5kZXgucGhwLzIwMDkvMDMvMjAvZGVib3VuY2luZy1qYXZhc2NyaXB0LW1ldGhvZHMvXG4gIGRlYm91bmNlID0gKGZ1bmMsIHRocmVzaG9sZCwgZXhlY0FzYXApIC0+XG4gICAgdGltZW91dCA9IHVuZGVmaW5lZFxuICAgIGRlYm91bmNlZCA9IC0+XG4gICAgICBkZWxheWVkID0gLT5cbiAgICAgICAgZnVuYy5hcHBseSBvYmosIGFyZ3MgIHVubGVzcyBleGVjQXNhcFxuICAgICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgICByZXR1cm5cbiAgICAgIG9iaiA9IHRoaXNcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHNcbiAgICAgIGlmIHRpbWVvdXRcbiAgICAgICAgY2xlYXJUaW1lb3V0IHRpbWVvdXRcbiAgICAgIGVsc2UgZnVuYy5hcHBseSBvYmosIGFyZ3MgIGlmIGV4ZWNBc2FwXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChkZWxheWVkLCB0aHJlc2hvbGQgb3IgMTAwKVxuICAgICAgcmV0dXJuXG5cbiAgZGVib3VuY2U6IGRlYm91bmNlXG4pKHdpbmRvdywgZG9jdW1lbnQpXG5cblV0aWxpdGllcy5pc0VtYmVkZGVkID0gLT5cbiAgd2luZG93LmZyYW1lRWxlbWVudD8ubm9kZU5hbWUgPT0gXCJJRlJBTUVcIlxuXG4jIFVSTCBIZWxwZXJzXG5VdGlsaXRpZXMuZ2V0VVJMU2VwYXJhdG9yID0gKHVybCktPlxuICBpZiB1cmwuaW5kZXhPZihcIj9cIikgPiAtMVxuICAgICcmJ1xuICBlbHNlXG4gICAgJz8nXG5cblV0aWxpdGllcy5nZXRQYXJhbXMgPSAocXVlcnkpLT5cbiAgcXVlcnkgfHw9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcbiAgcXVlcnkgPSBxdWVyeS5zdWJzdHJpbmcoMSlcbiAgcmF3VmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKVxuICBwYXJhbXMgPSB7fVxuXG4gIGZvciB2IGluIHJhd1ZhcnNcbiAgICBba2V5LCB2YWxdID0gdi5zcGxpdChcIj1cIilcbiAgICBwYXJhbXNba2V5XSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpXG5cbiAgcGFyYW1zXG5cbiMgTG9jYWxlIEhlbHBlcnNcblV0aWxpdGllcy5nZXRMb2NhbGUgPSAtPlxuICBsYW5nID0gJChcImh0bWxcIikuYXR0cihcImxhbmdcIilcbiAgbG9jYWxlcyA9IFtcImVuLUdCXCIsIFwiZnItRlJcIiwgXCJkZS1ERVwiXVxuICBsb2NhbGUgPSBcImVuLUdCXCJcbiAgaWYgbG9jYWxlcy5pbmRleE9mKGxhbmcpID4gLTFcbiAgICBsb2NhbGUgPSBsYW5nXG5cbiAgbG9jYWxlXG5cbiMgRGF0ZS9UaW1lIEhlbHBlcnNcblV0aWxpdGllcy5mb3JtYXREYXRlID0gKGRhdGUpLT5cbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgbG9jYWxlID0gVXRpbGl0aWVzLmdldExvY2FsZSgpXG5cbiAgbW9udGhOYW1lcyA9XG4gICAgJ2RlLURFJzogWydKYW4nLCAnRmViJywgJ01yeicsICdBcHInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPa3QnLCAnTm92JywgJ0RleiddXG4gICAgJ2ZyLUZSJzogWydKYW4nLCAnRiYjMjMzO3YnLCAnTWFyJywgJ0F2cicsICdNYWknLCAnSnVuJywgJ0p1bCcsICdBbyYjMjUxOycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEJiMyMzM7YyddXG4gICAgJ2VuLUdCJzogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gIG1vbnRoID0gbW9udGhOYW1lc1tsb2NhbGVdW2RhdGUuZ2V0TW9udGgoKV1cbiAgZGF5ID0gZGF0ZS5nZXREYXRlKClcblxuICBsb2NhbGVGb3JtYXQgPVxuICAgICdkZS1ERSc6IFwiI3tkYXl9ICN7bW9udGh9ICN7eWVhcn1cIlxuICAgICdmci1GUic6IFwiI3tkYXl9ICN7bW9udGh9ICN7eWVhcn1cIlxuICAgICdlbi1HQic6IFwiI3tkYXl9ICN7bW9udGh9ICN7eWVhcn1cIlxuXG4gIHJldHVybiBsb2NhbGVGb3JtYXRbbG9jYWxlXVxuXG5cbiMgd2luZG93LlV0aWxpdGllcyA9IFV0aWxpdGllc1xubW9kdWxlLmV4cG9ydHMgPSBVdGlsaXRpZXNcblxuIiwid2luZG93W1wiRk1cIl0gPSB3aW5kb3dbXCJGTVwiXSB8fCB7fTtcbndpbmRvd1tcIkZNXCJdW1wiVmlld3NcIl0gPSB3aW5kb3dbXCJGTVwiXVtcIlZpZXdzXCJdIHx8IHt9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcImFmdGVyX2FydGljbGVcIl0gPSBmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9IFwiXCIsIHN0YWNrMSwgaGVscGVyLCBvcHRpb25zLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3Npbmc7XG5cblxuICBidWZmZXIgKz0gXCI8ZGl2IGNsYXNzPVxcXCJzcG9uc29yZWQtYXJ0aWNsZXNcXFwiPlxcbiAgPGFydGljbGUgY2xhc3M9XFxcImFydGljbGUtbGlzdGVkLXNtYWxsIGFydGljbGUtdHlwZS1zcG9uc29yZWRcXFwiPlxcblxcbiAgICA8YSBjbGFzcz1cXFwiYXJ0aWNsZS1saXN0ZWQtdGh1bWJcXFwiIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiB0aXRsZT1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgPGltZyBoZWlnaHQ9XFxcIjE5MFxcXCIgd2lkdGg9XFxcIjM0MFxcXCIgYWx0PVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuaW1hZ2UpKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmNhcHRpb24pKSx0eXBlb2Ygc3RhY2sxID09PSBmdW5jdGlvblR5cGUgPyBzdGFjazEuYXBwbHkoZGVwdGgwKSA6IHN0YWNrMSkpXG4gICAgKyBcIlxcXCIgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoaGVscGVyID0gaGVscGVycy5nZXRUaHVtYkhyZWYgfHwgKGRlcHRoMCAmJiBkZXB0aDAuZ2V0VGh1bWJIcmVmKSxvcHRpb25zPXtoYXNoOntcbiAgICAnd2lkdGgnOiAoMzQwKSxcbiAgICAnaGVpZ2h0JzogKDE5MClcbiAgfSxkYXRhOmRhdGF9LGhlbHBlciA/IGhlbHBlci5jYWxsKGRlcHRoMCwgb3B0aW9ucykgOiBoZWxwZXJNaXNzaW5nLmNhbGwoZGVwdGgwLCBcImdldFRodW1iSHJlZlwiLCBvcHRpb25zKSkpXG4gICAgKyBcIlxcXCI+XFxuICAgIDwvYT5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1ib2R5XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic3BvbnNvcmVkLWJ5LXRleHRcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2F0aW9uLWFycm93XFxcIj48L2k+XFxuICAgICAgICBTcG9uc29yZWQgYnlcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInNwb25zb3ItbG9nb1xcXCIgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9ICgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICYmIGRlcHRoMC5zcG9uc29yKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5sb2dvKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5ocmVmKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiPlxcbiAgICAgIDwvcD5cXG5cXG4gICAgICA8aDQgY2xhc3M9XFxcImFydGljbGUtdGl0bGVcXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmxpbmspIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAubGluayk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiIHRpdGxlPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9hPlxcbiAgICAgIDwvaDQ+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1leGNlcnB0XFxcIj5cXG4gICAgICAgIFwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5zdW1tYXJ5KSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnN1bW1hcnkpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9hcnRpY2xlPlxcbjwvZGl2PlwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcImFydGljbGVfYmxvY2tcIl0gPSBmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9IFwiXCIsIHN0YWNrMSwgaGVscGVyLCBvcHRpb25zLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3Npbmc7XG5cblxuICBidWZmZXIgKz0gXCI8YXJ0aWNsZSBjbGFzcz1cXFwiYXJ0aWNsZS1saXN0ZWQtc21hbGwgYXJ0aWNsZS10eXBlLXNwb25zb3JlZFxcXCI+XFxuXFxuICA8YSBjbGFzcz1cXFwiYXJ0aWNsZS1saXN0ZWQtdGh1bWJcXFwiIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiB0aXRsZT1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XFxuICAgIDxpbWcgaGVpZ2h0PVxcXCIxOTBcXFwiIHdpZHRoPVxcXCIzNDBcXFwiIGFsdD1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLmltYWdlKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5jYXB0aW9uKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKGhlbHBlciA9IGhlbHBlcnMuZ2V0VGh1bWJIcmVmIHx8IChkZXB0aDAgJiYgZGVwdGgwLmdldFRodW1iSHJlZiksb3B0aW9ucz17aGFzaDp7XG4gICAgJ3dpZHRoJzogKDM0MCksXG4gICAgJ2hlaWdodCc6ICgxOTApXG4gIH0sZGF0YTpkYXRhfSxoZWxwZXIgPyBoZWxwZXIuY2FsbChkZXB0aDAsIG9wdGlvbnMpIDogaGVscGVyTWlzc2luZy5jYWxsKGRlcHRoMCwgXCJnZXRUaHVtYkhyZWZcIiwgb3B0aW9ucykpKVxuICAgICsgXCJcXFwiPlxcbiAgPC9hPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1ib2R5XFxcIj5cXG4gICAgPHAgY2xhc3M9XFxcInNwb25zb3JlZC1ieS10ZXh0XFxcIj5cXG4gICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT5cXG4gICAgICBTcG9uc29yZWQgYnlcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzcG9uc29yLWxvZ29cXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuc3BvbnNvcikpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEubG9nbykpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEuaHJlZikpLHR5cGVvZiBzdGFjazEgPT09IGZ1bmN0aW9uVHlwZSA/IHN0YWNrMS5hcHBseShkZXB0aDApIDogc3RhY2sxKSlcbiAgICArIFwiXFxcIj5cXG4gICAgPC9wPlxcblxcbiAgICA8aDQgY2xhc3M9XFxcImFydGljbGUtdGl0bGVcXFwiPlxcbiAgICAgIDxhIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiB0aXRsZT1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvYT5cXG4gICAgPC9oND5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1leGNlcnB0XFxcIj5cXG4gICAgICBcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMuc3VtbWFyeSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5zdW1tYXJ5KTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcbjwvYXJ0aWNsZT5cIjtcbiAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcbndpbmRvd1tcIkZNXCJdW1wiVmlld3NcIl1bXCJhcnRpY2xlX2xhcmdlXzJcIl0gPSBmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9IFwiXCIsIHN0YWNrMSwgaGVscGVyLCBvcHRpb25zLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3Npbmc7XG5cblxuICBidWZmZXIgKz0gXCI8YXJ0aWNsZSBjbGFzcz1cXFwiYXJ0aWNsZS1sYXJnZSBhcnRpY2xlLXR5cGUtc3BvbnNvcmVkXFxcIj5cXG5cXG4gIDxhIGNsYXNzPVxcXCJhcnRpY2xlLWxpbmtcXFwiIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiB0aXRsZT1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtdGh1bWItd3JhcFxcXCI+XFxuICAgICAgPGltZyBoZWlnaHQ9XFxcIjI4NVxcXCIgd2lkdGg9XFxcIjUxMFxcXCIgYWx0PVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuaW1hZ2UpKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmNhcHRpb24pKSx0eXBlb2Ygc3RhY2sxID09PSBmdW5jdGlvblR5cGUgPyBzdGFjazEuYXBwbHkoZGVwdGgwKSA6IHN0YWNrMSkpXG4gICAgKyBcIlxcXCIgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoaGVscGVyID0gaGVscGVycy5nZXRUaHVtYkhyZWYgfHwgKGRlcHRoMCAmJiBkZXB0aDAuZ2V0VGh1bWJIcmVmKSxvcHRpb25zPXtoYXNoOntcbiAgICAnd2lkdGgnOiAoNTEwKSxcbiAgICAnaGVpZ2h0JzogKDI4NSlcbiAgfSxkYXRhOmRhdGF9LGhlbHBlciA/IGhlbHBlci5jYWxsKGRlcHRoMCwgb3B0aW9ucykgOiBoZWxwZXJNaXNzaW5nLmNhbGwoZGVwdGgwLCBcImdldFRodW1iSHJlZlwiLCBvcHRpb25zKSkpXG4gICAgKyBcIlxcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8cCBjbGFzcz1cXFwic3BvbnNvcmVkLWJ5LXRleHRcXFwiPlxcbiAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NhdGlvbi1hcnJvd1xcXCI+PC9pPlxcbiAgICAgIFNwb25zb3JlZCBieVxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNwb25zb3ItbG9nb1xcXCIgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9ICgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICYmIGRlcHRoMC5zcG9uc29yKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5sb2dvKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5ocmVmKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiPlxcbiAgICA8L3A+XFxuXFxuICAgIDxoMiBjbGFzcz1cXFwiYXJ0aWNsZS10aXRsZVxcXCI+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvaDI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtZXhjZXJwdFxcXCI+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnN1bW1hcnkpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuc3VtbWFyeSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCI8L2Rpdj5cXG4gIDwvYT5cXG48L2FydGljbGU+XCI7XG4gIHJldHVybiBidWZmZXI7XG4gIH07XG53aW5kb3dbXCJGTVwiXVtcIlZpZXdzXCJdW1wiYXJ0aWNsZV9saXN0ZWRcIl0gPSBmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9IFwiXCIsIHN0YWNrMSwgaGVscGVyLCBvcHRpb25zLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIHNlbGY9dGhpcztcblxuZnVuY3Rpb24gcHJvZ3JhbTEoZGVwdGgwLGRhdGEpIHtcbiAgXG4gIHZhciBidWZmZXIgPSBcIlwiLCBzdGFjazEsIGhlbHBlcjtcbiAgYnVmZmVyICs9IFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1leGNlcnB0XFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMuZXhjZXJwdCkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5leGNlcnB0KTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvZGl2PlxcbiAgICBcIjtcbiAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxuXG4gIGJ1ZmZlciArPSBcIjxhcnRpY2xlIGNsYXNzPVxcXCJhcnRpY2xlLWxpc3RlZCBhcnRpY2xlLXR5cGUtc3BvbnNvcmVkXFxcIj5cXG5cXG4gIDxhIGNsYXNzPVxcXCJhcnRpY2xlLWxpc3RlZC10aHVtYlxcXCIgaHJlZj1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmxpbmspIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAubGluayk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiIHRpdGxlPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cXG4gICAgPGltZyBoZWlnaHQ9XFxcIjE5MFxcXCIgd2lkdGg9XFxcIjM0MFxcXCIgYWx0PVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuaW1hZ2UpKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmNhcHRpb24pKSx0eXBlb2Ygc3RhY2sxID09PSBmdW5jdGlvblR5cGUgPyBzdGFjazEuYXBwbHkoZGVwdGgwKSA6IHN0YWNrMSkpXG4gICAgKyBcIlxcXCIgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoaGVscGVyID0gaGVscGVycy5nZXRUaHVtYkhyZWYgfHwgKGRlcHRoMCAmJiBkZXB0aDAuZ2V0VGh1bWJIcmVmKSxvcHRpb25zPXtoYXNoOntcbiAgICAnd2lkdGgnOiAoMzQwKSxcbiAgICAnaGVpZ2h0JzogKDE5MClcbiAgfSxkYXRhOmRhdGF9LGhlbHBlciA/IGhlbHBlci5jYWxsKGRlcHRoMCwgb3B0aW9ucykgOiBoZWxwZXJNaXNzaW5nLmNhbGwoZGVwdGgwLCBcImdldFRodW1iSHJlZlwiLCBvcHRpb25zKSkpXG4gICAgKyBcIlxcXCI+XFxuICA8L2E+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWJvZHlcXFwiPlxcbiAgICA8cCBjbGFzcz1cXFwic3BvbnNvcmVkLWJ5LXRleHRcXFwiPlxcbiAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NhdGlvbi1hcnJvd1xcXCI+PC9pPlxcbiAgICAgIFNwb25zb3JlZCBieVxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNwb25zb3ItbG9nb1xcXCIgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9ICgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICYmIGRlcHRoMC5zcG9uc29yKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5sb2dvKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5ocmVmKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiPlxcbiAgICA8L3A+XFxuXFxuICAgIDxoMiBjbGFzcz1cXFwiYXJ0aWNsZS10aXRsZVxcXCI+XFxuICAgICAgPGEgaHJlZj1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmxpbmspIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAubGluayk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiIHRpdGxlPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiBocmVmPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubGluaykgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5saW5rKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCIgdGl0bGU9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy50aXRsZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC50aXRsZSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcbiAgICAgIDwvYT5cXG4gICAgPC9oMj5cXG5cXG4gICAgXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgJiYgZGVwdGgwLmV4Y2VycHQpLCB7aGFzaDp7fSxpbnZlcnNlOnNlbGYubm9vcCxmbjpzZWxmLnByb2dyYW0oMSwgcHJvZ3JhbTEsIGRhdGEpLGRhdGE6ZGF0YX0pO1xuICBpZihzdGFjazEgfHwgc3RhY2sxID09PSAwKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICA8L2Rpdj5cXG48L2FydGljbGU+XCI7XG4gIHJldHVybiBidWZmZXI7XG4gIH07XG53aW5kb3dbXCJGTVwiXVtcIlZpZXdzXCJdW1wiYXJ0aWNsZV9saXN0ZWRfc21hbGxcIl0gPSBmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9IFwiXCIsIHN0YWNrMSwgaGVscGVyLCBvcHRpb25zLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3Npbmc7XG5cblxuICBidWZmZXIgKz0gXCI8YXJ0aWNsZSBjbGFzcz1cXFwiYXJ0aWNsZS1saXN0ZWQtc21hbGwgYXJ0aWNsZS10eXBlLXNwb25zb3JlZFxcXCI+XFxuXFxuICA8YSBjbGFzcz1cXFwiYXJ0aWNsZS1saXN0ZWQtdGh1bWJcXFwiIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiB0aXRsZT1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XFxuICAgIDxpbWcgaGVpZ2h0PVxcXCIxOTBcXFwiIHdpZHRoPVxcXCIzNDBcXFwiIGFsdD1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLmltYWdlKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5jYXB0aW9uKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJhcnRpY2xlLW1lZGl1bS10aHVtYlxcXCIgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoaGVscGVyID0gaGVscGVycy5nZXRUaHVtYkhyZWYgfHwgKGRlcHRoMCAmJiBkZXB0aDAuZ2V0VGh1bWJIcmVmKSxvcHRpb25zPXtoYXNoOntcbiAgICAnd2lkdGgnOiAoMzQwKSxcbiAgICAnaGVpZ2h0JzogKDE5MClcbiAgfSxkYXRhOmRhdGF9LGhlbHBlciA/IGhlbHBlci5jYWxsKGRlcHRoMCwgb3B0aW9ucykgOiBoZWxwZXJNaXNzaW5nLmNhbGwoZGVwdGgwLCBcImdldFRodW1iSHJlZlwiLCBvcHRpb25zKSkpXG4gICAgKyBcIlxcXCI+XFxuICA8L2E+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWJvZHlcXFwiPlxcbiAgICA8cCBjbGFzcz1cXFwic3BvbnNvcmVkLWJ5LXRleHRcXFwiPlxcbiAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NhdGlvbi1hcnJvd1xcXCI+PC9pPlxcbiAgICAgIFNwb25zb3JlZCBieVxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNwb25zb3ItbG9nb1xcXCIgc3JjPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9ICgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICYmIGRlcHRoMC5zcG9uc29yKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5sb2dvKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5ocmVmKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiPlxcbiAgICA8L3A+XFxuXFxuICAgIDxoNCBjbGFzcz1cXFwiYXJ0aWNsZS10aXRsZVxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImlzLXRyYWNrZWRcXFwiIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiB0aXRsZT1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICBcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxuICAgICAgPC9hPlxcbiAgICA8L2g0PlxcblxcbiAgPC9kaXY+XFxuXFxuPC9hcnRpY2xlPlwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcImFydGljbGVfbWVkaXVtXCJdID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIHZhciBidWZmZXIgPSBcIlwiLCBzdGFjazEsIGhlbHBlciwgb3B0aW9ucywgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nO1xuXG5cbiAgYnVmZmVyICs9IFwiPGFydGljbGUgY2xhc3M9XFxcImFydGljbGUtbWVkaXVtIGdyaWQtbW9iaWxlLTIgYXJ0aWNsZS10eXBlLXNwb25zb3JlZFxcXCI+XFxuXFxuICA8YSBjbGFzcz1cXFwiYXJ0aWNsZS1saW5rXFxcIiBocmVmPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubGluaykgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5saW5rKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCIgdGl0bGU9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy50aXRsZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC50aXRsZSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRodW1iLXdyYXBcXFwiPlxcbiAgICAgIDxpbWcgaGVpZ2h0PVxcXCIxOTBcXFwiIHdpZHRoPVxcXCIzNDBcXFwiIGFsdD1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLmltYWdlKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5jYXB0aW9uKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKGhlbHBlciA9IGhlbHBlcnMuZ2V0VGh1bWJIcmVmIHx8IChkZXB0aDAgJiYgZGVwdGgwLmdldFRodW1iSHJlZiksb3B0aW9ucz17aGFzaDp7XG4gICAgJ3dpZHRoJzogKDM0MCksXG4gICAgJ2hlaWdodCc6ICgxOTApXG4gIH0sZGF0YTpkYXRhfSxoZWxwZXIgPyBoZWxwZXIuY2FsbChkZXB0aDAsIG9wdGlvbnMpIDogaGVscGVyTWlzc2luZy5jYWxsKGRlcHRoMCwgXCJnZXRUaHVtYkhyZWZcIiwgb3B0aW9ucykpKVxuICAgICsgXCJcXFwiPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPHAgY2xhc3M9XFxcInNwb25zb3JlZC1ieS10ZXh0XFxcIj5cXG4gICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT5cXG4gICAgICBTcG9uc29yZWQgYnlcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzcG9uc29yLWxvZ29cXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuc3BvbnNvcikpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEubG9nbykpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEuaHJlZikpLHR5cGVvZiBzdGFjazEgPT09IGZ1bmN0aW9uVHlwZSA/IHN0YWNrMS5hcHBseShkZXB0aDApIDogc3RhY2sxKSlcbiAgICArIFwiXFxcIj5cXG4gICAgPC9wPlxcblxcbiAgICA8aDIgY2xhc3M9XFxcImFydGljbGUtdGl0bGVcXFwiPlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy50aXRsZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC50aXRsZSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCI8L2gyPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWV4Y2VycHRcXFwiPlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5zdW1tYXJ5KSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnN1bW1hcnkpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9kaXY+XFxuICA8L2E+XFxuPC9hcnRpY2xlPlwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcImFydGljbGVfc21hbGxfMVwiXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIG9wdGlvbnMsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZztcblxuXG4gIGJ1ZmZlciArPSBcIjxhcnRpY2xlIGNsYXNzPVxcXCJhcnRpY2xlLXNtYWxsIGFydGljbGUtdHlwZS1zcG9uc29yZWRcXFwiPlxcbiAgPGEgY2xhc3M9XFxcImFydGljbGUtbGlua1xcXCIgaHJlZj1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmxpbmspIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAubGluayk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiIHRpdGxlPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS10aHVtYi13cmFwXFxcIj5cXG4gICAgICA8aW1nIGhlaWdodD1cXFwiOTVcXFwiIHdpZHRoPVxcXCIxNzBcXFwiIGFsdD1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLmltYWdlKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5jYXB0aW9uKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJhcnRpY2xlLXNtYWxsLXRodW1iXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKChoZWxwZXIgPSBoZWxwZXJzLmdldFRodW1iSHJlZiB8fCAoZGVwdGgwICYmIGRlcHRoMC5nZXRUaHVtYkhyZWYpLG9wdGlvbnM9e2hhc2g6e1xuICAgICd3aWR0aCc6ICgxNzApLFxuICAgICdoZWlnaHQnOiAoOTUpXG4gIH0sZGF0YTpkYXRhfSxoZWxwZXIgPyBoZWxwZXIuY2FsbChkZXB0aDAsIG9wdGlvbnMpIDogaGVscGVyTWlzc2luZy5jYWxsKGRlcHRoMCwgXCJnZXRUaHVtYkhyZWZcIiwgb3B0aW9ucykpKVxuICAgICsgXCJcXFwiPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPHAgY2xhc3M9XFxcInNwb25zb3JlZC1ieS10ZXh0XFxcIj5cXG4gICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT5cXG4gICAgICBTcG9uc29yZWQgYnlcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzcG9uc29yLWxvZ29cXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuc3BvbnNvcikpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEubG9nbykpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEuaHJlZikpLHR5cGVvZiBzdGFjazEgPT09IGZ1bmN0aW9uVHlwZSA/IHN0YWNrMS5hcHBseShkZXB0aDApIDogc3RhY2sxKSlcbiAgICArIFwiXFxcIj5cXG4gICAgPC9wPlxcblxcbiAgICA8aDIgY2xhc3M9XFxcImFydGljbGUtdGl0bGVcXFwiPlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy50aXRsZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC50aXRsZSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCI8L2gyPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWV4Y2VycHRcXFwiPlxcbiAgICAgIFwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5zdW1tYXJ5KSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnN1bW1hcnkpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxuICAgIDwvZGl2PlxcbiAgPC9hPlxcbjwvYXJ0aWNsZT5cIjtcbiAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcbndpbmRvd1tcIkZNXCJdW1wiVmlld3NcIl1bXCJiZWZvcmVfYXJ0aWNsZVwiXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIG9wdGlvbnMsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZztcblxuXG4gIGJ1ZmZlciArPSBcIjxkaXYgY2xhc3M9XFxcInNwb25zb3JlZC1hcnRpY2xlc1xcXCI+XFxuICA8YXJ0aWNsZSBjbGFzcz1cXFwiYXJ0aWNsZS1saXN0ZWQtc21hbGwgYXJ0aWNsZS10eXBlLXNwb25zb3JlZFxcXCI+XFxuXFxuICAgIDxhIGNsYXNzPVxcXCJhcnRpY2xlLWxpc3RlZC10aHVtYlxcXCIgaHJlZj1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmxpbmspIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAubGluayk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiIHRpdGxlPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cXG4gICAgICA8aW1nIGhlaWdodD1cXFwiMTkwXFxcIiB3aWR0aD1cXFwiMzQwXFxcIiBhbHQ9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICYmIGRlcHRoMC5pbWFnZSkpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEuY2FwdGlvbikpLHR5cGVvZiBzdGFjazEgPT09IGZ1bmN0aW9uVHlwZSA/IHN0YWNrMS5hcHBseShkZXB0aDApIDogc3RhY2sxKSlcbiAgICArIFwiXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKChoZWxwZXIgPSBoZWxwZXJzLmdldFRodW1iSHJlZiB8fCAoZGVwdGgwICYmIGRlcHRoMC5nZXRUaHVtYkhyZWYpLG9wdGlvbnM9e2hhc2g6e1xuICAgICd3aWR0aCc6ICgzNDApLFxuICAgICdoZWlnaHQnOiAoMTkwKVxuICB9LGRhdGE6ZGF0YX0saGVscGVyID8gaGVscGVyLmNhbGwoZGVwdGgwLCBvcHRpb25zKSA6IGhlbHBlck1pc3NpbmcuY2FsbChkZXB0aDAsIFwiZ2V0VGh1bWJIcmVmXCIsIG9wdGlvbnMpKSlcbiAgICArIFwiXFxcIj5cXG4gICAgPC9hPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWJvZHlcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzcG9uc29yZWQtYnktdGV4dFxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT5cXG4gICAgICAgIFNwb25zb3JlZCBieVxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwic3BvbnNvci1sb2dvXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoc3RhY2sxID0gKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLnNwb25zb3IpKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmxvZ28pKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmhyZWYpKSx0eXBlb2Ygc3RhY2sxID09PSBmdW5jdGlvblR5cGUgPyBzdGFjazEuYXBwbHkoZGVwdGgwKSA6IHN0YWNrMSkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgPC9wPlxcblxcbiAgICAgIDxoNCBjbGFzcz1cXFwiYXJ0aWNsZS10aXRsZVxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubGluaykgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5saW5rKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCIgdGl0bGU9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy50aXRsZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC50aXRsZSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiPlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy50aXRsZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC50aXRsZSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCI8L2E+XFxuICAgICAgPC9oND5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWV4Y2VycHRcXFwiPlxcbiAgICAgICAgXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnN1bW1hcnkpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuc3VtbWFyeSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICA8L2FydGljbGU+XFxuPC9kaXY+XCI7XG4gIHJldHVybiBidWZmZXI7XG4gIH07XG53aW5kb3dbXCJGTVwiXVtcIlZpZXdzXCJdW1wiZmVhdHVyZV9ncmlkXCJdID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIHZhciBidWZmZXIgPSBcIlwiLCBzdGFjazEsIGhlbHBlciwgb3B0aW9ucywgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nO1xuXG5cbiAgYnVmZmVyICs9IFwiPGFydGljbGUgY2xhc3M9XFxcImZlYXR1cmUtbWVkaXVtIGFydGljbGUtdHlwZS1zcG9uc29yZWRcXFwiPlxcblxcbiAgPGEgY2xhc3M9XFxcImZlYXR1cmUtbGlua1xcXCIgaHJlZj1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmxpbmspIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAubGluayk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiIHRpdGxlPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cXG5cXG4gICAgPGltZyBoZWlnaHQ9XFxcIjE5MFxcXCIgd2lkdGg9XFxcIjM0MFxcXCIgYWx0PVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuaW1hZ2UpKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmNhcHRpb24pKSx0eXBlb2Ygc3RhY2sxID09PSBmdW5jdGlvblR5cGUgPyBzdGFjazEuYXBwbHkoZGVwdGgwKSA6IHN0YWNrMSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImFydGljbGUtbWVkaXVtLXRodW1iXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKChoZWxwZXIgPSBoZWxwZXJzLmdldFRodW1iSHJlZiB8fCAoZGVwdGgwICYmIGRlcHRoMC5nZXRUaHVtYkhyZWYpLG9wdGlvbnM9e2hhc2g6e1xuICAgICd3aWR0aCc6ICgzNDApLFxuICAgICdoZWlnaHQnOiAoMTkwKVxuICB9LGRhdGE6ZGF0YX0saGVscGVyID8gaGVscGVyLmNhbGwoZGVwdGgwLCBvcHRpb25zKSA6IGhlbHBlck1pc3NpbmcuY2FsbChkZXB0aDAsIFwiZ2V0VGh1bWJIcmVmXCIsIG9wdGlvbnMpKSlcbiAgICArIFwiXFxcIj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmVhdHVyZS1ibHVyYlxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInNwb25zb3JlZC1ieS10ZXh0XFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NhdGlvbi1hcnJvd1xcXCI+PC9pPlxcbiAgICAgICAgU3BvbnNvcmVkIGJ5XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJzcG9uc29yLWxvZ29cXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuc3BvbnNvcikpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEubG9nbykpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEuaHJlZikpLHR5cGVvZiBzdGFjazEgPT09IGZ1bmN0aW9uVHlwZSA/IHN0YWNrMS5hcHBseShkZXB0aDApIDogc3RhY2sxKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICA8L3A+XFxuXFxuICAgICAgPGgyIGNsYXNzPVxcXCJmZWF0dXJlLXRpdGxlXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9oMj5cXG4gICAgPC9kaXY+XFxuXFxuICA8L2E+XFxuPC9hcnRpY2xlPlwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcImZlYXR1cmVfaHVnZVwiXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIG9wdGlvbnMsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZztcblxuXG4gIGJ1ZmZlciArPSBcIjxsaT5cXG4gIDxhcnRpY2xlIGNsYXNzPVxcXCJmZWF0dXJlLWh1Z2UgYXJ0aWNsZS10eXBlLXNwb25zb3JlZFxcXCI+XFxuXFxuICAgIDxhIGNsYXNzPVxcXCJmZWF0dXJlLWxpbmtcXFwiIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiB0aXRsZT1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgPGltZyBoZWlnaHQ9XFxcIjQ2MFxcXCIgd2lkdGg9XFxcIjEwMjBcXFwiIGFsdD1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLmltYWdlKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5jYXB0aW9uKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKGhlbHBlciA9IGhlbHBlcnMuZ2V0VGh1bWJIcmVmIHx8IChkZXB0aDAgJiYgZGVwdGgwLmdldFRodW1iSHJlZiksb3B0aW9ucz17aGFzaDp7XG4gICAgJ3dpZHRoJzogKDEwMjApLFxuICAgICdoZWlnaHQnOiAoNDYwKVxuICB9LGRhdGE6ZGF0YX0saGVscGVyID8gaGVscGVyLmNhbGwoZGVwdGgwLCBvcHRpb25zKSA6IGhlbHBlck1pc3NpbmcuY2FsbChkZXB0aDAsIFwiZ2V0VGh1bWJIcmVmXCIsIG9wdGlvbnMpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiYXJ0aWNsZS1mZWF0dXJlLWh1Z2UtdGh1bWJcXFwiPlxcblxcbiAgICAgPGRpdiBjbGFzcz1cXFwiZmVhdHVyZS1ibHVyYlxcXCI+XFxuICAgICAgIDxwIGNsYXNzPVxcXCJzcG9uc29yZWQtYnktdGV4dFxcXCI+XFxuICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2F0aW9uLWFycm93XFxcIj48L2k+XFxuICAgICAgICAgU3BvbnNvcmVkIGJ5XFxuICAgICAgICAgPGltZyBjbGFzcz1cXFwic3BvbnNvci1sb2dvXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoc3RhY2sxID0gKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLnNwb25zb3IpKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmxvZ28pKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmhyZWYpKSx0eXBlb2Ygc3RhY2sxID09PSBmdW5jdGlvblR5cGUgPyBzdGFjazEuYXBwbHkoZGVwdGgwKSA6IHN0YWNrMSkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgIDwvcD5cXG5cXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiZmVhdHVyZS10aXRsZVxcXCI+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvaDI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmZWF0dXJlLWV4Y2VycHRcXFwiPlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5zdW1tYXJ5KSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnN1bW1hcnkpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvYT5cXG5cXG4gIDwvYXJ0aWNsZT5cXG48L2xpPlwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcImZlYXR1cmVfbWVkaXVtXCJdID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIHZhciBidWZmZXIgPSBcIlwiLCBzdGFjazEsIGhlbHBlciwgb3B0aW9ucywgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nO1xuXG5cbiAgYnVmZmVyICs9IFwiPGFydGljbGUgY2xhc3M9XFxcImZlYXR1cmUtbWVkaXVtIGFydGljbGUtdHlwZS1zcG9uc29yZWRcXFwiPlxcblxcbiAgPGEgY2xhc3M9XFxcImZlYXR1cmUtbGlua1xcXCIgaHJlZj1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmxpbmspIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAubGluayk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiIHRpdGxlPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cXG5cXG4gICAgPGltZyBoZWlnaHQ9XFxcIjk1XFxcIiB3aWR0aD1cXFwiMTcwXFxcIiBhbHQ9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICYmIGRlcHRoMC5pbWFnZSkpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEuY2FwdGlvbikpLHR5cGVvZiBzdGFjazEgPT09IGZ1bmN0aW9uVHlwZSA/IHN0YWNrMS5hcHBseShkZXB0aDApIDogc3RhY2sxKSlcbiAgICArIFwiXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKChoZWxwZXIgPSBoZWxwZXJzLmdldFRodW1iSHJlZiB8fCAoZGVwdGgwICYmIGRlcHRoMC5nZXRUaHVtYkhyZWYpLG9wdGlvbnM9e2hhc2g6e1xuICAgICd3aWR0aCc6ICgxNzApLFxuICAgICdoZWlnaHQnOiAoOTUpXG4gIH0sZGF0YTpkYXRhfSxoZWxwZXIgPyBoZWxwZXIuY2FsbChkZXB0aDAsIG9wdGlvbnMpIDogaGVscGVyTWlzc2luZy5jYWxsKGRlcHRoMCwgXCJnZXRUaHVtYkhyZWZcIiwgb3B0aW9ucykpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJhcnRpY2xlLXNtYWxsLXRodW1iXFxcIj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmVhdHVyZS1ibHVyYlxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInNwb25zb3JlZC1ieS10ZXh0XFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NhdGlvbi1hcnJvd1xcXCI+PC9pPlxcbiAgICAgICAgU3BvbnNvcmVkIGJ5XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJzcG9uc29yLWxvZ29cXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuc3BvbnNvcikpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEubG9nbykpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEuaHJlZikpLHR5cGVvZiBzdGFjazEgPT09IGZ1bmN0aW9uVHlwZSA/IHN0YWNrMS5hcHBseShkZXB0aDApIDogc3RhY2sxKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICA8L3A+XFxuXFxuICAgICAgPGgyIGNsYXNzPVxcXCJmZWF0dXJlLXRpdGxlXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9oMj5cXG4gICAgPC9kaXY+XFxuXFxuICA8L2E+XFxuPC9hcnRpY2xlPlwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcImZlYXR1cmVfdGFic1wiXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIG9wdGlvbnMsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZztcblxuXG4gIGJ1ZmZlciArPSBcIjxhIGNsYXNzPVxcXCJmZWF0dXJlLXRhYiBncmlkLW1vYmlsZS0xIGdyaWQtbW9iaWxlLW9tZWdhIHRhYnMtbWVudS1pdGVtIGFydGljbGUtdHlwZS1zcG9uc29yZWRcXFwiIHRpdGxlPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIiBocmVmPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubGluaykgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5saW5rKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XFxuXFxuICA8aW1nIGhlaWdodD1cXFwiOTVcXFwiIHdpZHRoPVxcXCIxNzBcXFwiIGFsdD1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLmltYWdlKSksc3RhY2sxID09IG51bGwgfHwgc3RhY2sxID09PSBmYWxzZSA/IHN0YWNrMSA6IHN0YWNrMS5jYXB0aW9uKSksdHlwZW9mIHN0YWNrMSA9PT0gZnVuY3Rpb25UeXBlID8gc3RhY2sxLmFwcGx5KGRlcHRoMCkgOiBzdGFjazEpKVxuICAgICsgXCJcXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKGhlbHBlciA9IGhlbHBlcnMuZ2V0VGh1bWJIcmVmIHx8IChkZXB0aDAgJiYgZGVwdGgwLmdldFRodW1iSHJlZiksb3B0aW9ucz17aGFzaDp7XG4gICAgJ3dpZHRoJzogKDE3MCksXG4gICAgJ2hlaWdodCc6ICg5NSlcbiAgfSxkYXRhOmRhdGF9LGhlbHBlciA/IGhlbHBlci5jYWxsKGRlcHRoMCwgb3B0aW9ucykgOiBoZWxwZXJNaXNzaW5nLmNhbGwoZGVwdGgwLCBcImdldFRodW1iSHJlZlwiLCBvcHRpb25zKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImFydGljbGUtc21hbGwtdGh1bWJcXFwiPlxcblxcbiAgPHAgY2xhc3M9XFxcInNwb25zb3JlZC1ieS10ZXh0XFxcIj5cXG4gICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2F0aW9uLWFycm93XFxcIj48L2k+XFxuICAgIFNwb25zb3JlZFxcbiAgPC9wPlxcblxcbiAgPGgyIGNsYXNzPVxcXCJmZWF0dXJlLXRpdGxlXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9oMj5cXG5cXG48L2E+XCI7XG4gIHJldHVybiBidWZmZXI7XG4gIH07XG53aW5kb3dbXCJGTVwiXVtcIlZpZXdzXCJdW1wicG9zdF9jYXJkX2hvbWVfcGFnZVwiXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cbiAgYnVmZmVyICs9IFwiPGRpdiBjbGFzcz1cXFwiYy1jYXJkX193cmFwcGVyIG8tY29sLXhzLS02IG8tY29sLW1kLS0zICBjLWNhcmQtLXNtIGMtY2FyZC0tYm94ZWRcXFwiPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiYy1jYXJkXFxcIj5cXG5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYy1jYXJkX19tZWRpYS13cmFwcGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWNhcmRfX21lZGlhLWlubmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImMtY2FyZF9fc3BvbnNvcmVkIGMtY2FyZF9fc3BvbnNvcmVkLS1sYW5kZXJcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT5cXG4gICAgICAgICAgU3BvbnNvcmVkIGJ5XFxuICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImMtY2FyZF9fc3BvbnNvcmVkLWxvZ29cXFwiIHNyYz1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChzdGFjazEgPSAoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAmJiBkZXB0aDAuc3BvbnNvcikpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEubG9nbykpLHN0YWNrMSA9PSBudWxsIHx8IHN0YWNrMSA9PT0gZmFsc2UgPyBzdGFjazEgOiBzdGFjazEuaHJlZikpLHR5cGVvZiBzdGFjazEgPT09IGZ1bmN0aW9uVHlwZSA/IHN0YWNrMS5hcHBseShkZXB0aDApIDogc3RhY2sxKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiYy1jYXJkX19pbWFnZVxcXCIgc3JjPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMuZ2V0VGh1bWJIcmVmKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmdldFRodW1iSHJlZik7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYy1jYXJkX190aXRsZS13cmFwcGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWNhcmRfX3RpdGxlLWlubmVyXFxcIj5cXG4gICAgICAgIDxoNSBjbGFzcz1cXFwiYy1jYXJkX190YXhvbm9teVxcXCI+U3BvbnNvcmVkPC9oNT5cXG4gICAgICAgIDxoNCBjbGFzcz1cXFwiYy1jYXJkX190aXRsZVxcXCI+XFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJjLWNhcmRfX3RpdGxlLWxpbmtcXFwiIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9hPlxcbiAgICAgICAgPC9oND5cXG5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxhIGNsYXNzPVxcXCJjLWNhcmRfX2xpbmsgdS1mYXV4LWJsb2NrLWxpbmtfX292ZXJsYXlcXFwiIGhyZWY9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5saW5rKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLmxpbmspOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMudGl0bGUpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAudGl0bGUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9hPlxcblxcbiAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXCI7XG4gIHJldHVybiBidWZmZXI7XG4gIH07XG53aW5kb3dbXCJGTVwiXVtcIlZpZXdzXCJdW1wicG9zdF9jYXJkX3JlbGF0ZWRfYWZ0ZXJfYXJ0aWNsZVwiXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cbiAgYnVmZmVyICs9IFwiPGRpdiBjbGFzcz1cXFwiYy1jYXJkX193cmFwcGVyIG8tY29sLXhzLS1maWZ0aCBvLWNvbC1sZy0tZmlmdGggIGMtY2FyZC0teHNcXFwiPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiYy1jYXJkXFxcIj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYy1jYXJkX19tZWRpYS13cmFwcGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWNhcmRfX21lZGlhLWlubmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImMtY2FyZF9fc3BvbnNvcmVkIGMtY2FyZF9fc3BvbnNvcmVkLS1hZnRlci1hcnRpY2xlXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2F0aW9uLWFycm93XFxcIj48L2k+XFxuICAgICAgICAgIFNwb25zb3JlZCBieVxcbiAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJjLWNhcmRfX3Nwb25zb3JlZC1sb2dvXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoc3RhY2sxID0gKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLnNwb25zb3IpKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmxvZ28pKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmhyZWYpKSx0eXBlb2Ygc3RhY2sxID09PSBmdW5jdGlvblR5cGUgPyBzdGFjazEuYXBwbHkoZGVwdGgwKSA6IHN0YWNrMSkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImMtY2FyZF9faW1hZ2VcXFwiIHNyYz1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmdldFRodW1iSHJlZikgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5nZXRUaHVtYkhyZWYpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImMtY2FyZF9fdGl0bGUtd3JhcHBlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1jYXJkX190aXRsZS1pbm5lclxcXCI+XFxuICAgICAgICA8aDUgY2xhc3M9XFxcImMtY2FyZF9fdGF4b25vbXlcXFwiPlNwb25zb3JlZDwvaDU+XFxuICAgICAgICA8aDQgY2xhc3M9XFxcImMtY2FyZF9fdGl0bGVcXFwiPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwiYy1jYXJkX190aXRsZS1saW5rXFxcIiBocmVmPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubGluaykgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5saW5rKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvYT5cXG4gICAgICAgIDwvaDQ+XFxuXFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8YSBjbGFzcz1cXFwiYy1jYXJkX19saW5rIHUtZmF1eC1ibG9jay1saW5rX19vdmVybGF5XFxcIiBocmVmPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubGluaykgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5saW5rKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvYT5cXG5cXG4gIDwvZGl2PlxcblxcbjwvZGl2PlxcblwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcInBvc3RfY2FyZF9yZWxhdGVkX2FzaWRlXCJdID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIHZhciBidWZmZXIgPSBcIlwiLCBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG5cblxuICBidWZmZXIgKz0gXCI8ZGl2IGNsYXNzPVxcXCJjLWNhcmRfX3dyYXBwZXIgYy1jYXJkLXdyYXBwZXItLWxpc3Qgby1jb2wteHMtLTQgby1jb2wtbGctLTEyICBjLWNhcmQtLXhzXFxcIj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImMtY2FyZFxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImMtY2FyZF9fbWVkaWEtd3JhcHBlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1jYXJkX19tZWRpYS1pbm5lclxcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJjLWNhcmRfX2ltYWdlXFxcIiBzcmM9XFxcIlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5nZXRUaHVtYkhyZWYpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuZ2V0VGh1bWJIcmVmKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjLWNhcmRfX3RpdGxlLXdyYXBwZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImMtY2FyZF9fdGl0bGUtaW5uZXJcXFwiPlxcblxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJjLWNhcmRfX3RpdGxlXFxcIj5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcImMtY2FyZF9fdGl0bGUtbGlua1xcXCIgaHJlZj1cXFwiXCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLmxpbmspIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAubGluayk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiPlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy50aXRsZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC50aXRsZSk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCI8L2E+XFxuICAgICAgICA8L2g0PlxcblxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYy1jYXJkX19zcG9uc29yZWQgYy1jYXJkX19zcG9uc29yZWQtLWFzaWRlXFxcIj5cXG4gICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jYXRpb24tYXJyb3dcXFwiPjwvaT5cXG4gICAgICBTcG9uc29yZWQgYnlcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJjLWNhcmRfX3Nwb25zb3JlZC1sb2dvXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoc3RhY2sxID0gKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgJiYgZGVwdGgwLnNwb25zb3IpKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmxvZ28pKSxzdGFjazEgPT0gbnVsbCB8fCBzdGFjazEgPT09IGZhbHNlID8gc3RhY2sxIDogc3RhY2sxLmhyZWYpKSx0eXBlb2Ygc3RhY2sxID09PSBmdW5jdGlvblR5cGUgPyBzdGFjazEuYXBwbHkoZGVwdGgwKSA6IHN0YWNrMSkpXG4gICAgKyBcIlxcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8YSBjbGFzcz1cXFwiYy1jYXJkX19saW5rIHUtZmF1eC1ibG9jay1saW5rX19vdmVybGF5XFxcIiBocmVmPVxcXCJcIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubGluaykgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5saW5rKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIlxcXCI+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLnRpdGxlKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvYT5cXG5cXG4gIDwvZGl2PlxcblxcbjwvZGl2PlxcblwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9O1xud2luZG93W1wiRk1cIl1bXCJWaWV3c1wiXVtcInNpZGViYXJcIl0gPSBmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8ZGl2PlNJREVCQVI8L2Rpdj5cIjtcbiAgfTsiLCI7IHZhciBfX2Jyb3dzZXJpZnlfc2hpbV9yZXF1aXJlX189cmVxdWlyZTsoZnVuY3Rpb24gYnJvd3NlcmlmeVNoaW0obW9kdWxlLCBleHBvcnRzLCByZXF1aXJlLCBkZWZpbmUsIGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKSB7XG5cbi8qIERBQy5qcyAyLjUuMyBDb3B5cmlnaHQgMjAxNCBBT0wgQWR2ZXJ0aXNpbmcuICovXG53aW5kb3cuQURURUNIPXdpbmRvdy5BRFRFQ0h8fHtkZWJ1Z01vZGU6ITEsY29uZmlnOntwbGFjZW1lbnRzOnt9LHBsYWNlbWVudHNkeW46e319fSx3aW5kb3cuREFDPXdpbmRvdy5EQUN8fHt9O3RyeXshZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBhKGEsYixjKXtmdW5jdGlvbiBkKCl7dmFyIGE9YyYmYy5uYXZpZ2F0b3ImJmMubmF2aWdhdG9yLnVzZXJBZ2VudDtpZihhKXt2YXIgYj1hLm1hdGNoKC9NU0lFIChbXjtdKil8VHJpZGVudC4qOyBydjooWzAtOS5dKykvKTtiJiYoYlsxXXx8YlsyXSkmJihrPWUoYlsxXXx8YlsyXSksbD1rJiYoOT5rfHxjLmRvY3VtZW50LmRvY3VtZW50TW9kZSYmYy5kb2N1bWVudC5kb2N1bWVudE1vZGU8MTApKTt2YXIgZD1hLm1hdGNoKC9BcHBsZVdlYktpdFxcLyhbXlxcc10qKS8pO2QmJmRbMV0mJihuPWUoZFsxXSkpO3ZhciBmPWEubWF0Y2goLyhDaHJvbWV8Q3JNb3xDcmlPUylcXC8oW15cXHNdKikvKTtmJiZmWzFdJiZmWzJdJiYobT1lKGZbMl0pLG49MCl9fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIHBhcnNlRmxvYXQoYSl9ZnVuY3Rpb24gZigpe3JldHVybiBrfWZ1bmN0aW9uIGcoKXtyZXR1cm4gbH1mdW5jdGlvbiBoKCl7cmV0dXJuISFtfWZ1bmN0aW9uIGkoKXtyZXR1cm4hIW59dmFyIGo9XCJFbnZpcm9ubWVudFwiLGs9MCxsPSExLG09MCxuPTA7cmV0dXJuIGQoKSxhW2pdPXtpc09sZElFTW9kZTpnLGdldElFVmVyc2lvbjpmLGlzQ2hyb21lOmgsaXNTYWZhcmk6aX0sYVtqXX1mdW5jdGlvbiBiKGEsYixjKXtmdW5jdGlvbiBkKGEsYixjKXt2YXIgZCxlPWEmJmEubGVuZ3RofHwwO2ZvcihkPTA7ZT5kO2QrKyliLmNhbGwoYyxhW2RdLGQpfWZ1bmN0aW9uIGUoYSxiLGMpe2lmKGEpe3ZhciBkO2ZvcihkIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShkKSYmYi5jYWxsKGMsZCxhW2RdKX19ZnVuY3Rpb24gZihhKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYX1mdW5jdGlvbiBnKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGgoYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYX1mdW5jdGlvbiBpKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiZpc0Zpbml0ZShhKX1mdW5jdGlvbiBqKGEpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhJiZhLmNvbnN0cnVjdG9yPT09QXJyYXl9ZnVuY3Rpb24gayhhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGF9ZnVuY3Rpb24gbChhKXt2YXIgYjtpZighYy5KU09OKXRocm93IG5ldyBFcnJvcihcIkpTT04gbm90IGZvdW5kLiBDb3VsZCBub3QgdHJhbnNmb3JtIHRoZSBzdHJpbmcgaW50byBhbiBvYmplY3RcIik7cmV0dXJuIGI9Yy5KU09OLnBhcnNlKGEpfWZ1bmN0aW9uIG0oYSxiLGMsZil7dmFyIGcsaD17fTtjPyhkKGMsZnVuY3Rpb24oYSl7Yi5oYXNPd25Qcm9wZXJ0eShhKSYmKGhbYV09ITApfSksZz1mP2Z1bmN0aW9uKGIsYyl7aFtiXXx8KGFbYl09Yyl9OmZ1bmN0aW9uKGMpe2hbY10mJihhW2NdPWJbY10pfSk6Zz1mdW5jdGlvbihiLGMpe2FbYl09Y30sZShiLGcpfWZ1bmN0aW9uIG4oYSl7dmFyIGI9Qy5nZXRFbGVtZW50QnlJZChhLmFkQ29udGFpbmVySWQpO3JldHVybiBudWxsIT09YiYmZihiKSYmYn1mdW5jdGlvbiBvKGIpe3ZhciBjPWIuY29uZmlnLGQ9YS5FbnZpcm9ubWVudC5nZXRJRVZlcnNpb247aWYoIW4oYykpe2lmKCFhLlJlc291cmNlTWFuYWdlci5pc1N5bmMoYi5jb25maWcubGVnYWN5REFDTG9hZFR5cGUsZCkpdGhyb3cgQitcIiNjcmVhdGVBZENvbnRhaW5lciBBZCBDb250YWluZXIgY2Fubm90IGJlIGNyZWF0ZWRcIjtDLndyaXRlKCc8ZGl2IGlkPVwiJytjLmFkQ29udGFpbmVySWQrJ1wiIHN0eWxlPVwicGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO1wiPjwvZGl2PicpLGMuYWRDb250YWluZXI9Qy5nZXRFbGVtZW50QnlJZChjLmFkQ29udGFpbmVySWQpLGIubG9nZ2VyLmxvZyhCLFwiY3JlYXRlQWRDb250YWluZXJcIixcIkNyZWF0ZWQgPGRpdj4gZWxlbWVudCB3aXRoIElEIFwiK2MuYWRDb250YWluZXJJZCl9fWZ1bmN0aW9uIHAoYSl7dmFyIGI9Qy5nZXRFbGVtZW50QnlJZChhLmFkQ29udGFpbmVySWQpO2lmKG51bGw9PT1ifHwhZihiKSl0aHJvdyBuZXcgRXJyb3IoQitcIiNyZXNvbHZlQ29udGFpbmVyIEFkIENvbnRhaW5lciBub3QgZm91bmRcIik7YS5hZENvbnRhaW5lcj1iLGEuc2tpcENvbnRhaW5lckNsZWFufHwoYS5hZENvbnRhaW5lci5pbm5lckhUTUw9XCJcIil9ZnVuY3Rpb24gcShhKXt2YXIgYj1hLnF1ZXVlSWQ/JyBhZHRlY2hRdWV1ZUlkPVwiJythLnF1ZXVlSWQrJ1wiJzpcIlwiO3JldHVybic8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCInK2EuY29uZmlnLmFkY2FsbFVybCsnXCInK2IrXCI+PC9zY3JpcHQ+XCJ9ZnVuY3Rpb24gcihhLGIpe3JldHVybiBmdW5jdGlvbigpe3RyeXthLmFwcGx5KG51bGwsYXJndW1lbnRzKX1jYXRjaChjKXtpZihiLmxvZyhcIkV4Y2VwdGlvbiByYWlzZWQ6IFwiK2MubWVzc2FnZSksYi5pc0VuYWJsZWQoKSl0aHJvdyBjfX19ZnVuY3Rpb24gcyhhKXtyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKmEpfWZ1bmN0aW9uIHQoYSxiLGMsZCl7cmV0dXJuIHZvaWQgMD09PWF8fHZvaWQgMD09PWI/ITE6KGMmJihjPXYoW2EsYl0sYykpLHcoYSxiLGMsZCkmJncoYixhLGMsZCkpfWZ1bmN0aW9uIHUoYSxiKXt2YXIgYz1bXSxmPXt9O3JldHVybiBkKGEsZnVuY3Rpb24oYSl7ZShhLGZ1bmN0aW9uKGEpeyFmW2FdJiZiLnRlc3QoYSkmJihjLnB1c2goYSksZlthXT0hMCl9KX0pLGN9ZnVuY3Rpb24gdihhLGIpe3ZhciBjPVtdO3JldHVybiBkKGIsZnVuY3Rpb24oYil7aWYoYiBpbnN0YW5jZW9mIFJlZ0V4cCl7dmFyIGQ9dShhLGIpO2QubGVuZ3RoPjAmJkFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGMsZCl9ZWxzZSBjLnB1c2goYil9KSxjfWZ1bmN0aW9uIHcoYSxiLGMsZCl7ZnVuY3Rpb24gZShlKXt2YXIgZj0hKGEuaGFzT3duUHJvcGVydHkoZSl8fGIuaGFzT3duUHJvcGVydHkoZSkpO3JldHVybiBmPyEwOmQmJngoYyxlKT8hMDphLmhhc093blByb3BlcnR5KGUpJiZiLmhhc093blByb3BlcnR5KGUpJiYoXCJvYmplY3RcIj09dHlwZW9mIGFbZV0/b2JqZWN0RXF1YWxzKGFbZV0sYltlXSk6YVtlXT09PWJbZV0pfXZhciBmO2lmKGMmJmMuY29uc3RydWN0b3I9PT1BcnJheSYmIWQpe2ZvcihmPTA7ZjxjLmxlbmd0aDtmKyspaWYoIWUoY1tmXSkpcmV0dXJuITE7cmV0dXJuITB9Zm9yKGYgaW4gYSlpZihhLmhhc093blByb3BlcnR5KGYpJiYhZShmKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiB4KGEsYil7dmFyIGM9ITE7cmV0dXJuIGQoYSxmdW5jdGlvbihhKXthPT09YiYmKGM9ITApfSksY31mdW5jdGlvbiB5KGEpe3ZhciBiPVtdO3JldHVybiBkKGEsZnVuY3Rpb24oYSxjKXtiW2NdPWF9KSxifWZ1bmN0aW9uIHooYSxiLGMpe2EuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKTphLmF0dGFjaEV2ZW50P2EuYXR0YWNoRXZlbnQoXCJvblwiK2IsYyk6YVtcIm9uXCIrYl09Y31mdW5jdGlvbiBBKCl7dmFyIGE9Qy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsYj1cIkNTUzFDb21wYXRcIj09PUMuY29tcGF0TW9kZSYmYXx8Qy5ib2R5JiZDLmJvZHkuY2xpZW50V2lkdGh8fGE7cmV0dXJuIEMuYm9keXx8MCE9PWJ8fChiPUMuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoKSxifXZhciBCPVwiVXRpbHNcIixDPWMuZG9jdW1lbnQ7cmV0dXJuIGFbQl09e2VhY2g6ZCxlYWNoS2V5OmUsaXNTdHJpbmc6Zyxpc09iamVjdDpmLGlzRnVuYzpoLGlzQm9vbGVhbjprLGlzTnVtYmVyOmksaXNBcnJheTpqLGNvcHlPYmplY3Q6bSxyZXNvbHZlQ29udGFpbmVyOnAsZ2VuZXJhdGVTY3JpcHRIVE1MOnEsc3RyaW5nVG9PYmplY3Q6bCxjcmVhdGVDbG9zdXJlOnIsY3JlYXRlQWRDb250YWluZXI6byxybmQ6cyxvYmplY3RzRXF1YWxzOnQsYnVpbGRPYmplY3RzUHJvcGVydGllczp2LGNsb25lQXJyYXk6eSxhZGRFdmVudExpc3RlbmVyOnosZ2V0Vmlld3BvcnRXaWR0aDpBfSxhW0JdfWZ1bmN0aW9uIGMoYSxiLGMpe2Z1bmN0aW9uIGQoKXtwJiYoY2xlYXJUaW1lb3V0KHEpLHE9c2V0VGltZW91dChlLHApKX1mdW5jdGlvbiBlKCl7bz1zLmdldFZpZXdwb3J0V2lkdGgoKSxzLmVhY2hLZXkodCxmdW5jdGlvbihiLGMpe2koYykmJmEuQmFubmVySW5qZWN0b3IuZG9Bc3luYyhjKX0pLGYoKX1mdW5jdGlvbiBmKCl7cy5lYWNoS2V5KHUsZnVuY3Rpb24oYSxiKXtnKGIpfSl9ZnVuY3Rpb24gZyhiKXtpZihjbGVhclRpbWVvdXQoYi5yZWxvYWRUaW1lb3V0KSxiLnJ1bm5pbmcpYi5yZWxvYWRUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtnKGIpfSxwKTtlbHNle3ZhciBjPVtdLGQ9Yi5nZXRSZXNwb25zaXZlUmVxdWVzdHMoKTtzLmVhY2goZCxmdW5jdGlvbihhKXtpKGEpJiZjLnB1c2goYS5pZCl9KSxjLmxlbmd0aD4wJiZhLkFkUXVldWUucmVsb2FkUXVldWUoYixjKX19ZnVuY3Rpb24gaChhKXthLmhhc1Jlc3BvbnNpdmVDb25maWcoKSYmKHA9YS5jb25maWcucmVzcG9uc2l2ZUNoZWNrVGltZW91dCx0W2EuaWRdPWEsaShhKSxkKCkpfWZ1bmN0aW9uIGkoYSl7dmFyIGIsYyxkLGU9YS5jb25maWcucmVzcG9uc2l2ZS5ib3VuZHM7Zm9yKGI9MDtiPGUubGVuZ3RoO2IrKylpZihjPWVbYl0saihjKSl7YiE9PWEuY3VycmVudEJvdW5kSW5kZXgmJihkPSEwLGEuY3VycmVudEJvdW5kSW5kZXg9YixhLnJlc3BvbnNpdmVJZD1jLmlkLGRlbGV0ZSBhLmNvbmZpZy5hZGNhbGxVcmwpO2JyZWFrfXJldHVybiBkfHxkZWxldGUgYS5yZXNwb25zaXZlSWQsZH1mdW5jdGlvbiBqKGEpe3JldHVybiBvPj1hLm1pbiYmbzw9YS5tYXh9ZnVuY3Rpb24gayhhKXt2YXIgYj0hMSxjPVtdO3MuZWFjaChhLnN0b3JhZ2UsZnVuY3Rpb24oYSxkKXthLmhhc1Jlc3BvbnNpdmVDb25maWcoKSYmKHA9YS5jb25maWcucmVzcG9uc2l2ZUNoZWNrVGltZW91dCxiPSEwLGMucHVzaChkKSxpKGEpKX0pLGImJihhLnJlc3BvbnNpdmVJbmRleGVzPWMsdVthLmlkXT1hKX1mdW5jdGlvbiBsKCl7cmV0dXJuIHR9ZnVuY3Rpb24gbSgpe3JldHVybiB1fWZ1bmN0aW9uIG4oYSl7dmFyIGI9e3BhcmFtczp7fX07cmV0dXJuIHMuY29weU9iamVjdChiLGEuY29uZmlnLFtcInBhcmFtc1wiLFwicGxhY2VtZW50XCIsXCJhbGlhc1wiXSwhMCkscy5jb3B5T2JqZWN0KGIucGFyYW1zLGEuY29uZmlnLnBhcmFtcyxbXCJhbGlhc1wiXSwhMCkscy5pc051bWJlcihhLnJlc3BvbnNpdmVJZCk/Yi5wbGFjZW1lbnQ9YS5yZXNwb25zaXZlSWQ6cy5pc1N0cmluZyhhLnJlc3BvbnNpdmVJZCkmJihiLnBhcmFtcy5hbGlhcz1hLnJlc3BvbnNpdmVJZCksYn12YXIgbyxwLHEscj1cIlJlc3BvbnNpdmVBZE1hbmFnZXJcIixzPWEuVXRpbHMsdD17fSx1PXt9O289YS5VdGlscy5nZXRWaWV3cG9ydFdpZHRoKCksYS5VdGlscy5hZGRFdmVudExpc3RlbmVyKGMsXCJyZXNpemVcIixkKSxhW3JdPXtyZWdpc3RlcjpoLHJlZ2lzdGVyUXVldWU6ayxjdXJyZW50Vmlld3BvcnRXaWR0aDpvLGNoZWNrVGltZW91dDpxLGdldFJlc3BvbnNpdmVBZHNSZWdpc3RyeTpsLGdldFJlc3BvbnNpdmVRdWV1ZXNSZWdpc3RyeTptLG1ha2VSZXNwb25zaXZlQ29uZmlnQ2xvbmU6bn19ZnVuY3Rpb24gZChhLGIsYyl7ZnVuY3Rpb24gZChjLGQpe2lmKGEuVXRpbHMucmVzb2x2ZUNvbnRhaW5lcihjLmNvbmZpZyksYy5zaG93bj0hMCxjLmNvbmZpZy5maWYudXNlZmlmKWUoXCJpbmplY3RCYW5uZXJBc3luY01vZGVcIixcIkZpZlwiLGMpLGEuRmlmUmVuZGVyZXIuc2V0dXBGaWYoYyk7ZWxzZXtlKFwiaW5qZWN0QmFubmVyQXN5bmNNb2RlXCIsXCJwb3N0c2NyaWJlXCIsYyk7dmFyIGY9YS5SZXNvdXJjZUxvYWRlci5idWlsZFVybChjLmNvbmZpZyxcInBvc3RzY3JpYmUuanNcIiksZz1kLmJhbm5lckNvZGV8fHguZ2VuZXJhdGVTY3JpcHRIVE1MKGMpO2EuUmVzb3VyY2VMb2FkZXIubG9hZFNjcmlwdChmLFwicG9zdHNjcmliZVwiLCEwLGZ1bmN0aW9uKGEpe2lmKCFhKXRocm93IG5ldyBFcnJvcihcIkJhbm5lckluamVjdG9yIyBpbmplY3RCYW5uZXJBc3luY01vZGUuICBQb3N0c2NyaWJlIGxpYiBmYWlsZWQgdG8gbG9hZFwiKTtjLmxvZ2dlci5sb2coaixcImluamVjdEJhbm5lckFzeW5jTW9kZVwiLFwiUG9zdHNjcmliZSBsb2FkZWQuIFBlcmZvcm1pbmcgYWQgaW5qZWN0aW9uIGZvciByZXF1ZXN0IGlkIFwiKyhjLmlkfHxcIjw/PlwiKSksYi5wb3N0c2NyaWJlKGMuY29uZmlnLmFkQ29udGFpbmVyLGcsYy5jb25maWcuY29tcGxldGUpfSxjLmxvZ2dlcil9fWZ1bmN0aW9uIGUoYSxiLGMpe3ZhciBkPWMuY29uZmlnO2MubG9nZ2VyLmxvZyhqLGEsXCJJbmplY3QgYmFubmVyIGluIGFzeW5jIG1vZGUgdXNpbmcgXCIrYitcIiBmb3IgcmVxdWVzdCBpZCBcIitjLmlkKyhkLmFkY2FsbFVybD9cIiB1c2luZyBVUkwgXCIrZC5hZGNhbGxVcmw6XCJcIikpfWZ1bmN0aW9uIGYoYil7dmFyIGM9YS5EZXRlY3Rpb25zO2MuZGV0ZWN0U2NyZWVuU2l6ZShiKSxjLmRldGVjdFVUQ09mZnNldChiKSxjLmRldGVjdEZsYXNoVmVyc2lvbihiKSxjLmRldGVjdFJpY2hNZWRpYVN1cHBvcnQoYil9ZnVuY3Rpb24gZyhhKXtpKGEpLGQoYSx7fSl9ZnVuY3Rpb24gaChiKXtiLnNob3duPSEwLGkoYiksYi5sb2dnZXIubG9nKGosXCJkb1N5bmNcIixcIlBlcmZvcm1pbmcgc3luYyBhZCBjYWxsIHVzaW5nIGRvY3VtZW50LndyaXRlXCIrKGIuY29uZmlnLnBsYWNlbWVudD9cIiBmb3IgcGxhY2VtZW50IFwiK2IuY29uZmlnLnBsYWNlbWVudDpcIlwiKStcIiB1c2luZyBVUkwgXCIrYi5jb25maWcuYWRjYWxsVXJsKSxjLmRvY3VtZW50LndyaXRlKGEuVXRpbHMuZ2VuZXJhdGVTY3JpcHRIVE1MKGIpKX1mdW5jdGlvbiBpKGIpe3ZhciBjPWIuY29uZmlnO2IucmVzcG9uc2l2ZUlkJiYoYz1hLlJlc3BvbnNpdmVBZE1hbmFnZXIubWFrZVJlc3BvbnNpdmVDb25maWdDbG9uZShiKSksdy5BZGNhbGxCdWlsZGVyLmJ1aWxkVXJsKGMpLGIuY29uZmlnLmFkY2FsbFVybD1jLmFkY2FsbFVybH12YXIgaj1cIkJhbm5lckluamVjdG9yXCI7YVtqXT17aW5qZWN0QmFubmVyQXN5bmNNb2RlOmQscGVyZm9ybVN5bmNEZXRlY3Rpb25zOmYsZG9Bc3luYzpnLGRvU3luYzpofX1mdW5jdGlvbiBlKGEsYixjKXtmdW5jdGlvbiBkKGEsYyxkLGcpe2IucmVzb3VyY2VSZWdpc3RyeT1iLnJlc291cmNlUmVnaXN0cnl8fHt9O3ZhciBoPWIucmVzb3VyY2VSZWdpc3RyeTtoW2FdJiZoW2FdLmxvYWRlZCYmKCFkfHxkJiZwKT9jKGhbYV0uc3RhdHVzKTooaFthXXx8KGhbYV09e3F1ZXVlOltdLG5lZWRQYWdlRE9NOmR9LGcoZShhKSxmKGEpKSksaFthXS5xdWV1ZS5wdXNoKGMpKX1mdW5jdGlvbiBlKGEpe3JldHVybiBmdW5jdGlvbigpe2coYSwhMCl9fWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7ZyhhLCExKX19ZnVuY3Rpb24gZyhhLGMpe3ZhciBkPWIucmVzb3VyY2VSZWdpc3RyeTtkW2FdLmxvYWRlZD0hMCxkW2FdLnN0YXR1cz1jLGgoZFthXSl9ZnVuY3Rpb24gaChhKXtpZigoIWEubmVlZFBhZ2VET018fHApJiZhLmxvYWRlZCl7Zm9yKHZhciBiPWEucXVldWUsYz0wO2M8Yi5sZW5ndGg7YysrKWJbY10oYS5zdGF0dXMpO2EucXVldWU9W119fWZ1bmN0aW9uIGkoKXtpZighbil7cD0hMCxuPSEwO3ZhciBhPWIucmVzb3VyY2VSZWdpc3RyeTtmb3IodmFyIGMgaW4gYSloKGFbY10pfX1mdW5jdGlvbiBqKCl7aWYoXCJjb21wbGV0ZVwiPT09cS5yZWFkeVN0YXRlKXJldHVybiBzZXRUaW1lb3V0KGksMSk7aWYocS5hZGRFdmVudExpc3RlbmVyKXEuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixpLCExKSxjLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsaSwhMSk7ZWxzZSBpZihxLmF0dGFjaEV2ZW50KXtxLmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsaSksYy5hdHRhY2hFdmVudChcIm9ubG9hZFwiLGkpO3ZhciBhPSExO3RyeXthPW51bGw9PT1jLmZyYW1lRWxlbWVudH1jYXRjaChiKXt9cS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwmJmEmJmsoKX19ZnVuY3Rpb24gaygpe2lmKCFuKXt0cnl7cS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKGEpe3JldHVybiB2b2lkIHNldFRpbWVvdXQoaywxKX1pKCl9fWZ1bmN0aW9uIGwoYSxiKXt2YXIgZD1cImxvYWRpbmdcIj09PXEucmVhZHlTdGF0ZTtpZighZCYmXCJpbnRlcmFjdGl2ZVwiPT09cS5yZWFkeVN0YXRlJiZjPT1jLnRvcCYmYil0cnl7cS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwmJnEuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChlKXtkPSEwfWVsc2UhZCYmXCJpbnRlcmFjdGl2ZVwiPT09cS5yZWFkeVN0YXRlJiZjIT1jLnRvcCYmYiYmKHEuYWRkRXZlbnRMaXN0ZW5lcj9wfHwoZD0hMCk6YSYmKGQ9ITApKTtyZXR1cm4gZH1mdW5jdGlvbiBtKCl7cmV0dXJuIHB9dmFyIG4sbz1cIlJlc291cmNlTWFuYWdlclwiLHA9ITEscT1jLmRvY3VtZW50O2ooKSxhW29dPXtzY2hlZHVsZTpkLGlzU3luYzpsLGlzRE9NUmVhZHk6bX19ZnVuY3Rpb24gZihhLGIsYyl7ZnVuY3Rpb24gZChiLGMsZCxlLGgpe2EuUmVzb3VyY2VNYW5hZ2VyLnNjaGVkdWxlKGMsYS5VdGlscy5jcmVhdGVDbG9zdXJlKGUsaCksZCxmdW5jdGlvbihjLGQpe2coKSxmKGIsaSx7b25TdWNjZXNzOmEuVXRpbHMuY3JlYXRlQ2xvc3VyZShjLGgpLG9uRXJyb3I6YS5VdGlscy5jcmVhdGVDbG9zdXJlKGQsaCl9LCExKX0pfWZ1bmN0aW9uIGUoYixjLGQpe2coKSxmKGIsaSx7b25TdWNjZXNzOmEuVXRpbHMuY3JlYXRlQ2xvc3VyZShmdW5jdGlvbigpe2MoITApfSxkKSxvbkVycm9yOmEuVXRpbHMuY3JlYXRlQ2xvc3VyZShmdW5jdGlvbigpe2MoITEpfSxkKX0sITApfWZ1bmN0aW9uIGYoYixkLGUsZil7dmFyIGc9Yy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGg9YS5FbnZpcm9ubWVudC5nZXRJRVZlcnNpb24oKTtnLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHQvamF2YXNjcmlwdFwiKSxnLnNldEF0dHJpYnV0ZShcInNyY1wiLGIpLGgmJig5Pmh8fGMuZG9jdW1lbnQuZG9jdW1lbnRNb2RlJiZjLmRvY3VtZW50LmRvY3VtZW50TW9kZTw5KT9nLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpey9sb2FkZWR8Y29tcGxldGUvLnRlc3QoZy5yZWFkeVN0YXRlKSYmKGcub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsZS5vblN1Y2Nlc3MmJmUub25TdWNjZXNzKCkpfTpoPj0xMCYmIWY/KGcub25lcnJvcj1mdW5jdGlvbigpe3NldFRpbWVvdXQoZS5vbkVycm9yLDApfSxnLm9ubG9hZD1mdW5jdGlvbigpe3NldFRpbWVvdXQoZS5vblN1Y2Nlc3MsMCl9KTooZy5vbmVycm9yPWUub25FcnJvcixnLm9ubG9hZD1lLm9uU3VjY2VzcyksZC5hcHBlbmRDaGlsZChnKX1mdW5jdGlvbiBnKCl7aWYoIWkpe3ZhciBhPWMuZG9jdW1lbnQuaGVhZDtpZighYSl7dmFyIGI9Yy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIik7YT1iJiZiLmxlbmd0aD4wP2JbMF06Yy5kb2N1bWVudC5ib2R5fHxjLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXX1pPWF9fWZ1bmN0aW9uIGgoYSxiKXtyZXR1cm5cImh0dHBzXCI9PT1hLnByb3RvY29sP2srYjpqK2J9dmFyIGksaj1cImh0dHA6Ly9ha2EtY2RuLW5zLmFkdGVjaHVzLmNvbS9kdC9jb21tb24vXCIsaz1cImh0dHBzOi8vYWthLWNkbi5hZHRlY2h1cy5jb20vZHQvY29tbW9uL1wiLGw9XCJSZXNvdXJjZUxvYWRlclwiO2FbbF09e2xvYWRTY3JpcHQ6ZCxsb2FkVHJhbnNpZW50U2NyaXB0OmUsYnVpbGRVcmw6aH19ZnVuY3Rpb24gZyhhKXtmdW5jdGlvbiBiKGIpe2lmKCFhLlV0aWxzLmlzU3RyaW5nKGIuYWRjYWxsVXJsKSl7dmFyIGY9Yi5wcm90b2NvbCtcIjovL1wiK2Iuc2VydmVyK1wiL1wiK2QrZStiLm5ldHdvcmsrZSsoYi5wbGFjZW1lbnQ/Yi5wbGFjZW1lbnQ6MCkrZStiLnBhZ2VpZC50b1N0cmluZygpK2UrYi5zaXplaWQudG9TdHJpbmcoKStlK2Iubm9ybWFsdGFyZ2V0O2Y9YyhmLGIsXCI7XCIpLGIuYWRjYWxsVXJsPWZ9fWZ1bmN0aW9uIGMoYixjLGQsZSxnLGgpe3ZhciBpPSEwLGo9XCJcIjtyZXR1cm4gaD1ofHx7fSxhLlV0aWxzLmlzT2JqZWN0KGMucGFyYW1zKSYmKGk9dm9pZCAwPT09Yy5wYXJhbXMubWlzYyxhLlV0aWxzLmVhY2hLZXkoYy5wYXJhbXMsZnVuY3Rpb24oYSxjKXtnJiZnW2FdfHwoaFthXSYmKGM9aFthXSxkZWxldGUgaFthXSksZlthXT9qKz1kK2ErXCI9XCIrYzpiKz1kK2ErXCI9XCIrYyl9KSxhLlV0aWxzLmVhY2hLZXkoaCxmdW5jdGlvbihhLGMpe2IrPWQrYStcIj1cIitjfSkpLGkmJiFlJiYoYis9ZCtcIm1pc2M9XCIrKG5ldyBEYXRlKS5nZXRUaW1lKCkpLGIrPWp9dmFyIGQ9XCJhZGR5bi8zLjBcIixlPVwiL1wiLGY9e3JkY2xpY2s6ITAscmR2aWV3OiEwLGxpbms6ITB9LGc9XCJBZGNhbGxCdWlsZGVyXCI7YVtnXT17YnVpbGRVcmw6YixhZGRVcmxQYXJhbXM6Y319ZnVuY3Rpb24gaChhLGIsYyl7ZnVuY3Rpb24gZChhLGMpe2Z1bmN0aW9uIGQoKXtHfHwody5sb2coaCxcImFkY2FsbENvbXBsZXRlXCIsXCIjXCIrYS5pZCksYy5xdWV1ZUlkJiYhYy5wYXJ0T2ZNdWx0aUFkJiZiLnF1ZXVlQ2FsbGJhY2soYy5xdWV1ZUlkKSxHPSEwKX1mdW5jdGlvbiBnKGEpe2YoKT9hLm9ubG9hZD1kOmEub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7L2xvYWRlZHxjb21wbGV0ZS8udGVzdChhLnJlYWR5U3RhdGUpJiYoYS5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxkKCkpfX1mdW5jdGlvbiBpKCl7dy5sb2coaCxcImRvbmVcIixcIiNcIithLmlkKSxkKCkseC5jb21wbGV0ZSYmeC5jb21wbGV0ZSgpfWZ1bmN0aW9uIG0oYixjKXt3LmxvZyhoLFwicmVzaXplXCIsXCIjXCIrYS5pZCtcIiByZXNpemluZyB0byBcIitiK1wieFwiK2MpLGEud2lkdGg9YixhLmhlaWdodD1jfWZ1bmN0aW9uIG4oKXtpZihGKXtvKCkseC5maWYucHJlUmVzaXplKGMuaWQpO3ZhciBhPXAoKTttKGEud2lkdGgsYS5oZWlnaHQpfWVsc2UgbShELEUpO2koKX1mdW5jdGlvbiBvKCl7dmFyIGE7aWYoIWMuY29uZmlnLmZpZi5jb250ZW50U3R5bGUpe2lmKGouaXNPbGRJRU1vZGUoKSl7dmFyIGI9SS5uZXh0U2libGluZztiJiZcImFcIj09PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmKGE9Yil9ZWxzZSAyPT09SS5jaGlsZHJlbi5sZW5ndGgmJlwiYVwiPT09SS5jaGlsZHJlblsxXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiYoYT1JLmNoaWxkcmVuWzFdKTthJiYxPT09YS5jaGlsZHJlbi5sZW5ndGgmJlwiaW1nXCI9PT1hLmNoaWxkcmVuWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJihhLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKX19ZnVuY3Rpb24gcCgpe3ZhciBhPUkuc2Nyb2xsV2lkdGgsYj1JLnNjcm9sbEhlaWdodDtyZXR1cm4gMCE9PWEmJjAhPT1ifHwxIT09SS5jaGlsZHJlbi5sZW5ndGh8fCFqLmlzT2xkSUVNb2RlKCl8fFwic2NyaXB0XCI9PT1JLmNoaWxkcmVuWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJihhPXIoXCJXaWR0aFwiKSxiPXIoXCJIZWlnaHRcIikpLHdpbmRvdy5vcGVyYSYmKDI+YXx8Mj5iKSYmKGE9cShcIldpZHRoXCIpLGI9cShcIkhlaWdodFwiKSkse3dpZHRoOmEsaGVpZ2h0OmJ9fWZ1bmN0aW9uIHEoYSl7dmFyIGI9TWF0aC5tYXgoQy5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXSxDLmJvZHlbXCJzY3JvbGxcIithXSxDLmRvY3VtZW50RWxlbWVudFtcInNjcm9sbFwiK2FdLEMuYm9keVtcIm9mZnNldFwiK2FdLEMuZG9jdW1lbnRFbGVtZW50W1wib2Zmc2V0XCIrYV0pO3JldHVybiBifWZ1bmN0aW9uIHIoYSl7dmFyIGI9TWF0aC5tYXgoQy5ib2R5W1wic2Nyb2xsXCIrYV0sQy5ib2R5W1wib2Zmc2V0XCIrYV0pO3JldHVybiBifWZ1bmN0aW9uIHMoKXt2YXIgYT0wLGI9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtpZig1MD5hJiZcImNvbXBsZXRlXCIhPUMucmVhZHlTdGF0ZSl7dmFyIGM9cCgpO2Mud2lkdGg+MSYmYy5oZWlnaHQ+MSYmKGNsZWFySW50ZXJ2YWwoYiksbShjLndpZHRoLGMuaGVpZ2h0KSksYSsrfWVsc2UgY2xlYXJJbnRlcnZhbChiKX0sMTAwKX1mdW5jdGlvbiB0KCl7RiYmKGouaXNDaHJvbWUoKXx8ai5pc1NhZmFyaSgpKT8oSD0wLHUoKSk6digpfWZ1bmN0aW9uIHUoKXt2YXIgYj1wKCk7KGIud2lkdGg8PTF8fGIuaGVpZ2h0PD0xKSYmaz5IPyhIKz1sLHcubG9nKFwiI1wiK2EuaWQrXCIgcmVjaGVjayBjb250ZW50IHNpemVcIiksc2V0VGltZW91dCh1LGwpKTp2KCl9ZnVuY3Rpb24gdigpe3cubG9nKFwiI1wiK2EuaWQrXCIgbG9hZGVkXCIpLG4oKX12YXIgdz1jLmxvZ2dlcix4PWMuY29uZmlnLHk9XCI8c2NyaXB0PnZhciBpbkZJRj1pbkRhcElGPXRydWU7PC9zY3JpcHQ+XCI7eC5maWYuZGlzYWJsZUZyaWVuZGx5RmxhZyYmKHk9XCJcIik7dmFyIHo9JzxzY3JpcHQgaWQ9XCJhZHNjcmlwdFwiIHNyYz1cIicreC5hZGNhbGxVcmwrJ1wiPjwvc2NyaXB0Pic7Yy5hZExvYWRTY3JpcHQmJih6PWMuYWRMb2FkU2NyaXB0KTt2YXIgQT1cIjxzdHlsZT5ib2R5IHttYXJnaW46MDtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuO30gaHRtbCB7bWFyZ2luOjA7cGFkZGluZzowO30gXCI7QSs9Yy5jb25maWcuZmlmLmNvbnRlbnRTdHlsZSxBKz1cIjwvc3R5bGU+XCI7dmFyIEI9XCI8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD5cIitBK1wiPC9oZWFkPjxib2R5PlwiK3krJzxkaXYgaWQ9XCJhZmRcIj4nK3orXCI8L2Rpdj48L2JvZHk+PC9odG1sPlwiLEM9YS5jb250ZW50RG9jdW1lbnR8fGEuY29udGVudFdpbmRvdy5kb2N1bWVudCxEPXguZmlmLndpZHRoLEU9eC5maWYuaGVpZ2h0LEY9MT49RHx8MT49RSxHPSExLEg9MDtDLm9wZW4oXCJ0ZXh0L2h0bWxcIixcInJlcGxhY2VcIiksQy53cml0ZShCKSxnKEMuZ2V0RWxlbWVudEJ5SWQoXCJhZHNjcmlwdFwiKSksZSgpP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtDLmNsb3NlKCl9LDUwMCk6Qy5jbG9zZSgpO3ZhciBJPUMuZ2V0RWxlbWVudEJ5SWQoXCJhZmRcIik7XCJjb21wbGV0ZVwiPT1DLnJlYWR5U3RhdGU/Rj90KCk6KG0oRCxFKSxpKCkpOihDLmFkZEV2ZW50TGlzdGVuZXI/YS5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdCwhMSk6Qy5ib2R5Lm9ubG9hZD10LEYmJiF4LmZpZi5kaXNhYmxlTG9hZGluZ1Jlc2l6ZSYmcygpKX1mdW5jdGlvbiBlKCl7cmV0dXJuISFjLm9wZXJhfHxqLmlzT2xkSUVNb2RlKCl9ZnVuY3Rpb24gZigpe3ZhciBhPWouZ2V0SUVWZXJzaW9uKCk7cmV0dXJuIGEmJig5PmF8fGMuZG9jdW1lbnQuZG9jdW1lbnRNb2RlJiZjLmRvY3VtZW50LmRvY3VtZW50TW9kZTw5KT8hMTohMH1mdW5jdGlvbiBnKGEpe3ZhciBiPWMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSxlPWEuY29uZmlnLGY9ZS5wbGFjZW1lbnQrXCJfZnJhbWVcIjtmPWUuYWxpYXM/ZS5hbGlhcytcIl9mcmFtZVwiOmUucGxhY2VtZW50P2UucGxhY2VtZW50K1wiX2ZyYW1lXCI6ZS5hZENvbnRhaW5lcklkP2UuYWRDb250YWluZXJJZCtcIl9mcmFtZVwiOlwicm5kX2ZyYW1lXCIraS5ybmQoMWU2KSxiLnNlYW1sZXNzPVwic2VhbWxlc3NcIixiLmlkPWYsYi5uYW1lPWYsYi5zdHlsZS5ib3JkZXI9XCIwcHhcIixiLnNjcm9sbGluZz1cIm5vXCIsYi5mcmFtZUJvcmRlcj0wLGIud2lkdGg9MSxiLmhlaWdodD0xLGIuYWxsb3d0cmFuc3BhcmVuY3k9ITAsYi5zZXRBdHRyaWJ1dGUoXCJhbGxvd0Z1bGxTY3JlZW5cIixcInRydWVcIiksYi5zZXRBdHRyaWJ1dGUoXCJtb3phbGxvd0Z1bGxTY3JlZW5cIixcInRydWVcIiksYi5zZXRBdHRyaWJ1dGUoXCJ3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cIixcInRydWVcIiksYi5zcmM9XCJhYm91dDpibGFua1wiLGUuYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYiksYS5sb2dnZXIubG9nKGgsXCJzZXR1cEZpZlwiLFwiI1wiK2YrXCIgY3JlYXRlZFwiKSxkKGIsYSl9dmFyIGg9XCJGaWZSZW5kZXJlclwiLGk9YS5VdGlscyxqPWEuRW52aXJvbm1lbnQsaz01MDAsbD01MDthW2hdPXtzZXR1cEZpZjpnfX1mdW5jdGlvbiBpKGEsYixjKXtmdW5jdGlvbiBkKGEsYixjLGQpe2NbYV09ISFkW2ErYl19ZnVuY3Rpb24gZShhLGIsYyxkKXtkW2ErYl0mJihjW2FdPWRbYStiXSl9ZnVuY3Rpb24gZihhLGIpe3ZhciBmO2lmKGMuQWR0ZWNoIT09bSl7dmFyIGc9Yy5BZHRlY2g7Zj17bmV0d29yazpnW1wibmV0d29ya1N1Ym5ldHdvcmtcIithXSxwcm90b2NvbDpnW1wicHJvdG9jb2xcIithXSxzZXJ2ZXI6Z1tcImFkVVJMSG9zdE5hbWVcIithXSxhbGlhczpnW1wicGxhY2VtZW50QWxpYXNcIithXSxrdjpnW1wiS1ZcIithXSxmaWY6Z1tcImZpZlwiK2FdLHBhcmFtczp7fX0sZChcInBlcmZvcm1TY3JlZW5EZXRlY3Rpb25cIixhLGYsZyksZChcInBlcmZvcm1UaW1lem9uZURldGVjdGlvblwiLGEsZixnKSxkKFwicGVyZm9ybUZsYXNoRGV0ZWN0aW9uXCIsYSxmLGcpLGQoXCJwZXJmb3JtUmljaE1lZGlhRGV0ZWN0aW9uXCIsYSxmLGcpLGQoXCJwZXJmb3JtR2VvRGV0ZWN0aW9uXCIsYSxmLGcpLGQoXCJzeW5jSWZQb3NzaWJsZVwiLGEsZixnKSxkKFwibGVnYWN5REFDTG9hZFR5cGVcIixhLGYsZyksZShcImxvY1wiLGEsZi5wYXJhbXMsZyksZShcImdycFwiLGEsZi5wYXJhbXMsZyksYi5sb2dPYmplY3QobixcIkFkdGVjaENvbmZpZ1wiLGYpfXJldHVybiBmfWZ1bmN0aW9uIGcoYSxiLGMsZCxlKXtpZihvKGEpKXt2YXIgZj1jJiZhW2NdP2M6YjtkLmxvZyhuLFwiZ2V0UGxhY2VtZW50Q29uZmlnXCIsXCJQbGFjZW1lbnQgbG9vayB1cCBmb3IgbGV2ZWwgXCIrZStcIiBkb25lIHVzaW5nIFwiKyhmPT09Yz9cImFsaWFzOiBcIitjOlwicGxhY2VtZW50IGlkOiBcIitiKSk7dmFyIGc9YVtmXTtyZXR1cm4gZyYmZC5sb2dPYmplY3QobixcImdldFBsYWNlbWVudENvbmZpZ1wiLGcpLGd9cmV0dXJuIG19ZnVuY3Rpb24gaChhKXtyZXR1cm4gbyhhKT9hLmltcG9ydGFudDptfWZ1bmN0aW9uIGkoYixjLGQsZSl7dmFyIGY9ZXx8e307YS5VdGlscy5lYWNoS2V5KGMsZnVuY3Rpb24oYSxlKXtcImltcG9ydGFudFwiPT09YXx8ZlthXXx8KGR8fFwicGFyYW1zXCIhPT1hfHxlLmFsaWFzPT09bXx8Yy5hbGlhcyE9PW18fChiLmFsaWFzPWUuYWxpYXMpLG8oYlthXSkmJm8oZSkmJiFkP2koYlthXSxlLCEwKTpiW2FdPT09bSYmbyhlKSYmIWQ/KGJbYV09e30saShiW2FdLGUsITApKTpudWxsPT09ZT9kZWxldGUgYlthXTplIT09bSYmKGJbYV09ZSkpfSl9ZnVuY3Rpb24gaihiKXt2YXIgYz1iLmxvZ2dlcixkPWIuY29uZmlnLGU9ZC5wbGFjZW1lbnQsZj1kLmFsaWFzO2lmKCFhLlV0aWxzLmlzTnVtYmVyKGUpJiYhYS5VdGlscy5pc1N0cmluZyhmKSl0aHJvdyBuK1wiOiBJbnZhbGlkIGFkIGlkZW50aWZpZXJcIjtjLmxvZyhuLFwiYnVpbGRDb25maWd1cmF0aW9uXCIsXCJSZXNvbHZpbmcgY29uZmlndXJhdGlvbiBmb3IgYWxpYXM6IFwiK2YrXCIgYW5kIHBsYWNlbWVudDogXCIrZSk7dmFyIGcsaD17fSxqPWsoZCxjKSxsPVwiXCI7Zm9yKGc9MDtnPGoubGVuZ3RoO2crKylqW2ddJiZvKGpbZ10uY29uZmlnKSYmKGwrPVwiIFwiK2csaShoLGpbZ10uY29uZmlnLCExLGpbZ10uaWdub3JlKSk7cmV0dXJuIGMubG9nKG4sXCJidWlsZENvbmZpZ3VyYXRpb25cIixcIkZvdW5kIGNvbmZpZ3VyYXRpb24gYXQgcHJpb3JpdGllc1wiK2wpLGh9ZnVuY3Rpb24gayhhLGMpe3ZhciBkPVtdLGU9Yi5jb25maWcsaT1hLnBsYWNlbWVudCxqPWEuYWxpYXMsaz17ZW5hYmxlTXVsdGlBZDohMCxyZXNwb25zaXZlQ2hlY2tUaW1lb3V0OiEwfTtyZXR1cm4gZFsxMF09e2NvbmZpZzplLm5ldHdvcmt9LGRbMjBdPXtjb25maWc6ZS53ZWJzaXRlfSxkWzMwXT17Y29uZmlnOmUucGFnZX0sZFs0MF09e2NvbmZpZzpnKGUucGxhY2VtZW50cyxpLGosYyw0MCksaWdub3JlOmt9LGRbNTBdPXtjb25maWc6ZS5uZXR3b3JrZHlufSxkWzYwXT17Y29uZmlnOmUud2Vic2l0ZWR5bn0sZFs3MF09e2NvbmZpZzplLnBhZ2VkeW59LGRbODBdPXtjb25maWc6ZihhLnBsYWNlbWVudCxjKX0sZFs5MF09e2NvbmZpZzpnKGUucGxhY2VtZW50c2R5bixpLGosYyw5MCksaWdub3JlOmt9LGRbMTEwXT17Y29uZmlnOmgoZS5uZXR3b3JrKX0sZFsxMjBdPXtjb25maWc6aChlLndlYnNpdGUpfSxkWzEzMF09e2NvbmZpZzpoKGUucGFnZSl9LGRbMTQwXT17Y29uZmlnOmgoZyhlLnBsYWNlbWVudHMsaSxqLGMsMTQwKSksaWdub3JlOmt9LGRbMTUwXT17Y29uZmlnOmgoZS5uZXR3b3JrZHluKX0sZFsxNjBdPXtjb25maWc6aChlLndlYnNpdGVkeW4pfSxkWzE3MF09e2NvbmZpZzpoKGUucGFnZWR5bil9LGRbMTgwXT17Y29uZmlnOmgoZyhlLnBsYWNlbWVudHNkeW4saSxqLGMsMTgwKSksaWdub3JlOmt9LGRbMjAwXT17Y29uZmlnOmEsaWdub3JlOmt9LGR9ZnVuY3Rpb24gbChhKXtyZXR1cm4hIWIuY29uZmlnLnBsYWNlbWVudHMmJiEhYi5jb25maWcucGxhY2VtZW50c1thXXx8ISFiLmNvbmZpZy5wbGFjZW1lbnRzZHluJiYhIWIuY29uZmlnLnBsYWNlbWVudHNkeW5bYV19dmFyIG0sbj1cIkNvbmZpZ1Jlc29sdmVyXCIsbz1hLlV0aWxzLmlzT2JqZWN0O2Fbbl09e2J1aWxkQ29uZmlndXJhdGlvbjpqLGlzUGxhY2VtZW50Q29uZmlnRGVmaW5lZDpsfX1mdW5jdGlvbiBqKGEpe2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm4gbShhKSYmXCJcIiE9PWE/YTpifWZ1bmN0aW9uIGMoYSxiKXtyZXR1cm4gbihhKT9hOmJ9ZnVuY3Rpb24gZChhKXtyZXR1cm4gYT9cImh0dHBzXCI6XCJodHRwXCJ9ZnVuY3Rpb24gZShhLGUpe3ZhciBpLHE9e307aWYoIW4oYS5wbGFjZW1lbnQpJiYhbShhLmFsaWFzKSl0aHJvd1wiY29uZmlnLnBsYWNlbWVudCBtdXN0IGJlIGEgTnVtYmVyIG9yIHRoZSBjb25maWcuYWxpYXMgaGFzIHRvIGJlIGEgc3RyaW5nXCI7cmV0dXJuIGwuZWFjaChbXCJuZXR3b3JrXCIsXCJzZXJ2ZXJcIl0sZnVuY3Rpb24oYil7aWYoIW0oYVtiXSkpdGhyb3cgaitcIiNwcm9jZXNzIGNvbmZpZy5cIitiK1wiIG11c3QgYmUgYSBTdHJpbmdcIn0pLGk9YS5wbGFjZW1lbnQ/YS5wbGFjZW1lbnQ6YS5hbGlhcyxxLnBsYWNlbWVudD1hLnBsYWNlbWVudCxxLmFsaWFzPWEuYWxpYXMscS5uZXR3b3JrPWEubmV0d29yayxxLnNlcnZlcj1hLnNlcnZlcixxLnByb3RvY29sPWIoYS5wcm90b2NvbCxkKGEuc2VjdXJlPT09ITApKSxxLnBhZ2VpZD1jKGEucGFnZWlkLDApLHEuc2l6ZWlkPWMoYS5zaXplaWQsLTEpLHEubm9ybWFsdGFyZ2V0PWIoYS5ub3JtYWx0YXJnZXQsXCJBRFRFQ0hcIikscS5hZENvbnRhaW5lcklkPWIoYS5hZENvbnRhaW5lcklkLGkudG9TdHJpbmcoKSksaChxLGEsXCJlbmFibGVNdWx0aUFkXCIsITEpLGcocSxhLFwicmVzcG9uc2l2ZUNoZWNrVGltZW91dFwiLGspLG8oYS5maWYpPyhxLmZpZj17dXNlZmlmOmEuZmlmLnVzZWZpZiE9PSExLHdpZHRoOmMoYS5maWYud2lkdGgsMCksaGVpZ2h0OmMoYS5maWYuaGVpZ2h0LDApfSxmKHEuZmlmLGEuZmlmLFwiZGlzYWJsZUZyaWVuZGx5RmxhZ1wiKSxmKHEuZmlmLGEuZmlmLFwiZGlzYWJsZUxvYWRpbmdSZXNpemVcIiksZyhxLmZpZixhLmZpZixcInNoYXJlV2l0aEFkZE9uc1wiLCEwKSxxLmZpZi5jb250ZW50U3R5bGU9bC5pc1N0cmluZyhhLmZpZi5jb250ZW50U3R5bGUpP2EuZmlmLmNvbnRlbnRTdHlsZTpcIlwiLHEuZmlmLnByZVJlc2l6ZT1sLmlzRnVuYyhhLmZpZi5wcmVSZXNpemUpP2EuZmlmLnByZVJlc2l6ZTpwKTpxLmZpZj17dXNlZmlmOiExLHdpZHRoOjAsaGVpZ2h0OjAsZGlzYWJsZUZyaWVuZGx5RmxhZzohMSxkaXNhYmxlTG9hZGluZ1Jlc2l6ZTohMX0sbC5pc0Z1bmMoYS5jb21wbGV0ZSkmJihxLmNvbXBsZXRlPWEuY29tcGxldGUpLHEucGFyYW1zPXt9LG8oYS5wYXJhbXMpJiZsLmVhY2hLZXkoYS5wYXJhbXMsZnVuY3Rpb24oYil7bShhLnBhcmFtc1tiXSkmJmEucGFyYW1zW2JdLmxlbmd0aD4wJiYocS5wYXJhbXNbYl09YS5wYXJhbXNbYl0pfSkscS5hbGlhcyYmKHEucGFyYW1zLmFsaWFzPXEuYWxpYXMpLG8oYS5rdikmJmwuZWFjaEtleShhLmt2LGZ1bmN0aW9uKGEsYil7dmFyIGM9W107bC5pc0FycmF5KGIpPyhsLmVhY2goYixmdW5jdGlvbihhKXsobShhKXx8bihhKSkmJmMucHVzaChhLnRvU3RyaW5nKCkpfSkscS5wYXJhbXNbXCJrdlwiK2FdPWMuam9pbihcIjpcIikpOm0oYikmJmIubGVuZ3RoPjA/cS5wYXJhbXNbXCJrdlwiK2FdPWIudG9TdHJpbmcoKTpuKGIpJiYocS5wYXJhbXNbXCJrdlwiK2FdPWIudG9TdHJpbmcoKSl9KSxsLmlzT2JqZWN0KGEucmVzcG9uc2l2ZSk/KHEucmVzcG9uc2l2ZT17dXNlcmVzcG9uc2l2ZTphLnJlc3BvbnNpdmUudXNlcmVzcG9uc2l2ZSE9PSExLGJvdW5kczpbXX0sbC5pc0FycmF5KGEucmVzcG9uc2l2ZS5ib3VuZHMpJiZsLmVhY2goYS5yZXNwb25zaXZlLmJvdW5kcyxmdW5jdGlvbihhKXthLmlkJiZuKGEubWluKSYmbihhLm1heCkmJmEubWluPGEubWF4JiZxLnJlc3BvbnNpdmUuYm91bmRzLnB1c2goYSl9KSwwPT09cS5yZXNwb25zaXZlLmJvdW5kcy5sZW5ndGgmJihxLnJlc3BvbnNpdmUudXNlcmVzcG9uc2l2ZT0hMSkpOnEucmVzcG9uc2l2ZT17dXNlcmVzcG9uc2l2ZTohMSxib3VuZHM6W119LGYocSxhLFwic3luY0lmUG9zc2libGVcIiksZihxLGEsXCJsZWdhY3lEQUNMb2FkVHlwZVwiKSxmKHEsYSxcInBlcmZvcm1HZW9EZXRlY3Rpb25cIiksZihxLGEsXCJwZXJmb3JtU2NyZWVuRGV0ZWN0aW9uXCIpLGYocSxhLFwicGVyZm9ybVRpbWV6b25lRGV0ZWN0aW9uXCIpLGYocSxhLFwicGVyZm9ybUZsYXNoRGV0ZWN0aW9uXCIpLGYocSxhLFwicGVyZm9ybVJpY2hNZWRpYURldGVjdGlvblwiKSxlLmxvZ09iamVjdChqLFwiZmluYWxDb25maWdcIixxKSxxfWZ1bmN0aW9uIGYoYSxiLGMpe2FbY109YltjXT09PSEwfWZ1bmN0aW9uIGcoYSxiLGMsZCl7YVtjXT12b2lkIDAhPT1iW2NdP2JbY106ZH1mdW5jdGlvbiBoKGEsYixjLGQpe2FbY109bC5pc0Jvb2xlYW4oYltjXSk/YltjXTpkfWZ1bmN0aW9uIGkoYSl7cmV0dXJuIGE9YXx8e30sYS5tdWx0aUFkPWEubXVsdGlBZHx8e30sYS5tdWx0aUFkLnNraXBEZWZhdWx0PWEubXVsdGlBZC5za2lwRGVmYXVsdHx8ITEsYS5tdWx0aUFkLmRpc2FibGVBZEluamVjdGlvbj1hLm11bHRpQWQuZGlzYWJsZUFkSW5qZWN0aW9ufHwhMSxnKGEubXVsdGlBZCxhLm11bHRpQWQsXCJhdXRvSW5qZWN0U2hvd25SZXNwb25zaXZlXCIsITApLGF9dmFyIGo9XCJDb25maWdGaW5hbGl6ZXJcIixrPTE1MCxsPWEuVXRpbHMsbT1sLmlzU3RyaW5nLG49bC5pc051bWJlcixvPWwuaXNPYmplY3QscD1mdW5jdGlvbigpe307YVtqXT17cHJvY2VzczplLHByb2Nlc3NRdWV1ZUNvbmZpZzppLGRlZmF1bHRGdW5jOnB9fWZ1bmN0aW9uIGsoYSl7ZnVuY3Rpb24gYihhLGIsZil7dmFyIGc7cmV0dXJuIGI9PT1tJiZmPT09bT9nPWMoYSk6by5pc1N0cmluZyhhKSYmby5pc1N0cmluZyhiKT9nPWQoYSxiLGYpOmUoKSxnfWZ1bmN0aW9uIGMoYSl7dmFyIGI9e2xlZ2FjeUFwaTohMX07aWYoby5pc051bWJlcihhKSliLmNvbmZpZz1mKGEpO2Vsc2UgaWYoby5pc1N0cmluZyhhKSliLmNvbmZpZz1nKGEpO2Vsc2UgaWYoby5pc09iamVjdChhKSl7aWYoYi5jb25maWc9YSxsKGIuY29uZmlnKSwhYi5jb25maWcucGxhY2VtZW50JiYhYi5jb25maWcuYWxpYXMpdGhyb3cgbitcIiNoYW5kbGVOZXdBcGkgbm8gcGxhY2VtZW50IGlkIG9yIGFsaWFzIGZvdW5kXCJ9ZWxzZSBlKCk7cmV0dXJuIGJ9ZnVuY3Rpb24gZChhLGIsYyl7dmFyIGQ9e2xlZ2FjeUFwaTohMH07cmV0dXJuIG8uaXNPYmplY3QoYyk/ZC5jb25maWc9aChhLGIsYyk6Yz09PW0/ZC5jb25maWc9aChhLGIse30pOmUoKSxkfWZ1bmN0aW9uIGUoKXt0aHJvdyBuK1wiI2hhbmRsZVBhcmFtZXRlcnMgSW52YWxpZCBwYXJhbWV0ZXJzIGNvbWJpbmF0aW9uXCJ9ZnVuY3Rpb24gZihhKXtyZXR1cm57cGxhY2VtZW50OmF9fWZ1bmN0aW9uIGcoYSl7aWYoIWEpdGhyb3cgbitcIiNoYW5kbGVBbGlhc1N0cmluZyBlbXB0eSBhbGlhcyBub3QgYWxsb3dlZFwiO3JldHVybnthbGlhczphfX1mdW5jdGlvbiBoKGEsYixjKXt2YXIgZD17fTtyZXR1cm4gaShhLGIsZCksYy5maWY/KGQuZmlmPXt9LGQuZmlmLnVzZWZpZj0hMCxkLmZpZi53aWR0aD1rKGMud2lkdGgsMCksZC5maWYuaGVpZ2h0PWsoYy5oZWlnaHQsMCksZC5maWYucHJlUmVzaXplPW8uaXNGdW5jKGMucHJlUmVzaXplKT9jLnByZVJlc2l6ZTpmdW5jdGlvbigpe30pOmQuZmlmPXt1c2VmaWY6ITEsd2lkdGg6MCxoZWlnaHQ6MH0sZC5jb21wbGV0ZT1qKGMuY29tcGxldGUpLGQuZGVidWdNb2RlPSEhYy5kZWJ1Z01vZGUsZH1mdW5jdGlvbiBpKGEsYixjKXtjLmFkQ29udGFpbmVySWQ9YSxjLmFkY2FsbFVybD1ifWZ1bmN0aW9uIGooYSl7cmV0dXJuIG8uaXNGdW5jKGEpP2E6bX1mdW5jdGlvbiBrKGEsYil7cmV0dXJuIG8uaXNOdW1iZXIoYSk/YTpifWZ1bmN0aW9uIGwoYSl7IWEuYWRDb250YWluZXJJZCYmYS5pbmplY3RFbGVtZW50SWQmJihhLmFkQ29udGFpbmVySWQ9YS5pbmplY3RFbGVtZW50SWQpLCFhLmFsaWFzJiZhLnBhcmFtcyYmYS5wYXJhbXMuYWxpYXMmJihhLmFsaWFzPWEucGFyYW1zLmFsaWFzKX12YXIgbSxuPVwiTG9hZEFkUGFyYW1ldGVyc0hhbmRsZXJcIixvPWEuVXRpbHM7YVtuXT17aGFuZGxlUGFyYW1ldGVyczpifX1mdW5jdGlvbiBsKGEsYixjKXtmdW5jdGlvbiBkKGEpe2EucGVyZm9ybVNjcmVlbkRldGVjdGlvbiYmYy5zY3JlZW4mJmMuc2NyZWVuLndpZHRoJiZjLnNjcmVlbi5oZWlnaHQmJihhLnBhcmFtcy5zY3JlZW5oZWlnaHQ9Yy5zY3JlZW4uaGVpZ2h0LnRvU3RyaW5nKCksYS5wYXJhbXMuc2NyZWVud2lkdGg9Yy5zY3JlZW4ud2lkdGgudG9TdHJpbmcoKSxjLmRldmljZVBpeGVsUmF0aW8mJihhLnBhcmFtcy5zY3JlZW5kZW5zaXR5PWMuZGV2aWNlUGl4ZWxSYXRpby50b1N0cmluZygpKSl9ZnVuY3Rpb24gZShhKXtpZihhLnBlcmZvcm1UaW1lem9uZURldGVjdGlvbil7dmFyIGI9LShuZXcgRGF0ZSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtiPjAmJihiPVwiK1wiK2IpLGEucGFyYW1zLmFkdWhvPWVuY29kZVVSSUNvbXBvbmVudChiKX19ZnVuY3Rpb24gZigpe3JldHVybiEoYy5uYXZpZ2F0b3IubWltZVR5cGVzIT09byYmYy5uYXZpZ2F0b3IubWltZVR5cGVzW3FdIT09byYmIW5hdmlnYXRvci5taW1lVHlwZXNbcV0uZW5hYmxlZFBsdWdpbil9ZnVuY3Rpb24gZyhhKXtpZihhLnBlcmZvcm1GbGFzaERldGVjdGlvbil7dmFyIGIsZCxlO2lmKGMubmF2aWdhdG9yLnBsdWdpbnMhPT1vJiZjLm5hdmlnYXRvci5wbHVnaW5zW1wiU2hvY2t3YXZlIEZsYXNoXCJdIT09byl7dmFyIGc9Yy5uYXZpZ2F0b3IucGx1Z2luc1tcIlNob2Nrd2F2ZSBGbGFzaFwiXS5kZXNjcmlwdGlvbjtnJiZmKCkmJihnPWcucmVwbGFjZSgvXi4qXFxzKyhcXFMrXFxzK1xcUyskKS8sXCIkMVwiKSxiPXBhcnNlSW50KGcucmVwbGFjZSgvXiguKilcXC4uKiQvLFwiJDFcIiksMTApLGQ9cGFyc2VJbnQoZy5yZXBsYWNlKC9eLipcXC4oLiopXFxzLiokLyxcIiQxXCIpLDEwKSxlPS9bYS16QS1aXS8udGVzdChnKT9wYXJzZUludChnLnJlcGxhY2UoL14uKlthLXpBLVpdKyguKikkLyxcIiQxXCIpLDEwKTowKX1lbHNlIGlmKGMuQWN0aXZlWE9iamVjdCE9PW8pdHJ5e3ZhciBoPW5ldyBjLkFjdGl2ZVhPYmplY3QoXCJTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaFwiKTtpZihoKXt2YXIgaT1oLkdldFZhcmlhYmxlKFwiJHZlcnNpb25cIik7aSYmKGk9aS5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCIsXCIpLGI9cGFyc2VJbnQoaVswXSwxMCksZD1wYXJzZUludChpWzFdLDEwKSxlPXBhcnNlSW50KGlbMl0sMTApKX19Y2F0Y2goail7fWIhPT1vJiYoYS5wYXJhbXMuZmxhc2h2ZXI9YitcIi5cIitkK1wiLlwiK2UpfX1mdW5jdGlvbiBoKGEpe2lmKGMubXJhaWQhPT1vKXt2YXIgYj1jLm1yYWlkLmdldFZlcnNpb24oKTsvMVxcLlxcZC8udGVzdChiKT9hPVwiM1wiOi8yXFwuXFxkLy50ZXN0KGIpJiYoYT1cIjVcIil9cmV0dXJuIGF9ZnVuY3Rpb24gaShhKXt2YXIgYj1cIlwiIT09YT9cIjpcIjpcIlwiO3JldHVybiBjLm9ybW1hIT09bz9hK2IrXCI0XCI6YX1mdW5jdGlvbiBqKGEpe2lmKGEucGVyZm9ybVJpY2hNZWRpYURldGVjdGlvbil7dmFyIGI9XCJcIjtiPWgoYiksYj1pKGIpLFwiXCIhPT1iJiYoYS5wYXJhbXMuYXBpZnc9Yil9fWZ1bmN0aW9uIGsoZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZil7ZnVuY3Rpb24gZyhhKXtiLmdlb0Nvb3Jkcz1hLmNvb3JkcyxlKCl9ZnVuY3Rpb24gaChhKXtkLmxvZ2dlci5sb2cocCxcIm15RXJyXCIsXCJHZW9Mb2NhdGlvbiBmYWlsZWQ6IFwiK2EudG9TdHJpbmcoKSksZigpfWMubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihhLlV0aWxzLmNyZWF0ZUNsb3N1cmUoZyxkLmxvZ2dlciksYS5VdGlscy5jcmVhdGVDbG9zdXJlKGgsZC5sb2dnZXIpLHt0aW1lb3V0OjFlM30pfX1mdW5jdGlvbiBsKGMsZCl7dmFyIGU9Yy5jb25maWc7cmV0dXJuIGEuVXRpbHMuY3JlYXRlQ2xvc3VyZShmdW5jdGlvbihjKXtjJiZiLmdlb0Nvb3JkcyYmYS5VdGlscy5pc051bWJlcihiLmdlb0Nvb3Jkcy5sYXRpdHVkZSkmJmEuVXRpbHMuaXNOdW1iZXIoYi5nZW9Db29yZHMubG9uZ2l0dWRlKSYmKGUucGFyYW1zLmxhdD1iLmdlb0Nvb3Jkcy5sYXRpdHVkZS50b1N0cmluZygpLGUucGFyYW1zLmxvbmc9Yi5nZW9Db29yZHMubG9uZ2l0dWRlLnRvU3RyaW5nKCkpLGQoKX0sYy5sb2dnZXIpfWZ1bmN0aW9uIG0oYSl7cmV0dXJuISEoYS5wZXJmb3JtR2VvRGV0ZWN0aW9uJiZjLm5hdmlnYXRvciYmYy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24mJmMubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbil9ZnVuY3Rpb24gbihiLGMpe2EuUmVzb3VyY2VNYW5hZ2VyLnNjaGVkdWxlKFwiZ2VvXCIsbChiLGMpLCExLGsoYikpfXZhciBvLHA9XCJEZXRlY3Rpb25zXCIscT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCI7cmV0dXJuIGFbcF09e2RldGVjdFNjcmVlblNpemU6ZCxkZXRlY3RVVENPZmZzZXQ6ZSxkZXRlY3RGbGFzaFZlcnNpb246ZyxkZXRlY3RSaWNoTWVkaWFTdXBwb3J0OmosZGV0ZWN0R2VvTG9jYXRpb246bixpc0dlbzptfSxhW3BdfWZ1bmN0aW9uIG0oYSxiLGMpe2Z1bmN0aW9uIGQoZCxlKXt2YXIgZjtyZXR1cm4gZj1uZXcgdihhLGIsYyxkKSxmLmFsbG93R3JvdXBpbmc9ZSxiLmFkcXVldWVzPWIuYWRxdWV1ZXN8fHt9LGIuYWRxdWV1ZXNbZF09ZixiLmFkUXVldWVzSWRMaXN0PWIuYWRRdWV1ZXNJZExpc3R8fFtdLGIuY3VycmVudEFkUXVldWU9ZixiLmFkUXVldWVzSWRMaXN0LnB1c2goZCksZn1mdW5jdGlvbiBlKGEpe3ZhciBjPWIuY3VycmVudEFkUXVldWV8fGQocS5ybmQoMWU1KS50b1N0cmluZygpLGEuY29uZmlnLmVuYWJsZU11bHRpQWQpO2MuYWRkUmVxdWVzdChhKSxhLnF1ZXVlSWQ9Yy5pZH1mdW5jdGlvbiBmKGEpe3ZhciBkPWIuY3VycmVudEFkUXVldWUsZT1kLmlkO2lmKCFxLmlzT2JqZWN0KGQpKXRocm93IG5ldyBFcnJvcihwK1wiI2V4ZWN1dGUgTm8gQWRRdWV1ZSB0byBleGVjdXRlIHdhcyBmb3VuZFwiKTtpZihiLmN1cnJlbnRBZFF1ZXVlPXZvaWQgMCxkLmFsbG93R3JvdXBpbmcpe3ZhciBmPXMuYnVpbGRVcmwoe2NvbmZpZzp7cHJvdG9jb2w6Yy5sb2NhdGlvbi5wcm90b2NvbH19LHIrXCIuanNcIik7cy5sb2FkU2NyaXB0KGYsciwhMSxmdW5jdGlvbihiKXtpZighYil0aHJvdyBuZXcgRXJyb3IocCtcIiNleGVjdXRlIE11bHRpQWQgcGx1Z2luIGZhaWxlZCB0byBsb2FkXCIpO2Q9aChkKSxnKGQsYSl9LG51bGwpfWVsc2UgZyhkLGEpO3JldHVybiBlfWZ1bmN0aW9uIGcoYixjKXtiLmV4ZWN1dGVDb25maWc9YyxhLlJlc3BvbnNpdmVBZE1hbmFnZXIucmVnaXN0ZXJRdWV1ZShiKSxiLmFsbG93R3JvdXBpbmc/KGwoYixjLm11bHRpQWQpLGEuTXVsdGlBZE1hbmFnZXIubG9hZChiLFtdKSk6Yi5zdGFydCgpfWZ1bmN0aW9uIGgoZCl7dmFyIGU9bmV3IGEucGx1Z2luQ2xhc3Nlcy5NdWx0aUFkR3JvdXBRdWV1ZShhLGIsYyxkLmlkKTtyZXR1cm4gYi5hZHF1ZXVlc1tkLmlkXT1lLGEuVXRpbHMuZWFjaChkLnN0b3JhZ2UsZnVuY3Rpb24oYSl7ZS5hZGRSZXF1ZXN0KGEpfSksZX1mdW5jdGlvbiBpKGIsYyl7ayhiLGZ1bmN0aW9uKCl7dHJ5e2EuQmFubmVySW5qZWN0b3IuZG9Bc3luYyhiKX1jYXRjaChkKXtiLmxvZ2dlci5sb2cocCxcInByb2Nlc3NBZFJlcXVlc3RcIixcIkV4Y2VwdGlvbiBjYXVnaHQ6IFwiK2QpLGMuYWR2YW5jZSgpfX0pfWZ1bmN0aW9uIGooYixjLGQpe2IubG9nZ2VyLmxvZyhwLFwicHJvY2Vzc011bHRpQWRSZXF1ZXN0XCIsXCJTdGFydCBwcm9jZXNzaW5nIGdyb3VwIGZyb20gcXVldWU6XCIrYytcIiB3aXRoIGluZGV4IFwiK2QpLGsoYixmdW5jdGlvbigpe2EuTXVsdGlBZE1hbmFnZXIubG9hZEdyb3VwKGIsYyxkKX0pfWZ1bmN0aW9uIGsoYixjKXt2YXIgZD1iLmNvbmZpZzthLkJhbm5lckluamVjdG9yLnBlcmZvcm1TeW5jRGV0ZWN0aW9ucyhkKSxhLkRldGVjdGlvbnMuaXNHZW8oZCk/YS5EZXRlY3Rpb25zLmRldGVjdEdlb0xvY2F0aW9uKGIsZnVuY3Rpb24oKXtjKCl9KTpjKCl9ZnVuY3Rpb24gbChhLGIpe2Zvcih2YXIgYz1iP2Iuc2tpcERlZmF1bHQ6ITEsZD0wO2Q8YS5zdG9yYWdlLmxlbmd0aDtkKyspe3ZhciBlPWEuc3RvcmFnZVtkXTthLnJlcXVlc3RzW2UuaWRdLm11bHRpQWRTa2lwRGVmYXVsdD1jfX1mdW5jdGlvbiBtKGEsYyl7cmV0dXJuIGM/Yi5hZHF1ZXVlc1tjXS5yZXF1ZXN0c1thXTp2b2lkIDB9ZnVuY3Rpb24gbihhKXtpZigwIT09Yi5hZFF1ZXVlc0lkTGlzdC5sZW5ndGgpZm9yKHZhciBjPWIuYWRRdWV1ZXNJZExpc3QubGVuZ3RoLTE7Yz49MDtjLS0pe3ZhciBkPWIuYWRRdWV1ZXNJZExpc3RbY10sZT1iLmFkcXVldWVzW2RdLGY9ZS5yZXF1ZXN0c1thXTtpZihmKXJldHVybiBkfX1mdW5jdGlvbiBvKGIsYyl7Yi5hbGxvd0dyb3VwaW5nPygwPT09Yi52aXJ0dWFsU3ViR3JvdXBDb3VudGVyJiYoYi52aXJ0dWFsU3ViR3JvdXBDb3VudGVyPWIuZ3JvdXBMaXN0Lmxlbmd0aCksYS5NdWx0aUFkTWFuYWdlci5sb2FkKGIsYykpOihiLmNyZWF0ZVZpcnR1YWxTdWJRdWV1ZShjKSxiLnN0YXJ0KCkpfXZhciBwPVwiQWRRdWV1ZVwiLHE9YS5VdGlscyxyPVwiREFDTXVsdGlBZFBsdWdpblwiLHM9YS5SZXNvdXJjZUxvYWRlcjthW3BdPXtlbnF1ZXVlOmUsZXhlY3V0ZTpmLHByb2Nlc3NBZFJlcXVlc3Q6aSxwcm9jZXNzTXVsdGlBZFJlcXVlc3Q6aixnZXRSZXF1ZXN0Om0sZ2V0UmVxdWVzdFF1ZXVlOm4scmVsb2FkUXVldWU6byxwcm9tb3RlUXVldWVUb011bHRpQWRRdWV1ZTpofX1mdW5jdGlvbiBuKGEpe3cuQmFubmVySW5qZWN0b3IuZG9Bc3luYyhhKX1mdW5jdGlvbiBvKGEpe3AoYSk7dmFyIGI9YS5jb25maWc7dy5SZXNwb25zaXZlQWRNYW5hZ2VyLnJlZ2lzdGVyKGEpLHcuQmFubmVySW5qZWN0b3IucGVyZm9ybVN5bmNEZXRlY3Rpb25zKGIpLHkuaXNHZW8oYik/KHguY3JlYXRlQWRDb250YWluZXIoYSkseS5kZXRlY3RHZW9Mb2NhdGlvbihhLGZ1bmN0aW9uKCl7dy5CYW5uZXJJbmplY3Rvci5kb0FzeW5jKGEpfSkpOmIuc3luY0lmUG9zc2libGUmJncuUmVzb3VyY2VNYW5hZ2VyLmlzU3luYyhhLmNvbmZpZy5sZWdhY3lEQUNMb2FkVHlwZSx3LkVudmlyb25tZW50LmdldElFVmVyc2lvbigpKT93LkJhbm5lckluamVjdG9yLmRvU3luYyhhKTooeC5jcmVhdGVBZENvbnRhaW5lcihhKSx3LkJhbm5lckluamVjdG9yLmRvQXN5bmMoYSkpfWZ1bmN0aW9uIHAoYSl7dmFyIGI9dy5Db25maWdSZXNvbHZlci5idWlsZENvbmZpZ3VyYXRpb24oYSk7YS5jb25maWc9dy5Db25maWdGaW5hbGl6ZXIucHJvY2VzcyhiLGEubG9nZ2VyKSxhLmNvbmZpZy5wYXJhbXMuZ3JwPWEuY29uZmlnLnBhcmFtcy5ncnB8fHIuYWRncm91cGlkfWZ1bmN0aW9uIHEoYSxiLGMpe3ZhciBkLGU9cy5hZHF1ZXVlc1tiXTtpZihlKXt2YXIgZj1lLnJlcXVlc3RzW2FdO2Q9Zj9mLmNvbnRleHQubG9nZ2VyOnZvaWQgMH1pZihzLmRlYnVnTW9kZXx8ZCYmZC5pc0VuYWJsZWQoKSl0aHJvdyBjfXZhciByPXdpbmRvdyxzPXIuQURURUNIO2lmKCFzLmxvYWRBZCl7dmFyIHQ9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuZW5hYmxlZD0hIWIuZGVidWdNb2RlLHRoaXMub3V0cHV0PWMuY29uc29sZSx0aGlzLm1vZHVsZXM9YSx0aGlzLmdsb2JhbD1iLHRoaXMud2luPWN9O3QucHJvdG90eXBlLmRlYnVnPWZ1bmN0aW9uKGEpe3RoaXMuZW5hYmxlZCYmdGhpcy5vdXRwdXQmJnRoaXMub3V0cHV0LmxvZyhhKX0sdC5wcm90b3R5cGUuc2V0RW5hYmxlZD1mdW5jdGlvbihhKXt0aGlzLmVuYWJsZWQ9ISFhfHx0aGlzLmdsb2JhbC5kZWJ1Z01vZGV9LHQucHJvdG90eXBlLmlzRW5hYmxlZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuYWJsZWR9LHQucHJvdG90eXBlLmxvZ09iamVjdD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YStcIjpcIitiK1wiIFwiO3RoaXMubW9kdWxlcy5VdGlscy5pc09iamVjdChyLkpTT04pP2QrPXIuSlNPTi5zdHJpbmdpZnkoYyk6KGQrPVwieyBcIix0aGlzLm1vZHVsZXMuVXRpbHMuZWFjaEtleShjLGZ1bmN0aW9uKGEsYil7ZCs9YStcIjpcIitiK1wiIFwifSksZCs9XCJ9XCIpLHRoaXMuZGVidWcoZCl9LHQucHJvdG90eXBlLmxvZz1mdW5jdGlvbihhLGIsYyl7dGhpcy5kZWJ1Zyh2b2lkIDA9PT1iJiZ2b2lkIDA9PT1jP2E6YStcIiNcIitiK1wiIFwiK2MpfTt2YXIgdT1mdW5jdGlvbihhLGIsYyl7dGhpcy5tb2R1bGVzPWEsdGhpcy5nbG9iYWw9Yix0aGlzLndpbj1jLHRoaXMubG9nZ2VyPW5ldyB0KGEsYixjKX07dS5wcm90b3R5cGUuc2V0Q29uZmlnPWZ1bmN0aW9uKGEpe3RoaXMuY29uZmlnPWEsdGhpcy5pZD1hLmFsaWFzP2EuYWxpYXM6YS5wbGFjZW1lbnR9LHUucHJvdG90eXBlLmhhc1Jlc3BvbnNpdmVDb25maWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb25maWcucmVzcG9uc2l2ZS51c2VyZXNwb25zaXZlfTt2YXIgdj1mdW5jdGlvbihhLGIsYyxkKXt0aGlzLnN0b3JhZ2U9W10sdGhpcy5yZXF1ZXN0cz17fSx0aGlzLmFsbG93R3JvdXBpbmc9ITEsdGhpcy5kb0F1dG9BZEluamVjdGlvbj0hMCx0aGlzLm5hbWVzcGFjZT1hLHRoaXMuZ2xvYmFsPWIsdGhpcy53aW49Yyx0aGlzLmN1clBvaW50ZXI9LTEsdGhpcy5pZD1kLHRoaXMucmVzcG9uc2l2ZUluZGV4ZXM9W10sdGhpcy52aXJ0dWFsU3ViUXVldWVJbmRleGVzPVtdLHRoaXMucnVubmluZz0hMX07di5wcm90b3R5cGUuYWR2YW5jZT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuZ2V0TmV4dFJlcXVlc3QoKTt0aGlzLm5hbWVzcGFjZS5VdGlscy5pc09iamVjdChhKT90aGlzLm5hbWVzcGFjZS5BZFF1ZXVlLnByb2Nlc3NBZFJlcXVlc3QoYSx0aGlzKTp0aGlzLmNsb3NlKCl9LHYucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy5jdXJQb2ludGVyPS0xLHRoaXMucnVubmluZz0hMCx0aGlzLmFkdmFuY2UoKX0sdi5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLnJ1bm5pbmc9ITEsdGhpcy52aXJ0dWFsU3ViUXVldWVJbmRleGVzPVtdfSx2LnByb3RvdHlwZS5pblZpcnR1YWxNb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlydHVhbFN1YlF1ZXVlSW5kZXhlcy5sZW5ndGg+MH0sdi5wcm90b3R5cGUuZ2V0TmV4dFJlcXVlc3Q9ZnVuY3Rpb24oKXt2YXIgYTtpZih0aGlzLmN1clBvaW50ZXIrPTEsdGhpcy5pblZpcnR1YWxNb2RlKCkpe3ZhciBiPXRoaXMudmlydHVhbFN1YlF1ZXVlSW5kZXhlc1t0aGlzLmN1clBvaW50ZXJdO2E9dGhpcy5zdG9yYWdlW2JdfWVsc2UgYT10aGlzLnN0b3JhZ2VbdGhpcy5jdXJQb2ludGVyXTtyZXR1cm4gYX0sdi5wcm90b3R5cGUuYWRkUmVxdWVzdD1mdW5jdGlvbihhKXt0aGlzLnN0b3JhZ2UucHVzaChhKX0sdi5wcm90b3R5cGUuZ2V0UmVzcG9uc2l2ZVJlcXVlc3RzPWZ1bmN0aW9uKCl7dmFyIGE9W10sYj10aGlzO3JldHVybiB0aGlzLm5hbWVzcGFjZS5VdGlscy5lYWNoKHRoaXMucmVzcG9uc2l2ZUluZGV4ZXMsZnVuY3Rpb24oYyl7YS5wdXNoKGIuc3RvcmFnZVtjXSl9KSxhfSx2LnByb3RvdHlwZS5jcmVhdGVWaXJ0dWFsU3ViUXVldWU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLnZpcnR1YWxTdWJRdWV1ZUluZGV4ZXM9W10sdGhpcy5uYW1lc3BhY2UuVXRpbHMuZWFjaChhLGZ1bmN0aW9uKGEpe2IubmFtZXNwYWNlLlV0aWxzLmVhY2goYi5zdG9yYWdlLGZ1bmN0aW9uKGMsZCl7Yy5pZD09PWEmJmIudmlydHVhbFN1YlF1ZXVlSW5kZXhlcy5wdXNoKGQpfSl9KX07dmFyIHc9e3BsdWdpbkNsYXNzZXM6e319O2EodyxzLHIpLGUodyxzLHIpO3ZhciB4PWIodyxzLHIpO2kodyxzLHIpLGoodyksYyh3LHMscik7dmFyIHk9bCh3LHMscik7Zih3LHMsciksZCh3LHMsciksZyh3KSxrKHcscyksaCh3LHMsciksbSh3LHMscik7dm9pZCAwPT09ci5hZGdyb3VwaWQmJihyLmFkZ3JvdXBpZD14LnJuZCgxZTMpKSxzLmRhY1JlcXVlc3RBZD1mdW5jdGlvbihhLGIpe3IuQWR0ZWNoPXIuQWR0ZWNofHx7fTt2YXIgYz1wYXJzZUludChhLDEwKSxkPXIuQWR0ZWNoO3guaXNTdHJpbmcoYik/ZFtcIktWXCIrYV09eC5zdHJpbmdUb09iamVjdChiKTp4LmlzT2JqZWN0KGIpJiYoZFtcIktWXCIrYV09YiksZFtcImZpZlwiK2FdPWRbXCJmaWZcIithXXx8e30sZFtcInN5bmNJZlBvc3NpYmxlXCIrYV09ZFtcInN5bmNJZlBvc3NpYmxlXCIrYV18fCEwLGRbXCJsZWdhY3lEQUNMb2FkVHlwZVwiK2FdPSEwLHMubG9hZEFkKHtwbGFjZW1lbnQ6Y30pfSxzLmxvYWRBZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9cy5kZWJ1Z01vZGU7dHJ5e3ZhciBlPW5ldyB1KHcscyxyKSxmPXcuTG9hZEFkUGFyYW1ldGVyc0hhbmRsZXIuaGFuZGxlUGFyYW1ldGVycyhhLGIsYyk7ZS5sb2dnZXIuc2V0RW5hYmxlZChmLmNvbmZpZy5kZWJ1Z01vZGUpLGQ9ZHx8Zi5jb25maWcuZGVidWdNb2RlLGUuc2V0Q29uZmlnKGYuY29uZmlnKSxmLmxlZ2FjeUFwaT9uKGUpOm8oZSl9Y2F0Y2goZyl7aWYoZCl0aHJvdyBnfX0scy5xdWV1ZUNhbGxiYWNrPWZ1bmN0aW9uKGEpe3RyeXt4LmlzT2JqZWN0KHMuYWRxdWV1ZXNbYV0pJiZzLmFkcXVldWVzW2FdLmFkdmFuY2UoKX1jYXRjaChiKXtpZihzLmRlYnVnTW9kZSl0aHJvdyBifX0scy5yZWdpc3RlclBsdWdpbj1mdW5jdGlvbihhKXthKHttb2R1bGVzOncsY29yZUNsYXNzZXM6e1F1ZXVlOnYsTG9nZ2VyOnQsUmVxdWVzdENvbnRleHQ6dX19KX0scy5lbnF1ZXVlQWQ9ZnVuY3Rpb24oYSl7dmFyIGI9cy5kZWJ1Z01vZGU7dHJ5e3ZhciBjPW5ldyB1KHcscyxyKSxkPXcuTG9hZEFkUGFyYW1ldGVyc0hhbmRsZXIuaGFuZGxlUGFyYW1ldGVycyhhKTtjLmxvZ2dlci5zZXRFbmFibGVkKGQuY29uZmlnLmRlYnVnTW9kZSksYj1ifHxkLmNvbmZpZy5kZWJ1Z01vZGUsYy5zZXRDb25maWcoZC5jb25maWcpLHAoYyksdy5BZFF1ZXVlLmVucXVldWUoYyl9Y2F0Y2goZSl7aWYoYil0aHJvdyBlfX0scy5leGVjdXRlUXVldWU9ZnVuY3Rpb24oYSl7dHJ5e3JldHVybiB3LkFkUXVldWUuZXhlY3V0ZSh3LkNvbmZpZ0ZpbmFsaXplci5wcm9jZXNzUXVldWVDb25maWcoYSkpfWNhdGNoKGIpe2lmKHMuZGVidWdNb2RlKXRocm93IGJ9fSxzLnNob3dBZD1mdW5jdGlvbihhLGIpe3RyeXt3Lk11bHRpQWRNYW5hZ2VyLnNob3dBZChhLGIpfWNhdGNoKGMpe3EoYSxiLGMpfX0scy53cml0ZUFkPWZ1bmN0aW9uKGEsYixjLGQpe3RyeXt3Lk11bHRpQWRNYW5hZ2VyLndyaXRlQWQoYSxiLGMsZCl9Y2F0Y2goZSl7cShhLGQsZSl9fX19KCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgYT13aW5kb3csYj1hLkRBQztiLnJlcXVlc3RBZHx8KGIucmVxdWVzdEFkPWZ1bmN0aW9uKGIsYyl7YS5BRFRFQ0guZGFjUmVxdWVzdEFkKGIsYyl9KX0oKX1jYXRjaChlKXtpZih3aW5kb3cuQURURUNILmRlYnVnTW9kZSl0aHJvdyBlfVxuOyBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXyh0eXBlb2YgYWR0ZWNoZGFjICE9IFwidW5kZWZpbmVkXCIgPyBhZHRlY2hkYWMgOiB3aW5kb3cuYWR0ZWNoZGFjKTtcblxufSkuY2FsbChnbG9iYWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gZGVmaW5lRXhwb3J0KGV4KSB7IG1vZHVsZS5leHBvcnRzID0gZXg7IH0pO1xuIiwiLyoqXG4gKiBGYXN0RG9tXG4gKlxuICogRWxpbWluYXRlcyBsYXlvdXQgdGhyYXNoaW5nXG4gKiBieSBiYXRjaGluZyBET00gcmVhZC93cml0ZVxuICogaW50ZXJhY3Rpb25zLlxuICpcbiAqIEBhdXRob3IgV2lsc29uIFBhZ2UgPHdpbHNvbnBhZ2VAbWUuY29tPlxuICovXG5cbjsoZnVuY3Rpb24oZmFzdGRvbSl7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIE5vcm1hbGl6ZSByQUZcbiAgdmFyIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHx8IGZ1bmN0aW9uKGNiKSB7IHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYiwgMTAwMCAvIDYwKTsgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZyZXNoXG4gICAqIEZhc3REb20gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gRmFzdERvbSgpIHtcbiAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICAgIHRoaXMubGFzdElkID0gMDtcblxuICAgIC8vIFBsYWNpbmcgdGhlIHJBRiBtZXRob2RcbiAgICAvLyBvbiB0aGUgaW5zdGFuY2UgYWxsb3dzXG4gICAgLy8gdXMgdG8gcmVwbGFjZSBpdCB3aXRoXG4gICAgLy8gYSBzdHViIGZvciB0ZXN0aW5nLlxuICAgIHRoaXMucmFmID0gcmFmO1xuXG4gICAgdGhpcy5iYXRjaCA9IHtcbiAgICAgIGhhc2g6IHt9LFxuICAgICAgcmVhZDogW10sXG4gICAgICB3cml0ZTogW10sXG4gICAgICBtb2RlOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgam9iIHRvIHRoZVxuICAgKiByZWFkIGJhdGNoIGFuZCBzY2hlZHVsZXNcbiAgICogYSBuZXcgZnJhbWUgaWYgbmVlZCBiZS5cbiAgICpcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIEZhc3REb20ucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbihmbiwgY3R4KSB7XG4gICAgdmFyIGpvYiA9IHRoaXMuYWRkKCdyZWFkJywgZm4sIGN0eCk7XG4gICAgdmFyIGlkID0gam9iLmlkO1xuXG4gICAgLy8gQWRkIHRoaXMgam9iIHRvIHRoZSByZWFkIHF1ZXVlXG4gICAgdGhpcy5iYXRjaC5yZWFkLnB1c2goam9iLmlkKTtcblxuICAgIC8vIFdlIHNob3VsZCAqbm90KiBzY2hlZHVsZSBhIG5ldyBmcmFtZSBpZjpcbiAgICAvLyAxLiBXZSdyZSAncmVhZGluZydcbiAgICAvLyAyLiBBIGZyYW1lIGlzIGFscmVhZHkgc2NoZWR1bGVkXG4gICAgdmFyIGRvZXNudE5lZWRGcmFtZSA9IHRoaXMuYmF0Y2gubW9kZSA9PT0gJ3JlYWRpbmcnXG4gICAgICB8fCB0aGlzLmJhdGNoLnNjaGVkdWxlZDtcblxuICAgIC8vIElmIGEgZnJhbWUgaXNuJ3QgbmVlZGVkLCByZXR1cm5cbiAgICBpZiAoZG9lc250TmVlZEZyYW1lKSByZXR1cm4gaWQ7XG5cbiAgICAvLyBTY2hlZHVsZSBhIG5ld1xuICAgIC8vIGZyYW1lLCB0aGVuIHJldHVyblxuICAgIHRoaXMuc2NoZWR1bGVCYXRjaCgpO1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIGpvYiB0byB0aGVcbiAgICogd3JpdGUgYmF0Y2ggYW5kIHNjaGVkdWxlc1xuICAgKiBhIG5ldyBmcmFtZSBpZiBuZWVkIGJlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgRmFzdERvbS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihmbiwgY3R4KSB7XG4gICAgdmFyIGpvYiA9IHRoaXMuYWRkKCd3cml0ZScsIGZuLCBjdHgpO1xuICAgIHZhciBtb2RlID0gdGhpcy5iYXRjaC5tb2RlO1xuICAgIHZhciBpZCA9IGpvYi5pZDtcblxuICAgIC8vIFB1c2ggdGhlIGpvYiBpZCBpbnRvIHRoZSBxdWV1ZVxuICAgIHRoaXMuYmF0Y2gud3JpdGUucHVzaChqb2IuaWQpO1xuXG4gICAgLy8gV2Ugc2hvdWxkICpub3QqIHNjaGVkdWxlIGEgbmV3IGZyYW1lIGlmOlxuICAgIC8vIDEuIFdlIGFyZSAnd3JpdGluZydcbiAgICAvLyAyLiBXZSBhcmUgJ3JlYWRpbmcnXG4gICAgLy8gMy4gQSBmcmFtZSBpcyBhbHJlYWR5IHNjaGVkdWxlZC5cbiAgICB2YXIgZG9lc250TmVlZEZyYW1lID0gbW9kZSA9PT0gJ3dyaXRpbmcnXG4gICAgICB8fCBtb2RlID09PSAncmVhZGluZydcbiAgICAgIHx8IHRoaXMuYmF0Y2guc2NoZWR1bGVkO1xuXG4gICAgLy8gSWYgYSBmcmFtZSBpc24ndCBuZWVkZWQsIHJldHVyblxuICAgIGlmIChkb2VzbnROZWVkRnJhbWUpIHJldHVybiBpZDtcblxuICAgIC8vIFNjaGVkdWxlIGEgbmV3XG4gICAgLy8gZnJhbWUsIHRoZW4gcmV0dXJuXG4gICAgdGhpcy5zY2hlZHVsZUJhdGNoKCk7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZlcnMgdGhlIGdpdmVuIGpvYlxuICAgKiBieSB0aGUgbnVtYmVyIG9mIGZyYW1lc1xuICAgKiBzcGVjaWZpZWQuXG4gICAqXG4gICAqIElmIG5vIGZyYW1lcyBhcmUgZ2l2ZW5cbiAgICogdGhlbiB0aGUgam9iIGlzIHJ1biBpblxuICAgKiB0aGUgbmV4dCBmcmVlIGZyYW1lLlxuICAgKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgZnJhbWVcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIEZhc3REb20ucHJvdG90eXBlLmRlZmVyID0gZnVuY3Rpb24oZnJhbWUsIGZuLCBjdHgpIHtcblxuICAgIC8vIEFjY2VwdHMgdHdvIGFyZ3VtZW50c1xuICAgIGlmICh0eXBlb2YgZnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGN0eCA9IGZuO1xuICAgICAgZm4gPSBmcmFtZTtcbiAgICAgIGZyYW1lID0gMTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGluZGV4ID0gZnJhbWUgLSAxO1xuXG4gICAgcmV0dXJuIHRoaXMuc2NoZWR1bGUoaW5kZXgsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5ydW4oe1xuICAgICAgICBmbjogZm4sXG4gICAgICAgIGN0eDogY3R4XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXJzIGEgc2NoZWR1bGVkICdyZWFkJyxcbiAgICogJ3dyaXRlJyBvciAnZGVmZXInIGpvYi5cbiAgICpcbiAgICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgRmFzdERvbS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihpZCkge1xuXG4gICAgLy8gRGVmZXIgam9icyBhcmUgY2xlYXJlZCBkaWZmZXJlbnRseVxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsZWFyRnJhbWUoaWQpO1xuICAgIH1cblxuICAgIC8vIEFsbG93IGlkcyB0byBiZSBwYXNzZWQgYXMgc3RyaW5nc1xuICAgIGlkID0gTnVtYmVyKGlkKTtcblxuICAgIHZhciBqb2IgPSB0aGlzLmJhdGNoLmhhc2hbaWRdO1xuICAgIGlmICgham9iKSByZXR1cm47XG5cbiAgICB2YXIgbGlzdCA9IHRoaXMuYmF0Y2hbam9iLnR5cGVdO1xuICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihpZCk7XG5cbiAgICAvLyBDbGVhciByZWZlcmVuY2VzXG4gICAgZGVsZXRlIHRoaXMuYmF0Y2guaGFzaFtpZF07XG4gICAgaWYgKH5pbmRleCkgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgYSBzY2hlZHVsZWQgZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmcmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgRmFzdERvbS5wcm90b3R5cGUuY2xlYXJGcmFtZSA9IGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5mcmFtZXMuaW5kZXhPZihmcmFtZSk7XG4gICAgaWYgKH5pbmRleCkgdGhpcy5mcmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICAvKipcbiAgICogU2NoZWR1bGVzIGEgbmV3IHJlYWQvd3JpdGVcbiAgICogYmF0Y2ggaWYgb25lIGlzbid0IHBlbmRpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBGYXN0RG9tLnByb3RvdHlwZS5zY2hlZHVsZUJhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU2NoZWR1bGUgYmF0Y2ggZm9yIG5leHQgZnJhbWVcbiAgICB0aGlzLnNjaGVkdWxlKDAsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5iYXRjaC5zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYucnVuQmF0Y2goKTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBmbGFnIHRvIGluZGljYXRlXG4gICAgLy8gYSBmcmFtZSBoYXMgYmVlbiBzY2hlZHVsZWRcbiAgICB0aGlzLmJhdGNoLnNjaGVkdWxlZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIHVuaXF1ZVxuICAgKiBpZCBmb3IgYSBqb2IuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIEZhc3REb20ucHJvdG90eXBlLnVuaXF1ZUlkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICsrdGhpcy5sYXN0SWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxzIGVhY2ggam9iIGluXG4gICAqIHRoZSBsaXN0IHBhc3NlZC5cbiAgICpcbiAgICogSWYgYSBjb250ZXh0IGhhcyBiZWVuXG4gICAqIHN0b3JlZCBvbiB0aGUgZnVuY3Rpb25cbiAgICogdGhlbiBpdCBpcyB1c2VkLCBlbHNlIHRoZVxuICAgKiBjdXJyZW50IGB0aGlzYCBpcyB1c2VkLlxuICAgKlxuICAgKiBAcGFyYW0gIHtBcnJheX0gbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgRmFzdERvbS5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbihsaXN0KSB7XG4gICAgdmFyIGlkO1xuXG4gICAgd2hpbGUgKGlkID0gbGlzdC5zaGlmdCgpKSB7XG4gICAgICB0aGlzLnJ1bih0aGlzLmJhdGNoLmhhc2hbaWRdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJ1bnMgYW55ICdyZWFkJyBqb2JzIGZvbGxvd2VkXG4gICAqIGJ5IGFueSAnd3JpdGUnIGpvYnMuXG4gICAqXG4gICAqIFdlIHJ1biB0aGlzIGluc2lkZSBhIHRyeSBjYXRjaFxuICAgKiBzbyB0aGF0IGlmIGFueSBqb2JzIGVycm9yLCB3ZVxuICAgKiBhcmUgYWJsZSB0byByZWNvdmVyIGFuZCBjb250aW51ZVxuICAgKiB0byBmbHVzaCB0aGUgYmF0Y2ggdW50aWwgaXQncyBlbXB0eS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEZhc3REb20ucHJvdG90eXBlLnJ1bkJhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcblxuICAgICAgLy8gU2V0IHRoZSBtb2RlIHRvICdyZWFkaW5nJyxcbiAgICAgIC8vIHRoZW4gZW1wdHkgYWxsIHJlYWQgam9ic1xuICAgICAgdGhpcy5iYXRjaC5tb2RlID0gJ3JlYWRpbmcnO1xuICAgICAgdGhpcy5mbHVzaCh0aGlzLmJhdGNoLnJlYWQpO1xuXG4gICAgICAvLyBTZXQgdGhlIG1vZGUgdG8gJ3dyaXRpbmcnXG4gICAgICAvLyB0aGVuIGVtcHR5IGFsbCB3cml0ZSBqb2JzXG4gICAgICB0aGlzLmJhdGNoLm1vZGUgPSAnd3JpdGluZyc7XG4gICAgICB0aGlzLmZsdXNoKHRoaXMuYmF0Y2gud3JpdGUpO1xuXG4gICAgICB0aGlzLmJhdGNoLm1vZGUgPSBudWxsO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5ydW5CYXRjaCgpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgam9iIHRvXG4gICAqIHRoZSBnaXZlbiBiYXRjaC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gICBsaXN0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgIGN0eFxuICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgRmFzdERvbS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24odHlwZSwgZm4sIGN0eCkge1xuICAgIHZhciBpZCA9IHRoaXMudW5pcXVlSWQoKTtcbiAgICByZXR1cm4gdGhpcy5iYXRjaC5oYXNoW2lkXSA9IHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGZuOiBmbixcbiAgICAgIGN0eDogY3R4LFxuICAgICAgdHlwZTogdHlwZVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIFJ1bnMgYSBnaXZlbiBqb2IuXG4gICAqXG4gICAqIEFwcGxpY2F0aW9ucyB1c2luZyBGYXN0RG9tXG4gICAqIGhhdmUgdGhlIG9wdGlvbnMgb2Ygc2V0dGluZ1xuICAgKiBgZmFzdGRvbS5vbkVycm9yYC5cbiAgICpcbiAgICogVGhpcyB3aWxsIGNhdGNoIGFueVxuICAgKiBlcnJvcnMgdGhhdCBtYXkgdGhyb3dcbiAgICogaW5zaWRlIGNhbGxiYWNrcywgd2hpY2hcbiAgICogaXMgdXNlZnVsIGFzIG9mdGVuIERPTVxuICAgKiBub2RlcyBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgKiBzaW5jZSBhIGpvYiB3YXMgc2NoZWR1bGVkLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgIGZhc3Rkb20ub25FcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICogICAgIC8vIFJ1bnMgd2hlbiBqb2JzIGVycm9yXG4gICAqICAgfTtcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBqb2JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEZhc3REb20ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKGpvYil7XG4gICAgdmFyIGN0eCA9IGpvYi5jdHggfHwgdGhpcztcbiAgICB2YXIgZm4gPSBqb2IuZm47XG5cbiAgICAvLyBDbGVhciByZWZlcmVuY2UgdG8gdGhlIGpvYlxuICAgIGRlbGV0ZSB0aGlzLmJhdGNoLmhhc2hbam9iLmlkXTtcblxuICAgIC8vIElmIG5vIGBvbkVycm9yYCBoYW5kbGVyXG4gICAgLy8gaGFzIGJlZW4gcmVnaXN0ZXJlZCwganVzdFxuICAgIC8vIHJ1biB0aGUgam9iIG5vcm1hbGx5LlxuICAgIGlmICghdGhpcy5vbkVycm9yKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbChjdHgpO1xuICAgIH1cblxuICAgIC8vIElmIGFuIGBvbkVycm9yYCBoYW5kbGVyXG4gICAgLy8gaGFzIGJlZW4gcmVnaXN0ZXJlZCwgY2F0Y2hcbiAgICAvLyBlcnJvcnMgdGhhdCB0aHJvdyBpbnNpZGVcbiAgICAvLyBjYWxsYmFja3MsIGFuZCBydW4gdGhlXG4gICAgLy8gaGFuZGxlciBpbnN0ZWFkLlxuICAgIHRyeSB7IGZuLmNhbGwoY3R4KTsgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU3RhcnRzIGEgckFGIGxvb3BcbiAgICogdG8gZW1wdHkgdGhlIGZyYW1lIHF1ZXVlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgRmFzdERvbS5wcm90b3R5cGUubG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcmFmID0gdGhpcy5yYWY7XG5cbiAgICAvLyBEb24ndCBzdGFydCBtb3JlIHRoYW4gb25lIGxvb3BcbiAgICBpZiAodGhpcy5sb29waW5nKSByZXR1cm47XG5cbiAgICByYWYoZnVuY3Rpb24gZnJhbWUoKSB7XG4gICAgICB2YXIgZm4gPSBzZWxmLmZyYW1lcy5zaGlmdCgpO1xuXG4gICAgICAvLyBJZiBubyBtb3JlIGZyYW1lcyxcbiAgICAgIC8vIHN0b3AgbG9vcGluZ1xuICAgICAgaWYgKCFzZWxmLmZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5sb29waW5nID0gZmFsc2U7XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgc2NoZWR1bGUgdGhlXG4gICAgICAvLyBuZXh0IGZyYW1lXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYWYoZnJhbWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBSdW4gdGhlIGZyYW1lLiAgTm90ZSB0aGF0XG4gICAgICAvLyB0aGlzIG1heSB0aHJvdyBhbiBlcnJvclxuICAgICAgLy8gaW4gdXNlciBjb2RlLCBidXQgYWxsXG4gICAgICAvLyBmYXN0ZG9tIHRhc2tzIGFyZSBkZWFsdFxuICAgICAgLy8gd2l0aCBhbHJlYWR5IHNvIHRoZSBjb2RlXG4gICAgICAvLyB3aWxsIGNvbnRpbnVlIHRvIGl0ZXJhdGVcbiAgICAgIGlmIChmbikgZm4oKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9vcGluZyA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBmdW5jdGlvbiB0b1xuICAgKiBhIHNwZWNpZmllZCBpbmRleFxuICAgKiBvZiB0aGUgZnJhbWUgcXVldWUuXG4gICAqXG4gICAqIEBwYXJhbSAge051bWJlcn0gICBpbmRleFxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBGYXN0RG9tLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uKGluZGV4LCBmbikge1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoaXMgc2xvdFxuICAgIC8vIGhhc24ndCBhbHJlYWR5IGJlZW5cbiAgICAvLyB0YWtlbi4gSWYgaXQgaGFzLCB0cnlcbiAgICAvLyByZS1zY2hlZHVsaW5nIGZvciB0aGUgbmV4dCBzbG90XG4gICAgaWYgKHRoaXMuZnJhbWVzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGUoaW5kZXggKyAxLCBmbik7XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdGhlIHJBRlxuICAgIC8vIGxvb3AgdG8gZW1wdHlcbiAgICAvLyB0aGUgZnJhbWUgcXVldWVcbiAgICB0aGlzLmxvb3AoKTtcblxuICAgIC8vIEluc2VydCB0aGlzIGZ1bmN0aW9uIGludG9cbiAgICAvLyB0aGUgZnJhbWVzIHF1ZXVlIGFuZCByZXR1cm5cbiAgICByZXR1cm4gdGhpcy5mcmFtZXNbaW5kZXhdID0gZm47XG4gIH07XG5cbiAgLy8gV2Ugb25seSBldmVyIHdhbnQgdGhlcmUgdG8gYmVcbiAgLy8gb25lIGluc3RhbmNlIG9mIEZhc3REb20gaW4gYW4gYXBwXG4gIGZhc3Rkb20gPSBmYXN0ZG9tIHx8IG5ldyBGYXN0RG9tKCk7XG5cbiAgLyoqXG4gICAqIEV4cG9zZSAnZmFzdGRvbSdcbiAgICovXG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYXN0ZG9tO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbigpeyByZXR1cm4gZmFzdGRvbTsgfSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93WydmYXN0ZG9tJ10gPSBmYXN0ZG9tO1xuICB9XG5cbn0pKHdpbmRvdy5mYXN0ZG9tKTtcbiIsIi8qXG4gKiBqUXVlcnkgRmxleFNsaWRlciB2Mi41LjBcbiAqIENvcHlyaWdodCAyMDEyIFdvb1RoZW1lc1xuICogQ29udHJpYnV0aW5nIEF1dGhvcjogVHlsZXIgU21pdGhcbiAqL1xuO1xuKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy9GbGV4U2xpZGVyOiBPYmplY3QgSW5zdGFuY2VcbiAgJC5mbGV4c2xpZGVyID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2xpZGVyID0gJChlbCk7XG5cbiAgICAvLyBtYWtpbmcgdmFyaWFibGVzIHB1YmxpY1xuICAgIHNsaWRlci52YXJzID0gJC5leHRlbmQoe30sICQuZmxleHNsaWRlci5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICB2YXIgbmFtZXNwYWNlID0gc2xpZGVyLnZhcnMubmFtZXNwYWNlLFxuICAgICAgICBtc0dlc3R1cmUgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cuTVNHZXN0dXJlLFxuICAgICAgICB0b3VjaCA9ICgoIFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93ICkgfHwgbXNHZXN0dXJlIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCkgJiYgc2xpZGVyLnZhcnMudG91Y2gsXG4gICAgICAgIC8vIGRlcHJpY2F0aW5nIHRoaXMgaWRlYSwgYXMgZGV2aWNlcyBhcmUgYmVpbmcgcmVsZWFzZWQgd2l0aCBib3RoIG9mIHRoZXNlIGV2ZW50c1xuICAgICAgICAvL2V2ZW50VHlwZSA9ICh0b3VjaCkgPyBcInRvdWNoZW5kXCIgOiBcImNsaWNrXCIsXG4gICAgICAgIGV2ZW50VHlwZSA9IFwiY2xpY2sgdG91Y2hlbmQgTVNQb2ludGVyVXAga2V5dXBcIixcbiAgICAgICAgd2F0Y2hlZEV2ZW50ID0gXCJcIixcbiAgICAgICAgd2F0Y2hlZEV2ZW50Q2xlYXJUaW1lcixcbiAgICAgICAgdmVydGljYWwgPSBzbGlkZXIudmFycy5kaXJlY3Rpb24gPT09IFwidmVydGljYWxcIixcbiAgICAgICAgcmV2ZXJzZSA9IHNsaWRlci52YXJzLnJldmVyc2UsXG4gICAgICAgIGNhcm91c2VsID0gKHNsaWRlci52YXJzLml0ZW1XaWR0aCA+IDApLFxuICAgICAgICBmYWRlID0gc2xpZGVyLnZhcnMuYW5pbWF0aW9uID09PSBcImZhZGVcIixcbiAgICAgICAgYXNOYXYgPSBzbGlkZXIudmFycy5hc05hdkZvciAhPT0gXCJcIixcbiAgICAgICAgbWV0aG9kcyA9IHt9LFxuICAgICAgICBmb2N1c2VkID0gdHJ1ZTtcblxuICAgIC8vIFN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBzbGlkZXIgb2JqZWN0XG4gICAgJC5kYXRhKGVsLCBcImZsZXhzbGlkZXJcIiwgc2xpZGVyKTtcblxuICAgIC8vIFByaXZhdGUgc2xpZGVyIG1ldGhvZHNcbiAgICBtZXRob2RzID0ge1xuICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNsaWRlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgc2xpZGUgYW5kIG1ha2Ugc3VyZSBpdCBpcyBhIG51bWJlclxuICAgICAgICBzbGlkZXIuY3VycmVudFNsaWRlID0gcGFyc2VJbnQoICggc2xpZGVyLnZhcnMuc3RhcnRBdCA/IHNsaWRlci52YXJzLnN0YXJ0QXQgOiAwKSwgMTAgKTtcbiAgICAgICAgaWYgKCBpc05hTiggc2xpZGVyLmN1cnJlbnRTbGlkZSApICkgeyBzbGlkZXIuY3VycmVudFNsaWRlID0gMDsgfVxuICAgICAgICBzbGlkZXIuYW5pbWF0aW5nVG8gPSBzbGlkZXIuY3VycmVudFNsaWRlO1xuICAgICAgICBzbGlkZXIuYXRFbmQgPSAoc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gMCB8fCBzbGlkZXIuY3VycmVudFNsaWRlID09PSBzbGlkZXIubGFzdCk7XG4gICAgICAgIHNsaWRlci5jb250YWluZXJTZWxlY3RvciA9IHNsaWRlci52YXJzLnNlbGVjdG9yLnN1YnN0cigwLHNsaWRlci52YXJzLnNlbGVjdG9yLnNlYXJjaCgnICcpKTtcbiAgICAgICAgc2xpZGVyLnNsaWRlcyA9ICQoc2xpZGVyLnZhcnMuc2VsZWN0b3IsIHNsaWRlcik7XG4gICAgICAgIHNsaWRlci5jb250YWluZXIgPSAkKHNsaWRlci5jb250YWluZXJTZWxlY3Rvciwgc2xpZGVyKTtcbiAgICAgICAgc2xpZGVyLmNvdW50ID0gc2xpZGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgIC8vIFNZTkM6XG4gICAgICAgIHNsaWRlci5zeW5jRXhpc3RzID0gJChzbGlkZXIudmFycy5zeW5jKS5sZW5ndGggPiAwO1xuICAgICAgICAvLyBTTElERTpcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLmFuaW1hdGlvbiA9PT0gXCJzbGlkZVwiKSB7IHNsaWRlci52YXJzLmFuaW1hdGlvbiA9IFwic3dpbmdcIjsgfVxuICAgICAgICBzbGlkZXIucHJvcCA9ICh2ZXJ0aWNhbCkgPyBcInRvcFwiIDogXCJtYXJnaW5MZWZ0XCI7XG4gICAgICAgIHNsaWRlci5hcmdzID0ge307XG4gICAgICAgIC8vIFNMSURFU0hPVzpcbiAgICAgICAgc2xpZGVyLm1hbnVhbFBhdXNlID0gZmFsc2U7XG4gICAgICAgIHNsaWRlci5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIC8vUEFVU0UgV0hFTiBJTlZJU0lCTEVcbiAgICAgICAgc2xpZGVyLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgc2xpZGVyLnN0YXJ0VGltZW91dCA9IG51bGw7XG4gICAgICAgIC8vIFRPVUNIL1VTRUNTUzpcbiAgICAgICAgc2xpZGVyLnRyYW5zaXRpb25zID0gIXNsaWRlci52YXJzLnZpZGVvICYmICFmYWRlICYmIHNsaWRlci52YXJzLnVzZUNTUyAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICBwcm9wcyA9IFsncGVyc3BlY3RpdmVQcm9wZXJ0eScsICdXZWJraXRQZXJzcGVjdGl2ZScsICdNb3pQZXJzcGVjdGl2ZScsICdPUGVyc3BlY3RpdmUnLCAnbXNQZXJzcGVjdGl2ZSddO1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmICggb2JqLnN0eWxlWyBwcm9wc1tpXSBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgIHNsaWRlci5wZnggPSBwcm9wc1tpXS5yZXBsYWNlKCdQZXJzcGVjdGl2ZScsJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIHNsaWRlci5wcm9wID0gXCItXCIgKyBzbGlkZXIucGZ4ICsgXCItdHJhbnNmb3JtXCI7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0oKSk7XG4gICAgICAgIHNsaWRlci5lbnN1cmVBbmltYXRpb25FbmQgPSAnJztcbiAgICAgICAgLy8gQ09OVFJPTFNDT05UQUlORVI6XG4gICAgICAgIGlmIChzbGlkZXIudmFycy5jb250cm9sc0NvbnRhaW5lciAhPT0gXCJcIikgc2xpZGVyLmNvbnRyb2xzQ29udGFpbmVyID0gJChzbGlkZXIudmFycy5jb250cm9sc0NvbnRhaW5lcikubGVuZ3RoID4gMCAmJiAkKHNsaWRlci52YXJzLmNvbnRyb2xzQ29udGFpbmVyKTtcbiAgICAgICAgLy8gTUFOVUFMOlxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMubWFudWFsQ29udHJvbHMgIT09IFwiXCIpIHNsaWRlci5tYW51YWxDb250cm9scyA9ICQoc2xpZGVyLnZhcnMubWFudWFsQ29udHJvbHMpLmxlbmd0aCA+IDAgJiYgJChzbGlkZXIudmFycy5tYW51YWxDb250cm9scyk7XG5cbiAgICAgICAgLy8gQ1VTVE9NIERJUkVDVElPTiBOQVY6XG4gICAgICAgIGlmIChzbGlkZXIudmFycy5jdXN0b21EaXJlY3Rpb25OYXYgIT09IFwiXCIpIHNsaWRlci5jdXN0b21EaXJlY3Rpb25OYXYgPSAkKHNsaWRlci52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikubGVuZ3RoID09PSAyICYmICQoc2xpZGVyLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KTtcblxuICAgICAgICAvLyBSQU5ET01JWkU6XG4gICAgICAgIGlmIChzbGlkZXIudmFycy5yYW5kb21pemUpIHtcbiAgICAgICAgICBzbGlkZXIuc2xpZGVzLnNvcnQoZnVuY3Rpb24oKSB7IHJldHVybiAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKS0wLjUpOyB9KTtcbiAgICAgICAgICBzbGlkZXIuY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKHNsaWRlci5zbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2xpZGVyLmRvTWF0aCgpO1xuXG4gICAgICAgIC8vIElOSVRcbiAgICAgICAgc2xpZGVyLnNldHVwKFwiaW5pdFwiKTtcblxuICAgICAgICAvLyBDT05UUk9MTkFWOlxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMuY29udHJvbE5hdikgeyBtZXRob2RzLmNvbnRyb2xOYXYuc2V0dXAoKTsgfVxuXG4gICAgICAgIC8vIERJUkVDVElPTk5BVjpcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLmRpcmVjdGlvbk5hdikgeyBtZXRob2RzLmRpcmVjdGlvbk5hdi5zZXR1cCgpOyB9XG5cbiAgICAgICAgLy8gS0VZQk9BUkQ6XG4gICAgICAgIGlmIChzbGlkZXIudmFycy5rZXlib2FyZCAmJiAoJChzbGlkZXIuY29udGFpbmVyU2VsZWN0b3IpLmxlbmd0aCA9PT0gMSB8fCBzbGlkZXIudmFycy5tdWx0aXBsZUtleWJvYXJkKSkge1xuICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXljb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICAgIGlmICghc2xpZGVyLmFuaW1hdGluZyAmJiAoa2V5Y29kZSA9PT0gMzkgfHwga2V5Y29kZSA9PT0gMzcpKSB7XG4gICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoa2V5Y29kZSA9PT0gMzkpID8gc2xpZGVyLmdldFRhcmdldCgnbmV4dCcpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXljb2RlID09PSAzNykgPyBzbGlkZXIuZ2V0VGFyZ2V0KCdwcmV2JykgOiBmYWxzZTtcbiAgICAgICAgICAgICAgc2xpZGVyLmZsZXhBbmltYXRlKHRhcmdldCwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTU9VU0VXSEVFTDpcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLm1vdXNld2hlZWwpIHtcbiAgICAgICAgICBzbGlkZXIuYmluZCgnbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGV2ZW50LCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGRlbHRhIDwgMCkgPyBzbGlkZXIuZ2V0VGFyZ2V0KCduZXh0JykgOiBzbGlkZXIuZ2V0VGFyZ2V0KCdwcmV2Jyk7XG4gICAgICAgICAgICBzbGlkZXIuZmxleEFuaW1hdGUodGFyZ2V0LCBzbGlkZXIudmFycy5wYXVzZU9uQWN0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBBVVNFUExBWVxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMucGF1c2VQbGF5KSB7IG1ldGhvZHMucGF1c2VQbGF5LnNldHVwKCk7IH1cblxuICAgICAgICAvL1BBVVNFIFdIRU4gSU5WSVNJQkxFXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5zbGlkZXNob3cgJiYgc2xpZGVyLnZhcnMucGF1c2VJbnZpc2libGUpIHsgbWV0aG9kcy5wYXVzZUludmlzaWJsZS5pbml0KCk7IH1cblxuICAgICAgICAvLyBTTElEU0VTSE9XXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5zbGlkZXNob3cpIHtcbiAgICAgICAgICBpZiAoc2xpZGVyLnZhcnMucGF1c2VPbkhvdmVyKSB7XG4gICAgICAgICAgICBzbGlkZXIuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICghc2xpZGVyLm1hbnVhbFBsYXkgJiYgIXNsaWRlci5tYW51YWxQYXVzZSkgeyBzbGlkZXIucGF1c2UoKTsgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICghc2xpZGVyLm1hbnVhbFBhdXNlICYmICFzbGlkZXIubWFudWFsUGxheSAmJiAhc2xpZGVyLnN0b3BwZWQpIHsgc2xpZGVyLnBsYXkoKTsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGluaXRpYWxpemUgYW5pbWF0aW9uXG4gICAgICAgICAgLy9JZiB3ZSdyZSB2aXNpYmxlLCBvciB3ZSBkb24ndCB1c2UgUGFnZVZpc2liaWxpdHkgQVBJXG4gICAgICAgICAgaWYoIXNsaWRlci52YXJzLnBhdXNlSW52aXNpYmxlIHx8ICFtZXRob2RzLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCkpIHtcbiAgICAgICAgICAgIChzbGlkZXIudmFycy5pbml0RGVsYXkgPiAwKSA/IHNsaWRlci5zdGFydFRpbWVvdXQgPSBzZXRUaW1lb3V0KHNsaWRlci5wbGF5LCBzbGlkZXIudmFycy5pbml0RGVsYXkpIDogc2xpZGVyLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBU05BVjpcbiAgICAgICAgaWYgKGFzTmF2KSB7IG1ldGhvZHMuYXNOYXYuc2V0dXAoKTsgfVxuXG4gICAgICAgIC8vIFRPVUNIXG4gICAgICAgIGlmICh0b3VjaCAmJiBzbGlkZXIudmFycy50b3VjaCkgeyBtZXRob2RzLnRvdWNoKCk7IH1cblxuICAgICAgICAvLyBGQURFJiZTTU9PVEhIRUlHSFQgfHwgU0xJREU6XG4gICAgICAgIGlmICghZmFkZSB8fCAoZmFkZSAmJiBzbGlkZXIudmFycy5zbW9vdGhIZWlnaHQpKSB7ICQod2luZG93KS5iaW5kKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIGZvY3VzXCIsIG1ldGhvZHMucmVzaXplKTsgfVxuXG4gICAgICAgIHNsaWRlci5maW5kKFwiaW1nXCIpLmF0dHIoXCJkcmFnZ2FibGVcIiwgXCJmYWxzZVwiKTtcblxuICAgICAgICAvLyBBUEk6IHN0YXJ0KCkgQ2FsbGJhY2tcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHNsaWRlci52YXJzLnN0YXJ0KHNsaWRlcik7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9LFxuICAgICAgYXNOYXY6IHtcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNsaWRlci5hc05hdiA9IHRydWU7XG4gICAgICAgICAgc2xpZGVyLmFuaW1hdGluZ1RvID0gTWF0aC5mbG9vcihzbGlkZXIuY3VycmVudFNsaWRlL3NsaWRlci5tb3ZlKTtcbiAgICAgICAgICBzbGlkZXIuY3VycmVudEl0ZW0gPSBzbGlkZXIuY3VycmVudFNsaWRlO1xuICAgICAgICAgIHNsaWRlci5zbGlkZXMucmVtb3ZlQ2xhc3MobmFtZXNwYWNlICsgXCJhY3RpdmUtc2xpZGVcIikuZXEoc2xpZGVyLmN1cnJlbnRJdGVtKS5hZGRDbGFzcyhuYW1lc3BhY2UgKyBcImFjdGl2ZS1zbGlkZVwiKTtcbiAgICAgICAgICBpZighbXNHZXN0dXJlKXtcbiAgICAgICAgICAgICAgc2xpZGVyLnNsaWRlcy5vbihldmVudFR5cGUsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgJHNsaWRlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gJHNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgdmFyIHBvc0Zyb21MZWZ0ID0gJHNsaWRlLm9mZnNldCgpLmxlZnQgLSAkKHNsaWRlcikuc2Nyb2xsTGVmdCgpOyAvLyBGaW5kIHBvc2l0aW9uIG9mIHNsaWRlIHJlbGF0aXZlIHRvIGxlZnQgb2Ygc2xpZGVyIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGlmKCBwb3NGcm9tTGVmdCA8PSAwICYmICRzbGlkZS5oYXNDbGFzcyggbmFtZXNwYWNlICsgJ2FjdGl2ZS1zbGlkZScgKSApIHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlci5mbGV4QW5pbWF0ZShzbGlkZXIuZ2V0VGFyZ2V0KFwicHJldlwiKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghJChzbGlkZXIudmFycy5hc05hdkZvcikuZGF0YSgnZmxleHNsaWRlcicpLmFuaW1hdGluZyAmJiAhJHNsaWRlLmhhc0NsYXNzKG5hbWVzcGFjZSArIFwiYWN0aXZlLXNsaWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uID0gKHNsaWRlci5jdXJyZW50SXRlbSA8IHRhcmdldCkgPyBcIm5leHRcIiA6IFwicHJldlwiO1xuICAgICAgICAgICAgICAgICAgc2xpZGVyLmZsZXhBbmltYXRlKHRhcmdldCwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbiwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGVsLl9zbGlkZXIgPSBzbGlkZXI7XG4gICAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuZWFjaChmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgIHRoYXQuX2dlc3R1cmUgPSBuZXcgTVNHZXN0dXJlKCk7XG4gICAgICAgICAgICAgICAgICB0aGF0Ll9nZXN0dXJlLnRhcmdldCA9IHRoYXQ7XG4gICAgICAgICAgICAgICAgICB0aGF0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0Ll9nZXN0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUuYWRkUG9pbnRlcihlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgdGhhdC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlVGFwXCIsIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRzbGlkZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9ICRzbGlkZS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghJChzbGlkZXIudmFycy5hc05hdkZvcikuZGF0YSgnZmxleHNsaWRlcicpLmFuaW1hdGluZyAmJiAhJHNsaWRlLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uID0gKHNsaWRlci5jdXJyZW50SXRlbSA8IHRhcmdldCkgPyBcIm5leHRcIiA6IFwicHJldlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZmxleEFuaW1hdGUodGFyZ2V0LCBzbGlkZXIudmFycy5wYXVzZU9uQWN0aW9uLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRyb2xOYXY6IHtcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghc2xpZGVyLm1hbnVhbENvbnRyb2xzKSB7XG4gICAgICAgICAgICBtZXRob2RzLmNvbnRyb2xOYXYuc2V0dXBQYWdpbmcoKTtcbiAgICAgICAgICB9IGVsc2UgeyAvLyBNQU5VQUxDT05UUk9MUzpcbiAgICAgICAgICAgIG1ldGhvZHMuY29udHJvbE5hdi5zZXR1cE1hbnVhbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0dXBQYWdpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0eXBlID0gKHNsaWRlci52YXJzLmNvbnRyb2xOYXYgPT09IFwidGh1bWJuYWlsc1wiKSA/ICdjb250cm9sLXRodW1icycgOiAnY29udHJvbC1wYWdpbmcnLFxuICAgICAgICAgICAgICBqID0gMSxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgc2xpZGU7XG5cbiAgICAgICAgICBzbGlkZXIuY29udHJvbE5hdlNjYWZmb2xkID0gJCgnPG9sIGNsYXNzPVwiJysgbmFtZXNwYWNlICsgJ2NvbnRyb2wtbmF2ICcgKyBuYW1lc3BhY2UgKyB0eXBlICsgJ1wiPjwvb2w+Jyk7XG5cbiAgICAgICAgICBpZiAoc2xpZGVyLnBhZ2luZ0NvdW50ID4gMSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXIucGFnaW5nQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICBzbGlkZSA9IHNsaWRlci5zbGlkZXMuZXEoaSk7XG4gICAgICAgICAgICAgIGl0ZW0gPSAoc2xpZGVyLnZhcnMuY29udHJvbE5hdiA9PT0gXCJ0aHVtYm5haWxzXCIpID8gJzxpbWcgc3JjPVwiJyArIHNsaWRlLmF0dHIoICdkYXRhLXRodW1iJyApICsgJ1wiLz4nIDogJzxhPicgKyBqICsgJzwvYT4nO1xuICAgICAgICAgICAgICBpZiAoICd0aHVtYm5haWxzJyA9PT0gc2xpZGVyLnZhcnMuY29udHJvbE5hdiAmJiB0cnVlID09PSBzbGlkZXIudmFycy50aHVtYkNhcHRpb25zICkge1xuICAgICAgICAgICAgICAgIHZhciBjYXB0biA9IHNsaWRlLmF0dHIoICdkYXRhLXRodW1iY2FwdGlvbicgKTtcbiAgICAgICAgICAgICAgICBpZiAoICcnICE9PSBjYXB0biAmJiB1bmRlZmluZWQgIT09IGNhcHRuICkgeyBpdGVtICs9ICc8c3BhbiBjbGFzcz1cIicgKyBuYW1lc3BhY2UgKyAnY2FwdGlvblwiPicgKyBjYXB0biArICc8L3NwYW4+JzsgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNsaWRlci5jb250cm9sTmF2U2NhZmZvbGQuYXBwZW5kKCc8bGk+JyArIGl0ZW0gKyAnPC9saT4nKTtcbiAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENPTlRST0xTQ09OVEFJTkVSOlxuICAgICAgICAgIChzbGlkZXIuY29udHJvbHNDb250YWluZXIpID8gJChzbGlkZXIuY29udHJvbHNDb250YWluZXIpLmFwcGVuZChzbGlkZXIuY29udHJvbE5hdlNjYWZmb2xkKSA6IHNsaWRlci5hcHBlbmQoc2xpZGVyLmNvbnRyb2xOYXZTY2FmZm9sZCk7XG4gICAgICAgICAgbWV0aG9kcy5jb250cm9sTmF2LnNldCgpO1xuXG4gICAgICAgICAgbWV0aG9kcy5jb250cm9sTmF2LmFjdGl2ZSgpO1xuXG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xOYXZTY2FmZm9sZC5kZWxlZ2F0ZSgnYSwgaW1nJywgZXZlbnRUeXBlLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHdhdGNoZWRFdmVudCA9PT0gXCJcIiB8fCB3YXRjaGVkRXZlbnQgPT09IGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHNsaWRlci5jb250cm9sTmF2LmluZGV4KCR0aGlzKTtcblxuICAgICAgICAgICAgICBpZiAoISR0aGlzLmhhc0NsYXNzKG5hbWVzcGFjZSArICdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHNsaWRlci5kaXJlY3Rpb24gPSAodGFyZ2V0ID4gc2xpZGVyLmN1cnJlbnRTbGlkZSkgPyBcIm5leHRcIiA6IFwicHJldlwiO1xuICAgICAgICAgICAgICAgIHNsaWRlci5mbGV4QW5pbWF0ZSh0YXJnZXQsIHNsaWRlci52YXJzLnBhdXNlT25BY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNldHVwIGZsYWdzIHRvIHByZXZlbnQgZXZlbnQgZHVwbGljYXRpb25cbiAgICAgICAgICAgIGlmICh3YXRjaGVkRXZlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgd2F0Y2hlZEV2ZW50ID0gZXZlbnQudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1ldGhvZHMuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpO1xuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldHVwTWFudWFsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzbGlkZXIuY29udHJvbE5hdiA9IHNsaWRlci5tYW51YWxDb250cm9scztcbiAgICAgICAgICBtZXRob2RzLmNvbnRyb2xOYXYuYWN0aXZlKCk7XG5cbiAgICAgICAgICBzbGlkZXIuY29udHJvbE5hdi5iaW5kKGV2ZW50VHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICh3YXRjaGVkRXZlbnQgPT09IFwiXCIgfHwgd2F0Y2hlZEV2ZW50ID09PSBldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICB0YXJnZXQgPSBzbGlkZXIuY29udHJvbE5hdi5pbmRleCgkdGhpcyk7XG5cbiAgICAgICAgICAgICAgaWYgKCEkdGhpcy5oYXNDbGFzcyhuYW1lc3BhY2UgKyAnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAodGFyZ2V0ID4gc2xpZGVyLmN1cnJlbnRTbGlkZSkgPyBzbGlkZXIuZGlyZWN0aW9uID0gXCJuZXh0XCIgOiBzbGlkZXIuZGlyZWN0aW9uID0gXCJwcmV2XCI7XG4gICAgICAgICAgICAgICAgc2xpZGVyLmZsZXhBbmltYXRlKHRhcmdldCwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2V0dXAgZmxhZ3MgdG8gcHJldmVudCBldmVudCBkdXBsaWNhdGlvblxuICAgICAgICAgICAgaWYgKHdhdGNoZWRFdmVudCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICB3YXRjaGVkRXZlbnQgPSBldmVudC50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWV0aG9kcy5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHNlbGVjdG9yID0gKHNsaWRlci52YXJzLmNvbnRyb2xOYXYgPT09IFwidGh1bWJuYWlsc1wiKSA/ICdpbWcnIDogJ2EnO1xuICAgICAgICAgIHNsaWRlci5jb250cm9sTmF2ID0gJCgnLicgKyBuYW1lc3BhY2UgKyAnY29udHJvbC1uYXYgbGkgJyArIHNlbGVjdG9yLCAoc2xpZGVyLmNvbnRyb2xzQ29udGFpbmVyKSA/IHNsaWRlci5jb250cm9sc0NvbnRhaW5lciA6IHNsaWRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xOYXYucmVtb3ZlQ2xhc3MobmFtZXNwYWNlICsgXCJhY3RpdmVcIikuZXEoc2xpZGVyLmFuaW1hdGluZ1RvKS5hZGRDbGFzcyhuYW1lc3BhY2UgKyBcImFjdGl2ZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihhY3Rpb24sIHBvcykge1xuICAgICAgICAgIGlmIChzbGlkZXIucGFnaW5nQ291bnQgPiAxICYmIGFjdGlvbiA9PT0gXCJhZGRcIikge1xuICAgICAgICAgICAgc2xpZGVyLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoJCgnPGxpPjxhPicgKyBzbGlkZXIuY291bnQgKyAnPC9hPjwvbGk+JykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLnBhZ2luZ0NvdW50ID09PSAxKSB7XG4gICAgICAgICAgICBzbGlkZXIuY29udHJvbE5hdlNjYWZmb2xkLmZpbmQoJ2xpJykucmVtb3ZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5jb250cm9sTmF2LmVxKHBvcykuY2xvc2VzdCgnbGknKS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWV0aG9kcy5jb250cm9sTmF2LnNldCgpO1xuICAgICAgICAgIChzbGlkZXIucGFnaW5nQ291bnQgPiAxICYmIHNsaWRlci5wYWdpbmdDb3VudCAhPT0gc2xpZGVyLmNvbnRyb2xOYXYubGVuZ3RoKSA/IHNsaWRlci51cGRhdGUocG9zLCBhY3Rpb24pIDogbWV0aG9kcy5jb250cm9sTmF2LmFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlyZWN0aW9uTmF2OiB7XG4gICAgICAgIHNldHVwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZGlyZWN0aW9uTmF2U2NhZmZvbGQgPSAkKCc8dWwgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ2RpcmVjdGlvbi1uYXZcIj48bGkgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ25hdi1wcmV2XCI+PGEgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ3ByZXZcIiBocmVmPVwiI1wiPicgKyBzbGlkZXIudmFycy5wcmV2VGV4dCArICc8L2E+PC9saT48bGkgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ25hdi1uZXh0XCI+PGEgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ25leHRcIiBocmVmPVwiI1wiPicgKyBzbGlkZXIudmFycy5uZXh0VGV4dCArICc8L2E+PC9saT48L3VsPicpO1xuXG4gICAgICAgICAgLy8gQ1VTVE9NIERJUkVDVElPTiBOQVY6XG4gICAgICAgICAgaWYgKHNsaWRlci5jdXN0b21EaXJlY3Rpb25OYXYpIHtcbiAgICAgICAgICAgIHNsaWRlci5kaXJlY3Rpb25OYXYgPSBzbGlkZXIuY3VzdG9tRGlyZWN0aW9uTmF2O1xuICAgICAgICAgIC8vIENPTlRST0xTQ09OVEFJTkVSOlxuICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmNvbnRyb2xzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAkKHNsaWRlci5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKGRpcmVjdGlvbk5hdlNjYWZmb2xkKTtcbiAgICAgICAgICAgIHNsaWRlci5kaXJlY3Rpb25OYXYgPSAkKCcuJyArIG5hbWVzcGFjZSArICdkaXJlY3Rpb24tbmF2IGxpIGEnLCBzbGlkZXIuY29udHJvbHNDb250YWluZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKGRpcmVjdGlvbk5hdlNjYWZmb2xkKTtcbiAgICAgICAgICAgIHNsaWRlci5kaXJlY3Rpb25OYXYgPSAkKCcuJyArIG5hbWVzcGFjZSArICdkaXJlY3Rpb24tbmF2IGxpIGEnLCBzbGlkZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1ldGhvZHMuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpO1xuXG4gICAgICAgICAgc2xpZGVyLmRpcmVjdGlvbk5hdi5iaW5kKGV2ZW50VHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0O1xuXG4gICAgICAgICAgICBpZiAod2F0Y2hlZEV2ZW50ID09PSBcIlwiIHx8IHdhdGNoZWRFdmVudCA9PT0gZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSAoJCh0aGlzKS5oYXNDbGFzcyhuYW1lc3BhY2UgKyAnbmV4dCcpKSA/IHNsaWRlci5nZXRUYXJnZXQoJ25leHQnKSA6IHNsaWRlci5nZXRUYXJnZXQoJ3ByZXYnKTtcbiAgICAgICAgICAgICAgc2xpZGVyLmZsZXhBbmltYXRlKHRhcmdldCwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNldHVwIGZsYWdzIHRvIHByZXZlbnQgZXZlbnQgZHVwbGljYXRpb25cbiAgICAgICAgICAgIGlmICh3YXRjaGVkRXZlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgd2F0Y2hlZEV2ZW50ID0gZXZlbnQudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1ldGhvZHMuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBkaXNhYmxlZENsYXNzID0gbmFtZXNwYWNlICsgJ2Rpc2FibGVkJztcbiAgICAgICAgICBpZiAoc2xpZGVyLnBhZ2luZ0NvdW50ID09PSAxKSB7XG4gICAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uTmF2LmFkZENsYXNzKGRpc2FibGVkQ2xhc3MpLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgfSBlbHNlIGlmICghc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCkge1xuICAgICAgICAgICAgaWYgKHNsaWRlci5hbmltYXRpbmdUbyA9PT0gMCkge1xuICAgICAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGRpc2FibGVkQ2xhc3MpLmZpbHRlcignLicgKyBuYW1lc3BhY2UgKyBcInByZXZcIikuYWRkQ2xhc3MoZGlzYWJsZWRDbGFzcykuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmFuaW1hdGluZ1RvID09PSBzbGlkZXIubGFzdCkge1xuICAgICAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGRpc2FibGVkQ2xhc3MpLmZpbHRlcignLicgKyBuYW1lc3BhY2UgKyBcIm5leHRcIikuYWRkQ2xhc3MoZGlzYWJsZWRDbGFzcykuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNsaWRlci5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZGlzYWJsZWRDbGFzcykucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhkaXNhYmxlZENsYXNzKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBhdXNlUGxheToge1xuICAgICAgICBzZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHBhdXNlUGxheVNjYWZmb2xkID0gJCgnPGRpdiBjbGFzcz1cIicgKyBuYW1lc3BhY2UgKyAncGF1c2VwbGF5XCI+PGE+PC9hPjwvZGl2PicpO1xuXG4gICAgICAgICAgLy8gQ09OVFJPTFNDT05UQUlORVI6XG4gICAgICAgICAgaWYgKHNsaWRlci5jb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgc2xpZGVyLmNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZChwYXVzZVBsYXlTY2FmZm9sZCk7XG4gICAgICAgICAgICBzbGlkZXIucGF1c2VQbGF5ID0gJCgnLicgKyBuYW1lc3BhY2UgKyAncGF1c2VwbGF5IGEnLCBzbGlkZXIuY29udHJvbHNDb250YWluZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbGlkZXIuYXBwZW5kKHBhdXNlUGxheVNjYWZmb2xkKTtcbiAgICAgICAgICAgIHNsaWRlci5wYXVzZVBsYXkgPSAkKCcuJyArIG5hbWVzcGFjZSArICdwYXVzZXBsYXkgYScsIHNsaWRlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWV0aG9kcy5wYXVzZVBsYXkudXBkYXRlKChzbGlkZXIudmFycy5zbGlkZXNob3cpID8gbmFtZXNwYWNlICsgJ3BhdXNlJyA6IG5hbWVzcGFjZSArICdwbGF5Jyk7XG5cbiAgICAgICAgICBzbGlkZXIucGF1c2VQbGF5LmJpbmQoZXZlbnRUeXBlLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHdhdGNoZWRFdmVudCA9PT0gXCJcIiB8fCB3YXRjaGVkRXZlbnQgPT09IGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MobmFtZXNwYWNlICsgJ3BhdXNlJykpIHtcbiAgICAgICAgICAgICAgICBzbGlkZXIubWFudWFsUGF1c2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNsaWRlci5tYW51YWxQbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2xpZGVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyLm1hbnVhbFBhdXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2xpZGVyLm1hbnVhbFBsYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNsaWRlci5wbGF5KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2V0dXAgZmxhZ3MgdG8gcHJldmVudCBldmVudCBkdXBsaWNhdGlvblxuICAgICAgICAgICAgaWYgKHdhdGNoZWRFdmVudCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICB3YXRjaGVkRXZlbnQgPSBldmVudC50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWV0aG9kcy5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAoc3RhdGUgPT09IFwicGxheVwiKSA/IHNsaWRlci5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MobmFtZXNwYWNlICsgJ3BhdXNlJykuYWRkQ2xhc3MobmFtZXNwYWNlICsgJ3BsYXknKS5odG1sKHNsaWRlci52YXJzLnBsYXlUZXh0KSA6IHNsaWRlci5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MobmFtZXNwYWNlICsgJ3BsYXknKS5hZGRDbGFzcyhuYW1lc3BhY2UgKyAncGF1c2UnKS5odG1sKHNsaWRlci52YXJzLnBhdXNlVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b3VjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdGFydFgsXG4gICAgICAgICAgc3RhcnRZLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICBjd2lkdGgsXG4gICAgICAgICAgZHgsXG4gICAgICAgICAgc3RhcnRULFxuICAgICAgICAgIG9uVG91Y2hTdGFydCxcbiAgICAgICAgICBvblRvdWNoTW92ZSxcbiAgICAgICAgICBvblRvdWNoRW5kLFxuICAgICAgICAgIHNjcm9sbGluZyA9IGZhbHNlLFxuICAgICAgICAgIGxvY2FsWCA9IDAsXG4gICAgICAgICAgbG9jYWxZID0gMCxcbiAgICAgICAgICBhY2NEeCA9IDA7XG5cbiAgICAgICAgaWYoIW1zR2VzdHVyZSl7XG4gICAgICAgICAgICBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCApIHx8IGUudG91Y2hlcy5sZW5ndGggPT09IDEgKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgLy8gQ0FST1VTRUw6XG4gICAgICAgICAgICAgICAgY3dpZHRoID0gKHZlcnRpY2FsKSA/IHNsaWRlci5oIDogc2xpZGVyLiB3O1xuICAgICAgICAgICAgICAgIHN0YXJ0VCA9IE51bWJlcihuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAvLyBDQVJPVVNFTDpcblxuICAgICAgICAgICAgICAgIC8vIExvY2FsIHZhcnMgZm9yIFggYW5kIFkgcG9pbnRzLlxuICAgICAgICAgICAgICAgIGxvY2FsWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBsb2NhbFkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAoY2Fyb3VzZWwgJiYgcmV2ZXJzZSAmJiBzbGlkZXIuYW5pbWF0aW5nVG8gPT09IHNsaWRlci5sYXN0KSA/IDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIChjYXJvdXNlbCAmJiByZXZlcnNlKSA/IHNsaWRlci5saW1pdCAtICgoKHNsaWRlci5pdGVtVyArIHNsaWRlci52YXJzLml0ZW1NYXJnaW4pICogc2xpZGVyLm1vdmUpICogc2xpZGVyLmFuaW1hdGluZ1RvKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNhcm91c2VsICYmIHNsaWRlci5jdXJyZW50U2xpZGUgPT09IHNsaWRlci5sYXN0KSA/IHNsaWRlci5saW1pdCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNhcm91c2VsKSA/ICgoc2xpZGVyLml0ZW1XICsgc2xpZGVyLnZhcnMuaXRlbU1hcmdpbikgKiBzbGlkZXIubW92ZSkgKiBzbGlkZXIuY3VycmVudFNsaWRlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAocmV2ZXJzZSkgPyAoc2xpZGVyLmxhc3QgLSBzbGlkZXIuY3VycmVudFNsaWRlICsgc2xpZGVyLmNsb25lT2Zmc2V0KSAqIGN3aWR0aCA6IChzbGlkZXIuY3VycmVudFNsaWRlICsgc2xpZGVyLmNsb25lT2Zmc2V0KSAqIGN3aWR0aDtcbiAgICAgICAgICAgICAgICBzdGFydFggPSAodmVydGljYWwpID8gbG9jYWxZIDogbG9jYWxYO1xuICAgICAgICAgICAgICAgIHN0YXJ0WSA9ICh2ZXJ0aWNhbCkgPyBsb2NhbFggOiBsb2NhbFk7XG5cbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBvblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgLy8gTG9jYWwgdmFycyBmb3IgWCBhbmQgWSBwb2ludHMuXG5cbiAgICAgICAgICAgICAgbG9jYWxYID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICBsb2NhbFkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICAgICAgICAgICAgZHggPSAodmVydGljYWwpID8gc3RhcnRYIC0gbG9jYWxZIDogc3RhcnRYIC0gbG9jYWxYO1xuICAgICAgICAgICAgICBzY3JvbGxpbmcgPSAodmVydGljYWwpID8gKE1hdGguYWJzKGR4KSA8IE1hdGguYWJzKGxvY2FsWCAtIHN0YXJ0WSkpIDogKE1hdGguYWJzKGR4KSA8IE1hdGguYWJzKGxvY2FsWSAtIHN0YXJ0WSkpO1xuXG4gICAgICAgICAgICAgIHZhciBmeG1zID0gNTAwO1xuXG4gICAgICAgICAgICAgIGlmICggISBzY3JvbGxpbmcgfHwgTnVtYmVyKCBuZXcgRGF0ZSgpICkgLSBzdGFydFQgPiBmeG1zICkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZhZGUgJiYgc2xpZGVyLnRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXNsaWRlci52YXJzLmFuaW1hdGlvbkxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgZHggPSBkeC8oKHNsaWRlci5jdXJyZW50U2xpZGUgPT09IDAgJiYgZHggPCAwIHx8IHNsaWRlci5jdXJyZW50U2xpZGUgPT09IHNsaWRlci5sYXN0ICYmIGR4ID4gMCkgPyAoTWF0aC5hYnMoZHgpL2N3aWR0aCsyKSA6IDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2xpZGVyLnNldFByb3BzKG9mZnNldCArIGR4LCBcInNldFRvdWNoXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgb25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgLy8gZmluaXNoIHRoZSB0b3VjaCBieSB1bmRvaW5nIHRoZSB0b3VjaCBzZXNzaW9uXG4gICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHNsaWRlci5hbmltYXRpbmdUbyA9PT0gc2xpZGVyLmN1cnJlbnRTbGlkZSAmJiAhc2Nyb2xsaW5nICYmICEoZHggPT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZUR4ID0gKHJldmVyc2UpID8gLWR4IDogZHgsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9ICh1cGRhdGVEeCA+IDApID8gc2xpZGVyLmdldFRhcmdldCgnbmV4dCcpIDogc2xpZGVyLmdldFRhcmdldCgncHJldicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlci5jYW5BZHZhbmNlKHRhcmdldCkgJiYgKE51bWJlcihuZXcgRGF0ZSgpKSAtIHN0YXJ0VCA8IDU1MCAmJiBNYXRoLmFicyh1cGRhdGVEeCkgPiA1MCB8fCBNYXRoLmFicyh1cGRhdGVEeCkgPiBjd2lkdGgvMikpIHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlci5mbGV4QW5pbWF0ZSh0YXJnZXQsIHNsaWRlci52YXJzLnBhdXNlT25BY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWZhZGUpIHsgc2xpZGVyLmZsZXhBbmltYXRlKHNsaWRlci5jdXJyZW50U2xpZGUsIHNsaWRlci52YXJzLnBhdXNlT25BY3Rpb24sIHRydWUpOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgIHN0YXJ0WCA9IG51bGw7XG4gICAgICAgICAgICAgIHN0YXJ0WSA9IG51bGw7XG4gICAgICAgICAgICAgIGR4ID0gbnVsbDtcbiAgICAgICAgICAgICAgb2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlbC5zdHlsZS5tc1RvdWNoQWN0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbC5fZ2VzdHVyZSA9IG5ldyBNU0dlc3R1cmUoKTtcbiAgICAgICAgICAgIGVsLl9nZXN0dXJlLnRhcmdldCA9IGVsO1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIiwgb25NU1BvaW50ZXJEb3duLCBmYWxzZSk7XG4gICAgICAgICAgICBlbC5fc2xpZGVyID0gc2xpZGVyO1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUNoYW5nZVwiLCBvbk1TR2VzdHVyZUNoYW5nZSwgZmFsc2UpO1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUVuZFwiLCBvbk1TR2VzdHVyZUVuZCwgZmFsc2UpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1TUG9pbnRlckRvd24oZSl7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgYWNjRHggPSAwO1xuICAgICAgICAgICAgICAgICAgICBjd2lkdGggPSAodmVydGljYWwpID8gc2xpZGVyLmggOiBzbGlkZXIuIHc7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VCA9IE51bWJlcihuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ0FST1VTRUw6XG5cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gKGNhcm91c2VsICYmIHJldmVyc2UgJiYgc2xpZGVyLmFuaW1hdGluZ1RvID09PSBzbGlkZXIubGFzdCkgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChjYXJvdXNlbCAmJiByZXZlcnNlKSA/IHNsaWRlci5saW1pdCAtICgoKHNsaWRlci5pdGVtVyArIHNsaWRlci52YXJzLml0ZW1NYXJnaW4pICogc2xpZGVyLm1vdmUpICogc2xpZGVyLmFuaW1hdGluZ1RvKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhcm91c2VsICYmIHNsaWRlci5jdXJyZW50U2xpZGUgPT09IHNsaWRlci5sYXN0KSA/IHNsaWRlci5saW1pdCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYXJvdXNlbCkgPyAoKHNsaWRlci5pdGVtVyArIHNsaWRlci52YXJzLml0ZW1NYXJnaW4pICogc2xpZGVyLm1vdmUpICogc2xpZGVyLmN1cnJlbnRTbGlkZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmV2ZXJzZSkgPyAoc2xpZGVyLmxhc3QgLSBzbGlkZXIuY3VycmVudFNsaWRlICsgc2xpZGVyLmNsb25lT2Zmc2V0KSAqIGN3aWR0aCA6IChzbGlkZXIuY3VycmVudFNsaWRlICsgc2xpZGVyLmNsb25lT2Zmc2V0KSAqIGN3aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTVNHZXN0dXJlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZXIgPSBlLnRhcmdldC5fc2xpZGVyO1xuICAgICAgICAgICAgICAgIGlmKCFzbGlkZXIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0cmFuc1ggPSAtZS50cmFuc2xhdGlvblgsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zWSA9IC1lLnRyYW5zbGF0aW9uWTtcblxuICAgICAgICAgICAgICAgIC8vQWNjdW11bGF0ZSB0cmFuc2xhdGlvbnMuXG4gICAgICAgICAgICAgICAgYWNjRHggPSBhY2NEeCArICgodmVydGljYWwpID8gdHJhbnNZIDogdHJhbnNYKTtcbiAgICAgICAgICAgICAgICBkeCA9IGFjY0R4O1xuICAgICAgICAgICAgICAgIHNjcm9sbGluZyA9ICh2ZXJ0aWNhbCkgPyAoTWF0aC5hYnMoYWNjRHgpIDwgTWF0aC5hYnMoLXRyYW5zWCkpIDogKE1hdGguYWJzKGFjY0R4KSA8IE1hdGguYWJzKC10cmFuc1kpKTtcblxuICAgICAgICAgICAgICAgIGlmKGUuZGV0YWlsID09PSBlLk1TR0VTVFVSRV9GTEFHX0lORVJUSUEpe1xuICAgICAgICAgICAgICAgICAgICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5fZ2VzdHVyZS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNjcm9sbGluZyB8fCBOdW1iZXIobmV3IERhdGUoKSkgLSBzdGFydFQgPiA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZhZGUgJiYgc2xpZGVyLnRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNsaWRlci52YXJzLmFuaW1hdGlvbkxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeCA9IGFjY0R4IC8gKChzbGlkZXIuY3VycmVudFNsaWRlID09PSAwICYmIGFjY0R4IDwgMCB8fCBzbGlkZXIuY3VycmVudFNsaWRlID09PSBzbGlkZXIubGFzdCAmJiBhY2NEeCA+IDApID8gKE1hdGguYWJzKGFjY0R4KSAvIGN3aWR0aCArIDIpIDogMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIuc2V0UHJvcHMob2Zmc2V0ICsgZHgsIFwic2V0VG91Y2hcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTVNHZXN0dXJlRW5kKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZXIgPSBlLnRhcmdldC5fc2xpZGVyO1xuICAgICAgICAgICAgICAgIGlmKCFzbGlkZXIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXIuYW5pbWF0aW5nVG8gPT09IHNsaWRlci5jdXJyZW50U2xpZGUgJiYgIXNjcm9sbGluZyAmJiAhKGR4ID09PSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlRHggPSAocmV2ZXJzZSkgPyAtZHggOiBkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9ICh1cGRhdGVEeCA+IDApID8gc2xpZGVyLmdldFRhcmdldCgnbmV4dCcpIDogc2xpZGVyLmdldFRhcmdldCgncHJldicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZXIuY2FuQWR2YW5jZSh0YXJnZXQpICYmIChOdW1iZXIobmV3IERhdGUoKSkgLSBzdGFydFQgPCA1NTAgJiYgTWF0aC5hYnModXBkYXRlRHgpID4gNTAgfHwgTWF0aC5hYnModXBkYXRlRHgpID4gY3dpZHRoLzIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZmxleEFuaW1hdGUodGFyZ2V0LCBzbGlkZXIudmFycy5wYXVzZU9uQWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmFkZSkgeyBzbGlkZXIuZmxleEFuaW1hdGUoc2xpZGVyLmN1cnJlbnRTbGlkZSwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbiwgdHJ1ZSk7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0YXJ0WCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3RhcnRZID0gbnVsbDtcbiAgICAgICAgICAgICAgICBkeCA9IG51bGw7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBhY2NEeCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXNsaWRlci5hbmltYXRpbmcgJiYgc2xpZGVyLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgaWYgKCFjYXJvdXNlbCkgeyBzbGlkZXIuZG9NYXRoKCk7IH1cblxuICAgICAgICAgIGlmIChmYWRlKSB7XG4gICAgICAgICAgICAvLyBTTU9PVEggSEVJR0hUOlxuICAgICAgICAgICAgbWV0aG9kcy5zbW9vdGhIZWlnaHQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNhcm91c2VsKSB7IC8vQ0FST1VTRUw6XG4gICAgICAgICAgICBzbGlkZXIuc2xpZGVzLndpZHRoKHNsaWRlci5jb21wdXRlZFcpO1xuICAgICAgICAgICAgc2xpZGVyLnVwZGF0ZShzbGlkZXIucGFnaW5nQ291bnQpO1xuICAgICAgICAgICAgc2xpZGVyLnNldFByb3BzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHZlcnRpY2FsKSB7IC8vVkVSVElDQUw6XG4gICAgICAgICAgICBzbGlkZXIudmlld3BvcnQuaGVpZ2h0KHNsaWRlci5oKTtcbiAgICAgICAgICAgIHNsaWRlci5zZXRQcm9wcyhzbGlkZXIuaCwgXCJzZXRUb3RhbFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU01PT1RIIEhFSUdIVDpcbiAgICAgICAgICAgIGlmIChzbGlkZXIudmFycy5zbW9vdGhIZWlnaHQpIHsgbWV0aG9kcy5zbW9vdGhIZWlnaHQoKTsgfVxuICAgICAgICAgICAgc2xpZGVyLm5ld1NsaWRlcy53aWR0aChzbGlkZXIuY29tcHV0ZWRXKTtcbiAgICAgICAgICAgIHNsaWRlci5zZXRQcm9wcyhzbGlkZXIuY29tcHV0ZWRXLCBcInNldFRvdGFsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNtb290aEhlaWdodDogZnVuY3Rpb24oZHVyKSB7XG4gICAgICAgIGlmICghdmVydGljYWwgfHwgZmFkZSkge1xuICAgICAgICAgIHZhciAkb2JqID0gKGZhZGUpID8gc2xpZGVyIDogc2xpZGVyLnZpZXdwb3J0O1xuICAgICAgICAgIChkdXIpID8gJG9iai5hbmltYXRlKHtcImhlaWdodFwiOiBzbGlkZXIuc2xpZGVzLmVxKHNsaWRlci5hbmltYXRpbmdUbykuaGVpZ2h0KCl9LCBkdXIpIDogJG9iai5oZWlnaHQoc2xpZGVyLnNsaWRlcy5lcShzbGlkZXIuYW5pbWF0aW5nVG8pLmhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN5bmM6IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICB2YXIgJG9iaiA9ICQoc2xpZGVyLnZhcnMuc3luYykuZGF0YShcImZsZXhzbGlkZXJcIiksXG4gICAgICAgICAgICB0YXJnZXQgPSBzbGlkZXIuYW5pbWF0aW5nVG87XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIFwiYW5pbWF0ZVwiOiAkb2JqLmZsZXhBbmltYXRlKHRhcmdldCwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbiwgZmFsc2UsIHRydWUpOyBicmVhaztcbiAgICAgICAgICBjYXNlIFwicGxheVwiOiBpZiAoISRvYmoucGxheWluZyAmJiAhJG9iai5hc05hdikgeyAkb2JqLnBsYXkoKTsgfSBicmVhaztcbiAgICAgICAgICBjYXNlIFwicGF1c2VcIjogJG9iai5wYXVzZSgpOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVuaXF1ZUlEOiBmdW5jdGlvbigkY2xvbmUpIHtcbiAgICAgICAgLy8gQXBwZW5kIF9jbG9uZSB0byBjdXJyZW50IGxldmVsIGFuZCBjaGlsZHJlbiBlbGVtZW50cyB3aXRoIGlkIGF0dHJpYnV0ZXNcbiAgICAgICAgJGNsb25lLmZpbHRlciggJ1tpZF0nICkuYWRkKCRjbG9uZS5maW5kKCAnW2lkXScgKSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICR0aGlzLmF0dHIoICdpZCcsICR0aGlzLmF0dHIoICdpZCcgKSArICdfY2xvbmUnICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gJGNsb25lO1xuICAgICAgfSxcbiAgICAgIHBhdXNlSW52aXNpYmxlOiB7XG4gICAgICAgIHZpc1Byb3A6IG51bGwsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2aXNQcm9wID0gbWV0aG9kcy5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7XG4gICAgICAgICAgaWYgKHZpc1Byb3ApIHtcbiAgICAgICAgICAgIHZhciBldnRuYW1lID0gdmlzUHJvcC5yZXBsYWNlKC9bSHxoXWlkZGVuLywnJykgKyAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2dG5hbWUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAobWV0aG9kcy5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpKSB7XG4gICAgICAgICAgICAgICAgaWYoc2xpZGVyLnN0YXJ0VGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNsaWRlci5zdGFydFRpbWVvdXQpOyAvL0lmIGNsb2NrIGlzIHRpY2tpbmcsIHN0b3AgdGltZXIgYW5kIHByZXZlbnQgZnJvbSBzdGFydGluZyB3aGlsZSBpbnZpc2libGVcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgICAgICAgIHNsaWRlci5wYXVzZSgpOyAvL09yIGp1c3QgcGF1c2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoc2xpZGVyLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlci5wbGF5KCk7IC8vSW5pdGlhdGVkIGJlZm9yZSwganVzdCBwbGF5XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICAgICAgICBpZiAoc2xpZGVyLnZhcnMuaW5pdERlbGF5ID4gMCkgeyBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChzbGlkZXIucGxheSwgc2xpZGVyLnZhcnMuaW5pdERlbGF5KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5wbGF5KCk7IC8vRGlkbid0IGluaXQgYmVmb3JlOiBzaW1wbHkgaW5pdCBvciB3YWl0IGZvciBpdFxuICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaXNIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBwcm9wID0gbWV0aG9kcy5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7XG4gICAgICAgICAgaWYgKCFwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkb2N1bWVudFtwcm9wXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SGlkZGVuUHJvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHByZWZpeGVzID0gWyd3ZWJraXQnLCdtb3onLCdtcycsJ28nXTtcbiAgICAgICAgICAvLyBpZiAnaGlkZGVuJyBpcyBuYXRpdmVseSBzdXBwb3J0ZWQganVzdCByZXR1cm4gaXRcbiAgICAgICAgICBpZiAoJ2hpZGRlbicgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAnaGlkZGVuJztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGxvb3Agb3ZlciBhbGwgdGhlIGtub3duIHByZWZpeGVzIHVudGlsIHdlIGZpbmQgb25lXG4gICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgIGlmICgocHJlZml4ZXNbaV0gKyAnSGlkZGVuJykgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlZml4ZXNbaV0gKyAnSGlkZGVuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBvdGhlcndpc2UgaXQncyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHdhdGNoZWRFdmVudENsZWFyVGltZXIpO1xuICAgICAgICB3YXRjaGVkRXZlbnRDbGVhclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICB3YXRjaGVkRXZlbnQgPSBcIlwiO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBzbGlkZXIuZmxleEFuaW1hdGUgPSBmdW5jdGlvbih0YXJnZXQsIHBhdXNlLCBvdmVycmlkZSwgd2l0aFN5bmMsIGZyb21OYXYpIHtcbiAgICAgIGlmICghc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCAmJiB0YXJnZXQgIT09IHNsaWRlci5jdXJyZW50U2xpZGUpIHtcbiAgICAgICAgc2xpZGVyLmRpcmVjdGlvbiA9ICh0YXJnZXQgPiBzbGlkZXIuY3VycmVudFNsaWRlKSA/IFwibmV4dFwiIDogXCJwcmV2XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChhc05hdiAmJiBzbGlkZXIucGFnaW5nQ291bnQgPT09IDEpIHNsaWRlci5kaXJlY3Rpb24gPSAoc2xpZGVyLmN1cnJlbnRJdGVtIDwgdGFyZ2V0KSA/IFwibmV4dFwiIDogXCJwcmV2XCI7XG5cbiAgICAgIGlmICghc2xpZGVyLmFuaW1hdGluZyAmJiAoc2xpZGVyLmNhbkFkdmFuY2UodGFyZ2V0LCBmcm9tTmF2KSB8fCBvdmVycmlkZSkgJiYgc2xpZGVyLmlzKFwiOnZpc2libGVcIikpIHtcbiAgICAgICAgaWYgKGFzTmF2ICYmIHdpdGhTeW5jKSB7XG4gICAgICAgICAgdmFyIG1hc3RlciA9ICQoc2xpZGVyLnZhcnMuYXNOYXZGb3IpLmRhdGEoJ2ZsZXhzbGlkZXInKTtcbiAgICAgICAgICBzbGlkZXIuYXRFbmQgPSB0YXJnZXQgPT09IDAgfHwgdGFyZ2V0ID09PSBzbGlkZXIuY291bnQgLSAxO1xuICAgICAgICAgIG1hc3Rlci5mbGV4QW5pbWF0ZSh0YXJnZXQsIHRydWUsIGZhbHNlLCB0cnVlLCBmcm9tTmF2KTtcbiAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uID0gKHNsaWRlci5jdXJyZW50SXRlbSA8IHRhcmdldCkgPyBcIm5leHRcIiA6IFwicHJldlwiO1xuICAgICAgICAgIG1hc3Rlci5kaXJlY3Rpb24gPSBzbGlkZXIuZGlyZWN0aW9uO1xuXG4gICAgICAgICAgaWYgKE1hdGguY2VpbCgodGFyZ2V0ICsgMSkvc2xpZGVyLnZpc2libGUpIC0gMSAhPT0gc2xpZGVyLmN1cnJlbnRTbGlkZSAmJiB0YXJnZXQgIT09IDApIHtcbiAgICAgICAgICAgIHNsaWRlci5jdXJyZW50SXRlbSA9IHRhcmdldDtcbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXMucmVtb3ZlQ2xhc3MobmFtZXNwYWNlICsgXCJhY3RpdmUtc2xpZGVcIikuZXEodGFyZ2V0KS5hZGRDbGFzcyhuYW1lc3BhY2UgKyBcImFjdGl2ZS1zbGlkZVwiKTtcbiAgICAgICAgICAgIHRhcmdldCA9IE1hdGguZmxvb3IodGFyZ2V0L3NsaWRlci52aXNpYmxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLmN1cnJlbnRJdGVtID0gdGFyZ2V0O1xuICAgICAgICAgICAgc2xpZGVyLnNsaWRlcy5yZW1vdmVDbGFzcyhuYW1lc3BhY2UgKyBcImFjdGl2ZS1zbGlkZVwiKS5lcSh0YXJnZXQpLmFkZENsYXNzKG5hbWVzcGFjZSArIFwiYWN0aXZlLXNsaWRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICBzbGlkZXIuYW5pbWF0aW5nVG8gPSB0YXJnZXQ7XG5cbiAgICAgICAgLy8gU0xJREVTSE9XOlxuICAgICAgICBpZiAocGF1c2UpIHsgc2xpZGVyLnBhdXNlKCk7IH1cblxuICAgICAgICAvLyBBUEk6IGJlZm9yZSgpIGFuaW1hdGlvbiBDYWxsYmFja1xuICAgICAgICBzbGlkZXIudmFycy5iZWZvcmUoc2xpZGVyKTtcblxuICAgICAgICAvLyBTWU5DOlxuICAgICAgICBpZiAoc2xpZGVyLnN5bmNFeGlzdHMgJiYgIWZyb21OYXYpIHsgbWV0aG9kcy5zeW5jKFwiYW5pbWF0ZVwiKTsgfVxuXG4gICAgICAgIC8vIENPTlRST0xOQVZcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLmNvbnRyb2xOYXYpIHsgbWV0aG9kcy5jb250cm9sTmF2LmFjdGl2ZSgpOyB9XG5cbiAgICAgICAgLy8gIUNBUk9VU0VMOlxuICAgICAgICAvLyBDQU5ESURBVEU6IHNsaWRlIGFjdGl2ZSBjbGFzcyAoZm9yIGFkZC9yZW1vdmUgc2xpZGUpXG4gICAgICAgIGlmICghY2Fyb3VzZWwpIHsgc2xpZGVyLnNsaWRlcy5yZW1vdmVDbGFzcyhuYW1lc3BhY2UgKyAnYWN0aXZlLXNsaWRlJykuZXEodGFyZ2V0KS5hZGRDbGFzcyhuYW1lc3BhY2UgKyAnYWN0aXZlLXNsaWRlJyk7IH1cblxuICAgICAgICAvLyBJTkZJTklURSBMT09QOlxuICAgICAgICAvLyBDQU5ESURBVEU6IGF0RW5kXG4gICAgICAgIHNsaWRlci5hdEVuZCA9IHRhcmdldCA9PT0gMCB8fCB0YXJnZXQgPT09IHNsaWRlci5sYXN0O1xuXG4gICAgICAgIC8vIERJUkVDVElPTk5BVjpcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLmRpcmVjdGlvbk5hdikgeyBtZXRob2RzLmRpcmVjdGlvbk5hdi51cGRhdGUoKTsgfVxuXG4gICAgICAgIGlmICh0YXJnZXQgPT09IHNsaWRlci5sYXN0KSB7XG4gICAgICAgICAgLy8gQVBJOiBlbmQoKSBvZiBjeWNsZSBDYWxsYmFja1xuICAgICAgICAgIHNsaWRlci52YXJzLmVuZChzbGlkZXIpO1xuICAgICAgICAgIC8vIFNMSURFU0hPVyAmJiAhSU5GSU5JVEUgTE9PUDpcbiAgICAgICAgICBpZiAoIXNsaWRlci52YXJzLmFuaW1hdGlvbkxvb3ApIHsgc2xpZGVyLnBhdXNlKCk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNMSURFOlxuICAgICAgICBpZiAoIWZhZGUpIHtcbiAgICAgICAgICB2YXIgZGltZW5zaW9uID0gKHZlcnRpY2FsKSA/IHNsaWRlci5zbGlkZXMuZmlsdGVyKCc6Zmlyc3QnKS5oZWlnaHQoKSA6IHNsaWRlci5jb21wdXRlZFcsXG4gICAgICAgICAgICAgIG1hcmdpbiwgc2xpZGVTdHJpbmcsIGNhbGNOZXh0O1xuXG4gICAgICAgICAgLy8gSU5GSU5JVEUgTE9PUCAvIFJFVkVSU0U6XG4gICAgICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgICAgICAvL21hcmdpbiA9IChzbGlkZXIudmFycy5pdGVtV2lkdGggPiBzbGlkZXIudykgPyBzbGlkZXIudmFycy5pdGVtTWFyZ2luICogMiA6IHNsaWRlci52YXJzLml0ZW1NYXJnaW47XG4gICAgICAgICAgICBtYXJnaW4gPSBzbGlkZXIudmFycy5pdGVtTWFyZ2luO1xuICAgICAgICAgICAgY2FsY05leHQgPSAoKHNsaWRlci5pdGVtVyArIG1hcmdpbikgKiBzbGlkZXIubW92ZSkgKiBzbGlkZXIuYW5pbWF0aW5nVG87XG4gICAgICAgICAgICBzbGlkZVN0cmluZyA9IChjYWxjTmV4dCA+IHNsaWRlci5saW1pdCAmJiBzbGlkZXIudmlzaWJsZSAhPT0gMSkgPyBzbGlkZXIubGltaXQgOiBjYWxjTmV4dDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci5jdXJyZW50U2xpZGUgPT09IDAgJiYgdGFyZ2V0ID09PSBzbGlkZXIuY291bnQgLSAxICYmIHNsaWRlci52YXJzLmFuaW1hdGlvbkxvb3AgJiYgc2xpZGVyLmRpcmVjdGlvbiAhPT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgIHNsaWRlU3RyaW5nID0gKHJldmVyc2UpID8gKHNsaWRlci5jb3VudCArIHNsaWRlci5jbG9uZU9mZnNldCkgKiBkaW1lbnNpb24gOiAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gc2xpZGVyLmxhc3QgJiYgdGFyZ2V0ID09PSAwICYmIHNsaWRlci52YXJzLmFuaW1hdGlvbkxvb3AgJiYgc2xpZGVyLmRpcmVjdGlvbiAhPT0gXCJwcmV2XCIpIHtcbiAgICAgICAgICAgIHNsaWRlU3RyaW5nID0gKHJldmVyc2UpID8gMCA6IChzbGlkZXIuY291bnQgKyAxKSAqIGRpbWVuc2lvbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVTdHJpbmcgPSAocmV2ZXJzZSkgPyAoKHNsaWRlci5jb3VudCAtIDEpIC0gdGFyZ2V0ICsgc2xpZGVyLmNsb25lT2Zmc2V0KSAqIGRpbWVuc2lvbiA6ICh0YXJnZXQgKyBzbGlkZXIuY2xvbmVPZmZzZXQpICogZGltZW5zaW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzbGlkZXIuc2V0UHJvcHMoc2xpZGVTdHJpbmcsIFwiXCIsIHNsaWRlci52YXJzLmFuaW1hdGlvblNwZWVkKTtcbiAgICAgICAgICBpZiAoc2xpZGVyLnRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIXNsaWRlci52YXJzLmFuaW1hdGlvbkxvb3AgfHwgIXNsaWRlci5hdEVuZCkge1xuICAgICAgICAgICAgICBzbGlkZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNsaWRlci5jdXJyZW50U2xpZGUgPSBzbGlkZXIuYW5pbWF0aW5nVG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFVuYmluZCBwcmV2aW91cyB0cmFuc2l0aW9uRW5kIGV2ZW50cyBhbmQgcmUtYmluZCBuZXcgdHJhbnNpdGlvbkVuZCBldmVudFxuICAgICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci51bmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIik7XG4gICAgICAgICAgICBzbGlkZXIuY29udGFpbmVyLmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChzbGlkZXIuZW5zdXJlQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgICAgICAgc2xpZGVyLndyYXB1cChkaW1lbnNpb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEluc3VyYW5jZSBmb3IgdGhlIGV2ZXItc28tZmlja2xlIHRyYW5zaXRpb25FbmQgZXZlbnRcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzbGlkZXIuZW5zdXJlQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgICAgIHNsaWRlci5lbnN1cmVBbmltYXRpb25FbmQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzbGlkZXIud3JhcHVwKGRpbWVuc2lvbik7XG4gICAgICAgICAgICB9LCBzbGlkZXIudmFycy5hbmltYXRpb25TcGVlZCArIDEwMCk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5hbmltYXRlKHNsaWRlci5hcmdzLCBzbGlkZXIudmFycy5hbmltYXRpb25TcGVlZCwgc2xpZGVyLnZhcnMuZWFzaW5nLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBzbGlkZXIud3JhcHVwKGRpbWVuc2lvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIEZBREU6XG4gICAgICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICAgICAgLy9zbGlkZXIuc2xpZGVzLmVxKHNsaWRlci5jdXJyZW50U2xpZGUpLmZhZGVPdXQoc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQsIHNsaWRlci52YXJzLmVhc2luZyk7XG4gICAgICAgICAgICAvL3NsaWRlci5zbGlkZXMuZXEodGFyZ2V0KS5mYWRlSW4oc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQsIHNsaWRlci52YXJzLmVhc2luZywgc2xpZGVyLndyYXB1cCk7XG5cbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuZXEoc2xpZGVyLmN1cnJlbnRTbGlkZSkuY3NzKHtcInpJbmRleFwiOiAxfSkuYW5pbWF0ZSh7XCJvcGFjaXR5XCI6IDB9LCBzbGlkZXIudmFycy5hbmltYXRpb25TcGVlZCwgc2xpZGVyLnZhcnMuZWFzaW5nKTtcbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuZXEodGFyZ2V0KS5jc3Moe1wiekluZGV4XCI6IDJ9KS5hbmltYXRlKHtcIm9wYWNpdHlcIjogMX0sIHNsaWRlci52YXJzLmFuaW1hdGlvblNwZWVkLCBzbGlkZXIudmFycy5lYXNpbmcsIHNsaWRlci53cmFwdXApO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuZXEoc2xpZGVyLmN1cnJlbnRTbGlkZSkuY3NzKHsgXCJvcGFjaXR5XCI6IDAsIFwiekluZGV4XCI6IDEgfSk7XG4gICAgICAgICAgICBzbGlkZXIuc2xpZGVzLmVxKHRhcmdldCkuY3NzKHsgXCJvcGFjaXR5XCI6IDEsIFwiekluZGV4XCI6IDIgfSk7XG4gICAgICAgICAgICBzbGlkZXIud3JhcHVwKGRpbWVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNNT09USCBIRUlHSFQ6XG4gICAgICAgIGlmIChzbGlkZXIudmFycy5zbW9vdGhIZWlnaHQpIHsgbWV0aG9kcy5zbW9vdGhIZWlnaHQoc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQpOyB9XG4gICAgICB9XG4gICAgfTtcbiAgICBzbGlkZXIud3JhcHVwID0gZnVuY3Rpb24oZGltZW5zaW9uKSB7XG4gICAgICAvLyBTTElERTpcbiAgICAgIGlmICghZmFkZSAmJiAhY2Fyb3VzZWwpIHtcbiAgICAgICAgaWYgKHNsaWRlci5jdXJyZW50U2xpZGUgPT09IDAgJiYgc2xpZGVyLmFuaW1hdGluZ1RvID09PSBzbGlkZXIubGFzdCAmJiBzbGlkZXIudmFycy5hbmltYXRpb25Mb29wKSB7XG4gICAgICAgICAgc2xpZGVyLnNldFByb3BzKGRpbWVuc2lvbiwgXCJqdW1wRW5kXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci5jdXJyZW50U2xpZGUgPT09IHNsaWRlci5sYXN0ICYmIHNsaWRlci5hbmltYXRpbmdUbyA9PT0gMCAmJiBzbGlkZXIudmFycy5hbmltYXRpb25Mb29wKSB7XG4gICAgICAgICAgc2xpZGVyLnNldFByb3BzKGRpbWVuc2lvbiwgXCJqdW1wU3RhcnRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNsaWRlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHNsaWRlci5jdXJyZW50U2xpZGUgPSBzbGlkZXIuYW5pbWF0aW5nVG87XG4gICAgICAvLyBBUEk6IGFmdGVyKCkgYW5pbWF0aW9uIENhbGxiYWNrXG4gICAgICBzbGlkZXIudmFycy5hZnRlcihzbGlkZXIpO1xuICAgIH07XG5cbiAgICAvLyBTTElERVNIT1c6XG4gICAgc2xpZGVyLmFuaW1hdGVTbGlkZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghc2xpZGVyLmFuaW1hdGluZyAmJiBmb2N1c2VkICkgeyBzbGlkZXIuZmxleEFuaW1hdGUoc2xpZGVyLmdldFRhcmdldChcIm5leHRcIikpOyB9XG4gICAgfTtcbiAgICAvLyBTTElERVNIT1c6XG4gICAgc2xpZGVyLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhckludGVydmFsKHNsaWRlci5hbmltYXRlZFNsaWRlcyk7XG4gICAgICBzbGlkZXIuYW5pbWF0ZWRTbGlkZXMgPSBudWxsO1xuICAgICAgc2xpZGVyLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgIC8vIFBBVVNFUExBWTpcbiAgICAgIGlmIChzbGlkZXIudmFycy5wYXVzZVBsYXkpIHsgbWV0aG9kcy5wYXVzZVBsYXkudXBkYXRlKFwicGxheVwiKTsgfVxuICAgICAgLy8gU1lOQzpcbiAgICAgIGlmIChzbGlkZXIuc3luY0V4aXN0cykgeyBtZXRob2RzLnN5bmMoXCJwYXVzZVwiKTsgfVxuICAgIH07XG4gICAgLy8gU0xJREVTSE9XOlxuICAgIHNsaWRlci5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2xpZGVyLnBsYXlpbmcpIHsgY2xlYXJJbnRlcnZhbChzbGlkZXIuYW5pbWF0ZWRTbGlkZXMpOyB9XG4gICAgICBzbGlkZXIuYW5pbWF0ZWRTbGlkZXMgPSBzbGlkZXIuYW5pbWF0ZWRTbGlkZXMgfHwgc2V0SW50ZXJ2YWwoc2xpZGVyLmFuaW1hdGVTbGlkZXMsIHNsaWRlci52YXJzLnNsaWRlc2hvd1NwZWVkKTtcbiAgICAgIHNsaWRlci5zdGFydGVkID0gc2xpZGVyLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgLy8gUEFVU0VQTEFZOlxuICAgICAgaWYgKHNsaWRlci52YXJzLnBhdXNlUGxheSkgeyBtZXRob2RzLnBhdXNlUGxheS51cGRhdGUoXCJwYXVzZVwiKTsgfVxuICAgICAgLy8gU1lOQzpcbiAgICAgIGlmIChzbGlkZXIuc3luY0V4aXN0cykgeyBtZXRob2RzLnN5bmMoXCJwbGF5XCIpOyB9XG4gICAgfTtcbiAgICAvLyBTVE9QOlxuICAgIHNsaWRlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2xpZGVyLnBhdXNlKCk7XG4gICAgICBzbGlkZXIuc3RvcHBlZCA9IHRydWU7XG4gICAgfTtcbiAgICBzbGlkZXIuY2FuQWR2YW5jZSA9IGZ1bmN0aW9uKHRhcmdldCwgZnJvbU5hdikge1xuICAgICAgLy8gQVNOQVY6XG4gICAgICB2YXIgbGFzdCA9IChhc05hdikgPyBzbGlkZXIucGFnaW5nQ291bnQgLSAxIDogc2xpZGVyLmxhc3Q7XG4gICAgICByZXR1cm4gKGZyb21OYXYpID8gdHJ1ZSA6XG4gICAgICAgICAgICAgKGFzTmF2ICYmIHNsaWRlci5jdXJyZW50SXRlbSA9PT0gc2xpZGVyLmNvdW50IC0gMSAmJiB0YXJnZXQgPT09IDAgJiYgc2xpZGVyLmRpcmVjdGlvbiA9PT0gXCJwcmV2XCIpID8gdHJ1ZSA6XG4gICAgICAgICAgICAgKGFzTmF2ICYmIHNsaWRlci5jdXJyZW50SXRlbSA9PT0gMCAmJiB0YXJnZXQgPT09IHNsaWRlci5wYWdpbmdDb3VudCAtIDEgJiYgc2xpZGVyLmRpcmVjdGlvbiAhPT0gXCJuZXh0XCIpID8gZmFsc2UgOlxuICAgICAgICAgICAgICh0YXJnZXQgPT09IHNsaWRlci5jdXJyZW50U2xpZGUgJiYgIWFzTmF2KSA/IGZhbHNlIDpcbiAgICAgICAgICAgICAoc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCkgPyB0cnVlIDpcbiAgICAgICAgICAgICAoc2xpZGVyLmF0RW5kICYmIHNsaWRlci5jdXJyZW50U2xpZGUgPT09IDAgJiYgdGFyZ2V0ID09PSBsYXN0ICYmIHNsaWRlci5kaXJlY3Rpb24gIT09IFwibmV4dFwiKSA/IGZhbHNlIDpcbiAgICAgICAgICAgICAoc2xpZGVyLmF0RW5kICYmIHNsaWRlci5jdXJyZW50U2xpZGUgPT09IGxhc3QgJiYgdGFyZ2V0ID09PSAwICYmIHNsaWRlci5kaXJlY3Rpb24gPT09IFwibmV4dFwiKSA/IGZhbHNlIDpcbiAgICAgICAgICAgICB0cnVlO1xuICAgIH07XG4gICAgc2xpZGVyLmdldFRhcmdldCA9IGZ1bmN0aW9uKGRpcikge1xuICAgICAgc2xpZGVyLmRpcmVjdGlvbiA9IGRpcjtcbiAgICAgIGlmIChkaXIgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIHJldHVybiAoc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gc2xpZGVyLmxhc3QpID8gMCA6IHNsaWRlci5jdXJyZW50U2xpZGUgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzbGlkZXIuY3VycmVudFNsaWRlID09PSAwKSA/IHNsaWRlci5sYXN0IDogc2xpZGVyLmN1cnJlbnRTbGlkZSAtIDE7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNMSURFOlxuICAgIHNsaWRlci5zZXRQcm9wcyA9IGZ1bmN0aW9uKHBvcywgc3BlY2lhbCwgZHVyKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcG9zQ2hlY2sgPSAocG9zKSA/IHBvcyA6ICgoc2xpZGVyLml0ZW1XICsgc2xpZGVyLnZhcnMuaXRlbU1hcmdpbikgKiBzbGlkZXIubW92ZSkgKiBzbGlkZXIuYW5pbWF0aW5nVG8sXG4gICAgICAgICAgICBwb3NDYWxjID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNwZWNpYWwgPT09IFwic2V0VG91Y2hcIikgPyBwb3MgOlxuICAgICAgICAgICAgICAgICAgICAgICAocmV2ZXJzZSAmJiBzbGlkZXIuYW5pbWF0aW5nVG8gPT09IHNsaWRlci5sYXN0KSA/IDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAocmV2ZXJzZSkgPyBzbGlkZXIubGltaXQgLSAoKChzbGlkZXIuaXRlbVcgKyBzbGlkZXIudmFycy5pdGVtTWFyZ2luKSAqIHNsaWRlci5tb3ZlKSAqIHNsaWRlci5hbmltYXRpbmdUbykgOlxuICAgICAgICAgICAgICAgICAgICAgICAoc2xpZGVyLmFuaW1hdGluZ1RvID09PSBzbGlkZXIubGFzdCkgPyBzbGlkZXIubGltaXQgOiBwb3NDaGVjaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNwZWNpYWwpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRUb3RhbFwiOiByZXR1cm4gKHJldmVyc2UpID8gKChzbGlkZXIuY291bnQgLSAxKSAtIHNsaWRlci5jdXJyZW50U2xpZGUgKyBzbGlkZXIuY2xvbmVPZmZzZXQpICogcG9zIDogKHNsaWRlci5jdXJyZW50U2xpZGUgKyBzbGlkZXIuY2xvbmVPZmZzZXQpICogcG9zO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcInNldFRvdWNoXCI6IHJldHVybiAocmV2ZXJzZSkgPyBwb3MgOiBwb3M7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwianVtcEVuZFwiOiByZXR1cm4gKHJldmVyc2UpID8gcG9zIDogc2xpZGVyLmNvdW50ICogcG9zO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImp1bXBTdGFydFwiOiByZXR1cm4gKHJldmVyc2UpID8gc2xpZGVyLmNvdW50ICogcG9zIDogcG9zO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0oKSk7XG5cbiAgICAgICAgICAgIHJldHVybiAocG9zQ2FsYyAqIC0xKSArIFwicHhcIjtcbiAgICAgICAgICB9KCkpO1xuXG4gICAgICBpZiAoc2xpZGVyLnRyYW5zaXRpb25zKSB7XG4gICAgICAgIHRhcmdldCA9ICh2ZXJ0aWNhbCkgPyBcInRyYW5zbGF0ZTNkKDAsXCIgKyB0YXJnZXQgKyBcIiwwKVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHRhcmdldCArIFwiLDAsMClcIjtcbiAgICAgICAgZHVyID0gKGR1ciAhPT0gdW5kZWZpbmVkKSA/IChkdXIvMTAwMCkgKyBcInNcIiA6IFwiMHNcIjtcbiAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5jc3MoXCItXCIgKyBzbGlkZXIucGZ4ICsgXCItdHJhbnNpdGlvbi1kdXJhdGlvblwiLCBkdXIpO1xuICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIGR1cik7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlci5hcmdzW3NsaWRlci5wcm9wXSA9IHRhcmdldDtcbiAgICAgIGlmIChzbGlkZXIudHJhbnNpdGlvbnMgfHwgZHVyID09PSB1bmRlZmluZWQpIHsgc2xpZGVyLmNvbnRhaW5lci5jc3Moc2xpZGVyLmFyZ3MpOyB9XG5cbiAgICAgIHNsaWRlci5jb250YWluZXIuY3NzKCd0cmFuc2Zvcm0nLHRhcmdldCk7XG4gICAgfTtcblxuICAgIHNsaWRlci5zZXR1cCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgIC8vIFNMSURFOlxuICAgICAgaWYgKCFmYWRlKSB7XG4gICAgICAgIHZhciBzbGlkZXJPZmZzZXQsIGFycjtcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJpbml0XCIpIHtcbiAgICAgICAgICBzbGlkZXIudmlld3BvcnQgPSAkKCc8ZGl2IGNsYXNzPVwiJyArIG5hbWVzcGFjZSArICd2aWV3cG9ydFwiPjwvZGl2PicpLmNzcyh7XCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLCBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIn0pLmFwcGVuZFRvKHNsaWRlcikuYXBwZW5kKHNsaWRlci5jb250YWluZXIpO1xuICAgICAgICAgIC8vIElORklOSVRFIExPT1A6XG4gICAgICAgICAgc2xpZGVyLmNsb25lQ291bnQgPSAwO1xuICAgICAgICAgIHNsaWRlci5jbG9uZU9mZnNldCA9IDA7XG4gICAgICAgICAgLy8gUkVWRVJTRTpcbiAgICAgICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICAgICAgYXJyID0gJC5tYWtlQXJyYXkoc2xpZGVyLnNsaWRlcykucmV2ZXJzZSgpO1xuICAgICAgICAgICAgc2xpZGVyLnNsaWRlcyA9ICQoYXJyKTtcbiAgICAgICAgICAgIHNsaWRlci5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQoc2xpZGVyLnNsaWRlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElORklOSVRFIExPT1AgJiYgIUNBUk9VU0VMOlxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCAmJiAhY2Fyb3VzZWwpIHtcbiAgICAgICAgICBzbGlkZXIuY2xvbmVDb3VudCA9IDI7XG4gICAgICAgICAgc2xpZGVyLmNsb25lT2Zmc2V0ID0gMTtcbiAgICAgICAgICAvLyBjbGVhciBvdXQgb2xkIGNsb25lc1xuICAgICAgICAgIGlmICh0eXBlICE9PSBcImluaXRcIikgeyBzbGlkZXIuY29udGFpbmVyLmZpbmQoJy5jbG9uZScpLnJlbW92ZSgpOyB9XG4gICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5hcHBlbmQobWV0aG9kcy51bmlxdWVJRChzbGlkZXIuc2xpZGVzLmZpcnN0KCkuY2xvbmUoKS5hZGRDbGFzcygnY2xvbmUnKSkuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZChtZXRob2RzLnVuaXF1ZUlEKHNsaWRlci5zbGlkZXMubGFzdCgpLmNsb25lKCkuYWRkQ2xhc3MoJ2Nsb25lJykpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVyLm5ld1NsaWRlcyA9ICQoc2xpZGVyLnZhcnMuc2VsZWN0b3IsIHNsaWRlcik7XG5cbiAgICAgICAgc2xpZGVyT2Zmc2V0ID0gKHJldmVyc2UpID8gc2xpZGVyLmNvdW50IC0gMSAtIHNsaWRlci5jdXJyZW50U2xpZGUgKyBzbGlkZXIuY2xvbmVPZmZzZXQgOiBzbGlkZXIuY3VycmVudFNsaWRlICsgc2xpZGVyLmNsb25lT2Zmc2V0O1xuICAgICAgICAvLyBWRVJUSUNBTDpcbiAgICAgICAgaWYgKHZlcnRpY2FsICYmICFjYXJvdXNlbCkge1xuICAgICAgICAgIHNsaWRlci5jb250YWluZXIuaGVpZ2h0KChzbGlkZXIuY291bnQgKyBzbGlkZXIuY2xvbmVDb3VudCkgKiAyMDAgKyBcIiVcIikuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKS53aWR0aChcIjEwMCVcIik7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2xpZGVyLm5ld1NsaWRlcy5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgICAgIHNsaWRlci5kb01hdGgoKTtcbiAgICAgICAgICAgIHNsaWRlci52aWV3cG9ydC5oZWlnaHQoc2xpZGVyLmgpO1xuICAgICAgICAgICAgc2xpZGVyLnNldFByb3BzKHNsaWRlck9mZnNldCAqIHNsaWRlci5oLCBcImluaXRcIik7XG4gICAgICAgICAgfSwgKHR5cGUgPT09IFwiaW5pdFwiKSA/IDEwMCA6IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlci5jb250YWluZXIud2lkdGgoKHNsaWRlci5jb3VudCArIHNsaWRlci5jbG9uZUNvdW50KSAqIDIwMCArIFwiJVwiKTtcbiAgICAgICAgICBzbGlkZXIuc2V0UHJvcHMoc2xpZGVyT2Zmc2V0ICogc2xpZGVyLmNvbXB1dGVkVywgXCJpbml0XCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNsaWRlci5kb01hdGgoKTtcbiAgICAgICAgICAgIHNsaWRlci5uZXdTbGlkZXMuY3NzKHtcIndpZHRoXCI6IHNsaWRlci5jb21wdXRlZFcsIFwiZmxvYXRcIjogXCJsZWZ0XCIsIFwiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgICAgIC8vIFNNT09USCBIRUlHSFQ6XG4gICAgICAgICAgICBpZiAoc2xpZGVyLnZhcnMuc21vb3RoSGVpZ2h0KSB7IG1ldGhvZHMuc21vb3RoSGVpZ2h0KCk7IH1cbiAgICAgICAgICB9LCAodHlwZSA9PT0gXCJpbml0XCIpID8gMTAwIDogMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIEZBREU6XG4gICAgICAgIHNsaWRlci5zbGlkZXMuY3NzKHtcIndpZHRoXCI6IFwiMTAwJVwiLCBcImZsb2F0XCI6IFwibGVmdFwiLCBcIm1hcmdpblJpZ2h0XCI6IFwiLTEwMCVcIiwgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJ9KTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW5pdFwiKSB7XG4gICAgICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICAgICAgLy9zbGlkZXIuc2xpZGVzLmVxKHNsaWRlci5jdXJyZW50U2xpZGUpLmZhZGVJbihzbGlkZXIudmFycy5hbmltYXRpb25TcGVlZCwgc2xpZGVyLnZhcnMuZWFzaW5nKTtcbiAgICAgICAgICAgIGlmIChzbGlkZXIudmFycy5mYWRlRmlyc3RTbGlkZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBzbGlkZXIuc2xpZGVzLmNzcyh7IFwib3BhY2l0eVwiOiAwLCBcImRpc3BsYXlcIjogXCJibG9ja1wiLCBcInpJbmRleFwiOiAxIH0pLmVxKHNsaWRlci5jdXJyZW50U2xpZGUpLmNzcyh7XCJ6SW5kZXhcIjogMn0pLmNzcyh7XCJvcGFjaXR5XCI6IDF9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuY3NzKHsgXCJvcGFjaXR5XCI6IDAsIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsIFwiekluZGV4XCI6IDEgfSkuZXEoc2xpZGVyLmN1cnJlbnRTbGlkZSkuY3NzKHtcInpJbmRleFwiOiAyfSkuYW5pbWF0ZSh7XCJvcGFjaXR5XCI6IDF9LHNsaWRlci52YXJzLmFuaW1hdGlvblNwZWVkLHNsaWRlci52YXJzLmVhc2luZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuY3NzKHsgXCJvcGFjaXR5XCI6IDAsIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsIFwid2Via2l0VHJhbnNpdGlvblwiOiBcIm9wYWNpdHkgXCIgKyBzbGlkZXIudmFycy5hbmltYXRpb25TcGVlZCAvIDEwMDAgKyBcInMgZWFzZVwiLCBcInpJbmRleFwiOiAxIH0pLmVxKHNsaWRlci5jdXJyZW50U2xpZGUpLmNzcyh7IFwib3BhY2l0eVwiOiAxLCBcInpJbmRleFwiOiAyfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNNT09USCBIRUlHSFQ6XG4gICAgICAgIGlmIChzbGlkZXIudmFycy5zbW9vdGhIZWlnaHQpIHsgbWV0aG9kcy5zbW9vdGhIZWlnaHQoKTsgfVxuICAgICAgfVxuICAgICAgLy8gIUNBUk9VU0VMOlxuICAgICAgLy8gQ0FORElEQVRFOiBhY3RpdmUgc2xpZGVcbiAgICAgIGlmICghY2Fyb3VzZWwpIHsgc2xpZGVyLnNsaWRlcy5yZW1vdmVDbGFzcyhuYW1lc3BhY2UgKyBcImFjdGl2ZS1zbGlkZVwiKS5lcShzbGlkZXIuY3VycmVudFNsaWRlKS5hZGRDbGFzcyhuYW1lc3BhY2UgKyBcImFjdGl2ZS1zbGlkZVwiKTsgfVxuXG4gICAgICAvL0ZsZXhTbGlkZXI6IGluaXQoKSBDYWxsYmFja1xuICAgICAgc2xpZGVyLnZhcnMuaW5pdChzbGlkZXIpO1xuICAgIH07XG5cbiAgICBzbGlkZXIuZG9NYXRoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2xpZGUgPSBzbGlkZXIuc2xpZGVzLmZpcnN0KCksXG4gICAgICAgICAgc2xpZGVNYXJnaW4gPSBzbGlkZXIudmFycy5pdGVtTWFyZ2luLFxuICAgICAgICAgIG1pbkl0ZW1zID0gc2xpZGVyLnZhcnMubWluSXRlbXMsXG4gICAgICAgICAgbWF4SXRlbXMgPSBzbGlkZXIudmFycy5tYXhJdGVtcztcblxuICAgICAgc2xpZGVyLncgPSAoc2xpZGVyLnZpZXdwb3J0PT09dW5kZWZpbmVkKSA/IHNsaWRlci53aWR0aCgpIDogc2xpZGVyLnZpZXdwb3J0LndpZHRoKCk7XG4gICAgICBzbGlkZXIuaCA9IHNsaWRlLmhlaWdodCgpO1xuICAgICAgc2xpZGVyLmJveFBhZGRpbmcgPSBzbGlkZS5vdXRlcldpZHRoKCkgLSBzbGlkZS53aWR0aCgpO1xuXG4gICAgICAvLyBDQVJPVVNFTDpcbiAgICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgICBzbGlkZXIuaXRlbVQgPSBzbGlkZXIudmFycy5pdGVtV2lkdGggKyBzbGlkZU1hcmdpbjtcbiAgICAgICAgc2xpZGVyLm1pblcgPSAobWluSXRlbXMpID8gbWluSXRlbXMgKiBzbGlkZXIuaXRlbVQgOiBzbGlkZXIudztcbiAgICAgICAgc2xpZGVyLm1heFcgPSAobWF4SXRlbXMpID8gKG1heEl0ZW1zICogc2xpZGVyLml0ZW1UKSAtIHNsaWRlTWFyZ2luIDogc2xpZGVyLnc7XG4gICAgICAgIHNsaWRlci5pdGVtVyA9IChzbGlkZXIubWluVyA+IHNsaWRlci53KSA/IChzbGlkZXIudyAtIChzbGlkZU1hcmdpbiAqIChtaW5JdGVtcyAtIDEpKSkvbWluSXRlbXMgOlxuICAgICAgICAgICAgICAgICAgICAgICAoc2xpZGVyLm1heFcgPCBzbGlkZXIudykgPyAoc2xpZGVyLncgLSAoc2xpZGVNYXJnaW4gKiAobWF4SXRlbXMgLSAxKSkpL21heEl0ZW1zIDpcbiAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlci52YXJzLml0ZW1XaWR0aCA+IHNsaWRlci53KSA/IHNsaWRlci53IDogc2xpZGVyLnZhcnMuaXRlbVdpZHRoO1xuXG4gICAgICAgIHNsaWRlci52aXNpYmxlID0gTWF0aC5mbG9vcihzbGlkZXIudy8oc2xpZGVyLml0ZW1XKSk7XG4gICAgICAgIHNsaWRlci5tb3ZlID0gKHNsaWRlci52YXJzLm1vdmUgPiAwICYmIHNsaWRlci52YXJzLm1vdmUgPCBzbGlkZXIudmlzaWJsZSApID8gc2xpZGVyLnZhcnMubW92ZSA6IHNsaWRlci52aXNpYmxlO1xuICAgICAgICBzbGlkZXIucGFnaW5nQ291bnQgPSBNYXRoLmNlaWwoKChzbGlkZXIuY291bnQgLSBzbGlkZXIudmlzaWJsZSkvc2xpZGVyLm1vdmUpICsgMSk7XG4gICAgICAgIHNsaWRlci5sYXN0ID0gIHNsaWRlci5wYWdpbmdDb3VudCAtIDE7XG4gICAgICAgIHNsaWRlci5saW1pdCA9IChzbGlkZXIucGFnaW5nQ291bnQgPT09IDEpID8gMCA6XG4gICAgICAgICAgICAgICAgICAgICAgIChzbGlkZXIudmFycy5pdGVtV2lkdGggPiBzbGlkZXIudykgPyAoc2xpZGVyLml0ZW1XICogKHNsaWRlci5jb3VudCAtIDEpKSArIChzbGlkZU1hcmdpbiAqIChzbGlkZXIuY291bnQgLSAxKSkgOiAoKHNsaWRlci5pdGVtVyArIHNsaWRlTWFyZ2luKSAqIHNsaWRlci5jb3VudCkgLSBzbGlkZXIudyAtIHNsaWRlTWFyZ2luO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVyLml0ZW1XID0gc2xpZGVyLnc7XG4gICAgICAgIHNsaWRlci5wYWdpbmdDb3VudCA9IHNsaWRlci5jb3VudDtcbiAgICAgICAgc2xpZGVyLmxhc3QgPSBzbGlkZXIuY291bnQgLSAxO1xuICAgICAgfVxuICAgICAgc2xpZGVyLmNvbXB1dGVkVyA9IHNsaWRlci5pdGVtVyAtIHNsaWRlci5ib3hQYWRkaW5nO1xuICAgIH07XG5cbiAgICBzbGlkZXIudXBkYXRlID0gZnVuY3Rpb24ocG9zLCBhY3Rpb24pIHtcbiAgICAgIHNsaWRlci5kb01hdGgoKTtcblxuICAgICAgLy8gdXBkYXRlIGN1cnJlbnRTbGlkZSBhbmQgc2xpZGVyLmFuaW1hdGluZ1RvIGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKCFjYXJvdXNlbCkge1xuICAgICAgICBpZiAocG9zIDwgc2xpZGVyLmN1cnJlbnRTbGlkZSkge1xuICAgICAgICAgIHNsaWRlci5jdXJyZW50U2xpZGUgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3MgPD0gc2xpZGVyLmN1cnJlbnRTbGlkZSAmJiBwb3MgIT09IDApIHtcbiAgICAgICAgICBzbGlkZXIuY3VycmVudFNsaWRlIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVyLmFuaW1hdGluZ1RvID0gc2xpZGVyLmN1cnJlbnRTbGlkZTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIGNvbnRyb2xOYXZcbiAgICAgIGlmIChzbGlkZXIudmFycy5jb250cm9sTmF2ICYmICFzbGlkZXIubWFudWFsQ29udHJvbHMpIHtcbiAgICAgICAgaWYgKChhY3Rpb24gPT09IFwiYWRkXCIgJiYgIWNhcm91c2VsKSB8fCBzbGlkZXIucGFnaW5nQ291bnQgPiBzbGlkZXIuY29udHJvbE5hdi5sZW5ndGgpIHtcbiAgICAgICAgICBtZXRob2RzLmNvbnRyb2xOYXYudXBkYXRlKFwiYWRkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKChhY3Rpb24gPT09IFwicmVtb3ZlXCIgJiYgIWNhcm91c2VsKSB8fCBzbGlkZXIucGFnaW5nQ291bnQgPCBzbGlkZXIuY29udHJvbE5hdi5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoY2Fyb3VzZWwgJiYgc2xpZGVyLmN1cnJlbnRTbGlkZSA+IHNsaWRlci5sYXN0KSB7XG4gICAgICAgICAgICBzbGlkZXIuY3VycmVudFNsaWRlIC09IDE7XG4gICAgICAgICAgICBzbGlkZXIuYW5pbWF0aW5nVG8gLT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWV0aG9kcy5jb250cm9sTmF2LnVwZGF0ZShcInJlbW92ZVwiLCBzbGlkZXIubGFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHVwZGF0ZSBkaXJlY3Rpb25OYXZcbiAgICAgIGlmIChzbGlkZXIudmFycy5kaXJlY3Rpb25OYXYpIHsgbWV0aG9kcy5kaXJlY3Rpb25OYXYudXBkYXRlKCk7IH1cblxuICAgIH07XG5cbiAgICBzbGlkZXIuYWRkU2xpZGUgPSBmdW5jdGlvbihvYmosIHBvcykge1xuICAgICAgdmFyICRvYmogPSAkKG9iaik7XG5cbiAgICAgIHNsaWRlci5jb3VudCArPSAxO1xuICAgICAgc2xpZGVyLmxhc3QgPSBzbGlkZXIuY291bnQgLSAxO1xuXG4gICAgICAvLyBhcHBlbmQgbmV3IHNsaWRlXG4gICAgICBpZiAodmVydGljYWwgJiYgcmV2ZXJzZSkge1xuICAgICAgICAocG9zICE9PSB1bmRlZmluZWQpID8gc2xpZGVyLnNsaWRlcy5lcShzbGlkZXIuY291bnQgLSBwb3MpLmFmdGVyKCRvYmopIDogc2xpZGVyLmNvbnRhaW5lci5wcmVwZW5kKCRvYmopO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHBvcyAhPT0gdW5kZWZpbmVkKSA/IHNsaWRlci5zbGlkZXMuZXEocG9zKS5iZWZvcmUoJG9iaikgOiBzbGlkZXIuY29udGFpbmVyLmFwcGVuZCgkb2JqKTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIGN1cnJlbnRTbGlkZSwgYW5pbWF0aW5nVG8sIGNvbnRyb2xOYXYsIGFuZCBkaXJlY3Rpb25OYXZcbiAgICAgIHNsaWRlci51cGRhdGUocG9zLCBcImFkZFwiKTtcblxuICAgICAgLy8gdXBkYXRlIHNsaWRlci5zbGlkZXNcbiAgICAgIHNsaWRlci5zbGlkZXMgPSAkKHNsaWRlci52YXJzLnNlbGVjdG9yICsgJzpub3QoLmNsb25lKScsIHNsaWRlcik7XG4gICAgICAvLyByZS1zZXR1cCB0aGUgc2xpZGVyIHRvIGFjY29tZGF0ZSBuZXcgc2xpZGVcbiAgICAgIHNsaWRlci5zZXR1cCgpO1xuXG4gICAgICAvL0ZsZXhTbGlkZXI6IGFkZGVkKCkgQ2FsbGJhY2tcbiAgICAgIHNsaWRlci52YXJzLmFkZGVkKHNsaWRlcik7XG4gICAgfTtcbiAgICBzbGlkZXIucmVtb3ZlU2xpZGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHZhciBwb3MgPSAoaXNOYU4ob2JqKSkgPyBzbGlkZXIuc2xpZGVzLmluZGV4KCQob2JqKSkgOiBvYmo7XG5cbiAgICAgIC8vIHVwZGF0ZSBjb3VudFxuICAgICAgc2xpZGVyLmNvdW50IC09IDE7XG4gICAgICBzbGlkZXIubGFzdCA9IHNsaWRlci5jb3VudCAtIDE7XG5cbiAgICAgIC8vIHJlbW92ZSBzbGlkZVxuICAgICAgaWYgKGlzTmFOKG9iaikpIHtcbiAgICAgICAgJChvYmosIHNsaWRlci5zbGlkZXMpLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHZlcnRpY2FsICYmIHJldmVyc2UpID8gc2xpZGVyLnNsaWRlcy5lcShzbGlkZXIubGFzdCkucmVtb3ZlKCkgOiBzbGlkZXIuc2xpZGVzLmVxKG9iaikucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZSBjdXJyZW50U2xpZGUsIGFuaW1hdGluZ1RvLCBjb250cm9sTmF2LCBhbmQgZGlyZWN0aW9uTmF2XG4gICAgICBzbGlkZXIuZG9NYXRoKCk7XG4gICAgICBzbGlkZXIudXBkYXRlKHBvcywgXCJyZW1vdmVcIik7XG5cbiAgICAgIC8vIHVwZGF0ZSBzbGlkZXIuc2xpZGVzXG4gICAgICBzbGlkZXIuc2xpZGVzID0gJChzbGlkZXIudmFycy5zZWxlY3RvciArICc6bm90KC5jbG9uZSknLCBzbGlkZXIpO1xuICAgICAgLy8gcmUtc2V0dXAgdGhlIHNsaWRlciB0byBhY2NvbWRhdGUgbmV3IHNsaWRlXG4gICAgICBzbGlkZXIuc2V0dXAoKTtcblxuICAgICAgLy8gRmxleFNsaWRlcjogcmVtb3ZlZCgpIENhbGxiYWNrXG4gICAgICBzbGlkZXIudmFycy5yZW1vdmVkKHNsaWRlcik7XG4gICAgfTtcblxuICAgIC8vRmxleFNsaWRlcjogSW5pdGlhbGl6ZVxuICAgIG1ldGhvZHMuaW5pdCgpO1xuICB9O1xuXG4gIC8vIEVuc3VyZSB0aGUgc2xpZGVyIGlzbid0IGZvY3Vzc2VkIGlmIHRoZSB3aW5kb3cgbG9zZXMgZm9jdXMuXG4gICQoIHdpbmRvdyApLmJsdXIoIGZ1bmN0aW9uICggZSApIHtcbiAgICBmb2N1c2VkID0gZmFsc2U7XG4gIH0pLmZvY3VzKCBmdW5jdGlvbiAoIGUgKSB7XG4gICAgZm9jdXNlZCA9IHRydWU7XG4gIH0pO1xuXG4gIC8vRmxleFNsaWRlcjogRGVmYXVsdCBTZXR0aW5nc1xuICAkLmZsZXhzbGlkZXIuZGVmYXVsdHMgPSB7XG4gICAgbmFtZXNwYWNlOiBcImZsZXgtXCIsICAgICAgICAgICAgIC8ve05FV30gU3RyaW5nOiBQcmVmaXggc3RyaW5nIGF0dGFjaGVkIHRvIHRoZSBjbGFzcyBvZiBldmVyeSBlbGVtZW50IGdlbmVyYXRlZCBieSB0aGUgcGx1Z2luXG4gICAgc2VsZWN0b3I6IFwiLnNsaWRlcyA+IGxpXCIsICAgICAgIC8ve05FV30gU2VsZWN0b3I6IE11c3QgbWF0Y2ggYSBzaW1wbGUgcGF0dGVybi4gJ3tjb250YWluZXJ9ID4ge3NsaWRlfScgLS0gSWdub3JlIHBhdHRlcm4gYXQgeW91ciBvd24gcGVyaWxcbiAgICBhbmltYXRpb246IFwiZmFkZVwiLCAgICAgICAgICAgICAgLy9TdHJpbmc6IFNlbGVjdCB5b3VyIGFuaW1hdGlvbiB0eXBlLCBcImZhZGVcIiBvciBcInNsaWRlXCJcbiAgICBlYXNpbmc6IFwic3dpbmdcIiwgICAgICAgICAgICAgICAgLy97TkVXfSBTdHJpbmc6IERldGVybWluZXMgdGhlIGVhc2luZyBtZXRob2QgdXNlZCBpbiBqUXVlcnkgdHJhbnNpdGlvbnMuIGpRdWVyeSBlYXNpbmcgcGx1Z2luIGlzIHN1cHBvcnRlZCFcbiAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLCAgICAgICAgLy9TdHJpbmc6IFNlbGVjdCB0aGUgc2xpZGluZyBkaXJlY3Rpb24sIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIlxuICAgIHJldmVyc2U6IGZhbHNlLCAgICAgICAgICAgICAgICAgLy97TkVXfSBCb29sZWFuOiBSZXZlcnNlIHRoZSBhbmltYXRpb24gZGlyZWN0aW9uXG4gICAgYW5pbWF0aW9uTG9vcDogdHJ1ZSwgICAgICAgICAgICAvL0Jvb2xlYW46IFNob3VsZCB0aGUgYW5pbWF0aW9uIGxvb3A/IElmIGZhbHNlLCBkaXJlY3Rpb25OYXYgd2lsbCByZWNlaXZlZCBcImRpc2FibGVcIiBjbGFzc2VzIGF0IGVpdGhlciBlbmRcbiAgICBzbW9vdGhIZWlnaHQ6IGZhbHNlLCAgICAgICAgICAgIC8ve05FV30gQm9vbGVhbjogQWxsb3cgaGVpZ2h0IG9mIHRoZSBzbGlkZXIgdG8gYW5pbWF0ZSBzbW9vdGhseSBpbiBob3Jpem9udGFsIG1vZGVcbiAgICBzdGFydEF0OiAwLCAgICAgICAgICAgICAgICAgICAgIC8vSW50ZWdlcjogVGhlIHNsaWRlIHRoYXQgdGhlIHNsaWRlciBzaG91bGQgc3RhcnQgb24uIEFycmF5IG5vdGF0aW9uICgwID0gZmlyc3Qgc2xpZGUpXG4gICAgc2xpZGVzaG93OiB0cnVlLCAgICAgICAgICAgICAgICAvL0Jvb2xlYW46IEFuaW1hdGUgc2xpZGVyIGF1dG9tYXRpY2FsbHlcbiAgICBzbGlkZXNob3dTcGVlZDogNzAwMCwgICAgICAgICAgIC8vSW50ZWdlcjogU2V0IHRoZSBzcGVlZCBvZiB0aGUgc2xpZGVzaG93IGN5Y2xpbmcsIGluIG1pbGxpc2Vjb25kc1xuICAgIGFuaW1hdGlvblNwZWVkOiA2MDAsICAgICAgICAgICAgLy9JbnRlZ2VyOiBTZXQgdGhlIHNwZWVkIG9mIGFuaW1hdGlvbnMsIGluIG1pbGxpc2Vjb25kc1xuICAgIGluaXREZWxheTogMCwgICAgICAgICAgICAgICAgICAgLy97TkVXfSBJbnRlZ2VyOiBTZXQgYW4gaW5pdGlhbGl6YXRpb24gZGVsYXksIGluIG1pbGxpc2Vjb25kc1xuICAgIHJhbmRvbWl6ZTogZmFsc2UsICAgICAgICAgICAgICAgLy9Cb29sZWFuOiBSYW5kb21pemUgc2xpZGUgb3JkZXJcbiAgICBmYWRlRmlyc3RTbGlkZTogdHJ1ZSwgICAgICAgICAgIC8vQm9vbGVhbjogRmFkZSBpbiB0aGUgZmlyc3Qgc2xpZGUgd2hlbiBhbmltYXRpb24gdHlwZSBpcyBcImZhZGVcIlxuICAgIHRodW1iQ2FwdGlvbnM6IGZhbHNlLCAgICAgICAgICAgLy9Cb29sZWFuOiBXaGV0aGVyIG9yIG5vdCB0byBwdXQgY2FwdGlvbnMgb24gdGh1bWJuYWlscyB3aGVuIHVzaW5nIHRoZSBcInRodW1ibmFpbHNcIiBjb250cm9sTmF2LlxuXG4gICAgLy8gVXNhYmlsaXR5IGZlYXR1cmVzXG4gICAgcGF1c2VPbkFjdGlvbjogdHJ1ZSwgICAgICAgICAgICAvL0Jvb2xlYW46IFBhdXNlIHRoZSBzbGlkZXNob3cgd2hlbiBpbnRlcmFjdGluZyB3aXRoIGNvbnRyb2wgZWxlbWVudHMsIGhpZ2hseSByZWNvbW1lbmRlZC5cbiAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLCAgICAgICAgICAgIC8vQm9vbGVhbjogUGF1c2UgdGhlIHNsaWRlc2hvdyB3aGVuIGhvdmVyaW5nIG92ZXIgc2xpZGVyLCB0aGVuIHJlc3VtZSB3aGVuIG5vIGxvbmdlciBob3ZlcmluZ1xuICAgIHBhdXNlSW52aXNpYmxlOiB0cnVlLCAgIFx0XHQvL3tORVd9IEJvb2xlYW46IFBhdXNlIHRoZSBzbGlkZXNob3cgd2hlbiB0YWIgaXMgaW52aXNpYmxlLCByZXN1bWUgd2hlbiB2aXNpYmxlLiBQcm92aWRlcyBiZXR0ZXIgVVgsIGxvd2VyIENQVSB1c2FnZS5cbiAgICB1c2VDU1M6IHRydWUsICAgICAgICAgICAgICAgICAgIC8ve05FV30gQm9vbGVhbjogU2xpZGVyIHdpbGwgdXNlIENTUzMgdHJhbnNpdGlvbnMgaWYgYXZhaWxhYmxlXG4gICAgdG91Y2g6IHRydWUsICAgICAgICAgICAgICAgICAgICAvL3tORVd9IEJvb2xlYW46IEFsbG93IHRvdWNoIHN3aXBlIG5hdmlnYXRpb24gb2YgdGhlIHNsaWRlciBvbiB0b3VjaC1lbmFibGVkIGRldmljZXNcbiAgICB2aWRlbzogZmFsc2UsICAgICAgICAgICAgICAgICAgIC8ve05FV30gQm9vbGVhbjogSWYgdXNpbmcgdmlkZW8gaW4gdGhlIHNsaWRlciwgd2lsbCBwcmV2ZW50IENTUzMgM0QgVHJhbnNmb3JtcyB0byBhdm9pZCBncmFwaGljYWwgZ2xpdGNoZXNcblxuICAgIC8vIFByaW1hcnkgQ29udHJvbHNcbiAgICBjb250cm9sTmF2OiB0cnVlLCAgICAgICAgICAgICAgIC8vQm9vbGVhbjogQ3JlYXRlIG5hdmlnYXRpb24gZm9yIHBhZ2luZyBjb250cm9sIG9mIGVhY2ggc2xpZGU/IE5vdGU6IExlYXZlIHRydWUgZm9yIG1hbnVhbENvbnRyb2xzIHVzYWdlXG4gICAgZGlyZWN0aW9uTmF2OiB0cnVlLCAgICAgICAgICAgICAvL0Jvb2xlYW46IENyZWF0ZSBuYXZpZ2F0aW9uIGZvciBwcmV2aW91cy9uZXh0IG5hdmlnYXRpb24/ICh0cnVlL2ZhbHNlKVxuICAgIHByZXZUZXh0OiBcIlByZXZpb3VzXCIsICAgICAgICAgICAvL1N0cmluZzogU2V0IHRoZSB0ZXh0IGZvciB0aGUgXCJwcmV2aW91c1wiIGRpcmVjdGlvbk5hdiBpdGVtXG4gICAgbmV4dFRleHQ6IFwiTmV4dFwiLCAgICAgICAgICAgICAgIC8vU3RyaW5nOiBTZXQgdGhlIHRleHQgZm9yIHRoZSBcIm5leHRcIiBkaXJlY3Rpb25OYXYgaXRlbVxuXG4gICAgLy8gU2Vjb25kYXJ5IE5hdmlnYXRpb25cbiAgICBrZXlib2FyZDogdHJ1ZSwgICAgICAgICAgICAgICAgIC8vQm9vbGVhbjogQWxsb3cgc2xpZGVyIG5hdmlnYXRpbmcgdmlhIGtleWJvYXJkIGxlZnQvcmlnaHQga2V5c1xuICAgIG11bHRpcGxlS2V5Ym9hcmQ6IGZhbHNlLCAgICAgICAgLy97TkVXfSBCb29sZWFuOiBBbGxvdyBrZXlib2FyZCBuYXZpZ2F0aW9uIHRvIGFmZmVjdCBtdWx0aXBsZSBzbGlkZXJzLiBEZWZhdWx0IGJlaGF2aW9yIGN1dHMgb3V0IGtleWJvYXJkIG5hdmlnYXRpb24gd2l0aCBtb3JlIHRoYW4gb25lIHNsaWRlciBwcmVzZW50LlxuICAgIG1vdXNld2hlZWw6IGZhbHNlLCAgICAgICAgICAgICAgLy97VVBEQVRFRH0gQm9vbGVhbjogUmVxdWlyZXMganF1ZXJ5Lm1vdXNld2hlZWwuanMgKGh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uYWFyb24vanF1ZXJ5LW1vdXNld2hlZWwpIC0gQWxsb3dzIHNsaWRlciBuYXZpZ2F0aW5nIHZpYSBtb3VzZXdoZWVsXG4gICAgcGF1c2VQbGF5OiBmYWxzZSwgICAgICAgICAgICAgICAvL0Jvb2xlYW46IENyZWF0ZSBwYXVzZS9wbGF5IGR5bmFtaWMgZWxlbWVudFxuICAgIHBhdXNlVGV4dDogXCJQYXVzZVwiLCAgICAgICAgICAgICAvL1N0cmluZzogU2V0IHRoZSB0ZXh0IGZvciB0aGUgXCJwYXVzZVwiIHBhdXNlUGxheSBpdGVtXG4gICAgcGxheVRleHQ6IFwiUGxheVwiLCAgICAgICAgICAgICAgIC8vU3RyaW5nOiBTZXQgdGhlIHRleHQgZm9yIHRoZSBcInBsYXlcIiBwYXVzZVBsYXkgaXRlbVxuXG4gICAgLy8gU3BlY2lhbCBwcm9wZXJ0aWVzXG4gICAgY29udHJvbHNDb250YWluZXI6IFwiXCIsICAgICAgICAgIC8ve1VQREFURUR9IGpRdWVyeSBPYmplY3QvU2VsZWN0b3I6IERlY2xhcmUgd2hpY2ggY29udGFpbmVyIHRoZSBuYXZpZ2F0aW9uIGVsZW1lbnRzIHNob3VsZCBiZSBhcHBlbmRlZCB0b28uIERlZmF1bHQgY29udGFpbmVyIGlzIHRoZSBGbGV4U2xpZGVyIGVsZW1lbnQuIEV4YW1wbGUgdXNlIHdvdWxkIGJlICQoXCIuZmxleHNsaWRlci1jb250YWluZXJcIikuIFByb3BlcnR5IGlzIGlnbm9yZWQgaWYgZ2l2ZW4gZWxlbWVudCBpcyBub3QgZm91bmQuXG4gICAgbWFudWFsQ29udHJvbHM6IFwiXCIsICAgICAgICAgICAgIC8ve1VQREFURUR9IGpRdWVyeSBPYmplY3QvU2VsZWN0b3I6IERlY2xhcmUgY3VzdG9tIGNvbnRyb2wgbmF2aWdhdGlvbi4gRXhhbXBsZXMgd291bGQgYmUgJChcIi5mbGV4LWNvbnRyb2wtbmF2IGxpXCIpIG9yIFwiI3RhYnMtbmF2IGxpIGltZ1wiLCBldGMuIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4geW91ciBjb250cm9sTmF2IHNob3VsZCBtYXRjaCB0aGUgbnVtYmVyIG9mIHNsaWRlcy90YWJzLlxuICAgIGN1c3RvbURpcmVjdGlvbk5hdjogXCJcIiwgICAgICAgICAvL3tORVd9IGpRdWVyeSBPYmplY3QvU2VsZWN0b3I6IEN1c3RvbSBwcmV2IC8gbmV4dCBidXR0b24uIE11c3QgYmUgdHdvIGpRdWVyeSBlbGVtZW50cy4gSW4gb3JkZXIgdG8gbWFrZSB0aGUgZXZlbnRzIHdvcmsgdGhleSBoYXZlIHRvIGhhdmUgdGhlIGNsYXNzZXMgXCJwcmV2XCIgYW5kIFwibmV4dFwiIChwbHVzIG5hbWVzcGFjZSlcbiAgICBzeW5jOiBcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgLy97TkVXfSBTZWxlY3RvcjogTWlycm9yIHRoZSBhY3Rpb25zIHBlcmZvcm1lZCBvbiB0aGlzIHNsaWRlciB3aXRoIGFub3RoZXIgc2xpZGVyLiBVc2Ugd2l0aCBjYXJlLlxuICAgIGFzTmF2Rm9yOiBcIlwiLCAgICAgICAgICAgICAgICAgICAvL3tORVd9IFNlbGVjdG9yOiBJbnRlcm5hbCBwcm9wZXJ0eSBleHBvc2VkIGZvciB0dXJuaW5nIHRoZSBzbGlkZXIgaW50byBhIHRodW1ibmFpbCBuYXZpZ2F0aW9uIGZvciBhbm90aGVyIHNsaWRlclxuXG4gICAgLy8gQ2Fyb3VzZWwgT3B0aW9uc1xuICAgIGl0ZW1XaWR0aDogMCwgICAgICAgICAgICAgICAgICAgLy97TkVXfSBJbnRlZ2VyOiBCb3gtbW9kZWwgd2lkdGggb2YgaW5kaXZpZHVhbCBjYXJvdXNlbCBpdGVtcywgaW5jbHVkaW5nIGhvcml6b250YWwgYm9yZGVycyBhbmQgcGFkZGluZy5cbiAgICBpdGVtTWFyZ2luOiAwLCAgICAgICAgICAgICAgICAgIC8ve05FV30gSW50ZWdlcjogTWFyZ2luIGJldHdlZW4gY2Fyb3VzZWwgaXRlbXMuXG4gICAgbWluSXRlbXM6IDEsICAgICAgICAgICAgICAgICAgICAvL3tORVd9IEludGVnZXI6IE1pbmltdW0gbnVtYmVyIG9mIGNhcm91c2VsIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHZpc2libGUuIEl0ZW1zIHdpbGwgcmVzaXplIGZsdWlkbHkgd2hlbiBiZWxvdyB0aGlzLlxuICAgIG1heEl0ZW1zOiAwLCAgICAgICAgICAgICAgICAgICAgLy97TkVXfSBJbnRlZ2VyOiBNYXhtaW11bSBudW1iZXIgb2YgY2Fyb3VzZWwgaXRlbXMgdGhhdCBzaG91bGQgYmUgdmlzaWJsZS4gSXRlbXMgd2lsbCByZXNpemUgZmx1aWRseSB3aGVuIGFib3ZlIHRoaXMgbGltaXQuXG4gICAgbW92ZTogMCwgICAgICAgICAgICAgICAgICAgICAgICAvL3tORVd9IEludGVnZXI6IE51bWJlciBvZiBjYXJvdXNlbCBpdGVtcyB0aGF0IHNob3VsZCBtb3ZlIG9uIGFuaW1hdGlvbi4gSWYgMCwgc2xpZGVyIHdpbGwgbW92ZSBhbGwgdmlzaWJsZSBpdGVtcy5cbiAgICBhbGxvd09uZVNsaWRlOiB0cnVlLCAgICAgICAgICAgLy97TkVXfSBCb29sZWFuOiBXaGV0aGVyIG9yIG5vdCB0byBhbGxvdyBhIHNsaWRlciBjb21wcmlzZWQgb2YgYSBzaW5nbGUgc2xpZGVcblxuICAgIC8vIENhbGxiYWNrIEFQSVxuICAgIHN0YXJ0OiBmdW5jdGlvbigpe30sICAgICAgICAgICAgLy9DYWxsYmFjazogZnVuY3Rpb24oc2xpZGVyKSAtIEZpcmVzIHdoZW4gdGhlIHNsaWRlciBsb2FkcyB0aGUgZmlyc3Qgc2xpZGVcbiAgICBiZWZvcmU6IGZ1bmN0aW9uKCl7fSwgICAgICAgICAgIC8vQ2FsbGJhY2s6IGZ1bmN0aW9uKHNsaWRlcikgLSBGaXJlcyBhc3luY2hyb25vdXNseSB3aXRoIGVhY2ggc2xpZGVyIGFuaW1hdGlvblxuICAgIGFmdGVyOiBmdW5jdGlvbigpe30sICAgICAgICAgICAgLy9DYWxsYmFjazogZnVuY3Rpb24oc2xpZGVyKSAtIEZpcmVzIGFmdGVyIGVhY2ggc2xpZGVyIGFuaW1hdGlvbiBjb21wbGV0ZXNcbiAgICBlbmQ6IGZ1bmN0aW9uKCl7fSwgICAgICAgICAgICAgIC8vQ2FsbGJhY2s6IGZ1bmN0aW9uKHNsaWRlcikgLSBGaXJlcyB3aGVuIHRoZSBzbGlkZXIgcmVhY2hlcyB0aGUgbGFzdCBzbGlkZSAoYXN5bmNocm9ub3VzKVxuICAgIGFkZGVkOiBmdW5jdGlvbigpe30sICAgICAgICAgICAgLy97TkVXfSBDYWxsYmFjazogZnVuY3Rpb24oc2xpZGVyKSAtIEZpcmVzIGFmdGVyIGEgc2xpZGUgaXMgYWRkZWRcbiAgICByZW1vdmVkOiBmdW5jdGlvbigpe30sICAgICAgICAgICAvL3tORVd9IENhbGxiYWNrOiBmdW5jdGlvbihzbGlkZXIpIC0gRmlyZXMgYWZ0ZXIgYSBzbGlkZSBpcyByZW1vdmVkXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7fSAgICAgICAgICAgICAvL3tORVd9IENhbGxiYWNrOiBmdW5jdGlvbihzbGlkZXIpIC0gRmlyZXMgYWZ0ZXIgdGhlIHNsaWRlciBpcyBpbml0aWFsbHkgc2V0dXBcbiAgfTtcblxuICAvL0ZsZXhTbGlkZXI6IFBsdWdpbiBGdW5jdGlvblxuICAkLmZuLmZsZXhzbGlkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zID0ge307IH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgIHNlbGVjdG9yID0gKG9wdGlvbnMuc2VsZWN0b3IpID8gb3B0aW9ucy5zZWxlY3RvciA6IFwiLnNsaWRlcyA+IGxpXCIsXG4gICAgICAgICAgICAkc2xpZGVzID0gJHRoaXMuZmluZChzZWxlY3Rvcik7XG5cbiAgICAgIGlmICggKCAkc2xpZGVzLmxlbmd0aCA9PT0gMSAmJiBvcHRpb25zLmFsbG93T25lU2xpZGUgPT09IHRydWUgKSB8fCAkc2xpZGVzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAkc2xpZGVzLmZhZGVJbig0MDApO1xuICAgICAgICAgIGlmIChvcHRpb25zLnN0YXJ0KSB7IG9wdGlvbnMuc3RhcnQoJHRoaXMpOyB9XG4gICAgICAgIH0gZWxzZSBpZiAoJHRoaXMuZGF0YSgnZmxleHNsaWRlcicpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBuZXcgJC5mbGV4c2xpZGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGVscGVyIHN0cmluZ3MgdG8gcXVpY2tseSBwZXJmb3JtIGZ1bmN0aW9ucyBvbiB0aGUgc2xpZGVyXG4gICAgICB2YXIgJHNsaWRlciA9ICQodGhpcykuZGF0YSgnZmxleHNsaWRlcicpO1xuICAgICAgc3dpdGNoIChvcHRpb25zKSB7XG4gICAgICAgIGNhc2UgXCJwbGF5XCI6ICRzbGlkZXIucGxheSgpOyBicmVhaztcbiAgICAgICAgY2FzZSBcInBhdXNlXCI6ICRzbGlkZXIucGF1c2UoKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdG9wXCI6ICRzbGlkZXIuc3RvcCgpOyBicmVhaztcbiAgICAgICAgY2FzZSBcIm5leHRcIjogJHNsaWRlci5mbGV4QW5pbWF0ZSgkc2xpZGVyLmdldFRhcmdldChcIm5leHRcIiksIHRydWUpOyBicmVhaztcbiAgICAgICAgY2FzZSBcInByZXZcIjpcbiAgICAgICAgY2FzZSBcInByZXZpb3VzXCI6ICRzbGlkZXIuZmxleEFuaW1hdGUoJHNsaWRlci5nZXRUYXJnZXQoXCJwcmV2XCIpLCB0cnVlKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIikgeyAkc2xpZGVyLmZsZXhBbmltYXRlKG9wdGlvbnMsIHRydWUpOyB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoalF1ZXJ5KTtcbiIsIi8qIVxuICogaGVhZHJvb20uanMgdjAuNy4wIC0gR2l2ZSB5b3VyIHBhZ2Ugc29tZSBoZWFkcm9vbS4gSGlkZSB5b3VyIGhlYWRlciB1bnRpbCB5b3UgbmVlZCBpdFxuICogQ29weXJpZ2h0IChjKSAyMDE1IE5pY2sgV2lsbGlhbXMgLSBodHRwOi8vd2lja3kubmlsbGlhLm1zL2hlYWRyb29tLmpzXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIENPTU1PTkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gQlJPV1NFUlxuICAgIHJvb3QuSGVhZHJvb20gPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiBleHBvcnRlZCBmZWF0dXJlcyAqL1xuICBcbiAgdmFyIGZlYXR1cmVzID0ge1xuICAgIGJpbmQgOiAhIShmdW5jdGlvbigpe30uYmluZCksXG4gICAgY2xhc3NMaXN0IDogJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgIHJBRiA6ICEhKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICB9O1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIFxuICAvKipcbiAgICogSGFuZGxlcyBkZWJvdW5jaW5nIG9mIGV2ZW50cyB2aWEgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAqIEBzZWUgaHR0cDovL3d3dy5odG1sNXJvY2tzLmNvbS9lbi90dXRvcmlhbHMvc3BlZWQvYW5pbWF0aW9ucy9cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGhhbmRsZSB3aGljaGV2ZXIgZXZlbnRcbiAgICovXG4gIGZ1bmN0aW9uIERlYm91bmNlciAoY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy50aWNraW5nID0gZmFsc2U7XG4gIH1cbiAgRGVib3VuY2VyLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvciA6IERlYm91bmNlcixcbiAgXG4gICAgLyoqXG4gICAgICogZGlzcGF0Y2hlcyB0aGUgZXZlbnQgdG8gdGhlIHN1cHBsaWVkIGNhbGxiYWNrXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1cGRhdGUgOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgdGhpcy50aWNraW5nID0gZmFsc2U7XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogZW5zdXJlcyBldmVudHMgZG9uJ3QgZ2V0IHN0YWNrZWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlcXVlc3RUaWNrIDogZnVuY3Rpb24oKSB7XG4gICAgICBpZighdGhpcy50aWNraW5nKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJhZkNhbGxiYWNrIHx8ICh0aGlzLnJhZkNhbGxiYWNrID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnRpY2tpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0aGlzIGFzIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBoYW5kbGVFdmVudCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZXF1ZXN0VGljaygpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrIGlmIG9iamVjdCBpcyBwYXJ0IG9mIHRoZSBET01cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogZWxlbWVudCB0byBjaGVja1xuICAgKi9cbiAgZnVuY3Rpb24gaXNET01FbGVtZW50KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKG9iaiA9PT0gd2luZG93IHx8IG9iai5ub2RlVHlwZSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGV4dGVuZGluZyBvYmplY3RzXG4gICAqL1xuICBmdW5jdGlvbiBleHRlbmQgKG9iamVjdCAvKiwgb2JqZWN0TiAuLi4gKi8pIHtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhcmd1bWVudHMgaW4gZXh0ZW5kIGZ1bmN0aW9uJyk7XG4gICAgfVxuICBcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0IHx8IHt9LFxuICAgICAgICBrZXksXG4gICAgICAgIGk7XG4gIFxuICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByZXBsYWNlbWVudCA9IGFyZ3VtZW50c1tpXSB8fCB7fTtcbiAgXG4gICAgICBmb3IgKGtleSBpbiByZXBsYWNlbWVudCkge1xuICAgICAgICAvLyBSZWN1cnNlIGludG8gb2JqZWN0IGV4Y2VwdCBpZiB0aGUgb2JqZWN0IGlzIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgaWYodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiAhIGlzRE9NRWxlbWVudChyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IGV4dGVuZChyZXN1bHRba2V5XSwgcmVwbGFjZW1lbnRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSByZXN1bHRba2V5XSB8fCByZXBsYWNlbWVudFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIFxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBub3JtYWxpemluZyB0b2xlcmFuY2Ugb3B0aW9uIHRvIG9iamVjdCBmb3JtYXRcbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVRvbGVyYW5jZSAodCkge1xuICAgIHJldHVybiB0ID09PSBPYmplY3QodCkgPyB0IDogeyBkb3duIDogdCwgdXAgOiB0IH07XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBVSSBlbmhhbmNlbWVudCBmb3IgZml4ZWQgaGVhZGVycy5cbiAgICogSGlkZXMgaGVhZGVyIHdoZW4gc2Nyb2xsaW5nIGRvd25cbiAgICogU2hvd3MgaGVhZGVyIHdoZW4gc2Nyb2xsaW5nIHVwXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IGVsZW0gdGhlIGhlYWRlciBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgZm9yIHRoZSB3aWRnZXRcbiAgICovXG4gIGZ1bmN0aW9uIEhlYWRyb29tIChlbGVtLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGV4dGVuZChvcHRpb25zLCBIZWFkcm9vbS5vcHRpb25zKTtcbiAgXG4gICAgdGhpcy5sYXN0S25vd25TY3JvbGxZID0gMDtcbiAgICB0aGlzLmVsZW0gICAgICAgICAgICAgPSBlbGVtO1xuICAgIHRoaXMuZGVib3VuY2VyICAgICAgICA9IG5ldyBEZWJvdW5jZXIodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2xlcmFuY2UgICAgICAgID0gbm9ybWFsaXplVG9sZXJhbmNlKG9wdGlvbnMudG9sZXJhbmNlKTtcbiAgICB0aGlzLmNsYXNzZXMgICAgICAgICAgPSBvcHRpb25zLmNsYXNzZXM7XG4gICAgdGhpcy5vZmZzZXQgICAgICAgICAgID0gb3B0aW9ucy5vZmZzZXQ7XG4gICAgdGhpcy5zY3JvbGxlciAgICAgICAgID0gb3B0aW9ucy5zY3JvbGxlcjtcbiAgICB0aGlzLmluaXRpYWxpc2VkICAgICAgPSBmYWxzZTtcbiAgICB0aGlzLm9uUGluICAgICAgICAgICAgPSBvcHRpb25zLm9uUGluO1xuICAgIHRoaXMub25VbnBpbiAgICAgICAgICA9IG9wdGlvbnMub25VbnBpbjtcbiAgICB0aGlzLm9uVG9wICAgICAgICAgICAgPSBvcHRpb25zLm9uVG9wO1xuICAgIHRoaXMub25Ob3RUb3AgICAgICAgICA9IG9wdGlvbnMub25Ob3RUb3A7XG4gIH1cbiAgSGVhZHJvb20ucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yIDogSGVhZHJvb20sXG4gIFxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSB3aWRnZXRcbiAgICAgKi9cbiAgICBpbml0IDogZnVuY3Rpb24oKSB7XG4gICAgICBpZighSGVhZHJvb20uY3V0c1RoZU11c3RhcmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5pbml0aWFsKTtcbiAgXG4gICAgICAvLyBkZWZlciBldmVudCByZWdpc3RyYXRpb24gdG8gaGFuZGxlIGJyb3dzZXIgXG4gICAgICAvLyBwb3RlbnRpYWxseSByZXN0b3JpbmcgcHJldmlvdXMgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuYXR0YWNoRXZlbnQuYmluZCh0aGlzKSwgMTAwKTtcbiAgXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBVbmF0dGFjaGVzIGV2ZW50cyBhbmQgcmVtb3ZlcyBhbnkgY2xhc3NlcyB0aGF0IHdlcmUgYWRkZWRcbiAgICAgKi9cbiAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcztcbiAgXG4gICAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLnVucGlubmVkLCBjbGFzc2VzLnBpbm5lZCwgY2xhc3Nlcy50b3AsIGNsYXNzZXMuaW5pdGlhbCk7XG4gICAgICB0aGlzLnNjcm9sbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZGVib3VuY2VyLCBmYWxzZSk7XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdGhlIHNjcm9sbCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXR0YWNoRXZlbnQgOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpc2VkKXtcbiAgICAgICAgdGhpcy5sYXN0S25vd25TY3JvbGxZID0gdGhpcy5nZXRTY3JvbGxZKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZGVib3VuY2VyLCBmYWxzZSk7XG4gIFxuICAgICAgICB0aGlzLmRlYm91bmNlci5oYW5kbGVFdmVudCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLyoqXG4gICAgICogVW5waW5zIHRoZSBoZWFkZXIgaWYgaXQncyBjdXJyZW50bHkgcGlubmVkXG4gICAgICovXG4gICAgdW5waW4gOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLmVsZW0uY2xhc3NMaXN0LFxuICAgICAgICBjbGFzc2VzID0gdGhpcy5jbGFzc2VzO1xuICAgICAgXG4gICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMoY2xhc3Nlcy5waW5uZWQpIHx8ICFjbGFzc0xpc3QuY29udGFpbnMoY2xhc3Nlcy51bnBpbm5lZCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZChjbGFzc2VzLnVucGlubmVkKTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLnBpbm5lZCk7XG4gICAgICAgIHRoaXMub25VbnBpbiAmJiB0aGlzLm9uVW5waW4uY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBQaW5zIHRoZSBoZWFkZXIgaWYgaXQncyBjdXJyZW50bHkgdW5waW5uZWRcbiAgICAgKi9cbiAgICBwaW4gOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLmVsZW0uY2xhc3NMaXN0LFxuICAgICAgICBjbGFzc2VzID0gdGhpcy5jbGFzc2VzO1xuICAgICAgXG4gICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMoY2xhc3Nlcy51bnBpbm5lZCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLnVucGlubmVkKTtcbiAgICAgICAgY2xhc3NMaXN0LmFkZChjbGFzc2VzLnBpbm5lZCk7XG4gICAgICAgIHRoaXMub25QaW4gJiYgdGhpcy5vblBpbi5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHRvcCBzdGF0ZXNcbiAgICAgKi9cbiAgICB0b3AgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLmVsZW0uY2xhc3NMaXN0LFxuICAgICAgICBjbGFzc2VzID0gdGhpcy5jbGFzc2VzO1xuICAgICAgXG4gICAgICBpZighY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMudG9wKSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzZXMudG9wKTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLm5vdFRvcCk7XG4gICAgICAgIHRoaXMub25Ub3AgJiYgdGhpcy5vblRvcC5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIG5vdCB0b3Agc3RhdGVcbiAgICAgKi9cbiAgICBub3RUb3AgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLmVsZW0uY2xhc3NMaXN0LFxuICAgICAgICBjbGFzc2VzID0gdGhpcy5jbGFzc2VzO1xuICAgICAgXG4gICAgICBpZighY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMubm90VG9wKSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzZXMubm90VG9wKTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLnRvcCk7XG4gICAgICAgIHRoaXMub25Ob3RUb3AgJiYgdGhpcy5vbk5vdFRvcC5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIFkgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93LnNjcm9sbFlcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHBpeGVscyB0aGUgcGFnZSBoYXMgc2Nyb2xsZWQgYWxvbmcgdGhlIFktYXhpc1xuICAgICAqL1xuICAgIGdldFNjcm9sbFkgOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAodGhpcy5zY3JvbGxlci5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICA/IHRoaXMuc2Nyb2xsZXIucGFnZVlPZmZzZXRcbiAgICAgICAgOiAodGhpcy5zY3JvbGxlci5zY3JvbGxUb3AgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICA/IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wXG4gICAgICAgICAgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydFxuICAgICAqIEBzZWUgaHR0cDovL2FuZHlsYW5ndG9uLmNvLnVrL2Jsb2cvZGV2ZWxvcG1lbnQvZ2V0LXZpZXdwb3J0LXNpemUtd2lkdGgtYW5kLWhlaWdodC1qYXZhc2NyaXB0XG4gICAgICogQHJldHVybiB7aW50fSB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBpbiBwaXhlbHNcbiAgICAgKi9cbiAgICBnZXRWaWV3cG9ydEhlaWdodCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBoZWlnaHQgb2YgdGhlIGRvY3VtZW50XG4gICAgICogQHNlZSBodHRwOi8vamFtZXMucGFkb2xzZXkuY29tL2phdmFzY3JpcHQvZ2V0LWRvY3VtZW50LWhlaWdodC1jcm9zcy1icm93c2VyL1xuICAgICAqIEByZXR1cm4ge2ludH0gdGhlIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgaW4gcGl4ZWxzXG4gICAgICovXG4gICAgZ2V0RG9jdW1lbnRIZWlnaHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBcbiAgICAgIHJldHVybiBNYXRoLm1heChcbiAgICAgICAgYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgKTtcbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBoZWlnaHQgb2YgdGhlIERPTSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgZWxtIHRoZSBlbGVtZW50IHRvIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0IG9mIHdoaWNoXG4gICAgICogQHJldHVybiB7aW50fSAgICAgdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCBpbiBwaXhlbHNcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50SGVpZ2h0IDogZnVuY3Rpb24gKGVsbSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICBlbG0uc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBlbG0ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBlbG0uY2xpZW50SGVpZ2h0XG4gICAgICApO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGhlaWdodCBvZiB0aGUgc2Nyb2xsZXIgZWxlbWVudFxuICAgICAqIEByZXR1cm4ge2ludH0gdGhlIGhlaWdodCBvZiB0aGUgc2Nyb2xsZXIgZWxlbWVudCBpbiBwaXhlbHNcbiAgICAgKi9cbiAgICBnZXRTY3JvbGxlckhlaWdodCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAodGhpcy5zY3JvbGxlciA9PT0gd2luZG93IHx8IHRoaXMuc2Nyb2xsZXIgPT09IGRvY3VtZW50LmJvZHkpXG4gICAgICAgID8gdGhpcy5nZXREb2N1bWVudEhlaWdodCgpXG4gICAgICAgIDogdGhpcy5nZXRFbGVtZW50SGVpZ2h0KHRoaXMuc2Nyb2xsZXIpO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBvdXRzaWRlIG9mIGRvY3VtZW50IGJvdW5kYXJpZXNcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICBjdXJyZW50U2Nyb2xsWSB0aGUgY3VycmVudCB5IHNjcm9sbCBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgb3V0IG9mIGJvdW5kcywgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgaXNPdXRPZkJvdW5kcyA6IGZ1bmN0aW9uIChjdXJyZW50U2Nyb2xsWSkge1xuICAgICAgdmFyIHBhc3RUb3AgID0gY3VycmVudFNjcm9sbFkgPCAwLFxuICAgICAgICBwYXN0Qm90dG9tID0gY3VycmVudFNjcm9sbFkgKyB0aGlzLmdldFZpZXdwb3J0SGVpZ2h0KCkgPiB0aGlzLmdldFNjcm9sbGVySGVpZ2h0KCk7XG4gICAgICBcbiAgICAgIHJldHVybiBwYXN0VG9wIHx8IHBhc3RCb3R0b207XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBpZiB0aGUgdG9sZXJhbmNlIGhhcyBiZWVuIGV4Y2VlZGVkXG4gICAgICogQHBhcmFtICB7aW50fSBjdXJyZW50U2Nyb2xsWSB0aGUgY3VycmVudCBzY3JvbGwgeSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgdG9sZXJhbmNlIGV4Y2VlZGVkLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICB0b2xlcmFuY2VFeGNlZWRlZCA6IGZ1bmN0aW9uIChjdXJyZW50U2Nyb2xsWSwgZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMoY3VycmVudFNjcm9sbFktdGhpcy5sYXN0S25vd25TY3JvbGxZKSA+PSB0aGlzLnRvbGVyYW5jZVtkaXJlY3Rpb25dO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIGRldGVybWluZSBpZiBpdCBpcyBhcHByb3ByaWF0ZSB0byB1bnBpblxuICAgICAqIEBwYXJhbSAge2ludH0gY3VycmVudFNjcm9sbFkgdGhlIGN1cnJlbnQgeSBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gIHtib29sfSB0b2xlcmFuY2VFeGNlZWRlZCBoYXMgdGhlIHRvbGVyYW5jZSBiZWVuIGV4Y2VlZGVkP1xuICAgICAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgc2hvdWxkIHVucGluLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBzaG91bGRVbnBpbiA6IGZ1bmN0aW9uIChjdXJyZW50U2Nyb2xsWSwgdG9sZXJhbmNlRXhjZWVkZWQpIHtcbiAgICAgIHZhciBzY3JvbGxpbmdEb3duID0gY3VycmVudFNjcm9sbFkgPiB0aGlzLmxhc3RLbm93blNjcm9sbFksXG4gICAgICAgIHBhc3RPZmZzZXQgPSBjdXJyZW50U2Nyb2xsWSA+PSB0aGlzLm9mZnNldDtcbiAgXG4gICAgICByZXR1cm4gc2Nyb2xsaW5nRG93biAmJiBwYXN0T2Zmc2V0ICYmIHRvbGVyYW5jZUV4Y2VlZGVkO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIGRldGVybWluZSBpZiBpdCBpcyBhcHByb3ByaWF0ZSB0byBwaW5cbiAgICAgKiBAcGFyYW0gIHtpbnR9IGN1cnJlbnRTY3JvbGxZIHRoZSBjdXJyZW50IHkgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICogQHBhcmFtICB7Ym9vbH0gdG9sZXJhbmNlRXhjZWVkZWQgaGFzIHRoZSB0b2xlcmFuY2UgYmVlbiBleGNlZWRlZD9cbiAgICAgKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIHNob3VsZCBwaW4sIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIHNob3VsZFBpbiA6IGZ1bmN0aW9uIChjdXJyZW50U2Nyb2xsWSwgdG9sZXJhbmNlRXhjZWVkZWQpIHtcbiAgICAgIHZhciBzY3JvbGxpbmdVcCAgPSBjdXJyZW50U2Nyb2xsWSA8IHRoaXMubGFzdEtub3duU2Nyb2xsWSxcbiAgICAgICAgcGFzdE9mZnNldCA9IGN1cnJlbnRTY3JvbGxZIDw9IHRoaXMub2Zmc2V0O1xuICBcbiAgICAgIHJldHVybiAoc2Nyb2xsaW5nVXAgJiYgdG9sZXJhbmNlRXhjZWVkZWQpIHx8IHBhc3RPZmZzZXQ7XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB1cGRhdGluZyB0aGUgc3RhdGUgb2YgdGhlIHdpZGdldFxuICAgICAqL1xuICAgIHVwZGF0ZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxZICA9IHRoaXMuZ2V0U2Nyb2xsWSgpLFxuICAgICAgICBzY3JvbGxEaXJlY3Rpb24gPSBjdXJyZW50U2Nyb2xsWSA+IHRoaXMubGFzdEtub3duU2Nyb2xsWSA/ICdkb3duJyA6ICd1cCcsXG4gICAgICAgIHRvbGVyYW5jZUV4Y2VlZGVkID0gdGhpcy50b2xlcmFuY2VFeGNlZWRlZChjdXJyZW50U2Nyb2xsWSwgc2Nyb2xsRGlyZWN0aW9uKTtcbiAgXG4gICAgICBpZih0aGlzLmlzT3V0T2ZCb3VuZHMoY3VycmVudFNjcm9sbFkpKSB7IC8vIElnbm9yZSBib3VuY3kgc2Nyb2xsaW5nIGluIE9TWFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgaWYgKGN1cnJlbnRTY3JvbGxZIDw9IHRoaXMub2Zmc2V0ICkge1xuICAgICAgICB0aGlzLnRvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub3RUb3AoKTtcbiAgICAgIH1cbiAgXG4gICAgICBpZih0aGlzLnNob3VsZFVucGluKGN1cnJlbnRTY3JvbGxZLCB0b2xlcmFuY2VFeGNlZWRlZCkpIHtcbiAgICAgICAgdGhpcy51bnBpbigpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLnNob3VsZFBpbihjdXJyZW50U2Nyb2xsWSwgdG9sZXJhbmNlRXhjZWVkZWQpKSB7XG4gICAgICAgIHRoaXMucGluKCk7XG4gICAgICB9XG4gIFxuICAgICAgdGhpcy5sYXN0S25vd25TY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBIZWFkcm9vbS5vcHRpb25zID0ge1xuICAgIHRvbGVyYW5jZSA6IHtcbiAgICAgIHVwIDogMCxcbiAgICAgIGRvd24gOiAwXG4gICAgfSxcbiAgICBvZmZzZXQgOiAwLFxuICAgIHNjcm9sbGVyOiB3aW5kb3csXG4gICAgY2xhc3NlcyA6IHtcbiAgICAgIHBpbm5lZCA6ICdoZWFkcm9vbS0tcGlubmVkJyxcbiAgICAgIHVucGlubmVkIDogJ2hlYWRyb29tLS11bnBpbm5lZCcsXG4gICAgICB0b3AgOiAnaGVhZHJvb20tLXRvcCcsXG4gICAgICBub3RUb3AgOiAnaGVhZHJvb20tLW5vdC10b3AnLFxuICAgICAgaW5pdGlhbCA6ICdoZWFkcm9vbSdcbiAgICB9XG4gIH07XG4gIEhlYWRyb29tLmN1dHNUaGVNdXN0YXJkID0gdHlwZW9mIGZlYXR1cmVzICE9PSAndW5kZWZpbmVkJyAmJiBmZWF0dXJlcy5yQUYgJiYgZmVhdHVyZXMuYmluZCAmJiBmZWF0dXJlcy5jbGFzc0xpc3Q7XG5cbiAgcmV0dXJuIEhlYWRyb29tO1xufSkpOyIsIi8qIVxyXG4gKiBqcy1sb2dnZXIgLSBodHRwOi8vZ2l0aHViLmNvbS9qb25ueXJlZXZlcy9qcy1sb2dnZXJcclxuICogSm9ubnkgUmVldmVzLCBodHRwOi8vam9ubnlyZWV2ZXMuY28udWsvXHJcbiAqIGpzLWxvZ2dlciBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuICovXHJcbihmdW5jdGlvbiAoZ2xvYmFsKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdC8vIFRvcCBsZXZlbCBtb2R1bGUgZm9yIHRoZSBnbG9iYWwsIHN0YXRpYyBsb2dnZXIgaW5zdGFuY2UuXHJcblx0dmFyIExvZ2dlciA9IHsgfTtcclxuXHJcblx0Ly8gRm9yIHRob3NlIHRoYXQgYXJlIGF0IGhvbWUgdGhhdCBhcmUga2VlcGluZyBzY29yZS5cclxuXHRMb2dnZXIuVkVSU0lPTiA9IFwiMS4yLjBcIjtcclxuXHJcblx0Ly8gRnVuY3Rpb24gd2hpY2ggaGFuZGxlcyBhbGwgaW5jb21pbmcgbG9nIG1lc3NhZ2VzLlxyXG5cdHZhciBsb2dIYW5kbGVyO1xyXG5cclxuXHQvLyBNYXAgb2YgQ29udGV4dHVhbExvZ2dlciBpbnN0YW5jZXMgYnkgbmFtZTsgdXNlZCBieSBMb2dnZXIuZ2V0KCkgdG8gcmV0dXJuIHRoZSBzYW1lIG5hbWVkIGluc3RhbmNlLlxyXG5cdHZhciBjb250ZXh0dWFsTG9nZ2Vyc0J5TmFtZU1hcCA9IHt9O1xyXG5cclxuXHQvLyBQb2x5ZmlsbCBmb3IgRVM1J3MgRnVuY3Rpb24uYmluZC5cclxuXHR2YXIgYmluZCA9IGZ1bmN0aW9uKHNjb3BlLCBmdW5jKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBmdW5jLmFwcGx5KHNjb3BlLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHQvLyBTdXBlciBleGNpdGluZyBvYmplY3QgbWVyZ2VyLW1hdHJvbiA5MDAwIGFkZGluZyBhbm90aGVyIDEwMCBieXRlcyB0byB5b3VyIGRvd25sb2FkLlxyXG5cdHZhciBtZXJnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzLCB0YXJnZXQgPSBhcmdzWzBdLCBrZXksIGk7XHJcblx0XHRmb3IgKGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRmb3IgKGtleSBpbiBhcmdzW2ldKSB7XHJcblx0XHRcdFx0aWYgKCEoa2V5IGluIHRhcmdldCkgJiYgYXJnc1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHR0YXJnZXRba2V5XSA9IGFyZ3NbaV1ba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fTtcclxuXHJcblx0Ly8gSGVscGVyIHRvIGRlZmluZSBhIGxvZ2dpbmcgbGV2ZWwgb2JqZWN0OyBoZWxwcyB3aXRoIG9wdGltaXNhdGlvbi5cclxuXHR2YXIgZGVmaW5lTG9nTGV2ZWwgPSBmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xyXG5cdFx0cmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBuYW1lOiBuYW1lIH07XHJcblx0fTtcclxuXHJcblx0Ly8gUHJlZGVmaW5lZCBsb2dnaW5nIGxldmVscy5cclxuXHRMb2dnZXIuREVCVUcgPSBkZWZpbmVMb2dMZXZlbCgxLCAnREVCVUcnKTtcclxuXHRMb2dnZXIuSU5GTyA9IGRlZmluZUxvZ0xldmVsKDIsICdJTkZPJyk7XHJcblx0TG9nZ2VyLlRJTUUgPSBkZWZpbmVMb2dMZXZlbCgzLCAnVElNRScpO1xyXG5cdExvZ2dlci5XQVJOID0gZGVmaW5lTG9nTGV2ZWwoNCwgJ1dBUk4nKTtcclxuXHRMb2dnZXIuRVJST1IgPSBkZWZpbmVMb2dMZXZlbCg4LCAnRVJST1InKTtcclxuXHRMb2dnZXIuT0ZGID0gZGVmaW5lTG9nTGV2ZWwoOTksICdPRkYnKTtcclxuXHJcblx0Ly8gSW5uZXIgY2xhc3Mgd2hpY2ggcGVyZm9ybXMgdGhlIGJ1bGsgb2YgdGhlIHdvcms7IENvbnRleHR1YWxMb2dnZXIgaW5zdGFuY2VzIGNhbiBiZSBjb25maWd1cmVkIGluZGVwZW5kZW50bHlcclxuXHQvLyBvZiBlYWNoIG90aGVyLlxyXG5cdHZhciBDb250ZXh0dWFsTG9nZ2VyID0gZnVuY3Rpb24oZGVmYXVsdENvbnRleHQpIHtcclxuXHRcdHRoaXMuY29udGV4dCA9IGRlZmF1bHRDb250ZXh0O1xyXG5cdFx0dGhpcy5zZXRMZXZlbChkZWZhdWx0Q29udGV4dC5maWx0ZXJMZXZlbCk7XHJcblx0XHR0aGlzLmxvZyA9IHRoaXMuaW5mbzsgIC8vIENvbnZlbmllbmNlIGFsaWFzLlxyXG5cdH07XHJcblxyXG5cdENvbnRleHR1YWxMb2dnZXIucHJvdG90eXBlID0ge1xyXG5cdFx0Ly8gQ2hhbmdlcyB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGZvciB0aGUgbG9nZ2luZyBpbnN0YW5jZS5cclxuXHRcdHNldExldmVsOiBmdW5jdGlvbiAobmV3TGV2ZWwpIHtcclxuXHRcdFx0Ly8gRW5zdXJlIHRoZSBzdXBwbGllZCBMZXZlbCBvYmplY3QgbG9va3MgdmFsaWQuXHJcblx0XHRcdGlmIChuZXdMZXZlbCAmJiBcInZhbHVlXCIgaW4gbmV3TGV2ZWwpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQuZmlsdGVyTGV2ZWwgPSBuZXdMZXZlbDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBJcyB0aGUgbG9nZ2VyIGNvbmZpZ3VyZWQgdG8gb3V0cHV0IG1lc3NhZ2VzIGF0IHRoZSBzdXBwbGllZCBsZXZlbD9cclxuXHRcdGVuYWJsZWRGb3I6IGZ1bmN0aW9uIChsdmwpIHtcclxuXHRcdFx0dmFyIGZpbHRlckxldmVsID0gdGhpcy5jb250ZXh0LmZpbHRlckxldmVsO1xyXG5cdFx0XHRyZXR1cm4gbHZsLnZhbHVlID49IGZpbHRlckxldmVsLnZhbHVlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZWJ1ZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLmludm9rZShMb2dnZXIuREVCVUcsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGluZm86IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy5pbnZva2UoTG9nZ2VyLklORk8sIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHdhcm46IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy5pbnZva2UoTG9nZ2VyLldBUk4sIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMuaW52b2tlKExvZ2dlci5FUlJPUiwgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dGltZTogZnVuY3Rpb24gKGxhYmVsKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnICYmIGxhYmVsLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR0aGlzLmludm9rZShMb2dnZXIuVElNRSwgWyBsYWJlbCwgJ3N0YXJ0JyBdKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHR0aW1lRW5kOiBmdW5jdGlvbiAobGFiZWwpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycgJiYgbGFiZWwubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHRoaXMuaW52b2tlKExvZ2dlci5USU1FLCBbIGxhYmVsLCAnZW5kJyBdKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBJbnZva2VzIHRoZSBsb2dnZXIgY2FsbGJhY2sgaWYgaXQncyBub3QgYmVpbmcgZmlsdGVyZWQuXHJcblx0XHRpbnZva2U6IGZ1bmN0aW9uIChsZXZlbCwgbXNnQXJncykge1xyXG5cdFx0XHRpZiAobG9nSGFuZGxlciAmJiB0aGlzLmVuYWJsZWRGb3IobGV2ZWwpKSB7XHJcblx0XHRcdFx0bG9nSGFuZGxlcihtc2dBcmdzLCBtZXJnZSh7IGxldmVsOiBsZXZlbCB9LCB0aGlzLmNvbnRleHQpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIFByb3RlY3RlZCBpbnN0YW5jZSB3aGljaCBhbGwgY2FsbHMgdG8gdGhlIHRvIGxldmVsIGBMb2dnZXJgIG1vZHVsZSB3aWxsIGJlIHJvdXRlZCB0aHJvdWdoLlxyXG5cdHZhciBnbG9iYWxMb2dnZXIgPSBuZXcgQ29udGV4dHVhbExvZ2dlcih7IGZpbHRlckxldmVsOiBMb2dnZXIuT0ZGIH0pO1xyXG5cclxuXHQvLyBDb25maWd1cmUgdGhlIGdsb2JhbCBMb2dnZXIgaW5zdGFuY2UuXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gU2hvcnRjdXQgZm9yIG9wdGltaXNlcnMuXHJcblx0XHR2YXIgTCA9IExvZ2dlcjtcclxuXHJcblx0XHRMLmVuYWJsZWRGb3IgPSBiaW5kKGdsb2JhbExvZ2dlciwgZ2xvYmFsTG9nZ2VyLmVuYWJsZWRGb3IpO1xyXG5cdFx0TC5kZWJ1ZyA9IGJpbmQoZ2xvYmFsTG9nZ2VyLCBnbG9iYWxMb2dnZXIuZGVidWcpO1xyXG5cdFx0TC50aW1lID0gYmluZChnbG9iYWxMb2dnZXIsIGdsb2JhbExvZ2dlci50aW1lKTtcclxuXHRcdEwudGltZUVuZCA9IGJpbmQoZ2xvYmFsTG9nZ2VyLCBnbG9iYWxMb2dnZXIudGltZUVuZCk7XHJcblx0XHRMLmluZm8gPSBiaW5kKGdsb2JhbExvZ2dlciwgZ2xvYmFsTG9nZ2VyLmluZm8pO1xyXG5cdFx0TC53YXJuID0gYmluZChnbG9iYWxMb2dnZXIsIGdsb2JhbExvZ2dlci53YXJuKTtcclxuXHRcdEwuZXJyb3IgPSBiaW5kKGdsb2JhbExvZ2dlciwgZ2xvYmFsTG9nZ2VyLmVycm9yKTtcclxuXHJcblx0XHQvLyBEb24ndCBmb3JnZXQgdGhlIGNvbnZlbmllbmNlIGFsaWFzIVxyXG5cdFx0TC5sb2cgPSBMLmluZm87XHJcblx0fSgpKTtcclxuXHJcblx0Ly8gU2V0IHRoZSBnbG9iYWwgbG9nZ2luZyBoYW5kbGVyLiAgVGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHNob3VsZCBleHBlY3QgdHdvIGFyZ3VtZW50cywgdGhlIGZpcnN0IGJlaW5nIGFuIGFyZ3VtZW50c1xyXG5cdC8vIG9iamVjdCB3aXRoIHRoZSBzdXBwbGllZCBsb2cgbWVzc2FnZXMgYW5kIHRoZSBzZWNvbmQgYmVpbmcgYSBjb250ZXh0IG9iamVjdCB3aGljaCBjb250YWlucyBhIGhhc2ggb2Ygc3RhdGVmdWxcclxuXHQvLyBwYXJhbWV0ZXJzIHdoaWNoIHRoZSBsb2dnaW5nIGZ1bmN0aW9uIGNhbiBjb25zdW1lLlxyXG5cdExvZ2dlci5zZXRIYW5kbGVyID0gZnVuY3Rpb24gKGZ1bmMpIHtcclxuXHRcdGxvZ0hhbmRsZXIgPSBmdW5jO1xyXG5cdH07XHJcblxyXG5cdC8vIFNldHMgdGhlIGdsb2JhbCBsb2dnaW5nIGZpbHRlciBsZXZlbCB3aGljaCBhcHBsaWVzIHRvICphbGwqIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCwgYW5kIGZ1dHVyZSBMb2dnZXIgaW5zdGFuY2VzLlxyXG5cdC8vIChub3RlIHRoYXQgbmFtZWQgbG9nZ2VycyAocmV0cmlldmVkIHZpYSBgTG9nZ2VyLmdldGApIGNhbiBiZSBjb25maWd1cmVkIGluZGVwZW5kZW50bHkgaWYgcmVxdWlyZWQpLlxyXG5cdExvZ2dlci5zZXRMZXZlbCA9IGZ1bmN0aW9uKGxldmVsKSB7XHJcblx0XHQvLyBTZXQgdGhlIGdsb2JhbExvZ2dlcidzIGxldmVsLlxyXG5cdFx0Z2xvYmFsTG9nZ2VyLnNldExldmVsKGxldmVsKTtcclxuXHJcblx0XHQvLyBBcHBseSB0aGlzIGxldmVsIHRvIGFsbCByZWdpc3RlcmVkIGNvbnRleHR1YWwgbG9nZ2Vycy5cclxuXHRcdGZvciAodmFyIGtleSBpbiBjb250ZXh0dWFsTG9nZ2Vyc0J5TmFtZU1hcCkge1xyXG5cdFx0XHRpZiAoY29udGV4dHVhbExvZ2dlcnNCeU5hbWVNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdGNvbnRleHR1YWxMb2dnZXJzQnlOYW1lTWFwW2tleV0uc2V0TGV2ZWwobGV2ZWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gUmV0cmlldmUgYSBDb250ZXh0dWFsTG9nZ2VyIGluc3RhbmNlLiAgTm90ZSB0aGF0IG5hbWVkIGxvZ2dlcnMgYXV0b21hdGljYWxseSBpbmhlcml0IHRoZSBnbG9iYWwgbG9nZ2VyJ3MgbGV2ZWwsXHJcblx0Ly8gZGVmYXVsdCBjb250ZXh0IGFuZCBsb2cgaGFuZGxlci5cclxuXHRMb2dnZXIuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuXHRcdC8vIEFsbCBsb2dnZXIgaW5zdGFuY2VzIGFyZSBjYWNoZWQgc28gdGhleSBjYW4gYmUgY29uZmlndXJlZCBhaGVhZCBvZiB1c2UuXHJcblx0XHRyZXR1cm4gY29udGV4dHVhbExvZ2dlcnNCeU5hbWVNYXBbbmFtZV0gfHxcclxuXHRcdFx0KGNvbnRleHR1YWxMb2dnZXJzQnlOYW1lTWFwW25hbWVdID0gbmV3IENvbnRleHR1YWxMb2dnZXIobWVyZ2UoeyBuYW1lOiBuYW1lIH0sIGdsb2JhbExvZ2dlci5jb250ZXh0KSkpO1xyXG5cdH07XHJcblxyXG5cdC8vIENvbmZpZ3VyZSBhbmQgZXhhbXBsZSBhIERlZmF1bHQgaW1wbGVtZW50YXRpb24gd2hpY2ggd3JpdGVzIHRvIHRoZSBgd2luZG93LmNvbnNvbGVgIChpZiBwcmVzZW50KS4gIFRoZVxyXG5cdC8vIGBvcHRpb25zYCBoYXNoIGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZGVmYXVsdCBsb2dMZXZlbCBhbmQgcHJvdmlkZSBhIGN1c3RvbSBtZXNzYWdlIGZvcm1hdHRlci5cclxuXHRMb2dnZXIudXNlRGVmYXVsdHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcblx0XHRvcHRpb25zLmZvcm1hdHRlciA9IG9wdGlvbnMuZm9ybWF0dGVyIHx8IGZ1bmN0aW9uIGRlZmF1bHRNZXNzYWdlRm9ybWF0dGVyKG1lc3NhZ2VzLCBjb250ZXh0KSB7XHJcblx0XHRcdC8vIFByZXBlbmQgdGhlIGxvZ2dlcidzIG5hbWUgdG8gdGhlIGxvZyBtZXNzYWdlIGZvciBlYXN5IGlkZW50aWZpY2F0aW9uLlxyXG5cdFx0XHRpZiAoY29udGV4dC5uYW1lKSB7XHJcblx0XHRcdFx0bWVzc2FnZXMudW5zaGlmdChcIltcIiArIGNvbnRleHQubmFtZSArIFwiXVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBDaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIGEgbG9nZ2VyLlxyXG5cdFx0aWYgKHR5cGVvZiBjb25zb2xlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBNYXAgb2YgdGltZXN0YW1wcyBieSB0aW1lciBsYWJlbHMgdXNlZCB0byB0cmFjayBgI3RpbWVgIGFuZCBgI3RpbWVFbmQoKWAgaW52b2NhdGlvbnMgaW4gZW52aXJvbm1lbnRzXHJcblx0XHQvLyB0aGF0IGRvbid0IG9mZmVyIGEgbmF0aXZlIGNvbnNvbGUgbWV0aG9kLlxyXG5cdFx0dmFyIHRpbWVyU3RhcnRUaW1lQnlMYWJlbE1hcCA9IHt9O1xyXG5cclxuXHRcdC8vIFN1cHBvcnQgZm9yIElFOCsgKGFuZCBvdGhlciwgc2xpZ2h0bHkgbW9yZSBzYW5lIGVudmlyb25tZW50cylcclxuXHRcdHZhciBpbnZva2VDb25zb2xlTWV0aG9kID0gZnVuY3Rpb24gKGhkbHIsIG1lc3NhZ2VzKSB7XHJcblx0XHRcdEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGhkbHIsIGNvbnNvbGUsIG1lc3NhZ2VzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0TG9nZ2VyLnNldExldmVsKG9wdGlvbnMuZGVmYXVsdExldmVsIHx8IExvZ2dlci5ERUJVRyk7XHJcblx0XHRMb2dnZXIuc2V0SGFuZGxlcihmdW5jdGlvbihtZXNzYWdlcywgY29udGV4dCkge1xyXG5cdFx0XHQvLyBDb252ZXJ0IGFyZ3VtZW50cyBvYmplY3QgdG8gQXJyYXkuXHJcblx0XHRcdG1lc3NhZ2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZXMpO1xyXG5cclxuXHRcdFx0dmFyIGhkbHIgPSBjb25zb2xlLmxvZztcclxuXHRcdFx0dmFyIHRpbWVyTGFiZWw7XHJcblxyXG5cdFx0XHRpZiAoY29udGV4dC5sZXZlbCA9PT0gTG9nZ2VyLlRJTUUpIHtcclxuXHRcdFx0XHR0aW1lckxhYmVsID0gKGNvbnRleHQubmFtZSA/ICdbJyArIGNvbnRleHQubmFtZSArICddICcgOiAnJykgKyBtZXNzYWdlc1swXTtcclxuXHJcblx0XHRcdFx0aWYgKG1lc3NhZ2VzWzFdID09PSAnc3RhcnQnKSB7XHJcblx0XHRcdFx0XHRpZiAoY29uc29sZS50aW1lKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUudGltZSh0aW1lckxhYmVsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aW1lclN0YXJ0VGltZUJ5TGFiZWxNYXBbdGltZXJMYWJlbF0gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoY29uc29sZS50aW1lRW5kKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUudGltZUVuZCh0aW1lckxhYmVsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpbnZva2VDb25zb2xlTWV0aG9kKGhkbHIsIFsgdGltZXJMYWJlbCArICc6ICcgK1xyXG5cdFx0XHRcdFx0XHRcdChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWVyU3RhcnRUaW1lQnlMYWJlbE1hcFt0aW1lckxhYmVsXSkgKyAnbXMnIF0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHQvLyBEZWxlZ2F0ZSB0aHJvdWdoIHRvIGN1c3RvbSB3YXJuL2Vycm9yIGxvZ2dlcnMgaWYgcHJlc2VudCBvbiB0aGUgY29uc29sZS5cclxuXHRcdFx0XHRpZiAoY29udGV4dC5sZXZlbCA9PT0gTG9nZ2VyLldBUk4gJiYgY29uc29sZS53YXJuKSB7XHJcblx0XHRcdFx0XHRoZGxyID0gY29uc29sZS53YXJuO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoY29udGV4dC5sZXZlbCA9PT0gTG9nZ2VyLkVSUk9SICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuXHRcdFx0XHRcdGhkbHIgPSBjb25zb2xlLmVycm9yO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoY29udGV4dC5sZXZlbCA9PT0gTG9nZ2VyLklORk8gJiYgY29uc29sZS5pbmZvKSB7XHJcblx0XHRcdFx0XHRoZGxyID0gY29uc29sZS5pbmZvO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0b3B0aW9ucy5mb3JtYXR0ZXIobWVzc2FnZXMsIGNvbnRleHQpO1xyXG5cdFx0XHRcdGludm9rZUNvbnNvbGVNZXRob2QoaGRsciwgbWVzc2FnZXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvLyBFeHBvcnQgdG8gcG9wdWxhciBlbnZpcm9ubWVudHMgYm9pbGVycGxhdGUuXHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKExvZ2dlcik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IExvZ2dlcjtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRMb2dnZXIuX3ByZXZMb2dnZXIgPSBnbG9iYWwuTG9nZ2VyO1xyXG5cclxuXHRcdExvZ2dlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRnbG9iYWwuTG9nZ2VyID0gTG9nZ2VyLl9wcmV2TG9nZ2VyO1xyXG5cdFx0XHRyZXR1cm4gTG9nZ2VyO1xyXG5cdFx0fTtcclxuXHJcblx0XHRnbG9iYWwuTG9nZ2VyID0gTG9nZ2VyO1xyXG5cdH1cclxufSh0aGlzKSk7XHJcbiIsIi8qXFxcbnwqfFxufCp8ICA6OiBjb29raWVzLmpzIDo6XG58KnxcbnwqfCAgQSBjb21wbGV0ZSBjb29raWVzIHJlYWRlci93cml0ZXIgZnJhbWV3b3JrIHdpdGggZnVsbCB1bmljb2RlIHN1cHBvcnQuXG58KnxcbnwqfCAgUmV2aXNpb24gIzEgLSBTZXB0ZW1iZXIgNCwgMjAxNFxufCp8XG58KnwgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9kb2N1bWVudC5jb29raWVcbnwqfCAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvVXNlcjpmdXNpb25jaGVzc1xufCp8XG58KnwgIFRoaXMgZnJhbWV3b3JrIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBHTlUgUHVibGljIExpY2Vuc2UsIHZlcnNpb24gMyBvciBsYXRlci5cbnwqfCAgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAtc3RhbmRhbG9uZS5odG1sXG58KnxcbnwqfCAgU3ludGF4ZXM6XG58KnxcbnwqfCAgKiBkb2NDb29raWVzLnNldEl0ZW0obmFtZSwgdmFsdWVbLCBlbmRbLCBwYXRoWywgZG9tYWluWywgc2VjdXJlXV1dXSlcbnwqfCAgKiBkb2NDb29raWVzLmdldEl0ZW0obmFtZSlcbnwqfCAgKiBkb2NDb29raWVzLnJlbW92ZUl0ZW0obmFtZVssIHBhdGhbLCBkb21haW5dXSlcbnwqfCAgKiBkb2NDb29raWVzLmhhc0l0ZW0obmFtZSlcbnwqfCAgKiBkb2NDb29raWVzLmtleXMoKVxufCp8XG5cXCovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRJdGVtOiBmdW5jdGlvbiAoc0tleSkge1xuICAgIGlmICghc0tleSkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChcIig/Oig/Ol58Lio7KVxcXFxzKlwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVxcXFxzKihbXjtdKikuKiQpfF4uKiRcIiksIFwiJDFcIikpIHx8IG51bGw7XG4gIH0sXG4gIHNldEl0ZW06IGZ1bmN0aW9uIChzS2V5LCBzVmFsdWUsIHZFbmQsIHNQYXRoLCBzRG9tYWluLCBiU2VjdXJlKSB7XG4gICAgaWYgKCFzS2V5IHx8IC9eKD86ZXhwaXJlc3xtYXhcXC1hZ2V8cGF0aHxkb21haW58c2VjdXJlKSQvaS50ZXN0KHNLZXkpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHZhciBzRXhwaXJlcyA9IFwiXCI7XG4gICAgaWYgKHZFbmQpIHtcbiAgICAgIHN3aXRjaCAodkVuZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgICBjYXNlIE51bWJlcjpcbiAgICAgICAgICBzRXhwaXJlcyA9IHZFbmQgPT09IEluZmluaXR5ID8gXCI7IGV4cGlyZXM9RnJpLCAzMSBEZWMgOTk5OSAyMzo1OTo1OSBHTVRcIiA6IFwiOyBtYXgtYWdlPVwiICsgdkVuZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTdHJpbmc6XG4gICAgICAgICAgc0V4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIHZFbmQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRGF0ZTpcbiAgICAgICAgICBzRXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgdkVuZC50b1VUQ1N0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzVmFsdWUpICsgc0V4cGlyZXMgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIikgKyAoYlNlY3VyZSA/IFwiOyBzZWN1cmVcIiA6IFwiXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICByZW1vdmVJdGVtOiBmdW5jdGlvbiAoc0tleSwgc1BhdGgsIHNEb21haW4pIHtcbiAgICBpZiAoIXRoaXMuaGFzSXRlbShzS2V5KSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBkb2N1bWVudC5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyBcIj07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIiArIChzRG9tYWluID8gXCI7IGRvbWFpbj1cIiArIHNEb21haW4gOiBcIlwiKSArIChzUGF0aCA/IFwiOyBwYXRoPVwiICsgc1BhdGggOiBcIlwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgaGFzSXRlbTogZnVuY3Rpb24gKHNLZXkpIHtcbiAgICBpZiAoIXNLZXkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcmV0dXJuIChuZXcgUmVnRXhwKFwiKD86Xnw7XFxcXHMqKVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVwiKSkudGVzdChkb2N1bWVudC5jb29raWUpO1xuICB9LFxuICBrZXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFLZXlzID0gZG9jdW1lbnQuY29va2llLnJlcGxhY2UoLygoPzpefFxccyo7KVteXFw9XSspKD89O3wkKXxeXFxzKnxcXHMqKD86XFw9W147XSopPyg/OlxcMXwkKS9nLCBcIlwiKS5zcGxpdCgvXFxzKig/OlxcPVteO10qKT87XFxzKi8pO1xuICAgIGZvciAodmFyIG5MZW4gPSBhS2V5cy5sZW5ndGgsIG5JZHggPSAwOyBuSWR4IDwgbkxlbjsgbklkeCsrKSB7IGFLZXlzW25JZHhdID0gZGVjb2RlVVJJQ29tcG9uZW50KGFLZXlzW25JZHhdKTsgfVxuICAgIHJldHVybiBhS2V5cztcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhc2FwID0gcmVxdWlyZSgnYXNhcC9yYXcnKTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vIFN0YXRlczpcbi8vXG4vLyAwIC0gcGVuZGluZ1xuLy8gMSAtIGZ1bGZpbGxlZCB3aXRoIF92YWx1ZVxuLy8gMiAtIHJlamVjdGVkIHdpdGggX3ZhbHVlXG4vLyAzIC0gYWRvcHRlZCB0aGUgc3RhdGUgb2YgYW5vdGhlciBwcm9taXNlLCBfdmFsdWVcbi8vXG4vLyBvbmNlIHRoZSBzdGF0ZSBpcyBubyBsb25nZXIgcGVuZGluZyAoMCkgaXQgaXMgaW1tdXRhYmxlXG5cbi8vIEFsbCBgX2AgcHJlZml4ZWQgcHJvcGVydGllcyB3aWxsIGJlIHJlZHVjZWQgdG8gYF97cmFuZG9tIG51bWJlcn1gXG4vLyBhdCBidWlsZCB0aW1lIHRvIG9iZnVzY2F0ZSB0aGVtIGFuZCBkaXNjb3VyYWdlIHRoZWlyIHVzZS5cbi8vIFdlIGRvbid0IHVzZSBzeW1ib2xzIG9yIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0byBmdWxseSBoaWRlIHRoZW1cbi8vIGJlY2F1c2UgdGhlIHBlcmZvcm1hbmNlIGlzbid0IGdvb2QgZW5vdWdoLlxuXG5cbi8vIHRvIGF2b2lkIHVzaW5nIHRyeS9jYXRjaCBpbnNpZGUgY3JpdGljYWwgZnVuY3Rpb25zLCB3ZVxuLy8gZXh0cmFjdCB0aGVtIHRvIGhlcmUuXG52YXIgTEFTVF9FUlJPUiA9IG51bGw7XG52YXIgSVNfRVJST1IgPSB7fTtcbmZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG9iai50aGVuO1xuICB9IGNhdGNoIChleCkge1xuICAgIExBU1RfRVJST1IgPSBleDtcbiAgICByZXR1cm4gSVNfRVJST1I7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5Q2FsbE9uZShmbiwgYSkge1xuICB0cnkge1xuICAgIHJldHVybiBmbihhKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBMQVNUX0VSUk9SID0gZXg7XG4gICAgcmV0dXJuIElTX0VSUk9SO1xuICB9XG59XG5mdW5jdGlvbiB0cnlDYWxsVHdvKGZuLCBhLCBiKSB7XG4gIHRyeSB7XG4gICAgZm4oYSwgYik7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgTEFTVF9FUlJPUiA9IGV4O1xuICAgIHJldHVybiBJU19FUlJPUjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKHR5cGVvZiB0aGlzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICB9XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICB9XG4gIHRoaXMuXzM3ID0gMDtcbiAgdGhpcy5fMTIgPSBudWxsO1xuICB0aGlzLl81OSA9IFtdO1xuICBpZiAoZm4gPT09IG5vb3ApIHJldHVybjtcbiAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbn1cblByb21pc2UuXzk5ID0gbm9vcDtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIGlmICh0aGlzLmNvbnN0cnVjdG9yICE9PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHNhZmVUaGVuKHRoaXMsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgfVxuICB2YXIgcmVzID0gbmV3IFByb21pc2Uobm9vcCk7XG4gIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzKSk7XG4gIHJldHVybiByZXM7XG59O1xuXG5mdW5jdGlvbiBzYWZlVGhlbihzZWxmLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICByZXR1cm4gbmV3IHNlbGYuY29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXMgPSBuZXcgUHJvbWlzZShub29wKTtcbiAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIGhhbmRsZShzZWxmLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzKSk7XG4gIH0pO1xufTtcbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fMzcgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fMTI7XG4gIH1cbiAgaWYgKHNlbGYuXzM3ID09PSAwKSB7XG4gICAgc2VsZi5fNTkucHVzaChkZWZlcnJlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFzYXAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fMzcgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICBpZiAoc2VsZi5fMzcgPT09IDEpIHtcbiAgICAgICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl8xMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fMTIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmV0ID0gdHJ5Q2FsbE9uZShjYiwgc2VsZi5fMTIpO1xuICAgIGlmIChyZXQgPT09IElTX0VSUk9SKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgTEFTVF9FUlJPUik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICBpZiAobmV3VmFsdWUgPT09IHNlbGYpIHtcbiAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgc2VsZixcbiAgICAgIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJylcbiAgICApO1xuICB9XG4gIGlmIChcbiAgICBuZXdWYWx1ZSAmJlxuICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgKSB7XG4gICAgdmFyIHRoZW4gPSBnZXRUaGVuKG5ld1ZhbHVlKTtcbiAgICBpZiAodGhlbiA9PT0gSVNfRVJST1IpIHtcbiAgICAgIHJldHVybiByZWplY3Qoc2VsZiwgTEFTVF9FUlJPUik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoZW4gPT09IHNlbGYudGhlbiAmJlxuICAgICAgbmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlXG4gICAgKSB7XG4gICAgICBzZWxmLl8zNyA9IDM7XG4gICAgICBzZWxmLl8xMiA9IG5ld1ZhbHVlO1xuICAgICAgZmluYWxlKHNlbGYpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRvUmVzb2x2ZSh0aGVuLmJpbmQobmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc2VsZi5fMzcgPSAxO1xuICBzZWxmLl8xMiA9IG5ld1ZhbHVlO1xuICBmaW5hbGUoc2VsZik7XG59XG5cbmZ1bmN0aW9uIHJlamVjdChzZWxmLCBuZXdWYWx1ZSkge1xuICBzZWxmLl8zNyA9IDI7XG4gIHNlbGYuXzEyID0gbmV3VmFsdWU7XG4gIGZpbmFsZShzZWxmKTtcbn1cbmZ1bmN0aW9uIGZpbmFsZShzZWxmKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5fNTkubGVuZ3RoOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fNTlbaV0pO1xuICB9XG4gIHNlbGYuXzU5ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSl7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBwcm9taXNlKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHZhciByZXMgPSB0cnlDYWxsVHdvKGZuLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIGRvbmUgPSB0cnVlO1xuICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgfSlcbiAgaWYgKCFkb25lICYmIHJlcyA9PT0gSVNfRVJST1IpIHtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3QocHJvbWlzZSwgTEFTVF9FUlJPUik7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuUHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRoZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHRoaXM7XG4gIHNlbGYudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSwgMCk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy9UaGlzIGZpbGUgY29udGFpbnMgdGhlIEVTNiBleHRlbnNpb25zIHRvIHRoZSBjb3JlIFByb21pc2VzL0ErIEFQSVxuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbi8qIFN0YXRpYyBGdW5jdGlvbnMgKi9cblxudmFyIFRSVUUgPSB2YWx1ZVByb21pc2UodHJ1ZSk7XG52YXIgRkFMU0UgPSB2YWx1ZVByb21pc2UoZmFsc2UpO1xudmFyIE5VTEwgPSB2YWx1ZVByb21pc2UobnVsbCk7XG52YXIgVU5ERUZJTkVEID0gdmFsdWVQcm9taXNlKHVuZGVmaW5lZCk7XG52YXIgWkVSTyA9IHZhbHVlUHJvbWlzZSgwKTtcbnZhciBFTVBUWVNUUklORyA9IHZhbHVlUHJvbWlzZSgnJyk7XG5cbmZ1bmN0aW9uIHZhbHVlUHJvbWlzZSh2YWx1ZSkge1xuICB2YXIgcCA9IG5ldyBQcm9taXNlKFByb21pc2UuXzk5KTtcbiAgcC5fMzcgPSAxO1xuICBwLl8xMiA9IHZhbHVlO1xuICByZXR1cm4gcDtcbn1cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gdmFsdWU7XG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gTlVMTDtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBVTkRFRklORUQ7XG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIFRSVUU7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHJldHVybiBGQUxTRTtcbiAgaWYgKHZhbHVlID09PSAwKSByZXR1cm4gWkVSTztcbiAgaWYgKHZhbHVlID09PSAnJykgcmV0dXJuIEVNUFRZU1RSSU5HO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdGhlbiA9IHZhbHVlLnRoZW47XG4gICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHRoZW4uYmluZCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZWplY3QoZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVByb21pc2UodmFsdWUpO1xufTtcblxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcbiAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWwudGhlbiA9PT0gUHJvbWlzZS5wcm90b3R5cGUudGhlbikge1xuICAgICAgICAgIHdoaWxlICh2YWwuXzM3ID09PSAzKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuXzEyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsLl8zNyA9PT0gMSkgcmV0dXJuIHJlcyhpLCB2YWwuXzEyKTtcbiAgICAgICAgICBpZiAodmFsLl8zNyA9PT0gMikgcmVqZWN0KHZhbC5fMTIpO1xuICAgICAgICAgIHZhbC50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKHRoZW4uYmluZCh2YWwpKTtcbiAgICAgICAgICAgIHAudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpe1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyogUHJvdG90eXBlIE1ldGhvZHMgKi9cblxuUHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG5yZXF1aXJlKCcuL2RvbmUuanMnKTtcbnJlcXVpcmUoJy4vZmluYWxseS5qcycpO1xucmVxdWlyZSgnLi9lczYtZXh0ZW5zaW9ucy5qcycpO1xucmVxdWlyZSgnLi9ub2RlLWV4dGVuc2lvbnMuanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIHRoZW4vcHJvbWlzZSBzcGVjaWZpYyBleHRlbnNpb25zIHRoYXQgYXJlIG9ubHkgdXNlZnVsXG4vLyBmb3Igbm9kZS5qcyBpbnRlcm9wXG5cbnZhciBQcm9taXNlID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG52YXIgYXNhcCA9IHJlcXVpcmUoJ2FzYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG4vKiBTdGF0aWMgRnVuY3Rpb25zICovXG5cblByb21pc2UuZGVub2RlaWZ5ID0gZnVuY3Rpb24gKGZuLCBhcmd1bWVudENvdW50KSB7XG4gIGFyZ3VtZW50Q291bnQgPSBhcmd1bWVudENvdW50IHx8IEluZmluaXR5O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCxcbiAgICAgICAgYXJndW1lbnRDb3VudCA+IDAgPyBhcmd1bWVudENvdW50IDogMCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICAgIGVsc2UgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIHZhciByZXMgPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGlmIChyZXMgJiZcbiAgICAgICAgKFxuICAgICAgICAgIHR5cGVvZiByZXMgPT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgdHlwZW9mIHJlcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICApICYmXG4gICAgICAgIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgKSB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5Qcm9taXNlLm5vZGVpZnkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgdmFyIGNhbGxiYWNrID1cbiAgICAgIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicgPyBhcmdzLnBvcCgpIDogbnVsbDtcbiAgICB2YXIgY3R4ID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykubm9kZWlmeShjYWxsYmFjaywgY3R4KTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKGNhbGxiYWNrID09PSBudWxsIHx8IHR5cGVvZiBjYWxsYmFjayA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGV4KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGUubm9kZWlmeSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRoaXM7XG5cbiAgdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suY2FsbChjdHgsIG51bGwsIHZhbHVlKTtcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJhd0FzYXAgcHJvdmlkZXMgZXZlcnl0aGluZyB3ZSBuZWVkIGV4Y2VwdCBleGNlcHRpb24gbWFuYWdlbWVudC5cbnZhciByYXdBc2FwID0gcmVxdWlyZShcIi4vcmF3XCIpO1xuLy8gUmF3VGFza3MgYXJlIHJlY3ljbGVkIHRvIHJlZHVjZSBHQyBjaHVybi5cbnZhciBmcmVlVGFza3MgPSBbXTtcbi8vIFdlIHF1ZXVlIGVycm9ycyB0byBlbnN1cmUgdGhleSBhcmUgdGhyb3duIGluIHJpZ2h0IG9yZGVyIChGSUZPKS5cbi8vIEFycmF5LWFzLXF1ZXVlIGlzIGdvb2QgZW5vdWdoIGhlcmUsIHNpbmNlIHdlIGFyZSBqdXN0IGRlYWxpbmcgd2l0aCBleGNlcHRpb25zLlxudmFyIHBlbmRpbmdFcnJvcnMgPSBbXTtcbnZhciByZXF1ZXN0RXJyb3JUaHJvdyA9IHJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKHRocm93Rmlyc3RFcnJvcik7XG5cbmZ1bmN0aW9uIHRocm93Rmlyc3RFcnJvcigpIHtcbiAgICBpZiAocGVuZGluZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgcGVuZGluZ0Vycm9ycy5zaGlmdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxscyBhIHRhc2sgYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciByZXR1cm5pbmcsIGluIGl0cyBvd24gZXZlbnQsIHdpdGggcHJpb3JpdHlcbiAqIG92ZXIgb3RoZXIgZXZlbnRzIGxpa2UgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZXBhaW50LiBBbiBlcnJvciB0aHJvd24gZnJvbSBhblxuICogZXZlbnQgd2lsbCBub3QgaW50ZXJydXB0LCBub3IgZXZlbiBzdWJzdGFudGlhbGx5IHNsb3cgZG93biB0aGUgcHJvY2Vzc2luZyBvZlxuICogb3RoZXIgZXZlbnRzLCBidXQgd2lsbCBiZSByYXRoZXIgcG9zdHBvbmVkIHRvIGEgbG93ZXIgcHJpb3JpdHkgZXZlbnQuXG4gKiBAcGFyYW0ge3tjYWxsfX0gdGFzayBBIGNhbGxhYmxlIG9iamVjdCwgdHlwaWNhbGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogYXJndW1lbnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFzYXA7XG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgICB2YXIgcmF3VGFzaztcbiAgICBpZiAoZnJlZVRhc2tzLmxlbmd0aCkge1xuICAgICAgICByYXdUYXNrID0gZnJlZVRhc2tzLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhd1Rhc2sgPSBuZXcgUmF3VGFzaygpO1xuICAgIH1cbiAgICByYXdUYXNrLnRhc2sgPSB0YXNrO1xuICAgIHJhd0FzYXAocmF3VGFzayk7XG59XG5cbi8vIFdlIHdyYXAgdGFza3Mgd2l0aCByZWN5Y2xhYmxlIHRhc2sgb2JqZWN0cy4gIEEgdGFzayBvYmplY3QgaW1wbGVtZW50c1xuLy8gYGNhbGxgLCBqdXN0IGxpa2UgYSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJhd1Rhc2soKSB7XG4gICAgdGhpcy50YXNrID0gbnVsbDtcbn1cblxuLy8gVGhlIHNvbGUgcHVycG9zZSBvZiB3cmFwcGluZyB0aGUgdGFzayBpcyB0byBjYXRjaCB0aGUgZXhjZXB0aW9uIGFuZCByZWN5Y2xlXG4vLyB0aGUgdGFzayBvYmplY3QgYWZ0ZXIgaXRzIHNpbmdsZSB1c2UuXG5SYXdUYXNrLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMudGFzay5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGFzYXAub25lcnJvcikge1xuICAgICAgICAgICAgLy8gVGhpcyBob29rIGV4aXN0cyBwdXJlbHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAgICAgICAvLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXRcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gaXRzIGV4aXN0ZW5jZS5cbiAgICAgICAgICAgIGFzYXAub25lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBhIHdlYiBicm93c2VyLCBleGNlcHRpb25zIGFyZSBub3QgZmF0YWwuIEhvd2V2ZXIsIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzbG93aW5nIGRvd24gdGhlIHF1ZXVlIG9mIHBlbmRpbmcgdGFza3MsIHdlIHJldGhyb3cgdGhlIGVycm9yIGluIGFcbiAgICAgICAgICAgIC8vIGxvd2VyIHByaW9yaXR5IHR1cm4uXG4gICAgICAgICAgICBwZW5kaW5nRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmVxdWVzdEVycm9yVGhyb3coKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMudGFzayA9IG51bGw7XG4gICAgICAgIGZyZWVUYXNrc1tmcmVlVGFza3MubGVuZ3RoXSA9IHRoaXM7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBVc2UgdGhlIGZhc3Rlc3QgbWVhbnMgcG9zc2libGUgdG8gZXhlY3V0ZSBhIHRhc2sgaW4gaXRzIG93biB0dXJuLCB3aXRoXG4vLyBwcmlvcml0eSBvdmVyIG90aGVyIGV2ZW50cyBpbmNsdWRpbmcgSU8sIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVkcmF3XG4vLyBldmVudHMgaW4gYnJvd3NlcnMuXG4vL1xuLy8gQW4gZXhjZXB0aW9uIHRocm93biBieSBhIHRhc2sgd2lsbCBwZXJtYW5lbnRseSBpbnRlcnJ1cHQgdGhlIHByb2Nlc3Npbmcgb2Zcbi8vIHN1YnNlcXVlbnQgdGFza3MuIFRoZSBoaWdoZXIgbGV2ZWwgYGFzYXBgIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93biBieSBhIHRhc2ssIHRoYXQgdGhlIHRhc2sgcXVldWUgd2lsbCBjb250aW51ZSBmbHVzaGluZyBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZSwgYnV0IGlmIHlvdSB1c2UgYHJhd0FzYXBgIGRpcmVjdGx5LCB5b3UgYXJlIHJlc3BvbnNpYmxlIHRvXG4vLyBlaXRoZXIgZW5zdXJlIHRoYXQgbm8gZXhjZXB0aW9ucyBhcmUgdGhyb3duIGZyb20geW91ciB0YXNrLCBvciB0byBtYW51YWxseVxuLy8gY2FsbCBgcmF3QXNhcC5yZXF1ZXN0Rmx1c2hgIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5tb2R1bGUuZXhwb3J0cyA9IHJhd0FzYXA7XG5mdW5jdGlvbiByYXdBc2FwKHRhc2spIHtcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICByZXF1ZXN0Rmx1c2goKTtcbiAgICAgICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBFcXVpdmFsZW50IHRvIHB1c2gsIGJ1dCBhdm9pZHMgYSBmdW5jdGlvbiBjYWxsLlxuICAgIHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB0YXNrO1xufVxuXG52YXIgcXVldWUgPSBbXTtcbi8vIE9uY2UgYSBmbHVzaCBoYXMgYmVlbiByZXF1ZXN0ZWQsIG5vIGZ1cnRoZXIgY2FsbHMgdG8gYHJlcXVlc3RGbHVzaGAgYXJlXG4vLyBuZWNlc3NhcnkgdW50aWwgdGhlIG5leHQgYGZsdXNoYCBjb21wbGV0ZXMuXG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGFuIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG1ldGhvZCB0aGF0IGF0dGVtcHRzIHRvIGtpY2tcbi8vIG9mZiBhIGBmbHVzaGAgZXZlbnQgYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gYGZsdXNoYCB3aWxsIGF0dGVtcHQgdG8gZXhoYXVzdFxuLy8gdGhlIGV2ZW50IHF1ZXVlIGJlZm9yZSB5aWVsZGluZyB0byB0aGUgYnJvd3NlcidzIG93biBldmVudCBsb29wLlxudmFyIHJlcXVlc3RGbHVzaDtcbi8vIFRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCB0YXNrIHRvIGV4ZWN1dGUgaW4gdGhlIHRhc2sgcXVldWUuIFRoaXMgaXNcbi8vIHByZXNlcnZlZCBiZXR3ZWVuIGNhbGxzIHRvIGBmbHVzaGAgc28gdGhhdCBpdCBjYW4gYmUgcmVzdW1lZCBpZlxuLy8gYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24uXG52YXIgaW5kZXggPSAwO1xuLy8gSWYgYSB0YXNrIHNjaGVkdWxlcyBhZGRpdGlvbmFsIHRhc2tzIHJlY3Vyc2l2ZWx5LCB0aGUgdGFzayBxdWV1ZSBjYW4gZ3Jvd1xuLy8gdW5ib3VuZGVkLiBUbyBwcmV2ZW50IG1lbW9yeSBleGhhdXN0aW9uLCB0aGUgdGFzayBxdWV1ZSB3aWxsIHBlcmlvZGljYWxseVxuLy8gdHJ1bmNhdGUgYWxyZWFkeS1jb21wbGV0ZWQgdGFza3MuXG52YXIgY2FwYWNpdHkgPSAxMDI0O1xuXG4vLyBUaGUgZmx1c2ggZnVuY3Rpb24gcHJvY2Vzc2VzIGFsbCB0YXNrcyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgd2l0aFxuLy8gYHJhd0FzYXBgIHVubGVzcyBhbmQgdW50aWwgb25lIG9mIHRob3NlIHRhc2tzIHRocm93cyBhbiBleGNlcHRpb24uXG4vLyBJZiBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgYGZsdXNoYCBlbnN1cmVzIHRoYXQgaXRzIHN0YXRlIHdpbGwgcmVtYWluXG4vLyBjb25zaXN0ZW50IGFuZCB3aWxsIHJlc3VtZSB3aGVyZSBpdCBsZWZ0IG9mZiB3aGVuIGNhbGxlZCBhZ2Fpbi5cbi8vIEhvd2V2ZXIsIGBmbHVzaGAgZG9lcyBub3QgbWFrZSBhbnkgYXJyYW5nZW1lbnRzIHRvIGJlIGNhbGxlZCBhZ2FpbiBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93bi5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHdoaWxlIChpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIC8vIEFkdmFuY2UgdGhlIGluZGV4IGJlZm9yZSBjYWxsaW5nIHRoZSB0YXNrLiBUaGlzIGVuc3VyZXMgdGhhdCB3ZSB3aWxsXG4gICAgICAgIC8vIGJlZ2luIGZsdXNoaW5nIG9uIHRoZSBuZXh0IHRhc2sgdGhlIHRhc2sgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICBpbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgcXVldWVbY3VycmVudEluZGV4XS5jYWxsKCk7XG4gICAgICAgIC8vIFByZXZlbnQgbGVha2luZyBtZW1vcnkgZm9yIGxvbmcgY2hhaW5zIG9mIHJlY3Vyc2l2ZSBjYWxscyB0byBgYXNhcGAuXG4gICAgICAgIC8vIElmIHdlIGNhbGwgYGFzYXBgIHdpdGhpbiB0YXNrcyBzY2hlZHVsZWQgYnkgYGFzYXBgLCB0aGUgcXVldWUgd2lsbFxuICAgICAgICAvLyBncm93LCBidXQgdG8gYXZvaWQgYW4gTyhuKSB3YWxrIGZvciBldmVyeSB0YXNrIHdlIGV4ZWN1dGUsIHdlIGRvbid0XG4gICAgICAgIC8vIHNoaWZ0IHRhc2tzIG9mZiB0aGUgcXVldWUgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZXhlY3V0ZWQuXG4gICAgICAgIC8vIEluc3RlYWQsIHdlIHBlcmlvZGljYWxseSBzaGlmdCAxMDI0IHRhc2tzIG9mZiB0aGUgcXVldWUuXG4gICAgICAgIGlmIChpbmRleCA+IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAvLyBNYW51YWxseSBzaGlmdCBhbGwgdmFsdWVzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleCBiYWNrIHRvIHRoZVxuICAgICAgICAgICAgLy8gYmVnaW5uaW5nIG9mIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIGZvciAodmFyIHNjYW4gPSAwLCBuZXdMZW5ndGggPSBxdWV1ZS5sZW5ndGggLSBpbmRleDsgc2NhbiA8IG5ld0xlbmd0aDsgc2NhbisrKSB7XG4gICAgICAgICAgICAgICAgcXVldWVbc2Nhbl0gPSBxdWV1ZVtzY2FuICsgaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUubGVuZ3RoIC09IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgaW5kZXggPSAwO1xuICAgIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGltcGxlbWVudGVkIHVzaW5nIGEgc3RyYXRlZ3kgYmFzZWQgb24gZGF0YSBjb2xsZWN0ZWQgZnJvbVxuLy8gZXZlcnkgYXZhaWxhYmxlIFNhdWNlTGFicyBTZWxlbml1bSB3ZWIgZHJpdmVyIHdvcmtlciBhdCB0aW1lIG9mIHdyaXRpbmcuXG4vLyBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xbUctNVVZR3VwNXF4R2RFTVdraFA2QldDejA1M05VYjJFMVFvVVRVMTZ1QS9lZGl0I2dpZD03ODM3MjQ1OTNcblxuLy8gU2FmYXJpIDYgYW5kIDYuMSBmb3IgZGVza3RvcCwgaVBhZCwgYW5kIGlQaG9uZSBhcmUgdGhlIG9ubHkgYnJvd3NlcnMgdGhhdFxuLy8gaGF2ZSBXZWJLaXRNdXRhdGlvbk9ic2VydmVyIGJ1dCBub3QgdW4tcHJlZml4ZWQgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11c3QgdXNlIGBnbG9iYWxgIGluc3RlYWQgb2YgYHdpbmRvd2AgdG8gd29yayBpbiBib3RoIGZyYW1lcyBhbmQgd2ViXG4vLyB3b3JrZXJzLiBgZ2xvYmFsYCBpcyBhIHByb3Zpc2lvbiBvZiBCcm93c2VyaWZ5LCBNciwgTXJzLCBvciBNb3AuXG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuLy8gTXV0YXRpb25PYnNlcnZlcnMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgaGF2ZSBoaWdoIHByaW9yaXR5IGFuZCB3b3JrXG4vLyByZWxpYWJseSBldmVyeXdoZXJlIHRoZXkgYXJlIGltcGxlbWVudGVkLlxuLy8gVGhleSBhcmUgaW1wbGVtZW50ZWQgaW4gYWxsIG1vZGVybiBicm93c2Vycy5cbi8vXG4vLyAtIEFuZHJvaWQgNC00LjNcbi8vIC0gQ2hyb21lIDI2LTM0XG4vLyAtIEZpcmVmb3ggMTQtMjlcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgMTFcbi8vIC0gaVBhZCBTYWZhcmkgNi03LjFcbi8vIC0gaVBob25lIFNhZmFyaSA3LTcuMVxuLy8gLSBTYWZhcmkgNi03XG5pZiAodHlwZW9mIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG5cbi8vIE1lc3NhZ2VDaGFubmVscyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBnaXZlIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIEhUTUxcbi8vIHRhc2sgcXVldWUsIGFyZSBpbXBsZW1lbnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCwgU2FmYXJpIDUuMC0xLCBhbmQgT3BlcmFcbi8vIDExLTEyLCBhbmQgaW4gd2ViIHdvcmtlcnMgaW4gbWFueSBlbmdpbmVzLlxuLy8gQWx0aG91Z2ggbWVzc2FnZSBjaGFubmVscyB5aWVsZCB0byBhbnkgcXVldWVkIHJlbmRlcmluZyBhbmQgSU8gdGFza3MsIHRoZXlcbi8vIHdvdWxkIGJlIGJldHRlciB0aGFuIGltcG9zaW5nIHRoZSA0bXMgZGVsYXkgb2YgdGltZXJzLlxuLy8gSG93ZXZlciwgdGhleSBkbyBub3Qgd29yayByZWxpYWJseSBpbiBJbnRlcm5ldCBFeHBsb3JlciBvciBTYWZhcmkuXG5cbi8vIEludGVybmV0IEV4cGxvcmVyIDEwIGlzIHRoZSBvbmx5IGJyb3dzZXIgdGhhdCBoYXMgc2V0SW1tZWRpYXRlIGJ1dCBkb2VzXG4vLyBub3QgaGF2ZSBNdXRhdGlvbk9ic2VydmVycy5cbi8vIEFsdGhvdWdoIHNldEltbWVkaWF0ZSB5aWVsZHMgdG8gdGhlIGJyb3dzZXIncyByZW5kZXJlciwgaXQgd291bGQgYmVcbi8vIHByZWZlcnJhYmxlIHRvIGZhbGxpbmcgYmFjayB0byBzZXRUaW1lb3V0IHNpbmNlIGl0IGRvZXMgbm90IGhhdmVcbi8vIHRoZSBtaW5pbXVtIDRtcyBwZW5hbHR5LlxuLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBhcHBlYXJzIHRvIGJlIGEgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwIE1vYmlsZSAoYW5kXG4vLyBEZXNrdG9wIHRvIGEgbGVzc2VyIGV4dGVudCkgdGhhdCByZW5kZXJzIGJvdGggc2V0SW1tZWRpYXRlIGFuZFxuLy8gTWVzc2FnZUNoYW5uZWwgdXNlbGVzcyBmb3IgdGhlIHB1cnBvc2VzIG9mIEFTQVAuXG4vLyBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL3EvaXNzdWVzLzM5NlxuXG4vLyBUaW1lcnMgYXJlIGltcGxlbWVudGVkIHVuaXZlcnNhbGx5LlxuLy8gV2UgZmFsbCBiYWNrIHRvIHRpbWVycyBpbiB3b3JrZXJzIGluIG1vc3QgZW5naW5lcywgYW5kIGluIGZvcmVncm91bmRcbi8vIGNvbnRleHRzIGluIHRoZSBmb2xsb3dpbmcgYnJvd3NlcnMuXG4vLyBIb3dldmVyLCBub3RlIHRoYXQgZXZlbiB0aGlzIHNpbXBsZSBjYXNlIHJlcXVpcmVzIG51YW5jZXMgdG8gb3BlcmF0ZSBpbiBhXG4vLyBicm9hZCBzcGVjdHJ1bSBvZiBicm93c2Vycy5cbi8vXG4vLyAtIEZpcmVmb3ggMy0xM1xuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciA2LTlcbi8vIC0gaVBhZCBTYWZhcmkgNC4zXG4vLyAtIEx5bnggMi44Ljdcbn0gZWxzZSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGZsdXNoKTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgcmVxdWVzdHMgdGhhdCB0aGUgaGlnaCBwcmlvcml0eSBldmVudCBxdWV1ZSBiZSBmbHVzaGVkIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLlxuLy8gVGhpcyBpcyB1c2VmdWwgdG8gcHJldmVudCBhbiBlcnJvciB0aHJvd24gaW4gYSB0YXNrIGZyb20gc3RhbGxpbmcgdGhlIGV2ZW50XG4vLyBxdWV1ZSBpZiB0aGUgZXhjZXB0aW9uIGhhbmRsZWQgYnkgTm9kZS5qc+KAmXNcbi8vIGBwcm9jZXNzLm9uKFwidW5jYXVnaHRFeGNlcHRpb25cIilgIG9yIGJ5IGEgZG9tYWluLlxucmF3QXNhcC5yZXF1ZXN0Rmx1c2ggPSByZXF1ZXN0Rmx1c2g7XG5cbi8vIFRvIHJlcXVlc3QgYSBoaWdoIHByaW9yaXR5IGV2ZW50LCB3ZSBpbmR1Y2UgYSBtdXRhdGlvbiBvYnNlcnZlciBieSB0b2dnbGluZ1xuLy8gdGhlIHRleHQgb2YgYSB0ZXh0IG5vZGUgYmV0d2VlbiBcIjFcIiBhbmQgXCItMVwiLlxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICB2YXIgdG9nZ2xlID0gMTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgdG9nZ2xlID0gLXRvZ2dsZTtcbiAgICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlO1xuICAgIH07XG59XG5cbi8vIFRoZSBtZXNzYWdlIGNoYW5uZWwgdGVjaG5pcXVlIHdhcyBkaXNjb3ZlcmVkIGJ5IE1hbHRlIFVibCBhbmQgd2FzIHRoZVxuLy8gb3JpZ2luYWwgZm91bmRhdGlvbiBmb3IgdGhpcyBsaWJyYXJ5LlxuLy8gaHR0cDovL3d3dy5ub25ibG9ja2luZy5pby8yMDExLzA2L3dpbmRvd25leHR0aWNrLmh0bWxcblxuLy8gU2FmYXJpIDYuMC41IChhdCBsZWFzdCkgaW50ZXJtaXR0ZW50bHkgZmFpbHMgdG8gY3JlYXRlIG1lc3NhZ2UgcG9ydHMgb24gYVxuLy8gcGFnZSdzIGZpcnN0IGxvYWQuIFRoYW5rZnVsbHksIHRoaXMgdmVyc2lvbiBvZiBTYWZhcmkgc3VwcG9ydHNcbi8vIE11dGF0aW9uT2JzZXJ2ZXJzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGZhbGwgYmFjayBpbiB0aGF0IGNhc2UuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NZXNzYWdlQ2hhbm5lbChjYWxsYmFjaykge1xuLy8gICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4vLyAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gRm9yIHJlYXNvbnMgZXhwbGFpbmVkIGFib3ZlLCB3ZSBhcmUgYWxzbyB1bmFibGUgdG8gdXNlIGBzZXRJbW1lZGlhdGVgXG4vLyB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcy5cbi8vIEV2ZW4gaWYgd2Ugd2VyZSwgdGhlcmUgaXMgYW5vdGhlciBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4vLyBJdCBpcyBub3Qgc3VmZmljaWVudCB0byBhc3NpZ24gYHNldEltbWVkaWF0ZWAgdG8gYHJlcXVlc3RGbHVzaGAgYmVjYXVzZVxuLy8gYHNldEltbWVkaWF0ZWAgbXVzdCBiZSBjYWxsZWQgKmJ5IG5hbWUqIGFuZCB0aGVyZWZvcmUgbXVzdCBiZSB3cmFwcGVkIGluIGFcbi8vIGNsb3N1cmUuXG4vLyBOZXZlciBmb3JnZXQuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21TZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIHNldEltbWVkaWF0ZShjYWxsYmFjayk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gU2FmYXJpIDYuMCBoYXMgYSBwcm9ibGVtIHdoZXJlIHRpbWVycyB3aWxsIGdldCBsb3N0IHdoaWxlIHRoZSB1c2VyIGlzXG4vLyBzY3JvbGxpbmcuIFRoaXMgcHJvYmxlbSBkb2VzIG5vdCBpbXBhY3QgQVNBUCBiZWNhdXNlIFNhZmFyaSA2LjAgc3VwcG9ydHNcbi8vIG11dGF0aW9uIG9ic2VydmVycywgc28gdGhhdCBpbXBsZW1lbnRhdGlvbiBpcyB1c2VkIGluc3RlYWQuXG4vLyBIb3dldmVyLCBpZiB3ZSBldmVyIGVsZWN0IHRvIHVzZSB0aW1lcnMgaW4gU2FmYXJpLCB0aGUgcHJldmFsZW50IHdvcmstYXJvdW5kXG4vLyBpcyB0byBhZGQgYSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgdGhhdCBjYWxscyBmb3IgYSBmbHVzaC5cblxuLy8gYHNldFRpbWVvdXRgIGRvZXMgbm90IGNhbGwgdGhlIHBhc3NlZCBjYWxsYmFjayBpZiB0aGUgZGVsYXkgaXMgbGVzcyB0aGFuXG4vLyBhcHByb3hpbWF0ZWx5IDcgaW4gd2ViIHdvcmtlcnMgaW4gRmlyZWZveCA4IHRocm91Z2ggMTgsIGFuZCBzb21ldGltZXMgbm90XG4vLyBldmVuIHRoZW4uXG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgLy8gV2UgZGlzcGF0Y2ggYSB0aW1lb3V0IHdpdGggYSBzcGVjaWZpZWQgZGVsYXkgb2YgMCBmb3IgZW5naW5lcyB0aGF0XG4gICAgICAgIC8vIGNhbiByZWxpYWJseSBhY2NvbW1vZGF0ZSB0aGF0IHJlcXVlc3QuIFRoaXMgd2lsbCB1c3VhbGx5IGJlIHNuYXBwZWRcbiAgICAgICAgLy8gdG8gYSA0IG1pbGlzZWNvbmQgZGVsYXksIGJ1dCBvbmNlIHdlJ3JlIGZsdXNoaW5nLCB0aGVyZSdzIG5vIGRlbGF5XG4gICAgICAgIC8vIGJldHdlZW4gZXZlbnRzLlxuICAgICAgICB2YXIgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoaGFuZGxlVGltZXIsIDApO1xuICAgICAgICAvLyBIb3dldmVyLCBzaW5jZSB0aGlzIHRpbWVyIGdldHMgZnJlcXVlbnRseSBkcm9wcGVkIGluIEZpcmVmb3hcbiAgICAgICAgLy8gd29ya2Vycywgd2UgZW5saXN0IGFuIGludGVydmFsIGhhbmRsZSB0aGF0IHdpbGwgdHJ5IHRvIGZpcmVcbiAgICAgICAgLy8gYW4gZXZlbnQgMjAgdGltZXMgcGVyIHNlY29uZCB1bnRpbCBpdCBzdWNjZWVkcy5cbiAgICAgICAgdmFyIGludGVydmFsSGFuZGxlID0gc2V0SW50ZXJ2YWwoaGFuZGxlVGltZXIsIDUwKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUaW1lcigpIHtcbiAgICAgICAgICAgIC8vIFdoaWNoZXZlciB0aW1lciBzdWNjZWVkcyB3aWxsIGNhbmNlbCBib3RoIHRpbWVycyBhbmRcbiAgICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbEhhbmRsZSk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVGhpcyBpcyBmb3IgYGFzYXAuanNgIG9ubHkuXG4vLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXQgZGVwZW5kcyBvblxuLy8gaXRzIGV4aXN0ZW5jZS5cbnJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyO1xuXG4vLyBBU0FQIHdhcyBvcmlnaW5hbGx5IGEgbmV4dFRpY2sgc2hpbSBpbmNsdWRlZCBpbiBRLiBUaGlzIHdhcyBmYWN0b3JlZCBvdXRcbi8vIGludG8gdGhpcyBBU0FQIHBhY2thZ2UuIEl0IHdhcyBsYXRlciBhZGFwdGVkIHRvIFJTVlAgd2hpY2ggbWFkZSBmdXJ0aGVyXG4vLyBhbWVuZG1lbnRzLiBUaGVzZSBkZWNpc2lvbnMsIHBhcnRpY3VsYXJseSB0byBtYXJnaW5hbGl6ZSBNZXNzYWdlQ2hhbm5lbCBhbmRcbi8vIHRvIGNhcHR1cmUgdGhlIE11dGF0aW9uT2JzZXJ2ZXIgaW1wbGVtZW50YXRpb24gaW4gYSBjbG9zdXJlLCB3ZXJlIGludGVncmF0ZWRcbi8vIGJhY2sgaW50byBBU0FQIHByb3Blci5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9jZGRmNzIzMjU0NmE5Y2Y4NTg1MjRiNzVjZGU2ZjllZGY3MjYyMGE3L2xpYi9yc3ZwL2FzYXAuanNcbiIsIm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBmdW5jdGlvbiB0aGF0LCB3aGVuIGludm9rZWQsIGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXIgYHdhaXRgIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIEZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge051bWJlcn0gd2FpdCBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgbXVzdCBlbGFwc2UgYmV0d2VlbiBgZnVuY2AgaW52b2NhdGlvbnMuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gdGhhdCB3cmFwcyB0aGUgYGZ1bmNgIGZ1bmN0aW9uIHBhc3NlZCBpbi5cbiAqL1xuXG5mdW5jdGlvbiB0aHJvdHRsZSAoZnVuYywgd2FpdCkge1xuICB2YXIgY3R4LCBhcmdzLCBydG4sIHRpbWVvdXRJRDsgLy8gY2FjaGluZ1xuICB2YXIgbGFzdCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHRocm90dGxlZCAoKSB7XG4gICAgY3R4ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBkZWx0YSA9IG5ldyBEYXRlKCkgLSBsYXN0O1xuICAgIGlmICghdGltZW91dElEKVxuICAgICAgaWYgKGRlbHRhID49IHdhaXQpIGNhbGwoKTtcbiAgICAgIGVsc2UgdGltZW91dElEID0gc2V0VGltZW91dChjYWxsLCB3YWl0IC0gZGVsdGEpO1xuICAgIHJldHVybiBydG47XG4gIH07XG5cbiAgZnVuY3Rpb24gY2FsbCAoKSB7XG4gICAgdGltZW91dElEID0gMDtcbiAgICBsYXN0ID0gK25ldyBEYXRlKCk7XG4gICAgcnRuID0gZnVuYy5hcHBseShjdHgsIGFyZ3MpO1xuICAgIGN0eCA9IG51bGw7XG4gICAgYXJncyA9IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuKiBUb2NrIGJ5IE1yIENoaW1wIC0gZ2l0aHViLmNvbS9tcmNoaW1wL3RvY2tcbiogQmFzZWQgb24gY29kZSBieSBKYW1lcyBFZHdhcmRzOlxuKiAgICBzaXRlcG9pbnQuY29tL2NyZWF0aW5nLWFjY3VyYXRlLXRpbWVycy1pbi1qYXZhc2NyaXB0L1xuKi9cblxuLy8gSW1wbGVtZW50cyBEYXRlLm5vdygpIGZvciBpZSBsdCA5XG5EYXRlLm5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkgeyByZXR1cm4gK25ldyBEYXRlKCk7IH07XG5cbi8vIFBvbHlmaWxscyBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBmb3IgSUUgbHQgOSBhbmQgU2FmYXJpIGx0IDUuMVxuaWYgKCB0eXBlb2YgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgIT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgZm4gPSB0aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXJncy5wdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY3R4LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgZGVmaW5lKGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5Ub2NrID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogQ2FsbGVkIGV2ZXJ5IHRpY2sgZm9yIGNvdW50ZG93biBjbG9ja3MuXG4gICAqIGkuZS4gb25jZSBldmVyeSB0aGlzLmludGVydmFsIG1zXG4gICAqL1xuICBmdW5jdGlvbiBfdGljayAoKSB7XG4gICAgdGhpcy50aW1lICs9IHRoaXMuaW50ZXJ2YWw7XG5cbiAgICBpZiAoIHRoaXMuY291bnRkb3duICYmICh0aGlzLmR1cmF0aW9uX21zIC0gdGhpcy50aW1lIDwgMCkgKSB7XG4gICAgICB0aGlzLmZpbmFsX3RpbWUgPSAwO1xuICAgICAgdGhpcy5nbyA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzKTtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIHRoaXMuY29tcGxldGUodGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgZGlmZiA9IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydF90aW1lKSAtIHRoaXMudGltZSxcbiAgICAgICAgbmV4dF9pbnRlcnZhbF9pbiA9IGRpZmYgPiAwID8gdGhpcy5pbnRlcnZhbCAtIGRpZmYgOiB0aGlzLmludGVydmFsO1xuXG4gICAgaWYgKCBuZXh0X2ludGVydmFsX2luIDw9IDAgKSB7XG4gICAgICB0aGlzLm1pc3NlZF90aWNrcyA9IE1hdGguZmxvb3IoTWF0aC5hYnMobmV4dF9pbnRlcnZhbF9pbikgLyB0aGlzLmludGVydmFsKTtcbiAgICAgIHRoaXMudGltZSArPSB0aGlzLm1pc3NlZF90aWNrcyAqIHRoaXMuaW50ZXJ2YWw7XG5cbiAgICAgIGlmICggdGhpcy5nbyApIHtcbiAgICAgICAgX3RpY2suY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoIHRoaXMuZ28gKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChfdGljay5iaW5kKHRoaXMpLCBuZXh0X2ludGVydmFsX2luKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGJ5IFRvY2sgaW50ZXJuYWxseSAtIHVzZSBzdGFydCgpIGluc3RlYWRcbiAgICovXG4gIGZ1bmN0aW9uIF9zdGFydENvdW50ZG93biAoZHVyYXRpb24pIHtcbiAgICB0aGlzLmR1cmF0aW9uX21zID0gZHVyYXRpb247XG4gICAgdGhpcy5zdGFydF90aW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnRpbWUgPSAwO1xuICAgIHRoaXMuZ28gPSB0cnVlO1xuICAgIF90aWNrLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGJ5IFRvY2sgaW50ZXJuYWxseSAtIHVzZSBzdGFydCgpIGluc3RlYWRcbiAgICovXG4gIGZ1bmN0aW9uIF9zdGFydFRpbWVyIChzdGFydF9vZmZzZXQpIHtcbiAgICB0aGlzLnN0YXJ0X3RpbWUgPSBzdGFydF9vZmZzZXQgfHwgRGF0ZS5ub3coKTtcbiAgICB0aGlzLnRpbWUgPSAwO1xuICAgIHRoaXMuZ28gPSB0cnVlO1xuICAgIF90aWNrLmNhbGwodGhpcyk7XG4gIH1cblxuICB2YXIgTUlMTElTRUNPTkRTX1JFICAgICAgICAgICA9IC9eXFxzKihcXCt8LSk/XFxkK1xccyokLyxcbiAgICAgIE1NX1NTX1JFICAgICAgICAgICAgICAgICAgPSAvXihcXGR7MSwyfSk6KFxcZHsyfSkkLyxcbiAgICAgIE1NX1NTX21zX09SX0hIX01NX1NTX1JFICAgPSAvXihcXGR7MSwyfSk6KFxcZHsyfSkoPzo6fFxcLikoXFxkezIsM30pJC8sXG4gICAgICBNU19QRVJfSE9VUiAgICAgICAgICAgICAgID0gMzYwMDAwMCxcbiAgICAgIE1TX1BFUl9NSU4gICAgICAgICAgICAgICAgPSA2MDAwMCxcbiAgICAgIE1TX1BFUl9TRUMgICAgICAgICAgICAgICAgPSAxMDAwLFxuICAgICAgLyogVGhlIFJlZ0V4cCBiZWxvdyB3aWxsIG1hdGNoIGEgZGF0ZSBpbiBmb3JtYXQgYHl5eXktbW0tZGQgSEg6TU06U1NgIGFuZCBvcHRpb25hbGx5IHdpdGggYC5tc2AgYXQgdGhlIGVuZC5cbiAgICAgICAqIEl0IHdpbGwgYWxzbyBtYXRjaCBJU08gZGF0ZSBzdHJpbmcsIGkuZS4gaWYgdGhlIHdoaXRlc3BhY2Ugc2VwYXJhdG9yIGluIHRoZSBtaWRkbGUgaXMgcmVwbGFjZWQgd2l0aCBhIGBUYFxuICAgICAgICogYW5kIHRoZSBkYXRlIHN0cmluZyBpcyBhbHNvIHN1ZmZpeGVkIHdpdGggYSBgWmAgZGVub3RpbmcgVVRDIHRpbWV6b25lLlxuICAgICAgICovXG4gICAgICB5eXl5X21tX2RkX0hIX01NX1NTX21zX1JFID0gL14oXFxkezR9KS0oWzAtMV1cXGQpLShbMC0zXVxcZCkoPzpcXHN8VCkoXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLihcXGR7M30pWj8pPyQvO1xuXG4gIHZhciBUb2NrID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBcbiAgICBpZiAoICEgKHRoaXMgaW5zdGFuY2VvZiBUb2NrKSApIHJldHVybiBuZXcgVG9jayhvcHRpb25zKTtcblxuICAgIFRvY2suaW5zdGFuY2VzID0gKFRvY2suaW5zdGFuY2VzIHx8IDApICsgMTtcblxuICAgIHRoaXMuZ28gICAgICAgICAgID0gZmFsc2U7XG4gICAgdGhpcy50aW1lb3V0ICAgICAgPSBudWxsO1xuICAgIHRoaXMubWlzc2VkX3RpY2tzID0gbnVsbDtcbiAgICB0aGlzLmludGVydmFsICAgICA9IG9wdGlvbnMuaW50ZXJ2YWwgfHwgMTA7XG4gICAgdGhpcy5jb3VudGRvd24gICAgPSBvcHRpb25zLmNvdW50ZG93biB8fCBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0X3RpbWUgICA9IDA7XG4gICAgdGhpcy5wYXVzZV90aW1lICAgPSAwO1xuICAgIHRoaXMuZmluYWxfdGltZSAgID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uX21zICA9IDA7XG4gICAgdGhpcy50aW1lICAgICAgICAgPSAwO1xuICAgIHRoaXMuY2FsbGJhY2sgICAgID0gb3B0aW9ucy5jYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLmNvbXBsZXRlICAgICA9IG9wdGlvbnMuY29tcGxldGUgfHwgZnVuY3Rpb24gKCkge307XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBjbG9ja1xuICAgKi9cbiAgVG9jay5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCB0aGlzLmNvdW50ZG93biApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5zdGFydF90aW1lID0gMDtcbiAgICB0aGlzLnRpbWUgPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgY2xvY2suXG4gICAqIGFjY2VwdHMgYSBzaW5nbGUgXCJ0aW1lXCIgYXJndW1lbnQgd2hpY2ggY2FuIGJlIGluIHZhcmlvdXMgZm9ybXM6XG4gICAqKiBNTTpTU1xuICAgKiogTU06U1M6bXMgb3IgTU06U1MubXNcbiAgICoqIEhIOk1NOlNTXG4gICAqKiB5eXl5LW1tLWRkIEhIOk1NOlNTLm1zXG4gICAqKiBtaWxsaXNlY29uZHNcbiAgICovXG4gIFRvY2sucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICBpZiAodGhpcy5nbykgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGltZSA9IHRpbWUgPyB0aGlzLnRpbWVUb01TKHRpbWUpIDogMDtcblxuICAgIHRoaXMuc3RhcnRfdGltZSA9IHRpbWU7XG4gICAgdGhpcy5wYXVzZV90aW1lID0gMDtcblxuICAgIGlmICggdGhpcy5jb3VudGRvd24gKSB7XG4gICAgICBfc3RhcnRDb3VudGRvd24uY2FsbCh0aGlzLCB0aW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3N0YXJ0VGltZXIuY2FsbCh0aGlzLCBEYXRlLm5vdygpIC0gdGltZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBjbG9jay5cbiAgICovXG4gIFRvY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wYXVzZV90aW1lID0gdGhpcy5sYXAoKTtcbiAgICB0aGlzLmdvID0gZmFsc2U7XG5cbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICBpZiAoIHRoaXMuY291bnRkb3duICkge1xuICAgICAgdGhpcy5maW5hbF90aW1lID0gdGhpcy5kdXJhdGlvbl9tcyAtIHRoaXMudGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maW5hbF90aW1lID0gKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0X3RpbWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU3RvcC9zdGFydCB0aGUgY2xvY2suXG4gICAqL1xuICBUb2NrLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIHRoaXMuZ28gKSB7XG4gICAgICB0aGlzLnBhdXNlX3RpbWUgPSB0aGlzLmxhcCgpO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCB0aGlzLnBhdXNlX3RpbWUgKSB7XG4gICAgICAgIGlmICggdGhpcy5jb3VudGRvd24gKSB7XG4gICAgICAgICAgX3N0YXJ0Q291bnRkb3duLmNhbGwodGhpcywgdGhpcy5wYXVzZV90aW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfc3RhcnRUaW1lci5jYWxsKHRoaXMsIERhdGUubm93KCkgLSB0aGlzLnBhdXNlX3RpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXVzZV90aW1lID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjbG9jayB0aW1lIGluIG1zLlxuICAgKiBVc2Ugd2l0aCBUb2NrLm1zVG9UaW1lKCkgdG8gbWFrZSBpdCBsb29rIG5pY2UuXG4gICAqL1xuICBUb2NrLnByb3RvdHlwZS5sYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCB0aGlzLmdvICkge1xuICAgICAgdmFyIG5vdztcblxuICAgICAgaWYgKCB0aGlzLmNvdW50ZG93biApIHtcbiAgICAgICAgbm93ID0gdGhpcy5kdXJhdGlvbl9tcyAtIChEYXRlLm5vdygpIC0gdGhpcy5zdGFydF90aW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdyA9IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydF90aW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYXVzZV90aW1lIHx8IHRoaXMuZmluYWxfdGltZTtcbiAgfTtcblxuICAvKipcbiAgICogRm9ybWF0IG1pbGxpc2Vjb25kcyBhcyBhIE1NOlNTLm1zIHN0cmluZy5cbiAgICovXG4gIFRvY2sucHJvdG90eXBlLm1zVG9UaW1lID0gZnVuY3Rpb24gKG1zKSB7XG4gICAgaWYgKCBtcyA8PSAwICkge1xuICAgICAgcmV0dXJuICcwMDowMC4wMDAnO1xuICAgIH1cblxuICAgIHZhciBtaWxsaXNlY29uZHMgPSAobXMgJSBNU19QRVJfU0VDKS50b1N0cmluZygpLFxuICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigobXMgLyBNU19QRVJfU0VDKSAlIDYwKS50b1N0cmluZygpLFxuICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigobXMgLyAoTVNfUEVSX01JTikpICUgNjApLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAoIG1pbGxpc2Vjb25kcy5sZW5ndGggPT09IDEgKSB7XG4gICAgICBtaWxsaXNlY29uZHMgPSAnMDAnICsgbWlsbGlzZWNvbmRzO1xuICAgIH1cbiAgICBlbHNlIGlmICggbWlsbGlzZWNvbmRzLmxlbmd0aCA9PT0gMiApIHtcbiAgICAgIG1pbGxpc2Vjb25kcyA9ICcwJyArIG1pbGxpc2Vjb25kcztcbiAgICB9XG4gICAgaWYgKCBzZWNvbmRzLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgIHNlY29uZHMgPSAnMCcgKyBzZWNvbmRzO1xuICAgIH1cbiAgICBpZiAoIG1pbnV0ZXMubGVuZ3RoID09PSAxICkge1xuICAgICAgbWludXRlcyA9ICcwJyArIG1pbnV0ZXM7XG4gICAgfVxuICAgIHJldHVybiBtaW51dGVzICsgJzonICsgc2Vjb25kcyArICcuJyArIG1pbGxpc2Vjb25kcztcbiAgfTtcblxuICAvKipcbiAgICogRm9ybWF0IG1pbGxpc2Vjb25kcyBhcyBISDpNTTpTU1xuICAgKi9cbiAgVG9jay5wcm90b3R5cGUubXNUb1RpbWVjb2RlID0gZnVuY3Rpb24gKG1zKSB7XG4gICAgaWYgKG1zIDw9IDApIHtcbiAgICAgIHJldHVybiAnMDA6MDA6MDAnO1xuICAgIH1cblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigobXMgLyBNU19QRVJfU0VDKSAlIDYwKS50b1N0cmluZygpLFxuICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigobXMgLyAoTVNfUEVSX01JTikpICUgNjApLnRvU3RyaW5nKCksXG4gICAgICAgIE1TX1BFUl9IT1VScyA9IE1hdGguZmxvb3IoKG1zIC8gKE1TX1BFUl9IT1VSKSkgJSA2MCkudG9TdHJpbmcoKTtcblxuICAgIGlmICggc2Vjb25kcy5sZW5ndGggPT09IDEgKSB7XG4gICAgICBzZWNvbmRzID0gJzAnICsgc2Vjb25kcztcbiAgICB9XG5cbiAgICBpZiAoIG1pbnV0ZXMubGVuZ3RoID09PSAxICkge1xuICAgICAgbWludXRlcyA9ICcwJyArIG1pbnV0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCBNU19QRVJfSE9VUnMubGVuZ3RoID09PSAxICkge1xuICAgICAgTVNfUEVSX0hPVVJzID0gJzAnICsgTVNfUEVSX0hPVVJzO1xuICAgIH1cblxuICAgIHJldHVybiBNU19QRVJfSE9VUnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kcztcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhIHRpbWUgc3RyaW5nIHRvIG1pbGxpc2Vjb25kc1xuICAgKlxuICAgKiBQb3NzaWJsZSBpbnB1dHM6XG4gICAqIE1NOlNTXG4gICAqIE1NOlNTOm1zIG9yIE1NOlNTLm1zXG4gICAqIEhIOk1NOlNTXG4gICAqIHl5eXktbW0tZGQgSEg6TU06U1MubXNcbiAgICpcbiAgICogQSBtaWxsaXNlY29uZHMgaW5wdXQgd2lsbCByZXR1cm4gaXQgYmFjayBmb3Igc2FmZXR5XG4gICAqIElmIHRoZSBpbnB1dCBjYW5ub3QgYmUgcmVjb2duaXplZCB0aGVuIDAgaXMgcmV0dXJuZWRcbiAgICpcbiAgICovXG4gIFRvY2sucHJvdG90eXBlLnRpbWVUb01TID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAvL2lmIG1pbGxpc2Vjb25kcyBpbnRlZ2VyIGlzIGlucHV0IHRoZW4gcmV0dXJuIGl0IGJhY2tcbiAgICBpZiAoIE1JTExJU0VDT05EU19SRS50ZXN0KFN0cmluZyh0aW1lKSkgKSB7XG4gICAgICByZXR1cm4gdGltZTtcbiAgICB9XG5cbiAgICB2YXIgbXMsXG4gICAgICAgIHRpbWVfc3BsaXQsXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBkYXRlLFxuICAgICAgICBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKCBNTV9TU19SRS50ZXN0KHRpbWUpICkgeyAvLyBJZiBNTTpTU1xuICAgICAgdGltZV9zcGxpdCA9IHRpbWUuc3BsaXQoJzonKTtcbiAgICAgIG1zID0gcGFyc2VJbnQodGltZV9zcGxpdFswXSwgMTApICogTVNfUEVSX01JTjtcbiAgICAgIG1zICs9IHBhcnNlSW50KHRpbWVfc3BsaXRbMV0sIDEwKSAqIE1TX1BFUl9TRUM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGNoID0gdGltZS5tYXRjaChNTV9TU19tc19PUl9ISF9NTV9TU19SRSk7XG5cbiAgICAgIGlmICggbWF0Y2ggKSB7XG4gICAgICAgIGlmICggbWF0Y2hbM10ubGVuZ3RoID09IDMgfHwgcGFyc2VJbnQobWF0Y2hbM10sIDEwKSA+IDU5ICkgeyAvLyBJZiBNTTpTUzptcyBvciBNTTpTUy5tcyAoZS5nLiAxMDoxMDo0NTggb3IgMTA6MTAuNDU4KVxuICAgICAgICAgIG1zID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSAqIE1TX1BFUl9NSU47XG4gICAgICAgICAgbXMgKz0gcGFyc2VJbnQobWF0Y2hbMl0sIDEwKSAqIE1TX1BFUl9TRUM7XG4gICAgICAgICAgbXMgKz0gcGFyc2VJbnQobWF0Y2hbM10sIDEwKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gVGhlbiBpdCdzIEhIOk1NOlNTXG4gICAgICAgICAgbXMgPSBwYXJzZUludChtYXRjaFsxXSwgMTApICogTVNfUEVSX0hPVVI7XG4gICAgICAgICAgbXMgKz0gcGFyc2VJbnQobWF0Y2hbMl0sIDEwKSAqIE1TX1BFUl9NSU47XG4gICAgICAgICAgbXMgKz0gcGFyc2VJbnQobWF0Y2hbM10sIDEwKSAqIE1TX1BFUl9TRUM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIHl5eXlfbW1fZGRfSEhfTU1fU1NfbXNfUkUudGVzdCh0aW1lKSApIHsgLy8gSWYgeXl5eS1tbS1kZCBISDpNTTpTUyBvciB5eXl5LW1tLWRkIEhIOk1NOlNTLm1zIG9yIHl5eXktbW0tZGRUSEg6TU06U1MubXNaXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgbWF0Y2ggPSB0aW1lLm1hdGNoKHl5eXlfbW1fZGRfSEhfTU1fU1NfbXNfUkUpO1xuICAgICAgICBcbiAgICAgICAgZGF0ZS5zZXRZZWFyKG1hdGNoWzFdKTtcbiAgICAgICAgZGF0ZS5zZXRNb250aChtYXRjaFsyXSk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShtYXRjaFszXSk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMobWF0Y2hbNF0pO1xuICAgICAgICBkYXRlLnNldE1pbnV0ZXMobWF0Y2hbNV0pO1xuICAgICAgICBkYXRlLnNldFNlY29uZHMobWF0Y2hbNl0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBtYXRjaFs3XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBkYXRlLnNldE1pbGxpc2Vjb25kcyhtYXRjaFs3XSk7XG4gICAgICAgIH1cblxuICAgICAgICBtcyA9IE1hdGgubWF4KDAsIGRhdGUuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMZXQncyB0cnkgaXQgYXMgYSBkYXRlIHN0cmluZ1xuICAgICAgICBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBtcyA9IERhdGUucGFyc2UodGltZSk7XG5cbiAgICAgICAgaWYgKCFpc05hTihtcykpIHsgLy8gTG9va3Mgb2tcbiAgICAgICAgICBtcyA9IE1hdGgubWF4KDAsIG1zIC0gbm93LmdldFRpbWUoKSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIENvdWxkIG5vdCByZWNvZ25pemUgaW5wdXQsIHNvIHN0YXJ0IGZyb20gMFxuICAgICAgICAgIG1zID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtcztcbiAgfTtcblxuICByZXR1cm4gVG9jaztcbn0pKTtcbiJdfQ==
