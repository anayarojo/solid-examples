
// Interface Segregation Principle Violation

interface IWorkable {

    canCode(): boolean;
    code(): string;
    test(): string;
}

class Programmer implements IWorkable {

    canCode(): boolean {
        return true;
    }

    code(): string {
        return 'Coding';
    }

    test(): string {
        return 'Testing in localhost';
    }
}

class Tester implements IWorkable {

    canCode(): boolean {
        return false;
    }

    code(): string {
        throw new Error('Opps! I can not code');
    }

    test(): string {
        return 'Testing in test server';
    }
}

class ProjectManagement {

    processCode(member: IWorkable): void {

        if (member.canCode()) {
            member.code();
        }
    }
}

// Refactored

interface ICodeable {

    code(): string;
}

interface ITestable {

    test(): string;
}

class Programmer implements ICodeable, ITestable {

    code(): string {
        return 'Coding';
    }

    test(): string {
        return 'Testing in localhost';
    }
}

class Tester implements ITestable {

    test(): string {
        return 'Testing in test server';
    }
}

class ProjectManagement {

    processCode(member: ICodeable): void {
        member.code();
    }
}
