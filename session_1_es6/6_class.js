class Car{
    name;
    speed; 
    brand;
    color;
    constructor(name, speed, brand, color){
    this.name = name;
    this.speed = speed;
    this.brand = brand;
    this.color = color;
    }
    drive(){
        console.log(this.name + ' is driving at ' + this.speed + 'km/h');
    }
    paint = (newColor) => {
        console.log('Current color: ' + this.color + '. Changing to ' + newColor);
        this.color = newColor;
    }
}

const fadil = new Car('Fadil', 100, 'Vinfast', 'red');
fadil.drive();

fadil.paint('blue');