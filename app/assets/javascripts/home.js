$(document).ready(function() {
$('#new_information').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    e.preventDefault();
    return false;
  }
});
    $("#step_1").hide();
    $("#step_2").hide();
    $("#step_3").hide();
    $("#step_4").hide();
    $("#step_5").hide();
    $("#step_6").hide();
    $("#step_7").hide();
    $("#step_end").hide();
               $("#go_to_step_1").click(function(){
            $("#step_start").hide(500);
            $("#step_1").show(500);
          });
          $("#go_to_step_2").click(function(step_2){
            name = $("#information_name").val();
            $("#name").html(name);
            $("#step_1").hide(500);
            $("#step_2").show(500);
          });
          $("#go_to_step_3").click(function(){
            $("#step_2").hide(500);
            $("#step_3").show(500);
          });
          $("#step_3_choice_1").click(function(){
            $("#step_3").hide(500);
            $("#step_4").show(500);
            role = $("#step_3_choice_1").text();
            $("#information_role").val(role);
            $("#role").html(role);
          });
          $("#step_3_choice_2").click(function(){
            $("#step_3").hide(500);
            $("#step_4").show(500);
            role = $("#step_3_choice_2").text();
            $("#information_role").val(role);
            $("#role").html(role);
          });
          $("#step_3_choice_3").click(function(){
            $("#step_3").hide(500);
            $("#step_4").show(500);
            role = $("#step_3_choice_3").text();
            $("#information_role").val(role);
            $("#role").html(role);
          });
          $("#step_4_choice_1").click(function(){
            $("#step_4").hide(500);
            $("#step_5").show(500);
            needed = $("#step_4_choice_1").text();
            $("#information_needed").val(needed);
          });
          $("#step_4_choice_2").click(function(){
            $("#step_4").hide(500);
            $("#step_5").show(500);
            needed = $("#step_4_choice_2").text();
            $("#information_needed").val(needed);
          });
          $("#step_4_choice_3").click(function(){
            $("#step_4").hide(500);
            $("#step_5").show(500);
            needed = $("#step_4_choice_3").text();
            $("#information_needed").val(needed);
          });
          $("#go_to_step_6").click(function(){
            $("#step_5").hide(500);
            $("#step_6").show(500);
          });
          $("#go_to_step_7").click(function(){
            $("#step_6").hide(500);
            $("#step_7").show(500);
          });
          $("#go_to_step_end").click(function(){
            $("#step_7").hide(500);
            $("#step_end").show(500);
          });
});
