let football = {
    aty: "Eldos",
    tegi: "Kurator",
    zhasy: 21,
    golSany: 8,
    oinaganKomandalar: ["Sadrlar", "Yerkeasyl", "KeshYou"],
    football_goly: function(){
        return this.golSany + 2
    },
    aty_tegi: function(){
        return this.aty + this.tegi
    },
    qazirgi_kluby: function(){
        return this.oinaganKomandalar[2]
    }
};

console.log(`Footballshynyn aty: ${football.aty_tegi()}
    Qazirgi kluby: ${football.qazirgi_kluby()}
    Gol sany: ${football.football_goly()}`);