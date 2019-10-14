(function () {
	// Create the connector object
    var myConnector = tableau.makeConnector();

	// Define the schema
    myConnector.getSchema = function (schemaCallback) {
		var cols = [{
			id: "firstName",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "lastName",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "role",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "primaryEmail",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "secondaryEmail",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "assigningOrg",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "groups",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "courseTitle",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "doseTitle",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "timeSent",
			dataType: tableau.dataTypeEnum.datetime
		}, {
			id: "sendReason",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "type",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "repetition",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "screenText",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "screenID",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "sequence",
			dataType: tableau.dataTypeEnum.int
		},{
			id: "passed",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "passmark",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "correct",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "choices",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "answerChoice1",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "selected1",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cost1",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "revenue1",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "answerChoice2",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "selected2",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cost2",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "revenue2",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "answerChoice3",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "selected3",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cost3",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "revenue3",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "answerChoice4",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "selected4",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cost4",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "revenue4",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "answerChoice5",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "selected5",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cost5",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "revenue5",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "answerChoice6",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "selected6",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "cost6",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "revenue6",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "highRisk",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "feedback",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "rating",
			dataType: tableau.dataTypeEnum.float
		}, {
			id: "topic",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "customTag1",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "customTag2",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "customTag3",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "procedureTag",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "conditionTag",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "testTag",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "drugTag",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "alignment",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "alignmentComment",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "attempts",
			dataType: tableau.dataTypeEnum.int
		}, {
			id: "timeTaken",
			dataType: tableau.dataTypeEnum.datetime
		}
		];

		var tableSchema = {
			id: "DosedDailyFeed",
			alias: "DosedDaily raw data",
			columns: cols
		};

		schemaCallback([tableSchema]);
	};



	// Download the data
    myConnector.getData = function(table, doneCallback) {
    $.getJSON("https://api-uat.doseddaily.com/api/TokenAuth/GetCompleteDownloadData?token=E104E18D-F91E-4967-B34A-F065E8722767", function(resp) {
        var feat = resp.result.result
            tableData = [];
		
		
        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            tableData.push({
				"firstName": feat[i]["first Name"],
				"lastName": feat[i]["last Name"],
				"role": feat[i].role,				
				"primaryEmail": feat[i]["primary Email"],
				"secondaryEmail": feat[i]["secondary Email"],
				"assigningOrg": feat[i]["assigning Org"],
				"groups": feat[i].groups,
				"courseTitle": feat[i]["course Title"],
				"doseTitle": feat[i]["dose Title"],
				"timeSent": feat[i]["time Sent"],
				"send Reason": feat[i]["send Reason"],
				"type": feat[i].type,
				"repetition": feat[i].repetition,
				"screenText": feat[i]["screen Text"],
				"screenID": feat[i]["screen Id"],
				"sequence": feat[i].sequence,
				"passed": feat[i]["passed?"],
				"passmark": feat[i].passmark,
				"correct": feat[i].correct,
				"choices": feat[i].choices,
				"answerChoice1": feat[i]["answer Choice (1)"],
				"selected1": feat[i]["selected? (1)"],
				"cost1": feat[i]["cost (1)"],
				"revenue1": feat[i]["revenue (1)"],
				"answerChoice2": feat[i]["answer Choice (2)"],
				"selected2": feat[i]["selected? (2)"],
				"cost2": feat[i]["cost (2)"],
				"revenue2": feat[i]["revenue (2)"],
				"answerChoice3": feat[i]["answer Choice (3)"],
				"selected3": feat[i]["selected? (3)"],
				"cost3": feat[i]["cost (3)"],
				"revenue3": feat[i]["revenue (3)"],
				"answerChoice4": feat[i]["answer Choice (4)"],
				"selected4": feat[i]["selected? (4)"],
				"cost4": feat[i]["cost (4)"],
				"revenue4": feat[i]["revenue (4)"],
				"answerChoice5": feat[i]["answer Choice (5)"],
				"selected5": feat[i]["selected? (5)"],
				"cost5": feat[i]["cost (5)"],
				"revenue5": feat[i]["revenue (5)"],
				"answerChoice6": feat[i]["answer Choice (6)"],
				"selected6": feat[i]["selected? (6)"],
				"cost6": feat[i]["cost (6)"],
				"revenue6": feat[i]["revenue (6)"],
				"highRisk": feat[i]["high Risk"],
				"feedback": feat[i].feedback,
				"rating": feat[i].rating,
				"topic": feat[i].topic,
				"customTag1": feat[i]["custom Tags (1)"],
				"customTag2": feat[i]["custom Tags (2)"],
				//"customTag3": feat[i]["custom Tags (3)"],
				"procedureTag": feat[i]["procedure Tags"],
				"conditionTag": feat[i]["condition Tags"],
				"testTag": feat[i]["test Tags"],
				"drugTag": feat[i]["drug Tags"],
				"alignment": feat[i].aligment,
				"alignmentComment": feat[i]["aligmenT COMMENT"],
				"attempts": feat[i].attempts,
				"timeTaken": feat[i]["time Taken"]
            });
        }

        table.appendRows(tableData);
        doneCallback();
    });
	};

    tableau.registerConnector(myConnector);
	
	// Create event listeners for when the user submits the form
	$(document).ready(function () {
		$("#submitButton").click(function () {
			tableau.connectionName = "DosedDaily Data Feed";
			tableau.submit();
		});
	});
})();

