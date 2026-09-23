/* Template10 decorative helper only. No API/login/admin/business logic changes. */
(function(){
  'use strict';
  function boot(){
    var hero=document.getElementById('home');
    var content=hero&&hero.querySelector('.hero-content');
    if(!hero||!content)return;
    if(!content.querySelector('.template10-hero-cta')){
      var cta=document.createElement('a');
      cta.className='template10-hero-cta';
      cta.href='#news';
      cta.textContent='ดูข้อมูลเพิ่มเติม';
      content.appendChild(cta);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
