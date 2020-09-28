
// Dependency Inversion Principle Violation

class Mailer {

}

class SendWelcomeMessage {

    constructor(mailer) {
        this.mailer = mailer;
    }
}

// Refactored

class SmtpMailer {

    send() {}
}

class SendGridMailer {
    send() {}
}

class SendWelcomeMessage {

    constructor(mailer) {
        this.mailer = mailer;
    }
}
