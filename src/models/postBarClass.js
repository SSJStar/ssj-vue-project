class postBarClass {
  constructor(bar_id, type, title, body, img_urls) {
    this.bar_id = bar_id; //编号
    this.type = type; //类型
    this.title = title; //标题
    this.body = body; //内容，前期先简单点，后期考虑图文结合
    this.img_urls = img_urls; //图片地址数组
  }
}
export default postBarClass;
