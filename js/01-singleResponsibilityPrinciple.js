
// Single Responsibility Principle Violation

class Report {

    getTitle() {
        return 'Report Title';
    }

    getDate() {
        return '2016-04-21';
    }

    getContents() {
        return {
            title: this.getTitle(),
            date: this.getDate()
        };
    }

    formatJson() {
        return JSON.stringify(this.getContents());
    }
}

// Refactored

class Report {

    getTitle() {
        return 'Report Title';
    }

    getDate() {
        return '2016-04-21';
    }

    getContents() {
        return {
            title: this.getTitle(),
            date: this.getDate()
        };
    }
}

class JsonReportFormatter {

    format(report) {
        return JSON.stringify(report.getContents());
    }
}
