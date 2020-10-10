// soal 15
let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

buku = {...buku, ...dataBukuTambahan};
buku['warnaSampul'] = [...buku['warnaSampul'], ...warna];

console.log(buku);