jQuery(function () {
    console.log("jQuery READY");
    var div1 = $("<div></div>").text(" Hello World");
    var div2 = $("<h2></h2>").text(" div 2");
    div2.css("background-color", "yellow");
    var div3 = $("<h2></h2>").text(" div 3");
    div3.css("background-color", "yellow");
  
    var isHide = false;
  
    var button = $("<button>Show</button>");
    button.addClass("btn btn-primary btn-lg");
    button.on("click", () => {
      if (isHide) {
        div1.show();
        div2.show();
        div3.show();
        isHide = false;
      } else {
        div1.hide();
        div2.hide();
        div3.hide();
        isHide = true;
      }
    });
    $("#container").append(button);
    $("#container").append(div1);
    $("#container").append(div2);
    $("#container").append(div3);
  
    var div4 = $("<h2></h2>").text("Show my name");
    div4.on("click", function () {
      $(this).text("Nguyen Thi Hoang Lan");
    });
    $("#container").append(div4);
  
    var input1 = $("<input />");
    input1.attr("id", "input1");
    input1.attr("type", "number");
  
    var input2 = $("<input />");
    input2.attr("id", "input2");
    input2.attr("type", "number");
  
    $("#container1").append(input1);
    $("#container1").append(input2);
  
    var buttonCalculate = $("<button></button>").text("Tính tổng");
    buttonCalculate.addClass("btn btn-primary");
  
    buttonCalculate.on("click", () => {
      console.log("click");
      var a = Number(input1.val());
      var b = Number(input2.val());
      var c = a + b;
      answer.text(" Kết quả: " + c);
    });
  
    var answer = $("<span></span>").text(" Kết quả: 0");
    $("#container1").append(answer);
  
    $("#container1").append(buttonCalculate);
  });
  
  