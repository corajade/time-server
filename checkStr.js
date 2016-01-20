var moArr=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
module.exports=function(str){
    //set up time Object
    var timeObj={"unix":null, "natural":null};
    //check for month string
    function month(str){
        var idx=moArr.indexOf(str);
        console.log(idx);
        return idx!==-1;
        
    }
    //check day is proper Conditions:
    // 1. string ends with ","
    // 2. numerical part is pos int and less or = 31 
    // 3.  day is not = 0
   
    function day(str, idx){
        var bool=false;
        var num=Number(str.slice(0,-1));
               if(str.endsWith(",")&&posInt(num)
        &&num<=31&&num>0)
      {
            //switch case does not have to check for months with 31 days
               bool=true;
                switch (idx) {
                    case 1:
                        bool= num<=28;
                        break;
                    case 3:
                    case 5:
                    case 8:
                    case 10:
                        bool=num<=30;
                }
               
              
            }
            return bool; 
        }
     
    
    //convert unix
    function unixConvert(num){
        var d=new Date(num);
        var mo=d.getMonth();
        var month=moArr[mo];
        var day=d.getDate();
        var yr=d.getFullYear();
        return month+ " " + day +", " + yr;
        
    }
    //check if the string is unix time
    function posInt(num){
        num=Number(num);
        return !isNaN(num)&&Number.isInteger(num)&&num>=0;
    }
    
    if(posInt(str)){
        timeObj.unix=Number(str);
        timeObj.natural=unixConvert(Number(str));
      
    }
    
    //check if a natural language date string
    
    else{
         //check if string is date in natural form
         var re=/%20/g;
       str=str.replace(re, " ");
         var strArr=str.split(" ");
      
          var index= moArr.indexOf(strArr[0]);
         //check 4 conditions on strArr (see above functions): 
         //length=3, 1st element is a month,  2nd proper day, 3rd posInt 
       
       
            if(strArr.length===3&&month(strArr[0])
            &&day(strArr[1], index)&&posInt(strArr[2])){
                
                timeObj.unix=Date.parse(str);
                timeObj.natural=str;
            }
    } 
        
     return timeObj;  
    };
