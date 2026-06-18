/* ──────────────────────────────────────────────
   ⚠️  주의: 발표/제출/공유 전에 아래 실제 API 키를
   반드시 제거하거나 재발급하세요.
   이 파일은 팀 내부 로컬 테스트 전용입니다.
────────────────────────────────────────────── */
var CONFIG = {
  OPENAI_API_KEY: "",   // 여기에 OpenAI API 키 입력 (예: "sk-...")
  KOCW_API_KEY: "",     // 여기에 공공데이터포털 KOCW API 키 입력
  KOCW_API_URL: "http://api.data.go.kr/openapi/tn_pubr_public_univ_edu_lctre_api"
};

var BOOK_DATA = [
  {img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABELDA8MChEPDg8TEhEUGSobGRcXGTMkJh4qPDU/Pjs1OjlDS2BRQ0daSDk6U3FUWmNma2xrQFB2fnRofWBpa2f/2wBDARITExkWGTEbGzFnRTpFZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2f/wAARCABaAEYDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABAUAAgMBBv/EADUQAAIBAwIDBgQFAwUAAAAAAAECAwAEERIhBRMxFCJBUWGBBnGRsRVCUqHRJDIzFiM0Q+H/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAQEBAAIDAQEAAAAAAAAAAAERAhIhMUFRAxP/2gAMAwEAAhEDEQA/APV8S4p+HDU1rPJGF1F0A0r6Ek1X8WBknSO3llMKI2mPBZtXhj0objjQx31o17I5tSxPL/KGG+TgZPyoOPsrniMnDZTo5SsI7cFXyM56jx9KqD14/EQpaCSJefyXMjAaTjJPtV244iXjW8ltPGE3aRsBQucauvSklrPFM9hajsssQlDcmDUWU+JbI39c1e9ENlxaQMyJIrCQTXcrDm5/KMDBUdMUDVPiG35FvNMpijnZ1DE5C6fH3rSLjltP2owBpUt4xIWXo3XYfSkwy3DrVoor9ZU5kiNFDrGWJ8SOnt0rSzZ1huGuYeJSy3EIRz2bYfLz60DFfiOydYBG+uSVlUxjqmfPw2rvEOPR2lwYoljlZdnBk06T5dKTRCfmosycUe3hZGiTswySvnXeLSm4v2kjW6ZWwuh7eQCPzIx1q4PUWl1FeQCWBw6E4yOmR1qULwSUPw9EzOzRd1nmiKFj54NSsg4yR/qX6iucyP8AWv1ry9zDEGCNpEh8KvDYxgAvp3O1dr/OT7TXpQ0QJIKAnqcioWjbqyH5kV5i7giR8KAKyW2LMvRQehY4rHiumfEPiDs989tBGjmMZZnJxnyGKEHxRcnV/Tw93Pi38Uveyzds0Migttg6t/XaqmylCybxlWPUFiB+/wB63nKGR+J7kKp5EGDjxfbPtU/1Nd6yvJg2Gc9/+KViyeTTGrrqBHTV4e9VuOHXUSc1XYnOMLnamcj1nC+LxcQt2d8RSI2llJ/celSvN2lk0UeWQszbkkVKf5z9V6WaxgaQTsup1Gx3+1Bo81zdSRS2wSNT3JFGDnPnW0vEtFo0jAlQOgFbC9jMSvpYKcHdSKzZYx60PIIonVLjUH8HPSuw2CykS62cEHpVLrFwjluuDgA/SgLy5uk4Fb9knaJzKEJXyNPbRp+GKJA2FB8z1qr8K5RaSGQ7b6M5pC01y4T+pdlP6+8WHTJJ+wph8PBYeIzoMDmx5IHTIODj08a11LJqTvbg+3s7ZFeXUytnLZ8Ku7EW2UiLHfAbbNDGQdrLrjSG3z4+1QTTpeHMrsgX/GEyAaxlpRlqTJaxtNHy5CN1AJxUpZdcWktgoCkgjx2qVr2swHacQe5V4wkaYTWdAJ094Agk0aHeSN1bmMdvCiWjaaIh2dc7kLgA+wqGwfYBmx5jFX4+2fQLlMBjDgZOM1gxxwWUkZ5Moc/LO9Hi0kaTSeb18h71SK1WCae1uFZ0mXIA6ke1NWwoBUxrlugwp0kgjwIPvWvBLgvx8BdTDlsrEDYEn6U2t+EW0HdgsyoP6260asM0SaVwoAzpRcD6mnXWxnnnKUvE2pwCc5O+K6Q0MS6TKnTJx1NWEPOunUKQ2dwxrcWK576gD06038auFV1xCW2dI5BFjlhtUsZySSds+mBUpixaKMLDqx13O30qVPGrsMbe9trqFzH+XYg7VeWTm/7cO2CNTgju/wDtLI7yK2jZYrfRq3NbSX7TW7cpQHHQetLxYm/oya1UhCmVKnbehZL+K2lIl1RyBcnIyMehpctxeKoacAPnpnG3yrDtcoM6mL/LsCGyAMY/moumlvxB5Xil5ysshPc27o3wPtRLzGaRlXLuPI7Ckpng7VGZIVRETG6HHgBXY7oKDoJbc4ycDGTSLpgEKNNGTpkXvBuprG4a7uIVWGVY5c5yNsj0oddVxKWLMp/MVPWijerBEqiNTp2Gd6ub8MZRIuIbaCNZiNencjfNSlUk0dyo1xHI8VOKlXxrUtNpOBhx/wAlx8gK4nAQnS6lHsKbVKx59X7XCp+BrJ/dcyn2FZS8HtICvNuymemogZp1S/iSLJc2odQwJfYjPhWdoHPAoHwO1SEA9Miun4ehP/dIPpVLpVW9XSANU2+B17hpnZgC2UAYG/3p5UALwBE/tuZh9Kq3w7G3W6m/anFSrOrAoT4ejUY7TMfpUpvUp59D/9k=',title:'건강정보보호',author:'용왕식, 구기동, 권주영, 김경희, 김문주, 김혜숙 | 현우사',price:'가격: 25,000원',desc:'『건강정보보호』는 〈개인정보와 개인건강정보보호〉, 〈우리나라 개인정보보호 관련 법규〉, 〈국외의 개인정보보호 관리체제〉 등 건강정보보호에 대한 기초적이고 전반적인 내용이 수록되어 있다.',link:'https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=%EA%B1%B4%EA%B0%95%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8+%EC%9A%A9%EC%99%95%EC%8B%9D'},
  {img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABELDA8MChEPDg8TEhEUGSobGRcXGTMkJh4qPDU/Pjs1OjlDS2BRQ0daSDk6U3FUWmNma2xrQFB2fnRofWBpa2f/2wBDARITExkWGTEbGzFnRTpFZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2f/wAARCABaAEYDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUAAwYCAQf/xAA4EAACAQMDAQUGAwYHAAAAAAABAgMABBEFEiExBhMiQXEUMlFhgZEVI7EHQmJyocEzNJKy0eHw/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EABsRAAIDAQEBAAAAAAAAAAAAAAABAhEhMRJB/9oADAMBAAIRAxEAPwC/t7eXEF9apDM6J3ZJCnzzWa/ELw9LmX71oP2hAnUbXHnEf91I4rUhUEgCuH2gJyzH9KdcJyS+hcMt37BJOblzLEctE3XGcc030W8M8lvMhKkuFYZ+4oCzAhup45Vc71IZWI5JXg5HB4+FTswWS5ELqVIkRgCPiaoTaRuGdFOGZQeuCa4NxCOssfXHvCgdR/zJZYVlKx5bLEEDPHrQjiF2b8tGKbmB3ke6RgnPzJzUki1jrv4t23vUyTjG4ZrukPtCh++a2T3ucP8AvcEcepNG/iU4lEZgTecH3vLAz/XitRrGNSg9NvZLsv3iRgLj3CTz5g58xUpQmd7fkfiNsDj/AATz8PFS3SYmLRvGrMEcsCxwG4x/70o79oZA1Wzz07o5/wBVJre8MV3GyDco42jzFN6pGUU3ofqQe41CUhQ0iRKWAf8AdUdc8ZPnVPZmcNrEa5PiYHHl1FDXItLqZVVikigIH95XxwCfhTjS9GvNNvUmnEIVDkqDyfrRUhZwxmpuYDLODg9MZ7tWx9TVYt2ALAOGPDflLlvWqJtaKZxGg/mY/wBhS257R3IHhkgjycD8sn9TQSbC2hytuyZCggAZH5Kc/wDddpA7twWXz8UK/aspda1qiruN64BIULGirn0OKAfV7h2ZZxeS48jcNj+lN5YvpH0CCBoWO5g3GPcC/pUrPdi5BLc3pEZjXanhLlufFzk1KR4OtD+02jW2p3cLztKGRCoCMB5+lIn7N2KSiOKW43fzj/in/aaV4poHQ4wCcj1obRgCk08hHHmTU7d0jAI7KWUQ7zfc7kIYZIxx9KPu5Ig/jYjIP3oie6j7h8EEnoM/KlNxM7vIQrJtzglc1T6a8GF2QYdu0Sd4dxcUumtGujGkES7SCMtXVg8yFVMgOTkgHirjetZxKQm5mBx8qpHERk7lQv1eFLLu7dQGKuAT60u1CykhmZERJVXGGZzzn60fNL7bcvvXc3GRjOPnQ0ljLGQTB3gHm0eeKJg3sjK9pJdbQDkIDn61KmjkRT3SyRlW8GR0I61KR9GTNJ2jdBbMrdWQgfekWnNcSW3s8IBIYsxPQCjO2DOtzFtPhMRz96G0+4W0hxszLMN3oPIVB7IZhdzHPHaSM0kZA8RHwxXF7OXsW2uGBXgbete3UntNjOgGGcYAPHl8aXLcyRp3Ps53KMKVccVZAbwGtbqOzXMiu0zDAA4CV7qas07Pk7QgCj5nnNWx91tEj29yCnJIAK59M0PcywSyByZhKDwzIelPQn0HgGBhHJPzJHlV8jTMVKo4B6ESN9+teIbeOUFZVXgjxhh+oq1J49qASQMQhXPfAY+lMuAlZbo3hubosCc7Tzk/H41KrsrkQT3LNtO4rgIwI6HzqVKTSY64O+1UUs+oWsanEe0ljjoc0n08vFfOZmSXcCFAPK8fOtD2hvI7aeNHYgshPAz50gNzah9wAz/LWUL0LenWni4juWbesvHC/wB6aLuLbjFGG+9L4tTgi92JR6LiibfUYrmZYkVtzHAyKKjQLRfJaJcI4lAXPTYAMUKumW4uATkndnmi7mzvicQW0Z/ieXA+wqgaXqQGTsz8FkrYNRdfqXHg64pe8LtjfbI3y2jmr103UzKS9upGevfA5oyPTbpSCVHH8QrAoWew2zx4ZViOclV4+9SjrrS72SUsiIQfi9ShSZqOO2Sn2y3bHBjIz9az1bHtcqnSlJAJEgwcdOtZDAqsHgslpzR+hRNLqsSr5eI+goLAp/2TRc3LbRuAUZxzijJ4BRsfmVASC6gjyJr1XVvdYH0NCXMaFpGKLnPXFWW6KJCQoByeQKgWCKlSpQCSpUqVjH//2Q==',title:'건강정보보호',author:'김상미, 박혜선, 이숙재, 정재연, 최희영 | 계축문화사',price:'',desc:'시시때때로 변하는 건강정보보호 분야의 최신 내용을 반영한 도서입니다. 의료기관과 보건의료 현장에서 필요한 개인건강정보의 보호와 관리 방법, 관련 법령과 제도를 체계적으로 이해할 수 있도록 구성되어 있습니다.',link:'https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=%EA%B1%B4%EA%B0%95%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8+%EA%B9%80%EC%83%81%EB%AF%B8+%EA%B3%84%EC%B6%95%EB%AC%B8%ED%99%94%EC%82%AC'},
  {img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABELDA8MChEPDg8TEhEUGSobGRcXGTMkJh4qPDU/Pjs1OjlDS2BRQ0daSDk6U3FUWmNma2xrQFB2fnRofWBpa2f/2wBDARITExkWGTEbGzFnRTpFZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2f/wAARCABaAEYDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAABgADBAUHAQL/xAA2EAACAQMCAwUGBQMFAAAAAAABAgMABBESIQUTMQYiMkFRYXGBkZKxFBUjUlNCYmOTocHR8P/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QAIBEAAgIBBAMBAAAAAAAAAAAAAAECERIDEyExQVFhMv/aAAwDAQACEQMRAD8AOl9fWvVcXwihDtnxi5iu1sbeRolCB3KnBbPQZ9NqaMXJ0gN0GFKslM8v8r/Ua4ZpMY5j/UaptfRcjW6VZIJ5s55sn1Glz5v5X+o1tn6bI1ulWTLcuqganOP8hFdN039/+oa219NkaxSrMrLj99YAi3mbBGNMjax8AelKlemw5GmL4RQR2u4dd3PHGkhgd05SjI+NG6+EUP8AFmb87RATgqu3zoQdMXUdIDH4XfIMvayAe6mmtLgdYX+VGs9ldaO822+c1AlsZlJ1KRjfcUd6XiItr2gci4beTA8u1lfHotNSwSwyGOSNkcdVI3FEoSe3GpQwzt0O9RJbK4lJBtyxPt3IoPXl1iMo35RR8tyMhTj1xXko37T8quxwe8gijEqZB2wBk0zLauue6dtjt0o70vQCp0t+0/KlUp1KnelQ3mY1VfCKouJuBxpQemFq9XwihjtFIIr5ygbn6VK4xjG/lSrs2r+SQUMaSL+moyFCKQAASDnJO/8A4V4mR4xMAqrqUJGo3XvMM9erbZ6YFDsF/NHdCRtDsxy2ynNF1hDFLElwYl5rDxkb/Omom5NEZ4ngRtegAK5BBOBkY3JPUnHQVyadIw0azgMFERyCBgDc+HOfZmpjW8LXHNaNWkXoSM4p159Izk7dd6EuOR9OWTohXd1GzOI5wMjQAcgAYOSe7nPsBqPdzh43SO5jVipXSdgM/wBR2zlR96tF4pbtLyjKFYDPeOK83hCwSuOpB3zSReXRSawXIDXKBkV1IO+NqVer6SONsBeh8jmlWaIpmkr4RQf2qnWHiysq6pVCHveHG9GC+EUIdqrZ5eKFomCuI1Oo+WMkU8eymr1yUCXc13eDIXPTAGKObBynD4z1wnSgO3nhSMOGDTc3zG5z7aObHuWaK+zaQcVRcnNNjihki77Zc7n31U3c94HE1uyPb5IkVvP4+VTbubBG+3nioEcyxq1sW0q7ZB6/Ci48CRk07RQ8SvCbybWhCnourIHTFOXN84VVFwzo+AULZVlA648qb7RxRmY/h2QaMLp8/XaqiCaSFJAMHWMHNc6jizryc0rHLtwLlig0KdwuelKo4GdyaVYJsq+EUJdpyTxKRQcHlD/mi1fCKAe2dzNF2hZUcgcpD96pBWw6itFCIZVcLpIYuME/eiiw4hLc8UEbdFT50Li5lBHfOxyPYaeh4ldQSmWOXS5GM6QaqoNEpRyCLjl3NBcxRQacFC5yud81W3V+bqNAIBGWOxDHb/aq644hc3Uokmk1sBgEqOlMiZxjcbdO6KpiCMEkONFJlmLYwcb5zXn8I/e3HdGTsf8Aquc59+m5z4RXlnZzknf2bUj04lCOTSpwoKVR2mGzYl8IoA7d28kfHFmZf05YlCt5EjORR+vhFQOOwxzcJnEsaOAMgMoOD61oOpDvoy2u10gaj76VdVkyTFw64lt1nRQUZtI3xvS/LrnGeWCAM7MDtjP2pjW+NGptHXTnb5UsUtsx5pV2lRbMcCljhQSfQDNKjvsRDEOGvKI0EhOCwUZI99KoudMdI//Z',title:'건강정보보호',author:'서정안 | 의학교육',price:'가격: 28,000원',desc:'『건강정보보호』는 의료행정에 대해 다룬 도서이며 〈개인정보와 개인건강정보보호〉, 〈우리나라 개인정보보호 관련 데이터 3법〉, 〈국외의 개인정보보호 관리체제〉 등을 수록하고 있어 기초적이고 전반적인 내용을 확인할 수 있다.',link:'https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=%EA%B1%B4%EA%B0%95%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8+%EC%84%9C%EC%A0%95%EC%95%88'},
];
function openBookModal(idx) {
  var b = BOOK_DATA[idx];
  document.getElementById('bm-img').src = b.img;
  document.getElementById('bm-title').textContent = b.title;
  document.getElementById('bm-author').textContent = b.author;
  var priceEl = document.getElementById('bm-price');
  priceEl.textContent = b.price;
  priceEl.style.display = b.price ? 'block' : 'none';
  document.getElementById('bm-desc').textContent = b.desc;
  var btn = document.getElementById('bm-link-btn');
  btn.onclick = function(){ if(b.link !== '#') window.open(b.link,'_blank'); else showToast('구매 링크 준비 중이에요'); };
  var overlay = document.getElementById('book-modal-overlay');
  overlay.style.display = 'flex';
}
function closeBookModal() {
  document.getElementById('book-modal-overlay').style.display = 'none';
}



var calEvents = {
  '2025-3-3':  [{type:'lecture', title:'1주차 · 정보보호개념',          content:'오리엔테이션, 1장. 개인정보보호',                                     time:'10:30', course:'건강정보보호'}],
  '2025-3-10': [{type:'lecture', title:'2주차 · 정보보호관련법률',       content:'제2장. 개인정보보호 관련법',                                          time:'10:30', course:'건강정보보호'}],
  '2025-3-17': [{type:'lecture', title:'3주차 · 정보보호관련법률',       content:'제3장. 건강정보보호 관련 법률 및 규정',                               time:'10:30', course:'건강정보보호'}],
  '2025-3-24': [{type:'lecture', title:'4주차 · 정보보호관련법률',       content:'제4장. 진료단계별 건강정보보호 및 보안',                              time:'10:30', course:'건강정보보호'}],
  '2025-3-31': [{type:'lecture', title:'5주차 · 정보처리단계별보호및보안',content:'제5장. 건강정보 처리 단계별 보호 및 보안',                            time:'10:30', course:'건강정보보호'}],
  '2025-4-7':  [{type:'lecture', title:'6주차 · 정보보호및보안기술',     content:'제7장. 개인건강정보보호 및 보안에 관한 정보기술',                     time:'10:30', course:'건강정보보호'}],
  '2025-4-14': [{type:'lecture', title:'7주차 · 정보보호평가제도및영향평가방법', content:'제8장. 건강정보보호 평가제도 및 영향평가',                    time:'10:30', course:'건강정보보호'}],
  '2025-4-21': [{type:'exam',    title:'8주차 · 중간고사',               content:'직무수행능력평가 1차',                                                time:'10:30', course:'건강정보보호'}],
  '2025-4-28': [{type:'lecture', title:'9주차 · 정보보호및보안교육기획및실행', content:'제6장. 개인건강정보보호 및 보안교육기획·실행관리 - PBL : OT',  time:'10:30', course:'건강정보보호'}],
  '2025-5-5':  [{type:'lecture', title:'10주차 · 정보보호관련표준과체계', content:'제10장. 건강정보보호 관리사례 - PBL : 활동',                         time:'10:30', course:'건강정보보호'}],
  '2025-5-12': [{type:'lecture', title:'11주차 · 정보보호및보안교육기획및실행', content:'제9장. 건강정보보호 관련 표준체계 - PBL : 활동',              time:'10:30', course:'건강정보보호'}],
  '2025-5-19': [{type:'holiday', title:'12주차 · 대체공휴일 휴강',       content:'휴강',                                                                time:'',      course:'건강정보보호'}],
  '2025-5-26': [{type:'special', title:'13주차 · 현장전문가특강',        content:'현장전문가특강',                                                       time:'10:30', course:'건강정보보호'}],
  '2025-6-2':  [{type:'lecture', title:'14주차 · PBL 활동발표 1',        content:'PBL 활동발표 1',                                                      time:'10:30', course:'건강정보보호'}],
  '2025-6-9':  [{type:'lecture', title:'15주차 · PBL 활동발표 2',        content:'PBL 활동발표 2',                                                      time:'10:30', course:'건강정보보호'}],
  '2025-6-16': [{type:'exam',    title:'16주차 · 기말고사',               content:'직무수행능력평가 2차',                                                time:'10:30', course:'건강정보보호'}],
};
var calTabIdx=0,calYear=2025,calMonth=5,selectedDay=null,editingEventKey=null,currentEditType='lecture';

function switchCalTab(idx){calTabIdx=idx;document.querySelectorAll('[id^="caltab-"]').forEach(function(el,i){el.style.background=i===idx?'#2B7FE0':'#F2F4F7';el.style.color=i===idx?'#fff':'#8B919C';});renderCalendar();renderWeekSchedule();}
function calPrevMonth(){calMonth--;if(calMonth<1){calMonth=12;calYear--;}updateCalMonthLabel();renderCalendar();}
function calNextMonth(){calMonth++;if(calMonth>12){calMonth=1;calYear++;}updateCalMonthLabel();renderCalendar();}
function updateCalMonthLabel(){var el=document.getElementById('cal-month-label');if(el)el.textContent=calYear+'년 '+calMonth+'월';}
function makeKey(y,m,d){return y+'-'+m+'-'+d;}
function getTabEvents(key){var all=calEvents[key]||[];return all.filter(function(e){return e.course==='건강정보보호';});}

function renderCalendar(){
  var grid=document.getElementById('home-cal-grid');if(!grid)return;
  var today=new Date(2025,4,5);
  var firstDay=new Date(calYear,calMonth-1,1).getDay();
  var dim=new Date(calYear,calMonth,0).getDate();
  var cells=[];
  for(var i=0;i<firstDay;i++)cells.push('<div></div>');
  for(var d=1;d<=dim;d++){
    var key=makeKey(calYear,calMonth,d);
    var evs=getTabEvents(key);
    var isToday=today.getFullYear()===calYear&&(today.getMonth()+1)===calMonth&&today.getDate()===d;
    var dow=(firstDay+d-1)%7;
    var tc=dow===0?'#E05C5C':dow===6?'#4A90D9':'#1A1A1A';
    var tC={lecture:'#2B7FE0',exam:'#E05C5C',task:'#3DB87A',holiday:'#F59C3C',special:'#3DB87A'};
    var dots='';var shown={};
    evs.forEach(function(e){if(!shown[e.type]){dots+='<div style="width:4px;height:4px;border-radius:50%;background:'+(tC[e.type]||'#2B7FE0')+';display:inline-block;margin:0 1px;"></div>';shown[e.type]=true;}});
    var inner=isToday
      ?'<div style="width:16px;height:16px;background:rgba(43,127,224,0.2);border:1px solid rgba(43,127,224,0.45);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto;font-size:9px;font-weight:700;color:#2B7FE0;">'+d+'</div>'
      :'<div style="font-size:10px;font-weight:'+(evs.length?'700':'400')+';color:'+tc+';line-height:1.8;">'+d+'</div>';
    inner+='<div style="display:flex;justify-content:center;gap:1px;min-height:6px;">'+dots+'</div>';
    cells.push('<div onclick="openDayModal('+d+')" style="padding:3px 0;cursor:pointer;border-radius:8px;" onpointerdown="this.style.background=\'#F2F4F7\';" onpointerup="this.style.background=\'transparent\';">'+inner+'</div>');
  }
  grid.innerHTML=cells.join('');
}

function renderWeekSchedule(){
  var container=document.getElementById('home-week-schedule');if(!container)return;
  var today=new Date(2025,4,5);var dow0=today.getDay();
  var sow=new Date(today);sow.setDate(today.getDate()-dow0);
  var weekEvs=[];
  for(var i=0;i<7;i++){
    var d2=new Date(sow);d2.setDate(sow.getDate()+i);
    var key2=makeKey(d2.getFullYear(),d2.getMonth()+1,d2.getDate());
    getTabEvents(key2).forEach(function(e){weekEvs.push({ev:e,date:new Date(d2),isToday:i===dow0});});
  }
  if(weekEvs.length===0){container.innerHTML='<div style="background:#F8F9FB;border-radius:12px;padding:14px;text-align:center;font-size:12px;color:#8B919C;">이번 주 일정이 없어요 😊</div>';return;}
  var ts={lecture:{bg:'#EBF4FF',ib:'#2B7FE0',ico:'📖',tc:'#5A8FC0'},exam:{bg:'#FFF0F0',ib:'#E05C5C',ico:'📝',tc:'#C04040'},task:{bg:'#F0FAF5',ib:'#3DB87A',ico:'✅',tc:'#2E8A5A'},holiday:{bg:'#FFF8EF',ib:'#F59C3C',ico:'🚫',tc:'#C07A20'},special:{bg:'#F0FAF5',ib:'#3DB87A',ico:'🎤',tc:'#2E8A5A'},assignment:{bg:'#FFF3DC',ib:'#F59C3C',ico:'📋',tc:'#C07A20'},study:{bg:'#F5F0FF',ib:'#8B6CE8',ico:'✏️',tc:'#6A4EC0'}};
  var dn=['일','월','화','수','목','금','토'];
  container.innerHTML=weekEvs.map(function(item){
    var s=ts[item.ev.type]||ts.lecture;
    var lbl=item.isToday?'<span style="font-size:10px;font-weight:700;background:#2B7FE0;color:#fff;padding:2px 7px;border-radius:7px;">오늘</span>'
                        :'<span style="font-size:10px;color:#8B919C;">'+(item.date.getMonth()+1)+'/'+item.date.getDate()+'('+dn[item.date.getDay()]+')</span>';
    return '<div style="background:'+s.bg+';border-radius:12px;padding:10px 12px;display:flex;align-items:center;gap:10px;">'
      +'<div style="width:34px;height:34px;background:'+s.ib+';border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:15px;">'+s.ico+'</div>'
      +'<div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A1A1A;">'+item.ev.title+'</div>'
      +'<div style="font-size:10px;color:'+s.tc+';margin-top:1px;">'+item.ev.course+(item.ev.time?' · '+item.ev.time:'')+'</div></div>'+lbl+'</div>';
  }).join('');
}

function openDayModal(d){
  selectedDay=d;
  var key=makeKey(calYear,calMonth,d);
  var evs=getTabEvents(key);
  var dn=['일','월','화','수','목','금','토'];
  var dow3=new Date(calYear,calMonth-1,d).getDay();
  var title=document.getElementById('modal-day-title');if(title)title.textContent=calMonth+'월 '+d+'일 ('+dn[dow3]+')';
  var evc=document.getElementById('modal-day-events');
  var emp=document.getElementById('modal-day-empty');
  var ts2={lecture:{bg:'#EBF4FF',color:'#2B7FE0',ico:'📖',label:'강의'},exam:{bg:'#FFF0F0',color:'#E05C5C',ico:'📝',label:'시험'},task:{bg:'#F0FAF5',color:'#3DB87A',ico:'✅',label:'과제'},holiday:{bg:'#FFF8EF',color:'#F59C3C',ico:'🚫',label:'휴강'},special:{bg:'#F0FAF5',color:'#3DB87A',ico:'🎤',label:'특강'}};
  if(evs.length===0){if(evc)evc.innerHTML='';if(emp)emp.style.display='block';}
  else{
    if(emp)emp.style.display='none';
    if(evc)evc.innerHTML=evs.map(function(e,idx){
      var s=ts2[e.type]||ts2.lecture;
      return '<div style="display:flex;align-items:center;gap:10px;background:'+s.bg+';border-radius:12px;padding:11px 12px;cursor:pointer;" onclick="openEditEvent(\''+key+'\','+idx+')">'
        +'<div style="font-size:18px;">'+s.ico+'</div>'
        +'<div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A1A1A;">'+e.title+'</div>'
        +'<div style="font-size:10px;color:'+s.color+';margin-top:2px;">'+s.label+(e.time?' · '+e.time:'')+'</div></div>'
        +'<div style="font-size:14px;">✏️</div></div>';
    }).join('');
  }
  var modal=document.getElementById('modal-cal-day');if(modal)modal.style.display='flex';
}
function closeDayModal(){var m=document.getElementById('modal-cal-day');if(m)m.style.display='none';}
function openAddEvent(){
  editingEventKey=null;currentEditType='lecture';
  var te=document.getElementById('edit-modal-title');if(te)te.textContent='일정 추가';
  var t=document.getElementById('edit-event-title');if(t)t.value='';
  var tm=document.getElementById('edit-event-time');if(tm)tm.value='';
  selectEventType('lecture');
  var db=document.getElementById('edit-delete-btn');if(db)db.style.display='none';
  document.getElementById('modal-cal-day').style.display='none';
  document.getElementById('modal-cal-edit').style.display='flex';
}
function openEditEvent(key,idx){
  editingEventKey=key+'__'+idx;
  var ev=(calEvents[key]||[])[idx];if(!ev)return;
  currentEditType=ev.type;
  var te=document.getElementById('edit-modal-title');if(te)te.textContent='일정 수정';
  var t=document.getElementById('edit-event-title');if(t)t.value=ev.title;
  var tm=document.getElementById('edit-event-time');if(tm)tm.value=ev.time||'';
  selectEventType(ev.type);
  var db=document.getElementById('edit-delete-btn');if(db)db.style.display='flex';
  document.getElementById('modal-cal-day').style.display='none';
  document.getElementById('modal-cal-edit').style.display='flex';
}
function selectEventType(type){
  currentEditType=type;
  var map={lecture:'#2B7FE0',exam:'#E05C5C',task:'#3DB87A',holiday:'#F59C3C'};
  ['lecture','exam','task','holiday'].forEach(function(t){
    var el=document.getElementById('etype-'+t);if(!el)return;
    el.style.background=t===type?map[t]:'#F2F4F7';
    el.style.color=t===type?'#fff':'#8B919C';
  });
}
function saveEvent(){
  var titleVal=(document.getElementById('edit-event-title').value||'').trim();
  var timeVal=(document.getElementById('edit-event-time').value||'').trim();
  if(!titleVal){showToast('제목을 입력해주세요');return;}
  var newEv={type:currentEditType,title:titleVal,time:timeVal,course:'건강정보보호'};
  if(editingEventKey){
    var parts=editingEventKey.split('__'),key3=parts[0],idx3=parseInt(parts[1]);
    if(!calEvents[key3])calEvents[key3]=[];
    calEvents[key3][idx3]=newEv;
  }else{
    var key4=makeKey(calYear,calMonth,selectedDay);
    if(!calEvents[key4])calEvents[key4]=[];
    calEvents[key4].push(newEv);
  }
  closeEditModal();renderCalendar();renderWeekSchedule();
  showToast('일정이 저장되었어요 ✓');
  setTimeout(function(){openDayModal(selectedDay);},250);
}
function deleteCurrentEvent(){
  if(!editingEventKey)return;
  var parts=editingEventKey.split('__'),key5=parts[0],idx5=parseInt(parts[1]);
  if(calEvents[key5])calEvents[key5].splice(idx5,1);
  closeEditModal();renderCalendar();renderWeekSchedule();
  showToast('일정이 삭제되었어요');
  setTimeout(function(){openDayModal(selectedDay);},250);
}
function closeEditModal(){var m=document.getElementById('modal-cal-edit');if(m)m.style.display='none';}

(function(){
  function initCal(){renderCalendar();renderWeekSchedule();}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(initCal,950);});}
  else{setTimeout(initCal,950);}
})();

function showToast(msg) {
  var t = document.getElementById('toast-msg');
  if(!t) return;
  t.textContent = msg;
  t.style.display = 'block';
  t.style.opacity = '1';
  setTimeout(function() {
    t.style.transition = 'opacity .4s';
    t.style.opacity = '0';
    setTimeout(function() { t.style.display='none'; t.style.transition=''; }, 400);
  }, 1800);
}

function showModal(id) {
  var m = document.getElementById(id);
  if(!m) return;
  if(id === 'modal-ai-menu') {
    m.style.display = 'block';
    m.style.background = 'rgba(0,0,0,0)';
    setTimeout(function(){ m.style.background='rgba(0,0,0,.3)'; m.style.transition='background .25s'; }, 10);
  } else {
    m.style.display = 'flex';
  }
}
function hideModal(id) {
  var m = document.getElementById(id);
  if(!m) return;
  if(id === 'modal-ai-menu') {
    m.style.background = 'rgba(0,0,0,0)';
    setTimeout(function(){ m.style.display='none'; m.style.transition=''; }, 250);
  } else {
    m.style.display = 'none';
  }
}


function flipCard2() {
  var front = document.getElementById('card-front-2');
  var back = document.getElementById('card-back-2');
  var btns = document.getElementById('card-btns-2');
  if (!front) return;
  var isFlipped = front.style.display === 'none';
  front.style.display = isFlipped ? 'flex' : 'none';
  back.style.display = isFlipped ? 'none' : 'block';
  btns.style.display = isFlipped ? 'none' : 'flex';
}
function flipCard3() {
  var front = document.getElementById('card-front-3');
  var back = document.getElementById('card-back-3');
  var btns = document.getElementById('card-btns-3');
  if (!front) return;
  var isFlipped = front.style.display === 'none';
  front.style.display = isFlipped ? 'flex' : 'none';
  back.style.display = isFlipped ? 'none' : 'block';
  btns.style.display = isFlipped ? 'none' : 'flex';
}
function flipCard4() {
  var front = document.getElementById('card-front-4');
  var back = document.getElementById('card-back-4');
  var btns = document.getElementById('card-btns-4');
  if (!front) return;
  var isFlipped = front.style.display === 'none';
  front.style.display = isFlipped ? 'flex' : 'none';
  back.style.display = isFlipped ? 'none' : 'block';
  btns.style.display = isFlipped ? 'none' : 'flex';
}
function flipCard5() {
  var front = document.getElementById('card-front-5');
  var back = document.getElementById('card-back-5');
  var btns = document.getElementById('card-btns-5');
  if (!front) return;
  var isFlipped = front.style.display === 'none';
  front.style.display = isFlipped ? 'flex' : 'none';
  back.style.display = isFlipped ? 'none' : 'block';
  btns.style.display = isFlipped ? 'none' : 'flex';
}
function flipCard6() {
  var front = document.getElementById('card-front-6');
  var back = document.getElementById('card-back-6');
  var btns = document.getElementById('card-btns-6');
  if (!front) return;
  var isFlipped = front.style.display === 'none';
  front.style.display = isFlipped ? 'flex' : 'none';
  back.style.display = isFlipped ? 'none' : 'block';
  btns.style.display = isFlipped ? 'none' : 'flex';
}
function flipCard7() {
  var front = document.getElementById('card-front-7');
  var back = document.getElementById('card-back-7');
  var btns = document.getElementById('card-btns-7');
  if (!front) return;
  var isFlipped = front.style.display === 'none';
  front.style.display = isFlipped ? 'flex' : 'none';
  back.style.display = isFlipped ? 'none' : 'block';
  btns.style.display = isFlipped ? 'none' : 'flex';
}
function flipCard8() {
  var front = document.getElementById('card-front-8');
  var back = document.getElementById('card-back-8');
  var btns = document.getElementById('card-btns-8');
  if (!front) return;
  var isFlipped = front.style.display === 'none';
  front.style.display = isFlipped ? 'flex' : 'none';
  back.style.display = isFlipped ? 'none' : 'block';
  btns.style.display = isFlipped ? 'none' : 'flex';
}

function flipCard() {
  var front = document.getElementById('card-front');
  var back = document.getElementById('card-back');
  var btns = document.getElementById('card-btns');
  if (!front) return;
  var isFlipped = front.style.display === 'none';
  front.style.display = isFlipped ? 'flex' : 'none';
  back.style.display = isFlipped ? 'none' : 'block';
  btns.style.display = isFlipped ? 'none' : 'flex';
}

/* ── 플래시카드 처음부터 다시 풀기 ── */
function resetFlashcard() {
  // 1번 카드 초기화
  var ids = ['','2','3','4','5','6','7','8'];
  ids.forEach(function(n) {
    var suffix = n === '' ? '' : '-' + n;
    var front = document.getElementById('card-front' + suffix);
    var back  = document.getElementById('card-back'  + suffix);
    var btns  = document.getElementById('card-btns'  + suffix);
    if (front) front.style.display = 'flex';
    if (back)  back.style.display  = 'none';
    if (btns)  btns.style.display  = 'none';
  });
  // goPage는 같은 페이지면 무시하므로 강제 이동
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(p) { p.classList.remove('active'); });
  var target = document.getElementById('page-lumi-flashcard');
  if (target) {
    target.classList.add('active');
    // pageHistory도 갱신
    if (typeof pageHistory !== 'undefined') {
      pageHistory.push('page-lumi-flashcard');
    }
    if (typeof updateNav === 'function') updateNav('page-lumi-flashcard');
  }
  showToast('처음부터 다시 시작해요! 🔄');
}

// ── Lumi 실시간 채팅 ──
var lumiHistory = [];

var LUMI_ICON_HTML = '<div style="width:22px;height:22px;background:linear-gradient(135deg,#8B6CE8,#C060C0);border-radius:6px;display:flex;align-items:center;justify-content:center;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M4 5.5C4 4.1 5.1 3 6.5 3H17.5C18.9 3 20 4.1 20 5.5V18.5C20 19.9 18.9 21 17.5 21H6.5C5.1 21 4 19.9 4 18.5V5.5Z" fill="white" opacity=".2"/><path d="M10 8C8.9 8 8 8.9 8 10C8 10.8 8.4 11.4 9 11.8V13H10V11.8C10.6 11.4 11 10.8 11 10H13C13 10.8 13.4 11.4 14 11.8V13H15V11.8C15.6 11.4 16 10.8 16 10C16 8.9 15.1 8 14 8C13.4 8 12.9 8.3 12.5 8.7C12.1 8.3 11.6 8 11 8H10Z" fill="white" opacity=".95"/><line x1="8" y1="15" x2="16" y2="15" stroke="white" stroke-width="1.2" stroke-linecap="round" opacity=".6"/></svg></div>';


/* ── 채팅 수정 ── */
var currentEditChatId = '';
var chatPinOn = false;

// chatId → 제목 element ID, 카드 element ID, 채팅 페이지 ID 매핑
var CHAT_MAP = {
  join:  { titleEl: 'title-chat-join',  cardEl: 'card-chat-join-history',           pageId: 'page-chat-join-history',           pinEl: 'pin-badge-join' },
  norm:  { titleEl: 'title-chat-norm',  cardEl: 'card-chat-normalization-history',   pageId: 'page-chat-normalization-history',   pinEl: 'pin-badge-norm' },
  trans: { titleEl: 'title-chat-trans', cardEl: 'card-chat-transaction-history',     pageId: 'page-chat-transaction-history',     pinEl: 'pin-badge-trans' }
};

function openChatEdit(chatId, fallbackTitle) {
  currentEditChatId = chatId;
  var map = CHAT_MAP[chatId];

  // 현재 목록에 표시 중인 이름을 실시간으로 읽어옴
  var titleEl = map ? document.getElementById(map.titleEl) : null;
  var currentTitle = titleEl ? titleEl.textContent : (fallbackTitle || '');

  var inp = document.getElementById('chat-edit-name-input');
  if (inp) inp.value = currentTitle;

  // 현재 핀 상태 복원
  chatPinOn = map ? (map.pinned || false) : false;
  var toggle = document.getElementById('chat-pin-toggle');
  var knob   = document.getElementById('chat-pin-knob');
  if (toggle) toggle.style.background = chatPinOn ? '#2B7FE0' : '#CBD0D8';
  if (knob)   knob.style.left = chatPinOn ? '20px' : '2px';

  goPage('page-chat-edit');
}

function toggleChatPin() {
  chatPinOn = !chatPinOn;
  var toggle = document.getElementById('chat-pin-toggle');
  var knob   = document.getElementById('chat-pin-knob');
  if (toggle) toggle.style.background = chatPinOn ? '#2B7FE0' : '#CBD0D8';
  if (knob)   knob.style.left = chatPinOn ? '20px' : '2px';
}

function saveChatEdit() {
  var inp = document.getElementById('chat-edit-name-input');
  if (!inp || !inp.value.trim()) { showToast('채팅 이름을 입력해주세요'); return; }
  var newTitle = inp.value.trim();
  var map = CHAT_MAP[currentEditChatId];
  if (!map) { showToast('저장됐어요 ✓'); goBack(); return; }

  // 1. 목록 제목 업데이트
  var titleEl = document.getElementById(map.titleEl);
  if (titleEl) titleEl.textContent = newTitle;

  // 2. 고정 상태 저장
  map.pinned = chatPinOn;

  // 3. 카드에 핀 배지 표시/숨김
  var card = document.getElementById(map.cardEl);
  if (card) {
    // 기존 핀 배지 제거 후 재생성
    var existing = document.getElementById(map.pinEl);
    if (existing) existing.remove();
    if (chatPinOn) {
      var badge = document.createElement('span');
      badge.id = map.pinEl;
      badge.textContent = '📌';
      badge.style.cssText = 'font-size:11px;flex-shrink:0;';
      // 카드의 맨 앞(title 영역 앞)에 삽입
      card.insertBefore(badge, card.firstChild);
      // 고정된 카드는 목록 최상단으로 이동
      var parent = card.parentNode;
      if (parent) parent.insertBefore(card, parent.firstChild);
    }
  }

  // 4. 수정 버튼의 fallbackTitle도 업데이트 (재클릭 시 현재 이름 반영)
  var editBtns = document.querySelectorAll('[onclick*="openChatEdit(\'' + currentEditChatId + '\'"]');
  editBtns.forEach(function(btn) {
    var attr = btn.getAttribute('onclick') || '';
    btn.setAttribute('onclick', attr.replace(/openChatEdit\('[^']+','[^']+'\)/, "openChatEdit('" + currentEditChatId + "','" + newTitle.replace(/'/g, "\\'") + "')"));
  });

  showToast(chatPinOn ? '저장하고 고정했어요 📌' : '저장됐어요 ✓');
  goBack();
}

function deleteChatEdit() {
  var map = CHAT_MAP[currentEditChatId];
  if (!map) { showToast('대화가 삭제됐어요'); goBack(); return; }

  // 목록 카드 숨김
  var card = document.getElementById(map.cardEl);
  if (card) card.style.display = 'none';

  // 채팅 페이지도 비활성화
  var page = document.getElementById(map.pageId);
  if (page) {
    page.classList.remove('active');
    page.setAttribute('data-deleted', 'true');
  }

  showToast('대화가 삭제됐어요');
  // 페이지 히스토리에서 삭제된 페이지 제거 후 안전하게 이동
  pageHistory = pageHistory.filter(function(p){ return p !== map.pageId && p !== 'page-chat-edit'; });
  goTab('page-lumi-new-chat');
}

/* ── 채팅 히스토리 메시지 전송 ── */
function sendHistoryMsg(chatId) {
  var inputId = 'input-' + chatId;
  var msgsId  = 'msgs-' + chatId;
  var inp  = document.getElementById(inputId);
  var msgs = document.getElementById(msgsId);
  if (!inp || !msgs) return;
  var text = inp.value.trim();
  if (!text) return;
  inp.value = '';

  // 사용자 버블
  var userBubble = document.createElement('div');
  userBubble.className = 'bubble buser';
  userBubble.innerHTML = '<div class="xs">' + escapeHtml(text) + '</div>';
  msgs.appendChild(userBubble);

  // 로딩 버블
  var loadId = 'hist-loading-' + chatId;
  var loadBubble = document.createElement('div');
  loadBubble.className = 'bubble bai';
  loadBubble.id = loadId;
  loadBubble.innerHTML = '<div class="bhead">' + LUMI_ICON_HTML + '<span class="xs bold" style="color:#8B6CE8;">Lumi</span></div>'
    + '<div style="display:flex;align-items:center;gap:6px;padding:4px 0;">'
    + '<div style="width:7px;height:7px;border-radius:50%;background:#8B6CE8;animation:lumiDot 1s infinite 0s;"></div>'
    + '<div style="width:7px;height:7px;border-radius:50%;background:#8B6CE8;animation:lumiDot 1s infinite .2s;"></div>'
    + '<div style="width:7px;height:7px;border-radius:50%;background:#8B6CE8;animation:lumiDot 1s infinite .4s;"></div>'
    + '</div>';
  msgs.appendChild(loadBubble);
  msgs.scrollTop = msgs.scrollHeight;

  var LUMI_SYSTEM = '당신은 Lumi, 건강정보보호 과목의 AI 튜터입니다. CIA 3요소, ISMS/ISMS-P, 개인정보보호법, 의료법, HIPAA, 진료단계별 보안, 정보처리단계별 보호, 개인정보 영향평가 등 강의 내용을 중심으로 짧고 명확하게 한국어로 답변하세요. 마크다운 없이 텍스트만 사용하세요.';

  (async function() {
    var reply;
    try {
      if (!CONFIG.OPENAI_API_KEY) throw new Error('no key');
      var res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + CONFIG.OPENAI_API_KEY
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          max_tokens: 500,
          messages: [
            { role: 'system', content: LUMI_SYSTEM },
            { role: 'user', content: text }
          ]
        })
      });
      var data = await res.json();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        reply = data.choices[0].message.content.trim();
      } else {
        throw new Error('no response');
      }
    } catch(e) {
      reply = lumiAnswer(text);
    }
    var ld = document.getElementById(loadId);
    if (ld) ld.remove();
    var aiBubble = document.createElement('div');
    aiBubble.className = 'bubble bai';
    aiBubble.innerHTML = '<div class="bhead">' + LUMI_ICON_HTML + '<span class="xs bold" style="color:#8B6CE8;">Lumi</span></div>'
      + '<div class="xs cb" style="line-height:1.7;">' + escapeHtml(reply).replace(/\n/g,'<br>') + '</div>';
    msgs.appendChild(aiBubble);
    msgs.scrollTop = msgs.scrollHeight;
  })();
}

function sendNewChatMessage() {
  var inp = document.getElementById('new-chat-input');
  if (!inp || !inp.value.trim()) return;
  var question = inp.value.trim();
  inp.value = '';
  // 새 채팅 → lumi-chat으로 전환 후 메시지 전송
  goTab('page-lumi-chat');
  setTimeout(function() {
    var lumiInp = document.getElementById('lumi-input');
    if (lumiInp) {
      lumiInp.value = question;
      sendLumiMessage();
    }
  }, 120);
}

function askLumi(question) {
  goTab('page-lumi-chat');
  setTimeout(function() {
    var input = document.getElementById('lumi-input');
    if (input) {
      input.value = question;
      sendLumiMessage();
    }
  }, 100);
}

function deleteChatPage(pageId) {
  // 페이지 비활성화
  var page = document.getElementById(pageId);
  if (page) {
    page.classList.remove('active');
    page.setAttribute('data-deleted', 'true');
  }
  // 모달 내 대응하는 채팅 카드 DOM에서 완전 제거
  var cardId = 'card-' + pageId.replace('page-', '');
  var card = document.getElementById(cardId);
  if (card && card.parentNode) card.parentNode.removeChild(card);
  // 토스트 + AI튜터 홈으로 이동
  showToast('대화가 삭제됐어요');
  goTab('page-lumi-chat');
}

function clearLumiChat() {
  lumiHistory = [];
  var msgs = document.getElementById('lumi-chat-messages');
  if (msgs) {
    msgs.innerHTML = '<div class="bubble bai" id="lumi-welcome"><div class="bhead">' + LUMI_ICON_HTML + '<span class="xs bold" style="color:#8B6CE8;">Lumi</span></div><div class="xs cb" style="line-height:1.7;">안녕하세요! 저는 Lumi예요 👋<br>건강정보보호 강의 내용이라면 뭐든 질문해보세요!</div></div>';
  }
  showToast('대화가 삭제됐어요');
}

async function sendLumiMessage() {
  var input = document.getElementById('lumi-input');
  var msgs = document.getElementById('lumi-chat-messages');
  if (!input || !msgs) return;
  var text = input.value.trim();
  if (!text) return;
  input.value = '';

  // 사용자 메시지 추가
  var userBubble = document.createElement('div');
  userBubble.className = 'bubble buser';
  userBubble.innerHTML = '<div class="xs">' + escapeHtml(text) + '</div>';
  msgs.appendChild(userBubble);

  // 로딩 표시
  var loadingBubble = document.createElement('div');
  loadingBubble.className = 'bubble bai';
  loadingBubble.id = 'lumi-loading';
  loadingBubble.innerHTML = '<div class="bhead">' + LUMI_ICON_HTML + '<span class="xs bold" style="color:#8B6CE8;">Lumi</span></div>' +
    '<div style="display:flex;align-items:center;gap:6px;padding:4px 0;">' +
    '<div style="width:7px;height:7px;border-radius:50%;background:#8B6CE8;animation:lumiDot 1s infinite 0s;"></div>' +
    '<div style="width:7px;height:7px;border-radius:50%;background:#8B6CE8;animation:lumiDot 1s infinite .2s;"></div>' +
    '<div style="width:7px;height:7px;border-radius:50%;background:#8B6CE8;animation:lumiDot 1s infinite .4s;"></div>' +
    '</div>';
  msgs.appendChild(loadingBubble);
  scrollChatBottom();

  lumiHistory.push({ role: 'user', content: text });

  var LUMI_SYSTEM = '당신은 Lumi, 한양여자대학교 빅데이터과 건강정보보호 과목의 AI 튜터입니다.\n' +
    '강의계획서 기반으로 답변하며, 다음 내용을 중심으로 설명하세요:\n' +
    '- 1주차: 건강정보보호 개요, CIA 3요소(기밀성·무결성·가용성), 건강정보의 특수성\n' +
    '- 2주차: 개인정보보호법, 의료법, 정보보호관련법률 체계\n' +
    '- 3주차: 건강정보보호 관련법(HIPAA), 의료기관 의무, 민감정보\n' +
    '- 4주차: 진료단계별 보안(접수→진료→검사→처방→보관→파기)\n' +
    '- 5주차: 정보처리단계별 보호(수집·이용→저장→제공→파기)\n' +
    '- 6주차: 개인건강정보 보안기술(암호화·접근통제·인증·감사로그)\n' +
    '- 7주차: ISMS/ISMS-P 인증체계\n' +
    '- 8주차: 개인정보 영향평가(PIA)\n' +
    '쉬운 비유와 예시로 설명하고, 반드시 한국어로 짧고 명확하게 답변하세요. 마크다운 없이 텍스트만 사용하세요.';

  var messagesForAPI = [{ role: 'system', content: LUMI_SYSTEM }]
    .concat(lumiHistory.slice(-10));

  var reply;
  try {
    if (!CONFIG.OPENAI_API_KEY) throw new Error('no key');
    var res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + CONFIG.OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 600,
        messages: messagesForAPI
      })
    });
    var data = await res.json();
    if (data.choices && data.choices[0] && data.choices[0].message) {
      reply = data.choices[0].message.content.trim();
    } else {
      throw new Error('no response');
    }
  } catch(e) {
    reply = lumiAnswer(text);
  }

  lumiHistory.push({ role: 'assistant', content: reply });

  var loading = document.getElementById('lumi-loading');
  if (loading) loading.remove();
  var aiBubble = document.createElement('div');
  aiBubble.className = 'bubble bai';
  aiBubble.innerHTML = '<div class="bhead">' + LUMI_ICON_HTML + '<span class="xs bold" style="color:#8B6CE8;">Lumi</span></div>' +
    '<div class="xs cb" style="line-height:1.7;">' + escapeHtml(reply).replace(/\n/g, '<br>') + '</div>';
  msgs.appendChild(aiBubble);
  scrollChatBottom();
}

function lumiAnswer(q) {
  var t = q.toLowerCase();
  var R = {
    greet: '안녕하세요! 😊 건강정보보호 과목에 대해 궁금한 게 있으면 뭐든 물어봐요!',
    ismsDiff: 'ISMS vs ISMS-P 차이를 알려드릴게요! 🔍\nISMS는 정보보호만 다루는 인증이고, ISMS-P는 ISMS에 개인정보보호까지 더한 통합 인증이에요.\n쉽게: ISMS-P = ISMS + 개인정보보호 📌\n의료기관처럼 민감한 개인정보를 다루는 곳에는 ISMS-P가 적합해요.',
    isms: 'ISMS(정보보호 관리체계)를 알려드릴게요! 📋\n정보보호를 체계적으로 관리하기 위한 인증 제도예요.\nKISA(한국인터넷진흥원)가 인증을 부여해요.\n핵심 흐름: 관리체계 수립 → 위험 분석 → 보호대책 구현 → 사후 관리\n의료기관은 환자 건강정보를 대량으로 다루므로 특히 중요해요!',
    cia: 'CIA 3요소는 정보보호의 핵심이에요! 🔐\nC - 기밀성(Confidentiality): 허가된 사람만 접근 가능\n  예) 담당 의사만 진료기록 열람\nI - 무결성(Integrity): 허가 없이 변조 불가\n  예) 처방전 내용 임의 수정 금지\nA - 가용성(Availability): 필요할 때 언제든 접근 가능\n  예) 응급 시 EMR 즉시 접근 보장',
    personalLaw: '개인정보보호법이 중요한 이유를 알려드릴게요! ⚖️\n건강정보는 민감정보라 유출 시 보험 차별, 직장 불이익 등 심각한 피해가 생겨요.\n핵심 의무:\n• 수집: 목적·항목·보유기간 고지 + 동의 필수\n• 처리: 목적 외 이용 금지\n• 파기: 복원 불가능한 방법으로 완전 삭제\n정보주체 권리: 열람권 / 정정·삭제권 / 처리정지권',
    hipaa: 'HIPAA는 미국의 건강정보보호 법률이에요. 🇺🇸\nHealth Insurance Portability and Accountability Act\nPHI(보호 건강정보)를 보호하며, Privacy Rule과 Security Rule로 구성돼요.\n우리나라의 개인정보보호법·의료법과 유사한 개념이에요!',
    pia: '개인정보 영향평가(PIA)는 침해 위험을 사전에 분석하는 제도예요! 🔎\n준비 → 분석 → 위험도 산정 → 개선방안 도출 → 보고서 제출\n공공기관이 일정 규모 이상의 개인정보 파일을 운용할 때 의무로 실시해요.\n목적: 시스템 구축 전에 프라이버시 침해 위험을 미리 없애는 거예요!',
    clinic: '진료단계별 보안을 알려드릴게요! 🏥\n접수→진료→검사→처방→보관→파기 순서예요.\n1️⃣ 접수: 최소 정보 수집, 목적 고지 필수\n2️⃣ 진료·검사: EMR 접근권한 관리, 담당 의료진만 접근\n3️⃣ 처방·보관: 암호화 보관 (진료기록부 10년, 처방전 2년)\n4️⃣ 파기: 전자파일 덮어쓰기, 종이 분쇄·소각',
    process: '건강정보 처리 단계별 보호예요! 📊\n수집·이용: 목적 명확, 최소 수집, 동의 필수\n저장·보관: 암호화, 접근권한 최소화, 정기 백업\n제공: 제3자 제공 시 별도 동의 필요\n파기: 보유기간 초과 시 복원 불가능한 방법으로 파기',
    tech: '개인건강정보 보안 기술이에요! 💻\n암호화: AES, RSA — 전송(TLS/SSL) + 저장 모두 적용\n접근통제: RBAC(역할 기반), 최소권한 원칙\n인증: 다중인증(MFA), 생체인증\n침입탐지: IDS/IPS로 이상 접근 탐지\n감사 로그: 누가 언제 접근했는지 기록',
    pbl: 'PBL은 문제 기반 학습이에요! 📝\n실제 건강정보보호 문제를 팀이 분석하고 해결방안을 도출해요.\n9주차 OT → 10~11주차 팀활동 → 14주차 발표1 → 15주차 발표2\n발표 자료에는 문제 분석, 법적 근거, 개선방안을 포함하면 좋아요!',
    intro: '건강정보보호 과목 소개예요! 📚\n1~7주차: 건강정보보호 개념, 관련 법률, 보안기술, ISMS/ISMS-P\n8주차: 중간고사 / 9~11주차: 보안교육, PBL 활동\n14~15주차: PBL 발표 / 16주차: 기말고사\n한양여자대학교 빅데이터과 필수 과목이에요! 💪',
    sensitive: '민감정보는 개인정보보호법에서 특별 보호하는 정보예요! ⚠️\n건강·의료 정보, 유전정보, 사상·신념, 성생활 정보, 전과 기록 등이 해당해요.\n수집 시 별도 명시적 동의 필수, 유출 시 차별·보험 불이익 등 심각한 피해가 생겨요.',
    exam: '시험에 자주 나오는 핵심 내용이에요! 📝\n✅ CIA 3요소: 기밀성·무결성·가용성\n✅ ISMS vs ISMS-P 차이\n✅ 개인정보보호법 처리 원칙\n✅ 진료단계별 보안 순서 (접수→파기)\n✅ 개인정보 영향평가 절차\n✅ HIPAA 구성 (Privacy Rule / Security Rule)\n✅ 민감정보 종류와 수집 요건'
  };
  if (/^(안녕|하이|hi|hello|ㅎㅇ|반가)/.test(t)) return R.greet;
  if ((t.includes('isms') && t.includes('isms-p')) || /isms.?p.*(차이|비교|다른|vs)/.test(t)) return R.ismsDiff;
  if (/isms/.test(t)) return R.isms;
  if (/cia|기밀성|무결성|가용성/.test(t)) return R.cia;
  if (/개인정보보호법|개보법|개인정보 보호법/.test(t)) return R.personalLaw;
  if (/hipaa/.test(t)) return R.hipaa;
  if (/영향평가|pia/.test(t)) return R.pia;
  if (/진료단계|단계별 보안/.test(t)) return R.clinic;
  if (/진료|접수|처방|검사/.test(t) && /보안|보호|단계/.test(t)) return R.clinic;
  if (/처리.*단계|수집.*이용|제공.*파기|정보처리/.test(t)) return R.process;
  if (/보안기술|암호화|접근통제|방화벽|기술/.test(t)) return R.tech;
  if (/pbl|활동발표|프로젝트/.test(t)) return R.pbl;
  if (/시험|자주 나오|핵심|출제/.test(t)) return R.exam;
  if (/과목|배우|수업|강의|소개/.test(t)) return R.intro;
  if (/민감정보|특수.*정보/.test(t)) return R.sensitive;
  if (/개인정보/.test(t)) return R.personalLaw;
  return 'ISMS, CIA 3요소, 개인정보보호법, 진료단계별 보안, HIPAA, 영향평가에 대해 물어봐요! 😊\n예시: "CIA 3요소 설명해줘", "진료단계별 보안이 뭐야?"';
}

function scrollChatBottom() {
  var msgs = document.getElementById('lumi-chat-messages');
  if (msgs) setTimeout(function(){ msgs.scrollTop = msgs.scrollHeight; }, 50);
}

/* ── KOCW API 추천 강의 로딩 ── */
async function loadKocwVideos() {
  var container = document.getElementById('kocw-video-list');
  if (!container) return;

  // 더미 KOCW 강의 카드 (API 실패 시 또는 키 없을 때 표시)
  var fallbackItems = [
    {
      title: '개인정보보호 기초와 ISMS-P 개요',
      provider: '방송통신대학교 · KOCW',
      link: 'https://www.kocw.net/home/search/kemView.do?kemId=1269348',
      icon: '🔐'
    },
    {
      title: '의료정보보호와 개인건강정보 관리',
      provider: '연세대학교 · KOCW',
      link: 'https://www.kocw.net/home/search/kemView.do?kemId=1456832',
      icon: '🏥'
    },
    {
      title: '정보보호 관리체계(ISMS) 실무',
      provider: '고려사이버대학교 · KOCW',
      link: 'https://www.kocw.net/home/search/kemView.do?kemId=1312507',
      icon: '🛡️'
    }
  ];

  function renderCards(items, isKocw) {
    return items.map(function(item) {
      var accentColor = isKocw ? '#8B6CE8' : '#2B7FE0';
      var btnLabel   = isKocw ? '강의 보기' : '영상 보기';
      var providerHtml = '<div style="font-size:11px;color:' + accentColor + ';font-weight:600;margin-bottom:3px;">' + (item.provider || 'KOCW') + '</div>';
      var thumbHtml = item.thumb
        ? '<img src="' + escapeHtml(item.thumb) + '" style="width:90px;height:60px;border-radius:8px;object-fit:cover;flex-shrink:0;" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">'
          + '<div style="display:none;width:90px;height:60px;border-radius:8px;flex-shrink:0;background:#EBF4FF;align-items:center;justify-content:center;font-size:22px;">' + (item.icon||'🎓') + '</div>'
        : '<div style="width:90px;height:60px;border-radius:8px;flex-shrink:0;background:#EBF4FF;display:flex;align-items:center;justify-content:center;font-size:26px;">' + (item.icon||'🎓') + '</div>';
      var btnHtml = (item.link && item.link !== '#')
        ? '<button onclick="window.open(\'' + item.link + '\',\'_blank\')" style="background:' + accentColor + ';color:#fff;border:none;border-radius:20px;padding:5px 14px;font-size:11px;font-weight:600;cursor:pointer;">' + btnLabel + '</button>'
        : '<button style="background:#CBD0D8;color:#fff;border:none;border-radius:20px;padding:5px 14px;font-size:11px;font-weight:600;">링크 없음</button>';
      return '<div style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 1px 8px rgba(0,0,0,.06);margin-bottom:10px;display:flex;gap:12px;align-items:center;" onpointerdown="this.style.transform=\'scale(.98)\'" onpointerup="this.style.transform=\'\'">'
        + thumbHtml
        + '<div style="flex:1;min-width:0;">'
        + providerHtml
        + '<div style="font-size:12px;font-weight:700;color:#1A1A1A;line-height:1.4;margin-bottom:8px;">' + escapeHtml(item.title) + '</div>'
        + btnHtml
        + '</div></div>';
    }).join('');
  }

  // API 키 없으면 바로 더미 표시
  if (!CONFIG.KOCW_API_KEY) {
    container.innerHTML = renderCards(fallbackItems, true);
    return;
  }

  var keywords = ['건강정보보호', '개인정보보호', '정보보호', 'ISMS', '의료정보'];
  var kw = keywords[Math.floor(Math.random() * 2)];

  try {
    var url = CONFIG.KOCW_API_URL
      + '?serviceKey=' + encodeURIComponent(CONFIG.KOCW_API_KEY)
      + '&pageNo=1&numOfRows=4&type=json'
      + '&lctreSj=' + encodeURIComponent(kw);

    var res = await fetch(url);
    if (!res.ok) throw new Error('KOCW API 응답 오류');
    var data = await res.json();
    var items = (data.response && data.response.body && data.response.body.items && data.response.body.items.item) || [];
    if (!Array.isArray(items)) items = [items];
    if (items.length === 0) throw new Error('결과 없음');

    var mapped = items.slice(0, 4).map(function(item) {
      return {
        title:    item.lctreSj    || item.courseName || '강의명 없음',
        provider: 'KOCW · ' + (item.univNm || item.orgName || ''),
        link:     item.lectureUrl || item.url || '#',
        thumb:    item.thumbnailUrl || item.imgUrl || '',
        icon:     '🎓'
      };
    });
    container.innerHTML = renderCards(mapped, true);
  } catch(e) {
    // CORS/오류 시 더미 카드 표시
    container.innerHTML = renderCards(fallbackItems, true);
  }
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function selectKeyword(el) {
  var input = document.getElementById('keyword-input');
  if (input) input.value = el.textContent;
  document.querySelectorAll('[onclick*="selectKeyword"]').forEach(function(e){ e.style.background='#F2F4F7'; e.style.color='#454A52'; });
  el.style.background='#EBF4FF'; el.style.color='#2B7FE0';
}

/* ── 퀴즈 점수 추적 ── */
var quizAnswers = { 1: null, 2: null, 3: null, 4: null, 5: null }; // null=미답, true=정답, false=오답

function recordQuiz(num, isCorrect) {
  quizAnswers[num] = isCorrect;
}

function checkQuiz(el, isCorrect) {
  recordQuiz(1, isCorrect);
  var opts = document.querySelectorAll('#page-quiz .qopt');
  opts.forEach(function(o){ o.onclick = null; });
  if (isCorrect) { el.classList.add('ok'); el.querySelector('.qnum').classList.add('ok'); }
  else { el.classList.add('ng'); el.querySelector('.qnum').classList.add('ng'); var q=document.getElementById('q2'); if(q){q.classList.add('ok');q.querySelector('.qnum').classList.add('ok');} var exp=document.getElementById('quiz-exp'); if(exp)exp.style.display='block'; }
}
function checkQuiz2(el, isCorrect) {
  recordQuiz(2, isCorrect);
  var opts = document.querySelectorAll('#page-quiz2 .qopt');
  opts.forEach(function(o){ o.onclick = null; });
  if (isCorrect) { el.classList.add('ok'); el.querySelector('.qnum').classList.add('ok'); }
  else { el.classList.add('ng'); el.querySelector('.qnum').classList.add('ng'); var q=document.getElementById('q2_3'); if(q){q.classList.add('ok');q.querySelector('.qnum').classList.add('ok');} var exp=document.getElementById('quiz2-exp'); if(exp)exp.style.display='block'; }
}
function checkQuiz3(el, isCorrect) {
  recordQuiz(3, isCorrect);
  var opts = document.querySelectorAll('#page-quiz3 .qopt');
  opts.forEach(function(o){ o.onclick = null; });
  if (isCorrect) { el.classList.add('ok'); el.querySelector('.qnum').classList.add('ok'); }
  else { el.classList.add('ng'); el.querySelector('.qnum').classList.add('ng'); var q=document.getElementById('q3_3'); if(q){q.classList.add('ok');q.querySelector('.qnum').classList.add('ok');} var exp=document.getElementById('quiz3-exp'); if(exp)exp.style.display='block'; }
}
function checkQuiz4(el, isCorrect) {
  recordQuiz(4, isCorrect);
  var opts = document.querySelectorAll('#page-quiz4 .qopt');
  opts.forEach(function(o){ o.onclick = null; });
  if (isCorrect) { el.classList.add('ok'); el.querySelector('.qnum').classList.add('ok'); }
  else { el.classList.add('ng'); el.querySelector('.qnum').classList.add('ng'); var q=document.getElementById('q4_2'); if(q){q.classList.add('ok');q.querySelector('.qnum').classList.add('ok');} var exp=document.getElementById('quiz4-exp'); if(exp)exp.style.display='block'; }
}
function checkQuiz5(el, isCorrect) {
  recordQuiz(5, isCorrect);
  var opts = document.querySelectorAll('#page-quiz5 .qopt');
  opts.forEach(function(o){ o.onclick = null; });
  if (isCorrect) { el.classList.add('ok'); el.querySelector('.qnum').classList.add('ok'); }
  else { el.classList.add('ng'); el.querySelector('.qnum').classList.add('ng'); var q=document.getElementById('q5_3'); if(q){q.classList.add('ok');q.querySelector('.qnum').classList.add('ok');} var exp=document.getElementById('quiz5-exp'); if(exp)exp.style.display='block'; }
}

function updateQuizResult() {
  var total = 5;
  var correct = 0;
  for (var i = 1; i <= total; i++) { if (quizAnswers[i] === true) correct++; }
  var wrong = total - correct;
  var pct = Math.round(correct / total * 100);

  // 점수 텍스트
  var scoreEl = document.querySelector('#page-quiz-result [style*="font-size:28px"]');
  if (scoreEl) scoreEl.textContent = correct + ' / ' + total;

  // 정답률 텍스트
  var pctEl = document.querySelector('#page-quiz-result .xs.cg.mt4');
  if (pctEl) pctEl.textContent = '정답률 ' + pct + '%';

  // 별점 (5개 기준, 1개당 20%)
  var stars = Math.round(pct / 20);
  var starEls = document.querySelectorAll('#page-quiz-result [style*="font-size:18px"] span');
  starEls.forEach(function(s, idx) {
    s.textContent = '⭐';
    s.style.color = idx < stars ? '' : 'var(--g200)';
  });

  // stat 숫자
  var statVals = document.querySelectorAll('#page-quiz-result .stat-v');
  if (statVals[0]) { statVals[0].textContent = correct; }
  if (statVals[1]) { statVals[1].textContent = wrong; }
  if (statVals[2]) { statVals[2].textContent = pct + '%'; }

  // 오답 복습 개수 뱃지
  var reviewBadge = document.querySelector('#page-quiz-review .topbar > div:last-child');
  if (reviewBadge) reviewBadge.textContent = wrong + '개';

  // 개념별 결과 바: Q1-2=건강정보보호기초, Q3-4=정보보호관련법률, Q5=ISMS
  var groups = [
    { barId:'res-bar-1', tagId:'res-tag-1', qs:[1,2] },
    { barId:'res-bar-2', tagId:'res-tag-2', qs:[3,4] },
    { barId:'res-bar-3', tagId:'res-tag-3', qs:[5] }
  ];
  groups.forEach(function(g) {
    var total = g.qs.length;
    var ok = g.qs.filter(function(q){ return quizAnswers[q] === true; }).length;
    var ratio = Math.round(ok / total * 100);
    var bar = document.getElementById(g.barId);
    var tag = document.getElementById(g.tagId);
    if (bar) {
      bar.style.width = ratio + '%';
      bar.className = 'cfill ' + (ratio >= 80 ? 'cfs' : ratio >= 50 ? 'cfm' : 'cfw');
    }
    if (tag) {
      tag.className = 'tag ' + (ratio >= 80 ? 'tgr' : ratio >= 50 ? 'ty' : 'tr');
      tag.textContent = ratio >= 80 ? '잘함' : ratio >= 50 ? '보통' : '취약';
    }
  });
}

/* ── 복습 카드 flip 함수 ── */
function flipFCR1() {
  var f = document.getElementById('fcr1-front');
  var b = document.getElementById('fcr1-back');
  if (!f || !b) return;
  var showing = b.style.display !== 'none';
  f.style.display = showing ? 'flex' : 'none';
  b.style.display = showing ? 'none' : 'block';
}
function flipFCR2() {
  var f = document.getElementById('fcr2-front');
  var b = document.getElementById('fcr2-back');
  if (!f || !b) return;
  var showing = b.style.display !== 'none';
  f.style.display = showing ? 'flex' : 'none';
  b.style.display = showing ? 'none' : 'block';
}

/* ── 로드맵 확인 퀴즈 공용 함수 ── */
/* ── 로드맵 이해 완료 추적 ── */
var rmUnderstoodCount = 0;
var rmCompleteCount = 0;

function checkRmQ(prefix, el, isCorrect, correctId, expId) {
  var ids = [prefix+'q_1', prefix+'q_2', prefix+'q_3', prefix+'q_4'];
  ids.forEach(function(id) {
    var o = document.getElementById(id);
    if (o) o.onclick = null;
  });
  // 선택지 ID가 위 패턴과 다를 수 있으므로 부모 qopt 전체도 비활성화
  if (el.parentElement) {
    el.parentElement.querySelectorAll('.qopt').forEach(function(o){ o.onclick = null; });
  }
  if (isCorrect) {
    el.classList.add('ok');
    if (el.querySelector('.qnum')) el.querySelector('.qnum').classList.add('ok');
    rmUnderstoodCount++;
  } else {
    el.classList.add('ng');
    if (el.querySelector('.qnum')) el.querySelector('.qnum').classList.add('ng');
    var cEl = document.getElementById(correctId);
    if (cEl) { cEl.classList.add('ok'); if (cEl.querySelector('.qnum')) cEl.querySelector('.qnum').classList.add('ok'); }
    var exp = document.getElementById(expId);
    if (exp) exp.style.display = 'block';
  }
}

function rmComplete() {
  rmCompleteCount++;
  var understoodEl = document.getElementById('rm-understood-count');
  var completeEl   = document.getElementById('rm-complete-count');
  if (understoodEl) understoodEl.textContent = rmUnderstoodCount;
  if (completeEl)   completeEl.textContent   = rmCompleteCount + '회';
  // 선택한 개념의 주차만 완료 처리
  var wkMap = {
    '건강정보보호 개념':'week1','정보보호의 3요소(CIA)':'week1','건강정보의 특수성':'week1',
    '정보보호관련법률':'week2','개인정보보호 관련법 체계':'week2','개인정보보호법 주요 내용':'week2',
    '건강정보보호 법률':'week3','진료정보 보호 규정':'week3','HIPAA 개요':'week3',
    '접수단계 보안':'week4','진료·검사단계 보안':'week4','처방·보관단계 보안':'week4',
    '수집·이용 단계 보호':'week5','저장·보관 단계 보호':'week5','제공·파기 단계 보호':'week5'
  };
  var wk = wkMap[selectedConcept] || 'week5';
  markWeekDone(wk);
  showToast('준비 중인 기능이에요');
}

function resetRoadmap() {
  rmUnderstoodCount = 0;
}

/* ── 퀴즈 완료 시 주차 학습 완료 처리 ── */
function completeWeekAndSubmit() {
  var wk = currentQuizWeek || 'week4';
  markWeekDone(wk);
  showToast('학습 완료! ✓ 주차별 목록에 반영됐어요');
  showToast('준비 중인 기능이에요');
}

/* ── 주차 완료 상태 관리 ── */
// 초기 완료 주차: 1,2 완료 (총 5주차 기준)
var weekStatus = { week1:'none', week2:'none', week3:'none', week4:'none', week5:'none' };
var TOTAL_WEEKS = 5;

function markWeekDone(weekId) {
  weekStatus[weekId] = 'done';

  // 아이콘 → 파란 체크
  var icon = document.getElementById(weekId + '-icon');
  if (icon) {
    icon.style.cssText = 'width:24px;height:24px;border-radius:50%;background:#2B7FE0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;font-weight:700;flex-shrink:0;';
    icon.textContent = '✓';
  }

  // 서브텍스트 → 학습 완료
  var sub = document.getElementById(weekId + '-sub');
  if (sub) {
    sub.textContent = sub.textContent.replace(/미학습|학습 중|취약 개념 포함/, '학습 완료');
    sub.style.color = '#8B919C';
  }

  // 전체 진도 업데이트
  updateWeeklyProgress();
}

function updateWeeklyProgress() {
  var doneCount = Object.values(weekStatus).filter(function(s){ return s === 'done'; }).length;
  var pct = Math.round(doneCount / TOTAL_WEEKS * 100);

  var bar = document.getElementById('weekly-progress-bar');
  var pctEl = document.getElementById('weekly-progress-pct');
  var doneEl = document.getElementById('weekly-done-count');

  if (bar) bar.style.width = pct + '%';
  if (pctEl) {
    if (pct >= 100) {
      pctEl.innerHTML = '100% <span style="color:#3DB87A;font-size:14px;">✓</span>';
    } else {
      pctEl.textContent = pct + '%';
    }
  }
  if (doneEl) doneEl.textContent = doneCount;
}

/* ── 오답 재도전 퀴즈 함수 ── */
var retryScore = 0;

function checkRetry1(el, isCorrect) {
  var opts = document.querySelectorAll('#rq1_1,#rq1_2,#rq1_3,#rq1_4');
  opts.forEach(function(o){ o.onclick = null; });
  if (isCorrect) {
    el.classList.add('ok'); el.querySelector('.qnum').classList.add('ok');
    retryScore++;
  } else {
    el.classList.add('ng'); el.querySelector('.qnum').classList.add('ng');
    var q = document.getElementById('rq1_2'); if(q){q.classList.add('ok');q.querySelector('.qnum').classList.add('ok');}
    var exp = document.getElementById('retry-exp1'); if(exp) exp.style.display = 'block';
  }
}

function checkRetry2(el, isCorrect) {
  var opts = document.querySelectorAll('#rq2_1,#rq2_2,#rq2_3,#rq2_4');
  opts.forEach(function(o){ o.onclick = null; });
  if (isCorrect) {
    el.classList.add('ok'); el.querySelector('.qnum').classList.add('ok');
    retryScore++;
  } else {
    el.classList.add('ng'); el.querySelector('.qnum').classList.add('ng');
    var q = document.getElementById('rq2_2'); if(q){q.classList.add('ok');q.querySelector('.qnum').classList.add('ok');}
    var exp = document.getElementById('retry-exp2'); if(exp) exp.style.display = 'block';
  }
}

function checkRetry3(el, isCorrect) {
  var opts = document.querySelectorAll('#rq3_1,#rq3_2,#rq3_3,#rq3_4');
  opts.forEach(function(o){ o.onclick = null; });
  if (isCorrect) {
    el.classList.add('ok'); el.querySelector('.qnum').classList.add('ok');
    retryScore++;
  } else {
    el.classList.add('ng'); el.querySelector('.qnum').classList.add('ng');
    var q = document.getElementById('rq3_3'); if(q){q.classList.add('ok');q.querySelector('.qnum').classList.add('ok');}
    var exp = document.getElementById('retry-exp3'); if(exp) exp.style.display = 'block';
  }
}

function showRetryQ2() {
  var s = document.getElementById('retry-section2');
  if(s) { s.style.display = 'block'; s.scrollIntoView({behavior:'smooth', block:'start'}); }
  var b = document.getElementById('retry-btn1');
  if(b) b.style.display = 'none';
}

function showRetryQ3() {
  var s = document.getElementById('retry-section3');
  if(s) { s.style.display = 'block'; s.scrollIntoView({behavior:'smooth', block:'start'}); }
  var b = document.getElementById('retry-btn2');
  if(b) b.style.display = 'none';
}

function showRetryDone() {
  var d = document.getElementById('retry-done');
  if(d) { d.style.display = 'block'; d.scrollIntoView({behavior:'smooth', block:'start'}); }
  var b = document.getElementById('retry-btn3');
  if(b) b.style.display = 'none';
  var icon = document.getElementById('retry-done-icon');
  var title = document.getElementById('retry-done-title');
  var sub = document.getElementById('retry-done-sub');
  if (retryScore === 3) {
    if(icon) icon.textContent = '🎉';
    if(title) title.textContent = '완벽해요! 모두 맞혔어요';
    if(sub) sub.textContent = '이전에 틀렸던 3문제를 모두 맞혔어요!';
  } else if (retryScore === 2) {
    if(icon) icon.textContent = '😊';
    if(title) title.textContent = retryScore + ' / 3 정답';
    if(sub) sub.textContent = '많이 좋아졌어요! 틀린 문제는 Lumi에게 질문해봐요.';
  } else {
    if(icon) icon.textContent = '💪';
    if(title) title.textContent = retryScore + ' / 3 정답';
    if(sub) sub.textContent = '아직 헷갈리는 개념이 있어요. Lumi와 함께 복습해봐요!';
  }
  retryScore = 0;
}

function closeAllAccordions() {
  ['week1','week2','week3','week4','week5'].forEach(function(id) {
    var c = document.getElementById(id);
    var a = document.getElementById(id + '-arrow');
    if (c) c.style.display = 'none';
    if (a) a.style.transform = 'rotate(0deg)';
  });
}

function toggleAccordion(id) {
  var content = document.getElementById(id);
  var arrow = document.getElementById(id + '-arrow');
  if (!content) return;
  var isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

function switchFolderTab(tab, el) {
  ['all','fav','recent'].forEach(function(t) {
    var c = document.getElementById('folder-'+t);
    if(c) c.style.display = t===tab ? 'block' : 'none';
  });
  var items = el.parentElement.querySelectorAll('.tab-item');
  items.forEach(function(i){ i.classList.remove('active'); });
  el.classList.add('active');
}

// 페이지 로드 시 이미 별이 채워진 카드를 즐겨찾기 목록에 초기화
function initFavList() {
  var favList  = document.getElementById('folder-fav-list');
  var favEmpty = document.getElementById('folder-fav-empty');
  if (!favList) return;
  document.querySelectorAll('#folder-all .fcrd').forEach(function(card) {
    var star = card.querySelector('svg[onclick*="toggleStar"]');
    if (star && star.getAttribute('fill') === '#FFD84D') {
      var clone = card.cloneNode(true);
      var starClone = clone.querySelector('svg[onclick*="toggleStar"]');
      if (starClone) { starClone.setAttribute('fill','#FFD84D'); starClone.setAttribute('stroke','#FFD84D'); }
      favList.appendChild(clone);
    }
  });
  if (favEmpty) favEmpty.style.display = favList.querySelectorAll('.fcrd').length === 0 ? '' : 'none';
}

function toggleStar(el) {
  var filled = el.getAttribute('fill') === '#FFD84D';
  var card = el.closest('.fcrd');
  var favList = document.getElementById('folder-fav-list');
  var favEmpty = document.getElementById('folder-fav-empty');
  var name = card && card.querySelector('.fnm') ? card.querySelector('.fnm').textContent : '';
  if (filled) {
    el.setAttribute('fill', 'none');
    el.setAttribute('stroke', '#CBD0D8');
    showToast('즐겨찾기에서 제거됐어요');
    if (favList) {
      favList.querySelectorAll('.fcrd').forEach(function(fc) {
        if (fc.querySelector('.fnm') && fc.querySelector('.fnm').textContent === name) fc.remove();
      });
      document.querySelectorAll('#folder-all .fcrd, #folder-recent-list .fcrd').forEach(function(fc) {
        if (fc !== card && fc.querySelector('.fnm') && fc.querySelector('.fnm').textContent === name) {
          var s = fc.querySelector('svg[onclick*="toggleStar"]');
          if (s) { s.setAttribute('fill', 'none'); s.setAttribute('stroke', '#CBD0D8'); }
        }
      });
    }
    if (favList && favEmpty) favEmpty.style.display = favList.querySelectorAll('.fcrd').length === 0 ? '' : 'none';
  } else {
    el.setAttribute('fill', '#FFD84D');
    el.setAttribute('stroke', '#FFD84D');
    showToast('즐겨찾기에 추가됐어요 ⭐');
    if (favList && card) {
      var already = false;
      favList.querySelectorAll('.fcrd').forEach(function(fc) {
        if (fc.querySelector('.fnm') && fc.querySelector('.fnm').textContent === name) already = true;
      });
      if (!already) {
        var clone = card.cloneNode(true);
        var starClone = clone.querySelector('svg[onclick*="toggleStar"]');
        if (starClone) { starClone.setAttribute('fill', '#FFD84D'); starClone.setAttribute('stroke', '#FFD84D'); }
        favList.appendChild(clone);
      }
      document.querySelectorAll('#folder-all .fcrd, #folder-recent-list .fcrd').forEach(function(fc) {
        if (fc !== card && fc.querySelector('.fnm') && fc.querySelector('.fnm').textContent === name) {
          var s = fc.querySelector('svg[onclick*="toggleStar"]');
          if (s) { s.setAttribute('fill', '#FFD84D'); s.setAttribute('stroke', '#FFD84D'); }
        }
      });
    }
    if (favEmpty) favEmpty.style.display = 'none';
  }
}

function recordRecent(card) {
  var recentList = document.getElementById('folder-recent-list');
  if (!recentList) return;
  var name = card.querySelector('.fnm') ? card.querySelector('.fnm').textContent : '';
  recentList.querySelectorAll('.fcrd').forEach(function(fc) {
    if (fc.querySelector('.fnm') && fc.querySelector('.fnm').textContent === name) fc.remove();
  });
  var emptyMsg = recentList.querySelector('div[style*="최근 열어본"]');
  if (emptyMsg) emptyMsg.remove();
  var clone = card.cloneNode(true);
  clone.setAttribute('onclick', "goPage('page-folder-detail')");
  var meta = clone.querySelector('.fmeta');
  if (meta) meta.textContent = '방금 전 열어봄';
  recentList.insertBefore(clone, recentList.firstChild);
}

function filterVideos(tag, el) {
  // 필터 버튼 스타일 토글
  var btns = document.querySelectorAll('#content-video [id^="vf-"]');
  btns.forEach(function(b) {
    b.style.background = '#F2F4F7';
    b.style.color = '#454A52';
  });
  el.style.background = '#2B7FE0';
  el.style.color = '#fff';
  // 카드 필터링
  var cards = document.querySelectorAll('.video-card');
  cards.forEach(function(card) {
    var tags = card.getAttribute('data-tags') || '';
    card.style.display = (tag === '전체' || tags.indexOf(tag) !== -1) ? '' : 'none';
  });
}

function switchTab(tab) {
  var isBook = tab === 'book';
  document.getElementById('content-book').style.display = isBook ? 'block' : 'none';
  document.getElementById('content-video').style.display = isBook ? 'none' : 'block';
  document.getElementById('tab-book').style.background = isBook ? '#2B7FE0' : 'transparent';
  document.getElementById('tab-book').style.color = isBook ? '#fff' : '#8B919C';
  document.getElementById('tab-video').style.background = isBook ? 'transparent' : '#2B7FE0';
  document.getElementById('tab-video').style.color = isBook ? '#8B919C' : '#fff';
}

// 페이지 히스토리 스택
var pageHistory = ['page-home'];

// 탭바 어떤 탭이 활성인지 매핑
var tabMap = {
  'page-home': 'home',
  'page-upload': 'upload', 'page-upload-confirm': 'upload', 'page-analyzing': 'upload', 'page-analysis-result': 'upload', 'page-recommend-list': 'upload', 'page-recommend-videos': 'upload', 'page-topic-detail': 'upload', 'page-edit-result': 'upload',
  'page-folder-input': 'folder', 'page-summary-share': 'folder', 'page-chat-next': 'ai', 'page-chat-more': 'ai', 'page-folder-search': 'folder', 'page-folder-os': 'folder', 'page-folder': 'folder', 'page-folder-detail': 'folder', 'page-summary': 'folder', 'page-book-detail-1': 'folder', 'page-book-detail-2': 'folder', 'page-book-detail-3': 'folder', 'page-book-detail-4': 'folder',
  'page-weekly-new': 'weekly', 'page-weekly-ing': 'weekly', 'page-weekly-weak': 'weekly',
  'page-quiz2': 'weekly', 'page-quiz3': 'weekly', 'page-quiz4': 'weekly', 'page-quiz5': 'weekly', 'page-quiz-review': 'weekly', 'page-weekly': 'weekly', 'page-weekly-detail-1': 'weekly', 'page-weekly-detail-2': 'weekly', 'page-weekly-detail-3': 'weekly', 'page-weekly-detail-4': 'weekly', 'page-weekly-detail-5': 'weekly', 'page-weekly-search': 'weekly', 'page-weekly-detail-1': 'weekly',
  'page-weekly-detail-6': 'weekly', 'page-weekly-detail-7': 'weekly', 'page-weekly-detail-8': 'weekly', 'page-weekly-detail-9': 'weekly', 'page-weekly-detail-10': 'weekly', 'page-weekly-detail-11': 'weekly', 'page-weekly-detail-12': 'weekly', 'page-weekly-detail-13': 'weekly', 'page-weekly-detail-14': 'weekly', 'page-weekly-detail-15': 'weekly', 'page-weekly-detail-16': 'weekly',
  'page-chat-ok': 'ai', 'page-keyword-weeks': 'upload', 'page-chat-no': 'ai', 'page-chat-retry': 'ai', 'page-lumi-flashcard': 'ai', 'page-lumi-explain': 'ai', 'page-lumi-compare': 'ai', 'page-lumi-memo': 'ai', 'page-roadmap-ok': 'ai', 'page-roadmap-no': 'ai', 'page-roadmap-no2': 'ai', 'page-roadmap-step2': 'ai', 'page-roadmap-step3': 'ai', 'page-roadmap-step4': 'ai', 'page-roadmap-no3': 'ai', 'page-roadmap-no4': 'ai', 'page-roadmap-ok2': 'ai', 'page-roadmap-ok3': 'ai', 'page-roadmap-ok4': 'ai', 'page-roadmap-done': 'ai', 'page-wrong-note': 'ai', 'page-lumi-new-chat': 'ai', 'page-lumi-concept-req': 'ai', 'page-fc-review': 'ai', 'page-fc-review2': 'ai', 'page-fc-review-done': 'ai', 'page-flashcard-done': 'ai', 'page-flashcard-retry': 'ai', 'page-lumi-compare-req': 'ai', 'page-memo-converted': 'ai', 'page-memo-fc1': 'ai', 'page-memo-fc2': 'ai', 'page-memo-fc3': 'ai', 'page-fc2': 'ai', 'page-fc3': 'ai', 'page-fc4': 'ai', 'page-fc5': 'ai', 'page-fc6': 'ai', 'page-fc7': 'ai', 'page-fc8': 'ai', 'page-fc-done': 'ai', 'page-chat-normalization-history': 'ai', 'page-chat-transaction-history': 'ai', 'page-chat-join-history': 'ai', 'page-chat-edit-join': 'ai', 'page-chat-edit-norm': 'ai', 'page-chat-edit-trans': 'ai', 'page-chat-edit': 'ai', 'page-ai-start': 'ai', 'page-ai-chat': 'ai', 'page-ai-weak': 'ai', 'page-ai-roadmap': 'ai', 'page-ai-roadmap-step': 'ai', 'page-ai-summary': 'ai', 'page-lumi-chat': 'ai',
  'page-search': 'home', 'page-notifications': 'home',
};

function goPage(id) {
  // 같은 페이지면 무시
  if (pageHistory[pageHistory.length - 1] === id) return;
  if (id === 'page-weekly') closeAllAccordions();

  // 퀴즈 1번 페이지로 이동 시 점수 초기화
  if (id === 'page-quiz') {
    quizAnswers = { 1: null, 2: null, 3: null, 4: null, 5: null };
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.add('active');

  pageHistory.push(id);
  updateNav(id);

  // page-folder-detail 열릴 때 KOCW 강의 로딩
  if (id === 'page-folder-detail') {
    setTimeout(loadKocwVideos, 300);
  }
}

function goBack() {
  if (pageHistory.length <= 1) { goPage('page-home'); return; }
  pageHistory.pop();
  const prev = pageHistory[pageHistory.length - 1];
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(prev);
  if (target) target.classList.add('active');
  updateNav(prev);
}

function goTab(id) {
  // 탭바 누르면 히스토리 초기화 후 해당 탭 루트로
  pageHistory = [id];
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  updateNav(id);
  if (id === 'page-weekly') closeAllAccordions();
}

function updateNav(id) {
  const active = tabMap[id] || 'home';
  const tabs = document.querySelectorAll('.tab-nav-btn');
  tabs.forEach(btn => {
    const isActive = btn.dataset.tab === active;
    btn.style.color = isActive ? '#2B7FE0' : '#8B919C';
    const lbl = btn.querySelector('.nav-lb');
    if (lbl) { lbl.style.color = isActive ? '#2B7FE0' : '#8B919C'; lbl.style.fontWeight = isActive ? '700' : '400'; }
  });
}

function doSearch(keyword) {
  if (!keyword || !keyword.trim()) return;
  var kw = keyword.trim();

  // 홈 검색창 초기화
  var homeInput = document.getElementById('home-search-input');
  if (homeInput) homeInput.value = '';
  var bar = document.getElementById('search-bar');
  if (bar) bar.style.display = 'none';

  var kwInput = document.getElementById('search-keyword');
  if (kwInput) { kwInput.value = kw; }

  var lectures = [
    {name:'건강정보보호', meta:'16주차 · 어제 업데이트', color:'#2B7FE0', page:'page-folder-detail'},
  ];
  var kwLower = kw.toLowerCase();
  var matchedLectures = lectures.filter(function(l){ return l.name.toLowerCase().indexOf(kwLower) !== -1; });
  var matchedWeeks = wsData.filter(function(d){
    return d.type === 'week' && (
      d.title.toLowerCase().indexOf(kwLower) !== -1 ||
      (d.keywords && d.keywords.some(function(k){ return k.toLowerCase().indexOf(kwLower) !== -1; }))
    );
  });

  var results = document.getElementById('search-results');
  if (!results) return;

  if (matchedLectures.length === 0 && matchedWeeks.length === 0) {
    results.innerHTML = '<div style="text-align:center;padding:32px 0;color:#AEAEB2;font-size:13px;">"' + kw + '" 검색 결과가 없어요</div>';
    return;
  }

  var html = '';
  var arrowSvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CBD0D8" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';
  var bookSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>';

  var statusDot2 = function(s){
    if(s==='done') return '<div style="width:22px;height:22px;border-radius:50%;background:#2B7FE0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;font-weight:700;flex-shrink:0;">✓</div>';
    if(s==='weak') return '<div style="width:22px;height:22px;border-radius:50%;background:#FFE5E5;border:1.5px solid #E05C5C;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#E05C5C;flex-shrink:0;">!</div>';
    if(s==='ing')  return '<div style="width:22px;height:22px;border-radius:50%;border:2px solid #2B7FE0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#2B7FE0;flex-shrink:0;">▶</div>';
    if(s==='exam') return '<div style="width:22px;height:22px;border-radius:50%;background:#FFE5E5;border:1.5px solid #E05C5C;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;">📝</div>';
    if(s==='off')  return '<div style="width:22px;height:22px;border-radius:50%;background:#F2F4F7;border:1.5px solid #CBD0D8;flex-shrink:0;"></div>';
    return '<div style="width:22px;height:22px;border-radius:50%;border:1.5px solid #CBD0D8;flex-shrink:0;"></div>';
  };

  if (matchedLectures.length > 0) {
    html += '<div style="font-size:11px;font-weight:700;color:#8B919C;margin:12px 0 10px;">강의 (' + matchedLectures.length + ')</div>';
    matchedLectures.forEach(function(l, i) {
      var highlighted = l.name.replace(new RegExp('(' + kw.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi'), '<span style="color:#2B7FE0;font-weight:700;">$1</span>');
      html += '<div class="fcrd" onclick="goPage(\'' + l.page + '\')" style="margin-bottom:' + (i === matchedLectures.length-1 ? '14' : '8') + 'px;">'
        + '<div class="fic" style="background:' + l.color + ';">' + bookSvg + '</div>'
        + '<div class="fin"><div class="fnm">' + highlighted + '</div><div class="fmeta">' + l.meta + '</div></div>'
        + arrowSvg + '</div>';
    });
  }

  if (matchedWeeks.length > 0) {
    html += '<div style="font-size:11px;font-weight:700;color:#8B919C;margin-bottom:10px;">주차 · 핵심 내용 (' + matchedWeeks.length + ')</div>';
    matchedWeeks.forEach(function(d, i) {
      var highlighted = d.title.replace(new RegExp('(' + kw.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi'), '<span style="color:#2B7FE0;">$1</span>');
      var last = i === matchedWeeks.length - 1;
      html += '<div class="list-item" onclick="goPage(\'' + d.page + '\')" style="padding:10px 0;' + (last ? 'border-bottom:none;' : '') + '">'
        + statusDot2(d.status)
        + '<div class="li-info"><div class="li-title">' + highlighted + '</div><div class="li-sub">' + d.sub + '</div></div>'
        + arrowSvg + '</div>';
    });
  }

  results.innerHTML = html;
}


function openTopic(name, weeks, keywords, weekItems) {
  document.getElementById('topic-title').textContent = name;
  document.getElementById('topic-name').textContent = name;
  document.getElementById('topic-weeks-label').textContent = weeks + ' · 키워드 ' + keywords.length + '개';
  var kwEl = document.getElementById('topic-keywords');
  kwEl.innerHTML = '';
  keywords.forEach(function(k) {
    var span = document.createElement('span');
    span.textContent = k;
    span.style.cssText = 'background:#2B7FE0;color:#fff;font-size:10px;font-weight:600;padding:3px 8px;border-radius:8px;cursor:pointer;';
    span.onclick = function() { openKeyword(k, weekItems); };
    kwEl.appendChild(span);
  });
  var wl = document.getElementById('topic-week-list');
  wl.innerHTML = '';
  weekItems.forEach(function(item) {
    var div = document.createElement('div');
    div.style.cssText = 'background:#fff;border-radius:12px;padding:14px;box-shadow:0 1px 6px rgba(0,0,0,.05);cursor:pointer;display:flex;align-items:center;gap:10px;';
    div.onclick = function() { goPage('page-weekly-detail-1'); };
    div.innerHTML = '<div style="width:28px;height:28px;background:#F2F4F7;border-radius:8px;font-size:11px;font-weight:700;color:#8B919C;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + item.w + '</div><div style="flex:1;"><div style="font-size:13px;font-weight:600;color:#1A1A1A;">' + item.t + '</div><div style="font-size:11px;color:#8B919C;margin-top:2px;">' + item.s + '</div></div><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CBD0D8" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';
    wl.appendChild(div);
  });
  goPage('page-topic-detail');
}

function openKeyword(keyword, weekItems) {
  document.getElementById('kw-title').textContent = keyword;
  document.getElementById('kw-badge').textContent = '🔑 ' + keyword;
  var list = document.getElementById('kw-week-list');
  list.innerHTML = '';
  var items = weekItems || [];
  if (items.length === 0) {
    list.innerHTML = '<div style="font-size:13px;color:#8B919C;padding:16px 0;">관련 주차 정보가 없습니다.</div>';
  } else {
    items.forEach(function(item) {
      var div = document.createElement('div');
      div.style.cssText = 'background:#fff;border-radius:12px;padding:14px;box-shadow:0 1px 6px rgba(0,0,0,.05);cursor:pointer;display:flex;align-items:center;gap:10px;';
      div.onclick = function() { goPage('page-weekly-detail-1'); };
      div.innerHTML = '<div style="width:28px;height:28px;background:#EBF4FF;border-radius:8px;font-size:11px;font-weight:700;color:#2B7FE0;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + item.w + '</div><div style="flex:1;"><div style="font-size:13px;font-weight:600;color:#1A1A1A;">' + item.t + '</div><div style="font-size:11px;color:#8B919C;margin-top:2px;">' + item.s + '</div></div><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CBD0D8" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';
      list.appendChild(div);
    });
  }
  goPage('page-keyword-weeks');
}

function selectRecentFile(fileName, fileSize, lectureName) {
  var fnEl = document.querySelector('#page-upload-confirm .card.pale [style*="font-weight:700;color:#1A1A1A"]');
  if (fnEl) fnEl.textContent = fileName;
  var fsEl = document.querySelector('#page-upload-confirm .card.pale [style*="color:#8B919C;margin-top:2px"]');
  if (fsEl) fsEl.textContent = '— 페이지 · ' + fileSize;
  var nameInput = document.getElementById('lecture-name-input');
  if (nameInput) nameInput.value = lectureName;
  goPage('page-upload-confirm');
}

function handleFileSelect(event) {
  var file = event.target.files[0];
  if (!file) return;
  // 파일명 업데이트
  var nameInput = document.getElementById('lecture-name-input');
  if (nameInput) {
    var name = file.name.replace(/\.[^.]+$/,'').replace(/_/g,' ');
    nameInput.value = name;
  }
  goPage('page-upload-confirm');
}

function startAnalysis() {
  // Reset all steps to initial state first
  function resetSteps() {
    var initSteps = [
      { ico:'✅', lbl:'PDF 텍스트 추출', tag:'완료', tagCls:'tgr', lblCls:'sm cb', icoStyle:'' },
      { ico:'⬜', lbl:'주제 분류', tag:'대기', tagCls:'tg', lblCls:'sm cg', icoStyle:'' },
      { ico:'⬜', lbl:'핵심 키워드 추출', tag:'대기', tagCls:'tg', lblCls:'sm cg', icoStyle:'' },
      { ico:'⬜', lbl:'주차별 정리', tag:'대기', tagCls:'tg', lblCls:'sm cg', icoStyle:'' }
    ];
    initSteps.forEach(function(s, idx) {
      var icoEl  = document.getElementById('step-ico-' + idx);
      var lblEl  = document.getElementById('step-lbl-' + idx);
      var tagEl  = document.getElementById('step-tag-' + idx);
      if (icoEl) { icoEl.textContent = s.ico; icoEl.style.animation = s.icoStyle; icoEl.style.display = 'inline-block'; }
      if (lblEl) { lblEl.className = s.lblCls; lblEl.style.flex = '1'; lblEl.textContent = s.lbl; }
      if (tagEl) { tagEl.className = 'tag ' + s.tagCls; tagEl.textContent = s.tag; }
    });
    var bar = document.getElementById('analyze-progress');
    var pct = document.getElementById('analyze-pct');
    if (bar) bar.style.width = '15%';
    if (pct) pct.textContent = '15%';
    var btn = document.getElementById('btn-result');
    if (btn) btn.style.display = 'none';
    var cancelBtn = document.querySelector('#page-analyzing .btn-s');
    if (cancelBtn) cancelBtn.style.display = '';
  }

  // Each phase: which step index becomes "active", which become "done"
  var phases = [
    { pct:55, activeIdx:1, doneUpTo:0 },  // 주제 분류 진행중
    { pct:80, activeIdx:2, doneUpTo:1 },  // 핵심 키워드 추출 진행중
    { pct:100, activeIdx:3, doneUpTo:2 }  // 주차별 정리 진행중 → 완료
  ];
  var stepNames = ['PDF 텍스트 추출','주제 분류','핵심 키워드 추출','주차별 정리'];

  function applyPhase(phase, isLast) {
    var bar = document.getElementById('analyze-progress');
    var pct = document.getElementById('analyze-pct');
    if (bar) bar.style.width = phase.pct + '%';
    if (pct) pct.textContent = phase.pct + '%';

    // Mark all steps up to doneUpTo as done
    for (var d = 0; d <= phase.doneUpTo; d++) {
      setStepDone(d);
    }
    // Mark active step as in-progress (or done if last)
    if (isLast) {
      setStepDone(phase.activeIdx);
    } else {
      setStepActive(phase.activeIdx);
    }
    // Steps beyond activeIdx stay as waiting
    for (var w = phase.activeIdx + 1; w < 4; w++) {
      setStepWaiting(w);
    }
  }

  function setStepDone(idx) {
    var icoEl  = document.getElementById('step-ico-' + idx);
    var lblEl  = document.getElementById('step-lbl-' + idx);
    var tagEl  = document.getElementById('step-tag-' + idx);
    if (icoEl) { icoEl.textContent = '✅'; icoEl.style.animation = ''; }
    if (lblEl) { lblEl.className = 'sm cb'; lblEl.style.flex = '1'; lblEl.textContent = stepNames[idx]; }
    if (tagEl) { tagEl.className = 'tag tgr'; tagEl.textContent = '완료'; }
  }

  function setStepActive(idx) {
    var icoEl  = document.getElementById('step-ico-' + idx);
    var lblEl  = document.getElementById('step-lbl-' + idx);
    var tagEl  = document.getElementById('step-tag-' + idx);
    if (icoEl) { icoEl.textContent = '⚙️'; icoEl.style.animation = 'spin 1.2s linear infinite'; }
    if (lblEl) { lblEl.className = 'sm bold cbl'; lblEl.style.flex = '1'; lblEl.textContent = stepNames[idx] + ' 중'; }
    if (tagEl) { tagEl.className = 'tag tb'; tagEl.textContent = '진행중'; }
  }

  function setStepWaiting(idx) {
    var icoEl  = document.getElementById('step-ico-' + idx);
    var lblEl  = document.getElementById('step-lbl-' + idx);
    var tagEl  = document.getElementById('step-tag-' + idx);
    if (icoEl) { icoEl.textContent = '⬜'; icoEl.style.animation = ''; }
    if (lblEl) { lblEl.className = 'sm cg'; lblEl.style.flex = '1'; lblEl.textContent = stepNames[idx]; }
    if (tagEl) { tagEl.className = 'tag tg'; tagEl.textContent = '대기'; }
  }

  var bar = document.getElementById('analyze-progress');
  if (!bar) { setTimeout(startAnalysis, 150); return; }

  resetSteps();
  // Phase 0: 주제 분류 진행중 (already shown by resetSteps + initial state)
  setStepActive(1);
  var bar0 = document.getElementById('analyze-progress');
  var pct0 = document.getElementById('analyze-pct');
  if (bar0) bar0.style.width = '30%';
  if (pct0) pct0.textContent = '30%';

  var phaseIdx = 0;
  function runNextPhase() {
    if (phaseIdx >= phases.length) {
      // All done
      var btn = document.getElementById('btn-result');
      if (btn) btn.style.display = 'block';
      var cancelBtn = document.querySelector('#page-analyzing .btn-s');
      if (cancelBtn) cancelBtn.style.display = 'none';
      return;
    }
    var phase = phases[phaseIdx];
    var isLast = (phaseIdx === phases.length - 1);
    applyPhase(phase, isLast);
    phaseIdx++;
    setTimeout(runNextPhase, isLast ? 900 : 1300);
  }
  setTimeout(runNextPhase, 1200);
}

function toggleNoteTag(el, tag) {
  var colors = {important:'#2B7FE0', review:'#3DB87A', exam:'#FF9B3D'};
  var bgActive = {important:'#C8E0F7', review:'#B6EDD4', exam:'#FFE0B2'};
  var bgDefault = {important:'#EBF4FF', review:'#F0FFF8', exam:'#FFF8EF'};
  var c = colors[tag] || '#2B7FE0';
  if (el.dataset.active === '1') {
    el.style.borderColor = 'transparent';
    el.style.background = bgDefault[tag];
    el.style.opacity = '1';
    el.dataset.active = '0';
  } else {
    el.style.borderColor = c;
    el.style.borderWidth = '1.5px';
    el.style.borderStyle = 'solid';
    el.style.background = bgActive[tag];
    el.dataset.active = '1';
    showToast(el.textContent + ' 태그가 추가됐어요');
  }
}



function toggleWeeklyLecturePicker() {
  var picker = document.getElementById('weekly-lecture-picker');
  if (!picker) return;
  picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}

function selectWeeklyLecture(name, el) {
  var title = document.getElementById('weekly-lecture-title');
  if (title) title.textContent = name + ' ▾';
  var picker = document.getElementById('weekly-lecture-picker');
  if (picker) picker.style.display = 'none';
  // 선택된 항목 강조
  var items = document.querySelectorAll('.lecture-picker-item');
  items.forEach(function(i){ i.style.background = '#fff'; i.style.color = '#1A1A1A'; });
  if (el) { el.style.background = '#EBF4FF'; el.style.color = '#2B7FE0'; }
  showToast(name + ' 강의로 변경됐어요');
}

function markWeeklyDone(weekEl) {
  if (!weekEl) return;
  var badge = weekEl.querySelector('.weekly-status-badge');
  if (badge) {
    badge.textContent = '✓ 완료';
    badge.style.background = '#E8FFF3';
    badge.style.color = '#3DB87A';
  }
  showToast('학습 완료로 표시됐어요 ✓');
}
function filterFolders(q) {
  var query = q.trim().toLowerCase();
  var cards = document.querySelectorAll('#folder-all .fcrd');
  cards.forEach(function(card) {
    var nm = card.querySelector('.fnm');
    if (!nm) return;
    card.style.display = (!query || nm.textContent.toLowerCase().includes(query)) ? '' : 'none';
  });
  // 검색 중이면 즐겨찾기/최근 탭 카드도 필터 (현재 탭 무관하게 all 기준)
}

function toggleSearch() {
  showToast('준비 중인 기능이에요');
}

function selectQuiz(el) {
  const opts = el.parentElement.querySelectorAll('.qopt');
  opts.forEach(o => { o.classList.remove('sel'); o.querySelector('.qnum').classList.remove('sel'); });
  el.classList.add('sel');
  el.querySelector('.qnum').classList.add('sel');
}

window.addEventListener('load', function() {
  setTimeout(function() { renderWeekSchedule(); }, 1000);
  setTimeout(function() {
    var s = document.getElementById('splash');
    if(s){ s.style.transition='opacity .55s ease'; s.style.opacity='0'; setTimeout(function(){ s.style.display='none'; }, 560); }
  }, 1800);
  initFavList();
  updateWeeklyProgress();
});

function autoWeakAdd() {
  const notice = document.getElementById('weak-notice');
  if (notice) {
    notice.style.display = 'block';
    setTimeout(() => { notice.style.display = 'none'; }, 4000);
  }
}

/* ── HOME SEARCH ── */
/* ── 홈 검색 (강의명 + 주차명, 결과→강의 상세로 이동) ── */
function homeSearchFocus() {
  var cancel = document.getElementById('home-search-cancel');
  var layer  = document.getElementById('home-search-layer');
  var scroll = document.querySelector('#page-home .scroll');
  if (cancel) cancel.style.display = 'inline';
  // 검색어가 있으면 결과 레이어 표시
  var inp = document.getElementById('home-search-input');
  if (inp && inp.value.trim()) {
    if (layer)  layer.style.display  = 'block';
    if (scroll) scroll.style.display = 'none';
  }
}

function homeSearchInput(q) {
  var kw     = q.trim();
  var cancel = document.getElementById('home-search-cancel');
  var layer  = document.getElementById('home-search-layer');
  var scroll = document.querySelector('#page-home .scroll');
  // 취소 버튼 항상 표시 (포커스 중이므로)
  if (cancel) cancel.style.display = 'inline';
  if (!kw) {
    if (layer)  layer.style.display  = 'none';
    if (scroll) scroll.style.display = '';
    return;
  }
  if (layer)  layer.style.display  = 'block';
  if (scroll) scroll.style.display = 'none';
  homeRenderSearch(kw);
}

function homeSearchCancel() {
  var inp    = document.getElementById('home-search-input');
  var cancel = document.getElementById('home-search-cancel');
  var layer  = document.getElementById('home-search-layer');
  var scroll = document.querySelector('#page-home .scroll');
  if (inp)    { inp.value = ''; inp.blur(); }
  if (cancel) cancel.style.display = 'none';
  if (layer)  layer.style.display  = 'none';
  if (scroll) scroll.style.display = '';
}

function homeRenderSearch(kw) {
  var lk = kw.toLowerCase();
  var arrowSvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CBD0D8" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';
  // 강의 목록 (현재 프로토타입에는 건강정보보호 1개)
  var lectures = [
    {name:'건강정보보호', meta:'16주차 · 어제 업데이트', page:'page-folder-detail'}
  ];
  // 주차 목록 (wsData의 week 항목 재활용)
  var weekItems = wsData.filter(function(d){ return d.type==='week'; });
  var matchedLec  = lectures.filter(function(l){ return l.name.toLowerCase().includes(lk); });
  var matchedWeek = weekItems.filter(function(d){ return d.title.toLowerCase().includes(lk) || (d.keywords && d.keywords.some(function(k){ return k.toLowerCase().includes(lk); })); });
  var hl = function(t){ return t.replace(new RegExp('('+kw.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<span style="color:#2B7FE0;font-weight:700;">$1</span>'); };
  var html = '';
  if (matchedLec.length === 0 && matchedWeek.length === 0) {
    html = '<div style="text-align:center;padding:40px 0;"><div style="font-size:28px;margin-bottom:10px;">🔍</div><div style="font-size:13px;color:#8B919C;">"'+kw+'" 검색 결과가 없어요</div><div style="font-size:11px;color:#CBD0D8;margin-top:4px;">다른 키워드로 검색해보세요</div></div>';
  } else {
    if (matchedLec.length) {
      html += '<div style="font-size:11px;font-weight:700;color:#8B919C;margin-bottom:10px;">강의 ('+matchedLec.length+')</div>';
      matchedLec.forEach(function(l){
        html += '<div class="fcrd blue" onclick="homeSearchCancel();goPage(\''+l.page+'\')" style="margin-bottom:8px;">'
          + '<div class="fic" style="background:#2B7FE0;">📖</div>'
          + '<div class="fin"><div class="fnm">'+hl(l.name)+'</div><div class="fmeta">'+l.meta+'</div></div>'
          + arrowSvg + '</div>';
      });
    }
    if (matchedWeek.length) {
      html += '<div style="font-size:11px;font-weight:700;color:#8B919C;margin:'+(matchedLec.length?'14':'0')+'px 0 10px;">주차 ('+matchedWeek.length+')</div>';
      matchedWeek.forEach(function(d){
        var dotEl;
        if(d.status==='done')       dotEl = '<div style="width:22px;height:22px;border-radius:50%;background:#2B7FE0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;font-weight:700;flex-shrink:0;">✓</div>';
        else if(d.status==='weak')  dotEl = '<div style="width:22px;height:22px;border-radius:50%;background:#FFE5E5;border:1.5px solid #E05C5C;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#E05C5C;flex-shrink:0;">!</div>';
        else if(d.status==='ing')   dotEl = '<div style="width:22px;height:22px;border-radius:50%;border:2px solid #2B7FE0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#2B7FE0;flex-shrink:0;">▶</div>';
        else if(d.status==='exam')  dotEl = '<div style="width:22px;height:22px;border-radius:50%;background:#FFF0F0;border:1.5px solid #E05C5C;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;">📝</div>';
        else if(d.status==='off')   dotEl = '<div style="width:22px;height:22px;border-radius:50%;background:#F2F4F7;border:1.5px solid #CBD0D8;flex-shrink:0;"></div>';
        else                         dotEl = '<div style="width:22px;height:22px;border-radius:50%;border:1.5px solid #CBD0D8;flex-shrink:0;"></div>';
        html += '<div class="list-item" onclick="homeSearchCancel();goPage(\''+d.page+'\')" style="padding:10px 0;">'
          + dotEl
          + '<div class="li-info"><div class="li-title">'+hl(d.title)+'</div><div class="li-sub">'+d.sub+'</div></div>'
          + arrowSvg + '</div>';
      });
    }
  }
  var inner = document.getElementById('home-search-results');
  if (inner) inner.innerHTML = html;
}

function filterHomeSearch(q) {
  // 하위 호환 유지용 (기존 호출부가 있을 경우 대비)
  homeSearchInput(q);
}

/* ── WEEKLY SEARCH ── */
var wsData = [
  {type:'week', title:'1주차 — 건강정보보호 개요',    sub:'키워드 5개 · 학습 완료', status:'done', page:'page-weekly-detail-1',  keywords:['건강정보보호','CIA 3요소','정보보호 개념','개인정보보호','건강정보 특수성']},
  {type:'week', title:'2주차 — 정보보호관련법률',      sub:'키워드 7개 · 학습 완료', status:'done', page:'page-weekly-detail-2',  keywords:['정보보호관련법률','개인정보보호법','ISMS','ISMS-P','개인정보 영향평가','인증기준','인증심사']},
  {type:'week', title:'3주차 — 건강정보보호 관련법',  sub:'키워드 6개 · 학습 중',   status:'ing',  page:'page-weekly-ing',       keywords:['의료법','HIPAA 개요','ERD','스키마','진료정보','개인정보']},
  {type:'week', title:'4주차 — 진료단계별 보안',       sub:'키워드 8개 · 미학습',    status:'new',  page:'page-weekly-detail-4',  keywords:['접수단계 보안','진료단계 보안','처방단계 보안','SELECT','WHERE','GROUP BY','집계함수','인덱스']},
  {type:'week', title:'5주차 — 정보처리단계별 보호',   sub:'키워드 5개 · 미학습',    status:'new',  page:'page-weekly-weak',      keywords:['수집·이용 단계 보호','저장·보관 단계 보호','개인정보 영향평가','파기','암호화']},
  {type:'week', title:'6주차 — 정보보호 보안기술',     sub:'키워드 8개 · 미학습',    status:'new',  page:'page-weekly-detail-6',  keywords:['암호화','접근제어','인증','방화벽','침입탐지','VPN','TLS/SSL','다중인증']},
  {type:'week', title:'7주차 — 정보보호 평가제도',     sub:'키워드 7개 · 미학습',    status:'new',  page:'page-weekly-detail-7',  keywords:['ISMS','ISMS-P','개인정보 영향평가','인증기준','인증심사','취약점분석','위험평가']},
  {type:'week', title:'8주차 — 중간고사',              sub:'직무수행능력평가 1차',    status:'exam', page:'page-weekly-detail-8',  keywords:['중간고사','1~7주차 범위']},
  {type:'week', title:'9주차 — 보안교육 기획 · PBL',  sub:'키워드 5개 · 미학습',    status:'new',  page:'page-weekly-detail-9',  keywords:['보안교육','교육기획','실행관리','PBL','보안인식']},
  {type:'week', title:'10주차 — 건강정보 관리사례',    sub:'키워드 4개 · 미학습',    status:'new',  page:'page-weekly-detail-10', keywords:['건강정보 관리','관리사례','표준체계','PBL 활동']},
  {type:'week', title:'11주차 — 건강정보 표준체계',    sub:'키워드 4개 · 미학습',    status:'new',  page:'page-weekly-detail-11', keywords:['표준체계','ISO 27001','PBL 활동','표준준수']},
  {type:'week', title:'12주차 — 대체공휴일',           sub:'휴강',                   status:'off',  page:'page-weekly-detail-12', keywords:['휴강','대체공휴일']},
  {type:'week', title:'13주차 — 현장전문가 특강',      sub:'현장전문가특강',          status:'spec', page:'page-weekly-detail-13', keywords:['현장전문가','특강','실무사례']},
  {type:'week', title:'14주차 — PBL 활동발표 1',       sub:'팀 프로젝트 발표',        status:'pbl',  page:'page-weekly-detail-14', keywords:['PBL 발표','활동발표','팀프로젝트']},
  {type:'week', title:'15주차 — PBL 활동발표 2',       sub:'팀 프로젝트 최종 발표',   status:'pbl',  page:'page-weekly-detail-15', keywords:['PBL 발표','최종발표','활동발표 2']},
  {type:'week', title:'16주차 — 기말고사',             sub:'직무수행능력평가 2차',    status:'exam', page:'page-weekly-detail-16', keywords:['기말고사','전범위']},
  {type:'kw', title:'ISMS vs ISMS-P',    sub:'2주차 · 정보보호관련법률',    status:'done', page:'page-weekly-detail-2'},
  {type:'kw', title:'개인정보보호법',      sub:'2주차 · 정보보호관련법률',    status:'done', page:'page-weekly-detail-2'},
  {type:'kw', title:'개인정보 영향평가',   sub:'2주차 · 정보보호관련법률',    status:'done', page:'page-weekly-detail-2'},
  {type:'kw', title:'ERD 설계',           sub:'3주차 · 건강정보보호 관련법',  status:'ing',  page:'page-weekly-ing'},
  {type:'kw', title:'HIPAA 개요',         sub:'3주차 · 건강정보보호 관련법',  status:'ing',  page:'page-weekly-ing'},
  {type:'kw', title:'스키마',             sub:'3주차 · 건강정보보호 관련법',  status:'ing',  page:'page-weekly-ing'},
  {type:'kw', title:'CIA 3요소',          sub:'1주차 · 건강정보보호 개요',    status:'done', page:'page-weekly-detail-1'},
  {type:'kw', title:'접수단계 보안',       sub:'4주차 · 진료단계별 보안',      status:'new',  page:'page-weekly-detail-4'},
  {type:'kw', title:'인덱스',             sub:'4주차 · 진료단계별 보안',      status:'new',  page:'page-weekly-detail-4'},
  {type:'kw', title:'SELECT',            sub:'4주차 · 진료단계별 보안',      status:'new',  page:'page-weekly-detail-4'},
  {type:'kw', title:'진료단계별 보안',     sub:'4주차 · 진료단계별 보안',      status:'new',  page:'page-weekly-detail-4'},
  {type:'kw', title:'수집·이용 단계 보호', sub:'5주차 · 정보처리단계별 보호',  status:'new',  page:'page-weekly-weak'},
  {type:'kw', title:'저장·보관 단계 보호', sub:'5주차 · 정보처리단계별 보호',  status:'new',  page:'page-weekly-weak'},
  {type:'kw', title:'암호화',             sub:'6주차 · 정보보호 보안기술',    status:'new',  page:'page-weekly-detail-6'},
  {type:'kw', title:'접근제어',           sub:'6주차 · 정보보호 보안기술',    status:'new',  page:'page-weekly-detail-6'},
  {type:'kw', title:'ISMS 인증',          sub:'7주차 · 정보보호 평가제도',    status:'new',  page:'page-weekly-detail-7'},
  {type:'kw', title:'보안교육',           sub:'9주차 · 보안교육 기획 · PBL',  status:'new',  page:'page-weekly-detail-9'},
];

function wsSearch(q) {
  var kw = q.trim();
  var clearBtn = document.getElementById('ws-clear');
  var recent = document.getElementById('ws-recent');
  var results = document.getElementById('ws-results');
  var inner = document.getElementById('ws-result-inner');
  if (clearBtn) clearBtn.style.display = kw ? 'block' : 'none';
  if (!kw) {
    if (recent) recent.style.display = '';
    if (results) results.style.display = 'none';
    return;
  }
  if (recent) recent.style.display = 'none';
  if (results) results.style.display = '';
  var lk = kw.toLowerCase();
  var weeks = wsData.filter(function(d){ return d.type==='week' && (d.title.toLowerCase().includes(lk) || d.keywords.some(function(k){return k.toLowerCase().includes(lk);})); });
  var kws   = wsData.filter(function(d){ return d.type==='kw' && d.title.toLowerCase().includes(lk); });
  var hl = function(t){ return t.replace(new RegExp('('+kw.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<span style="color:#2B7FE0;font-weight:700;">$1</span>'); };
  var arrowSvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CBD0D8" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';
  var statusDot = function(s){
    if(s==='done') return '<div style="width:22px;height:22px;border-radius:50%;background:#2B7FE0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;font-weight:700;flex-shrink:0;">✓</div>';
    if(s==='weak') return '<div style="width:22px;height:22px;border-radius:50%;background:#FFE5E5;border:1.5px solid #E05C5C;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#E05C5C;flex-shrink:0;">!</div>';
    if(s==='ing')  return '<div style="width:22px;height:22px;border-radius:50%;border:2px solid #2B7FE0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#2B7FE0;flex-shrink:0;">▶</div>';
    if(s==='new')  return '<div style="width:22px;height:22px;border-radius:50%;border:1.5px solid #CBD0D8;flex-shrink:0;"></div>';
    if(s==='exam') return '<div style="width:22px;height:22px;border-radius:50%;background:#FFF0F0;border:1.5px solid #E05C5C;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;">📝</div>';
    if(s==='off')  return '<div style="width:22px;height:22px;border-radius:50%;background:#F2F4F7;border:1.5px solid #CBD0D8;flex-shrink:0;"></div>';
    if(s==='spec') return '<div style="width:22px;height:22px;border-radius:50%;background:#E8FFF4;border:1.5px solid #3DB87A;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;">🎤</div>';
    if(s==='pbl')  return '<div style="width:22px;height:22px;border-radius:50%;background:#FFF3E0;border:1.5px solid #F59C3C;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;">🎯</div>';
    return '<div style="width:22px;height:22px;border-radius:50%;border:1.5px solid #CBD0D8;flex-shrink:0;"></div>';
  };
  var kwBadge = function(s){
    if(s==='weak') return '<span style="background:#FFE5E5;color:#E05C5C;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">취약</span>';
    if(s==='done') return '<span style="background:#F2F4F7;color:#8B919C;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">완료</span>';
    if(s==='new')  return '<span style="background:#F2F4F7;color:#8B919C;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">미학습</span>';
    if(s==='ing')  return '<span style="background:#EBF4FF;color:#2B7FE0;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">학습중</span>';
    if(s==='exam') return '<span style="background:#FFE5E5;color:#E05C5C;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">시험</span>';
    if(s==='off')  return '<span style="background:#F2F4F7;color:#8B919C;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">휴강</span>';
    if(s==='spec') return '<span style="background:#E8FFF4;color:#3DB87A;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">특강</span>';
    if(s==='pbl')  return '<span style="background:#FFF3E0;color:#F59C3C;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">발표</span>';
    return '<span style="background:#F2F4F7;color:#8B919C;font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;flex-shrink:0;">미학습</span>';
  };
  var html = '';
  if (weeks.length === 0 && kws.length === 0) {
    html = '<div style="text-align:center;padding:40px 0;"><div style="font-size:28px;margin-bottom:10px;">🔍</div><div style="font-size:13px;color:#8B919C;">"'+kw+'" 검색 결과가 없어요</div><div style="font-size:11px;color:#CBD0D8;margin-top:4px;">다른 키워드로 검색해보세요</div></div>';
  } else {
    if (weeks.length) {
      html += '<div style="font-size:11px;font-weight:700;color:#8B919C;margin-bottom:10px;">주차 ('+weeks.length+')</div>';
      weeks.forEach(function(d,i){
        var bd = i===weeks.length-1 && !kws.length ? 'border-bottom:none;' : '';
        html += '<div class="list-item" onclick="goPage(\''+d.page+'\')" style="padding:10px 0;'+bd+'">'
          + statusDot(d.status)
          + '<div class="li-info"><div class="li-title">'+hl(d.title)+'</div><div class="li-sub">'+d.sub+'</div></div>'
          + arrowSvg + '</div>';
      });
    }
    if (kws.length) {
      html += '<div style="font-size:11px;font-weight:700;color:#8B919C;margin:'+(weeks.length?'14':'0')+'px 0 10px;">키워드 ('+kws.length+')</div>';
      kws.forEach(function(d,i){
        var mb = i===kws.length-1 ? '0' : '8';
        html += '<div onclick="goPage(\''+d.page+'\')" style="background:#fff;border-radius:14px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,.05);margin-bottom:'+mb+'px;cursor:pointer;display:flex;align-items:center;gap:10px;">'
          + kwBadge(d.status)
          + '<div style="flex:1;"><div style="font-size:12px;font-weight:700;color:#1A1A1A;">'+hl(d.title)+'</div><div style="font-size:10px;color:#8B919C;margin-top:2px;">'+d.sub+'</div></div>'
          + arrowSvg + '</div>';
      });
    }
  }
  if (inner) inner.innerHTML = html;
}

function wsClear() {
  var inp = document.getElementById('ws-input');
  if (inp) { inp.value = ''; inp.focus(); }
  wsSearch('');
}

function wsFocused() {
  var inp = document.getElementById('ws-input');
  if (inp && inp.value) wsSearch(inp.value);
}

function wsSetKeyword(kw) {
  var inp = document.getElementById('ws-input');
  if (inp) { inp.value = kw; wsSearch(kw); }
}
/* ── 학습 메모 기능 ── */
/* ── 저장된 메모 목록 (인메모리) ── */
var savedMemos = [];

function renderSavedMemos() {
  var section = document.getElementById('saved-memos-section');
  var list    = document.getElementById('saved-memos-list');
  if (!section || !list) return;
  if (savedMemos.length === 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  list.innerHTML = savedMemos.map(function(m, i) {
    var preview = m.resultHtml.replace(/<[^>]+>/g, '').slice(0, 60) + '…';
    return '<div style="background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,.06);margin-bottom:8px;">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">' +
        '<div style="font-size:11px;font-weight:700;color:#D97706;">' + escapeHtml(m.title) + '</div>' +
        '<div style="display:flex;gap:6px;align-items:center;">' +
          '<div style="font-size:9px;color:#8B919C;">' + m.date + '</div>' +
          '<div onclick="deleteSavedMemo(' + i + ')" style="cursor:pointer;font-size:12px;color:#CBD0D8;">✕</div>' +
        '</div>' +
      '</div>' +
      '<div style="font-size:11px;color:#8B919C;line-height:1.5;white-space:pre-wrap;">' + escapeHtml(preview) + '</div>' +
      '<button onclick="viewSavedMemo(' + i + ')" style="margin-top:8px;background:#FFFBEB;border:1px solid #FCD34D;border-radius:8px;padding:4px 10px;font-size:11px;color:#D97706;font-weight:600;cursor:pointer;width:100%;">펼쳐보기</button>' +
    '</div>';
  }).join('');
}

function saveMemoResult() {
  var inp        = document.getElementById('memo-input');
  var resultText = document.getElementById('memo-result-text');
  if (!inp || !resultText || !resultText.innerHTML.trim()) {
    showToast('먼저 Lumi가 정리해줘 버튼을 눌러주세요');
    return;
  }
  var raw = inp.value.trim();
  var title = raw.slice(0, 20) + (raw.length > 20 ? '…' : '');
  var now   = new Date();
  var date  = (now.getMonth()+1) + '/' + now.getDate() + ' ' + now.getHours() + ':' + String(now.getMinutes()).padStart(2,'0');
  savedMemos.unshift({ title: title, raw: raw, resultHtml: resultText.innerHTML, date: date });
  renderSavedMemos();
  var btn = document.getElementById('memo-save-result-btn');
  if (btn) { btn.textContent = '✅ 저장됨'; btn.disabled = true; }
  showToast('메모가 저장됐어요 ✓');
}

function viewSavedMemo(idx) {
  var m = savedMemos[idx];
  if (!m) return;
  var inp  = document.getElementById('memo-input');
  var rBox = document.getElementById('memo-result-box');
  var rTxt = document.getElementById('memo-result-text');
  var btn  = document.getElementById('memo-save-result-btn');
  if (inp)  inp.value = m.raw;
  if (rBox) rBox.style.display = 'block';
  if (rTxt) rTxt.innerHTML = m.resultHtml;
  if (btn)  { btn.style.display = 'inline-block'; btn.textContent = '✅ 저장됨'; btn.disabled = true; }
  var scroll = document.querySelector('#page-lumi-memo .scroll');
  if (scroll) scroll.scrollTop = 0;
}

function deleteSavedMemo(idx) {
  savedMemos.splice(idx, 1);
  renderSavedMemos();
  showToast('메모가 삭제됐어요');
}

function saveMemo() {
  // 상단 "저장" 버튼 — 결과가 있으면 저장, 없으면 안내
  var resultText = document.getElementById('memo-result-text');
  if (resultText && resultText.innerHTML.trim()) {
    saveMemoResult();
  } else {
    var inp = document.getElementById('memo-input');
    if (inp && inp.value.trim()) {
      showToast('먼저 Lumi가 정리해줘를 눌러주세요');
    } else {
      showToast('메모를 입력해주세요');
    }
  }
}

async function organizeMemo() {
  var inp = document.getElementById('memo-input');
  if (!inp || !inp.value.trim()) { showToast('메모를 먼저 입력해주세요'); return; }
  var memo = inp.value.trim();
  var resultBox  = document.getElementById('memo-result-box');
  var resultText = document.getElementById('memo-result-text');
  var loadingDots = document.getElementById('memo-loading-dots');
  var saveBtn     = document.getElementById('memo-save-result-btn');
  if (!resultBox || !resultText) return;

  resultBox.style.display = 'block';
  if (loadingDots) loadingDots.style.display = 'inline-flex';
  resultText.innerHTML = '';
  if (saveBtn) { saveBtn.style.display = 'none'; saveBtn.textContent = '💾 저장'; saveBtn.disabled = false; }

  /* ── 오프라인 fallback ── */
  function offlineMemoOrganize(text) {
    var t = text.toLowerCase();
    var sections = [];

    // ① 입력 내용 핵심 정리 (항상 포함)
    var coreLine = '📝 입력 내용 핵심 정리\n';
    var words = text.replace(/[^\w가-힣\s]/g, ' ').split(/\s+/).filter(function(w){ return w.length > 1; });
    if (words.length > 0) {
      coreLine += words.slice(0, 5).map(function(w){ return '· ' + w; }).join('\n');
    } else {
      coreLine += '· ' + text.slice(0, 40);
    }
    sections.push(coreLine);

    // ② 관련 개념 (키워드 매핑)
    var concepts = [];
    if (/isms|isms-p|인증/.test(t))        concepts.push('· ISMS/ISMS-P — 정보보호 관리체계 인증 제도 (KISA 부여)');
    if (/cia|기밀|무결|가용/.test(t))       concepts.push('· CIA 3요소 — 기밀성·무결성·가용성');
    if (/개인정보|보호법|동의/.test(t))     concepts.push('· 개인정보보호법 — 수집·처리·파기 기준을 정한 일반법');
    if (/진료|접수|처방|emr/.test(t))       concepts.push('· 진료단계별 보안 — 접수→진료→처방→보관→파기');
    if (/hipaa/.test(t))                   concepts.push('· HIPAA — 미국 건강정보보호 법률 (Privacy/Security Rule)');
    if (/영향평가|pia/.test(t))             concepts.push('· 개인정보 영향평가(PIA) — 침해 위험 사전 분석 제도');
    if (/암호화|tls|ssl|aes/.test(t))       concepts.push('· 암호화 기술 — 저장(AES)·전송(TLS/SSL) 보호');
    if (concepts.length === 0)             concepts.push('· 건강정보보호 과목 핵심 개념과 연결될 수 있어요');
    sections.push('🔗 관련 개념\n' + concepts.join('\n'));

    // ③ 시험 대비 포인트
    var examPoints = [];
    if (/isms|isms-p/.test(t))             examPoints.push('· ISMS vs ISMS-P 차이 (범위·인증기준 수)');
    if (/cia|기밀|무결|가용/.test(t))      examPoints.push('· CIA 3요소 각각의 의미와 예시');
    if (/개인정보|보호법/.test(t))         examPoints.push('· 개인정보보호법 처리 원칙 4단계');
    if (/진료|접수/.test(t))              examPoints.push('· 진료단계별 보안 조치 순서와 내용');
    if (/영향평가|pia/.test(t))            examPoints.push('· PIA 의무 대상 기관과 절차');
    if (examPoints.length === 0)           examPoints.push('· 입력 내용과 관련된 핵심 개념의 정의와 예시를 정리하세요');
    sections.push('📋 시험 대비 포인트\n' + examPoints.join('\n'));

    // ④ 추가 질문 추천
    var followUps = [];
    if (/isms/.test(t))    followUps.push('· "ISMS와 ISMS-P 차이가 뭐야?"');
    if (/cia/.test(t))     followUps.push('· "CIA 3요소 예시로 설명해줘"');
    if (/개인정보/.test(t)) followUps.push('· "개인정보보호법 처리 원칙을 정리해줘"');
    if (/진료/.test(t))    followUps.push('· "진료단계별 보안 조치를 순서대로 알려줘"');
    if (followUps.length === 0) {
      followUps.push('· "이 내용을 더 쉽게 설명해줘"');
      followUps.push('· "시험에 자주 나오는 건강정보보호 핵심 내용은?"');
    }
    sections.push('💬 추가 질문 추천\n' + followUps.join('\n'));

    return sections.join('\n\n');
  }

  var MEMO_SYSTEM = '당신은 Lumi, 한양여자대학교 빅데이터과 건강정보보호 과목의 AI 튜터입니다.\n' +
    '학생의 학습 메모를 받으면 반드시 아래 4개 섹션으로 구조화해서 정리해주세요.\n' +
    '각 섹션은 이모지+제목 줄 다음에 · 로 시작하는 항목들을 나열하세요.\n' +
    '섹션 사이는 빈 줄로 구분하고, 마크다운(**, ##, -) 없이 텍스트만 사용하세요.\n\n' +
    '섹션 형식:\n' +
    '📝 입력 내용 핵심 정리\n· 학생이 입력한 내용을 핵심 포인트로 요약\n\n' +
    '🔗 관련 개념\n· 건강정보보호 강의 내용(CIA 3요소, ISMS, 개인정보보호법 등)과 연결\n\n' +
    '📋 시험 대비 포인트\n· 시험에 나올 만한 핵심 포인트 2~3개\n\n' +
    '💬 추가 질문 추천\n· Lumi에게 이어서 물어볼 만한 질문 2~3개 (따옴표로 감싸기)';

  try {
    if (!CONFIG.OPENAI_API_KEY) throw new Error('no key');
    var res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + CONFIG.OPENAI_API_KEY },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 700,
        messages: [
          { role: 'system', content: MEMO_SYSTEM },
          { role: 'user', content: '내 메모:\n' + memo }
        ]
      })
    });
    var data = await res.json();
    var reply = (data.choices && data.choices[0] && data.choices[0].message)
      ? data.choices[0].message.content.trim()
      : offlineMemoOrganize(memo);
    if (loadingDots) loadingDots.style.display = 'none';
    resultText.innerHTML = escapeHtml(reply).replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
  } catch(e) {
    if (loadingDots) loadingDots.style.display = 'none';
    var fallback = offlineMemoOrganize(memo);
    resultText.innerHTML = escapeHtml(fallback).replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
  }

  if (saveBtn) saveBtn.style.display = 'inline-block';
}

/* ── 메모 기반 플래시카드 flip ── */
function flipMfc1() {
  var f = document.getElementById('mfc1-front'), b = document.getElementById('mfc1-back'), n = document.getElementById('mfc1-next-btn');
  if(!f||!b) return;
  var show = b.style.display!=='none';
  f.style.display = show?'flex':'none'; b.style.display = show?'none':'block';
  if(n) n.style.display = show?'flex':'none';
}
function flipMfc2() {
  var f = document.getElementById('mfc2-front'), b = document.getElementById('mfc2-back'), n = document.getElementById('mfc2-next-btn');
  if(!f||!b) return;
  var show = b.style.display!=='none';
  f.style.display = show?'flex':'none'; b.style.display = show?'none':'block';
  if(n) n.style.display = show?'flex':'none';
}
function flipMfc3() {
  var f = document.getElementById('mfc3-front'), b = document.getElementById('mfc3-back'), n = document.getElementById('mfc3-next-btn');
  if(!f||!b) return;
  var show = b.style.display!=='none';
  f.style.display = show?'flex':'none'; b.style.display = show?'none':'block';
  if(n) n.style.display = show?'flex':'none';
}

/* ── 모두 읽음 ── */
/* ── 강의 정보 편집 ── */
function openEditLecture() {
  var nameEl = document.getElementById('fd-lecture-name');
  var profEl = document.getElementById('fd-professor-name');
  var nameInput = document.getElementById('edit-lecture-name-input');
  var profInput = document.getElementById('edit-professor-name-input');
  if (nameInput) nameInput.value = nameEl ? nameEl.textContent : '';
  if (profInput) profInput.value = profEl ? profEl.textContent : '';
  showModal('modal-edit-lecture');
  setTimeout(function(){ if(nameInput) nameInput.focus(); }, 300);
}

function saveLectureEdit() {
  var nameInput = document.getElementById('edit-lecture-name-input');
  var profInput = document.getElementById('edit-professor-name-input');
  var newName = nameInput ? nameInput.value.trim() : '';
  var newProf = profInput ? profInput.value.trim() : '';
  if (!newName) { showToast('강의명을 입력해주세요'); return; }

  // 상세 화면 topbar·교수명 업데이트
  var nameEl = document.getElementById('fd-lecture-name');
  var profEl = document.getElementById('fd-professor-name');
  if (nameEl) nameEl.textContent = newName;
  if (profEl) profEl.textContent = newProf || '교수명 미입력';

  // 강의 목록 카드도 동기화 (전체·즐겨찾기·최근 탭)
  document.querySelectorAll('#folder-all .fcrd, #folder-fav-list .fcrd, #folder-recent-list .fcrd').forEach(function(card) {
    var fnm = card.querySelector('.fnm');
    if (fnm && fnm.textContent.trim() === (nameEl ? nameEl.dataset.orig || '건강정보보호' : '')) {
      fnm.textContent = newName;
    }
  });

  hideModal('modal-edit-lecture');
  showToast('강의 정보가 저장됐어요 ✅');
}

/* ── 접이식 핵심 개념 ── */
function toggleAcc(head) {
  var body = head.nextElementSibling;
  var arrow = head.querySelector('.acc-arrow');
  var isOpen = body.style.display === 'block';
  body.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
}

function ckSelect(el, type) {
  var row = el.closest('.ck-row');
  if (!row) return;
  row.querySelectorAll('.ck-btn').forEach(function(b) {
    b.classList.remove('sel-ok','sel-hm','sel-q');
  });
  if (type === 'ok') {
    el.classList.add('sel-ok');
    showToast('완벽해요! 다음 개념으로 넘어가봐요 🎉');
  } else if (type === 'hm') {
    el.classList.add('sel-hm');
    showToast('Lumi에게 질문해보세요 🤔');
  } else {
    el.classList.add('sel-q');
    showToast('아래 Lumi 질문을 눌러보세요 ❓');
  }
}

/* ── 이해 체크 ── */
function handleCheck(prefix, type) {
  // 버튼 스타일 초기화
  ['ok','hm','q'].forEach(function(t) {
    var btn = document.getElementById(prefix + '-' + t);
    if (btn) btn.className = 'ck-btn';
  });
  // 선택 버튼 활성화
  var sel = document.getElementById(prefix + '-' + type);
  if (sel) sel.classList.add('sel-' + type);

  // 추가 설명 숨기기
  var hmBox = document.getElementById(prefix + '-extra-hm');
  if (hmBox) hmBox.style.display = 'none';

  // 퀴즈 버튼 숨기기
  var quizBtn = document.getElementById(prefix + '-quiz-btn');
  if (quizBtn) quizBtn.style.display = 'none';

  if (type === 'ok') {
    if (quizBtn) quizBtn.style.display = 'block';
    showToast('완벽해요! 퀴즈로 확인해보세요 🎯');
  } else if (type === 'hm') {
    if (hmBox) hmBox.style.display = 'block';
    showToast('핵심 내용을 다시 확인해봐요 💡');
  } else if (type === 'q') {
    showToast('AI 튜터에게 질문할게요!');
    setTimeout(function() { goTab('page-lumi-chat'); }, 600);
  }
}

/* ── 강의명 반영 후 분석 시작 ── */
function applyLectureNameAndStart() {
  var input = document.getElementById('lecture-name-input');
  var name = input ? input.value.trim() : '';
  if (!name) name = '건강정보보호';

  // 분석 결과 topbar
  var resultTitle = document.getElementById('analysis-result-title');
  if (resultTitle) resultTitle.textContent = name;

  // 강의 상세 화면 topbar & 교수명 위
  var fdName = document.getElementById('fd-lecture-name');
  if (fdName) fdName.textContent = name;

  // 강의 폴더 목록 카드 (전체 탭)
  document.querySelectorAll('#folder-all .fcrd .fnm').forEach(function(el) {
    if (el.textContent.trim() === '건강정보보호' || el.textContent.trim() === fdName && fdName.dataset.orig) {
      el.textContent = name;
    }
  });

  // 즐겨찾기 목록 카드도 동기화
  document.querySelectorAll('#folder-fav-list .fcrd .fnm').forEach(function(el) {
    if (el.textContent.trim() === '건강정보보호') el.textContent = name;
  });

  hideModal('modal-upload-confirm');
  goPage('page-analyzing');
  setTimeout(startAnalysis, 300);
}

/* ── 주차별 퀴즈 함수 ── */
var wqScores = {};
var currentQuizWeek = 'week1';

function startWQ(week) {
  wqScores[week] = {};
  currentQuizWeek = week === 'w1' ? 'week1' : week === 'w2' ? 'week2' : week === 'w3' ? 'week3' : week === 'w5' ? 'week5' : 'week4';
  var suffix = week;
  document.querySelectorAll('[id^="'+suffix+'q"]').forEach(function(el) {
    el.classList.remove('ok','ng','sel');
    var qnum = el.querySelector('.qnum');
    if (qnum) qnum.classList.remove('ok','ng','sel');
  });
  document.querySelectorAll('[id$="-exp"]').forEach(function(el) {
    if (el.id.startsWith(suffix)) el.style.display = 'none';
  });
  goPage('page-quiz-' + suffix + '-1');
}

function checkWQ(week, qnum, el, isCorrect, correctId, expId) {
  // 같은 문제 내 모든 선택지 비활성화
  el.parentElement.querySelectorAll('.qopt').forEach(function(o){ o.onclick = null; });
  if (isCorrect) {
    el.classList.add('ok');
    if (el.querySelector('.qnum')) el.querySelector('.qnum').classList.add('ok');
  } else {
    el.classList.add('ng');
    if (el.querySelector('.qnum')) el.querySelector('.qnum').classList.add('ng');
    var cEl = document.getElementById(correctId);
    if (cEl) { cEl.classList.add('ok'); if (cEl.querySelector('.qnum')) cEl.querySelector('.qnum').classList.add('ok'); }
    var exp = document.getElementById(expId);
    if (exp) exp.style.display = 'block';
  }
  if (!wqScores[week]) wqScores[week] = {};
  wqScores[week][qnum] = isCorrect;
}

function submitWQ(week) {
  var scores = wqScores[week] || {};
  var total   = 3;
  var correct = Object.values(scores).filter(Boolean).length;
  var wrong   = total - correct;
  var pct     = Math.round(correct / total * 100);

  // 점수 표시
  var scoreEl = document.querySelector('#page-quiz-result [style*="font-size:28px"]');
  if (scoreEl) scoreEl.textContent = correct + ' / ' + total;
  var pctEl = document.querySelector('#page-quiz-result .xs.cg.mt4');
  if (pctEl) pctEl.textContent = '정답률 ' + pct + '%';
  var stars = Math.round(pct / 20);
  document.querySelectorAll('#page-quiz-result [style*="font-size:18px"] span').forEach(function(s, i){ s.style.color = i < stars ? '' : 'var(--g200)'; });
  var sv = document.querySelectorAll('#page-quiz-result .stat-v');
  if (sv[0]) sv[0].textContent = correct;
  if (sv[1]) sv[1].textContent = wrong;
  if (sv[2]) sv[2].textContent = pct + '%';

  // 주차별 개념명 (문제 순서대로 3개)
  var weekConcepts = {
    w1: ['건강정보보호 개념', '정보보호의 3요소(CIA)', '건강정보의 특수성'],
    w2: ['정보보호관련법률', '개인정보보호 관련법 체계', '개인정보보호법 주요 내용'],
    w3: ['건강정보보호 법률', '진료정보 보호 규정', 'HIPAA 개요'],
    w4: ['접수단계 보안', '진료·검사단계 보안', '처방·보관단계 보안'],
    w5: ['수집·이용 단계 보호', '저장·보관 단계 보호', '제공·파기 단계 보호']
  };
  var concepts = weekConcepts[week] || ['개념 1', '개념 2', '개념 3'];

  // 개념별 바 업데이트 (각 문제 정답 여부 반영)
  function applyBar(barId, tagId, nameId, name, isOk) {
    var bar = document.getElementById(barId);
    var tag = document.getElementById(tagId);
    var nm  = document.getElementById(nameId);
    if (nm)  nm.textContent  = name;
    if (bar) { bar.style.width = (isOk ? 100 : 0) + '%'; bar.className = 'cfill ' + (isOk ? 'cfs' : 'cfw'); }
    if (tag) { tag.className = 'tag ' + (isOk ? 'tgr' : 'tr'); tag.textContent = isOk ? '잘함' : '취약'; }
  }
  applyBar('res-bar-1','res-tag-1','res-name-1', concepts[0], !!scores[1]);
  applyBar('res-bar-2','res-tag-2','res-name-2', concepts[1], !!scores[2]);
  applyBar('res-bar-3','res-tag-3','res-name-3', concepts[2], !!scores[3]);

  // 취약 개념 수집 → page-ai-weak + page-ai-roadmap 업데이트
  var weakConcepts = [];
  [1,2,3].forEach(function(i){ if (!scores[i]) weakConcepts.push(concepts[i-1]); });
  renderWeakLists(week, weakConcepts);

  // 주차 완료 처리
  currentQuizWeek = {w1:'week1',w2:'week2',w3:'week3',w4:'week4',w5:'week5'}[week] || 'week1';
  markWeekDone(currentQuizWeek);

  showToast('준비 중인 기능이에요');
}

function renderWeakLists(week, weakConcepts) {
  var weekName = {w1:'1주차',w2:'2주차',w3:'3주차',w4:'4주차',w5:'5주차'};
  var wn = weekName[week] || '';
  var rankColors = ['var(--red)','var(--orange)','var(--orange)'];
  var barClasses = ['cfw','cfm','cfm'];
  var pcts = [25, 50, 65];

  // page-ai-weak 취약 목록
  var wc = document.getElementById('weak-concept-list');
  if (wc) {
    if (weakConcepts.length === 0) {
      wc.innerHTML = '<div style="text-align:center;padding:20px;color:#3DB87A;font-size:13px;font-weight:700;">🎉 모두 맞혔어요! 취약 개념 없음</div>';
    } else {
      wc.innerHTML = weakConcepts.map(function(c, i) {
        return '<div class="cbar"><div class="crow"><div class="cname">' + c + '</div>' +
          '<div class="crank" style="background:' + rankColors[i] + ';">' + (i+1) + '순위</div></div>' +
          '<div class="xs cg mb6" style="line-height:1.4;">✗ ' + wn + ' 퀴즈 오답</div>' +
          '<div class="pb-wrap"><div class="cfill ' + barClasses[i] + '" style="width:' + pcts[i] + '%;"></div></div></div>';
      }).join('');
    }
  }

  // page-ai-roadmap 로드맵 개념 목록
  var rc = document.getElementById('roadmap-concept-list');
  if (rc) {
    if (weakConcepts.length === 0) {
      rc.innerHTML = '<div style="text-align:center;padding:20px;color:#3DB87A;font-size:13px;font-weight:700;">🎉 취약 개념이 없어요!</div>';
    } else {
      rc.innerHTML = weakConcepts.map(function(c, i) {
        var bg = ['#FFE5E5','#FFF3DC','#FFF3DC'][i];
        var fc = ['#E05C5C','#F59C3C','#F59C3C'][i];
        return '<div onclick="selectWrongConcept(\'' + c.replace(/'/g,"\\'") + '\')" style="background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,.06);margin-bottom:10px;cursor:pointer;" onpointerdown="this.style.transform=\'scale(.98)\'" onpointerup="this.style.transform=\'\'">' +
          '<div style="display:flex;align-items:center;gap:10px;">' +
          '<div style="width:40px;height:40px;background:' + bg + ';border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">❌</div>' +
          '<div style="flex:1;">' +
          '<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">' +
          '<div style="font-size:13px;font-weight:700;color:#1A1A1A;">' + c + '</div>' +
          '<span style="background:' + bg + ';color:' + fc + ';font-size:9px;font-weight:700;padding:2px 7px;border-radius:6px;">' + (i+1) + '순위</span></div>' +
          '<div style="font-size:11px;color:#8B919C;">✗ ' + wn + ' 퀴즈 오답</div></div>' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CBD0D8" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>' +
          '</div></div>';
      }).join('');
    }
  }
}



/* ── 개념별 학습 데이터 ── */
function getConceptData(concept) {
  var m = {
    '건강정보보호 개념': {reason:'개인정보의 정의와 범위를 혼동하기 쉬워요.',correct:'개인정보 = 살아있는 개인을 식별할 수 있는 모든 정보',step2:'이름·주민번호·진료기록 예시',step3:'단독 또는 결합해 식별 가능한 정보 포함'},
    '정보보호의 3요소(CIA)': {reason:'CIA 3요소를 혼동하기 쉬워요.',correct:'CIA = 기밀성(Confidentiality) · 무결성(Integrity) · 가용성(Availability)',step2:'건강정보 보안사고 예시',step3:'기밀성: 허가된 자만 접근 / 무결성: 변조 방지 / 가용성: 필요 시 사용 가능'},
    '건강정보의 특수성': {reason:'물리적·논리적 독립성 개념을 혼동하기 쉬워요.',correct:'물리적: 저장 방식 변경 가능 / 논리적: 스키마 변경 가능',step2:'엑셀 시트 → 테이블 비유',step3:'행=레코드, 열=속성, 테이블=릴레이션'},
    '정보보호관련법률': {reason:'릴레이션과 일반 테이블의 차이를 혼동하기 쉬워요.',correct:'릴레이션 = 2차원 테이블 (행=튜플, 열=속성)',step2:'학생 릴레이션 예시',step3:'릴레이션: 순서 없음·중복 행 없음·원자값'},
    '개인정보보호 관련법 체계': {reason:'PK와 FK의 역할을 혼동하기 쉬워요.',correct:'PK: 행 고유 식별(NULL 불가) / FK: 다른 테이블 PK 참조',step2:'학생-수강 테이블 관계 예시',step3:'PK: 유일·NOT NULL / FK: NULL 가능·참조 무결성'},
    '개인정보보호법 주요 내용': {reason:'수집·처리·파기 원칙을 혼동하기 쉬워요.',correct:'수집: 목적·항목·보유기간 고지 / 처리: 목적 외 이용 금지 / 파기: 복원 불가 방법',step2:'병원 개인정보 처리 절차 예시',step3:'수집→저장→제공→파기 4단계 순서'},
    '건강정보보호 법률': {reason:'개인정보보호법과 의료법을 혼동하기 쉬워요.',correct:'개인정보보호법: 일반법(전 기관 적용) / 의료법: 특별법(의료기관 적용)',step2:'진료기록 보관 의무 법적 근거 찾기',step3:'개보법 + 의료법 + HIPAA 3가지 법률 비교'},
    '진료정보 보호 규정': {reason:'진료기록 보관 기간을 혼동하기 쉬워요.',correct:'진료기록부 10년 / 처방전 2년 / 간호기록부 5년',step2:'의료법 보관기간 별 기록 분류',step3:'진료기록 → 보관 → 파기 절차 순서'},
    'HIPAA 개요': {reason:'1:N과 M:N 관계를 혼동하기 쉬워요.',correct:'1:1 / 1:N / M:N - 관계 비율 (M:N은 중간 테이블 필요)',step2:'교수-학생-강의 관계 예시',step3:'M:N → 중간 테이블로 분리 (예: 수강 테이블)'},
    '접수단계 보안': {reason:'SELECT 작성 순서와 실행 순서를 혼동하기 쉬워요.',correct:'작성: SELECT→FROM→WHERE / 실행: FROM→WHERE→SELECT',step2:'SELECT name FROM 학생 WHERE 학년=3 흐름',step3:'FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY'},
    '진료·검사단계 보안': {reason:'COUNT(*)와 COUNT(컬럼) 차이를 헷갈리기 쉬워요.',correct:'COUNT(*): NULL 포함 전체 행 / COUNT(컬럼): NULL 제외',step2:'학과별 학생 수 세기 예시',step3:'COUNT/SUM/AVG/MAX/MIN - NULL 포함 여부 주의'},
    '처방·보관단계 보안': {reason:'WHERE과 HAVING의 차이를 혼동하기 쉬워요.',correct:'WHERE: 집계 전 행 필터 / HAVING: 집계 후 결과 필터',step2:'학과별 평균 성적 > 80 조건 예시',step3:'GROUP BY → 집계 → HAVING 순서'},
    '수집·이용 단계 보호': {reason:'수집 단계에서 동의 절차를 혼동하기 쉬워요.',correct:'수집 시 목적·항목·보유기간 고지 + 명시적 동의 필수',step2:'회원가입 시 개인정보 수집 동의 절차 예시',step3:'최소 수집 원칙: 목적에 꼭 필요한 정보만 수집'},
    '저장·보관 단계 보호': {reason:'암호화 적용 범위를 혼동하기 쉬워요.',correct:'저장 암호화(AES) + 전송 암호화(TLS/SSL) 모두 적용',step2:'EMR 데이터 저장 시 암호화 적용 예시',step3:'저장암호화 + 접근권한 + 정기백업 3가지 보호 조치'},
    '제공·파기 단계 보호': {reason:'파기 방법의 적절성을 혼동하기 쉬워요.',correct:'전자파일: 덮어쓰기·초기화 / 종이: 분쇄·소각 → 복원 불가 방법만 허용',step2:'진료기록 파기 시 올바른 방법 선택',step3:'파기 전 확인사항: 보유기간 만료 + 목적 달성 여부'},
  };
  return m[concept] || {reason:'이 개념을 다시 확인해봐요.',correct:concept+' 개념을 정확히 이해해요.',step2:'실제 예시로 이해하기',step3:concept+' 핵심 정리'};
}

/* ── 틀린 개념 선택 → 5단계 학습 시작 ── */
var selectedConcept = '';

function selectWrongConcept(concept) {
  selectedConcept = concept;
  resetRoadmap();
  var d = getConceptData(concept);
  var t1 = document.getElementById('rm-concept-title1');
  if (t1) t1.textContent = concept + ' — 왜 틀렸을까요?';
  var n1 = document.getElementById('rm-concept-name1');
  if (n1) n1.textContent = concept;
  var wr = document.getElementById('rm-wrong-reason');
  if (wr) wr.textContent = d.reason;
  var cr = document.getElementById('rm-correct-reason');
  if (cr) cr.textContent = '✅ 정답: ' + d.correct;
  var t2 = document.getElementById('rm-step2-title');
  if (t2) t2.textContent = d.step2;
  var t3 = document.getElementById('rm-step3-title');
  if (t3) t3.textContent = concept + ' 핵심 정리';
  showToast('준비 중인 기능이에요');
}

function markAllRead() {
  var unreadItems = [
    { id: 'noti-1', icoStroke: '#8B919C' },
    { id: 'noti-2', icoStroke: '#8B919C' }
  ];

  unreadItems.forEach(function(item) {
    var card = document.getElementById(item.id);
    var ico  = document.getElementById(item.id + '-ico');
    if (!card) return;

    // 카드: 파란 배경 → 흰 배경 + 어제 알림과 동일한 shadow
    card.style.background = '#fff';
    card.style.boxShadow  = '0 1px 6px rgba(0,0,0,.04)';

    // 아이콘 배경 → 회색, stroke → 회색
    if (ico) {
      ico.style.background = '#F2F4F7';
      var svg = ico.querySelector('svg');
      if (svg) svg.setAttribute('stroke', '#8B919C');
    }
  });

  // 버튼 비활성화 표시
  var btn = document.querySelector('#page-notifications .topbar-action');
  if (btn) { btn.style.color = '#CBD0D8'; btn.style.pointerEvents = 'none'; }
}
