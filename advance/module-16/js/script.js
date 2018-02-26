/*
Создать базовый класс Shape, который принимает значения цвета и координат x и y: color, initX, initY.
Создать методы класса Shape:
getColor() - возвращает значение цвета.
setColor(val) - получает и записывает новое значение цвета.
getCoords() - возвращает координаты x и y.
moveTo(newX, newY) - принимает 2 параметра, новые значения для x и y и записывает их.
Создать класс Rectangle который расширяет класс Shape, принимая значения цвета и начальных координат, как его родительский класс, и еще значение ширины и высоты сторон initWidth и initHeight:
Создать методы класса Rectangle:
setWidth(newWidth)и setHeight(newHeight) - получают ширину/высоту и записывают новые значения.
getDims() - метод который возвращает значения width и height.
draw() - метод который имитирует рисование прямоугольника используя методы Shape и Rectangle, выводя в консоль браузера следующей информации.
Создать класс Circle который расширяет класс Shape, принимая значения цвета и начальных координат, как его родительский класс, и еще значение радиуса initRadius:
Создать методы класса Circle:
getRadius() - возвращает текущее значение радиуса.
setRadius(val) - получает значение и присваивает его радиусу.
draw() - метод который имитирует рисование круга используя методы Shape и Circle, выводя в консоль браузера следующей информации.
*/
//базовый класс
class Shape {
	constructor(color, initX, initY) {
		this.color = color;
		this.initX = initX;
		this.initY = initY;
	}
	getColor() {
		return this.color;
	}
	setColor(val) {
		this.color = val;
	}
	getCoords() {
		return `x: ${this.initX}, y: ${this.initY}`;
	}
	moveTo(newX, newY) {
		this.initX = newX;
		this.initY = newY;
	}
}
//потомки класса Shape
class Rectangle extends Shape {
	constructor(color, initX, initY, initWidth, initHeight) {
		super(color, initX, initY);
		this.initWidth = initWidth;
		this.initHeight = initHeight;
	}
	setWidth(newWidth) {
		this.initWidth = newWidth;
	}
	setHeight(newHeight) {
		this.initHeight = newHeight;
	}
	getDims() {
		return `width: ${this.initWidth}
  height: ${this.initHeight}`;
	}
	draw() {
		console.log(`Drawing a Rectangle at:
  (${this.getCoords()})
With dimensions:
  ${this.getDims()}
Filled with color: ${this.getColor()}`);
	}
}

class Circle extends Shape {
	constructor(color, initX, initY, initRadius) {
		super(color, initX, initY);
		this.initRadius = initRadius;
	}
	getRadius() {
		return this.initRadius;
	}
	setRadius(val) {
		this.initRadius = val;
	}
	draw() {
		console.log(`Drawing a Circle at:
  (${this.getCoords()})
With dimensions:
  radius: ${this.getRadius()}
Filled with color: ${this.getColor()}`);
	}
}

const rect = new Rectangle("#009688", 10, 10, 100, 100);
rect.draw();

const circ = new Circle("#FF5722", 50, 50, 250);
circ.draw();