class Lampadina{
    constructor() {
        this.acceso = false;
        this.clickCount = 0;

}
cambiaStato() {
    if (this.clickCount >= 10) {
        return "È rotta";
    }
    this.acceso = !this.acceso;
    this.clickCount++;
    return this.acceso ? "È accesa" : "È spenta";
}}
