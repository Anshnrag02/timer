class timer{
    constructor(durationInput, startButton, PauseButton,callbacks){
        this.startButton=startButton;
        this.PauseButton=PauseButton;
        this.durationInput=durationInput;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startButton.addEventListener('click',this.start);
        this.PauseButton.addEventListener('click',this.pause);
    };

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval=setInterval(this.tick,50);
    };

    tick = () => {
        if(this.timeRemaining<=0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.timeRemaining = this.timeRemaining - .05;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    };



    pause = () => {
        clearInterval(this.interval);
        if(this.onComplete){
            this.onComplete();
        }
    };

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
};