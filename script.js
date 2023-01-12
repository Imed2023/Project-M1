var file = document.getElementById("embed-file")
var fline=document.getElementById("first-line")
var imgf=document.getElementById("webfu-img")


function myFile1() {
   

    imgf.style.opacity=0
    file.setAttribute("src","files/webf.pdf#toolbar=0")
    fline.innerHTML="Web Introduction"
   


    
}
function myFile2() {
    
    imgf.style.opacity=0
    file.setAttribute("src","files/internet-vs-web.pdf#toolbar=0")
    fline.innerHTML="The Internet VS the Web"
}

function myFile3() {
   
    imgf.style.opacity=0
    file.setAttribute("src","files/Webarchitectures.pdf#toolbar=0")
    fline.innerHTML="Web Architecture"
}

function myFile4() {
    
    imgf.style.opacity=0
    file.setAttribute("src","files/Network_Protocols_and_Communication.pdf#toolbar=0")
    fline.innerHTML="Protocols"
}
function myFile5() {
    
    imgf.style.opacity=0
    file.setAttribute("src","files/Servers-api.pdf#toolbar=0")
    fline.innerHTML="Servers and API"
}
function myFile6() {
   
    imgf.style.opacity=0
    file.setAttribute("src","files/Databases.pdf#toolbar=0")
    
}

function myFile7() {
   
    imgf.style.opacity=0
    file.setAttribute("src","files/Web-Programming.pdf#toolbar=0")
    
}

function myFile8() {
    
    imgf.style.opacity=0
    file.setAttribute("src","files/cms.pdf#toolbar=0")
    
}
function myFile9() {
    
    imgf.style.opacity=0
    file.setAttribute("src","files/code.pdf#toolbar=0")
    
}


/*---------------------Fonction Utilisée dans DOM Forms-------------------------------------*/


function isNumber() {
    let nimput=Number(document.getElementById("numb").value)

   if (Number.isInteger(nimput)) {
    if (nimput <= 10 && nimput >= 1) {}
    else {alert("Please input a number between 1 and 10")}
   }
   else {alert("Please input a number between 1 and 10")}
   
}



/*-----------------------------TOP Button-----------------------------------------*/
      var topbtn=document.getElementById('top');
      topbtn.style.left="5px";
      topbtn.style.bottom="5px";
      topbtn.style.width="50px";
      topbtn.style.position="fixed";
      topbtn.style.zIndex="10"
      
    

      

/*------------------------------------Logo-----------------------------------------*/      
    var logoimd=document.getElementById('imd-logo');               
    logoimd.style.position = "fixed";
    logoimd.style.bottom = "0";
    logoimd.style.right= "5px";
    logoimd.style.width="120px";      

    