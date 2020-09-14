// _trackPageview
function trackPageview(a) {
  1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) &&
  (
    k.j |= 4,
    h.c.b.sn = h.c.Va(),
    h.c.b.et = 0,
    h.c.b.ep = "",
    h.c.b.vl = r.U() + r.M(),
    h.c.b.kb = 0,
    h.c.Ba ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.Ba = u,
    k.Da || (h.c.b.su = h.c.b.u || document.location.href),
    h.c.b.u = f.protocol + "//" + document.location.host + a[1],
    h.c.b.p = v(t.A("pageview")),
    h.c.i(),
    h.c.b.p = "",
    h.c.X = +new Date,
    t.o("pageview")
  )
}
// _trackPageview:function(a){1<a.length&&(a[1].charAt&&"/"===a[1].charAt(0))&&(k.j|=4,h.c.b.sn=h.c.Va(),h.c.b.et=0,h.c.b.ep="",h.c.b.vl=r.U()+r.M(),h.c.b.kb=0,h.c.Ba?(h.c.b.nv=0,h.c.b.st=4):h.c.Ba=u,k.Da||(h.c.b.su=h.c.b.u||document.location.href),
// h.c.b.u=f.protocol+"//"+document.location.host+a[1],h.c.b.p=v(t.A("pageview")),h.c.i(),h.c.b.p="",h.c.X=+new Date,t.o("pageview"))}
