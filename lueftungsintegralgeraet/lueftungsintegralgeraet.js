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
    let binStatus = Number(dp.state.val).toString(2).padEnd(15, "0");
    setState(DP1 + "SchaltprogrammAktiv", !!parseInt(binStatus[0], 10), true);
    setState(DP1 + "Verdichter", !!parseInt(binStatus[1], 10), true);
    setState(DP1 + "Heizen", !!parseInt(binStatus[2], 10), true);
    setState(DP1 + "Kuehlen", !!parseInt(binStatus[3], 10), true);
    setState(DP1 + "Warmwasserbereitung", !!parseInt(binStatus[4], 10), true);
    setState(DP1 + "ElektrischeNacherwaermung", !!parseInt(binStatus[5], 10), true);
    setState(DP1 + "Service", !!parseInt(binStatus[6], 10), true);
    setState(DP1 + "EVUSperre", !!parseInt(binStatus[7], 10), true);
    setState(DP1 + "FilterwechselBeide", !!parseInt(binStatus[8], 10), true);
    setState(DP1 + "Lueftung", !!parseInt(binStatus[9], 10), true);
    setState(DP1 + "Heizkreispumpe", !!parseInt(binStatus[10], 10), true);
    setState(DP1 + "AbtauenVerdampfer", !!parseInt(binStatus[11], 10), true);
    setState(DP1 + "FilterwechselAbluft", !!parseInt(binStatus[12], 10), true);
    setState(DP1 + "FilterwechselZuluft", !!parseInt(binStatus[13], 10), true);
    setState(DP1 + "AufheizprogrammAktiv", !!parseInt(binStatus[14], 10), true);
});

let DP2 = "0_userdata.0.Stiebel-ISG.Betriebsstatus2."
createState(DP2 + "Sommerbetrieb", "", { name: "Sommerbetrieb aktiv", type: "boolean", role: "state" });
createState(DP2 + "OfenKamin", "", { name: "Ofen/Kamin aktiv", type: "boolean", role: "state" });

var id_betriebsstatus2 = "modbus." + modbus_instance + ".inputRegisters.32005_Betriebsstatus-2";
on(id_betriebsstatus2, function (dp) {
    let binStatus = Number(dp.state.val).toString(2).padEnd(2, "0");
    setState(DP2 + "Sommerbetrieb", !!parseInt(binStatus[0], 10), true);
    setState(DP2 + "OfenKamin", !!parseInt(binStatus[1], 10), true);
});