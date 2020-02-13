let i=0;
var tab=[];
function pobierz(){
    let sp=document.getElementById('zadanie');
    let w;
    if(sp.value!==""){
        w=sp.value;
        // localStorage.setItem("myElement",w);
        // console.log(localStorage.getItem("myElement"));
    }else return null;
    return w;
} 
function czyszczenie(){
    let cialo=document.getElementById('zadanie');
    cialo.value="";
}
let b=document.getElementById('dowyslania');
b.addEventListener('click', function (e){
    e.preventDefault();
    let dod=document.getElementById('list');
    if(pobierz())
    {
      var c=pobierz()
    }
    else{
        return null;
    }
    const now=new Date();
    let dzien=now.getDate();
    if(dzien<10) dzien='0'+dzien;
    let miesiac=now.getMonth()+1;
    if(miesiac<10) miesiac='0'+miesiac;
    let rok= now.getFullYear();
    //let g=document.createElement('li');
    let godz=now.getHours();
    if(godz<10) godz='0'+godz;
    let minuta=now.getMinutes();
    if(minuta<10) minuta='0' + minuta;
    let txt= c+ " " + dzien + "/" + miesiac + "/" + rok + " " + godz + ":" + minuta ;
    tab[tab.length-1]=txt;
    localStorage.setItem(txt,txt);
    //localStorage.setItem("key",txt);
    if(localStorage.getItem(txt)){
     let w=document.getElementById('list');
        let g=document.createElement('li');
        w.appendChild(g);
        g.innerHTML=localStorage.getItem(txt);
        //localStorage.setItem("key",0);
    }
    czyszczenie();
});

function wyszukiwanie(){
    let val=this.value;
    let temp=document.querySelectorAll('li');
    temp.forEach(element => {
        let txt=element.innerText;
        if(txt.indexOf(val)==0){
            element.style.setProperty("display","");
        }else{
            element.style.setProperty("display", "none");
        }

        
    });

}
todoSearch.addEventListener("input", wyszukiwanie );
let btn=document.getElementById('usun');

btn.addEventListener('click',function(e){
    e.preventDefault();
    if (document.getElementById('todoSearch').value!== "") {
    let p=document.getElementById('list');
    let c=p.childNodes;
    console.log(c);
    for(i=1; i<c.length; i++){
    console.log(c[i]);
    if(c[i].style.display!=="none"){
    let p=c[i].textContent;
    localStorage.removeItem(p);
    c[i].remove();
    document.getElementById('todoSearch').value="";
  
    }
    }
    }
    else{
        let w=document.getElementById('list');
        let p=w.firstChild;
        let txt=p.textContent;
        localStorage.removeItem(txt);
        p.remove();

    };
    let p=document.getElementById('list');
    if (document.getElementById('todoSearch').value== ""){
    let c=p.childNodes;
    console.log(c);
    for(i=1; i<c.length; i++){
        c[i].style.setProperty("display","");
    }
}
})
window.addEventListener('load',function(e){
    e.preventDefault();
    const reg=new RegExp(".*[0-9][0-9][/][0-9][0-9][/][0-9][0-9][0-9][0-9].*");
    for(const el in localStorage)
    {
        if(reg.test(el)){
        let w=document.getElementById('list');
        let g=document.createElement('li');
        w.appendChild(g);
        g.innerHTML=localStorage.getItem(el);
        }

    }
});
