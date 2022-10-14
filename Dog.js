// Create the Dog class here
import dogs from "./data.js";

class Dog {
  constructor(data) {
    Object.assign(this, data);
    this.name = data.name;
    this.avatar = data.avatar;
    this.age = data.age;
    this.bio = data.bio;
    this.hasBeenSwiped = data.hasBeenSwiped;
    this.hasBeenLiked = data.hasBeenLiked;
  }
}

export let dogProfiles = dogs.map((dog) => {
  return new Dog(dog);
});
