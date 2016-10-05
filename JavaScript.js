$(document).ready(function(){
    var add1, add2, add3, add4, add5;
  
    JFCustomWidget.subscribe("ready", function () {
        add1 = JFCustomWidget.getWidgetSetting('url1');
        add2 = JFCustomWidget.getWidgetSetting('url2');
        add3 = JFCustomWidget.getWidgetSetting('url3');
        add4 = JFCustomWidget.getWidgetSetting('url4');
        add5 = JFCustomWidget.getWidgetSetting('url5');
        $('.google').attr('href', add1);
        $('.instagram').attr('href', add2);
        $('.facebook').attr('href', add3);
        $('.twitter').attr('href', add4);
        $('.youtube').attr('href', add5);
    });
});