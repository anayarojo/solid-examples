
// Open Closed Principle Violation

class Programmer
{
    public string Code()
    {
        return "Coding";
    }
}

class Tester
{
    public string Test()
    {
        return "testing";
    }
}

class ProjectManagement
{
    public string Process(object member)
    {
        if (typeof(member) == Programmer) {

            return (member as Programmer).Code();

        } else if (typeof(member) == Tester) {

            return (member as Tester).Test();
        };

        throw new System.Exception("Invalid input member");
    }
}

// Refactored

interface IWorkable
{
    Work();
}

class Programmer : IWorkable
{
    public Work()
    {
        return "Coding";
    }
}

class Tester : IWorkable
{
    public Work()
    {
        return "Testing";
    }
}

class ProjectManagement
{
    public string Process(IWorkable member)
    {
        return member.Work();
    }
}
