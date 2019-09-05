/******************************************************
*                                                     *
*   Popup System Messages - Atom for Gantry           *
*                                                     *
*   Purpose: This project is a modified version of    *
*            the Popup System Messages Atom written   *
*            by Mark Taylor. It contains various      *
*            fixes and alters the behaviour of the    *
*            System Messages Particle so that         *
*            messages are displayed in a popup        *
*            instead of showing them in the default   *
*            container.                               *
*                                                     *
*   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   *
*   Repository: https://git.io/fjrNR                  *
*   Homepage: https://gantryprojects.com              *
*                                                     *
*   -------------                                     *
*   Original Atom:                                    *
*   -------------                                     *
*   Author: Mark Taylor a.k.a MrT @ RocketTheme       *
*   Homepage: https://rockettheme.com/                *
*                                                     *
******************************************************/

(function($){
     $(window).load(function() {
        var psm = new PopupSystemMessages($);
    });
})(jQuery);


function PopupSystemMessages($){
    
    // key for exit
    var escapeKey = '27';
    
    // define selector
    var sysMessSel = '#system-message > div';
    var sysMessCntSel = '#system-message-container';
    var gSysMessCntSel = '.g-system-messages';
    var closeSel = '.close';
    var alertSel = '.alert';
    
    // define classes
    var modalLoadedCls = 'popup-loaded';
    var modalOpenCls = 'popup-opened';
    
    // initialize
    this.initialize = function(){
        this.addOpenModal();
        this.addCloseModal();
        this.addEscapeKeyListener();  
        this.autoOpen();
    };
    
    
    // add open modal
    this.addOpenModal = function(){
        var that = this;
        
        // open if messages are added to system message container
        $(sysMessCntSel).bind('DOMNodeInserted', function(){ that.openModal(); }); 
        
    };
    
    // add close modal
    this.addCloseModal = function(){
        var that = this;
        
        // close if messages were cleared from system messages container
        $(sysMessCntSel).bind('DOMNodeRemoved', function(){ that.closeModal(); });
        
    }
    
    // listen for escape key presses
    this.addEscapeKeyListener = function(){
        $(document).on('keyup', this.getKeyUpHandling());
        
    };
    
    // open system message modal
    this.openModal = function(){
        var $message = $(sysMessCntSel).closest(gSysMessCntSel);
        
        $message.addClass(modalLoadedCls);
        $message.addClass(modalOpenCls);
        $message.find(closeSel).focus();
        $('body').addClass(modalLoadedCls);
    };
    
    // close system modal
    this.closeModal = function(){
        var $message = $(sysMessCntSel).closest(gSysMessCntSel);
     
        //only remove CSS classes if popup message was the last one existing
        if($(sysMessSel).length == 1){
            $message.removeClass(modalLoadedCls);
            $('body').removeClass(modalLoadedCls);
        }
    };
    
    // get key up handling
    this.getKeyUpHandling = function(){
        return function(event) {
            
            // send a click to the modal close button, but only when it exists
            if(event.keyCode == escapeKey && $(gSysMessCntSel + '.' + modalLoadedCls).length > 0){
                $(sysMessCntSel).find(alertSel + " " + closeSel).click();
            }
        }; 
    };
    
    // if there are already messages visible on load, create modal instantly
    this.autoOpen = function(){
        var $message = $(sysMessCntSel).closest(gSysMessCntSel);
        
        if($message.find(alertSel).length > 0)
            this.openModal();  
    };
    
    // initialize module events
    this.initialize();
}