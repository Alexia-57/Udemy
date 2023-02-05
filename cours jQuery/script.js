
//EVENEMENTS

/*$(function(){
  $("#p1").click(function(){
    $("#p5").hide();
  });
});

$(function(){
  $("#p2").mouseenter(function(){
    $("#p4").hide();
  });
});

$(function(){
  $("#p1").mouseleave(function(){
    $("#p5").show();
  });
});

$(function(){
  $("#p3").hover(function(){
    $("#p4").hide();
  },
  function(){
    $("#p4").show()
  });
});

$(function(){

  $("#p1").on({
   mouseenter: function(){
    $("#p5").hide();
   },
   mouseleave: function(){
     $("#p5").show();
   },
   click: function(){
     $("#p4").hide();
   }
   });

  });
  */

  //EFFETS

/*
$(function(){
  $("#p1").click(function(){
    $("#p2").hide(3000, function(){
      $("#p3").hide("slow", function(){
        $("#p4").hide(3000)
      });
    });
  });
});

$(function(){
  $("#p1").click(function(){
    $("#p5").toggle();
  });
});

$(function(){
  $("#p1").click(function(){
    $("#p5").fadeOut(3000);
  });
});

$(function(){

  $("#p4").fadeOut();

  $("#p1").click(function(){
    $("#p4").fadeIn(3000);
  });
});

*/

//ANIMATION

/*
$(function(){
  $("button").click(function(){
    $("div").animate({
      left: "600px",
      opacity: 0.2,
      width: "+=150px",
      height: "+=150px"
    },5000);
  });

  $(function(){
    $("button").click(function(){
      $("div").animate({left: "600px"}, 3000);
      $("div").animate({opacity: 0.2}, 3000);
      $("div").animate({width: "200px"}, 3000);
      $("div").animate({height: "200px"}, 3000);
    });

    $(function(){
      $("#start").click(function(){
        $("div").animate({left: "600px"}, 3000);
        $("div").animate({opacity: 0.2}, 3000);
        $("div").animate({width: "200px"}, 3000);
        $("div").animate({height: "200px"}, 3000);
      });

      $("#stop").click(function(){
        $("div").stop(true, true);
      });

      $(function(){
        $("#start").click(function(){
          $("div").slideUp(3000).slideDown(3000).fadeOut(3000),fadeIn(3000);
        });
   });
  */

  /*
   $(function(){
    var myVar = $("#p1").html();
    console.log(myVar);
    });

    $(function(){
      $("#start").click(function(){
      var myVar = $("#myInput").val();
      console.log(myVar);
      });
    });

    $(function(){
      $("#start").click(function(){
      var myVar = $("div").attr("style");
      console.log(myVar);
      });
    });

    $(function(){
      $("#start").click(function(){
      //var myVar = $("div").attr("style");
      //console.log(myVar);
      //$("#p1").text("Voila mon <b>nouveau</b> texte");
      $("#myInput").val("Nouvelle valeur");
      });
    });

    $(function(){
      $("#start").click(function(){
        $("div").append("<p>Mon nouveau paragraphe</p>");
      });
    });


    $(function(){
      $("#start").click(function(){
        $("#p1, #p2").addClass("red bold");
      });
    });

    $(function(){
      $("#but1").click(function(){
        $("#p1").addClass("red");
      });
    $(function(){
      $("#but2").click(function(){
        $("#p1").removeClass("red");
      });
    });

    $(function(){
      $("#but3").click(function(){
        $("#p3").css("color","green");
        console.log ($("#p3").css("color"));
      });
    });

    $(function(){
      $("#but4").click(function(){
        $("#p1").css({
          "color": "red",
          "font-weight": "bold",
          "background":"yellow",
      });
    });

    $(function(){
      $("#but1").click(function(){
        $("#but2").width(150);
        $("#but2").height(150);
      });
    });

  });

});
});


$(function(){
  $("#start").click(function(){
    $("#p1").css("border-color","green");
  });
});
*/

$(function(){
  $("#start").click(function(){
    $("p").filter(".special").css("border-color","green");
  });
})