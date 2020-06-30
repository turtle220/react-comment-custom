/* eslint-disable */
export default function(e) {
    e.fn.menuzord = function(n) {
        function i(n) {
            "fade" == p.effect ? e(n).children(".dropdown, .megamenu").stop(!0, !0).delay(p.showDelay).fadeIn(p.showSpeed).addClass(p.animation) : e(n).children(".dropdown, .megamenu").stop(!0, !0).delay(p.showDelay).slideDown(p.showSpeed).addClass(p.animation)
        }

        function d(n) {
            "fade" == p.effect ? e(n).children(".dropdown, .megamenu").stop(!0, !0).delay(p.hideDelay).fadeOut(p.hideSpeed).removeClass(p.animation) : e(n).children(".dropdown, .megamenu").stop(!0, !0).delay(p.hideDelay).slideUp(p.hideSpeed).removeClass(p.animation), e(n).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(!0, !0).delay(p.hideDelay).fadeOut(p.hideSpeed)
        }

        function o() {
            e(g).find(".dropdown, .megamenu").hide(0), navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || "click" == p.trigger ? (e(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart", function(n) {
                return n.stopPropagation(), n.preventDefault(), e(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(!0, !0).fadeOut(300), "none" == e(this).siblings(".dropdown, .megamenu").css("display") ? (i(e(this).parent("li")), !1) : (d(e(this).parent("li")), void(window.location.href = e(this).attr("href")))
            }), e(document).bind("click.menu touchstart.menu", function(n) {
                0 == e(n.target).closest(".menuzord").length && e(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300)
            })) : e(w).bind("mouseenter", function() {
                i(this)
            }).bind("mouseleave", function() {
                d(this)
            })
        }

        function t() {
            e(g).find(".dropdown, .megamenu").hide(0), e(g).find(".indicator").each(function() {
                e(this).parent("a").siblings(".dropdown, .megamenu").length > 0 && e(this).bind("click", function(n) {
                    e(g).scrollTo({
                        top: 45,
                        left: 0
                    }, 600), "A" == e(this).parent().prop("tagName") && n.preventDefault(), "none" == e(this).parent("a").siblings(".dropdown, .megamenu").css("display") ? (e(this).parent("a").siblings(".dropdown, .megamenu").delay(p.showDelay).slideDown(p.showSpeed), e(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(p.hideSpeed)) : e(this).parent("a").siblings(".dropdown, .megamenu").slideUp(p.hideSpeed)
                })
            })
        }

        function a() {
            var n = e(g).children("li").children(".dropdown, .megamenu");
            if (e(window).innerWidth() > v)
                for (var i = e(f).outerWidth(!0), d = 0; d < n.length; d++) e(n[d]).parent("li").position().left + e(n[d]).outerWidth() > i ? e(n[d]).css("right", 'auto') : ((i == e(n[d]).outerWidth() || i - e(n[d]).outerWidth() < 20) && e(n[d]).css("left", 0), e(n[d]).parent("li").position().left + e(n[d]).outerWidth() < i && e(n[d]).css("right", "auto"))
        }

        function s() {
            e(g).hide(0), e(m).show(0).click(function() {
                "none" == e(g).css("display") ? e(g).slideDown(p.showSpeed) : e(g).slideUp(p.hideSpeed).find(".dropdown, .megamenu").hide(p.hideSpeed)
            })
        }

        function r() {
            e(g).show(0), e(m).hide(0)
        }

        function l() {
            e(f).find("li, a").unbind(), e(document).unbind("click.menu touchstart.menu")
        }

        function h() {
            function n(n) {
                var i = e(n).find(".menuzord-tabs-nav > li"),
                    d = e(n).find(".menuzord-tabs-content");
                e(i).bind("click touchstart", function(n) {
                    n.stopPropagation(), n.preventDefault(), e(i).removeClass("active"), e(this).addClass("active"), e(d).hide(0), e(d[e(this).index()]).show(0)
                })
            }
            if (e(g).find(".menuzord-tabs").length > 0)
                for (var i = e(g).find(".menuzord-tabs"), d = 0; d < i.length; d++) n(i[d])
        }

        function c() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }

        function u() {
            if (a(), c() <= v && b > v && (l(), p.responsive ? (s(), t()) : o()), c() > v && v >= y && (l(), r(), o()), b = c(), y = c(), h(), /MSIE (\d+\.\d+);/.test(navigator.userAgent) && c() < v) {
                var n = new Number(RegExp.$1);
                8 == n && (e(m).hide(0), e(g).show(0), l(), o())
            }
        }
        var p;
        e.extend(p = {
            showSpeed: 300,
            hideSpeed: 300,
            trigger: "hover",
            showDelay: 0,
            hideDelay: 0,
            effect: "fade",
            align: "left",
            responsive: !0,
            animation: "none",
            indentChildren: !0,
            indicatorFirstLevel: "+",
            indicatorSecondLevel: "+",
            scrollable: !0,
            scrollableMaxHeight: 400
        }, n);
        var m, f = e(this),
            g = e(f).children(".menuzord-menu"),
            w = e(g).find("li"),
            v = 1000,
            b = 2e3,
            y = 200;
        e(g).children("li").children("a").each(function() {
            e(this).siblings(".dropdown, .megamenu").length > 0 && e(this).append("<span class='indicator'>" + p.indicatorFirstLevel + "</span>")
        }), e(g).find(".dropdown").children("li").children("a").each(function() {
            e(this).siblings(".dropdown").length > 0 && e(this).append("<span class='indicator'>" + p.indicatorSecondLevel + "</span>")
        }), "right" == p.align && e(g).addClass("menuzord-right"), p.indentChildren && e(g).addClass("menuzord-indented"), p.responsive && (e(f).addClass("menuzord-responsive").prepend("<a href='javascript:void(0)' class='showhide'><em></em><em></em><em></em></a>"), m = e(f).children(".showhide")), p.scrollable && p.responsive && e(g).css("max-height", p.scrollableMaxHeight).addClass("scrollable").append("<li class='scrollable-fix'></li>"), u(), e(window).resize(function() {
            u(), a()
        })
    }
};