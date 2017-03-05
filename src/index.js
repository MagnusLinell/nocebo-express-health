
const deployed = new Date();

const validateOptions = (options) => {
    if (!options || !options.pkg ) {
        throw Error("argument {pkg: [package.json as text]} must be set");
    }
    if (!options.pkg.name) {
        throw Error("argument {pkg: {name: [name of project]}} must be set");
    }
    if (!options.pkg.version) {
        throw Error("argument {pkg: {version: [version of project]}} must be set");
    }
};

const health = (options) => {
    return (req, res, next) => {
        res.json({
            "status": "OK",
            "name": options.pkg.name,
            "version": options.pkg.version,
            "deployedAt": deployed
        });
    }
};

module.exports = (options) => {
    validateOptions(options);
    return health(options);
};
