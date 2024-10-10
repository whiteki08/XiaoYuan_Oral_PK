/**
 * @fileoverview Script to modify JSON response
 */

let body = $response.body;
let obj = JSON.parse(body);

function modifyAnswers(questions) {
    for (let question of questions) {
        question.answer = "1";
        question.answer[0] = "1";
    }
}

if (obj.examVO && obj.examVO.questions) {
    modifyAnswers(obj.examVO.questions);
}

$done({ body: JSON.stringify(obj) });
