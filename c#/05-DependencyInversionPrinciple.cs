
// Dependency Inversion Principle Violation

class Mailer
{

}

class SendWelcomeMessage
{
    private Mailer mailer;

    public SendWelcomeMessage(Mailer mailer) {
        this.mailer = mailer;
    }
}

// Refactored

interface Mailer
{
    void Send();
}

class SmtpMailer : Mailer
{
    public void Send()
    {

    }
}

class SendGridMailer : Mailer
{
    public void Send()
    {

    }
}

class SendWelcomeMessage
{
    private Mailer mailer;

    public SendWelcomeMessage(Mailer mailer) {
        this.mailer = mailer;
    }
}
