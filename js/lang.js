// let currentLanguage = 'en'; // Default language is English

// function switchLanguage() {
//     console.log("Before switching language, currentLanguage: ", currentLanguage);

//     if (currentLanguage === 'en') {
//         // Show Thai content and hide English content
//         document.getElementById('en-content').style.display = 'none';
//         document.getElementById('th-content').style.display = 'block';

//         currentLanguage = 'th'; // Change the language to Thai
//     } else {
//         // Show English content and hide Thai content
//         document.getElementById('en-content').style.display = 'block';
//         document.getElementById('th-content').style.display = 'none';

//         currentLanguage = 'en'; // Change the language to English
//     }
//     console.log("After switching language, currentLanguage: ", currentLanguage);

//     // โค้ดสลับภาษาเปลี่ยนไอคอนธง
//     let languageIcon = document.querySelector("#language-toggle .language-icon");
//     if (languageIcon.src.includes("images/favicon/world.png")) {
//         languageIcon.src = "images/favicon/united-states.png";
//     } else {
//         languageIcon.src = "images/favicon/world.png";
//     }
// }

let currentLanguage = 'en'; // กำหนดให้ภาษาเริ่มต้นเป็นภาษาอังกฤษ

function switchLanguage() {
    console.log("Before switching language, currentLanguage: ", currentLanguage);

    if (currentLanguage === 'en') {
        // ซ่อนเนื้อหาภาษาอังกฤษและแสดงเนื้อหาภาษาไทย สำหรับทั้งหมดในหน้า
        let englishContent = document.querySelectorAll('.lang-en');
        let thaiContent = document.querySelectorAll('.lang-th');

        englishContent.forEach(function (item) {
            item.style.display = 'none';
        });
        thaiContent.forEach(function (item) {
            item.style.display = 'block';
        });

        currentLanguage = 'th'; // เปลี่ยนภาษาเป็นภาษาไทย
    } else {
        // ซ่อนเนื้อหาภาษาไทยและแสดงเนื้อหาภาษาอังกฤษ สำหรับทั้งหมดในหน้า
        let englishContent = document.querySelectorAll('.lang-en');
        let thaiContent = document.querySelectorAll('.lang-th');

        englishContent.forEach(function (item) {
            item.style.display = 'block';
        });
        thaiContent.forEach(function (item) {
            item.style.display = 'none';
        });

        currentLanguage = 'en'; // เปลี่ยนภาษาเป็นภาษาอังกฤษ
    }
    console.log("After switching language, currentLanguage: ", currentLanguage);

    // สลับไอคอนธง
    let languageIcon = document.querySelector("#language-toggle .language-icon");
    if (languageIcon.src.includes("images/favicon/world.png")) {
        languageIcon.src = "images/favicon/united-states.png";
    } else {
        languageIcon.src = "images/favicon/world.png";
    }
}




