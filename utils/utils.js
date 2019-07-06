var txapi_base_url = "https://api.tianapi.com";  //天行数据接口域名
var txapi_key = "";  //请填写你在天行数据www.tianapi.com获得apikey

/** 新闻分类也可以通过频道列表接口动态获取
 *  接口地址 https://api.tianapi.com/channellist/
 *  看到说明：https://www.tianapi.com/apiview/65
 */

var NewsTypeList = [
  {
    NewsTypeId: 7,
    TypeName: '国内',
  },
  {
    NewsTypeId: 5,
    TypeName: '社会',
  },
  {
    NewsTypeId: 10,
    TypeName: '娱乐',
  },
  {
    NewsTypeId: 12,
    TypeName: '体育',
  },
  {
    NewsTypeId: 20,
    TypeName: 'NBA',
  },
  {
    NewsTypeId: 30,
    TypeName: 'CBA',
  },
  {
    NewsTypeId: 13,
    TypeName: '科技',
  },
  {
    NewsTypeId: 33,
    TypeName: '动漫',
  },
  {
    NewsTypeId: 21,
    TypeName: 'VR',
  },
  {
    NewsTypeId: 23,
    TypeName: '移动',
  },
  {
    NewsTypeId: 26,
    TypeName: '足球',
  },
  {
    NewsTypeId: 27,
    TypeName: '军事',
  },
  {
    NewsTypeId: 32,
    TypeName: '财经',
  },
  {
    NewsTypeId: 18,
    TypeName: '旅游',
  },
  {
    NewsTypeId: 35,
    TypeName: '汽车',
  },
  {
    NewsTypeId: 19,
    TypeName: '苹果',
  },
  {
    NewsTypeId: 31,
    TypeName: '游戏',
  },
  {
    NewsTypeId: 8,
    TypeName: '国际',
  },
  {
    NewsTypeId: 24,
    TypeName: '创业',
  }
]

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  txapi_base_url: txapi_base_url,
  txapi_key: txapi_key,
  NewsTypeList: NewsTypeList
}
