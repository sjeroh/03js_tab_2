function openCity(event,cityName){
  let tabcontent=document.getElementsByClassName('tabcontent');
  // console.log(tabcontent)
  for(let i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display='none';
  }

  let tablinks=document.getElementsByClassName('tablinks');
  for(let i=0;i<tablinks.length; i ++){
    tablinks[i].classList.remove('acitve');
  }
  console.log(event.currentTarget);
  event.currentTarget.classList.add('active');
  document.getElementById(cityName).style.display='block';
}

document.getElementById('defaultOpen').click();

let topright=document.getElementsByClassName('topright');
console.log(topright)
for(let i=0; i<topright.length; i++){
  topright[i].addEventListener('click',function(){
    this.parentElement.style.display="none"
  })}

//classList 메서드
//.classList.add('active') --> active 클래스 추가
//.classList.remove('active') --> active 클래스 제거
//.classList.toggle('active') --> active 클래스 존재하면 active 클래스 제거 active 클래스가 존재하지 않으면 추가

//.classList.contains("active") --> active 클래스가 존재하는가? true/false로 반환
//.classList.replace("A","B") --> A 클래스를 B 클래스로 변경