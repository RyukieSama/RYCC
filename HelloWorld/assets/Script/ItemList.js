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

        cell : {
            default : null,
            type : cc.Prefab
        },

        scrollView : {
            default : null,
            type : cc.ScrollView
        },

        totalCount : 0,

    },

    // use this for initialization
    onLoad: function () {
        this.cells = [];

        for (let i = 0; i < this.totalCount; ++i) {
            let heroSlot = this.addHeroSlot();
            this.cells.push(heroSlot);
        }
    },

    // init : function (home) {
    //     // this.homeSlots = [];
    //     this.cells = [];
    //     // this.home = home;
    //
    //     for (let i = 0; i < this.totalCount; ++i) {
    //         let heroSlot = this.addHeroSlot();
    //         this.cells.push(heroSlot);
    //     }
    //
    // },

    addHeroSlot: function () {
        let cell = cc.instantiate(this.cell);
        this.scrollView.content.addChild(cell);
        return cell;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
