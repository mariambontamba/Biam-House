function(){     alert("Bienvenue chez Royal House"); 
} 
 
// Effet menu au scroll window.addEventListener("scroll", function(){ 
 
    let nav = document.querySelector("nav"); 
 
    if(window.scrollY > 50){         nav.style.background = "#061225"; 
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)"; 
    }else{         nav.style.background = "#0b1c39";         nav.style.boxShadow = "none"; 
    } 
 
}); 
 
// Animation bouton let bouton = document.querySelector(".btn"); 
 
bouton.addEventListener("mouseover", function(){     bouton.style.transform = "scale(1.1)"; 
}); 
 
bouton.addEventListener("mouseout", function(){     bouton.style.transform = "scale(1)"; 
}); 
