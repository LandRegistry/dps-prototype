/* global $ */

// Warn about using the kit in production
/*if (window.console && window.console.info) {
  //window.console.info('GOV.UK Prototype Kit - do not use for production')
  //session
  if (typeof(Storage) !== "undefined") {

  } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
} */
//sign in validation
//$('.sign-in-validate').each(function() {
  //var email_signin = $(this).find('#email-signin');
//  var password_signin = $(this).find('#email-signin');

  //var submit_signin = $('.targetloginpage');
$(document).ready(function () {
    window.GOVUKFrontend.initAll();

//hjere
$('.listings-v7 .dps-grid-tile:odd').addClass('odd');
$('.listings-v7 .dps-grid-tile:even').addClass('even');
    //$('.what-choose-type').parent().find('.govuk-breadcrumbs').hide();
//add hash to dataset download urls
//ukcomphash
//overseashash
//leaseshash

$('.dashboard-width').parent().parent().parent().addClass('new-dash-width');

$('.ukcomphash').click(function(){
  window.location.hash = 'ukcompany';
  console.log('uk');
});
$('.overseashash').click(function(){
  window.location.hash = 'overseascompany';
  console.log('overseas');
});

$('.base-bar').hide();
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1000) {
    $('.base-bar').fadeIn('fast');
  } else {
    $('.base-bar').fadeOut('fast');
  }
});

//last downloaded datetime
var d = new Date();
var strDate = d.getFullYear() + (d.getMonth()+1) + "/" + d.getDate();

//$('.last-downloaded-date').text(strDate);
$('.leaseshash').click(function(){
  window.location.hash = 'registeredleases';
  console.log('registered leases');
});


$(document).scroll(function () {

  var y = $(this).scrollTop();
  if (y > 100) {
    $('.fixed-bar').fadeIn();
  } else {
    $('.fixed-bar').fadeOut();
  }
});

$('.overlay').hide();
$('.download-wrapper a.open-dialogue').click(function() {
  //event.preventDefault();
  $('.overlay').fadeIn('fast');
});
$('.close-dialoge').click(function() {
  event.preventDefault();
  $('.overlay').fadeOut('fast');
});
//this always first
//$('.hidden').hide();
$('.govuk-button').click(function(){
//  alert('cliked');
  //$('.hidden').show();
});

    $('.targetloginpage').click(function() {
      if($('#email-signin').val() == '') {
      //  alert('email');
        $('.targetloginpage').event.preventDefault();
      }
      if($('#email-signin').val() == '') {
        //alert('password');
        $('.targetloginpage').event.preventDefault();
      }
    });
//});

$('.filter-user-type .multiple-choice').click(function() {
   $('.filter-user-type .multiple-choice').removeClass('input_selected');
   $(this).addClass('input_selected');
   $('.filter-user-type .multiple-choice input').prop('checked', false).attr('checked', false);
   $(this).find('input').prop('checked', true).attr('checked', true);

   $('.filter-user-type .multiple-choice').removeClass('usertype_selected');
   $(this).addClass('usertype_selected');
});

//feedback
$('#location-specific').click(function() {
   if($('#location-specific').is(':checked')) {
     $('#link').prop("disabled", false);
  }
});
$('#location-all').click(function() {
   if($('#location-all').is(':checked')) {
     $('#link').prop("disabled", true).attr('disabled');
  }
});

$(".download-wrapper :checkbox").prop('checked', false);



//Contexts
$('.context2-3 #tab_past-week').hide();
$('.state-2 a').click(function() {
  event.preventDefault();
});

$('.state-2, .state-3').hide();
$('section.attachment .govuk-button').each(function(){
  event.preventDefault();
});

$('.download-from-listings').click(function(){
  $('.modal').show();
});

$('.listings-page-logged-in .modal-content .govuk-button').click(function(){
  $('.listings-page-logged-in');
});

$('section.attachment, .product-page').each(function(){
  var gotostate2 = $(this).find('a.gotostate2');
  var state1 = $(this).find('.state-1');
  var state2 = $(this).find('.state-2');
  var state2a = $(this).find('.state-2 a.govuk-button');
  var state3 = $(this).find('.state-3');
  var govbutton = $(this).find('.download-wrapper .govuk-button');
  var statusText = $(this).find('.show-status');
  var clickDownload = $(this).find('.download');
  var thisModal = $(this).find('.modal-listings');
  var openModal = $(this).find('.agree-to-licence');
  var closeModal = $(this).find('.modal-content .govuk-button');

  openModal.click(function(){
    thisModal.show();
  });

  closeModal.click(function(){
    thisModal.hide();
    state1.hide();
    state2.hide();
    state3.show();
  });

  var fileSelected = '0';

  govbutton.click(function(){
    //alert('cliked');
    $('.hidden').show();
  });

  clickDownload.click(function(){
    //alert();
    switch($(this).attr('data-slide')) {
      case '1':
        statusText.text('You downloaded the full dataset on 21 January 2019');
        break;
      case '2':
        statusText.text('You downloaded change only file on 21 January 2019');
        break;
    }
  });


  govbutton.unbind( "click" );
  $(this).find($(".download-wrapper :checkbox")).bind('change', function(){
    //alert('selected');
    govbutton.removeClass('disabled_btn');
    //$('.download-wrapper .govuk-button').bind( "click" );

    state2a.click(function(){
      $('.state-2').hide();

      state3.fadeIn('fast');
    });
  });

  gotostate2.click(function() {
    //$('.state-2, .state-3').hide();
    //state2.fadeIn('fast');
  //  state1.hide();
    event.preventDefault();
    ///////here//

  //  state1.hide();
    state2.hide();
    //state3.show();
    $('.modal').fadeIn();
  });

  state2a.click(function() {
    state2.hide();
    state3.fadeIn('fast');
    event.preventDefault();
  });

  $(this).find('.modal-listings .govuk-button').click(function(){
    $(this).find('.modal-listings').fadeOut('fast');
    $(this).find('.state-2').hide();
    $(this).find('.state-3').fadeIn('fast');
    event.preventDefault();
    $(this).find('#tab_past-week').fadeIn('fast');
    $('.hidden').show();
  });
});


$('.modal-listings .govuk-button').click(function() {
  $('.section-selected').hide();
  $('.next-section-selected').show();

});

$('.alert-test a').click(function(){
  $('.alert-test').hide();
  event.preventDefault();
});

$('.modal-content .govuk-button, .cancel-this').click(function(){
  $('#myModal').fadeOut('fast');
});

$('section.attachment, .product-page').each(function(){
  $(this).find('.cancel-this').click(function(){
    $(this).find($('.state-1').fadeIn('fast'));
    $(this).find($('.state-3').hide());
    $(this).find($('.state-2').hide());
    $(this).find($(".download-wrapper :checkbox").prop('checked', false)); // Unchecks it
    $(this).find($('.download-wrapper .govuk-button').addClass('disabled_btn'));
    event.preventDefault();
  });
});

//this is when they agree to licence that appears in the modal
$('.product-page .modal-content .govuk-button').click(function(){
  $('.state-2').hide();
  $('.state-3').show();
  $('html, body').animate({
        scrollTop: $(".blue-box").offset().top
    }, 1000);
  $('.hidden').show();
  //alert('test');
});
$('.download-wrapper .govuk-button').click(function(){
   $('#tab_past-week').fadeIn('fast');
});
//
//Get data attribute of prototype
$('.context').each(function(){
  var contextState = $(this).attr("data-id");
  //console.log(contextState);

  switch(contextState) {
    case 'id-1':
      var context = 'context1'; //logged out
      break;
    case 'id-2':
      var context = 'context2'; //logged-in, but not agreed to licence
      break;
    case 'id-3':
      var context = 'context3'; //logged-in, has already agreed to licence
      break;
  }

});

$('.download-started').hide();
  $('.hide').hide();
  $('.download-now').click(function() {
    $('.download-started').fadeIn().delay( 800 );
    $('.download-otopn-selected').hide().delay( 800 );
    $(this).hide();
    var h1text = $('.download-started h2.hide').text();
    $('h1').replaceWith('<div class="govuk-panel govuk-panel--confirmation"><h2 class="govuk-panel__title">Your dataset is downloading</h2></div>');
  });

$('.non-js').replaceWith('<div class="state-1 toggle-states"><a class="govuk-button" href="#">View licence</a></div><div class="state-2 toggle-states"><ul><li>Point 1</li><li>Point 2</li><li>Point 3</li><li>Point 4</li><li>Point 5</li></ul><br><br><a class="govuk-button" href="#">Agree</a></div><div class="state-3 toggle-states"><h3>Latest version</h3><p>Last updated: 12 Demeber 2019</p><a class="govuk-button" href="#" download>Dowload latest</a><br><a class="govuk-button" href="#" download>Dowload Changle only</a></div>');

//          </div>
$('.listingspage-flat').each(function(){
  var toggleState = $(this).find('.toggle-states');
  var state1 = $(this).find('.state-1');
  var state2 = $(this).find('.state-2');
  var state3 = $(this).find('.state-3');

  toggleState.hide();
  state1.show();

  $('.state-1 a').click(function() {
    state1.hide();
    state2.show();
    event.preventDefault();
  });
  $('.state-2 a').click(function() {
    state2.hide();
    state3.show();
    event.preventDefault();
    //licence agreed
  });
  $('.state-3 a').click(function() {
    //state2.show();
    //state2.show();
    event.preventDefault();
  });
});

$('#createaccount').submit(function () {
  //alert('fired');
});

  $('.table-hack').each(function() {
    $(this).find('td').addClass('govuk-table__cell');
    $(this).find('tr td:first-child').addClass('add_bold');
    $(this).find('thead td').addClass('add_bold');
  });

  $(".fixed-view-downloads").hide();
  $(".add-to-download").click(function() {
    var thisText = $(this).parent().find('h2').text();
    //console.log(thisText);
    $('.fixed-view-downloads span').text(thisText);
    $(".fixed-view-downloads").fadeIn();
  });
  $(".closethis").click(function() {
    $(".fixed-view-downloads").hide();
  });

  $('.filter-user-type').each(function() {
    //$( this ).addClass( "foo" );
    var gotoPersonal = 'create-personal-account/1-create-account';
    var gotoUK = 'create-uk-business-account/2-1-createaccount-uk';
    var gotoOversea = 'create-overseas-account/3-1-createaccount-overseas';

    var thisradio = $(this).find('.govuk-radios__item input');
  //$('#user-select input').on('change', function() {
    $('#user-select .multiple-choice').click(function() {
       var target = $('#user-select .multiple-choice.usertype_selected input').val();

         switch(target) {
              case 'personal':
                  $('.govuk-form-group a').attr('href', gotoPersonal);
                  break;
              case 'uk-organisation':
                  //alert(target);
                  $('.govuk-form-group a').attr('href', gotoUK);
                  break;
              case 'overseas-organisation':
                  //alert(target);
                  $('.govuk-form-group a').attr('href', gotoOversea);
                  break;
          }
      //}
    });
  });

  //prettify JSON snippetsif (!library)
   var library = {};

    library.json = {
       replacer: function(match, pIndent, pKey, pVal, pEnd) {
          var key = '<span class=json-key>';
          var val = '<span class=json-value>';
          var str = '<span class=json-string>';
          var r = pIndent || '';
          if (pKey)
             r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
          if (pVal)
             r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
          return r + (pEnd || '');
          },
       prettyPrint: function(obj) {
          var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
          return JSON.stringify(obj, null, 3)
             .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
             .replace(/</g, '&lt;').replace(/>/g, '&gt;')
             .replace(jsonLine, library.json.replacer);
          }
       };

    var account = { active: true, codes: [48348, 28923, 39080], city: "London" };
    var planets = [{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }];
    $('#account').html(library.json.prettyPrint(account));
    $('#planets').html(library.json.prettyPrint(planets));



    //download page
    $(".terms").each(function() {
      var checkDataTypeSelection = $(this).find('.govuk-checkboxes checkbox');
      var enableDownload = $(this).find(".govuk-button");
//console.log('fojnd htis');
      $(this).find(":checkbox").bind('change', function(){
      //  val = this.checked; //<---
          $(enableDownload).removeAttr('disabled');
          $(enableDownload).attr('aria-disabled', 'false').removeClass('govuk-button--disabled');

        //  $(this).parent().parent().parent().parent().parent().find('.govuk-tag').hide();
      });
    });

    $(".remove-dataset").click(function() {
      $(this).parent().parent().hide();
    });

    //download page
    $(".download-file-page").each(function() {
      var checkDataTypeSelection = $(this).find('.govuk-checkboxes checkbox');

//console.log('fojnd htis');
      $(this).find(":checkbox").bind('change', function(){
        //  alert($(this).attr("value"));
      });
    });

    $(".full-screen").each(function(){
      $(this).parent().parent().parent().addClass('full-width');
    })
    //GDS Alpha banner
    $('<div class="govuk-phase-banner"><p class="govuk-phase-banner__content"><strong class="govuk-tag govuk-phase-banner__content__tag ">beta</strong>  <span class="govuk-phase-banner__text">This is a new service – your <a class="govuk-link" href="mailto:n.phillips@kainos.com">feedback</a> will help us to improve it.</span>  </p></div>').insertAfter('.govuk-header');

    //sticky inpage nav on details pageTitle
    //var stickyTop = $('.js-stick-at-top-when-scrolling').offset().top;

  /*  $(window).on( 'scroll', function(){
        if ($(window).scrollTop() >= stickyTop) {
            $('.js-stick-at-top-when-scrolling').css({position: "fixed", top: "0px"});
            $('.govuk-grid-column-two-thirds').css('margin-left','33%');
        } else {
            $('.js-stick-at-top-when-scrolling').css({position: "relative", top: "0px"});
            $('.govuk-grid-column-two-thirds').css('margin-left','0');
        }
    });
*/
    //
    //back buttons

    //Eilis, will this mess anything uop for you?
    $("a.govuk-back-link").click(function() {
        return false;
    });

    $("a.govuk-back-link").click(function(){
  		parent.history.back();
  		return false;
  	});

    $('.sprint-wrap').find('tr:even').css({'background-color':'red'}).end().find('tr:odd').css({'background-color':'blue'});

    //Flat UI - version 2

    $("#view-licence").click(function(event) {
    $("#step-1").hide();
    $("#step-2").show();
    });
     $("#accept-licence").click(function(event) {
    $("#step-1").hide();
    $("#step-2").hide();
    $("#step-3").show();
    $("#step-4").hide();
    });
     $("#accept-licence-back-step-2").click(function(event) {
    $("#step-1").show();
    $("#step-2").hide();
    $("#step-3").hide();
    $("#step-4").hide();
    });
     $("#accept-licence-back-step-3").click(function(event) {
    $("#step-1").show();
    $("#step-2").hide();
    $("#step-3").hide();
    $("#step-4").hide();
    });
     $("#download-options-back-step-3").click(function(event) {
    $("#step-2").show();
    $("#step-1").hide();
    $("#step-3").hide();
    $("#step-4").hide();
    });
     $("#latest-version").click(function(event) {
    $("#step-4").show();
    $("#step-1").hide();
    $("#step-2").hide();
    $("#step-3").hide();
    });




})
