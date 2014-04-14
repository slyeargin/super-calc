(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize() {
    $('#title').click(title);
    $('.number').click(display);
    $('.operator').click(doMath);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('.toggle').click(toggle);
    $('#push').click(printToTape);
  }

  function title(){
    var display = $('#calculator').css('display');
    if (display === 'none') {
      $('#calculator').fadeIn();
    } else {
      $('#calculator').fadeOut();
    }
  }

  function display(){
    var num = this.textContent;
    var output = $('#display').text();
    if (output === '0') {
      output = num;  // remove leading zeroes
    } else {
      output += num; // concatenate two strings
    }
    $('#display').text(output); // display new string
  }

  function clear(){
    if (this.textContent === 'C'){
      $('#display').text('0'); // replaces #display string
    } else {
      $('#display').text('hamburgers');
      $('#box').text(' ');
    }
  }

  function toggle(){
    var display = $('#display').text();
    $('#display').text(display * -1);
  }

  function doMath(){

  }

  function decimal() {
    var display = $('#display').text();
    var noDecimal = display.indexOf('.') === -1;
    if (noDecimal) {
      $('#display').text(display + '.');
    }
  }

  function printToTape(){
    var output = $('#display').text();
    $('#box').text(output * 1);
  }

})();
