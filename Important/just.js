function boom(){
    document.getElementById('getValues').addEventListener('click', function(){
        var valueArr = [];
        document.querySelectorAll('.test').forEach(function(el){
          valueArr.push(el.value);
        });
        console.log(valueArr);
      });
}