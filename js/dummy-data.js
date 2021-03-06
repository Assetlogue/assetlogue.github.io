const json = [
    {
        type: "metadata",
        draft: true,
        properties: {
            workId: "8000000008",
            assetId: "4000000008",
            reportType: "Manhole Condition Assessment",
            reportId: "9001",
            reportDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            account: "Cleanaway",
            logo: "./images/cleanaway-logo.png",
            reportedBy: "Darth Vader",
            startTime: "2011-10-05T14:48:00.000Z",
            finishTime: "2011-10-05T14:48:00.000Z",
        },
    },
    {
        type: "section",
        title: "Geolocation",
        entries: [
            {
                type: "map",
                required: false,
                value: {
                    geometry: {
                        type: "Point",
                        coordinates: [153.334088, -28.020293],
                        elevation: "N/A",
                    },
                    address: "197 Ashgrove Ave, Ashgrove QLD, 4060",
                    notes: "Next to Township Drive (Unique Plaza), Burleigh Heads",
                },
            },
        ],
    },
    {
        type: "section",
        title: "Images",
        entries: [
            {
                type: "gallery",
                required: true,
                value: [
                    {
                        url: "../images/1000340_golden-gate-bridge-wallpapers-high-quality_1920x1200_h.jpg",
                        title: "Test Image",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vero. Vero inventore porro eveniet dolorum repellendus et doloremque voluptate earum aperiam nulla, quia aliquid magnam aut labore, nobis dignissimos eligendi iste! Odit sit ex, eveniet tenetur maxime saepe esse facilis in quidem ullam officiis error illum rem numquam hic laudantium!",
                        date: "2011-10-05T14:48:00.000Z",
                    },
                    {
                        url: "../images/ar-05.jpg",
                        title: "Test Image",
                        description: "Description of image",
                        date: "2011-10-05T14:48:00.000Z",
                    },
                    {
                        url: "../images/ar-09.jpg",
                        title: "Test Image",
                        description: "Description of image",
                        date: "2011-10-05T14:48:00.000Z",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        title: "Asset Identification",
        entries: [
            {
                type: "field",
                title: "Sort Field",
                value: "401662135",
            },
            {
                type: "field",
                title: "Sap Object Id",
            },
            {
                type: "field",
                title: "Reported Street Address",
                value: "197 Ashgrove Ave, Ashgrove QLD, 4060",
            },
            {
                type: "field",
                title: "Division",
                value: "2",
            },
        ],
    },
    {
        type: "section",
        title: "Asset Inspection Details ",
        entries: [
            {
                type: "radio",
                title: "Can this report be completed?",
                required: true,
                value: "No",
                options: {
                    Yes: [],
                    No: [
                        {
                            type: "radio",
                            required: true,
                            value: "Buried - see photos for location",
                            style: ["vertical"],
                            options: {
                                "Buried - see photos for location": [],
                                "No access to private propety": [],
                                "Unable to locate": [],
                                "Networking integrity issue": [],
                                "Lid Seized": [],
                                Other: [
                                    {
                                        type: "field",
                                        default: "Reason for non-completion",
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            {
                type: "radio",
                title: "Manhole Location",
                required: true,
                value: "Park",
                style: ["vertical"],
                options: {
                    Park: [],
                    Verge: [],
                    "Private Property": [],
                    "Industrial Property": [],
                    "Main Road": [],
                    "Light Road": [],
                    "Council Road": [],
                    Driveway: [],
                },
            },
            {
                type: "radio",
                title: "Trafficable Location",
                required: true,
                value: "Yes",
                options: {
                    Yes: [],
                    No: [],
                },
            },
            {
                type: "radio",
                title: "Machinery Accessibility",
                required: true,
                value: "Good",
                style: ["noRadio"],
                options: {
                    Good: [],
                    Poor: [],
                    Average: [],
                },
            },
            {
                type: "radio",
                title: "Raised Manhole Cover",
                required: true,
                value: "Yes",
                options: {
                    Yes: [],
                    No: [],
                },
            },
            {
                type: "radio",
                title: "MH Type",
                required: true,
                value: "Pre-cast",
                style: ["noRadio"],
                options: {
                    "Pre-cast": [],
                    "Cast in-situ": [],
                },
            },
            {
                type: "radio",
                title: "Receiving MH",
                required: true,
                value: "Yes",
                options: {
                    Yes: [],
                    No: [],
                },
            },
            {
                type: "radio",
                title: "Boltdown Lid",
                required: true,
                value: "Yes",
                options: {
                    Yes: [],
                    No: [],
                },
            },
            {
                type: "radio",
                title: "Bolts Missing",
                required: true,
                value: "Yes",
                options: {
                    Yes: [],
                    No: [],
                },
            },
            {
                type: "number",
                unit: "mm",
                title: "Neck Length",
            },
            {
                type: "number",
                unit: "mm",
                title: "Chamber Diameter",
            },
            {
                type: "number",
                unit: "mm",
                title: "Lid Diameter",
            },
            {
                type: "number",
                unit: "mm",
                title: "Depth to Invert",
            },
            {
                type: "radio",
                title: "Manhole Sealed",
                value: "Yes",
                options: {
                    Yes: [],
                    No: [],
                },
            },
            {
                type: "number",
                unit: "mm",
                title: "Downstream Pipe Diameter",
            },
        ],
    },
    {
        type: "section",
        title: "Asset Condition",
        entries: [
            {
                type: "radio",
                required: true,
                title: "Manhole Cover Level Requires Adjustment",
                value: "Yes",
                options: {
                    Yes: [
                        {
                            type: "field",
                            required: true,
                        },
                    ],
                    No: [],
                },
            },
            {
                type: "radio",
                required: true,
                title: "Issue with manhole neck",
                value: "Yes",
                options: {
                    Yes: [
                        {
                            type: "field",
                            required: true,
                        },
                    ],
                    No: [],
                },
            },
            {
                type: "radio",
                required: true,
                title: "Step Irons",
                value: "Yes",
                options: {
                    Yes: [
                        {
                            type: "field",
                            required: true,
                        },
                    ],
                    No: [],
                },
            },
            {
                type: "radio",
                required: true,
                title: "Operational Issues",
                value: "Yes",
                options: {
                    Yes: [
                        {
                            type: "field",
                            required: true,
                        },
                    ],
                    No: [],
                },
            },
            {
                type: "section",
                entries: [
                    {
                        type: "radio",
                        required: true,
                        title: "Drop Pipe Condition",
                        value: "Yes",
                        options: {
                            Yes: [
                                {
                                    type: "condition",
                                    required: true,
                                    title: "Condition Rating",
                                    value: "1",
                                    style: ["noRadio"],
                                    options: {
                                        "1": [],
                                        "2": [],
                                        "3": [],
                                        "4": [],
                                        "5": [],
                                    },
                                },
                            ],
                            No: [],
                        },
                    },
                ],
            },
            {
                type: "section",
                entries: [
                    {
                        type: "radio",
                        required: true,
                        title: "Coating Condition",
                        value: "Yes",
                        options: {
                            Yes: [
                                {
                                    type: "condition",
                                    required: true,
                                    title: "Condition Rating",
                                    value: "1",
                                    style: ["noRadio"],
                                    options: {
                                        "1": [],
                                        "2": [],
                                        "3": [],
                                        "4": [],
                                        "5": [],
                                    },
                                },
                            ],
                            No: [],
                        },
                    },
                ],
            },
            {
                type: "radio",
                required: true,
                title: "Root Intrusion",
                value: "None",
                style: ["noRadio"],
                options: {
                    None: [],
                    Low: [],
                    Medium: [],
                    High: [],
                },
            },
            {
                type: "radio",
                required: true,
                title: "Infiltration",
                value: "None",
                style: ["noRadio"],
                options: {
                    None: [],
                    Weep: [],
                    Running: [],
                    Gushing: [],
                },
            },
            {
                type: "field",
                title: "Other",
            },
        ],
    },
    {
        type: "section",
        title: "Standard Component Ratings",
        entries: [
            {
                type: "condition",
                required: true,
                title: "Lid/Ring Condition",
                value: "1",
                style: ["noRadio"],
                options: {
                    "1": [],
                    "2": [],
                    "3": [],
                    "4": [],
                    "5": [],
                },
            },
            {
                type: "condition",
                required: true,
                title: "Surround Condition",
                value: "1",
                style: ["noRadio"],
                options: {
                    "1": [],
                    "2": [],
                    "3": [],
                    "4": [],
                    "5": [],
                },
            },
            {
                type: "condition",
                required: true,
                title: "Benching Condition",
                value: "1",
                style: ["noRadio"],
                options: {
                    "1": [],
                    "2": [],
                    "3": [],
                    "4": [],
                    "5": [],
                },
            },
            {
                type: "condition",
                required: true,
                title: "Manhole Wall Condition",
                value: "1",
                style: ["noRadio"],
                options: {
                    "1": [],
                    "2": [],
                    "3": [],
                    "4": [],
                    "5": [],
                },
            },
            {
                type: "condition",
                required: true,
                title: "Underside of Converter Slab Condition",
                value: "1",
                style: ["noRadio"],
                options: {
                    "1": [],
                    "2": [],
                    "3": [],
                    "4": [],
                    "5": [],
                },
            },
            {
                type: "number",
                unit: "pH",
                required: true,
                title: "Manhole Wall pH",
                value: "7",
            },
        ],
    },
    {
        type: "section",
        title: "Gas Readings",
        entries: [
            {
                type: "section",
                title: "Oxygen (19.5% - 23.3%)",
                entries: [
                    {
                        type: "number",
                        unit: "%",
                        title: "Top Level (within 1m)",
                    },
                    {
                        type: "number",
                        unit: "%",
                        title: "Middle Level" /*|| defaultTitle*/,
                    },
                    {
                        type: "number",
                        unit: "%",
                        title: "Bottom Level (within 1m)" /*|| defaultTitle*/,
                    },
                ],
            },
            {
                type: "section",
                title: "Flammable Gases (LEL <5% - <10%)",
                entries: [
                    {
                        type: "number",
                        unit: "%",
                        title: "Top Level (within 1m)",
                    },
                    {
                        type: "number",
                        unit: "%",
                        title: "Middle Level",
                    },
                    {
                        type: "number",
                        unit: "%",
                        title: "Bottom Level (within 1m)",
                    },
                ],
            },
            {
                type: "section",
                title: "Carbon Monoxide(<30ppm)",
                entries: [
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Top Level (within 1m)",
                    },
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Middle Level",
                    },
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Bottom Level (within 1m)",
                    },
                ],
            },
            {
                type: "section",
                title: "H2S",
                entries: [
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Top Level (within 1m)",
                    },
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Middle Level",
                    },
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Bottom Level (within 1m)",
                    },
                ],
            },
            {
                type: "section",
                title: "CO2",
                entries: [
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Top Level (within 1m)",
                    },
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Middle Level",
                    },
                    {
                        type: "number",
                        unit: "ppm",
                        title: "Bottom Level (within 1m)",
                    },
                ],
            },
        ],
    },
    {
        type: "section",
        title: "Asset Refurbishment Scope",
        entries: [
            {
                type: "radio",
                title: "Lid and Surround",
                value: "Replace lid only (like for like)",
                style: ["vertical"],
                options: {
                    "Replace lid only (like for like)": [],
                    "Replace lid, frame and surround (like for like)": [],
                    "Replace lid, frame and surround (heavier class)": [],
                    "Replace lid, frame and surround (lightweight- non corrosive class)": [],
                    "Replace concrete surround only": [],
                    "Seal Lid": [],
                },
            },
            {
                type: "check",
                title: "MH Neck Adjustments",
                value: ["Raise MH Neck"],
                style: ["vertical"],
                options: {
                    "Raise MH Neck": [],
                    "Re-adjust / realign neck to converter slab": [],
                },
            },
            {
                type: "check",
                title: "Step Irons",
                value: ["Remove existing step irons and make good MH walls"],
                style: ["vertical"],
                options: {
                    "Remove existing step irons and make good MH walls": [],
                },
            },
            {
                type: "check",
                title: "Step Irons",
                value: ["Remove existing step irons and make good MH walls"],
                style: ["vertical"],
                options: {
                    "Remove existing step irons and make good MH walls": [],
                },
            },
            {
                type: "check",
                title: "Infiltration",
                value: ["Remove all traces of root intrusion throughout MH and seal all root Penetrations"],
                style: ["vertical"],
                options: {
                    "Remove all traces of root intrusion throughout MH and seal all root Penetrations": [],
                    "Seal all leaking joints, cracks and/or instances of infiltration": [],
                },
            },
            {
                type: "check",
                title: "Refurbish MH Walls",
                value: ["Clean and repair steel reinforcement"],
                style: ["vertical"],
                options: {
                    "Clean and repair steel reinforcement": [],
                    "Patch and repair deteriorated concrete": [],
                    "Resurface deteriorated concrete walls": [],
                },
            },
            {
                type: "check",
                title: "Benching",
                value: ["Make repairs to existing benching returning to as new condition"],
                style: ["vertical"],
                options: {
                    "Make repairs to existing benching returning to as new condition": [],
                    "Replace existing benching": [],
                },
            },
            {
                type: "check",
                title: "Drop Pipes",
                value: ["Clean and refurbish existing drop pipes"],
                style: ["vertical"],
                options: {
                    "Clean and refurbish existing drop pipes": [],
                    "Replace drop pipes": [],
                },
            },
            {
                type: "check",
                title: "Coating System",
                value: ["Apply coating system to entire MH (including neck)"],
                style: ["vertical"],
                options: {
                    "Apply coating system to entire MH (including neck)": [],
                    "Patch all instances of failed coating system": [],
                    "Remove existing coating system and recoat entire MH (including neck)": [],
                },
            },
        ],
    },
];
