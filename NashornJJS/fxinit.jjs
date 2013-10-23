GLOBAL = this;
javafx = Packages.javafx;
com.sun.javafx.application.LauncherImpl.launchApplication(
(Java.extend(javafx.application.Application, {
    init: function() {
        // FX packages and classes must be defined here because they may not be
        // viable until launch time.
        Stage          = javafx.stage.Stage;
        scene          = javafx.scene;
        Scene          = scene.Scene;
        Group          = scene.Group;
        chart          = scene.chart;
        control        = scene.control;
        Button         = control.Button;
        StackPane      = scene.layout.StackPane;
        FXCollections  = javafx.collections.FXCollections;
        ObservableList = javafx.collections.ObservableList;
        Chart          = chart.Chart;
        CategoryAxis   = chart.CategoryAxis;
        NumberAxis     = chart.NumberAxis;
        BarChart       = chart.BarChart;
        XYChart        = chart.XYChart;
        Series         = chart.XYChart$Series;
        Data           = chart.XYChart$Data;
        TreeView       = control.TreeView;
        TreeItem       = control.TreeItem;
        if (GLOBAL.init) {
            init();
        }
    },
    start: function(stage) {
        if (GLOBAL.start) {
            start(stage);
        }
    },
    stop: function() {
        if (GLOBAL.stop) {
            stop();
        }
    }
})).class, new (Java.type("java.lang.String[]"))(0));