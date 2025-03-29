var tabBar=document.getElementById('tabBar');
var end=document.getElementById('end');
var observer=new IntersectionObserver((entries)=>{
     if(entries[0].isIntersecting){
          tabBar.style.bottom="-70px";
     }else{
          tabBar.style.bottom="0px";
     }
});
observer.observe(end);