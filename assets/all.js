function setAll() {
    setNav();
    setFooter();
}

// 设置导航栏
function setNav() {
    document.getElementById("nav").innerHTML = 
    "\
    <div class=header id=nav>\
        <nav class=hd-left>\
            <img src=assets/logo.ico>\
        </nav>\
    </div>\
    ";
}
{/* <nav class=hd-right>\
            <ul>\
                <li><a href=/note/>Home</a></li>\
                <li><a href=https://blog.csdn.net>CSDN</a></li>\
                <li><a href=/log>Log</a></li>\
                <li><a href=https://www.zxmh.gitee.io/blog>About</a></li>\
            </ul>\
        </nav>\ */}
// <li><a href=https://github.com/zxmhzwx>Github</a></li>\
// <li><a href=https://blog.csdn.net/qq_62765766?type=blog>CSDN</a></li>\

// 设置页脚
function setFooter() {
    document.getElementById("footer").innerHTML = 
    "\
    <div class=footer id=footer>\
        <p>© 2023 zxmh</p>\
    </div>\
    ";
}
