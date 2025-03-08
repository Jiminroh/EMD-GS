(function (g) {
    var window = this; 'use strict'; var k4a = function (a, b) { var c = (b - a.j) / (a.u - a.j); if (0 >= c) return 0; if (1 <= c) return 1; for (var d = 0, e = 1, f = 0, h = 0; 8 > h; h++) { f = g.yo(a, c); var l = (g.yo(a, c + 1E-6) - f) / 1E-6; if (1E-6 > Math.abs(f - b)) return c; if (1E-6 > Math.abs(l)) break; else f < b ? d = c : e = c, c -= (f - b) / l } for (h = 0; 1E-6 < Math.abs(f - b) && 8 > h; h++)f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.yo(a, c); return c }, l4a = function () {
        return {
            F: "svg",
            T: { height: "100%", version: "1.1", viewBox: "0 0 110 26", width: "100%" }, S: [{ F: "path", Nb: !0, L: "ytp-svg-fill", T: { d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z" } }]
        }
    },
        d6 = function (a) {
            g.K.call(this);
            this.callback = a; this.u = new g.xo(0, 0, .4, 0, .2, 1, 1, 1); this.delay = new g.Xn(this.next, window, this); this.startTime = this.duration = this.j = this.from = NaN; g.M(this, this.delay)
        }, m4a = function (a) {
            g.X.call(this, {
                F: "div",
                L: "ytp-related-on-error-overlay"
            }); var b = this; this.api = a; this.D = this.B = 0; this.C = new g.YD(this); this.u = []; this.suggestionData = []; this.containerWidth = 0; this.title = new g.X({ F: "h2", L: "ytp-related-title", Z: "{{title}}" }); this.previous = new g.X({ F: "button", Ca: ["ytp-button", "ytp-previous"], T: { "aria-label": "Show previous suggested videos" }, S: [g.cL()] }); this.N = new d6(function (f) { e6(b); b.suggestions.element.scrollLeft = -f });
            this.tileWidth = this.j = 0; this.I = !0; this.next = new g.X({ F: "button", Ca: ["ytp-button", "ytp-next"], T: { "aria-label": "Show more suggested videos" }, S: [g.dL()] }); g.M(this, this.C); a = a.R(); this.J = a.u; g.M(this, this.title); this.title.xa(this.element); this.suggestions = new g.X({ F: "div", L: "ytp-suggestions" }); g.M(this, this.suggestions); this.suggestions.xa(this.element); g.M(this, this.previous); this.previous.xa(this.element); this.previous.Na("click", this.kU, this); g.M(this, this.N); for (var c = { Xt: 0 }; 16 > c.Xt; c = { Xt: c.Xt },
                c.Xt++) {
                    var d = new g.X({ F: "a", L: "ytp-suggestion-link", T: { href: "{{link}}", target: a.J, "aria-label": "{{aria_label}}" }, S: [{ F: "div", L: "ytp-suggestion-image", S: [{ F: "div", T: { "data-is-live": "{{is_live}}" }, L: "ytp-suggestion-duration", Z: "{{duration}}" }] }, { F: "div", L: "ytp-suggestion-title", T: { title: "{{hover_title}}" }, Z: "{{title}}" }, { F: "div", L: "ytp-suggestion-author", Z: "{{views_or_author}}" }] }); g.M(this, d); d.xa(this.suggestions.element); var e = d.ya("ytp-suggestion-link"); g.yl(e, "transitionDelay", c.Xt / 20 + "s"); this.C.P(e,
                        "click", function (f) { return function (h) { var l = b.suggestionData[f.Xt], m = l.sessionData; g.AO(h, b.api, b.J, m || void 0) && b.api.Gl(l.videoId, m, l.playlistId) } }(c));
                this.u.push(d)
            } g.M(this, this.next); this.next.xa(this.element); this.next.Na("click", this.jU, this); this.C.P(this.api, "videodatachange", this.onVideoDataChange); this.resize(this.api.Za().getPlayerSize()); this.onVideoDataChange(); this.show()
        }, e6 = function (a) { return a.suggestionData.length * (a.tileWidth + a.B) }, n4a = function (a) {
            a.next.element.style.bottom = a.D + "px";
            a.previous.element.style.bottom = a.D + "px"; var b = a.j, c = a.containerWidth - e6(a); g.N(a.element, "ytp-scroll-min", 0 <= b); g.N(a.element, "ytp-scroll-max", b <= c)
        }, o4a = function (a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b], d = a.u[b], e = c.shortViewCount ? c.shortViewCount : c.author, f = c.Hm(), h = a.api.R();
                if (g.MF(h)) { var l = {}; h.ra && g.bN(l, h.loaderUrl); f = g.wi(f, g.aN(l, "emb_rel_err")) } d.element.style.display = ""; h = d.ya("ytp-suggestion-title"); g.vo.test(c.title) ? h.dir = "rtl" : g.PYa.test(c.title) && (h.dir = "ltr"); h = d.ya("ytp-suggestion-author"); g.vo.test(e) ? h.dir = "rtl" : g.PYa.test(e) && (h.dir = "ltr"); d.update({ views_or_author: e, duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.XL(c.lengthSeconds) : "", link: f, hover_title: c.title, title: c.title, aria_label: c.ariaLabel || null, is_live: c.isLivePlayback }); d = d.ya("ytp-suggestion-image");
                c = c.If(); d.style.backgroundImage = c ? "url(" + c + ")" : ""
            } for (; b < a.u.length; b++)a.u[b].element.style.display = "none"; n4a(a)
        }, f6 = function (a) {
            g.FO.call(this, a);
            var b = this; this.j = null; var c = a.R(), d = { F: "svg", T: { fill: "#fff", height: "100%", viewBox: "0 0 24 24", width: "100%" }, S: [{ F: "path", T: { d: "M0 0h24v24H0V0z", fill: "none" } }, { F: "path", T: { d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" } }] }; g.XF(c) && (d = {
                F: "svg", T: {
                    fill: "none", height: "100%",
                    viewBox: "0 0 25 25", width: "100%"
                }, S: [{ F: "g", T: { "clip-path": "url(#clip0)", fill: "#fff" }, S: [{ F: "path", T: { d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z" } }, { F: "path", T: { d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z" } }] },
                { F: "defs", S: [{ F: "clipPath", T: { id: "clip0" }, S: [{ F: "path", T: { d: "M0 0h24v24H0z", fill: "#fff", transform: "translate(.57 .5)" } }] }] }]
            }); var e = { target: c.J }, f = ["ytp-small-redirect"]; if (c.B && !c.embedsErrorLinks) f.push("no-link"); else { var h = g.vG(c); c.ra && (h = p4a(h, c.loaderUrl)); e.href = h; e["aria-label"] = "Visit YouTube to search for more videos" } c = new g.X({ F: "a", Ca: f, T: e, S: [d] }); c.xa(this.element); g.M(this, c); a.R().B || (this.j = new m4a(a), this.j.xa(this.element), g.M(this, this.j)); this.P(a, "videodatachange", function () { b.show() });
            this.resize(this.api.Za().getPlayerSize())
        }, q4a = function (a, b) {
            a.ya("ytp-error-content").style.paddingTop = "0px";
            var c = a.ya("ytp-error-content"), d = c.clientHeight; a.j.resize(b, b.height - d); c.style.paddingTop = (b.height - a.j.element.clientHeight) / 2 - d / 2 + "px"
        }, s4a = function (a, b) {
            var c = a.api.R(), d;
            b.reason && (r4a(b.reason) ? d = g.AA(b.reason) : d = g.GO(g.zA(b.reason)), a.Sd(d, "content")); var e; b.subreason && (r4a(b.subreason) ? e = g.AA(b.subreason) : e = g.GO(g.zA(b.subreason)), a.Sd(e, "subreason")); if (b.proceedButton && b.proceedButton.buttonRenderer && (a = a.ya("ytp-error-content-wrap-subreason"), d = b.proceedButton.buttonRenderer, b = g.mh("A"), d.text && d.text.simpleText)) {
                e = d.text.simpleText; b.textContent = e; a: { for (var f = g.bh("A", a), h = 0; h < f.length; h++)if (f[h].textContent === e) { e = !0; break a } e = !1 } if (!e && (!c.B || c.embedsErrorLinks)) {
                    var l,
                    m; e = null == d ? void 0 : null == (l = d.navigationEndpoint) ? void 0 : null == (m = l.urlEndpoint) ? void 0 : m.url; var n, p; l = null == d ? void 0 : null == (n = d.navigationEndpoint) ? void 0 : null == (p = n.urlEndpoint) ? void 0 : p.target; e && (c.ra && (e = p4a(e, c.loaderUrl)), b.setAttribute("href", e)); l && b.setAttribute("target", l); c = g.mh("DIV"); c.appendChild(b); a.appendChild(c)
                }
            }
        }, r4a = function (a) {
            if (a.runs) for (var b = 0; b < a.runs.length; b++)if (a.runs[b].navigationEndpoint) return !0;
            return !1
        }, p4a = function (a, b) {
            var c = {};
            g.bN(c, b); return g.wi(a, c)
        }, g6 = function (a, b) {
            g.X.call(this, {
                F: "a",
                Ca: ["ytp-impression-link"], T: { target: "{{target}}", href: "{{url}}", "aria-label": "Watch on YouTube" }, S: [{ F: "div", L: "ytp-impression-link-content", T: { "aria-hidden": "true" }, S: [{ F: "div", L: "ytp-impression-link-text", Z: "Watch on" }, { F: "div", L: "ytp-impression-link-logo", S: [l4a()] }] }]
            }); this.api = a; this.u = b; this.Ja("target", a.R().J); this.api.rb(this.element, this, 96714); this.P(this.api, "presentingplayerstatechange", this.wh); this.P(this.api, "videoplayerreset", this.j); this.P(this.element, "click", this.onClick); this.j()
        },
        t4a = function (a) {
            var b = {};
            a.api.R().ra && g.bN(b, a.api.R().loaderUrl); return g.wi(a.api.getVideoUrl(), g.aN(b, "emb_imp_woyt"))
        }, h6 = function (a) {
            g.X.call(this, {
                F: "div",
                Ca: ["ytp-mobile-a11y-hidden-seek-button"], S: [{ F: "button", Ca: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"], T: { "aria-label": "Rewind 10 seconds", "aria-hidden": "false" } }, { F: "button", Ca: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"], T: { "aria-label": "Fast forward 10 seconds", "aria-hidden": "false" } }]
            }); this.api = a; this.j = this.ya("ytp-mobile-a11y-hidden-seek-button-rewind"); this.forwardButton = this.ya("ytp-mobile-a11y-hidden-seek-button-forward"); this.api.rb(this.j, this, 141902); this.api.rb(this.forwardButton,
                this, 141903); this.P(this.api, "presentingplayerstatechange", this.wh); this.P(this.j, "click", this.u); this.P(this.forwardButton, "click", this.B); this.wh()
        }, i6 = function (a) {
            g.X.call(this, {
                F: "div",
                L: "ytp-muted-autoplay-endscreen-overlay", S: [{ F: "div", L: "ytp-muted-autoplay-end-panel", S: [{ F: "div", L: "ytp-muted-autoplay-end-text", Z: "{{text}}" }] }]
            }); this.api = a; this.B = this.ya("ytp-muted-autoplay-end-panel"); this.j = new g.yO(this.api); g.M(this, this.j); this.j.xa(this.B, 0); this.api.rb(this.element, this, 52428); this.P(this.api, "presentingplayerstatechange", this.u); this.Na("click", this.onClick); this.hide()
        }, j6 = function (a) {
            g.X.call(this, {
                F: "div",
                L: "ytp-muted-autoplay-overlay", S: [{
                    F: "div", L: "ytp-muted-autoplay-bottom-buttons", S: [{
                        F: "button", Ca: ["ytp-muted-autoplay-equalizer", "ytp-button"], S: [{
                            F: "div", Ca: ["ytp-muted-autoplay-equalizer-icon"], S: [{
                                F: "svg", T: { height: "100%", version: "1.1", viewBox: "-4 -4 24 24", width: "100%" }, S: [{
                                    F: "g", T: { fill: "#fff" }, S: [{ F: "rect", L: "ytp-equalizer-bar-left", T: { height: "9", width: "4", x: "1", y: "7" } }, { F: "rect", L: "ytp-equalizer-bar-middle", T: { height: "14", width: "4", x: "6", y: "2" } }, {
                                        F: "rect", L: "ytp-equalizer-bar-right", T: {
                                            height: "12",
                                            width: "4", x: "11", y: "4"
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }); this.api = a; this.bottomButtons = this.ya("ytp-muted-autoplay-bottom-buttons"); this.ya("ytp-muted-autoplay-equalizer"); this.B = new g.Zn(this.u, 4E3, this); a.rb(this.element, this, 39306); this.P(a, "presentingplayerstatechange", this.j); this.P(a, "onMutedAutoplayStarts", this.j); this.Na("click", this.onClick); this.hide()
        }, u4a = function (a, b) {
            g.X.call(this, {
                F: "div",
                L: "ytp-pause-overlay", T: { tabIndex: "-1" }
            }); var c = this; this.api = a; this.I = b; this.j = new g.YD(this); this.C = new g.JL(this, 1E3, !1, 100); this.B = []; this.suggestionData = []; this.containerWidth = 0; this.D = !1; this.W = 0; this.title = new g.X({ F: "h2", L: "ytp-related-title", Z: "{{title}}" }); this.previous = new g.X({ F: "button", Ca: ["ytp-button", "ytp-previous"], T: { "aria-label": "Show previous suggested videos" }, S: [g.cL()] }); this.N = new d6(function (f) { c.suggestions.element.scrollLeft = -f });
            this.V = this.tileWidth = this.u = 0; this.next = new g.X({ F: "button", Ca: ["ytp-button", "ytp-next"], T: { "aria-label": "Show more suggested videos" }, S: [g.dL()] }); this.expandButton = new g.X({ F: "button", Ca: ["ytp-button", "ytp-expand"], Z: "More videos" }); g.M(this, this.j); g.M(this, this.C); b = a.R(); "0" === b.controlsType && g.ho(a.getRootNode(), "ytp-pause-overlay-controls-hidden"); this.J = b.u; g.M(this, this.title); this.title.xa(this.element); this.suggestions = new g.X({ F: "div", L: "ytp-suggestions" }); g.M(this, this.suggestions);
            this.suggestions.xa(this.element); g.M(this, this.previous); this.previous.xa(this.element); this.previous.Na("click", this.mU, this); g.M(this, this.N); for (a = { Yt: 0 }; 16 > a.Yt; a = { Yt: a.Yt }, a.Yt++) {
                var d = new g.X({
                    F: "a", L: "ytp-suggestion-link", T: { href: "{{link}}", target: b.J, "aria-label": "{{aria_label}}" }, S: [{ F: "div", L: "ytp-suggestion-image" }, {
                        F: "div", L: "ytp-suggestion-overlay", T: { style: "{{blink_rendering_hack}}", "aria-hidden": "{{aria_hidden}}" }, S: [{ F: "div", L: "ytp-suggestion-title", Z: "{{title}}" }, {
                            F: "div", L: "ytp-suggestion-author",
                            Z: "{{author_and_views}}"
                        }, { F: "div", T: { "data-is-live": "{{is_live}}" }, L: "ytp-suggestion-duration", Z: "{{duration}}" }]
                    }]
                }); g.M(this, d); d.xa(this.suggestions.element); var e = d.ya("ytp-suggestion-link"); g.yl(e, "transitionDelay", a.Yt / 20 + "s"); this.j.P(e, "click", function (f) { return function (h) { var l = f.Yt; if (1E3 > (0, g.U)() - c.W) g.Gx(h), document.activeElement.blur(); else { l = c.suggestionData[l]; var m = l.sessionData; g.AO(h, c.api, c.J, m || void 0) && c.api.Gl(l.videoId, m, l.playlistId) } } }(a));
                this.B.push(d)
            } g.M(this, this.next); this.next.xa(this.element); this.next.Na("click", this.lU, this); b = new g.X({ F: "button", Ca: ["ytp-button", "ytp-collapse"], T: { "aria-label": "Hide more videos" }, S: [g.bFa()] }); g.M(this, b); b.xa(this.element); b.Na("click", this.k0, this); g.M(this, this.expandButton); this.expandButton.xa(this.element); this.expandButton.Na("click", this.l0, this); this.j.P(this.api, "appresize", this.xb); this.j.P(this.api, "fullscreentoggled", this.Eo); this.j.P(this.api, "presentingplayerstatechange", this.bd);
            this.j.P(this.api, "videodatachange", this.onVideoDataChange); this.xb(this.api.Za().getPlayerSize()); this.onVideoDataChange()
        }, k6 = function (a) {
            var b = a.I.Qf() ? 32 : 16;
            b = a.V / 2 + b; a.next.element.style.bottom = b + "px"; a.previous.element.style.bottom = b + "px"; b = a.u; var c = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8); g.N(a.element, "ytp-scroll-min", 0 <= b); g.N(a.element, "ytp-scroll-max", b <= c)
        }, v4a = function (a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b], d = a.B[b], e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
                d.element.style.display = ""; g.OYa.test(c.title) && (d.ya("ytp-suggestion-title").dir = "rtl"); g.OYa.test(e) && (d.ya("ytp-suggestion-author").dir = "rtl"); var f = c.isLivePlayback ? "Live" : c.lengthSeconds ? g.XL(c.lengthSeconds) : ""; var h = c.Hm(); if (g.MF(a.api.R())) { var l = {}; a.api.R().ra && g.bN(l, a.api.R().loaderUrl); h = g.wi(h, g.aN(l, "emb_rel_pause")) } d.update({
                    author_and_views: e, duration: f, link: h, title: c.title, aria_label: c.ariaLabel || null, is_live: c.isLivePlayback, aria_hidden: !(!c.ariaLabel || a.api.R().K("embeds_rv_aria_hidden_killswitch")),
                    blink_rendering_hack: g.bE || g.KF ? "will-change: opacity" : void 0
                }); d = d.ya("ytp-suggestion-image"); c = c.If(); d.style.backgroundImage = c ? "url(" + c + ")" : ""
            } for (; b < a.B.length; b++)a.B[b].element.style.display = "none"; k6(a)
        }, w4a = function (a) {
            var b = a.R();
            g.X.call(this, { F: "a", Ca: ["ytp-watermark", "yt-uix-sessionlink"], T: { target: b.J, href: "{{url}}", "aria-label": g.HJ("Watch on $WEBSITE", { WEBSITE: g.hG(b) }), "data-sessionlink": "feature=player-watermark" }, S: [l4a()] }); this.api = a; this.j = null; this.u = !1; this.state = a.zb(); a.rb(this.element, this, 76758); this.P(a, "videodatachange", this.pT); this.P(a, "videodatachange", this.onVideoDataChange); this.P(a, "presentingplayerstatechange", this.onStateChange); this.P(a, "appresize", this.xb); this.Qc(this.state); this.onVideoDataChange();
            this.xb(a.Za().getPlayerSize())
        }, x4a = function (a) {
            g.bO.call(this, a);
            this.G = a; this.j = new g.YD(this); g.M(this, this.j); this.load()
        }, l6 = function (a, b) {
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: 0 === a.G.getCurrentTime() ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : 0 === a.G.getPlayerState() ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL", embedUrl: g.Bea(a.G.R().loaderUrl), eventType: b, youtubeHost: g.qi(a.G.R().qa) || ""
            }; g.Mv("embedsAdEvent", a)
        };
    g.u(d6, g.K); d6.prototype.start = function (a, b, c) { this.from = a; this.j = b; this.duration = c; this.startTime = (0, g.U)(); this.next() };
    d6.prototype.next = function () { var a = (0, g.U)() - this.startTime; var b = this.u; a = k4a(b, a / this.duration); if (0 == a) b = b.J; else if (1 == a) b = b.N; else { var c = g.Eg(b.J, b.D, a), d = g.Eg(b.D, b.I, a); b = g.Eg(b.I, b.N, a); c = g.Eg(c, d, a); d = g.Eg(d, b, a); b = g.Eg(c, d, a) } b = g.Cg(b, 0, 1); this.callback((this.j - this.from) * b + this.from); 1 > b && this.delay.start() }; g.u(m4a, g.X); g.k = m4a.prototype; g.k.hide = function () { this.I = !0; g.X.prototype.hide.call(this) };
    g.k.show = function () { this.I = !1; g.X.prototype.show.call(this) };
    g.k.isHidden = function () { return this.I };
    g.k.jU = function () { this.scrollTo(this.j - this.containerWidth) };
    g.k.kU = function () { this.scrollTo(this.j + this.containerWidth) };
    g.k.resize = function (a, b) {
        var c = this.api.R(), d = 16 / 9, e = 650 <= a.width, f = 480 > a.width || 290 > a.height, h = Math.min(this.suggestionData.length, this.u.length); if (150 >= Math.min(a.width, a.height) || 0 === h || !c.Mc) this.hide(); else {
            var l; if (e) { var m = l = 28; this.B = 16 } else this.B = m = l = 8; if (f) { var n = 6; e = 14; var p = 12; f = 24; c = 12 } else n = 8, e = 18, p = 16, f = 36, c = 16; a = a.width - (48 + l + m); l = Math.ceil(a / 150); l = Math.min(3, l); l = a / l - this.B; m = Math.floor(l / d); b && m + 100 > b && 50 < l && (m = Math.max(b, 50 / d), l = Math.ceil(a / (d * (m - 100) + this.B)), l = a / l - this.B,
                m = Math.floor(l / d)); 50 > l || g.xN(this.api) ? this.hide() : this.show(); for (b = 0; b < h; b++) { d = this.u[b]; var q = d.ya("ytp-suggestion-image"); q.style.width = l + "px"; q.style.height = m + "px"; d.ya("ytp-suggestion-title").style.width = l + "px"; d.ya("ytp-suggestion-author").style.width = l + "px"; d = d.ya("ytp-suggestion-duration"); d.style.display = d && 100 > l ? "none" : "" } h = e + n + p + 4; this.D = h + c + (m - f) / 2; this.suggestions.element.style.height = m + h + "px"; this.tileWidth = l; this.containerWidth = a; this.j = 0; e6(this); this.suggestions.element.scrollLeft =
                    -0; n4a(this)
        }
    };
    g.k.onVideoDataChange = function () {
        var a = this.api.getVideoData(), b = this.api.R(); this.J = a.C ? !1 : b.u; a.suggestions ? this.suggestionData = g.wm(a.suggestions, function (c) { return c && !c.playlistId }) : this.suggestionData.length = 0;
        o4a(this); a.C ? this.title.update({ title: g.HJ("More videos from $DNI_RELATED_CHANNEL", { DNI_RELATED_CHANNEL: a.author }) }) : this.title.update({ title: "More videos on YouTube" })
    };
    g.k.scrollTo = function (a) { a = g.Cg(a, this.containerWidth - e6(this), 0); this.N.start(this.j, a, 1E3); this.j = a; n4a(this) }; g.u(f6, g.FO); f6.prototype.show = function () { g.FO.prototype.show.call(this); q4a(this, this.api.Za().getPlayerSize()) };
    f6.prototype.resize = function (a) { g.FO.prototype.resize.call(this, a); this.j && (q4a(this, a), g.N(this.element, "related-on-error-overlay-visible", !this.j.isHidden())) };
    f6.prototype.u = function (a) { g.FO.prototype.u.call(this, a); var b = this.api.getVideoData(); if (b.fK || b.playerErrorMessageRenderer) (a = b.fK) ? s4a(this, a) : b.playerErrorMessageRenderer && s4a(this, b.playerErrorMessageRenderer); else { var c; a.Vk && (b.Vt ? r4a(b.Vt) ? c = g.AA(b.Vt) : c = g.GO(g.zA(b.Vt)) : c = g.GO(a.Vk), this.Sd(c, "subreason")) } }; g.u(g6, g.X); g6.prototype.wh = function () { this.api.zb().isCued() || (this.hide(), this.api.Ta(this.element, !1)) };
    g6.prototype.j = function () { var a = this.api.getVideoData(), b = this.api.R(), c = this.api.getVideoData().C, d = b.Nc, e = !b.Mc, f = this.u.Dg(), h = g.XF(b); b = b.B; d || f || c || e || h || b || !a.videoId ? (this.hide(), this.api.Ta(this.element, !1)) : (a = t4a(this), this.Ja("url", a), this.show()) };
    g6.prototype.onClick = function (a) { var b = t4a(this); g.BO(b, this.api, a); this.api.qb(this.element) };
    g6.prototype.show = function () { this.api.zb().isCued() && (g.X.prototype.show.call(this), this.api.Nm(this.element) && this.api.Ta(this.element, !0)) }; g.u(h6, g.X); h6.prototype.wh = function () { var a = this.api.zb(); !this.api.cg() || g.W(a, 2) && g.uN(this.api) || g.W(a, 64) ? (this.api.Ta(this.j, !1), this.api.Ta(this.forwardButton, !1), this.hide()) : (this.show(), this.api.Ta(this.j, !0), this.api.Ta(this.forwardButton, !0)) };
    h6.prototype.u = function () { this.api.seekBy(-10 * this.api.getPlaybackRate()); this.api.qb(this.j) };
    h6.prototype.B = function () { this.api.seekBy(10 * this.api.getPlaybackRate()); this.api.qb(this.forwardButton) }; g.u(i6, g.X); i6.prototype.u = function () { var a = this.api.zb(), b = this.api.getVideoData(); this.api.R().K("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.W(a, 2) && !this.tb ? (this.show(), this.j.show(), a = this.api.getVideoData(), this.Ja("text", a.cN), g.N(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.Ta(this.element, this.tb), this.api.Ka("onMutedAutoplayEnds")) : this.hide()) };
    i6.prototype.onClick = function () { var a = this.api.getVideoData(), b = this.api.getCurrentTime(); a.mutedAutoplay = !1; a.endSeconds = NaN; g.KH(a); this.api.loadVideoById(a.videoId, b); this.api.qb(this.element); this.hide() }; g.u(j6, g.X); j6.prototype.j = function () { var a = this.api.zb(), b = this.api.getVideoData(); this.api.R().K("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.W(a, 2) ? this.tb || (g.X.prototype.show.call(this), this.B.start(), this.api.Ta(this.element, this.tb)) : this.hide() };
    j6.prototype.u = function () { g.N(this.element, "ytp-muted-autoplay-hide-watermark", !0) };
    j6.prototype.onClick = function () { var a = this.api.getVideoData(), b = this.api.getCurrentTime(); a.mutedAutoplay = !1; a.endSeconds = NaN; g.KH(a); this.api.loadVideoById(a.videoId, b); this.api.qb(this.element) }; g.u(u4a, g.X); g.k = u4a.prototype; g.k.hide = function () { g.jo(this.api.getRootNode(), "ytp-expand-pause-overlay"); g.X.prototype.hide.call(this) };
    g.k.k0 = function () { this.D = !0; g.jo(this.api.getRootNode(), "ytp-expand-pause-overlay"); this.expandButton.focus() };
    g.k.l0 = function () { this.D = !1; g.ho(this.api.getRootNode(), "ytp-expand-pause-overlay"); this.focus() };
    g.k.lU = function () { this.scrollTo(this.u - this.containerWidth) };
    g.k.mU = function () { this.scrollTo(this.u + this.containerWidth) };
    g.k.Eo = function () { this.xb(this.api.Za().getPlayerSize()) };
    g.k.bd = function (a) { if (!(g.W(a.state, 1) || g.W(a.state, 16) || g.W(a.state, 32))) { var b = !this.api.R().K("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch") && g.W(a.state, 1024); !g.W(a.state, 4) || g.W(a.state, 2) || b ? this.C.hide() : this.suggestionData.length && (this.D || (g.ho(this.api.getRootNode(), "ytp-expand-pause-overlay"), k6(this)), this.C.show(), this.W = (0, g.U)()) } };
    g.k.xb = function (a) { var b = 16 / 9, c = this.I.Qf(); a = a.width - (c ? 112 : 58); c = Math.ceil(a / (c ? 320 : 192)); c = (a - 8 * c) / c; b = Math.floor(c / b); for (var d = 0; d < this.B.length; d++) { var e = this.B[d].ya("ytp-suggestion-image"); e.style.width = c + "px"; e.style.height = b + "px" } this.suggestions.element.style.height = b + "px"; this.tileWidth = c; this.V = b; this.containerWidth = a; this.u = 0; this.suggestions.element.scrollLeft = -0; k6(this) };
    g.k.onVideoDataChange = function () {
        var a = this.api.R(), b = this.api.getVideoData(); this.J = b.C ? !1 : a.u; b.suggestions ? this.suggestionData = g.wm(b.suggestions, function (c) { return c && !c.playlistId }) : this.suggestionData.length = 0;
        v4a(this); b.C ? this.title.update({ title: g.HJ("More videos from $DNI_RELATED_CHANNEL", { DNI_RELATED_CHANNEL: b.author }) }) : this.title.update({ title: "More videos" })
    };
    g.k.scrollTo = function (a) { a = g.Cg(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + 8), 0); this.N.start(this.u, a, 1E3); this.u = a; k6(this) }; g.u(w4a, g.X); g.k = w4a.prototype; g.k.pT = function () { var a = this.api.getVideoData(), b = this.api.getVideoData(1).C, c = this.api.R(); a = (a.mutedAutoplay || c.Nc && !g.W(this.state, 2)) && !(b && c.pfpChazalUi); g.YK(this, a); this.api.Ta(this.element, a) };
    g.k.onStateChange = function (a) { this.Qc(a.state) };
    g.k.Qc = function (a) { this.state !== a && (this.state = a); this.pT() };
    g.k.onVideoDataChange = function () { if (this.api.getVideoData().videoId) { var a = this.api.getVideoUrl(!0, !1, !1, !0); this.Ja("url", a); this.j || (this.j = this.Na("click", this.onClick)) } else this.j && (this.Ja("url", null), this.uc(this.j), this.j = null) };
    g.k.onClick = function (a) { var b = this.api.getVideoUrl(!g.YL(a), !1, !0, !0); g.BO(b, this.api, a); this.api.qb(this.element) };
    g.k.xb = function (a) { if ((a = 480 > a.width) && !this.u || !a && this.u) { var b = new g.X(l4a()), c = this.ya("ytp-watermark"); g.N(c, "ytp-watermark-small", a); g.oh(c); b.xa(c); this.u = a } }; g.u(x4a, g.bO); g.k = x4a.prototype; g.k.xj = function () { return !1 };
    g.k.create = function () {
        var a = this.G.R(), b = g.qN(this.G), c, d = null == (c = this.G.getVideoData()) ? void 0 : c.clientPlaybackNonce; d && g.$A("cpn", d); !a.Mc || a.B || b.mz() || (this.B = new u4a(this.G, b), g.M(this, this.B), g.AN(this.G, this.B.element, 4)); a.K("embeds_enable_muted_autoplay") && (this.u = new j6(this.G), g.M(this, this.u), g.AN(this.G, this.u.element, 4), this.I = new i6(this.G), g.M(this, this.I), g.AN(this.G, this.I.element, 4)); if (a.Nc || this.u) this.watermark = new w4a(this.G), g.M(this, this.watermark), g.AN(this.G, this.watermark.element,
            8); this.C = new g6(this.G, b); g.M(this, this.C); g.AN(this.G, this.C.element, 8); a.isMobile && (this.D = new h6(this.G), g.M(this, this.D), g.AN(this.G, this.D.element, 4)); this.j.P(this.G, "appresize", this.xb); this.j.P(this.G, "presentingplayerstatechange", this.wh); this.j.P(this.G, "videodatachange", this.onVideoDataChange); this.j.P(this.G, "onMutedAutoplayStarts", this.onMutedAutoplayStarts); this.j.P(this.G, "onAdStart", this.onAdStart); this.j.P(this.G, "onAdComplete", this.onAdComplete); this.j.P(this.G, "onAdSkip", this.onAdSkip);
        this.j.P(this.G, "onAdStateChange", this.onAdStateChange); this.Sb(this.G.zb()); this.player.rf("embed")
    };
    g.k.xb = function () { var a = this.G.Za().getPlayerSize(); this.vf && this.vf.resize(a) };
    g.k.wh = function (a) { this.Sb(a.state) };
    g.k.Sb = function (a) { g.W(a, 128) ? (this.vf || (this.vf = new f6(this.G), g.M(this, this.vf), g.AN(this.G, this.vf.element, 4)), this.vf.u(a.getData()), this.vf.show(), g.ho(this.G.getRootNode(), "ytp-embed-error")) : this.vf && (this.vf.dispose(), this.vf = null, g.jo(this.G.getRootNode(), "ytp-embed-error")) };
    g.k.onMutedAutoplayStarts = function () { this.G.getVideoData().mutedAutoplay && this.u && this.watermark && this.watermark.xa(this.u.bottomButtons, 0) };
    g.k.onVideoDataChange = function () { var a = this.G.getVideoData(); this.watermark && this.u && !a.mutedAutoplay && g.sh(this.u.element, this.watermark.element) && g.AN(this.G, this.watermark.element, 8); this.G.R().B && this.B && this.B.detach() };
    g.k.onAdStart = function () { l6(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED") };
    g.k.onAdComplete = function () { l6(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED") };
    g.k.onAdSkip = function () { l6(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED") };
    g.k.onAdStateChange = function (a) { 2 === a && l6(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED") }; g.aO("embed", x4a);
})(_yt_player);
