document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        var mdtext = document.getElementsByClassName('md-text');
        for (var i = 0; i < mdtext.length; i++) {
            var element = mdtext[i];
            if (element.innerText === "Unity Developer 検定試験 (2017年8月)") {
                element.innerHTML = "<div data-iframe-width='150' data-iframe-height='270' data-share-badge-id='7cc1d6d6-a6d7-4f97-a349-8df0b820daec'></div>";
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
                var o = document.getElementsByTagName('script')[0];
                o.parentNode.insertBefore(s, o);
            }
        }
    }, 2000);
});
