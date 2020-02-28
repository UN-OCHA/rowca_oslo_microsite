var spData = null;
var slideData = null;
var blocData = null;
var figuresNiger = {};
var figuresCameroun = {};
var figuresNigeria = {};
var figuresChad = {};

var slide1 = {};
var slide2 = {};
var slide3 = {};
var slide4 = {};

var bloc1 = {};
var bloc2 = {};
var bloc3 = {};
var bloc4 = {};
var bloc5 = {};






function formatNumber(n) {
	if (n > 1000000000) return '<span class=decimal-figure>' + (n / 1000000000).toFixed(1) + 'B</span>';
	if (n > 1000000) return '<span class=decimal-figure>' + (n / 1000000).toFixed(0) + 'M</span>';
	if (n > 1000) return '<span  class=decimal-figure>' + (n / 1000).toFixed(0) + 'K</span>';
	if (n < 1000 && n > 0) return '<span  class=decimal-figure>' + (n).toFixed(0) + '</span>';
	if (n == 0) return '<span  class=decimal-figure>-</span>';
}

function readData() {

	figuresNiger["PeopleInNeed"]=517798;
	figuresNiger["PeopleTargeted"]=398257;
	figuresNiger["Requirement"]=235838395;
	figuresNiger["FoodInsecurePeople"]=108568;
	figuresNiger["SAMBurden"]=20041;
	figuresNiger["Refugees"]=120619;
	figuresNiger["IDPs"]=111058;
	figuresNiger["returnes"]=0;
	figuresNiger["funding"]=67531900;

	figuresCameroun["PeopleInNeed"]= 993864;
	figuresCameroun["PeopleTargeted"]= 779908;
	figuresCameroun["Requirement"]=121505642;
	figuresCameroun["FoodInsecurePeople"]=324285;
	figuresCameroun["SAMBurden"]=41750;
	figuresCameroun["Refugees"]=109757;
	figuresCameroun["IDPs"]=297380;
	figuresCameroun["returnes"]=0;
	figuresCameroun["funding"]=35507376;

	figuresNigeria["PeopleInNeed"]=7900000;
	figuresNigeria["PeopleTargeted"]=5900000;
	figuresNigeria["Requirement"]=847703581;
	figuresNigeria["FoodInsecurePeople"]=3584680;
	figuresNigeria["SAMBurden"]= 289197;
	figuresNigeria["Refugees"]=0;
	figuresNigeria["IDPs"]=1835429;
	figuresNigeria["returnes"]=0;
	figuresNigeria["funding"]=565702211;

	figuresChad["PeopleInNeed"]= 366680;
	figuresChad["PeopleTargeted"]=311531;
	figuresChad["Requirement"]=140413837;
	figuresChad["FoodInsecurePeople"]=107113;
	figuresChad["SAMBurden"]=18481;
	figuresChad["Refugees"]=12535;
	figuresChad["IDPs"]=169003;
	figuresChad["returnes"]=0;
	figuresChad["funding"]=59199696;
	  
}

function readSlideData() {
	slide1["texte"]="Nigeria and<br/>the Lake Chad region:";
	slide1["figure"]="9.8 MILLION";
	slide1["paragraph"]="People in Need";
		
	slide2["texte"]="Nigeria and<br/>the Lake Chad region:";
	slide2["figure"]="2.4 MILLION";
	slide2["paragraph"]="People Displaced";
	
	slide3["texte"]="Nigeria and<br/>the Lake Chad region:";
	slide3["figure"]="4.1 MILLION";
	slide3["paragraph"]="People Severely Food Insecure";

	slide4["texte"]="Nigeria and<br/>the Lake Chad region:";
	slide4["figure"]="369K";
	slide4["paragraph"]="Children Severly Malnourished";

	
	//INSERT VALUES
	$("#title1 .texteSlide").html(slide1.texte);
	$("#title1 .figureSlide").html(slide1.figure);
	$("#title1 .paragraphSlide").html(slide1.paragraph);
	
	$("#title2 .texteSlide").html(slide2.texte);
	$("#title2 .figureSlide").html(slide2.figure);
	$("#title2 .paragraphSlide").html(slide2.paragraph);
	
	$("#title3 .texteSlide").html(slide3.texte);
	$("#title3 .figureSlide").html(slide3.figure);
	$("#title3 .paragraphSlide").html(slide3.paragraph);
	
	$("#title4 .texteSlide").html(slide4.texte);
	$("#title4 .figureSlide").html(slide4.figure);
	$("#title4 .paragraphSlide").html(slide4.paragraph);



}

function readBlocData() {

	bloc1["situation"]="Situation";
	bloc1["Sectiontext"]="<p>The crisis in the Lake Chad region is affecting millions of people across Cameroon, Chad, Niger, and Nigeria. After nine years of conflict, 9.9 million people need relief assistance to survive.</p><p>Stepped-up humanitarian response to the emergency helped avert famine in 2017 but gains remain highly fragile. One in two families still require sustained assistance to survive and rebuild their lives.</p>";
	bloc1["Sectionphotocaption"]="The humanitarian assistance is saving many lives. But needs remain acute and will persist at large scale into 2019 and beyond.";


	bloc2["situation"]="Food Security";
	bloc2["Sectiontext"]="Food insecurity is on the rise again as the lean season in 2018 has been one of the most difficult in years in many areas across the Lake Chad region. Five million people are acutely food insecure and require sustained and heightened food and livelihood assistance. In 2017, only massively scaled-up aid delivery helped avert a famine. <br>In much of the conflict-hit areas, severe acute malnutrition has surpassed the emergency threshold. Half a million severely malnourished children across the region need life-saving assistance.";
	bloc2["Sectionphotocaption"]="Today over two million people are receiving food assistance across the region. These crucial achievements need to be bolstered to pave the way to restoring livelihoods. ";



	bloc3["situation"]="Protection of civilians";
	bloc3["Sectiontext"]="Villages, towns and even sites hosting displaced people recurrently come under attack, hitting civilians the hardest. Kidnappings, fatal attacks, sexual and gender-based violence, exploitation and abuse continue to occur. Since 2013, more than a thousand children in north-east Nigeria have been abducted by armed groups, and dozens have been forced to carry out attacks with explosives strapped to their bodies.";
	bloc3["Sectionphotocaption"]="With greater resources we can lead a more effective and coherent humanitarian response placing emphasis on the protection of women children and aid workers and advocating that we are “not a target”.";


	bloc4["situation"]="Education";
	bloc4["Sectiontext"]="Ongoing conflict, displacement and fear of attacks on schools is putting the education of more than 3.5 million children at risk. Attacks, looting and occupation have shut down almost a thousand schools, leaving hundred of thousands of children, half of them girls, without education or forced to go to schools outside their communities.";
	bloc4["Sectionphotocaption"]="While hundreds of thousands have returned to or near their homes in recent years, resuming normal life is far from easy due to destruction of their homes, schools, health centres and other infrastructure.";

	bloc5["situation"]="Funding Needs";
	bloc5["Sectiontext"]="Concerted efforts by humanitarian actors and the Governments helped avert a famine in 2017. Food insecurity and malnutrition however, remain high in the conflict-hit regions of Cameroon, Chad, Niger and Nigeria. Humanitarian organisations are in 2019 requesting for US$1.3 billion to ease hunger, provide water, shelter, hygiene, healthcare, protection and education and help communities rebuild their lives and livelihoods.";

	
	
	//INSERT VALUES
	$("#SectionSituation .situation").html(bloc1.situation);
	$("#SectionSituation .Sectiontext").html(bloc1.Sectiontext);
	$("#SectionSituation .Sectionphotocaption").html(bloc1.Sectionphotocaption);
	
	$("#Sectionfood-security .situation").html(bloc2.situation);
	$("#Sectionfood-security .Sectiontext").html(bloc2.Sectiontext);
	$("#Sectionfood-security .Sectionphotocaption").html(bloc2.Sectionphotocaption);
	
	$("#SectionProtection .situation").html(bloc3.situation);
	$("#SectionProtection .Sectiontext").html(bloc3.Sectiontext);
	$("#SectionProtection .Sectionphotocaption").html(bloc3.Sectionphotocaption);
	
	$("#SectionEducation .situation").html(bloc4.situation);
	$("#SectionEducation .Sectiontext").html(bloc4.Sectiontext);
	$("#SectionEducation .Sectionphotocaption").html(bloc4.Sectionphotocaption);
	
	$("#SectionFunding .situation").html(bloc5.situation);
	$("#SectionFunding .Sectiontext").html(bloc5.Sectiontext);
	//$("#SectionFunding .Sectionphotocaption").html(bloc5.Sectionphotocaption);

	//console.log(bloc5);
}
  
  
$(document).ready(function () {
	readData();
	readSlideData();
	readBlocData();
	
	
	/* ***** CAMEMBERT CHIFFRES PEOPLE DISPLACED ***** */
	var refugees = figuresNiger.Refugees + figuresCameroun.Refugees + figuresNigeria.Refugees + figuresChad.Refugees;
	var idps = figuresNiger.IDPs + figuresCameroun.IDPs + figuresNigeria.IDPs + figuresChad.IDPs;
	var returnes = figuresNiger.returnes + figuresCameroun.returnes + figuresNigeria.returnes + figuresChad.returnes;
	var totalIdps = refugees+idps+returnes;

	
	$("#total_displaced").html(nFormatter(totalIdps, false));
	

	var dataset = [
		{ "label": "IDPs", "amount": idps, "color" : "rgb(65,143,222)","localize_label" : "idps_label"},
		{ "label": "Refugees", "amount": refugees, "color" : "rgb(200,200,200)", "localize_label" : "refugees_label"},
		{ "label": "Returnes", "amount": returnes, "color" : "rgb(250,87,92)", "localize_label" : "refugees_label"}
	];
	var radius = 150;
	
	// set the chart type
	var pie = d3.layout.pie()
	.sort(null)
	.value(function(d){ return d.amount; });
	
	// convert the pie into a donut
	var arc = d3.svg.arc()
	.innerRadius(radius - 110)
	.outerRadius(radius - 70);
	
	// append the svg to the DOM element and set its attributes
	var svg = d3.select("#displaced .chart").append("svg")
		.attr("width", "100%")
		.attr("height", "100%")
		.attr("viewBox", "0 0 180 180")
		.append("g")
		.attr("transform", "translate(" + "90" + "," + "90" + ")");
	
	// append a second group for the arcs and create the arcs
	var path = svg.append("g");
	path.selectAll("path")
	.data(pie(dataset))
		.enter().append("path")
		.attr("class", "arc")
		.attr("fill", function(d) { return d.data.color; })
		.attr("d", arc)
		.attr ("title", function(d) {
			return makeTip(d.data.label,nFormatter(d.data.amount, true),d.data.localize_label);
		});
		
		
		
		
	/* ***** PEOPLE DISPLACED BY COUNTRY ***** */
	function getHighest(array, attribute) {
		var highest;
		for (var i=0; i < array.length; i++) {
			if (!highest || parseInt(array[i][attribute]) > parseInt(highest[attribute]))
				highest = array[i];
		}
		return highest;
	}

	var totalDisplacedNiger = figuresNiger.IDPs +  figuresNiger.Refugees +  figuresNiger.returnes;
	var totalDisplacedCameroun = figuresCameroun.IDPs +  figuresCameroun.Refugees +  figuresCameroun.returnes;
	var totalDisplacedNigeria = figuresNigeria.IDPs +  figuresNigeria.Refugees +  figuresNigeria.returnes;
	var totalDisplacedChad = figuresChad.IDPs + figuresChad.Refugees +  figuresChad.returnes;

	var displacedByCountry = [
		{"label" : "Nigeria","data_localization_code" : "stressed_label","total" : totalDisplacedNigeria},
		{"label" : "Cameroon","data_localization_code" : "catastrophe_label","total" : totalDisplacedCameroun},
		{"label" : "Niger","data_localization_code" : "crisis_label","total" : totalDisplacedNiger},
		{"label" : "Chad","data_localization_code" : "emergency_label","total" : totalDisplacedChad}
	];
	
	$('#displacedByCountry table').html(function() {
		var highest = getHighest(displacedByCountry, "total");
		var markup = '';
		for (i = 0; i < displacedByCountry.length; i++) {
			var percentage = Math.round(displacedByCountry[i]["total"]/highest["total"] * 100);
			var country = displacedByCountry[i]["label"];
			if(country=="Nigeria"){
				country = "* Nigeria";
			}
			markup += '<tr>'+
						'<td class="county-name" data-localize="' + displacedByCountry[i]["data_localization_code"] + '">' + country + '</td>'+
						'<td class="in-need-amount"><span class="decimal-figure">' + nFormatter(displacedByCountry[i]["total"], false) + '</span></td>'+
						'<td>'+
							'<div class="percentage" style="width:' + percentage + '%"></div>'+
						'</td>'+
					'</tr>';
		}
		return markup;
	});
	
	
	
	/* ***** PEOPLE SEVERELY FOOD INSECURE BY COUNTRY ***** */
	var foodsecurityphaseNiger = figuresNiger.FoodInsecurePeople;
	var foodsecurityphaseCameroun = figuresCameroun.FoodInsecurePeople;
	var foodsecurityphaseNigeria = figuresNigeria.FoodInsecurePeople;
	var foodsecurityphaseChad = figuresChad.FoodInsecurePeople;
	var total_fis = foodsecurityphaseNiger+foodsecurityphaseCameroun+foodsecurityphaseNigeria+foodsecurityphaseChad;
	$("#total_fis").html(nFormatter(total_fis, false));

	var foodsecurityphase = [
		{"label" : "Nigeria","data_localization_code" : "stressed_label","total" : foodsecurityphaseNigeria},
		{"label" : "Cameroon","data_localization_code" : "catastrophe_label","total" : foodsecurityphaseCameroun},
		{"label" : "Niger","data_localization_code" : "crisis_label","total" : foodsecurityphaseNiger},
		{"label" : "Chad","data_localization_code" : "emergency_label","total" : foodsecurityphaseChad}
	];
	
	$('#malnourished table').html(function() {
		var highest = getHighest(foodsecurityphase, "total");
		var markup = '';
		for (i = 0; i < foodsecurityphase.length; i++) {
			var percentage = Math.round(foodsecurityphase[i]["total"]/highest["total"] * 100);
			markup += '<tr>'+
				'<td class="county-name" data-localize="' + foodsecurityphase[i]["data_localization_code"] + '">' + foodsecurityphase[i]["label"] + '</td>'+
				'<td class="in-need-amount"><span class="decimal-figure">' + nFormatter(foodsecurityphase[i]["total"], false) + '</span></td>'+
				'<td>'+
					'<div class="percentage" style="width:' + percentage + '%"></div>'+
				'</td>'+
			'</tr>';
		}
		return markup;
	});
	
	
	
	
	/* ***** SEVERELY MALNOURISHED CHILDREN BY OOUNTRY ***** */
	var SAMBurdenNiger = figuresNiger.SAMBurden;
	var SAMBurdenCameroun = figuresCameroun.SAMBurden;
	var SAMBurdenNigeria = figuresNigeria.SAMBurden;
	var SAMBurdenChad = figuresChad.SAMBurden;

	var total_sam = SAMBurdenNiger+SAMBurdenCameroun+SAMBurdenNigeria+SAMBurdenChad;
	$("#total_sam").html(nFormatter(total_sam, false));
	
	var peopleinneed = [
		{"label" : "Nigeria","data_localization_code" : "protection_cluster","total" : SAMBurdenNigeria},
		{"label" : "Cameroon","data_localization_code" : "health_cluster","total" : SAMBurdenCameroun},
		{"label" : "Niger","data_localization_code" : "wash_cluster","total" : SAMBurdenNiger},
		{"label" : "Chad","data_localization_code" : "fsl_cluster","total" : SAMBurdenChad}
		
	];
	
	$('#SeverelyMalnourishedChildren table').html(function() {
		var highest = getHighest(peopleinneed, "total");
		var markup = '';
		for (i = 0; i < peopleinneed.length; i++) {
			var percentage = Math.round(peopleinneed[i]["total"]/highest["total"] * 100);
			markup += '<tr>'+
						'<td class="county-name" data-localize="' + peopleinneed[i]["data_localization_code"] + '">' + peopleinneed[i]["label"] + '</td>'+
						'<td class="in-need-amount"><span class="decimal-figure">' + nFormatter(peopleinneed[i]["total"], false) + '</span></td>'+
						'<td>'+
							'<div class="percentage" style="width:' + percentage + '%"></div>'+
						'</td>'+
					'</tr>';
		}
		return markup;
	});
	
	
	/* ***** PEOPLE SEVERELY FOOD INSECURE BY COUNTRY ***** */
	var foodsecurityphaseNiger = figuresNiger.FoodInsecurePeople;
	var foodsecurityphaseCameroun = figuresCameroun.FoodInsecurePeople;
	var foodsecurityphaseNigeria = figuresNigeria.FoodInsecurePeople;
	var foodsecurityphaseChad = figuresChad.FoodInsecurePeople;
	
	var foodSecPeople = [
		{"label" : "Nigeria","data_localization_code" : "stressed_label","total" : foodsecurityphaseNigeria},
		{"label" : "Cameroon","data_localization_code" : "catastrophe_label","total" : foodsecurityphaseCameroun},
		{"label" : "Niger","data_localization_code" : "crisis_label","total" : foodsecurityphaseNiger},
		{"label" : "Chad","data_localization_code" : "emergency_label","total" : foodsecurityphaseChad}
	];
	
	$('#foodsecurityphaseAdmin1 table').html(function() {
		var highest = getHighest(foodSecPeople, "total");
		var markup = '';
		for (i = 0; i < foodSecPeople.length; i++) {
			var percentage = Math.round(foodSecPeople[i]["total"]/highest["total"] * 100);
			markup += '<tr>'+
						'<td class="county-name" data-localize="' + foodSecPeople[i]["data_localization_code"] + '">' + foodSecPeople[i]["label"] + '</td>'+
						'<td class="in-need-amount"><span class="decimal-figure">' + nFormatter(foodSecPeople[i]["total"], false) + '</span></td>'+
						'<td>'+
							'<div class="percentage" style="width:' + percentage + '%"></div>'+
						'</td>'+
					'</tr>';
		}
		return markup;
	});
	
	
	
	/* ***** NUMBER INCIDENTS BY COUNTRY ***** */
	var incidentsNiger = 14;
	var incidentsCameroun = 38;
	var incidentsNigeria = 33;
	var incidentsChad = 5;
	
	var incidents = [
		{"label" : "Cameroon","data_localization_code" : "catastrophe_label","total" : incidentsCameroun},
		{"label" : "Nigeria","data_localization_code" : "stressed_label","total" : incidentsNigeria},
		{"label" : "Niger","data_localization_code" : "crisis_label","total" : incidentsNiger},
		{"label" : "Chad","data_localization_code" : "emergency_label","total" : incidentsChad}
	];
	
	
	$('#incidentsCountry table').html(function() {
		var highest = getHighest(incidents, "total");
		var markup = '';
		for (i = 0; i < incidents.length; i++) {
			var percentage = Math.round(incidents[i]["total"]/highest["total"] * 100);
			markup += '<tr>'+
						'<td class="county-name" data-localize="' + incidents[i]["data_localization_code"] + '">' + incidents[i]["label"] + '</td>'+
						'<td class="in-need-amount"><span class="decimal-figure">' + nFormatter(incidents[i]["total"], false) + '</span></td>'+
						'<td>'+
							'<div class="percentage" style="width:' + percentage + '%"></div>'+
						'</td>'+
					'</tr>';
		}
		return markup;
	});
	
	
	
	
	//*****************
	//FUNDING NEEDS
	//*****************
	//console.log("figuresNigeria.funding");
	//console.log(figuresNigeria.funding);

	
	//SET FUNDING REQUIEREMENT BY COUNTRY
	$('#funding-requirements-nigeria .figureCountry').html('<span class="big-number decimal-figure"><span class="big-number_rowca decimal-figure">' + formatNumber(figuresNigeria.Requirement) + '</span></span>');
	$('#funding-requirements-niger .figureCountry').html('<span class="big-number decimal-figure"><span class="big-number_rowca decimal-figure">' + formatNumber(figuresNiger.Requirement) + '</span></span>');
	$('#funding-requirements-cameroon .figureCountry').html('<span class="big-number decimal-figure"><span class="big-number_rowca decimal-figure">' + formatNumber(figuresCameroun.Requirement) + '</span></span>');
	$('#funding-requirements-chad .figureCountry').html('<span class="big-number decimal-figure"><span class="big-number_rowca decimal-figure">' + formatNumber(figuresChad.Requirement) + '</span></span>');
	
	//SET FUNDING BY COUNTRY
	$('#funding-total-nigeria .figureCountry').html('<span class="big-number_rowca decimal-figure">' + formatNumber(figuresNigeria.funding) + '</span>');
	$('#funding-total-niger .figureCountry').html('<span class="big-number_rowca decimal-figure">' + formatNumber(figuresNiger.funding) + '</span>');
	$('#funding-total-cameroon .figureCountry').html('<span class="big-number_rowca decimal-figure">' + formatNumber(figuresCameroun.funding) + '</span>');
	$('#funding-total-chad .figureCountry').html('<span class="big-number_rowca decimal-figure">' + formatNumber(figuresChad.funding) + '</span>');

	//PUT CHART PER COUNTRY
	createFundingChart2(figuresNigeria.funding,figuresNigeria.Requirement,'funding-total-nigeria');
	createFundingChart2(figuresNiger.funding,figuresNiger.Requirement,'funding-total-niger');
	createFundingChart2(figuresCameroun.funding,figuresCameroun.Requirement,'funding-total-cameroon');
	createFundingChart2(figuresChad.funding,figuresChad.Requirement,'funding-total-chad');

});