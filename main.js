const output = document.querySelector("h1");

const countDown = () => {
    const yourDate = new Date("2023-05-18");

    const countDownDate = new Date(yourDate).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const dd = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mm  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const ss = Math.floor((distance % (1000 * 60)) / 1000);

    output.innerText = `${dd}d ${hh}h ${mm}m ${ss}s`;
};

setInterval(countDown, 1000);

function moveItems(){
    const boxInitial = document.getElementById('box-initial').style;
    const boxInfo = document.getElementById('box-info').style;
    boxInitial.transition = '600ms';
    boxInitial.marginBottom = '100em';
    boxInfo.transition = '600ms';
    boxInfo.marginBottom = '200em';
}