// สมมติว่าคุณมีข้อมูลผู้ใช้และเครดิตในอาร์เรย์นี้
let users = [
    { phone: '0834458790', credits: 100 },
    { phone: '0856259184', credits: 200 },
];

const loginForm = document.getElementById('login-form');
const creditInfo = document.getElementById('credit-info');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const phone = document.getElementById('phone').value; // เพิ่มการรับค่าเบอร์โทรศัพท์

    // ตรวจสอบว่าเบอร์โทรศัพท์มี 10 หลัก
    if (phone.length === 10) {
        const user = users.find(u => u.phone === phone); // ใช้เบอร์โทรศัพท์เป็นเงื่อนไขในการค้นหา

        if (user) {
            creditInfo.textContent = `ยินดีต้อนรับ! คุณมีเครดิต ${user.credits} บาท`;
        } else {
            // ถ้าไม่พบผู้ใช้ ให้ลงทะเบียนใหม่
            users.push({ phone, credits: 0 }); // เพิ่มผู้ใช้ใหม่โดยกำหนดคะแนนเริ่มต้นเป็น 0
            creditInfo.textContent = `ลงทะเบียนสำเร็จ! คุณมีเครดิต 0 บาท`;
        }
    } else {
        creditInfo.textContent = 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก';
    }
});
