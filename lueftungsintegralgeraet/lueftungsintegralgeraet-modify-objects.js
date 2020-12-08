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

modifyDP("modbus." + modbus_instance + ".holdingRegisters.41001_Betriebsart", "states", "{\"11\":\"AUTOMATIK\",\"1\":\"BEREITSCHAFT\",\"3\":\"TAGBETRIEB\",\"4\":\"ABSENKBETRIEB\",\"5\":\"WARMWASSER\",\"14\":\"HANDBETRIEB\",\"0\":\"NOTBETRIEB\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41027_Restart-ISG", "states", "{\"0\":\"AUS\",\"1\":\"RESET\",\"2\":\"MENUE\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44001_SG_Ready_ein-_und_ausschalten", "states", "{\"0\":\"AUS\",\"1\":\"EIN\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44002_SG_Ready_Eingang1", "states", "{\"0\":\"UNBESCHALTET\",\"1\":\"GESCHALTET\"}");
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44003_SG_Ready_Eingang2", "states", "{\"0\":\"UNBESCHALTET\",\"1\":\"GESCHALTET\"}");

modifyDP("modbus." + modbus_instance + ".inputRegisters.32002_Fehlerstatus", "states", "{\"0\":\"KEIN FEHLER\",\"1\":\"FEHLER\"}");
modifyDP("modbus." + modbus_instance + ".inputRegisters.32003_BUS-Status", "states", "{\"0\":\"STATUS-OK\",\"-1\":\"STATUS-ERROR\",\"-2\":\"ERROR-PASSIVE\",\"-3\":\"BUS-OFF\",\"-4\":\"PHYSICAL-ERROR\"}");
modifyDP("modbus." + modbus_instance + ".inputRegisters.32004_Abtauen-eingeleitet", "states", "{\"0\":\"AUS\",\"1\":\"EINGELEITET\"}");

modifyDP("modbus." + modbus_instance + ".holdingRegisters.41001_Betriebsart", "minmax", [0, 14]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41002_Raumtemp-Tag-HK1", "minmax", [10, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41003_Raumtemp-Nacht-HK1", "minmax", [10, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41004_Heizkreistemp-Soll-Hand-HK1", "minmax", [10, 60]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41005_Raumtemp-Tag-HK2", "minmax", [10, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41006_Raumtemp-Nacht-HK2", "minmax", [10, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41007_Heizkreistemp-Soll-Hand-HK2", "minmax", [10, 65]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41008_Heizkurve_HK1-Steigung", "minmax", [0, 5]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41009_Heizkurve_HK1-Fusspunkt", "minmax", [0, 20]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41010_Heizkurve_HK2-Steigung", "minmax", [0, 5]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41011_Heizkurve_HK2-Fusspunkt", "minmax", [0, 20]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41012_WW-Soll-Tag", "minmax", [10, 55]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41013_WW-Soll-Nacht", "minmax", [10, 55]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41014_WW-Soll-Handbetrieb", "minmax", [10, 65]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41015_MWM-Soll-Tag", "minmax", [50, 288]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41016_MWM-Soll-Nacht", "minmax", [50, 288]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41017_MWM-Soll-Handbetrieb", "minmax", [50, 288]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41018_Lueftung-Stufe-Tag", "minmax", [0, 3]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41019_Lueftung-Stufe-Nacht", "minmax", [0, 3]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41020_Lueftung-Stufe-Party", "minmax", [0, 3]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41021_Lueftung-Stufe-Hand", "minmax", [0, 3]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41022_Raumtemp-Kuehlen-HK1-Tag", "minmax", [10, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41023_Raumtemp-Kuehlen-HK1-Nacht", "minmax", [10, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41024_Raumtemp-Kuehlen-HK2-Tag", "minmax", [10, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41025_Raumtemp-Kuehlen-HK2-Nacht", "minmax", [10, 30]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41026_Reset", "minmax", [0, 1]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.41027_Restart-ISG", "minmax", [0, 2]);

modifyDP("modbus." + modbus_instance + ".holdingRegisters.44001_SG_Ready_ein-_und_ausschalten", "minmax", [0, 1]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44002_SG_Ready_Eingang1", "minmax", [0, 1]);
modifyDP("modbus." + modbus_instance + ".holdingRegisters.44003_SG_Ready_Eingang2", "minmax", [0, 1]);