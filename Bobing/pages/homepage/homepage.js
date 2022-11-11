// pages/homepage/homepage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
/**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.hideTabBar({
          animation: true,
        })
    },
    JumpToRule:function(){
        wx.switchTab({
          url: '../rule/rule',
        })
    },

    JumpToSingle:function(){
        wx.navigateTo({
          url: '../singlemode/singlemode',
        })
    },

    JumpToMulti:function(){
        wx.navigateTo({
          url: '../multimode/multimode',
        })
    }
})

