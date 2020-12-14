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
    let binStatus = Number(dp.state.val).toString(2).padStart(12, "0");
    setState(DP1 + "HK1Pumpe", !!parseInt(binStatus[11 - 0], 10), true);
    setState(DP1 + "HK2Pumpe", !!parseInt(binStatus[11 - 1], 10), true);
    setState(DP1 + "Aufheizprogramm", !!parseInt(binStatus[11 - 2], 10), true);
    setState(DP1 + "NHZStufenInBertieb", !!parseInt(binStatus[11 - 3], 10), true);
    setState(DP1 + "WPImHeizbetrieb", !!parseInt(binStatus[11 - 4], 10), true);
    setState(DP1 + "WPImWarmwasserbetrieb", !!parseInt(binStatus[11 - 5], 10), true);
    setState(DP1 + "VerdichterInBetrieb", !!parseInt(binStatus[11 - 6], 10), true);
    setState(DP1 + "SommerbetriebAktiv", !!parseInt(binStatus[11 - 7], 10), true);
    setState(DP1 + "KuehlbetriebAktiv", !!parseInt(binStatus[11 - 8], 10), true);
    setState(DP1 + "AbtaubetriebMin1IWS", !!parseInt(binStatus[11 - 9], 10), true);
    setState(DP1 + "Silentmode1Aktiv", !!parseInt(binStatus[11 - 10], 10), true);
    setState(DP1 + "Silentmode2Aktiv", !!parseInt(binStatus[11 - 11], 10), true);
});

let DP3 = "0_userdata.0.Stiebel-ISG.Betriebsstatus2."
createState(DP3 + "Verdichter-1", "", { name: "Verdichter 1", type: "boolean", role: "state" });
createState(DP3 + "Verdichter-2", "", { name: "Verdichter 1", type: "boolean", role: "state" });
createState(DP3 + "Verdichter-3", "", { name: "Verdichter 1", type: "boolean", role: "state" });
createState(DP3 + "Verdichter-4", "", { name: "Verdichter 1", type: "boolean", role: "state" });
createState(DP3 + "Verdichter-5", "", { name: "Verdichter 1", type: "boolean", role: "state" });
createState(DP3 + "Verdichter-6", "", { name: "Verdichter 1", type: "boolean", role: "state" });
createState(DP3 + "Pufferladepumpe-1", "", { name: "Pufferladepumpe 1", type: "boolean", role: "state" });
createState(DP3 + "Pufferladepumpe-2", "", { name: "Pufferladepumpe 2", type: "boolean", role: "state" });
createState(DP3 + "Pufferladepumpe-3", "", { name: "Pufferladepumpe 3", type: "boolean", role: "state" });
createState(DP3 + "Pufferladepumpe-4", "", { name: "Pufferladepumpe 4", type: "boolean", role: "state" });
createState(DP3 + "Pufferladepumpe-5", "", { name: "Pufferladepumpe 5", type: "boolean", role: "state" });
createState(DP3 + "Pufferladepumpe-6", "", { name: "Pufferladepumpe 6", type: "boolean", role: "state" });
createState(DP3 + "NHZ-1", "", { name: "NHZ 1", type: "boolean", role: "state" });
createState(DP3 + "NHZ-2", "", { name: "NHZ 2", type: "boolean", role: "state" });

var id_betriebsstatus2 = "modbus." + modbus_instance + ".inputRegisters.32503_Betriebsstatus-2";

on(id_betriebsstatus2, function (dp) {
    let binStatus = Number(dp.state.val).toString(2).padStart(14, "0");
    setState(DP1 + "Verdichter-1", !!parseInt(binStatus[13 - 0], 10), true);
    setState(DP1 + "Verdichter-2", !!parseInt(binStatus[13 - 1], 10), true);
    setState(DP1 + "Verdichter-3", !!parseInt(binStatus[13 - 2], 10), true);
    setState(DP1 + "Verdichter-4", !!parseInt(binStatus[13 - 3], 10), true);
    setState(DP1 + "Verdichter-5", !!parseInt(binStatus[13 - 4], 10), true);
    setState(DP1 + "Verdichter-6", !!parseInt(binStatus[13 - 5], 10), true);
    setState(DP1 + "Pufferladepumpe-1", !!parseInt(binStatus[13 - 6], 10), true);
    setState(DP1 + "Pufferladepumpe-2", !!parseInt(binStatus[13 - 7], 10), true);
    setState(DP1 + "Pufferladepumpe-3", !!parseInt(binStatus[13 - 8], 10), true);
    setState(DP1 + "Pufferladepumpe-4", !!parseInt(binStatus[13 - 9], 10), true);
    setState(DP1 + "Pufferladepumpe-5", !!parseInt(binStatus[13 - 10], 10), true);
    setState(DP1 + "Pufferladepumpe-6", !!parseInt(binStatus[13 - 11], 10), true);
    setState(DP1 + "NHZ-1", !!parseInt(binStatus[13 - 12], 10), true);
    setState(DP1 + "NHZ-2", !!parseInt(binStatus[13 - 13], 10), true);
});