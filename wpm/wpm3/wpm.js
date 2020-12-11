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
    let binStatus = dp.state.val.toString(2);
    for (let i = 0; i < 12; i++) {
        let writeValue = !!parseInt(binStatus[i], 10);
        switch (i) {
            case 0:
                setState(DP1 + "HK1Pumpe", writeValue, true);
                break;
            case 1:
                setState(DP1 + "HK2Pumpe", writeValue, true);
                break;
            case 2:
                setState(DP1 + "Aufheizprogramm", writeValue, true);
                break;
            case 3:
                setState(DP1 + "NHZStufenInBertieb", writeValue, true);
                break;
            case 4:
                setState(DP1 + "WPImHeizbetrieb", writeValue, true);
                break;
            case 5:
                setState(DP1 + "WPImWarmwasserbetrieb", writeValue, true);
                break;
            case 6:
                setState(DP1 + "VerdichterInBetrieb", writeValue, true);
                break;
            case 7:
                setState(DP1 + "SommerbetriebAktiv", writeValue, true);
                break;
            case 8:
                setState(DP1 + "KuehlbetriebAktiv", writeValue, true);
                break;
            case 9:
                setState(DP1 + "AbtaubetriebMin1IWS", writeValue, true);
                break;
            case 10:
                setState(DP1 + "Silentmode1Aktiv", writeValue, true);
                break;
            case 11:
                setState(DP1 + "Silentmode2Aktiv", writeValue, true);
                break;
        };
    }
});

let DP2 = "0_userdata.0.Stiebel-ISG.EVU-Freigabe."
createState(DP2 + "EVU-Freigabe", "", { name: "EVU-Freigabe", type: "boolean", role: "state" });

var id_betriebsstatus2 = "modbus." + modbus_instance + ".inputRegisters.32502_EVU-Freigabe";
on(id_betriebsstatus2, function (dp) {
    let binStatus = dp.state.val.toString(2);
    for (let i = 0; i < 1; i++) {
        let writeValue = !!parseInt(binStatus[i], 10);
        switch (i) {
            case 0:
                setState(DP2 + "EVU-Freigabe", writeValue, true);
                break;
        };
    }
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

var id_betriebsstatus3 = "modbus." + modbus_instance + ".inputRegisters.32503_Betriebsstatus-2";
on(id_betriebsstatus3, function (dp) {
    let binStatus = dp.state.val.toString(2);
    for (let i = 0; i < 15; i++) {
        let writeValue = !!parseInt(binStatus[i], 10);
        switch (i) {
            case 0:
                setState(DP3 + "Verdichter-1", writeValue, true);
                break;
            case 1:
                setState(DP3 + "Verdichter-2", writeValue, true);
                break;
            case 2:
                setState(DP3 + "Verdichter-3", writeValue, true);
                break;
            case 3:
                setState(DP3 + "Verdichter-4", writeValue, true);
                break;
            case 4:
                setState(DP3 + "Verdichter-5", writeValue, true);
                break;
            case 5:
                setState(DP3 + "Verdichter-6", writeValue, true);
                break;
            case 6:
                setState(DP3 + "Pufferladepumpe-1", writeValue, true);
                break;
            case 7:
                setState(DP3 + "Pufferladepumpe-2", writeValue, true);
                break;
            case 8:
                setState(DP3 + "Pufferladepumpe-3", writeValue, true);
                break;
            case 9:
                setState(DP3 + "Pufferladepumpe-4", writeValue, true);
                break;
            case 10:
                setState(DP3 + "Pufferladepumpe-5", writeValue, true);
                break;
            case 11:
                setState(DP3 + "Pufferladepumpe-6", writeValue, true);
                break;
            case 12:
                setState(DP3 + "NHZ-1", writeValue, true);
                break;
            case 13:
                setState(DP3 + "NHZ-2", writeValue, true);
                break;
        };
    }
});