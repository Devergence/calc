(function () {
    $("#monitor").on('click', function(){
        if ($("#monitor").prop('checked')==true){
            $("#monitor").val(200);
        }else{
            $("#monitor").val(0);
        }

    });
    $("#network").on('click', function () {
        if ($("#network").prop('checked') == true) {
            $("#network").val(500);
        } else {
            $("#network").val(0);
        }

    });
}());
$(document).ready(function () {
    $('.calc_wrapper select, .calc_wrapper input').change(function(){
        var qualityNum = parseInt($('#quality').val());
        var rangeNum = parseInt($('#range').val());
        var streetNum = parseInt($('#street').val());
        var homeNum = parseInt($('#home').val());
        var monNum = parseInt($('#monitor').val());
        var netwoNum = parseInt($('#network').val());
        var montajNum = parseInt($('#montaj').val());
        var endNum = qualityNum + rangeNum + streetNum + homeNum + montajNum + monNum + netwoNum;
        $('#result').text(endNum);
    });
});