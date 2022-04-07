
enum SensorType{TEMPERATURE = "TEMPERATURE",HUMIDITY="HUMIDITY",BARO="BARO",PROXIMITY="PROXIMITY"}

interface infoSensor {
    in : [number,number], //0-1023
    out : [number,number],//ex : -20° 55°
    unit : string,//
}

function getSensorValue(value : number,info:infoSensor){
    let val = ((value * (info.out[1] - info.out[0]))/info.in[1])+info.out[0]
    let result = val.toString()+info.unit
    return result
}

function getTypeSensorValue(type:string,value:number){
    switch (type) {
        case SensorType.TEMPERATURE:
            const infoT:infoSensor= {in:[0,1023], out : [-20,55], unit : "°C"}
            return getSensorValue(value,infoT)
            break;
        case SensorType.BARO:
            const infoB:infoSensor= {in:[0,1023], out : [-20,55], unit : "°C"}
            return getSensorValue(value,infoB)
            break
        case SensorType.HUMIDITY :
            const infoH:infoSensor= {in:[0,1023], out : [-20,55], unit : "°C"}
            return getSensorValue(value,infoH)
            break
        case SensorType.PROXIMITY:
            const infoP:infoSensor= {in:[0,1023], out : [-20,55], unit : "°C"}
            return getSensorValue(value,infoP)
            break
        default:
            break;
    }
    return
}

export {getTypeSensorValue}