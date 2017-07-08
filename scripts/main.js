requirejs(["helpers/utils", "one", "two", "three"], function(utils, one, two, three) {
    //This function is called when scripts/helpers/utils.js is loaded.
    //If utils.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helpers/utils".
});
