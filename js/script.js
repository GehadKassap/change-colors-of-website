
  $(document).ready(function(){
    $("#loadScreen").fadeOut(2000 , function(){
        $("body").css("overflow" , "auto")
    });

 let colorsContainer =  $(".colorItem");
//  console.log(colorsContainer)

colorsContainer.eq(0).css("backgroundColor" , "red");
colorsContainer.eq(1).css("backgroundColor" , "green");
colorsContainer.eq(2).css("backgroundColor" , "tomato");
colorsContainer.eq(3).css("backgroundColor" , "black");
colorsContainer.eq(4).css("backgroundColor" , "#09c");
colorsContainer.eq(5).css("backgroundColor" , "lightgreen");

colorsContainer.click(function(){

   let color =  $(this).css("backgroundColor"); // css as a getter;
   
   $("h2 , p").css("color" , color)

    
})

// $(".optionContainer").animate({left:`-${widthChange}px`})  // defult
// $(".option").css("display" , "none")
$(".optionContainer i").click(function(){

    // $(".option").css("display" , "block") or
    // $(".option").toggle(500); or
    // let widthChange = $(".option").outerWidth(true);
  
    if($(".optionContainer").css("left") == "0px") // y3ni lw zaher
    {
        let widthChange = $(".option").outerWidth(true);
        $(".optionContainer").animate({left:`-${widthChange}px`} , 500)
   // had5lo gowa

    }
    else
    {
        $(".optionContainer").animate({left:`0px`} , 500); // hazhero bara

    }




  });


  // for scroll 
  $(window).scroll(function()
  {
   let wScroll = $(window).scrollTop(); //method  tell me how much i scroll
   let offsetTop = $("#option").offset().top ; 
    if(wScroll > offsetTop -100)
    {
          $("nav").addClass("forNav");
          $("#btnModify").fadeIn(1000);
    }
    else
    {
        $("nav").removeClass("forNav");
        $("#btnModify").fadeOut(1000);


    }
  });

  $("#btnModify").click(function(){
     $("html,body").animate({scrollTop:'0'} , 1000);
  });




   
    
  })
