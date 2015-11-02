


// to define the color
var elements = document.getElementById('bottom-rm').children;
for(var i =0;i<elements.length;i++){
  elements[i].style.backgroundColor  =  "#" + Math.floor(Math.random()*16777215).toString(16);
}



var selfDropListner = function(el, target, source , sibling){
  console.log("insisde listner");
  if(target===source)
    dragdrop.cancel();
};


var dragdrop = dragula([document.getElementById('top-rm'), document.getElementById('bottom-rm')], {
    removeOnSpill: false,
    revertOnSpill:true,
    direction:'horizontal',
    invalid : function(el, target){
      return false;
    }
});

dragdrop.on('drop',selfDropListner);




