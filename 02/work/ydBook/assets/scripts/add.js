class Create {
    constructor() {
        this.btn = $("#js-btn");
    }
    fn() {
        this.btn.click(yd.throttle(function () {
            console.log("点击测试");
            fetch("xxxx");
        },1000));
    }
}
export default Create;