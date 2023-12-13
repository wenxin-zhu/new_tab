var con = `

# links

### 课程

[智慧树](https://onlineweb.zhihuishu.com/onlinestuh5) |
[慕课](https://www.icourse163.org/home.htm?userId=1482708527#/home/spocCourse) |
[虚仿平台](http://172.28.45.56/login) |
[头歌](https://www.educoder.net/classrooms/fobm9l4f/shixun_homework) |
[天大OJ](http://tjuacm.chaosheng.top/) |
[我的文档](http://zxmh.gitee.io/note) |
[我的博客](http://zxmh.gitee.io/blog)

### 编程

[CSDN](https://www.csdn.net/) |
[Github](https://github.com/) |
[Gitee](https://gitee.com/) |
[Google](https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp) |
[菜鸟教程](https://www.runoob.com/) |
[stackoverflow](https://stackoverflow.com/) |
[huggingface](https://huggingface.co/) |
[cs自学指南](https://csdiy.wiki/)  | 
[docker hub](https://hub.docker.com/) 

### 学校

[天大选课网](http://classes.tju.edu.cn/) |
[智算学部](http://cic.tju.edu.cn/) |
[智算学部通知公告](http://cic.tju.edu.cn/xwzx/tzgg.htm) |
[天大办公网](http://ee.tju.edu.cn/) |
[天大教务处](http://oaa.tju.edu.cn/) |
[学生党建](https://party.twt.edu.cn/) |
[智慧团建](https://zhtj.youth.cn/zhtj/signin) |
[综测系统](https://sso.tju.edu.cn/cas/login)

[天外天](https://www.twt.edu.cn/home/) |
[天大图书馆](http://www.lib.tju.edu.cn/) |
[北洋维基](https://wiki.tjubot.cn/) |
[天大邮箱](https://mail.tju.edu.cn/) |
[天外天理论答题](https://theory.twt.edu.cn/#/student/test) |
[四六级考试网](https://cet-bm.neea.edu.cn/)

### 常用

[哔哩哔哩](https://www.bilibili.com/) |
[QQ邮箱](https://mail.qq.com/) |
[知乎](https://www.zhihu.com/) 

### 工具

[百度翻译](https://fanyi.baidu.com/?aldtype=16047#auto/zh)  |
[课程共享](https://github.com/superpung/TJU-CourseSharing) |
[TexPage](https://www.texpage.com/console) |
[autopiano](https://www.autopiano.cn/) | 
[processon](https://www.processon.com/) |
[westData](https://fuqing.cz/index.php) | 
[腾讯云](https://console.cloud.tencent.com/lighthouse/instance) |
[朝暮计划](https://www.zomoplan.com/web/view) |
[overleaf](https://www.overleaf.com/project)


`
con = marked.parse(con);
$m.innerHTML = con; 