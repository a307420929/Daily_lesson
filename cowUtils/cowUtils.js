var cow = {
  /*字符串*/
  /*去空格
  * type ： 1 - 所有空格 2 - 前后空格 3 - 前空格 4 - 后空格
  * */
  trim:function (str, type) {
    switch (type){
      case 1 :
        return str.replace(/\s+/g,"");
      case 2 :
        return str.replace(/(^\s*)|(\s*$)/g,"");
      case 3 :
        return str.replace(/(^\s*)/g,"");
      case 4 :
        return str.replace(/(\s*$)/g,"");
      default:
        return str ;
    }
  },
  changeCase: function (str, type) {
    function ToggleCase(str) {
      var itemText = ""
      str.split("").forEach(
        function (item) {
          if (/^([a-z]+)/.test(item)) {
            itemText += item.toUpperCase();
          } else if (/^([A-Z]+)/.test(item)) {
            itemText += item.toLowerCase();
          } else {
            itemText += item;
          }
        });
      return itemText;
    }
    switch (type) {
      case 1:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

        });
      case 2:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
        });
      case 3:
        return ToggleCase(str);
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        return str;
    }
  },
  repeatStr : function (str , count) {
    var text = "";
    for(var i = 0;i<count;i++){
      text+=str;
    }
    return text;
  },

  checkPwd:function (str) {
    var nowLv = 0;
    if(/0-9/.test(str)){
      nowLv++
    }
    if(/a-z/.test(str)){
      nowLv++
    }
    if(/A-Z/.test(str)){
      nowLv++
    }
    if(/[\.|-|_]/.test(str)){
      nowLv++
    }
    return nowLv;
  },

  /*数组*/
  //1 去重
  removeRepeatArray : function (arr) {
    return arr.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    })
 },
 upsetArr : function (arr) {
   return arr.sort(function () {
     return Math.random() - 0.5
   })
 },
  maxArr : function (arr) {
    return Math.max.apply(null,arr)
  },
  minArr : function (arr) {
    return Math.min.apply(null,arr)
  },

};