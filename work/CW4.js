"use strict";
class Point {
  constructor(x=0, y=0) {
    this.x = x
    this.y = y
  }
  sumSqr() {
    let x = this.x, y = this.y
    return x*x + y*y
  }
  get length() {
    return Math.sqrt(this.sumSqr())
  }
  coord() {
    return "("+this.x+", "+this.y+")"
  }
  toString() {
    let className = this.constructor.name
    return "[object "+ className +"] "+this.coord()
  }
}
class Point3D extends Point {
  constructor(x, y, z=0) {
    super(x, y)
    this.z = z
  }
  sumSqr() {
    let z = this.z
    return super.sumSqr()+z*z
  }
  coord() {
    return "("+this.x+", "+this.y+", "+this.z+")"
  }
}
class Distance {
  constructor(km=100) {
    this.km = km
  }
  get miles() {
    return Math.round(this.km * 1.60934)
  }
  set miles(m) {
    this.km = Math.round(m/1.60934)
  }
  toString() {
    return this.km+" km = "+this.miles+" miles";
  }
} 	
class CW4 extends Menu {
  constructor() {
    super()
    this.c = new Course("BLM305","9-12","24.10.2018")
    this.b = new Course("BLM308","13-16","26.10.2018")
    this.s = new Student(123412998, "Ali Özdemir", 3.45)
    this.s.addCourses(this.c, this.b)
    this.p = new Point(30, 40)
    this.q = new Point3D(3, 4, 12)
    this.d = new Distance()
  }
}

