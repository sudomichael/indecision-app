const add = (a, b) => a + b;

console.log(add(55, 1))

const user = {
    name: 'Mike',
    cities: ['Cape Town', 'DC', 'Philadelphia'],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })
    }
};
user.printPlacesLived();