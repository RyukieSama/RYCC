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

    },

    // use this for initialization
    onLoad: function () {
        let index = this.getRandNumber(1,12);
        this.label.string = "Name:avatar" + index.toString();
        this.avatar.spriteFrame = this.avatars[index-1];
    },

    getRandNumber : function (min,max) {
        return Math.floor(min+Math.random()*(max-min));
    },

    //
    // init : function () {
    //
    // },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
