
// Single Responsibility Principle Violation

class Report
{
    public string GetTitle()
    {
        return "Report Title";
    }

    public string GetDate()
    {
        return "2016-04-21";
    }

    public object GetContents()
    {
        return new {
            Title = GetTitle(),
            Date = GetDate()
        };
    }

    public string FormatJson()
    {
        return JsonSerializer.Serialize(GetContents());
    }
}

// Refactored

class Report
{
    public string GetTitle()
    {
        return "Report Title";
    }

    public string GetDate()
    {
        return "2016-04-21";
    }

    public object GetContents()
    {
        return new {
            Title = GetTitle(),
            Date = GetDate()
        };
    }
}

interface ReportFormattable
{
    Format(Report report);
}

class JsonReportFormatter : ReportFormattable
{
    public Format(Report report)
    {
        return JsonSerializer.Serialize(GetContents());
    }
}
