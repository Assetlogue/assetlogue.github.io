(function() {
    var data = json;
    var root = document.getElementById("report-data");

    function reportHeader() {
        var header = document.createElement("header");
        
        header.innerHTML = 
            "<div class='topbar flex'>" +
                "<span>Created with <a href='#'>Assetlogue</a></span>" +
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
                    "<img src='./cleanaway-logo.png' alt='Cleanaway' />" +
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
        var section = document.createElement("section");
        var sectionHeading = data.title;
        var htmlOutput = "";
        var entries = "";

        for (var i in data.entries) {
            var type = data.entries[i].type,
                title = data.entries[i].title,
                value = data.entries[i].value,
                options = data.entries[i].options;

            if (type === "map") {
                var coordinates = data.entries[i].value.geometry.coordinates,
                notes = data.entries[i].value.notes
                
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

            if(type !== "map"){
                entries += "<div>" + "<h6>" + data.entries[i].title + "</h6>" + "<p>" + data.entries[i].value + "</p>" + "</div>";
            }
            
        }

        htmlOutput = "<h2>" + sectionHeading + "</h2>" + "<div>" + entries + "</div>";
        section.innerHTML = htmlOutput;

        return section;
    }

    reportHeader();
    reportBody();
})();
