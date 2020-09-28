<?php

// Liskov Substitution Principle Violation

class Duck {

    public function fly() {}

    public function swim() {}

    public function cuack() {}
}

class RubberDuck extends Duck {

    public function fly() {
        throw new Exception('Not implemented');
    }

    public function swim() {
        echo 'Swim';
    }

    public function cuack() {
        echo 'Cuack';
    }
}

class DuckProcesser {

    public function makeDuckFly(Duck $duck) {

        try {

            $duck.fly();

        } catch (Exception $e) {

            echo 'RubberDuck cant fly';
        }

    }
}

// Refactored

interface IFly {

    public function fly();
}

interface ISwim {

    public function swim();
}

interface ICuack {

    public function cuack();
}


class Duck implements IFly, ISwim, ICuack {

    public function fly() {}

    public function swim() {}

    public function cuack() {}
}

class RubberDuck implements IFly, ISwim {

    public function swim() {
        echo 'Swim';
    }

    public function cuack() {
        echo 'Cuack';
    }
}

class DuckProcesser {

    public function makeDuckFly(IFly $duck) {

        $duck.fly();
    }
}

