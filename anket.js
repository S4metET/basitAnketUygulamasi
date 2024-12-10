const sorular = [
    {
        soru: "Fransa'nın başkenti neresidir?",
        secenekler: ["Paris", "Londra", "Berlin", "Madrid"],
    },
    {
        soru: "2 + 2 kaçtır?",
        secenekler: ["3", "4", "5", "6"],
    },
    {
        soru: "Hangi programlama dili web'in dili olarak bilinir?",
        secenekler: ["Python", "C++", "JavaScript", "Java"],
    },
];
const kullaniciGiris = {};
for (let i = 0; i < sorular.length; i++) {
    const soru = sorular[i];
    console.log(`${i + 1}: ${soru.soru}`);

    for (let j = 0; j < soru.secenekler.length; j++) {
        console.log(`   ${j + 1}. ${soru.secenekler[j]}`);
    }

    let giris = parseInt(prompt(`Cevabını gir (1-${soru.secenekler.length}):`), 10);

    if (giris >= 1 && giris <= soru.secenekler.length) {
        kullaniciGiris[`soru${i + 1}`] = soru.secenekler[giris - 1];
    } else {
        i--;
        console.log("Geçersiz cevap girdin. Lütfen tekrar dene.");
    }
}
console.log("Kullanıcının Girişi:", kullaniciGiris);