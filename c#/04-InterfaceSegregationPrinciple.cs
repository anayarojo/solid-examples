
// Interface Segregation Principle Violation

interface IWorkable
{
    bool CanCode();
    string Code();
    string Test();
}

class Programmer : IWorkable
{
    public bool CanCode()
    {
        return true;
    }

    public string Code()
    {
        return "Coding";
    }

    public string Test()
    {
        return "Testing in localhost";
    }
}

class Tester : IWorkable
{
    public bool CanCode()
    {
        return false;
    }

    public string Code()
    {
         throw new Exception("Opps! I can not code");
    }

    public string Test()
    {
        return "Testing in test server";
    }
}

class ProjectManagement
{
    public void ProcessCode(IWorkable member)
    {
        if (member.CanCode()) {
            member.Code();
        }
    }
}

// Refactored

interface ICodeable
{
    string Code();
}

interface ITestable
{
    string Test();
}

class Programmer : ICodeable, ITestable
{
    public string Code()
    {
        return "Coding";
    }

    public string Test()
    {
        return "Testing in localhost";
    }
}

class Tester : ITestable
{
    public string Test()
    {
        return "Testing in test server";
    }
}

class ProjectManagement
{
    public void ProcessCode(ICodeable member)
    {
        member.Code();
    }
}
