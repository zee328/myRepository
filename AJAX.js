var xhr=new XMLHttpRequest();
xhr.open('GET', 'http//google.com/data',true);
xhr.onload=function(){
    if (xhr.status===200){
        console.log(xhr.responseText);
    } else {
        console.error('error'+xhr.status);
    }
};
xhr.send();

