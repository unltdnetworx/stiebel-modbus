var modbus_instance = "1";

function modifyDP(id, typ, states) {
    var obj = getObject(id);
    switch (typ) {
        case "states":
            obj.common.states = states;
            break;
        case "minmax":
            obj.common.min = states[0];
            obj.common.max = states[1]
            break;
    }
    setObject(id, obj);
}

modifyDP("modbus." + modbus_instance + ".holdingRegisters.41501_Betriebsart", "states", "{\"1\":\"BEREITSCHAFTSBETRIEB\",\"2\":\"PROGRAMMBETRIEB\",\"3\":\"KOMFORTBETRIEB\",\"4\":\"ECO-BETRIEB\",\"5\":\"WARMWASSERBETRIEB\",\"0\":\"NOTBETRIEB\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41520_Reset", "states", "{\"1\":\"RESET SYSTEM\",\"2\":\"RESET FEHLERLISTE\",\"3\":\"RESET WÄRMEPUMPE\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41521_Restart-ISG", "states", "{\"0\":\"AUS\",\"1\":\"RESTART\",\"2\":\"SERVICE-TASTE\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44001_SG_Ready_ein-_und_ausschalten", "states", "{\"0\":\"AUS\",\"1\":\"EIN\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44002_SG_Ready_Eingang1", "states", "{\"0\":\"UNBESCHALTET\",\"1\":\"GESCHALTET\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44003_SG_Ready_Eingang2", "states", "{\"0\":\"UNBESCHALTET\",\"1\":\"GESCHALTET\"}");

modifyDP("modbus." + modbus_instance + ".inputRegisters.32504_Fehlerstatus", "states", "{\"0\":\"KEIN FEHLER\",\"1\":\"FEHLER\"}");
modifyDP("modbus." + modbus_instance + ".inputRegisters.32505_BUS-Status", "states", "{\"0\":\"STATUS-OK\",\"-1\":\"STATUS-ERROR\",\"-2\":\"ERROR-PASSIVE\",\"-3\":\"BUS-OFF\",\"-4\":\"PHYSICAL-ERROR\"}");

modifyDP("modbus." + modbus_instance + ".holdingRegisters.41501_Betriebsart", "minmax", [0, 5]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41502_Komfort-Temperatur-HK1", "minmax", [5, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41503_ECO-Temperatur-HK1", "minmax", [5, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41504_Steigung-Heizkurve-HK1", "minmax", [0, 3]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41505_Komfort-Temperatur-HK2", "minmax", [5, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41506_ECO-Temperatur-HK2", "minmax", [5, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41507_Steigung-Temperatur-HK2", "minmax", [0, 3]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41508_Festwertbetrieb", "minmax", [20, 70]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41509_Bivalenztemp-HZG", "minmax", [-20, 40]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41510_Komfort-Temperatur-WW", "minmax", [10, 60]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41511_ECO-Temperatur-WW", "minmax", [10, 60]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41512_WW-Stufen", "minmax", [0, 6]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41513_Bivalenztemp-WW", "minmax", [-40, 40]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41514_Vorlaufsolltemp-FK", "minmax", [7, 25]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41515_Hysterese-Vorlautemp-FK", "minmax", [1, 5]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41516_Raumsolltemp-FK", "minmax", [20, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41517_Vorlaufsolltemp-GK", "minmax", [7, 25]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41518_Hysterese-Vorlautemp-GK", "minmax", [1, 5]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41519_Raumsolltemp-GK", "minmax", [20, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41520_Reset", "minmax", [1, 3]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41521_Restart-ISG", "minmax", [0, 2]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44001_SG_Ready_ein-_und_ausschalten", "minmax", [0, 1]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44002_SG_Ready_Eingang1", "minmax", [0, 1]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44003_SG_Ready_Eingang2", "minmax", [0, 1]);