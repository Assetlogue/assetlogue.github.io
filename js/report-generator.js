(function() {
    var data = json;
    var root = document.getElementById("report-data");

    if (data[0].draft) {
        var htmlElement = document.documentElement;
        htmlElement.classList.add("draft");
    }

    function reportHeader() {
        var header = document.createElement("header"),
            reportId = data[0].reportId,
            metadata = data[0].metadata,
            logo = data[0].logo,
            output = "";

        for (i in metadata) {
            var value = "";
            
            if (typeof metadata[i] === "object") {
                var startDate = metadata[i].start.date,
                    startTime = metadata[i].start.time,
                    finishDate = metadata[i].finish.date,
                    finishTime = metadata[i].finish.time;
            
                value += 
                    "<div class='flex'>" + 
                        "<span class='dateTime flex fdc'>" +
                            startDate +
                            "<sub>" + startTime + "</sub>" +
                        "</span>" +
                        "<div class='dateTimeSeparator'>-</div>" +
                        "<span class='dateTime flex fdc'>" +
                            finishDate +
                            "<sub>" + finishTime + "</sub>" +
                        "</span>" +
                    "</div>";
            } else {
                value += "<div>" + metadata[i] + "</div>";
            }

            output += 
                "<div>" +
                    "<h6>" + i + "</h6>" +
                    value +
                "</div>";
        }
        
        header.innerHTML = 
            "<div class='topbar flex'>" +
                "<span class='fgrow'>Created with <a href='#'>Assetlogue</a></span>" +
                "<a href='#'>Log in</a>" +
            "</div>" +
            "<div class='header flex aic'>" +
                "<div class='header-left'>" +
                    "<h1 class='flex aic'>" + reportId + "<span class='draft-chip'>DRAFT</span></h1>" +
                    "<div class='report-details flex fwrap'>" + output + "</div>" +
                    "<div class='alert aic'><strong>Draft!</strong>&nbsp;The information contained herein is subject to change until published.</div>" +
                "</div>" +
                "<div class='header-right flex jcc'>" +
                    "<img src='" + logo + "' alt='Cleanaway' />" +
                "</div>" +
            "</div>";

        root.appendChild(header);
    }

    function reportBody() {
        var main = document.createElement("main");

        for (var i in data) {
            if(data[i].entries) {
                main.appendChild(section(data[i]));
            }
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
                title = data.entries[i].title || "",
                value = data.entries[i].value || "",
                unit = data.entries[i].unit || "",
                options = data.entries[i].options || "";
                
            if (type === "map") {
                var coordinates = data.entries[i].value.geometry.coordinates,
                    elevation = data.entries[i].value.geometry.elevation,
                    address = data.entries[i].value.address,
                    notes = data.entries[i].value.notes;
                
                entries += 
                    "<div class='flex'>" + 
                        "<div class='map'>" + "some map url" + "</div>" + 
                        "<div class='geo-details flex fdc'>" + 
                            "<div class='flex jcsb'>" + 
                                "<div class='fgrow'>" + 
                                    "<h6>Latitude</h6>" + 
                                    "<p>" + coordinates[1] + "</p>" + 
                                "</div>" + 
                                "<div class='fgrow'>" + 
                                    "<h6>Longitude</h6>" + 
                                    "<p>" + coordinates[0] + "</p>" + 
                                "</div>" + 
                                "<div class='fgrow'>" + 
                                    "<h6>Elevation</h6>" + 
                                    "<p>" + elevation + "</p>" + 
                                "</div>" + 
                            "</div>" + 
                            "<div>" + 
                                "<h6>Street Address</h6>" + 
                                "<p>" + address + "</p>" + 
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
                        "<div class='alert alert-invert flex aic'>" + 
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
                    var title = items.entries[i].title || "",
                        value = items.entries[i].value || "",
                        unit = items.entries[i].unit || "";

                    sectionOutput += 
                        "<div>" +
                            "<h6>" + title + "</h6>" +
                            "<p>" + value + unit + "</p>" +
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
                var fieldOptions = optionsLoop(options);

                entries += 
                    "<div>" + 
                        "<h6>" + title + "</h6>" + 
                        "<p>" + value + unit + "</p>" + 
                        fieldOptions +
                    "</div>";
            }
        }
        
        section.innerHTML = 
            "<h2 class='flex aic'>" + 
                sectionHeading + 
                "<span class='alert iflex aic'>Draft information</span>" + 
            "</h2>" + 
            container + entries;

        return section;
    }

    function optionsLoop(arr) {
        var output = "";

        for (i in arr) {
            if (arr[i].length) {
                var item = arr[i] || "";

                for (i in item) {
                    output += "<p>" + item[i].value + "</p>";
                }
            }
            
        }

        return output;
    }

    reportHeader();
    reportBody();
})();
