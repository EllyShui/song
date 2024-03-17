document.addEventListener("DOMContentLoaded", function(){

    // nav:click
    let nav = document.querySelectorAll('nav li'),
        h = window.innerHeight;
    
    for(var i=0;i<nav.length;i++){
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
    

    // .is tool,likes tab_head:click
    let tab_head = document.querySelectorAll('.is article:nth-of-type(2) .tab_head'),
        tab = document.querySelectorAll('.is article:nth-of-type(2)>div');
    
    for(var i=0;i<tab_head.length;i++){
        tab_head[i].addEventListener('click',function(){
            for(var idx=0;idx<tab.length;idx++){
                tab[idx].classList.remove('tab_on');
            }
            this.parentNode.classList.add('tab_on');
        });
    }
    
    // .is about dots
    document.querySelector('.qna').addEventListener('scroll',function(){
        let qna = document.querySelector('.qna').offsetTop,
            qna_sT = document.querySelector('.qna').scrollTop,
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
        console.log(qna_sT, qna);
    });
    // .is about scroll > dots
    let dots = document.querySelectorAll('.dots span');
    for(let i=0;i<dots.length;i++){
        dots[i].addEventListener('click',function(){
            let qna = document.querySelector('.qna').offsetTop,
                qna_sT = document.querySelector('.qna').scrollTop,
                qst = document.querySelectorAll('.qst'),
                top = [];
            for(let idx=0;idx<qst.length;idx++){ //각 qst높이값 저장
                top[idx] = qst[idx].offsetTop - qna;
            }
            //i 이용


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



    
});