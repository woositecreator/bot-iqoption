import schedule from 'node-schedule';

class Storage {
    constructor() {
        this.martinGales = [];
        
        this.stopWin = 1222260;
        this.stopLosss = 122260;
        
        
        this.lossCount = 0;
        this.winCount = 0;
        
        this.winsValue = 0;
        this.losssValue = 0;
    }
    getStorage() {
        return {
            winsValue: this.winsValue,
            losssValue: this.losssValue,
            lossCount: this.lossCount,
            winCount: this.winCount,
            martinGales: this.martinGales,
            stopWin: this.stopWin,
            stopLoss: this.stopLoss
        }
    }

    addWinCount(value) {
        this.winCount++;
    }

    addLossCount(value) {
        this.lossCount++;
    }

    addWinValue(value) {
        this.addWinCount();
        this.winsValue += value;
    }

    addLossValue(value) {
        this.addLossCount();
        this.losssValue += value;
    }

    setMartinGales(nmartinGales) {
        this.martinGales = [ ...nmartinGales ];
    }

    setStopWin(value) {
        this.stopWin = value;
    }

    setStopLoss(value) {
        this.stopLoss = value;
    }

    stopLossStoped() {
        console.log('STOPLOSS');
        Object.keys(schedule.scheduledJobs).forEach((key) => {
            schedule.scheduledJobs[key].cancel();
        })
    }

    stopGain() {
        console.log('STOPGAIN');
        Object.keys(schedule.scheduledJobs).forEach((key) => {
            schedule.scheduledJobs[key].cancel();
        })
    }
}

export default new Storage();