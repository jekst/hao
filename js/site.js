(function () {
    'use strict';
    var sites = [
        {
            group: '推荐',
            site: [{
                name: '人民网',
                link: 'http://m.people.cn/',
            }, {
                name: '新华网',
                link: 'http://m.xinhuanet.com/',
            }, {
                name: '央视网',
                link: 'http://m.cctv.com/index.shtml',
            }, {
                name: '凤凰网',
                link: 'http://i.ifeng.com/',
            },  {
                name: '央广网',
                link: 'http://m.cnr.cn/',
            },  {
                name: '求是网',
                link: 'http://www.qstheory.cn/',
            }]
        }, {
            group: '新闻',
            site: [ {
                name: '头条',
                link: 'https://m.toutiao.com/',
            }, {
                name: '腾讯',
                link: 'http://xw.qq.com/',
            },{
                name: '新浪',
                link: 'https://sina.cn/',
            }, {
                name: '网易',
                link: 'http://3g.163.com/',
            }, {
                name: '搜狐',
                link: 'https://m.sohu.com/',
            }, {
                name: '环球网',
                link: 'http://m.huanqiu.com/',
            }, {
                name: '参考消息',
                link: 'http://m.cankaoxiaoxi.com/',
            }]
        }, {
            group: '军事',
            site: [ {
                name: '中华军事',
                link: 'http://3g.china.com/',
            }, {
                name: '凤凰军事',
                link: 'http://imil.ifeng.com/',
            },{
                name: '铁血军事',
                link: 'https://m.tiexue.net/',
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
            }, {
                name: '糗百',
                link: 'http://www.qiushibaike.com/',
            }]
        }, {
            group: '影视',
            site: [{
                name: '腾讯视频',
                link: 'http://m.v.qq.com/',
            }, {
                name: '搜狐视频',
                link: 'http://m.tv.sohu.com/',
            }, {
                name: '爱奇艺',
                link: 'http://m.iqiyi.com/',
            }, {
                name: '优酷',
                link: 'http://www.youku.com/',
            }, {
                name: '土豆',
                link: 'http://www.tudou.com/',
            }, {
                name: '芒果TV',
                link: 'http://m.mgtv.com/',
            }]
        },  {
            group: '购物',
            site: [{
                name: '京东',
                link: 'https://m.jd.com/',
            }, {
                name: '天猫',
                link: 'https://www.tmall.com/',
            }, {
                name: '苏宁',
                link: 'https://m.suning.com/',
            }, {
                name: '国美',
                link: 'http://m.gome.com.cn/',
            }, {
                name: '唯品会',
                link: 'http://m.vip.com/',
            }, {
                name: '亚马逊',
                link: 'https://www.amazon.cn/',
            }, {
                name: '网易严选',
                link: 'http://m.you.163.com/',
            }, {
                name: '考拉海购',
                link: 'http://m.kaola.com/',
            }]
        }, {
            group: '汽车',
            site: [{
                name: '易车网',
                link: 'http://www.bitauto.com',
            }, {
                name: '汽车之家',
                link: 'http://m.autohome.com.cn/',
            }, {
                name: '腾讯汽车',
                link: 'http://w.auto.qq.com/',
            }, {
                name: '新浪汽车',
                link: 'http://auto.sina.cn/',
            }]
        }, {
            group: '旅游',
            site: [ {
                name: '12306',
                link: 'https://kyfw.12306.cn/otn/',
            }, {
                name: '携程',
                link: 'http://m.ctrip.com/',
            }, {
                name: '去哪儿',
                link: 'http://touch.qunar.com/',
            }, {
                name: '同程',
                link: 'http://m.ly.com/',
            }]
        }, {
            group: '生活',
            site: [{
                name: '百度地图',
                link: 'http://map.baidu.com/',
            },{
                name: '高德地图',
                link: 'http://m.amap.com/',
            },{
                name: '房天下',
                link: 'http://m.fang.com/',
            },{
                name: '链家网',
                link: 'https://m.lianjia.com/',
            },{
                name: '拉钩网',
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