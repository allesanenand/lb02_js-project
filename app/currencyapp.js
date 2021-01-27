// const EUR = "eur";const CHF = "chf";const USD = "usd";

let kurs1 = devisenkurs[0];

let CHF_EUR = {
  date: kurs1.Datum,
  local: kurs1.Heimw,
  foreign: kurs1.Fernw,
  value: kurs1.Kurs
}

let kurs2 = devisenkurs[1];

let CHF_USD = {
  date: kurs2.Datum,
  local: kurs2.Heimw,
  foreign: kurs2.Fernw,
  value: kurs2.Kurs
}

let kurs3 = devisenkurs[2];

let EUR_CHF = {
  date: kurs3.Datum,
  local: kurs3.Heimw,
  foreign: kurs3.Fernw,
  value: kurs3.Kurs
}

let kurs4 = devisenkurs[3];

let USD_CHF = {
  date: kurs4.Datum,
  local: kurs4.Heimw,
  foreign: kurs4.Fernw,
  value: kurs4.Kurs
}


//Werte auslesen
let locAm=document.getElementById("localAmount");
let locEx=document.getElementById("localExchange");
let forAm=document.getElementById("foreignAmount");
let forEx=document.getElementById("foreignExchange");

/* Multipliziert den Betrag mit dem Umwandlungskurs resp. Währungskurs */
function convert(betrag, kurs) {
    return Math.fround(betrag * kurs).toFixed(4);
}

/**
 *  von CHF nach Fremdwährung
 */
function localToForeign() {
    /* Ist Ausgangswährung CHF dann ... */
    console.log(`in localToForeign ${locEx.value},${CHF_EUR.local} `);
    if (locEx.value === CHF_EUR.local.toLowerCase()) {
        console.log(`in in ${CHF_EUR.local} `);
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === CHF_EUR.foreign.toLowerCase()) {
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
            console.log(`in in ${CHF_EUR.foreign}, ${CHF_EUR.value}, ${locAm.value}`);
            forAm.value = convert(locAm.value, CHF_EUR.value);
        }
        if (forEx.value === CHF_USD.foreign.toLowerCase()) {
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            forAm.value = convert(locAm.value, CHF_USD.value);
        }
    }
}

/**
 *  von Fremdwährung nach CHF
 */
function foreignToLocal() {
    /* Ist Ausgangswährung EUR dann ... */
    console.log(`in foreignToLocal ${forEx.value},${EUR_CHF.local} `);
    if (forEx.value === EUR_CHF.local.toLowerCase()) {
        console.log(`in in ${EUR_CHF.local} `);
        /* ... und die Zielwährung CHF dann ... */
        if (locEx.value === EUR_CHF.foreign.toLowerCase()) {
            /* ... rufe die Funktion auf zur Berechnung des CHF-Kurses  */
            locAm.value = convert(forAm.value, EUR_CHF.value);
            console.log(`in in ${EUR_CHF.foreign}, ${EUR_CHF.value}, ${locAm.value}`);
        }

    }


    if (forEx.value === USD_CHF.local.toLowerCase()) {
        console.log(`in ${USD_CHF.foreign}, ${USD_CHF.value}, ${locAm.value}`);
        if (locEx.value === USD_CHF.foreign.toLowerCase()) {
            /* ... rufe die Funktion auf zur Berechnung des CHF-Kurses  */
            locAm.value = convert(forAm.value, USD_CHF.value);
            console.log(`in in ${USD_CHF.local}, ${USD_CHF.value}, ${locAm.value}`);
        }
    }

}

