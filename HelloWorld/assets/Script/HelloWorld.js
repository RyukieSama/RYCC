cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',

        color : cc.color(255,0,0),

        cocos: {
            default : null,
            type : cc.Sprite
        },

        backimg : {
            default : null,
            type : cc.Sprite
        },

        background: {
          default : null,
          type : cc.Widget
        },
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        // this.background.color = this.color;
    },

    // called every frame
    update: function (dt) {

    },
});
