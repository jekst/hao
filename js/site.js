(function () {
    'use strict';
    var sites = [
        {
            group: '新闻',
            site: [{
                name: '人民网',
                link: 'http://m.people.cn/',
            }, {
                name: '凤凰网',
                link: 'http://i.ifeng.com/',
            }, {
                name: '头条',
                link: 'https://m.toutiao.com/',
            }, {
                name: '腾讯',
                link: 'http://xw.qq.com/',
            }]
        }, {
            group: '社区',
            site: [{
                name: '知乎',
                link: 'https://www.zhihu.com/',
            }, {
                name: '微博',
                link: 'https://m.weibo.cn/',
            }, {
                name: 'Quora',
                link: 'https://www.quora.com/',
            }, {
                name: 'Github',
                link: 'https://github.com/',
            }]
        }, {
            group: '旅游',
            site: [{
                name: '携程',
                link: 'http://m.ctrip.com/',
            }, {
                name: '去哪儿',
                link: 'http://touch.qunar.com/',
            }, {
                name: '同程',
                link: 'http://www.people.com.cn/',
            }, {
                name: '12306',
                link: 'https://kyfw.12306.cn/otn/',
            }]
        }, {
            group: '汽车',
            site: [{
                name: '易车网',
                link: 'http://www.bitauto.com',
            }, {
                name: '汽车之家',
                link: 'http://m.autohome.com.cn/',
            }]
        }, {
            group: '房产',
            site: [{
                name: '搜房',
                link: 'http://m.fang.com/',
            }]
        }, {
            group: '其他',
            site: [{
                name: '拉钩',
                link: 'https://m.lagou.com/',
            }]
        }
    ];
    var html = '';
    for (var i = 0, len = sites.length; i < len; i++) {
        html += '<div class="group">';
        html += '<ul class="list"><li><strong>'+sites[i].group+'</strong></li>';
        for (var j = 0; j < sites[i].site.length; j++) {
            html += '<li><a href="' + sites[i].site[j].link + '">' + sites[i].site[j].name + '</a></li>';
        }
        html += '</ul></div>';
    }
    window.onload = function () {
        document.querySelector('.container').innerHTML = html;
    };
})();