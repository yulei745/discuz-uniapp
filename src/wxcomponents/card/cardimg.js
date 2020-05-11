/* eslint-disable prettier/prettier */
/* eslint-disable class-methods-use-this */
export default class LastMayday {
  palette(obj) {
    return (
          {
            "width": "700px",
            "height": "908px",
            "background": "#ffffff",
            "views": [
              {
                "type": "image",
                "url": `${obj.recoimg}`,
                "css": {
                  "width": "80px",
                  "height": "80px",
                  "top": "40px",
                  "left": "40px",
                  "rotate": "0",
                  "borderRadius": "40px",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "mode": "scaleToFill"
                }
              },
              {
                "type": "text",
                "text": `${obj.reconame}`,
                "css": {
                  "color": "#000000",
                  "background": "rgba(0,0,0,0)",
                  "width": `${obj.namewidth}px`,
                  "height": "40.04px",
                  "top": "41px",
                  "left": "140px",
                  "rotate": "0",
                  "borderRadius": "",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "padding": "0px",
                  "fontSize": "28px",
                  "fontWeight": "bold",
                  "maxLines": "2",
                  "lineHeight": "40.40400000000001px",
                  "textStyle": "fill",
                  "textDecoration": "none",
                  "fontFamily": "",
                  "textAlign": "left"
                }
              },
              {
                "type": "text",
                "text": "推荐",
                "css": {
                  "color": "#000000",
                  "background": "rgba(0,0,0,0)",
                  "width": "57px",
                  "height": "40.04px",
                  "top": "41px",
                  "left": `${obj.namewidth+160}px`,
                  "rotate": "0",
                  "borderRadius": "",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "padding": "0px",
                  "fontSize": "28px",
                  "fontWeight": "400",
                  "maxLines": "2",
                  "lineHeight": "40.40400000000001px",
                  "textStyle": "fill",
                  "textDecoration": "none",
                  "fontFamily": "",
                  "textAlign": "left"
                }
              },
              {
                "type": "text",
                "text": `${obj.username}在 ${obj.useratttype}  中发表的  内容`,
                "css": {
                  "color": "#333333",
                  "background": "rgba(0,0,0,0)",
                  "width": "482px",
                  "height": "34.32px",
                  "top": "88px",
                  "left": "140px",
                  "rotate": "0",
                  "borderRadius": "",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "padding": "0px",
                  "fontSize": "24px",
                  "fontWeight": "400",
                  "maxLines": "2",
                  "lineHeight": "34.632000000000005px",
                  "textStyle": "fill",
                  "textDecoration": "none",
                  "fontFamily": "",
                  "textAlign": "left"
                }
              },
              {
                "type": "rect",
                "css": {
                  "background": "#F7F7F7",
                  "width": "136px",
                  "height": "50px",
                  "top": "584px",
                  "left": "40px",
                  "rotate": "0",
                  "borderRadius": "6px",
                  "shadow": "",
                  "color": "#F7F7F7"
                }
              },
              {
                "type": "text",
                "text": "女神视频",
                "css": {
                  "color": "#777777",
                  "background": "rgba(0,0,0,0)",
                  "width": "97px",
                  "height": "27.119999999999997px",
                  "top": "595px",
                  "left": "60px",
                  "rotate": "0",
                  "borderRadius": "",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "padding": "0px",
                  "fontSize": "24px",
                  "fontWeight": "400",
                  "maxLines": "1",
                  "lineHeight": "26.64px",
                  "textStyle": "fill",
                  "textDecoration": "none",
                  "fontFamily": "",
                  "textAlign": "left"
                }
              },
              {
                "type": "rect",
                "css": {
                  "background": "#F9FAFC",
                  "width": "700px",
                  "height": "200px",
                  "top": "708px",
                  "left": "0px",
                  "rotate": "0",
                  "borderRadius": "",
                  "shadow": "",
                  "color": "#F9FAFC"
                }
              },
              {
                "type": "image",
                "url": `${obj.userweixincode}`,
                "css": {
                  "width": "140px",
                  "height": "140px",
                  "top": "738px",
                  "left": "40px",
                  "rotate": "0",
                  "borderRadius": "0px",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "mode": "scaleToFill"
                }
              },
              {
                "type": "text",
                "text": "长按识别小程序码查看详情",
                "css": {
                  "color": "#333333",
                  "background": "rgba(0,0,0,0)",
                  "width": "337px",
                  "height": "31.639999999999997px",
                  "top": "768px",
                  "left": "210px",
                  "rotate": "0",
                  "borderRadius": "",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "padding": "0px",
                  "fontSize": "28px",
                  "fontWeight": "400",
                  "maxLines": "1",
                  "lineHeight": "31.080000000000002px",
                  "textStyle": "fill",
                  "textDecoration": "none",
                  "fontFamily": "",
                  "textAlign": "left"
                }
              },
              {
                "type": "text",
                "text": "来自DISCUZ!Q",
                "css": {
                  "color": "#AAAAAA",
                  "background": "rgba(0,0,0,0)",
                  "width": "164px",
                  "height": "27.119999999999997px",
                  "top": "815px",
                  "left": "210px",
                  "rotate": "0",
                  "borderRadius": "",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "padding": "0px",
                  "fontSize": "24px",
                  "fontWeight": "400",
                  "maxLines": "1",
                  "lineHeight": "26.64px",
                  "textStyle": "fill",
                  "textDecoration": "none",
                  "fontFamily": "",
                  "textAlign": "left"
                }
              },
              {
                "type": "image",
                "url": `${obj.usercontimg[0]}`,
                "css": {
                  "width": "620px",
                  "height": "402px",
                  "top": "161px",
                  "left": "40px",
                  "rotate": "0",
                  "borderRadius": "",
                  "borderWidth": "",
                  "borderColor": "#000000",
                  "shadow": "",
                  "mode": "scaleToFill"
                }
              }
            ]
          }
        );
      }
    }
    