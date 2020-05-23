$(document).ready(function(){
    console.log(window.scrollY);
      $(document).scroll(function(){
          
        if(window.scrollY >= 3000)
        {
            $('.skillbar').each(function(){
                jQuery(this).find('.skillbar-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },2000);
            });
        }
      })
})

