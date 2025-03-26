// JavaScript Document
var url = window.location.pathname;
var filename = url.substr(url.lastIndexOf('/') + 1);

var pagelist = [];

pagelist[0] = "index.html";
pagelist[1] = "kingdom_holding_company.html";
pagelist[2] = "from_the_chairman.html";
pagelist[3] = "from_the_chief_executive_officer.html";
pagelist[4] = "domestic_investments.html";
pagelist[5] = "hospitality.html";
pagelist[6] = "international_investments.html";
pagelist[7] = "from_the_chief_financial_officer.html";
pagelist[8] = "board_report.html";
pagelist[9] = "independent_auditors_report.html";
pagelist[10] ="consolidated_statement_of_financial_position.html"; 
pagelist[11] = "consolidated_statement_of_income.html";
pagelist[12] = "consolidated_statement_of_comprehensive_income.html";
pagelist[13] = "consolidated_statement_of_changes_in_equity.html";
pagelist[14] = "consolidated_statement_of_cash_flows.html";
pagelist[15] = "notes_to_the_consolidated_financial_statements.html";
// pagelist[16] = "executive_management.html";
// pagelist[17] = "committees_of_the_board.html";
// pagelist[18] = "details_of_remuneration.html";
// pagelist[19] = "risk_management.html";
// pagelist[20] = "affiliated_companies.html";
// pagelist[21] = "transactions_with_related_parties.html";
// pagelist[22] = "statutory_payments_penalties_and_sanctions.html";
// pagelist[23] = "dividend_distribution_policy.html";
// pagelist[24] = "investor_relations.html";
// pagelist[25] = "financial_performance.html";
// pagelist[26] = "board_declarations.html";
// pagelist[27] = "independent_auditors_report.html";
// pagelist[28] = "consolidated_statement_of_financial_position.html";
// pagelist[29] = "consolidated_statement_of_profit_or_loss_and_other_comprehensive_income.html";
// pagelist[30] = "consolidated_statement_of_changes_in_shareholders_equity.html";
// pagelist[31] = "consolidated_statement_of_cash_flows.html";
// pagelist[32] = "notes.html";
								
var minv = 0;
var maxv = 33;

function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)                    
            return i;
    return false;
}

var scrnwidth = window.innerWidth;

if (scrnwidth > 480) {
	
}

function pageDet(pren,nxtn){

	var pagetitle1 = '';
	var pagetitle2 = '';
	var pageurl1 = '';
	var pageurl2 = '';
		
	if(pren == 1){pagetitle1 = "Kingdom Holding Company", pageurl1 = '../kingdom_holding_company/' + pagelist[1] }
	if(nxtn == 1){pagetitle2 = "Kingdom Holding Company", pageurl2 = '../kingdom_holding_company/' + pagelist[1] }

	if(pren == 2){pagetitle1 = "From the Chairman", pageurl1 =  '../from_the_chairman/' + pagelist[2]}
	if(nxtn == 2){pagetitle2 = "From the Chairman", pageurl2 =  '../from_the_chairman/' + pagelist[2]}

	if(pren == 3){pagetitle1 = "From the Chief Executive Officer", pageurl1 = '../from_the_chief_executive_officer/' + pagelist[3]}
	if(nxtn == 3){pagetitle2 = "From the Chief Executive Officer", pageurl2 = '../from_the_chief_executive_officer/' + pagelist[3]}

	if(pren == 4){pagetitle1 = "Domestic Investments", pageurl1 = '../domestic_investments/' + pagelist[4]}
	if(nxtn == 4){pagetitle2 = "Domestic Investments", pageurl2 = '../domestic_investments/' + pagelist[4]}

	if(pren == 5){pagetitle1 = "Hospitality", pageurl1 = '../hospitality/' + pagelist[5]}
	if(nxtn == 5){pagetitle2 = "Hospitality", pageurl2 = '../hospitality/' + pagelist[5]}

	if(pren == 6){pagetitle1 = "International Investments", pageurl1 = '../international_investments/' + pagelist[6]}
	if(nxtn == 6){pagetitle2 = "International Investments", pageurl2 = '../international_investments/' + pagelist[6]}

	if(pren == 7){pagetitle1 = "From the Executive Director of Finance and Administration", pageurl1 = '../from_the_chief_financial_officer/' + pagelist[7]}
	if(nxtn == 7){pagetitle2 = "From the Executive Director of Finance and Administration", pageurl2 = '../from_the_chief_financial_officer/' + pagelist[7]}

	if(pren == 8){pagetitle1 = "Board Report", pageurl1 = '../board_report/' + pagelist[8]}
	if(nxtn == 8){pagetitle2 = "Board Report", pageurl2 = '../board_report/' + pagelist[8]}

	if(pren == 9){pagetitle1 = "Independent Auditor's Report", pageurl1 = '../financial_statements/' + pagelist[9]}
	if(nxtn == 9){pagetitle2 = "Independent Auditor's Report", pageurl2 = '../financial_statements/' + pagelist[9]}
	if(pren == 10){pagetitle1 = "Consolidated Statement of Financial Position", pageurl1 = '../financial_statements/' + pagelist[10]}
	if(nxtn == 10){pagetitle2 = "Consolidated Statement of Financial Position", pageurl2 = '../financial_statements/' + pagelist[10]}
	if(pren == 11){pagetitle1 = "Consolidated Statement of Income", pageurl1 = '../financial_statements/' + pagelist[11]}
	if(nxtn == 11){pagetitle2 = "Consolidated Statement of Income", pageurl2 = '../financial_statements/' + pagelist[11]}
	if(pren == 12){pagetitle1 = "Consolidated Statement of Comprehensive Income", pageurl1 = '../financial_statements/' + pagelist[12]}
	if(nxtn == 12){pagetitle2 = "Consolidated Statement of Comprehensive Income", pageurl2 = '../financial_statements/' + pagelist[12]}
	if(pren == 13){pagetitle1 = "Consolidated Statement of Changes in Equity", pageurl1 = '../financial_statements/' + pagelist[13]}
	if(nxtn == 13){pagetitle2 = "Consolidated Statement of Changes in Equity", pageurl2 = '../financial_statements/' + pagelist[13]}
	if(pren == 14){pagetitle1 = "Consolidated Statement of Cash Flows", pageurl1 = '../financial_statements/' + pagelist[14]}
	if(nxtn == 14){pagetitle2 = "Consolidated Statement of Cash Flows", pageurl2 = '../financial_statements/' + pagelist[14]}
	if(pren == 15){pagetitle1 = "Notes to the Consolidated Financial Statements", pageurl1 = '../financial_statements/' + pagelist[15]}
	if(nxtn == 15){pagetitle2 = "Notes to the Consolidated Financial Statements", pageurl2 = '../financial_statements/' + pagelist[15]}

	// if(pren == 16){pagetitle1 = "Executive Management", pageurl1 = '../governance/' + pagelist[16]}
	// if(nxtn == 16){pagetitle2 = "Executive Management", pageurl2 = '../governance/' + pagelist[16]}
	// if(pren == 17){pagetitle1 = "Committees of the Board", pageurl1 = '../governance/' + pagelist[17]}
	// if(nxtn == 17){pagetitle2 = "Committees of the Board", pageurl2 = '../governance/' + pagelist[17]}
	// if(pren == 18){pagetitle1 = "Details of remuneration", pageurl1 = '../governance/' + pagelist[18]}
	// if(nxtn == 18){pagetitle2 = "Details of remuneration", pageurl2 = '../governance/' + pagelist[18]}
	// if(pren == 19){pagetitle1 = "Risk management", pageurl1 = '../governance/' + pagelist[19]}
	// if(nxtn == 19){pagetitle2 = "Risk management", pageurl2 = '../governance/' + pagelist[19]}
	// if(pren == 20){pagetitle1 = "Affiliated companies", pageurl1 = '../governance/' + pagelist[20]}
	// if(nxtn == 20){pagetitle2 = "Affiliated companies", pageurl2 = '../governance/' + pagelist[20]}
	// if(pren == 21){pagetitle1 = "Transactions with related parties", pageurl1 = '../governance/' + pagelist[21]}
	// if(nxtn == 21){pagetitle2 = "Transactions with related parties", pageurl2 = '../governance/' + pagelist[21]}
	// if(pren == 22){pagetitle1 = "Statutory payments, penalties and sanctions", pageurl1 = '../governance/' + pagelist[22]}
	// if(nxtn == 22){pagetitle2 = "Statutory payments, penalties and sanctions", pageurl2 = '../governance/' + pagelist[22]}
	// if(pren == 23){pagetitle1 = "Dividend distribution policy", pageurl1 = '../governance/' + pagelist[23]}
	// if(nxtn == 23){pagetitle2 = "Dividend distribution policy", pageurl2 = '../governance/' + pagelist[23]}
	// if(pren == 24){pagetitle1 = "Investor Relations", pageurl1 = '../governance/' + pagelist[24]}
	// if(nxtn == 24){pagetitle2 = "Investor Relations", pageurl2 = '../governance/' + pagelist[24]}
	// if(pren == 25){pagetitle1 = "Financial performance", pageurl1 = '../governance/' + pagelist[25]}
	// if(nxtn == 25){pagetitle2 = "Financial performance", pageurl2 = '../governance/' + pagelist[25]}
	// if(pren == 26){pagetitle1 = "Board declarations", pageurl1 = '../governance/' + pagelist[26]}
	// if(nxtn == 26){pagetitle2 = "Board declarations", pageurl2 = '../governance/' + pagelist[26]}

	// if(pren == 27){pagetitle1 = "Independents auditor’s report", pageurl1 = '../financial_statements/' + pagelist[27]}
	// if(nxtn == 27){pagetitle2 = "Independents auditor’s report", pageurl2 = '../financial_statements/' + pagelist[27]}
	// if(pren == 28){pagetitle1 = "Consolidated statement of financial position", pageurl1 = '../financial_statements/' + pagelist[28]}
	// if(nxtn == 28){pagetitle2 = "Consolidated statement of financial position", pageurl2 = '../financial_statements/' + pagelist[28]}
	// if(pren == 29){pagetitle1 = "Consolidated statement of profit or loss and other comprehensive income", pageurl1 = '../financial_statements/' + pagelist[29]}
	// if(nxtn == 29){pagetitle2 = "Consolidated statement of profit or loss and other comprehensive income", pageurl2 = '../financial_statements/' + pagelist[29]}
	// if(pren == 30){pagetitle1 = "Consolidated statement of changes in shareholders equity", pageurl1 = '../financial_statements/' + pagelist[30]}
	// if(nxtn == 30){pagetitle2 = "Consolidated statement of changes in shareholders equity", pageurl2 = '../financial_statements/' + pagelist[30]}
	// if(pren == 31){pagetitle1 = "Consolidated statement of cash flows", pageurl1 = '../financial_statements/' + pagelist[31]}
	// if(nxtn == 31){pagetitle2 = "Consolidated statement of cash flows", pageurl2 = '../financial_statements/' + pagelist[31]}
	// if(pren == 32){pagetitle1 = "Notes to consolidated financial statements", pageurl1 = '../financial_statements/' + pagelist[32]}
	// if(nxtn == 32){pagetitle2 = "Notes to consolidated financial statements", pageurl2 = '../financial_statements/' + pagelist[32]}
	
	return [pagetitle1,pageurl1,pagetitle2,pageurl2];
}

pid = arraySearch(pagelist,filename);

var pren = pid - 1;
var nxtn = pid + 1;

var getvalset = pageDet(pren,nxtn);

if((pren) && (pren > minv)){
	preval = `<i class="fa-solid fa-chevron-left"></i><span>${getvalset[0]}</span>`;
	$('#prelink').html(preval);
	$('#prelink').attr('href', getvalset[1]);
}
	



if((nxtn) && (nxtn < maxv)){
	nextval = `<i class="fa-solid fa-chevron-right"></i><span>${getvalset[2]}</span>`;					
	$('#nextlink').html(nextval);
	$('#nextlink').attr('href', getvalset[3]);
}

if($('#nextlink').children().length < 1 ) {
	$('#nextlink').hide()
}
if($('#prelink').children().length < 1 ) {
	$('#prelink').hide()
}

//navigation highlight start
var url = window.location.pathname;
var filename = url.substr(url.lastIndexOf('/') + 1);
	
$('nav > ul > li > a').filter(function(){return $(this).attr('href') == filename }).parent().addClass('current-link');
$('.sub-menu-content a').filter(function(){return $(this).attr('href') == filename }).parent().addClass('current-link').parent().parent().addClass('current-link');




//print
$(".pdp").click(function (e) {
		window.print();
	});



//Social links
 var comurl = document.URL;
 $(".twitter").click(function(o) {
	  var c = "http://twitter.com/share?url=" + comurl;
     window.open(c, "")
 }), $(".facebook").click(function(o) {
     var c = "http://www.facebook.com/share.php?s=100&p[url]==" + comurl;
     window.open(c, "")
 }), $(".linkdin").click(function(o) {
     var c = "https://www.linkedin.com/cws/share?url=" + comurl;
     window.open(c, "")
 }), $(".mail").click(function(o) {
     var c = "mailto:?subject=DFCC Bank PLC Annual Report 2022&body=" + comurl,
         n = window.open(c, "emailWindow");
     n && n.open && !n.closed && n.close()
});

//download pdf
$("#download_pdf").click(function (e) {
	
	var url = window.location.pathname;
	var filename = url.substr(url.lastIndexOf('/') + 1);
	var tempString = filename.substring(0, filename.length - 4);
	tempString = tempString.replace(/\-/g, '_');
	filename = tempString+'pdf';

	window.open('../download/pdf/'+filename,'_blank');

});

//download pdf from download manager
$(".download-report").click(function (e) {
	
	var getDid = $(this).attr('id');
	getDid = getDid.substring(1);
	
	//var url = window.location.pathname;
	var filename = pagelist[getDid];
	var tempString = filename.substring(0, filename.length - 4);		
	tempString = tempString.replace(/\-/g, '_');
	filenamepdf = tempString+'pdf';

	window.open('../download/pdf/'+filenamepdf,'_blank');
});


//my report
var cart = [];
$(function () {
	if (localStorage.cart) {
		cart = JSON.parse(localStorage.cart);
		showCart();
		//downloadReport();
	}
});


$(".addmyreport, .addtoreport").click(function () {

	var rid = $(this).attr('id');
	if (rid == 'atmr') {
		rid = '';
	}

	if (!rid) {

		var url = window.location.pathname;
		var filename = url.substr(url.lastIndexOf('/') + 1);
		var tempString = filename.substring(0, filename.length - 4);
		//tempString = tempString.replace(/\-/g, '_');
		filenamepdf = tempString + 'pdf';
		pidar = arraySearch(pagelist, filename);
		getpath1 = pageDet(pidar, 0);
		filepath1 = getpath1[0];
		name = filenamepdf;
		rid = pidar;
		qty = filepath1;

	} else {
		var filename = pagelist[rid];
		var tempString = filename.substring(0, filename.length - 4);
		//tempString = tempString.replace(/\-/g, '_');
		filenamepdf = tempString + 'pdf';
		name = filenamepdf;
		getpath2 = pageDet(rid, 0);
		qty = getpath2[0];
	}

	// update qty if product is already present
	for (var i in cart) {
		if (cart[i].Name == name) {
			alert('PDF file already added into My Report.');
			return;
		}
	}
	// create JavaScript Object
	var item = { Name: name, Rid: rid, Qty: qty };
	cart.push(item);
	saveCart();
	alert('PDF file successfully added into My Report.');
	showCart();
});

function deleteItem(index) {
	cart.splice(index, 1); // delete item at index
	showCart();
	saveCart();
}

function saveCart() {
	if (window.localStorage) {
		window.localStorage.cart = JSON.stringify(cart);
	}
}

function showCart() {

	if (cart.length == 0) {

		$("#cartBody").css("display", "none");
		$("#dwnid").css("visibility", "hidden");
		$("#emptymc").css("display", "block");
		return;
	}

	$("#cartBody").css("display", "block");
	$("#emptymc").css("display", "none");
	$("#cartBody").empty();

	for (var i in cart) {
		var item = cart[i];
		var row = `<div class="menus d-md-flex"><div class="text_lines"><div class="d-flex"><div class="one-half"><h3>${item.Qty}</h3></div><div class="one-third"><span class="price"><a href="../download/pdf/${item.Name}" target="_blank" class="btn btn-dark btn-sm" data-toggle="tooltip" data-placement="top" title="Download"><i class="fa fa-download"></i></a></span></div><div class="one-forth"><span class="price"><a href="#" id="${i}" class="remmyreport btn btn-outline-dark btn-sm" data-toggle="tooltip" data-placement="top" title="Remove"><i class="fa fa-trash"></i></a></span></div></div></div></div>`;

		$("#cartBody").append(row);
		//downloadReport();
	}
}


$('#cartBody').on('click', '.remmyreport', function(e){
    e.preventDefault();
	let id = $(this).attr('id');
	deleteItem(id);
	generateDownloadLink()
})

$(".langchange:not(.langchange.home)").click(function (e) {
	
	e.preventDefault();

	var host = window.location.href;
	var chklang = host.search("/ar/");
	var filepath = host.substring(0,host.lastIndexOf('/', host.lastIndexOf('/')-1));
	var filename = host.substr(host.lastIndexOf('/', host.lastIndexOf('/')-1) +1);
	
	if (chklang < 0){
		url =  filepath + '/ar/' + filename;
	}else{
		url = host.replace('/ar/', '/');
	}
	
	window.location.href = url;
	
	
});

