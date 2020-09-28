
// Liskov Substitution Principle Violation

class Duck {

    fly() {
        return 'fly';
    }

    swim() {
        return 'swim';
    }

    cuack() {
        return 'cuack';
    }
}

class RubberDuck {

    fly() {
        throw new Error('Not implemented');
    }

    swim() {
        return 'Swim';
    }

    cuack() {
        return 'Cuack';
    }
}

class DuckProcesser {

    makeDucksFly(ducks) {

        try {

            for(let duck of ducks) {
                console.log(duck.fly());
            }

        } catch (err) {
            console.log(err);
        }

    }
}

// Refactored

class Duck {

    fly() {
        return 'fly';
    }

    swim() {
        return 'swim';
    }

    cuack() {
        return 'cuack';
    }
}

class RubberDuck {

    swim() {
        return 'swim';
    }

    cuack() {
        return 'cuack';
    }
}

class DuckProcesser {

    makeDucksFly(ducks) {

        for(let duck of ducks) {
            console.log(duck.fly());
        }
    }
}
