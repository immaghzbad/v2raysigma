const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    text1.innerHTML =
        "تغییرات اخیر شامل:<br/>بهبودهای چشمگیر در ظاهر و عملکرد<br/>رفع باگ ها و خطاهای گزارش شده";
    text2.innerHTML =
        "در صورت نیاز به اطلاعات بیشتر یا پشتیبانی با ما در ارتباط باشید.<br/>منتظر بازخوردهای شما هستیم!";

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"));
}
