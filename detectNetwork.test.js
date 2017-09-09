/*     DINER'S CLUB     */
describe('Diner\'s Club', function() {
  var expect = chai.expect;
  var dinerPrefix = ['38', '39'];

  dinerPrefix.forEach(function(prefix) {
    it('has a prefix of ' + prefix +' and a length of 14', function() {
      expect(detectNetwork(prefix + '123456789123')).to.equal('Diner\'s Club');
    })
  });
});

/*     AMERICAN EXPRESS     */
describe('American Express', function() {
  var expect = chai.expect;
  var amExPrefix = ['34', '37'];

  amExPrefix.forEach(function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 15', function() {
      expect(detectNetwork(prefix + '1234567890123')).to.equal('American Express');
    })
  });
});

/*     VISA     */
describe('Visa', function() {
  var expect = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

/*     MASTERCARD     */
describe('MasterCard', function() {
  var expect = chai.expect;
  var masterPrefix = ['51', '52', '53', '54', '55'];

  masterPrefix.forEach(function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      expect(detectNetwork(prefix + '12345678901234')).to.equal('MasterCard');
    })
  });
});

/*     DISCOVER     */
describe('Discover', function() {
  var expect = chai.expect;
  var discoverPrefix = ['644', '645', '646', '647', '648', '649'];

  discoverPrefix.forEach(function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      expect(detectNetwork(prefix + '1234567890123')).to.equal('Discover');
    })
    it('has a prefix of ' + prefix + ' and a length of 19', function() {
      expect(detectNetwork(prefix + '1234567890123456')).to.equal('Discover');
    })
  });

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789123')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789123456')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512345678912345')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6512345678912345678')).to.equal('Discover');
  });
});

/*     MAESTRO     */
describe('Maestro', function () {
  var expect = chai.expect;
  var maestroPrefix = ['5018', '5020', '5038', '6304'];

  for (var length = 12; length <= 19; length++) {
    (function(length) {
      var suffix = '12345678';
      for (var i = 1; i <= length - 12; i++) {
        suffix += '0';
      }

      maestroPrefix.forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          expect(detectNetwork(prefix + suffix)).to.equal('Maestro');
        });
      });

    })(length);
  }
});

/*     CHINA UNIONPAY     */  
//BUILD DIFFERENT LENGTH PREFIX ARRAYS 
describe('China UnionPay', function() {
  var expect = chai.expect;
  var chinaPrefix3 = ['624', '625', '626'];
  var chinaPrefix4 = [];
  for (var i = 6282; i <= 6288; i++) {
    chinaPrefix4.push(i.toString());
  }
  var chinaPrefix6 = [];
  for (var i = 622126; i <= 622925; i ++) {
    chinaPrefix6.push(i.toString());
  }

  //PREFIX LENGTH 3 AND ALL LENGTHS
  for (var length = 16; length <= 19; length++) {
    (function(length) {
      var suffix = '1234567890123';
      for (var i = 1; i <= length - 16; i++) {
        suffix += '0';
      }

      chinaPrefix3.forEach(function(prefix3) {
        it('has a prefix of ' + prefix3 + ' and a length of ' + length, function() {
          expect(detectNetwork(prefix3 + suffix)).to.equal('China UnionPay');
        });
      });

    })(length);
  }

  //PREFIX LENGTH 4 AND ALL LENGTHS
  for (var length = 16; length <= 19; length++) {
    (function(length) {
      var suffix = '123456789012';
      for (var i = 1; i <= length - 16; i++) {
        suffix += '0';
      }

      chinaPrefix4.forEach(function(prefix4) {
        it('has a prefix of ' + prefix4 + ' and a length of ' + length, function() {
          expect(detectNetwork(prefix4 + suffix)).to.equal('China UnionPay');
        });
      });

    })(length);
  }

  //PREFIX LENGTH 6 AND ALL LENGTHS
  for (var length = 16; length <= 19; length++) {
    
    (function(length) {
      var suffix = '1234567890';
      for (var i = 1; i <= length - 16; i++) {
        suffix += '0';
      }

      chinaPrefix6.forEach(function(prefix6) {
        it('has a prefix of ' + prefix6 + ' and a length of ' + length, function() {
          expect(detectNetwork(prefix6 + suffix)).to.equal('China UnionPay');
        });
      });

    })(length);
  }

});

/*     SWITCH     */
describe('Switch', function() {
  var expect = chai.expect;
  var switchPrefix4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var switchPrefix6 = ['564182', '633110'];

  //PREFIX LENGTH 4 AND ALL LENGTHS
  switchPrefix4.forEach(function(prefix4) {
    it('has a prefix of ' + prefix4 + ' and a length of 16', function() {
      expect(detectNetwork(prefix4 + '123456789012')).to.equal('Switch');
    })
    it('has a prefix of ' + prefix4 + ' and a length of 18', function() {
      expect(detectNetwork(prefix4 + '12345678901234')).to.equal('Switch');
    })
    it('has a prefix of ' + prefix4 + ' and a length of 19', function() {
      expect(detectNetwork(prefix4 + '123456789012345')).to.equal('Switch');
    })
  });

  //PREFIX LENGTH 4 AND ALL LENGTHS
   switchPrefix6.forEach(function(prefix6) {
    it('has a prefix of ' + prefix6 + ' and a length of 16', function() {
      expect(detectNetwork(prefix6 + '1234567890')).to.equal('Switch');
    })
    it('has a prefix of ' + prefix6 + ' and a length of 18', function() {
      expect(detectNetwork(prefix6 + '123456789012')).to.equal('Switch');
    })
    it('has a prefix of ' + prefix6 + ' and a length of 19', function() {
      expect(detectNetwork(prefix6 + '1234567890123')).to.equal('Switch');
    })
  });

});

