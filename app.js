const section = document.querySelector('section')
const progressBar = document.querySelector('#progress-bar')

const animateProgressBar = () => {
      let scrollBar = - section.getBoundingClientRect().top
      let progressWidth = 
      (scrollBar /
            (section.getBoundingClientRect().height - 
                document.documentElement.clientHeight)) * 
           100;
      
           let value = Math.floor(progressWidth)
           progressBar.style.width = `${value}%`

           if (value <0){
               return (progressBar.style.width = '0%')
           }
};

window.addEventListener('scroll', animateProgressBar)

