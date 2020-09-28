
// Single Responsibility Principle Violation

class Report {

    getTitle(): string {
        return 'Report Title';
    }

    getDate(): string {
        return '2016-04-21';
    }

    getContents(): object {
        return {
            title: this.getTitle(),
            date: this.getDate()
        };
    }

    formatJson(): string {
        return JSON.stringify(this.getContents());
    }
}

// Refactored

class Report {

    getTitle(): string {
        return 'Report Title';
    }

    getDate(): string {
        return '2016-04-21';
    }

    getContents(): object {
        return {
            title: this.getTitle(),
            date: this.getDate()
        };
    }
}

interface IReportFormattable {

    format(report: Report): any {
        return JSON.stringify(this.getContents());
    }
}

class JsonReportFormatter implements IReportFormattable {

    format(report: Report): string {
        return JSON.stringify(report.getContents());
    }
}
