
// Liskov Substitution Principle Violation

class Duck {

    fly(): string {
        return 'fly';
    }

    swim(): string {
        return 'swim';
    }

    cuack(): string {
        return 'cuack';
    }
}

class RubberDuck extends Duck {

    fly(): string {
        throw new Error('Not implemented');
    }

    swim(): string {
        return 'Swim';
    }

    cuack(): string {
        return 'Cuack';
    }
}

class DuckProcesser {

    makeDucksFly(ducks: Duck[]): void {

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

interface IFly {

    fly(): string;
}

interface ISwim {

    swim(): string;
}

interface ICuack {

    cuack(): string;
}


class Duck implements IFly, ISwim, ICuack {

    fly(): string {
        return 'fly';
    }

    swim(): string {
        return 'swim';
    }

    cuack(): string {
        return 'cuack';
    }
}

class RubberDuck implements IFly, ISwim {

    swim(): string {
        return 'swim';
    }

    cuack(): string {
        return 'cuack';
    }
}

class DuckProcesser {

    makeDucksFly(ducks: Duck[]): void {

        for(let duck of ducks) {
            console.log(duck.fly());
        }
    }
}
