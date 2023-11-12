import Triangle from './../src/js/triangle';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2, 4, 5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test('should correctly determine whether three lengths are not a triangle', () => {
    const notTriangle = new Triangle(3, 9, 22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  test('should correctly determine whether three lengths make a scalene triangle', () => {
    const scalTriangle = new Triangle(4, 5, 7)
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });

  test('should correctly determine whether three lengths make an isosceles triangle', () => {
    const isoscTriangle = new Triangle(5, 5, 7)
    expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
  });

  test('should correctly determine whether three lengths make an equilateral triangle', () => {
    const equiTriangle = new Triangle(5, 5, 5)
    expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  });

  test('should say if a triangle is big', () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.bigOrLittle()).toEqual('big');
  });

  test('should say if a triangle is little', () => {
    const triangle = new Triangle(2, 4, 1);
    expect(triangle.bigOrLittle()).toEqual('little');
  });
});
/* edgecases to consider:
    What happens if words or arrays are passed into the constructor?
    What happens if a number is passed into the constructor but it's in string format?
    What happens if negative numbers are passed in?
    Would it be better to pass in triangle lengths as arguments to the Triangle.prototype.checkType() method or should they be passed into the constructor as we do here?*/