cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        
        cocos: {
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
        this.background.color = cc.color(255,0,0);
    },

    // called every frame
    update: function (dt) {

    },
});
