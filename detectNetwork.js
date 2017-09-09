var detectNetwork = function(cardNumber) {
	//Prefix Variables
	var length = cardNumber.length;
	var first = cardNumber.slice(0, 1);
	var firstTwo = cardNumber.slice(0, 2);
	var firstThree = cardNumber.slice(0, 3);
	var firstFour = cardNumber.slice(0, 4);
	var firstSix = cardNumber.slice(0, 6);

	//Network Prefix and Length Data
	var dinersClubPrefix = ['38', '39'];

	var amExPrefix = ['34', '37'];

	var visaLength = [13, 16, 19];

	var masterCardPrefix = ['51', '52', '53', '54', '55'];

	var discoverPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65'];
	var discoverLength = [16, 19];

	var maestroPrefix = ['5018', '5020', '5038', '6304'];
	var maestroLength = [12, 13, 14, 15, 16, 17, 18, 19];

	var chinaPrefix = ['624', '625', '626'];
	for (var i = 6282; i <= 6288; i++) {
		chinaPrefix.push(i.toString());
	}
	for (var i = 622126; i <= 622925; i ++) {
		chinaPrefix.push(i.toString());
	}
	var chinaLength = [16, 17, 18, 19];

	var switchPrefix = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
	var switchLength = [16, 18, 19];

	//Program
	var network = 'unknown';

	if (dinersClubPrefix.includes(firstTwo) && length == 14) {
		network = 'Diner\'s Club';

	} else if ( amExPrefix.includes(firstTwo) && length == 15 ) {
		network = 'American Express';

	} else if (first == '4' && visaLength.includes(length) && !switchPrefix.includes(firstFour)) {
		return 'Visa';

	} else if (masterCardPrefix.includes(firstTwo) && length == 16) {
		return 'MasterCard';

	} else if ((discoverPrefix.includes(firstTwo) || discoverPrefix.includes(firstThree) || discoverPrefix.includes(firstFour)) && discoverLength.includes(length)) {
		return 'Discover';

	} else if (maestroPrefix.includes(firstFour) && maestroLength.includes(length)) {
		return 'Maestro';

	} else if ((chinaPrefix.includes(firstThree) || chinaPrefix.includes(firstFour) || chinaPrefix.includes(firstSix)) && chinaLength.includes(length)) {
		return 'China UnionPay';

	} else if ((switchPrefix.includes(firstFour) || switchPrefix.includes(firstSix)) && switchLength.includes(length)) {
		return "Switch";
	}
	return network;
};



