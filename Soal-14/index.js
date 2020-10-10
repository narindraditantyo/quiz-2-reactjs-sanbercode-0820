// soal 14
const volumeBalok = (...balok) => {
    let volumeResult = 1;

    for(let i of balok) {
        volumeResult *= i;
    }

    console.log(`Volume balok yang memiliki panjang ${balok[0]}cm, lebar ${balok[1]}cm, dan tinggi ${balok[2]}cm adalah ${volumeResult}cm3`);
}

const volumeKubus = (...sisi) => {
    let volumeResult = 1;

    for(let i of sisi) {
        volumeResult *= i;
    }

    console.log(`Volume kubus yang memiliki sisi masing-masing ${sisi[0]}cm adalah ${volumeResult}cm3`);
}

volumeBalok(3, 4, 5);
volumeKubus(5, 5, 5);