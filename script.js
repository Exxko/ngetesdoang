// looping ------------------------------------------------

// let bintang = ``
// for (let index = 50; index > 0; index--) {
//     for (let i = 0; i < index ; i++) {
//         bintang += `*`
//     }
//     bintang += ` \n`
// }
// console.log (bintang) 

// switch --------------------------------------------------

// let con = confirm(`anda yakin mau masuk?`)
// for(con ; con === true;){
//     let nama = prompt(`pilih salah satu pasangan anda (kelly, cathrin, cika, dinda)`)
// switch(nama){
//     case(`cathrin`): alert(`cantik, cindo, body gools`);break
//     case(`kelly`): alert(`cindo, freandly, imut`);break
//     case(`cika`): alert(`cantik, tinggi, berwibawa`);break
//     case(`dinda`): alert(`short hair, putih, cantik+imut, cool girl`);break
//     case(``):alert(`anda tidak memasukkan apa apa`);break
//     default: alert(`anda memasukkan nama yang salah, maaf saya tidak kenal`)
// }
// con = confirm(`apa kamu ingin mengulangi permaininan nya?`)
// }

// array ----------------------------------------------------

// let namaTeman = [`rahman`, `tono`,`dono`]
// namaTeman.push(`dhea`, `fikri`)
// alert(namaTeman[4])

// for looping untuk maping console log ---------------------

// const namaguru = [`amat`, `ijal`, `nur`]
// for (i = 0 ; i < namaguru.length ; i++){
//     console.log(namaguru[i])
// }


// prom untuk menentukan saldo akhir dari inputan user

// let saldoAwal = Number(prompt(`masukkan data saldo awal anda`))
// let saldoTambahan = Number(prompt(`masukkan data saldo tambahan anda`))
// const saldoAkhir = saldoAwal + saldoTambahan
// console.log(`saldo akhir kamu sebesar Rp${saldoAkhir}`)

// menentukan haridari tanggal yang ada saat ini di pc sendiri

let hari = new Date().getDay();

switch(hari){
    case(1): alert(`hari ini adalah hari senin`);break
    case(2): alert(`hari ini adalah hari selasa`);break
    case(3): alert(`hari ini adalah hari rabu`);break
    case(4): alert(`hari ini adalah hari kamis`);break
    case(5): alert(`hari ini adalah hari jumaat`);break
    case(6): alert(`hari ini adalah hari sabtu`);break
    case(7): alert(`hari ini adalah hari minggu`);break
}