define(function(require,exports,module){
    var $ = require('jquery');
    var checkReg = require('check');

    $(function(){
        var phonestr = '15558091921';
        console.log(checkReg.check('Phone',phonestr));
    });
})