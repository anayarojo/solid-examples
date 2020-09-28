
// Interface Segregation Principle Violation

class Programmer {

    canCode() {
        return true;
    }

    code() {
        return 'Coding';
    }

    test() {
        return 'Testing in localhost';
    }
}

class Tester {

    canCode() {
        return false;
    }

    code() {
        throw new Error('Opps! I can not code');
    }

    test() {
        return 'Testing in test server';
    }
}

class ProjectManagement {

    processCode(member) {

        if (member.canCode()) {
            member.code();
        }
    }
}

// Refactored

class Programmer {

    code() {
        return 'Coding';
    }

    test() {
        return 'Testing in localhost';
    }
}

class Tester {

    test() {
        return 'Testing in test server';
    }
}

class ProjectManagement {

    processCode(member) {
        member.code();
    }
}
