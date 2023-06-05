var rangeL = document.getElementById('rangeL');
var rangeR = document.getElementById('rangeR');
var valueL = document.getElementById('valueL');
var valueR = document.getElementById('valueR');
var myUnits = '$';

valueL.innerHTML = myUnits+rangeL.value;
valueR.innerHTML = myUnits+rangeR.value;

rangeL.oninput =function(){
  this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
  let value = (this.value/parseInt(this.max))*100
  var children = this.parentNode.childNodes[1].childNodes;
    children[1].style.width=value+'%';
    children[5].style.left=value+'%';
    children[7].style.left=value+'%';
    children[11].style.left=value+'%';
    children[11].childNodes[1].innerHTML=myUnits+this.value;
};

rangeR.oninput =function(){
  this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
  let value = (this.value/parseInt(this.max))*100
  var children = this.parentNode.childNodes[1].childNodes;
    children[3].style.width=(100-value)+'%';
    children[5].style.right=(100-value)+'%';
    children[9].style.left=value+'%';
    children[13].style.left=value+'%';
    children[13].childNodes[1].innerHTML=myUnits+this.value;
};