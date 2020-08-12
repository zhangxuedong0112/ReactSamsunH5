const { NODE_ENV } = process.env;

/* vconsole 生产环境开启需要单独写 */
if(NODE_ENV == "development"){
    let vconsole = require("vconsole");
    new vconsole()
}

export const dva = {
    config: {
        onError(err: ErrorEvent) {
        err.preventDefault();
        console.error(err.message);
        },
    },
};
