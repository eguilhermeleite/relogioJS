class Clock{
    
    constructor(){
        this._clock = document.querySelector("#display");
        this._dateNow =  document.querySelector("#displayDate")
        this.showHour();
        this.update();
    }

    get hourDate(){
        return new Date();
    }

    showHour(){
        this._clock.innerHTML = this.hourDate.toLocaleTimeString("pt-BR");
        this._dateNow.innerHTML = this.hourDate.toLocaleDateString();
    }

    update(){
        setInterval(() => {
            this.showHour();
        }, 1000);
    }
}