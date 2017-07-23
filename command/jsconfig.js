({
    packages: [{
            name: 'moment',
            location: '../libs/moment',
            main: 'moment'
        }],
    //在打包压缩时将会把include中的模块合并到主文件中
    include: ['css', 'layer', 'toastr', 'fast', 'backend', 'table', 'form', 'dragsort', 'drag', 'drop', 'addtabs', 'selectpage'],
    paths: {
        'lang': "empty:",
        'form': 'require-form',
        'table': 'require-table',
        'upload': 'require-upload',
        'validator': 'require-validator',
        'drag': 'jquery.drag.min',
        'drop': 'jquery.drop.min',
        'echarts': 'echarts.min',
        'echarts-theme': 'echarts-theme',
        'adminlte': 'adminlte',
        'bootstrap-table-commonsearch': 'bootstrap-table-commonsearch',
        'bootstrap-table-template': 'bootstrap-table-template',
        //
        // 以下的包从bower的libs目录加载
        'jquery': '../libs/jquery/dist/jquery.min',
        'bootstrap': '../libs/bootstrap/dist/js/bootstrap.min',
        'bootstrap-datetimepicker': '../libs/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min',
        'bootstrap-select': '../libs/bootstrap-select/dist/js/bootstrap-select.min',
        'bootstrap-select-lang': '../libs/bootstrap-select/dist/js/i18n/defaults-zh_CN',
        'bootstrap-table': '../libs/bootstrap-table/dist/bootstrap-table.min',
        'bootstrap-table-export': '../libs/bootstrap-table/dist/extensions/export/bootstrap-table-export.min',
        'bootstrap-table-mobile': '../libs/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile',
        'bootstrap-table-lang': '../libs/bootstrap-table/dist/locale/bootstrap-table-zh-CN',
        'tableexport': '../libs/tableExport.jquery.plugin/tableExport.min',
        'dragsort': '../libs/dragsort/jquery.dragsort',
        'qrcode': '../libs/jquery-qrcode/jquery.qrcode.min',
        'sortable': '../libs/Sortable/Sortable.min',
        'addtabs': '../libs/jquery-addtabs/jquery.addtabs',
        'slimscroll': '../libs/jquery-slimscroll/jquery.slimscroll',
        'summernote': '../libs/summernote/dist/lang/summernote-zh-CN.min',
        'validator-core': '../libs/nice-validator/dist/jquery.validator',
        'validator-lang': '../libs/nice-validator/dist/local/zh-CN',
        'plupload': '../libs/plupload/js/plupload.min',
        'toastr': '../libs/toastr/toastr',
        'jstree': '../libs/jstree/dist/jstree.min',
        'layer': '../libs/layer/src/layer',
        'cookie': '../libs/jquery.cookie/jquery.cookie',
        'cxselect': '../libs/jquery-cxselect/js/jquery.cxselect',
        'template': '../libs/art-template/dist/template-native',
        'selectpage': '../libs/selectpage/selectpage',
    },
    // shim依赖配置
    shim: {
        'addons': ['backend'],
        'bootstrap': ['jquery'],
        'bootstrap-table': {
            deps: [
                'bootstrap',
//                'css!../libs/bootstrap-table/dist/bootstrap-table.min.css'
            ],
            exports: '$.fn.bootstrapTable'
        },
        'bootstrap-table-lang': {
            deps: ['bootstrap-table'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-export': {
            deps: ['bootstrap-table', 'tableexport'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-mobile': {
            deps: ['bootstrap-table'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-advancedsearch': {
            deps: ['bootstrap-table'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-commonsearch': {
            deps: ['bootstrap-table'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-template': {
            deps: ['bootstrap-table', 'template'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'tableexport': {
            deps: ['jquery'],
            exports: '$.fn.extend'
        },
        'slimscroll': {
            deps: ['jquery'],
            exports: '$.fn.extend'
        },
        'adminlte': {
            deps: ['bootstrap', 'slimscroll'],
            exports: '$.AdminLTE'
        },
        'bootstrap-datetimepicker': [
            'moment/locale/zh-cn',
//            'css!../libs/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
        ],
        'bootstrap-select': ['css!../libs/bootstrap-select/dist/css/bootstrap-select.min.css', ],
        'bootstrap-select-lang': ['bootstrap-select'],
        'summernote': ['../libs/summernote/dist/summernote.min', 'css!../libs/summernote/dist/summernote.css'],
//        'toastr': ['css!../libs/toastr/toastr.min.css'],
        'jstree': ['css!../libs/jstree/dist/themes/default/style.css', ],
        'plupload': {
            deps: ['../libs/plupload/js/moxie.min'],
            exports: "plupload"
        },
//        'layer': ['css!../libs/layer/build/skin/default/layer.css'],
//        'validator-core': ['css!../libs/nice-validator/dist/jquery.validator.css'],
        'validator-lang': ['validator-core'],
//        'selectpage': ['css!../libs/selectpage/selectpage.css'],
    },
    map: {
        '*': {
            'css': '../libs/require-css/css.min'
        }
    },
    waitSeconds: 30,
    charset: 'utf-8', // 文件编码
    optimizeCss: "standard",
    optimize: "none", //可使用uglify|closure|none
    removeCombined: false,
    baseUrl: "../assets/js/", //JS文件所在的基础目录
    name: "require-backend", //来源文件,不包含后缀
    out: "../assets/js/require-backend.min.js"  //目标文件
});