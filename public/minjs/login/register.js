function hrefToLogin(){location.href="login.html"}function hrefToMiddleman(){location.href="middleman.html"}function hrefToOperator(){location.href="operator.html"}function hrefToAgent(){location.href="agent.html"}function myRotate(){var t=document.getElementById("select_icon"),e=document.getElementById("options");"rotate(0deg)"==t.style.transform||""==t.style.transform?(t.style.transform="rotate(180deg)",e.style.height="165px"):(t.style.transform="rotate(0deg)",e.style.height="0"),t.style.transitionDuration="500ms",e.style.transitionDuration="500ms"}function submitHandler(t){var e=setTimeout(function(){submitHandler(t)},1e3);0==countdown?(t.removeAttribute("disabled"),t.innerHTML="获取验证码",countdown=60,clearTimeout(e)):(t.setAttribute("disabled",!0),t.innerHTML="重新发送("+countdown+")",countdown--)}var countdown=60;