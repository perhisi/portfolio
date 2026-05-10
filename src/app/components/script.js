<script
  dangerouslySetInnerHTML={{
    __html: `(()=>{const thumbs=document.querySelectorAll('.gallery-thumb');const modal=document.getElementById('image-modal');const modalImg=document.getElementById('modal-img');const btnClose=document.getElementById('modal-close');const btnPrev=document.getElementById('modal-prev');const btnNext=document.getElementById('modal-next');let current=0;const srcs=Array.from(thumbs).map(t=>t.getAttribute('data-src'));
            thumbs.forEach((t,i)=>{t.addEventListener('click',()=>{open(i)})});
            function open(i){current=i; modal.classList.remove('hidden'); modal.style.display='flex'; modalImg.src=srcs[i]; document.body.style.overflow='hidden';}
            function close(){modal.classList.add('hidden'); modal.style.display=''; modalImg.src=''; document.body.style.overflow='';}
            function next(){current=(current+1)%srcs.length; modalImg.src=srcs[current];}
            function prev(){current=(current-1+srcs.length)%srcs.length; modalImg.src=srcs[current];}
            btnClose?.addEventListener('click',close);btnPrev?.addEventListener('click',prev);btnNext?.addEventListener('click',next);
            document.addEventListener('keydown',e=>{if(modal.classList.contains('hidden'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev();});})()`,
  }}
/>;
