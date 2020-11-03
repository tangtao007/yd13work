class Testcontroller {
    constructor() {}
    actionIndex() {
        return async (ctx, next) => {
            ctx.body = {
                data: {
                    "name": "tangtao"
                }
            }
        };
    }
}

module.exports = Testcontroller;