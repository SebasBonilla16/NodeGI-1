const express = require("express");
const app = express();
const employees = require("./employees.json");
const port = 5000;

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get('/employees/:employeeID', (req, res) => {
  const { employeeID } = req.params;
  const employee = employees.find((emp) => emp.employeeID === parseInt(employeeID));

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
