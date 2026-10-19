/* SCENORA — дополнение к исходному сайту. Ничего в существующих товарах, корзине и анимациях не изменяет. */
(function(){
'use strict';
function setup(){
 if(document.getElementById('scenoraOpenCall'))return;
 const designerSection=document.getElementById('designers');
 if(designerSection){
  // Старые карточки были демонстрационными вымышленными биографиями.
  const oldGrid=document.getElementById('designersGrid');if(oldGrid)oldGrid.remove();
  const head=designerSection.querySelector('.sec-title');if(head)head.innerHTML='Создавай <em>с SCENORA</em>';
  const tag=designerSection.querySelector('.sec-tag');if(tag)tag.innerHTML='OPEN CALL<br>DESIGNERS WANTED';
  const container=designerSection.querySelector('.container')||designerSection;
  const block=document.createElement('div');block.id='scenoraOpenCall';
  block.innerHTML=`<p class="sc-extra-lead">Мы ищем начинающих дизайнеров одежды, которым интересно превращать атмосферу кино и сериалов в самостоятельные повседневные вещи. У нас пока нет утверждённых капсул и заключённых договоров с дизайнерами. Этот раздел показывает будущую модель сотрудничества.</p>
   <div class="sc-extra-grid">
    <div class="sc-extra-card"><span class="sc-extra-num">01 / ЗАЯВКА</span><h3>Покажи свой стиль</h3><p>Расскажи о себе и оставь ссылку на портфолио с эскизами или готовыми работами.</p></div>
    <div class="sc-extra-card"><span class="sc-extra-num">02 / ОБСУЖДЕНИЕ</span><h3>Создадим концепцию</h3><p>Команда обсуждает атмосферу будущей капсулы, задачи, сроки, бюджет и формат сотрудничества.</p></div>
    <div class="sc-extra-card"><span class="sc-extra-num">03 / РЕАЛИЗАЦИЯ</span><h3>От эскиза до вещи</h3><p>После согласования условий дизайнер разрабатывает модели, а SCENORA организует производство и продвижение.</p></div>
   </div>
   <form class="sc-extra-form" id="scenoraDesignerForm">
    <div class="sc-extra-kicker">SCENORA / DESIGNER APPLICATION</div>
    <div class="sc-extra-field"><label for="scDesignerName">ИМЯ *</label><input id="scDesignerName" name="name" required maxlength="100" placeholder="Как к вам обращаться?"></div>
    <div class="sc-extra-field"><label for="scDesignerEmail">EMAIL *</label><input id="scDesignerEmail" name="email" type="email" required placeholder="you@example.com"></div>
    <div class="sc-extra-field"><label for="scDesignerArea">НАПРАВЛЕНИЕ *</label><select id="scDesignerArea" name="area" required><option value="">Выберите направление</option><option>Повседневная одежда</option><option>Верхняя одежда</option><option>Трикотаж</option><option>Аксессуары</option><option>Несколько направлений</option></select></div>
    <div class="sc-extra-field"><label for="scDesignerPortfolio">ССЫЛКА НА ПОРТФОЛИО *</label><input id="scDesignerPortfolio" name="portfolio" type="url" required placeholder="https://..."></div>
    <div class="sc-extra-field"><label for="scDesignerAbout">О СЕБЕ</label><textarea id="scDesignerAbout" name="about" maxlength="1500" placeholder="Расскажите об опыте и интересах"></textarea></div>
    <button class="sc-extra-button" type="submit">ПРОВЕРИТЬ ЗАЯВКУ ↗</button>
    <p class="sc-extra-note">Демонстрационная форма: данные никуда не отправляются и не сохраняются. Для реального приёма заявок потребуется подключить обработчик формы и политику обработки персональных данных. Условия сотрудничества и вознаграждение обсуждаются индивидуально до начала работы.</p>
    <div class="sc-extra-success" id="scDesignerSuccess" role="status">Анкета заполнена корректно. В демонстрационной версии отправка отключена.</div>
   </form>`;
  container.appendChild(block);
  const form=document.getElementById('scenoraDesignerForm');form.addEventListener('submit',function(e){e.preventDefault();document.getElementById('scDesignerSuccess').style.display='block';});
 }
 const license=document.getElementById('license');
 if(license){
  const backstage=document.createElement('section');backstage.className='sc-extra-section sc-extra-backstage';backstage.id='backstage';
  backstage.innerHTML=`<div class="sc-extra-container"><div class="sc-extra-kicker">BEHIND THE SCENE / НАШ ПЛАН</div><h2 class="sc-extra-heading">Как рождается <em>история</em></h2><p class="sc-extra-lead">Показываем путь будущей коллекции. Сейчас SCENORA находится на этапе разработки концепции и поиска партнёров.</p><div class="sc-extra-steps"><div class="sc-extra-step"><strong>01 / ИСТОРИЯ</strong><p>Выбираем атмосферу, а не копируем костюмы.</p></div><div class="sc-extra-step"><strong>02 / ДИЗАЙНЕР</strong><p>Находим автора и согласуем условия.</p></div><div class="sc-extra-step"><strong>03 / ЭСКИЗЫ</strong><p>Создаём и обсуждаем модели.</p></div><div class="sc-extra-step"><strong>04 / ПРОИЗВОДСТВО</strong><p>Выбираем ткани, делаем образцы, проверяем качество.</p></div><div class="sc-extra-step"><strong>05 / ПРЕМЬЕРА</strong><p>Готовим запуск и рассказываем историю вещи.</p></div></div></div>`;
  license.parentNode.insertBefore(backstage,license);
  const pass=document.createElement('section');pass.className='sc-extra-section sc-extra-passport';pass.id='passport-info';
  pass.innerHTML=`<div class="sc-extra-container"><div class="sc-extra-kicker">SCENORA / DIGITAL PRODUCT PASSPORT</div><h2 class="sc-extra-heading">У каждой вещи <em>своя история</em></h2><p class="sc-extra-lead">На будущей бирке будет QR-код, ведущий на цифровой паспорт: имя автора, происхождение материалов, сведения о производстве и уходе. Пока мы подготовили демонстрационный шаблон без выдуманных характеристик.</p><a class="sc-extra-button" href="passport.html">ОТКРЫТЬ ПАСПОРТ ↗</a><p class="sc-extra-note">Паспорт дополняет, но не заменяет обязательную маркировку изделия.</p></div>`;
  backstage.parentNode.insertBefore(pass,license);
 }
 const nav=document.querySelector('.nav-left');if(nav){const link=document.createElement('a');link.href='#backstage';link.className='nlink';link.textContent='Процесс';nav.appendChild(link);}
 const navRight=document.querySelector('.nav-right');if(navRight){const link=document.createElement('a');link.href='#passport-info';link.className='nlink';link.textContent='Паспорт';navRight.insertBefore(link,navRight.querySelector('.cart-pill'));}
 // Не просим номер карты и CVV даже в демоверсии.
 const checkout=document.querySelector('#checkout form');
 if(checkout){
  checkout.querySelectorAll('input').forEach(input=>{
   const label=input.closest('.form-group')?.querySelector('label')?.textContent?.trim()||'';
   if(/НОМЕР КАРТЫ|СРОК|CVV/i.test(label)){const group=input.closest('.form-group');if(group)group.remove();}
  });
  const note=checkout.querySelector('.pay-note');if(note)note.textContent='Демонстрационный заказ: данные никуда не отправляются, оплата не производится.';
  const button=checkout.querySelector('button[type="submit"]');if(button)button.textContent='ПОДТВЕРДИТЬ ДЕМОЗАКАЗ';
 }
 // Описание демопроектов: не заявляем, что товар уже произведён.
 const capsule=document.getElementById('capsule');if(capsule){
  const head=capsule.querySelector('.sec-head');if(head){const note=document.createElement('p');note.className='sc-extra-demo';note.textContent='ДЕМОНСТРАЦИОННЫЕ ОБРАЗЫ И ЦЕНЫ · КОЛЛЕКЦИИ ПОКА НЕ ПРОИЗВЕДЕНЫ';head.insertAdjacentElement('afterend',note);}
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(setup,350));else setTimeout(setup,350);
})();
