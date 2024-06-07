function ksiazki(tytul, rok, imie, nazwisko, ilwyp){
    this.tytul = tytul
    this.rok=rok
    this.imie=imie
    this.nazwisko=nazwisko
    this.ilwyp=ilwyp
    this.print=function(){
        return this.imie + " " + this.nazwisko
    }
    this.zwieksz=function(a){
        this.ilwyp=ilwyp+a
    }
    this.zmniejsz=function(a){
        this.ilwyp=ilwyp-a
    }
}

let a = new ksiazki("t1", 1, "i1", "n1", 3)
let b = new ksiazki("t2", 2, "i2", "n2", 2)
let c = new ksiazki("t3", 3, "i3", "n3", 1)
let d = new ksiazki("t4", 4, "i4", "n4", 6)

let tab = [a, b, c, d]

for (let i=0; i<tab.length;i++){
    if(tab[i].rok==2){
        console.log(tab[i].tytul + " " + tab[i].imie)
    }
}
allwyp = 0
for (let i=0; i<tab.length;i++){
    allwyp=allwyp+tab[i].ilwyp
}
console.log(allwyp)