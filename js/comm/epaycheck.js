  /* 
    用于相关的正则验证 2015-4-20
  */
define(function(require,exports,module){
    var epayCheck = {};
    epayCheck.checkReg = {       
        Email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        MDate:/^((?:19|20)\d\d)(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/,
        Phone : /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/,
        Mobile : /^(13|14|15|18|17)\d{9}$/,
        Name:/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
        BankCard : /^[\d ]{13,23}$/,
        Amount : /^(\d+.\d{1,2}|\d+)$/,//金额正则
        TrueName : /^([\u0391-\uFFE5]|[A-Za-z]|[\u00B7])([\u0391-\uFFE5A-Za-z\u00B7\\*\\?\\)\\(]){0,39}$/,  
        Code : /^([\u0391-\uFFE5]|[A-Za-z]|\d|[\u00B7]){2,40}$/,
        Number : /^\d+$/,
        Zip : /^[0-9]\d{5}$/,
        QQ : /^[1-9]\d{4,8}$/,  
        English : /^[A-Za-z]+$/,
        Money : /^(?![0\.]+$)(?:(?:[1-9]\d*?(?:\.\d{1,2})?)|(?:0\.\d{1,2}))$/,
        Chinese :  /^[\u0391-\uFFE5]+$/,
        isIDno:function(num){
            num = typeof(num) == "object" ? num.value : num;
            var aCity = "11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65,71,81,82,91";
            var iSum = 0;
            var info = "";
            var idCardLength = num.length;
            if(!/^\d{17}(\d|x)$/i.test(num)&&!/^\d{15}$/i.test(num)&&!/^\d{8}$/i.test(num)) {     
                return false;
            }

            //在后面的运算中x相当于数字10,所以转换成a
            var objvalue = num.replace(/x$/i,"a");

            var curCity = objvalue.substr(0,2);

            if(!(aCity.indexOf(curCity) >= 0) ) {      
                return false;
            }

            if (idCardLength==18) {
                sBirthday=objvalue.substr(6,4)+"-"+Number(objvalue.substr(10,2))+"-"+Number(objvalue.substr(12,2));
                var d = new Date(sBirthday.replace(/-/g,"/"))
                if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())) {       
                    return false;
                }
                for(var i = 17;i>=0;i --)
                    iSum += (Math.pow(2,i) % 11) * parseInt(objvalue.charAt(17 - i),11);

                if(iSum%11!=1) {        
                    return false;
                }

            }
            else if (idCardLength==15) {
                sBirthday = "19" + objvalue.substr(6,2) + "-" + Number(objvalue.substr(8,2)) + "-" + Number(objvalue.substr(10,2));
                var d = new Date(sBirthday.replace(/-/g,"/"))
                var dd = d.getFullYear().toString() + "-" + (d.getMonth()+1) + "-" + d.getDate();

                if(sBirthday != dd) {       
                    return false;
                }
            }
            else if (idCardLength==8) {
            }
            return true;
        }
    };

    /**
     * 正则验证方法
     * @param  type 正则的类型
     * @param  str 要判断的字符串
     * @return true false
     */
    epayCheck.check = function(type,str){
        if(type == 'isIDno'){
            epayCheck.checkReg.isIDno(str);
        }else{
            console.log(epayCheck.checkReg[type]);
            return epayCheck.checkReg[type].test(str);
        }
    }
    module.exports = epayCheck;
});