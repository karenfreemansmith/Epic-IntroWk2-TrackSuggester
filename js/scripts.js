$(document).ready(function() {
//UI logic
  // - get data from form
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var readiness = $("input:radio[name=startdate]:checked").val();
    var worktype = $("input:radio[name=project]:checked").val();
    var workplace = $("input:radio[name=organization]:checked").val();
    var interests = $("input:radio[name=subjects]:checked").val();
    var activities = $("input:radio[name=freetime]:checked").val();
    var values = $("input:radio[name=value]:checked").val();

    showResults(readiness, worktype, workplace, interests, activities, values);
  });

  // - display results
  function showResults(readiness, worktype, workplace, interests, activities, values) {
    var results=getTrack(readiness, worktype, workplace, interests, activities, values);

    $("#results").html(results);
    $("form#survey").hide();
    $("#results").show();
  }
});

//Business logic
function getTrack(readiness, worktype, workplace, interests, activities, values) {
    var Score = {
      "java":0,
      "php":0,
      "ruby":0,
      "csharp":0,
      "design":0
    };
    Score=considerReadiness(readiness, Score);
    Score=considerWorktype(worktype, Score);
    Score=considerWorkplace(workplace, Score);
    Score=considerInterests(interests, Score);
    Score=considerActivities(activities, Score);
    Score=considerValues(values, Score);
    //compare scores for each track and return string for best track
    var results="<h2>Your Results Are: </h2><ul>"
      + "<li class='csharp'>C#/.NET: " + Score.csharp/5*100 + "%</li>"
      + "<li class='design'>CSS/Design: " + Score.design/5*100 + "%</li>"
      + "<li class='java'>Java/Android: " + Score.java/5*100 + "%</li>"
      + "<li class='ruby'>Ruby/Rails: " + Score.csharp/5*100 + "%</li>"
      + "<li class='php'>PHP/Drupal: " + Score.php/5*100 + "%</li>"
    return(results);
  }

  // - analyze answers and determine best track
  function considerReadiness(readiness, Score) {
    if(readiness==="1016") {
      Score.csharp+=1;
      Score.ruby+=1;
      Score.design+=1;
    }
    if(readiness==="0117") {
      Score.php+=1;
      Score.java+=1;
      Score.design+=1;
    }
    if(readiness==="0317") {
      Score.csharp+=1;
      Score.ruby+=1;
      Score.design+=1;
    }
    if(readiness==="0517") {
      Score.php+=1;
      Score.java+=1;
      Score.design+=1;
    }
    if(readiness==="0817") {
      Score.csharp+=1;
      Score.ruby+=1;
      Score.design+=1;    }
    return Score;
  }
  function considerWorktype(worktype, Score) {
    if(worktype==="gameApp") {
      Score.java+=1;
    }
    if(worktype==="startupApp") {
      Score.ruby+=1;
    }
    if(worktype==="creativeApp") {
      Score.design+=1;
    }
    if(worktype==="socialApp") {
      Score.php+=1;
    }
    if(worktype==="businessApp") {
      Score.csharp+=1;
    }
    return Score;
  }
  function considerWorkplace(workplace, Score) {
    if(workplace==="non-profit") {
      Score.php+=1;
      Score.ruby+=1;
    }
    if(workplace==="government") {
      Score.php+=1;
      Score.net+=1;
    }
    if(workplace==="startup") {
      Score.ruby+=1;
      Score.java+=1;
    }
    if(workplace==="corporation") {
      Score.csharp+=1;
      Score.java+=1;
    }
    if(workplace==="freelance") {
      Score.design+=1;
    }
    return Score;
  }
  function considerInterests(interests, Score) {
    if(interests==="math") {
      Score.java+=1;
    }
    if(interests==="english") {
      Score.php+=1;
    }
    if(interests==="science") {
      Score.ruby+=1;
    }
    if(interests==="art") {
      Score.design+=1;
    }
    if(interests==="business") {
      Score.csharp+=1;
    }
    return Score;
  }
  function considerActivities(activities, Score) {
    if(activities==="games") {
      Score.java+=1;
    }
    if(activities==="literary") {
      Score.php+=1;
    }
    if(activities==="social") {
      Score.ruby+=1;
    }
    if(activities==="loner") {
      Score.design+=1;
    }
    if(activities==="work") {
      Score.csharp+=1;
    }
    return Score;
  }
  function considerValues(values, Score) {
    if(values==="mobile") {
      Score.java+=1;
    }
    if(values==="look") {
      Score.design+=1;
    }
    if(values==="function") {
      Score.ruby+=1;
      Score.php+=1;
      Score.java+=1;
      Score.csharp+=1;
    }
    if(values==="all") {
      Score.design+=1;
      Score.ruby+=1;
      Score.php+=1;
      Score.java+=1;
      Score.csharp+=1;
    }
    if(values==="none") {
      Score.design=0;
      Score.ruby=0;
      Score.php=0;
      Score.java=0;
      Score.csharp=0;
    }
    return Score;
  }
