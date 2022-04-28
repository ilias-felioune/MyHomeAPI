
enum SensorType{TEMPERATURE = "TEMPERATURE",HUMIDITY="HUMIDITY",BARO="BARO",PROXIMITY="PROXIMITY"}

interface infoSensor {
    in : [number,number], //0-1023
    out : [number,number],//ex : -20° 55°
    unit : string,//
}

function getSensorValue(value : number,info:infoSensor){
    let tmp = ((value * (info.out[1] - info.out[0]))/info.in[1])+info.out[0]
    const val = tmp.toFixed(2)
    const result = val.toString()+info.unit
    return result
}

function getTypeSensorValue(type:string,value:number | boolean){
    switch (type) {
        case SensorType.TEMPERATURE:
            const infoT:infoSensor= {in:[0,1023], out : [-20,55], unit : "°C"}
            return getSensorValue(value as number,infoT)
            break;
        case SensorType.BARO:
            const infoB:infoSensor= {in:[0,1023], out : [950,1150], unit : "hPa"}
            return getSensorValue(value as number,infoB)
            break
        case SensorType.HUMIDITY :
            const infoH:infoSensor= {in:[0,1023], out : [0,100], unit : "%HR"}
            return getSensorValue(value as number,infoH)
            break
        case SensorType.PROXIMITY:
            return value?"Actif":"Incatif"
            break
        default:
            break;
    }
    return
}

export {getTypeSensorValue}