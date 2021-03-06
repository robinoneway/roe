layui.define("jquery", function (i) {
    "use strict";
    var d = layui.$, f = layui.device(), o = "larryElem", c = "layui-this", n = "larryms-this", u = "layui-show",
        a = function () {
            this.config = {}, this.LarryLayID = ""
        };
    var h = ".larryms-nav", y = "larryms-nav-item", p = "larryms-nav-bar", v = "larryms-nav-tree",
        m = "larryms-nav-child", b = "larryms-nav-more", C = "layui-anim lauio-anim-upbit", g = "grandson", k = {
            clickThis: function () {
                var i = d(this), a = i.parents(h), t = a.attr("lay-filter"), l = i.find("a"),
                    e = typeof i.attr("lay-unselect") === "string";
                if (i.find("." + m)[0]) return;
                if (!(l.attr("href") !== "javascript:;" && l.attr("target") === "_blank") && !e) {
                    a.find("." + n).removeClass(n);
                    i.addClass(n)
                }
                layui.event.call(this, o, "nav(" + t + ")", i)
            }, clickChild: function () {
                var i = d(this), a = i.parents(h), t = a.attr("lay-filter");
                if (!i.hasClass("grandson")) {
                    a.find("." + n).removeClass(n);
                    i.addClass(n)
                } else {
                    return
                }
                layui.event.call(this, o, "nav(" + t + ")", i)
            }, clickGrandson: function () {
                var i = d(this), a = i.parents(h), t = a.attr("lay-filter");
                a.find("." + n).removeClass(n);
                i.addClass(n);
                layui.event.call(this, o, "nav(" + t + ")", i)
            }, showChild: function () {
                var i = d(this), a = i.parents(h), t = i.parent(), l = i.siblings("." + m);
                if (a.hasClass(v)) {
                    l.removeClass(C);
                    t[l.css("display") === "none" ? "addClass" : "removeClass"](y + "ed")
                }
            }, showGrandson: function () {
                var i = d(this), a = i.parents(h), t = i.parent(), l = i.siblings("." + m);
                if (a.hasClass(v)) {
                    l.removeClass(C);
                    t[l.css("display") === "none" ? "addClass" : "removeClass"](g + "ed")
                }
            }, showFoldInfo: function () {
                var i = d(this), a = i.parents(h), t = i.parent();
                if (d("#larry_layout").hasClass("larryms-fold")) {
                    if (a.hasClass(v)) {
                        layer.tips(i.children("a").text(), i)
                    }
                }
            }, tabClick: function (i, a, t) {
                var l = t || d(this), a = a || l.parent().children("li").index(l), e = l.parents(".layui-tab").eq(0),
                    n = e.children(".layui-tab-content").children(".layui-tab-item"), s = l.find("a"),
                    r = e.attr("lay-filter");
                if (!(s.attr("href") !== "javascript:;" && s.attr("target") === "_blank")) {
                    l.addClass(c).siblings().removeClass(c);
                    n.eq(a).addClass(u).siblings().removeClass(u)
                }
                layui.event.call(this, o, "tab(" + r + ")", {elem: e, index: a})
            }, tabDelete: function (i, a) {
                var t = a || d(this).parent(), l = t.index(), e = t.parents(".layui-tab").eq(0),
                    n = e.children(".layui-tab-content").children(".layui-tab-item"), s = e.attr("lay-filter"),
                    r = t.attr("lay-id");
                if (t.hasClass(c)) {
                    if (t.next()[0]) {
                        k.tabClick.call(t.next()[0], null, l + 1);
                        r = t.next().attr("lay-id");
                        t.next().click()
                    } else if (t.prev()[0]) {
                        k.tabClick.call(t.prev()[0], null, l - 1);
                        r = t.prev().attr("lay-id");
                        t.prev().click()
                    }
                }
                t.remove();
                n.eq(l).remove();
                layui.event.call(this, o, "tabDelete(" + s + ")", {elem: e, index: l});
                return r
            }, collapse: function () {
                var i = d(this), a = i.find(".layui-colla-icon"), t = i.siblings(".layui-colla-content"),
                    l = i.parents(".layui-collapse").eq(0), e = l.attr("lay-filter"), n = t.css("display") === "none";
                if (typeof l.attr("lay-accordion") === "string") {
                    var s = l.children(".layui-colla-item").children("." + u);
                    s.siblings(".layui-colla-title").children(".layui-colla-icon").html("&#xe602;");
                    s.removeClass(u)
                }
                t[n ? "addClass" : "removeClass"](u);
                a.html(n ? "&#xe61a;" : "&#xe602;");
                layui.event.call(this, o, "collapse(" + e + ")", {title: i, content: t, show: n})
            }
        };
    a.prototype.init = function (i, a) {
        var t = this, e = function () {
            return a ? '[lay-filter="' + a + '"]' : ""
        }(), l = {
            nav: function () {
                var n = 200, s = {}, r = {}, o = {}, c = function (i, a, t) {
                    var l = d(this), e = l.find("." + m);
                    if (a.hasClass(v)) {
                        i.css({top: l.position().top, height: l.children("a").height(), opacity: 1})
                    } else {
                        e.addClass(C);
                        i.css({
                            left: l.position().left + parseFloat(l.css("marginLeft")),
                            top: l.position().top + l.height() - i.height()
                        });
                        s[t] = setTimeout(function () {
                            i.css({width: l.width(), opacity: 1})
                        }, f.ie && f.ie < 10 ? 0 : n);
                        clearTimeout(o[t]);
                        if (e.css("display") === "block") {
                            clearTimeout(r[t])
                        }
                        r[t] = setTimeout(function () {
                            e.addClass(u);
                            l.find("." + b).addClass(b + "d")
                        }, 300)
                    }
                };
                d(h).each(function (i) {
                    var a = d(this), t = d('<span class="' + p + '"></span>'), l = a.find("." + y), e = a.find("." + g);
                    if (!a.find("." + p)[0]) {
                        a.append(t);
                        l.on("mouseenter", function () {
                            c.call(this, t, a, i)
                        }).on("mouseleave", function () {
                            if (!a.hasClass(v)) {
                                clearTimeout(r[i]);
                                r[i] = setTimeout(function () {
                                    a.find("." + m).removeClass(u);
                                    a.find("." + b).removeClass(b + "d")
                                }, 300)
                            }
                        });
                        a.on("mouseleave", function () {
                            clearTimeout(s[i]);
                            o[i] = setTimeout(function () {
                                if (a.hasClass(v)) {
                                    t.css({height: 0, top: t.position().top + t.height() / 2, opacity: 0})
                                } else {
                                    t.css({width: 0, left: t.position().left + t.width() / 2, opacity: 0})
                                }
                            }, n)
                        })
                    }
                    l.each(function () {
                        var i = d(this), a = i.find("." + m);
                        if (a.find("." + g).length > 0) {
                            e.each(function () {
                                var i = d(this), a = i.find("." + m);
                                if (a[0] && !i.find("." + b)[0]) {
                                    var t = i.children("a");
                                    t.append('<span class="' + b + '"></span>')
                                }
                                i.children("a").off("click", k.showGrandson).on("click", k.showGrandson);
                                a.children("dd").off("click", k.clickGrandson).on("click", k.clickGrandson)
                            })
                        }
                        if (a[0] && !i.find("." + b)[0]) {
                            var t = i.children("a");
                            t.append('<span class="' + b + '"></span>')
                        }
                        i.off("click", k.clickThis).on("click", k.clickThis);
                        i.children("a").off("click", k.showChild).on("click", k.showChild);
                        a.children("dd").off("click", k.clickChild).on("click", k.clickChild);
                        i.off("mouseenter", k.showFoldInfo).on("mouseenter", k.showFoldInfo);
                        a.children("dd").off("mouseenter", k.showFoldInfo).on("mouseenter", k.showFoldInfo)
                    })
                })
            }, breadcrumb: function () {
                var i = ".layui-breadcrumb";
                d(i + e).each(function () {
                    var i = d(this), a = "lay-separator", t = i.attr(a) || "/", l = i.find("a");
                    if (l.next("span[" + a + "]")[0]) return;
                    l.each(function (i) {
                        if (i === l.length - 1) return;
                        d(this).after("<span " + a + ">" + t + "</span>")
                    });
                    i.css("visibility", "visible")
                })
            }, progress: function () {
                var l = "layui-progress";
                d("." + l + e).each(function () {
                    var i = d(this), a = i.find(".layui-progress-bar"), t = a.attr("lay-percent");
                    a.css("width", function () {
                        return /^.+\/.+$/.test(t) ? new Function("return " + t)() * 100 + "%" : t
                    }());
                    if (i.attr("lay-showPercent")) {
                        setTimeout(function () {
                            a.html('<span class="' + l + '-text">' + t + "</span>")
                        }, 350)
                    }
                })
            }, collapse: function () {
                var i = "layui-collapse";
                d("." + i + e).each(function () {
                    var i = d(this).find(".layui-colla-item");
                    i.each(function () {
                        var i = d(this), a = i.find(".layui-colla-title"), t = i.find(".layui-colla-content"),
                            l = t.css("display") === "none";
                        a.find(".layui-colla-icon").remove();
                        a.append('<i class="layui-icon layui-colla-icon">' + (l ? "&#xe602;" : "&#xe61a;") + "</i>");
                        a.off("click", k.collapse).on("click", k.collapse)
                    })
                })
            }
        };
        return l[i] ? l[i]() : layui.each(l, function (i, a) {
            a()
        })
    };
    a.prototype.set = function (i) {
        var a = this;
        d.extend(true, a.config, i);
        return a
    };
    a.prototype.on = function (i, a) {
        return layui.onevent.call(this, o, i, a)
    };
    a.prototype.progress = function (i, a) {
        var t = "layui-progress", l = d("." + t + "[lay-filter=" + i + "]"), e = l.find("." + t + "-bar"),
            n = e.find("." + t + "-text");
        e.css("width", a);
        n.text(a);
        return this
    };
    a.prototype.tabAdd = function (i, a) {
        var t = d(".layui-tab[lay-filter=" + i + "]"), l = ".layui-tab-title",
            e = t.children("#larryms_title").children(l), n = e.children(".layui-tab-bar"),
            s = t.children(".layui-tab-content"),
            r = '<li lay-id="' + (a.id || "") + '" data-group="' + a.group + '" data-flag="' + a.flag + '" data-id="' + a.larryID + '" data-url="' + a.url + '">' + (a.title || "unnaming") + "</li>";
        n[0] ? n.before(r) : e.append(r);
        s.append('<div class="layui-tab-item">' + (a.content || "") + "</div>");
        return this
    };
    a.prototype.tabChange = function (i, a, t) {
        if (t !== "page") {
            var l = d(".layui-tab[lay-filter=" + i + "]")
        } else {
            var l = d(".layui-tab[lay-filter=" + i + "]", window.parent.document)
        }
        var e = ".layui-tab-title", n = l.children("#larryms_title").children(e), s = n.find('>li[lay-id="' + a + '"]');
        k.tabClick(null, null, s);
        return this
    };
    a.prototype.tabDelete = function (i, a) {
        var t = ".layui-tab-title", l = d(".layui-tab[lay-filter=" + i + "]"),
            e = l.children("#larryms_title").children(t), n = e.find('>li[lay-id="' + a + '"]');
        this.LarryLayID = k.tabDelete(null, n);
        return this
    };
    a.prototype.render = a.prototype.init;
    var t = new a, l = d(document);
    t.render();
    var e = ".layui-tab-title li";
    l.on("click", e, k.tabClick);
    i(o, t)
});