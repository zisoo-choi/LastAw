var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


        $(".HeaderLogo").click(function(){document.location.href='http://127.0.0.1:5501/static/html/Home.html'})
        $(".MusicTalkBtn").click(function(){document.location.href='http://127.0.0.1:5501/static/html/MusicTalk.html'})
        $(".PlayListBtn").click(function(){document.location.href='http://127.0.0.1:5501/static/html/PlayList.html'})
        $(".MyPageBtn").click(function(){document.location.href='http://127.0.0.1:5501/static/html/MyPage.html'})
        $(".LoginBtn").click(function(){document.location.href='http://127.0.0.1:5501/static/html/Login.html'})
        $(".SignUpBtn").click(function(){document.location.href='http://127.0.0.1:5501/static/html/SignUp.html'})
