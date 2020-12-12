var modbus_instance = "1";

let DP1 = "0_userdata.0.Stiebel-ISG.Betriebsstatus."
createState(DP1 + "HK1Pumpe", "", { name: "Heizkreis 1 Pumpe aktiv", type: "boolean", role: "state" });
createState(DP1 + "HK2Pumpe", "", { name: "Heizkreis 1 Pumpe aktiv", type: "boolean", role: "state" });
createState(DP1 + "Aufheizprogramm", "", { name: "Aufheizprogramm", type: "boolean", role: "state" });
createState(DP1 + "NHZStufenInBertieb", "", { name: "NHZ-Stufen in Bertieb", type: "boolean", role: "state" });
createState(DP1 + "WPImHeizbetrieb", "", { name: "WP im Heizbetrieb", type: "boolean", role: "state" });
createState(DP1 + "WPImWarmwasserbetrieb", "", { name: "WP im Warmwasserbetrieb", type: "boolean", role: "state" });
createState(DP1 + "VerdichterInBetrieb", "", { name: "Verdichter in Betrieb", type: "boolean", role: "state" });
createState(DP1 + "SommerbetriebAktiv", "", { name: "Sommerbetrieb aktiv", type: "boolean", role: "state" });
createState(DP1 + "KuehlbetriebAktiv", "", { name: "Kühlbetrieb aktiv", type: "boolean", role: "state" });
createState(DP1 + "AbtaubetriebMin1IWS", "", { name: "Mind. 1 IWS im Abtaubetrieb", type: "boolean", role: "state" });
createState(DP1 + "Silentmode1Aktiv", "", { name: "Silentmode 1 aktiv", type: "boolean", role: "state" });
createState(DP1 + "Silentmode2Aktiv", "", { name: "Silentmode 2 aktiv/WP aus", type: "boolean", role: "state" });

var id_betriebsstatus = "modbus." + modbus_instance + ".inputRegisters.32501_Betriebsstatus";

on(id_betriebsstatus, function (dp) {
    let binStatus = Number(dp.state.val).toString(2).padEnd(12, "0");
    setState(DP1 + "HK1Pumpe", !!parseInt(binStatus[0], 10), true);
    setState(DP1 + "HK2Pumpe", !!parseInt(binStatus[1], 10), true);
    setState(DP1 + "Aufheizprogramm", !!parseInt(binStatus[2], 10), true);
    setState(DP1 + "NHZStufenInBertieb", !!parseInt(binStatus[3], 10), true);
    setState(DP1 + "WPImHeizbetrieb", !!parseInt(binStatus[4], 10), true);
    setState(DP1 + "WPImWarmwasserbetrieb", !!parseInt(binStatus[5], 10), true);
    setState(DP1 + "VerdichterInBetrieb", !!parseInt(binStatus[6], 10), true);
    setState(DP1 + "SommerbetriebAktiv", !!parseInt(binStatus[7], 10), true);
    setState(DP1 + "KuehlbetriebAktiv", !!parseInt(binStatus[8], 10), true);
    setState(DP1 + "AbtaubetriebMin1IWS", !!parseInt(binStatus[9], 10), true);
    setState(DP1 + "Silentmode1Aktiv", !!parseInt(binStatus[10], 10), true);
    setState(DP1 + "Silentmode2Aktiv", !!parseInt(binStatus[11], 10), true);
});