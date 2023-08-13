var express = require('express');
var statementService = require('../services/statement.service');
var router = express.Router();

router.post('/zerodha', registerCourse);

module.exports = router;

async function registerCourse(req, res) {
   let buffer = await statementService.getStatement(req.body);
   res.setHeader('Content-Disposition', 'attachment; filename=StatementDocument.docx');
   res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
   res.end(buffer);
}