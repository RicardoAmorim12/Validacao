function validarlogin(){
            var email = flogin.email.value;
            var senha = flogin.pwd1.value;
           
            if(email == "" || email.indexOf('@')== -1){
              
            $("#erro").animate({top: '20px'});
            $("#erro").show();
            $("#sucesso").hide();
            $("#sucesso").animate({top: '-40px'});
         
            flogin.email.focus();
          return false;
            }  
            if(senha == "" || pwd1.length <= 5){
            $("#erro").animate({top: '20px'});
            $("#erro").show();
            $("#sucesso").hide();
            $("#sucesso").animate({top: '-40px'});
         
            flogin.pwd1.focus();
            return false;
            }else{

            $("#sucesso").animate({top: '10px'});
            $("#sucesso").show();
            $("#erro").hide();
            $("#erro").animate({top: '-20px'});
          
            }
            }
            function validarcadprod(){
            $("#avisopadrao").animate({top: '10px'});
            $("#avisopadrao").show();
            $("#avisomaxima").hide();
            $("#avisomaxima").animate({top: '-20px'});
            $("#avisomedia").hide();
            $("#avisomedia").animate({top: '-20px'});
             $("#avisoalta").hide();
            $("#avisoalta").animate({top: '-20px'});
             $("#avisonenhumao").hide();
            $("#avisonenhuma").animate({top: '-20px'});
            }
            function valcadprod(){
            var titulo = fcadprod.titulo.value;
            var produto = fcadprod.produto.value;
            var valor =  fcadprod.vlProduto.value;
            
            if(titulo ==""){
               $("#errop").animate({top: '20px'});
            $("#errop").show();
           
              fcadprod.titulo.focus();
              return false;
            }
            if(produto ==""){
               $("#errop").animate({top: '20px'});
            $("#errop").show();
           
              fcadprod.produto.focus();
              return false;
            }
            if(valor ==""){
               $("#errop").animate({top: '20px'});
            $("#errop").show();
              fcadprod.vlProduto.focus();
              return false;
            }
            else{
              $("#sucessop").animate({top: '10px'});
            $("#sucessop").show();
            $("#errop").hide();
            $("#errop").animate({top: '-20px'});
            }
          }


              function validarcadastro(){
            var email = fcadastro.email.value;
            var senha = fcadastro.pwd2.value;
            var nome =  fcadastro.nome.value;
            var estado =  fcadastro.estado.value;
            var cpf =  fcadastro.cpf.value;
            var csenha= fcadastro.pwdc.value;

            if(nome ==""){
            $("#erroc").animate({top: '20px'});
            $("#erroc").show();
            $("#sucessoc").hide();
            $("#sucessoc").animate({top: '-40px'});
              fcadastro.nome.focus();
              return false;
            }
              if(estado ==""){
 $("#erroc").animate({top: '20px'});
            $("#erroc").show();
            $("#sucessoc").hide();
            $("#sucessoc").animate({top: '-40px'});
              fcadastro.estado.focus();
              return false;
            }
              if(cpf ==""){
 $("#erroc").animate({top: '20px'});
            $("#erroc").show();
            $("#sucessoc").hide();
            $("#sucessoc").animate({top: '-40px'});
              fcadastro.cpf.focus();
              return false;
            }
              if(csenha ==""){
 $("#erroc").animate({top: '20px'});
            $("#erroc").show();
            $("#sucessoc").hide();
            $("#sucessoc").animate({top: '-40px'});
              fcadastro.csenha.focus();
              return false;
            }

            if(email == "" || email.indexOf('@')== -1){
              
            $("#erroc").animate({top: '20px'});
            $("#erroc").show();
            $("#sucessoc").hide();
            $("#sucessoc").animate({top: '-40px'});
         
            fcadastro.email.focus();
          return false;
            }  
            if(senha == "" || pwd2.length <= 5){
            $("#erroc").animate({top: '20px'});
            $("#erroc").show();
            $("#sucessoc").hide();
            $("#sucessoc").animate({top: '-40px'});
            flogin.pwd1.focus();
            return false;
            }
            else{
            $("#sucessoc").animate({top: '10px'});
            $("#sucessoc").show();
            $("#erroc").hide();
            $("#erroc").animate({top: '-20px'});
          
            }
            }