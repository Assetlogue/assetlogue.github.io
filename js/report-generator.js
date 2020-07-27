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
            metadata = data[0].properties,
            // account = data[0].account,
            // logo = data[0].logo,
            output = "";

        // for (var i in metadata) {
        //     var value = "";
            
        //     if (typeof metadata[i] === "object") {
        //         var startDate = metadata[i].start.date,
        //             startTime = metadata[i].start.time,
        //             finishDate = metadata[i].finish.date,
        //             finishTime = metadata[i].finish.time;
            
        //         value += 
        //             "<div class='flex'>" + 
        //                 "<span class='dateTime flex fdc'>" +
        //                     startDate +
        //                     "<sub>" + startTime + "</sub>" +
        //                 "</span>" +
        //                 "<div class='dateTimeSeparator'>-</div>" +
        //                 "<span class='dateTime flex fdc'>" +
        //                     finishDate +
        //                     "<sub>" + finishTime + "</sub>" +
        //                 "</span>" +
        //             "</div>";
        //     } else {
        //         value += "<div>" + metadata[i] + "</div>";
        //     }

        //     output += 
        //         "<div>" +
        //             "<h6>" + i + "</h6>" +
        //             value +
        //         "</div>";
        // }

        // Hardcoded version variables
        var account = metadata.account;
        var logo = metadata.logo;
        var reportId = metadata.reportId;
        var assetId = metadata.assetId;
        var reportType = metadata.reportType;
        var workOrder = metadata.workId;
        var reportedBy = metadata.reportedBy;
        var startTime = new Date(metadata.startTime);
        var finishTime = new Date(metadata.finishTime);
        var description = metadata.reportDescription;

        function formatDate(date) {
            var day = date.toLocaleDateString("en-US", { day: "numeric" });
            var month = date.toLocaleDateString("en-US", { month: "short" });
            return month + " " + day;
        }

        function formatTime(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
        
        header.innerHTML = 
            "<div class='topbar fixed flex fdc'>" +
                "<div class='bg'>" +  
                    "<div class='flex aic max-width'>" +  
                        "<span class='fgrow'>Created with <a href='#'>Assetlogue</a></span>" +
                        "<a href='#'>Log in</a>" + "&nbsp;&nbsp;|&nbsp;&nbsp;" +
                        "<a href='#'>Share</a>" + "&nbsp;&nbsp;|&nbsp;&nbsp;" +
                        "<a href='#' class='btn-export iflex aic'>Export</a>" +
                    "</div>" +
                "</div>" +
                "<div class='bg-alert'>" + 
                    "<div class='alert flex aic max-width'>" + 
                        "<span><strong>Draft!</strong>&nbsp;The information contained herein is subject to change until published.</span>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='header'>" +
                "<div class='flex-sm fdrr-sm aic max-width'>" +
                    "<div class='header-right flex jcc-sm'>" +
                        "<img src='" + logo + "' alt='" + account + "' />" +
                    "</div>" +
                    "<div class='header-left'>" +
                        "<h1 class='flex aic'>" + reportId + "<span class='draft-chip'>DRAFT</span></h1>" +
                        // "<div class='report-details flex-sm fwrap'>" + output + "</div>" + // Original looped output
                        "<div class='report-details flex-sm fwrap'>" +
                            "<div>" +
                                "<h6>Asset ID</h6>" +
                                assetId +
                            "</div>" +
                            "<div>" +
                                "<h6>Report Type</h6>" +
                                reportType +
                            "</div>" +
                            "<div>" +
                                "<h6>Work Order</h6>" +
                                workOrder +
                            "</div>" +
                            "<div>" +
                                "<h6>Reported By</h6>" +
                                reportedBy +
                            "</div>" +
                            "<div>" +
                                "<h6>Start & Finish</h6>" +
                                "<div class='flex'>" + 
                                    "<span class='dateTime flex fdc'>" +
                                        formatDate(startTime) +
                                        "<sub>" + formatTime(startTime) + "</sub>" +
                                    "</span>" +
                                    "<div class='dateTimeSeparator'>-</div>" +
                                    "<span class='dateTime flex fdc'>" +
                                        formatDate(finishTime) +
                                        "<sub>" + formatTime(finishTime) + "</sub>" +
                                    "</span>" +
                                "</div>" +
                            "</div>" +
                            "<div>" +
                                "<h6>Description</h6>" +
                                description +
                            "</div>" +
                        "</div>" +
                        "<div class='alert'>" +
                            "<span><strong>Draft!</strong>&nbsp;The information contained herein is subject to change until published.</span>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>";

        root.appendChild(header);
    }

    function reportBody() {
        var main = document.createElement("main");

        for (var i in data) {
            if (data[i].entries) {
                main.appendChild(section(data[i]));
            }
        }

        root.appendChild(main);
    }

    function reportImages() {
        var footer = document.createElement("footer"),
            output = "";
        
        for (var i in data) {
            var entries = data[i].entries;

            for (var i in entries) { 
                if (entries[i].type === "gallery") {
                    var images = entries[i].value;

                    for(var i in images) {
                        output += 
                            "<figure class='report-image'>" +
                                "<div data-date='" + images[i].date + "'>" +
                                    "<img src='" + images[i].url + "' />" +
                                "</div>" +
                                "<figcaption>" + images[i].description + "</figcaption>" +
                            "</figure>";
                    }
                }
            }
        }

        footer.innerHTML = output;

        root.appendChild(footer);
    }

    function toQueryString(obj) {
        var parts = [];
        
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        
        return parts.join("&");
    }

    function section(data) {
        var section = document.createElement("section"),
            sectionHeading = data.title,
            container = data.entries.length > 1 ? "<div class='columns flex-sm fwrap'>" : "<div>",
            entries = "";

        for (var i in data.entries) {
            var type = data.entries[i].type,
                title = data.entries[i].title || "",
                value = data.entries[i].value || "",
                unit = data.entries[i].unit || "",
                options = data.entries[i].options || {};
  
            if (type === "map") {
                var coordinates = data.entries[i].value.geometry.coordinates,
                    elevation = data.entries[i].value.geometry.elevation,
                    address = data.entries[i].value.address,
                    notes = data.entries[i].value.notes;
                
                entries += 
                    "<div class='flex-sm fdrr-sm'>" + 
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
                        "<div class='map'>" + "some map url" + "</div>" + 
                    "</div>";
            }

            else if (type === "gallery") {
                var images = "";
                
                for (var i in value) {
                    images += 
                        "<a href='image.html?" + toQueryString(value[i]) + "'>" + 
                            "<img src='" + value[i].url + "' title='" + value[i].title + "' alt='" + value[i].description + "' />" +
                        "</a>"; 
                }

                entries += 
                    "<div class='flex fdc'>" + 
                        "<div class='alert alert-invert flex'>" + 
                            "<span><strong>Info!</strong>&nbsp;Full size images will be displayed last on printed reports</span>" +
                        "</div>" + 
                        "<div class='images flex fwrap'>" + images + "</div>" +
                    "</div>";
            }

            else if (type === "section") {
                var items = data.entries[i],
                    sectionTitle = items.title,
                    sectionOutput = "";
                
                for (var i in items.entries) {
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
                        "<div class='flex-sm jcsb'>" +
                            sectionOutput +
                        "</div>" +
                    "</div>";
            }

            else {
                var fieldOptions = optionsLoop(options);
                
                if (type === "check") {
                    var selectedOptions = "";
                    
                    for (var i in value) {
                        selectedOptions += "<li>" + value[i] + "</li>"
                    }

                    entries += 
                        "<div>" + 
                            "<h6>" + title + "</h6>" + 
                            "<ul>" + selectedOptions + "</ul>" +
                        "</div>";
                }
                
                else {
                    entries += 
                        "<div>" + 
                            "<h6>" + title + "</h6>" + 
                            "<p>" + value + unit + "</p>" + 
                            fieldOptions +
                        "</div>";
                }
            }
        }
        
        section.innerHTML = 
            "<h2 class='flex aic'>" + 
                sectionHeading + 
                "<span class='alert iflex aic'>Draft information</span>" + 
            "</h2>" + 
            container + entries;

        section.setAttribute("class", "max-width");

        return section;
    }

    function optionsLoop(arr) {
        var output = "";

        for (var i in arr) {
            if (arr[i].length) {
                var item = arr[i] || "";

                for (var i in item) {
                    output += "<p>" + item[i].value + "</p>";
                }
            }  
        }

        return output;
    }

    reportHeader();
    reportBody();
    reportImages();
})();
