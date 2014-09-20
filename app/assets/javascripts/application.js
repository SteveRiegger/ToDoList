// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
/*---------function stripedTable recieves the id and classnames, checks for even or odd rows and passes the variables--------*/

window.onload = function(){
	stripedTable('list', 'pri_stripe', 'sec_stripe', 'over_stripe'); //stripe tables
}

function stripedTable(getId, class1, class2, class3){

	if(!document.getElementById) return false;
	if(!document.getElementById(getId)) return false;
	var getId=document.getElementById(getId);
	if(!getId){return false;}
	var trRows=getId.getElementsByTagName('tr');
	for(var i=0; i<trRows.length; i++){
		if(i>0){
			if ((i+3)%2==0){
				var evenodd='odd';
			}else{ 
				var evenodd='even';
			}
				addClass(trRows[i], class1, class2, evenodd);
				trRows[i].onmouseover = function(){mouseOver(this, class3); return false;}
		}//end if
	}//end for
}//end function

/*------------------------function addClass adds the additional classes for the striped background------------------------*/

function addClass(element, class1, class2, evenodd){

	if(evenodd=='odd'){
		var newClassName=element.className;
		newClassName+=' ';
		newClassName+=class1;
		element.className=newClassName;
	}
	if(evenodd=='even'){
		var newClassName=element.className;
		newClassName+=' ';
		newClassName+=class2;
		element.className=newClassName;
	}
}//end function

/*---------function mouseOver saves the original class, changes the class to change the background color---------------*/

function mouseOver(element, class3){
  var originalClass=element.getAttribute('class');
  var mouseOverClass=element.className;
	mouseOverClass+=' ';
	mouseOverClass+=class3;
	element.className=mouseOverClass;
	element.onmouseout = function(){mouseOut(this, originalClass); return false;}
}

/*--------------------------function mouseOut changes the class back to the original--------------------------------------*/

function mouseOut(element, originalClass){
  element.setAttribute('class', originalClass);
}