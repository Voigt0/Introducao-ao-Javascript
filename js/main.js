      function login(){
        document.getElementById("login").innerHTML = document.getElementById("nome").value;
      }

      function produto(acao) {
        var unit1 = parseInt(document.getElementById("unit1").innerHTML);
        var precoUnit1 = parseFloat(document.getElementById("precoUnit1").innerHTML);
        var unit2 = parseInt(document.getElementById("unit2").innerHTML);
        var precoUnit2 = parseFloat(document.getElementById("precoUnit2").innerHTML);

        switch(acao){
                case 'p1':
                  document.getElementById("unit1").innerHTML = unit1 + 1;
                  document.getElementById("precoUnit1").innerHTML = precoUnit1 + 0.99;
                  break;
                case 'm1':
                  document.getElementById("unit1").innerHTML = unit1 - 1;
                  document.getElementById("precoUnit1").innerHTML = precoUnit1 - 0.99;

                  break;
                case 'p2':
                  document.getElementById("unit2").innerHTML = unit2 + 1;
                  document.getElementById("precoUnit2").innerHTML = precoUnit2 + 1.99;
                  break;
                case 'm2':
                  document.getElementById("unit2").innerHTML = ""+(unit2 - 1);
                  document.getElementById("precoUnit2").innerHTML = precoUnit2 - 1.99;
                  break;
            }
      }

      function finalizar(){
        window.location.href = window.location.href;
      }