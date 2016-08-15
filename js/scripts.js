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
    var Score=getTrack(readiness, worktype, workplace, interests, activities, values);
    var results="<ul>"
      + "<li class='csharp' style='width: "+Score.csharp+"%'>C#/.NET: " + Score.csharp + "%</li>"
      + "<li class='design' style='width: "+Score.design+"%'>CSS/Design: " + Score.design + "%</li>"
      + "<li class='java' style='width: "+Score.java+"%'>Java/Android: " + Score.java + "%</li>"
      + "<li class='ruby' style='width: "+Score.ruby+"%'>Ruby/Rails: " + Score.ruby + "%</li>"
      + "<li class='php' style='width: "+Score.php+"%'>PHP/Drupal: " + Score.php + "%</li>"
      + "</ul>";
    $("#results").html(results);
    $("form#survey").hide();
    $(".tracks").hide();
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
    Score.csharp=Score.csharp/20*100; //converts raw score to percentage
    Score.design=Score.design/20*100;
    Score.java=Score.java/20*100;
    Score.ruby=Score.ruby/20*100;
    Score.php=Score.php/20*100;
    return(Score);
  }

  // - analyze answers and determine best track
  function considerReadiness(readiness, Score) {
    if(readiness==="1016") {
      Score.csharp+=6;
      Score.ruby+=6;
      Score.design+=2;
    }
    if(readiness==="0117") {
      Score.php+=6;
      Score.java+=6;
      Score.design+=2;
    }
    if(readiness==="0317") {
      Score.csharp+=6;
      Score.ruby+=6;
      Score.design+=2;
    }
    if(readiness==="0517") {
      Score.php+=6;
      Score.java+=6;
      Score.design+=2;
    }
    if(readiness==="0817") {
      Score.csharp+=6;
      Score.ruby+=6;
      Score.design+=2;    }
    return Score;
  }
  function considerWorktype(worktype, Score) {
    if(worktype==="gameApp") {
      Score.java+=3;
      Score.ruby+=2;
    }
    if(worktype==="startupApp") {
      Score.ruby+=3;
    }
    if(worktype==="creativeApp") {
      Score.design+=2;
      Score.csharp+=3;
      Score.java+=3;
    }
    if(worktype==="socialApp") {
      Score.php+=4;
      Score.ruby+=2;
    }
    if(worktype==="businessApp") {
      Score.csharp+=4;
      Score.java+=3;
    }
    return Score;
  }
  function considerWorkplace(workplace, Score) {
    if(workplace==="non-profit") {
      Score.php+=2;
      Score.ruby+=2;
    }
    if(workplace==="government") {
      Score.php+=2;
      Score.net+=3;
    }
    if(workplace==="startup") {
      Score.ruby+=3;
      Score.java+=2;
    }
    if(workplace==="corporation") {
      Score.csharp+=4;
      Score.java+=2;
    }
    if(workplace==="freelance") {
      Score.design+=5;
      Score.php+=3;
    }
    return Score;
  }
  function considerInterests(interests, Score) {
    if(interests==="math") {
      Score.java+=2;
      Score.csharp+=1;
    }
    if(interests==="english") {
      Score.php+=2;
      Score.ruby+=1;
    }
    if(interests==="science") {
      Score.ruby+=4;
    }
    if(interests==="art") {
      Score.design+=5;
    }
    if(interests==="business") {
      Score.csharp+=1;
    }
    return Score;
  }
  function considerActivities(activities, Score) {
    if(activities==="games") {
      Score.java+=3;
    }
    if(activities==="literary") {
      Score.php+=2;
    }
    if(activities==="social") {
      Score.ruby+=2;
    }
    if(activities==="loner") {
      Score.design+=2;
    }
    if(activities==="work") {
      Score.csharp+=2;
    }
    return Score;
  }
  function considerValues(values, Score) {
    if(values==="mobile") {
      Score.java+=4;
    }
    if(values==="look") {
      Score.design+=4;
    }
    if(values==="function") {
      Score.ruby+=3;
      Score.php+=3;
      Score.java+=3;
      Score.csharp+=3;
    }
    if(values==="all") {
      Score.design+=2;
      Score.ruby+=2;
      Score.php+=2;
      Score.java+=2;
      Score.csharp+=2;
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
