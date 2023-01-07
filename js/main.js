
/* Skills part*/
let skills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".skills .progress span");
/**Stat part */
let stat = document.querySelector(".stats");
let nbres = document.querySelectorAll(".stats .stat .nbre");
let start = false;
/** up button */
let up = document.querySelector(".up");
window.onscroll = () => {
    /* Skills */
    if (this.scrollY >= skills.offsetTop - 60) {
        spans.forEach((span) => {
            span.style.width = span.getAttribute("data-width");
        });
    }
    /*Stat*/
    if (this.scrollY >= stat.offsetTop - 60) {
        if (!start) {
            nbres.forEach((nbre) => {
                let i = 0;
                let stop = nbre.dataset.range;
                nbre.innerHTML = 0;
                let timer = setInterval(function () {
                    ++i;

                    nbre.innerHTML = `${i}`;
                    if (i == stop) {
                        clearInterval(timer);
                    }


                }, 2000 / stop);
            });
            start = true;
        }

    }
    /** up  */
    if (this.scrollY > 1000) {
        up.style.display = "block";
    }
    else {
        up.style.display = "none"
    }
    up.onclick = () => {
        window.scrollTo({
            top: 0,
        });
    };


};

/** event  */

let dateEvent = new Date("Dec 31, 2023 23:59:59").getTime();
let count = setInterval(() => {
    let datenow = new Date().getTime();
    let diff = dateEvent - datenow;

    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".events .time .parttime .days ").innerHTML = days < 10 ? `0${days}` : `${days}`;
    document.querySelector(".events .time .parttime .hours ").innerHTML = hours < 10 ? `0${hours}` : `${hours}`;
    document.querySelector(".events .time .parttime .minutes ").innerHTML = minutes < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector(".events .time .parttime .seconds ").innerHTML = seconds < 10 ? `0${seconds}` : `${seconds}`;
    if (diff <= 0) {
        clearInterval(count);

    }

}, 1000);

/* Top Videos */
let topVideos = document.querySelectorAll(".top-videos .list-videos ul li");
let previewVideo = document.querySelector(".top-videos .watch .video-preview video");
let nameVideo = document.querySelector(".top-videos .watch .name-video");
// previewVideo.ondurationchange = function () {
//     nameVideo.innerHTML = topVideos[0].innerHTML.split("<")[0] + "\t 00:" + Math.floor(previewVideo.duration);

// };
nameVideo.innerHTML = topVideos[0].innerHTML.split("<")[0];
topVideos.forEach((video) => {
    video.onclick = () => {
        removeclass();
        video.classList.add("active-video");
        previewVideo.setAttribute("src", "videos/" + video.dataset.vid);
        nameVideo.innerHTML = video.innerHTML.split("<")[0];
    }

});
function removeclass() {
    topVideos.forEach((one) => one.classList.remove("active-video"));
}



