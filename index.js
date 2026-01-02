function convertTanggal(inputTanggal){
    let hari = ""
    let bulan = ""
    let tahun = ""
    let valid = true

    if(inputTanggal.length !== 10){
        return "Format tanggal salah"
    }

    for(let i = 0; i<inputTanggal.length; i++){
        if(i === 2 || i === 5){
            if(inputTanggal[i] !== "-"){
                valid = false
                break
            }
        }
        else{
            if(inputTanggal[i] < "0" || inputTanggal[i] > "9"){
                valid = false
                break
            }
            
            if(i<2){
                hari += inputTanggal[i]
            }
            else if(i<5){
                bulan += inputTanggal[i]
            }
            else{
                tahun += inputTanggal[i]
            } 
        }
    }

    let hariInput = Number(hari)
    let bulanInput = Number(bulan)

    if(!valid || hariInput < 1 || hariInput > 31 || bulanInput < 1 || bulanInput > 12 || tahun.length !== 4){
        return "Format tanggal salah"
    }

    return hari + "/" + bulan + "/" + tahun
}

console.log(convertTanggal())