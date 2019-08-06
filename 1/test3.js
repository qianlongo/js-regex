const utils = require('../utils')
// 惰性匹配
utils.console('good idea, nice try', /good|nice/g, 'match')
utils.console('goodbye', /goodbye|bye/, 'match')

// 1.5 案例分析
// 1 匹配16进制颜色值

/**
 * #ffbbad 
 * #Fc01DF
 * #FFF
 * #ffE
 */

 utils.console('#ffbbad#Fc01DF#FFF#ffE', /#\w{6}|#\w{3}/g, 'match')

 // 2 匹配时间
 /**
 * 23:59 
 * 02:07
 * 07:07
 */
utils.console('23:50', /^([01][0-9]|2[1-3]):[0-5][0-9]$/)
utils.console('7:7', /^(0?[0-9]|1[0-9]|2[0-3])|(0?[0-9]|[1-5][0-9])$/)

// 3 匹配日期
/**
 * 2017-06-10
 * 2017-10-10
 * 2017-12-31
 */
utils.console('2017-06-10', /^[\d]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)

// 4 匹配图片路径
/**
 * <img src="https://p1.meituan.net/scarlett/668beaf6331c274f69d7a27e24583feb293445.jpg@0_0_0_2500a.webp">
 */

utils.console(
  `<html style="font-size: 55.2px;"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <!-- 接入灵犀打点 -->
  <meta name="lx:category" content="fin_idea">
  <meta name="lx:appnm" content="group">
  <meta name="lx:appnm" content="dpnova">
  <!-- 多页面 app，灵犀会自动获取 单页面关闭-->
  <meta name="lx:autopv" content="off">
  <title>信用卡详情</title>

  <!-- dns 预解析 -->
  <link rel="dns-prefetch" href="//analytics.meituan.net">
  <link rel="dns-prefetch" href="//wreport.meituan.net">
  <link rel="dns-prefetch" href="//report.meituan.net">

  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  
<link rel="stylesheet" href="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:bfd8949e/static/css/venders~main.ad2242bc10438707714d.css">
<link rel="stylesheet" href="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:bfd8949e/static/css/main.ce49019ae8cece36b198.css">
  <!-- webview error -->
  <script async="" src="https://s0.meituan.net/bs/js/?f=mta-js:mta.min.js"></script><script type="text/javascript" crossorigin="anonymous">
    var jsCbNames = [ 'javascriptCallback', 'getWebkitEventCode', 'getWebkitEvent', 'Fw' ]
    var jsCbName = ''

    while (jsCbName = jsCbNames.shift()) {
      if (typeof window[jsCbName] !== 'function') {
        window[jsCbName] = function () { }
      }
    }
    // 天津银行处理cat报错
    Fw.device = {'Device': {}}
    // 动态插入vconsole
    if (location.search.indexOf('vconsole=show') !== -1) {
      (function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.onload=function(){new VConsole()};a.src="https://static.meituan.net/bs/fin-mall/file/vconsole.min.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()
    }
  </script>

  <!-- Owl 信息采集模块。 Cat的配置 在 thunder-plugin.js 中 -->
  <script crossorigin="anonymous">'use strict'; !(function () { var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '_Owl_', t = window; t[i] || (t[i] = { isRunning: !1, isReady: !1, preTasks: [], dataSet: [], use: function (i, n) { this.isReady && t.Owl && t.Owl[i](n), this.preTasks.push({ api: i, data: [n] }) }, add: function (i) { this.dataSet.push(i) }, run: function () { var i = this; if (!this.isRunning) { this.isRunning = !0; var n = t.onerror; t.onerror = function () { this.isReady || this.add({ type: 'jsError', data: arguments }), n && n.apply(t, arguments) }.bind(this), (t.addEventListener || t.attachEvent)('error', function (t) { i.isReady || i.add({ type: 'resError', data: [t] }) }, !0) } } }, t[i].run()) }())</script>

  <script crossorigin="anonymous">
      (function () {
        var env = 'prod'
        var hostname = location.hostname
        if (location.search.indexOf('env=mock') > -1) {
          env = 'mock'
        } else if (hostname.indexOf('fin.dev') > -1 || hostname === 'localhost') {
          env = 'dev'
        } else if (hostname.indexOf('fin.test') > -1) {
          env = 'test'
        } else if (hostname.indexOf('fin.st') > -1) {
          env = 'staging'
        }
        window.env = env        
      })();
      // 缓存metric指标，因为_Owl不支持预添加自定义指标
      window._METRIC_CACHE_ = [{
        name: 'pageStart',
        ts: Date.now()
      }];
  </script>
  <script src="https://s0.meituan.net/mxx/yoda/yoda.seed.js" async="" defer=""></script>
  <script src="https://s0.meituan.net/bs/knb/v1.6.6/knb.js"></script>
  <!-- Vix Rem 布局 -->
  <script crossorigin="anonymous">!(function (e, t) { function n() { var e = Math.min(d.getBoundingClientRect().width, 768); t.payuiWidth = e, d.style.fontSize = e / 7.5 + 'px' } function i() { var n = e.createElement('div'); n.style.border = '.5px solid transparent', e.body.appendChild(n), n.offsetHeight == 1 && e.body.classList.add('hairline'), e.body.removeChild(n), t.removeEventListener('DOMContentLoaded', i) } var d = e.documentElement; n(), t.addEventListener('resize', n), t.devicePixelRatio && devicePixelRatio > 1 && (e.readyState === 'complete' ? i() : t.addEventListener('DOMContentLoaded', i)) }(document, window))</script>

  <!--  lx -->
  <script type="text/javascript" crossorigin="anonymous">
    !(function (win, doc, ns) {
      var cacheFunName = '_MeiTuanALogObject'
      win[cacheFunName] = ns
      if (!win[ns]) {
        var _LX = function () {
          _LX.q.push(arguments)
          return _LX
        }
        _LX.q = _LX.q || []
        _LX.l = +new Date()
        win[ns] = _LX
      }
    })(window, document, 'LXAnalytics')
    // 关闭灵犀自动上报pv
    LXAnalytics('config', 'onWebviewAppearAutoPV', false);
  </script>
  <script>
    // Metrics 性能平台接入 js
    !(function (e, t, n) { function s() { var e = t.createElement('script'); e.async = !0, e.src = 'https://s0.meituan.net/bs/js/?f=mta-js:mta.min.js'; var n = t.getElementsByTagName('script')[0]; n.parentNode.insertBefore(e, n) } Object.prototype.toString.call(n) === '[object String]' && (n = [n]), e.MeituanAnalyticsObject = n; for (var r = 0; r < n.length; r++)!(function (t) { e[t] = e[t] || function () { (e[t].q = e[t].q || []).push(arguments) } }(n[r])); if (t.readyState === 'complete') s(); else { var i = 'addEventListener', a = 'attachEvent'; if (e[i]) e[i]('load', s, !1); else if (e[a]) e[a]('onload', s); else { var o = e.onload; e.onload = function () { s(), o && o() } } } }(window, document, 'mta')), (function (e, t, n) { if (t && !('_mta' in t)) { t._mta = !0; var s = e.location.protocol; if (s !== 'file:') { var r = e.location.host, i = t.prototype.open; t.prototype.open = function (t, n, a, o, l) { if (this._method = typeof t === 'string' ? t.toUpperCase() : null, n) { if (n.indexOf('http://') === 0 || n.indexOf('https://') === 0 || n.indexOf('//') === 0) this._url = n; else if (n.indexOf('/') === 0) this._url = s + '//' + r + n; else { var h = s + '//' + r + e.location.pathname; h = h.substring(0, h.lastIndexOf('/') + 1), this._url = h + n } var u = this._url.indexOf('?'); u !== -1 ? (this._searchLength = this._url.length - 1 - u, this._url = this._url.substring(0, u)) : this._searchLength = 0 } else this._url = null, this._searchLength = 0; return this._startTime = (new Date()).getTime(), i.apply(this, arguments) }; var a = 'onreadystatechange', o = 'addEventListener', l = t.prototype.send; t.prototype.send = function (t) { function n(n, r) { if (n._url.indexOf(s + '//frep.meituan.net/_.gif') !== 0) { for (var i = 'browser.ajax', a = [98, 114, 111, 119, 115, 101, 114, 46, 97, 106, 97, 120], o = 0, l = i.length; l > o; o++) if (i.charCodeAt(o) !== a[o]) return; var h; if (n.response) switch (n.responseType) { case 'json': h = JSON && JSON.stringify(n.response).length; break; case 'blob': case 'moz-blob': h = n.response.size; break; case 'arraybuffer': h = n.response.byteLength; case 'document': h = n.response.documentElement && n.response.documentElement.innerHTML && n.response.documentElement.innerHTML.length + 28; break; default: h = n.response.length }e.mta('send', i, { url: n._url, method: n._method, error: !(n.status.toString().indexOf('2') === 0 || n.status === 304), responseTime: (new Date()).getTime() - n._startTime, requestSize: n._searchLength + (t ? t.length : 0), responseSize: h || 0 }) } } if (o in this) { var r = function (e) { n(this, e) }; this[o]('load', r), this[o]('error', r), this[o]('abort', r) } else { var i = this[a]; this[a] = function (t) { i && i.apply(this, arguments), this.readyState === 4 && e.mta && e.mta && n(this, t) } } return l.apply(this, arguments) } } } }(window, window.XMLHttpRequest, 'mta'))
    var env = window.env
    var devToken = '5b64238be857f14dc4ca3cc0'
    var prodToken = '5b64258acfeeb213a9eb7fcd'
    mta('create', env === 'prod' ? prodToken : devToken)
    mta('config', 'sampleRate', 100)
    // 发送页面性能指标，包括 ttfb（首字节）、domReady（可交互）、load（完全加载）等
    mta('send', 'page')
  </script>
  
    <script>
      window.initData = {"getCardDetail":{"code":"0","data":{"cbcFlag":0,"directConnectFlag":0,"cardName":"青岛银行美团信用卡","cardPic":"https://img.meituan.net/ccpapply/8b47f8c450cc768ea8f25dc26a38a61d45828.png","cardDesc":"外卖天天减6元","cardType":"00","prPic":"https://img.meituan.net/ccpapply/80c2e258c52bbb1ddacaf2ff32dd9a80104226.png","detailBenifitPic":"https://p1.meituan.net/scarlett/668beaf6331c274f69d7a27e24583feb293445.jpg","detailBenifitHtml":"<h2>一、美食天天减6元</h2>\n\n <p><strong>权益介绍：</strong>2019年7月1日-2019年9月30日，首次申请青岛银行美团信用卡的新户，核卡日后60天内激活，可享受激活日后60天使用该卡片，通过美团支付，在美团平台（美团/大众点评/美团外卖app）支付外卖或美食订单，每日首笔，立减6元，天天订，天天减。</p>\n\n <p><strong>使用规则：</strong><br />1.活动时间为:7月1日-9月30日，限首次申请青岛银行美团信用卡用户参与；<br />2.该活动必须通过美团支付并使用青岛银行美团信用卡支付外卖或美食订单，订单最低需要支付0.01元；<br />3.美食天天减活动，同一用户，每日首单享受1次，当日未使用的次数不累计至次日（同一美团账号、手机号、移动设备、银行卡、支付账号、身份证以及其他信息相同均视为同一用户），权益有效期为卡片批核后60天内激活，激活日后60天有效；<br />4.发生退款时，按实际支付金额退款，当次立减权益次数视为已使用，不返还、不补发；<br />5.本活动规定的权益不开发票、不设找零、不可兑换现金；<br />6.活动过程中，如果出现因网络攻击、黑客攻击、数据泄露等原因导致活动无法继续，美团有权利提前终止活动；<br />7.活动过程中，用户不得使用任何外挂、插件以及其他破坏活动规则、违背活动公平原则的方式参加本次活动（如批量注册、恶意购买、虚假分享、倒买倒卖、虚假交易等），用户和商户不得进行有组织的众包作弊行为，否则美团有权取消用户、商户参与活动资格，取消已经领取或者使用的抵用券，必要时取消后续参与美团任意活动的权利，并追究法律责任。<br /></p>\n\n<h2>二、笔笔随机立减</h2>\n\n <p><strong>权益介绍：</strong>2019年7月1日至2019年9月30日，首次申请青岛银行美团信用卡的新户，使用“尝鲜特权”通过美团支付，在美团平台（美团/大众点评/美团外卖app）支付订单，笔笔随机立减，该权益卡片激活后自动失效。“尝鲜特权”使用的有效期为系统自动发放或用户主动领取起60日内，过期自动失效，不再补发。</p>\n\n <p><strong>使用规则：</strong><br />1.7月1日-9月30日，首次申请青岛银行美团信用卡的新户，未激活卡片前，可享受核卡日后60天内，使用美团“尝鲜特权”支付，在美团平台（美团/大众点评/美团外卖app）支付订单，笔笔随机立减。每日不限笔数，卡片激活后该权益自动失效；<br />2.参与活动用户如订单立减后，支付金额低于0元，则订单最低需要支付0.01元；<br />3.【笔笔随机立减】活动为已成功领取“尝鲜特权”权益的新户，在支付订单时，选择“青岛银行-尝鲜特权”方式支付，可享受该权益；激活卡片后，权益自动失效。单日不限立减次数。权益有效期为卡片批核后60天其中；<br />4.“尝鲜特权”是美团点评为部分优选美团信用卡用户提供的一种“先下单后付款”的专享特权，每位用户可在获得特权的60个自然日内，最高500元额度内使用特权，使用该特权在乙方平台消费的订单可统一延期至美团信用卡激活后自动完成在美团信用卡的支付扣款，也可由用户主动付款；<br />5.发生退款时，按实际支付金额退款，当次立减权益次数视为已使用，不返还、不补发；<br />6.本活动规定的权益不开发票、不设找零、不可兑换现金；<br />7.活动过程中，如果出现因网络攻击、黑客攻击、数据泄露等原因导致活动无法继续，美团有权利提前终止活动;<br />8.活动过程中，用户不得使用任何外挂、插件以及其他破坏活动规则、违背活动公平原则的方式参加本次活动（如批量注册、恶意购买、虚假分享、倒买倒卖、虚假交易等），用户和商户不得进行有组织的众包作弊行为，否则美团有权取消用户、商户参与活动资格，取消已经领取或者使用的抵用券，必要时取消后续参与美团任意活动的权利，并追究法律责任。<br /></p>\n\n<h2>三、美食周周送</h2>\n\n<p><strong>权益介绍：</strong>即日起至2019.9.1（下称“活动期”），使用青岛银行美团信用卡单周消费达到3笔68元，获赠总价值30元美团美食券。</p>\n\n<p><strong>使用规则：</strong><br />1.本活动仅限青岛银行美团信用卡持卡人参与；<br />2.活动期间，消费达标后第3天9:00至次周三24:00前，可到美团APP-“我的”-“美团信用卡”-“我的权益” -“用卡福利”页面领取美食券，如周一达标，当周周四9：00至次周三24:00前可领取；<br />3.未在上述规定时间内领取美食券，美食券自动作废，不再补发；<br />4.尝鲜特权交易不参加本活动；<br />5.本活动的“消费”不包含（既不计入达标笔数，也不计入达标金额）：<br />（1）预借现金、转账或分期交易；<br />（2）被撤销、退回或退货的消费或未入账（包括预授权交易）的消费，以及可以合理判定为套取活动奖励的虚假或不正常消费。<br />6.活动过程中，用户不得使用任何外挂、插件以及其他破坏活动规则、违背活动公平原则的方式参加本次活动（如批量注册、恶意购买、虚假分享、倒买倒卖、虚假交易等），用户和商户不得进行作弊行为，否则青岛银行有权取消用户、商户参与活动资格，取消已经领取或者使用的抵用券，必要时取消用户、商户后续参与青岛银行任意活动的权利，并追究用户、商户的法律责任；<br />7.总价值30元美团美食券，限在美团APP及大众点评APP购买美食、外卖频道内产品时，使用青岛银行美团信用卡支付使用，单笔订单满60元可使用。使用期限为发放日起7天内，过期未使用，该美食券作废，不再补发；<br />8.如用券后订单金额小于等于0，则最低需要用户支付0.01元；<br />9.美团美食券限本账户使用，不支持将券转移至其他账户；同一美团账号、手机号、移动设备、银行卡、支付账号、身份证以及其他信息相同均视为同一人；<br />10.美团美食券不开发票、不设找零、不可兑换现金；<br />11.购买产品且使用美团美食券后如发生退货退款，已抵扣的美食券权益金额不予退还，按照用户实际支付的金额退款；<br />12.如已产生消费发生退货，则该笔消费不计入达标笔数中；若奖励已发放至账户，青岛银行有权取消该账户所有人后续参加本活动资格；<br />13.您可以通过美团点评旗下APP-“我的”-“我的钱包”-“现金券”页面，查看持卡人本次活动已获得的美食券的过期时间、使用要求等；<br />14.活动过程中，如果出现因网络攻击、黑客攻击、数据泄露等原因导致活动无法继续，青岛银行及美团点评有权利提前终止活动。</p>\n<h2>四、消费赚零花</h2>\n <p><strong>权益介绍：</strong>青岛银行美团信用卡持卡人（以下简称“持卡人”）使用青岛银行美团信用卡（以下简称“信用卡”）指定消费可自动累积美团平台提供给客户的专享积分，即美团零花（以下简称“零花”），每笔消费满10元人民币可累积1个零花，零花将累积在持卡人绑定的美团账户中，可在美团平台兑换现金券。</p>\n\n <p><strong>累积规则：</strong><br />1.持卡人每笔信用卡指定消费满10元人民币可自动累积1个零花，以此类推，不足10元的，不累积零花。<br />2.持卡人生日当天使用信用卡进行指定消费可享10倍美团零花，即用户持卡人除享受标准累积规则外，还可额外享受9倍美团零花累积奖励；<br />3.持卡人每人每月最高累积5万个零花；<br />4.指定消费累积的美团零花在该消费入账日的次日生效，持卡人可在美团APP、大众点评APP“美团信用卡”频道查询；<br />5.指定消费包括非特定类别的消费以及通过美团快捷支付、支付宝快捷支付消费；<br />6.特定类别的消费不予累积零花，包括但不限于房地产、汽车销售、批发类、公共事业类以及《不累积零花商户类别代码》中所列特定商户类别的消费。以上信息将根据相关机构增减的商户类型不时做出调整，请以青岛银行网站www.qdccb.com公布的信息为准。<br />7.下列项目交易不予累积零花：<br />1)适用的信用卡章程或领用合约规定的各项利息和费用，包括但不限于信用卡年费、取现交易手续费、分期手续费、透支利息、违约金，以及其他信用卡收费等。<br />2)取现交易、转账交易、分期交易。<br />8.持卡人发生信用卡退款，将自动扣除该笔退款对应金额所累积的美团零花。<br />9.美团零花不开发票、不设找零、不可兑换现金。<br /></p>\n\n <p><strong>使用规则：</strong><br />1.零花在生效后的次年12月31日失效，持卡人可在美团APP、大众点评APP“美团信用卡”频道查询具体使用规则并以最新发布的规则为准。<br />2.因使用美团零花兑换的产品和服务纠纷，由持卡人与提供该产品和服务的商户以及美团平台（美团APP、大众点评APP、美团外卖APP）协商解决。<br />3.如持卡人对美团零花使用规则有任何疑问，请咨询美团平台。</p>","detailBenifitTitle":"青岛银行美团信用卡","bankId":"bqd","detailBenifitTitleImg":"https://p1.meituan.net/scarlett/e48e37ad8463968ea9ed619c83635dc87674.png","cardMetaId":4,"benefitDetailIcon":"https://p0.meituan.net/scarlett/7d53d1911f389efaf4b7706446e28cec4482.png","loadingPageApplyBtnPic":"https://p0.meituan.net/scarlett/b020bab8eecdcaf7d6c49d85942937fe3327.png","width":625,"height":2500},"message":"操作成功"}}
    </script>
  
<link rel="stylesheet" type="text/css" href="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:bfd8949e/static/css/client-views-detail-vue.db5ec97fd51148b3b5f5.css"><script charset="utf-8" src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:bfd8949e/static/js/client-views-detail-vue.2c0b2d0b5d7fa22f91d1.js"></script></head>

<body class="hairline" cz-shortcut-listen="true">
  <div id="app"><div class="loading" style="display: none;"><div class="progress-ring" style="width: 30px; height: 30px; animation: 0.72s linear 0s infinite normal none running rotate;"><svg viewBox="0 0 1060 1060"><path d="M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0" class="progress-ring-hover" style="fill: none; stroke: rgb(233, 232, 234); stroke-width: 60px;"></path> <path d="M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0" class="progress-ring-layer" style="stroke: rgb(49, 188, 173); stroke-dashoffset: 1744.44px; stroke-width: 61px;"></path></svg> </div></div> <div class="error-page" style="display: none;"><i class="icon icon-error"></i> <p class="message">系统有点忙，请稍后再试</p> <div class="tap-button"><div class=" btn-line"><button text="点击重试" class="btn">点击重试</button></div></div></div> <div class="card-detail default-bg"><div class="detail-modal" style="display: none;"><div class="detail-modal-mask"></div> <div class="detail-modal-content"><div class="detail-modal-header"><div class="detail-modal-title"><div class="detail-modal-img-wrap default-bg"><img src="https://p1.meituan.net/scarlett/e48e37ad8463968ea9ed619c83635dc87674.png" alt="" class="detail-modal-img"></div></div></div> <div class="detail-modal-body"><div class="detail-modal-shtml-scroll"><div class="detail-modal-shtml"><h2>一、美食天天减6元</h2>

 <p><strong>权益介绍：</strong>2019年7月1日-2019年9月30日，首次申请青岛银行美团信用卡的新户，核卡日后60天内激活，可享受激活日后60天使用该卡片，通过美团支付，在美团平台（美团/大众点评/美团外卖app）支付外卖或美食订单，每日首笔，立减6元，天天订，天天减。</p>

 <p><strong>使用规则：</strong><br>1.活动时间为:7月1日-9月30日，限首次申请青岛银行美团信用卡用户参与；<br>2.该活动必须通过美团支付并使用青岛银行美团信用卡支付外卖或美食订单，订单最低需要支付0.01元；<br>3.美食天天减活动，同一用户，每日首单享受1次，当日未使用的次数不累计至次日（同一美团账号、手机号、移动设备、银行卡、支付账号、身份证以及其他信息相同均视为同一用户），权益有效期为卡片批核后60天内激活，激活日后60天有效；<br>4.发生退款时，按实际支付金额退款，当次立减权益次数视为已使用，不返还、不补发；<br>5.本活动规定的权益不开发票、不设找零、不可兑换现金；<br>6.活动过程中，如果出现因网络攻击、黑客攻击、数据泄露等原因导致活动无法继续，美团有权利提前终止活动；<br>7.活动过程中，用户不得使用任何外挂、插件以及其他破坏活动规则、违背活动公平原则的方式参加本次活动（如批量注册、恶意购买、虚假分享、倒买倒卖、虚假交易等），用户和商户不得进行有组织的众包作弊行为，否则美团有权取消用户、商户参与活动资格，取消已经领取或者使用的抵用券，必要时取消后续参与美团任意活动的权利，并追究法律责任。<br></p>

<h2>二、笔笔随机立减</h2>

 <p><strong>权益介绍：</strong>2019年7月1日至2019年9月30日，首次申请青岛银行美团信用卡的新户，使用“尝鲜特权”通过美团支付，在美团平台（美团/大众点评/美团外卖app）支付订单，笔笔随机立减，该权益卡片激活后自动失效。“尝鲜特权”使用的有效期为系统自动发放或用户主动领取起60日内，过期自动失效，不再补发。</p>

 <p><strong>使用规则：</strong><br>1.7月1日-9月30日，首次申请青岛银行美团信用卡的新户，未激活卡片前，可享受核卡日后60天内，使用美团“尝鲜特权”支付，在美团平台（美团/大众点评/美团外卖app）支付订单，笔笔随机立减。每日不限笔数，卡片激活后该权益自动失效；<br>2.参与活动用户如订单立减后，支付金额低于0元，则订单最低需要支付0.01元；<br>3.【笔笔随机立减】活动为已成功领取“尝鲜特权”权益的新户，在支付订单时，选择“青岛银行-尝鲜特权”方式支付，可享受该权益；激活卡片后，权益自动失效。单日不限立减次数。权益有效期为卡片批核后60天其中；<br>4.“尝鲜特权”是美团点评为部分优选美团信用卡用户提供的一种“先下单后付款”的专享特权，每位用户可在获得特权的60个自然日内，最高500元额度内使用特权，使用该特权在乙方平台消费的订单可统一延期至美团信用卡激活后自动完成在美团信用卡的支付扣款，也可由用户主动付款；<br>5.发生退款时，按实际支付金额退款，当次立减权益次数视为已使用，不返还、不补发；<br>6.本活动规定的权益不开发票、不设找零、不可兑换现金；<br>7.活动过程中，如果出现因网络攻击、黑客攻击、数据泄露等原因导致活动无法继续，美团有权利提前终止活动;<br>8.活动过程中，用户不得使用任何外挂、插件以及其他破坏活动规则、违背活动公平原则的方式参加本次活动（如批量注册、恶意购买、虚假分享、倒买倒卖、虚假交易等），用户和商户不得进行有组织的众包作弊行为，否则美团有权取消用户、商户参与活动资格，取消已经领取或者使用的抵用券，必要时取消后续参与美团任意活动的权利，并追究法律责任。<br></p>

<h2>三、美食周周送</h2>

<p><strong>权益介绍：</strong>即日起至2019.9.1（下称“活动期”），使用青岛银行美团信用卡单周消费达到3笔68元，获赠总价值30元美团美食券。</p>

<p><strong>使用规则：</strong><br>1.本活动仅限青岛银行美团信用卡持卡人参与；<br>2.活动期间，消费达标后第3天9:00至次周三24:00前，可到美团APP-“我的”-“美团信用卡”-“我的权益” -“用卡福利”页面领取美食券，如周一达标，当周周四9：00至次周三24:00前可领取；<br>3.未在上述规定时间内领取美食券，美食券自动作废，不再补发；<br>4.尝鲜特权交易不参加本活动；<br>5.本活动的“消费”不包含（既不计入达标笔数，也不计入达标金额）：<br>（1）预借现金、转账或分期交易；<br>（2）被撤销、退回或退货的消费或未入账（包括预授权交易）的消费，以及可以合理判定为套取活动奖励的虚假或不正常消费。<br>6.活动过程中，用户不得使用任何外挂、插件以及其他破坏活动规则、违背活动公平原则的方式参加本次活动（如批量注册、恶意购买、虚假分享、倒买倒卖、虚假交易等），用户和商户不得进行作弊行为，否则青岛银行有权取消用户、商户参与活动资格，取消已经领取或者使用的抵用券，必要时取消用户、商户后续参与青岛银行任意活动的权利，并追究用户、商户的法律责任；<br>7.总价值30元美团美食券，限在美团APP及大众点评APP购买美食、外卖频道内产品时，使用青岛银行美团信用卡支付使用，单笔订单满60元可使用。使用期限为发放日起7天内，过期未使用，该美食券作废，不再补发；<br>8.如用券后订单金额小于等于0，则最低需要用户支付0.01元；<br>9.美团美食券限本账户使用，不支持将券转移至其他账户；同一美团账号、手机号、移动设备、银行卡、支付账号、身份证以及其他信息相同均视为同一人；<br>10.美团美食券不开发票、不设找零、不可兑换现金；<br>11.购买产品且使用美团美食券后如发生退货退款，已抵扣的美食券权益金额不予退还，按照用户实际支付的金额退款；<br>12.如已产生消费发生退货，则该笔消费不计入达标笔数中；若奖励已发放至账户，青岛银行有权取消该账户所有人后续参加本活动资格；<br>13.您可以通过美团点评旗下APP-“我的”-“我的钱包”-“现金券”页面，查看持卡人本次活动已获得的美食券的过期时间、使用要求等；<br>14.活动过程中，如果出现因网络攻击、黑客攻击、数据泄露等原因导致活动无法继续，青岛银行及美团点评有权利提前终止活动。</p>
<h2>四、消费赚零花</h2>
 <p><strong>权益介绍：</strong>青岛银行美团信用卡持卡人（以下简称“持卡人”）使用青岛银行美团信用卡（以下简称“信用卡”）指定消费可自动累积美团平台提供给客户的专享积分，即美团零花（以下简称“零花”），每笔消费满10元人民币可累积1个零花，零花将累积在持卡人绑定的美团账户中，可在美团平台兑换现金券。</p>

 <p><strong>累积规则：</strong><br>1.持卡人每笔信用卡指定消费满10元人民币可自动累积1个零花，以此类推，不足10元的，不累积零花。<br>2.持卡人生日当天使用信用卡进行指定消费可享10倍美团零花，即用户持卡人除享受标准累积规则外，还可额外享受9倍美团零花累积奖励；<br>3.持卡人每人每月最高累积5万个零花；<br>4.指定消费累积的美团零花在该消费入账日的次日生效，持卡人可在美团APP、大众点评APP“美团信用卡”频道查询；<br>5.指定消费包括非特定类别的消费以及通过美团快捷支付、支付宝快捷支付消费；<br>6.特定类别的消费不予累积零花，包括但不限于房地产、汽车销售、批发类、公共事业类以及《不累积零花商户类别代码》中所列特定商户类别的消费。以上信息将根据相关机构增减的商户类型不时做出调整，请以青岛银行网站www.qdccb.com公布的信息为准。<br>7.下列项目交易不予累积零花：<br>1)适用的信用卡章程或领用合约规定的各项利息和费用，包括但不限于信用卡年费、取现交易手续费、分期手续费、透支利息、违约金，以及其他信用卡收费等。<br>2)取现交易、转账交易、分期交易。<br>8.持卡人发生信用卡退款，将自动扣除该笔退款对应金额所累积的美团零花。<br>9.美团零花不开发票、不设找零、不可兑换现金。<br></p>

 <p><strong>使用规则：</strong><br>1.零花在生效后的次年12月31日失效，持卡人可在美团APP、大众点评APP“美团信用卡”频道查询具体使用规则并以最新发布的规则为准。<br>2.因使用美团零花兑换的产品和服务纠纷，由持卡人与提供该产品和服务的商户以及美团平台（美团APP、大众点评APP、美团外卖APP）协商解决。<br>3.如持卡人对美团零花使用规则有任何疑问，请咨询美团平台。</p></div></div> <i class="detail-modal-close-icon"></i></div></div></div> <div class="detail-big-img-container"><!----> <div class="detail-footer-user" style="display: none;"><div class="wrap"><span class="text"> 诚邀你申请美团信用卡</span></div></div> <div class="detail-image-wrap detail-big-img"><div class="detail-image" style="height: 30rem;"><img src="https://p1.meituan.net/scarlett/668beaf6331c274f69d7a27e24583feb293445.jpg@0_0_0_2500a.webp"></div></div></div> <img alt="" src="https://p0.meituan.net/scarlett/7d53d1911f389efaf4b7706446e28cec4482.png" class="detail-side-icon"> <img src="https://p0.meituan.net/scarlett/b020bab8eecdcaf7d6c49d85942937fe3327.png" alt="" class="apply-btn"> <!----></div></div>
  
    <script type="application/javascript" src="//www.dpfile.com/app/owl/static/owl_1.6.3.js" cross-origin="anonymous"></script>
    <script type="application/javascript" cross-origin="anonymous">
              // thunder首先会加载cat
              window._METRIC_CACHE_.push({
                name: 'thunderEnd',
                ts: Date.now()
              })
              var Owl = window.Owl
              var env = window.env
              Owl && Owl.start && Owl.start({
                devMode: env !== 'prod',
                project: 'fe-creditcard-apply', 
                resource: { 
                  sampleApi: 1
                },
                error: {
                  sample: 1,
                  combo: false
                },
                page: {
                  sample: 1
                },
                metric: {
                  sample: 1
                },
                autoCatch: {
                  ajax: true, 
                  page: true, 
                  js: true,
                  resource: true 
                },
                noScriptError: false,
                isSPA: true
              })
            </script>
    <script type="application/javascript" src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:bfd8949e/static/js/venders~main.e46e60a7f9390e75ed49.js"></script>
    <script type="application/javascript" src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:bfd8949e/static/js/main.4a0aea6bc9a8102fabb3.js"></script>
    <script type="application/javascript" src="//analytics.meituan.net/analytics.js"></script>
  
  <script>
    !(function(){
      var env = window.env
      var search = location.search
      if(env === 'test' && search.indexOf('fillFormData=true') > -1) {
        var script = document.createElement('script')
        script.src = 'http://portal-portm.meituan.com/fin/test/creditcard/fill-form-data'
        document.querySelector('#app').appendChild(script)
      }
    })();
  </script>


</body></html>`, 
  /<img.*?src=".*?"/g,
'match')