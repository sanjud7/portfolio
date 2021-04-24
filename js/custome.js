function flip(){

        var div1=document.getElementById("div1");
    	var div2=document.getElementById("div2");
    	
      if (div1 !== undefined && div2 !== undefined) {
    	  div1.style.display = div2.style.display === '' ? 'none' : div2.style.display === 'none' ? 'none' : 'block';
    	  div2.style.display = div1.style.display === 'block' ? 'none' : 'block';
      }
    }

