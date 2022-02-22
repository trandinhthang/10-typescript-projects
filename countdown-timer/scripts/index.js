var CountDown = /** @class */ (function () {
    function CountDown() {
        this.newYear = '1 Jan 2023';
        this.newYearDate = new Date(this.newYear).getTime();
        this.currentDate = new Date().getTime();
        this.diffDate = this.newYearDate - this.currentDate;
        this.toSecond();
        this.calculateTime();
    }
    CountDown.prototype.toSecond = function () {
        this.s = 1000;
        this.m = this.s * 60;
        this.h = this.m * 60;
        this.d = this.h * 24;
    };
    CountDown.prototype.calculateTime = function () {
        this.day = Math.floor(this.diffDate / this.d);
        this.hour = Math.floor((this.diffDate % this.d) / this.h);
        this.minute = Math.floor((this.diffDate % this.h) / this.m);
        this.second = Math.floor((this.diffDate % this.m) / this.s);
    };
    CountDown.prototype.get = function () {
        return {
            day: this.day,
            hour: this.hour,
            minute: this.minute,
            second: this.second
        };
    };
    return CountDown;
}());
function getElements() {
    return {
        dayEl: document.querySelector('.days'),
        hourEl: document.querySelector('.hours'),
        minuteEl: document.querySelector('.minutes'),
        secondEl: document.querySelector('.seconds')
    };
}
setInterval(function () {
    var countDown = new CountDown();
    var _a = getElements(), dayEl = _a.dayEl, hourEl = _a.hourEl, minuteEl = _a.minuteEl, secondEl = _a.secondEl;
    dayEl.innerText = String(countDown.get().day);
    hourEl.innerText = String(countDown.get().hour);
    minuteEl.innerText = String(countDown.get().minute);
    secondEl.innerText = String(countDown.get().second);
}, 1000);
