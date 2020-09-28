
// Open Closed Principle Violation

class Programmer {

    code() {
        return 'Coding';
    }
}

class Tester {

    test() {
        return 'testing';
    }
}

class ProjectManagement {

    Process(member) {

        if (member instanceof Programmer) {

            return member.code();

        } else if (member instanceof Tester) {

            return member.test();
        }

        throw new Error('Invalid input member');
    }
}

// Refactored

class Programmer {

    work() {
        return 'Coding';
    }
}

class Tester {

    work() {
        return 'Testing';
    }
}

class ProjectManagement {

    process(member) {
        return member.work();
    }
}
