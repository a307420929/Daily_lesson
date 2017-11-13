// 方法1 
function deepCopy(obj){
  var o;
  switch(typeof obj){
    case 'undefined': break;
    case 'string'   : o = obj + '';break;
    case 'number'   : o = obj - 0;break;
    case 'boolean'  : o = obj;break;
    case 'object'   :
      if(obj === null){
        o = null;
      }else{
        if(obj instanceof Array){
          o = [];
          for(var i = 0, len = obj.length; i < len; i++){
            o.push(deepCopy(obj[i]));
          }
        }else{
          o = {};
          for(var k in obj){
            o[k] = deepCopy(obj[k]);
          }
        }
      }
      break;
    default:
      o = obj;break;
  }
  return o;
}

//方法2 
function deepCopy2(obj) {
  return JSON.parse(JSON.stringify(obj));
}

//方法3
function deepCopy3(obj) {
  var newobj, obj;
  if(obj.constructor ==Object){
    newobj = new obj.constructor();
  }else {
    newobj = new obj.constructor(oj.valueOf());
  }
  for(var key in obj ){
    if(newobj[key] != obj[key]){
      if(typeof(obj[key]) =='object'){
        newobj[key] = deepCopy(obj[key]);
      }else {
        newobj[key] = obj[key];
      }
    }
  }
  newobj.toString = obj.toString;
  newobj.valueOf = obj.valueOf;
  return newobj;
}

//方法4
function deepCopy4(obj) {
  var str,newobj = obj.constructor ===Array ?[]:{};
  if(typeof obj !=='object'){
    return;
  }else if(window.JSON){
      str = JSON.stringify(obj),   //系列化对象
      newobj = JSON.parse(str);    //还原
  }else{
    for(var i in obj){
      newobj[i] = typeof  obj[i] ==='object'?deepCopy4(obj[i]):obj[i];
    }
  }
  return newobj;
}

//方法5 (JavaScript面向对象编程指南)
function deepCopy5(p,c) {
  c = c ||{};
  for(var i in p ){
    if(p.hasOwnProperty(i)){
      if(typeof p[i] ==='object'){
        c[i] = Array.isArray(p[i])?[]:{};
        deepCopy5(p[i],c[i]);
      }else {
        c[i] = p[i];
      }
    }
  }
  return c;
}