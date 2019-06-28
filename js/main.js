$(document).ready(function(){
    $("#shit").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


var slides = document.querySelectorAll('#slides .slide'); 
var someslides = document.querySelectorAll('#someslides .someslide');
var lasttortures = document.querySelectorAll('#lasttortures .lasttorture');
//Первое, мы с помощью querySelectorAll получаем все слайды из контейнера.
//
var currentSlide = 0; 
var currentsomeSlide = 0;
var currenttortureSlide = 0;//Затем мы создаем переменную для получения текущего слайда.
//
var shitshit1 = 0;
var shitshit2 =1;
var shitshit3 = 2;

var foxamdwolfe1 = 0;
var foxamdwolfe2 = 1;
var foxamdwolfe3 = 2;

var wow1 = 0;
var wow2 = 1;
var wow3 = 2;
//ПЕРЕХОДЫ ПО КНОПОЧКАМ//
function firstslide() {
    goToSlide(shitshit1);
}
function secondslide() {
	goToSlide(shitshit2);
}
function thirdslide() {
	goToSlide(shitshit3);
}

function firstslide2() {
	goToSlide2(foxamdwolfe1);
}
function secondslide2() {
	goToSlide2(foxamdwolfe2);
}
function thirdslide2() {
	goToSlide2(foxamdwolfe3);
}

function firstslide3() {
	goToSlide3(wow1);
}
function secondslide3() {
   goToSlide3(wow2);
}
function thirdslide3() {
	goToSlide3(wow3);
}

function goToSlide3 (l) {
	lasttortures[currenttortureSlide].className = 'lasttorture';
	currenttortureSlide = (l+lasttortures.length)%lasttortures.length;
	lasttortures[currenttortureSlide].className = 'lasttorture freak';
}
 
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function goToSlide2(m) {
    someslides[currentsomeSlide].className = 'someslide';
    currentsomeSlide = (m+someslides.length)%someslides.length;
    someslides[currentsomeSlide].className = 'someslides show';
}

var aslider1 = document.getElementById('aslider1');
var aslider2 = document.getElementById('aslider2');
var aslider3 = document.getElementById('aslider3');

var clickme1 = document.getElementById('clickme1');
var clickme2 = document.getElementById('clickme2');
var clickme3 = document.getElementById('clickme3');

var babyclick1 = document.getElementById('babyclick1');
var babyclick2 = document.getElementById('babyclick2');
var babyclick3 = document.getElementById('babyclick3');

babyclick1.onclick = function() {
	firstslide3();
	document.querySelector('#babyclick1').style.backgroundColor = 'orange';
	document.querySelector('#babyclick2').style.backgroundColor = 'white';
    document.querySelector('#babyclick3').style.backgroundColor = 'white';
}
babyclick2.onclick = function() {
	secondslide3();
	document.querySelector('#babyclick2').style.backgroundColor = 'orange';
	document.querySelector('#babyclick1').style.backgroundColor = 'white';
    document.querySelector('#babyclick3').style.backgroundColor = 'white';
}
babyclick3.onclick = function() {
	thirdslide3();
	document.querySelector('#babyclick3').style.backgroundColor = 'orange';
	document.querySelector('#babyclick2').style.backgroundColor = 'white';
    document.querySelector('#babyclick1').style.backgroundColor = 'white';
}

aslider1.onclick = function() {
    firstslide();
	document.querySelector('#aslider1').style.backgroundColor = 'orange';
	document.querySelector('#aslider2').style.backgroundColor ='white';
	document.querySelector('#aslider3').style.backgroundColor ='white';
};
aslider2.onclick = function() {
	secondslide();
	document.querySelector('#aslider2').style.backgroundColor = 'orange';
	document.querySelector('#aslider1').style.backgroundColor ='white';
	document.querySelector('#aslider3').style.backgroundColor ='white';
}
aslider3.onclick = function() {
	thirdslide();
	document.querySelector('#aslider3').style.backgroundColor = 'orange';
	document.querySelector('#aslider1').style.backgroundColor ='white';
	document.querySelector('#aslider2').style.backgroundColor ='white';
}
 
clickme1.onclick = function () {
	firstslide2();
	document.querySelector('#clickme1').style.backgroundColor = 'orange';
	document.querySelector('#clickme2').style.backgroundColor ='white';
	document.querySelector('#clickme3').style.backgroundColor ='white';
}
clickme2.onclick = function () {
	secondslide2();
	document.querySelector('#clickme2').style.backgroundColor = 'orange';
	document.querySelector('#clickme3').style.backgroundColor ='white';
	document.querySelector('#clickme1').style.backgroundColor ='white';
}
clickme3.onclick = function () {
	thirdslide2();
	document.querySelector('#clickme3').style.backgroundColor = 'orange';
	document.querySelector('#clickme2').style.backgroundColor ='white';
	document.querySelector('#clickme1').style.backgroundColor ='white';
}