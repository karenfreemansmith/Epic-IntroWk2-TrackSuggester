$(document).ready(function() {
//UI logic
  // - get data from form
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var readiness = $("input:radio[name=startdate]:checked").val();
    var woktype = $("input:radio[name=project]:checked").val();
    var workplace = $("input:radio[name=organization]:checked").val();
    var interests = $("input:radio[name=subjects]:checked").val();
    var activities = $("input:radio[name=freetime]:checked").val();
    var values = $("input:radio[name=value]:checked").val();

    showResults(readiness, worktype, workplace, interests, activities, values);
  });
  // - display results
  function showResults(readiness, worktype, workplace, interests, activities, values) {
    var results="";
    results+=considerReadiness(readiness);
    results+=considerWorktype(worktype);
    results+=considerWorkplace(workplace);
    results+=considerInterests(interests);
    results+=considerActivities(activities);
    results+=considerValues(values);
    $("#results").html("<h2>" + results + "</h2>");
    //show-hide sections as needed...
  }
//Business logic
  // - analyze answers and determine best track
  function considerReadiness(readiness) {
    return readiness + ", ";
  }
  function considerWorktype(worktype) {
    return worktype + ", ";
  }
  function considerWorkplace(workplace) {
    return workplace + ", ";
  }
  function considerInterests(interests) {
    return interests + ", ";
  }
  function considerActivities(activities) {
    return activities + ", ";
  }
  function considerValues(values) {
    return values;
  }
});
