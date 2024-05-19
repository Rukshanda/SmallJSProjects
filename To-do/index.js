

// jQuery

 $('ul').on('click' , '.list-text' , function(){
   if($(this).css('color') === 'rgb(211, 211, 211)'){
      $(this).css({color : 'rgb(255 , 255 , 255)',
                   textDecoration: 'none'});

   } else {
    $(this).css({color : 'lightgray' ,
    textDecoration : 'line-through'});
   }
 })
 
 $('ul').on('click' , '.delete' , function(event){
    $(this).parent().fadeOut(500).remove();
    event.stopPropagation();
 })

 $('input').keypress(function(event){
  if(event.which === 13 ){
    if ($('input').val() == ""){
        alert('Write Something')
    } else {
        addList();
    }
  }
 })

 $('.plus-icon').click(function(){
     if($("input").val() == ""){
        alert("Write something")
     } else {
        addList();
     }
 });

 function addList (){
    let value = $('input').val();
    $('input').val("");
    $('ul').append(` <li class="list">
                    
    <span class="list-text">${value}</span>
    <i class="bi bi-shield-x delete"></i>
</li>`);
 }