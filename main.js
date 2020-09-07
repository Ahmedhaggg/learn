class Loader {

        
        // element of our operation
        static loader = document.querySelector(".loader") //loader
        static loaderText = document.querySelector(".wise"); //wise
        static icon = document.querySelector(".loader-icon"); // icon in loader
        
        // remove loader after 4s
        static removeLoader() {
            setTimeout(() => {
                this.loader.classList.add("remove");
            }, 4000)
        }

        // write wise in loader
        static load(text, counter) {
            text = "علم باحسان اترك اثر" ;
            counter = 0;
            let int =  setInterval( () => {
                if (counter < text.length) this.loaderText.innerHTML += text[counter++]; else clearInterval(int)        
            },100)          
        }

        // remove the wise and add loader icon after 2 second || after remove the wise
        static addLoaderIcon() {
            setTimeout(() => {
                this.loaderText.classList.add('remove');
                this.icon.classList.add("active")
            }, 2000)
        }

}

//  return our class functions 
Loader.removeLoader();
Loader.load();
Loader.addLoaderIcon();

// play video
class Video {
    
    static playvideo() {
        let video = document.querySelector("video");
        let playerVideo = document.querySelector(".play-video");
        playerVideo.addEventListener("click", () => {
            // remove  screen of play video
            playerVideo.parentElement.classList.add("disapled");
            // play video after half second
            setTimeout(() => {
                video.play()
            }, 500)
        })
    }
    
}

// turn play 
Video.playvideo()

// drop down
class VideosDropDown {

    static showproids(lesson) {
        lesson = document.querySelectorAll(".lesson-btn")
        //show drop down when press in lesson button
        lesson.forEach( el => {
            el.addEventListener("click", (x) => {
                x.target.nextElementSibling.classList.toggle("active")
            })
        })
    }

}

// return show proids
VideosDropDown.showproids();