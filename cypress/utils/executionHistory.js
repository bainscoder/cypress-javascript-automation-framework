const fs = require('fs');
const path = require('path');

const historyPath = path.join(
  process.cwd(),
  'reports',
  'execution-history.json'
);

function getHistory() {

  if (!fs.existsSync(historyPath)) {
    return [];
  }

  const data = fs.readFileSync(
    historyPath,
    'utf-8'
  ).trim();

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

function saveExecutionHistory(executionData) {

  const history = getHistory();

  history.push(executionData);

  // Keep last 10 executions
  const latestRuns = history.slice(-10);

  fs.writeFileSync(
    historyPath,
    JSON.stringify(
      latestRuns,
      null,
      2
    )
  );

  console.log(
    'Execution history saved'
  );
}

function compareExecution(current) {

  const history = getHistory();

  if (history.length === 0) {
    return null;
  }

  const previous =
    history[history.length - 1];

  return {

    previous,

    passedDiff:
      current.passed -
      previous.passed,

    failedDiff:
      current.failed -
      previous.failed,

    skippedDiff:
      current.skipped -
      previous.skipped
  };
}

module.exports = {
  getHistory,
  saveExecutionHistory,
  compareExecution
};