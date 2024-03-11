

// Task 1
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getPg(arr) {
      const newArr = [];
  
      arr.forEach((element) => {
        if (element == this.title && this.rating == "PG") {
          newArr.push(this.title);
        }
      });
  
      if (newArr.length <= 0) {
        return "No PG movies";
      } else return newArr;
    }
  }
  Movie.prototype.getDetails = function () {
    console.log(`
    Title: ${this.title}
    Studio: ${this.studio}
    Rating: ${this.rating}`);
  };
  
  const movie = new Movie("Casino Royale", "Eon Productions");
  movie.getDetails();
  console.log("Get PG ", movie.getPg(["Casino Royale", "Leo", "Sura"]));
  
  //  Task 2
  class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = parseFloat(radius);
      this.color = color;
    }
    getRadius() {
      return this.radius;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    getColor() {
      return this.color;
    }
    setColor(color) {
      this.color = color;
    }
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
    getArea() {
      let area = 3.14159 * Math.pow(this.radius, 2);
      return area.toFixed(2);
    }
    getCircumference() {
      let circumference = 2 * 3.14159 * this.radius;
      return circumference.toFixed(2);
    }
  }
  
  let circle = new Circle(2, "yellow");
  console.log(circle);
  
  console.log(circle.getRadius());
  console.log(circle.getColor());
  console.log(circle.getArea());
  console.log(circle.getCircumference());
  console.log(circle.toString());
  
  circle.setRadius(2);
  
  console.log(circle.getArea());
  console.log(circle.getCircumference());
  circle.setColor("green");
  console.log(circle.getColor());
  console.log(circle);
  
  // Task 3
  // Write a "person" class to hold all the details.
  
  class Person {
    constructor(name, gender, course, position) {
      this.name = name;
      this.gender = () => {
        if (gender.trim().length != 0) {
          return gender;
        } else return "prefer not to say";
      };
      this.course = course;
      this.position = position;
    }
  
    displayDetails() {
      console.log(`
      Name: ${this.name}
      Gender: ${this.gender()}
      Course: ${this.course}
      Position: ${this.position}`);
    }
  }
  
  const person = new Person("Cody", "", "FSD", "Student");
  person.displayDetails();
  
  // Task 4
  // write a class to calculate the Uber price.
  
  class UberPrice {
    constructor(pickupPlace, dropingPlace, distance, trip) {
      this.pickupPlace = pickupPlace;
      this.dropingPlace = dropingPlace;
      this.distance = distance;
      this.trip = () => {
        if (trip == "One way") {
          return 1;
        } else return 2;
      };
    }
    getPrice() {
      const price = this.distance * 50 * this.trip();
      return price;
    }
    displayDetails() {
      console.log(`
      Pickup Place: ${this.pickupPlace}
      Droping Place: ${this.dropingPlace}
      Distance: ${this.distance}
      trip: ${this.trip() == 1 ? "One way" : "Roundtrip"}
      Trip Price: ${this.getPrice()}`);
    }
  }
  
  const uberPrice = new UberPrice("Thiruchendur", "Pudur", 10, "One way");
  uberPrice.displayDetails();