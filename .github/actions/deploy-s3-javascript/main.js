const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
function run() {
  // 1) get some input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });
  console.log(bucket, bucketRegion, distFolder);

  // upload files


  core.notice('hello from my custom JS action!');
}
run();
