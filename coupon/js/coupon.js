//优惠券使用规则
function showRule(){
    $zhw.alert("<p>1.每个用户ID每天最多可领取单个店铺3张优惠券</p>"
                +"<p>2.此类优惠券为各商户自愿发送，有效期不一致，请及时查看并使用</p>"
                +"<p>3.此类优惠券可与平台红包叠加使用，不可跨店使用</p>"
                +"<p>4.根据撤单情况，红包返还，可继续使用，红包扣除，则失效</p>",function(){
    },"关闭");
    $('.zhw-pop-alert').width(410);
    $('.zhw-pop-alert').find('.pop-tip-text').text('优惠券使用规则');
}
