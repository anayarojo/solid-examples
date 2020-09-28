
// Liskov Substitution Principle Violation

class Duck {

    public string Fly() {}

    public string Swim() {}

    public string Cuack() {}
}

class RubberDuck : Duck {

    public string Fly() {
        throw new Exception("Not implemented");
    }

    public string Swim() {
        return "Swim";
    }

    public string Cuack() {
        return "Cuack";
    }
}

class DuckProcesser {

    public void MakeDucksFly(Duck[] ducks) {

        try {

            foreach(Duck duck in ducks) {
                Console.WriteLine(duck.fly());
            }

        } catch (Exception err) {
            Console.WriteLine(err);
        }

    }
}

// Refactored

interface IFly {

    string Fly();
}

interface ISwim {

    string Swim();
}

interface ICuack {

    string Cuack();
}


class Duck : IFly, ISwim, ICuack {

    public string Fly() {}

    public string Swim() {}

    public string Cuack() {}
}

class RubberDuck : IFly, ISwim {

    public string Swim() {
        return "Swim";
    }

    public string Cuack() {
        return "Cuack";
    }
}

class DuckProcesser {

    public void MakeDucksFly(Duck[] ducks) {

        foreach(Duck duck in ducks) {
            Console.WriteLine(duck.fly());
        }

    }
}
