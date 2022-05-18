
  var loadFile = function(event, elementId) {
    var reader = new FileReader();
    reader.onload = function(){
        console.log(elementId);
      var picture = document.getElementById(elementId);
      picture.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };