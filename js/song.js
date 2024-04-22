document.addEventListener("DOMContentLoaded", function(){

    // nav:click
    let nav = document.querySelectorAll('nav li'),
        h = window.innerHeight;
    
    for(let i=0;i<nav.length;i++){
        nav[i].addEventListener('click',function(){
            // ??index 구하는법
            if(this.textContent == 'is'){
                window.scrollTo(0,0);
            }else if(this.textContent == 'work'){
                window.scrollTo(0,h);
            }else if(this.textContent == 'ing'){
                window.scrollTo(0,2*h);
            }
        });
    }
    // window scroll > nav 
    document.addEventListener('scroll',function(){
        if(window.scrollY >= 0 && window.scrollY < h){
            document.querySelector('.nav_on').classList.remove('nav_on');
            nav[0].classList.add('nav_on');
        }
        if(window.scrollY >= h && window.scrollY < 2*h){
            document.querySelector('.nav_on').classList.remove('nav_on');
            nav[1].classList.add('nav_on');
        }
        if(window.scrollY >= 2*h){
            document.querySelector('.nav_on').classList.remove('nav_on');
            nav[2].classList.add('nav_on');
        }
    });


    // .tab_head:click
    let tab_head = document.querySelectorAll('.is article:nth-of-type(3) .tab_head'),
        tab = document.querySelectorAll('.is article:nth-of-type(3)>div'),
        close_head = document.querySelectorAll('.tab_head'),
        head = [];
    let display_change; // setTimeout(display)

    display_change = setTimeout(display, 0);
    function display(){
        document.querySelector('.display span').innerText = '안녕하세요. 이송희입니다.';
        let typing = TypeHangul.type('.display span');
    }
        
    for(let i=0;i<tab_head.length;i++){ // tab_head change
        tab_head[i].addEventListener('click',function(){
            for(let idx=0;idx<tab.length;idx++){
                tab[idx].classList.remove('tab_on');
            }
            this.parentNode.classList.add('tab_on');
        });
    }
    for(let i=0;i<close_head.length;i++){ // tab_head close button
        head[i] = close_head[i].childNodes[2].textContent;
        close_head[i].children[1].addEventListener('click',function(){
            document.querySelector('.display span').innerText = head[i]+'탭을 닫지 말아주세요..!'
            clearTimeout(display_change);
            display_change = setTimeout(display, 3000);
            console.log(head[i]+'탭을 닫지 말아주세요..!');
        });
    }
    


    // .is about scroll > dots
    document.querySelector('.qna').addEventListener('scroll',function(){
        let qna = document.querySelector('.qna').offsetTop, //고정값
            qna_sT = document.querySelector('.qna').scrollTop, //변하는값
            qst = document.querySelectorAll('.qst'),
            top = [];
        for(let idx=0;idx<qst.length;idx++){ //각 qst높이값 저장
            top[idx] = qst[idx].offsetTop - qna;
        }
        for(let i=0;i<qst.length;i++){ // top > bluelight
            if(qna_sT >= top[i]){
                document.querySelector('.bluelight').classList.remove('bluelight');
                document.querySelector('.dots span:nth-child('+(i+1)+')').classList.add('bluelight');
            }
        }
    });
    // .is about dots click
    let dots = document.querySelectorAll('.dots span');
    for(let i=0;i<dots.length;i++){
        dots[i].addEventListener('click',function(){
            let qna = document.querySelector('.qna').offsetTop, //고정값
                qst = document.querySelectorAll('.qst'),
                top = [];
            for(let idx=0;idx<qst.length;idx++){ //각 qst높이값 저장
                top[idx] = qst[idx].offsetTop - qna;
            }
            //이동
            document.querySelector('.qna').scrollTo({left:0,top:top[i],behavior:'smooth'});
        });
    }


    //.work worklist
    let worklist = document.querySelectorAll('.worklist li');
    for(let i=0;i<worklist.length;i++){
        worklist[i].addEventListener('click',function(){
            document.querySelector('.workli_on').classList.remove('workli_on');
            this.classList.add('workli_on');
            document.querySelector('.work_on').classList.remove('work_on');
            document.querySelector('.work article:nth-child('+(i+2)+')').classList.add('work_on');           
        });
    }
    //.ing inglist
    let inglist = document.querySelectorAll('.inglist li');
    for(let i=0;i<inglist.length;i++){
        inglist[i].addEventListener('click',function(){
            document.querySelector('.ingli_on').classList.remove('ingli_on');
            this.classList.add('ingli_on');
            let ingbox = document.querySelector('.ing article').offsetTop, //고정값
                ing_li = document.querySelectorAll('.ing article>div'),
                top = [];
            for(let idx=0;idx<ing_li.length;idx++){ //각 ingli 높이값 저장
                top[idx] = ing_li[idx].offsetTop - ingbox;
            }
            //이동
            document.querySelector('.ing article').scrollTo({left:0,top:top[i],behavior:'smooth'});
        });
    }
    



    
});