
// Dependency Inversion Principle Violation

class Mailer {

}

class SendWelcomeMessage {

    private mailer: Mailer;

    constructor(mailer: Mailer) {
        this.mailer = mailer;
    }
}

// Refactored

interface IMailer {

    send(): void;
}

class SmtpMailer implements IMailer {

    send(): void {}
}

class SendGridMailer implements IMailer {
    send(): void {}
}

class SendWelcomeMessage {

    private mailer: IMailer;

    constructor(mailer: IMailer) {
        this.mailer = mailer;
    }
}
