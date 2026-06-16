const fs = require('fs');
const path = require('path');

const {
  saveExecutionHistory,
  compareExecution
} = require('./executionHistory');

const {
  generateDashboard
} = require('./generateReportDashboard');

function generateExecutionReport(results) {

  const passed =
    results.totalPassed || 0;

  const failed =
    results.totalFailed || 0;

  const skipped =
    results.totalPending || 0;

  const currentRun = {

    runDate:
      new Date().toISOString(),

    projectName:
      'CYPRESS_JS_FRAMEWORK',

    passed,

    failed,

    skipped,

    duration:
      `${(
        results.totalDuration / 1000
      ).toFixed(2)}s`
  };

  const comparison =
    compareExecution(currentRun);

  saveExecutionHistory(
    currentRun
  );

  const reportData = {

    projectName:
      currentRun.projectName,

    currentRun,

    previousRun:
      comparison?.previous ||
      null,

    comparison
  };

  const reportsDir = path.join(
    process.cwd(),
    'reports'
  );

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(
      reportsDir,
      { recursive: true }
    );
  }

  fs.writeFileSync(
    path.join(
      reportsDir,
      'comparison-data.json'
    ),
    JSON.stringify(
      reportData,
      null,
      2
    )
  );

  generateDashboard();

  console.log(
    '\n===== Dashboard Summary ====='
  );

  console.log(
    `Total: ${
      passed +
      failed +
      skipped
    }`
  );

  console.log(
    `Passed: ${passed}`
  );

  console.log(
    `Failed: ${failed}`
  );

  console.log(
    `Skipped: ${skipped}`
  );

  console.log(
    'Execution dashboard generated'
  );
}

module.exports = {
  generateExecutionReport
};