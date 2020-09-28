
// Open Closed Principle Violation

class Programmer {

    code(): string {
        return 'Coding';
    }
}

class Tester {

    test(): string {
        return 'testing';
    }
}

class ProjectManagement {

    Process(member: object): string {

        if (member instanceof Programmer) {

            return (member as Programmer).code();

        } else if (member instanceof Tester) {

            return (member as Tester).test();
        }

        throw new Error('Invalid input member');
    }
}

// Refactored

interface IWorkable {

    work(): string ;
}

class Programmer implements IWorkable {

    work(): string {
        return 'Coding';
    }
}

class Tester implements IWorkable {

    work(): string {
        return 'Testing';
    }
}

class ProjectManagement {

    process(member: IWorkable): string {
        return member.work();
    }
}
