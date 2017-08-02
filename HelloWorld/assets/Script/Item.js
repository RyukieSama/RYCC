cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        //名称
        label : {
            default : null,
            type : cc.Label
        },

        //头像
        avatar : {
            default : null,
            type : cc.Sprite
        },

        //头像数组
        avatars : {
            default : [],
            type : cc.SpriteFrame
        },

        text : "avatar",

        coverButton : {
            default : null,
            type : cc.Button
        },

    },

    // use this for initialization
    onLoad: function () {
        let index = this.getRandNumber(1,12);
        this.label.string = "Name:avatar" + index.toString();
        this.avatar.spriteFrame = this.avatars[index-1];
        this.coverButton.node.on('click', this.callback, this);
    },

    getRandNumber : function (min,max) {
        return Math.floor(min+Math.random()*(max-min));
    },

    callback: function (event) {
        //这里的 event 是一个 EventCustom 对象，你可以通过 event.detail 获取 Button 组件

        var result = jsb.reflection.callStaticMethod("RYOcTest", "ryLog:", "HAHAHAHAHAHAH");

        //do whatever you want with button
        //另外，注意这种方式注册的事件，也无法传递 customEventData
    }

    //
    // init : function () {
    //
    // },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
