var data = json;
var root = document.getElementById("report-data");

for (var i in data) {
    var obj = data[i];
    root.appendChild(section(obj));
}

function section(data) {
    var section = document.createElement("section");

    for (var i in data) {
        console.log(obj);
        var sectionHeading = data.title;
        // var entries = obj.entries;

        section.innerHTML = "<h2>" + sectionHeading + "</h2>";
    }

    return section;
}

function entry() {
    var entry = document.createElement("div");

    for (var i in data) {
        var sectionHeading = obj.title;
        // var entries = obj.entries;

        section.innerHTML = "<h2>" + sectionHeading + "</h2>";
    }

    return entry;
}
