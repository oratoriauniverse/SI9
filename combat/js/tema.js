$(document).ready(function () {
    $('.pie_progress').asPieProgress({
        namespace: 'pie_progress'
    });

    $('#modalArcadia').on('shown.bs.modal', function () {
        $('.pie_progress_Arcadia').asPieProgress('start');
    });
    $('#modalArcadia').on('hidden.bs.modal', function () {
        $('.pie_progress_Arcadia').asPieProgress('reset');
    });

    $('#modalArcana').on('shown.bs.modal', function () {
        $('.pie_progress_Arcana').asPieProgress('start');
    });
    $('#modalArcana').on('hidden.bs.modal', function () {
        $('.pie_progress_Arcana').asPieProgress('reset');
    });

    $('#modalArsonist').on('shown.bs.modal', function () {
        $('.pie_progress_Arsonist').asPieProgress('start');
    });
    $('#modalArsonist').on('hidden.bs.modal', function () {
        $('.pie_progress_Arsonist').asPieProgress('reset');
    });

    $('#modalB-Best').on('shown.bs.modal', function () {
        $('.pie_progress_B-Best').asPieProgress('start');
    });
    $('#modalB-Best').on('hidden.bs.modal', function () {
        $('.pie_progress_B-Best').asPieProgress('reset');
    });

    $('#modalBannermaster').on('shown.bs.modal', function () {
        $('.pie_progress_Bannermaster').asPieProgress('start');
    });
    $('#modalBannermaster').on('hidden.bs.modal', function () {
        $('.pie_progress_Bannermaster').asPieProgress('reset');
    });

    $('#modalBatman').on('shown.bs.modal', function () {
        $('.pie_progress_Batman').asPieProgress('start');
    });
    $('#modalBatman').on('hidden.bs.modal', function () {
        $('.pie_progress_Batman').asPieProgress('reset');
    });


    $('#modalBattleborn').on('shown.bs.modal', function () {
        $('.pie_progress_Battleborn').asPieProgress('start');
    });
    $('#modalBattleborn').on('hidden.bs.modal', function () {
        $('.pie_progress_Battleborn').asPieProgress('reset');
    });
});
