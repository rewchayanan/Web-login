// ฟังก์ชันขยายขนาดเมนู
function bigImg(x) {
    x.style.transform = "scale(1.2)";
  }
  
  function normalImg(x) {
    x.style.transform = "scale(1)";
  }
  
  // การแสดง tab-content เมื่อคลิกเมนู
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
  
      // ซ่อน tab-content ทั้งหมด
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
  
      // แสดง tab-content ที่เกี่ยวข้อง
      const targetTab = document.querySelector(item.getAttribute('href'));
      if (targetTab) targetTab.classList.add('active');
    });
  });
  