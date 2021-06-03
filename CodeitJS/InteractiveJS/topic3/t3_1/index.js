//Factory function -> class 키워드로 변경 
function makeCar(color, speed) {
    const car = {
      color,
      speed,
      run() {
        console.log(`Runs at ${this.speed}`);
      },
    };
    return car;
  }
  
  const car1 = makeCar('blue', '100km/h');
  
    car1.run();


class makeCar{
    constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }
  run(speed){
    console.log(`Runs at ${this.speed}`);
  }
}

const car1 = new makeCar('blue', '100km/h');

car1.run();