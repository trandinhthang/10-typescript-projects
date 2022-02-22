class CountDown {
  private newYear: string = '1 Jan 2023';
  private newYearDate: number;
  private currentDate: number;
  private diffDate: number;
  private s: number;
  private m: number;
  private h: number;
  private d: number;
  private second: number;
  private minute: number;
  private hour: number;
  private day: number;

  constructor() {
    this.newYearDate = new Date(this.newYear).getTime();
    this.currentDate = new Date().getTime();
    this.diffDate = this.newYearDate - this.currentDate;
    this.toSecond();
    this.calculateTime();
  }

  private toSecond() {
    this.s = 1000;
    this.m = this.s * 60;
    this.h = this.m * 60;
    this.d = this.h * 24;
  }

  private calculateTime() {
    this.day = Math.floor(this.diffDate / this.d);
    this.hour = Math.floor((this.diffDate % this.d) / this.h);
    this.minute = Math.floor((this.diffDate % this.h) / this.m);
    this.second = Math.floor((this.diffDate % this.m) / this.s);
  }

  public get() {
    return {
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
    };
  }
}

function getElements() {
  return {
    dayEl: document.querySelector('.days') as HTMLElement,
    hourEl: document.querySelector('.hours') as HTMLElement,
    minuteEl: document.querySelector('.minutes') as HTMLElement,
    secondEl: document.querySelector('.seconds') as HTMLElement,
  };
}

setInterval(() => {
  const countDown = new CountDown();
  const { dayEl, hourEl, minuteEl, secondEl } = getElements();

  dayEl.innerText = String(countDown.get().day);
  hourEl.innerText = String(countDown.get().hour);
  minuteEl.innerText = String(countDown.get().minute);
  secondEl.innerText = String(countDown.get().second);
}, 1000);
