"use strict";
{

  const imgList = new Vue({
    el:"#imgList",
    data:{
      items:[
        "img/toilet_paper_center.jpg",
        "img/toilet_paper_center.jpg",
        "img/toilet_paper_center.jpg",
        "img/toilet_paper_center.jpg"
      ]
    }
  })

  const buttons = new Vue({
    el:"#buttons",
    data:{
      
    },
    methods:{
      tapL(){
        imgList.$data.items.push("img/toilet_paper_center.jpg");
        console.log("伸ばす");
      },
      tapS(){
        imgList.$data.items.pop("img/toilet_paper_center.jpg");
        console.log("縮める");
      }
    }
  })
}