let teljesMuvelet = "";

init();

function init() {
    document.addEventListener("click", function (e) {
        const id = e.target.id;

        if (!id) return;

        if (!isNaN(id)) {
            szamHozzaadasa(id);
        } 
        else if (id === "osszeadas" || id === "kivonas" || id === "szorzas" || id === "osztas") {
            if (muveletHozzaadasaValidacio()) {
                muveletHozzaadasa(id);
            }
        } 
        else if (id === ".") {
            tizedespontHozzaadasa();
        } 
        else if (id === "egyenlo") {
            kiErtekeles();
        } 
        else if (id === "torles") {
            torles();
        }

        console.log(teljesMuvelet);
    });
}

function szamHozzaadasa(szam) {
    teljesMuvelet += szam;
    frissitKijelzo();
}

function muveletHozzaadasaValidacio() {
    return teljesMuvelet !== "" && !isNaN(teljesMuvelet.charAt(teljesMuvelet.length - 1));
}

function muveletHozzaadasa(muvelet) {
    let muvjel = "";

    switch (muvelet) {
        case "osszeadas":
            muvjel = "+";
            break;
        case "kivonas":
            muvjel = "-";
            break;
        case "szorzas":
            muvjel = "*";
            break;
        case "osztas":
            muvjel = "/";
            break;
    }

    teljesMuvelet += muvjel;
    frissitKijelzo();
}

function tizedespontHozzaadasa() {
    if (teljesMuvelet === "" || isNaN(teljesMuvelet.charAt(teljesMuvelet.length - 1))) {
        return;
    }

    teljesMuvelet += ".";
    frissitKijelzo();
}

function kiErtekeles() {
    try {
        const eredmeny = eval(teljesMuvelet);
        teljesMuvelet = eredmeny.toString();
        document.getElementsByClassName("eredmeny")[0].textContent = teljesMuvelet;
        frissitKijelzo();
    } catch {
        document.getElementsByClassName("eredmeny")[0].textContent = "Hiba";
    }
}

function torles() {
    teljesMuvelet = "";
    document.getElementsByClassName("eredmeny")[0].textContent = "";
    frissitKijelzo();
}

function frissitKijelzo() {
    document.getElementsByClassName("kifejezes")[0].textContent = teljesMuvelet;
}