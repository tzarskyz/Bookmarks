/*
****************************************************
COPYRIGHT � 2011 Raging Flame
AUTHOR: Qawelesizwe Mlilo
Email: qawemlilo@gmail.com
****************************************************
*/

(function (url) {
    function saveBookmark (urlQuery) {
        var requestObj = false;

        if (window.XMLHttpRequest) {
            requestObj = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            requestObj = new ActiveXObject(navigator.userAgent.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP");
        }
        
        if (requestObj) {
            requestObj.open("GET", urlQuery);
            requestObj.onreadystatechange = function(){};
            requestObj.send(null);
        }
    }

    function echoMessage (message) {
        var msgBox = document.createElement('div'), msgBoxStyle = msgBox.style; 
        
        msgBoxStyle.position = 'absolute';
        msgBoxStyle.height = '20px';
        msgBoxStyle.top = '50%';
        msgBoxStyle.left = '50%';
        msgBoxStyle.margin = '-30px 0px 0px -195px';
        msgBoxStyle.backgroundColor = '#f7f7f7';
        msgBoxStyle.border = '1px solid #ccc';
        msgBoxStyle.color = '#777';
        msgBoxStyle.padding = '20px';
        msgBoxStyle.fontSize = '16px';
        msgBoxStyle.fontFamily = '"Myriad Pro",Arial,Helvetica,sans-serif';
        msgBoxStyle.textAlign = 'center';
        msgBoxStyle.zIndex = 100000;
        msgBoxStyle.textShadow = '1px 1px 0 white';
        msgBoxStyle.borderRadius = "12px";
        msgBoxStyle.boxShadow = '0 0 6px #ccc';
        
        msgBox.setAttribute('onclick','document.body.removeChild(this)');
        msgBox.appendChild(document.createTextNode(message));
        document.body.appendChild(msgBox);
        
        setTimeout(function () {
            try {
			    document.body.removeChild(msgBox);
            } catch (error) {}
	    }, 3000);
    }
    
    saveBookmark(url + '&entry.0.single='+encodeURIComponent(location.href) + '&entry.1.single=' + encodeURIComponent(document.title));
    echoMessage("Bookmark Saved");
    
}(googleFormActionUrl_367342iurw34));