export function FormatDataMilegundos(value:string){
    const newFormat = parseInt(value)
    const valueMillesegundos = Date.now()
    const segundos = (valueMillesegundos - newFormat) / 1000
    const minutos = ((valueMillesegundos - newFormat) / 1000) / 60
    const horas = (((valueMillesegundos - newFormat) / 1000) / 60) / 24
    const dias = ((((valueMillesegundos - newFormat) / 1000) / 60) / 24) / 30
    const meses = (((((valueMillesegundos - newFormat) / 1000) / 60) / 24) / 30) / 12
    if(minutos < 1) {
        return `Há ${segundos.toFixed()} segundos`
    } 
    if(minutos === 1){
        return `Há 1 minuto`
    }
    if(minutos > 1 && minutos < 60){
        return `Há ${minutos.toFixed(0)} minutos`
    }
    if(horas === 1){
        return `Há 1 hora`
    }
    if(horas > 1 && horas < 24){
        return `Há ${horas.toFixed(0)} horas`
    }
    if(dias === 1){
        return `Há 1 dia`
    }
    if(dias > 1 && dias < 30){
        return `Há ${dias.toFixed(0)} dias`
    }
    if(meses === 1){
        return `Há 1 mês`
    }
    if(meses > 1 && meses < 12){
        return `Há ${dias.toFixed(0)} meses`
    }
    else {
        dataEnviada(newFormat)
    }
}

export function dataEnviada(value:number){
    var data = new Date(value);
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    return `${dia}-${mes}-${ano}`
}