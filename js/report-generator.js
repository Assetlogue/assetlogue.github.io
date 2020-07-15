(function() {
    var data = json;
    var root = document.getElementById("report-data");

    function reportHeader() {
        var header = document.createElement("header");
        
        header.innerHTML = 
            "<div class='topbar flex'>" +
                "<span class='fgrow'>Created with <a href='#'>Assetlogue</a></span>" +
                "<a href='#'>Log in</a>" +
            "</div>" +
            "<div class='header flex aic'>" +
                "<div class='header-left'>" +
                    "<h1>Report ID</h1>" +
                    "<div class='report-details flex fwrap'>" +
                        "<div>" +
                            "<h6>Asset ID</h6>" +
                            "<div>400000000008</div>" +
                        "</div>" +
                        "<div>" +
                            "<h6>Asset ID</h6>" +
                            "<div>400000000008</div>" +
                        "</div>" +
                        "<div>" +
                            "<h6>Asset ID</h6>" +
                            "<div>400000000008</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class='header-right flex jcc'>" +
                    "<img src='./images/cleanaway-logo.png' alt='Cleanaway' />" +
                "</div>" +
            "</div>";

        root.appendChild(header);
    }

    function reportBody() {
        var main = document.createElement("main");

        for (var i in data) {
            main.appendChild(section(data[i]));
        }

        root.appendChild(main);
    }

    function section(data) {
        var section = document.createElement("section"),
            sectionHeading = data.title,
            container = data.entries.length > 1 ? "<div class='columns flex fwrap'>" : "<div>",
            entries = "";

        for (var i in data.entries) {
            var type = data.entries[i].type,
                title = data.entries[i].title,
                value = data.entries[i].value;

            if (type === "map") {
                var coordinates = data.entries[i].value.geometry.coordinates,
                    notes = data.entries[i].value.notes;
                
                entries += 
                "<div class='flex'>" + 
                    "<div class='map'>" + "some map url" + "</div>" + 
                    "<div class='geo-details flex fdc'>" + 
                        "<div class='flex jcsb'>" + 
                            "<div class='fgrow'>" + 
                                "<h6>Latitude</h6>" + 
                                "<p>" + coordinates[0] + "</p>" + 
                            "</div>" + 
                            "<div class='fgrow'>" + 
                                "<h6>Longitude</h6>" + 
                                "<p>" + coordinates[1] + "</p>" + 
                            "</div>" + 
                            "<div class='fgrow'>" + 
                                "<h6>Elevation</h6>" + 
                                "<p></p>" + 
                            "</div>" + 
                        "</div>" + 
                        "<div>" + 
                            "<h6>Street Address</h6>" + 
                            "<p></p>" + 
                        "</div>" + 
                        "<div>" + 
                            "<h6>Notes</h6>" + 
                            "<p>" + notes + "</p>" + 
                        "</div>" + 
                    "</div>" +
                "</div>";
            }

            else if (type === "gallery") {
                var images = "";
                
                for (var i in value) {    
                    images += 
                        "<div>" + 
                            "<img src='" + value[i].url + "' title='" + value[i].title + "' alt='" + value[i].description + "' />" +
                        "</div>"; 
                }

                entries += 
                    "<div class='flex fdc'>" + 
                        "<div class='alert flex aic'>" + 
                            "<strong>Info!</strong>&nbsp;Full size images will be displayed last on printed reports" +
                        "</div>" + 
                        "<div class='images flex fwrap'>" + images + "</div>" +
                    "</div>";
            }

            else if (type === "section") {
                var items = data.entries[i],
                    sectionTitle = items.title,
                    sectionOutput = "";
                
                for (i in items.entries) {                   
                    sectionOutput += 
                        "<div>" +
                            "<h6>" + items.entries[i].title + "</h6>" +
                            "<p>" + items.entries[i].value + "</p>" +
                        "</div>";
                }

                entries += 
                    "<div>" +
                        "<h3>" + sectionTitle + "</h3>" +
                        "<div class='flex jcsb'>" +
                            sectionOutput +
                        "</div>" +
                    "</div>";
            }

            else {
                entries += 
                    "<div>" + 
                        "<h6>" + title + "</h6>" + 
                        "<p>" + value + "</p>" + 
                    "</div>";
            }
        }
        
        section.innerHTML = "<h2>" + sectionHeading + "</h2>" + container + entries;

        return section;
    }

    reportHeader();
    reportBody();
})();
