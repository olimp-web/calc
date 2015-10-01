var tmp = 0, //текущее число на дисплее
    has_dot=false, //флаг, имеет ли число на экране точку (дробную часть)
    operation="", //заданная операция
    num1=0; //сюда записывается введеное число, при переходе к введию второго

$(document).ready( function(){
// Выполнение начинается только после полной загрузки документа
  function result (){
    //Вычисление введенного выражения
  	if (num1 && tmp && operation){
      //Проверка ввода: введена операция и оба числа
  		tmp = parseFloat(tmp);
  		switch(operation){
	  		case "plus":
	  			tmp = num1 + tmp;
	  			break
	  		case "sub":
	  			tmp = num1 - tmp;
	  			break
	  		case "mult":
	  			tmp = num1 * tmp;
	  			break
	  		case "div":
	  			tmp = num1 / tmp;
	  			break
	  	}
  		has_dot = false;
  		num1 = 0;
  		operation = "";
      // сброс флагов и переменных в дефолтное состояние
  		$("#screen").text(tmp); // вывод результата на дисплей
  		$(".op-btn").css("background-color", "#f1f3c3");

  	}
  };

  $("#screen").text(tmp);//очистка диплея перед началом работы
  
  $(".num-btn").click(function(){
    //Обработчик цифровых кнопок
  	if (tmp=="0") {
  		tmp=$(this).text()
  	} else{
		tmp += $(this).text();
	};
  	$("#screen").text(tmp);
  });
  
  $(".dot-btn").click(function(){
    //Обработчик кнопки с разделителем дробной части (.)
  	if (!has_dot){
  		tmp += $(this).text();
  		$("#screen").text(tmp);
  		has_dot = true;
  	}
  });

  $(".clr-btn").click(function(){
    //Обработчик кнопки очистки дисплея
 	  tmp = 0;
  	has_dot = false;
  	$("#screen").text(tmp);
  });

  $(".res-btn").click(result); //Обработчик кнопки решения
  
  $(".op-btn").click(function() {
    result(); //пытаемся решить, если операция не была до этого введена,
  	operation = $(this).attr("id"); //то вводим операцию
  	num1 = parseFloat(tmp);
  	$(this).css("background-color", "#d1ff91")//"подсвечиваем" выбранную операцию
  	has_dot = false;
  	tmp = 0;
  });
});
