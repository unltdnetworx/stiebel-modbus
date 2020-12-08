var modbus_instance = "1";

let DP1 = "0_userdata.0.Stiebel-ISG.Betriebsstatus."
createState(DP1 + "SchaltprogrammAktiv", "", { name: "Schaltprogramm aktiv", type: "boolean", role: "state" });
createState(DP1 + "Verdichter", "", { name: "Verdichter", type: "boolean", role: "state" });
createState(DP1 + "Heizen", "", { name: "Heizen", type: "boolean", role: "state" });
createState(DP1 + "Kuehlen", "", { name: "Kühlen", type: "boolean", role: "state" });
createState(DP1 + "Warmwasserbereitung", "", { name: "Warmwasserbereitung", type: "boolean", role: "state" });
createState(DP1 + "ElektrischeNacherwaermung", "", { name: "Elektrische Nacherwaermung", type: "boolean", role: "state" });
createState(DP1 + "Service", "", { name: "Service", type: "boolean", role: "state" });
createState(DP1 + "EVUSperre", "", { name: "EVU-Sperre", type: "boolean", role: "state" });
createState(DP1 + "FilterwechselBeide", "", { name: "Filterwechsel beide", type: "boolean", role: "state" });
createState(DP1 + "Lueftung", "", { name: "Lüftung", type: "boolean", role: "state" });
createState(DP1 + "Heizkreispumpe", "", { name: "Heizkreispumpe", type: "boolean", role: "state" });
createState(DP1 + "AbtauenVerdampfer", "", { name: "Abtauen Verdampfer", type: "boolean", role: "state" });
createState(DP1 + "FilterwechselAbluft", "", { name: "Filterwechsel Abluft", type: "boolean", role: "state" });
createState(DP1 + "FilterwechselZuluft", "", { name: "Filterwechsel Zuluft", type: "boolean", role: "state" });
createState(DP1 + "AufheizprogrammAktiv", "", { name: "Aufheizprogramm aktiv", type: "boolean", role: "state" });

var id_betriebsstatus = "modbus." + modbus_instance + ".inputRegisters.32001_Betriebsstatus";

on(id_betriebsstatus, function (dp) {
    let binStatus = dp.state.val.toString(2);
    for (let i = 0; i < 15; i++) {
        let writeValue = !!parseInt(binStatus[i], 10);
        switch (i) {
            case 0:
                setState(DP1 + "SchaltprogrammAktiv", writeValue, true);
                break;
            case 1:
                setState(DP1 + "Verdichter", writeValue, true);
                break;
            case 2:
                setState(DP1 + "Heizen", writeValue, true);
                break;
            case 3:
                setState(DP1 + "Kuehlen", writeValue, true);
                break;
            case 4:
                setState(DP1 + "Warmwasserbereitung", writeValue, true);
                break;
            case 5:
                setState(DP1 + "ElektrischeNacherwaermung", writeValue, true);
                break;
            case 6:
                setState(DP1 + "Service", writeValue, true);
                break;
            case 7:
                setState(DP1 + "EVUSperre", writeValue, true);
                break;
            case 8:
                setState(DP1 + "FilterwechselBeide", writeValue, true);
                break;
            case 9:
                setState(DP1 + "Lueftung", writeValue, true);
                break;
            case 10:
                setState(DP1 + "Heizkreispumpe", writeValue, true);
                break;
            case 11:
                setState(DP1 + "AbtauenVerdampfer", writeValue, true);
                break;
            case 12:
                setState(DP1 + "FilterwechselAbluft", writeValue, true);
                break;
            case 13:
                setState(DP1 + "FilterwechselZuluft", writeValue, true);
                break;
            case 14:
                setState(DP1 + "AufheizprogrammAktiv", writeValue, true);
                break;
        };
    }
});

let DP2 = "0_userdata.0.Stiebel-ISG.Betriebsstatus2."
createState(DP2 + "Sommerbetrieb", "", { name: "Sommerbetrieb aktiv", type: "boolean", role: "state" });
createState(DP2 + "OfenKamin", "", { name: "Ofen/Kamin aktiv", type: "boolean", role: "state" });

var id_betriebsstatus2 = "modbus." + modbus_instance + ".inputRegisters.32005_Betriebsstatus-2";
on(id_betriebsstatus2, function (dp) {
    let binStatus = dp.state.val.toString(2);
    for (let i = 0; i < 2; i++) {
        let writeValue = !!parseInt(binStatus[i], 10);
        switch (i) {
            case 0:
                setState(DP2 + "Sommerbetrieb", writeValue, true);
                break;
            case 1:
                setState(DP2 + "OfenKamin", writeValue, true);
                break;
        };
    }
});