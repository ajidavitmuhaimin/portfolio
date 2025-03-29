console.warn("app is running...");
var myPic=document.getElementById("myPic");
var tabBar=document.getElementById("tabBar");
var observer=new IntersectionObserver((entries)=>{
     if(!entries[0].isIntersecting){
          console.log("hide");
          tabBar.style.bottom="-70px";
     }else{
          console.log("show");
          tabBar.style.bottom="0px";
     }
});
observer.observe(myPic);