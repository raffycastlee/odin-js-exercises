const findTheOldest = function(people) {
  const CURRENT_YEAR = 2024;
  return people.sort((a,b) => 
    ((b.yearOfDeath ? b.yearOfDeath : CURRENT_YEAR)-b.yearOfBirth)-((a.yearOfDeath ? a.yearOfDeath : CURRENT_YEAR)-a.yearOfBirth)
  )[0];
};

// Do not edit below this line
module.exports = findTheOldest;
