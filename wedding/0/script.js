let youtubeload;
let musikid;
(() => {
    if (!document.querySelector(".canvas").classList.contains(".rounded-0")) {
        document.querySelector(".canvas").classList.add(".rounded-0");
    }
    var e,
        n,
        t,
        o,
        l,
        a,
        i,
        s,
        r = document.getElementById("satuMomen"),
        c = document.documentElement.lang,
        d = document.getElementById("loader");
    d && (window.onload = d.style.display = "none");
    let namatamu;
    if (location.href.split("#")[3] && location.href.split("#")[3] != "") {
        if (location.href.split("#")[3].includes("_")) {
            namatamu = decodeURI(
                location.href.split("#")[3].split("_").join("%20")
            );
        } else {
            namatamu = decodeURI(location.href.split("#")[3]);
        }
    }
    var u = namatamu ? namatamu : "Nama Tamu",
        m = document.getElementById("guestNameSlot");
    u && m && (m.innerHTML = u);
    var y = r.dataset.group,
        p = document.getElementById("groupNameSlot");
    y && p && (p.innerHTML = y);
    var v = document.getElementById("btnMusic"),
        g = document.getElementById("music")
            ? document.getElementById("music")
            : null,
        f = document.querySelector(".sc-music > iframe"),
        w = f ? SC.Widget(f) : null,
        h = !1;
    (playMusic = function (e) {
        e
            ? g && (g.play(), (h = !0))
            : g && (h ? g.pause() : g.play(), (h = !h)),
            w &&
                SC.Widget.Events.READY &&
                (h ? (w.pause(), (h = !1)) : (w.play(), (h = !0))),
            v &&
                (h
                    ? v.classList.add("playing")
                    : v.classList.remove("playing"));
    }),
        g &&
            ((g.onplaying = function () {
                h = !0;
            }),
            (g.onpause = function () {
                h = !1;
            })),
        (showGift = function (e) {
            for (var n = 0; n < E.length; n++)
                n != e && (b[n].style.display = "none");
            (b[e].style.display = "inherit"), ve();
        });
    for (
        var b = document.getElementsByClassName("gift-container"), L = 0;
        L < b.length;
        L++
    )
        b[L].style.display = "none";
    for (
        var E = document.getElementsByClassName("btn-gift"),
            x = function (e) {
                E[e].onclick = function () {
                    showGift(e);
                };
            },
            B = 0;
        B < E.length;
        B++
    )
        x(B);
    var M = document.getElementById("lightboxWrapper"),
        T = document.getElementById("lightboxCloseBtn"),
        I = document.getElementById("lightboxNextBtn"),
        H = document.getElementById("lightboxPrevBtn"),
        S = document.querySelector("#lightboxWrapper > .lightbox-list"),
        q = document.getElementsByClassName("lightbox");
    (showLightbox = function (e) {
        M.classList.add("show"),
            (S.innerHTML = '<div class="lightbox-inner"><img src="'.concat(
                q[e].src,
                '"></div>'
            )),
            (I.dataset.index = e),
            (H.dataset.index = e),
            ve(),
            window.removeEventListener(se[K].down, ue, !1);
    }),
        (I.onclick = function () {
            var e = parseInt(I.dataset.index) + 1;
            e >= q.length && (e = 0), showLightbox(e);
        }),
        (H.onclick = function () {
            var e = parseInt(H.dataset.index) - 1;
            -1 == e && (e = q.length - 1), showLightbox(e);
        }),
        (closeLightbox = function () {
            M.classList.remove("show"),
                (S.innerHTML = ""),
                window.addEventListener(se[K].down, ue, !1);
        });
    for (
        var k = function (e) {
                q[e].onclick = function () {
                    showLightbox(e);
                };
            },
            C = 0;
        C < q.length;
        C++
    )
        k(C);
    T.onclick = function () {
        closeLightbox();
    };
    var _ = document.getElementsByTagName("BODY")[0],
        N = document.getElementById("modalOverlay");
    (showModal = function (e) {
        _.classList.add("modal-open"),
            N.classList.add("show"),
            (N.style = "display: block;"),
            e.classList.add("show"),
            (e.style = "display: block;"),
            ve(),
            window.removeEventListener(se[K].down, ue, !1);
    }),
        (closeModal = function (e) {
            _.classList.remove("modal-open"),
                N.classList.remove("show"),
                (N.style = "display: none;"),
                e.classList.remove("show"),
                (e.style = "display: none;"),
                window.addEventListener(se[K].down, ue, !1);
        });
    var A = document.getElementsByClassName("countdown-wrapper");
    displayCountdown = function (e) {
        var n = new Date(e.dataset.datetime).getTime(),
            t = e.querySelector(".countdown > .day > .number"),
            o = e.querySelector(".countdown > .hour > .number"),
            l = e.querySelector(".countdown > .minute > .number"),
            a = e.querySelector(".countdown > .second > .number"),
            i = setInterval(function () {
                var e = new Date().getTime(),
                    s = n - e,
                    r = Math.floor(s / 864e5),
                    c = Math.floor((s % 864e5) / 36e5),
                    d = Math.floor((s % 36e5) / 6e4),
                    u = Math.floor((s % 6e4) / 1e3);
                (t.innerHTML = r),
                    (o.innerHTML = c),
                    (l.innerHTML = d),
                    (a.innerHTML = u),
                    s < 0 &&
                        (clearInterval(i),
                        (t.innerHTML = "00"),
                        (o.innerHTML = "00"),
                        (l.innerHTML = "00"),
                        (a.innerHTML = "00"));
            }, 1e3);
    };
    // for (var W = 0; W < A.length; W++) displayCountdown(A[W]);
    for (
        var D = document.getElementsByClassName("btn-rsvp"),
            F =
                null !== (e = document.querySelector(".rsvp-placeholder")) &&
                void 0 !== e
                    ? e
                    : null,
            O =
                null !== (n = document.querySelector(".rsvp-form")) &&
                void 0 !== n
                    ? n
                    : null,
            R = 0;
        R < D.length;
        R++
    )
        F
            ? (D[R].style.display = "none")
            : (D[R].onclick = function () {
                  showModal(rsvpModal);
              });
    O && F && ((F.innerHTML = ""), F.appendChild(O));
    var Y =
            null !== (t = document.getElementById("app")) && void 0 !== t
                ? t
                : null,
        P =
            null !== (o = document.getElementById("illegal")) && void 0 !== o
                ? o
                : null,
        U =
            null !== (l = document.getElementById("waterMark")) && void 0 !== l
                ? l
                : null,
        j =
            null !== (a = document.querySelector(".watermark-placeholder")) &&
            void 0 !== a
                ? a
                : null,
        G =
            null !== (i = document.querySelector(".no-watermark")) &&
            void 0 !== i
                ? i
                : null,
        z =
            null !== (s = document.querySelector(".watermark")) && void 0 !== s
                ? s
                : null;
    setTimeout(function () {
        U && j && null == G
            ? ((U.style.display = "inherit"),
              (j.innerHTML = ""),
              j.appendChild(U),
              (P.style.display = "none"))
            : z && null == j
            ? ((Y.innerHTML = ""), (P.style.display = "flex"))
            : (U && (U.style.display = "none"), (P.style.display = "none"));
    }, 300);
    for (
        var X = document.getElementsByClassName("account-number"), Z = 0;
        Z < X.length;
        Z++
    )
        X[Z].innerHTML &&
            ("id" == c
                ? X[Z].insertAdjacentHTML(
                      "afterend",
                      "<button type='button' class='btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(
                          X[Z].innerText,
                          "' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px'>Salin Rekening</button>"
                      )
                  )
                : X[Z].insertAdjacentHTML(
                      "afterend",
                      "<button type='button' class='btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(
                          X[Z].innerText,
                          "' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px'>Copy to Clipboard</button>"
                      )
                  ));
    copyText = function (e) {
        var n = document.createElement("input");
        (n.autofocus = !1),
            (n.value = e.target.dataset.text),
            document.body.appendChild(n),
            n.select(),
            document.execCommand("copy"),
            n.remove(),
            (e.target.innerHTML =
                "id" == c ? "Berhasil Disalin" : "Copied to Clipboard");
    };
    var J = function () {
        var e = document.getElementById("workspace-container"),
            n = document.querySelector(".canvas"),
            t = document.getElementById("panZoom"),
            o = Number(window.screen.width > 430 ? 414 : window.screen.width),
            l =
                (Number(window.innerHeight > 932 ? 736 : window.innerHeight) /
                    o) *
                9,
            a = Number(window.innerHeight) / 736,
            i = Number(window.screen.width) / 414,
            s = a < i ? a : i,
            c = 46 * (l < 16 || window.screen.width > 430 ? 16 : l);
        (n.style.height = "".concat(c, "px")),
            (r.style.height = "".concat(c, "px")),
            (t.style.transform = "scale(".concat(s, ") translate(0px,0px)"));
    };
    J(), window.addEventListener("resize", J, !1);
    var K = "",
        Q = function () {
            try {
                return document.createEvent("TouchEvent"), (K = "touch"), !0;
            } catch (e) {
                return (K = "mouse"), !1;
            }
        };
    Q();
    var V = document.querySelectorAll(".satumomen_slide"),
        $ = document.querySelectorAll(".satumomen_menu_item"),
        ee = document.getElementById("smMenu"),
        ne = document.querySelector(".satumomen_menu_list"),
        te = $.length < 5 ? ee.offsetWidth / $.length : ee.offsetWidth / 5,
        oe = 0,
        le = function () {
            Array.from(V).forEach(function (e) {
                e.style.display = "none";
            }),
                Array.from($).forEach(function (e) {
                    (e.style.maxWidth = "".concat(te, "px")),
                        e.classList.remove("active"),
                        (e.onclick = function (n) {
                            n.cancelable && n.preventDefault(),
                                (oe = Array.from($).indexOf(e)),
                                ie(oe);
                        });
                }),
                (V[oe].style.display = ""),
                $[oe].classList.add("active");
        };
    le();
    var ae = function () {
            le(), (oe = oe < V.length - 1 ? oe + 1 : 0), ie(oe, !1), de();
        },
        ie = function (e) {
            var n =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
            le(), n && ve();
            var t = ne.offsetWidth - ne.scrollWidth;
            (V[e].style.display = ""), $[e].classList.add("active");
            var o = ee.offsetWidth / 2 - te / 2 - $[e].offsetLeft;
            (ne.style.transform = "translateX(".concat(
                o > 0 ? 0 : o < t ? t : o,
                "px)"
            )),
                (oe = e);
        },
        se = {
            mouse: { down: "mousedown", move: "mousemove", up: "mouseup" },
            touch: { down: "touchstart", move: "touchmove", up: "touchend" }
        },
        re = 0,
        ce = function (e) {
            var n = Q() ? e.touches[0].clientY : e.clientY;
            re - 50 > n && (ve(), ae()),
                re < n - 50 &&
                    (le(), ie((oe = oe > 0 ? oe - 1 : oe)), de(), ve());
        },
        de = function (e) {
            window.removeEventListener(se[K].move, ce, !1);
        },
        ue = function (e) {
            e.cancelable && e.preventDefault(),
                (re = Q() ? e.touches[0].clientY : e.clientY),
                window.addEventListener(se[K].up, de, !1),
                window.addEventListener(se[K].move, ce, !1);
        },
        me = document.getElementById("btnAutoplay"),
        ye = !1,
        pe = function () {
            (ye = !0),
                (autoPlay = setInterval(function () {
                    ae();
                }, 8e3)),
                me.classList.add("playing");
        },
        ve = function () {
            ye &&
                ((ye = !1),
                clearInterval(autoPlay),
                me.classList.remove("playing"));
        };
    me.addEventListener(
        "click",
        function (e) {
            e.cancelable && e.preventDefault(),
                ye ? ve() : ye || ge ? pe() : fe();
        },
        !1
    ),
        (openFullScreen = function () {
            document.documentElement.requestFullscreen
                ? document.documentElement.requestFullscreen()
                : document.documentElement.webkitRequestFullscreen
                ? document.documentElement.webkitRequestFullscreen()
                : document.documentElement.msRequestFullscreen &&
                  document.documentElement.msRequestFullscreen();
        });
    for (
        var ge = !1,
            fe = function (e) {
                (ge = !0),
                    -1 != navigator.userAgent.indexOf("UCBrowser") ||
                    -1 != navigator.userAgent.indexOf("MiuiBrowser") ||
                    navigator.userAgent.includes("OppoBrowser") ||
                    navigator.userAgent.includes("HeyTapBrowser")
                        ? console.log(
                              "Browser not support portrait full screen mode"
                          )
                        : openFullScreen(),
                    // playMusic(!0),
                    pe(),
                    document
                        .querySelector(".not-open")
                        .classList.remove("not-open"),
                    window.addEventListener(se[K].down, ue, !1),
                    ae(),
                    (e.target.style.display = "none");
                document.getElementById("btnMusic").click();
                document.getElementById("btnAutoplay").style.transform = "none";
            },
            we = document.getElementsByClassName("btn-open-invitation"),
            he = 0;
        he < we.length;
        he++
    )
        we[he].addEventListener("click", fe, !1);

    let buka;
    document.addEventListener("fullscreenchange", function (e) {
        if (
            document.fullscreenElement &&
            document.getElementById("fullscreenbtn").style.transform == "none"
        ) {
            document.getElementById("fullscreenbtn").style.transform =
                "scale(0)";
        } else if (buka) {
            document.getElementById("fullscreenbtn").style.transform = "none";
        } else {
            buka = true;
        }
    });

    document.getElementById("fullscreenbtn").onclick = () => {
        -1 != navigator.userAgent.indexOf("UCBrowser") ||
        -1 != navigator.userAgent.indexOf("MiuiBrowser") ||
        -1 != navigator.userAgent.indexOf("OppoBrowser")
            ? console.log("Browser not support portrait full screen mode")
            : openFullScreen();
    };

    function formatDate(date = new Date()) {
        const year = date.toLocaleString("default", { year: "numeric" });
        const month = date.toLocaleString("default", {
            month: "2-digit"
        });
        const day = date.toLocaleString("default", { day: "2-digit" });

        return [year, month, day].join("");
    }

    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jum'at",
        "Sabtu"
    ];
    months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const dataprev = {
        mempelai: "Dandi;Dinda",
        mempelai1:
            "Dandi Setiawan;Putra;Pertama;Rudi Kurniawan;Lilis Sukarningsih",
        mempelai2: "Dinda Fitriani;Putri;Kedua;Indra Wijaya;Dewi Puspita",
        resepsi:
            " 09:30;Selesai;WIB;Royal Hotel Bogor;Jl. Ir. H. Juanda No.16, Paledang, Kota Bogor",
        akad: " 08:00;Selesai;WIB;Masjid Jami Miftahul Hidayah;Jl. Pajajaran Indah V, Baranangsiang, Kota Bogor",
        lokasi: "Royal%20Hotel%20Bogor,%20Jalan%20Ir.%20Haji%20Juanda,%20Paledang,%20Kota%20Bogor,%20Jawa%20Barat,%20Indonesia",
        foto: source.fotodefault,
        hadiah: "bank;BRI;123456789;Dandi Setiawan$ewallet;Gopay;08123456789;Dinda Fitriani%Jl. Pajajaran Indah v No. 55, Baranangsiang, Kota Bogor;Dinda Fitriani"
    };

    const dnow = new Date();
    dataprev.resepsi =
        dnow.getMonth() +
        1 +
        "/" +
        (dnow.getDate() + 1) +
        "/" +
        dnow.getFullYear() +
        dataprev.resepsi;
    dataprev.akad =
        dnow.getMonth() +
        1 +
        "/" +
        (dnow.getDate() + 1) +
        "/" +
        dnow.getFullYear() +
        dataprev.akad;

    const datacoba = {
        lokasi: "Indonesia",
        foto: source.noimg
    };

    datacoba.resepsi =
        dnow.getMonth() +
        1 +
        "/" +
        (dnow.getDate() + 1) +
        "/" +
        dnow.getFullYear() +
        " 09:30;Selesai;WIB;*Tempat Acara;*Alamat Lokasi Acara";
    datacoba.akad =
        dnow.getMonth() +
        1 +
        "/" +
        (dnow.getDate() + 1) +
        "/" +
        dnow.getFullYear() +
        " 08:00;Selesai;WIB/WITA/WIT;*Tempat Acara;*Alamat Lokasi Acara";

    function tampildata(data, coba) {
        inisialmempelai(data.mempelai);
        foto(data.foto);
        tanggal(data.resepsi, "Resepsi");
        tanggal(data.akad, "Akad");

        if (
            !data.musik ||
            !data.musik.split(";")[1] ||
            data.musik.split(";")[1] == ""
        ) {
            source.idmusic.sort(() => Math.random() - 0.5);
            musikid = source.idmusic[0];
            // document.getElementById("youtube-audio").dataset.video = idmusic[0];
        } else {
            //  document.getElementById("youtube-audio").dataset.video =
            musikid = data.musik.split(";")[1];
        }

        youtubeAudio();

        const a = formatDate(new Date(data.resepsi.split(";")[0]));
        let b =
            parseInt(data.resepsi.split(";")[0].split(" ")[1].split(":")[0]) -
            1;
        if (b < 10) {
            b = "0" + b;
        }
        let c = parseInt(
            data.resepsi.split(";")[0].split(" ")[1].split(":")[0]
        );
        if (c < 10) {
            c = "0" + c;
        }
        const d = encodeURI(
            data.resepsi.split(";")[3] + " | " + data.resepsi.split(";")[4]
        );

        document.querySelector(".savedate").href =
            "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
            data.mempelai.split(";").join("%20%26%20") +
            "%20Wedding&details=" +
            d +
            "&dates=" +
            a +
            "T" +
            b +
            data.resepsi.split(";")[0].split(" ")[1].split(":")[1] +
            "00/" +
            a +
            "T" +
            c +
            data.resepsi.split(";")[0].split(" ")[1].split(":")[1] +
            "00&location=" +
            "https://www.google.com/maps/search/?api=1%26map_action=map%26query=" +
            encodeURI(data.lokasi);

        document.getElementById("keLokasi").href =
            "https://www.google.com/maps/search/?api=1&map_action=map&query=" +
            data.lokasi;
        let mempelaix;
        document.querySelectorAll(".nama-lengkap").forEach((e, i) => {
            if (i % 2 == 0) {
                mempelaix = data.mempelai1;
            } else {
                mempelaix = data.mempelai2;
            }
            e.textContent = mempelaix.split(";")[0];
            let nya = "";
            if (coba) {
                nya = "nya";
            }
            if (
                i < document.querySelectorAll(".orangtua").length &&
                document.querySelectorAll(".orangtua").length > 0
            ) {
                document.querySelectorAll(".orangtua")[i].textContent =
                    "Bapak" +
                    nya +
                    " " +
                    mempelaix.split(";")[3] +
                    " & Ibu" +
                    nya +
                    " " +
                    mempelaix.split(";")[4];
            }
            if (
                i < document.querySelectorAll(".anak-ke").length &&
                document.querySelectorAll(".anak-ke").length > 0
            ) {
                document.querySelectorAll(".anak-ke")[i].textContent =
                    mempelaix.split(";")[1] +
                    " " +
                    mempelaix.split(";")[2] +
                    " dari";
            }
        });

        if (
            (!data.hadiah.split("%")[0].split("$")[0].split(";")[0] ||
                data.hadiah.split("%")[0].split("$")[0].split(";")[0] == "") &&
            (!data.hadiah.split("%")[1].split(";")[0] ||
                data.hadiah.split("%").split(";")[0] == "")
        ) {
            document.querySelectorAll(".hadiah").forEach((e, i) => {
                e.remove();
            });
            V = document.querySelectorAll(".satumomen_slide");
            $ = document.querySelectorAll(".satumomen_menu_item");
        } else {
            if (
                data.hadiah.split("%")[1].split(";")[0] &&
                data.hadiah.split("%")[1].split(";")[0] != ""
            ) {
                document.querySelector(".alamatKado").textContent = data.hadiah
                    .split("%")[1]
                    .split(";")[0];
                document.querySelector(".penerimakado").textContent =
                    "(" + data.hadiah.split("%")[1].split(";")[1] + ")";
            } else {
                document.querySelectorAll(".btn-gift")[1].style.display =
                    "none";
            }

            const data8a = data.hadiah.split("%")[0].split("$");
            data8a.forEach((e, i) => {
                if (e.split(";")[0] && e.split(";")[0] != "") {
                    document
                        .querySelectorAll(".btn-gift")[0]
                        .classList.remove("d-none");
                    const data8aa = e.split(";");
                    document.querySelectorAll(".bankwallet")[i].src =
                        "../../img/" + data8aa[0] + ".png";
                    document.querySelectorAll(".nomorrekening")[i].textContent =
                        data8aa[2];
                    document.querySelectorAll(".namarekening")[i].textContent =
                        data8aa[1] + " : " + data8aa[3];
                    if (i == 1 && data8aa[0] != "") {
                        document
                            .querySelectorAll(
                                ".gift-container > div > div > div"
                            )[1]
                            .classList.replace("d-none", "d-flex");
                        document
                            .querySelectorAll(".bankwallet")[1]
                            .classList.remove("d-none");
                    }
                }
            });
        }

        document.querySelector(".maps-iframe").src =
            "https://www.google.com/maps/embed/v1/search?q=" +
            `${data.lokasi == "" ? "indonesia" : data.lokasi}` +
            "&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";
    }

    function Fetch(obj, type) {
        return fetch(source.urldb, {
            method: "POST",
            body: JSON.stringify(obj)
        })
            .then(respon => {
                if (!respon.ok) {
                    throw new Error(respon.statusText.toLowerCase());
                }
                if (type == undefined) {
                    return respon.json();
                } else {
                    return respon.text();
                }
            })
            .then(respon => {
                return respon;
            });
    }

    const username = location.href.split("#")[2];
    let data;
    let jmlLoad = 0;

    function setdata() {
        let resepsi = data[6].split(" ");
        let resepsi0 = resepsi[0].split("/");
        resepsi =
            resepsi0[1] +
            "/" +
            resepsi0[0] +
            "/" +
            resepsi0[2] +
            " " +
            resepsi[1];

        let akad = data[7].split(" ");
        let akad0 = akad[0].split("/");
        akad = akad0[1] + "/" + akad0[0] + "/" + akad0[2] + " " + akad[1];
        data = {
            desain: data[1],
            link: data[2],
            mempelai: data[3],
            mempelai1: data[4],
            mempelai2: data[5],
            resepsi: resepsi,
            akad: akad,
            lokasi: data[8],
            foto: data[9],
            hadiah: data[10],
            musik: data[11],
            ulasan: data[12]
        };
        tampildata(data);
    }

    async function load1() {
        try {
            data = await Fetch({
                SHEETID: source.sheetid,
                FN: "LOAD1",
                DATA: {
                    index: parseInt(location.href.split("#")[1]),
                    B: document.body.dataset.desain,
                    C: username
                }
            });

            if (
                data[1] !== document.body.dataset.desain ||
                data[2] !== username
            ) {
                document.body.innerHTML = `<h2>Undangan ${
                    location.href.split("#")[2]
                } tidak terdaftar !</h2>`;
                return;
            }

            setdata();
        } catch (err) {
            if (jmlLoad < 4) {
                setTimeout(() => {
                    load1();
                }, 10000);
            } else {
                if (confirm("Masalah koneksi!\nMuat ulang sekarang ?")) {
                    location.reload();
                } else {
                    document.body.innerHTML = `<h1 class="text-center" style="margin-top:30vh">Masalah Koneksi !</h1><p class="text-center"><button class="btn btn-primary" onclick="location.reload()">Muat Ulang!</button></p>`;
                }
            }
            jmlLoad += 1;
        }
    }

    if (
        location.href.split("#")[1] &&
        location.href.split("#")[1] != "" &&
        location.href.split("#")[2] &&
        location.href.split("#")[2] != ""
    ) {
        load1();
    } else if (
        location.href.split("?")[1] &&
        location.href.split("?")[1] != ""
    ) {
        datacoba.mempelai = decodeURI(
            location.href.split("?")[1].split("&").join(";")
        );
        datacoba.mempelai1 =
            "Nama Lengkap " +
            datacoba.mempelai.split(";")[0] +
            ";Putra/i;Ke-sekian;" +
            datacoba.mempelai.split(";")[0] +
            ";" +
            datacoba.mempelai.split(";")[0];
        datacoba.mempelai2 =
            "Nama Lengkap " +
            datacoba.mempelai.split(";")[1] +
            ";Putra/i;Ke-sekian;" +
            datacoba.mempelai.split(";")[1] +
            ";" +
            datacoba.mempelai.split(";")[1];

        for (let i = 0; i < 7; i++) {
            datacoba.foto += ";" + source.noimg;
        }
        datacoba.hadiah = `bank;BRI;123456789;${
            datacoba.mempelai.split(";")[0]
        }$ewallet;Gopay;08123456789;${
            datacoba.mempelai.split(";")[1]
        }%*Alamat rumah ${datacoba.mempelai.split(";")[1]};${
            datacoba.mempelai.split(";")[1]
        }`;
        tampildata(datacoba, true);
    } else {
        tampildata(dataprev);
    }

    function inisialmempelai(data4) {
        document.querySelectorAll(".mempelai").forEach((e, i) => {
            if (i % 2 == 0) {
                e.textContent = data4.split(";")[0];
            } else {
                e.textContent = data4.split(";")[1];
            }
        });

        document.querySelectorAll(".inisial").forEach((e, i) => {
            if (i % 2 == 0) {
                e.textContent = data4.split(";")[0][0];
            } else {
                e.textContent = data4.split(";")[1][0];
            }
        });
    }

    function foto(data9) {
        document.querySelectorAll(".foto-mempelai").forEach((e, i) => {
            if (i % 2 == 0) {
                data9.split(";")[0] != ""
                    ? (e.src = data9.split(";")[0])
                    : (e.src = source.noimg);
            } else {
                data9.split(";")[1] != ""
                    ? (e.src = data9.split(";")[1])
                    : (e.src = source.noimg);
            }
        });

        document.querySelectorAll(".potrait").forEach((e, i) => {
            data9.split(";")[i + 2] != ""
                ? (e.src = data9.split(";")[i + 2])
                : (e.src = source.noimg);
        });

        document.querySelectorAll(".landscape").forEach((e, i) => {
            data9.split(";")[i + 5] != ""
                ? (e.src = data9.split(";")[i + 5])
                : (e.src = source.noimg);
        });
    }

    function youtubeAudio() {
        const div = document.createElement("div");
        div.id = "youtube-audio";
        div.classList.add("d-none");
        document.body.appendChild(div);
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        youtubeload = setTimeout(() => {
            alert("Masalah koneksi!\nMemuat ulang...");
            location.reload();
        }, 90000);
    }

    function tanggal(e, f) {
        const utc = [5, 6, 7];
        const zona = ["WIT", "WITA", "WIB"];
        e = e.split(";");
        if (f == "Resepsi") {
            let selisih =
                new Date(e[0]).getUTCHours() + utc[zona.indexOf(e[2])];
            if (selisih < 10) {
                selisih = "0" + selisih;
            }

            document.querySelector(".countdown-wrapper").dataset.datetime =
                e[0].split(" ")[0] +
                " " +
                selisih +
                ":" +
                e[0].split(" ")[1].split(":")[1];
            displayCountdown(document.querySelector(".countdown-wrapper"));
            let y = "";
            let z = "";
            if (e[1].toLowerCase() == "selesai") {
                y = e[2];
            } else {
                z = e[2];
            }
            document.querySelector(".jamResepsi").textContent =
                e[0].split(" ")[1].split(":").join(".") +
                " " +
                y +
                " - " +
                e[1].split(":").join(".") +
                " " +
                z;
        } else {
            document.querySelector(".jamAkad").textContent =
                e[0].split(" ")[1].split(":").join(".") + " " + e[2];
        }

        const date = new Date(e[0]);

        document.querySelectorAll(".hari" + f).forEach(e => {
            e.textContent = days[date.getDay()];
        });

        document.querySelectorAll(".tgl" + f).forEach(e => {
            e.textContent = date.getDate();
        });

        document.querySelectorAll(".bln" + f).forEach(e => {
            e.textContent = months[date.getMonth()];
        });

        document.querySelectorAll(".thn" + f).forEach(e => {
            e.textContent = date.getFullYear();
        });

        document.querySelectorAll(".tempat" + f).forEach((a, i) => {
            if (!e[3] || e[3] == "") {
                a.style.display = "none";
            } else {
                a.textContent = e[3];
            }
            document.querySelectorAll(".lokasi" + f)[i].textContent = e[4];
        });
    }

    let inputnama = "";
    document.getElementById("inputname").onkeyup = e => {
        if (e.value.includes(";")) {
            e.value = inputnama;
        } else {
            inputnama = e.value;
        }
    };
    function buatkomen() {
        document.getElementById("coments").innerHTML += `
                <div class="comment-item border rounded p-2 mb-2">
                <div class="d-flex">
                  <img
                    src=""
                    alt="Nama Tamu"
                    class="avatar rounded-circle"
                    style="height: 30px; width: 30px"
                  />
                  <div class="ml-2 text-left">
                    <p class="mb-0 font-weight-bold namakomen"></p>
                    <p class="mb-0 isikomen" style="white-space:pre-wrap"></p>
                    <small class="tglkomen"></small>
                  </div>
                </div>
              </div>
                `;
    }

    let komen;

    function loadkomen() {
        return new Promise(resolve => {
            document.getElementById("coments").innerHTML = "";
            let centang;
            let namakomen;
            let namavatar;
            let nd;
            komen[1].forEach((e, i) => {
                buatkomen();
                if (komen[1][komen[1].length - 1 - i][0] == ";") {
                    centang = true;
                    namakomen = data.mempelai.split(";").join(" & ");
                    namavatar = data.mempelai.split(";").join("+");
                } else {
                    centang = false;
                    namakomen = decodeURI(komen[1][komen[1].length - 1 - i][0]);
                    namavatar = namakomen;
                }
                namavatar.includes(" ")
                    ? (namavatar = namavatar.split(" ").join("+"))
                    : "";
                document.querySelector(
                    `#coments > div:nth-child(${i + 1}) .avatar`
                ).src = `https://ui-avatars.com/api/?background=random&color=random&name=${namavatar}`;
                document.querySelector(
                    `#coments > div:nth-child(${i + 1}) .namakomen`
                ).textContent = namakomen;
                if (centang) {
                    document.querySelector(
                        `#coments > div:nth-child(${i + 1}) .namakomen`
                    ).innerHTML +=
                        '  <img src="../../img/centang.png" style="height:1em">';
                }
                document.querySelector(
                    `#coments > div:nth-child(${i + 1}) .isikomen`
                ).textContent = komen[1][komen[1].length - 1 - i][1];
                nd = new Date(parseInt(komen[1][komen[1].length - 1 - i][2]));

                document.querySelector(
                    `#coments > div:nth-child(${i + 1}) .tglkomen`
                ).textContent =
                    days[nd.getDay()] +
                    ", " +
                    nd.getDate() +
                    " " +
                    months[nd.getMonth()] +
                    " " +
                    nd.getFullYear() +
                    " pkl " +
                    `${
                        nd.getHours() < 10 ? "0" + nd.getHours() : nd.getHours()
                    }` +
                    ":" +
                    `${
                        nd.getMinutes() < 10
                            ? "0" + nd.getMinutes()
                            : nd.getMinutes()
                    }`;
                if (i == komen[1].length - 1) {
                    setTimeout(() => {
                        resolve();
                    }, 100);
                }
            });
        });
    }

    function setcookie(e) {
        const date1 = new Date();
        const date2 = new Date(data.resepsi.split(" ")[0]);
        const exday = Math.round(
            (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
        );
        date1.setTime(date1.getTime() + (exday + 7) * 24 * 60 * 60 * 1000);

        document.cookie =
            location.href.split("#")[1] +
            "=" +
            e +
            ";expires=" +
            date1.toGMTString() +
            ";path=/";
        return document.cookie.split("=")[1];
    }
    let pengantin;
    document.querySelector(".btn-rsvp").addEventListener("click", async () => {
        if (komen != undefined) {
            return;
        } else if (
            !location.href.split("#")[1] ||
            location.href.split("#")[1] == "" ||
            !location.href.split("#")[2] ||
            location.href.split("#")[2] == ""
        ) {
            const nd = new Date();
            document.querySelector(
                `#coments > div:nth-child(1) .tglkomen`
            ).textContent =
                days[nd.getDay()] +
                ", " +
                nd.getDate() +
                " " +
                months[nd.getMonth()] +
                " " +
                nd.getFullYear() +
                " pkl " +
                `${nd.getHours() < 10 ? "0" + nd.getHours() : nd.getHours()}` +
                ":" +
                `${
                    nd.getMinutes() - 1 < 10
                        ? "0" + (nd.getMinutes() - 1)
                        : nd.getMinutes() - 1
                }`;
            if (
                location.href.split("?")[1] &&
                location.href.split("?")[1].includes("&")
            ) {
                buatkomen();
                let namax = datacoba.mempelai.split(";").join("+");
                namax.includes(" ") ? (namax = namax.split(" ").join("+")) : "";

                document.querySelector(
                    `#coments > div:nth-child(2) .avatar`
                ).src = `https://ui-avatars.com/api/?background=random&color=random&name=${namax}`;
                document.querySelector(
                    `#coments > div:nth-child(2) .namakomen`
                ).textContent = datacoba.mempelai.split(";").join(" & ");

                document.querySelector(
                    `#coments > div:nth-child(2) .namakomen`
                ).innerHTML +=
                    '  <img src="../../img/centang.png" style="height:1em">';

                document.querySelector(
                    `#coments > div:nth-child(2) .isikomen`
                ).textContent = "Terimakasih :)";
                document.querySelector(
                    `#coments > div:nth-child(2) .tglkomen`
                ).textContent =
                    days[nd.getDay()] +
                    ", " +
                    nd.getDate() +
                    " " +
                    months[nd.getMonth()] +
                    " " +
                    nd.getFullYear() +
                    " pkl " +
                    `${
                        nd.getHours() < 10 ? "0" + nd.getHours() : nd.getHours()
                    }` +
                    ":" +
                    `${
                        nd.getMinutes() < 10
                            ? "0" + nd.getMinutes()
                            : nd.getMinutes()
                    }`;
                document.getElementById("inputname").value = datacoba.mempelai
                    .split(";")
                    .join(" & ");
                document
                    .getElementById("inputname")
                    .setAttribute("readonly", "");
                pengantin = true;
            }

            komen = "";
            document
                .querySelector(".rsvp-loading")
                .classList.replace("d-flex", "d-none");
            document
                .querySelector(".rsvp-form")
                .classList.replace("d-none", "d-flex");
            document.getElementById("coments").scrollTop =
                document.getElementById("coments").scrollHeight;
            return;
        } else if (
            document.cookie.includes("=") &&
            document.cookie.split("=")[0] != location.href.split("#")[1]
        ) {
            document.cookie =
                document.cookie.split("=")[0] +
                "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }

        let ax = "";
        if (
            (!document.cookie || document.cookie == "") &&
            location.href.split("#")[3] &&
            location.href.split("#")[3] != ""
        ) {
            ax = setcookie(namatamu);
        } else if (document.cookie && document.cookie != "") {
            ax = document.cookie.split("=")[1];
        }
        try {
            komen = await Fetch({
                SHEETID: source.sheetid,
                FN: "LOADKOMEN",
                DATA: { index: parseInt(location.href.split("#")[1]), A: ax }
            });

            if (komen[0] == "ok") {
                document.getElementById("inputname").value = data.mempelai
                    .split(";")
                    .join(" & ");
                document
                    .getElementById("inputname")
                    .setAttribute("readonly", "");
                pengantin = true;
            } else if (document.cookie != "") {
                document.getElementById("inputname").value =
                    document.cookie.split("=")[1];
                document
                    .getElementById("inputname")
                    .setAttribute("readonly", "");
            } else if (
                location.href.split("#")[3] &&
                location.href.split("#")[3] != ""
            ) {
                document.getElementById("inputname").value = namatamu;
            }
            if (komen[1][0] == "#N/A") {
                document.getElementById(
                    "coments"
                ).innerHTML = `<div class="w-100 h-100 d-flex justify-content-center align-items-center">~ Belum ada ucapan ~</div>`;
            } else {
                await loadkomen();
            }
            document
                .querySelector(".rsvp-loading")
                .classList.replace("d-flex", "d-none");
            document
                .querySelector(".rsvp-form")
                .classList.replace("d-none", "d-flex");
            document.getElementById("coments").scrollTop =
                document.getElementById("coments").scrollHeight;
        } catch (err) {
            if (confirm("Masalah koneksi!\nMuat ulang sekarang ?")) {
                location.reload();
            }
        }
    });

    function kirimkomen(nd) {
        buatkomen();
        const cl = document.querySelectorAll("#coments > div").length;
        let namavatar;
        document.querySelector(
            `#coments > div:nth-child(${cl}) .namakomen`
        ).textContent = document.getElementById("inputname").value;
        if (pengantin) {
            if (
                location.href.split("?")[1] &&
                location.href.split("?")[1].includes("&")
            ) {
                namavatar = datacoba.mempelai.split(";").join("+");
            } else {
                namavatar = data.mempelai.split(";").join("+");
            }
            document.querySelector(
                `#coments > div:nth-child(${cl}) .namakomen`
            ).innerHTML +=
                '  <img src="../../img/centang.png" style="height:1em">';
        } else {
            namavatar = document.getElementById("inputname").value.includes(" ")
                ? document
                      .getElementById("inputname")
                      .value.split(" ")
                      .join("+")
                : document.getElementById("inputname").value;
        }
        document.querySelector(
            `#coments > div:nth-child(${cl}) .avatar`
        ).src = `https://ui-avatars.com/api/?background=random&color=random&name=${namavatar}`;

        document.querySelector(
            `#coments > div:nth-child(${cl}) .isikomen`
        ).textContent = document.getElementById("inputcomment").value;
        document.querySelector(
            `#coments > div:nth-child(${cl}) .tglkomen`
        ).textContent =
            days[nd.getDay()] +
            ", " +
            nd.getDate() +
            " " +
            months[nd.getMonth()] +
            " " +
            nd.getFullYear() +
            " pkl " +
            `${nd.getHours() < 10 ? "0" + nd.getHours() : nd.getHours()}` +
            ":" +
            `${nd.getMinutes() < 10 ? "0" + nd.getMinutes() : nd.getMinutes()}`;
        document.getElementById("inputcomment").value = "";
        document.getElementById("coments").scrollTop =
            document.getElementById("coments").scrollHeight;
    }

    document.forms["komen"].onsubmit = async e => {
        e.preventDefault();
        if (
            document.getElementById("submitkomen").classList.contains("d-none")
        ) {
            return;
        }

        const nd = new Date();

        if (
            !location.href.split("#")[1] ||
            location.href.split("#")[1] == "" ||
            !location.href.split("#")[2] ||
            location.href.split("#")[2] == ""
        ) {
            kirimkomen(nd);
            return;
        }

        let ax = "";
        if (document.cookie && document.cookie != "") {
            ax = document.cookie.split("=")[1];
        } else {
            ax = setcookie(document.getElementById("inputname").value);
            document.getElementById("inputname").setAttribute("readonly", "");
        }

        if (
            !document.getElementById("submitkomen").classList.contains("d-none")
        ) {
            document.getElementById("submitkomen").classList.add("d-none");
            document.getElementById("submitkomen2").classList.remove("d-none");
        }

        try {
            const a = await Fetch(
                {
                    SHEETID: source.sheetid,
                    FN: "KIRIMKOMEN",
                    DATA: {
                        index: parseInt(location.href.split("#")[1]),
                        A: ax,
                        komen: document.getElementById("inputcomment").value,
                        waktu: nd.getTime()
                    }
                },
                "text"
            );
            if (a == "ok") {
                kirimkomen(nd);
            } else {
                alert("Periksa koneksi anda!\nSilahkan coba lagi");
            }
            document.getElementById("submitkomen2").classList.add("d-none");
            document.getElementById("submitkomen").classList.remove("d-none");
        } catch (err) {
            alert("Periksa koneksi anda!\nSilahkan coba lagi");
            document.getElementById("submitkomen2").classList.add("d-none");
            document.getElementById("submitkomen").classList.remove("d-none");
        }
    };
})();
function onYouTubeIframeAPIReady() {
    let time;

    var e = document.getElementById("youtube-audio"),
        a = document.createElement("div");
    a.setAttribute("id", "youtube-player"), e.appendChild(a);
    var o = function (f) {
        if (f) {
            if (
                !document
                    .getElementById("btnMusic")
                    .classList.contains("playing")
            ) {
                document.getElementById("btnMusic").classList.add("playing");
            }
        } else {
            document.getElementById("btnMusic").classList.remove("playing");
        }
    };

    var r = new YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: musikid,
        playerVars: { playsinline: 1 },

        events: {
            onReady: function (e) {
                r.setPlaybackQuality("small"),
                    o(r.getPlayerState() !== YT.PlayerState.CUED);
                clearTimeout(youtubeload);
                youtubeload = undefined;
                document.getElementById("loader").classList.remove("d-flex");
            },
            onStateChange: function (e) {
                if (e.data === YT.PlayerState.ENDED) {
                    document.getElementById("btnMusic").click();
                } else if (r.getPlayerState() === YT.PlayerState.BUFFERING) {
                    //  o(!1);
                    document.getElementById("btnMusic").style.transform =
                        "scale(0)";
                    time = setTimeout(() => {
                        document.getElementById("btnMusic").style.transform =
                            "none";
                    }, 20000);
                } else {
                    //o(!0);
                    if (
                        document.querySelector(".btn-open-invitation").style
                            .display == "none"
                    ) {
                        document.getElementById("btnMusic").style.transform =
                            "none";

                        clearTimeout(time);
                        time = undefined;
                    }
                }
            }
        }
    });
    document.getElementById("btnMusic").onclick = function () {
        if (
            r.getPlayerState() === YT.PlayerState.PLAYING ||
            r.getPlayerState() === YT.PlayerState.BUFFERING
        ) {
            r.pauseVideo(), o(!1);
        } else {
            r.playVideo(), o(!0);
        }
    };
}