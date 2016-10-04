<template>
  <div class="pro-choose-main flex flex-cell-full">
      <div class="pro-view cell-1-3">
          <img src="//c1.mifile.cn/f/i/15/item/buyphone/mi5.jpg" alt="小米手机5" id="J_proImg">
      </div>
      <div class="pro-info cell">
          <div class="pro-title clearfix">
              <h1>
                  <span class="pro-name">购买小米手机5</span>
                  <span class="pro-price">1599元</span>
              </h1>
          </div>
          <p style="color:red;">重磅特惠，小米5特价1599元起！</p>
          <p></p>
          <div id="J_proStep">
            <div class="pro-choose-step">
              <div class="step-title"> 1. 选择版本 <i class="pro-version-desc-icon">!</i> <span class="pro-version-desc">高通骁龙820处理器 最高主频 1.8GHz，3GB内存，32GB容量，全网通3.0</span> </div>
              <ul class="step-list flex flex-direc-x flex-wrap flex-gutter">
                <li class="cell-1-2 active"><span class="step-list_item">标准版 3GB内存+32GB容量</span></li>
                <li class="cell-1-2"><span class="step-list_item">高配版 3GB内存+64GB容量</span></li>
                <li class="cell-1-2"><span class="step-list_item">尊享版 4GB内存+128GB容量</span></li>
              </ul>
            </div>
            <div class="pro-choose-step">
              <div class="step-title"> 2. 选择颜色 <i class="pro-version-desc-icon">!</i> <span class="pro-version-desc"></span> </div>
              <ul class="step-list flex flex-direc-x flex-gutter flex-wrap">
                <li class="cell-1-2" title="黑色 1599元">  <span class="step-list_item"><img src="//c1.mifile.cn/f/i/15/item/buyphone/mi4-icon-hei.png" alt="黑色">  黑色</span>  </li>
                <li class="cell-1-2" title="白色 1599元">  <span class="step-list_item"><img src="//c1.mifile.cn/f/i/15/item/buyphone/mi4-icon-bai.png" alt="白色">  白色</span>  </li>
                <li class="cell-1-2" title="金色 1599元">  <span class="step-list_item"><img src="//c1.mifile.cn/f/i/15/item/buyphone/note3-icon-jin.png" alt="金色">  金色</span>  </li>
                <li class="cell-1-2" title="淡紫色 1599元">  <span class="step-list_item"><img src="//c1.mifile.cn/f/i/15/item/buyphone/minote-icon-fen.png" alt="淡紫色">  淡紫色</span>  </li>
              </ul>
            </div>
            <div class="pro-choose-step choose-step_package"> <h3 class="step-title">3. 添加特惠配件套装</h3>
              <ul class="step-list flex flex-direc-x flex-gutter flex-wrap">
                <li class="cell-1-4" title="必备套装 71元"> <span class="step-list_item">必备套装 <br> 71元 <i>省11 元</i></span> </li>
                <li class="cell-1-4" title="实用套餐 195元"> <span class="step-list_item">实用套餐 <br> 195元 <i>省31 元</i></span> </li>
                <li class="cell-1-4" title="全能套装 238元"> <span class="step-list_item">全能套装 <br> 238元 <i>省13 元</i></span> </li>
                <li class="cell-1-4"> <span class="step-list_item">裸机<br><i>不享受优惠</i></span> </li>
              </ul>
            </div>
          </div>
          <div class="choose-result-msg">
              <span class="msg-tit">您选择了以下产品:</span>
              <p class="msg-bd">小米手机5 标准版 3GB内存+32GB容量</p>
          </div>
          <div class="pro-choose-result hide"></div>
          <div class="pro-choose-result">
              <a href="javascript:void(0);" class="btn btn-large btn-dakeLight">下一步</a>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:'cart-product',
    data(){
      return {

      }
    }
  }
</script>

<style>
.modal-opensale-register {
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px
}

.modal-opensale-register .modal-body {
    text-align: center
}

.modal-opensale-register .modal-body h4 {
    margin: 10px 0 20px;
    font-size: 30px;
    font-weight: normal;
    color: #ff6700
}

.modal-opensale-register .modal-body p {
    margin: 0 auto 20px
}

.modal-opensale-register .modal-body img {
    display: block;
    margin: 0 auto 30px;
    width: 100px
}

.modal-opensale-register .modal-body .btn {
    cursor: pointer
}

.breadcrumbs {
    display: none
}

.buy-choose-box {
    color: #333;
    -webkit-font-smoothing: antialiased
}

.buy-choose-box .hd {
    padding-top: 15px
}

.pro-nav-bar {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #dfdfdf
}

.pro-nav-bar li {
    float: left;
    _display: inline;
    height: 76px;
    line-height: 76px;
    margin: 0 0 -1px;
    list-style: none;
    text-align: center;
    font-size: 14px;
    border-bottom: 1px solid #dfdfdf;
    cursor: pointer
}

.pro-nav-bar li a {
    display: block;
    color: #333;
    outline: none
}

.pro-nav-bar .current {
    border-bottom-color: #333
}

.pro-nav-4 li {
    width: 25%
}

.pro-nav-5 li {
    width: 20%
}

.pro-nav-6 li {
    width: 16.66%
}

.pro-nav-7 li {
    width: 14.28%
}

.pro-nav-8 li {
    width: 12.5%
}

.pro-nav-9 li {
    width: 11.11111%
}

.pro-nav-10 li {
    width: 10%
}

.pro-nav-11 li {
    width: 9.09091%
}

.pro-nav-12 li {
    width: 8.33333%
}

.pro-choose-main {
    margin: 0 0 110px;
    position: relative
}

.show-package .pro-info {
    position: relative
}

.show-package .pro-info:before {
    content: "";
    position: absolute;
    top: 0;
    left: -50px;
    width: 0;
    height: 100%;
    border-left: 1px solid #dfdfdf;
    z-index: 2
}

.pro-view {
  padding-top: 30px;
    overflow: hidden;
}

.pro-view img {
    display: block;
    max-width: 100%;
    margin: 0 auto
}

.pro-info {
    margin-top: 60px;
    padding: 0 30px;
}

.pro-info .pro-title {
    height: 60px;
    margin-bottom: 25px;
    border-bottom: 1px solid #dfdfdf;
    position: relative
}

.pro-info .pro-title h1 {
    margin: 0;
    font-size: 30px;
    line-height: 56px;
    font-weight: normal
}

.pro-info .pro-title h1 i {
    font-style: normal;
    color: #f36701
}

.pro-info .pro-title .pro-name {
    float: left
}

.pro-info .pro-title .pro-price {
    margin-left: 10px;
    color: #ff6700
}

.pro-info .pro-title .pro-more {
    position: absolute;
    top: 26px;
    right: 0;
    color: #666;
    font-size: 12px
}

.pro-choose-step .step-title {
    height: 36px;
    line-height: 2;
    margin: 0;
    padding: 10px 0;
    font-weight: normal;
    font-size: 18px
}

.pro-choose-step .step-list {
    margin: 0 0 0 -.8em;
    padding: 0
}

.step-list_item {
    display: block;
    line-height: 48px;
    border: 1px solid #dfdfdf;
    list-style: none;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}

.pro-choose-step .step-list li .pro-price {
    color: #f36701
}

.pro-choose-step .step-list li img {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    vertical-align: middle
}

.pro-choose-step .step-list li i {
    font-style: normal;
    color: #f36701
}

.step-list li.active .step-list_item {
    border-color: #f36701
}

.pro-choose-step .step-list .disable,.pro-choose-step .step-list .lock {
    cursor: default;
    color: #8c8c8c
}

.pro-choose-step .step-list-2 li {
    width: 288px
}

.pro-choose-step .pro-version-desc-icon {
    display: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    vertical-align: initial;
    font-style: normal;
    font-size: 14px;
    border: 1px solid #757575;
    text-align: center;
    line-height: 19px;
    color: #757575;
    font-family: sans-serif
}

.pro-choose-step .pro-version-desc {
    display: inline-block;
    *zoom:1;*display: inline;
    margin-left: 12px;
    min-height: 20px;
    line-height: 1.5;
    font-size: 12px;
    color: #b0b0b0
}

.pro-choose-step .pro-version-desc a {
    display: inline-block;
    *zoom:1;*display: inline;
    color: #f36701
}

.pro-choose-step .pro-version-desc b {
    display: inline-block;
    *zoom:1;*display: inline;
    color: #ff6700
}
.choose-step_package li .step-list_item {
    line-height: 1.4;
    padding: 10px 0;
}
.pro-choose-result {
    padding-top: 15px
}

.pro-choose-result .btn {
  margin-right: 20px;
  text-align: center;
  font-size: 14px;
  background: #fff;
  border: 1px solid;
  color: #b0b0b0;
  padding: 0;
  border-radius: 0;
}

.pro-choose-result .btn-dake {
    cursor: default
}

.pro-choose-result .next-desc {
    font-size: 12px;
    color: #8c8c8c
}

.pro-choose-result .btn-coutdown i {
    font-style: normal;
    margin: 0 2px;
    cursor: default
}

.pro-choose-result .open-sale-msg {
    margin-top: 10px;
    color: #ff6700
}

.choose-result-msg {
    margin: 26px 0 10px
}

.choose-result-msg .msg-tit {
    line-height: 24px;
    color: #212121;
    font-size: 14px
}

.choose-result-msg .msg-bd {
    margin-top: 8px;
    line-height: 24px;
    color: #666;
    font-size: 12px
}

.choose-result-msg .msg-bd b {
    display: inline-block;
    *zoom:1;*display: inline;
    color: #ff6700
}

.package-list {
    border: 1px solid #dfdfdf;
    background-color: #fff
}

.package-list ul,.package-list li {
    margin: 0;
    padding: 0;
    list-style: none
}

.package-list .list {
    padding: 14px 0
}

.package-list .list .item {
    margin: 10px 0;
    float: left;
    _display: inline;
    width: 33.33%;
    height: 160px;
    text-align: center
}

.package-list .list .item-img {
    height: 100px;
    margin-bottom: 10px;
    overflow: hidden;
    _zoom: 1
}

.package-list .list .item-img img {
    width: 100px;
    height: 100px;
    background: url("//c1.mifile.cn/f/i/2014/cn/placeholder-80.png") no-repeat center center
}

.package-list .list .item-title {
    font-size: 12px;
    margin-bottom: 5px;
    padding: 0 10px
}

.package-list .list .item-versions {
    height: 18px;
    font-size: 0
}

.package-list .list .item-versions span {
    display: inline-block;
    *zoom:1;*display: inline;
    width: 14px;
    height: 14px;
    padding: 1px;
    margin: 0 2px;
    border: 1px solid #dfdfdf;
    cursor: pointer;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.package-list .list .item-versions span img {
    width: 14px;
    height: 14px
}

.package-list .list .item-versions .selected {
    border-color: #f36701
}

.pro-detail-box {
    border-top: 1px solid #dfdfdf;
    -webkit-font-smoothing: antialiased
}

.pro-detail-box .section {
    text-align: center;
    border-bottom: 1px solid #e0e0e0
}

.section-image {
    background-position: 50% 0;
    background-repeat: no-repeat;
    text-align: center;
    border-bottom: none !important
}

.section-image a {
    display: block;
    width: 1226px;
    margin: 0 auto;
    height: 100%;
    outline: none;
    border-bottom: 1px solid #e0e0e0
}

.section-image img {
    max-width: 1226px
}

.section-video {
    padding-bottom: 60px
}

.section-video a {
    display: inline-block;
    *zoom:1;*display: inline;
    outline: none
}

.section-video img {
    max-width: 1226px
}

.section-slider .slider {
    height: 700px;
    position: relative;
    overflow: hidden;
    _zoom: 1
}

.section-slider .slider .slide {
    width: 100%;
    height: 722px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -50%
}

.section-slider .slider .slide a {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center 0;
    background-repeat: no-repeat
}

.section-slider .slider .pagination {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
    text-align: center
}

.section-slider .slider .pagination .page {
    display: inline-block;
    *display: inline;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border: 1px solid #5c5c5c;
    border-radius: 10px;
    text-indent: -9999em;
    overflow: hidden;
    _zoom: 1;
    outline: 0;
    background-color: #fff;
    cursor: pointer
}

.section-slider .slider .pagination .active {
    background-color: #5c5c5c
}

.section-slider .slider .slide-previous,.section-slider .slider .slide-next {
    position: absolute;
    top: 0;
    left: 50%;
    width: 41px;
    height: 100%;
    background: url("//c1.mifile.cn/f/i/open/www/2014052801/slide-btn.png") no-repeat;
    opacity: 0.5;
    filter: alpha(opacity=50)\9;
    text-indent: -9999em;
    overflow: hidden;
    _zoom: 1;
    outline: 0;
    cursor: pointer;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.section-slider .slider .slide-previous:hover,.section-slider .slider .slide-next:hover {
    opacity: 1;
    filter: alpha(opacity=100)\9
}

.section-slider .slider .slide-previous {
    margin-left: -614px;
    background-position: 0 50%
}

.section-slider .slider .slide-next {
    margin-left: 571px;
    background-position: -41px 50%
}

.section-specs .spec-title {
    padding: 80px 0 60px;
    text-align: center;
    font-size: 30px;
    color: #424242;
    cursor: pointer;
    font-weight: normal;
    -webkit-user-select: none
}

.section-specs .spec-title span {
    margin: 0 10px
}

.section-specs .spec-title .arrow {
    display: inline-block;
    *zoom:1;*display: inline;
    width: 0;
    height: 0;
    _font-size: 0;
    _line-height: 1;
    margin-left: 10px;
    margin-bottom: -6px;
    border-width: 8px 6px;
    border-style: solid dashed dashed dashed;
    border-color: #d6d6d6 transparent transparent transparent;
    vertical-align: middle
}

.section-specs .spec-open {
    border-bottom: none
}

.section-specs .spec-open .arrow {
    margin-top: -12px;
    margin-bottom: 0;
    border-width: 8px 6px;
    border-style: dashed dashed solid dashed;
    border-color: transparent transparent #d6d6d6 transparent
}

.section-specs .spec-list .spec-item {
    float: left;
    width: 33.33%;
    text-align: left;
    border-top: 1px solid #e0e0e0
}

.section-specs .spec-list .spec-item-tit {
    margin-top: 42px;
    margin-bottom: 30px;
    color: #333;
    font-size: 20px;
    font-weight: 600
}

.section-specs .spec-list .spec-item-con,.section-specs .spec-list .spec-sub-item-con {
    line-height: 24px;
    color: #424242;
    font-size: 14px
}

.section-specs .spec-list .spec-item-con {
    margin-top: 10px;
    margin-right: 20px
}

.section-specs .spec-list .spec-sub-item {
    margin-top: 18px
}

.section-specs .spec-list .spec-sub-item-tit {
    margin-bottom: 12px;
    color: #333;
    font-size: 18px
}

.section-specs .spec-list .item-line {
    height: 42px;
    width: 100%;
    float: left
}

.section-acc {
    border-bottom: none !important;
    text-align: center
}

.section-acc .acc-title {
    padding: 90px 0 60px;
    font-size: 30px;
    color: #424242;
    line-height: 1.4
}

.section-acc ul,.section-acc li {
    margin: 0;
    padding: 0;
    list-style: none
}

.section-acc .list {
    overflow: hidden;
    _zoom: 1
}

.section-acc .list li {
    float: left;
    width: 33.33%;
    height: 390px;
    border-left: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    margin-left: -1px;
    margin-bottom: -1px
}

.section-acc .list li .pro-link {
    outline: none;
    display: inline-block;
    *zoom:1;*display: inline
}

.section-acc .list .item-info {
    margin-top: 50px
}

.section-acc .list .item-info h3 {
    margin: 0;
    font-weight: normal;
    font-size: 20px;
    color: #333
}

.section-acc .list .item-info .desc {
    margin: 0;
    font-size: 12px;
    color: #333
}

.section-acc .list .item-info .price {
    margin: 10px 0 0;
    font-size: 16px;
    color: #f36701
}

.section-acc .list .item-info .price em {
    font-style: normal;
    font-size: 36px;
    font-family: 'Avenir', 'Microsoft Yahei', arial
}

.section-acc .list .item-pic img {
    width: 220px;
    height: 220px
}

.section-acc .list .first {
    height: 780px
}

.section-acc .list .first img {
    width: 330px;
    height: 600px
}

.xm-home .section-image a {
    border-bottom: none
}

.section-banner {
    height: 385px;
    background-position: center 0;
    background-repeat: no-repeat
}

.header-bar {
    _display: none;
    position: fixed;
    top: -100px;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #dfdfdf;
    background-color: rgba(255,255,255,0.8);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ccffffff", endColorstr="#ccffffff")\9;
    *background-color: #fff;
    text-align: right;
    z-index: 10;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out
}

.header-bar .container {
    padding: 15px 0;
    color: #333
}

.header-bar .container .btn {
    margin-left: 20px
}

.header-bar .container i {
    font-style: normal
}

.buyChoose-footer-banner {
    height: 380px
}

.header-bar-active {
    top: 0
}

ul,li,dl,dt,dd,p,em {
    list-style: none;
    font-style: normal;
    margin: 0px;
    padding: 0px
}

.icon-checkbox {
    display: inline-block;
    *zoom:1;*display: inline;
    width: 14px;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border: 1px solid #757575;
    background: #fff;
    vertical-align: middle;
    color: #fff
}

.icon-checkbox-checked {
    color: #83c44e
}

.modal-bigtap-tip .modal-body {
    text-align: center;
    color: #757575
}

.choose-pre-login {
    margin-top: 20px;
    color: #757575
}

.choose-pre-login a {
    color: #ff6700
}

.bubble-tip {
    color: #e53935
}

.bubble-tip i {
    display: inline-block;
    *zoom:1;*display: inline;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    text-align: center;
    background-color: #ff6700;
    color: #fff;
    font-style: normal;
    cursor: pointer
}

.bubble-tip-content {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    -webkit-box-shadow: 0 18px 30px rgba(0,0,0,0.18);
    box-shadow: 0 18px 30px rgba(0,0,0,0.18)
}

.bubble-tip-content p {
    margin: 10px 20px
}

.bubble-tip-content:before,.bubble-tip-content:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: dashed dashed solid;
    overflow: hidden;
    _zoom: 1;
    position: absolute;
    left: 50%
}

.bubble-tip-content:before {
    top: -8px;
    margin-left: -10px;
    border-width: 0 10px 8px;
    border-color: transparent transparent #e0e0e0;
    z-index: 1
}

.bubble-tip-content:after {
    top: -7px;
    margin-left: -8px;
    border-width: 0 8px 7px;
    border-color: transparent transparent #fff;
    z-index: 2
}

.buy-choose-box-bigpro .pro-choose-address {
    margin-left: -14px
}

.buy-choose-box-bigpro .pro-choose-address .form-section {
    float: left;
    _display: inline;
    width: 264px;
    margin: 0 0 14px 14px
}

.buy-choose-box-bigpro .pro-choose-address .form-section .xm-select {
    width: 264px;
    margin-right: 0
}

.buy-choose-box-bigpro .address-info-box {
    padding: 16px;
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #424242
}

.buy-choose-box-bigpro .address-info-box .title {
    font-size: 16px;
    color: #424242
}

.buy-choose-box-bigpro .address-info-box .address-info {
    margin-top: 14px
}
.btn-large {
    width: 178px;
    height: 48px;
    line-height: 48px;
}

</style>
