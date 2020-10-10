class BangunDatar {
    constructor(ukuran) {
        this.ukuran = ukuran;
    }

    keliling() {
        console.log("");
    }

    luas() {
        console.log("");
    }
}

class Lingkaran extends BangunDatar {
    constructor(ukuran) {
        super(ukuran);
    }

    set jarijari(input) {
        this.ukuran = input;
    }
    
    keliling() {
        let kelilingLingkaran = 2 * 3.14 * this.ukuran;
        console.log(kelilingLingkaran);
    }

    luas() {
        let luasLingkaran = 3.14 * this.ukuran * this.ukuran;
        console.log(luasLingkaran);
    }
}

class Persegi extends BangunDatar {
    constructor(ukuran) {
        super(ukuran);
    }

    set sisi(input) {
        this.ukuran = input;
    }

    keliling() {
        let kelilingPersegi = 4 * this.ukuran;
        console.log(kelilingPersegi);
    }

    luas() {
        let luasPersegi = this.ukuran * this.ukuran;
        console.log(luasPersegi);
    }
}

var bangunDatar = new BangunDatar(0);
bangunDatar.keliling();
bangunDatar.luas();

var lingkaran = new Lingkaran(21);
lingkaran.keliling();
lingkaran.luas();

var persegi = new Persegi(15);
persegi.keliling();
persegi.luas();