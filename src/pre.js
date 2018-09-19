var preRun = function() {
  FS.init(Stdin, Stdout, Stderr);
}

var Module = {
  noInitialRun: true,
  preRun: preRun,
};
